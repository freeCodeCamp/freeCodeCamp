import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import store from 'store';
import { useTranslation } from 'react-i18next';

import './sound.css';
import { Spacer } from '@freecodecamp/ui';
import { playTone } from '../../utils/tone';
import {
  AMBIENT_SOUND_TOGGLE_EVENT,
  SOUND_MODE_TOGGLE_EVENT,
  SOUND_VOLUME_EVENT,
  isCampfireAmbienceReady,
  prepareCampfireAmbience
} from '../../utils/tone/ambient';
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
  const ambientSoundFeature = useFeature('ambient-sound');
  const ambientAudioUrl =
    typeof ambientSoundFeature.value === 'string'
      ? ambientSoundFeature.value.trim()
      : '';
  // Without a usable audio url there is nothing the toggle could play, so no
  // control is offered at all.
  const isAmbientSoundAvailable = ambientSoundFeature.on && !!ambientAudioUrl;
  const [isAmbientSoundReady, setIsAmbientSoundReady] = useState(
    isCampfireAmbienceReady
  );
  const [ambientSound, setAmbientSound] = useState(
    Boolean(store.get('fcc-ambient-sound'))
  );
  const [volumeDisplay, setVolumeDisplay] = useState(
    (store.get('soundVolume') as number) ?? 50
  );
  const [mayPlay, setMayPlay] = useState(true);

  useEffect(() => {
    if (!isAmbientSoundAvailable || isAmbientSoundReady) return;

    let isCurrent = true;
    void prepareCampfireAmbience().then(() => {
      if (isCurrent) setIsAmbientSoundReady(isCampfireAmbienceReady());
    });

    return () => {
      isCurrent = false;
    };
  }, [isAmbientSoundAvailable, isAmbientSoundReady]);

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);

    store.set('soundVolume', inputValue);
    window.dispatchEvent(
      new CustomEvent<number>(SOUND_VOLUME_EVENT, { detail: inputValue })
    );

    setVolumeDisplay((store.get('soundVolume') as number) ?? 50);

    if (mayPlay) {
      void playTone('tests-completed');
      setMayPlay(false);
      setTimeout(() => {
        setMayPlay(true);
      }, 200);
    }
  }

  function handleSoundToggle() {
    const nextSound = !sound;
    toggleSoundMode(nextSound);
    window.dispatchEvent(
      new CustomEvent<boolean>(SOUND_MODE_TOGGLE_EVENT, { detail: nextSound })
    );
  }

  function handleAmbientSoundToggle() {
    const nextAmbientSound = !ambientSound;
    store.set('fcc-ambient-sound', nextAmbientSound);
    setAmbientSound(nextAmbientSound);
    window.dispatchEvent(
      new CustomEvent<boolean>(AMBIENT_SOUND_TOGGLE_EVENT, {
        detail: nextAmbientSound
      })
    );
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
        toggleFlag={handleSoundToggle}
      />
      {isAmbientSoundAvailable &&
        (isAmbientSoundReady ? (
          <ToggleButtonSetting
            action={t('settings.labels.ambient-sound-mode')}
            explain={t('settings.ambient-sound-mode')}
            flag={ambientSound}
            flagName='ambientSound'
            offLabel={t('buttons.off')}
            onLabel={t('buttons.on')}
            toggleFlag={handleAmbientSoundToggle}
          />
        ) : (
          // Showing a working-looking toggle before the audio module is ready
          // would swallow the click that is meant to start the ambience.
          <p role='status'>{t('settings.ambient-sound-preparing')}</p>
        ))}
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
