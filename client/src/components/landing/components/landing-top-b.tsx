import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import { clientLocale } from '../../../../config/env.json';
import {
  AmazonLogo,
  AppleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GoogleLogo,
  TencentLogo,
  AlibabaLogo
} from '../../../assets/images/components';
import BigCallToAction from './big-call-to-action';
import CampersImage from './campers-image';

function LandingTop(): JSX.Element {
  const { t } = useTranslation();
  const showChineseLogos = ['chinese', 'chinese-tradition'].includes(
    clientLocale
  );
  return (
    <Container
      fluid={true}
      className='landing-top lading-top-c gradient-container'
    >
      <Container>
        <Row className='landing-top-two-column'>
          <Spacer size='m' />
          <Col className='landing-top-left'>
            <h1
              id='content-start'
              className='ultra-heading'
              data-test-label='landing-header'
              data-playwright-test-label='big-heading-1-b'
            >
              {t('landing.big-heading-1-b')}
            </h1>
            <p data-playwright-test-label='advance-career'>
              {t('landing.advance-career')}
            </p>
            <Spacer size='m' />

            <BigCallToAction />
            <Spacer size='m' />
          </Col>
          <Col className='landing-top-right'>
            <CampersImage />
            <Spacer size='m' />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={10} smOffset={1} xs={12} className='brands-container'>
            <Spacer size='l' />
            <p data-playwright-test-label='graduates-work'>
              <Trans>landing.graduates-work</Trans>
            </p>
            <Spacer size='s' />
            <div
              className='logo-row'
              data-playwright-test-label='brand-logo-container'
            >
              <AppleLogo />
              <GoogleLogo />
              <MicrosoftLogo />
              {showChineseLogos ? (
                <>
                  <TencentLogo />
                  <AlibabaLogo />
                </>
              ) : (
                <>
                  <SpotifyLogo />
                  <AmazonLogo />
                </>
              )}
            </div>
            <Spacer size='m' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
