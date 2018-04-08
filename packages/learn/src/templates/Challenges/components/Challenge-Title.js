import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  isCompleted: PropTypes.bool
};

function ChallengeTitle({ children, isCompleted }) {
  let icon = null;
  if (isCompleted) {
    icon = (
      // TODO Use SVG here
      <i className='ion-checkmark-circled text-primary' title='Completed' />
    );
  }
  return (
    <h4 className='text-center challenge-title'>
      {children || 'Happy Coding!'}
      {icon}
      <hr />
    </h4>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default ChallengeTitle;
