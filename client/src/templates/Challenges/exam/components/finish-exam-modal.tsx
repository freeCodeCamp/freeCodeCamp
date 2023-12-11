// Package Utilities
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

// Local Utilities
import { closeModal } from '../../redux/actions';
import { isFinishExamModalOpenSelector } from '../../redux/selectors';

// Types
interface FinishExamModalProps {
  closeFinishExamModal: () => void;
  isFinishExamModalOpen: boolean;
  finishExam: () => void;
}

// Redux Setup
const mapStateToProps = createSelector(
  isFinishExamModalOpenSelector,
  (isFinishExamModalOpen: boolean) => ({
    isFinishExamModalOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeFinishExamModal: () => closeModal('finishExam')
    },
    dispatch
  );

// Component
function FinishExamModal({
  closeFinishExamModal,
  isFinishExamModalOpen,
  finishExam
}: FinishExamModalProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Modal
      animation={false}
      dialogClassName='finish-exam-modal'
      keyboard={true}
      onHide={closeFinishExamModal}
      show={isFinishExamModalOpen}
    >
      <Modal.Header className='finish-exam-modal-header' closeButton={true}>
        <Modal.Title className='text-center'>
          {t('learn.exam.finish-header')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='reset-modal-body'>
        <div className='text-center'>{t('learn.exam.finish')}</div>
      </Modal.Body>
      <Modal.Footer className='reset-modal-footer'>
        <Button
          data-cy='finish-exam-modal-confirm'
          block={true}
          bsSize='medium'
          bsStyle='primary'
          onClick={finishExam}
        >
          {t('learn.exam.finish-yes')}
        </Button>
        <Button
          data-cy='finish-exam-modal-deny'
          block={true}
          bsSize='medium'
          bsStyle='primary'
          onClick={closeFinishExamModal}
        >
          {t('learn.exam.finish-no')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

FinishExamModal.displayName = 'FinishExamModal';

export default connect(mapStateToProps, mapDispatchToProps)(FinishExamModal);
