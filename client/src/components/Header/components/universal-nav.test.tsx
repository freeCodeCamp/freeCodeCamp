import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { createStore } from '../../../redux/create-store';
import UniversalNav from './universal-nav';

vi.mock('@loadable/component', () => ({
  default: () => {
    const LazyComponent = () => null;
    LazyComponent.displayName = 'Loadable';
    return LazyComponent;
  }
}));

vi.mock('../../../utils/get-words');
vi.mock('../../../analytics');

const baseProps = {
  displayMenu: false,
  showMenu: vi.fn(),
  hideMenu: vi.fn(),
  menuButtonRef: { current: null } as React.RefObject<HTMLButtonElement>,
  searchBarRef: { current: null } as React.RefObject<HTMLDivElement>,
  fetchState: { pending: false },
  pathname: '/learn'
};

const baseUser = {
  username: 'test-user',
  picture: 'https://freecodecamp.org/image.png',
  yearsTopContributor: []
};

const nonDonatingUser = { ...baseUser, isDonating: false };
const donatingUser = { ...baseUser, isDonating: true };

const getByLabel = (label: string) =>
  within(screen.getByRole('navigation')).getByRole('link', {
    hidden: true,
    name: (_: string, el: Element) =>
      el.getAttribute('data-playwright-test-label') === label
  });

const queryByLabel = (label: string) =>
  within(screen.getByRole('navigation')).queryByRole('link', {
    hidden: true,
    name: (_: string, el: Element) =>
      el.getAttribute('data-playwright-test-label') === label
  });

const renderNav = (
  user: typeof baseUser & { isDonating: boolean },
  pending = false
) =>
  render(
    <Provider store={createStore()}>
      <UniversalNav {...baseProps} user={user} fetchState={{ pending }} />
    </Provider>
  );

describe('<UniversalNav />', () => {
  describe.each([
    {
      label: 'non-donating user',
      user: nonDonatingUser,
      visibleBtn: { testLabel: 'header-donate-button', href: '/donate' },
      hiddenBtn: { testLabel: 'header-support-button' }
    },
    {
      label: 'donating user',
      user: donatingUser,
      visibleBtn: { testLabel: 'header-support-button', href: '/supporters' },
      hiddenBtn: { testLabel: 'header-donate-button' }
    }
  ])('$label', ({ user, visibleBtn, hiddenBtn }) => {
    it(`renders ${visibleBtn.testLabel}`, () => {
      renderNav(user);
      expect(getByLabel(visibleBtn.testLabel)).toBeInTheDocument();
    });

    it(`links to ${visibleBtn.href}`, () => {
      renderNav(user);
      expect(getByLabel(visibleBtn.testLabel)).toHaveAttribute(
        'href',
        visibleBtn.href
      );
    });

    it(`does not render ${hiddenBtn.testLabel}`, () => {
      renderNav(user);
      expect(queryByLabel(hiddenBtn.testLabel)).not.toBeInTheDocument();
    });
  });

  describe('Loading state', () => {
    it('renders no donate or supporters button when pending', () => {
      renderNav(nonDonatingUser, true);
      expect(queryByLabel('header-donate-button')).not.toBeInTheDocument();
      expect(queryByLabel('header-support-button')).not.toBeInTheDocument();
    });
  });
});
