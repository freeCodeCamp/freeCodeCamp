import React from 'react';

import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Challenge = {
  block?: string;
  description?: string;
  instructions?: string;
  title?: string;
};

function ChallengeDescription(challenge: Challenge): JSX.Element {
  return (
    <div
      className={`challenge-instructions${
        challenge.block ? ' ' + challenge.block : ''
      }`}
    >
      {challenge.title && (
        <>
          <PrismFormatted text={challenge.title} />
          <hr />
        </>
      )}
      {challenge.description && <PrismFormatted text={challenge.description} />}
      {challenge.instructions && (
        <>
          <hr />
          <PrismFormatted text={challenge.instructions} />
        </>
      )}
    </div>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
