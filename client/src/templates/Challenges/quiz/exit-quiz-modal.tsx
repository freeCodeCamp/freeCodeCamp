import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import { closeModal } from '../redux/actions';
import { isExitQuizModalOpenSelector } from '../redux/selectors';

interface ExitQuizModalProps {
  closeExitQuizModal: () => void;
  isExitQuizModalOpen: boolean;
  onExit: () => void;
}

const mapStateToProps = (state: unknown) => ({
  isExitQuizModalOpen: isExitQuizModalOpenSelector(state) as boolean
});

const mapDispatchToProps = {
  closeExitQuizModal: () => closeModal('exitQuiz')
};

const ExitQuizModal = ({
  closeExitQuizModal,
  isExitQuizModalOpen,
  onExit
}: ExitQuizModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={closeExitQuizModal}
      open={isExitQuizModalOpen}
      variant='danger'
    >
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.quiz.exit-modal-header')}
      </Modal.Header>
      <Modal.Body alignment='center'>
        {t('learn.quiz.exit-modal-body')}
      </Modal.Body>
      <Modal.Footer>
        <Button block variant='primary' onClick={closeExitQuizModal}>
          {t('learn.quiz.exit-modal-no')}
        </Button>
        <Spacer size='xxs' />
        <Button block variant='danger' onClick={onExit}>
          {t('learn.quiz.exit-modal-yes')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ExitQuizModal.displayName = 'ExitQuizModal';

export default connect(mapStateToProps, mapDispatchToProps)(ExitQuizModal);
