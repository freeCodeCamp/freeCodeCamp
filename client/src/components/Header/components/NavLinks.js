import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../helpers';
import { updateUserFlag } from '../../../redux/settings';
import {
  clientLocale,
  forumLocation,
  radioLocation,
  newsLocation,
  apiLocation
} from '../../../../../config/env.json';
import createLanguageRedirect from '../../createLanguageRedirect';

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
  toggleTheme(currentTheme = 'default', toggleNightMode) {
    toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
  }

  render() {
    const {
      displayMenu,
      i18n,
      fetchState,
      t,
      toggleNightMode,
      user: { isDonating = false, username, theme }
    } = this.props;

    const { pending } = fetchState;
    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <div className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
        {isDonating ? (
          <div className='nav-link nav-link-header' key='donate'>
            {t('donate.thanks')}
          </div>
        ) : (
          <Link
            className='nav-link'
            external={true}
            key='donate'
            sameTab={false}
            to='/donate'
          >
            {t('buttons.donate')}
          </Link>
        )}
        <Link className='nav-link' key='learn' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
        {username ? (
          <Link
            className='nav-link'
            key='profile'
            sameTab={false}
            to={`/${username}`}
          >
            {t('buttons.profile')}
          </Link>
        ) : (
          <Link
            className='nav-link'
            key='signin'
            sameTab={true}
            to={`${apiLocation}/signin`}
          >
            {t('buttons.sign-in')}
          </Link>
        )}
        <hr className='nav-line' />
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='forum'
          sameTab={false}
          to={forumLocation}
        >
          <span>{t('buttons.forum')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='news'
          sameTab={false}
          to={newsLocation}
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
          className='nav-link nav-link-flex'
          disabled={!username}
          key='theme'
          onClick={() => this.toggleTheme(theme, toggleNightMode)}
        >
          {username ? (
            <>
              <span>{t('settings.labels.night-mode')}</span>
              <span>{theme === 'night' ? '[✓]' : '[ ]'}</span>
            </>
          ) : (
            <span>Sign in to change theme</span>
          )}
        </button>
        <div className='nav-link nav-link-header' key='lang-header'>
          {t('footer.language')}
        </div>
        {locales.map(lang => (
          <Link
            className='nav-link nav-link-lang nav-link-flex'
            external={true}
            // Todo: should treat other lang client application links as external??
            key={'lang-' + lang}
            to={createLanguageRedirect({
              clientLocale,
              lang
            })}
          >
            <span>{langDisplayNames[lang]}</span>
            <span>{i18n.language === i18nextCodes[lang] ? ' ✓' : 'O'}</span>
          </Link>
        ))}
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
