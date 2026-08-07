import React from 'react';
import { Provider } from 'react-redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import MultipleChoiceQuestions from './multiple-choice-questions';

vi.mock('../../../utils/get-words');

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

const questionsWithAudio = [
  {
    text: '<p>Repeat the sentence.</p>',
    solution: 1,
    answers: [
      {
        answer: '<p>First spoken answer.</p>',
        feedback: null,
        audioId: 'first-answer'
      },
      {
        answer: '<p>Second spoken answer.</p>',
        feedback: null,
        audioId: 'second-answer'
      }
    ]
  }
];

const questionsWithoutAudio = Array.from({ length: 3 }, (_, questionIndex) => ({
  text: `<p>Question ${questionIndex + 1}</p>`,
  solution: 1,
  answers: Array.from({ length: 4 }, (_, answerIndex) => ({
    answer: `<p>Question ${questionIndex + 1} answer ${answerIndex + 1}</p>`,
    feedback: null,
    audioId: null
  }))
}));

function renderQuestions({
  questions = questionsWithAudio,
  selectedOptions = questions.map(() => null),
  submittedMcqAnswers = questions.map(() => null),
  showFeedback = false
}: Partial<React.ComponentProps<typeof MultipleChoiceQuestions>> = {}) {
  const store = createStore();
  const handleOptionChange = vi.fn();

  render(
    <Provider store={store}>
      <MultipleChoiceQuestions
        questions={questions}
        selectedOptions={selectedOptions}
        handleOptionChange={handleOptionChange}
        submittedMcqAnswers={submittedMcqAnswers}
        showFeedback={showFeedback}
        superBlock={SuperBlocks.B1English}
      />
    </Provider>
  );

  return { handleOptionChange, store };
}

describe('MultipleChoiceQuestions', () => {
  it('renders speaking controls for answers with audio', async () => {
    const user = userEvent.setup();
    const { store } = renderQuestions();

    expect(screen.getAllByRole('radio')).toHaveLength(2);

    const speakingButtons = screen.getAllByRole('button', {
      name: 'speaking-modal.speaking-button'
    });
    expect(speakingButtons).toHaveLength(2);

    expect(speakingButtons[0]).toHaveAttribute(
      'aria-describedby',
      'mc-question-0-answer-0-label'
    );
    expect(speakingButtons[1]).toHaveAttribute(
      'aria-describedby',
      'mc-question-0-answer-1-label'
    );

    await user.click(speakingButtons[0]);

    expect(store.getState().challenge.modal.speaking).toBe(true);
  });

  it('does not render speaking controls for answers without audio', () => {
    renderQuestions({ questions: questionsWithoutAudio });

    expect(screen.getAllByRole('radio')).toHaveLength(12);
    expect(
      screen.queryByRole('button', {
        name: 'speaking-modal.speaking-button'
      })
    ).not.toBeInTheDocument();
  });
});
