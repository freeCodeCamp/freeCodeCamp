import {
  faCheckSquare,
  faSquare,
  faExternalLinkAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { radioLocation } from '../../../../../config/env.json';
import { openSignoutModal } from '../../../redux/actions';
import { updateMyTheme } from '../../../redux/settings/actions';
import { Link } from '../../helpers';
import { type ThemeProps, Themes } from '../../settings/theme';
import { User } from '../../../redux/prop-types';

export interface NavLinksProps extends Pick<ThemeProps, 'toggleNightMode'> {
  displayMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
  user?: User;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  openSignoutModal: () => void;
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
  if (isUserDonating) return <ThankYouMessage message={t('donate.thanks')} />;
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
  menuButtonRef,
  openSignoutModal,
  hideMenu,
  displayMenu,
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

  const handleSignOutClick = (): void => {
    hideMenu();
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
      <li key='contribute'>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          onKeyDown={handleMenuKeyDown}
          sameTab={false}
          to={t('links:nav.contribute')}
        >
          <span>{t('buttons.contribute')}</span>
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
