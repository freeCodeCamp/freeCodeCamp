// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { reducer, initialState } from './index.js';
import { actionTypes } from './action-types';

const makeAction = removedChallengeIds => ({
  type: actionTypes.removeModuleChallenges,
  payload: { removedChallengeIds }
});

const baseSessionUser = {
  username: 'testuser',
  email: 'test@example.com',
  completedChallenges: [
    { id: 'a1', completedDate: 1 },
    { id: 'a2', completedDate: 2 },
    { id: 'a3', completedDate: 3 }
  ],
  savedChallenges: [
    { id: 'a1', files: [] },
    { id: 'b1', files: [] }
  ],
  partiallyCompletedChallenges: [
    { id: 'a2', completedDate: 4 },
    { id: 'b2', completedDate: 5 }
  ]
};

const stateWithUser = {
  ...initialState,
  user: { ...initialState.user, sessionUser: baseSessionUser }
};

describe('removeModuleChallenges reducer', () => {
  it('filters completedChallenges by removed IDs', () => {
    const result = reducer(stateWithUser, makeAction(['a1', 'a3']));
    expect(result.user.sessionUser.completedChallenges).toEqual([
      { id: 'a2', completedDate: 2 }
    ]);
  });

  it('filters savedChallenges by removed IDs', () => {
    const result = reducer(stateWithUser, makeAction(['a1']));
    expect(result.user.sessionUser.savedChallenges).toEqual([
      { id: 'b1', files: [] }
    ]);
  });

  it('filters partiallyCompletedChallenges by removed IDs', () => {
    const result = reducer(stateWithUser, makeAction(['a2']));
    expect(result.user.sessionUser.partiallyCompletedChallenges).toEqual([
      { id: 'b2', completedDate: 5 }
    ]);
  });

  it('returns unchanged state when sessionUser is null', () => {
    const nullUserState = {
      ...initialState,
      user: { ...initialState.user, sessionUser: null }
    };
    const result = reducer(nullUserState, makeAction(['a1']));
    expect(result).toBe(nullUserState);
  });

  it('handles empty removedChallengeIds array', () => {
    const result = reducer(stateWithUser, makeAction([]));
    expect(result.user.sessionUser.completedChallenges).toEqual(
      baseSessionUser.completedChallenges
    );
    expect(result.user.sessionUser.savedChallenges).toEqual(
      baseSessionUser.savedChallenges
    );
    expect(result.user.sessionUser.partiallyCompletedChallenges).toEqual(
      baseSessionUser.partiallyCompletedChallenges
    );
  });

  it('handles IDs not present in any array', () => {
    const result = reducer(stateWithUser, makeAction(['zzz', 'yyy']));
    expect(result.user.sessionUser.completedChallenges).toEqual(
      baseSessionUser.completedChallenges
    );
    expect(result.user.sessionUser.savedChallenges).toEqual(
      baseSessionUser.savedChallenges
    );
    expect(result.user.sessionUser.partiallyCompletedChallenges).toEqual(
      baseSessionUser.partiallyCompletedChallenges
    );
  });

  it('preserves other sessionUser properties', () => {
    const result = reducer(stateWithUser, makeAction(['a1']));
    expect(result.user.sessionUser.username).toBe('testuser');
    expect(result.user.sessionUser.email).toBe('test@example.com');
  });

  it('filters from all three arrays simultaneously', () => {
    const result = reducer(stateWithUser, makeAction(['a1', 'a2']));
    expect(result.user.sessionUser.completedChallenges).toEqual([
      { id: 'a3', completedDate: 3 }
    ]);
    expect(result.user.sessionUser.savedChallenges).toEqual([
      { id: 'b1', files: [] }
    ]);
    expect(result.user.sessionUser.partiallyCompletedChallenges).toEqual([
      { id: 'b2', completedDate: 5 }
    ]);
  });
});
