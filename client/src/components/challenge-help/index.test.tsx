import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import ChallengeHelp from './index';

vi.mock('../archived-warning', () => ({
  default: () => <div data-testid='archived-warning'>archived-warning</div>
}));

describe('ChallengeHelp', () => {
  test('renders the help button for active superblocks', () => {
    const onAskForHelp = vi.fn();

    render(
      <ChallengeHelp
        superBlock={SuperBlocks.RespWebDesignV9}
        onAskForHelp={onAskForHelp}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.ask-for-help' })
    );

    expect(onAskForHelp).toHaveBeenCalledTimes(1);
  });

  test('renders the archived warning instead of the help button', () => {
    const onAskForHelp = vi.fn();

    render(
      <ChallengeHelp
        superBlock={SuperBlocks.RespWebDesign}
        onAskForHelp={onAskForHelp}
      />
    );

    expect(screen.getByTestId('archived-warning')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'buttons.ask-for-help' })
    ).not.toBeInTheDocument();

    expect(onAskForHelp).not.toHaveBeenCalled();
  });
});
