import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecurityLockIcon = (): JSX.Element => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faLock} />
      &nbsp;&nbsp;
    </React.Fragment>
  );
};

export default SecurityLockIcon;
