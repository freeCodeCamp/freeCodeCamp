import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecurityLockIcon = (): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon icon={faLock} />
      &nbsp;&nbsp;
    </>
  );
};

export default SecurityLockIcon;
