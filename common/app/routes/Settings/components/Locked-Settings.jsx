import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  ControlLabel
} from 'react-bootstrap';

import TB from '../Toggle-Button';

const propTypes = {
  isLocked: PropTypes.bool,
  toggleIsLocked: PropTypes.func.isRequired
};

export default function LockSettings({ isLocked, toggleIsLocked }) {
  return (
    <Row className='inline-form'>
      <Col sm={ 8 } xs={ 12 }>
        <ControlLabel htmlFor='isLocked'>
          <p>
            <strong>
              Make all of my solutions private
              <br />
              <em>(this disables your certificates)</em>
            </strong>
          </p>
        </ControlLabel>
      </Col>
      <Col sm={ 4 } xs={ 12 }>
        <TB
          name='isLocked'
          onChange={ toggleIsLocked }
          value={ isLocked }
        />
      </Col>
    </Row>
  );
}

LockSettings.displayName = 'LockSettings';
LockSettings.propTypes = propTypes;
