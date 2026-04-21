import { renderHook, act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useSubmit } from './fetch-all-curriculum-data';

const { mockDispatch } = vi.hoisted(() => ({
  mockDispatch: vi.fn()
}));

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

vi.mock('gatsby', () => ({
  graphql: vi.fn(),
  useStaticQuery: () => ({
    allChallengeNode: { nodes: [] },
    allCertificateNode: { nodes: [] },
    allSuperBlockStructure: { nodes: [] }
  })
}));

describe('useSubmit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockDispatch.mockReset();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should debounce rapid submissions', () => {
    const { result } = renderHook(() => useSubmit());

    act(() => {
      result.current();
      result.current();
      result.current();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(1001);
      result.current();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });

  it('should share the submit lock across hook instances', () => {
    const { result: first } = renderHook(() => useSubmit());
    const { result: second } = renderHook(() => useSubmit());

    act(() => {
      first.current();
      second.current();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(1001);
      second.current();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});
