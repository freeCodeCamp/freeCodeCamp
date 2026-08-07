import React from 'react';
import { render, screen } from '@testing-library/react';
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
  it('has avatar with default border for default users', () => {
    render(<AuthOrProfile {...defaultUserProps} />);
    expect(avatarHasClass('default-border')).toBeTruthy();
  });

  it('has avatar with gold border for donating users', () => {
    render(<AuthOrProfile {...donatingUserProps} />);
    expect(avatarHasClass('gold-border')).toBeTruthy();
  });

  it('has avatar with blue border for top contributors', () => {
    render(<AuthOrProfile {...topContributorUserProps} />);
    expect(avatarHasClass('blue-border')).toBeTruthy();
  });

  it('has avatar with purple border for donating top contributors', () => {
    render(<AuthOrProfile {...topDonatingContributorUserProps} />);
    expect(avatarHasClass('purple-border')).toBeTruthy();
  });
});

const avatarHasClass = (borderClass: string) => {
  const avatar = screen.getByTestId('avatar-container');
  return avatar.className === 'avatar-container ' + borderClass;
};
