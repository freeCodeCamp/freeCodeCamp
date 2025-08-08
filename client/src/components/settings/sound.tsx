import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';

import './sound.css';
import { Spacer } from '@freecodecamp/ui';
import { playTone } from '../../utils/tone';
import ToggleButtonSetting from './toggle-button-setting';

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
    (store.get('soundVolume') as number) ?? 50
  );
  const [mayPlay, setMayPlay] = useState(true);
  const [isAmbientSoundOn, setAmbientSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      // replace with link for audio
      audioRef.current = new Audio(
        'https://campfire-mode.freecodecamp.org/chal-comp.mp3'
      );
      audioRef.current.loop = true;
    }

    if (isAmbientSoundOn) {
      audioRef.current.volume = volumeDisplay / 100;
      audioRef.current.play().catch(e => {
        console.warn('Audio playback failed:', e);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [isAmbientSoundOn, volumeDisplay]);

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);

    store.set('soundVolume', inputValue);

    setVolumeDisplay((store.get('soundVolume') as number) ?? 50);

    if (mayPlay) {
      void playTone('tests-completed');
      setMayPlay(false);
      setTimeout(() => {
        setMayPlay(true);
      }, 200);
    }
  }

  return (
    <>
      <ToggleButtonSetting
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
      <ToggleButtonSetting
        action='Ambient Sound' // will need to add translations for action and explain
        explain='This adds an ambient campfire sound throughout the website while Campfire Mode is on.'
        flag={isAmbientSoundOn}
        flagName='ambientSound'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => setAmbientSoundOn(prev => !prev)}
      />
      <label htmlFor='volumeslider'>
        {t('settings.sound-volume')}{' '}
        <span aria-hidden='true'>{volumeDisplay}</span>
      </label>
      <input
        type='range'
        min='10'
        max='100'
        id='volumeslider'
        defaultValue={volumeDisplay}
        className='soundbar'
        onInput={handleVolumeChange}
      />
      <Spacer size='m' />
    </>
  );
}

SoundSettings.displayName = 'SoundSettings';
