import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

const DonateSupportText = () => (
  <Row className='donate-text'>
    <Col xs={12}>
      <hr />
      <h4>
        <b>Need help with your current or past donations?</b>
      </h4>
      <p>
        Forward a copy of your donation receipt to donors@freecodecamp.org and
        tell us how we can help.
      </p>
    </Col>
  </Row>
);
DonateSupportText.displayName = 'DonateText';
export default DonateSupportText;
