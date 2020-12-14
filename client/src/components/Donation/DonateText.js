import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

const DonateText = () => {
  return (
    <Row className='donate-text'>
      <Col xs={12}>
        <p>freeCodeCamp is a highly efficient education nonprofit.</p>
        <p>
          When you donate to freeCodeCamp, you help people learn new skills and
          provide for their families.
        </p>
        <p>
          You also help us create new resources for you to use to expand your
          own technology skills.
        </p>
      </Col>
    </Row>
  );
};
DonateText.displayName = 'DonateText';
export default DonateText;
