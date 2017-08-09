import React, { PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';

const propTypes = {
  children: PropTypes.array
};

export default function ChallengeDescription({ children }) {
  return (
    <Row>
      <Col
        className={ `${ns}-instructions` }
        xs={ 12 }
        >
        { children }
      </Col>
    </Row>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;
