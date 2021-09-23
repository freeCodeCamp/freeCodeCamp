import { Form } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Player, context } from 'tone';
import ToggleSetting from './toggle-setting';

type ThemeProps = {
  currentTheme: string;
  toggleNightMode: (theme: 'default' | 'night') => void;
};

export default function ThemeSettings({
  currentTheme,
  toggleNightMode
}: ThemeProps): JSX.Element {
  const { t } = useTranslation();

  const nightToDayPlayer = new Player(
    'http://campfire-mode.freecodecamp.org.s3-website-us-east-1.amazonaws.com/day.mp3'
  ).toDestination();
  const dayToNightPlayer = new Player(
    'http://campfire-mode.freecodecamp.org.s3-website-us-east-1.amazonaws.com/night.mp3'
  ).toDestination();

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
        toggleFlag={async () => {
          if (context.state === 'running') await context.resume();
          if (currentTheme === 'night') {
            nightToDayPlayer.start(1);
          } else {
            dayToNightPlayer.start(1);
          }
          toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
        }}
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
