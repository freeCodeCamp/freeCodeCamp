import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonSpacer } from '../helpers';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Modal } from '@freecodecamp/react-bootstrap';

type ResetModalProps = {
  onHide: () => void;
  reset: () => void;
  show: boolean;
};

function ResetModal(props: ResetModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide } = props;

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
          {t('settings.danger.reset-heading')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('settings.danger.reset-p1')}</p>
        <p>{t('settings.danger.reset-p2')}</p>
        <hr />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          className='btn-invert'
          onClick={props.onHide}
          type='button'
        >
          {t('settings.danger.nevermind-2')}
        </Button>
        <ButtonSpacer />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='danger'
          className='btn-danger'
          onClick={props.reset}
          type='button'
        >
          {t('settings.danger.reset-confirm')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default ResetModal;
