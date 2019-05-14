import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';
import fontawesome from '@fortawesome/fontawesome';

import ga from '../../analytics';
import {
  fetchUser,
  isSignedInSelector,
  onlineStatusChange,
  isOnlineSelector
} from '../../redux';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

import { isBrowser } from '../../../utils';

import WithInstantSearch from '../search/WithInstantSearch';
import OfflineWarning from '../OfflineWarning';
import Flash from '../Flash';
import Header from '../Header';
import Footer from '../Footer';

import './global.css';
import './layout.css';
import './night.css';

fontawesome.config = {
  autoAddCss: false
};

const metaKeywords = [
  'javascript',
  'js',
  'website',
  'web',
  'development',
  'free',
  'code',
  'camp',
  'course',
  'courses',
  'html',
  'css',
  'react',
  'redux',
  'api',
  'front',
  'back',
  'end',
  'learn',
  'tutorial',
  'programming'
];

const propTypes = {
  children: PropTypes.node.isRequired,
  fetchUser: PropTypes.func.isRequired,
  flashMessage: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string
  }),
  hasMessage: PropTypes.bool,
  isOnline: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool,
  landingPage: PropTypes.bool,
  navigationMenu: PropTypes.element,
  onlineStatusChange: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
  showFooter: PropTypes.bool
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  (isSignedIn, flashMessage, isOnline) => ({
    isSignedIn,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchUser, removeFlashMessage, onlineStatusChange },
    dispatch
  );

class DefaultLayout extends Component {
  componentDidMount() {
    const { isSignedIn, fetchUser, pathname } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    ga.pageview(pathname);

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props;
    const { pathname: prevPathname } = prevProps;
    if (pathname !== prevPathname) {
      ga.pageview(pathname);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus = () => {
    const { onlineStatusChange } = this.props;
    const isOnline =
      isBrowser() && 'navigator' in window ? window.navigator.onLine : null;
    return typeof isOnline === 'boolean' ? onlineStatusChange(isOnline) : null;
  };

  render() {
    const {
      children,
      hasMessage,
      flashMessage,
      isOnline,
      isSignedIn,
      landingPage,
      navigationMenu,
      pathname,
      removeFlashMessage,
      showFooter = true
    } = this.props;
    return (
      <Fragment>
        <Helmet
          meta={[
            {
              name: 'description',
              content:
                'Learn to code with free online courses, programming ' +
                'projects, and interview preparation for developer jobs.'
            },
            { name: 'keywords', content: metaKeywords.join(', ') }
          ]}
        >
          <style>{fontawesome.dom.css()}</style>
        </Helmet>
        <WithInstantSearch pathname={pathname}>
          <Header
            disableSettings={landingPage}
            navigationMenu={navigationMenu}
          />
          <div
            className={`default-layout ${landingPage ? 'landing-page' : ''}`}
          >
            <OfflineWarning isOnline={isOnline} isSignedIn={isSignedIn} />
            {hasMessage && flashMessage ? (
              <Flash flashMessage={flashMessage} onClose={removeFlashMessage} />
            ) : null}
            {children}
            {showFooter && <Footer />}
          </div>
        </WithInstantSearch>
      </Fragment>
    );
  }
}

DefaultLayout.displayName = 'DefaultLayout';
DefaultLayout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
