import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { IndependentLowerJaw } from './independent-lower-jaw';

const baseChallengeMeta: ChallengeMeta = {
  block: 'test-block',
  id: 'test-challenge-id',
  isFirstStep: false,
  superBlock: SuperBlocks.RespWebDesignV9,
  helpCategory: 'HTML-CSS',
  disableLoopProtectTests: false,
  disableLoopProtectPreview: false
};

const passingTests: Test[] = [{ pass: true, text: 'test', testString: 'test' }];

const baseProps = {
  openHelpModal: vi.fn(),
  openResetModal: vi.fn(),
  executeChallenge: vi.fn(),
  submitChallenge: vi.fn(),
  runPythonPreview: vi.fn(),
  cancelPythonPreview: vi.fn(),
  isPythonPreviewRunning: false,
  tests: passingTests,
  isSignedIn: true,
  challengeMeta: baseChallengeMeta,
  completedPercent: 100,
  completedChallengeIds: ['id-1', 'test-challenge-id'],
  currentBlockIds: ['id-1', 'test-challenge-id']
};

describe('<IndependentLowerJaw />', () => {
  it('shows share buttons when the block is completed on the last step', () => {
    render(<IndependentLowerJaw {...baseProps} />);

    expect(screen.getByTestId('share-on-x')).toBeInTheDocument();
    expect(screen.getByTestId('share-on-bluesky')).toBeInTheDocument();
    expect(screen.getByTestId('share-on-threads')).toBeInTheDocument();
  });

  it('does not show share buttons when the block is not completed', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        completedPercent={50}
        completedChallengeIds={['id-1']}
      />
    );

    expect(screen.queryByTestId('share-on-x')).not.toBeInTheDocument();
  });

  it('does not show share buttons when it is not the last step', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        currentBlockIds={[baseChallengeMeta.id, 'id-2']}
        completedChallengeIds={[baseChallengeMeta.id, 'id-2']}
      />
    );

    expect(screen.queryByTestId('share-on-x')).not.toBeInTheDocument();
  });
});

describe('IndependentLowerJaw python controls', () => {
  it('renders Run Code button for python challenges when not running', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        tests={[{ text: 'test', testString: 'test code', pass: false }]}
        challengeType={challengeTypes.python}
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
      <IndependentLowerJaw
        {...baseProps}
        tests={[{ text: 'test', testString: 'test code', pass: false }]}
        isPythonPreviewRunning={true}
        challengeType={challengeTypes.python}
      />
    );

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
  });

  it('does not render Run Code or Cancel buttons for non-python challenges', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        tests={[{ text: 'test', testString: 'test code', pass: false }]}
        challengeType={challengeTypes.modern}
      />
    );

    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cancel/i })
    ).not.toBeInTheDocument()
  });
});
