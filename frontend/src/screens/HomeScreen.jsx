import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../componets/Product";
import { listProducts } from "../actions/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container>
          <h1>Latest products</h1>
          {loading ? (
            <h2>loading</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <Row>
              {products.map((product, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <h3>{product.name}</h3>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
    </>
  );
};

export default HomeScreen;
