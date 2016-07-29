import React, { PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

export default class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
    this.makeReset = this.makeReset.bind(this);
  }
  static displayName = 'ToolPanel';

  static propTypes = {
    executeChallenge: PropTypes.func,
    updateHint: PropTypes.func,
    hint: PropTypes.string,
    toggleHelpChat: PropTypes.func,
    openBugModal: PropTypes.func
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
      executeChallenge,
      toggleHelpChat,
      openBugModal
    } = this.props;
    return (
      <div>
        { this.renderHint(hint, this.makeHint) }
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-big'
          onClick={ executeChallenge }
          >
          Run tests (ctrl + enter)
        </Button>
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
