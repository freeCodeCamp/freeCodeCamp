import React, { Fragment } from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import Login from '../Header/components/Login';
import { Spacer } from '../helpers';

import './landing.css';
import AmazonLogo from '../../assets/images/AmazonLogo';
import AppleLogo from '../../assets/images/AppleLogo';
import GoogleLogo from '../../assets/images/GoogleLogo';
import SpotifyLogo from '../../assets/images/SpotifyLogo';
import MicrosoftLogo from '../../assets/images/MicrosoftLogo';

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
        <Spacer size={2} />
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h1 className='big-heading text-center'>
                Welcome to freeCodeCamp.org
              </h1>
              <Spacer />
              <h2 className='medium-heading'>Learn to code.</h2>
              <h2 className='medium-heading'>
                Build projects and earn certifications.
              </h2>
              <h2 className='medium-heading'>
                Grow your portfolio and get a developer job.
              </h2>
              <h2 className='medium-heading'>
                Izt's all 100% free thanks to our nonprofit's donors.
              </h2>
            </Col>
          </Row>
          <Spacer />
          <BigCallToAction />
          <Spacer size={2} />
          <Row>
            <Col md={3} mdOffset={1}>
              <SpotifyLogo />
            </Col>
            <Col md={2} mdOffset={1}>
              <AppleLogo />
            </Col>
            <Col md={3} mdOffset={1}>
              <MicrosoftLogo />
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col md={3} mdOffset={2}>
              <AmazonLogo />
            </Col>
            <Col md={3} mdOffset={2}>
              <GoogleLogo />
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h2 className='medium-heading'>
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
