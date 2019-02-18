/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

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
              <Link
                external={true}
                to='https://www.class-central.com'
                >
                <img
                  alt="Class Central's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/class-central-logo.jpg'
                />
              </Link>
              <Link
                external={true}
                to='https://www.tsugicloud.org'
                >
                <img
                  alt="TsugiCloud's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/tsugicloud-logo.png'
                />
              </Link>
            </Row>
            <h2>In-kind sponsors</h2>
            <h3>These companies donate their services to freeCodeCamp.org</h3>
            <hr />
            <Row className='sponsor-logos'>
              <Link
                external={true}
                to='https://netlify.com'
                >
                <img
                  alt="Netlify's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/netlify-logo.jpg'
                />
              </Link>
              <Link
                external={true}
                to='https://www.mlab.com/'
                >
                <img
                  alt="mLab's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/mLab-logo.png'
                />
              </Link>
              <Link
                external={true}
                to='https://auth0.com'
                >
                <img
                  alt="Auth0's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/auth0-logo.png'
                />
              </Link>
            </Row>
            <Row className='sponsor-logos'>
              <Link
                external={true}
                to='https://www.discourse.org/'
                >
                <img
                  alt="Discourse's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/discourse-logo.png'
                />
              </Link>
              <Link
                external={true}
                to='https://algolia.com'
                >
                <img
                  alt="Algolia's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/algolia-logo.jpg'
                />
              </Link>
              <Link
                external={true}
                to='https://cloudflare.com'
                >
                <img
                  alt="Cloudflare's logo"
                  className='img-responsive sponsor-logo'
                  src='https://s3.amazonaws.com/freecodecamp/cloudflare-logo.jpg'
                />
              </Link>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

SponsorsPage.displayName = 'SponsorsPage';

export default SponsorsPage;
