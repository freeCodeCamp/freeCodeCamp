import { beforeEach, describe, expect, test, vi } from 'vitest';

import { postActivity } from './ajax';
import {
  recordClientActivity,
  subscribeToMeaningfulActivity
} from './activity';

vi.mock('./ajax', () => ({ postActivity: vi.fn() }));

describe('recordClientActivity', () => {
  beforeEach(() => {
    vi.mocked(postActivity).mockReset();
    vi.mocked(postActivity).mockResolvedValue({
      response: { ok: true } as Response,
      data: undefined
    });
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true
    });
  });

  test('records an online event with a generated ID', async () => {
    await expect(
      recordClientActivity('test_run', { subjectId: 'challenge-id' })
    ).resolves.toEqual({ recorded: true });

    expect(postActivity).toHaveBeenCalledOnce();
    const body = vi.mocked(postActivity).mock.calls[0]?.[0];
    expect(body).toMatchObject({
      eventType: 'test_run',
      subjectId: 'challenge-id'
    });
    expect(body?.eventId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  test('records repeated events instead of suppressing them', async () => {
    await recordClientActivity('challenge_work');
    await recordClientActivity('challenge_work');

    expect(postActivity).toHaveBeenCalledTimes(2);
  });

  test('signals meaningful activity only after it is persisted', async () => {
    const listener = vi.fn();
    const unsubscribe = subscribeToMeaningfulActivity(listener);

    await recordClientActivity('test_run');
    await recordClientActivity('challenge_submit', {
      subjectId: 'challenge-id',
      url: '/learn/course/challenge'
    });

    expect(listener).toHaveBeenCalledOnce();
    unsubscribe();
  });

  test('does nothing while offline and does not queue the event', async () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false
    });

    await expect(recordClientActivity('test_run')).resolves.toBeUndefined();
    expect(postActivity).not.toHaveBeenCalled();
  });

  test('does not retry a failed event', async () => {
    vi.mocked(postActivity).mockRejectedValueOnce(new Error('offline'));

    await expect(recordClientActivity('test_run')).resolves.toBeUndefined();

    expect(postActivity).toHaveBeenCalledOnce();
  });
});
