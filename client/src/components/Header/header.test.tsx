import React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { describe, expect, it, vi } from 'vitest';
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

vi.mock('../../analytics');

describe('<AuthOrProfile />', () => {
  it('shows a flame on the avatar when the user has a current streak', () => {
    const componentTree = create(
      <AuthOrProfile
        user={{
          ...defaultUserProps.user,
          activityStreak: {
            current: 2,
            longest: 2,
            activeSession: true
          }
        }}
      />
    ).toJSON();

    expect(
      treeHasClass(componentTree, 'header-activity-streak-badge')
    ).toBeTruthy();
  });

  it('does not show a flame when the session is not active', () => {
    const componentTree = create(
      <AuthOrProfile
        user={{
          ...defaultUserProps.user,
          activityStreak: {
            current: 2,
            longest: 2,
            activeSession: false
          }
        }}
      />
    ).toJSON();

    expect(
      treeHasClass(componentTree, 'header-activity-streak-badge')
    ).toBeFalsy();
  });

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

const treeHasClass = (
  tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
  className: string
): boolean => {
  if (!tree) return false;
  if (Array.isArray(tree)) {
    return tree.some(node => treeHasClass(node, className));
  }
  if (tree.props.className === className) return true;
  return Boolean(
    tree.children?.some(
      child => typeof child !== 'string' && treeHasClass(child, className)
    )
  );
};
