// Package Utilities
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

// Local Utilities
import { closeModal } from '../../redux/actions';
import { isExitExamModalOpenSelector } from '../../redux/selectors';
import { Spacer } from '../../../../components/helpers';

// Types
interface ExitExamModalProps {
  closeExitExamModal: () => void;
  isExitExamModalOpen: boolean;
  exitExam: () => void;
}

// Redux Setup
const mapStateToProps = createSelector(
  isExitExamModalOpenSelector,
  (isExitExamModalOpen: boolean) => ({
    isExitExamModalOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeExitExamModal: () => closeModal('exitExam')
    },
    dispatch
  );

// Component
function ExitExamModal({
  closeExitExamModal,
  isExitExamModalOpen,
  exitExam
}: ExitExamModalProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={closeExitExamModal}
      open={isExitExamModalOpen}
      variant='danger'
    >
      <Modal.Header closeButtonClassNames='close'>
        {t('learn.exam.exit-header')}
      </Modal.Header>
      <Modal.Body>
        <div className='text-center'>{t('learn.exam.exit')}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button block={true} variant='primary' onClick={closeExitExamModal}>
          {t('learn.exam.exit-no')}
        </Button>
        <Spacer size='xxSmall' />
        <Button block={true} variant='danger' onClick={exitExam}>
          {t('learn.exam.exit-yes')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ExitExamModal.displayName = 'ExitExamModal';

export default connect(mapStateToProps, mapDispatchToProps)(ExitExamModal);
