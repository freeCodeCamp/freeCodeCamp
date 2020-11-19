import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { Spacer } from '../../helpers';
import {
  AmazonLogo,
  AppleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GoogleLogo
} from '../../../assets/images/components';
import CampersImage from './CampersImage';
import BigCallToAction from './BigCallToAction';
import { Trans } from 'gatsby-plugin-react-i18next';

const propTypes = {
  page: PropTypes.string
};

function landingTop({ page }) {
  return (
    <div className='landing-top'>
      <Row>
        <Spacer />
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <h1 className='big-heading' data-test-label={`${page}-header`}>
            <Trans>landing.big-heading-1</Trans>
          </h1>
          <h1 className='big-heading'>
            <Trans>landing.big-heading-2</Trans>
          </h1>
          <h1 className='big-heading'>
            <Trans>landing.big-heading-3</Trans>
          </h1>
          <h2>
            <Trans>landing.h2-heading</Trans>
          </h2>
          <div className='logo-row'>
            <AppleLogo />
            <GoogleLogo />
            <MicrosoftLogo />
            <AmazonLogo />
            <SpotifyLogo />
          </div>
          <Spacer />
          <BigCallToAction page={page} />
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
