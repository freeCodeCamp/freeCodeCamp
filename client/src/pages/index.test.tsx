import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getStageOrder,
  SuperBlockStage,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';

import envData from '../../config/env.json';
import i18nTestConfig from '../../i18n/config-for-tests';
import introTranslations from '../../i18n/locales/english/intro.json';
import translations from '../../i18n/locales/english/translations.json';
import { createStore } from '../redux/create-store';
import { initialState } from '../redux';
import IndexPage from './index';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);

const growthBookMocks = vi.hoisted(() => {
  const getFeatureValue = vi.fn();

  return {
    getFeatureValue,
    useFeature: vi.fn(),
    useGrowthBook: vi.fn(() => ({
      ready: true,
      getFeatureValue
    }))
  };
});

vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: growthBookMocks.useFeature,
  useGrowthBook: growthBookMocks.useGrowthBook
}));

vi.mock('react-responsive', () => ({
  default: ({ children }: { children: React.ReactNode }) => children
}));

vi.mock('../analytics/call-ga', () => ({
  default: vi.fn()
}));

vi.mock('../components/seo', () => ({
  default: ({ children }: { children?: React.ReactNode }) => children
}));

vi.mock('../utils/get-words');

const { showUpcomingChanges } = envData as { showUpcomingChanges: boolean };

const expectedLandingSuperBlocks = getStageOrder({ showUpcomingChanges })
  .filter(
    stage =>
      stage !== SuperBlockStage.Legacy && stage !== SuperBlockStage.Catalog
  )
  .flatMap(stage => superBlockStages[stage]);

function renderLanding({
  growthBookReady = true,
  showTwoButtonCTA = false
}: {
  growthBookReady?: boolean;
  showTwoButtonCTA?: boolean;
} = {}) {
  growthBookMocks.useFeature.mockReturnValue({
    on: showTwoButtonCTA
  });
  growthBookMocks.useGrowthBook.mockReturnValue({
    ready: growthBookReady,
    getFeatureValue: growthBookMocks.getFeatureValue
  });

  const store = createStore({
    app: {
      ...initialState,
      user: {
        ...initialState.user,
        sessionUser: null
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
        <IndexPage />
      </I18nextProvider>
    </Provider>
  );
}

describe('IndexPage', () => {
  beforeEach(() => {
    growthBookMocks.getFeatureValue.mockReset();
    growthBookMocks.useFeature.mockReset();
    growthBookMocks.useGrowthBook.mockReset();
  });

  it('renders landing page copy and static sections', () => {
    renderLanding();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: translations.landing['big-heading-1-b']
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.landing['advance-career'])
    ).toBeInTheDocument();
    expect(
      screen.getByText(/freeCodeCamp graduates work in companies such as/)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(translations.landing['hero-img-alt'])
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: translations.landing.benefits.heading
      })
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('landing-page-description')).toHaveLength(4);

    /* eslint-disable testing-library/no-node-access */
    expect(
      screen.getByTestId('brand-logo-container').querySelectorAll('svg')
    ).toHaveLength(5);
    /* eslint-enable testing-library/no-node-access */

    expect(screen.getByTestId('testimonials-section-header')).toHaveTextContent(
      translations.landing.testimonials.heading
    );
    expect(screen.getAllByTestId('testimonial-card')).toHaveLength(3);
    expect(
      screen.getAllByTestId('testimonials-endorser-image-container')
    ).toHaveLength(3);
    expect(
      screen.getAllByTestId('testimonials-endorser-location')
    ).toHaveLength(3);
    expect(
      screen.getAllByTestId('testimonials-endorser-occupation')
    ).toHaveLength(3);
    expect(
      screen.getAllByTestId('testimonials-endorser-testimony')
    ).toHaveLength(3);

    expect(screen.getAllByTestId('landing-page-faq')).toHaveLength(9);
  });

  it('renders the current curriculum, archive, and catalog links', () => {
    renderLanding();

    expect(screen.getAllByTestId('curriculum-map-button')).toHaveLength(
      expectedLandingSuperBlocks.length
    );

    const introTitles = introTranslations as unknown as Record<
      string,
      { title: string }
    >;

    for (const superBlock of expectedLandingSuperBlocks) {
      expect(
        screen.getByRole('link', {
          name: introTitles[superBlock].title
        })
      ).toHaveAttribute('href', `/learn/${superBlock}/`);
    }

    expect(
      screen.getByRole('link', { name: 'our archive page' })
    ).toHaveAttribute('href', '/learn/archive');
    expect(
      screen.getByRole('link', { name: translations.landing.catalog.seeAll })
    ).toHaveAttribute('href', '/catalog');
  });

  it('renders the single landing CTA when the two-button CTA feature is off', () => {
    renderLanding();

    expect(growthBookMocks.getFeatureValue).toHaveBeenCalledWith(
      'landing-aa-test',
      false
    );
    expect(screen.getByTestId('landing-top-big-cta')).toHaveTextContent(
      translations.buttons['logged-in-cta-btn']
    );
    expect(
      screen.getAllByRole('link', {
        name: translations.buttons['logged-in-cta-btn']
      })
    ).toHaveLength(4);
    expect(
      screen.getByRole('link', { name: translations.landing.benefits.cta })
    ).toBeInTheDocument();
    expect(screen.queryByTestId('landing-google-cta')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('landing-more-ways-cta')
    ).not.toBeInTheDocument();
  });

  it('renders stacked sign-in CTAs when the two-button CTA feature is on', () => {
    renderLanding({ showTwoButtonCTA: true });

    expect(screen.queryByTestId('landing-top-big-cta')).not.toBeInTheDocument();
    expect(screen.getByTestId('landing-google-cta')).toHaveTextContent(
      translations.buttons['sign-in-with-google']
    );
    expect(screen.getByTestId('landing-more-ways-cta')).toHaveTextContent(
      translations.buttons['more-ways-to-sign-in']
    );
    expect(
      screen.getAllByRole('link', {
        name: translations.buttons['logged-in-cta-btn']
      })
    ).toHaveLength(3);
  });
});
