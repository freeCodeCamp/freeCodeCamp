// Package Utilities
import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

// Local Utilities
import { isResetModalOpenSelector, closeModal, resetChallenge } from '../redux';
import { executeGA } from '../../../redux';

// Styles
import './reset-modal.css';

// Types
interface ResetModalProps {
  close: () => void;
  executeGA: () => void;
  isOpen: boolean;
  reset: () => void;
}

// Redux Setup
const mapStateToProps = createSelector(
  isResetModalOpenSelector,
  (isOpen: boolean) => ({
    isOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      close: () => closeModal('reset'),
      executeGA,
      reset: () => resetChallenge()
    },
    dispatch
  );

function withActions(...fns: Array<() => void>) {
  return () => fns.forEach(fn => fn());
}

// Component
function ResetModal({ reset, close, isOpen }: ResetModalProps): JSX.Element {
  const { t } = useTranslation();
  if (isOpen) {
    executeGA({ type: 'modal', data: '/reset-modal' });
  }
  return (
    <Modal
      animation={false}
      dialogClassName='reset-modal'
      keyboard={true}
      onHide={close}
      show={isOpen}
    >
      <Modal.Header className='reset-modal-header' closeButton={true}>
        <Modal.Title className='text-center'>{t('learn.reset')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='reset-modal-body'>
        <div className='text-center'>
          <p>{t('learn.reset-warn')}</p>
          <p>
            <em>{t('learn.reset-warn-2')}</em>.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='reset-modal-footer'>
        <Button
          block={true}
          bsSize='large'
          bsStyle='danger'
          onClick={withActions(reset, close)}
        >
          {t('buttons.reset-lesson')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default connect(mapStateToProps, mapDispatchToProps)(ResetModal);
