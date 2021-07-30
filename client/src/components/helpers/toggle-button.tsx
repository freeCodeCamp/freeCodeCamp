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
  offLabel: string;
  onChange: (value: string) => void;
  onLabel: string;
  value: boolean;
  condition?: boolean;
}

type ActiveClass = Pick<ButtonProps, 'condition'>;

function getActiveClass(condition: ActiveClass | unknown) {
  return condition ? 'active' : 'not-active';
}

export default function ToggleButton({
  name,
  onChange,
  value,
  onLabel = 'On',
  offLabel = 'Off'
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
        className={`toggle-${getActiveClass(value)}`}
        disabled={value}
        type='radio'
        value={1}
      >
        {value ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
        {onLabel}
      </TB>
      <TB
        bsSize='sm'
        bsStyle='primary'
        className={`toggle-${getActiveClass(!value)}`}
        disabled={!value}
        type='radio'
        value={2}
      >
        {offLabel}
        {!value ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </TB>
    </BSBG>
  );
}

ToggleButton.displayName = 'ToggleButton';
