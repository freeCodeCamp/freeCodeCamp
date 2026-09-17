import { beforeEach, describe, expect, it, vi } from 'vitest';
import store from 'store';

const mockStart = vi.fn();
const mockStop = vi.fn();
const mockDispose = vi.fn();
const mockToDestination = vi.fn();
const mockLoaded = vi.fn();
const mockVolume = { value: 0 };

vi.mock('store', () => ({
  default: {
    get: vi.fn()
  }
}));

vi.mock('tone', () => ({
  loaded: mockLoaded,
  Player: vi.fn(() => ({
    state: 'stopped',
    start: mockStart,
    stop: mockStop,
    dispose: mockDispose,
    volume: mockVolume,
    toDestination: mockToDestination
  }))
}));

mockToDestination.mockImplementation(function (this: unknown) {
  return this;
});

import {
  disposeCampfireAmbience,
  startCampfireAmbience,
  stopCampfireAmbience,
  updateCampfireAmbienceVolume
} from './ambient';

describe('campfire ambience', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockVolume.value = 0;
    vi.mocked(store.get).mockReturnValue(50);
    mockLoaded.mockResolvedValue(undefined);
    disposeCampfireAmbience();
    vi.clearAllMocks();
  });

  it('creates a looping player and starts it with the stored volume', async () => {
    const Tone = await import('tone');

    await startCampfireAmbience('https://example.com/campfire.mp3');

    expect(Tone.Player).toHaveBeenCalledWith({
      url: 'https://example.com/campfire.mp3',
      loop: true,
      autostart: false
    });
    expect(mockLoaded).toHaveBeenCalledOnce();
    expect(mockVolume.value).toBe(-30);
    expect(mockStart).toHaveBeenCalledOnce();
  });

  it('updates the active player volume without recreating it', async () => {
    const Tone = await import('tone');

    await startCampfireAmbience('https://example.com/campfire.mp3');
    updateCampfireAmbienceVolume(75);

    expect(Tone.Player).toHaveBeenCalledOnce();
    expect(mockVolume.value).toBe(-15);
  });

  it('disposes the player when ambience is torn down', async () => {
    await startCampfireAmbience('https://example.com/campfire.mp3');

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
    vi.mocked(Tone.Player).mockImplementationOnce(
      () =>
        ({
          state: 'started',
          start: mockStart,
          stop: mockStop,
          dispose: mockDispose,
          volume: mockVolume,
          toDestination: mockToDestination
        }) as never
    );

    await startCampfireAmbience('https://example.com/campfire.mp3');
    stopCampfireAmbience();

    expect(mockStop).toHaveBeenCalled();
  });
});
