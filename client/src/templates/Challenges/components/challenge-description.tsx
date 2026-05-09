import React, { useEffect } from 'react';
import { initializeMathJax, isMathJaxAllowed } from '../../../utils/math-jax';
import PrismFormatted from './prism-formatted';
import './challenge-description.css';
import { generateGithubLink } from '../../../components/create-github-link';

type Props = {
  description?: string;
  instructions?: string;
  superBlock?: string;
  challengeId: string;
  block: string;
};

const ChallengeDescription = ({
  description,
  instructions,
  superBlock,
  challengeId,
  block
}: Props) => {
  useEffect(() => {
    if (superBlock && isMathJaxAllowed(superBlock)) {
      initializeMathJax();
    }
  }, [superBlock]);

  const githubLink = generateGithubLink(challengeId, block);
  return (
    <div
      className={'challenge-instructions mathjax-support'}
      data-playwright-test-label='challenge-description'
      data-github-link={githubLink}
    >
      {description && <PrismFormatted text={description} />}
      {instructions && description && <hr />}
      {instructions && <PrismFormatted text={instructions} />}
    </div>
  );
};

ChallengeDescription.displayName = 'ChallengeDescription';

export default ChallengeDescription;
