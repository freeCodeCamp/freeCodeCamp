import React from 'react';
import ToggleCheck from '../../assets/icons/toggle-check';
import '../helpers/toggle-button.css';
import type { ToggleSettingProps } from './toggle-radio-setting';
import './toggle-setting.css';

const checkIconStyle = {
  height: '1rem',
  width: '1.25rem'
};

export default function ToggleButtonSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  ...restProps
}: ToggleSettingProps): JSX.Element {
  return (
    <div className='toggle-setting-container'>
      <fieldset
        {...(explain && {
          'aria-labelledby': `legend${flagName} desc${flagName}`
        })}
      >
        <legend
          className='sr-only'
          {...(explain && { id: `legend${flagName}` })}
        >
          {action}
        </legend>
        <div className='toggle-description'>
          <p aria-hidden={true}>{action}</p>
          {explain ? <p id={`desc${flagName}`}>{explain}</p> : null}
        </div>
        <div className='toggle-button-group'>
          <button
            aria-pressed={flag}
            {...(!flag && { onClick: toggleFlag })}
            value={1}
          >
            <span>
              {restProps.onLabel}
              {flag && <ToggleCheck style={checkIconStyle} />}
            </span>
          </button>
          <button
            aria-pressed={!flag}
            {...(flag && { onClick: toggleFlag })}
            value={2}
          >
            <span>
              {restProps.offLabel}
              {!flag && <ToggleCheck style={checkIconStyle} />}
            </span>
          </button>
        </div>
      </fieldset>
    </div>
  );
}

ToggleButtonSetting.displayName = 'ToggleButtonSetting';
