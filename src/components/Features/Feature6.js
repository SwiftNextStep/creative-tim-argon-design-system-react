import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature6() {
  return (
    <>
      <div className="section features-6">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-html5 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">For Developers</h5>
                  <p>
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great. For being a bright
                    color. For standing out. But the time is now.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-app text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">For Designers</h5>
                  <p>
                    There’s nothing I really wanted to do in life that I wasn’t
                    able to get good at. That’s my skill. I’m not really
                    specifically talented at anything except for the ability to
                    learn.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-bell-55 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">For Beginners</h5>
                  <p>
                    That’s what I do. That’s what I’m here for. Don’t be afraid
                    to be wrong because you can’t learn anything from a
                    compliment. If everything I did failed - which it doesn't.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
            <Col className="mx-md-auto" lg="6" xs="10">
              <img
                alt="..."
                className="ml-lg-5"
                src={require("assets/img/ill/ill.png")}
                width="100%"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature6;
