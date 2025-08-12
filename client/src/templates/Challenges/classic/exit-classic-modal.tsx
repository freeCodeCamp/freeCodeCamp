import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import { closeModal } from '../redux/actions';
import { isExitClassicModalOpenSelector } from '../redux/selectors';

interface ExitClassicModalProps {
  closeExitClassicModal: () => void;
  isExitClassicModalOpen: boolean;
  onExit: () => void;
}

const mapStateToProps = (state: unknown) => ({
  isExitClassicModalOpen: isExitClassicModalOpenSelector(state) as boolean
});

const mapDispatchToProps = {
  closeExitClassicModal: () => closeModal('exitClassic')
};

const ExitClassicModal = ({
  closeExitClassicModal,
  isExitClassicModalOpen,
  onExit
}: ExitClassicModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={closeExitClassicModal}
      open={isExitClassicModalOpen}
      variant='danger'
    >
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.classic.exit-modal-header')}
      </Modal.Header>
      <Modal.Body alignment='center'>
        {t('learn.classic.exit-modal-body')}
      </Modal.Body>
      <Modal.Footer>
        <Button block variant='primary' onClick={closeExitClassicModal}>
          {t('learn.classic.exit-modal-no')}
        </Button>
        <Spacer size='xxs' />
        <Button block variant='danger' onClick={onExit}>
          {t('learn.classic.exit-modal-yes')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ExitClassicModal.displayName = 'ExitClassicModal';

export default connect(mapStateToProps, mapDispatchToProps)(ExitClassicModal);
