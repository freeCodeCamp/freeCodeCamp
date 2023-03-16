import React, { useEffect, useRef } from 'react';
import ToggleCheck from '../../assets/icons/toggle-check';
import '../helpers/toggle-button.css';
import './toggle-setting.css';

type ToggleButtonSettingProps = {
  action: string;
  explain?: string;
  flag: boolean;
  flagName: string;
  toggleFlag: () => void;
  offLabel: string;
  onLabel: string;
};

export default function ToggleButtonSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  ...restProps
}: ToggleButtonSettingProps): JSX.Element {
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const secondButtonRef = useRef<HTMLButtonElement>(null);
  const checkIconStyle = {
    height: '1rem',
    width: '1.25rem'
  };

  // Make the buttons the same width
  useEffect(() => {
    const firstWidth = firstButtonRef?.current?.offsetWidth;
    const secondWidth = secondButtonRef?.current?.offsetWidth;
    if (firstWidth && secondWidth) {
      const width = Math.max(firstWidth, secondWidth);
      firstButtonRef.current.style.width = `${width}px`;
      secondButtonRef.current.style.width = `${width}px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            ref={firstButtonRef}
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
            ref={secondButtonRef}
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
