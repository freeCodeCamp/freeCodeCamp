/* global expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Profile from './Profile';

const userProps = {
  user: {
    profileUI: {
      isLocked: false,
      showAbout: false,
      showCerts: false,
      showHeatMap: false,
      showLocation: false,
      showName: false,
      showPoints: false,
      showPortfolio: false,
      showTimeLine: false
    },
    calendar: {},
    streak: {
      current: 1,
      longest: 1
    },
    completedChallenges: [],
    portfolio: [],
    about: 'string',
    githubProfile: 'string',
    isGithub: true,
    isLinkedIn: true,
    isTwitter: true,
    isWebsite: true,
    joinDate: 'string',
    linkedin: 'string',
    location: 'string',
    name: 'string',
    picture: 'string',
    points: 1,
    twitter: 'string',
    username: 'string',
    website: 'string',
    yearsTopContributor: []
  },
  navigate: () => {}
};

const myProfileProps = {
  isSessionUser: true,
  ...userProps
};

const notMyProfileProps = {
  isSessionUser: false,
  ...userProps
};

describe('<Profile/>', () => {
  it('renders the settings button on your own profile', () => {
    const { getByText } = render(<Profile {...myProfileProps} />);

    expect(getByText('Update my account settings')).toHaveAttribute(
      'href',
      '/settings'
    );
  });

  it('renders the report button on another persons profile', () => {
    const { getByText } = render(<Profile {...notMyProfileProps} />);

    expect(getByText("Flag This User's Account for Abuse")).toHaveAttribute(
      'href',
      '/user/string/report-user'
    );
  });

  it('renders correctly', () => {
    const { container } = render(<Profile {...notMyProfileProps} />);

    expect(container).toMatchSnapshot();
  });
});
