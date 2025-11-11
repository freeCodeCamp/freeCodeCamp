// @vitest-environment jsdom
import { expectSaga } from 'redux-saga-test-plan';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { select, take } from 'redux-saga/effects';
import { initializeThemeSaga } from './theme-saga.js';
import { setTheme } from './actions';
import { actionTypes } from './action-types';
import { userThemeSelector } from './selectors';

describe('initializeThemeSaga', () => {
  let localStorageMock;
  let matchMediaMock;

  beforeEach(() => {
    localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn()
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });

    matchMediaMock = vi.fn();
    Object.defineProperty(window, 'matchMedia', {
      value: matchMediaMock,
      writable: true
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should wait for fetchUserComplete action before initializing', async () => {
    localStorageMock.getItem.mockReturnValue('dark');
    matchMediaMock.mockReturnValue({ matches: false });

    // Without the fetchUserComplete action
    await expectSaga(initializeThemeSaga)
      .provide([[select(userThemeSelector), null]])
      .not.put(setTheme('dark'))
      .run({ silenceTimeout: true });

    expect(localStorageMock.setItem).not.toHaveBeenCalled();

    // With the fetchUserComplete action
    await expectSaga(initializeThemeSaga)
      .provide([
        [take(actionTypes.fetchUserComplete), undefined],
        [select(userThemeSelector), null]
      ])
      .take(actionTypes.fetchUserComplete)
      .put(setTheme('dark'))
      .run();

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should use localStorage theme regardless of user preference', async () => {
    localStorageMock.getItem.mockReturnValue('dark');
    matchMediaMock.mockReturnValue({ matches: false });

    await expectSaga(initializeThemeSaga)
      .provide([
        [take(actionTypes.fetchUserComplete), undefined],
        [select(userThemeSelector), 'day']
      ])
      .put(setTheme('dark'))
      .run();

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should use user preference when localStorage is empty regardless of system preference', async () => {
    localStorageMock.getItem.mockReturnValue(null);
    matchMediaMock.mockReturnValue({ matches: false });

    await expectSaga(initializeThemeSaga)
      .provide([
        [take(actionTypes.fetchUserComplete), undefined],
        [select(userThemeSelector), 'night']
      ])
      .put(setTheme('dark'))
      .run();

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should use system preference when localStorage and user preference are empty', async () => {
    localStorageMock.getItem.mockReturnValue(null);
    matchMediaMock.mockReturnValue({ matches: true });

    await expectSaga(initializeThemeSaga)
      .provide([
        [take(actionTypes.fetchUserComplete), undefined],
        [select(userThemeSelector), null]
      ])
      .put(setTheme('dark'))
      .run();

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should default to light theme when all preferences are empty', async () => {
    localStorageMock.getItem.mockReturnValue(null);
    matchMediaMock.mockReturnValue({ matches: false });

    await expectSaga(initializeThemeSaga)
      .provide([
        [take(actionTypes.fetchUserComplete), undefined],
        [select(userThemeSelector), null]
      ])
      .put(setTheme('light'))
      .run();

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
