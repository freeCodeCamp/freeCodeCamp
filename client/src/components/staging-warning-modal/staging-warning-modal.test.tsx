import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import store from 'store';
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest';
import StagingWarningModal from '.';

describe('StagingWarningModal', () => {
  beforeAll(() => {
    // The Modal component uses `ResizeObserver` under the hood.
    // However, this property is not available in JSDOM, so we need to manually add it to the window object.
    // Ref: https://github.com/jsdom/jsdom/issues/3368

    type ResizeObserverMockInstance = {
      observe: ResizeObserver['observe'];
      unobserve: ResizeObserver['unobserve'];
      disconnect: ResizeObserver['disconnect'];
    };
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: vi.fn(function (
        this: ResizeObserverMockInstance,
        _cb: ResizeObserverCallback
      ) {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
      })
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the modal successfully', () => {
    render(<StagingWarningModal />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes the modal when clicking the close button', async () => {
    render(<StagingWarningModal />);
    fireEvent.click(screen.getByText('Close'));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('displays the correct modal content', () => {
    render(<StagingWarningModal />);
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toHaveTextContent('staging-warning.heading');
    expect(modalContent).toHaveTextContent('staging-warning.p1');
    expect(modalContent).toHaveTextContent('staging-warning.p2');
    expect(modalContent).toHaveTextContent('staging-warning.p3');
  });

  it('accepts Warning, stores acceptance key in local storage, and closes the modal', async () => {
    render(<StagingWarningModal />);

    fireEvent.click(screen.getByTestId('accepts-warning'));
    expect(store.get('acceptedStagingWarning')).toBe(true);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
