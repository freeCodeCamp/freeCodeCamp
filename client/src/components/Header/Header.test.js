/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
/* import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../../i18n/configForTests';*/
import { UniversalNav } from './components/UniversalNav';
import { AuthOrProfile } from './components/NavLinks';

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
  it('shows Curriculum and Sign In buttons when not signed in', () => {
    const landingPageProps = {
      pending: false
    };
    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...landingPageProps} />);
    const result = shallow.getRenderOutput();
    expect(
      hasRadioNavItem(result) &&
        hasForumNavItem(result) &&
        hasCurriculumNavItem(result) &&
        hasSignInButton(result)
    ).toBeTruthy();
  });

  it('has avatar with default border for default users', () => {
    const defaultUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png'
      },
      pending: false
    };

    const componentTree = renderer
      .create(<AuthOrProfile {...defaultUserProps} />)
      .toJSON();

    expect(avatarHasClass(componentTree, 'default-border')).toBeTruthy();
  });

  it('has avatar with gold border for donating users', () => {
    const donatingUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        isDonating: true
      },
      pending: false
    };
    const componentTree = renderer
      .create(<AuthOrProfile {...donatingUserProps} />)
      .toJSON();

    expect(avatarHasClass(componentTree, 'gold-border')).toBeTruthy();
  });

  it('has avatar with blue border for top contributors', () => {
    const topContributorUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        yearsTopContributor: [2020]
      },
      pending: false
    };

    const componentTree = renderer
      .create(<AuthOrProfile {...topContributorUserProps} />)
      .toJSON();

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
      pending: false
    };
    const componentTree = renderer
      .create(<AuthOrProfile {...topDonatingContributorUserProps} />)
      .toJSON();
    expect(avatarHasClass(componentTree, 'purple-border')).toBeTruthy();
  });
});

const navigationLinks = (component, navItem) => {
  return component.props.children[0].props.children[navItem].props.children
    .props;
};

const profileNavItem = component => component[3].children[0];

const hasRadioNavItem = component => {
  const { children, to } = navigationLinks(component, 0);
  return (
    children === 'buttons.radio' && to === 'https://coderadio.freecodecamp.org'
  );
};

const hasForumNavItem = component => {
  const { children, to } = navigationLinks(component, 1);
  return (
    children === 'buttons.forum' && to === 'https://forum.freecodecamp.org'
  );
};

const hasCurriculumNavItem = component => {
  const { children, to } = navigationLinks(component, 2);
  return children === 'buttons.curriculum' && to === '/learn';
};

const hasSignInButton = component =>
  component.props.children[1].props.children === 'buttons.sign-in';

const avatarHasClass = (componentTree, classes) => {
  // componentTree[1].children[0].children[1].props.className
  return (
    profileNavItem(componentTree).children[1].props.className ===
    'avatar-container ' + classes
  );
};
