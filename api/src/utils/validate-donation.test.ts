import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { inLastFiveMinutes } from './validate-donation.js';

describe('inLastFiveMinutes', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should return true if the timestamp is within the last five minutes', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const recentTimestamp = currentTimestamp - 100;
    expect(inLastFiveMinutes(recentTimestamp)).toBe(true);
  });

  it('should return false if the timestamp is more than five minutes ago', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const oldTimestamp = currentTimestamp - 400;
    expect(inLastFiveMinutes(oldTimestamp)).toBe(false);
  });

  it('should return true if the timestamp is exactly five minutes ago', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const exactTimestamp = currentTimestamp - 300;
    expect(inLastFiveMinutes(exactTimestamp)).toBe(true);
  });
});
