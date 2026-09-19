import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { usePageLeave } from './use-page-leave';

vi.mock('@gatsbyjs/reach-router', () => ({
  useLocation: () => ({ pathname: '/learn/a-project' })
}));

afterEach(() => {
  vi.restoreAllMocks();
});

describe('usePageLeave', () => {
  it('re-arms the back button while navigation is blocked', () => {
    const onHistoryChange = vi.fn().mockReturnValue(true);
    const pushState = vi.spyOn(window.history, 'pushState');

    renderHook(() => usePageLeave({ onWindowClose: vi.fn(), onHistoryChange }));

    expect(pushState).toHaveBeenCalledTimes(1);

    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(onHistoryChange).toHaveBeenCalledWith('');
    // Going back used up the dummy state, so a new one has to take its place
    // for the next back press to be caught as well.
    expect(pushState).toHaveBeenCalledTimes(2);
  });

  it('lets the camper leave once navigation is no longer blocked', () => {
    const onHistoryChange = vi.fn().mockReturnValue(false);
    const pushState = vi.spyOn(window.history, 'pushState');

    renderHook(() => usePageLeave({ onWindowClose: vi.fn(), onHistoryChange }));
    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(pushState).toHaveBeenCalledTimes(1);
  });

  it('stays out of the way while disabled', () => {
    const onHistoryChange = vi.fn();
    const onWindowClose = vi.fn();
    const pushState = vi.spyOn(window.history, 'pushState');

    renderHook(() =>
      usePageLeave({ onWindowClose, onHistoryChange, enabled: false })
    );

    expect(pushState).not.toHaveBeenCalled();

    window.dispatchEvent(new PopStateEvent('popstate'));
    window.dispatchEvent(new Event('beforeunload'));

    expect(onHistoryChange).not.toHaveBeenCalled();
    expect(onWindowClose).not.toHaveBeenCalled();
  });
});
