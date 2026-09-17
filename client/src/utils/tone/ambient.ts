import store from 'store';

export const AMBIENT_SOUND_TOGGLE_EVENT = 'fcc-ambient-sound-toggle';
export const SOUND_MODE_TOGGLE_EVENT = 'fcc-sound-mode-toggle';
export const SOUND_VOLUME_EVENT = 'fcc-sound-volume-change';

let player: import('tone').Player | null = null;
let playerUrl: string | null = null;

const getDecibelVolume = (volume: number): number =>
  -60 * (1 - volume / 100);

export async function startCampfireAmbience(audioUrl: string): Promise<void> {
  if (!audioUrl) return;

  const Tone = await import('tone');

  if (!player || playerUrl !== audioUrl) {
    disposeCampfireAmbience();

    player = new Tone.Player({
      url: audioUrl,
      loop: true,
      autostart: false
    }).toDestination();
    playerUrl = audioUrl;
  }

  const storedVolume = (store.get('soundVolume') as number) ?? 50;
  player.volume.value = getDecibelVolume(storedVolume);

  await Tone.loaded();

  if (player.state !== 'started') {
    player.start();
  }
}

export function stopCampfireAmbience(): void {
  if (player?.state === 'started') {
    player.stop();
  }
}

export function updateCampfireAmbienceVolume(volume: number): void {
  if (player) {
    player.volume.value = getDecibelVolume(volume);
  }
}

export function disposeCampfireAmbience(): void {
  if (!player) return;

  stopCampfireAmbience();
  player.dispose();
  player = null;
  playerUrl = null;
}
