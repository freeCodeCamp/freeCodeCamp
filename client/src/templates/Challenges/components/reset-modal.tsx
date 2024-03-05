// Package Utilities
import { Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/ui';

// Local Utilities
import { closeModal, resetChallenge } from '../redux/actions';
import { isResetModalOpenSelector } from '../redux/selectors';
import callGA from '../../../analytics/call-ga';

// Styles
import './reset-modal.css';

// Types
interface ResetModalProps {
  close: () => void;
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
    callGA({ event: 'pageview', pagePath: '/reset-modal' });
  }
  return (
    <Modal
      data-playwright-test-label='reset-modal'
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
          data-cy='reset-modal-confirm'
          block={true}
          size='large'
          variant='danger'
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
