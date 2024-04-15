import React, { ReactNode, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useStaticQuery, graphql } from 'gatsby';

import latoBoldURL from '../../../static/fonts/lato/Lato-Bold.woff';
import latoLightURL from '../../../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../../../static/fonts/lato/Lato-Regular.woff';
import hackZeroSlashBoldURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Bold.woff';
import hackZeroSlashItalicURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Italic.woff';
import hackZeroSlashRegularURL from '../../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Regular.woff';

import { isBrowser } from '../../../utils';
import {
  fetchUser,
  onlineStatusChange,
  serverStatusChange,
  updateAllChallengesInfo
} from '../../redux/actions';
import {
  isSignedInSelector,
  examInProgressSelector,
  userSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector
} from '../../redux/selectors';

import {
  UserFetchState,
  User,
  AllChallengeNode,
  CertificateNode
} from '../../redux/prop-types';
import BreadCrumb from '../../templates/Challenges/components/bread-crumb';
import Flash from '../Flash';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';
import SignoutModal from '../signout-modal';
import StagingWarningModal from '../staging-warning-modal';
import Footer from '../Footer';
import Header from '../Header';
import OfflineWarning from '../OfflineWarning';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';
import './rtl-layout.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  examInProgressSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  (
    isSignedIn,
    examInProgress: boolean,
    flashMessage,
    isOnline: boolean,
    isServerOnline: boolean,
    fetchState: UserFetchState,
    user: User
  ) => ({
    isSignedIn,
    examInProgress,
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
      updateAllChallengesInfo
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

interface DefaultLayoutProps extends StateProps, DispatchProps {
  children: ReactNode;
  pathname: string;
  showFooter?: boolean;
  isChallenge?: boolean;
  block?: string;
  examInProgress: boolean;
  superBlock?: string;
}

const getSystemTheme = () =>
  `${
    window.matchMedia('(prefers-color-scheme: dark)').matches === true
      ? 'dark-palette'
      : 'light-palette'
  }`;

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
  block,
  superBlock,
  theme,
  user,
  fetchUser,
  updateAllChallengesInfo
}: DefaultLayoutProps): JSX.Element {
  const { t } = useTranslation();
  const { challengeEdges, certificateNodes } = useGetAllBlockIds();
  useEffect(() => {
    // componentDidMount
    updateAllChallengesInfo({ challengeEdges, certificateNodes });
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

  const useSystemTheme = fetchState.complete && isSignedIn === false;

  if (fetchState.pending) {
    return <Loader fullScreen={true} messageDelay={5000} />;
  } else {
    return (
      <div className='page-wrapper'>
        {envData.deploymentEnv === 'staging' &&
          envData.environment === 'production' && <StagingWarningModal />}
        <Helmet
          bodyAttributes={{
            class: useSystemTheme
              ? getSystemTheme()
              : `${String(theme) === 'night' ? 'dark' : 'light'}-palette`
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
          {isChallenge && !examInProgress && (
            <div className='breadcrumbs-demo'>
              <BreadCrumb
                block={block as string}
                superBlock={superBlock as string}
              />
            </div>
          )}
          {fetchState.complete && children}
        </div>
        {showFooter && <Footer />}
      </div>
    );
  }
}

// TODO: get challenge nodes directly rather than wrapped in edges
const useGetAllBlockIds = () => {
  const {
    allChallengeNode: { edges: challengeEdges },
    allCertificateNode: { nodes: certificateNodes }
  }: {
    allChallengeNode: AllChallengeNode;
    allCertificateNode: { nodes: CertificateNode[] };
  } = useStaticQuery(graphql`
    query getBlockNode {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        edges {
          node {
            challenge {
              block
              id
            }
          }
        }
      }
      allCertificateNode {
        nodes {
          challenge {
            certification
            tests {
              id
            }
          }
        }
      }
    }
  `);

  return { challengeEdges, certificateNodes };
};

DefaultLayout.displayName = 'DefaultLayout';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DefaultLayout));
