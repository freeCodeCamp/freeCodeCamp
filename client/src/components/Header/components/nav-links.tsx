/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// @ts-nocheck
import {
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@freecodecamp/react-bootstrap';
import React, { Component, Fragment, createRef } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import envData from '../../../../../config/env.json';
import {
  availableLangs,
  LangNames,
  LangCodes
} from '../../../../../config/i18n/all-langs';
import { hardGoTo as navigate } from '../../../redux';
import { updateUserFlag } from '../../../redux/settings';
import createLanguageRedirect from '../../create-language-redirect';
import { Link } from '../../helpers';
import { Themes } from '../../settings/theme';
import LanguageGlobe from '../../../assets/icons/language-globe';

interface NavigationLocationApi {
  clientLocale: string;
  radioLocation: string;
  apiLocation: string;
}

const { clientLocale, radioLocation, apiLocation }: NavigationLocationApi =
  envData as FormData;

const locales = availableLangs.client;

interface NavlinkArgProp {
  arg: Record<string, unknown>;
}

export interface NavLinksProps {
  displayMenu?: boolean;
  isLanguageMenuDisplayed?: boolean;
  showSignoutModal?: boolean;
  fetchState?: { pending: boolean };
  i18n: Record<string, unknown>;
  t: TFunction;
  signOutAttribute: (attributes: Record<string, unknown>) => void;
  hideMenu: () => void;
  toggleNightMode: (theme: Themes) => Theme;
  user?: { isDonating: boolean; username: string; theme: Themes };
  navigate?: (location: string) => void;
  showLanguageMenu?: (elementToFocus: HTMLButtonElement) => void;
  hideLanguageMenu?: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
}

const mapDispatchToProps = {
  navigate,
  toggleNightMode: (theme: Themes) => updateUserFlag({ theme })
};

/*ToDo 
create ability to focus on the button when closing the model
show the signout modal
*/

export class NavLinks extends Component<NavLinksProps, NavlinkArgProp> {
  static displayName: string;
  langButtonRef: React.RefObject<HTMLButtonElement>;
  firstLangOptionRef: React.RefObject<HTMLElement>;
  lastLangOptionRef: React.RefObject<HTMLElement>;

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
    this.handleSignOutModal = this.handleSignOutModal.bind(this);
  }

  toggleTheme(currentTheme = Themes.Default, toggleNightMode: Themes.Night) {
    toggleNightMode(
      currentTheme === Themes.Night ? Themes.Default : Themes.Night
    );
  }

  getPreviousMenuItem(target: HTMLElement): HTMLElement {
    const { menuButtonRef } = this.props;
    const previousSibling =
      target.closest('.nav-list > li')?.previousElementSibling;
    return previousSibling?.querySelector('a, button') ?? menuButtonRef.current;
  }

  handleSignOutModal = (): void => {
    console.log(showSignoutModal);
    this.setState({ showSignoutModal: !showSignoutModal });
  };

  handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    interface LanguageChange {
      hideMenu: () => void;
      hideLanguageMenu: () => void;
      menuButtonRef: React.RefObject<HTMLButtonElement>;
      navigate: Component;
    }

    const {
      hideMenu,
      hideLanguageMenu,
      menuButtonRef,
      navigate
    }: LanguageChange = this.props;
    interface ProperlyTyped {
      target: { dataset: { value: string } };
    }
    const newLanguage = event.target.dataset.value as ProperlyTyped;
    // If user selected cancel then close menu and put focus on button
    if (newLanguage === 'exit-lang-menu') {
      // Set focus to language button first so we don't lose focus
      // for screen readers.
      this.langButtonRef.current.focus();
      hideLanguageMenu();
      return;
    }
    // Put focus on menu button first so we don't lose focus
    // for screen readers.
    menuButtonRef.current.focus();
    hideMenu();
    // If user selected the current language then we just close the menu
    if (newLanguage === clientLocale) {
      return;
    }
    const path = createLanguageRedirect({
      clientLocale,
      lang: newLanguage
    });

    return navigate(path);
  };

  handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    const { menuButtonRef, hideMenu } = this.props;
    if (event.key === 'escape') {
      menuButtonRef.current.focus();
      hideMenu();
      event.preventDefault();
    }
  };

  handleLanguageButtonClick = (): void => {
    const { isLanguageMenuDisplayed, hideLanguageMenu, showLanguageMenu } =
      this.props;
    if (isLanguageMenuDisplayed) {
      hideLanguageMenu();
    } else {
      showLanguageMenu(this.firstLangOptionRef.current);
    }
  };

  handleLanguageButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { menuButtonRef, showLanguageMenu, hideMenu } = this.props;
    const doKeyPress = {
      escape: () => {
        menuButtonRef.current.focus();
        hideMenu();
        event.preventDefault();
      },
      arrowDown: () => {
        showLanguageMenu(this.firstLangOptionRef.current);
        event.preventDefault();
      },
      arrowUp: () => {
        showLanguageMenu(this.lastLangOptionRef.current);
        event.preventDefault();
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    doKeyPress[event.key]?.();
  };

  handleLanguageMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { hideLanguageMenu, hideMenu } = this.props;
    const focusFirstLanguageMenuItem = () => {
      this.firstLangOptionRef.current.focus();
      event.preventDefault();
    };
    const focusLastLanguageMenuItem = () => {
      this.lastLangOptionRef.current.focus();
      event.preventDefault();
    };
    /* eslint-disable @typescript-eslint/naming-convention */
    const doKeyPress = {
      Tab: () => {
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
        // Because FF adds an extra tab stop to the lang menu (because it
        // is scrollable) we need to manually focus the previous menu item.
        this.getPreviousMenuItem(this.langButtonRef.current).focus();
        hideLanguageMenu();
        event.preventDefault();
      },
      arrowUp: () => {
        const arrowUpItemToFocus =
          event.target === this.firstLangOptionRef.current
            ? this.lastLangOptionRef.current
            : (event.target.parentNode.previousSibling
                .firstChild as HTMLElement);
        arrowUpItemToFocus.focus();
        event.preventDefault();
      },
      arrowDown: () => {
        const arrowDownItemToFocus =
          event.target === this.lastLangOptionRef.current
            ? this.firstLangOptionRef.current
            : (event.target.parentNode.nextSibling.firstChild as HTMLElement);
        arrowDownItemToFocus.focus();
        event.preventDefault();
      },
      escape: () => {
        // Set focus to language button first so we don't lose focus
        // for screen readers.
        this.langButtonRef.current.focus();
        hideLanguageMenu();
        event.preventDefault();
      },
      Home: focusFirstLanguageMenuItem,
      PageUp: focusFirstLanguageMenuItem,
      End: focusLastLanguageMenuItem,
      PageDown: focusLastLanguageMenuItem
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    doKeyPress[event.key]?.();
  };

  // Added to the last item in the nav menu. Will close the menu if
  // the user Tabs out of the menu.
  handleBlur = (event: React.FocusEvent<HTMLButtonElement>): void => {
    const { hideMenu, menuButtonRef } = this.props;
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      hideMenu();
    }
  };

  render() {
    const {
      displayMenu,
      isLanguageMenuDisplayed,
      fetchState,
      t,
      toggleNightMode,
      showSignoutModal,
      user: { isDonating = false, username, theme }
    }: NavLinksProps = this.props;

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
        {isDonating ? (
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
        {username && (
          <Fragment key='profile-settings'>
            <li key='profile'>
              <Link
                className='nav-link'
                onKeyDown={this.handleMenuKeyDown}
                sameTab={false}
                to={`/${username as string}`}
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
          </Fragment>
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
            {...(!username && { 'aria-describedby': 'theme-sign-in' })}
            aria-disabled={!username}
            aria-pressed={theme === Themes.Night ? 'true' : 'false'}
            className={
              'nav-link nav-link-flex' + (!username ? ' nav-link-header' : '')
            }
            onClick={() => {
              if (username) {
                this.toggleTheme(String(theme), toggleNightMode);
              }
            }}
            onKeyDown={this.handleMenuKeyDown}
          >
            {username ? (
              <>
                <span>{t('settings.labels.night-mode')}</span>
                {theme === Themes.Night ? (
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
              className={'nav-lang-menu' + (username ? ' logged-in' : '')}
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
                  tabIndex='-1'
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
                      lang: LangCodes[lang] as string
                    })}
                    onClick={this.handleLanguageChange}
                    onKeyDown={this.handleLanguageMenuKeyDown}
                    {...(index === locales.length - 1 && {
                      ref: this.lastLangOptionRef
                    })}
                    role='menuitem'
                    tabIndex='-1'
                  >
                    {LangNames[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {username && (
          <Fragment key='signout-frag'>
            {/* <li className='nav-line' key='sign-out'>
              <a
                className='nav-link nav-link-signout'
                href={`${apiLocation}/signout`}
                onBlur={this.handleBlur}
                onKeyDown={this.handleMenuKeyDown}
              >
                {t('buttons.sign-out')}
              </a>
            </li> */}
            <li>
              <button
                className='nav-link nav-link-signout'
                onClick={() => this.setState({ showModal: true })}
              >
                {t('buttons.sign-out')}
              </button>
              {/*<Modal dialogClassName='Signout-modal' onHide={this.closeSignOutModal} show={this.handleSignOutModal}>  */}
              <Modal
                dialogClassName='Signout-modal'
                onHide={this.handleSignOutModal}
                show={showSignoutModal}
              >
                <Modal.Header
                  className='Signout-modal-header fcc-modal'
                  closeButton={this.handleSignOutModal}
                />
                <Modal.Body className='Signout-modal-body text-center'>
                  <p>{t('misc.sign-out')}</p>
                  <a
                    className='nav-link nav-link-signout'
                    href={`${apiLocation}/signout`}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleMenuKeyDown}
                  >
                    {t('buttons.sign-out')}
                  </a>
                  <button>Cansel Signing out</button>
                </Modal.Body>
              </Modal>
            </li>
          </Fragment>
        )}
      </ul>
    );
  }
}

NavLinks.displayName = 'NavLinks';

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
