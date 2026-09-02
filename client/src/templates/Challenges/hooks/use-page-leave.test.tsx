import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { usePageLeave } from './use-page-leave';

vi.mock('@gatsbyjs/reach-router', () => ({
  useLocation: () => ({ pathname: '/current-page' })
}));

const clickAnchor = (
  href: string,
  init: MouseEventInit = {},
  attributes: Record<string, string> = {}
) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', href);
  Object.entries(attributes).forEach(([name, value]) =>
    anchor.setAttribute(name, value)
  );
  document.body.appendChild(anchor);
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
    ...init
  });
  anchor.dispatchEvent(event);
  anchor.remove();
  return event;
};

describe('usePageLeave', () => {
  const onWindowClose = vi.fn();
  const onHistoryChange = vi.fn((_targetPathname: string) => true);
  let pushStateSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    onHistoryChange.mockClear();
    pushStateSpy = vi.spyOn(window.history, 'pushState');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should block a plain left-click on an internal link', () => {
    renderHook(() => usePageLeave({ onWindowClose, onHistoryChange }));

    const event = clickAnchor('/learn');

    expect(onHistoryChange).toHaveBeenCalledWith('/learn');
    expect(event.defaultPrevented).toBe(true);
  });

  it.each([
    ['ctrlKey', { ctrlKey: true }],
    ['metaKey', { metaKey: true }],
    ['shiftKey', { shiftKey: true }],
    ['altKey', { altKey: true }],
    ['non-primary button', { button: 1 }]
  ])('should not intercept a click with %s', (_name, init) => {
    renderHook(() => usePageLeave({ onWindowClose, onHistoryChange }));

    const event = clickAnchor('/learn', init);

    expect(onHistoryChange).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('should not intercept a click on a link targeting another tab', () => {
    renderHook(() => usePageLeave({ onWindowClose, onHistoryChange }));

    const event = clickAnchor('/learn', {}, { target: '_blank' });

    expect(onHistoryChange).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('should not listen or push history state while disabled', () => {
    renderHook(() =>
      usePageLeave({ onWindowClose, onHistoryChange, enabled: false })
    );

    clickAnchor('/learn');

    expect(onHistoryChange).not.toHaveBeenCalled();
    expect(pushStateSpy).not.toHaveBeenCalled();
  });

  it('should push the dummy history state at most once per mount', () => {
    const { rerender } = renderHook(
      ({ enabled }: { enabled: boolean }) =>
        usePageLeave({ onWindowClose, onHistoryChange, enabled }),
      { initialProps: { enabled: false } }
    );

    expect(pushStateSpy).not.toHaveBeenCalled();

    rerender({ enabled: true });
    expect(pushStateSpy).toHaveBeenCalledTimes(1);

    // Disarm and re-arm, as happens on every save-then-edit cycle.
    rerender({ enabled: false });
    rerender({ enabled: true });
    rerender({ enabled: false });
    rerender({ enabled: true });

    expect(pushStateSpy).toHaveBeenCalledTimes(1);
  });

  it('should stop intercepting clicks after being disabled', () => {
    const { rerender } = renderHook(
      ({ enabled }: { enabled: boolean }) =>
        usePageLeave({ onWindowClose, onHistoryChange, enabled }),
      { initialProps: { enabled: true } }
    );

    rerender({ enabled: false });
    const event = clickAnchor('/learn');

    expect(onHistoryChange).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });
});
