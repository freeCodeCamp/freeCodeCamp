import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import TrophyButtons from './trophy-buttons';

describe('TrophyButtons', () => {
  test('renders trophy verification and help buttons', () => {
    const onAskForHelp = vi.fn();
    const onVerifyTrophy = vi.fn();

    render(
      <TrophyButtons
        disabled={false}
        superBlock={SuperBlocks.FoundationalCSharp}
        onAskForHelp={onAskForHelp}
        onVerifyTrophy={onVerifyTrophy}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.verify-trophy' })
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.ask-for-help' })
    );

    expect(onVerifyTrophy).toHaveBeenCalledTimes(1);
    expect(onAskForHelp).toHaveBeenCalledTimes(1);
  });

  test('disables trophy verification while unavailable', () => {
    render(
      <TrophyButtons
        disabled={true}
        superBlock={SuperBlocks.FoundationalCSharp}
        onAskForHelp={vi.fn()}
        onVerifyTrophy={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'buttons.verify-trophy' })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(
      screen.getByRole('button', { name: 'buttons.ask-for-help' })
    ).toBeEnabled();
  });
});
