import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

import { closeModal } from '../redux/actions';
import { isFinishQuizModalOpenSelector } from '../redux/selectors';
import { Spacer } from '../../../components/helpers';

interface FinishQuizModalProps {
  closeFinishQuizModal: () => void;
  isFinishQuizModalOpen: boolean;
  onFinish: () => void;
}

const mapStateToProps = createSelector(
  isFinishQuizModalOpenSelector,
  (isFinishQuizModalOpen: boolean) => ({
    isFinishQuizModalOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeFinishQuizModal: () => closeModal('finishQuiz')
    },
    dispatch
  );

const FinishQuizModal = ({
  closeFinishQuizModal,
  isFinishQuizModalOpen,
  onFinish
}: FinishQuizModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal onClose={closeFinishQuizModal} open={isFinishQuizModalOpen}>
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.quiz.finish-modal-header')}
      </Modal.Header>
      <Modal.Body alignment='center'>
        {t('learn.quiz.finish-modal-body')}
      </Modal.Body>
      <Modal.Footer>
        <Button block size='medium' variant='primary' onClick={onFinish}>
          {t('learn.quiz.finish-modal-yes')}
        </Button>
        <Spacer size='xxSmall' />
        <Button
          block
          size='medium'
          variant='primary'
          onClick={closeFinishQuizModal}
        >
          {t('learn.quiz.finish-modal-no')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

FinishQuizModal.displayName = 'FinishQuizModal';

export default connect(mapStateToProps, mapDispatchToProps)(FinishQuizModal);
