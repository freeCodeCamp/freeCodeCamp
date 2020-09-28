/* global expect */

import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';
import failedUpdatesEpic from './failed-updates-epic';
import { types } from './';
import store from 'store';

const key = 'fcc-failed-updates';

describe('failed-updates-epic', () => {
  it('should remove faulty backend challenges from localStorage', async () => {
    store.set(key, failedSubmissions);

    const action$ = ActionsObservable.of({
      type: types.updateComplete
    });
    const state$ = new StateObservable(new Subject(), initialState);
    const epic$ = failedUpdatesEpic(action$, state$);

    await epic$.toPromise();

    expect(store.get(key)).toEqual(submitableChallenges);
  });
});

const initialState = {
  app: {
    isOnline: true,
    appUsername: 'developmentuser'
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

const submitableChallenges = failedSubmissions.slice(1);
