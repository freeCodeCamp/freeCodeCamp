/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';

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
  it('shows Curriculum and Sign In buttons on landing page', () => {
    const landingPageProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png'
      },
      pending: false,
      pathName: '/'
    };
    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...landingPageProps} />);
    const result = shallow.getRenderOutput();
    // expect(result.props.children).toEqual('Sign In');

    expect(deepChildrenProp(result, 0).children === 'Curriculum').toBeTruthy();

    expect(
      result.props.children[1].props['data-test-label'] === 'landing-small-cta'
    ).toBeTruthy();
  });

  it('has Curriculum and Portfolio links when user signed in on /learn', () => {
    const defaultUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        isDonating: true
      },
      pending: false,
      pathName: '/learn'
    };
    const shallow = new ShallowRenderer();
    shallow.render(<AuthOrProfile {...defaultUserProps} />);
    const result = shallow.getRenderOutput();

    expect(hasCurriculumNavItem(result)).toBeTruthy();
    expect(hasProfileNavItem(result)).toBeTruthy();
  });

  it('has avatar with default border for default users', () => {
    const defaultUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png'
      },
      pending: false,
      pathName: '/learn'
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
      pending: false,
      pathName: '/learn'
    };
    const componentTree = renderer
      .create(<AuthOrProfile {...donatingUserProps} />)
      .toJSON();

    expect(avatarHasClass(componentTree, 'gold-border')).toBeTruthy();
  });

  it('has avatar with green border for top contributors', () => {
    const topContributorUserProps = {
      user: {
        username: 'test-user',
        picture: 'https://freecodecamp.org/image.png',
        yearsTopContributor: [2020]
      },
      pending: false,
      pathName: '/learn'
    };

    const componentTree = renderer
      .create(<AuthOrProfile {...topContributorUserProps} />)
      .toJSON();

    expect(avatarHasClass(componentTree, 'green-border')).toBeTruthy();
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
    const componentTree = renderer
      .create(<AuthOrProfile {...topDonatingContributorUserProps} />)
      .toJSON();
    expect(avatarHasClass(componentTree, 'purple-border')).toBeTruthy();
  });
});

const deepChildrenProp = (component, childNumber) =>
  component.props.children[childNumber].props.children.props;

const hasProfileNavItem = component => {
  const profileElement = deepChildrenProp(component, 1);
  return (
    profileElement.children[0] === 'Profile' &&
    profileElement.to === '/test-user'
  );
};

const hasCurriculumNavItem = component => {
  const curriculumElement = deepChildrenProp(component, 0);
  return (
    curriculumElement.children === 'Curriculum' &&
    curriculumElement.to === '/learn'
  );
};

const avatarHasClass = (componentTree, classes) => {
  return (
    componentTree[1].children[0].children[1].props.className ===
    'avatar-container ' + classes
  );
};
