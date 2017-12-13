import PropTypes from 'prop-types';
import React from 'react';
import { Button, Row, Col, ControlLabel } from 'react-bootstrap';
import classnames from 'classnames';

const propTypes = {
  isLocked: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

export default function LockSettings({ isLocked, toggle }) {
  const className = classnames({
    'positive-20': true,
    active: isLocked,
    'btn-toggle': true
  });
  return (
    <Row>
      <Col xs={ 8 }>
        <ControlLabel>
          Make all of my solutions private
          <br />
          <em>(this disables your certificates)</em>
        </ControlLabel>
      </Col>
      <Col xs={ 4 }>
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

LockSettings.displayName = 'LockSettings';
LockSettings.propTypes = propTypes;
