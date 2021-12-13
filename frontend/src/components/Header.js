import React from 'react'
import { Navbar, Nav, Form, Container, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">Cena Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart text-warning'></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link ><i className='fas fa-user text-warning'></i>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="#">
                                <Nav.Link disabled>Link</Nav.Link>
                            </LinkContainer>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl

                                type="search"
                                placeholder="Search"
                                className="me-sm-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
