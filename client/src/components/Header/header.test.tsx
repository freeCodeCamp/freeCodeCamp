/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import envData from '../../../../config/env.json';
import { availableLangs, LangNames } from '../../../../config/i18n/all-langs';
import { Themes } from '../settings/theme';
import AuthOrProfile from './components/auth-or-profile';
import { NavLinks } from './components/nav-links';
import { UniversalNav } from './components/universal-nav';

const { apiLocation, clientLocale } = envData;

jest.mock('../../analytics');

describe('<UniversalNav />', () => {
  const UniversalNavProps = {
    displayMenu: false,
    menuButtonRef: {} as Ref<HTMLButtonElement> | undefined,
    searchBarRef: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleDisplayMenu: function () {},
    pathName: '/',
    fetchState: {
      pending: false
    }
  };
  it('renders to the DOM', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<UniversalNav {...UniversalNavProps} />);
    const view = utils.getRenderOutput();
    expect(view).toBeTruthy();
  });
});

describe('<NavLinks />', () => {
  const { t } = useTranslation();
  it('has expected navigation links when not signed in', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isDonating: false,
        username: null,
        theme: Themes.Default
      },
      i18n: {
        language: 'en'
      },
      toggleNightMode: (theme: Themes) => theme,
      t: t
    };
    const utils = ShallowRenderer.createRenderer();
    utils.render(<NavLinks {...landingPageProps} />);
    const view = utils.getRenderOutput();
    expect(
      hasDonateNavItem(view) &&
        hasSignInNavItem(view) &&
        hasCurriculumNavItem(view) &&
        hasForumNavItem(view) &&
        hasNewsNavItem(view) &&
        hasRadioNavItem(view) &&
        hasLanguageHeader(view) &&
        hasLanguageDropdown(view)
    ).toBeTruthy();
  });

  it('has expected navigation links when signed in', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isDonating: false,
        username: 'nhcarrigan',
        theme: Themes.Default
      },
      i18n: {
        language: 'en'
      },
      t: t,
      toggleNightMode: (theme: Themes) => theme
    };
    const utils = ShallowRenderer.createRenderer();
    utils.render(<NavLinks {...landingPageProps} />);
    const view = utils.getRenderOutput();
    expect(
      hasDonateNavItem(view) &&
        hasCurriculumNavItem(view) &&
        hasProfileAndSettingsNavItems(view, landingPageProps.user.username) &&
        hasForumNavItem(view) &&
        hasNewsNavItem(view) &&
        hasRadioNavItem(view) &&
        hasSignOutNavItem(view)
    ).toBeTruthy();
  });

  it('has expected navigation links when signed in and donating', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isDonating: true,
        username: 'moT01',
        theme: Themes.Default
      },
      i18n: {
        language: 'en'
      },
      t: t,
      toggleNightMode: (theme: Themes) => theme
    };
    const utils = ShallowRenderer.createRenderer();
    utils.render(<NavLinks {...landingPageProps} />);
    const view = utils.getRenderOutput();
    expect(
      hasThanksForDonating(view) &&
        hasCurriculumNavItem(view) &&
        hasProfileAndSettingsNavItems(view, landingPageProps.user.username) &&
        hasForumNavItem(view) &&
        hasNewsNavItem(view) &&
        hasRadioNavItem(view) &&
        hasSignOutNavItem(view) &&
        hasLanguageHeader(view) &&
        hasLanguageDropdown(view)
    ).toBeTruthy();
  });

  it('has expected available languages in the language dropdown', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isDonating: true,
        username: 'moT01',
        theme: Themes.Default
      },
      i18n: {
        language: 'en'
      },
      t: t,
      toggleNightMode: (theme: Themes) => theme
    };
    const utils = ShallowRenderer.createRenderer();
    utils.render(<NavLinks {...landingPageProps} />);
    const view = utils.getRenderOutput();
    expect(
      hasLanguageHeader(view) &&
        hasLanguageDropdown(view) &&
        hasAllAvailableLanguagesInDropdown(view)
    ).toBeTruthy();
  });

  it('has default language selected in language dropdown based on client config', () => {
    const landingPageProps = {
      fetchState: {
        pending: false
      },
      user: {
        isDonating: true,
        username: 'moT01',
        theme: Themes.Default
      },
      i18n: {
        language: 'en'
      },
      t: t,
      toggleNightMode: (theme: Themes) => theme
    };
    const utils = ShallowRenderer.createRenderer();
    utils.render(<NavLinks {...landingPageProps} />);
    const view = utils.getRenderOutput();
    expect(
      hasLanguageHeader(view) &&
        hasLanguageDropdown(view) &&
        hasAllAvailableLanguagesInDropdown(view) &&
        hasDefaultLanguageInLanguageDropdown(view, clientLocale)
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

const navigationLinks = (component: JSX.Element, key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const target = component.props.children.find(
    (child: { key?: string }) => child && child.key === key
  );
  return target.props;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const profileNavItem = (component: any) => component.children[0];

const hasDonateNavItem = (component: JSX.Element) => {
  const { children, to } = navigationLinks(component, 'donate');
  return children === 'buttons.donate' && to === '/donate';
};

const hasThanksForDonating = (component: JSX.Element) => {
  const { children } = navigationLinks(component, 'donate');
  return children ? children[0].props.children === 'donate.thanks' : null;
};

const hasSignInNavItem = (component: JSX.Element) => {
  const { children } = navigationLinks(component, 'signin');
  return children === 'buttons.sign-in';
};

const hasCurriculumNavItem = (component: JSX.Element) => {
  const { children, to } = navigationLinks(component, 'learn');
  return children === 'buttons.curriculum' && to === '/learn';
};

const hasProfileAndSettingsNavItems = (
  component: JSX.Element,
  username: string
) => {
  const fragment = navigationLinks(component, 'profile-settings');

  const profile = fragment ? fragment.children[0].props : null;
  const settings = fragment.children[1].props;

  const hasProfile =
    profile.children === 'buttons.profile' && profile.to === `/${username}`;
  const hasSettings =
    settings.children === 'buttons.settings' && settings.to === '/settings';

  return hasProfile && hasSettings;
};

const hasForumNavItem = (component: JSX.Element) => {
  const { children, to } = navigationLinks(component, 'forum');
  // TODO: test compiled TFunction value
  return (
    children[0].props.children === 'buttons.forum' && to === 'links:nav.forum'
  );
};

const hasNewsNavItem = (component: JSX.Element) => {
  const { children, to } = navigationLinks(component, 'news');
  return (
    children[0].props.children === 'buttons.news' && to === 'links:nav.news'
  );
};

const hasRadioNavItem = (component: JSX.Element) => {
  const { children, to } = navigationLinks(component, 'radio');
  return (
    children[0].props.children === 'buttons.radio' &&
    to === 'https://coderadio.freecodecamp.org'
  );
};

const hasLanguageHeader = (component: JSX.Element) => {
  const { children } = navigationLinks(component, 'lang-header');
  return children === 'footer.language';
};

const hasLanguageDropdown = (component: JSX.Element) => {
  const { children } = navigationLinks(component, 'language-dropdown');
  return children.type === 'select';
};

const hasDefaultLanguageInLanguageDropdown = (
  component: JSX.Element,
  defaultLanguage: string
) => {
  const { children } = navigationLinks(component, 'language-dropdown');
  return children.props.value === defaultLanguage;
};

const hasAllAvailableLanguagesInDropdown = (component: JSX.Element) => {
  const { children }: { children: JSX.Element } = navigationLinks(
    component,
    'language-dropdown'
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return children.props.children.every(
    ({ props }: { props: { value: string; children: string } }) =>
      availableLangs.client.includes(props.value) &&
      Object.values(LangNames).filter(
        langName => langName == props.value
      )[0] === props.children
  );
};

const hasSignOutNavItem = (component: JSX.Element) => {
  const { children } = navigationLinks(component, 'signout-frag');
  const signOutProps = children[1].props;

  return (
    signOutProps.children === 'buttons.sign-out' &&
    signOutProps.href === `${apiLocation}/signout`
  );
};

/* TODO: Apply this to Universalnav component
const hasSignInButton = component =>
  component.props.children[1].props.children === 'buttons.sign-in';
*/

const avatarHasClass = (
  componentTree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
  classes: string
) => {
  return (
    profileNavItem(componentTree).props.className ===
    'avatar-container ' + classes
  );
};
