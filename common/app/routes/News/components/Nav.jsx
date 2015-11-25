import React from 'react';
import { Button, Col, Input, Row } from 'react-bootstrap';

export default React.createClass({
  displayName: 'NewsNav',

  renderSearchButton() {
    return (
      <Button
        bsStyle='primary'
        className='btn-big'>
        Search
      </Button>
    );
  },

  render() {
    return (
      <Row>
        <Col
          md={ 9 }
          xs={ 12 }>
          <Input
            buttonAfter={ this.renderSearchButton() }
            className='big-text-field'
            placeholder='Search our links'
            type='text' />
        </Col>
        <Col
          md={ 3 }
          xs={ 12 }>
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'>
            Submit
          </Button>
        </Col>
      </Row>
    );
  }
});
