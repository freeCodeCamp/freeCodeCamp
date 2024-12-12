import React, { ReactNode, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Spacer } from '@freecodecamp/ui';
import envData, { clientLocale } from '../../../config/env.json';

import latoBoldURL from '../../../static/fonts/lato/Lato-Bold.woff';
import latoLightURL from '../../../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../../../static/fonts/lato/Lato-Regular.woff';

import jpSansBoldURL from '../../../static/fonts/noto-sans-japanese/NotoSansJP-Bold.woff';
import jpSansLightURL from '../../../static/fonts/noto-sans-japanese/NotoSansJP-Light.woff';
import jpSansRegularURL from '../../../static/fonts/noto-sans-japanese/NotoSansJP-Regular.woff';

import hackZeroSlashBoldURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Bold.woff';
import hackZeroSlashItalicURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Italic.woff';
import hackZeroSlashRegularURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Regular.woff';

import { isBrowser } from '../../../utils';
import {
  fetchUser,
  initializeTheme,
  onlineStatusChange,
  serverStatusChange
} from '../../redux/actions';
import {
  isSignedInSelector,
  examInProgressSelector,
  userSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  themeSelector
} from '../../redux/selectors';

import { UserFetchState, User } from '../../redux/prop-types';
import BreadCrumb from '../../templates/Challenges/components/bread-crumb';
import Flash from '../Flash';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';
import SignoutModal from '../signout-modal';
import StagingWarningModal from '../staging-warning-modal';
import Footer from '../Footer';
import Header from '../Header';
import OfflineWarning from '../OfflineWarning';
import { Loader } from '../helpers';
import {
  MAX_MOBILE_WIDTH,
  EX_SMALL_VIEWPORT_HEIGHT
} from '../../../config/misc';

import '@freecodecamp/ui/dist/base.css';
// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';
import './rtl-layout.css';
import { LocalStorageThemes } from '../../redux/types';

const mapStateToProps = createSelector(
  isSignedInSelector,
  examInProgressSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  themeSelector,
  (
    isSignedIn,
    examInProgress: boolean,
    flashMessage,
    isOnline: boolean,
    isServerOnline: boolean,
    fetchState: UserFetchState,
    user: User,
    theme: LocalStorageThemes
  ) => ({
    isSignedIn,
    examInProgress,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline,
    isServerOnline,
    fetchState,
    user,
    theme
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
      initializeTheme
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

interface DefaultLayoutProps extends StateProps, DispatchProps {
  children: ReactNode;
  pathname: string;
  showFooter?: boolean;
  isChallenge?: boolean;
  usesMultifileEditor?: boolean;
  block?: string;
  examInProgress: boolean;
  superBlock?: string;
}

function DefaultLayout({
  children,
  hasMessage,
  examInProgress,
  fetchState,
  flashMessage,
  isOnline,
  isServerOnline,
  isSignedIn,
  removeFlashMessage,
  showFooter = true,
  isChallenge = false,
  usesMultifileEditor,
  block,
  superBlock,
  theme,
  user,
  pathname,
  fetchUser,
  initializeTheme
}: DefaultLayoutProps): JSX.Element {
  const { t } = useTranslation();
  const isMobileLayout = useMediaQuery({ maxWidth: MAX_MOBILE_WIDTH });
  const isProject = /project$/.test(block as string);
  const isRenderBreadcrumbOnMobile =
    isMobileLayout && (isProject || !usesMultifileEditor);
  const isRenderBreadcrumb = !isMobileLayout || isRenderBreadcrumbOnMobile;
  const isExSmallViewportHeight = useMediaQuery({
    maxHeight: EX_SMALL_VIEWPORT_HEIGHT
  });

  useEffect(() => {
    initializeTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // componentDidMount
    if (!isSignedIn) {
      fetchUser();
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      // componentWillUnmount.
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateOnlineStatus = () => {
    const isOnline =
      isBrowser() && 'navigator' in window ? window.navigator.onLine : null;
    return typeof isOnline === 'boolean' ? onlineStatusChange(isOnline) : null;
  };

  const isJapanese = clientLocale === 'japanese';

  if (fetchState.pending) {
    return <Loader fullScreen={true} messageDelay={5000} />;
  } else {
    return (
      <div className='page-wrapper'>
        {envData.deploymentEnv === 'staging' &&
          envData.environment === 'production' && <StagingWarningModal />}
        <Helmet
          bodyAttributes={{
            class: `${theme}-palette`
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
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansRegularURL}
              rel='preload'
              type='font/woff'
            />
          )}
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansLightURL}
              rel='preload'
              type='font/woff'
            />
          )}
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansBoldURL}
              rel='preload'
              type='font/woff'
            />
          )}

          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashRegularURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashBoldURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashItalicURL}
            rel='preload'
            type='font/woff'
          />
        </Helmet>
        <div className={`default-layout`}>
          <Header
            fetchState={fetchState}
            user={user}
            pathname={pathname}
            skipButtonText={t('learn.skip-to-content')}
          />
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
          <SignoutModal />
          {isChallenge &&
            !examInProgress &&
            (isRenderBreadcrumb ? (
              <div className='breadcrumbs-demo'>
                <BreadCrumb
                  block={block as string}
                  superBlock={superBlock as string}
                />
              </div>
            ) : (
              <Spacer size={isExSmallViewportHeight ? 'xxs' : 'xs'} />
            ))}
          {fetchState.complete && children}
        </div>
        {showFooter && <Footer />}
      </div>
    );
  }
}

DefaultLayout.displayName = 'DefaultLayout';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DefaultLayout));
