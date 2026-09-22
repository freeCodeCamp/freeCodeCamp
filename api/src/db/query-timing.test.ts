import { describe, it, expect, vi } from 'vitest';

import { timeOperation } from './query-timing.js';

describe('timeOperation', () => {
  it('returns the result and emits success with a numeric duration', async () => {
    const emit = vi.fn();

    const result = await timeOperation(() => Promise.resolve('ok'), emit);

    expect(result).toBe('ok');
    expect(emit).toHaveBeenCalledWith('success', expect.any(Number));
  });

  it('re-throws and emits failure when the operation rejects', async () => {
    const emit = vi.fn();
    const boom = new Error('boom');

    await expect(timeOperation(() => Promise.reject(boom), emit)).rejects.toBe(
      boom
    );
    expect(emit).toHaveBeenCalledWith('failure', expect.any(Number));
  });
});
