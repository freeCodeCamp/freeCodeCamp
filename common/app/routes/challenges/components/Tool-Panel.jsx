import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

export default class extends PureComponent {
  static displayName = 'ToolPanel';

  render() {
    return (
      <div>
        <Button
          block={ true }
          bsStyle='primary'
          className='btn-big'>
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
