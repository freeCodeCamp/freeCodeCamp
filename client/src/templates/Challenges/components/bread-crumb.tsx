import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';
import { patchHref } from '../../../utils/rwd-beta-hack';

import './challenge-title.css';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
}

function BreadCrumb({ block, superBlock }: BreadCrumbProps): JSX.Element {
  const { t } = useTranslation();
  const href = patchHref(superBlock);
  return (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t('aria.breadcrumb-nav')}
    >
      <ol>
        <li className='breadcrumb-left'>
          <Link state={{ breadcrumbBlockClick: block }} to={href}>
            <span className='ellipsis'>
              {i18next.t(`intro:${superBlock}.title`)}
            </span>
          </Link>
        </li>
        <li className='breadcrumb-right'>
          <Link state={{ breadcrumbBlockClick: block }} to={`${href}#${block}`}>
            {i18next.t(`intro:${superBlock}.blocks.${block}.title`)}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
