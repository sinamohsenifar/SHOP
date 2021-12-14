import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../products';
import { useParams } from 'react-router';





function ProductScreen() {
    let { id } = useParams();
    const product = products.find((p) => p._id === id)

    return (
        <main>
            <Container>
                <Link to='/' className='btn btn-secondary my-3'>Go Back</Link>
                <Row>
                    <Col lg={5} md={12}>
                        <Image src={product.image} alt={product.name} fluid='center' />
                    </Col>
                    <Col lg={4} md={12}>
                        <ListGroup >
                            <ListGroup.Item className='text-black'>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item className='text-black'>
                                <Rating value={product.rating} text={product.numReviews} color={'#f8e825'} />
                            </ListGroup.Item>
                            <ListGroup.Item className='text-success'>
                                <h3><span className='text-black'>Price:</span> ${product.price}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item className='text-black'>
                                <p>{product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={3} md={12}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col className='text-black'>
                                            Price:
                                        </Col>
                                        <Col className='text-black'>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col className='text-black'>
                                            Status:
                                        </Col>
                                        <Col className='text-black'>
                                            {product.countInStock > 0 ?  product.countInStock + ' In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Button disabled={product.countInStock === 0} className='btn btn-dark btn-lg btn-block' type='button'>Add To Cart</Button>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </main>
    )
}


export default ProductScreen