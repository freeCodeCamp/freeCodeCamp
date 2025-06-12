import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import { ButtonLink } from '../helpers';
import DailyCodingChallengeIcon from '../../assets/icons/daily-coding-challenge';
import LinkButton from '../../assets/icons/link-button';
import CalendarIcon from '../../assets/icons/calendar';
import { formatDateUsCentral } from './helpers';

import './widget.css';

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
  const usCentralDateForUrl = formatDateUsCentral(todaysDate);

  return (
    <>
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('daily-coding-challenges.map-title')}
      </h2>
      <div className='daily-coding-challenge-wrap'>
        <ButtonLink
          block
          size='large'
          className='map-superblock-link'
          href={`/learn/daily-coding-challenge?date=${usCentralDateForUrl}`}
        >
          <div className='daily-coding-challenge-button'>
            <DailyCodingChallengeIcon className='map-icon' />
            {t(`buttons.start`)}
          </div>
          {forLanding && <LinkButton />}
        </ButtonLink>

        {!forLanding && (
          <>
            <Spacer size='xs' />

            <ButtonLink
              block={true}
              size='large'
              className='map-superblock-link'
              href='/learn/daily-coding-challenge/archive'
            >
              <div className='daily-coding-challenge-button'>
                <CalendarIcon className='map-icon' />
                {t(`buttons.go-to-archive`)}
              </div>
            </ButtonLink>
          </>
        )}
      </div>
    </>
  );
}

DailyCodingChallengeWidget.displayName = 'DailyCodingChallengeWidget';

export default DailyCodingChallengeWidget;
