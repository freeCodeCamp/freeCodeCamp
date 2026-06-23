import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { ExitProjectModal } from './exit-project-modal';

describe('<ExitProjectModal />', () => {
  beforeAll(() => {
    type ResizeObserverMockInstance = {
      observe: ResizeObserver['observe'];
      unobserve: ResizeObserver['unobserve'];
      disconnect: ResizeObserver['disconnect'];
    };
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: vi.fn(function (this: ResizeObserverMockInstance) {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
      })
    });
  });

  it('does not render when closed', () => {
    render(
      <ExitProjectModal isOpen={false} onClose={vi.fn()} onExit={vi.fn()} />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('lets the camper cancel or confirm navigation', () => {
    const onClose = vi.fn();
    const onExit = vi.fn();
    render(
      <ExitProjectModal isOpen={true} onClose={onClose} onExit={onExit} />
    );

    expect(screen.getByRole('dialog')).toHaveTextContent(
      'misc.navigation-warning'
    );

    fireEvent.click(screen.getByRole('button', { name: 'buttons.cancel' }));
    expect(onClose).toHaveBeenCalledOnce();

    const exitButtons = screen.getAllByRole('button', {
      name: 'buttons.exit'
    });
    fireEvent.click(exitButtons[exitButtons.length - 1]);
    expect(onExit).toHaveBeenCalledOnce();
  });
});
