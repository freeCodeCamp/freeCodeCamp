import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../components/helpers/Link';

import './challenge-title.css';

const propTypes = {
  children: PropTypes.string,
  introPath: PropTypes.string,
  isCompleted: PropTypes.bool,
  nextChallengePath: PropTypes.string,
  prevChallengePath: PropTypes.string,
  showPrevNextBtns: PropTypes.bool
};

function ChallengeTitle({
  children,
  introPath,
  isCompleted,
  nextChallengePath,
  prevChallengePath,
  showPrevNextBtns
}) {
  let icon = null;
  if (isCompleted) {
    icon = (
      // TODO Use SVG here
      <i className='ion-checkmark-circled text-primary' title='Completed' />
    );
  }
  return (
    <div className='challenge-title-wrap'>
      {showPrevNextBtns ? (
        <Link
          aria-label='Previous lesson'
          className='btn-invert btn btn-primary'
          to={prevChallengePath}
        >
          &lt;
        </Link>
      ) : null}
      <h2 className='text-center challenge-title'>
        {children || 'Happy Coding!'}
        {icon}
      </h2>
      {showPrevNextBtns ? (
        <Link
          aria-label='Next lesson'
          className='btn-invert btn btn-primary'
          to={introPath ? introPath : nextChallengePath}
        >
          &gt;
        </Link>
      ) : null}
    </div>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default ChallengeTitle;
