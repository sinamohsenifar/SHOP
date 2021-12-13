import React from 'react'
import { Navbar, Nav, Form,Container, FormControl, Button } from 'react-bootstrap'


function Header() {
        return (
            <header>
                <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
                    <Container fluid>
                        <Navbar.Brand href="/">Cena Shop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                                <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>

                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-sm-2"
                                    aria-label="Search"
                                />
                                <Button variant="secondary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }

export default Header