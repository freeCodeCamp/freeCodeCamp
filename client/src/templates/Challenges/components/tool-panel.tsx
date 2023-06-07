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
import { openModal, executeChallenge } from '../redux/actions';
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
  saveChallenge: () => void;
  isMobile?: boolean;
  isSignedIn: boolean;
  openHelpModal: () => void;
  openVideoModal: () => void;
  openResetModal: () => void;
  guideUrl: string;
  videoUrl: string;
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
      {isSignedIn && challengeType === challengeTypes.multifileCertProject && (
        <Button
          block={true}
          bsStyle='primary'
          data-cy='save-code-to-database-btn'
          className='btn-invert'
          onClick={saveChallenge}
        >
          {isMobile ? t('buttons.save') : t('buttons.save-code')}
        </Button>
      )}
      {challengeType !== challengeTypes.multifileCertProject && (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={openResetModal}
        >
          {isMobile ? t('buttons.reset') : t('buttons.reset-lesson')}
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
