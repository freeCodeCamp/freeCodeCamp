/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import Spacer from '../components/helpers/Spacer';

import './sponsors.css';

const SponsorsPage = () => {
  return (
    <Fragment>
      <Helmet
        title='Sponsors who help freeCodeCamp through financial and in-kind sponsorship | freeCodeCamp.org'
      />
      <Spacer />
      <Grid className='container'>
        <Row className='text-center'>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <h2>Financial Sponsors</h2>
            <h3>
              These companies give supporting donations to freeCodeCamp.org
            </h3>
            <hr />
            <Row className='sponsor-logos'>
              <a
                href='https://www.class-central.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Class Central's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/class-central-logo.jpg'
                />
              </a>
              <a
                href='https://www.tsugicloud.org'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="TsugiCloud's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/tsugicloud-logo.png'
                />
              </a>
            </Row>
            <h2>In-kind sponsors</h2>
            <h3>These companies donate their services to freeCodeCamp.org</h3>
            <hr />
            <Row className='sponsor-logos'>
              <a
                href='https://netlify.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Netlify's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/netlify-logo.jpg'
                />
              </a>
              <a
                href='https://www.mlab.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="mLab's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/mLab-logo.png'
                />
              </a>
              <a
                href='https://auth0.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Auth0's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/auth0-logo.png'
                />
              </a>
            </Row>
            <Row className='sponsor-logos'>
              <a
                href='https://www.discourse.org/'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Discourse's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/discourse-logo.png'
                />
              </a>
              <a
                href='https://algolia.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Algolia's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/algolia-logo.jpg'
                />
              </a>
              <a
                href='https://cloudflare.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                <img
                  alt="Cloudflare's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/cloudflare-logo.jpg'
                />
              </a>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

SponsorsPage.displayName = 'SponsorsPage';

export default SponsorsPage;
