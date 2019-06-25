import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@freecodecamp/react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './flash.css';

function Flash({ flashMessage, onClose }) {
  const { type, message, id } = flashMessage;
  return (
    <TransitionGroup>
      <CSSTransition classNames='flash-message' key={id} timeout={500}>
        <Alert bsStyle={type} className='flash-message' onDismiss={onClose}>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Alert>
      </CSSTransition>
    </TransitionGroup>
  );
}

Flash.displayName = 'FlashMessages';
Flash.propTypes = {
  flashMessage: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired
};

export default Flash;
