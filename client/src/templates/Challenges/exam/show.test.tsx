import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen, waitFor } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../../i18n/locales/english/intro.json';
import translations from '../../../../i18n/locales/english/translations.json';
import type { ChallengeMeta, ChallengeNode } from '../../../redux/prop-types';
import ShowExam from './show';

vi.mock('gatsby', async () => {
  const actual = await vi.importActual<typeof import('gatsby')>('gatsby');
  return {
    ...actual,
    graphql: vi.fn(),
    navigate: vi.fn(),
    useStaticQuery: vi.fn()
  };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t }),
  withTranslation: () => (Component: React.ComponentType<{ t: typeof t }>) =>
    function TranslatedComponent(props: object) {
      return <Component {...props} t={t} />;
    }
}));

vi.mock('../../../components/layouts/learn', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <main>{children}</main>
  )
}));

vi.mock('../components/completion-modal', () => ({
  default: () => null
}));

vi.mock('../components/help-modal', () => ({
  default: () => null
}));

vi.mock('../components/hotkeys', () => ({
  default: ({ children }: { children: React.ReactNode }) => children
}));

vi.mock('../utils/fetch-all-curriculum-data', () => ({
  useSubmit: () => vi.fn()
}));

function getTranslation(source: unknown, key: string) {
  const value = key
    .split('.')
    .reduce<unknown>(
      (translation, path) =>
        typeof translation === 'object' && translation !== null
          ? (translation as Record<string, unknown>)[path]
          : undefined,
      source
    );

  return typeof value === 'string' ? value : key;
}

function t(key: string) {
  if (key.startsWith('intro:')) {
    return getTranslation(introTranslations, key.replace('intro:', ''));
  }

  return getTranslation(translations, key);
}

const examBlock = 'foundational-c-sharp-with-microsoft-certification-exam';
const examTitle = t(
  `intro:${SuperBlocks.FoundationalCSharp}.blocks.${examBlock}.title`
);
const examDescription =
  'Pass this exam to earn your Foundational C# with Microsoft Certification. Before starting the exam, please review the following guidelines:';
const prerequisite = {
  id: '647f85d407d29547b3bee1bb',
  title: 'Write Your First C# Code',
  slug: '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/'
};

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
    }
  });

  const store = createStore(() => ({
    app: {
      examInProgress: false,
      user: {
        sessionUser: {
          completedChallenges,
          completedSurveys,
          examResults: null
        }
      }
    },
    challenge: {
      challengeMeta: {
        id: data.challengeNode.challenge.id
      }
    }
  }));

  render(
    <Provider store={store}>
      <ShowExam
        data={data as { challengeNode: ChallengeNode }}
        pageContext={pageContext}
      />
    </Provider>
  );
}

describe('<ShowExam /> non-qualified state', () => {
  it('renders the non-qualified exam page with a disabled start button', async () => {
    renderShowExam();

    await waitFor(() =>
      expect(document.title).toBe(
        `${examTitle}: ${examTitle} | freeCodeCamp.org`
      )
    );
    expect(
      screen.getByRole('heading', { level: 1, name: examTitle })
    ).toBeInTheDocument();
    expect(
      screen.queryByText(t('learn.exam.qualified'))
    ).not.toBeInTheDocument();
    expect(screen.getByText(t('learn.exam.not-qualified'))).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: prerequisite.title })
    ).toHaveAttribute('href', prerequisite.slug);
    expect(screen.getByText(examDescription)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: t('buttons.click-start-exam') })
    ).toHaveAttribute('aria-disabled', 'true');
  });
});

describe('<ShowExam /> qualified state', () => {
  it('renders the qualified exam page with an enabled start button', async () => {
    renderShowExam({
      completedChallenges: [{ id: prerequisite.id }],
      completedSurveys: [{ title: t('survey.foundational-c-sharp.title') }]
    });

    await waitFor(() =>
      expect(document.title).toBe(
        `${examTitle}: ${examTitle} | freeCodeCamp.org`
      )
    );
    expect(
      screen.getByRole('heading', { level: 1, name: examTitle })
    ).toBeInTheDocument();
    expect(screen.getByText(t('learn.exam.qualified'))).toBeInTheDocument();
    expect(
      screen.queryByText(t('learn.exam.not-qualified'))
    ).not.toBeInTheDocument();
    expect(screen.getByText(examDescription)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: t('buttons.click-start-exam') })
    ).not.toHaveAttribute('aria-disabled', 'true');
  });
});
