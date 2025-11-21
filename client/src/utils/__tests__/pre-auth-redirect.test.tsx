import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  buildPathFromLocation,
  capturePreAuthState,
  consumePreAuthState,
  peekPreAuthState,
  PRE_AUTH_STATE_TTL_MS
} from '../pre-auth-redirect';

describe('pre-auth-redirect utilities', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.localStorage.clear();
    window.location.href =
      'https://www.freecodecamp.org/learn/test-path?step=1#editor';
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('captures the current location and optional context', () => {
    capturePreAuthState({
      reason: 'header-login',
      challenge: {
        id: 'challenge-id',
        block: 'test-block',
        superBlock: 'test-super-block',
        title: 'Test Challenge'
      }
    });

    const stored = peekPreAuthState();
    expect(stored?.location.pathname).toBe('/learn/test-path');
    expect(stored?.location.search).toBe('?step=1');
    expect(stored?.location.hash).toBe('#editor');
    expect(stored?.context?.reason).toBe('header-login');
    expect(stored?.context?.challenge?.id).toBe('challenge-id');
  });

  it('omits empty context payloads', () => {
    capturePreAuthState();
    const stored = peekPreAuthState();
    expect(stored?.context).toBeUndefined();
  });

  it('expires stale state based on TTL', () => {
    capturePreAuthState({ reason: 'ttl-test' });
    vi.setSystemTime(Date.now() + PRE_AUTH_STATE_TTL_MS + 1000);

    expect(consumePreAuthState()).toBeNull();
  });

  it('returns a relative path for navigation', () => {
    capturePreAuthState();
    const stored = peekPreAuthState();
    expect(buildPathFromLocation(stored ?? undefined)).toBe(
      '/learn/test-path?step=1#editor'
    );
  });
});

