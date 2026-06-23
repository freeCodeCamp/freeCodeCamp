import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen, waitFor } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { describe, expect, it, vi } from 'vitest';

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

function t(key: string) {
  const translations: Record<string, string> = {
    'intro:foundational-c-sharp-with-microsoft.blocks.foundational-c-sharp-with-microsoft-certification-exam.title':
      'Foundational C# with Microsoft Certification Exam',
    'buttons.click-start-exam': 'Click here to start the exam',
    'learn.exam.not-qualified':
      'You have not met the requirements to be eligible for the exam. To qualify, please complete the following challenges:'
  };

  return translations[key] ?? key;
}

const examTitle = 'Foundational C# with Microsoft Certification Exam';
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
      block: 'foundational-c-sharp-with-microsoft-certification-exam',
      challengeType: 5,
      dashedName: 'foundational-c-sharp-with-microsoft-certification-exam',
      description:
        'Pass this exam to earn your Foundational C# with Microsoft Certification. Before starting the exam, please review the following guidelines:',
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
    block: 'foundational-c-sharp-with-microsoft-certification-exam',
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

function renderShowExam() {
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
          completedChallenges: [],
          completedSurveys: [],
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
    expect(screen.queryByText('learn.exam.qualified')).not.toBeInTheDocument();
    expect(screen.getByText(t('learn.exam.not-qualified'))).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: prerequisite.title })
    ).toHaveAttribute('href', prerequisite.slug);
    expect(
      screen.getByText(
        'Pass this exam to earn your Foundational C# with Microsoft Certification. Before starting the exam, please review the following guidelines:'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Click here to start the exam' })
    ).toHaveAttribute('aria-disabled', 'true');
  });
});
