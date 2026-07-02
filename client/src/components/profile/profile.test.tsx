import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { UserThemes } from '../../redux/types';
import { initialState as appInitialState } from '../../redux';
import { createStore } from '../../redux/create-store';
import type { User } from '../../redux/prop-types';
import Profile from './profile';

vi.mock('../../analytics');
vi.mock('../../utils/get-words');
//workaround to avoid some strange gatsby error:
window.___loader = { enqueue: () => {}, hovering: () => {} };

const certifiedUser: User = {
  currentChallengeId: 'string',
  email: 'string',
  emailVerified: true,
  profileUI: {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showHeatMap: false,
    showLocation: false,
    showName: true,
    showPoints: false,
    showPortfolio: false,
    showExperience: false,
    showTimeLine: false,
    showDonation: false
  },
  calendar: {},
  completedChallenges: [],
  completedChallengeCount: 0,
  completedSurveys: [],
  portfolio: [],
  progressTimestamps: [],
  about: 'I build things for the web.',
  acceptedPrivacyTerms: true,
  githubProfile: 'https://github.com/certifieduser',
  isBanned: false,
  isCheater: true,
  isClassroomAccount: false,
  isHonest: true,
  joinDate: '2020-11-01T00:00:00.000Z',
  linkedin: 'https://linkedin.com/in/certifieduser',
  location: 'Earth',
  name: 'Full Stack User',
  picture: '',
  points: 1,
  savedChallenges: [],
  sendQuincyEmail: true,
  sound: true,
  keyboardShortcuts: false,
  socrates: false,
  theme: UserThemes.Default,
  twitter: 'https://x.com/certifieduser',
  bluesky: 'https://bsky.app/profile/certifieduser.bsky.social',
  username: 'certifieduser',
  website: 'https://certifieduser.dev',
  yearsTopContributor: ['2020'],
  isDonating: false,
  isEmailVerified: true,

  isA2EnglishCert: true,
  isA1ChineseCert: false,
  isA2ChineseCert: false,
  isA2SpanishCert: false,
  isB1EnglishCert: true,
  isFoundationalCSharpCertV8: true,
  isRespWebDesignCertV9: false,
  isJavascriptCertV9: false,
  isFrontEndLibsCertV9: false,
  isPythonCertV9: false,
  isRelationalDatabaseCertV9: false,
  isBackEndDevApisCertV9: false,
  isFullStackDeveloperCertV9: false,

  isRespWebDesignCert: true,
  isJsAlgoDataStructCertV8: true,
  isFrontEndLibsCert: true,
  is2018DataVisCert: true,
  isRelationalDatabaseCertV8: true,
  isApisMicroservicesCert: true,
  isQaCertV7: true,
  isSciCompPyCertV7: true,
  isDataAnalysisPyCertV7: true,
  isInfosecCertV7: true,
  isMachineLearningPyCertV7: true,
  isCollegeAlgebraPyCertV8: true,
  isFrontEndCert: true,
  isJsAlgoDataStructCert: true,
  isBackEndCert: true,
  isDataVisCert: true,
  isInfosecQaCert: true,
  isFullStackCert: true
};

const notMyProfileProps = {
  isSessionUser: false,
  user: certifiedUser
};

function renderWithRedux(ui: JSX.Element, sessionUser: User = certifiedUser) {
  const store = createStore({
    app: {
      ...appInitialState,
      user: {
        ...appInitialState.user,
        sessionUser
      }
    }
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

describe('<Profile/>', () => {
  it('renders the report button on another persons profile', () => {
    // TODO: Profile is a mess, it shouldn't depend on the entire user. Each
    // component Camper, Stats, HeatMap etc should be get the relevant data from
    // the store themselves.

    renderWithRedux(<Profile {...notMyProfileProps} />);

    const reportButton = screen.getByRole('link', {
      name: 'buttons.flag-user'
    });
    expect(reportButton).toHaveAttribute(
      'href',
      '/user/certifieduser/report-user'
    );
  });

  it('renders profile bio, badges and social links', () => {
    renderWithRedux(<Profile {...notMyProfileProps} />);

    expect(
      screen.getByRole('heading', { name: '@certifieduser' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Full Stack User' })
    ).toBeInTheDocument();
    expect(screen.getByText('profile.joined')).toBeInTheDocument();
    expect(screen.getByText('profile.contributor')).toBeInTheDocument();
    expect(
      screen.getByText('profile.contributor-prolific')
    ).toBeInTheDocument();

    expect(screen.getByLabelText('aria.linkedin')).toHaveAttribute(
      'href',
      'https://linkedin.com/in/certifieduser'
    );
    expect(screen.getByLabelText('aria.github')).toHaveAttribute(
      'href',
      'https://github.com/certifieduser'
    );
    expect(screen.getByLabelText('aria.website')).toHaveAttribute(
      'href',
      'https://certifieduser.dev'
    );
  });

  it('renders current and legacy certification links', () => {
    renderWithRedux(<Profile {...notMyProfileProps} />);

    expect(
      screen.getByRole('heading', { name: 'profile.fcc-certs' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'settings.headings.legacy-certs' })
    ).toBeInTheDocument();

    const certHrefs = screen
      .getAllByRole('link', { name: 'buttons.view-cert-title' })
      .map(link => link.getAttribute('href'));

    expect(certHrefs).toEqual([
      '/certification/certifieduser/a2-english-for-developers',
      '/certification/certifieduser/b1-english-for-developers',
      '/certification/certifieduser/foundational-c-sharp-with-microsoft',
      '/certification/certifieduser/responsive-web-design',
      '/certification/certifieduser/javascript-algorithms-and-data-structures-v8',
      '/certification/certifieduser/front-end-development-libraries',
      '/certification/certifieduser/data-visualization',
      '/certification/certifieduser/relational-database-v8',
      '/certification/certifieduser/back-end-development-and-apis',
      '/certification/certifieduser/quality-assurance-v7',
      '/certification/certifieduser/scientific-computing-with-python-v7',
      '/certification/certifieduser/data-analysis-with-python-v7',
      '/certification/certifieduser/information-security-v7',
      '/certification/certifieduser/machine-learning-with-python-v7',
      '/certification/certifieduser/college-algebra-with-python-v8',
      '/certification/certifieduser/legacy-front-end',
      '/certification/certifieduser/javascript-algorithms-and-data-structures',
      '/certification/certifieduser/legacy-back-end',
      '/certification/certifieduser/legacy-data-visualization',
      '/certification/certifieduser/information-security-and-quality-assurance',
      '/certification/certifieduser/full-stack'
    ]);
  });
});
