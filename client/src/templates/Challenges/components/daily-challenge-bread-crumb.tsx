import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';
import {
  isValidDateString,
  formatDisplayDate
} from '../../../components/daily-coding-challenge/helpers';

function DailyChallengeBreadCrumb({
  dailyChallengeParam
}: {
  dailyChallengeParam?: string;
}): JSX.Element | null {
  const { t } = useTranslation();

  return dailyChallengeParam && isValidDateString(dailyChallengeParam) ? (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t('aria.breadcrumb-nav')}
    >
      <ol data-playwright-test-label='breadcrumb-desktop'>
        <li className='breadcrumb-left'>
          <Link to={`/learn/daily-coding-challenge/archive`}>
            <span>{i18next.t(`intro:daily-coding-challenge.title`)}</span>
          </Link>
        </li>
        <li className='breadcrumb-right'>
          <Link to={`/learn/daily-coding-challenge/archive`}>
            {formatDisplayDate(dailyChallengeParam)}
          </Link>
        </li>
      </ol>
    </nav>
  ) : null;
}

DailyChallengeBreadCrumb.displayName = 'DailyChallengeBreadCrumb';

export default DailyChallengeBreadCrumb;
