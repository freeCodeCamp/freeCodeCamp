import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import type { ChallengeMeta } from '../../../redux/prop-types';
import { LowerJaw } from './lower-jaw';

vi.mock('../../../utils/get-words', () => ({
  randomCompliment: () => 'Keep going.'
}));

vi.mock('../../../components/Progress', () => ({
  default: () => <div data-testid='progress' />
}));

vi.mock('../../../components/share', () => ({
  Share: () => <div data-testid='share' />
}));

const challengeMeta: ChallengeMeta = {
  block: 'basic-html-and-html5',
  id: 'test-challenge-id',
  isFirstStep: false,
  superBlock: SuperBlocks.RespWebDesign,
  helpCategory: 'HTML-CSS',
  disableLoopProtectTests: false,
  disableLoopProtectPreview: false
};

const defaultProps = {
  challengeMeta,
  completedPercent: 0,
  challengeIsCompleted: false,
  openHelpModal: vi.fn(),
  tryToExecuteChallenge: vi.fn(),
  tryToSubmitChallenge: vi.fn(),
  testsLength: 4,
  attempts: 0,
  openResetModal: vi.fn(),
  isSignedIn: true,
  updateContainer: vi.fn()
};

const renderLowerJaw = (
  props: Partial<React.ComponentProps<typeof LowerJaw>> = {}
) => render(<LowerJaw {...defaultProps} {...props} />);

describe('<LowerJaw />', () => {
  it('hides the help button before enough failed check attempts', () => {
    renderLowerJaw({ attempts: 2 });

    expect(
      screen.getByRole('button', { name: /buttons.reset/ })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /buttons.help/ })
    ).not.toBeInTheDocument();
  });

  it('shows the help button after the third failed check attempt', async () => {
    const user = userEvent.setup();
    const openHelpModal = vi.fn();

    renderLowerJaw({ attempts: 3, openHelpModal });

    await user.click(screen.getByRole('button', { name: /buttons.help/ }));

    expect(openHelpModal).toHaveBeenCalledTimes(1);
  });
});
