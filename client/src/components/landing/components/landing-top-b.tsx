import React from 'react';
import { useTranslation } from 'react-i18next';
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
import UIImages from './ui-images';

const LogoRow = (): JSX.Element => {
  const { t } = useTranslation();
  const showChineseLogos = ['chinese', 'chinese-tradition'].includes(
    clientLocale
  );

  return (
    <>
      <p
        className='logo-row-title'
        data-playwright-test-label='landing-h2-heading-b'
      >
        {t('landing.h2-heading-b')}
      </p>
      <Spacer size='small' />
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
      <Container className='landing-top'>
        <Row>
          <Spacer size='medium' />
          <Col lg={6} sm={12} xs={12}>
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

            <Spacer size='medium' />
            <BigCallToAction text={t('buttons.get-started')} />
          </Col>
          <Col lg={6}>
            <UIImages />
          </Col>
        </Row>
        <Row>
          <Spacer size='large' />
          <Col xs={12}>
            <LogoRow />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
