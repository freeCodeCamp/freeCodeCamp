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
  const [volumeDisplay, setVolumeDisplay] = useState(
    store.get('soundVolume') as number
  );

  const soundInterval = setTimeout(() => {
    void playTone('tests-completed');
  }, 200);

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);

    store.set('soundVolume', inputValue);

    setVolumeDisplay((store.get('soundVolume') as number) ?? 50);
    clearTimeout(soundInterval);
    soundInterval;
  }

  useEffect(() => {
    setVolumeDisplay((store.get('soundVolume') as number) ?? 50);
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
        defaultValue={volumeDisplay}
        className='soundbar'
        aria-label={`${t('settings.sound-volume')} ${volumeDisplay}`}
        onInput={handleVolumeChange}
      />
      <div>
        {t('settings.sound-volume')} {volumeDisplay}
      </div>
      <Spacer></Spacer>
    </Form>
  );
}

SoundSettings.displayName = 'SoundSettings';
