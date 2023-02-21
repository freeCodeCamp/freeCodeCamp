import {
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment, createRef } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { clientLocale, radioLocation } from '../../../../../config/env.json';
import {
  availableLangs,
  LangNames,
  LangCodes,
  hiddenLangs
} from '../../../../../config/i18n';
import { hardGoTo as navigate, openSignoutModal } from '../../../redux/actions';
import { updateMyTheme } from '../../../redux/settings/actions';
import createLanguageRedirect from '../../create-language-redirect';
import { Link } from '../../helpers';
import { Themes } from '../../settings/theme';
import LanguageGlobe from '../../../assets/icons/language-globe';
import { User } from '../../../redux/prop-types';

const locales = availableLangs.client.filter(
  lang => !hiddenLangs.includes(lang)
);

interface NavlinkStates {
  arg: Record<string, unknown>;
}

interface NavLinksProps {
  displayMenu: boolean;
  isLanguageMenuDisplayed: boolean;
  fetchState: { pending: boolean };
  i18n: Record<string, unknown>;
  t: TFunction;
  showMenu: () => void;
  hideMenu: () => void;
  toggleNightMode: (theme: Themes) => Themes;
  user?: User;
  navigate?: (location: string) => void;
  showLanguageMenu: (elementToFocus: HTMLButtonElement | null) => void;
  hideLanguageMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  openSignoutModal: () => void;
}

const mapDispatchToProps = {
  navigate,
  toggleNightMode: (theme: Themes) => updateMyTheme({ theme }),
  openSignoutModal
};

class NavLinks extends Component<NavLinksProps, NavlinkStates> {
  static displayName: string;
  langButtonRef: React.RefObject<HTMLButtonElement>;
  firstLangOptionRef: React.RefObject<HTMLButtonElement>;
  lastLangOptionRef: React.RefObject<HTMLButtonElement>;

  constructor(props: NavLinksProps) {
    super(props);
    this.langButtonRef = createRef();
    this.firstLangOptionRef = createRef();
    this.lastLangOptionRef = createRef();
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleLanguageMenuKeyDown = this.handleLanguageMenuKeyDown.bind(this);
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.handleLanguageButtonKeyDown =
      this.handleLanguageButtonKeyDown.bind(this);
    this.handleMenuKeyDown = this.handleMenuKeyDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  toggleTheme(
    currentTheme = Themes.Default,
    toggleNightMode: (theme: Themes) => Themes
  ) {
    toggleNightMode(
      currentTheme === Themes.Night ? Themes.Default : Themes.Night
    );
  }

  getPreviousMenuItem(target: HTMLButtonElement | null) {
    const { menuButtonRef } = this.props;
    const previousSibling =
      target?.closest('.nav-list > li')?.previousElementSibling;
    const previousButton = previousSibling?.querySelector<
      HTMLButtonElement | HTMLAnchorElement
    >('a, button');
    return previousButton ?? menuButtonRef.current;
  }

  handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    interface LanguageChange {
      hideMenu: (() => void) | undefined;
      hideLanguageMenu: (() => void) | undefined;
      menuButtonRef: React.RefObject<HTMLButtonElement>;
      navigate?: (pathProp: string) => void;
    }

    const {
      hideMenu,
      hideLanguageMenu,
      menuButtonRef,
      navigate
    }: LanguageChange = this.props;

    const newLanguage = event.currentTarget.dataset.value as string;
    // If user selected cancel then close menu and put focus on button
    if (newLanguage === 'exit-lang-menu') {
      // Set focus to language button first so we don't lose focus
      // for screen readers.
      this.langButtonRef.current?.focus();
      hideLanguageMenu();
      return;
    }
    // Put focus on menu button first so we don't lose focus
    // for screen readers.
    menuButtonRef.current?.focus();
    hideMenu();
    // If user selected the current language then we just close the menu
    if (newLanguage === clientLocale) {
      return;
    }
    const path = createLanguageRedirect({
      clientLocale,
      lang: newLanguage
    });
    if (typeof navigate !== 'undefined') {
      return navigate(path);
    }
  };

  handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { menuButtonRef, hideMenu } = this.props;
    if (event.key === 'Escape') {
      menuButtonRef.current?.focus();
      hideMenu();
      event.preventDefault();
    }
  };

  handleLanguageButtonClick = () => {
    const { isLanguageMenuDisplayed, hideLanguageMenu, showLanguageMenu } =
      this.props;
    if (isLanguageMenuDisplayed) {
      hideLanguageMenu();
    } else {
      showLanguageMenu(this.firstLangOptionRef.current);
    }
  };

  handleSignOutKeys = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { menuButtonRef, hideMenu } = this.props;
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Escape',
        {
          select: () => {
            menuButtonRef.current?.focus();
            hideMenu();
            event.preventDefault();
          }
        }
      ],
      [
        'Tab',
        {
          select: () => {
            const camperPressedTheShiftKey = event.shiftKey;
            if (!camperPressedTheShiftKey) {
              hideMenu();
            }
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };
  handleLanguageButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { menuButtonRef, showLanguageMenu, hideMenu } = this.props;

    // the strings in map need to start with a Capital latter, because event.key preduce a string that starts with a capital latter
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Escape',
        {
          select: () => {
            menuButtonRef.current?.focus();
            hideMenu();
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowDown',
        {
          select: () => {
            showLanguageMenu(this.firstLangOptionRef.current);
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowUp',
        {
          select: () => {
            showLanguageMenu(this.lastLangOptionRef.current);
            event.preventDefault();
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  handleLanguageMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { hideLanguageMenu, hideMenu } = this.props;
    const focusFirstLanguageMenuItem = () => {
      this.firstLangOptionRef.current?.focus();
      event.preventDefault();
    };
    const focusLastLanguageMenuItem = () => {
      this.lastLangOptionRef.current?.focus();
      event.preventDefault();
    };
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Tab',
        {
          select: () => {
            if (!event.shiftKey) {
              // Let the Tab work as normal.
              hideLanguageMenu();
              // Close the menu if focus is now outside of the menu. This will
              // happen when there is no Sign Out menu item.
              setTimeout(() => {
                const currentlyFocusedElement = document.activeElement;
                if (
                  currentlyFocusedElement &&
                  !currentlyFocusedElement.closest('.nav-list')
                ) {
                  hideMenu();
                }
              }, 200);
              return;
            }
            // Because FF adds an extra Tab stop to the lang menu (because it
            // is scrollable) we need to manually focus the previous menu item.
            const currentButton = this.langButtonRef.current;
            this.getPreviousMenuItem(currentButton)?.focus();
            hideLanguageMenu();
            event.preventDefault();
          }
        }
      ],
      [
        'Escape',
        {
          select: () => {
            this.langButtonRef.current?.focus();
            hideLanguageMenu();
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowDown',
        {
          select: () => {
            const isFocusOnLastLanguageOption =
              event.target === this.lastLangOptionRef.current;
            const selectCancelButton = this.firstLangOptionRef.current?.focus();
            const selectNextLanguage = (
              event.currentTarget.parentNode?.nextSibling
                ?.firstChild as HTMLButtonElement
            )?.focus();
            isFocusOnLastLanguageOption
              ? selectCancelButton
              : selectNextLanguage;
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowUp',
        {
          select: () => {
            const isFocusOnCancelButton =
              event.target === this.firstLangOptionRef.current;
            const selectLastLanguage = this.lastLangOptionRef.current?.focus();
            // selectPreviousLanguage is a childNode and doesn't have focus property but it still works somehow,
            // IDK how it works, and how to please TypeScript, for now I am lying to TypeScript
            const selectPreviousLanguage = (
              event.currentTarget.parentNode?.previousSibling
                ?.firstChild as HTMLButtonElement
            )?.focus();
            isFocusOnCancelButton ? selectLastLanguage : selectPreviousLanguage;
            event.preventDefault();
          }
        }
      ],
      ['Home', { select: focusFirstLanguageMenuItem }],
      ['PageUp', { select: focusFirstLanguageMenuItem }],
      ['End', { select: focusLastLanguageMenuItem }],
      ['PageDown', { select: focusLastLanguageMenuItem }]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  // Added to the last item in the nav menu. Will close the menu if
  // the user Tabs out of the menu.
  handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    const { hideMenu, menuButtonRef } = this.props;
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      hideMenu();
    }
  };

  handleSignOutClick = (): void => {
    const { hideMenu, openSignoutModal } = this.props;
    hideMenu();
    openSignoutModal();
  };

  render() {
    const {
      displayMenu,
      isLanguageMenuDisplayed,
      fetchState,
      t,
      toggleNightMode,
      user
    }: NavLinksProps = this.props;
    const currentUserDonating = user?.isDonating;
    const currentUserName = user?.username;
    const currentUserTheme = user?.theme;
    const { pending } = fetchState;

    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <ul
        aria-labelledby='toggle-button-nav'
        className={`nav-list${displayMenu ? ' display-menu' : ''}${
          isLanguageMenuDisplayed ? ' display-lang-menu' : ''
        }`}
      >
        {currentUserDonating ? (
          <li key='donate'>
            <div className='nav-link nav-link-flex nav-link-header'>
              <span>{t('donate.thanks')}</span>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </li>
        ) : (
          <li key='donate'>
            <Link
              className='nav-link'
              onKeyDown={this.handleMenuKeyDown}
              sameTab={false}
              to='/donate'
            >
              {t('buttons.donate')}
            </Link>
          </li>
        )}
        <li key='learn'>
          <Link
            className='nav-link'
            onKeyDown={this.handleMenuKeyDown}
            to='/learn'
          >
            {t('buttons.curriculum')}
          </Link>
        </li>
        {currentUserName && (
          <>
            <li key='profile'>
              <Link
                className='nav-link'
                onKeyDown={this.handleMenuKeyDown}
                sameTab={false}
                to={`/${currentUserName}`}
              >
                {t('buttons.profile')}
              </Link>
            </li>
            <li key='settings'>
              <Link
                className='nav-link'
                onKeyDown={this.handleMenuKeyDown}
                sameTab={false}
                to={`/settings`}
              >
                {t('buttons.settings')}
              </Link>
            </li>
          </>
        )}
        <li key='forum' className='nav-line'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={t('links:nav.forum')}
          >
            <span>{t('buttons.forum')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li key='news'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={t('links:nav.news')}
          >
            <span>{t('buttons.news')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li key='radio'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={radioLocation}
          >
            <span>{t('buttons.radio')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li className='nav-line' key='theme'>
          <button
            {...(!currentUserName && { 'aria-describedby': 'theme-sign-in' })}
            aria-disabled={!currentUserName}
            aria-pressed={currentUserTheme === Themes.Night ? 'true' : 'false'}
            className={
              'nav-link nav-link-flex' +
              (!currentUserName ? ' nav-link-header' : '')
            }
            onClick={() => {
              if (currentUserName) {
                this.toggleTheme(currentUserTheme, toggleNightMode);
              }
            }}
            onKeyDown={this.handleMenuKeyDown}
          >
            {currentUserName ? (
              <>
                <span>{t('settings.labels.night-mode')}</span>
                {currentUserTheme === Themes.Night ? (
                  <FontAwesomeIcon icon={faCheckSquare} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
              </>
            ) : (
              <Fragment key='night-mode'>
                <span className='sr-only'>
                  {t('settings.labels.night-mode')}
                </span>
                <span
                  aria-hidden='true'
                  className='nav-link-dull'
                  id='theme-sign-in'
                >
                  {t('misc.change-theme')}
                </span>
              </Fragment>
            )}
          </button>
        </li>
        <li key='lang-menu'>
          {/* 
           The div existences create edge case in which camper skips the change language,
           when they press "shift+tab" on signout button whenever signout focus events uses `getPreviousMenuItem`.
           To fix this we need to remove `div`, but this creates a bug which close the menu when someone interact with it any other way except the keyboard.
           This is a complexy and footgun that can break the site without notices and we shouldn't carry,
           to sort this we need to remove the div and make focus events simpler, but that's a ToDo for later.
          */}
          <div className='nav-lang' key='language-dropdown'>
            <button
              aria-controls='nav-lang-menu'
              {...(isLanguageMenuDisplayed && { 'aria-expanded': true })}
              aria-haspopup='true'
              className='nav-link nav-lang-button'
              id='nav-lang-button'
              onBlur={this.handleBlur}
              onClick={this.handleLanguageButtonClick}
              onKeyDown={this.handleLanguageButtonKeyDown}
              ref={this.langButtonRef}
            >
              <span>{t('buttons.change-language')}</span>
              <LanguageGlobe />
            </button>
            <ul
              aria-labelledby='nav-lang-button'
              className={
                'nav-lang-menu' + (currentUserName ? ' logged-in' : '')
              }
              id='nav-lang-menu'
              role='menu'
            >
              <li key='lang-menu-exit' role='none'>
                <button
                  className='nav-link nav-lang-menu-option'
                  data-value='exit-lang-menu'
                  onClick={this.handleLanguageChange}
                  onKeyDown={this.handleLanguageMenuKeyDown}
                  ref={this.firstLangOptionRef}
                  role='menuitem'
                  tabIndex={-1}
                >
                  {t('buttons.cancel-change')}
                </button>
              </li>
              {locales.map((lang, index) => (
                <li key={'lang-' + lang} role='none'>
                  <button
                    {...(clientLocale === lang && { 'aria-current': true })}
                    className='nav-link nav-lang-menu-option'
                    data-value={lang}
                    {...(LangCodes[lang] && {
                      lang: LangCodes[lang]
                    })}
                    onClick={this.handleLanguageChange}
                    onKeyDown={this.handleLanguageMenuKeyDown}
                    {...(index === locales.length - 1 && {
                      ref: this.lastLangOptionRef
                    })}
                    role='menuitem'
                    tabIndex={-1}
                  >
                    {LangNames[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {currentUserName && (
          <li className='nav-line' key='sign-out'>
            <button
              className='nav-link nav-link-signout'
              data-value='sign-out-button'
              onClick={this.handleSignOutClick}
              onKeyDown={this.handleSignOutKeys}
            >
              {t('buttons.sign-out')}
            </button>
          </li>
        )}
      </ul>
    );
  }
}

NavLinks.displayName = 'NavLinks';

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
// to please TypeScript, action.js needs to be migrated to TypeScript
export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
