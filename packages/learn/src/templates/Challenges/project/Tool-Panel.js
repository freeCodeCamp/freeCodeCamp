import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import ButtonSpacer from '../../../components/util/ButtonSpacer';
import ProjectForm from './ProjectForm';

// import { submittingSelector } from './redux';

// import {
//   openChallengeModal,

//   openHelpModal,
//   chatRoomSelector,
//   guideURLSelector
// } from '../../redux';

// import {
//   signInLoadingSelector,
//   challengeSelector
// } from '../../../../redux';
import { frontEndProject } from '../../../../utils/challengeTypes';

const propTypes = {
  challengeType: PropTypes.number,
  guideUrl: PropTypes.string,
  helpChatRoom: PropTypes.string.isRequired
};

export class ToolPanel extends PureComponent {
  render() {
    const { guideUrl, helpChatRoom, challengeType } = this.props;
    console.log(challengeType, frontEndProject);

    const isFrontEnd = challengeType === frontEndProject;
    return (
      <Fragment>
        <ProjectForm isFrontEnd={isFrontEnd} />
        <ButtonSpacer />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-primary-ghost btn-big'
          componentClass='a'
          href={`https://gitter.im/freecodecamp/${helpChatRoom}`}
          target='_blank'
          >
          Help
        </Button>
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

export default ToolPanel;
