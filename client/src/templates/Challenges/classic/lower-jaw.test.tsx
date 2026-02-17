import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import type { ChallengeMeta } from '../../../redux/prop-types';
import { LowerJaw } from './lower-jaw';

vi.mock('../../../../src/utils/get-words', () => ({
  randomCompliment: () => 'great work'
}));

const baseProps = {
  completedPercent: 0,
  isPythonPreviewRunning: false,
  challengeIsCompleted: false,
  openHelpModal: vi.fn(),
  tryToExecuteChallenge: vi.fn(),
  tryToSubmitChallenge: vi.fn(),
  testsLength: 1,
  attempts: 0,
  openResetModal: vi.fn(),
  isSignedIn: true,
  updateContainer: vi.fn(),
  runPythonPreview: vi.fn(),
  cancelPythonPreview: vi.fn()
};

const getChallengeMeta = (challengeType: number): ChallengeMeta =>
  ({
    superBlock: 'python-for-everybody',
    block: 'introduction-to-python',
    challengeType
  }) as ChallengeMeta;

describe('LowerJaw python controls', () => {
  it('renders Run Code button for python challenges when not running', () => {
    render(
      <LowerJaw
        {...baseProps}
        challengeMeta={getChallengeMeta(challengeTypes.python)}
      />
    );

    expect(
      screen.getByRole('button', { name: /run code/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cancel/i })
    ).not.toBeInTheDocument();
  });

  it('renders Cancel button for python challenges when running', () => {
    render(
      <LowerJaw
        {...baseProps}
        isPythonPreviewRunning={true}
        challengeMeta={getChallengeMeta(challengeTypes.python)}
      />
    );

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
  });

  it('does not render Run Code or Cancel buttons for non-python challenges', () => {
    render(
      <LowerJaw
        {...baseProps}
        challengeMeta={getChallengeMeta(challengeTypes.modern)}
      />
    );

    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cancel/i })
    ).not.toBeInTheDocument();
  });
});
