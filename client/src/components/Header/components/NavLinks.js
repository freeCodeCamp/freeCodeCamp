import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Link, SkeletonSprite } from '../../helpers';
import { updateUserFlag } from '../../../redux/settings';
import {
  forumLocation,
  radioLocation,
  newsLocation,
  homeLocation,
  chineseHome
} from '../../../../../config/env.json';

const {
  availableLangs,
  i18nextCodes,
  langDisplayNames
} = require('../../../../i18n/allLangs');

const locales = availableLangs.client;

const propTypes = {
  displayMenu: PropTypes.bool,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  i18n: PropTypes.object,
  t: PropTypes.func,
  toggleNightMode: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapDispatchToProps = {
  toggleNightMode: theme => updateUserFlag({ theme })
};

export class NavLinks extends Component {
  goToLanguage(lang) {
    const path = window.location.pathname;
    switch (lang) {
      case 'espanol':
        return `${homeLocation}/espanol${path}`;
      case 'english':
        return `${homeLocation}${path}`;
      case 'chinese':
        return `${chineseHome}${path}`;
      default:
        return `${homeLocation}`;
    }
  }

  toggleTheme(currentTheme = 'default', toggleNightMode) {
    console.log('attempting to toggle night mode');
    toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
  }

  render() {
    const {
      displayMenu,
      fetchState,
      i18n,
      t,
      toggleNightMode,
      user: { isUserDonating = false, username, theme }
    } = this.props;

    const { pending } = fetchState;

    return pending ? (
      <div className='nav-skeleton'>
        <SkeletonSprite />
      </div>
    ) : (
      <div className='main-nav-group'>
        <ul className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
          <li key='donate'>
            {isUserDonating ? (
              <span className='nav-link'>{t('donate.thanks')}</span>
            ) : (
              <Link
                className='nav-link'
                external={true}
                sameTab={false}
                to='/donate'
              >
                {t('buttons.donate')}
              </Link>
            )}
          </li>
          <li key='forum'>
            <Link
              className='nav-link'
              external={true}
              sameTab={false}
              to={forumLocation}
            >
              {t('buttons.forum')}
            </Link>
          </li>
          <li key='news'>
            <Link
              className='nav-link'
              external={true}
              sameTab={false}
              to={newsLocation}
            >
              {t('buttons.news')}
            </Link>
          </li>
          <li key='learn'>
            <Link className='nav-link' to='/learn'>
              {t('buttons.curriculum')}
            </Link>
          </li>
          {username && (
            <li key='profile'>
              <Link className='nav-link' to={`/${username}`}>
                {t('buttons.profile')}
              </Link>
            </li>
          )}
          <li key='radio'>
            <Link
              className='nav-link'
              external={true}
              sameTab={false}
              to={radioLocation}
            >
              {t('buttons.radio')}
            </Link>
          </li>
          <li key='theme'>
            <button
              className='nav-link'
              disabled={!username}
              onClick={() => this.toggleTheme(theme, toggleNightMode)}
            >
              {username
                ? t('settings.labels.night-mode') +
                  (theme === 'night' ? ' ✓' : '')
                : 'Sign in to change theme'}
            </button>
          </li>
          <li key='lang-header'>
            <span className='nav-link'>{t('footer.language')}</span>
          </li>
          {locales.map(lang => (
            <li key={'lang-' + lang}>
              <Link className='nav-link sub-link' to={this.goToLanguage(lang)}>
                {langDisplayNames[lang]}
                {i18n.language === i18nextCodes[lang] ? ' ✓' : ''}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

NavLinks.propTypes = propTypes;
NavLinks.displayName = 'NavLinks';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(NavLinks));
