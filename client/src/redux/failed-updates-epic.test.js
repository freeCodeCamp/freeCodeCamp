// @vitest-environment jsdom

import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import store from 'store';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { actionTypes } from './action-types';
import failedUpdatesEpic from './failed-updates-epic';

vi.mock('../analytics');

const key = 'fcc-failed-updates';

describe('failed-updates-epic', () => {
  const action$ = ActionsObservable.of({
    type: actionTypes.updateComplete
  });

  const failRes = () =>
    new Response(JSON.stringify({ message: 'flash.generic-error' }), {
      status: 500
    });

  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => {});
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
    store.remove(key);
  });

  it('should remove faulty backend challenges from localStorage', async () => {
    store.set(key, failedSubmissions);

    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    await epic$.toPromise();

    expect(store.get(key)).toEqual(submitableChallenges);
  });

  it('should remove successfully retried failures from storage (even if the retry fails)', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('{}', { status: 200 }))
      .mockResolvedValueOnce(failRes())
      .mockResolvedValueOnce(failRes());

    store.set(key, validSubmissions);

    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    await epic$.toPromise();
    // first confirm that the submissions are all valid:
    expect(store.get(key)).toEqual(validSubmissions);
    await vi.runAllTimersAsync();

    expect(fetchSpy).toHaveBeenCalledTimes(validSubmissions.length);
    expect(store.get(key)).toEqual([]);
  });

  it('should NOT remove updates that do not reach the server', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('{}', { status: 200 }))
      .mockRejectedValue(new TypeError());

    store.set(key, validSubmissions);

    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    await epic$.toPromise();
    expect(store.get(key)).toEqual(validSubmissions);
    await vi.runAllTimersAsync();

    expect(fetchSpy).toHaveBeenCalledTimes(validSubmissions.length);
    expect(store.get(key)).toEqual(validSubmissions.slice(1));
  });
});

const initialState = {
  app: {
    isOnline: true,
    isServerOnline: true,
    user: { sessionUser: {} }
  }
};

const failedSubmissions = [
  {
    endpoint: '/project-completed',
    id: 'b1507944-7310-479f-bb59-ccafac488592',
    payload: { id: '587d8249367417b2b2512c41', challengeType: 4 }
  },
  {
    endpoint: '/project-completed',
    id: 'b1507944-7310-479f-bb59-ccafac488593',
    payload: {
      id: '587d8249367417b2b2512c42',
      challengeType: 4,
      solution: 'http://freecodecamp.org/',
      githubLink: 'https://github.com/'
    }
  },
  {
    endpoint: '/project-completed',
    id: 'b1507944-7310-479f-bb59-ccafac488594',
    payload: {
      id: '587d8249367417b2b2512c43',
      challengeType: 4,
      solution: 'http://freecodecamp.org/',
      githubLink: 'https://github.com/'
    }
  }
];

const validSubmissions = failedSubmissions.map(submission => ({
  ...submission,
  payload: { ...submission.payload, solution: 'https://example.com/' }
}));

const submitableChallenges = failedSubmissions.slice(1);
