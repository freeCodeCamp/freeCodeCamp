import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../redux/create-store';
import type { GeneratedExamResults } from '../../redux/prop-types';
import { openModal } from '../../templates/Challenges/redux/actions';
import ExamResultsModal from './exam-results-modal';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (
      key: string,
      options?: {
        n?: number;
        projectTitle?: string;
        t?: string;
      }
    ) => {
      switch (key) {
        case 'settings.labels.results-for':
          return `Results for ${options?.projectTitle}`;
        case 'learn.exam.number-of-questions':
          return `Number of questions: ${options?.n}`;
        case 'learn.exam.correct-answers':
          return `Correct answers: ${options?.n}`;
        case 'learn.exam.percent-correct':
          return `Percent correct: ${options?.n}%`;
        case 'learn.exam.time':
          return `Time: ${options?.t}`;
        case 'buttons.close':
          return 'Close';
        default:
          return key;
      }
    }
  })
}));

vi.mock('../../utils/get-words');

const projectTitle = 'Foundational C# with Microsoft Certification Exam';

const examResults: GeneratedExamResults = {
  numberOfQuestionsInExam: 80,
  numberOfCorrectAnswers: 70,
  percentCorrect: 87.5,
  examTimeInSeconds: 2195,
  passingPercent: 70,
  passed: true
};

const originalResizeObserver = globalThis.ResizeObserver;

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverMock;
});

afterAll(() => {
  globalThis.ResizeObserver = originalResizeObserver;
});

function createTestStore(isOpen = true) {
  const store = createStore();

  if (isOpen) {
    store.dispatch(openModal('examResults'));
  }

  return store;
}

function renderExamResultsModal({
  results = examResults,
  isOpen = true
}: {
  results?: GeneratedExamResults | null;
  isOpen?: boolean;
} = {}) {
  const store = createTestStore(isOpen);

  render(
    <Provider store={store}>
      <ExamResultsModal projectTitle={projectTitle} examResults={results} />
    </Provider>
  );
}

describe('<ExamResultsModal />', () => {
  it('renders exam results when open', () => {
    renderExamResultsModal();

    expect(
      screen.getByRole('dialog', {
        name: `Results for ${projectTitle}`
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Number of questions: 80')).toBeInTheDocument();
    expect(screen.getByText('Correct answers: 70')).toBeInTheDocument();
    expect(screen.getByText('Percent correct: 87.5%')).toBeInTheDocument();
    expect(screen.getByText('Time: 36:35')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Close' })).toHaveLength(2);
  });

  it('does not render when there are no exam results', () => {
    renderExamResultsModal({ results: null });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes when the header close button is clicked', async () => {
    const user = userEvent.setup();
    renderExamResultsModal();

    await user.click(screen.getAllByRole('button', { name: 'Close' })[0]);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes when the footer close button is clicked', async () => {
    const user = userEvent.setup();
    renderExamResultsModal();

    await user.click(screen.getAllByRole('button', { name: 'Close' })[1]);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
