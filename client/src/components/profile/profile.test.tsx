import { beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { UserThemes } from '../../redux/types';
import Profile from './profile';

vi.mock('../../analytics');
vi.mock('./components/time-line', () => ({
  default: () => <div>timeline</div>
}));
vi.mock('./components/username', () => ({
  default: () => <div>username settings</div>
}));
//workaround to avoid some strange gatsby error:
window.___loader = { enqueue: () => {}, hovering: () => {} };

const userProps = {
  user: {
    acceptedPrivacyTerms: true,
    completedChallengeCount: 0,
    completedSurveys: [],
    isClassroomAccount: false,
    socrates: false,
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
      showExperience: false,
      showPortfolio: false,
      showTimeLine: false,
      showDonation: false
    },
    calendar: {},
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
    theme: UserThemes.Default,
    twitter: 'string',
    bluesky: 'string',
    username: 'string',
    website: 'string',
    yearsTopContributor: [],
    isDonating: false,
    is2018DataVisCert: true,
    isA2EnglishCert: true,
    isB1EnglishCert: true,
    isApisMicroservicesCert: true,
    isBackEndCert: true,
    isDataVisCert: true,
    isEmailVerified: true,
    isFrontEndCert: true,
    isFrontEndLibsCert: true,
    isFullStackCert: true,
    isInfosecQaCert: true,
    isPythonCertV9: true,
    isQaCertV7: true,
    isInfosecCertV7: true,
    isJavascriptCertV9: true,
    isJsAlgoDataStructCert: true,
    isRespWebDesignCert: true,
    isRespWebDesignCertV9: true,
    isSciCompPyCertV7: true,
    isDataAnalysisPyCertV7: true,
    isMachineLearningPyCertV7: true,
    isRelationalDatabaseCertV8: true,
    isRelationalDatabaseCertV9: true,
    isCollegeAlgebraPyCertV8: true,
    isFoundationalCSharpCertV8: true,
    isJsAlgoDataStructCertV8: true,
    isFrontEndLibsCertV9: true,
    isBackEndDevApisCertV9: true,
    isFullStackDeveloperCertV9: true,
    isA2SpanishCert: true,
    isA2ChineseCert: true,
    isA1ChineseCert: true
  }
};

const notMyProfileProps = {
  isSessionUser: false,
  ...userProps
};
function reducer() {
  return {
    app: { user: { sessionUser: userProps.user } }
  };
}
function renderWithRedux(ui: JSX.Element) {
  return render(<Provider store={createStore(reducer)}>{ui}</Provider>);
}
describe('<Profile/>', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class ResizeObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  });

  it('renders the report button on another persons profile', () => {
    // TODO: Profile is a mess, it shouldn't depend on the entire user. Each
    // component Camper, Stats, HeatMap etc should be get the relevant data from
    // the store themselves.

    renderWithRedux(<Profile {...notMyProfileProps} />);

    const reportButton: HTMLElement = screen.getByText('buttons.flag-user');
    expect(reportButton).toHaveAttribute('href', '/user/string/report-user');
  });

  it('renders profile heading and social links', () => {
    renderWithRedux(<Profile {...notMyProfileProps} />);

    expect(
      screen.getByRole('heading', { name: '@string' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('aria.linkedin')).toHaveAttribute(
      'href',
      'string'
    );
    expect(screen.getByLabelText('aria.github')).toHaveAttribute(
      'href',
      'string'
    );
    expect(screen.getByLabelText('aria.website')).toHaveAttribute(
      'href',
      'string'
    );
  });

  it('renders the edit profile modal with default personal settings', async () => {
    const user = userEvent.setup();
    const profileUser = {
      ...userProps.user,
      about: '',
      bluesky: '',
      githubProfile: '',
      linkedin: '',
      location: '',
      name: 'Full Stack User',
      picture: '',
      twitter: '',
      website: ''
    };

    renderWithRedux(<Profile user={profileUser} isSessionUser={true} />);

    await user.click(
      screen.getByRole('button', { name: 'aria.edit-my-profile' })
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'profile.edit-my-profile' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'settings.headings.internet' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('group', { name: 'settings.headings.internet' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /settings.headings.internet/
      })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(
      screen.getByRole('heading', {
        name: 'settings.headings.personal-info'
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('group', { name: 'settings.headings.personal-info' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /settings.headings.personal-info/
      })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('settings.labels.name')).toHaveValue(
      'Full Stack User'
    );
    expect(screen.getByLabelText('settings.labels.location')).toHaveValue('');
    expect(screen.getByLabelText('settings.labels.picture')).toHaveValue('');
    expect(screen.getByLabelText('settings.labels.about')).toHaveValue('');
  });
});
