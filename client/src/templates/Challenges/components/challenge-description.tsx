import React, { useEffect } from 'react';
import { initializeMathJax, isMathJaxAllowed } from '../../../utils/math-jax';
import PrismFormatted from './prism-formatted';
import './challenge-description.css';

type Props = {
  description?: string;
  instructions?: string;
  superBlock?: string;
  tokens?: string[];
};

const ChallengeDescription = ({
  description,
  instructions,
  superBlock,
  tokens
}: Props) => {
  useEffect(() => {
    if (superBlock && isMathJaxAllowed(superBlock)) {
      initializeMathJax();
    }
  }, [superBlock]);

  for(let i = 0 ; tokens!= null && i < tokens?.length; i++)
  {
    description = description?.replaceAll("$" + + "tokens[" + i.toString() + "]", tokens[i]);
  }
  for(let i = 0 ; tokens!= null && i < tokens?.length; i++)
  {
    instructions = instructions?.replaceAll("$" + "tokens[" + i.toString() + "]", tokens[i]);
  }
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
