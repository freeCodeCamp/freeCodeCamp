import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  ControlLabel
} from 'react-bootstrap';

import TB from '../Toggle-Button';

const propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleNightMode: PropTypes.func.isRequired
};

export default function ThemeSettings({ currentTheme, toggleNightMode }) {
  return (
    <Row className='inline-form'>
      <Col sm={ 8 } xs={ 12 }>
        <ControlLabel htmlFor='night-mode'>
          <p className='settings-title'>
            <strong>Night Mode</strong>
          </p>
        </ControlLabel>
      </Col>
      <Col sm={ 4 } xs={ 12 }>
        <TB
          name='night-mode'
          onChange={ () => toggleNightMode(currentTheme) }
          value={ currentTheme === 'night' }
        />
      </Col>
    </Row>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
ThemeSettings.propTypes = propTypes;
