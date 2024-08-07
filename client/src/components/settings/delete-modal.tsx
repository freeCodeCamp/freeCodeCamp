import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

import { Spacer } from '../helpers';

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
    <Modal onClose={onHide} open={show} variant='danger' size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('settings.danger.delete-title')}
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
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='large'
          variant='primary'
          onClick={props.onHide}
          type='button'
        >
          {t('settings.danger.nevermind')}
        </Button>
        <Spacer size='small' />
        <Button
          block={true}
          size='large'
          variant='danger'
          onClick={props.delete}
          type='button'
        >
          {t('settings.danger.certain')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';

export default DeleteModal;
