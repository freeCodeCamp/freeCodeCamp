import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import DeleteModal from './delete-modal';

vi.mock('react-i18next', () => ({
  Trans: ({
    children,
    values
  }: {
    children: React.ReactNode;
    values?: { email?: string };
  }) =>
    React.isValidElement<{ children?: React.ReactNode }>(children)
      ? React.cloneElement(children, {}, values?.email)
      : children,
  useTranslation: () => ({
    t: (
      key: string,
      options: { verifyText?: string } | undefined = undefined
    ) => (options?.verifyText ? `${key} ${options.verifyText}` : key)
  })
}));

const verifyDeleteText = 'settings.danger.verify-delete-text';

function renderDeleteModal(
  props: Partial<React.ComponentProps<typeof DeleteModal>> = {}
) {
  return render(
    <DeleteModal delete={vi.fn()} onHide={vi.fn()} show={true} {...props} />
  );
}

describe('<DeleteModal />', () => {
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

  it('renders the delete account warning and disabled confirmation button', () => {
    renderDeleteModal();

    expect(
      screen.getByRole('dialog', { name: 'settings.danger.delete-title' })
    ).toBeInTheDocument();
    expect(screen.getByText('settings.danger.delete-p1')).toBeInTheDocument();
    expect(screen.getByText('settings.danger.delete-p2')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'support@freecodecamp.org' })
    ).toHaveAttribute('href', 'mailto:support@freecodecamp.org');
    expect(
      screen.getByRole('button', { name: 'settings.danger.nevermind' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'settings.danger.certain' })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('closes when the cancel button is clicked', () => {
    const onHide = vi.fn();
    renderDeleteModal({ onHide });

    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.nevermind' })
    );

    expect(onHide).toHaveBeenCalled();
  });

  it('keeps the confirmation button disabled for incorrect verification text', () => {
    renderDeleteModal();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'incorrect text' }
    });

    expect(
      screen.getByRole('button', { name: 'settings.danger.certain' })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables deletion when the verification text matches', () => {
    const deleteAccount = vi.fn();
    renderDeleteModal({ delete: deleteAccount });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: verifyDeleteText }
    });
    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.certain' })
    );

    expect(deleteAccount).toHaveBeenCalled();
  });
});
