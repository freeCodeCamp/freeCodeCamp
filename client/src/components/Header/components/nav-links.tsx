/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// @ts-nocheck
import {
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import envData from '../../../../../config/env.json';
import {
  availableLangs,
  LangNames
} from '../../../../../config/i18n/all-langs';
import { hardGoTo as navigate } from '../../../redux';
import { updateUserFlag } from '../../../redux/settings';
import createLanguageRedirect from '../../create-language-redirect';
import { Link } from '../../helpers';
import { Themes } from '../../settings/theme';

const { clientLocale, radioLocation, apiLocation } = envData;

const locales = availableLangs.client;

export interface NavLinksProps {
  displayMenu?: boolean;
  fetchState?: { pending: boolean };
  i18n: Object;
  t: TFunction;
  toggleDisplayMenu?: React.MouseEventHandler<HTMLButtonElement>;
  toggleNightMode: (x: any) => any;
  user?: Record<string, unknown>;
  navigate?: (location: string) => void;
}

const mapDispatchToProps = {
  navigate,
  toggleNightMode: (theme: Themes) => updateUserFlag({ theme })
};

export class NavLinks extends Component<NavLinksProps, {}> {
  static displayName: string;

  constructor(props: NavLinksProps) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  toggleTheme(currentTheme = Themes.Default, toggleNightMode: any) {
    toggleNightMode(
      currentTheme === Themes.Night ? Themes.Default : Themes.Night
    );
  }

  handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { toggleDisplayMenu, navigate } = this.props;
    toggleDisplayMenu();

    const path = createLanguageRedirect({
      clientLocale,
      lang: event.target.value
    });

    return navigate(path);
  };

  render() {
    const {
      displayMenu,
      fetchState,
      t,
      toggleNightMode,
      user: { isDonating = false, username, theme }
    }: NavLinksProps = this.props;

    const { pending } = fetchState;

    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <div className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
        {isDonating ? (
          <div className='nav-link nav-link-flex nav-link-header' key='donate'>
            <span>{t('donate.thanks')}</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        ) : (
          <Link className='nav-link' key='donate' sameTab={false} to='/donate'>
            {t('buttons.donate')}
          </Link>
        )}
        {!username && (
          <a
            className='nav-link nav-link-sign-in'
            href={`${apiLocation}/signin`}
            key='signin'
          >
            {t('buttons.sign-in')}
          </a>
        )}
        <Link className='nav-link' key='learn' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
        {username && (
          <Fragment key='profile-settings'>
            <Link
              className='nav-link'
              key='profile'
              sameTab={false}
              to={`/${username}`}
            >
              {t('buttons.profile')}
            </Link>
            <Link
              className='nav-link'
              key='settings'
              sameTab={false}
              to={`/settings`}
            >
              {t('buttons.settings')}
            </Link>
          </Fragment>
        )}
        <hr className='nav-line' />
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='forum'
          sameTab={false}
          to={t('links:nav.forum')}
        >
          <span>{t('buttons.forum')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='news'
          sameTab={false}
          to={t('links:nav.news')}
        >
          <span>{t('buttons.news')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='radio'
          sameTab={false}
          to={radioLocation}
        >
          <span>{t('buttons.radio')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <hr className='nav-line' />
        <button
          className={
            'nav-link nav-link-flex' + (!username ? ' nav-link-header' : '')
          }
          disabled={!username}
          key='theme'
          onClick={() => this.toggleTheme(String(theme), toggleNightMode)}
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
            <span className='nav-link-dull'>{t('misc.change-theme')}</span>
          )}
        </button>
        <div className='nav-link nav-link-header' key='lang-header'>
          {t('footer.language')}
        </div>

        <div className='nav-link dropdown-nav-link' key='language-dropdown'>
          <select
            className='nav-link-lang-dropdown'
            onChange={this.handleLanguageChange}
            value={clientLocale}
          >
            {locales.map(lang => (
              <option key={'lang-' + lang} value={lang}>
                {Object.keys(LangNames).filter(langName => langName == lang)[0]}
              </option>
            ))}
          </select>
        </div>
        {username && (
          <Fragment key='signout-frag'>
            <hr className='nav-line-2' />
            <a
              className='nav-link'
              href={`${apiLocation}/signout`}
              key='sign-out'
            >
              {t('buttons.sign-out')}
            </a>
          </Fragment>
        )}
      </div>
    );
  }
}

NavLinks.displayName = 'NavLinks';

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
