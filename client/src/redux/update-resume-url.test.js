// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';

import { actionTypes } from './action-types';
import { initialState, reducer } from './index.js';

describe('updateResumeUrl reducer', () => {
  it('updates the resume URL while preserving the session user', () => {
    const sessionUser = {
      username: 'test-user',
      resumeUrl: '/learn/old-challenge'
    };
    const state = {
      ...initialState,
      user: { ...initialState.user, sessionUser }
    };

    const result = reducer(state, {
      type: actionTypes.updateResumeUrl,
      payload: '/learn/next-challenge'
    });

    expect(result.user.sessionUser).toEqual({
      ...sessionUser,
      resumeUrl: '/learn/next-challenge'
    });
  });

  it('does not create a session user when signed out', () => {
    const result = reducer(initialState, {
      type: actionTypes.updateResumeUrl,
      payload: '/learn/next-challenge'
    });

    expect(result.user.sessionUser).toBeNull();
  });
});

describe('updateActivityStreak reducer', () => {
  it('updates the streak while preserving the session user', () => {
    const sessionUser = { username: 'test-user' };
    const state = {
      ...initialState,
      user: { ...initialState.user, sessionUser }
    };
    const activityStreak = {
      current: 2,
      longest: 4,
      activeSession: true
    };

    const result = reducer(state, {
      type: actionTypes.updateActivityStreak,
      payload: activityStreak
    });

    expect(result.user.sessionUser).toEqual({
      ...sessionUser,
      activityStreak
    });
  });
});
