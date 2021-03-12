import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

const HomeScreen = () => {

    if (isMobile) {
        return (
            <Container fluid className="homeContainer-m text-center">
                <h3>Company POS System</h3>
                <Card.Text style={{ fontSize: "1.4em" }}>
                    Sign in to access system
                        </Card.Text>
                <Button variant="primary" className="login-btn">Login</Button>
            </Container>
        )
    } else {
        return (
            <Container fluid className="homeContainer-b">
                <Row>
                    <Col className="col-3"></Col>
                    <Col className="col-6 title">
                        <h3>Company POS System</h3>
                        <Card.Text style={{ fontSize: "1.4em" }}>
                            Sign in to access system
                        </Card.Text>
                        <Button variant="primary" className="login-btn">Login</Button>
                    </Col>
                    <Col className="col-3"></Col>
                </Row>
            </Container>
        )
    }
}

export default HomeScreen
