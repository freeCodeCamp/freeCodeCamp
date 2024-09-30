import { Alert, CloseButton, type AlertProps } from '@freecodecamp/ui';
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
  const { type, message, id, variables = {} } = flashMessage;
  const { t } = useTranslation();

  // Some APIs are returning 'error' as a flash type, and it needs to be mapped to 'danger'.
  // TODO: Standardize the value of `type`.
  // Tracking issue: https://github.com/freeCodeCamp/freeCodeCamp/issues/50184
  const flashStyle =
    type === 'error' ? 'danger' : (type as AlertProps['variant']);

  function handleClose() {
    removeFlashMessage();
  }

  return (
    <TransitionGroup>
      <CSSTransition key={id} timeout={500}>
        <Alert
          variant={flashStyle}
          className='flash-message'
          data-playwright-test-label='flash-message'
        >
          {t(message, variables)}
          <CloseButton
            onClick={handleClose}
            label={t('buttons.close')}
            className='close'
          />
        </Alert>
      </CSSTransition>
    </TransitionGroup>
  );
}

Flash.displayName = 'FlashMessages';

export default Flash;
