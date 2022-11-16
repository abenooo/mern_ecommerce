import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"
// if you choose props
// const Product = (props) => {
const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.id}`}>
          {/* if u use props */}
          {/* <a href={`/product/${props.product._id}`}> */}
          <Card.Img src={product.image} variant='top' />
        </Link>
        {/*product name */}
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          {/* review */}
          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            //   color='red'
            />
          </Card.Text>
          {/* price */}
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
