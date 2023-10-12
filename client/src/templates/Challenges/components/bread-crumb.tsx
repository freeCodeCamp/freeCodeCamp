import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
}

function BreadCrumb({ block, superBlock }: BreadCrumbProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t('aria.breadcrumb-nav')}
    >
      <ol>
        <li className='breadcrumb-left'>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}`}
          >
            <span className='ellipsis'>
              {i18next.t(`intro:${superBlock}.title`)}
            </span>
          </Link>
        </li>
        <li className='breadcrumb-right'>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}/#${block}`}
          >
            {i18next.t(`intro:${superBlock}.blocks.${block}.title`)}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
