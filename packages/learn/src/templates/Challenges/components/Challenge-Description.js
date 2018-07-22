import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { descriptionRegex } from '../../../../utils';

import './challenge-description.css';

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  section: PropTypes.string
};

function renderDescription(description) {
  if (!Array.isArray(description)) {
    return null;
  }
  return description.map((line, index) => {
    if (descriptionRegex.test(line)) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: line }}
          key={line.slice(-6) + index}
        />
      );
    }
    return (
      <p
        className='wrappable'
        dangerouslySetInnerHTML={{ __html: line }}
        key={line.slice(-6) + index}
      />
    );
  });
}

function ChallengeDescription({ description, section }) {
  // TODO: Remove bootstrap
  return (
    <Row>
      <Col className={`challenge-instructions ${section}`} xs={12}>
        {renderDescription(description)}
      </Col>
    </Row>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
