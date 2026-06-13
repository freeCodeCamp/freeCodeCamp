// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';

import { isHandledError, unwrapHandledError } from '../utils/handled-error';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { fetchUserComplete, fetchUserError } from './actions';
import { fetchSessionUser } from './fetch-user-saga';

const driveToOutcome = inject => {
  const gen = fetchSessionUser();
  gen.next();
  gen.next();
  return inject(gen);
};

const dispatchedAction = effect => effect.value.payload.action;

describe('fetchSessionUser', () => {
  it('does not surface a flash-triggering error when the request times out on a slow connection', () => {
    const effect = driveToOutcome(gen =>
      gen.throw(new DOMException('The operation timed out', 'TimeoutError'))
    );
    const action = dispatchedAction(effect);

    expect(action.type).toBe(fetchUserError().type);
    expect(isHandledError(action.payload)).toBe(false);
  });

  it('does not surface a flash-triggering error on a network failure', () => {
    const effect = driveToOutcome(gen =>
      gen.throw(new TypeError('Failed to fetch'))
    );
    const action = dispatchedAction(effect);

    expect(action.type).toBe(fetchUserError().type);
    expect(isHandledError(action.payload)).toBe(false);
  });

  it('still surfaces the user-fetch-error flash when the server responds with a 5xx', () => {
    const effect = driveToOutcome(gen =>
      gen.next({
        response: {
          ok: false,
          status: 500,
          statusText: 'Internal Server Error'
        },
        data: null
      })
    );
    const action = dispatchedAction(effect);

    expect(action.type).toBe(fetchUserError().type);
    expect(isHandledError(action.payload)).toBe(true);
    expect(unwrapHandledError(action.payload).message).toBe(
      FlashMessages.UserFetchError
    );
  });

  it('completes without error for a signed-out user (401)', () => {
    const effect = driveToOutcome(gen =>
      gen.next({ response: { ok: false, status: 401 }, data: null })
    );
    const action = dispatchedAction(effect);

    expect(action.type).toBe(fetchUserComplete({ user: null }).type);
  });
});
