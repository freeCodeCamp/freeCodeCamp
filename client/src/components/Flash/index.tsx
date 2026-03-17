import {
  Alert,
  CloseButton,
  type AlertProps,
  Container,
  Col,
  Row
} from '@freecodecamp/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
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

  const getTranslatedFlashMessage = () => {
    if (!message) {
      return '';
    }

    const [namespace, key] = message.includes(':')
      ? message.split(':', 2)
      : ['translations', message];
    if (namespace !== 'translations') {
      return message;
    }

    return t(key as never, {
      ns: namespace,
      ...variables,
      defaultValue: message
    });
  };

  return (
    <Alert
      key={id}
      variant={flashStyle}
      className='flash-container'
      data-playwright-test-label='flash-message'
    >
      <Container>
        <Row>
          <Col
            md={8}
            mdOffset={2}
            sm={10}
            smOffset={1}
            xs={12}
            className='flash-message'
            data-testid='flash-message-content'
          >
            {getTranslatedFlashMessage()}
            <CloseButton
              onClick={handleClose}
              label={t($ => $.buttons.close)}
              className='close'
            />
          </Col>
        </Row>
      </Container>
    </Alert>
  );
}

Flash.displayName = 'FlashMessages';

export default Flash;
