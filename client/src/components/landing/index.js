import React, { Fragment } from 'react';
import { Grid, Row, Col, Image } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import Login from '../Header/components/Login';
import { Spacer } from '../helpers';

import './landing.css';

const BigCallToAction = () => (
  <Row>
    <Col sm={10} smOffset={1} xs={12}>
      <Login block={true}>Sign in and get started.</Login>
    </Col>
  </Row>
);

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <title>Learn to code | freeCodeCamp.org</title>
      </Helmet>
      <main className='index-page'>
        <Spacer size={1} />
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h1 className='big-heading text-center'>
                Welcome to freeCodeCamp.org
              </h1>
              <Spacer size={0.8} />
              <h2 className='medium-heading text-shift'>Learn to code.</h2>
              <h2 className='medium-heading text-shift'>
                Build projects and earn certifications.
              </h2>
              <h2 className='medium-heading text-shift'>
                Grow your portfolio and get a developer job.
              </h2>
              <h2 className='medium-heading text-shift'>
                It's all 100% free thanks to our nonprofit's donors.
              </h2>
            </Col>
          </Row>
          <Spacer size={0.7} />
          <BigCallToAction />
          <Spacer size={0.8} />
          <h2 className='medium-heading text-center'>As seen in:</h2>
          <Spacer size={0.7} />
          <Image
            alt='companies featuring freeCodeCamp.org'
            className='img-center'
            responsive={true}
            src='https://cdn-media-1.freecodecamp.org/learn/as-seen-on.png'
          />
          <Spacer size={0.8} />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h2 className='medium-heading text-shift'>
                Since 2014, more than 40,000 freeCodeCamp.org graduates have
                gotten jobs in tech.
              </h2>
            </Col>
          </Row>
          <Spacer />
        </Grid>
      </main>
    </Fragment>
  );
}

Landing.displayName = 'Landing';

export default Landing;
