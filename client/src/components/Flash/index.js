import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@freecodecamp/react-bootstrap';

import './flash.css';

function createDismissHandler(fn, id) {
  return () => fn(id);
}

function Flash({ messages, onClose }) {
  return messages.map(({ type, message, id }) => (
    <Alert
      bsStyle={type}
      className='flash-message'
      key={id}
      onDismiss={createDismissHandler(onClose, id)}
    >
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </Alert>
  ));
}

Flash.displayName = 'FlashMessages';
Flash.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      message: PropTypes.string
    })
  ),
  onClose: PropTypes.func.isRequired
};

export default Flash;
