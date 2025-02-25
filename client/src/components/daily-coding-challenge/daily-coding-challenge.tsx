import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer, Button, Dropdown, MenuItem } from '@freecodecamp/ui';

import { RibbonIcon } from '../../assets/icons/completion-ribbon';

import './daily-coding-challenge.css';

interface DailyCodingChallengeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  forLanding: boolean;
}

function DailyCodingChallenge({
  forLanding
}: DailyCodingChallengeProps): JSX.Element {
  const [difficulty, setDifficulty] = useState<string>('1');
  const { t } = useTranslation();

  // Midnight US Central Time is used to determine the release of new daily challenges
  const todaysDate = new Date();

  const usCentralDateForApi = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
    .format(todaysDate)
    .replace(/\//g, '-');

  const usCentralDateForDisplay = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).format(todaysDate);

  function handleDifficultyChange(e: React.ChangeEvent<HTMLOptionElement>) {
    e.preventDefault();
    setDifficulty(e.target.value);
  }

  const difficulyLevels: Record<string, string> = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced'
  };

  return (
    <>
      <h2 className={forLanding ? 'big-heading' : ''}>
        Try the coding challenge of the day:
      </h2>
      <div className='daily-coding-challenge-wrap'>
        <div className='daily-coding-challenge-left'>
          <RibbonIcon
            value={0}
            showNumbers={false}
            isCompleted={false}
            isClaimed={false}
          />
        </div>
        <div className='daily-coding-challenge-right'>
          <div className='daily-coding-challenge-info'>
            <div className='daily-coding-challenge-title-and-date'>
              <div className='daily-coding-challenge-title'>Ceasars Cipher</div>
              <div className='daily-coding-challenge-date'>
                {usCentralDateForDisplay}
              </div>
            </div>

            <Dropdown>
              <Dropdown.Toggle>{difficulyLevels[difficulty]}</Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem
                  variant='primary'
                  value={1}
                  onClick={handleDifficultyChange}
                >
                  {t(`daily-coding-challenge.level[${difficulty}]`)}
                </MenuItem>
                <MenuItem
                  variant='primary'
                  value={2}
                  onClick={handleDifficultyChange}
                >
                  {t(`daily-coding-challenge.level[${difficulty}]`)}
                </MenuItem>
                <MenuItem
                  variant='primary'
                  value={3}
                  onClick={handleDifficultyChange}
                >
                  {t(`daily-coding-challenge.level[${difficulty}]`)}
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Spacer size='m' />

          <div>
            <Button
              block={true}
              href={`/daily-coding-challenge?date=${usCentralDateForApi}&level=${difficulyLevels[difficulty]}`}
            >
              {t(`buttons.start`)}
            </Button>
          </div>

          <Spacer size='s' />

          <div>
            <Button block={true} href='/daily-coding-challenge/archive'>
              {t(`buttons.go-to-archive`)}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;
