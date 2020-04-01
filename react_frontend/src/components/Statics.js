import React from "react";
import { Container, Row, Col, Label, Input } from "reactstrap";

const Statics = ({ title, path }) => {
  return (
    <Container>
      <h2>{`${title}(${path})`}</h2>
      <Row>
        <Col xl="4">
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

export default Statics;
