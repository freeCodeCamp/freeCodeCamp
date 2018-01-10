import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap';
import classnames from 'classnames';

const propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleNightMode: PropTypes.func.isRequired
};

export default function ThemeSettings({ currentTheme, toggleNightMode }) {
  return (
    <Row className='inline-form'>
          <Col sm={ 8 } xs={ 12 }>
            <p className='settings-title'>
              <strong>Night Mode</strong>
            </p>
          </Col>
          <Col sm={ 4 } xs={ 12 }>
            <ToggleButtonGroup
              className='toggle-btn-group'
              name='night-mode'
              onChange={ () => toggleNightMode(currentTheme) }
              type='radio'
              >
              <ToggleButton
                bsSize='lg'
                bsStyle='primary'
                className={
                  classnames(
                    { active: currentTheme === 'night' },
                    'btn-toggle'
                  )
                }
                disabled={ currentTheme === 'night' }
                type='radio'
                value={ 1 }
                >
                On
              </ToggleButton>
              <ToggleButton
                bsSize='lg'
                bsStyle='primary'
                className={
                  classnames(
                    { active: currentTheme === 'default' },
                    'btn-toggle'
                  )
                }
                disabled={ currentTheme === 'default' }
                type='radio'
                value={ 2 }
                >
                Off
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
ThemeSettings.propTypes = propTypes;
