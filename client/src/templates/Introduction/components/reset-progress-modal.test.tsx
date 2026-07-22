import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from '@testing-library/react';
import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  beforeEach,
  afterEach
} from 'vitest';
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
        'learn.reset-progress-in-flight': 'Resetting your progress…',
        'learn.reset-progress-success': `Progress for '${options?.label || ''}' has been reset.`,
        'learn.reset-progress-failure': 'We could not reset your progress.',
        'learn.reset-progress-dismiss': 'Dismiss',
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

const typeVerifyPhrase = () => {
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'I agree to reset my progress' }
  });
};

const clickConfirm = () => {
  fireEvent.click(screen.getByRole('button', { name: /reset my progress/i }));
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

  it('disables the reset button when verify text is empty', () => {
    renderModal();
    const resetButton = screen.getByRole('button', {
      name: /reset my progress/i
    });
    expect(resetButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables the reset button when the correct phrase is typed', () => {
    renderModal();
    typeVerifyPhrase();
    expect(
      screen.getByRole('button', { name: /reset my progress/i })
    ).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('sends a single bulk DELETE with the wrapped blockId', async () => {
    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(() => {
      expect(deleteResetModule).toHaveBeenCalledTimes(1);
    });
    expect(deleteResetModule).toHaveBeenCalledWith({
      blockIds: ['basic-html']
    });
  });

  it('sends every blockId in one call when given an array', async () => {
    renderModal({ blockDashedName: ['block-a', 'block-b'] });
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(() => {
      expect(deleteResetModule).toHaveBeenCalledTimes(1);
    });
    expect(deleteResetModule).toHaveBeenCalledWith({
      blockIds: ['block-a', 'block-b']
    });
  });

  it('shows the success state with a dismiss button after a successful reset', async () => {
    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(
      () => {
        expect(
          screen.getByText(/Progress for 'Basic HTML' has been reset/)
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
    expect(mockOnResetComplete).toHaveBeenCalledWith([
      'challenge-1',
      'challenge-2'
    ]);
    expect(
      screen.getByRole('button', { name: /^dismiss$/i })
    ).toBeInTheDocument();
    expect(mockOnHide).not.toHaveBeenCalled();
  });

  it('closes when the dismiss button is clicked from success state', async () => {
    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    const dismissButton = await screen.findByRole(
      'button',
      { name: /dismiss/i },
      { timeout: 2000 }
    );
    fireEvent.click(dismissButton);

    expect(mockOnHide).toHaveBeenCalledTimes(1);
  });

  it('shows the error state when the API responds non-ok', async () => {
    vi.mocked(deleteResetModule).mockResolvedValueOnce(
      mockResponse(false, 500, 'Server Error')
    );
    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(
      () => {
        expect(
          screen.getByText(/We could not reset your progress/)
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
    expect(
      screen.getByRole('button', { name: /dismiss/i })
    ).toBeInTheDocument();
    expect(mockOnResetComplete).not.toHaveBeenCalled();
    expect(mockOnHide).not.toHaveBeenCalled();
  });

  it('keeps the in-flight state visible for at least 1 second even when the API is fast', async () => {
    vi.useFakeTimers();
    try {
      renderModal();
      typeVerifyPhrase();
      clickConfirm();

      await act(async () => {
        await Promise.resolve();
      });

      expect(screen.getByText(/Resetting your progress/)).toBeInTheDocument();
      expect(
        screen.queryByText(/Progress for 'Basic HTML' has been reset/)
      ).not.toBeInTheDocument();

      await act(async () => {
        await vi.advanceTimersByTimeAsync(900);
      });
      expect(screen.getByText(/Resetting your progress/)).toBeInTheDocument();

      await act(async () => {
        await vi.advanceTimersByTimeAsync(200);
      });
      expect(
        screen.getByText(/Progress for 'Basic HTML' has been reset/)
      ).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it('does not auto-close the resolved modal — requires explicit dismiss', async () => {
    vi.useFakeTimers();
    try {
      renderModal();
      typeVerifyPhrase();
      clickConfirm();

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1000);
      });

      expect(
        screen.getByRole('button', { name: /^dismiss$/i })
      ).toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(60_000);
      });

      expect(mockOnHide).not.toHaveBeenCalled();
      expect(
        screen.getByRole('button', { name: /^dismiss$/i })
      ).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it('calls onHide and not onResetComplete when nevermind is clicked', () => {
    renderModal();
    fireEvent.click(screen.getByRole('button', { name: /nevermind/i }));

    expect(mockOnHide).toHaveBeenCalled();
    expect(mockOnResetComplete).not.toHaveBeenCalled();
    expect(deleteResetModule).not.toHaveBeenCalled();
  });

  it('shows the loader and hides action buttons while resetting', async () => {
    let resolveReset!: (value: ResetResponse) => void;
    vi.mocked(deleteResetModule).mockReturnValueOnce(
      new Promise<ResetResponse>(resolve => {
        resolveReset = resolve;
      })
    );

    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(() => {
      expect(screen.getByText(/Resetting your progress/)).toBeInTheDocument();
    });
    expect(
      screen.queryByRole('button', { name: /reset my progress/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /nevermind/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /dismiss/i })
    ).not.toBeInTheDocument();

    resolveReset(mockResponse(true, 200, 'OK'));

    await waitFor(
      () => {
        expect(
          screen.getByRole('button', { name: /dismiss/i })
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  it('ignores close attempts while resetting', async () => {
    let resolveReset!: (value: ResetResponse) => void;
    vi.mocked(deleteResetModule).mockReturnValueOnce(
      new Promise<ResetResponse>(resolve => {
        resolveReset = resolve;
      })
    );

    renderModal();
    typeVerifyPhrase();
    clickConfirm();

    await waitFor(() => {
      expect(screen.getByText(/Resetting your progress/)).toBeInTheDocument();
    });
    expect(mockOnHide).not.toHaveBeenCalled();

    resolveReset(mockResponse(true, 200, 'OK'));

    await waitFor(
      () => {
        expect(
          screen.getByRole('button', { name: /dismiss/i })
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
    expect(mockOnHide).not.toHaveBeenCalled();
  });
});

afterEach(() => {
  vi.useRealTimers();
});
