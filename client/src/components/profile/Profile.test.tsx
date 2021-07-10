import React from 'react';
import { render, screen } from '@testing-library/react';

import Profile from './Profile';

jest.mock('../../analytics');

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
      showTimeLine: false,
      showDonation: false
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
    yearsTopContributor: [],
    isDonating: false
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  navigate: () => {}
};

const notMyProfileProps = {
  isSessionUser: false,
  ...userProps
};

describe('<Profile/>', () => {
  it('renders the report button on another persons profile', () => {
    render(<Profile {...notMyProfileProps} />);

    const reportButton: HTMLElement = screen.getByText('buttons.flag-user');
    expect(reportButton).toHaveAttribute('href', '/user/string/report-user');
  });

  it('renders correctly', () => {
    const { container } = render(<Profile {...notMyProfileProps} />);

    expect(container).toMatchSnapshot();
  });
});
