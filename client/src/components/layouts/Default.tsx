import fontawesome from '@fortawesome/fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import latoBoldURL from '../../../static/fonts/lato/Lato-Bold.woff';
import latoLightURL from '../../../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../../../static/fonts/lato/Lato-Regular.woff';
import robotoBoldURL from '../../../static/fonts/roboto-mono/RobotoMono-Bold.woff';
import robotoItalicURL from '../../../static/fonts/roboto-mono/RobotoMono-Italic.woff';
import robotoRegularURL from '../../../static/fonts/roboto-mono/RobotoMono-Regular.woff';
import { isBrowser } from '../../../utils';
import {
  fetchUser,
  isSignedInSelector,
  onlineStatusChange,
  serverStatusChange,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  usernameSelector,
  executeGA
} from '../../redux';
import Flash from '../Flash';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

import Footer from '../Footer';
import Header from '../Header';
import OfflineWarning from '../OfflineWarning';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';

fontawesome.config = {
  autoAddCss: false
};

const propTypes = {
  children: PropTypes.node.isRequired,
  executeGA: PropTypes.func,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  fetchUser: PropTypes.func.isRequired,
  flashMessage: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string
  }),
  hasMessage: PropTypes.bool,
  isOnline: PropTypes.bool.isRequired,
  isServerOnline: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool,
  onlineStatusChange: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
  serverStatusChange: PropTypes.func.isRequired,
  showFooter: PropTypes.bool,
  signedInUserName: PropTypes.string,
  t: PropTypes.func.isRequired,
  theme: PropTypes.string,
  useTheme: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  usernameSelector,
  (isSignedIn, flashMessage, isOnline, isServerOnline, fetchState, user) => ({
    isSignedIn,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline,
    isServerOnline,
    fetchState,
    theme: user.theme,
    user
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser,
      removeFlashMessage,
      onlineStatusChange,
      serverStatusChange,
      executeGA
    },
    dispatch
  );

class DefaultLayout extends Component {
  componentDidMount() {
    const { isSignedIn, fetchUser, pathname, executeGA } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    executeGA({ type: 'page', data: pathname });

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentDidUpdate(prevProps) {
    const { pathname, executeGA } = this.props;
    const { pathname: prevPathname } = prevProps;
    if (pathname !== prevPathname) {
      executeGA({ type: 'page', data: pathname });
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
      fetchState,
      flashMessage,
      isOnline,
      isServerOnline,
      isSignedIn,
      removeFlashMessage,
      showFooter = true,
      t,
      theme = 'default',
      user,
      useTheme = true
    } = this.props;

    return (
      <div className='page-wrapper'>
        <Helmet
          bodyAttributes={{
            class: useTheme
              ? `${theme === 'default' ? 'light-palette' : 'dark-palette'}`
              : 'light-palette'
          }}
          meta={[
            {
              name: 'description',
              content: t('metaTags:description')
            },
            { name: 'keywords', content: t('metaTags:keywords') }
          ]}
        >
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoRegularURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoLightURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoBoldURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={robotoRegularURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={robotoBoldURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={robotoItalicURL}
            rel='preload'
            type='font/woff'
          />
          <style>{fontawesome.dom.css()}</style>
        </Helmet>
        <div className={`default-layout`}>
          <Header fetchState={fetchState} user={user} />
          <OfflineWarning
            isOnline={isOnline}
            isServerOnline={isServerOnline}
            isSignedIn={isSignedIn}
          />
          {hasMessage && flashMessage ? (
            <Flash
              flashMessage={flashMessage}
              removeFlashMessage={removeFlashMessage}
            />
          ) : null}
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    );
  }
}

DefaultLayout.displayName = 'DefaultLayout';
DefaultLayout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DefaultLayout));
