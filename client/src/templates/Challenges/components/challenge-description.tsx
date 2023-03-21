import React from 'react';

import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Challenge = {
  block?: string;
  description?: string;
  instructions?: string;
  superBlock?: string;
};

function ChallengeDescription(challenge: Challenge): JSX.Element {
  const sbClass = challenge.superBlock ? challenge.superBlock : '';
  const bClass = challenge.block ? challenge.block : '';

  return (
    <div className={`challenge-instructions ${sbClass} ${bClass}`}>
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
