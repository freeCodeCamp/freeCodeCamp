import PropTypes from 'prop-types';
import React from 'react';
import { ControlLabel } from '@freecodecamp/react-bootstrap';

import TB from '../helpers/ToggleButton';

import './theme-settings.css';

const propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleNightMode: PropTypes.func.isRequired
};

export default function ThemeSettings({ currentTheme, toggleNightMode }) {
  return (
    <div className='toggle-setting-container' id='theme-settings-container'>
      <ControlLabel className='theme-label' htmlFor='night-mode'>
        <strong>Night Mode</strong>
      </ControlLabel>
      <TB
        name='night-mode'
        onChange={() =>
          toggleNightMode(currentTheme === 'night' ? 'default' : 'night')
        }
        value={currentTheme === 'night'}
      />
    </div>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
ThemeSettings.propTypes = propTypes;
