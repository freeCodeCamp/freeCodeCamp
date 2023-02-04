import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import envData from '../../../../../config/env.json';
import {
  AmazonLogo,
  AppleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GoogleLogo,
  TencentLogo,
  AlibabaLogo
} from '../../components/landing/export-logos';
//import { Spacer } from '../../helpers';
import BigCallToAction from './big-call-to-action';
import CampersImage from '../landing/images/campers-image';
import styles from '../../styles/landing/Landing.module.css';
interface LandingTopProps {
  pageName: string;
}

// const { clientLocale } = envData;
function LandingTop({ pageName }: LandingTopProps): JSX.Element {
  const { t } = useTranslation();
  //   const showChineseLogos = ['chinese', 'chinese-tradition'].includes(
  //     clientLocale
  //   );
  const showChineseLogos = false;
  return (
    <div className={styles['landing-top']}>
      <Row>
        {/* <Spacer /> */}
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <h1
            className={styles['big-heading']}
            data-test-label={`${pageName}-header`}
          >
            {t('landing.big-heading-1')}
          </h1>
          <p className={styles['big-heading']}>{t('landing.big-heading-2')}</p>
          <p className={styles['big-heading']}>{t('landing.big-heading-3')}</p>
          <p>{t('landing.h2-heading')}</p>
          <div className={styles['logo-row']}>
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
          {/* <Spacer /> */}
          <BigCallToAction pageName={pageName} />
          <CampersImage pageName={pageName} />
          {/* <Spacer /> */}
        </Col>
      </Row>
    </div>
  );
}

LandingTop.displayName = 'LandingTop';
export default LandingTop;
