import React from 'react';
import { useTranslation } from 'react-i18next';
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
    <Container className='landing-top landing-top-a'>
      <Row>
        <Spacer size='m' />
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <h1
            id='content-start'
            className='big-heading'
            data-test-label='landing-header'
            data-playwright-test-label='landing-big-heading-1'
          >
            {t('landing.big-heading-1')}
          </h1>
          <p
            className='big-heading'
            data-playwright-test-label='landing-big-heading-2'
          >
            {t('landing.big-heading-2')}
          </p>
          <p
            className='big-heading'
            data-playwright-test-label='landing-big-heading-3'
          >
            {t('landing.big-heading-3')}
          </p>
          <p data-playwright-test-label='landing-h2-heading'>
            {t('landing.h2-heading')}
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
          <Spacer size='m' />
          <BigCallToAction />
          <CampersImage />
          <Spacer size='m' />
        </Col>
      </Row>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
