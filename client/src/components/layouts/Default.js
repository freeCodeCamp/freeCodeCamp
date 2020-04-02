import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';
import fontawesome from '@fortawesome/fontawesome';

import {
  fetchUser,
  isSignedInSelector,
  onlineStatusChange,
  isOnlineSelector,
  userSelector,
  executeGA
} from '../../redux';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

import { isBrowser } from '../../../utils';

import WithInstantSearch from '../search/WithInstantSearch';
import OfflineWarning from '../OfflineWarning';
import Flash from '../Flash';
import Header from '../Header';
import Footer from '../Footer';
// preload common fonts
import latoLightURL from '../../../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../../../static/fonts/lato/Lato-Regular.woff';
import latoBoldURL from '../../../static/fonts/lato/Lato-Bold.woff';
// eslint-disable-next-line max-len
import robotoRegularURL from '../../../static/fonts/roboto-mono/RobotoMono-Regular.woff';
// eslint-disable-next-line max-len
import robotoBoldURL from '../../../static/fonts/roboto-mono/RobotoMono-Bold.woff';
// eslint-disable-next-line max-len
import robotoItalicURL from '../../../static/fonts/roboto-mono/RobotoMono-Italic.woff';

import './fonts.css';
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
  executeGA: PropTypes.func,
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
  theme: PropTypes.string,
  useTheme: PropTypes.bool
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
    { fetchUser, removeFlashMessage, onlineStatusChange, executeGA },
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
      flashMessage,
      isOnline,
      isSignedIn,
      removeFlashMessage,
      showFooter = true,
      theme = 'default',
      useTheme = true
    } = this.props;
    return (
      <Fragment>
        <Helmet
          bodyAttributes={{
            class: useTheme
              ? `${theme === 'default' ? 'light-palette' : 'dark-palette'}`
              : 'light-palette'
          }}
          meta={[
            {
              name: 'description',
              content: `Learn to code at home. Build projects. Earn certifications. Since 2014,
                 more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech
                 companies including Google, Apple, Amazon, and Microsoft.`
            },
            { name: 'keywords', content: metaKeywords.join(', ') }
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
