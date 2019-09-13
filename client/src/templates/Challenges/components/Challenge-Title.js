import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../components/helpers/Link';

import './challenge-title.css';
import GreenPass from '../../../assets/icons/GreenPass';

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
        {isCompleted ? (
          <GreenPass
            style={{ height: '15px', width: '15px', marginLeft: '5px' }}
          />
        ) : null}
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
