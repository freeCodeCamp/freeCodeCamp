import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

interface ExitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExit: () => void;
}

export const ExitProjectModal = ({
  isOpen,
  onClose,
  onExit
}: ExitProjectModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal onClose={onClose} open={isOpen} variant='danger'>
      <Modal.Header closeButtonClassNames='close'>
        {t('buttons.exit')}
      </Modal.Header>
      <Modal.Body alignment='center'>{t('misc.navigation-warning')}</Modal.Body>
      <Modal.Footer>
        <Button block variant='primary' onClick={onClose}>
          {t('buttons.cancel')}
        </Button>
        <Spacer size='xxs' />
        <Button block variant='danger' onClick={onExit}>
          {t('buttons.exit')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ExitProjectModal.displayName = 'ExitProjectModal';
