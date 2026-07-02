import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getStageOrder,
  SuperBlockStage,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';

import envData from '../../config/env.json';
import { createStore } from '../redux/create-store';
import { initialState } from '../redux';
import IndexPage from './index';

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

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { returnObjects?: boolean }) => {
      if (options?.returnObjects && key === 'landing.benefits.list') {
        return [
          { title: 'Benefit 1', description: 'Benefit description 1' },
          { title: 'Benefit 2', description: 'Benefit description 2' },
          { title: 'Benefit 3', description: 'Benefit description 3' },
          { title: 'Benefit 4', description: 'Benefit description 4' }
        ];
      }

      if (options?.returnObjects && key === 'landing.faqs') {
        return Array.from({ length: 9 }, (_, index) => ({
          question: `Question ${index + 1}`,
          answer: [`Answer ${index + 1}`]
        }));
      }

      return key;
    },
    i18n: {
      changeLanguage: () => Promise.resolve()
    }
  }),
  Trans: ({ children }: { children: React.ReactNode }) => children,
  withTranslation: () => (Component: React.ComponentType<unknown>) => Component
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
      <IndexPage />
    </Provider>
  );
}

describe('IndexPage', () => {
  let restoreI18nextT = () => {};

  beforeEach(() => {
    growthBookMocks.getFeatureValue.mockReset();
    growthBookMocks.useFeature.mockReset();
    growthBookMocks.useGrowthBook.mockReset();

    const spy = vi.spyOn(i18next, 't');
    spy.mockImplementation(((key: string | string[]) =>
      Array.isArray(key) ? key[0] : key) as unknown as typeof i18next.t);
    restoreI18nextT = () => spy.mockRestore();
  });

  afterEach(() => {
    restoreI18nextT();
  });

  it('renders landing page copy and static sections', () => {
    renderLanding();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'landing.big-heading-1-b'
      })
    ).toBeInTheDocument();
    expect(screen.getByText('landing.advance-career')).toBeInTheDocument();
    expect(screen.getByText('landing.graduates-work')).toBeInTheDocument();
    expect(screen.getByAltText('landing.hero-img-alt')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'landing.benefits.heading'
      })
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('landing-page-description')).toHaveLength(4);

    /* eslint-disable testing-library/no-node-access */
    expect(
      screen.getByTestId('brand-logo-container').querySelectorAll('svg')
    ).toHaveLength(5);
    /* eslint-enable testing-library/no-node-access */

    expect(screen.getByTestId('testimonials-section-header')).toHaveTextContent(
      'landing.testimonials.heading'
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

    for (const superBlock of expectedLandingSuperBlocks) {
      expect(
        screen.getByRole('link', {
          name: `intro:${superBlock}.title`
        })
      ).toHaveAttribute('href', `/learn/${superBlock}/`);
    }

    expect(screen.getByRole('link', { name: 'placeholder' })).toHaveAttribute(
      'href',
      '/learn/archive'
    );
    expect(
      screen.getByRole('link', { name: 'landing.catalog.seeAll' })
    ).toHaveAttribute('href', '/catalog');
  });

  it('renders the single landing CTA when the two-button CTA feature is off', () => {
    renderLanding();

    expect(growthBookMocks.getFeatureValue).toHaveBeenCalledWith(
      'landing-aa-test',
      false
    );
    expect(screen.getByTestId('landing-top-big-cta')).toHaveTextContent(
      'buttons.logged-in-cta-btn'
    );
    expect(
      screen.getAllByRole('link', { name: 'buttons.logged-in-cta-btn' })
    ).toHaveLength(4);
    expect(
      screen.getByRole('link', { name: 'landing.benefits.cta' })
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
      'buttons.sign-in-with-google'
    );
    expect(screen.getByTestId('landing-more-ways-cta')).toHaveTextContent(
      'buttons.more-ways-to-sign-in'
    );
    expect(
      screen.getAllByRole('link', { name: 'buttons.logged-in-cta-btn' })
    ).toHaveLength(3);
  });
});
