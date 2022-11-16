import { Link } from "react-router-dom"
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
import Rating from "../componets/Rating"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
const ProductScreen = () => {
  // cretae empty  state
 const [product, setProduct] = useState({});
 const {id} = useParams();
  useEffect(() => {
       
       const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${id}`)
        setProduct(data)
        console.log(data)
      }
      fetchProduct()
  }, [])
  return (
    <>
      <Container>
        <Link className='btn btn-light my-3 ' to='/'>
          Back
        </Link>

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
                        {product.countInStock > 0 ? "In stock" : "Out of stack"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroup.Item>
                  <div className='d-grid'>
                    <Button
                      className='btn btn-block'
                      type='button'
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
      </Container>
    </>
  )
}

export default ProductScreen
