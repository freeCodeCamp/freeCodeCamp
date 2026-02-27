import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function Reset(): JSX.Element {
  return <FontAwesomeIcon icon={faEraser} aria-hidden='true' />;
}

Reset.displayName = 'Reset';

export default Reset;
