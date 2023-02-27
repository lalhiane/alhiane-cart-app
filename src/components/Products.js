import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/slices/productsSlice";

import { addToCart } from "../store/slices/cartSlice";

import { Col, Container, Row } from "react-bootstrap";

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import Spinner from 'react-bootstrap/Spinner';

function Products() {

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(_ => {

        dispatch(fetchProducts());

    }, []);

    let cards = products === "pending" ? (

        <div className="loader">

            <Spinner animation="border" role="status">

                <span className="visually-hidden">Loading...</span>

            </Spinner>
            
        </div>

    ) : products.map(product => {

        const { id, title, price, description, category, image } = product;

        return (

            <Col xxl={ 3 } lg={ 4 } md={ 6 } className="mb-4" key={ id }>
                
                <Card style={{ height: "100%" }} className="p-3">

                    <Card.Img
                        
                        variant="top"
                        
                        src={image}

                        style={{ height: "300px" }}
                    
                    />
                    
                    <Card.Body>
                        
                        <Card.Title className="title mb-3">{title}</Card.Title>

                        <h4 className="category mb-3">{ category }</h4>
                        
                        <span className="price mb-3">${ price }</span>
                        
                        <Card.Text className="mb-3">

                            {description.substr(0, 100)}...

                        </Card.Text>
                        
                        <Button
                            
                            variant="primary"

                            onClick={_ => dispatch(addToCart(product))}
                        
                        >
                            
                            Add To Cart
                        
                        </Button>
                        
                    </Card.Body>
                    
                </Card>

            </Col>

        );

    });

    return (

        <Container>

            { products !== "pending" ? <h2 className="pb-3 pt-8">Products</h2> : "" }

            <Row>{ cards }</Row>

        </Container>

    );

}

export default Products;