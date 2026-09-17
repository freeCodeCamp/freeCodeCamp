import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import CampfireAmbience from './index';
import SoundSettings from '../settings/sound';

const {
  mockDispose,
  mockPrepare,
  mockStart,
  mockStop,
  mockUpdateVolume,
  mockIsReady,
  feature,
  preparation
} = vi.hoisted(() => {
  const preparation: {
    promise: Promise<void>;
    resolve: () => void;
    isResolved: boolean;
  } = {
    promise: Promise.resolve(),
    resolve: () => undefined,
    isResolved: true
  };

  return {
    mockDispose: vi.fn(),
    mockPrepare: vi.fn(() => preparation.promise),
    mockStart: vi.fn(() => Promise.resolve()),
    mockStop: vi.fn(),
    mockUpdateVolume: vi.fn(),
    mockIsReady: vi.fn(() => preparation.isResolved),
    feature: { on: true, value: 'https://example.com/campfire.mp3' },
    preparation
  };
});

vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => feature
}));

vi.mock('../../utils/tone', () => ({
  playTone: vi.fn(() => Promise.resolve())
}));

vi.mock('../../utils/tone/ambient', async importOriginal => {
  // The event names are the real contract between the two components.
  const actual =
    await importOriginal<typeof import('../../utils/tone/ambient')>();

  return {
    AMBIENT_SOUND_TOGGLE_EVENT: actual.AMBIENT_SOUND_TOGGLE_EVENT,
    SOUND_MODE_TOGGLE_EVENT: actual.SOUND_MODE_TOGGLE_EVENT,
    SOUND_VOLUME_EVENT: actual.SOUND_VOLUME_EVENT,
    disposeCampfireAmbience: mockDispose,
    isCampfireAmbienceReady: mockIsReady,
    prepareCampfireAmbience: mockPrepare,
    startCampfireAmbience: mockStart,
    stopCampfireAmbience: mockStop,
    updateCampfireAmbienceVolume: mockUpdateVolume
  };
});

const AUDIO_URL = 'https://example.com/campfire.mp3';

const holdPreparation = () => {
  preparation.isResolved = false;
  preparation.promise = new Promise<void>(resolve => {
    preparation.resolve = () => {
      preparation.isResolved = true;
      resolve();
    };
  });
};

function renderPage(sound = true) {
  const toggleSoundMode = vi.fn();
  const view = render(
    <>
      <CampfireAmbience />
      <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
    </>
  );
  return { ...view, toggleSoundMode };
}

const ambienceToggle = () =>
  screen.queryByRole('group', { name: /ambient-sound-mode/ });

const ambienceOnButton = () =>
  screen.getAllByRole('button', { name: 'buttons.on' })[1];

const ambienceOffButton = () =>
  screen.getAllByRole('button', { name: 'buttons.off' })[1];

describe('campfire ambience settings integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    feature.on = true;
    feature.value = AUDIO_URL;
    preparation.isResolved = true;
    preparation.promise = Promise.resolve();
  });

  it('offers no ambience control when the feature is off', () => {
    feature.on = false;

    renderPage();

    expect(ambienceToggle()).not.toBeInTheDocument();
    expect(
      screen.queryByText('settings.ambient-sound-preparing')
    ).not.toBeInTheDocument();
    // The campfire mode toggle is still there, so this is not a render failure.
    expect(
      screen.getByRole('group', { name: /sound-mode/ })
    ).toBeInTheDocument();
  });

  it('offers no ambience control when the feature has no audio url', () => {
    feature.value = '   ';

    renderPage();

    expect(ambienceToggle()).not.toBeInTheDocument();
    expect(mockStart).not.toHaveBeenCalled();
  });

  it('shows a preparing status instead of a dead toggle', async () => {
    holdPreparation();

    renderPage();

    expect(screen.getByRole('status')).toHaveTextContent(
      'settings.ambient-sound-preparing'
    );
    expect(ambienceToggle()).not.toBeInTheDocument();

    preparation.resolve();

    await waitFor(() => expect(ambienceToggle()).toBeInTheDocument());
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('starts the ambience from the toggle interaction itself', () => {
    // Campfire mode has to be on for the ambience to be audible at all.
    localStorage.setItem('fcc-sound', 'true');

    renderPage();

    fireEvent.click(ambienceOnButton());

    expect(mockStart).toHaveBeenCalledWith(AUDIO_URL);
    expect(localStorage.getItem('fcc-ambient-sound')).toBe('true');
  });

  it('stops the ambience when the toggle is switched off', () => {
    localStorage.setItem('fcc-ambient-sound', 'true');
    localStorage.setItem('fcc-sound', 'true');

    renderPage();

    fireEvent.click(ambienceOffButton());

    expect(mockStop).toHaveBeenCalled();
    expect(localStorage.getItem('fcc-ambient-sound')).toBe('false');
  });

  it('passes volume changes through to the running ambience', () => {
    renderPage();

    fireEvent.input(screen.getByLabelText(/settings.sound-volume/), {
      target: { value: '80' }
    });

    expect(mockUpdateVolume).toHaveBeenCalledWith(80);
  });

  it('stops the ambience when campfire mode itself is switched off', () => {
    localStorage.setItem('fcc-ambient-sound', 'true');
    localStorage.setItem('fcc-sound', 'true');

    renderPage(true);

    fireEvent.click(screen.getAllByRole('button', { name: 'buttons.off' })[0]);

    expect(mockStop).toHaveBeenCalled();
  });

  it('tears the ambience down when the manager unmounts', () => {
    const { unmount } = renderPage();

    mockDispose.mockClear();
    unmount();

    expect(mockDispose).toHaveBeenCalled();
  });

  it('prepares the audio module while the feature is usable', () => {
    renderPage();

    expect(mockPrepare).toHaveBeenCalled();
    expect(mockStart).not.toHaveBeenCalled();
  });
});
