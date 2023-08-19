import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@freecodecamp/ui';
import { clientLocale } from '../../../../../config/env.json';
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

function LandingTop(): JSX.Element {
  const { t } = useTranslation();
  const showChineseLogos = ['chinese', 'chinese-tradition'].includes(
    clientLocale
  );
  return (
    <Container className='landing-top'>
      <Row>
        <Spacer size='medium' />
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <h1
            id='content-start'
            className='big-heading'
            data-test-label='landing-header'
          >
            {t('landing.big-heading-1')}
          </h1>
          <p className='big-heading'>{t('landing.big-heading-2')}</p>
          <p className='big-heading'>{t('landing.big-heading-3')}</p>
          <p>{t('landing.h2-heading')}</p>
          <div className='logo-row'>
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
          <Spacer size='medium' />
          <BigCallToAction />
          <CampersImage pageName='landing' />
          <Spacer size='medium' />
        </Col>
      </Row>
    </Container>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
