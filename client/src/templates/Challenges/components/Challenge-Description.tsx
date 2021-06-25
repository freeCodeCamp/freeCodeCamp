import React, { Fragment } from 'react';

import PrismFormatted from './PrismFormatted';
import './challenge-description.css';

type Challenge = {
  block?: string;
  description?: string;
  instructions?: string;
};

function ChallengeDescription(challenge: Challenge): JSX.Element {
  return (
    <div
      className={`challenge-instructions${
        challenge.block ? ' ' + challenge.block : ''
      }`}
    >
      {challenge.description && <PrismFormatted text={challenge.description} />}
      {challenge.instructions && (
        <Fragment>
          <hr />
          <PrismFormatted text={challenge.instructions} />
        </Fragment>
      )}
      <hr />
    </div>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
