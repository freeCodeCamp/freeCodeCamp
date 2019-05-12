import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './challenge-description.css';

const propTypes = {
  description: PropTypes.string,
  instructions: PropTypes.string,
  section: PropTypes.string
};

function ChallengeDescription({ description, instructions, section }) {
  return (
    <div className={`challenge-instructions ${section}`}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {instructions && (
        <Fragment>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: instructions }} />
        </Fragment>
      )}
      <hr />
    </div>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
