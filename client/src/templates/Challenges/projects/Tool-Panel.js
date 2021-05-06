import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import { openModal } from '../redux';

import './tool-panel.css';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

const propTypes = {
  guideUrl: PropTypes.string,
  openHelpModal: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export class ToolPanel extends Component {
  render() {
    const { guideUrl, openHelpModal, t } = this.props;
    return (
      <div className='tool-panel-group project-tool-panel'>
        {guideUrl && (
          <Button
            block={true}
            className='btn-invert'
            href={guideUrl}
            target='_blank'
            variant='primary'
          >
            {t('buttons.get-hint')}
          </Button>
        )}
        <Button
          block={true}
          className='btn-invert'
          onClick={openHelpModal}
          variant='primary'
        >
          {t('buttons.ask-for-help')}
        </Button>
      </div>
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ToolPanel));
