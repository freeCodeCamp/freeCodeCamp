import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

import { FullWidthRow } from '../helpers';
import SoundSettings from './sound';
import ThemeSettings, { type ThemeProps } from './theme';
import KeyboardShortcutsSettings from './keyboard-shortcuts';
import ScrollbarWidthSettings from './scrollbar-width';

type AboutProps = ThemeProps & {
  sound: boolean;
  keyboardShortcuts: boolean;
  t: TFunction;
  toggleSoundMode: (sound: boolean) => void;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
};

class AboutSettings extends Component<AboutProps> {
  static displayName: string;
  constructor(props: AboutProps) {
    super(props);
  }

  render() {
    const {
      currentTheme,
      sound,
      keyboardShortcuts,
      t,
      toggleNightMode,
      toggleSoundMode,
      toggleKeyboardShortcuts
    } = this.props;
    return (
      <>
        <FullWidthRow>
          <ThemeSettings
            currentTheme={currentTheme}
            toggleNightMode={toggleNightMode}
          />
          <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
          <KeyboardShortcutsSettings
            keyboardShortcuts={keyboardShortcuts}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            explain={t('settings.shortcuts-explained')}
          />
          <ScrollbarWidthSettings />
        </FullWidthRow>
      </>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';

export default withTranslation()(AboutSettings);
