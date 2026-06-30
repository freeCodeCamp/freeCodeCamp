import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import { closeModal } from '../redux/actions';
import { isExitProjectModalOpenSelector } from '../redux/selectors';

interface ExitProjectModalProps {
  closeExitProjectModal: () => void;
  isExitProjectModalOpen: boolean;
  onExit: () => void;
}

const mapStateToProps = (state: unknown) => ({
  isExitProjectModalOpen: isExitProjectModalOpenSelector(state) as boolean
});

const mapDispatchToProps = {
  closeExitProjectModal: () => closeModal('exitProject')
};

const ExitProjectModal = ({
  closeExitProjectModal,
  isExitProjectModalOpen,
  onExit
}: ExitProjectModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={closeExitProjectModal}
      open={isExitProjectModalOpen}
      variant='danger'
    >
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.project.exit-modal-header')}
      </Modal.Header>
      <Modal.Body alignment='center'>{t('misc.navigation-warning')}</Modal.Body>
      <Modal.Footer>
        <Button block variant='primary' onClick={closeExitProjectModal}>
          {t('learn.project.exit-modal-no')}
        </Button>
        <Spacer size='xxs' />
        <Button block variant='danger' onClick={onExit}>
          {t('learn.project.exit-modal-yes')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ExitProjectModal.displayName = 'ExitProjectModal';

export default connect(mapStateToProps, mapDispatchToProps)(ExitProjectModal);
