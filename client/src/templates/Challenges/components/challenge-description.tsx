import React from 'react';

import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Props = {
  description?: string;
  instructions?: string;
};

const ChallengeDescription = ({ description, instructions }: Props) => (
  <div
    className={'challenge-instructions mathjax-support'}
    data-playwright-test-label='challenge-description'
  >
    {description && <PrismFormatted text={description} />}
    {instructions && description && <hr />}
    {instructions && <PrismFormatted text={instructions} />}
  </div>
);

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
