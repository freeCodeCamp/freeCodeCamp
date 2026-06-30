import React from 'react';
import { render, screen, configure } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';

configure({ testIdAttribute: 'data-playwright-test-label' });

import { createStore } from '../redux/create-store';
import { initialState } from '../redux';
import ShowCertification from './show-certification';

vi.mock('../analytics');
vi.mock('../analytics/call-ga');
vi.mock('../utils/get-words');
vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => ({ on: false }),
  useFeatureIsOn: () => false,
  IfFeatureEnabled: ({ children: _children }: { children: React.ReactNode }) =>
    null
}));
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
  withTranslation: () => (Component: React.ComponentType) => Component,
  Trans: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

vi.mock('../redux/actions', async importOriginal => {
  const actual = await importOriginal<typeof import('../redux/actions')>();
  return {
    ...actual,
    showCert: vi.fn(() => ({ type: 'NOOP' })),
    fetchProfileForUser: vi.fn(() => ({ type: 'NOOP' }))
  };
});

const CERT_SLUG = 'responsive-web-design';
const USERNAME = 'certifieduser';
const PATHNAME = `/certification/${USERNAME}/${CERT_SLUG}`;

const certData = {
  username: USERNAME,
  name: 'Certified User',
  certSlug: CERT_SLUG,
  certTitle: 'Legacy Responsive Web Design',
  completionTime: 300,
  date: new Date('2018-08-03').getTime()
};

const certifiedUserProfile = {
  username: USERNAME,
  completedChallenges: [],
  isDonating: true
};

const completedFetchState = { pending: false, complete: true, errored: false };

function makeStore(
  sessionUser: object | null,
  otherUser: object | null = null
) {
  return createStore({
    app: {
      ...initialState,
      showCert: certData,
      showCertFetchState: completedFetchState,
      user: { sessionUser, otherUser },
      userFetchState: completedFetchState
    }
  });
}

const defaultProps = {
  username: USERNAME,
  certSlug: CERT_SLUG,
  location: { pathname: PATHNAME }
};

describe('<ShowCertification />', () => {
  it("renders cert details when viewing someone else's cert", () => {
    const store = makeStore(null, certifiedUserProfile);

    render(
      <Provider store={store}>
        {/* @ts-expect-error Redux connect provides remaining props */}
        <ShowCertification {...defaultProps} />
      </Provider>
    );

    expect(screen.getByTestId('successful-completion')).toBeInTheDocument();
    expect(screen.getByTestId('certification-title')).toBeInTheDocument();
    expect(screen.getByTestId('issue-date')).toBeInTheDocument();
  });

  it("hides share buttons when viewing someone else's cert", () => {
    const store = makeStore(null, certifiedUserProfile);

    render(
      <Provider store={store}>
        {/* @ts-expect-error Redux connect provides remaining props */}
        <ShowCertification {...defaultProps} />
      </Provider>
    );

    expect(screen.queryByTestId('linkedin-share-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('twitter-share-btn')).not.toBeInTheDocument();
  });

  it('renders cert details when viewing your own cert', () => {
    const store = makeStore(certifiedUserProfile);

    render(
      <Provider store={store}>
        {/* @ts-expect-error Redux connect provides remaining props */}
        <ShowCertification {...defaultProps} />
      </Provider>
    );

    expect(screen.getByTestId('successful-completion')).toBeInTheDocument();
    expect(screen.getByTestId('certification-title')).toBeInTheDocument();
  });

  it('shows share buttons when viewing your own cert', () => {
    const store = makeStore(certifiedUserProfile);

    render(
      <Provider store={store}>
        {/* @ts-expect-error Redux connect provides remaining props */}
        <ShowCertification {...defaultProps} />
      </Provider>
    );

    expect(screen.getByTestId('linkedin-share-btn')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-share-btn')).toBeInTheDocument();
  });
});
