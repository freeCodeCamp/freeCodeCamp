import { Modal, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonSpacer } from '../helpers';

import './webhook-token.css';

type WebhookGenerateModalProps = {
  generate: () => void;
  onHide: () => void;
  show: boolean;
};

function WebhookGenerateModal(props: WebhookGenerateModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide, generate } = props;

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
          {t('webhook-token.generate')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('webhook-token.generate-p1')}</p>
        <p>{t('webhook-token.generate-p2')}</p>
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
          onClick={generate}
          type='button'
        >
          {t('webhook-token.generate-confirm')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

WebhookGenerateModal.displayName = 'WebhookGenerateModal';

export default WebhookGenerateModal;
