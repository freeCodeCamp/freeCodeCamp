import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../utils/test-utils';
import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { IndependentLowerJaw } from './independent-lower-jaw';
import { createStore } from '../../../redux/create-store';

vi.mock('../../../components/Progress');
vi.mock('../../../analytics');
vi.mock('../../../utils/get-words');

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
const store = createStore();
const baseProps = {
  openHelpModal: vi.fn(),
  openResetModal: vi.fn(),
  executeChallenge: vi.fn(),
  submitChallenge: vi.fn(),
  saveChallenge: vi.fn(),
  tests: passingTests,
  isSignedIn: true,
  challengeMeta: baseChallengeMeta,
  completedPercent: 100,
  completedChallengeIds: ['id-1', 'test-challenge-id'],
  currentBlockIds: ['id-1', 'test-challenge-id']
};

describe('<IndependentLowerJaw />', () => {
  it('shows share buttons when the block is completed on the last step', () => {
    render(<IndependentLowerJaw {...baseProps} />, store);
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
      />,
      store
    );

    expect(screen.queryByTestId('share-on-x')).not.toBeInTheDocument();
  });

  it('does not show share buttons when it is not the last step', () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        currentBlockIds={[baseChallengeMeta.id, 'id-2']}
        completedChallengeIds={[baseChallengeMeta.id, 'id-2']}
      />,
      store
    );

    expect(screen.queryByTestId('share-on-x')).not.toBeInTheDocument();
  });
});
