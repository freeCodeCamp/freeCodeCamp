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

const LogoRow = (): JSX.Element => {
  const showChineseLogos = ['chinese', 'chinese-tradition'].includes(
    clientLocale
  );

  return (
    <>
      <p
        className='logo-row-title'
        data-playwright-test-label='landing-h2-heading-b'
      >
        <Trans>landing.h2-heading-b</Trans>
      </p>
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
    </>
  );
};

function LandingTop(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container fluid={true} className='gradient-container'>
      <Container className='landing-top landing-top-b'>
        <Spacer size='m' />
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <h1
              id='content-start'
              className='mega-heading'
              data-test-label='landing-header'
              data-playwright-test-label='landing-big-heading-1'
            >
              {t('landing.big-heading-1')}
            </h1>
            <p
              className='mega-heading'
              data-playwright-test-label='landing-big-heading-2'
            >
              {t('landing.big-heading-2')}
            </p>
            <p
              className='mega-heading'
              data-playwright-test-label='landing-big-heading-3'
            >
              {t('landing.big-heading-3')}
            </p>
            <LogoRow />
            <Spacer size='m' />
            <BigCallToAction />
          </Col>
        </Row>
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <CampersImage />
            <Spacer size='m' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
