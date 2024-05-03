import React from "react";
import Link from "next/link";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainNav() {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    setValue("search", router.query.search || "");
  }, [router.query.search, setValue]);

  function onSubmit(data) {
    console.log(data.search);
    router.push(`/artwork?title=true&q=${data.search}`);
  }

  return (
    <>
      <Navbar className="fixed-top navbar-light bg-white">
        <Container fluid>
          <Navbar.Brand className="user-select-none text-black" href="/">
            Roch IB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="mx-auto">
              <Link href="/mission" passHref legacyBehavior>
                <Nav.Link className="m-2">About</Nav.Link>
              </Link>
              <Link href="/services" passHref legacyBehavior>
                <Nav.Link className="m-2">Services</Nav.Link>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Nav.Link className="m-2">Projects</Nav.Link>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link className="m-2">Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </>
  );
}
