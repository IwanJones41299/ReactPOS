import React from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

const HomeScreen = () => {
    if(isMobile){
        return(
            <Container fluid>
                <h1>Mobile</h1>
            </Container>
        )
    }else{
        return(
            <Container fluid className="homeContainer-b text-center">
                <h3 className="homeTitle">Company POS System</h3>
                <Card.Text style={{ fontSize: "1.4em", color: "#ffffff" }}>Welcome Team!</Card.Text>
                <Card.Text style={{ fontSize: "1.4em", color: "#ffffff" }}>Sign in to access system</Card.Text>
            </Container>
        )
    }
}

export default HomeScreen