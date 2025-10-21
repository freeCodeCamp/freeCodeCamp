import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
  // New prop for the current challenge/lesson title
  challengeTitle: string;
}

function BreadCrumb({
  block,
  superBlock,
  challengeTitle
}: BreadCrumbProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t('aria.breadcrumb-nav')}
    >
      <ol data-playwright-test-label='breadcrumb-desktop'>
        <li className='breadcrumb-left'>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}`}
          >
            <span>{i18next.t(`intro:${superBlock}.title`)}</span>
          </Link>
          <span className='breadcrumb-separator'> &gt; </span>{' '}
          {/* Added separator */}
        </li>

        {/* 1. Block (e.g., Typescript Fundamentals) */}
        <li>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}/#${block}`}
          >
            {i18next.t(`intro:${superBlock}.blocks.${block}.title`)}
          </Link>
          <span className='breadcrumb-separator'> &gt; </span>{' '}
          {/* Added separator */}
        </li>

        {/* 2. Current Challenge/Lesson Title (Non-clickable) */}
        <li className='breadcrumb-right'>
          <span aria-current='page'>{challengeTitle}</span>
        </li>
      </ol>
    </nav>
  );
}

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
