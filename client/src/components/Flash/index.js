import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';

import './flash.css';

function Flash({ flashMessage, onClose }) {
  const { type, message, id, variables = {} } = flashMessage;
  const { t } = useTranslation();
  const [flashMessageHeight, setFlashMessageHeight] = useState(null);

  useEffect(() => {
    setFlashMessageHeight(
      document.querySelector('.flash-message').offsetHeight
    );
    document.documentElement.style.setProperty(
      '--flash-message-height',
      flashMessageHeight + 'px'
    );
  }, [flashMessageHeight]);

  function handleClose() {
    document.documentElement.style.setProperty('--flash-message-height', '0px');
    onClose();
  }

  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames='flash-message' key={id} timeout={500}>
          <Alert className='flash-message' onClose={handleClose} variant={type}>
            {t(message, variables)}
          </Alert>
        </CSSTransition>
      </TransitionGroup>
      {flashMessage && (
        <div
          style={{
            height: flashMessageHeight + 'px'
          }}
        />
      )}
    </>
  );
}

Flash.displayName = 'FlashMessages';
Flash.propTypes = {
  flashMessage: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string,
    variables: PropTypes.object
  }),
  onClose: PropTypes.func.isRequired
};

export default Flash;
