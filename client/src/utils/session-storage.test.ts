/* eslint-disable @typescript-eslint/unbound-method */
import {
  getSessionCompletedChallengesLength,
  incrementSessionCompletedChallenges,
  setCompletionCountWhenShownProgressModal,
  getCompletionCountWhenShownProgressModal
} from './session-storage';

describe('Session Storage Functions', () => {
  let sessionStorageMock: Storage;

  beforeEach(() => {
    sessionStorageMock = (() => {
      let store: { [key: string]: string } = {};

      const mockStorage: Storage = {
        length: 0,

        clear: jest.fn(() => {
          store = {};
        }),

        getItem: jest.fn((key: string) => {
          return store[key] || null;
        }),

        key: jest.fn((index: number) => {
          const keys = Object.keys(store);
          return keys[index] || null;
        }),

        removeItem: jest.fn((key: string) => {
          delete store[key];
        }),

        setItem: jest.fn((key: string, value: string) => {
          store[key] = value;
        })
      };

      Object.defineProperty(mockStorage, 'length', {
        get: () => Object.keys(store).length
      });

      return mockStorage;
    })();

    Object.defineProperty(window, 'sessionStorage', {
      value: sessionStorageMock,
      configurable: true
    });
  });

  afterEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  test('getSessionCompletedChallengesLength returns 0 when no data in sessionStorage', () => {
    expect(getSessionCompletedChallengesLength()).toBe(0);
    expect(sessionStorage.getItem).toHaveBeenCalledWith(
      'session-completed-challenges'
    );
  });

  test('getSessionCompletedChallengesLength returns correct number from sessionStorage', () => {
    sessionStorage.setItem('session-completed-challenges', '5');
    expect(getSessionCompletedChallengesLength()).toBe(5);
  });

  test('incrementSessionCompletedChallenges increments the session-completed-challenges count', () => {
    sessionStorage.setItem('session-completed-challenges', '5');
    incrementSessionCompletedChallenges();
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'session-completed-challenges',
      '6'
    );
    expect(getSessionCompletedChallengesLength()).toBe(6);
  });

  test('incrementSessionCompletedChallenges sets the count to 1 if no previous value exists', () => {
    incrementSessionCompletedChallenges();
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'session-completed-challenges',
      '1'
    );
    expect(getSessionCompletedChallengesLength()).toBe(1);
  });

  test('setCompletionCountWhenShownProgressModal sets correct value in sessionStorage', () => {
    sessionStorage.setItem('session-completed-challenges', '5');
    setCompletionCountWhenShownProgressModal();
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'completion-count-progress-modal',
      '5'
    );
  });

  test('getCompletionCountWhenShownProgressModal returns null if no value set', () => {
    expect(getCompletionCountWhenShownProgressModal()).toBeNull();
    expect(sessionStorage.getItem).toHaveBeenCalledWith(
      'completion-count-progress-modal'
    );
  });

  test('getCompletionCountWhenShownProgressModal returns correct number from sessionStorage', () => {
    sessionStorage.setItem('completion-count-progress-modal', '7');
    expect(getCompletionCountWhenShownProgressModal()).toBe(7);
  });
});
