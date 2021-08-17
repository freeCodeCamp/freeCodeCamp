import { Modal, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonSpacer } from '../helpers';

import './webhook-token.css';

type WebhookRevokeModalProps = {
  onHide: () => void;
  revoke: () => void;
  show: boolean;
};

function WebhookRevokeModal(props: WebhookRevokeModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide, revoke } = props;

  return (
    <Modal
      aria-labelledby='modal-title'
      backdrop={true}
      bsSize='lg'
      className='text-center'
      keyboard={true}
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title'>{t('webhook-token.revoke')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('webhook-token.revoke-p1')}</p>
        <p>{t('webhook-token.revoke-p2')}</p>
        <hr />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          className='btn-invert'
          onClick={props.onHide}
          type='button'
        >
          {t('webhook-token.no-thanks')}
        </Button>
        <ButtonSpacer />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='danger'
          className='btn-danger'
          onClick={revoke}
          type='button'
        >
          {t('webhook-token.revoke-confirm')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

WebhookRevokeModal.displayName = 'WebhookRevokeModal';

export default WebhookRevokeModal;
