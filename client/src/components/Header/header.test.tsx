/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import AuthOrProfile from './components/auth-or-profile';

jest.mock('../../analytics');

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

    const componentTree = create(
      <AuthOrProfile {...defaultUserProps} />
    ).toJSON();
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

    const componentTree = create(
      <AuthOrProfile {...donatingUserProps} />
    ).toJSON();
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

    const componentTree = create(
      <AuthOrProfile {...topContributorUserProps} />
    ).toJSON();
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

    const componentTree = create(
      <AuthOrProfile {...topDonatingContributorUserProps} />
    ).toJSON();
    expect(avatarHasClass(componentTree, 'purple-border')).toBeTruthy();
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const profileNavItem = (component: any) => component.children[0];

const avatarHasClass = (
  componentTree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
  classes: string
) => {
  return (
    profileNavItem(componentTree).props.className ===
    'avatar-container ' + classes
  );
};
