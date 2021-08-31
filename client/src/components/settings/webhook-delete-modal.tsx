import { Modal, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonSpacer } from '../helpers';

type WebhookDeleteModalProps = {
  onHide: () => void;
  deleteFunction: () => void;
  show: boolean;
};

function WebhookDeleteModal(props: WebhookDeleteModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide, deleteFunction } = props;

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
        <Modal.Title id='modal-title'>
          {t('webhook-token.delete-title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('webhook-token.delete-p2')}</p>
        <p>{t('webhook-token.delete-p3')}</p>
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
          onClick={deleteFunction}
          type='button'
        >
          {t('webhook-token.yes-please')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

WebhookDeleteModal.displayName = 'WebhookDeleteModal';

export default WebhookDeleteModal;
