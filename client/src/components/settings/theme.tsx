import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Spacer from '../../assets/icons/spacer';

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

export default function ThemeSettings({
  currentTheme,
  toggleNightMode
}: ThemeProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='setting-theme'>
      <p>{t('settings.labels.theme-mode')}</p>
      <Button
        className={`${
          currentTheme !== 'night' ? 'toggle-not-active' : 'toggle-active'
        }`}
        disabled={currentTheme === 'night'}
        onClick={() => toggleNightMode((currentTheme = Themes.Night))}
      >
        {t('settings.labels.dark-theme')}
        <span className='sr-only'>{t('settings.labels.sr-theme')}</span>
        {currentTheme === 'night' ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </Button>
      <Button
        className={`${
          currentTheme !== 'default' ? 'toggle-not-active' : 'toggle-active'
        }`}
        disabled={currentTheme === 'default'}
        onClick={() => toggleNightMode((currentTheme = Themes.Default))}
      >
        {t('settings.labels.light-theme')}
        <span className='sr-only'>{t('settings.labels.sr-theme')}</span>
        {currentTheme === 'default' ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </Button>
      <Button
        className={`${
          currentTheme !== 'system' ? 'toggle-not-active' : 'toggle-active'
        }`}
        disabled={currentTheme === 'system'}
        onClick={() => toggleNightMode((currentTheme = Themes.System))}
      >
        {t('settings.labels.system-theme')}
        <span className='sr-only'>{t('settings.labels.sr-theme')}</span>
        {currentTheme === 'system' ? (
          <ToggleCheck style={checkIconStyle} />
        ) : (
          <Spacer style={checkIconStyle} />
        )}
      </Button>
    </div>
  );
}
