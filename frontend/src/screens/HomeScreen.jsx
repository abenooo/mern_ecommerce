import React from "react"
import { useEffect, useState } from "react"
// import products from "../products"
import axios from "axios"
import { Row, Col, Container } from "react-bootstrap"
import Product from "../componets/Product"
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // console.log("hello from useEffect")
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products")
      setProducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <main>
        <Container>
          <h1>Latest products</h1>
          <Row>
            {products.map((product,index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <h3>{product.name}</h3>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default HomeScreen
