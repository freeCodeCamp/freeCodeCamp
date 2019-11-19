import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

const DonateText = () => {
  return (
    <Row>
      <Col sm={10} smOffset={1} xs={12}>
        <p>freeCodeCamp is a highly efficient education nonprofit.</p>
        <p>
          In 2019 alone, we provided 18 million hours of free education to
          people around the world.
        </p>
        <p>
          Since freeCodeCamp's total budget is only $373,000, that means every
          dollar you donate to freeCodeCamp translates into 50 hours worth of
          technology education.
        </p>
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
