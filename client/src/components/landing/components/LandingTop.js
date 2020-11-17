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
import { Trans } from 'gatsby-plugin-react-i18next';

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
            <Trans>Learn to code at home</Trans>.
          </h1>
          <h1 className='big-heading '>
            <Trans>Build projects.</Trans>
          </h1>
          <h1 className='big-heading'>
            <Trans>Earn certifications.</Trans>
          </h1>
          <h2>
            <Trans>
              Since 2014, more than 40,000 freeCodeCamp.org graduates have
              gotten jobs at tech companies including:
            </Trans>
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
