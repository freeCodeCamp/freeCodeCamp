import React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import AuthOrProfile from './components/auth-or-profile';

const defaultUserProps = {
  user: {
    username: 'test-user',
    picture: 'https://freecodecamp.org/image.png',
    isDonating: false,
    yearsTopContributor: []
  },
  pending: false,
  pathName: '/learn'
};

const donatingUserProps = {
  ...defaultUserProps,
  user: {
    ...defaultUserProps.user,
    isDonating: true
  }
};

const topContributorUserProps = {
  ...defaultUserProps,
  user: {
    ...defaultUserProps.user,
    yearsTopContributor: ['2020']
  }
};

const topDonatingContributorUserProps = {
  ...topContributorUserProps,
  user: {
    ...topContributorUserProps.user,
    isDonating: true
  }
};

jest.mock('../../analytics');

describe('<AuthOrProfile />', () => {
  it('has avatar with default border for default users', () => {
    const componentTree = create(
      <AuthOrProfile {...defaultUserProps} />
    ).toJSON();
    expect(avatarHasClass(componentTree, 'default-border')).toBeTruthy();
  });

  it('has avatar with gold border for donating users', () => {
    const componentTree = create(
      <AuthOrProfile {...donatingUserProps} />
    ).toJSON();
    expect(avatarHasClass(componentTree, 'gold-border')).toBeTruthy();
  });

  it('has avatar with blue border for top contributors', () => {
    const componentTree = create(
      <AuthOrProfile {...topContributorUserProps} />
    ).toJSON();
    expect(avatarHasClass(componentTree, 'blue-border')).toBeTruthy();
  });

  it('has avatar with purple border for donating top contributors', () => {
    const componentTree = create(
      <AuthOrProfile {...topDonatingContributorUserProps} />
    ).toJSON();
    expect(avatarHasClass(componentTree, 'purple-border')).toBeTruthy();
  });
});

type Component = {
  children: { props: { className: string } }[];
};
const profileNavItem = (component: Component) => component.children[0];

const avatarHasClass = (
  componentTree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
  classes: string
) => {
  return (
    profileNavItem(componentTree as unknown as Component).props.className ===
    'avatar-container ' + classes
  );
};
