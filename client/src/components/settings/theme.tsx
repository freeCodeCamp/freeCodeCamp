import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateMyTheme } from '../../redux/settings/actions';
import ToggleButtonSetting from './toggle-button-setting';

export enum Themes {
  Night = 'night',
  Default = 'default'
}

export type ThemeProps = {
  currentTheme: Themes;
};

export default function ThemeSettings({
  currentTheme
}: ThemeProps): JSX.Element {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const invertedTheme =
    currentTheme === Themes.Night ? Themes.Default : Themes.Night;
  return (
    <ToggleButtonSetting
      action={t('settings.labels.night-mode')}
      flag={currentTheme === Themes.Night}
      flagName='currentTheme'
      offLabel={t('buttons.off')}
      onLabel={t('buttons.on')}
      toggleFlag={() => {
        dispatch(updateMyTheme({ theme: invertedTheme }));
      }}
    />
  );
}

ThemeSettings.displayName = 'ThemeSettings';
