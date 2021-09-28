import { render, screen } from '@testing-library/react';
import React from 'react';
import { Themes } from '../settings/theme';

import Profile from './profile';

jest.mock('../../analytics');

const userProps = {
  user: {
    acceptedPrivacyTerms: true,
    currentChallengeId: 'string',
    email: 'string',
    emailVerified: true,
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
    progressTimestamps: [],
    about: 'string',
    githubProfile: 'string',
    isBanned: false,
    isCheater: true,
    isHonest: true,
    joinDate: 'string',
    linkedin: 'string',
    location: 'string',
    name: 'string',
    picture: 'string',
    points: 1,
    savedChallenges: [],
    sendQuincyEmail: true,
    sound: true,
    keyboardShortcuts: false,
    theme: Themes.Default,
    twitter: 'string',
    username: 'string',
    website: 'string',
    yearsTopContributor: [],
    isDonating: false,
    is2018DataVisCert: true,
    isApisMicroservicesCert: true,
    isBackEndCert: true,
    isDataVisCert: true,
    isEmailVerified: true,
    isFrontEndCert: true,
    isFrontEndLibsCert: true,
    isFullStackCert: true,
    isInfosecQaCert: true,
    isQaCertV7: true,
    isInfosecCertV7: true,
    isJsAlgoDataStructCert: true,
    isRespWebDesignCert: true,
    isSciCompPyCertV7: true,
    isDataAnalysisPyCertV7: true,
    isMachineLearningPyCertV7: true,
    isRelationalDatabaseCertV8: true,
    isCollegeAlgebraPyCertV8: true
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
