import React from 'react';
import { render, screen } from '@testing-library/react';
import Helmet from 'react-helmet';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import i18nTestConfig from '../../i18n/config-for-tests';
import introTranslations from '../../i18n/locales/english/intro.json';
import metaTagsTranslations from '../../i18n/locales/english/meta-tags.json';
import translations from '../../i18n/locales/english/translations.json';
import { createStore } from '../redux/create-store';
import { initialState } from '../redux';
import { randomQuote } from '../utils/get-words';
import LearnPage from './learn';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'metaTags',
  metaTagsTranslations,
  true,
  true
);

const pageTitle = metaTagsTranslations.title;
const signedOutCta = translations.buttons['logged-out-cta-btn'];
const signedInHeading = i18nTestConfig.t('learn.welcome-1', {
  name: 'Full Stack User'
});

vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => ({ on: false, value: undefined }),
  useFeatureIsOn: () => false
}));

vi.mock('../analytics/call-ga', () => ({
  default: vi.fn()
}));

vi.mock('../utils/get-words');

const pageData = {
  challengeNode: {
    challenge: {
      fields: {
        slug: '/learn/responsive-web-design/'
      }
    }
  }
};

function renderLearnPage(sessionUser: Record<string, unknown> | null) {
  const store = createStore({
    app: {
      ...initialState,
      user: {
        ...initialState.user,
        sessionUser
      },
      userFetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      }
    }
  });

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <LearnPage data={pageData} state={{}} />
      </I18nextProvider>
    </Provider>
  );
}

describe('LearnPage', () => {
  beforeEach(() => {
    vi.mocked(randomQuote).mockReturnValue({
      quote: 'Test quote',
      author: 'Test author'
    });
  });

  it('renders the signed-out learn page', () => {
    renderLearnPage(null);

    expect(Helmet.peek().title).toBe(pageTitle);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: translations.learn.heading
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: signedOutCta })).toHaveAttribute(
      'href',
      expect.stringMatching(/\/signin$/)
    );
    expect(screen.queryByTestId('quote-block')).not.toBeInTheDocument();
  });

  it('renders the signed-in learn page with a motivational quote', () => {
    renderLearnPage({
      name: 'Full Stack User',
      username: 'FullStackUser',
      completedChallengeCount: 0,
      completedChallenges: [],
      sendQuincyEmail: null,
      isDonating: false
    });

    expect(Helmet.peek().title).toBe(pageTitle);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: signedInHeading
      })
    ).toBeInTheDocument();
    expect(randomQuote).toHaveBeenCalledOnce();
    expect(screen.getByText('Test quote')).toBeInTheDocument();
    expect(screen.getByText('Test author')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: signedOutCta })
    ).not.toBeInTheDocument();
  });
});
