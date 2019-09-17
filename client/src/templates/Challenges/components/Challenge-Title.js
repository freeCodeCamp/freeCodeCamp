import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../components/helpers/Link';
import { GlobalHotKeys } from 'react-hotkeys';
import { navigate } from 'gatsby';

import './challenge-title.css';
import GreenPass from '../../../assets/icons/GreenPass';

const keyMap = {
  NAVIGATE_PREV: ['ctrl+shift+<', 'cmd+shift+<'],
  NAVIGATE_NEXT: ['ctrl+shift+>', 'cmd+shift+>']
};

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
  const handlers = {
    NAVIGATE_PREV: () => navigate(prevChallengePath),
    NAVIGATE_NEXT: () => navigate(nextChallengePath)
  };
  return (
    <div className='challenge-title-wrap'>
      <GlobalHotKeys handlers={handlers} keyMap={keyMap} />
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
