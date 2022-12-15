import {
  FormGroup,
  ControlLabel,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import React from 'react';

import { ButtonSpacer } from '../helpers';
import TB from '../helpers/toggle-theme-button';

import './toggle-setting.css';

type ToggleSettingProps = {
  action: string;
  explain?: string;
  themeName: string;
  toggleFlag: () => void;
  offLabel: string;
  onLabel: string;
};

export default function ToggleTheme({
  action,
  explain,
  themeName,
  toggleFlag,
  ...restProps
}: ToggleSettingProps): JSX.Element {
  return (
    <>
      <div className='toggle-setting-container'>
        <FormGroup>
          <ControlLabel className='toggle-label' htmlFor={themeName}>
            <strong>{action}</strong>
            {explain ? (
              <HelpBlock>
                <em>{explain}</em>
              </HelpBlock>
            ) : null}
          </ControlLabel>
          <TB
            name={themeName}
            onChange={toggleFlag}
            value={themeName}
            {...restProps}
          />
        </FormGroup>
        <ButtonSpacer />
      </div>
    </>
  );
}
