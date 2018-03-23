import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import { ButtonSpacer } from '../../../../helperComponents';
import {
  FrontEndForm,
  BackEndForm
} from './Forms.jsx';

import { submittingSelector } from './redux';

import {
  openHelpModal,
  chatRoomSelector,
  guideURLSelector
} from '../../redux';

import {
  signInLoadingSelector,
  challengeSelector
} from '../../../../redux';
import {
  frontEndProject
} from '../../../../utils/challengeTypes';

const propTypes = {
  guideUrl: PropTypes.string,
  helpChatRoom: PropTypes.string.isRequired,
  isFrontEnd: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openHelpModal: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  openHelpModal
};
const mapStateToProps = createSelector(
  challengeSelector,
  signInLoadingSelector,
  submittingSelector,
  chatRoomSelector,
  guideURLSelector,
  (
    { challengeType },
    showLoading,
    isSubmitting,
    helpChatRoom,
    guideUrl
  ) => ({
    guideUrl,
    helpChatRoom,
    isSubmitting,
    isFrontEnd: challengeType === frontEndProject
  })
);

export class ToolPanel extends PureComponent {
  renderSubmitButton(isSignedIn, openChallengeModal) {
    const buttonCopy = isSignedIn ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ openChallengeModal }
        >
        { buttonCopy } (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      guideUrl,
      helpChatRoom,
      isFrontEnd,
      isSubmitting,
      openHelpModal
    } = this.props;

    const FormElement = isFrontEnd ? FrontEndForm : BackEndForm;
    return (
      <div>
        <FormElement isSubmitting={ isSubmitting }/>
        <ButtonSpacer />
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-primary-ghost btn-big'
          componentClass='a'
          href={ `https://gitter.im/freecodecamp/${helpChatRoom}` }
          target='_blank'
          >
          Help
        </Button>
        <ButtonSpacer />
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-primary-ghost btn-big'
          href={ guideUrl }
          target='_blank'
          >
          Get a hint
        </Button>
        <ButtonSpacer />
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-primary-ghost btn-big'
          onClick={ openHelpModal }
          >
          Ask for help on the forum
        </Button>
        <ButtonSpacer />
      </div>
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPanel);
