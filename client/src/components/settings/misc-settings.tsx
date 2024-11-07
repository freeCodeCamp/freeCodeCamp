import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { FullWidthRow } from '../helpers';

import SoundSettings from '../../components/settings/sound';
import KeyboardShortcutsSettings from '../../components/settings/keyboard-shortcuts';
import ScrollbarWidthSettings from '../../components/settings/scrollbar-width';

type MiscSettingsProps = {
  keyboardShortcuts: boolean;
  sound: boolean;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  toggleSoundMode: (sound: boolean) => void;
};

const MiscSettings = ({
  keyboardShortcuts,
  sound,
  toggleKeyboardShortcuts,
  toggleSoundMode
}: MiscSettingsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Spacer size='m' />
      <FullWidthRow>
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
