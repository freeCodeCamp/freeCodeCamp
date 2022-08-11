import { Form } from '@freecodecamp/react-bootstrap';
import React, { ChangeEvent, useEffect, useState } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';

import './sound.css';
import { playTone } from '../../utils/tone';
import ToggleSetting from './toggle-setting';

type SoundProps = {
  sound: boolean;
  toggleSoundMode: (sound: boolean) => void;
};

export default function SoundSettings({
  sound,
  toggleSoundMode
}: SoundProps): JSX.Element {
  const { t } = useTranslation();
  const [volumeDisplay, setVolumeDisplay] = useState(100);

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);

    store.set('soundVolume', inputValue);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setVolumeDisplay(store.get('soundVolume') ?? 0);

    void playTone('tests-completed');
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setVolumeDisplay(store.get('soundVolume') ?? 0);
  }, []);

  return (
    <Form inline={true} onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <ToggleSetting
        action={t('settings.labels.sound-mode')}
        explain={t('settings.sound-mode')}
        flag={sound}
        flagName='sound'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => {
          toggleSoundMode(sound ? false : true);
        }}
      />
      <input
        type='range'
        min='10'
        max='100'
        defaultValue={store.get('soundVolume') as number}
        className='soundbar'
        onChange={handleVolumeChange}
      />
      <div>
        {t('settings.sound-volume')} {volumeDisplay}
      </div>
      <Spacer></Spacer>
    </Form>
  );
}

SoundSettings.displayName = 'SoundSettings';
