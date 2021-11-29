import store from 'store';
import { FlashMessageArg } from '../../components/Flash/redux';
import { Themes } from '../../components/settings/theme';

// TODO: Add more tone types
export async function playTone(
  state: FlashMessageArg['message'] | Themes | string
): Promise<void> {
  const playSound = !!store.get('fcc-sound');
  if (playSound) {
    const tone = await import('tone');
    if (tone.context.state !== 'running') {
      void tone.context.resume();
    }
    let player;
    switch (state) {
      case 'flash.incomplete-steps':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/try-again.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case 'flash.cert-claim-success':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/cert.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case Themes.Night:
        const nightToDayPlayer = new tone.Player(
          'https://campfire-mode.freecodecamp.org/day.mp3'
        ).toDestination();
        if (!nightToDayPlayer.loaded)
          await nightToDayPlayer.load(
            'https://campfire-mode.freecodecamp.org/day.mp3'
          );
        nightToDayPlayer.start();
        break;
      case Themes.Default:
        const dayToNightPlayer = new tone.Player(
          'https://campfire-mode.freecodecamp.org/night.mp3'
        ).toDestination();
        if (!dayToNightPlayer.loaded)
          await dayToNightPlayer.load(
            'https://campfire-mode.freecodecamp.org/night.mp3'
          );
        dayToNightPlayer.start();
        break;
      case 'donation':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/donate.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case 'tests-complete':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/chal-comp.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case 'completion':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/chal-comp.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case 'tests-failed':
        player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/try-again.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      case 'block-toggle':
        player = new tone.Player(
          'https://tonejs.github.io/audio/berklee/guitar_chord1.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
      default:
        player = new tone.Player(
          'https://tonejs.github.io/audio/berklee/guitar_chord1.mp3'
        ).toDestination();
        player.autostart = playSound;
        break;
    }
  }
}
