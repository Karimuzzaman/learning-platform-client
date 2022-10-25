import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo_1 from '../../../logo_1.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo_1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link className='fs-4 text-info text-decoration-none' to='/'>Programming Master</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='fs-4 text-light text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link className='fs-4 text-light text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='fs-4 text-light text-decoration-none' to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link className='fs-4 text-light text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default Header;