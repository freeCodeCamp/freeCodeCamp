import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { isWithinMinutes } from './validate-donation.js';

describe('isWithinMinutes', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should return true if the timestamp is within the window', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const recentTimestamp = currentTimestamp - 100;
    expect(isWithinMinutes(recentTimestamp, 5)).toBe(true);
  });

  it('should return false if the timestamp is outside the window', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const oldTimestamp = currentTimestamp - 400;
    expect(isWithinMinutes(oldTimestamp, 5)).toBe(false);
  });

  it('should return true if the timestamp is exactly at the window edge', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const exactTimestamp = currentTimestamp - 300;
    expect(isWithinMinutes(exactTimestamp, 5)).toBe(true);
  });

  it('should respect a wider window', () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const timestamp = currentTimestamp - 400;
    expect(isWithinMinutes(timestamp, 10)).toBe(true);
  });
});
