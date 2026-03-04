import React from 'react';
import { screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useStaticQuery } from 'gatsby';

import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { IndependentLowerJaw } from './independent-lower-jaw';
import { createStore } from '../../../redux/create-store';
import { mockCurriculumData } from '../utils/__fixtures__/curriculum-data';
import { render } from '../../../../utils/test-utils';

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
  tests: passingTests,
  isSignedIn: true,
  challengeMeta: baseChallengeMeta,
  completedPercent: 100,
  completedChallengeIds: ['id-1', 'test-challenge-id'],
  currentBlockIds: ['id-1', 'test-challenge-id']
};

vi.mock('../../../utils/get-words');

describe('<IndependentLowerJaw />', () => {
  beforeEach(() => {
    vi.mocked(useStaticQuery).mockReturnValue(mockCurriculumData);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('shows share buttons when the block is completed on the last step', () => {
    render(<IndependentLowerJaw {...baseProps} />, createStore());

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
      createStore()
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
      createStore()
    );

    expect(screen.queryByTestId('share-on-x')).not.toBeInTheDocument();
  });
});
