// Package Utilities
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

// Local Utilities
import { closeModal } from '../../redux/actions';
import { isFinishExamModalOpenSelector } from '../../redux/selectors';
import { Spacer } from '../../../../components/helpers';

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
    <Modal onClose={closeFinishExamModal} open={isFinishExamModalOpen}>
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.exam.finish-header')}
      </Modal.Header>
      <Modal.Body>
        <div className='text-center'>{t('learn.exam.finish')}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='medium'
          variant='primary'
          onClick={finishExam}
        >
          {t('learn.exam.finish-yes')}
        </Button>
        <Spacer size='xxSmall' />
        <Button
          block={true}
          size='medium'
          variant='primary'
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
