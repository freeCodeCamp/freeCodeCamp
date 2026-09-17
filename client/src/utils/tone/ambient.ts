import store from 'store';

export const AMBIENT_SOUND_TOGGLE_EVENT = 'fcc-ambient-sound-toggle';
export const SOUND_MODE_TOGGLE_EVENT = 'fcc-sound-mode-toggle';
export const SOUND_VOLUME_EVENT = 'fcc-sound-volume-change';

type ToneModule = typeof import('tone');
type TonePlayer = import('tone').Player;

// Only the events that grant user activation are worth listening for.
// `touchstart` is deliberately absent: it does not activate on its own.
const GESTURE_EVENTS = [
  'pointerdown',
  'pointerup',
  'touchend',
  'keydown'
] as const;

// Keys that never activate, even though they raise keydown.
const INERT_KEYS = new Set([
  'Escape',
  'Shift',
  'Control',
  'Alt',
  'Meta',
  'OS',
  'CapsLock',
  'NumLock',
  'ScrollLock',
  'Tab'
]);

let player: TonePlayer | null = null;
let playerUrl: string | null = null;

// Bumped by every start, stop and dispose so that in-flight async work can tell
// whether it is still the request the caller is waiting on.
let activeRequest = 0;

let tonePromise: Promise<ToneModule> | null = null;
let toneModule: ToneModule | null = null;

let gestureUrl: string | null = null;
let gestureRequest = 0;
let isListeningForGesture = false;
// A single interaction raises several events (a tap gives both touchend and a
// non-mouse pointerup), so only one of them may open the context.
let isActivating = false;

const getDecibelVolume = (volume: number): number => -60 * (1 - volume / 100);

const getStoredVolume = (): number =>
  (store.get('soundVolume') as number) ?? 50;

function loadTone(): Promise<ToneModule> {
  if (!tonePromise) {
    tonePromise = import('tone')
      .then(tone => {
        toneModule = tone;
        return tone;
      })
      .catch(err => {
        // Drop the cached rejection so a later attempt can import again.
        tonePromise = null;
        throw err;
      });
  }
  return tonePromise;
}

/**
 * Whether the browser still holds transient user activation. This asks the
 * browser rather than trusting an event object, so a CustomEvent dispatched
 * during a real click is neither credited with activation nor mistaken for a
 * page that has never been interacted with.
 */
function hasUserActivation(): boolean {
  if (typeof navigator === 'undefined') return false;

  const { userActivation } = navigator as Navigator & {
    userActivation?: { isActive: boolean };
  };

  return userActivation?.isActive === true;
}

function isActivationKey(event: KeyboardEvent): boolean {
  if (event.metaKey || event.ctrlKey || event.altKey) return false;
  return !INERT_KEYS.has(event.key);
}

function isActivationEvent(event: Event): boolean {
  // A CustomEvent we dispatched ourselves carries no user activation.
  if (!event.isTrusted) return false;

  switch (event.type) {
    case 'pointerdown':
      // A mouse press activates immediately; other pointers do not.
      return (event as PointerEvent).pointerType === 'mouse';
    case 'pointerup':
      return (event as PointerEvent).pointerType !== 'mouse';
    case 'touchend':
      return true;
    case 'keydown':
      return isActivationKey(event as KeyboardEvent);
    default:
      return false;
  }
}

function stopListeningForGesture(): void {
  gestureUrl = null;
  gestureRequest = 0;
  isActivating = false;

  if (!isListeningForGesture || typeof window === 'undefined') return;

  GESTURE_EVENTS.forEach(eventName =>
    window.removeEventListener(eventName, handleGesture, true)
  );
  isListeningForGesture = false;
}

function listenForGesture(audioUrl: string, requestId: number): void {
  if (typeof window === 'undefined') return;

  gestureUrl = audioUrl;
  gestureRequest = requestId;

  if (isListeningForGesture) return;

  GESTURE_EVENTS.forEach(eventName =>
    window.addEventListener(eventName, handleGesture, true)
  );
  isListeningForGesture = true;
}

function handleGesture(event: Event): void {
  if (!isActivationEvent(event) || isActivating) return;

  const audioUrl = gestureUrl;
  const requestId = gestureRequest;

  if (!audioUrl || requestId !== activeRequest) {
    stopListeningForGesture();
    return;
  }

  const tone = toneModule;

  if (!tone) {
    // The dynamic import has not resolved yet. User activation does not survive
    // the await, so this gesture is dropped rather than reported as a success,
    // and the next gesture retries with the module in hand.
    void loadTone().catch(() => undefined);
    return;
  }

  isActivating = true;

  void tone
    .start()
    .then(() => resumePlayback(tone, audioUrl, requestId))
    .then(hasStarted => {
      if (hasStarted && requestId === activeRequest) stopListeningForGesture();
    })
    // Keep listening so that a later gesture can retry a failed start.
    .catch(() => undefined)
    .finally(() => {
      isActivating = false;
    });
}

async function resumePlayback(
  tone: ToneModule,
  audioUrl: string,
  requestId: number
): Promise<boolean> {
  if (requestId !== activeRequest) return false;

  if (!player || playerUrl !== audioUrl) {
    releasePlayer();
    if (requestId !== activeRequest) return false;

    player = new tone.Player({
      url: audioUrl,
      loop: true,
      autostart: false
    }).toDestination();
    playerUrl = audioUrl;
  }

  const requestedPlayer = player;
  requestedPlayer.volume.value = getDecibelVolume(getStoredVolume());

  await tone.loaded();

  // The request may have been superseded while the audio was loading, and a
  // newer request may have replaced the player this one created.
  if (requestId !== activeRequest || player !== requestedPlayer) return false;

  if (requestedPlayer.state !== 'started') requestedPlayer.start();

  return true;
}

function releasePlayer(): void {
  if (!player) return;

  if (player.state === 'started') player.stop();
  player.dispose();
  player = null;
  playerUrl = null;
}

/**
 * Loads Tone ahead of time so that a later toggle can open the audio context
 * within the click that asked for it. This never produces sound.
 */
export function prepareCampfireAmbience(): Promise<void> {
  return loadTone().then(
    () => undefined,
    () => undefined
  );
}

export function isCampfireAmbienceReady(): boolean {
  return toneModule !== null;
}

/**
 * Not an `async function`: everything up to the first `then` runs inside the
 * caller's interaction, which is what lets a real toggle click open a suspended
 * audio context without waiting for the audio itself to load.
 */
export function startCampfireAmbience(audioUrl: string): Promise<void> {
  if (!audioUrl) return Promise.resolve();

  // Repeated events for the url that is already playing must not build a
  // second player.
  if (player && playerUrl === audioUrl && player.state === 'started') {
    return Promise.resolve();
  }

  const requestId = ++activeRequest;
  const tone = toneModule;

  if (tone) {
    if (tone.getContext().state === 'running') {
      // Already allowed to make sound, so there is nothing to unblock.
      stopListeningForGesture();
      return resumePlayback(tone, audioUrl, requestId).then(() => undefined);
    }

    if (hasUserActivation()) {
      stopListeningForGesture();
      return tone
        .start()
        .then(() => resumePlayback(tone, audioUrl, requestId))
        .then(() => undefined)
        .catch(() => {
          // Fall back to the gesture path so the next interaction can retry.
          if (requestId === activeRequest)
            listenForGesture(audioUrl, requestId);
        });
    }

    listenForGesture(audioUrl, requestId);
    return Promise.resolve();
  }

  // The module still has to be imported, so any activation is gone by the time
  // it resolves. Playback can only continue on an already running context.
  return loadTone()
    .then(async loadedTone => {
      if (requestId !== activeRequest) return;

      if (loadedTone.getContext().state === 'running') {
        stopListeningForGesture();
        await resumePlayback(loadedTone, audioUrl, requestId);
        return;
      }

      listenForGesture(audioUrl, requestId);
    })
    .catch(() => undefined);
}

export function stopCampfireAmbience(): void {
  // Invalidates a pending start even when no player has been built yet.
  activeRequest++;
  stopListeningForGesture();

  if (player?.state === 'started') player.stop();
}

export function updateCampfireAmbienceVolume(volume: number): void {
  if (player) {
    player.volume.value = getDecibelVolume(volume);
  }
}

export function disposeCampfireAmbience(): void {
  // Only the ambience player is torn down. The Tone AudioContext is shared with
  // the rest of the site's sounds, so it is left running.
  activeRequest++;
  stopListeningForGesture();
  releasePlayer();
}
