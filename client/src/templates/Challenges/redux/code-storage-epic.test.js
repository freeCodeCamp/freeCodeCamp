import { TestScheduler } from 'rxjs/testing';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import store from 'store';

import codeStorageEpic from './code-storage-epic';
import { challengeMounted, noStoredCodeFound, updateFile } from './actions';

vi.mock('store', () => ({
  default: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn()
  }
}));

const baseFile = {
  contents: 'console.log("Grocery shopping list");',
  ext: 'js',
  fileKey: 'scriptjs',
  head: '',
  tail: '',
  history: ['script.js'],
  name: 'script',
  path: 'script.js'
};

const buildState = challengeFiles => ({
  challenge: {
    challengeMeta: {
      id: '66c64210413532ee9d3bd342',
      title: 'Step 3',
      challengeType: challengeTypes.js
    },
    challengeFiles
  },
  app: {
    user: {
      sessionUser: {
        savedChallenges: []
      }
    }
  }
});

describe('code-storage-epic loadCodeEpic', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('emits noStoredCodeFound when local files are unchanged', () => {
    const state$ = { value: buildState([baseFile]) };
    store.get.mockImplementation(key => {
      if (key === '66c64210413532ee9d3bd342') return [baseFile];
      return null;
    });

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot('a', {
        a: challengeMounted('66c64210413532ee9d3bd342')
      });

      const output$ = codeStorageEpic(action$, state$);

      expectObservable(output$).toBe('a', {
        a: noStoredCodeFound()
      });
    });
  });

  it('emits updateFile when local files changed', () => {
    const updatedFile = {
      ...baseFile,
      contents: 'console.log("updated");'
    };
    const state$ = { value: buildState([baseFile]) };
    store.get.mockImplementation(key => {
      if (key === '66c64210413532ee9d3bd342') return [updatedFile];
      return null;
    });

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot('a', {
        a: challengeMounted('66c64210413532ee9d3bd342')
      });

      const output$ = codeStorageEpic(action$, state$);

      expectObservable(output$).toBe('a', {
        a: updateFile(updatedFile)
      });
    });
  });
});
