import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@freecodecamp/react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';

import './flash.css';

type FlashProps = {
  flashMessage: {
    type: string;
    message: string;
    id: string;
    variables: Record<string, unknown>;
  };
  onClose: () => void;
};

function Flash({ flashMessage, onClose }: FlashProps): JSX.Element {
  const { type, message, id, variables = {} } = flashMessage;
  const { t } = useTranslation();
  const [flashMessageHeight, setFlashMessageHeight] = useState(0);

  useEffect(() => {
    const flashMessageElem: HTMLElement | null =
      document.querySelector('.flash-message');
    setFlashMessageHeight(flashMessageElem?.offsetHeight || 0);
    document.documentElement.style.setProperty(
      '--flash-message-height',
      `${flashMessageHeight}px`
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
          <Alert
            bsStyle={type}
            className='flash-message'
            onDismiss={handleClose}
          >
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
