import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import TrophyButtons from './trophy-buttons';

describe('TrophyButtons', () => {
  test('renders trophy verification button', () => {
    const onVerifyTrophy = vi.fn();

    render(
      <TrophyButtons
        disabled={false}
        onVerifyTrophy={onVerifyTrophy}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.verify-trophy' })
    );

    expect(onVerifyTrophy).toHaveBeenCalledTimes(1);
  });

  test('disables trophy verification while unavailable', () => {
    render(
      <TrophyButtons
        disabled={true}
        onVerifyTrophy={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'buttons.verify-trophy' })
    ).toHaveAttribute('aria-disabled', 'true');
  });
});
