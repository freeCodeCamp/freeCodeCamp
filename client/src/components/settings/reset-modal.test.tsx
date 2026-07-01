import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ResetModal from './reset-modal';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (
      key: string,
      options: { verifyText?: string } | undefined = undefined
    ) => (options?.verifyText ? `${key} ${options.verifyText}` : key)
  })
}));

const verifyResetText = 'settings.danger.verify-reset-text';

function renderResetModal(
  props: Partial<React.ComponentProps<typeof ResetModal>> = {}
) {
  return render(
    <ResetModal reset={vi.fn()} onHide={vi.fn()} show={true} {...props} />
  );
}

describe('<ResetModal />', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class ResizeObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  });

  it('renders the reset progress warning and disabled confirmation button', () => {
    renderResetModal();

    expect(
      screen.getByRole('dialog', { name: 'settings.danger.reset-heading' })
    ).toBeInTheDocument();
    expect(screen.getByText('settings.danger.reset-p1')).toBeInTheDocument();
    expect(
      screen.getByText('settings.danger.reset-item-1')
    ).toBeInTheDocument();
    expect(
      screen.getByText('settings.danger.reset-item-2')
    ).toBeInTheDocument();
    expect(
      screen.getByText('settings.danger.reset-item-3')
    ).toBeInTheDocument();
    expect(screen.getByText('settings.danger.reset-p2')).toBeInTheDocument();
    expect(screen.getByText('settings.danger.reset-p3')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'settings.danger.nevermind-2' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'settings.danger.reset-confirm' })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('closes when the cancel button is clicked', () => {
    const onHide = vi.fn();
    renderResetModal({ onHide });

    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.nevermind-2' })
    );

    expect(onHide).toHaveBeenCalled();
  });

  it('keeps the confirmation button disabled for incorrect verification text', () => {
    renderResetModal();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'incorrect text' }
    });

    expect(
      screen.getByRole('button', { name: 'settings.danger.reset-confirm' })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables reset when the verification text matches', () => {
    const reset = vi.fn();
    renderResetModal({ reset });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: verifyResetText }
    });
    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.reset-confirm' })
    );

    expect(reset).toHaveBeenCalled();
  });
});
