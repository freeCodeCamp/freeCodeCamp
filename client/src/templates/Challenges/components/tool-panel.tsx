import {
  Button,
  DropdownButton,
  MenuItem
} from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { debounce } from 'lodash';
import { challengeTypes } from '../../../../utils/challenge-types';

import './tool-panel.css';
import {
  openModal,
  executeChallenge,
  challengeMetaSelector,
  submitChallenge
} from '../redux';

import { saveChallenge, isSignedInSelector } from '../../../redux';

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
  openHelpModal: () => void;
  openVideoModal: () => void;
  openResetModal: () => void;
  guideUrl: string;
  videoUrl: string;
  challengeIsCompleted?: boolean;
}

function ToolPanel({
  challengeType,
  executeChallenge,
  saveChallenge,
  isMobile,
  isSignedIn,
  openHelpModal,
  openVideoModal,
  openResetModal,
  guideUrl,
  videoUrl,
  challengeIsCompleted,
  submitChallenge
}: ToolPanelProps) {
  const handleRunTests = () => {
    executeChallenge({ showCompletionModal: false });
  };

  const { t } = useTranslation();

  const tryToSubmitChallenge = debounce(submitChallenge, 2000);

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
      {challengeType !== challengeTypes.multifileCertProject && (
        <Button bsStyle='link' className='btn-invert' onClick={openResetModal}>
          {isMobile ? t('buttons.reset') : t('buttons.reset-code')}
        </Button>
      )}
      <DropdownButton
        bsStyle='link'
        block={false}
        className='btn-invert'
        id='get-help-dropdown'
        title={isMobile ? t('buttons.help') : t('buttons.get-help')}
      >
        {guideUrl ? (
          <MenuItem
            bsStyle='primary'
            className='btn-invert'
            href={guideUrl}
            target='_blank'
          >
            {t('buttons.get-hint')}
          </MenuItem>
        ) : null}
        {videoUrl ? (
          <MenuItem
            bsStyle='primary'
            className='btn-invert'
            onClick={openVideoModal}
          >
            {t('buttons.watch-video')}
          </MenuItem>
        ) : null}
        <MenuItem
          bsStyle='primary'
          className='btn-invert'
          onClick={openHelpModal}
        >
          {t('buttons.ask-for-help')}
        </MenuItem>
      </DropdownButton>
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
