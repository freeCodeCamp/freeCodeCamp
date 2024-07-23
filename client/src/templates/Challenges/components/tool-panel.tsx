import { Dropdown, MenuItem, Button } from '@freecodecamp/ui';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { challengeTypes } from '../../../../../shared/config/challenge-types';

import './tool-panel.css';
import { openModal, executeChallenge } from '../redux/actions';
import { challengeMetaSelector } from '../redux/selectors';

import { saveChallenge } from '../../../redux/actions';
import { isSignedInSelector } from '../../../redux/selectors';
import { Spacer } from '../../../components/helpers';

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
      className={`tool-panel-group ${
        isMobile ? 'tool-panel-group-mobile' : ''
      }`}
    >
      <Button block={true} variant='primary' onClick={handleRunTests}>
        {isMobile ? t('buttons.run') : t('buttons.run-test')}
      </Button>
      {isSignedIn &&
        (challengeType === challengeTypes.multifileCertProject ||
          challengeType === challengeTypes.multifilePythonCertProject) && (
          <>
            <Spacer size='xxSmall' />
            <Button block={true} variant='primary' onClick={saveChallenge}>
              {isMobile ? t('buttons.save') : t('buttons.save-code')}
            </Button>
          </>
        )}
      <>
        <Spacer size='xxSmall' />
        <Button block={true} variant='primary' onClick={openResetModal}>
          {isMobile ? t('buttons.reset') : t('buttons.reset-lesson')}
        </Button>
      </>
      <Spacer size='xxSmall' />
      <Dropdown dropup>
        <Dropdown.Toggle
          id={'get-help-dropdown'}
          data-playwright-test-label='get-help-dropdown'
        >
          {isMobile ? t('buttons.help') : t('buttons.get-help')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {guideUrl ? (
            <MenuItem
              href={guideUrl}
              target='_blank'
              data-playwright-test-label='get-hint'
            >
              {t('buttons.get-hint')}{' '}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span className='sr-only'>, {t('aria.opens-new-window')}</span>
            </MenuItem>
          ) : null}
          {videoUrl ? (
            <MenuItem
              onClick={openVideoModal}
              data-playwright-test-label='watch-a-video'
            >
              {t('buttons.watch-video')}
            </MenuItem>
          ) : null}
          <MenuItem
            onClick={openHelpModal}
            data-playwright-test-label='ask-for-help'
          >
            {t('buttons.ask-for-help')}
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
