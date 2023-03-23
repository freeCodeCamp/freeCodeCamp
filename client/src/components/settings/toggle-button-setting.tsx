import React from 'react';
import ToggleCheck from '../../assets/icons/toggle-check';
import type { ToggleSettingProps } from './toggle-radio-setting';
import '../helpers/toggle-button.css';
import './toggle-setting.css';

<<<<<<< HEAD
const checkIconStyle = {
  height: '1rem',
  width: '1.25rem'
=======
type ToggleButtonSettingProps = {
  action: string;
  explain?: string;
  flag: boolean;
  flagName: string;
  toggleFlag: () => void;
  offLabel: string;
  onLabel: string;
>>>>>>> a5f3c39064 (fix: remove random id generation)
};

export default function ToggleButtonSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  ...restProps
<<<<<<< HEAD
}: ToggleSettingProps): JSX.Element {
=======
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

>>>>>>> a5f3c39064 (fix: remove random id generation)
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
<<<<<<< HEAD
=======
            ref={firstButtonRef}
>>>>>>> fe68a35ab1 (refactor: remove unnecessary ternary)
            aria-pressed={flag}
            {...(!flag && { onClick: toggleFlag })}
            value='1'
            className='toggle-button-right'
          >
            <span>{restProps.onLabel}</span>
            {flag ? <ToggleCheck style={checkIconStyle} /> : <div />}
          </button>
          <button
<<<<<<< HEAD
=======
            ref={secondButtonRef}
>>>>>>> fe68a35ab1 (refactor: remove unnecessary ternary)
            aria-pressed={!flag}
            {...(flag && { onClick: toggleFlag })}
            value='2'
            className='toggle-button-left'
          >
            <span>{restProps.offLabel}</span>
            {!flag ? <ToggleCheck style={checkIconStyle} /> : <div />}
          </button>
        </div>
      </fieldset>
    </div>
  );
}

ToggleButtonSetting.displayName = 'ToggleButtonSetting';
