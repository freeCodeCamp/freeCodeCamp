import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import PrismFormatted from './prism-formatted';

import './challenge-transcript.css';

interface ChallengeTranscriptProps {
  transcript: string;
}

function ChallengeTranscript({
  transcript
}: ChallengeTranscriptProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <details>
        <summary className='challenge-transcript-heading'>
          {t('learn.transcript')}
        </summary>
        <Spacer size='m' />
        <PrismFormatted className={'line-numbers'} text={transcript} />
      </details>
      <Spacer size='m' />
    </>
  );
}

ChallengeTranscript.displayName = 'ChallengeTranscript';

export default ChallengeTranscript;
