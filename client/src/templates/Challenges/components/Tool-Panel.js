import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, DropdownButton, DropdownItem } from 'react-bootstrap';

import './tool-panel.css';
import { openModal, executeChallenge } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      executeChallenge,
      openHelpModal: () => openModal('help'),
      openVideoModal: () => openModal('video'),
      openResetModal: () => openModal('reset')
    },
    dispatch
  );

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  guideUrl: PropTypes.string,
  isMobile: PropTypes.bool,
  openHelpModal: PropTypes.func.isRequired,
  openResetModal: PropTypes.func.isRequired,
  openVideoModal: PropTypes.func.isRequired,
  videoUrl: PropTypes.string
};

function ToolPanel({
  executeChallenge,
  isMobile,
  openHelpModal,
  openVideoModal,
  openResetModal,
  guideUrl,
  videoUrl
}) {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className={`tool-panel-group button-group ${
          isMobile ? 'tool-panel-group-mobile' : ''
        }`}
      >
        <Button block={true} onClick={executeChallenge} variant='primary'>
          {isMobile ? t('buttons.run') : t('buttons.run-test')}
        </Button>
        <Button
          block={true}
          className='btn-invert'
          onClick={openResetModal}
          variant='primary'
        >
          {isMobile ? t('buttons.reset') : t('buttons.reset-code')}
        </Button>
        <DropdownButton
          block={true}
          className='btn-invert'
          id='get-help-dropdown'
          title={isMobile ? t('buttons.help') : t('buttons.get-help')}
          variant='primary'
        >
          {guideUrl ? (
            <DropdownItem
              className='btn-invert'
              href={guideUrl}
              target='_blank'
              variant='primary'
            >
              {t('buttons.get-hint')}
            </DropdownItem>
          ) : null}
          {videoUrl ? (
            <DropdownItem
              className='btn-invert'
              onClick={openVideoModal}
              variant='primary'
            >
              {t('buttons.watch-video')}
            </DropdownItem>
          ) : null}
          <DropdownItem
            className='btn-invert'
            onClick={openHelpModal}
            variant='primary'
          >
            {t('buttons.ask-for-help')}
          </DropdownItem>
        </DropdownButton>
      </div>
    </Fragment>
  );
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
