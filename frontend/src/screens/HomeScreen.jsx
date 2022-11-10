import React from "react"
import products from "../products"
import { Row, Col } from "react-bootstrap"
import Product from "../componets/Product"
const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
