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

  for (let i = 0; tokens != null && i < tokens?.length; i++) {
    const descriptionRegex = new RegExp(`\\$tokens\\[${i.toString()}\\]`, 'g');
    description = description?.replace(descriptionRegex, tokens[i]);
  }
  for (let i = 0; tokens != null && i < tokens?.length; i++) {
    const instructionRegex = new RegExp(`\\$tokens\\[${i.toString()}\\]`, 'g');
    instructions = instructions?.replace(instructionRegex, tokens[i]);
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
