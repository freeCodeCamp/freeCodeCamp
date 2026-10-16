import React from 'react';
import { Provider } from 'react-redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { initialState as appInitialState } from '../../../redux';
import { createStore } from '../../../redux/create-store';
import type {
  ChallengeMeta,
  ChallengeNode,
  GeneratedExamQuestion
} from '../../../redux/prop-types';
import { getGenerateExam } from '../../../utils/ajax';
import ShowExam from './show';

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

vi.mock('../../../utils/ajax', async () => {
  const actual = await vi.importActual<typeof import('../../../utils/ajax')>(
    '../../../utils/ajax'
  );

  return {
    ...actual,
    getGenerateExam: vi.fn()
  };
});

vi.mock('../../../utils/get-words');

const examBlock = 'foundational-c-sharp-with-microsoft-certification-exam';
const examTitle = t(
  `intro:${SuperBlocks.FoundationalCSharp}.blocks.${examBlock}.title`
);
const windowTitle = `${examTitle}: ${examTitle} | freeCodeCamp.org`;
const examDescription =
  'Pass this exam to earn your Foundational C# with Microsoft Certification. Before starting the exam, please review the following guidelines:';
const prerequisite = {
  id: '647f85d407d29547b3bee1bb',
  title: 'Write Your First C# Code',
  slug: '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/'
};
const completedExamRequirements = {
  completedChallenges: [{ id: prerequisite.id }],
  completedSurveys: [{ title: t('survey.foundational-c-sharp.title') }]
};

const generatedExam: GeneratedExamQuestion[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: `exam-question-${index + 1}`,
    question: `Question ${index + 1}?`,
    answers: [
      {
        id: `exam-question-${index + 1}-answer-1`,
        answer: `Answer 1 for question ${index + 1}`
      },
      {
        id: `exam-question-${index + 1}-answer-2`,
        answer: `Answer 2 for question ${index + 1}`
      }
    ]
  })
);

const data: {
  challengeNode: { challenge: Partial<ChallengeNode['challenge']> };
} = {
  challengeNode: {
    challenge: {
      block: examBlock,
      challengeType: 5,
      dashedName: examBlock,
      description: examDescription,
      fields: {
        blockHashSlug:
          '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/',
        slug: '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam'
      },
      helpCategory: 'Exam',
      id: '647e22d18acb466c97ccbef8',
      instructions: '',
      prerequisites: [prerequisite],
      superBlock: SuperBlocks.FoundationalCSharp,
      tests: [],
      title: examTitle,
      translationPending: false
    }
  }
};

const pageContext: { challengeMeta: ChallengeMeta } = {
  challengeMeta: {
    block: examBlock,
    challengeType: 5,
    id: '647e22d18acb466c97ccbef8',
    disableLoopProtectPreview: false,
    disableLoopProtectTests: false,
    helpCategory: 'Exam',
    isFirstStep: false,
    nextChallengePath: '/',
    prevChallengePath: '/',
    saveSubmissionToDB: false,
    superBlock: SuperBlocks.FoundationalCSharp,
    title: examTitle
  }
};

function renderShowExam({
  completedChallenges = [],
  completedSurveys = []
}: {
  completedChallenges?: { id: string }[];
  completedSurveys?: { title: string }[];
} = {}) {
  vi.mocked(useStaticQuery).mockReturnValue({
    allChallengeNode: {
      nodes: [
        {
          challenge: {
            block: examBlock,
            id: pageContext.challengeMeta.id
          }
        }
      ],
      edges: [
        {
          node: {
            challenge: {
              id: prerequisite.id,
              title: prerequisite.title,
              fields: {
                slug: prerequisite.slug
              }
            }
          }
        }
      ]
    },
    allCertificateNode: {
      nodes: []
    },
    allSuperBlockStructure: {
      nodes: []
    }
  });
  vi.mocked(getGenerateExam).mockResolvedValue({
    response: new Response(null, { status: 200 }),
    data: { generatedExam }
  });

  const store = createStore({
    app: {
      ...appInitialState,
      examInProgress: false,
      user: {
        ...appInitialState.user,
        sessionUser: {
          completedChallenges,
          completedSurveys,
          examResults: null
        }
      }
    }
  });

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <ShowExam
          data={data as { challengeNode: ChallengeNode }}
          pageContext={pageContext}
        />
      </I18nextProvider>
    </Provider>
  );
}

async function startExam() {
  const user = userEvent.setup();

  renderShowExam(completedExamRequirements);

  await user.click(getButton('buttons.click-start-exam'));

  await screen.findByText(getQuestionNumberText(1));

  return user;
}

async function expectExamLandingPage(qualification: 'qualified' | 'blocked') {
  await waitFor(() => expect(document.title).toBe(windowTitle));
  expect(
    screen.getByRole('heading', { level: 1, name: examTitle })
  ).toBeInTheDocument();
  expect(screen.getByText(examDescription)).toBeInTheDocument();

  if (qualification === 'qualified') {
    expect(screen.getByText(t('learn.exam.qualified'))).toBeInTheDocument();
    expect(
      screen.queryByText(t('learn.exam.not-qualified'))
    ).not.toBeInTheDocument();
    expect(getButton('buttons.click-start-exam')).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    return;
  }

  expect(screen.queryByText(t('learn.exam.qualified'))).not.toBeInTheDocument();
  expect(screen.getByText(t('learn.exam.not-qualified'))).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: prerequisite.title })
  ).toHaveAttribute('href', prerequisite.slug);
  expect(getButton('buttons.click-start-exam')).toHaveAttribute(
    'aria-disabled',
    'true'
  );
}

function expectStartedExamHeader() {
  expect(document.title).toBe(windowTitle);
  expect(screen.getByText(examTitle)).toBeInTheDocument();
  expect(
    screen.getByText(t('learn.exam.time', { t: '0:00' }))
  ).toBeInTheDocument();
}

function getQuestionNumberText(questionNumber: number) {
  return t('learn.exam.questions', {
    n: questionNumber,
    t: generatedExam.length
  });
}

function expectQuestionNumber(questionNumber: number) {
  expect(
    screen.getByText(getQuestionNumberText(questionNumber))
  ).toBeInTheDocument();
}

function getButton(translationKey: string) {
  return screen.getByRole('button', { name: t(translationKey) });
}

function queryButton(translationKey: string) {
  return screen.queryByRole('button', { name: t(translationKey) });
}

async function answerCurrentQuestion(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getAllByRole('radio')[0]);
}

async function answerCurrentQuestionAndGoNext(
  user: ReturnType<typeof userEvent.setup>
) {
  await answerCurrentQuestion(user);
  await user.click(getButton('buttons.next-question'));
}

describe('<ShowExam /> non-qualified state', () => {
  it('renders the non-qualified exam page with a disabled start button', async () => {
    expect.hasAssertions();
    renderShowExam();

    await expectExamLandingPage('blocked');
  });
});

describe('<ShowExam /> qualified state', () => {
  it('renders the qualified exam page with an enabled start button', async () => {
    expect.hasAssertions();
    renderShowExam(completedExamRequirements);

    await expectExamLandingPage('qualified');
  });
});

describe('<ShowExam /> started exam state', () => {
  it('renders the started exam page and moves through the questions', async () => {
    const user = await startExam();

    expectStartedExamHeader();
    expectQuestionNumber(1);
    expect(getButton('buttons.previous-question')).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    await answerCurrentQuestionAndGoNext(user);

    for (
      let questionNumber = 2;
      questionNumber < generatedExam.length;
      questionNumber++
    ) {
      expectQuestionNumber(questionNumber);
      expect(getButton('buttons.previous-question')).not.toHaveAttribute(
        'aria-disabled',
        'true'
      );
      expect(getButton('buttons.exit-exam')).not.toHaveAttribute(
        'aria-disabled',
        'true'
      );
      expect(queryButton('buttons.finish-exam')).not.toBeInTheDocument();
      await answerCurrentQuestionAndGoNext(user);
    }

    expectQuestionNumber(generatedExam.length);
    expect(getButton('buttons.previous-question')).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    await answerCurrentQuestion(user);
    expect(queryButton('buttons.next-question')).not.toBeInTheDocument();
    expect(getButton('buttons.finish-exam')).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('moves back to the previous question', async () => {
    expect.hasAssertions();
    const user = await startExam();

    await answerCurrentQuestionAndGoNext(user);

    expectQuestionNumber(2);

    await user.click(getButton('buttons.previous-question'));

    expectQuestionNumber(1);
  });
});
