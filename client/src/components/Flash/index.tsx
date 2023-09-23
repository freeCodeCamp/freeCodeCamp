import { Alert } from '@freecodecamp/react-bootstrap';
import React from 'react';
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

  function handleClose() {
    removeFlashMessage();
  }

  return (
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
  );
}

Flash.displayName = 'FlashMessages';

export default Flash;
