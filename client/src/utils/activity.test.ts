import { beforeEach, describe, expect, test, vi } from 'vitest';

import { postActivity } from './ajax';
import { recordClientActivity } from './activity';

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

  test('records an online submission with a generated ID', async () => {
    await expect(
      recordClientActivity('challenge-id', '/learn/course/challenge')
    ).resolves.toEqual({ recorded: true });

    expect(postActivity).toHaveBeenCalledOnce();
    expect(vi.mocked(postActivity).mock.calls[0]?.[0]).toMatchObject({
      eventType: 'challenge_submit',
      subjectId: 'challenge-id',
      url: '/learn/course/challenge'
    });
    expect(vi.mocked(postActivity).mock.calls[0]?.[0].eventId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  test('does not record while offline', async () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false
    });

    await expect(
      recordClientActivity('challenge-id', '/learn/course/challenge')
    ).resolves.toBeUndefined();
    expect(postActivity).not.toHaveBeenCalled();
  });

  test('does not retry a failed request', async () => {
    vi.mocked(postActivity).mockRejectedValueOnce(new Error('offline'));

    await expect(
      recordClientActivity('challenge-id', '/learn/course/challenge')
    ).resolves.toBeUndefined();
    expect(postActivity).toHaveBeenCalledOnce();
  });
});
