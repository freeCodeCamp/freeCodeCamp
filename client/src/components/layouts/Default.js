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
  isOnlineSelector,
  userSelector
} from '../../redux';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

import { isBrowser } from '../../../utils';

import WithInstantSearch from '../search/WithInstantSearch';
import OfflineWarning from '../OfflineWarning';
import Flash from '../Flash';
import Header from '../Header';
import Footer from '../Footer';

import './global.css';
import './variables.css';

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
  onlineStatusChange: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
  showFooter: PropTypes.bool,
  theme: PropTypes.string
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  userSelector,
  (isSignedIn, flashMessage, isOnline, user) => ({
    isSignedIn,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline,
    theme: user.theme
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
      removeFlashMessage,
      showFooter = true,
      theme = 'default'
    } = this.props;
    return (
      <Fragment>
        <Helmet
          bodyAttributes={{
            class: `${theme === 'default' ? 'light-palette' : 'dark-palette'}`
          }}
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
        <WithInstantSearch>
          <Header />
          <div className={`default-layout`}>
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
