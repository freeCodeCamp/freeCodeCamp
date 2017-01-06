import React, { PropTypes } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';

export default function LockSettings({ isLocked, toggle }) {
  const className = classnames({
    'positive-20': true,
    active: isLocked,
    'btn-toggle': true
  });
  return (
    <Row>
      <Col xs={ 9 }>
        <p className='large-p'>
          Make all of my solutions private
          <br />
          (this disables your certificates)
        </p>
      </Col>
      <Col xs={ 3 }>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          className={ className }
          onClick={ toggle }
          >
          { isLocked ? 'On' : 'Off' }
        </Button>
      </Col>
    </Row>
  );
}

LockSettings.propTypes = {
  isLocked: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};
