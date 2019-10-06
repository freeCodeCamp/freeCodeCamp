/* global expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from '../helpers/Link';
import renderer from 'react-test-renderer';

import Profile from './Profile';

Enzyme.configure({ adapter: new Adapter() });

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
    linkedin: 'string',
    location: 'string',
    name: 'string',
    picture: 'string',
    points: 1,
    twitter: 'string',
    username: 'string',
    website: 'string',
    yearsTopContributor: []
  }
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
    const profileToRender = <Profile {...myProfileProps} />;
    const profile = shallow(profileToRender);
    expect(
      profile
        .find(Link)
        .first()
        .prop('to')
    ).toBe('/settings');
  });

  it('renders the report button on another persons profile', () => {
    const profileToRender = <Profile {...notMyProfileProps} />;
    const profile = shallow(profileToRender);
    expect(
      profile
        .find(Link)
        .first()
        .prop('to')
    ).toBe('/user/string/report-user');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Profile {...notMyProfileProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
