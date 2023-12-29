import React from "react";
import ProductsCard from "./ProductsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = ({ products }) => {
  console.log(products);

  return (
    <div >
      <Container className="shopHeader me-auto justify-content-center shadow-lg p-3 mt-5 mb-5 bg-white rounded">
        <h1 className="bg-dark p-3 ">Spend less. Smile more.</h1>
       
        <p className="px-5 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Container>
      <div>
        <Container>
          <Row >
            {products.map((item) => (
              <Col  className="p-2 shadow-sm" xs={12} md={6} lg={4}>
                <ProductsCard key={item.id} product={item} />
              </Col>
            ))}{" "}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
