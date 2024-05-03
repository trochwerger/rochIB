import React from "react";
import { Row, Col } from "react-bootstrap";

export default function services() {
  return (
    <>
      <Row>
        <Col md={6}>
          <h4>Construction Consulting</h4>
          <p></p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go
          </button>
        </Col>
        <Col md={6}>
          <h4>Equipment</h4>
          <p>
            When you choose RochIB, you're choosing reliability, expertise, and
            integrity. With years of industry experience and a reputation for
            excellence, we have earned the trust of clients across diverse
            sectors. From concept to completion, we're with you every step of
            the way, ensuring that your project is delivered on time, within
            budget, and to the highest standards of quality.
          </p>
        </Col>
      </Row>
    </>
  );
}
