import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AsSeenInText } from '../landing/logos';
import styles from '../../styles/landing/Landing.module.css';
const AsSeenIn = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Row className={styles['as-seen-in']}>
      <Col sm={8} smOffset={2} xs={12}>
        <div className={styles['text-center']}>
          <p className={styles['big-heading']}>{t('landing.as-seen-in')}</p>
          <AsSeenInText fill='light' />
        </div>
      </Col>
    </Row>
  );
};

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
