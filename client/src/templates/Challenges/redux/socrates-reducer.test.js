import { describe, it, expect, vi } from 'vitest';
import { reducer } from './index';
import { actionTypes } from './action-types';

vi.mock('../../../utils/get-words');

const baseState = {
  socratesHintState: {
    hint: null,
    isLoading: false,
    error: null,
    attempts: null,
    limit: null
  }
};

describe('socratesHintState reducer', () => {
  it('sets isLoading true and preserves attempts/limit on askSocrates', () => {
    const state = {
      ...baseState,
      socratesHintState: {
        ...baseState.socratesHintState,
        attempts: 2,
        limit: 3
      }
    };

    const result = reducer(state, { type: actionTypes.askSocrates });

    expect(result.socratesHintState).toEqual({
      hint: null,
      isLoading: true,
      error: null,
      attempts: 2,
      limit: 3
    });
  });

  it('stores hint, attempts, limit on askSocratesComplete', () => {
    const state = {
      ...baseState,
      socratesHintState: { ...baseState.socratesHintState, isLoading: true }
    };

    const result = reducer(state, {
      type: actionTypes.askSocratesComplete,
      payload: { hint: 'Try a closing tag.', attempts: 1, limit: 3 }
    });

    expect(result.socratesHintState).toEqual({
      hint: 'Try a closing tag.',
      isLoading: false,
      error: null,
      attempts: 1,
      limit: 3
    });
  });

  it('stores error with attempts/limit on askSocratesError', () => {
    const state = {
      ...baseState,
      socratesHintState: { ...baseState.socratesHintState, isLoading: true }
    };

    const result = reducer(state, {
      type: actionTypes.askSocratesError,
      payload: { error: 'Daily limit reached.', attempts: 3, limit: 3 }
    });

    expect(result.socratesHintState).toEqual({
      hint: null,
      isLoading: false,
      error: 'Daily limit reached.',
      attempts: 3,
      limit: 3
    });
  });

  it('preserves previous attempts/limit when error payload omits them', () => {
    const state = {
      ...baseState,
      socratesHintState: {
        ...baseState.socratesHintState,
        isLoading: true,
        attempts: 2,
        limit: 3
      }
    };

    const result = reducer(state, {
      type: actionTypes.askSocratesError,
      payload: { error: 'Something went wrong.' }
    });

    expect(result.socratesHintState).toEqual({
      hint: null,
      isLoading: false,
      error: 'Something went wrong.',
      attempts: 2,
      limit: 3
    });
  });
});
