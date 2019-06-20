import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Button } from '@freecodecamp/react-bootstrap';

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
        <Button
          aria-label='Previous lesson'
          bsStyle='primary'
          className='btn-invert'
          onClick={() => navigate(prevChallengePath)}
        >
          &lt;
        </Button>
      ) : null}
      <h2 className='text-center challenge-title'>
        {children || 'Happy Coding!'}
        {icon}
      </h2>
      {showPrevNextBtns ? (
        <Button
          aria-label='Next lesson'
          bsStyle='primary'
          className='btn-invert'
          onClick={() => navigate(introPath ? introPath : nextChallengePath)}
        >
          &gt;
        </Button>
      ) : null}
    </div>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default ChallengeTitle;
