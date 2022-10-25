import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo_1 from '../../../logo_1.png';
import { FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant="outline-primary">LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='fs-4 text-light text-decoration-none me-2' to="/login">Login</Link>
                                        <Link className='fs-4 text-light text-decoration-none' to="/register">Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Image
                                            src={user?.photoURL}
                                            style={{ height: '30px' }}
                                            roundedCircle
                                        ></Image>
                                    </OverlayTrigger>

                                    :
                                    <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default Header;