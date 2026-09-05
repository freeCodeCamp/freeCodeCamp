import { act, render, waitFor } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, vi, test, expect } from 'vitest';

import { i18nextCodes } from '@freecodecamp/shared/config/i18n';
import i18nTestConfig from '../../i18n/config-for-tests';
import { createStore } from '../redux/create-store';
import type { ActivityStreak } from '../redux/prop-types';
import { postActivityStreak } from '../utils/ajax';
import { signalMeaningfulActivity } from '../utils/activity';
import AppMountNotifier, {
  AppMountNotifier as UnconnectedAppMountNotifier
} from './app-mount-notifier';

vi.unmock('react-i18next');
vi.mock('../utils/get-words');
vi.mock('../utils/ajax', async importOriginal => {
  const actual = await importOriginal<typeof import('../utils/ajax')>();
  return { ...actual, postActivityStreak: vi.fn() };
});

type Language = keyof typeof i18nextCodes;
type LanguagePair = [string, string];

const store = createStore();

// Create a nested array for languages
const languages = Object.keys(i18nextCodes).map(
  (key): LanguagePair => [i18nextCodes[key as Language], key]
);

describe('AppMountNotifier', () => {
  const setup = (lang: string) => {
    i18nTestConfig.language = lang;

    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18nTestConfig}>
          <AppMountNotifier>
            <p>App content</p>
          </AppMountNotifier>
        </I18nextProvider>
      </Provider>
    );
  };

  test.each(languages)(
    'should set the lang attribute to %s if the language is %s',
    async langCode => {
      setup(langCode);

      await waitFor(() => {
        /* eslint-disable-next-line testing-library/no-node-access */
        expect(document.querySelector('html')).toHaveAttribute(
          'lang',
          langCode
        );
      });
    }
  );
});

describe('activity streak timer', () => {
  const appMount = vi.fn();
  const updateActivityStreak = vi.fn();

  const renderTimer = (
    activityStreak: ActivityStreak = {
      current: 0,
      longest: 0,
      activeSession: false
    },
    isSignedIn = true,
    userFetchComplete = true
  ) =>
    render(
      <I18nextProvider i18n={i18nTestConfig}>
        <UnconnectedAppMountNotifier
          appMount={appMount}
          activityStreak={activityStreak}
          isSignedIn={isSignedIn}
          updateActivityStreak={updateActivityStreak}
          userFetchComplete={userFetchComplete}
        >
          <p>App content</p>
        </UnconnectedAppMountNotifier>
      </I18nextProvider>
    );

  beforeEach(() => {
    window.sessionStorage.clear();
    vi.useFakeTimers();
    vi.mocked(postActivityStreak).mockReset();
    vi.mocked(postActivityStreak).mockResolvedValue({
      response: { ok: true } as Response,
      data: {
        activityStreak: {
          current: 1,
          longest: 1,
          activeSession: true,
          canIncrementAt: new Date(
            Date.now() + 24 * 60 * 60 * 1000
          ).toISOString()
        }
      }
    });
    appMount.mockReset();
    updateActivityStreak.mockReset();
    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      value: 'visible'
    });
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('qualifies after five visible, online minutes', async () => {
    renderTimer();
    act(() => signalMeaningfulActivity());

    await act(() => vi.advanceTimersByTimeAsync(5 * 60 * 1000 - 1));
    expect(postActivityStreak).not.toHaveBeenCalled();

    await act(() => vi.advanceTimersByTimeAsync(1));
    expect(postActivityStreak).toHaveBeenCalledOnce();
    expect(updateActivityStreak).toHaveBeenCalledWith(
      expect.objectContaining({
        current: 1,
        longest: 1,
        activeSession: true
      })
    );
  });

  test('pauses while the tab is hidden', async () => {
    renderTimer();
    act(() => signalMeaningfulActivity());
    await act(() => vi.advanceTimersByTimeAsync(2 * 60 * 1000));

    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      value: 'hidden'
    });
    await act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
      return Promise.resolve();
    });
    await act(() => vi.advanceTimersByTimeAsync(5 * 60 * 1000));
    expect(postActivityStreak).not.toHaveBeenCalled();

    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      value: 'visible'
    });
    await act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
      return Promise.resolve();
    });
    await act(() => vi.advanceTimersByTimeAsync(3 * 60 * 1000));

    expect(postActivityStreak).toHaveBeenCalledOnce();
  });

  test('keeps elapsed time across a reload in the same tab', async () => {
    const { unmount } = renderTimer();
    act(() => signalMeaningfulActivity());
    await act(() => vi.advanceTimersByTimeAsync(2 * 60 * 1000));
    unmount();

    renderTimer();
    await act(() => vi.advanceTimersByTimeAsync(3 * 60 * 1000));

    expect(postActivityStreak).toHaveBeenCalledOnce();
  });

  test('restores a qualified fire after a reload in the same tab', async () => {
    const { unmount } = renderTimer();
    act(() => signalMeaningfulActivity());
    await act(() => vi.advanceTimersByTimeAsync(5 * 60 * 1000));
    unmount();
    updateActivityStreak.mockClear();

    renderTimer();

    expect(updateActivityStreak).toHaveBeenCalledWith(
      expect.objectContaining({ activeSession: true })
    );
  });

  test('clears the session fire when the next increment becomes available', async () => {
    const deactivateAt = Date.now() + 1000;
    window.sessionStorage.setItem(
      'fcc-activity-streak-session',
      JSON.stringify({ deactivateAt })
    );
    renderTimer({
      current: 1,
      longest: 1,
      activeSession: true,
      canIncrementAt: new Date(deactivateAt).toISOString()
    });

    await act(() => vi.advanceTimersByTimeAsync(1000));

    expect(updateActivityStreak).toHaveBeenCalledWith(
      expect.objectContaining({ activeSession: false })
    );
  });

  test('preserves session state while the user is still loading', () => {
    window.sessionStorage.setItem(
      'fcc-activity-streak-session',
      JSON.stringify({ deactivateAt: Date.now() + 60_000 })
    );

    renderTimer(undefined, false, false);

    expect(
      window.sessionStorage.getItem('fcc-activity-streak-session')
    ).not.toBeNull();
  });

  test('clears session state after a confirmed signout', () => {
    window.sessionStorage.setItem(
      'fcc-activity-streak-session',
      JSON.stringify({ deactivateAt: Date.now() + 60_000 })
    );

    renderTimer(undefined, false, true);

    expect(
      window.sessionStorage.getItem('fcc-activity-streak-session')
    ).toBeNull();
  });

  test('retries a failed qualification on the next meaningful action', async () => {
    vi.mocked(postActivityStreak)
      .mockRejectedValueOnce(new Error('ClickHouse unavailable'))
      .mockResolvedValueOnce({
        response: { ok: true } as Response,
        data: {
          activityStreak: {
            current: 1,
            longest: 1,
            activeSession: true,
            canIncrementAt: new Date(
              Date.now() + 24 * 60 * 60 * 1000
            ).toISOString()
          }
        }
      });
    renderTimer();
    act(() => signalMeaningfulActivity());
    await act(() => vi.advanceTimersByTimeAsync(5 * 60 * 1000));

    expect(postActivityStreak).toHaveBeenCalledOnce();
    act(() => signalMeaningfulActivity());
    await act(async () => Promise.resolve());

    expect(postActivityStreak).toHaveBeenCalledTimes(2);
  });
});
