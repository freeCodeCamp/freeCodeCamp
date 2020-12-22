import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { Spacer } from '../../helpers';
import Login from '../../Header/components/Login';
import {
  AmazonLogo,
  AppleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GoogleLogo
} from '../../../assets/images/components';
import CampersImage from './CampersImage';

const propTypes = {
  page: PropTypes.string
};

function landingTop({ page }) {
  const BigCallToAction = (
    <Login block={true} data-test-label={`${page}-big-cta`}>
      {page === 'landing'
        ? "Get started (it's free)"
        : "Sign in to save your progress (it's free)"}
    </Login>
  );
  return (
    <div className='landing-top'>
      <Row>
        <Spacer />
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <h1 className='big-heading' data-test-label={`${page}-header`}>
            Learn to code at home.
          </h1>
          <h1 className='big-heading '>Build projects.</h1>
          <h1 className='big-heading'>Earn certifications.</h1>
          <h2>
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </h2>
          <div className='logo-row'>
            <AppleLogo />
            <GoogleLogo />
            <MicrosoftLogo />
            <AmazonLogo />
            <SpotifyLogo />
          </div>
          <Spacer />
          {BigCallToAction}
          <CampersImage page={page} />
          <Spacer />
        </Col>
      </Row>
    </div>
  );
}

landingTop.displayName = 'LandingTop';
landingTop.propTypes = propTypes;
export default landingTop;
