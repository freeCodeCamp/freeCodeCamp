import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

// import { submittingSelector } from './redux';
import { openModal } from '../redux';
import { frontEndProject } from '../../../../utils/challengeTypes';

import ButtonSpacer from '../../../components/util/ButtonSpacer';
import ProjectForm from './ProjectForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openHelpModal: () => openModal('help') }, dispatch);

const propTypes = {
  challengeType: PropTypes.number,
  guideUrl: PropTypes.string,
  openHelpModal: PropTypes.func.isRequired
};

export class ToolPanel extends PureComponent {
  render() {
    const { guideUrl, challengeType, openHelpModal } = this.props;
    console.log(this.props);

    const isFrontEnd = challengeType === frontEndProject;
    return (
      <Fragment>
        <ProjectForm isFrontEnd={isFrontEnd} />
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
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
