import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

const DonateText = () => {
  const { t } = useTranslation();
  return (
    <Row className='donate-text'>
      <Col xs={12}>
        <p>{t('donate.efficiency')}</p>
        <p>{t('donate.why-donate-1')}</p>
        <p>{t('donate.why-donate-2')}</p>
      </Col>
    </Row>
  );
};
DonateText.displayName = 'DonateText';
export default DonateText;
