import React from 'react';
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'




function Product({ product }) {
    // const product  = props.product
    return (
        // <div>
        //     <h2>{product.name}</h2>
        //     <p><i class="fas fa-industry text-danger">:</i><span className='text-success'> {product.brand}</span></p>
        //     <p>{product.description}</p>    
        // </div>
        <Card className='my-3 p-3 rounded'>
            <Link to={'/product/' + product._id}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={'/product/' + product._id}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3 text-black'>
                        {product.rating} from {product.numReviews}
                        <Rating value={product.rating} text={product.numReviews} color={'#f8e825'}/>
                    </div>
                </Card.Text>
                <Card.Text as='h3'>${product.price}</Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product