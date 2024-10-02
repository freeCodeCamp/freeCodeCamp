import React from 'react';
import { useTranslation } from 'react-i18next';
import type { updateMyTheme } from '../../redux/settings/actions';

import ToggleButtonSetting from './toggle-button-setting';

export enum Themes {
  Night = 'night',
  Default = 'default'
}

export type ThemeProps = {
  currentTheme: Themes;
  toggleNightMode: typeof updateMyTheme;
};

export default function ThemeSettings({
  currentTheme,
  toggleNightMode
}: ThemeProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <ToggleButtonSetting
      action={t('settings.labels.night-mode')}
      flag={currentTheme === Themes.Night}
      flagName='currentTheme'
      offLabel={t('buttons.off')}
      onLabel={t('buttons.on')}
      toggleFlag={() => {
        toggleNightMode(
          currentTheme === Themes.Night ? Themes.Default : Themes.Night
        );
      }}
    />
  );
}

ThemeSettings.displayName = 'ThemeSettings';
