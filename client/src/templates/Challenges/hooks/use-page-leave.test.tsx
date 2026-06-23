import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { usePageLeave } from './use-page-leave';

vi.mock('@gatsbyjs/reach-router', () => ({
  useLocation: () => ({ pathname: '/learn/test-project' })
}));

describe('usePageLeave', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not register navigation handlers when disabled', () => {
    const addWindowListener = vi.spyOn(window, 'addEventListener');
    const pushState = vi.spyOn(window.history, 'pushState');

    renderHook(() =>
      usePageLeave({
        enabled: false,
        onWindowClose: vi.fn(),
        onHistoryChange: vi.fn()
      })
    );

    expect(addWindowListener).not.toHaveBeenCalledWith(
      'beforeunload',
      expect.any(Function)
    );
    expect(pushState).not.toHaveBeenCalled();
  });

  it('registers and removes navigation handlers when enabled', () => {
    const addWindowListener = vi.spyOn(window, 'addEventListener');
    const removeWindowListener = vi.spyOn(window, 'removeEventListener');
    const pushState = vi.spyOn(window.history, 'pushState');
    const onWindowClose = vi.fn();
    const onHistoryChange = vi.fn();

    const { unmount } = renderHook(() =>
      usePageLeave({ onWindowClose, onHistoryChange })
    );

    expect(addWindowListener).toHaveBeenCalledWith(
      'beforeunload',
      onWindowClose
    );
    expect(pushState).toHaveBeenCalledWith({}, '/learn/test-project');

    unmount();

    expect(removeWindowListener).toHaveBeenCalledWith(
      'beforeunload',
      onWindowClose
    );
  });
});
