import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

import { executeChallenge } from '../../redux/actions';

const bindableActions = { executeChallenge };

export class ToolPanel extends PureComponent {
  static displayName = 'ToolPanel';

  static propTypes = {
    executeChallenge: PropTypes.func
  };

  render() {
    const { executeChallenge } = this.props;
    return (
      <div>
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-big'
          onClick={ executeChallenge }>
          Run tests (ctrl + enter)
        </Button>
        <div className='button-spacer' />
        <ButtonGroup
          className='input-group'
          justified={ true }>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'>
            Reset
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'>
            Help
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            componentClass='label'>
            Bug
          </Button>
        </ButtonGroup>
        <div className='button-spacer' />
      </div>
    );
  }
}

export default connect(null, bindableActions)(ToolPanel);
