import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { debounce } from 'lodash';
import { challengeTypes } from '../../../../utils/challenge-types';

import './tool-panel.css';
import { openModal, executeChallenge, submitChallenge } from '../redux/actions';
import { challengeMetaSelector } from '../redux/selectors';

import { saveChallenge } from '../../../redux/actions';
import { isSignedInSelector } from '../../../redux/selectors';

const mapStateToProps = createSelector(
  challengeMetaSelector,
  isSignedInSelector,
  (
    { challengeType }: { challengeId: string; challengeType: number },
    isSignedIn
  ) => ({
    challengeType,
    isSignedIn
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      submitChallenge,
      executeChallenge,
      openHelpModal: () => openModal('help'),
      openVideoModal: () => openModal('video'),
      openResetModal: () => openModal('reset'),
      saveChallenge
    },
    dispatch
  );

interface ToolPanelProps {
  challengeType: number;
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  submitChallenge: () => void;
  saveChallenge: () => void;
  isMobile?: boolean;
  isSignedIn: boolean;
  isRunningTests?: boolean;
  openHelpModal: () => void;
  openVideoModal: () => void;
  openResetModal: () => void;
  guideUrl?: string;
  videoUrl?: string;
  challengeIsCompleted?: boolean;
}

function ToolPanel({
  challengeType,
  executeChallenge,
  saveChallenge,
  isMobile,
  isSignedIn,
  isRunningTests,
  // openResetModal,
  challengeIsCompleted,
  submitChallenge
}: ToolPanelProps) {
  const handleRunTests = () => {
    executeChallenge({ showCompletionModal: false });
  };

  const { t } = useTranslation();

  const tryToSubmitChallenge = debounce(submitChallenge, 2000, {
    leading: true
  });

  return (
    <div
      className={`tool-panel-group button-group ${
        isMobile ? 'tool-panel-group-mobile' : ''
      }`}
    >
      {!challengeIsCompleted && (
        <Button
          aria-label='Run the tests use shortcut Ctrl+enter'
          bsStyle='primary'
          onClick={handleRunTests}
        >
          {isMobile ? t('buttons.run') : t('buttons.run-test')}
          {isRunningTests && ' ...'}
        </Button>
      )}
      {challengeIsCompleted && (
        <Button bsStyle='primary' onClick={tryToSubmitChallenge}>
          {t('buttons.submit-and-go')}
        </Button>
      )}

      {isSignedIn && challengeType === challengeTypes.multifileCertProject && (
        <Button
          bsStyle='link'
          data-cy='save-code-to-database-btn'
          className='btn-invert'
          onClick={saveChallenge}
        >
          {isMobile ? t('buttons.save') : t('buttons.save-code')}
        </Button>
      )}
      {/* {challengeType !== challengeTypes.multifileCertProject && (
        <Button bsStyle='link' className='btn-invert' onClick={openResetModal}>
          {isMobile ? t('buttons.reset') : t('buttons.reset-code')}
        </Button>
      )} */}
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
