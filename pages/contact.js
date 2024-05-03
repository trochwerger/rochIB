import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Contact() {
  const formAPI = process.env.NEXT_PUBLIC_FORM_API;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = formAPI;
    const json = JSON.stringify(data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
                className={errors.name ? "is-invalid" : ""}
              />
              {errors.name && <p>This field is required</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
                className={errors.email ? "is-invalid" : ""}
              />
              {errors.email && <p>This field is required</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                {...register("message", { required: true })}
                className={errors.message ? "is-invalid" : ""}
              />
              {errors.message && <p>This field is required</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <Row>
        <Col>
          <p>
            <strong>Email: </strong>info@rochib.com
          </p>
          <h4>Phone: 647000-0000</h4>
        </Col>
      </Row>
    </>
  );
}
