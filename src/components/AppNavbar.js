import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function AppNavbar() {

    const cartProducts = useSelector(state => state.cart);

    return (

        <Navbar bg="light" expand="lg" fixed='top'>

            <Container>

                <Link to="/" className='navbar-brand'>React-Bootstrap</Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        
                        <Link to="/" className='nav-link'>Products</Link>
                        
                        <Link to="/cart" className='nav-link'>
                            
                            Cart - {cartProducts.length}
                        
                        </Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

}

export default AppNavbar;