import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@freecodecamp/react-bootstrap';

import './challenge-description.css';

const propTypes = {
  description: PropTypes.string,
  instructions: PropTypes.string,
  section: PropTypes.string
};

function ChallengeDescription({ description, instructions, section }) {
  return (
    <Row>
      <Col className={`challenge-instructions ${section}`} xs={12}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {instructions ? (
          <Fragment>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
            <hr />
          </Fragment>
        ) : (
          <hr />
        )}
      </Col>
    </Row>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
