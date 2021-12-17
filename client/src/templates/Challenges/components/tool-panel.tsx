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
import { challengeTypes } from '../../../../utils/challenge-types';

import './tool-panel.css';
import {
  openModal,
  executeChallenge,
  saveChallenge,
  challengeMetaSelector
} from '../redux';

// const mapStateToProps = () => ({});
//      challengeType === challengeTypes.multiFileCertProject

const mapStateToProps = createSelector(
  challengeMetaSelector,
  ({ challengeId, challengeType }: { challengeId: string, challengeType: number }) => ({
    challengeId,
    challengeType
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      executeChallenge,
      openHelpModal: () => openModal('help'),
      openVideoModal: () => openModal('video'),
      openResetModal: () => openModal('reset'),
      saveChallenge
    },
    dispatch
  );

interface ToolPanelProps {
  challengeId: string;
  challengeType: number;
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  saveChallenge: () => void;
  isMobile?: boolean;
  openHelpModal: () => void;
  openVideoModal: () => void;
  openResetModal: () => void;
  guideUrl: string;
  videoUrl: string;
}

function ToolPanel({
  challengeId,
  challengeType,
  executeChallenge,
  saveChallenge,
  isMobile,
  openHelpModal,
  openVideoModal,
  openResetModal,
  guideUrl,
  videoUrl
}: ToolPanelProps) {
  const handleRunTests = () => {
    executeChallenge({ showCompletionModal: true });
  };
  const { t } = useTranslation();
  return (
    <div
      className={`tool-panel-group button-group ${
        isMobile ? 'tool-panel-group-mobile' : ''
      }`}
    >
      <Button
        aria-label='Run the tests use shortcut Ctrl+enter'
        block={true}
        bsStyle='primary'
        onClick={handleRunTests}
      >
        {isMobile ? t('buttons.run') : t('buttons.run-test')}
      </Button>
      {challengeType === challengeTypes.multiFileCertProject ? (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={saveChallenge}
        >
          {isMobile ? t('buttons.save') : t('buttons.save')}
        </Button>
      ) : (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={openResetModal}
        >
          {isMobile ? t('buttons.reset') : t('buttons.reset-code')}
        </Button>
      )}
      <DropdownButton
        block={true}
        bsStyle='primary'
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
