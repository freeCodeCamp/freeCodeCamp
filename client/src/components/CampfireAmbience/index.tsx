import React, { useEffect } from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import store from 'store';

import {
  AMBIENT_SOUND_TOGGLE_EVENT,
  SOUND_MODE_TOGGLE_EVENT,
  SOUND_VOLUME_EVENT,
  disposeCampfireAmbience,
  startCampfireAmbience,
  stopCampfireAmbience,
  updateCampfireAmbienceVolume
} from '../../utils/tone/ambient';

const isEnabled = (value: unknown): boolean => value === true;

export default function CampfireAmbience(): null {
  const feature = useFeature('ambient-sound');
  const audioUrl =
    typeof feature.value === 'string' ? feature.value.trim() : '';

  useEffect(() => {
    if (!feature.on || !audioUrl) {
      disposeCampfireAmbience();
      return;
    }

    const syncPlayback = (ambientEnabled: boolean, soundEnabled: boolean) => {
      if (ambientEnabled && soundEnabled) {
        void startCampfireAmbience(audioUrl);
      } else {
        stopCampfireAmbience();
      }
    };

    syncPlayback(
      isEnabled(store.get('fcc-ambient-sound')),
      isEnabled(store.get('fcc-sound'))
    );

    const handleAmbientToggle = (event: Event) => {
      const ambientEnabled = Boolean((event as CustomEvent<boolean>).detail);
      syncPlayback(ambientEnabled, isEnabled(store.get('fcc-sound')));
    };

    const handleSoundToggle = (event: Event) => {
      const soundEnabled = Boolean((event as CustomEvent<boolean>).detail);
      syncPlayback(isEnabled(store.get('fcc-ambient-sound')), soundEnabled);
    };

    const handleVolumeChange = (event: Event) => {
      const volume = Number((event as CustomEvent<number>).detail);
      updateCampfireAmbienceVolume(volume);
    };

    window.addEventListener(AMBIENT_SOUND_TOGGLE_EVENT, handleAmbientToggle);
    window.addEventListener(SOUND_MODE_TOGGLE_EVENT, handleSoundToggle);
    window.addEventListener(SOUND_VOLUME_EVENT, handleVolumeChange);

    return () => {
      window.removeEventListener(AMBIENT_SOUND_TOGGLE_EVENT, handleAmbientToggle);
      window.removeEventListener(SOUND_MODE_TOGGLE_EVENT, handleSoundToggle);
      window.removeEventListener(SOUND_VOLUME_EVENT, handleVolumeChange);
      disposeCampfireAmbience();
    };
  }, [audioUrl, feature.on]);

  return null;
}
