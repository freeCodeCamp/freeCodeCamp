import React from 'react';

import PrismFormatted from './prism-formatted';
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
        <>
          <hr />
          <PrismFormatted text={challenge.instructions} />
        </>
      )}
      <hr />
    </div>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
