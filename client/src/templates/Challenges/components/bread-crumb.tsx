import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
}

const pageId = '392cb44d-742a-4cb2-ac1a-69322910ad3a';

function BreadCrumb({ block, superBlock }: BreadCrumbProps): JSX.Element {
  const { t } = useTranslation();
  // We need the ids to be hardcoded for future use. Once the client can handle
  // pageIds this kind of hackery should not be necessary.
  const href =
    superBlock === '2022/responsive-web-design'
      ? `/learn/${superBlock}/${pageId}`
      : `/learn/${superBlock}`;
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
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`${href}/#${block}`}
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
