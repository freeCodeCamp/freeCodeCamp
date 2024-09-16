/* eslint-disable @typescript-eslint/unbound-method */
import {
  CURRENT_COUNT_KEY,
  SAVED_COUNT_KEY,
  getSessionChallengeData,
  incrementCurrentCount,
  saveCurrentCount
} from './session-storage';

describe('Session Storage', () => {
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

  describe('getSessionChallengeData', () => {
    describe('countSinceSave', () => {
      it('is not included if nothing has been saved', () => {
        expect(getSessionChallengeData()).not.toHaveProperty('countSinceSave');
      });

      it('is included if the count has been saved', () => {
        sessionStorage.setItem(SAVED_COUNT_KEY, '7');
        sessionStorage.setItem(CURRENT_COUNT_KEY, '10');
        expect(getSessionChallengeData()).toMatchObject({
          countSinceSave: 3
        });
      });
    });

    describe('currentCount', () => {
      it('defaults to 0 if no challenges have been completed', () => {
        expect(getSessionChallengeData()).toMatchObject({
          currentCount: 0
        });
      });

      it('returns the stored number if it exists', () => {
        sessionStorage.setItem(CURRENT_COUNT_KEY, '5');
        expect(getSessionChallengeData()).toMatchObject({
          currentCount: 5
        });
      });
    });

    describe('isSaved', () => {
      it('is false if we haved saved the count', () => {
        expect(getSessionChallengeData()).toMatchObject({
          isSaved: false
        });
      });

      it('is true if we have saved something', () => {
        sessionStorage.setItem(SAVED_COUNT_KEY, '7');
        expect(getSessionChallengeData()).toMatchObject({
          isSaved: true
        });
      });
    });
  });

  describe('incrementCurrentCount', () => {
    test('increments the completed challenge count', () => {
      sessionStorage.setItem(CURRENT_COUNT_KEY, '5');
      incrementCurrentCount();
      expect(sessionStorage.setItem).toHaveBeenCalledWith(
        CURRENT_COUNT_KEY,
        '6'
      );
      expect(getSessionChallengeData()).toMatchObject({ currentCount: 6 });
    });

    test('sets the count to 1 if no previous value exists', () => {
      incrementCurrentCount();
      expect(sessionStorage.setItem).toHaveBeenCalledWith(
        CURRENT_COUNT_KEY,
        '1'
      );
      expect(getSessionChallengeData()).toMatchObject({ currentCount: 1 });
    });
  });

  describe('saveCurrentCount', () => {
    test('sets correct value in sessionStorage', () => {
      sessionStorage.setItem(CURRENT_COUNT_KEY, '5');
      saveCurrentCount();
      expect(sessionStorage.setItem).toHaveBeenCalledWith(SAVED_COUNT_KEY, '5');
    });
  });
});
