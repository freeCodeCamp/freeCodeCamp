import store from 'store';
import { FlashMessages } from '../../components/Flash/redux';
import { Themes } from '../../components/settings/theme';

const toneUrls = {
  tryAgain: 'https://campfire-mode.freecodecamp.org/try-again.mp3',
  cert: 'https://campfire-mode.freecodecamp.org/cert.mp3',
  day: 'https://campfire-mode.freecodecamp.org/day.mp3',
  night: 'https://campfire-mode.freecodecamp.org/night.mp3',
  donate: 'https://campfire-mode.freecodecamp.org/donate.mp3',
  chalComp: 'https://campfire-mode.freecodecamp.org/chal-comp.mp3',
  guitarChordOne: 'https://campfire-mode.freecodecamp.org/guitar_chord1.mp3'
};

type ToneStates =
  | FlashMessages
  | Themes
  | 'donation'
  | 'tests-completed'
  | 'tests-failed'
  | 'block-toggle'
  | 'completion';

export async function playTone(state: ToneStates): Promise<void> {
  const playSound = !!store.get('fcc-sound');
  if (playSound) {
    const tone = await import('tone');
    if (tone.context.state !== 'running') {
      tone.context.resume().catch(err => {
        console.error('Error resuming audio context', err);
      });
    }

    const switcher = {
      [FlashMessages.IncompleteSteps]: () => playSample(toneUrls.tryAgain),
      [FlashMessages.CertClaimSuccess]: () => playSample(toneUrls.cert),
      donation: () => playSample(toneUrls.donate),
      'tests-completed': () => playSample(toneUrls.chalComp),
      'tests-failed': () => playSample(toneUrls.tryAgain),
      'block-toggle': () => playSample(toneUrls.guitarChordOne),
      completion: () => playSample(toneUrls.chalComp),
      [Themes.Night]: () => playSample(toneUrls.night),
      [Themes.Default]: () => playSample(toneUrls.day)
    };
    // Slight hack, until we decide what to do with other flashes
    switcher[state as keyof typeof switcher]?.();

    // TODO: Think about using URL as type
    // eslint-disable-next-line no-inner-declarations
    function playSample(url: string): void {
      const player = new tone.Player(url).toDestination();
      player.autostart = true;
    }
  }
}
