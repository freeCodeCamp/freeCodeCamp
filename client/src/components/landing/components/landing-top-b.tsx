import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Col, Row } from '@freecodecamp/ui';
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
import { Spacer } from '../../helpers';
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
      <ul
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
      </ul>
    </>
  );
};

function LandingTop(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container fluid={true} className='gradient-container'>
      <Container className='landing-top landing-top-b'>
        <Spacer size='medium' />
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <h1
              id='content-start'
              className='mega-heading'
              data-test-label='landing-header'
            >
              {t('landing.big-heading-1-b')}
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
            <p
              className='mega-heading gradient-foreground'
              data-playwright-test-label='landing-big-heading-4'
            >
              {t('landing.big-heading-4')}
            </p>
            <LogoRow />
            <Spacer size='medium' />
            <BigCallToAction />
          </Col>
        </Row>
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <CampersImage />
            <Spacer size='medium' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
