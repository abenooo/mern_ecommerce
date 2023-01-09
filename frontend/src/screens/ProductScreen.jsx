import { Form, Link } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  ListGroupItem,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Rating from "../componets/Rating"
import { useState, useEffect } from "react"
import Message from "../componets/Message.js"
import Loader from "../componets/Loader.js"
import { useParams } from "react-router-dom"
import { listProductDetails } from "../actions/productActions"
const ProductScreen = (history) => {
  // create qty and assign 0 default
  const [qty, setQty] = useState([0])
  // cretae empty  state
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  const addToCartHandler = () => {
    history.push(`/cart/{id}?qty=${qty}`)
  }
  return (
    <>
      <Container>
        <Link className='btn btn-light my-3 ' to='/'>
          Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>{product.name}</ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>

                <ListGroup>
                  <h6>Price $ {product.price}</h6>
                </ListGroup>
                <ListGroup>
                  <h6>Description {`${product.description}`}</h6>:
                </ListGroup>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroupItem>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>

                {/* status */}
                <ListGroup variant='flush'>
                  <ListGroupItem>
                    <Row>
                      <Col>Status</Col>
                      <Col>
                        <strong>
                          $
                          {product.countInStock > 0
                            ? "In stock"
                            : "Out of stack"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {/* drop down using react boostrap  */}

                  {/* {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )} */}

                  <h1>select quantity</h1>
                  <select>
                    {[...Array(product.countInStock)].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>
                    })}
                  </select>

                  <ListGroup.Item>
                    <div className='d-grid'>
                      <Button
                        className='btn btn-block'
                        type='button'
                        onClick={addToCartHandler}
                        // disable add to cart button if the product is out of stock
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default ProductScreen
