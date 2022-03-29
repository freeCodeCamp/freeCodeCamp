import { Alert } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FlashState } from '../../redux/types';
import { removeFlashMessage } from './redux';

import './flash.css';

type FlashProps = {
  flashMessage: FlashState['message'];
  removeFlashMessage: typeof removeFlashMessage;
};

function Flash({ flashMessage, removeFlashMessage }: FlashProps): JSX.Element {
  const { type, message, id, variables } = flashMessage;
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
    removeFlashMessage();
  }

  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames='flash-message' key={id} timeout={500}>
          <Alert
            bsStyle={type}
            className='flash-message'
            closeLabel={t('buttons.close')}
            onDismiss={handleClose}
          >
            {t(message, variables)}
          </Alert>
        </CSSTransition>
      </TransitionGroup>
      {flashMessage && (
        <div
          style={{
            theyight: `${flashMessageHeight}px`
          }}
        />
      )}
    </>
  );
}

Flash.displayName = 'FlashMessages';

export default Flash;
