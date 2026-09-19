import { useEffect } from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import store from 'store';

import {
  AMBIENT_SOUND_TOGGLE_EVENT,
  SOUND_VOLUME_EVENT,
  disposeCampfireAmbience,
  prepareCampfireAmbience,
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

    // Loading Tone up front lets a later toggle click open the audio context
    // within that same interaction. It makes no sound on its own.
    void prepareCampfireAmbience();

    // The ambience has its own preference. Campfire Mode covers the sounds the
    // editor makes as you work, which is a separate thing to want.
    const syncPlayback = (ambientEnabled: boolean) => {
      if (ambientEnabled) {
        void startCampfireAmbience(audioUrl);
      } else {
        stopCampfireAmbience();
      }
    };

    syncPlayback(isEnabled(store.get('fcc-ambient-sound')));

    const handleAmbientToggle = (event: Event) => {
      syncPlayback(Boolean((event as CustomEvent<boolean>).detail));
    };

    const handleVolumeChange = (event: Event) => {
      const volume = Number((event as CustomEvent<number>).detail);
      updateCampfireAmbienceVolume(volume);
    };

    window.addEventListener(AMBIENT_SOUND_TOGGLE_EVENT, handleAmbientToggle);
    window.addEventListener(SOUND_VOLUME_EVENT, handleVolumeChange);

    return () => {
      window.removeEventListener(
        AMBIENT_SOUND_TOGGLE_EVENT,
        handleAmbientToggle
      );
      window.removeEventListener(SOUND_VOLUME_EVENT, handleVolumeChange);
      disposeCampfireAmbience();
    };
  }, [audioUrl, feature.on]);

  return null;
}
