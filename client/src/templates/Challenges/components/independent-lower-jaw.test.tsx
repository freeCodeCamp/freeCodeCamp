import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { IndependentLowerJaw } from './independent-lower-jaw';

const baseChallengeMeta: ChallengeMeta = {
  block: 'test-block',
  id: 'test-challenge-id',
  isFirstStep: false,
  isLastChallengeInBlock: true,
  superBlock: 'responsive-web-design',
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
  tests: passingTests,
  isSignedIn: true,
  challengeMeta: baseChallengeMeta,
  completedPercent: 100,
  completedChallengeIds: ['id-1', 'id-2'],
  currentBlockIds: ['id-1', 'id-2']
};

describe('<IndependentLowerJaw />', () => {
  it('shows share buttons when the block is completed on the last step', () => {
    render(<IndependentLowerJaw {...baseProps} />);

    expect(screen.getByText(/buttons.share-on-x/)).toBeInTheDocument();
    expect(screen.getByText(/buttons.share-on-bluesky/)).toBeInTheDocument();
    expect(screen.getByText(/buttons.share-on-threads/)).toBeInTheDocument();
  });

  it('does not show share buttons when the block is not completed', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        completedPercent={50}
        completedChallengeIds={['id-1']}
      />
    );

    expect(screen.queryByText(/buttons.share-on-x/)).not.toBeInTheDocument();
  });

  it('does not show share buttons when it is not the last step', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        challengeMeta={{
          ...baseChallengeMeta,
          isLastChallengeInBlock: false
        }}
      />
    );

    expect(screen.queryByText(/buttons.share-on-x/)).not.toBeInTheDocument();
  });
});
