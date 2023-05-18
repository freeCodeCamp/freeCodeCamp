// Package Utilities
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

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
  return (
    <Modal
      animation={false}
      dialogClassName='finish-exam-modal'
      keyboard={true}
      onHide={closeFinishExamModal}
      show={isFinishExamModalOpen}
    >
      <Modal.Header className='finish-exam-modal-header' closeButton={true}>
        <Modal.Title className='text-center'>Finish Exam</Modal.Title>
      </Modal.Header>
      <Modal.Body className='reset-modal-body'>
        <div className='text-center'>
          Are you sure? You will not be able to change any answers. Your results
          will be final.
        </div>
      </Modal.Body>
      <Modal.Footer className='reset-modal-footer'>
        <Button
          data-cy='finish-exam-modal-confirm'
          block={true}
          bsSize='medium'
          bsStyle='primary'
          onClick={finishExam}
        >
          Yes, I am finished
        </Button>
        <Button
          data-cy='finish-exam-modal-deny'
          block={true}
          bsSize='medium'
          bsStyle='primary'
          onClick={closeFinishExamModal}
        >
          No, I would like to continue the exam
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

FinishExamModal.displayName = 'FinishExamModal';

export default connect(mapStateToProps, mapDispatchToProps)(FinishExamModal);
