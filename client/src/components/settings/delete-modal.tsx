import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Spacer } from '../helpers';

import './danger-zone.css';

type DeleteModalProps = {
  delete: () => void;
  onHide: () => void;
  show: boolean;
};

function DeleteModal(props: DeleteModalProps): JSX.Element {
  const { show, onHide } = props;
  const email = 'support@freecodecamp.org';
  const { t } = useTranslation();
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
          {t('settings.danger.delete-title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('settings.danger.delete-p1')}</p>
        <p>{t('settings.danger.delete-p2')}</p>
        <p>
          <Trans i18nKey='settings.danger.delete-p3'>
            <a href={`mailto:${email}`} title={email}>
              {{ email }}
            </a>
          </Trans>
        </p>
        <hr />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          className='btn-invert'
          onClick={props.onHide}
          type='button'
        >
          {t('settings.danger.nevermind')}
        </Button>
        <Spacer size='small' />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='danger'
          className='btn-danger'
          onClick={props.delete}
          type='button'
        >
          {t('settings.danger.certain')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';

export default DeleteModal;
