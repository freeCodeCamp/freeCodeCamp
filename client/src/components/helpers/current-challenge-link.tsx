import React from 'react';

import envData from '../../../../config/env.json';

interface EnvData {
  apiLocation: string;
}

const { apiLocation } = envData as EnvData;

const currentChallengeApi = '/challenges/current-challenge';

function CurrentChallengeLink({
  children,
  isLargeBtn
}: {
  children?: JSX.ElementChildrenAttribute;
  isLargeBtn?: boolean;
}): JSX.Element {
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

export default CurrentChallengeLink;
