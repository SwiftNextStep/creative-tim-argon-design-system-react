/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Poligon from 'components/Diverse/Poligon';
import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className='position-relative'>
          {/* Hero for FREE version */}
          <section className='section section-hero section-shaped'>
            {/* Background circles */}
            <div className='shape shape-style-1 shape-default'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            <Container className='shape-container d-flex align-items-center py-lg'>
              <div className='col px-0'>
                <Row className='align-items-center justify-content-center'>
                  <Col className='text-center' lg='6'>
                    <h1 className='display-1 text-white'>Icaro's Portfolio</h1>
                    <p className='lead text-white'>
                      Check my personal work in frontend, backend or design.
                      Also few free to look my GitHub repositories or download
                      my CV on the link bellow.
                    </p>
                    <div className='btn-wrapper mt-5'>
                      <Button
                        className='btn-white btn-icon mb-3 mb-sm-0'
                        color='default'
                        href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page'
                        size='lg'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-cloud-download-95' />
                        </span>
                        <span className='btn-inner--text'>Download my CV</span>
                      </Button>{' '}
                      <Button
                        className='btn-icon mb-3 mb-sm-0'
                        color='github'
                        href='https://github.com/creativetimofficial/argon-design-system-react'
                        size='lg'
                        target='_blank'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='fa fa-github' />
                        </span>
                        <span className='btn-inner--text'>
                          <span className='text-warning mr-1'>Check me</span>
                          on Github
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <Poligon />
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
