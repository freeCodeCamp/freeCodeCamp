import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';

import { RibbonIcon } from '../../assets/icons/completion-ribbon';

import './widget.css';
import { formatDateUsCentral, formatDateUsCentralForDisplay } from './helpers';

interface DailyCodingChallengeWidgetProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  forLanding: boolean;
}

function DailyCodingChallengeWidget({
  forLanding
}: DailyCodingChallengeWidgetProps): JSX.Element {
  const { t } = useTranslation();

  // Midnight US Central Time is used to determine the release of new daily challenges
  const todaysDate = new Date();
  const usCentralDateForApi = formatDateUsCentral(todaysDate);
  const usCentralDateForDisplay = formatDateUsCentralForDisplay(todaysDate);

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
            <div className='daily-coding-challenge-date'>
              {usCentralDateForDisplay}
            </div>
          </div>

          <Spacer size='s' />

          <div>
            <Button
              block={true}
              href={`/learn/daily-coding-challenge?date=${usCentralDateForApi}`}
            >
              {t(`buttons.start`)}
            </Button>
          </div>

          <Spacer size='xs' />

          <div>
            <Button block={true} href='/learn/daily-coding-challenge/archive'>
              {t(`buttons.go-to-archive`)}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

DailyCodingChallengeWidget.displayName = 'DailyCodingChallengeWidget';

export default DailyCodingChallengeWidget;
