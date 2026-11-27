import React from 'react';
import { Provider } from 'react-redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest';

import introTranslations from '../../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { initialState as appInitialState } from '../../../redux';
import { createStore } from '../../../redux/create-store';
import type { ChallengeMeta, ChallengeNode } from '../../../redux/prop-types';
import ShowQuiz from './show';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
const t = i18nTestConfig.t.bind(i18nTestConfig);

vi.mock('../../../components/layouts/learn', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <main>{children}</main>
  )
}));

vi.mock('../../../components/Progress', () => ({
  default: () => <div data-testid='progress-bar-container' />
}));

vi.mock('../../../analytics');
vi.mock('../../../utils/get-words');
vi.mock('../hooks', () => ({
  usePageLeave: vi.fn()
}));

const challengeId = 'quiz-test-id';
const challengeBlock = 'quiz-basic-html';
const challengeTitle = 'Basic HTML Quiz';

const data: {
  challengeNode: { challenge: Partial<ChallengeNode['challenge']> };
} = {
  challengeNode: {
    challenge: {
      block: challengeBlock,
      challengeType: 8,
      description: '<p>Test your HTML knowledge.</p>',
      fields: {
        blockHashSlug: '/learn/responsive-web-design/#quiz-basic-html',
        slug: '/learn/responsive-web-design/quiz-basic-html/basic-html-quiz'
      },
      helpCategory: 'HTML-CSS',
      id: challengeId,
      quizzes: [
        {
          questions: [
            {
              text: '<p>What does HTML stand for?</p>',
              distractors: [
                '<p>Wrong option A</p>',
                '<p>Wrong option B</p>',
                '<p>Wrong option C</p>'
              ],
              answer: '<p>HyperText Markup Language</p>',
              audioData: null
            }
          ]
        }
      ],
      superBlock: SuperBlocks.FullStackDeveloperV9,
      tests: [],
      title: challengeTitle,
      translationPending: false
    }
  }
};

const pageContext: { challengeMeta: ChallengeMeta } = {
  challengeMeta: {
    block: challengeBlock,
    challengeType: 8,
    id: challengeId,
    disableLoopProtectPreview: false,
    disableLoopProtectTests: false,
    helpCategory: 'HTML-CSS',
    isFirstStep: false,
    nextChallengePath: '/',
    prevChallengePath: '/',
    saveSubmissionToDB: false,
    superBlock: SuperBlocks.FullStackDeveloperV9,
    title: challengeTitle
  }
};

function renderShowQuiz() {
  vi.mocked(useStaticQuery).mockReturnValue({
    allChallengeNode: {
      nodes: [
        {
          challenge: {
            block: challengeBlock,
            id: challengeId
          }
        }
      ]
    },
    allCertificateNode: { nodes: [] },
    allSuperBlockStructure: { nodes: [] }
  });

  const store = createStore({
    app: {
      ...appInitialState
    }
  });

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <ShowQuiz
          data={data as { challengeNode: ChallengeNode }}
          pageContext={pageContext}
        />
      </I18nextProvider>
    </Provider>
  );
}

describe('<ShowQuiz /> screen reader score announcement', () => {
  beforeAll(() => {
    if (!globalThis.ResizeObserver) {
      globalThis.ResizeObserver = class ResizeObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
      };
    }
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('announces unanswered questions immediately in the polite live region', () => {
    renderShowQuiz();

    fireEvent.click(
      screen.getByRole('button', { name: t('buttons.finish-quiz') })
    );

    const expected = t('learn.quiz.unanswered-questions', {
      unansweredQuestions: '1'
    });
    const alertNode = screen.getByText(expected);
    expect(alertNode).toHaveAttribute('aria-live', 'polite');
    expect(alertNode).toHaveAttribute('aria-atomic', 'true');
  });

  it('moves focus to and announces the score in the live region after failing and closing FinishQuizModal', async () => {
    renderShowQuiz();

    fireEvent.click(screen.getByLabelText('Wrong option A'));
    fireEvent.click(
      screen.getByRole('button', { name: t('buttons.finish-quiz') })
    );

    const confirmBtn = await screen.findByRole('button', {
      name: t('learn.quiz.finish-modal-yes')
    });
    fireEvent.click(confirmBtn);

    const expectedScore = t('learn.quiz.have-n-correct-questions', {
      correctAnswerCount: 0,
      total: 1
    });

    await waitFor(() => expect(screen.getByText(expectedScore)).toHaveFocus());
    const scoreEl = screen.getByText(expectedScore);
    expect(scoreEl).toHaveAttribute('aria-live', 'polite');
    expect(scoreEl).toHaveAttribute('aria-atomic', 'true');
  });

  it('announces the passing score inside CompletionModal when the quiz is passed', async () => {
    renderShowQuiz();

    fireEvent.click(screen.getByLabelText('HyperText Markup Language'));
    fireEvent.click(
      screen.getByRole('button', { name: t('buttons.finish-quiz') })
    );

    const confirmBtn = await screen.findByRole('button', {
      name: t('learn.quiz.finish-modal-yes')
    });
    fireEvent.click(confirmBtn);

    const expectedScore = t('learn.quiz.have-n-correct-questions', {
      correctAnswerCount: 1,
      total: 1
    });

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(expectedScore)
    );
    const scoreStatus = screen.getByRole('status');
    expect(scoreStatus).toHaveAttribute('aria-live', 'polite');
    expect(scoreStatus).toHaveAttribute('aria-atomic', 'true');
  });
});
