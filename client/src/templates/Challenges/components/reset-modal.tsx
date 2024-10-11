import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/ui';

import { closeModal, resetChallenge } from '../redux/actions';
import { isResetModalOpenSelector } from '../redux/selectors';
import callGA from '../../../analytics/call-ga';
import { isProjectBased } from '../../../utils/curriculum-layout';

interface ResetModalProps {
  close: () => void;
  isOpen: boolean;
  challengeType: number;
  reset: () => void;
}

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

function ResetModal({
  reset,
  close,
  challengeType,
  isOpen
}: ResetModalProps): JSX.Element {
  const { t } = useTranslation();
  if (isOpen) {
    callGA({ event: 'pageview', pagePath: '/reset-modal' });
  }
  return (
    <Modal onClose={close} open={isOpen} variant='danger'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('learn.reset')}
      </Modal.Header>
      <Modal.Body alignment='center'>
        <p>
          {isProjectBased(challengeType)
            ? t('learn.revert-warn')
            : t('learn.reset-warn')}
        </p>
        <p>
          <em>{t('learn.reset-warn-2')}</em>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='large'
          variant='danger'
          onClick={withActions(reset, close)}
        >
          {isProjectBased(challengeType)
            ? t('buttons.revert-to-saved-code')
            : t('buttons.reset-lesson')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default connect(mapStateToProps, mapDispatchToProps)(ResetModal);
