import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

const DonateText = () => {
  return (
    <Row className='donate-text'>
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
};
DonateText.displayName = 'DonateText';
export default DonateText;
