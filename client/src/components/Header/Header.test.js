/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
/* import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../../i18n/configForTests';*/
import { UniversalNav } from './components/UniversalNav';
import { NavLinks } from './components/NavLinks';
import AuthOrProfile from './components/AuthOrProfile';

describe('<UniversalNav />', () => {
  const UniversalNavProps = {
    displayMenu: false,
    menuButtonRef: {},
    searchBarRef: {},
    toggleDisplayMenu: function() {},
    pathName: '/'
  };
  it('renders to the DOM', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<UniversalNav {...UniversalNavProps} />);
    const result = shallow.getRenderOutput();
    expect(result).toBeTruthy();
  });
});

describe('<NavLinks />', () => {
  it('has expected navigation links', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isUserDonating: false,
        username: '',
        theme: 'default'
      },
      i18n: {
        language: 'en'
      },
      toggleNightMode: theme => theme
    };
    const shallow = new ShallowRenderer();
    shallow.render(<NavLinks {...landingPageProps} />);
    const result = shallow.getRenderOutput();
    expect(
      hasRadioNavItem(result) &&
        hasForumNavItem(result) &&
        hasCurriculumNavItem(result) &&
        hasNewsNavItem(result) &&
        hasDonateNavItem(result)
    ).toBeTruthy();
  });
});

describe('<AuthOrProfile />', () => {
  it('has avatar with default border for default users', () => {
    const defaultUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png'
      },
      pending: false,
      pathName: '/learn'
    };

    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...defaultUserProps} />);
    const componentTree = shallow.getRenderOutput();

    expect(avatarHasClass(componentTree, 'default-border')).toBeTruthy();
  });

  it('has avatar with gold border for donating users', () => {
    const donatingUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        isDonating: true
      },
      pending: false,
      pathName: '/learn'
    };
    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...donatingUserProps} />);
    const componentTree = shallow.getRenderOutput();

    expect(avatarHasClass(componentTree, 'gold-border')).toBeTruthy();
  });

  it('has avatar with blue border for top contributors', () => {
    const topContributorUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        yearsTopContributor: [2020]
      },
      pending: false,
      pathName: '/learn'
    };

    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...topContributorUserProps} />);
    const componentTree = shallow.getRenderOutput();

    expect(avatarHasClass(componentTree, 'blue-border')).toBeTruthy();
  });
  it('has avatar with purple border for donating top contributors', () => {
    const topDonatingContributorUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        isDonating: true,
        yearsTopContributor: [2020]
      },
      pending: false,
      pathName: '/learn'
    };
    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...topDonatingContributorUserProps} />);
    const componentTree = shallow.getRenderOutput();
    expect(avatarHasClass(componentTree, 'purple-border')).toBeTruthy();
  });
});

const navigationLinks = (component, navItem) => {
  return component.props.children.props.children[navItem].props.children.props;
};

const profileNavItem = component => component.props.children;

const hasDonateNavItem = component => {
  const { children, to } = navigationLinks(component, 0);
  return children === 'buttons.donate' && to === '/donate';
};

const hasForumNavItem = component => {
  const { children, to } = navigationLinks(component, 1);
  return (
    children === 'buttons.forum' && to === 'https://forum.freecodecamp.org'
  );
};

const hasNewsNavItem = component => {
  const { children, to } = navigationLinks(component, 2);
  return (
    children === 'buttons.news' && to === 'https://www.freecodecamp.org/news'
  );
};

const hasCurriculumNavItem = component => {
  const { children, to } = navigationLinks(component, 3);
  return children === 'buttons.curriculum' && to === '/learn';
};

const hasRadioNavItem = component => {
  const { children, to } = navigationLinks(component, 5);
  return (
    children === 'buttons.radio' && to === 'https://coderadio.freecodecamp.org'
  );
};

/* TODO: Apply this to Universalnav component
const hasSignInButton = component =>
  component.props.children[1].props.children === 'buttons.sign-in';
*/
const avatarHasClass = (componentTree, classes) => {
  return (
    profileNavItem(componentTree).props.className ===
    'avatar-nav-link ' + classes
  );
};
