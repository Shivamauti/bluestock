import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Community = () => {
  return (
    <Container className="mt-5 mb-5">

      {/* Breadcrumb */}
      <small className="text-muted">Home &gt; Community</small>

      {/* Hero Section */}
      <Row className="align-items-center mt-4">
        <Col md={6}>
          <h2 className="fw-bold">The Most Active Community of Traders & Investors</h2>
          <p className="text-muted">
            Join now to interact with thousands of active traders and investors to learn and share your knowledge on our buzzing forum.
          </p>
          <Button variant="primary">Join Our Community</Button>
        </Col>
        <Col md={6}>
          <img src="/images/community-chat-1.png" alt="Community Chat" className="img-fluid" />
        </Col>
      </Row>

      {/* Trading Club Section */}
      <Row className="align-items-center mt-5">
        <Col md={6}>
          <h4 className="fw-bold">be a part of trading & investments club</h4>
          <ul className="list-unstyled mt-3">
            <li>✅ Rich environment for knowledge exchange</li>
            <li>✅ Stay connected about the latest stock market</li>
            <li>✅ Access exclusive community events, webinars, and meet-ups</li>
          </ul>
        </Col>
        <Col md={6}>
          <Row className="g-2 text-center">
            <Col xs={4}><Card body className="shadow-sm">Dynamic Discussions</Card></Col>
            <Col xs={4}><Card body className="shadow-sm">Expert Insights</Card></Col>
            <Col xs={4}><Card body className="shadow-sm">Real-Time Interaction</Card></Col>
          </Row>
        </Col>
      </Row>

      {/* Team Bluestock Cares */}
      <div className="text-center mt-5">
        <h4 className="fw-bold">Team Bluestock Cares</h4>
        <p className="text-muted">Interact with our members to engage, clarify and contribute</p>
      </div>

      {/* Expert Interaction */}
      <Row className="align-items-center mt-4">
        <Col md={6}>
          <h5 className="fw-bold">Interact With Our Experts</h5>
          <ul className="list-unstyled mt-3">
            <li>⭕ Get valid suggestions</li>
            <li>⭕ Raise issues or concerns</li>
            <li>⭕ Ask your questions</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src="/images/community-chat-2.png" alt="Expert Chat" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Community;
