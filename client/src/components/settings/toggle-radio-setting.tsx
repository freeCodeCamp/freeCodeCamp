import React from 'react';
import '../helpers/toggle-button.css';
import './toggle-setting.css';

export type ToggleSettingProps = {
  action: string;
  explain?: string;
  flagName: string;
  offLabel: string;
  onLabel: string;
};

export default function ToggleRadioSetting({
  action,
  explain,
  flagName,
  ...restProps
}: ToggleSettingProps): JSX.Element {
  const firstRadioId = `radioA${flagName}`;
  const secondRadioId = `radioB${flagName}`;

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
        <div className='toggle-radio-group'>
          <label htmlFor={firstRadioId}>
            <input
              id={firstRadioId}
              type='radio'
              name={flagName}
              value='1'
              checked
            />
            <span className='custom-circle'></span>
            <span>{restProps.onLabel}</span>
          </label>

          <label htmlFor={secondRadioId}>
            <input id={secondRadioId} type='radio' name={flagName} value='2' />{' '}
            <span className='custom-circle'></span>
            <span>{restProps.offLabel}</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
}

ToggleRadioSetting.displayName = 'ToggleRadioSetting';
