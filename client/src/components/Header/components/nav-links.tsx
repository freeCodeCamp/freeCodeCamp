import {
  faCheckSquare,
  faSquare,
  faExternalLinkAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useRef } from 'react';
import Media from 'react-responsive';
import { TFunction, withTranslation } from 'react-i18next';
import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { clientLocale, radioLocation } from '../../../../../config/env.json';
import { DONATE_NAV_EXPOSED_WIDTH } from '../../../../../config/misc';
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

interface DonateButtonProps {
  isUserDonating: boolean | undefined;
  handleMenuKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
  t: TFunction;
}

type DonateItemProps = Pick<DonateButtonProps, 'handleMenuKeyDown'> & {
  donateText: string;
};

const DonateItem = ({ handleMenuKeyDown, donateText }: DonateItemProps) => (
  <li key='donate'>
    <Link
      className='nav-link'
      onKeyDown={handleMenuKeyDown}
      sameTab={false}
      to='/donate'
      data-test-label='dropdown-donate-button'
      nav-donate-button
    >
      {donateText}
    </Link>
  </li>
);

const ThankYouMessage = ({ message }: { message: string }) => (
  <li className='nav-link nav-link-flex nav-link-header' key='donate'>
    {message}
    <FontAwesomeIcon icon={faHeart} />
  </li>
);

const DonateButton = ({
  isUserDonating,
  handleMenuKeyDown,
  t
}: DonateButtonProps) => {
  const exposeUniversalDonateButton = useFeature('expose_donate_button').on;
  if (isUserDonating) return <ThankYouMessage message={t('donate.thanks')} />;
  else if (exposeUniversalDonateButton)
    return (
      <Media maxWidth={DONATE_NAV_EXPOSED_WIDTH}>
        <DonateItem
          handleMenuKeyDown={handleMenuKeyDown}
          donateText={t('buttons.donate')}
        />
      </Media>
    );
  else
    return (
      <DonateItem
        handleMenuKeyDown={handleMenuKeyDown}
        donateText={t('buttons.donate')}
      />
    );
};

function NavLinks({
  menuButtonRef,
  hideLanguageMenu,
  openSignoutModal,
  hideMenu,
  showLanguageMenu,
  isLanguageMenuDisplayed,
  displayMenu,
  fetchState,
  t,
  toggleNightMode,
  user,
  navigate
}: NavLinksProps) {
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const firstLangOptionRef = useRef<HTMLButtonElement>(null);
  const lastLangOptionRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = (
    currentTheme = Themes.Default,
    toggleNightMode: (theme: Themes) => Themes
  ) => {
    toggleNightMode(
      currentTheme === Themes.Night ? Themes.Default : Themes.Night
    );
  };

  const getPreviousMenuItem = (target: HTMLButtonElement | null) => {
    const previousSibling =
      target?.closest('.nav-list > li')?.previousElementSibling;
    const previousButton = previousSibling?.querySelector<
      HTMLButtonElement | HTMLAnchorElement
    >('a, button');
    return previousButton ?? menuButtonRef.current;
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();

    const newLanguage = event.currentTarget.dataset.value as string;
    // If user selected cancel then close menu and put focus on button
    if (newLanguage === 'exit-lang-menu') {
      // Set focus to language button first so we don't lose focus
      // for screen readers.
      langButtonRef.current?.focus();
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

  const handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (event.key === 'Escape') {
      menuButtonRef.current?.focus();
      hideMenu();
      event.preventDefault();
    }
  };

  const handleLanguageButtonClick = () => {
    if (isLanguageMenuDisplayed) {
      hideLanguageMenu();
    } else {
      showLanguageMenu(firstLangOptionRef.current);
    }
  };

  const handleSignOutKeys = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
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

  const handleLanguageButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
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
            showLanguageMenu(firstLangOptionRef.current);
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowUp',
        {
          select: () => {
            showLanguageMenu(lastLangOptionRef.current);
            event.preventDefault();
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  const handleLanguageMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const focusFirstLanguageMenuItem = () => {
      firstLangOptionRef.current?.focus();
      event.preventDefault();
    };
    const focusLastLanguageMenuItem = () => {
      lastLangOptionRef.current?.focus();
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
            const currentButton = langButtonRef.current;
            getPreviousMenuItem(currentButton)?.focus();
            hideLanguageMenu();
            event.preventDefault();
          }
        }
      ],
      [
        'Escape',
        {
          select: () => {
            langButtonRef.current?.focus();
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
              event.target === lastLangOptionRef.current;
            const selectCancelButton = firstLangOptionRef.current?.focus();
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
              event.target === firstLangOptionRef.current;
            const selectLastLanguage = lastLangOptionRef.current?.focus();
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
  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      hideMenu();
    }
  };

  const handleSignOutClick = (): void => {
    hideMenu();
    openSignoutModal();
  };

  const isUserDonating = user?.isDonating;
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
      <DonateButton
        t={t}
        isUserDonating={isUserDonating}
        handleMenuKeyDown={handleMenuKeyDown}
      />
      <li key='learn'>
        <Link className='nav-link' onKeyDown={handleMenuKeyDown} to='/learn'>
          {t('buttons.curriculum')}
        </Link>
      </li>
      {currentUserName && (
        <>
          <li key='profile'>
            <Link
              className='nav-link'
              onKeyDown={handleMenuKeyDown}
              sameTab={false}
              to={`/${currentUserName}`}
            >
              {t('buttons.profile')}
            </Link>
          </li>
          <li key='settings'>
            <Link
              className='nav-link'
              onKeyDown={handleMenuKeyDown}
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
          onKeyDown={handleMenuKeyDown}
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
          onKeyDown={handleMenuKeyDown}
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
          onKeyDown={handleMenuKeyDown}
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
              toggleTheme(currentUserTheme, toggleNightMode);
            }
          }}
          onKeyDown={handleMenuKeyDown}
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
              <span className='sr-only'>{t('settings.labels.night-mode')}</span>
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
            onBlur={handleBlur}
            onClick={handleLanguageButtonClick}
            onKeyDown={handleLanguageButtonKeyDown}
            ref={langButtonRef}
          >
            <span>{t('buttons.change-language')}</span>
            <LanguageGlobe />
          </button>
          <ul
            aria-labelledby='nav-lang-button'
            className={'nav-lang-menu' + (currentUserName ? ' logged-in' : '')}
            id='nav-lang-menu'
            role='menu'
          >
            <li key='lang-menu-exit' role='none'>
              <button
                className='nav-link nav-lang-menu-option'
                data-value='exit-lang-menu'
                onClick={handleLanguageChange}
                onKeyDown={handleLanguageMenuKeyDown}
                ref={firstLangOptionRef}
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
                  onClick={handleLanguageChange}
                  onKeyDown={handleLanguageMenuKeyDown}
                  {...(index === locales.length - 1 && {
                    ref: lastLangOptionRef
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
            onClick={handleSignOutClick}
            onKeyDown={handleSignOutKeys}
          >
            {t('buttons.sign-out')}
          </button>
        </li>
      )}
    </ul>
  );
}

NavLinks.displayName = 'NavLinks';

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
// to please TypeScript, action.js needs to be migrated to TypeScript
export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
