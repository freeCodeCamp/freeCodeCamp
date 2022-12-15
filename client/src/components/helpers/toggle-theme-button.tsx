import {
  ToggleButtonGroup as BSBG,
  ToggleButton as TB
} from '@freecodecamp/react-bootstrap';
import React from 'react';

import './toggle-button.css';
import Spacer from '../../assets/icons/spacer';
import ToggleCheck from '../../assets/icons/toggle-check';

interface ButtonProps {
  name: string;
  onChange: (value: string) => void;
  value: string | null;
}

export default function ToggleThemeButton({
  name,
  onChange,
  value
}: ButtonProps): JSX.Element {
  const checkIconStyle = {
    height: '15px',
    paddingTop: '5',
    width: '20px'
  };
  return (
    <BSBG name={name} onChange={onChange} type='radio'>
      <TB
        bsSize='sm'
        bsStyle='primary'
        className={`${
          value !== 'night' ? 'toggle-not-active' : 'toggle-active'
        }`}
        disabled={value === 'night'}
        type='radio'
        value={1}
      >
        {value === 'night' ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
        dark
      </TB>
      <TB
        bsSize='sm'
        bsStyle='primary'
        className={`${
          value !== 'default' ? 'toggle-not-active' : 'toggle-active'
        }}`}
        disabled={value === 'default'}
        type='radio'
        value={2}
      >
        light
        {value ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </TB>
      <TB
        bsSize='sm'
        bsStyle='primary'
        className={`${value !== null ? 'toggle-not-active' : 'toggle-active'}`}
        disabled={value === null}
        type='radio'
        value={3}
      >
        system
        {value === null ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </TB>
    </BSBG>
  );
}
