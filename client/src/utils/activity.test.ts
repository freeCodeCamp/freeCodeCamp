import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { postActivity } from './ajax';
import {
  recordClientActivity,
  clearClientActivityQueue,
  subscribeToMeaningfulActivity
} from './activity';

vi.mock('./ajax', () => ({ postActivity: vi.fn() }));

const successfulResponse = {
  response: { ok: true } as Response,
  data: undefined
};

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

  afterEach(() => {
    clearClientActivityQueue();
    vi.useRealTimers();
  });

  test('records an online event with a generated ID', async () => {
    await expect(
      recordClientActivity('test_run', { subjectId: 'challenge-id' })
    ).resolves.toEqual({ recorded: true });

    expect(postActivity).toHaveBeenCalledOnce();
    expect(vi.mocked(postActivity).mock.calls[0]?.[0]).toMatchObject({
      eventType: 'test_run',
      subjectId: 'challenge-id'
    });
    expect(vi.mocked(postActivity).mock.calls[0]?.[0].eventId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  test('records repeated events instead of suppressing them', async () => {
    await recordClientActivity('challenge_work');
    await recordClientActivity('challenge_work');

    expect(postActivity).toHaveBeenCalledTimes(2);
  });

  test('sends the first event immediately and delivers pending events in order', async () => {
    let finishFirst!: (value: typeof successfulResponse) => void;
    vi.mocked(postActivity).mockReturnValueOnce(
      new Promise(resolve => {
        finishFirst = resolve;
      })
    );

    const first = recordClientActivity('test_run', { subjectId: 'first' });
    const second = recordClientActivity('challenge_work', {
      subjectId: 'second'
    });
    const third = recordClientActivity('module_completed', {
      subjectId: 'third'
    });
    expect(postActivity).toHaveBeenCalledOnce();
    expect(vi.mocked(postActivity).mock.calls[0]?.[0].subjectId).toBe('first');

    finishFirst(successfulResponse);
    await expect(Promise.all([first, second, third])).resolves.toEqual([
      { recorded: true },
      { recorded: true },
      { recorded: true }
    ]);
    expect(
      vi.mocked(postActivity).mock.calls.map(([body]) => body.subjectId)
    ).toEqual(['first', 'second', 'third']);
    const eventIds = vi
      .mocked(postActivity)
      .mock.calls.map(([body]) => body.eventId);
    expect(new Set(eventIds).size).toBe(3);
  });

  test('limits pending events instead of growing memory during a stalled request', async () => {
    vi.mocked(postActivity).mockReturnValueOnce(new Promise(() => {}));
    const first = recordClientActivity('test_run');
    const pending = Array.from({ length: 100 }, () =>
      recordClientActivity('test_run')
    );

    await expect(recordClientActivity('test_run')).resolves.toBeUndefined();
    expect(postActivity).toHaveBeenCalledOnce();
    clearClientActivityQueue();
    await expect(Promise.all([first, ...pending])).resolves.toEqual(
      Array.from({ length: 101 }, () => undefined)
    );
  });

  test.each(['network error', 'rejected response'])(
    'discards a %s and continues without retrying',
    async failure => {
      if (failure === 'network error') {
        vi.mocked(postActivity).mockRejectedValueOnce(new Error('unavailable'));
      } else {
        vi.mocked(postActivity).mockResolvedValueOnce({
          response: { ok: false } as Response,
          data: undefined
        });
      }

      const failed = recordClientActivity('test_run');
      const next = recordClientActivity('challenge_work');
      await expect(failed).resolves.toEqual(
        failure === 'network error' ? undefined : { recorded: false }
      );
      await expect(next).resolves.toEqual({ recorded: true });
      expect(postActivity).toHaveBeenCalledTimes(2);
    }
  );

  test('aborts a timed-out request and continues delivering the queue', async () => {
    vi.useFakeTimers();
    vi.mocked(postActivity).mockReturnValueOnce(new Promise(() => {}));
    const first = recordClientActivity('test_run');
    const next = recordClientActivity('challenge_work');
    const signal = vi.mocked(postActivity).mock.calls[0]?.[1];

    await vi.advanceTimersByTimeAsync(10_000);

    expect(signal?.aborted).toBe(true);
    await expect(first).resolves.toBeUndefined();
    await expect(next).resolves.toEqual({ recorded: true });
    expect(postActivity).toHaveBeenCalledTimes(2);
  });

  test('discards pending events on disconnect instead of replaying them later', async () => {
    vi.mocked(postActivity).mockReturnValueOnce(new Promise(() => {}));
    const first = recordClientActivity('test_run');
    const pending = recordClientActivity('challenge_work');
    const signal = vi.mocked(postActivity).mock.calls[0]?.[1];
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false
    });

    await expect(
      recordClientActivity('module_completed')
    ).resolves.toBeUndefined();
    await expect(Promise.all([first, pending])).resolves.toEqual([
      undefined,
      undefined
    ]);
    expect(signal?.aborted).toBe(true);

    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true
    });
    await recordClientActivity('test_run', { subjectId: 'new-online-event' });
    expect(postActivity).toHaveBeenCalledTimes(2);
    expect(vi.mocked(postActivity).mock.lastCall?.[0].subjectId).toBe(
      'new-online-event'
    );
  });

  test('ignores stale acknowledgements after clearing an account queue', async () => {
    let finishOld!: (value: typeof successfulResponse) => void;
    let finishNew!: (value: typeof successfulResponse) => void;
    vi.mocked(postActivity)
      .mockReturnValueOnce(
        new Promise(resolve => {
          finishOld = resolve;
        })
      )
      .mockReturnValueOnce(
        new Promise(resolve => {
          finishNew = resolve;
        })
      );
    const listener = vi.fn();
    const unsubscribe = subscribeToMeaningfulActivity(listener);
    try {
      const old = recordClientActivity('test_run');
      clearClientActivityQueue();
      await expect(old).resolves.toBeUndefined();

      const current = recordClientActivity('challenge_work');
      const pending = recordClientActivity('test_run');
      finishOld(successfulResponse);
      await Promise.resolve();
      expect(listener).not.toHaveBeenCalled();
      expect(postActivity).toHaveBeenCalledTimes(2);

      finishNew(successfulResponse);
      await Promise.all([current, pending]);
      expect(listener).toHaveBeenCalledTimes(2);
      expect(postActivity).toHaveBeenCalledTimes(3);
    } finally {
      unsubscribe();
    }
  });

  test('signals meaningful activity only after it is persisted', async () => {
    let finishRecording!: (value: typeof successfulResponse) => void;
    vi.mocked(postActivity).mockReturnValueOnce(
      new Promise(resolve => {
        finishRecording = resolve;
      })
    );
    const listener = vi.fn();
    const unsubscribe = subscribeToMeaningfulActivity(listener);
    try {
      const first = recordClientActivity('test_run');
      const resume = recordClientActivity('challenge_submit', {
        subjectId: 'challenge-id',
        url: '/learn/course/challenge'
      });
      expect(listener).not.toHaveBeenCalled();
      finishRecording(successfulResponse);
      await Promise.all([first, resume]);
      expect(listener).toHaveBeenCalledOnce();
    } finally {
      unsubscribe();
    }
  });

  test('does not record while offline', async () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false
    });

    await expect(recordClientActivity('test_run')).resolves.toBeUndefined();
    expect(postActivity).not.toHaveBeenCalled();
  });
});
