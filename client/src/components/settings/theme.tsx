import { Form } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import store from 'store';

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
          const playSound = store.get('fcc-sound') as boolean | undefined;
          if (playSound) {
            const tone = await import('tone');
            const nightToDayPlayer = new tone.Player(
              'https://campfire-mode.freecodecamp.org/day.mp3'
            ).toDestination();
            const dayToNightPlayer = new tone.Player(
              'https://campfire-mode.freecodecamp.org/night.mp3'
            ).toDestination();
            if (tone.context.state !== 'running') await tone.context.resume();
            if (currentTheme === 'night') {
              if (!nightToDayPlayer.loaded)
                await nightToDayPlayer.load(
                  'https://campfire-mode.freecodecamp.org/day.mp3'
                );
              nightToDayPlayer.start();
            } else {
              if (!dayToNightPlayer.loaded)
                await dayToNightPlayer.load(
                  'https://campfire-mode.freecodecamp.org/night.mp3'
                );
              dayToNightPlayer.start();
            }
          }
          toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
        }}
      />
    </Form>
  );
}

ThemeSettings.displayName = 'ThemeSettings';
