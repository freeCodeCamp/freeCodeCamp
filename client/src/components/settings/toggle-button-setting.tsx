import React from 'react';
import ToggleCheck from '../../assets/icons/toggle-check';
import type { ToggleSettingProps } from './toggle-radio-setting';
import '../helpers/toggle-button.css';
import './toggle-setting.css';

export default function ToggleButtonSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  offLabel,
  onLabel
}: ToggleSettingProps): JSX.Element {
  return (
    <fieldset
      className='toggle-setting-container'
      {...(explain && {
        'aria-labelledby': `legend${flagName} desc${flagName}`
      })}
    >
      <legend className='sr-only' {...(explain && { id: `legend${flagName}` })}>
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
          value='1'
          className='toggle-button-right'
        >
          <span>
            {onLabel}
            {flag ? <ToggleCheck className='checkIcon' /> : null}
          </span>
        </button>
        <button
          aria-pressed={!flag}
          {...(flag && { onClick: toggleFlag })}
          value='2'
          className='toggle-button-left'
        >
          <span>
            {offLabel}
            {!flag ? <ToggleCheck className='checkIcon' /> : null}
          </span>
        </button>
      </div>
    </fieldset>
  );
}

ToggleButtonSetting.displayName = 'ToggleButtonSetting';
