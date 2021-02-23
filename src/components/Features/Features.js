import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

function Features({ myref }) {
  return (
    <section className='section section-lg' ref={myref}>
      <Container>
        <Row className='row-grid align-items-center'>
          <Col className='order-md-2' md='6'>
            <img
              alt='...'
              className='img-fluid floating'
              src={require('assets/img/theme/promo-1.png')}
            />
          </Col>
          <Col className='order-md-1' md='6'>
            <div className='pr-md-5'>
              <div className='icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5'>
                <i className='ni ni-settings-gear-65' />
              </div>
              <h3>Awesome features</h3>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <ul className='list-unstyled mt-5'>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-settings-gear-65' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>Carefully crafted components</h6>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-html5' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>Amazing page examples</h6>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-satisfied' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>Super friendly support team</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
