import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  DropdownButton,
  MenuItem
} from '@freecodecamp/react-bootstrap';

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
  return (
    <Fragment>
      <div
        className={`tool-panel-group button-group ${
          isMobile ? 'tool-panel-group-mobile' : ''
        }`}
      >
        <Button block={true} bsStyle='primary' onClick={executeChallenge}>
          {isMobile ? 'Run' : 'Run the Tests'}
        </Button>
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={openResetModal}
        >
          {isMobile ? 'Reset' : 'Reset All Code'}
        </Button>
        <DropdownButton
          block={true}
          bsStyle='primary'
          className='btn-invert'
          id='get-help-dropdown'
          title={isMobile ? 'Help' : 'Get Help'}
        >
          {guideUrl ? (
            <MenuItem
              bsStyle='primary'
              className='btn-invert'
              href={guideUrl}
              target='_blank'
            >
              {'Get a Hint'}
            </MenuItem>
          ) : null}
          {videoUrl ? (
            <MenuItem
              bsStyle='primary'
              className='btn-invert'
              onClick={openVideoModal}
            >
              {'Watch a video'}
            </MenuItem>
          ) : null}
          <MenuItem
            bsStyle='primary'
            className='btn-invert'
            onClick={openHelpModal}
          >
            {'Ask for help'}
          </MenuItem>
        </DropdownButton>
      </div>
    </Fragment>
  );
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPanel);
