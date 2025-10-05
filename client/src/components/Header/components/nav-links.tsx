import {
  faCheckSquare,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { radioLocation } from '../../../../config/env.json';
import { openSignoutModal, toggleTheme } from '../../../redux/actions';
import { Link } from '../../helpers';
import { LocalStorageThemes } from '../../../redux/types';
import { themeSelector } from '../../../redux/selectors';
import SupporterBadge from '../../../assets/icons/supporter-badge';

export interface NavLinksProps {
  displayMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
  user?: { isDonating: boolean; username: string };
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  openSignoutModal: () => void;
  theme: LocalStorageThemes;
  toggleTheme: () => void;
}

const mapDispatchToProps = {
  toggleTheme,
  openSignoutModal
};

const mapStateToProps = createSelector(
  themeSelector,
  (theme: LocalStorageThemes) => ({ theme })
);

interface DonateButtonProps {
  isUserDonating: boolean | undefined;
  handleMenuKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
}

const DonateButton = ({
  isUserDonating,
  handleMenuKeyDown
}: DonateButtonProps) => {
  const { t } = useTranslation();
  return (
    <li key={isUserDonating ? 'supporter' : 'donate'}>
      <Link
        className={`nav-link nav-link-flex nav-link-header ${
          isUserDonating && 'nav-link-supporter'
        }`}
        onKeyDown={handleMenuKeyDown}
        sameTab={false}
        to={isUserDonating ? '/supporters' : '/donate'}
        data-test-label={
          isUserDonating ? 'dropdown-support-button' : 'dropdown-donate-button'
        }
      >
        {isUserDonating ? (
          <>
            {t('buttons.supporters')}
            <SupporterBadge />
          </>
        ) : (
          <>{t('buttons.donate')}</>
        )}
      </Link>
    </li>
  );
};

function NavLinks({
  menuButtonRef,
  openSignoutModal,
  hideMenu,
  displayMenu,
  user,
  theme,
  toggleTheme
}: NavLinksProps) {
  const { t } = useTranslation();
  const { isDonating: isUserDonating, username: currentUserName } = user || {};

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
      data-playwright-test-label='header-menu'
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
          <span className='sr-only'>, {t('aria.opens-new-window')}</span>

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
          <span className='sr-only'>, {t('aria.opens-new-window')}</span>
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
          <span className='sr-only'>, {t('aria.opens-new-window')}</span>
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
          <span className='sr-only'>, {t('aria.opens-new-window')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
      </li>
      <li key='podcast'>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          onKeyDown={handleMenuKeyDown}
          sameTab={false}
          to={t('links:nav.podcast')}
        >
          <span>{t('buttons.podcast')}</span>
          <span className='sr-only'>, {t('aria.opens-new-window')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
      </li>
      <li className='nav-line' key='theme'>
        <button
          aria-pressed={theme === LocalStorageThemes.Dark}
          className={'nav-link nav-link-flex'}
          onClick={toggleTheme}
          onKeyDown={currentUserName ? handleMenuKeyDown : handleSignOutKeys}
        >
          <span>{t('settings.labels.night-mode')}</span>
          {theme === LocalStorageThemes.Dark ? (
            <FontAwesomeIcon icon={faCheckSquare} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(NavLinks));
