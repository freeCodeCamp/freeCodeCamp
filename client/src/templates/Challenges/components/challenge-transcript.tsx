import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import store from 'store';

import PrismFormatted from './prism-formatted';
import './challenge-transcript.css';

interface ChallengeTranscriptProps {
  transcript: string;
  shouldPersistExpanded?: boolean;
  isDialogue?: boolean;
}

function ChallengeTranscript({
  transcript,
  shouldPersistExpanded,
  isDialogue
}: ChallengeTranscriptProps): JSX.Element {
  const { t } = useTranslation();

  // default to collapsed
  const [isOpen, setIsOpen] = useState(() =>
    shouldPersistExpanded
      ? (store.get('fcc-transcript-expanded') as boolean | null) ?? false
      : false
  );

  function toggleExpandedState(e: React.MouseEvent<HTMLDetailsElement>) {
    e.preventDefault();
    if (shouldPersistExpanded) {
      store.set('fcc-transcript-expanded', !isOpen);
    }
    setIsOpen(!isOpen);
  }

  return (
    <>
      <details
        data-testid='challenge-transcript'
        className='challenge-transcript'
        open={isOpen}
      >
        <summary
          onClick={toggleExpandedState}
          aria-expanded={isOpen}
          className='challenge-transcript-heading'
        >
          {t('learn.transcript')}
        </summary>
        <Spacer size='m' />
        {isDialogue ? (
          <div
            className='transcript-dialogue'
            dangerouslySetInnerHTML={{ __html: transcript }}
          />
        ) : (
          <PrismFormatted className='line-numbers' text={transcript} />
        )}
      </details>
      <Spacer size='m' />
    </>
  );
}

ChallengeTranscript.displayName = 'ChallengeTranscript';

export default ChallengeTranscript;
