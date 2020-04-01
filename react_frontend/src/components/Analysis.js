import React from "react";
import { Container, Row, Col, Label, Input } from "reactstrap";

const Analysis = ({ title, path }) => {
  return (
    <Container className="m-0 mb-0" fluid>
      <h2>{`${title}(${path})`}</h2>
      <Row>
        <Col className="px-0" xl="12">
          <Row>
            <Label>훈련원 이름</Label>
            <Input></Input>
            <Label>훈련원 이름</Label>
            <Input></Input>
          </Row>
        </Col>
        <Col xl="8"></Col>
      </Row>
    </Container>
  );
};

export default Analysis;
