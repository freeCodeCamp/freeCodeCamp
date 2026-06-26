import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { describe, expect, it, vi } from 'vitest';
import {
  availableLangs,
  hiddenLangs,
  LangNames
} from '@freecodecamp/shared/config/i18n';

import { LocalStorageThemes } from '../../redux/types';
import { toggleTheme } from '../../redux/actions';
import { createStore } from '../../redux/create-store';
import { initialState as appInitialState } from '../../redux';
import Header from '.';
import AuthOrProfile from './components/auth-or-profile';
import LanguageList from './components/language-list';
import NavLinks from './components/nav-links';
import UniversalNav from './components/universal-nav';

const mockTranslations = vi.hoisted(() => {
  const translations: Record<string, string> = {
    'aria.fcc-curriculum': 'freeCodeCamp Curriculum',
    'aria.opens-new-window': 'Opens in new window',
    'aria.primary-nav': 'primary',
    'buttons.catalog': 'Catalog',
    'buttons.change-language': 'Change Language',
    'buttons.contribute': 'Contribute',
    'buttons.curriculum': 'Curriculum',
    'buttons.donate': 'Donate',
    'buttons.forum': 'Forum',
    'buttons.menu': 'Menu',
    'buttons.news': 'News',
    'buttons.podcast': 'Podcast',
    'buttons.profile': 'Profile',
    'buttons.radio': 'Radio',
    'buttons.settings': 'Settings',
    'buttons.sign-in': 'Sign in',
    'buttons.sign-out': 'Sign out',
    'icons.avatar': 'Default Avatar',
    'icons.avatar-2': 'An avatar coding with a laptop',
    'links:nav.contribute': 'https://contribute.freecodecamp.org/#/',
    'links:nav.forum': 'https://forum.freecodecamp.org/',
    'links:nav.news': 'https://freecodecamp.org/news/',
    'links:nav.podcast': 'https://freecodecamp.libsyn.com/',
    'settings.labels.night-mode': 'Night Mode'
  };

  return {
    t: (key: string) => translations[key] ?? key
  };
});

const mockUseMediaQuery = vi.hoisted(() => vi.fn(() => true));

vi.mock('@loadable/component', () => ({
  default:
    () =>
    ({ innerRef }: { innerRef?: React.RefObject<HTMLDivElement> }) => (
      <div ref={innerRef} data-testid='header-search' />
    )
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: mockTranslations.t
  }),
  withTranslation:
    () =>
    <P extends object>(Component: React.ComponentType<P>) => {
      const WrappedComponent = (props: P) => (
        <Component {...props} t={mockTranslations.t} />
      );

      WrappedComponent.displayName = `withTranslation(${
        Component.displayName || Component.name || 'Component'
      })`;

      return WrappedComponent;
    }
}));

vi.mock('../../analytics/call-ga', () => ({
  default: vi.fn()
}));

vi.mock('../../utils/get-words');

vi.mock('react-responsive', () => ({
  useMediaQuery: mockUseMediaQuery
}));

const defaultUser = {
  username: 'developmentuser',
  picture: '',
  isDonating: false,
  yearsTopContributor: []
};

const createTestStore = ({
  sessionUser = defaultUser,
  theme = LocalStorageThemes.Light,
  examInProgress = false
}: {
  sessionUser?: typeof defaultUser | null;
  theme?: LocalStorageThemes;
  examInProgress?: boolean;
} = {}) =>
  createStore({
    app: {
      ...appInitialState,
      examInProgress,
      theme,
      user: {
        ...appInitialState.user,
        sessionUser
      }
    }
  });

const renderWithStore = (ui: React.ReactElement, store = createTestStore()) =>
  render(<Provider store={store}>{ui}</Provider>);

const renderHeader = (store = createTestStore()) =>
  renderWithStore(
    <Header
      fetchState={{ pending: false }}
      pathname='/'
      skipButtonText='Skip to content'
      user={defaultUser}
    />,
    store
  );

type Component = {
  children: { props: { className: string } }[];
};

const profileNavItem = (component: Component) => component.children[0];

const avatarHasClass = (
  componentTree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
  classes: string
) =>
  profileNavItem(componentTree as unknown as Component).props.className ===
  'avatar-container ' + classes;

describe('<Header />', () => {
  it('renders the skip content link', () => {
    renderHeader();

    expect(
      screen.getByRole('link', { name: 'Skip to content' })
    ).toHaveAttribute('href', '#content-start');
  });

  it('renders the universal nav by default', () => {
    renderHeader();

    const nav = screen.getByRole('navigation', { name: 'primary' });
    const logoLink = screen.getByRole('link', {
      name: 'freeCodeCamp Curriculum'
    });

    expect(nav).toHaveAttribute('id', 'universal-nav');
    expect(logoLink).toHaveAttribute('href', '/learn');
  });

  it('renders the exam nav when an exam is in progress', () => {
    renderHeader(createTestStore({ examInProgress: true }));

    expect(screen.getByRole('navigation', { name: 'primary' })).toHaveAttribute(
      'id',
      'exam-nav'
    );
  });
});

describe('<UniversalNav />', () => {
  const renderUniversalNav = (isSearchExposedWidth: boolean) => {
    mockUseMediaQuery.mockReturnValue(isSearchExposedWidth);

    return renderWithStore(
      <UniversalNav
        displayMenu={false}
        fetchState={{ pending: false }}
        hideMenu={vi.fn()}
        menuButtonRef={React.createRef<HTMLButtonElement>()}
        pathname='/learn'
        searchBarRef={React.createRef<HTMLDivElement>()}
        showMenu={vi.fn()}
        user={defaultUser}
      />
    );
  };

  const selectPlacementElement = (container: HTMLElement, selector: string) => {
    // The placement contract is class-based: desktop search lives in the
    // exposed left nav slot, while smaller widths render it with the menu.
    // eslint-disable-next-line testing-library/no-node-access
    return container.querySelector(selector);
  };

  it('renders search in the exposed nav area on desktop widths', () => {
    const { container } = renderUniversalNav(true);

    expect(
      selectPlacementElement(
        container,
        '.universal-nav-left [data-testid="header-search"]'
      )
    ).toBeInTheDocument();
  });

  it('renders search inside the menu area below desktop widths', () => {
    const { container } = renderUniversalNav(false);

    expect(
      selectPlacementElement(container, '.universal-nav-left')
    ).not.toBeInTheDocument();
    expect(
      selectPlacementElement(
        container,
        '.universal-nav-right [data-testid="header-search"]'
      )
    ).toBeInTheDocument();
  });
});

describe('<LanguageList />', () => {
  it('lists every visible language option', () => {
    renderWithStore(<LanguageList />);

    fireEvent.click(screen.getByRole('button', { name: 'Change Language' }));

    const locales = availableLangs.client.filter(
      lang => !hiddenLangs.includes(lang)
    );

    const languageButtons = screen
      .getAllByRole('button')
      .filter(button => button.classList.contains('nav-lang-list-option'));

    expect(languageButtons).toHaveLength(locales.length);

    locales.forEach((locale, index) => {
      expect(languageButtons[index]).toHaveTextContent(LangNames[locale]);
    });
  });
});

describe('<NavLinks />', () => {
  it('contains the signed-in menu links', () => {
    renderWithStore(
      <NavLinks
        displayMenu={true}
        hideMenu={vi.fn()}
        menuButtonRef={React.createRef<HTMLButtonElement>()}
        showMenu={vi.fn()}
        user={defaultUser}
      />
    );

    const menuLinks = [
      { name: 'Profile', href: '/developmentuser' },
      { name: 'Donate', href: '/donate' },
      { name: 'Curriculum', href: '/learn' },
      { name: 'Catalog', href: '/catalog' },
      { name: 'Forum', href: 'https://forum.freecodecamp.org/' },
      { name: 'News', href: 'https://freecodecamp.org/news/' },
      { name: 'Radio', href: 'https://coderadio.freecodecamp.org' },
      { name: 'Contribute', href: 'https://contribute.freecodecamp.org/#/' },
      { name: 'Podcast', href: 'https://freecodecamp.libsyn.com/' }
    ];

    menuLinks.forEach(({ name, href }) => {
      expect(
        screen.getByRole('link', { name: new RegExp(name) })
      ).toHaveAttribute('href', href);
    });

    expect(
      screen.getByRole('button', { name: 'Night Mode' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Sign out' })
    ).toBeInTheDocument();
  });

  it('closes the menu and returns focus to the menu button on Escape', () => {
    vi.useFakeTimers();

    const hideMenu = vi.fn();
    const menuButtonRef = React.createRef<HTMLButtonElement>();

    renderWithStore(
      <>
        <button ref={menuButtonRef}>Menu Button</button>
        <NavLinks
          displayMenu={true}
          hideMenu={hideMenu}
          menuButtonRef={menuButtonRef}
          showMenu={vi.fn()}
          user={defaultUser}
        />
      </>
    );

    screen.getByRole('link', { name: 'Donate' }).focus();
    fireEvent.keyDown(screen.getByRole('link', { name: 'Donate' }), {
      key: 'Escape'
    });

    expect(hideMenu).toHaveBeenCalled();

    vi.advanceTimersByTime(100);

    expect(screen.getByRole('button', { name: 'Menu Button' })).toHaveFocus();

    vi.useRealTimers();
  });

  it('dispatches the theme toggle action', () => {
    const store = createTestStore();
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    renderWithStore(
      <NavLinks
        displayMenu={true}
        hideMenu={vi.fn()}
        menuButtonRef={React.createRef<HTMLButtonElement>()}
        showMenu={vi.fn()}
        user={defaultUser}
      />,
      store
    );

    fireEvent.click(screen.getByRole('button', { name: 'Night Mode' }));

    expect(dispatchSpy).toHaveBeenCalledWith(toggleTheme());
  });
});

describe('<AuthOrProfile />', () => {
  it('links signed-in users to their profile with an avatar', () => {
    renderWithStore(<AuthOrProfile user={defaultUser} />);

    const profileLink = screen.getByRole('link', { name: 'Profile' });

    expect(profileLink).toHaveAttribute('href', '/developmentuser');
  });

  it('shows the sign-in link instead of the avatar when signed out', () => {
    renderWithStore(<AuthOrProfile />, createTestStore({ sessionUser: null }));

    expect(screen.getByRole('link', { name: 'Sign in' })).toHaveAttribute(
      'href',
      'http://localhost:3000/signin'
    );
    expect(
      screen.queryByRole('link', { name: 'Profile' })
    ).not.toBeInTheDocument();
  });

  it.each([
    ['default-border', defaultUser],
    ['gold-border', { ...defaultUser, isDonating: true }],
    ['blue-border', { ...defaultUser, yearsTopContributor: ['2020'] }],
    [
      'purple-border',
      {
        ...defaultUser,
        isDonating: true,
        yearsTopContributor: ['2020']
      }
    ]
  ])('uses the %s avatar border', (expectedClass, user) => {
    const componentTree = create(<AuthOrProfile user={user} />).toJSON();

    expect(avatarHasClass(componentTree, expectedClass)).toBeTruthy();
  });
});
