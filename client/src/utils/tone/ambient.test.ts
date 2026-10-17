/**
 * @vitest-environment jsdom
 */
import { beforeEach, describe, expect, it, vi } from 'vitest';

const {
  mockStart,
  mockStop,
  mockDispose,
  mockToDestination,
  mockLoaded,
  mockToneStart,
  mockVolume,
  mockStoreGet,
  contextState,
  makePlayer
} = vi.hoisted(() => {
  const mockStart = vi.fn();
  const mockStop = vi.fn();
  const mockDispose = vi.fn();
  const mockToDestination = vi.fn();
  const mockLoaded = vi.fn();
  const mockToneStart = vi.fn();
  const mockVolume = { value: 0 };
  const mockStoreGet = vi.fn();
  const contextState = { value: 'running' };

  // The real player reports its own state, which the manager relies on to avoid
  // starting or stopping the same player twice.
  const makePlayer = (state: 'started' | 'stopped') => {
    const instance = {
      state,
      start: () => {
        instance.state = 'started';
        mockStart();
      },
      stop: () => {
        instance.state = 'stopped';
        mockStop();
      },
      dispose: () => {
        mockDispose();
      },
      volume: mockVolume,
      toDestination: mockToDestination
    };
    return instance;
  };

  return {
    mockStart,
    mockStop,
    mockDispose,
    mockToDestination,
    mockLoaded,
    mockToneStart,
    mockVolume,
    mockStoreGet,
    contextState,
    makePlayer
  };
});

vi.mock('store', () => ({
  default: {
    get: mockStoreGet
  }
}));

vi.mock('tone', () => ({
  loaded: mockLoaded,
  start: mockToneStart,
  getContext: () => ({ state: contextState.value }),
  // `vi.fn` impls are invoked with `new`, so this must be a function
  // expression rather than an arrow function.
  Player: vi.fn(function () {
    return makePlayer('stopped');
  })
}));

mockToDestination.mockImplementation(function (this: unknown) {
  return this;
});

import {
  disposeCampfireAmbience,
  isCampfireAmbienceReady,
  prepareCampfireAmbience,
  startCampfireAmbience,
  stopCampfireAmbience,
  updateCampfireAmbienceVolume
} from './ambient';

const AUDIO_URL = 'https://example.com/campfire.mp3';
const OTHER_AUDIO_URL = 'https://example.com/other-campfire.mp3';

const flushAsync = () => new Promise(resolve => setTimeout(resolve, 0));

type GestureListener = (event: Event) => void;

// `isTrusted` is unforgeable, so a dispatched jsdom event can never stand in for
// a real gesture. The listeners the manager registers are tracked instead and
// invoked directly with the activation flag under test.
let liveListeners: { type: string; listener: GestureListener }[] = [];

const listenerTypes = () => liveListeners.map(entry => entry.type);

// jsdom has no `navigator.userActivation`, so the browser signal the manager
// reads is stubbed here.
const userActivation = { isActive: false };
Object.defineProperty(window.navigator, 'userActivation', {
  value: userActivation,
  configurable: true
});

function fireGestureEvent(
  type: string,
  init: Record<string, unknown> = {},
  isTrusted = true
): void {
  const entry = liveListeners.find(item => item.type === type);
  entry?.listener({ isTrusted, type, ...init } as unknown as Event);
}

async function dispatchGesture(isTrusted = true): Promise<void> {
  fireGestureEvent('pointerdown', { pointerType: 'mouse' }, isTrusted);
  await flushAsync();
}

describe('campfire ambience', () => {
  beforeEach(async () => {
    vi.spyOn(window, 'addEventListener').mockImplementation(
      (type, listener) => {
        liveListeners.push({
          type: String(type),
          listener: listener as GestureListener
        });
      }
    );
    vi.spyOn(window, 'removeEventListener').mockImplementation(
      (type, listener) => {
        liveListeners = liveListeners.filter(
          entry => !(entry.type === type && entry.listener === listener)
        );
      }
    );
    liveListeners = [];

    disposeCampfireAmbience();
    vi.clearAllMocks();

    // `clearAllMocks` leaves queued `...Once` values in place, so the mocks that
    // tests queue failures on are reset outright.
    const Tone = await import('tone');
    vi.mocked(Tone.Player).mockReset();
    vi.mocked(Tone.Player).mockImplementation(function () {
      return makePlayer('stopped') as never;
    });
    mockLoaded.mockReset();
    mockLoaded.mockResolvedValue(undefined);
    mockToneStart.mockReset();
    mockToneStart.mockResolvedValue(undefined);

    mockVolume.value = 0;
    contextState.value = 'running';
    userActivation.isActive = false;
    mockStoreGet.mockReturnValue(50);

    // Most tests care about playback, not about the import, so the module is
    // ready unless a test deliberately holds it open.
    await prepareCampfireAmbience();
  });

  it('creates a looping player and starts it with the stored volume', async () => {
    const Tone = await import('tone');

    await startCampfireAmbience(AUDIO_URL);

    expect(Tone.Player).toHaveBeenCalledWith({
      url: AUDIO_URL,
      loop: true,
      autostart: false
    });
    expect(mockLoaded).toHaveBeenCalledOnce();
    expect(mockVolume.value).toBe(-30);
    expect(mockStart).toHaveBeenCalledOnce();
  });

  it('updates the active player volume without recreating it', async () => {
    const Tone = await import('tone');

    await startCampfireAmbience(AUDIO_URL);
    updateCampfireAmbienceVolume(75);

    expect(Tone.Player).toHaveBeenCalledOnce();
    expect(mockVolume.value).toBe(-15);
  });

  it('disposes the player when ambience is torn down', async () => {
    await startCampfireAmbience(AUDIO_URL);

    disposeCampfireAmbience();

    expect(mockDispose).toHaveBeenCalledOnce();
  });

  it('does nothing when no audio URL is configured', async () => {
    const Tone = await import('tone');

    await startCampfireAmbience('');

    expect(Tone.Player).not.toHaveBeenCalled();
  });

  it('stops an active player', async () => {
    const Tone = await import('tone');
    vi.mocked(Tone.Player).mockImplementationOnce(function () {
      return makePlayer('started') as never;
    });

    await startCampfireAmbience(AUDIO_URL);
    stopCampfireAmbience();

    expect(mockStop).toHaveBeenCalled();
  });

  describe('autoplay restrictions', () => {
    it('does not start while the audio context is suspended', async () => {
      const Tone = await import('tone');
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(Tone.Player).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
      expect(listenerTypes()).toEqual([
        'pointerdown',
        'pointerup',
        'touchend',
        'keydown'
      ]);
    });

    it('starts once a trusted interaction has unblocked the context', async () => {
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('ignores synthetic events that carry no user activation', async () => {
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture(false);

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
    });

    it('does not request activation when the context is already running', async () => {
      await startCampfireAmbience(AUDIO_URL);

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('stops listening for gestures once playback has started', async () => {
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture();

      expect(listenerTypes()).toEqual([]);

      await dispatchGesture();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('keeps the retry path when activation fails', async () => {
      contextState.value = 'suspended';
      mockToneStart.mockRejectedValueOnce(new Error('autoplay blocked'));

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).not.toHaveBeenCalled();
      // The retry path must survive a failed activation.
      expect(listenerTypes()).not.toEqual([]);

      await dispatchGesture();

      expect(mockToneStart).toHaveBeenCalledTimes(2);
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('keeps the retry path when the audio fails to load', async () => {
      contextState.value = 'suspended';
      mockLoaded.mockRejectedValueOnce(new Error('network'));

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture();

      expect(mockStart).not.toHaveBeenCalled();

      await dispatchGesture();

      expect(mockStart).toHaveBeenCalledOnce();
    });
  });

  describe('async lifecycle', () => {
    it('does not start when playback is stopped while the audio loads', async () => {
      let resolveLoaded = () => undefined as void;
      mockLoaded.mockReturnValueOnce(
        new Promise<void>(resolve => {
          resolveLoaded = resolve;
        })
      );

      const pending = startCampfireAmbience(AUDIO_URL);
      await flushAsync();

      stopCampfireAmbience();
      resolveLoaded();
      await pending;

      expect(mockStart).not.toHaveBeenCalled();
    });

    it('does not start when the manager is disposed while the audio loads', async () => {
      let resolveLoaded = () => undefined as void;
      mockLoaded.mockReturnValueOnce(
        new Promise<void>(resolve => {
          resolveLoaded = resolve;
        })
      );

      const pending = startCampfireAmbience(AUDIO_URL);
      await flushAsync();

      disposeCampfireAmbience();
      resolveLoaded();
      await pending;

      expect(mockStart).not.toHaveBeenCalled();
      expect(mockDispose).toHaveBeenCalledOnce();
    });

    it('leaves a superseded request unable to touch the newer player', async () => {
      const Tone = await import('tone');
      let resolveFirstLoad = () => undefined as void;
      mockLoaded.mockReturnValueOnce(
        new Promise<void>(resolve => {
          resolveFirstLoad = resolve;
        })
      );

      const firstRequest = startCampfireAmbience(AUDIO_URL);
      await flushAsync();

      await startCampfireAmbience(OTHER_AUDIO_URL);

      resolveFirstLoad();
      await firstRequest;

      expect(Tone.Player).toHaveBeenCalledTimes(2);
      // Only the newer request reached playback, and only the stale player was
      // disposed.
      expect(mockStart).toHaveBeenCalledOnce();
      expect(mockDispose).toHaveBeenCalledOnce();
    });

    it('builds and starts a single player for repeated requests', async () => {
      const Tone = await import('tone');

      await Promise.all([
        startCampfireAmbience(AUDIO_URL),
        startCampfireAmbience(AUDIO_URL),
        startCampfireAmbience(AUDIO_URL)
      ]);

      expect(Tone.Player).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('drops gesture listeners and pending starts on teardown', async () => {
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);
      disposeCampfireAmbience();

      expect(listenerTypes()).toEqual([]);

      await dispatchGesture();

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
    });

    it('starts cleanly after a teardown and a fresh request', async () => {
      const Tone = await import('tone');
      contextState.value = 'suspended';

      await startCampfireAmbience(AUDIO_URL);
      disposeCampfireAmbience();

      await startCampfireAmbience(AUDIO_URL);
      await dispatchGesture();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(Tone.Player).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });
  });

  describe('same-interaction activation', () => {
    it('opens a suspended context inside the interaction that asked for it', async () => {
      contextState.value = 'suspended';
      userActivation.isActive = true;

      await startCampfireAmbience(AUDIO_URL);

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
      // No second start chain is left waiting for another gesture.
      expect(listenerTypes()).toEqual([]);
    });

    it('does not open a suspended context without user activation', async () => {
      contextState.value = 'suspended';
      userActivation.isActive = false;

      await startCampfireAmbience(AUDIO_URL);

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
      expect(listenerTypes()).not.toEqual([]);
    });

    it('does not activate a running context even with activation available', async () => {
      userActivation.isActive = true;

      await startCampfireAmbience(AUDIO_URL);

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('falls back to the gesture path when the in-click activation fails', async () => {
      contextState.value = 'suspended';
      userActivation.isActive = true;
      mockToneStart.mockRejectedValueOnce(new Error('autoplay blocked'));

      await startCampfireAmbience(AUDIO_URL);

      expect(mockStart).not.toHaveBeenCalled();
      expect(listenerTypes()).not.toEqual([]);

      await dispatchGesture();

      expect(mockStart).toHaveBeenCalledOnce();
    });
  });

  describe('activation event rules', () => {
    beforeEach(async () => {
      contextState.value = 'suspended';
      await startCampfireAmbience(AUDIO_URL);
    });

    it('ignores events that do not grant activation', async () => {
      fireGestureEvent('pointerdown', { pointerType: 'touch' });
      fireGestureEvent('pointerup', { pointerType: 'mouse' });
      fireGestureEvent('keydown', { key: 'Shift' });
      fireGestureEvent('keydown', { key: 'Tab' });
      fireGestureEvent('keydown', { key: 'r', ctrlKey: true });
      await flushAsync();

      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
    });

    it('accepts a non-mouse pointerup', async () => {
      fireGestureEvent('pointerup', { pointerType: 'touch' });
      await flushAsync();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('accepts a plain key press', async () => {
      fireGestureEvent('keydown', { key: 'Enter' });
      await flushAsync();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('starts once when a single tap raises several events', async () => {
      // A tap produces both a non-mouse pointerup and a touchend.
      fireGestureEvent('pointerup', { pointerType: 'touch' });
      fireGestureEvent('touchend');
      await flushAsync();

      expect(mockToneStart).toHaveBeenCalledOnce();
      expect(mockStart).toHaveBeenCalledOnce();
    });
  });

  describe('load failures on a running context', () => {
    it('settles instead of leaving an unhandled rejection', async () => {
      mockLoaded.mockRejectedValueOnce(new Error('network'));

      await expect(startCampfireAmbience(AUDIO_URL)).resolves.toBeUndefined();
      expect(mockStart).not.toHaveBeenCalled();

      // The failure is recoverable: a later request still starts.
      await startCampfireAmbience(AUDIO_URL);

      expect(mockStart).toHaveBeenCalledOnce();
    });

    it('keeps a failed request away from the player a newer one built', async () => {
      const Tone = await import('tone');
      let rejectFirstLoad: (error: Error) => void = () => undefined;
      mockLoaded.mockReturnValueOnce(
        new Promise<void>((_resolve, reject) => {
          rejectFirstLoad = reject;
        })
      );

      const firstRequest = startCampfireAmbience(AUDIO_URL);
      await flushAsync();

      await startCampfireAmbience(OTHER_AUDIO_URL);

      rejectFirstLoad(new Error('network'));
      await expect(firstRequest).resolves.toBeUndefined();

      expect(Tone.Player).toHaveBeenCalledTimes(2);
      // Only the newer request played, and only its own stale predecessor was
      // disposed.
      expect(mockStart).toHaveBeenCalledOnce();
      expect(mockDispose).toHaveBeenCalledOnce();
    });
  });

  describe('module readiness', () => {
    it('prepares the module without making any sound', async () => {
      await prepareCampfireAmbience();

      expect(isCampfireAmbienceReady()).toBe(true);
      expect(mockToneStart).not.toHaveBeenCalled();
      expect(mockStart).not.toHaveBeenCalled();
    });
  });
});
