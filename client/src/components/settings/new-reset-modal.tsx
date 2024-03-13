import { Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

import { Spacer } from '../helpers';

type ResetModalProps = {
  onHide: () => void;
  reset: () => void;
  show: boolean;
};

function NewResetModal(props: ResetModalProps): JSX.Element {
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
        <p
          style={{
            color: '#ff0000',
            fontWeight: 'bold',
            fontSize: '1.5em',
            marginTop: '0.5em'
          }}
        >
          {t('settings.danger.new-reset-dialog.reset-warning')}
        </p>
        <p>{t('settings.danger.new-reset-dialog.reset-action-explanation')}</p>
        <ul
          style={{
            maxWidth: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '3em',
            listStylePosition: 'inside',
            textAlign: 'left'
          }}
        >
          <li>
            {t(
              'settings.danger.new-reset-dialog.reset-challenges-and-progress-desc'
            )}
          </li>
          <li>
            {t(
              'settings.danger.new-reset-dialog.reset-code-and-certifications-desc'
            )}
          </li>
          <li>
            {t('settings.danger.new-reset-dialog.reset-certifications-desc')}
          </li>
        </ul>
        <p>
          {t('settings.danger.new-reset-dialog.reset-consequence-warning')}
          <br />
          {t('settings.danger.new-reset-dialog.reset-recovery-warning')}
        </p>
        <hr />
        <Button
          block={true}
          size='large'
          variant='primary'
          onClick={props.onHide}
          type='button'
        >
          {t('settings.danger.nevermind-2')}
        </Button>
        <Spacer size='small' />
        <Button
          block={true}
          size='large'
          variant='danger'
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

NewResetModal.displayName = 'ResetModal';

export default NewResetModal;
