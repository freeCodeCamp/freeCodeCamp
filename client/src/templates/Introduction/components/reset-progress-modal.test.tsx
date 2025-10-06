import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import ResetProgressModal from './reset-progress-modal';

type ResizeObserverMockInstance = {
  observe: ResizeObserver['observe'];
  unobserve: ResizeObserver['unobserve'];
  disconnect: ResizeObserver['disconnect'];
};

beforeAll(() => {
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

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { label?: string; verifyText?: string }) => {
      const translations: Record<string, string> = {
        'learn.reset-progress-heading': `Reset Progress for ${options?.label || ''}`,
        'learn.reset-progress-description': `This will permanently delete progress for ${options?.label || ''}:`,
        'learn.reset-progress-warning': 'Cannot be recovered.',
        'learn.reset-progress-nevermind': 'Nevermind',
        'learn.reset-progress-confirm': 'Reset my progress',
        'learn.reset-progress-verify': 'I agree to reset my progress',
        'settings.danger.verify-text': `Type "${options?.verifyText || ''}" to verify`
      };
      return translations[key] || key;
    }
  })
}));

vi.mock('../../../utils/ajax', () => ({
  postResetModule: vi.fn().mockResolvedValue({})
}));

const mockOnHide = vi.fn();
const mockOnResetComplete = vi.fn();

const defaultProps = {
  blockTitle: 'Basic HTML',
  blockDashedName: 'basic-html',
  onHide: mockOnHide,
  onResetComplete: mockOnResetComplete,
  show: true
};

const renderModal = (props = {}) => {
  return render(<ResetProgressModal {...defaultProps} {...props} />);
};

describe('ResetProgressModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders when show is true', () => {
    renderModal();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('displays the block title in the heading', () => {
    renderModal();
    expect(
      screen.getByText(/Reset Progress for Basic HTML/)
    ).toBeInTheDocument();
  });

  it('reset button is disabled when verify text is empty', () => {
    renderModal();
    const resetButton = screen.getByRole('button', {
      name: /reset my progress/i
    });
    expect(resetButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('reset button is enabled when correct verify text is entered', () => {
    renderModal();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });

    const resetButton = screen.getByRole('button', {
      name: /reset my progress/i
    });
    expect(resetButton).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('calls onResetComplete and onHide when reset is confirmed', async () => {
    renderModal();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });

    const resetButton = screen.getByRole('button', {
      name: /reset my progress/i
    });
    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(mockOnResetComplete).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockOnHide).toHaveBeenCalled();
    });
  });

  it('calls onHide when nevermind button is clicked', () => {
    renderModal();
    const nevermindButton = screen.getByRole('button', { name: /nevermind/i });
    fireEvent.click(nevermindButton);

    expect(mockOnHide).toHaveBeenCalled();
    expect(mockOnResetComplete).not.toHaveBeenCalled();
  });
});
