import React from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css'; // <-- make sure this file exists

const AboutUs = () => {
  return (
    <Container className="mt-5 mb-5">
      <small className="text-muted">Home &gt; About Us</small>
      <h2 className="mt-3 fw-bold">Bluestock is mobile app for stock market learning, analytics & club</h2>
      <p className="text-muted">
        We are passionate about helping you succeed in the stock market by providing cutting-edge tools and a supportive
        community of traders. Join us on this journey, and let's make your stock trading experience better.
      </p>

      <Row className="text-center mt-5 mb-5">
        <Col md={4}>
          <Card className="p-4 bg-primary text-white rounded-4 shadow-sm">
            <h3>5 Thousand</h3>
            <p>Customers</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 bg-primary text-white rounded-4 shadow-sm">
            <h3>20+</h3>
            <p>Team Members</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 bg-primary text-white rounded-4 shadow-sm">
            <h3>4.9 ⭐</h3>
            <p>Rating</p>
          </Card>
        </Col>
      </Row>

      <h4 className="text-center mt-5">TRADERS TALK</h4>
      <h2 className="text-center fw-bold mb-4">Recent News</h2>

      <Row className="text-center mb-5">
        <Col md={4}>
          <Card className="p-3">
            <h6 className="text-danger">Business Standard</h6>
            <p>Rs 20 trillion & rising: AUM of active equity mutual funds surges</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h6> Medium</h6>
            <p>Bluestock is a mobile app for stock market learning, analytics, and club.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h6 className="text-primary"> BW BUSINESSWORLD </h6>
            <p>Mutual Funds Experience Fourfold Surge in NFO Collections, Re 22,000 Cr in Q2</p>
          </Card>
        </Col>
        <p className="text-center mt-3 text-primary">Media & Press Release ⟶</p>
      </Row>
      

      <Card className="bg-primary text-white p-5 mb-5 rounded-4 shadow-sm text-center">

        <h4>Want to join us?</h4>
        <p>
          We're taking complicated stuff and making it super simple. Our teams are full of smart and savvy folks
          working on challenging tasks.
        </p>
        <p>And we're always looking for customer-obsessed people. Think you're customer-focused enough? Write to us at <b>hello@bluestock.in</b></p>
        
        {/* Custom Styled Button */}
        <button className="apply-btn mt-3">APPLY NOW</button>
  </Card>



      <h2 className="text-center fw-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Bluestock?</Accordion.Header>
          <Accordion.Body>
            Bluestock is a mobile platform for stock market learning, analytics, and community support.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What platforms does Bluestock support?</Accordion.Header>
          <Accordion.Body>Android and iOS mobile devices.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is there educational content on the app?</Accordion.Header>
          <Accordion.Body>
            Yes, we offer detailed lessons, webinars, and interactive content.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is Bluestock free to use?</Accordion.Header>
          <Accordion.Body>Bluestock offers both free and premium features.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How can I get technical support for the app?</Accordion.Header>
          <Accordion.Body>
            Contact us via hello@bluestock.in or through the app's support section.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AboutUs;
