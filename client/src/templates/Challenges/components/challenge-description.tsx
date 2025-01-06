import React, { useEffect } from 'react';
import { initializeMathJax, isMathJaxAllowed } from '../../../utils/math-jax';
import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Props = {
  description?: string;
  instructions?: string;
  superBlock: string;
};

const ChallengeDescription = ({
  description,
  instructions,
  superBlock
}: Props) => {
  useEffect(() => {
    if (isMathJaxAllowed(superBlock)) {
      initializeMathJax();
    }
  }, [superBlock]);

  return (
    <div
      className={'challenge-instructions mathjax-support'}
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
