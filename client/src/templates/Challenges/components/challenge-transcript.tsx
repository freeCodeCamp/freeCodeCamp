import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import store from 'store';

import './challenge-transcript.css';

interface ChallengeTranscriptProps {
  transcript: string;
}

function ChallengeTranscript({
  transcript
}: ChallengeTranscriptProps): JSX.Element {
  const { t } = useTranslation();

  // default to collapsed
  const [isOpen, setIsOpen] = useState(
    () => (store.get('fcc-transcript-expanded') as boolean | null) ?? false
  );

  function toggleExpandedState(e: React.MouseEvent<HTMLDetailsElement>) {
    e.preventDefault();
    store.set('fcc-transcript-expanded', !isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <details data-testid='challenge-transcript' open={isOpen}>
        <summary
          onClick={toggleExpandedState}
          aria-expanded={isOpen}
          className='challenge-transcript-heading'
        >
          {t('learn.transcript')}
        </summary>
        <Spacer size='m' />
        <table className='transcript-table'>
          <tbody>
            {transcript
              .split('\n')
              .filter(line => line.trim() !== '')
              .map((line, idx) => {
                return (
                  <tr key={idx}>
                    <td dangerouslySetInnerHTML={{ __html: line }} />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </details>
      <Spacer size='m' />
    </>
  );
}

ChallengeTranscript.displayName = 'ChallengeTranscript';

export default ChallengeTranscript;
