import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

// import { submittingSelector } from './redux';
import { toggleMapModal } from '../../../redux/app';
import { openModal } from '../redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openHelpModal: () => openModal('help'),
      toggleMapModal
    },
    dispatch
  );

const propTypes = {
  guideUrl: PropTypes.string,
  openHelpModal: PropTypes.func.isRequired,
  toggleMapModal: PropTypes.func.isRequired
};

export class ToolPanel extends PureComponent {
  render() {
    const { guideUrl, openHelpModal, toggleMapModal } = this.props;
    return (
      <div className='tool-panel'>
        <div id='left-tool-panel sub-panel'>
          <Button bsStyle='default' onClick={toggleMapModal}>
            View the Curriculum
          </Button>
        </div>
        <div id='centre-tool-panel sub-panel' />
        <div id='right-tool-panel sub-panel'>
          {guideUrl && (
            <Button
              block={true}
              bsStyle='primary'
              className='btn-primary-ghost btn-big'
              href={guideUrl}
              target='_blank'
              >
              Get a hint
            </Button>
          )}
          <Button
            block={true}
            bsStyle='primary'
            className='btn-primary-ghost btn-big'
            onClick={openHelpModal}
            >
            Ask for help on the forum
          </Button>
        </div>
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
