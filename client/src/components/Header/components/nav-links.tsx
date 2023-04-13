import {
  faCheckSquare,
  faSquare,
  faExternalLinkAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import Media from 'react-responsive';
import { useTranslation, withTranslation } from 'react-i18next';
import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { radioLocation } from '../../../../../config/env.json';
import { DONATE_NAV_EXPOSED_WIDTH } from '../../../../../config/misc';
import { openSignoutModal } from '../../../redux/actions';
import { updateMyTheme } from '../../../redux/settings/actions';
import { Link } from '../../helpers';
import { type ThemeProps, Themes } from '../../settings/theme';
import { User } from '../../../redux/prop-types';

export interface NavLinksProps extends Pick<ThemeProps, 'toggleNightMode'> {
  user?: User;
}

const mapDispatchToProps = {
  toggleNightMode: (theme: Themes) => updateMyTheme({ theme }),
  openSignoutModal
};

interface DonateButtonProps {
  isUserDonating: boolean | undefined;
  handleMenuKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
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
  handleMenuKeyDown
}: DonateButtonProps) => {
  const { t } = useTranslation();
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

const toggleTheme = (
  currentTheme = Themes.Default,
  toggleNightMode: typeof updateMyTheme
) => {
  toggleNightMode(
    currentTheme === Themes.Night ? Themes.Default : Themes.Night
  );
};

function NavLinks({
  t,
  toggleNightMode,
  user
}: NavLinksProps) {
  const { t } = useTranslation();
  const {
    isDonating: isUserDonating,
    username: currentUserName,
    theme: currentUserTheme
  } = user || {};

  // the accessibility tree just needs a little more time to pick up the change.
  // This function allows us to set aria-expanded to false and then delay just a bit before setting focus on the button
  const closeAndFocus = () => {
    menuButtonRef.current?.classList.add('force-show');
    hideMenu();
    setTimeout(() => {
      menuButtonRef.current?.focus();
      menuButtonRef.current?.classList.remove('force-show');
    }, 100);
  };

  const handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAndFocus();
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
            event.preventDefault();
            closeAndFocus();
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
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowDown',
        {
          select: () => {
            event.preventDefault();
          }
        }
      ],
      [
        'ArrowUp',
        {
          select: () => {
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
              // Close the menu if focus is now outside of the menu. This will
              // happen when there is no Sign Out menu item.
              return;
            }
            // Because FF adds an extra Tab stop to the lang menu (because it
            // is scrollable) we need to manually focus the previous menu item.
            event.preventDefault();
          }
        }
      ],
      [
        'Escape',
        {
          select: () => {
            langButtonRef.current?.focus();
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
  const handleSignOutClick = (): void => {
    openSignoutModal();
  };

  return (
    <ul
      aria-labelledby='toggle-button-nav'
      className={`nav-list${displayMenu ? ' display-menu' : ''}`}
    >
      <DonateButton
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
          onKeyDown={currentUserName ? handleMenuKeyDown : handleSignOutKeys}
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
            aria-expanded={true}
            aria-haspopup='true'
            className='nav-link nav-lang-button'
            id='nav-lang-button'
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

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
