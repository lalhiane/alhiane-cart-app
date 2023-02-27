import { useDispatch, useSelector } from "react-redux";

import { clearCart, deleteFromCart } from "../store/slices/cartSlice";

import { Button, Container, Table } from "react-bootstrap";

import Image from 'react-bootstrap/Image';

function Cart() {

    const cartProducts = useSelector(state => state.cart);

    const dispatch = useDispatch();

    let totalPrice = cartProducts.reduce((acc, product) => {

        return acc + (product.price * product.quantity);

    }, 0);

    let tableRows = cartProducts.map(cartProduct => {

        const { id, title, price, description, category, image, quantity }
            = cartProduct;

        return (

            <tr key={ id }>

                <td>{ id }</td>

                <td>{ title }</td>

                <td>{ category }</td>

                <td>{ price }</td>

                <td>{ description.substr(0, 20) }...</td>
                
                <td>

                    <Image src={image} style={{ width: "100%", height: "100px" }} />

                </td>

                <td>{ quantity }</td>

                <td>

                    <Button
                        
                        variant="danger"
                        
                        onClick={_ => dispatch(deleteFromCart(cartProduct))}>

                        Delete

                    </Button>

                </td>

            </tr>

        );

    });

    return (

        <Container>

            <h2 className="pb-3 pt-8">Cart Products</h2>

            <div className="top-of-cart mb-4">

                <h4>Total Price: ${ totalPrice.toFixed(2) }</h4>

                <Button onClick={ _ => dispatch(clearCart()) }>Clear Cart</Button>

            </div>

            <Table striped bordered hover>

                <thead>

                    <tr>

                        <th>Id</th>

                        <th>Title</th>

                        <th>Category</th>

                        <th>Price</th>

                        <th>Description</th>

                        <th>Image</th>

                        <th>Quantity</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>{ tableRows }</tbody>
                
            </Table>

        </Container>

    );

}

export default Cart;