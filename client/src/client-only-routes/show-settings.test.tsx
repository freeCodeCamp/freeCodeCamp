/* eslint-disable */
// @ts-nocheck Likely need to not use ShallowRenderer
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { describe, it, expect, vi } from 'vitest';
import envData from '../../config/env.json';
import { ShowSettings } from './show-settings';

vi.mock('../analytics');
vi.mock('@growthbook/growthbook-react', () => ({
  useFeatureIsOn: () => false
}));

const { apiLocation } = envData as Record<string, string>;

describe('<ShowSettings />', () => {
  it('renders to the DOM when user is logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ShowSettings {...loggedInProps} />);
    expect(navigate).toHaveBeenCalledTimes(0);
    const result = shallow.getRenderOutput();
    expect(result.type.toString()).toBe('Symbol(react.fragment)');
    // Renders Helmet component rather than Loader
    expect(result.props.children[0].props.title).toEqual(
      'buttons.settings | freeCodeCamp.org'
    );
  });

  it('redirects to sign in page when user is not logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ShowSettings {...loggedOutProps} />);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(`${apiLocation}/signin`);
    const result = shallow.getRenderOutput();
    // Renders Loader rather than ShowSettings
    expect(result.type.displayName).toBe('Loader');
  });
});

const navigate = vi.fn();
const loggedInProps = {
  createFlashMessage: vi.fn(),
  hardGoTo: vi.fn(),
  navigate: navigate,
  showLoading: false,
  submitNewAbout: vi.fn(),
  toggleTheme: vi.fn(),
  updateSocials: vi.fn(),
  updateIsHonest: vi.fn(),
  updatePortfolio: vi.fn(),
  updateQuincyEmail: vi.fn(),
  user: {
    about: '',
    completedChallenges: []
  },
  verifyCert: vi.fn()
};
const loggedOutProps = { ...loggedInProps, user: null };
