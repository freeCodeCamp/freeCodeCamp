import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@freecodecamp/react-bootstrap';

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
  openHelpModal: PropTypes.func.isRequired
};

export class ToolPanel extends Component {
  render() {
    const { guideUrl, openHelpModal } = this.props;
    return (
      <div className='tool-panel-group project-tool-panel'>
        {guideUrl && (
          <Button
            block={true}
            bsStyle='primary'
            className='btn-primary-invert'
            href={guideUrl}
            target='_blank'
            >
            Get a hint
          </Button>
        )}
        <Button
          block={true}
          bsStyle='primary'
          className='btn-primary-invert'
          onClick={openHelpModal}
          >
          Ask for help
        </Button>
      </div>
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);

/**
 *
 * <Fragment>
        <ProjectForm isFrontEnd={isFrontEnd} openModal={openCompletionModal} />
        <ButtonSpacer />
        {guideUrl && (
          <Fragment>
            <Button
              block={true}
              bsStyle='primary'
              className='btn-primary-ghost btn-big'
              href={guideUrl}
              target='_blank'
              >
              Get a hint
            </Button>
            <ButtonSpacer />
          </Fragment>
        )}
        <Button
          block={true}
          bsStyle='primary'
          className='btn-primary-ghost btn-big'
          onClick={openHelpModal}
          >
          Ask for help on the forum
        </Button>
        <ButtonSpacer />
      </Fragment>
 */
