/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// @ts-ignore
import { Form } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import ToggleSetting from './ToggleSetting';

type ThemeProps = {
  currentTheme: string;
  toggleNightMode: (theme: 'default' | 'night') => void;
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
        flag={currentTheme === 'night'}
        flagName='currentTheme'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() =>
          toggleNightMode(currentTheme === 'night' ? 'default' : 'night')
        }
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
// ThemeSettings.propTypes = propTypes;
