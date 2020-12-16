import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

const DonateSupportText = () => {
  const { t } = useTranslation();
  return (
    <Row className='donate-text'>
      <Col xs={12}>
        <hr />
        <h4>
          <b>{t('donate.need-help')}</b>
        </h4>
        <p>{t('donate.forward-receipt')}</p>
      </Col>
    </Row>
  );
};

DonateSupportText.displayName = 'DonateText';
export default DonateSupportText;
