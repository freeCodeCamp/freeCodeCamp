import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useStaticQuery } from 'gatsby';

import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { IndependentLowerJaw } from './independent-lower-jaw';
import { createStore } from '../../../redux/create-store';
import { mockCurriculumData } from '../utils/__fixtures__/curriculum-data';
import { render } from '../../../../utils/test-utils';

vi.mock('../../../components/Progress');

let showSocratesFlag = true;
vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => ({ on: showSocratesFlag })
}));
vi.mock('../utils/fetch-all-curriculum-data', () => ({
  useSubmit: () => vi.fn()
}));

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
  askSocrates: vi.fn(),
  saveChallenge: vi.fn(),
  tests: passingTests,
  isSignedIn: true,
  challengeMeta: baseChallengeMeta,
  completedPercent: 100,
  completedChallengeIds: ['id-1', 'test-challenge-id'],
  currentBlockIds: ['id-1', 'test-challenge-id'],
  hasSocratesAccess: false,
  socratesHintState: {
    hint: null,
    isLoading: false,
    error: null,
    attempts: null,
    limit: null
  }
};

vi.mock('../../../utils/get-words');

describe('<IndependentLowerJaw />', () => {
  beforeEach(() => {
    showSocratesFlag = true;
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

  it('shows socrates button when hasSocratesAccess is true and flag is on', () => {
    render(
      <IndependentLowerJaw {...baseProps} hasSocratesAccess={true} />,
      createStore()
    );

    expect(screen.getByText('buttons.ask-socrates')).toBeInTheDocument();
  });

  it('hides socrates button when show-socrates flag is off', () => {
    showSocratesFlag = false;

    render(
      <IndependentLowerJaw {...baseProps} hasSocratesAccess={true} />,
      createStore()
    );

    expect(screen.queryByText('buttons.ask-socrates')).not.toBeInTheDocument();
  });

  it('hides socrates button when hasSocratesAccess is false', () => {
    render(
      <IndependentLowerJaw {...baseProps} hasSocratesAccess={false} />,
      createStore()
    );

    expect(screen.queryByText('buttons.ask-socrates')).not.toBeInTheDocument();
  });

  it('displays usage counter when attempts and limit are set', async () => {
    const failingTests: Test[] = [
      { pass: false, err: 'fail', text: 'test', testString: 'test' }
    ];

    render(
      <IndependentLowerJaw
        {...baseProps}
        tests={failingTests}
        hasSocratesAccess={true}
        socratesHintState={{
          hint: 'Try a closing tag.',
          isLoading: false,
          error: null,
          attempts: 2,
          limit: 3
        }}
      />,
      createStore()
    );

    // Click the socrates button to open the results panel
    await userEvent.click(screen.getByRole('button', { name: /ask-socrates/ }));

    expect(screen.getByText(/2\/3/)).toBeInTheDocument();
    expect(screen.getByText(/learn\.hints-used-today/)).toBeInTheDocument();
  });
});
