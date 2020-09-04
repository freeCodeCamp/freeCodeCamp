import React from 'react';
import PropTypes from 'prop-types';

import { apiLocation } from '../../../config/env.json';

const currentChallengeApi = '/challenges/current-challenge';

const propTypes = {
  children: PropTypes.any,
  isLargeBtn: PropTypes.bool
};

function CurrentChallengeLink({ children, isLargeBtn }) {
  let classNames;
  if (isLargeBtn) {
    classNames = 'btn btn-lg btn-primary btn-block';
  } else {
    classNames = 'btn btn-primary btn-block';
  }
  return (
    <a className={classNames} href={`${apiLocation}${currentChallengeApi}`}>
      {children}
    </a>
  );
}

CurrentChallengeLink.displayName = 'CurrentChallengeLink';
CurrentChallengeLink.propTypes = propTypes;

export default CurrentChallengeLink;
