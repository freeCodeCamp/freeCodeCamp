import React, { PropTypes } from 'react';
import { Button, ButtonGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const unlockWarning = (
  <Tooltip id='tooltip'>
    <h4>
      <strong>Careful!</strong> Only run code you trust
    </h4>
  </Tooltip>
);
export default class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
    this.makeReset = this.makeReset.bind(this);
  }
  static displayName = 'ToolPanel';

  static propTypes = {
    executeChallenge: PropTypes.func.isRequired,
    updateHint: PropTypes.func.isRequired,
    hint: PropTypes.string,
    isChallengePassed: PropTypes.bool,
    isCodeLocked: PropTypes.bool,
    unlockUntrustedCode: PropTypes.func.isRequired,
    toggleHelpChat: PropTypes.func.isRequired,
    openBugModal: PropTypes.func.isRequired,
    makeToast: PropTypes.func.isRequired,
    submitChallenge: PropTypes.func.isRequired
  };

  makeHint() {
    this.props.makeToast({
      message: this.props.hint,
      timeout: 4000
    });
    this.props.updateHint();
  }

  makeReset() {
    this.props.makeToast({
      message: 'This will restore your code editor to its original state.',
      action: 'clear my code',
      actionCreator: 'resetChallenge',
      timeout: 4000
    });
  }

  renderHint(hint, makeHint) {
    if (!hint) {
      return null;
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ makeHint }
        >
        Hint
      </Button>
    );
  }

  render() {
    const {
      hint,
      isChallengePassed,
      isCodeLocked,
      executeChallenge,
      toggleHelpChat,
      openBugModal,
      unlockUntrustedCode,
      submitChallenge
    } = this.props;

  const actionButton = () => {
    if (isChallengePassed) {
      return (
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-big'
          key={1}
          onClick={ submitChallenge }
          >
          Submit and go to next challenge
        </Button>
      );
    }
    if (isCodeLocked) {
      return (
        <OverlayTrigger
          key={2}
          overlay={ unlockWarning }
          placement='right'
          >
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
            onClick={ unlockUntrustedCode }
            >
            Code Locked. Unlock?
          </Button>
        </OverlayTrigger>
      );
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        key={3}
        onClick={ executeChallenge }
        >
        Run tests (ctrl + enter)
      </Button>
    );
  };
    return (
      <div>
        { this.renderHint(hint, this.makeHint) }
        <ReactCSSTransitionReplace
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={400}
          transitionName='fade-wait'
          >
          { actionButton() }
        </ReactCSSTransitionReplace>
        <div className='button-spacer' />
        <ButtonGroup
          className='input-group'
          justified={ true }
          >
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'
            onClick={ this.makeReset }
            >
            Reset
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'
            onClick={ toggleHelpChat }
            >
            Help
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'
            onClick={ openBugModal }
            >
            Bug
          </Button>
        </ButtonGroup>
        <div className='button-spacer' />
      </div>
    );
  }
}
