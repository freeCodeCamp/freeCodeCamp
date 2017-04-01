import React, { PropTypes } from 'react';

import ns from './ns.json';

const propTypes = {
  children: PropTypes.string,
  isCompleted: PropTypes.bool
};

export default function ChallengeTitle({ children, isCompleted }) {
  let icon = null;
  if (isCompleted) {
    icon = (
      <i
        className='ion-checkmark-circled text-primary'
        title='Completed'
      />
    );
  }
  return (
    <h4 className={ `text-center ${ns}-title` }>
      { children || 'Happy Coding!' }
      { icon }
      <hr />
    </h4>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;
