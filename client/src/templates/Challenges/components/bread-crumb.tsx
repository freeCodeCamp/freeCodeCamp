import React from 'react';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';
import i18next from 'i18next';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
  title: string;
}

const BreadCrumb = ({
  superBlock,
  block,
  title
}: BreadCrumbProps): JSX.Element => {
  return (
    <div className='challenge-title-breadcrumbs'>
      <Link
        className='breadcrumb-left'
        state={{ breadcrumbBlockClick: block }}
        to={`/learn/${superBlock}`}
      >
        <span className='ellipsis'>
          {i18next.t(`intro:${superBlock}.title`)}
        </span>
      </Link>{' '}
      <div className='breadcrumb-arrow' />
      <Link
        className={`breadcrumb-${title ? 'center' : 'right'}`}
        state={{ breadcrumbBlockClick: block }}
        to={`/learn/${superBlock}/#${block}`}
      >
        {i18next.t(`intro:${superBlock}.blocks.${block}.title`)}
      </Link>
      {title && (
        <>
          <div className='breadcrumb-arrow' />
          <span className='breadcrumb-right'>{title}</span>
        </>
      )}
    </div>
  );
};

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
