import React from 'react';
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import {Container} from 'react-bootstrap'



function HomeScreen() {
    return (
        <main>
        <Container>
            <h1>Home Screen</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
        </main>
    )
}

export default HomeScreen