import React from "react";
import { Image, Row, Col } from "react-bootstrap";

export default function mission() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Image src="/oilIndustry.jpg" fluid rounded alt="Buildings" />
        </Col>
        <Col
          md={6}
          className="justify-content-center "
          style={{ display: "flex", flexDirection: "column", height: "50vh" }}
        >
          <h3>Who We Are</h3>
          <br />
          <p>
            With our specialized expertise and extensive network, we facilitate
            connections between Canadian equipment companies and the thriving
            markets of Latin America. From concept to implementation, we&apos;re
            committed to delivering top-notch engineering solutions that drive
            success and growth for our clients.
          </p>
          <br />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <h3>Mission, Vision, and Values</h3>
          <br />
          <p>
            At RochIB, our mission is to provide innovative engineering and
            construction solutions that exceed our clients&apos; expectations. We are
            committed to delivering exceptional results with integrity,
            professionalism, and a relentless pursuit of excellence. By
            leveraging our expertise and creativity, we aim to contribute
            positively to the communities we serve and the industries we operate
            in.
          </p>
          <br />
        </Col>
      </Row> */}
      <Row className="">
        <Col
          className="justify-content-center align-items-center bg-slate-400 p-5"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3 className="text-white">Our Mission</h3>
          <p className="text-white">
            At RochIB, our mission is to be the premier facilitator of
            engineering solutions for the oil and gas industry, bridging the gap
            between Canadian equipment companies and the dynamic markets of
            Latin America. We are dedicated to delivering innovative, reliable,
            and sustainable solutions that drive success and growth for our
            clients. By fostering strategic partnerships and leveraging our
            expertise, we empower Canadian equipment companies to thrive in
            Latin America&apos;s ever-evolving energy landscape.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <h4>Our Values</h4>
      </Row>
      <br />
      <Row>
        <Col md={6}>
          <p>
            <strong>Excellence</strong>
            <br />
            We are driven by a relentless pursuit of expertise and excellence,
            leveraging our deep industry knowledge and technical proficiency to
            deliver best-in-class engineering solutions that meet the unique
            needs of our clients.
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Integrity</strong>
            <br />
            We conduct our business with the highest standards of integrity,
            honesty, and transparency, building trust and fostering long-term
            relationships with our clients, partners, and stakeholders.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            <strong>Innovation</strong>
            <br />
            We embrace innovation as a cornerstone of our success, constantly
            pushing the boundaries of what&apos;s possible and pioneering new
            approaches to engineering challenges to deliver value-driven
            solutions.
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Client Focus</strong>
            <br />
            Our clients are at the heart of everything we do. We listen to their
            needs, understand their challenges, and tailor our solutions to
            exceed their expectations, delivering tangible results that drive
            their success and satisfaction.
          </p>
        </Col>
      </Row>
    </>
  );
}
