// @vitest-environment jsdom

import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import store from 'store';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { actionTypes } from './action-types';
import failedUpdatesEpic from './failed-updates-epic';

vi.mock('../analytics');

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const key = 'fcc-failed-updates';

describe('failed-updates-epic', () => {
  const action$ = ActionsObservable.of({
    type: actionTypes.updateComplete
  });
  let warnSpy;
  let fetchSpy;

  const failRes = () =>
    new Response(JSON.stringify({ message: 'flash.generic-error' }), {
      status: 500
    });

  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => {});

    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockRejectedValue(Error('something went wrong'));
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
    fetchSpy
      .mockResolvedValueOnce(new Response('{}', { status: 200 }))
      .mockResolvedValueOnce(failRes())
      .mockResolvedValueOnce(failRes());
    store.set(key, validSubmissions);
    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    epic$.subscribe();

    // first confirm that the submissions are all valid:
    expect(store.get(key)).toEqual(validSubmissions);
    await vi.runAllTimersAsync();
    expect(fetchSpy).toHaveBeenCalledTimes(validSubmissions.length);
    expect(store.get(key)).toEqual([]);
  });

  it('should warn when a progress update fails', async () => {
    const error = new Error('Unable to reach the server');
    fetchSpy.mockRejectedValue(error);
    store.set(key, validSubmissions.slice(0, 1));
    const state$ = new StateObservable(new Subject(), initialState);

    await failedUpdatesEpic(action$, state$).toPromise();

    expect(warnSpy).toHaveBeenCalledWith(
      'unable to process progress update',
      error.message
    );
  });

  it('should NOT remove updates that do not reach the server', async () => {
    fetchSpy
      .mockResolvedValueOnce(new Response('{}', { status: 200 }))
      .mockRejectedValue(new TypeError());
    store.set(key, validSubmissions);
    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    epic$.subscribe();

    expect(store.get(key)).toEqual(validSubmissions);
    await vi.runAllTimersAsync();
    expect(fetchSpy).toHaveBeenCalledTimes(validSubmissions.length);
    expect(store.get(key)).toEqual(validSubmissions.slice(1));
  });

  it('should wait for each fetch call to settle before making another call', async () => {
    fetchSpy.mockImplementation(() => delay(1000).then(() => new Response()));
    store.set(key, validSubmissions);
    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    epic$.subscribe();

    expect(store.get(key)).toEqual(validSubmissions);
    await vi.advanceTimersByTimeAsync(1000);
    expect(store.get(key)).toEqual(validSubmissions.slice(1));
    await vi.advanceTimersByTimeAsync(1000);
    expect(store.get(key)).toEqual(validSubmissions.slice(2));
    await vi.advanceTimersByTimeAsync(1000);
    expect(fetchSpy).toHaveBeenCalledTimes(validSubmissions.length);
    expect(store.get(key)).toEqual([]);
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
