import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useStaticQuery } from 'gatsby';

import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import callGA from '../../../analytics/call-ga';
import { IndependentLowerJaw } from './independent-lower-jaw';
import { createStore } from '../../../redux/create-store';
import { mockCurriculumData } from '../utils/__fixtures__/curriculum-data';
import { render } from '../../../../utils/test-utils';

vi.mock('../../../components/Progress');
vi.mock('../../../analytics/call-ga', () => ({
  default: vi.fn()
}));

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
  attempts: 0,
  tests: passingTests,
  isDonating: false,
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

const getLiveRegion = () => {
  const region = screen.getByTestId('independent-lower-jaw-live-region');
  expect(region).toHaveAttribute('aria-live', 'polite');
  expect(region).toHaveAttribute('aria-atomic', 'true');
  return region;
};

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

  it('tracks CallSocrates analytics when ask socrates button is clicked', async () => {
    render(
      <IndependentLowerJaw
        {...baseProps}
        hasSocratesAccess={true}
        socratesHintState={{
          hint: null,
          isLoading: false,
          error: null,
          attempts: 2,
          limit: 3
        }}
      />,
      createStore()
    );

    await userEvent.click(screen.getByRole('button', { name: /ask-socrates/ }));

    expect(callGA).toHaveBeenCalledWith({
      event: 'CallSocrates',
      action: 'Socrates LowerJaw Button Click',
      isDonating: false,
      attempts: 2,
      limit: 3,
      optimizedRequest: null
    });
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

  it('shows Socrates donation CTA when the daily limit is reached', async () => {
    const failingTests: Test[] = [
      { pass: false, err: 'fail', text: 'test', testString: 'test' }
    ];

    render(
      <IndependentLowerJaw
        {...baseProps}
        tests={failingTests}
        hasSocratesAccess={true}
        socratesHintState={{
          hint: null,
          isLoading: false,
          error: 'learn.socrates-daily-limit',
          attempts: 3,
          limit: 3
        }}
      />,
      createStore()
    );

    await userEvent.click(screen.getByRole('button', { name: /ask-socrates/ }));

    expect(screen.getByTestId('socrates-donation-cta')).toBeInTheDocument();
    expect(
      screen.getByText('learn.donor-socrates-benefit')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /donate.become-supporter/ })
    ).toHaveAttribute('href', '/donate');
  });

  it('tracks donation_related analytics when become supporter link is clicked', async () => {
    const failingTests: Test[] = [
      { pass: false, err: 'fail', text: 'test', testString: 'test' }
    ];

    vi.mocked(callGA).mockClear();

    render(
      <IndependentLowerJaw
        {...baseProps}
        tests={failingTests}
        hasSocratesAccess={true}
        socratesHintState={{
          hint: null,
          isLoading: false,
          error: 'learn.socrates-daily-limit',
          attempts: 3,
          limit: 3
        }}
      />,
      createStore()
    );

    await userEvent.click(screen.getByRole('button', { name: /ask-socrates/ }));
    await userEvent.click(
      screen.getByRole('link', { name: /donate.become-supporter/ })
    );

    expect(callGA).toHaveBeenCalledWith({
      event: 'donation_related',
      action: 'Socrates LowerJaw Become Supporter Click'
    });
  });

  it('hides Socrates donation CTA for supporters even when the limit is reached', async () => {
    const failingTests: Test[] = [
      { pass: false, err: 'fail', text: 'test', testString: 'test' }
    ];

    render(
      <IndependentLowerJaw
        {...baseProps}
        isDonating={true}
        tests={failingTests}
        hasSocratesAccess={true}
        socratesHintState={{
          hint: null,
          isLoading: false,
          error: 'learn.socrates-daily-limit',
          attempts: 3,
          limit: 3
        }}
      />,
      createStore()
    );

    await userEvent.click(screen.getByRole('button', { name: /ask-socrates/ }));

    expect(
      screen.queryByTestId('socrates-donation-cta')
    ).not.toBeInTheDocument();
  });

  it('announces hint text through a live region', async () => {
    const failingTests: Test[] = [
      {
        pass: false,
        err: 'Use <code>&lt;main&gt;</code> here.',
        message: 'Use <code>&lt;main&gt;</code> here.',
        text: 'test',
        testString: 'test'
      }
    ];

    render(
      <IndependentLowerJaw {...baseProps} tests={failingTests} />,
      createStore()
    );

    expect(getLiveRegion()).toHaveTextContent('');

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent('Use <main> here.')
    );
  });

  it('re-announces the same hint after each check attempt', async () => {
    const firstFailingTests: Test[] = [
      {
        pass: false,
        err: 'Use <code>&lt;main&gt;</code> here.',
        message: 'Use <code>&lt;main&gt;</code> here.',
        text: 'test',
        testString: 'test'
      }
    ];
    const thirdFailingTests: Test[] = [
      {
        pass: false,
        err: 'Use <code>&lt;main&gt;</code> here.',
        message: 'Use <code>&lt;main&gt;</code> here.',
        text: 'test',
        testString: 'test'
      }
    ];
    const secondFailingTests: Test[] = [
      {
        pass: false,
        err: 'Use <code>&lt;main&gt;</code> here.',
        message: 'Use <code>&lt;main&gt;</code> here.',
        text: 'test',
        testString: 'test'
      }
    ];

    const { rerender } = render(
      <IndependentLowerJaw {...baseProps} tests={firstFailingTests} />,
      createStore()
    );

    expect(getLiveRegion()).toHaveTextContent('');

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent('Use <main> here.')
    );

    rerender(
      <IndependentLowerJaw
        {...baseProps}
        attempts={1}
        tests={secondFailingTests}
      />
    );

    expect(getLiveRegion()).toHaveTextContent('');

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent('Use <main> here.')
    );

    rerender(
      <IndependentLowerJaw
        {...baseProps}
        attempts={2}
        tests={thirdFailingTests}
      />
    );

    expect(getLiveRegion()).toHaveTextContent('');

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent('Use <main> here.')
    );
  });

  it('announces completion text through a hidden live region', async () => {
    render(<IndependentLowerJaw {...baseProps} />, createStore());

    expect(getLiveRegion()).toHaveTextContent('');

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent(
        /learn\.congratulations-code-passes .* learn\.percent-complete/
      )
    );
  });

  it('does not reset the completion live region on passing rerenders', async () => {
    const firstPassingTests: Test[] = [
      { pass: true, text: 'test', testString: 'test' }
    ];
    const secondPassingTests: Test[] = [
      { pass: true, text: 'test', testString: 'test' }
    ];

    const { rerender } = render(
      <IndependentLowerJaw {...baseProps} tests={firstPassingTests} />,
      createStore()
    );

    await waitFor(() =>
      expect(getLiveRegion()).toHaveTextContent(
        /learn\.congratulations-code-passes .* learn\.percent-complete/
      )
    );

    rerender(<IndependentLowerJaw {...baseProps} tests={secondPassingTests} />);

    expect(getLiveRegion()).toHaveTextContent(
      /learn\.congratulations-code-passes .* learn\.percent-complete/
    );
  });
});
