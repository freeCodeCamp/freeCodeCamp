import { Form } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { playTone } from '../../utils/tone';

import ToggleSetting from './toggle-setting';

export enum Themes {
  Night,
  Default
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
    <Form
      inline={true}
      onSubmit={(e: React.FormEvent): void => e.preventDefault()}
    >
      <ToggleSetting
        action={t('settings.labels.night-mode')}
        flag={currentTheme === Themes.Night}
        flagName='currentTheme'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => {
          void playTone(currentTheme);
          toggleNightMode(
            currentTheme === Themes.Night ? Themes.Default : Themes.Night
          );
        }}
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
