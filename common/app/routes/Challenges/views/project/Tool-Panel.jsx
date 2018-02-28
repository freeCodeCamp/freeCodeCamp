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
  submitChallenge,

  openHelpModal,
  chatRoomSelector,
  guideURLSelector
} from '../../redux';

import {
  signInLoadingSelector,
  challengeSelector
} from '../../../../redux';
import {
  simpleProject,
  frontEndProject
} from '../../../../utils/challengeTypes';

const propTypes = {
  guideUrl: PropTypes.string,
  helpChatRoom: PropTypes.string.isRequired,
  isFrontEnd: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  isSimple: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openHelpModal: PropTypes.func.isRequired,
  submitChallenge: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  openHelpModal,
  submitChallenge
};
const mapStateToProps = createSelector(
  challengeSelector,
  signInLoadingSelector,
  submittingSelector,
  chatRoomSelector,
  guideURLSelector,
  (
    { challengeType = simpleProject },
    showLoading,
    isSubmitting,
    helpChatRoom,
    guideUrl
  ) => ({
    guideUrl,
    helpChatRoom,
    isSignedIn: !showLoading,
    isSubmitting,
    isSimple: challengeType === simpleProject,
    isFrontEnd: challengeType === frontEndProject
  })
);

export class ToolPanel extends PureComponent {
  renderSubmitButton(isSignedIn, submitChallenge) {
    const buttonCopy = isSignedIn ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ submitChallenge }
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
      isSimple,
      isSignedIn,
      isSubmitting,
      openHelpModal,
      submitChallenge
    } = this.props;

    const FormElement = isFrontEnd ? FrontEndForm : BackEndForm;
    return (
      <div>
        {
          isSimple ?
            this.renderSubmitButton(isSignedIn, submitChallenge) :
            <FormElement isSubmitting={ isSubmitting }/>
        }
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
