import React, { PropTypes } from 'react';
import { Button, ButtonGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

const unlockWarning = (
  <Tooltip id='tooltip'>
    <h4>
      <strong>Careful!</strong> Only run code you trust
    </h4>
  </Tooltip>
);

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  helpChatRoom: PropTypes.string,
  hint: PropTypes.string,
  isCodeLocked: PropTypes.bool,
  makeToast: PropTypes.func.isRequired,
  openBugModal: PropTypes.func.isRequired,
  unlockUntrustedCode: PropTypes.func.isRequired,
  updateHint: PropTypes.func.isRequired
};

export default class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
    this.makeReset = this.makeReset.bind(this);
  }
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

  renderExecute(isCodeLocked, executeChallenge, unlockUntrustedCode) {
    if (isCodeLocked) {
      return (
        <OverlayTrigger
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
        onClick={ executeChallenge }
        >
        Run tests (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      executeChallenge,
      helpChatRoom,
      hint,
      isCodeLocked,
      openBugModal,
      unlockUntrustedCode
    } = this.props;
    return (
      <div>
        { this.renderHint(hint, this.makeHint) }
        {
          this.renderExecute(
            isCodeLocked,
            executeChallenge,
            unlockUntrustedCode
          )
        }
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
            componentClass='a'
            href={ `https://gitter.im/freecodecamp/${helpChatRoom}` }
            target='_blank'
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

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;
