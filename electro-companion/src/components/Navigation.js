import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src='/logo.png' alt='logo' className='logo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#">Home</Nav.Link>
                                <NavDropdown title="Shop by category" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Mobile ➕ Accesories</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Laptop ➕ Accesories</NavDropdown.Item>
                                    <NavDropdown.Item href="#">TV ➕ Entertainment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Camera</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Smart Technology</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Trending
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Sell</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </Form>
                            <FontAwesomeIcon className='icons' icon={faCartPlus} />
                            <FontAwesomeIcon className='icons' icon={faCircleUser} />
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </React.Fragment>
        )
    }
}

export default Navigation;