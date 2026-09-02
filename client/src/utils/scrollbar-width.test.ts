import { describe, it, expect, vi, beforeEach } from 'vitest';
import store from 'store';
import { getScrollbarWidth } from './scrollbar-width';

vi.mock('store', () => {
  const data = new Map<string, unknown>();
  return {
    default: {
      get: vi.fn((key: string) => data.get(key)),
      set: vi.fn((key: string, value: unknown) => {
        data.set(key, value);
      }),
      remove: vi.fn((key: string) => {
        data.delete(key);
      })
    }
  };
});

describe('getScrollbarWidth', () => {
  beforeEach(() => {
    store.remove('monacoScrollbarWidth');
  });

  it('returns the stored width when it is within the valid range', () => {
    for (const width of [5, 10, 15, 20, 25]) {
      store.set('monacoScrollbarWidth', width);
      expect(getScrollbarWidth()).toBe(width);
    }
  });

  it('falls back to 5 when nothing is stored', () => {
    expect(getScrollbarWidth()).toBe(5);
  });

  it('falls back to 5 when the stored width is below the valid range', () => {
    store.set('monacoScrollbarWidth', 0);
    expect(getScrollbarWidth()).toBe(5);

    store.set('monacoScrollbarWidth', -10);
    expect(getScrollbarWidth()).toBe(5);
  });

  it('falls back to 5 when the stored width is above the valid range', () => {
    store.set('monacoScrollbarWidth', 100);
    expect(getScrollbarWidth()).toBe(5);
  });
});
