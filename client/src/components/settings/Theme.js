import PropTypes from 'prop-types';
import React from 'react';
import { Form } from '@freecodecamp/react-bootstrap';

import ToggleSetting from './ToggleSetting';

const propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleNightMode: PropTypes.func.isRequired
};

export default function ThemeSettings({ currentTheme, toggleNightMode }) {
  return (
    <Form inline={true} onSubmit={e => e.preventDefault()}>
      <ToggleSetting
        action='Night Mode'
        flag={currentTheme === 'night'}
        flagName='currentTheme'
        offLabel='Off'
        onLabel='On'
        toggleFlag={() =>
          toggleNightMode(currentTheme === 'night' ? 'default' : 'night')
        }
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
ThemeSettings.propTypes = propTypes;
