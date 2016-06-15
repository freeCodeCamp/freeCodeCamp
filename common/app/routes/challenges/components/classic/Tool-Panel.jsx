import React, { PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

export default class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
  }
  static displayName = 'ToolPanel';

  static propTypes = {
    executeChallenge: PropTypes.func,
    updateHint: PropTypes.func,
    hint: PropTypes.string
  };

  makeHint() {
    this.props.makeToast({
      message: this.props.hint
    });
    this.props.updateHint();
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
    const { hint, executeChallenge } = this.props;
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
            >
            Reset
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'
            >
            Help
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'
            >
            Bug
          </Button>
        </ButtonGroup>
        <div className='button-spacer' />
      </div>
    );
  }
}
