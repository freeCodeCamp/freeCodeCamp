import { Form } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ToggleSetting from './toggle-setting';

export enum Themes {
  Night = 'night',
  Default = 'default'
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
          toggleNightMode(
            currentTheme === Themes.Night ? Themes.Default : Themes.Night
          );
        }}
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
