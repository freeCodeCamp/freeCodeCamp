import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';
import {
  isValidDateParam,
  formatDisplayDate
} from '../../../components/daily-coding-challenge/helpers';

function DailyChallengeBreadCrumb(): JSX.Element {
  const dateParam =
    new URLSearchParams(window.location.search).get('date') || '';
  let displayDate = '';

  if (isValidDateParam(dateParam)) {
    displayDate = formatDisplayDate(dateParam);
  }

  const { t } = useTranslation();
  return (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t('aria.breadcrumb-nav')}
    >
      <ol data-playwright-test-label='breadcrumb-desktop'>
        <li className='breadcrumb-left'>
          <Link to={`/learn`}>
            <span>{i18next.t(`intro:daily-coding-challenge.title`)}</span>
          </Link>
        </li>
        <li className='breadcrumb-right'>
          <Link to={`/learn/daily-coding-challenge/archive`}>
            {displayDate}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

DailyChallengeBreadCrumb.displayName = 'DailyChallengeBreadCrumb';

export default DailyChallengeBreadCrumb;
