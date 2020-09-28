import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PrismFormatted from './PrismFormatted';
import './challenge-description.css';

const propTypes = {
  description: PropTypes.string,
  instructions: PropTypes.string,
  section: PropTypes.string
};

function ChallengeDescription({ description, instructions, section }) {
  return (
    <div className={`challenge-instructions ${section}`}>
      <PrismFormatted text={description} />
      {instructions && (
        <Fragment>
          <hr />
          <PrismFormatted text={instructions} />
        </Fragment>
      )}
      <hr />
    </div>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
