/* global expect */
import { put } from 'redux-saga/effects';
import store from 'store';

import {
  currentChallengeSaga,
  CURRENT_CHALLENGE_KEY
} from './current-challenge-saga';
import { updateCurrentChallengeUrl } from '../../../redux';

const mockSlug = 'a/fake/slug';
const mockAction = { payload: { id: '12345', slug: mockSlug } };

describe('currentChallengeSaga', () => {
  beforeEach(() => {
    store.clearAll();
  });
  it('dispatches an action to update the currentChallengeUrl', () => {
    const gen = currentChallengeSaga(mockAction);
    expect(gen.next().value).toEqual(put(updateCurrentChallengeUrl(mockSlug)));
  });

  it('puts the currentChallengeUrl in the store', () => {
    expect(store.get(CURRENT_CHALLENGE_KEY)).toBeUndefined();
    const gen = currentChallengeSaga(mockAction);
    gen.next();
    expect(store.get(CURRENT_CHALLENGE_KEY)).toEqual(mockSlug);
  });
});
