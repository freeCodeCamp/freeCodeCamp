import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
  currentTheme: Themes;
  toggleNightMode: (theme: Themes) => void;
};

type ButtonProps = ThemeProps & {
  newTheme: Themes;
  children: React.ReactNode;
};

function ThemeButton({
  currentTheme,
  newTheme,
  toggleNightMode,
  children
}: ButtonProps) {
  const { t } = useTranslation();
  return (
    <Button
      className={`${
        currentTheme === newTheme ? 'toggle-active' : 'toggle-not-active'
      }`}
      aria-pressed={currentTheme === newTheme}
      aria-disabled={currentTheme === newTheme}
      onClick={() => toggleNightMode(newTheme)}
    >
      {children}
      <span className='sr-only'>{t('settings.labels.sr-theme')}</span>
      {currentTheme === newTheme && <ToggleCheck style={checkIconStyle} />}
    </Button>
  );
}

export default function ThemeSettings(themeProps: ThemeProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <fieldset className='setting-theme'>
      <legend>{t('settings.labels.theme-mode')}</legend>
      <ThemeButton {...themeProps} newTheme={Themes.Night}>
        {t('settings.labels.dark-theme')}
      </ThemeButton>
      <ThemeButton {...themeProps} newTheme={Themes.Default}>
        {t('settings.labels.light-theme')}
      </ThemeButton>
      <ThemeButton {...themeProps} newTheme={Themes.System}>
        {t('settings.labels.system-theme')}
      </ThemeButton>
    </fieldset>
  );
}
