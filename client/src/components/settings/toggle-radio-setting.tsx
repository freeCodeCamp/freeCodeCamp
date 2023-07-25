import React from 'react';
import '../helpers/toggle-button.css';
import './toggle-setting.css';

export type ToggleSettingProps = {
  action: string;
  explain?: string;
  flag: boolean;
  flagName: string;
  toggleFlag: () => void;
  offLabel: string;
  onLabel: string;
};

export default function ToggleRadioSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  offLabel,
  onLabel
}: ToggleSettingProps): JSX.Element {
  const firstRadioId = `radioA${flagName}`;
  const secondRadioId = `radioB${flagName}`;

  return (
    <fieldset
      className='toggle-setting-container'
      {...(explain && {
        'aria-labelledby': `legend${flagName} desc${flagName}`
      })}
    >
      <div className='toggle-description'>
        <legend {...(explain && { id: `legend${flagName}` })}>{action}</legend>
        {explain ? <p id={`desc${flagName}`}>{explain}</p> : null}
      </div>
      <div className='toggle-radio-group'>
        <label htmlFor={firstRadioId}>
          <input
            id={firstRadioId}
            type='radio'
            {...(flag && { defaultChecked: true })}
            {...(!flag && { onChange: toggleFlag })}
            name={flagName}
            value='1'
          />
          <span className='custom-circle'></span>
          <span>{onLabel}</span>
        </label>
        <label htmlFor={secondRadioId}>
          <input
            id={secondRadioId}
            type='radio'
            {...(!flag && { defaultChecked: true })}
            {...(flag && { onChange: toggleFlag })}
            name={flagName}
            value='2'
          />
          <span className='custom-circle' />
          <span>{offLabel}</span>
        </label>
      </div>
    </fieldset>
  );
}

ToggleRadioSetting.displayName = 'ToggleRadioSetting';
