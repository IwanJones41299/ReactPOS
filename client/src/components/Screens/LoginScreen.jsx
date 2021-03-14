import React from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

const LoginScreen = () => {

    const Login = (e) => {
        e.preventDefault(); //to stop page refreshing
        console.log('User Logged in'); //testing purpose only, delete for production
    }

    if (isMobile) {
    return (
      <>
        <Container fluid className="homeContainer-m text-center">
          <h3>Company POS System</h3>
          <h1>LOGO</h1>
        </Container>
      </>
    );
    } else {
    return (
      <>
        <Container fluid className="homeContainer-b">
          <Row>
            <Col className="col-3"></Col>
            <Col className="col-3 title text-center">
            <h3>Company POS System</h3>
            {/* Company Logo here */}
            <h1 className="pt-3">LOGO</h1> 
            </Col>
            <Col className="col-3 loginForm">
                <Form onSubmit={Login}>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                            {/* Add username image */}
                                <InputGroup.Text>Login</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="username..." />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                            {/* Add password image */}
                                <InputGroup.Text>Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="username..." />
                        </InputGroup>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block login-btn" style={{marginTop: "2rem"}}>Login</Button>
                </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default LoginScreen;