import React from 'react';
import { useTranslation } from 'react-i18next';
import type { updateMyTheme } from '../../redux/settings/actions';

import ToggleButtonSetting from './toggle-button-setting';

type themeValue = {
  'paypalButton': string,
  'editorTheme': string,
  'walletButton': 'light' | 'dark'
}
type Themes = {
'night': themeValue,
'default': themeValue
}
export type ThemesKind = keyof Themes;

export const themesMap = new Map<ThemesKind, themeValue>([
  [
'default', { "paypalButton": "gold", "editorTheme": "vs-custom", 'walletButton': 'light'},
],
[
  'night', { "paypalButton": "white", "editorTheme": "vs-dark-custom", 'walletButton': 'dark'},
],
]);

export type ThemeProps = {
  currentTheme: ThemesKind;
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
flag={currentTheme === 'night'}
flagName='currentTheme'
offLabel={t('buttons.off')}
onLabel={t('buttons.on')}
toggleFlag={() => {
  toggleNightMode(
    currentTheme === 'night' ? 'default' : 'night'
  );
}}
/>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
