import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';
import GreenPass from '../../../assets/icons/GreenPass';
import i18next from 'i18next';

const propTypes = {
  block: PropTypes.string,
  children: PropTypes.string,
  isCompleted: PropTypes.bool,
  superBlock: PropTypes.string,
  translationPending: PropTypes.bool.isRequired
};

function ChallengeTitle({
  block,
  children,
  isCompleted,
  superBlock,
  translationPending
}) {
  return (
    <div className='challenge-title-wrap'>
      {translationPending && (
        <Link
          className='title-translation-cta'
          to={i18next.t('learn.help-translate-link-url')}
        >
          {i18next.t('misc.translation-pending')}
        </Link>
      )}
      <div className='challenge-title-breadcrumbs'>
        <Link
          className='breadcrumb-left'
          state={{ breadcrumbBlockClick: block }}
          to={`/learn/${superBlock}`}
        >
          <span className='ellipsis'>
            {i18next.t(`intro:${superBlock}.title`)}
          </span>
        </Link>
        <div className='breadcrumb-center' />
        <Link
          className='breadcrumb-right'
          state={{ breadcrumbBlockClick: block }}
          to={`/learn/${superBlock}/#${block}`}
        >
          {i18next.t(`intro:${superBlock}.blocks.${block}.title`)}
        </Link>
      </div>
      <div className='challenge-title'>
        <div className='title-text'>
          <b>{children}</b>
          {isCompleted ? (
            <GreenPass
              style={{ height: '15px', width: '15px', marginLeft: '7px' }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default ChallengeTitle;
