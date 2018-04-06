import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.array
};

function ChallengeDescription({ children }) {
  // TODO: Remove bootstrap
  return (
    <Row>
      <Col className='challenge-instructions' xs={12}>
        {children}
      </Col>
    </Row>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
