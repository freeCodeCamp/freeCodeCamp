import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';

function DailyCodingChallengeNotFound(): JSX.Element {
  const { t } = useTranslation();

  // Midnight US Central Time is used to determine the release of new daily challenges
  const todaysDate = new Date();

  // format "dd-mm-yyyy" - e.g. "02-28-2025"
  const usCentralDateForApi = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
    .format(todaysDate)
    .replace(/\//g, '-');

  return (
    <>
      <h2 className='big-heading'>Coding Challenge Not Found.</h2>

      <Spacer size='m' />

      <div>
        <Button
          block={true}
          href={`/learn/daily-coding-challenge?date=${usCentralDateForApi}&level=${difficulyLevels[difficulty]}`}
        >
          {t(`buttons.go-to-today`)}
        </Button>
      </div>

      <Spacer size='s' />

      <div>
        <Button block={true} href='/learn/daily-coding-challenge/archive'>
          {t(`buttons.go-to-archive`)}
        </Button>
      </div>
    </>
  );
}

DailyCodingChallengeNotFound.displayName = 'DailyCodingChallengeNotFound';

export default DailyCodingChallengeNotFound;
