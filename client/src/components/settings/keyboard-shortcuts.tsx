import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import ToggleButtonSetting from './toggle-button-setting';

type KeyboardShortcutsProps = {
  keyboardShortcuts: boolean;
  toggleKeyboardShortcuts: (sound: boolean) => void;
  explain?: string;
};

export default function KeyboardShortcutsSettings({
  keyboardShortcuts,
  toggleKeyboardShortcuts,
  explain
}: KeyboardShortcutsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ToggleButtonSetting
        action={t('settings.labels.keyboard-shortcuts')}
        explain={explain}
        flag={keyboardShortcuts}
        flagName='keyboard-shortcuts'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => {
          toggleKeyboardShortcuts(keyboardShortcuts ? false : true);
        }}
      />
      <Spacer size='m' />
    </>
  );
}

KeyboardShortcutsSettings.displayName = 'KeyboardShortcutsSettings';
