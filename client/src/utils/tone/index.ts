import store from 'store';
import { FlashMessages } from '../../components/Flash/redux';
import { Themes } from '../../components/settings/theme';

const toneUrls = {
  [FlashMessages.IncompleteSteps]:
    'https://campfire-mode.freecodecamp.org/try-again.mp3',
  [FlashMessages.CertClaimSuccess]:
    'https://campfire-mode.freecodecamp.org/cert.mp3',
  [Themes.Default]: 'https://campfire-mode.freecodecamp.org/day.mp3',
  [Themes.Night]: 'https://campfire-mode.freecodecamp.org/night.mp3',
  donation: 'https://campfire-mode.freecodecamp.org/donate.mp3',
  'tests-completed': 'https://campfire-mode.freecodecamp.org/chal-comp.mp3',
  'block-toggle': 'https://campfire-mode.freecodecamp.org/guitar_chord1.mp3',
  'tests-failed': 'https://campfire-mode.freecodecamp.org/try-again.mp3',
  completion: 'https://campfire-mode.freecodecamp.org/chal-comp.mp3'
} as const;

type ToneStates = keyof typeof toneUrls;

export async function playTone(state: ToneStates): Promise<void> {
  const playSound = !!store.get('fcc-sound');
  if (playSound) {
    const tone = await import('tone');
    if (tone.context.state !== 'running') {
      tone.context.resume().catch(err => {
        console.error('Error resuming audio context', err);
      });
    }

    if (toneUrls[state]) {
      const player = new tone.Player(toneUrls[state]).toDestination();
      player.autostart = true;
    }
  }
}
