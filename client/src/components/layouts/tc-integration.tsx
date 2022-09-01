import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
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
  executeGA
} from '../../redux';
import { UserFetchState, User } from '../../redux/prop-types';
import Flash from '../Flash';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

import Footer from '../Footer';
import OfflineWarning from '../OfflineWarning';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  (
    isSignedIn,
    flashMessage,
    isOnline: boolean,
    isServerOnline: boolean,
    fetchState: UserFetchState,
    user: User
  ) => ({
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

type StateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
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

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

interface TcIntegrationLayoutProps extends StateProps, DispatchProps {
  children: ReactNode;
  pathname: string;
  showFooter?: boolean;
  t: TFunction;
  useTheme?: boolean;
}

class TcIntegrationLayout extends Component<TcIntegrationLayoutProps> {
  static displayName = 'TcIntegrationLayout';

  componentDidMount() {
    const { isSignedIn, fetchUser, pathname, executeGA } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    executeGA({ type: 'page', data: pathname });

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
    window.addEventListener('click', this.externalLinkHandler);
  }

  componentDidUpdate(prevProps: TcIntegrationLayoutProps) {
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

  externalLinkHandler = (event: MouseEvent) => {
    // prettier is the worst

    // if we're not clicking an anchor tag, there's nothing to do
    const eventTarget = event.target as HTMLElement;
    const anchorTag = eventTarget.closest('a');
    if (!anchorTag) {
      return;
    }

    // if the target of the click isn't external, there's nothing to do
    const target = anchorTag;
    const url = new URL(target.href);
    if (url.host === window.location.host) {
      return;
    }

    // stop the click so we can alter it
    event.stopPropagation();
    event.preventDefault();

    // if this is a freecodecamp lesson, change its domain and path
    const fccHost = 'freecodecamp.org';
    if (url.host.endsWith(fccHost)) {
      // TODO: it would be nice to not require that the FCC
      // app knows about the paths in the platform UI, but
      // creating a way to share this info would be complex and
      // time consuming, so we can handle it when we get another
      // provider.

      // set the pathname for the 2 flavors of lesson URL
      const platformPathPrefix = 'learn/freecodecamp';
      const learnPrefix = '/learn/';
      let updateHost = false;
      if (url.host === `learn.${fccHost}`) {
        url.pathname = `${platformPathPrefix}${url.pathname}`;
        updateHost = true;
      } else if (
        url.host === `www.${fccHost}` &&
        url.pathname.startsWith(learnPrefix)
      ) {
        url.pathname = url.pathname.replace(
          learnPrefix,
          `/${platformPathPrefix}/`
        );
        updateHost = true;
      }

      // set the host to the iframe's parent domain
      if (updateHost) {
        url.host = new URL(document.referrer).host;
      }
    }

    // now open the url in a new tab
    window.open(url, '_blank');
  };

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
        </Helmet>
        <div className={`tc-integration-layout`}>
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
          {fetchState.complete && children}
        </div>
        {showFooter && <Footer />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(TcIntegrationLayout));
