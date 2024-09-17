import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer, FullWidthRow } from '../helpers';
import ThemeSettings, { ThemeProps } from '../../components/settings/theme';
import SoundSettings from '../../components/settings/sound';
import KeyboardShortcutsSettings from '../../components/settings/keyboard-shortcuts';
import ScrollbarWidthSettings from '../../components/settings/scrollbar-width';

type MiscSettingsProps = ThemeProps & {
  currentTheme: string;
  keyboardShortcuts: boolean;
  sound: boolean;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  toggleNightMode: () => void;
  toggleSoundMode: (sound: boolean) => void;
};

const MiscSettings = ({
  currentTheme,
  keyboardShortcuts,
  sound,
  toggleKeyboardShortcuts,
  toggleNightMode,
  toggleSoundMode
}: MiscSettingsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Spacer size='medium' />
      <FullWidthRow>
        <ThemeSettings
          currentTheme={currentTheme}
          toggleNightMode={toggleNightMode}
        />
        <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
        <KeyboardShortcutsSettings
          keyboardShortcuts={keyboardShortcuts}
          toggleKeyboardShortcuts={toggleKeyboardShortcuts}
          explain={t('settings.shortcuts-explained')?.toString()}
        />
        <ScrollbarWidthSettings />
      </FullWidthRow>
    </>
  );
};

export default MiscSettings;
