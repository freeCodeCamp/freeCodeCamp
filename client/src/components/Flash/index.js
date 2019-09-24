import React from 'react';
import cogoToast from 'cogo-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle as infoIcon,
  faCheckCircle as successIcon,
  faExclamationCircle as warningIcon,
  faTimesCircle as errorIcon
} from '@fortawesome/free-solid-svg-icons';

import './flash.css';

function Flash({ flashMessage, removeFlashMessage }) {
  const { type, message, id } = flashMessage;

  // We are using our custom icons for better stylistic reasons
  let flashHandler = cogoToast.info;
  let icon = <FontAwesomeIcon icon={infoIcon} />;
  switch (type) {
    case 'success': {
      flashHandler = cogoToast.success;
      icon = <FontAwesomeIcon icon={successIcon} />;
      break;
    }
    case 'warn': {
      flashHandler = cogoToast.warn;
      icon = <FontAwesomeIcon icon={warningIcon} />;
      break;
    }
    case 'error': {
      flashHandler = cogoToast.error;
      icon = <FontAwesomeIcon icon={errorIcon} />;
      break;
    }
    default:
      break;
  }

  flashHandler(
    <div key={id}>
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </div>,
    {
      renderIcon: () => {
        return icon;
      },
      hideAfter: 5,
      position: 'top-right'
    }
  ).then(() => removeFlashMessage());
}

export default Flash;
