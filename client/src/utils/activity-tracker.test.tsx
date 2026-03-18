import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('./ajax', () => ({
  post: vi.fn().mockResolvedValue({
    response: new Response(),
    data: undefined
  })
}));

import {
  startActivityTracking,
  stopActivityTracking
} from './activity-tracker';
import { post } from './ajax';

const mockedPost = vi.mocked(post);

describe('activity-tracker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockedPost.mockClear();
    stopActivityTracking();

    // Default: simulate a learn page
    Object.defineProperty(window, 'location', {
      value: { pathname: '/learn/javascript/basic-javascript/step-1' },
      writable: true
    });
  });

  afterEach(() => {
    stopActivityTracking();
    vi.useRealTimers();
    localStorage.clear();
  });

  test('sends activity on start when on a learn page', async () => {
    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    expect(mockedPost).toHaveBeenCalledWith('/activity', {
      url: '/learn/javascript/basic-javascript/step-1'
    });
  });

  test('does not send activity when not on a learn page', async () => {
    Object.defineProperty(window, 'location', {
      value: { pathname: '/settings' },
      writable: true
    });

    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    expect(mockedPost).not.toHaveBeenCalled();
  });

  test('does not send duplicate activity for same URL', async () => {
    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    mockedPost.mockClear();

    // Advance by one interval
    await vi.advanceTimersByTimeAsync(5000);

    expect(mockedPost).not.toHaveBeenCalled();
  });

  test('sends new activity when URL changes', async () => {
    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    mockedPost.mockClear();

    // Simulate navigation to a new learn page
    Object.defineProperty(window, 'location', {
      value: { pathname: '/learn/javascript/basic-javascript/step-2' },
      writable: true
    });

    await vi.advanceTimersByTimeAsync(5000);

    expect(mockedPost).toHaveBeenCalledWith('/activity', {
      url: '/learn/javascript/basic-javascript/step-2'
    });
  });

  test('stopActivityTracking clears the interval', async () => {
    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    mockedPost.mockClear();
    stopActivityTracking();

    Object.defineProperty(window, 'location', {
      value: { pathname: '/learn/javascript/basic-javascript/step-2' },
      writable: true
    });

    await vi.advanceTimersByTimeAsync(5000);

    expect(mockedPost).not.toHaveBeenCalled();
  });

  test('saves activity to localStorage', async () => {
    startActivityTracking();
    await vi.advanceTimersByTimeAsync(5000);

    const stored = localStorage.getItem('fcc:lastActivity');
    expect(stored).not.toBeNull();

    const parsed = JSON.parse(stored!) as { url: string; timestamp: number };
    expect(parsed.url).toBe('/learn/javascript/basic-javascript/step-1');
    expect(parsed.timestamp).toBeGreaterThan(0);
  });

  test('does not throw when post fails', async () => {
    mockedPost.mockRejectedValueOnce(new Error('Network error'));

    expect(() => {
      startActivityTracking();
    }).not.toThrow();

    await vi.advanceTimersByTimeAsync(5000);
  });
});
