import React from 'react';
import { Provider } from 'react-redux';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { initialState as appInitialState } from '../../../redux';
import { createStore } from '../../../redux/create-store';
import type { ChallengeMeta, ChallengeNode } from '../../../redux/prop-types';
import MsTrophy from './show';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

vi.mock('../../../analytics/call-ga');
vi.mock('../../../utils/get-words');

vi.mock('../../../components/layouts/learn', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <main>{children}</main>
  )
}));

vi.mock('../utils/fetch-all-curriculum-data', async () => {
  const actual = await vi.importActual<
    typeof import('../utils/fetch-all-curriculum-data')
  >('../utils/fetch-all-curriculum-data');

  return {
    ...actual,
    useSubmit: () => vi.fn()
  };
});

type ResizeObserverMockInstance = {
  observe: ResizeObserver['observe'];
  unobserve: ResizeObserver['unobserve'];
  disconnect: ResizeObserver['disconnect'];
};

beforeAll(() => {
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: vi.fn(function (
      this: ResizeObserverMockInstance,
      _cb: ResizeObserverCallback
    ) {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
    })
  });
});

const block = 'write-your-first-code-using-c-sharp';
const title = 'Trophy - Write Your First Code Using C#';
const description =
  'Verify that you earned the Write Your First Code Using C# trophy on Microsoft Learn.';
const blockTitle = i18nTestConfig.t(
  `intro:${SuperBlocks.FoundationalCSharp}.blocks.${block}.title`
);
const windowTitle = `${blockTitle} - ${title} | ${i18nTestConfig.t(
  'learn.learn'
)} | freeCodeCamp.org`;

const data: {
  challengeNode: { challenge: Partial<ChallengeNode['challenge']> };
} = {
  challengeNode: {
    challenge: {
      block,
      challengeType: 7,
      description,
      helpCategory: 'C-Sharp',
      id: '647f85d407d29547b3bee1bb',
      instructions: '',
      superBlock: SuperBlocks.FoundationalCSharp,
      tests: [],
      title,
      translationPending: false
    }
  }
};

const pageContext: { challengeMeta: ChallengeMeta } = {
  challengeMeta: {
    block,
    challengeType: 7,
    disableLoopProtectPreview: false,
    disableLoopProtectTests: false,
    helpCategory: 'C-Sharp',
    id: '647f85d407d29547b3bee1bb',
    isFirstStep: false,
    nextChallengePath: '/',
    prevChallengePath: '/',
    saveSubmissionToDB: false,
    superBlock: SuperBlocks.FoundationalCSharp,
    title
  }
};

function renderMsTrophy() {
  const store = createStore({
    app: {
      ...appInitialState,
      userFetchState: {
        pending: false,
        complete: true,
        errored: false
      }
    }
  });

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <MsTrophy
          data={data as { challengeNode: ChallengeNode }}
          pageContext={pageContext}
        />
      </I18nextProvider>
    </Provider>
  );
}

describe('MsTrophy', () => {
  it('renders the trophy page title, description, and disabled verify button', async () => {
    renderMsTrophy();

    await waitFor(() => expect(document.title).toBe(windowTitle));
    expect(
      screen.getByRole('heading', { level: 1, name: title })
    ).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: translations.buttons['verify-trophy']
      })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('opens the help modal from the trophy page', async () => {
    const user = userEvent.setup();
    renderMsTrophy();

    await user.click(
      screen.getByRole('button', {
        name: translations.buttons['ask-for-help']
      })
    );

    expect(
      screen.getByRole('heading', {
        name: translations.buttons['get-help']
      })
    ).toBeInTheDocument();
  });
});
