import React from 'react';

import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Props = {
  description?: string;
  instructions?: string;
  superBlock?: string;
  block?: string;
};
const ChallengeDescription = ({
  description,
  instructions,
  superBlock,
  block
}: Props) => {
  const sbClass = superBlock ? superBlock : '';
  const bClass = block ? block : '';
  return (
    <div
      className={`challenge-instructions ${sbClass} ${bClass}`}
      data-playwright-test-label='challenge-description'
    >
      {description && <PrismFormatted text={description} />}
      {instructions && description && <hr />}
      {instructions && <PrismFormatted text={instructions} />}
    </div>
  );
};

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
