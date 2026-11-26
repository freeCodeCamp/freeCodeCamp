import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { initialState as appInitialState } from '../../../redux';
import { createStore } from '../../../redux/create-store';
import type { ChallengeMeta, ChallengeNode } from '../../../redux/prop-types';
import ShowGeneric, { Head } from './show';

vi.mock('../../../components/page-head', () => ({
  default: ({ title, noindex }: { title: string; noindex?: boolean }) => (
    <>
      <title>{title}</title>
      {noindex && <meta name='robots' content='noindex' />}
    </>
  )
}));

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

vi.mock('../../../utils/get-words');

// Fixture data from the 'Write Your First C# Code' challenge
// (curriculum/challenges/english/blocks/write-your-first-code-using-c-sharp/647e239e8acb466c97ccbf05.md)
const challengeId = '647e239e8acb466c97ccbf05';
const challengeBlock = 'write-your-first-code-using-c-sharp';
const challengeTitle = 'Write Your First C# Code';
const windowTitle =
  'Write Your First Code Using C# - Write Your First C# Code | Learn | freeCodeCamp.org';

const data: {
  challengeNode: { challenge: Partial<ChallengeNode['challenge']> };
} = {
  challengeNode: {
    challenge: {
      assignments: [
        'Complete the <a href="https://learn.microsoft.com/training/modules/csharp-write-first/" target="_blank" rel="noreferrer">Write Your First C# Code</a> module on Microsoft Learn. Then, answer the question below.'
      ],
      block: challengeBlock,
      challengeType: 19,
      description:
        '<p>This challenge will be partially completed on the Microsoft Learn platform.</p>',
      explanation: '',
      fields: {
        blockHashSlug:
          '/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp',
        slug: '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code'
      },
      helpCategory: 'C-Sharp',
      id: challengeId,
      instructions: '',
      questions: [
        {
          text: 'What is the difference between <code>Console.Write</code> and <code>Console.WriteLine</code>?',
          answers: [
            {
              answer:
                '<code>Console.Write</code> prints the output on a new line.',
              feedback: null,
              audioId: null
            },
            {
              answer:
                '<code>Console.WriteLine</code> prints the output on a new line.',
              feedback: null,
              audioId: null
            },
            {
              answer:
                '<code>Console.WriteLine</code> appends a new line after the output.',
              feedback: null,
              audioId: null
            }
          ],
          solution: 3
        }
      ],
      superBlock: SuperBlocks.FoundationalCSharp,
      tests: [],
      title: challengeTitle,
      translationPending: false
    }
  }
};

const pageContext: { challengeMeta: ChallengeMeta } = {
  challengeMeta: {
    block: challengeBlock,
    challengeType: 19,
    id: challengeId,
    disableLoopProtectPreview: false,
    disableLoopProtectTests: false,
    helpCategory: 'C-Sharp',
    isFirstStep: false,
    nextChallengePath: '/',
    prevChallengePath: '/',
    saveSubmissionToDB: false,
    superBlock: SuperBlocks.FoundationalCSharp,
    title: challengeTitle
  }
};

function expectPageHead() {
  const view = renderToStaticMarkup(
    <I18nextProvider i18n={i18nTestConfig}>
      <Head {...({ data } as Parameters<typeof Head>[0])} />
    </I18nextProvider>
  );
  expect(view).toContain(`<title>${windowTitle}</title>`);
  expect(view).toContain('name="robots" content="noindex"');
}

function renderShowGeneric({
  completedChallenges = []
}: {
  completedChallenges?: { id: string }[];
} = {}) {
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
    allCertificateNode: {
      nodes: []
    },
    allSuperBlockStructure: {
      nodes: []
    }
  });

  const store = createStore({
    app: {
      ...appInitialState,
      user: {
        ...appInitialState.user,
        sessionUser: {
          completedChallenges
        }
      }
    }
  });

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <ShowGeneric
          data={data as { challengeNode: ChallengeNode }}
          pageContext={pageContext}
        />
      </I18nextProvider>
    </Provider>
  );
}

function expectChallengePageContent() {
  expectPageHead();

  expect(
    screen.getByRole('heading', { level: 1, name: challengeTitle })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: t('buttons.check-answer') })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: t('buttons.ask-for-help') })
  ).toBeInTheDocument();
}

describe('<ShowGeneric />', () => {
  it('renders the challenge without the completed icon when the challenge is not completed', () => {
    expect.hasAssertions();
    renderShowGeneric();

    expectChallengePageContent();

    expect(screen.queryByTestId('green-pass')).not.toBeInTheDocument();
  });

  it('renders the challenge with the completed icon when the challenge is completed', () => {
    expect.hasAssertions();
    renderShowGeneric({ completedChallenges: [{ id: challengeId }] });

    expectChallengePageContent();

    expect(screen.getByTestId('green-pass')).toHaveAccessibleName(
      t('icons.passed')
    );
  });
});
