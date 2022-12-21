import { Form, Button, ControlLabel } from '@freecodecamp/react-bootstrap';
import React from 'react';

import Spacer from '../../assets/icons/spacer';
import ToggleCheck from '../../assets/icons/toggle-check';

const checkIconStyle = {
  height: '15px',
  paddingTop: '5',
  width: '20px'
};

export enum Themes {
  Night = 'night',
  Default = 'default',
  System = 'system'
}

type ThemeProps = {
  currentTheme: Themes | null;
  toggleNightMode: (theme: Themes | null) => void;
};

export default function ThemeSettings({
  currentTheme,
  toggleNightMode
}: ThemeProps): JSX.Element {
  return (
    <Form
      inline={true}
      onSubmit={(e: React.FormEvent): void => e.preventDefault()}
    >
      <ControlLabel>
        Night Mode
        <Button
          className={`${
            currentTheme !== 'night' ? 'toggle-not-active' : 'toggle-active'
          }`}
          disabled={currentTheme === 'night'}
          onClick={() => toggleNightMode((currentTheme = Themes.Night))}
        >
          {currentTheme === 'night' ? (
            <ToggleCheck style={checkIconStyle} />
          ) : (
            <Spacer style={checkIconStyle} />
          )}
          Dark
        </Button>
        <Button
          className={`${
            currentTheme !== 'default' ? 'toggle-not-active' : 'toggle-active'
          }}`}
          disabled={currentTheme === 'default'}
          onClick={() => toggleNightMode((currentTheme = Themes.Default))}
        >
          Light
          {currentTheme ? (
            <ToggleCheck style={checkIconStyle} />
          ) : (
            <Spacer style={checkIconStyle} />
          )}
        </Button>
        <Button
          className={`${
            currentTheme !== null ? 'toggle-not-active' : 'toggle-active'
          }`}
          disabled={currentTheme === null}
          onClick={() => toggleNightMode((currentTheme = null))}
        >
          System
          {currentTheme === null ? (
            <ToggleCheck style={checkIconStyle} />
          ) : (
            <Spacer style={checkIconStyle} />
          )}
        </Button>
      </ControlLabel>
    </Form>
  );
}
