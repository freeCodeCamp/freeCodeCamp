import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { Provider } from 'react-redux';
import envData from '../../config/env.json';
import ShowSettings from './show-settings';
import { createStore } from '../redux/create-store';
import { initialState } from '../redux';

const testUsername = 'testuser';

const baseUser = {
  username: testUsername,
  email: 'test@example.com',
  completedChallenges: [],
  profileUI: {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showExperience: true,
    showTimeLine: true
  }
};

vi.mock('../analytics');
vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => ({ on: false }),
  useFeatureIsOn: () => false,
  IfFeatureEnabled: ({ children: _children }: { children: React.ReactNode }) =>
    null
}));
vi.mock('../utils/get-words');

const { apiLocation } = envData;

describe('<ShowSettings />', () => {
  beforeAll(() => {
    // Location is not writable normally, so we have to delete and recreate
    // https://github.com/jestjs/jest/issues/890#issuecomment-682286025
    const location = window.location as string & Location;
    // @ts-expect-error TS is warning us that this breaks the type of
    // window.location, since it is not optional, but we are replacing it with
    // an object of the same type, it is safe to ignore.
    delete global.window.location;
    global.window.location = Object.assign({}, location);
  });

  it('does not navigate if already signed in', () => {
    const store = createStore({
      app: { ...initialState, user: { sessionUser: 'anything truthy' } }
    });
    const spy = vi.spyOn(window.location, 'href', 'set');

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('redirects to sign in page when user is not logged in', () => {
    const store = createStore({
      app: { ...initialState, user: { sessionUser: null } }
    });
    const spy = vi.spyOn(window.location, 'href', 'set');

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(`${apiLocation}/signin`);
  });

  it('renders profile note with link to user profile', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: {
          sessionUser: {
            username: testUsername,
            email: 'test@example.com',
            completedChallenges: []
          }
        },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    const { container } = render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    // Trans component renders the interpolated link - find it by href
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const profileLink = container.querySelector(`a[href="/${testUsername}"]`);
    expect(profileLink).toBeInTheDocument();
  });

  it('does not render the Classroom Mode section when the feature flag is off', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: {
          sessionUser: {
            username: testUsername,
            email: 'test@example.com',
            completedChallenges: []
          }
        },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    const { container } = render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    // classroom-mode is gated behind IfFeatureEnabled('classroom-mode'), and the
    // flag defaults to off, so the section must be fully absent from the DOM.
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const classroomSection = container.querySelector('#classroom-mode-policy');
    expect(classroomSection).not.toBeInTheDocument();
  });

  it('renders the Personal section with About form', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: {
          sessionUser: {
            username: testUsername,
            email: 'test@example.com',
            completedChallenges: []
          }
        },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    // The About component renders a heading using the sectionTitle prop
    expect(
      screen.getByRole('heading', { name: 'settings.headings.personal' })
    ).toBeInTheDocument();
  });

  it('renders a Personal link in the settings sidebar navigation', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: {
          sessionUser: {
            username: testUsername,
            email: 'test@example.com',
            completedChallenges: []
          }
        },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    const { container } = render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    // SettingsSidebarNav renders a ScrollLink with href="#personal"
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const personalLink = container.querySelector('a[href="#personal"]');
    expect(personalLink).toBeInTheDocument();
  });

  it('renders all 11 privacy toggle labels', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: { sessionUser: baseUser },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    const labels = [
      'settings.labels.my-profile',
      'settings.labels.my-name',
      'settings.labels.my-location',
      'settings.labels.my-about',
      'settings.labels.my-points',
      'settings.labels.my-heatmap',
      'settings.labels.my-certs',
      'settings.labels.my-portfolio',
      'settings.labels.my-experience',
      'settings.labels.my-timeline',
      'settings.labels.my-donations'
    ];

    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it('renders the Danger Zone section with reset and delete buttons', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: { sessionUser: baseUser },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );

    expect(
      screen.getByRole('button', { name: 'settings.danger.reset' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'settings.danger.delete' })
    ).toBeInTheDocument();
  });
});
