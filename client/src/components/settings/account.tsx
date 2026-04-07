import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { FullWidthRow } from '../helpers';

import SoundSettings from './sound';
import KeyboardShortcutsSettings from './keyboard-shortcuts';
import ScrollbarWidthSettings from './scrollbar-width';
import SectionHeader from './section-header';

type MiscSettingsProps = {
  keyboardShortcuts: boolean;
  sound: boolean;
  editorLayout: boolean | null;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  toggleSoundMode: (sound: boolean) => void;
  resetEditorLayout: () => void;
};

const MiscSettings = ({
  keyboardShortcuts,
  sound,
  editorLayout,
  resetEditorLayout,
  toggleKeyboardShortcuts,
  toggleSoundMode
}: MiscSettingsProps) => {
  const { t } = useTranslation();

  return (
    <div className='account-settings'>
      <SectionHeader>{t('settings.headings.account')}</SectionHeader>
      <FullWidthRow>
        <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
        <KeyboardShortcutsSettings
          keyboardShortcuts={keyboardShortcuts}
          toggleKeyboardShortcuts={toggleKeyboardShortcuts}
          explain={t('settings.shortcuts-explained')?.toString()}
        />
        <ScrollbarWidthSettings />
        <label htmlFor='reset-layout-btn'>
          {t('settings.reset-editor-layout-tooltip')}
        </label>
        <Spacer size='xs' />
        <Button
          onClick={resetEditorLayout}
          id='reset-layout-btn'
          data-playwright-test-label='reset-layout-btn'
          disabled={!editorLayout}
          aria-disabled={!editorLayout}
        >
          {t('settings.reset-editor-layout')}
        </Button>
      </FullWidthRow>
    </div>
  );
};

export default MiscSettings;
