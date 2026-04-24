import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import ResetProgressModal from './reset-progress-modal';
import { deleteResetModule, type ResponseWithData } from '../../../utils/ajax';

type ResetResponse = ResponseWithData<{ removedChallengeIds: string[] }>;

const mockResponse = (
  ok: boolean,
  status: number,
  statusText: string,
  removedChallengeIds: string[] = []
): ResetResponse =>
  ({
    response: { ok, status, statusText },
    data: { removedChallengeIds }
  }) as ResetResponse;

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
    t: (key: string, options?: Record<string, string | number | undefined>) => {
      const translations: Record<string, string> = {
        'learn.reset-progress-heading': `Reset Progress for ${options?.label || ''}`,
        'learn.reset-progress-description': `This will permanently delete progress for ${options?.label || ''}:`,
        'learn.reset-progress-warning': 'Cannot be recovered.',
        'learn.reset-progress-nevermind': 'Nevermind',
        'learn.reset-progress-confirm': 'Reset my progress',
        'learn.reset-progress-verify': 'I agree to reset my progress',
        'learn.reset-progress-error':
          'Something went wrong resetting your progress.',
        'learn.reset-progress-partial': `${options?.count || ''} of ${options?.total || ''} blocks reset.`,
        'learn.resetting-progress': `Resetting ${options?.current || ''} of ${options?.total || ''}`,
        'buttons.close': 'Close',
        'settings.danger.verify-text': `Type "${options?.verifyText || ''}" to verify`
      };
      return translations[key] || key;
    }
  })
}));

vi.mock('../../../utils/ajax', () => ({
  deleteResetModule: vi.fn().mockResolvedValue({
    response: { ok: true, status: 200, statusText: 'OK' },
    data: { removedChallengeIds: ['challenge-1', 'challenge-2'] }
  })
}));

const mockOnHide = vi.fn();
const mockOnResetComplete = vi.fn();

const defaultProps = {
  blockTitle: 'Basic HTML',
  blockDashedName: 'basic-html',
  superBlock: SuperBlocks.RespWebDesign,
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
      expect(mockOnResetComplete).toHaveBeenCalledWith([
        'challenge-1',
        'challenge-2'
      ]);
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

  it('shows error alert when API returns a non-ok response', async () => {
    vi.mocked(deleteResetModule).mockResolvedValueOnce(
      mockResponse(false, 500, 'Server Error')
    );

    renderModal();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });
    fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));

    await waitFor(() => {
      expect(
        screen.getByText('Something went wrong resetting your progress.')
      ).toBeInTheDocument();
    });
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(mockOnHide).not.toHaveBeenCalled();
  });

  it('shows partial success message when one of multiple blocks fails', async () => {
    vi.mocked(deleteResetModule)
      .mockResolvedValueOnce(mockResponse(true, 200, 'OK', ['id-a1']))
      .mockResolvedValueOnce(mockResponse(false, 500, 'Server Error'));

    renderModal({ blockDashedName: ['block-a', 'block-b'] });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });
    fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    expect(screen.getByText(/1 of 2 blocks reset/)).toBeInTheDocument();
    expect(mockOnResetComplete).toHaveBeenCalledWith(['id-a1']);
  });

  it('accumulates IDs from all blocks on multi-block success', async () => {
    vi.mocked(deleteResetModule)
      .mockResolvedValueOnce(mockResponse(true, 200, 'OK', ['id-a1', 'id-a2']))
      .mockResolvedValueOnce(mockResponse(true, 200, 'OK', ['id-b1']));

    renderModal({ blockDashedName: ['block-a', 'block-b'] });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });
    fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));

    await waitFor(() => {
      expect(mockOnResetComplete).toHaveBeenCalledWith([
        'id-a1',
        'id-a2',
        'id-b1'
      ]);
    });
    expect(mockOnHide).toHaveBeenCalled();
  });

  it('hides footer buttons and header close button while resetting', async () => {
    let resolveReset!: (value: ResetResponse) => void;
    vi.mocked(deleteResetModule).mockReturnValueOnce(
      new Promise<ResetResponse>(resolve => {
        resolveReset = resolve;
      })
    );

    renderModal();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });
    fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));

    await waitFor(() => {
      expect(screen.getByText(/Resetting 1 of 1/)).toBeInTheDocument();
    });

    expect(
      screen.queryByRole('button', { name: /reset my progress/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /nevermind/i })
    ).not.toBeInTheDocument();
    const closeButtons = screen.queryAllByRole('button', {
      name: /close/i
    });
    expect(closeButtons).toHaveLength(0);

    resolveReset(mockResponse(true, 200, 'OK'));

    await waitFor(() => {
      expect(mockOnHide).toHaveBeenCalled();
    });
  });

  it('does not close modal while resetting', async () => {
    let resolveReset!: (value: ResetResponse) => void;
    vi.mocked(deleteResetModule).mockReturnValueOnce(
      new Promise<ResetResponse>(resolve => {
        resolveReset = resolve;
      })
    );

    renderModal();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'I agree to reset my progress' }
    });
    fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));

    await waitFor(() => {
      expect(screen.getByText(/Resetting 1 of 1/)).toBeInTheDocument();
    });

    expect(mockOnHide).not.toHaveBeenCalled();

    resolveReset(mockResponse(true, 200, 'OK'));

    await waitFor(() => {
      expect(mockOnHide).toHaveBeenCalled();
    });
  });
});
