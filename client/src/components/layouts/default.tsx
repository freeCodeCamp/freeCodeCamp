import React, { ReactNode, useEffect } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
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
  userSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  showCodeAllySelector,
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
import Footer from '../Footer';
import Header from '../Header';
import OfflineWarning from '../OfflineWarning';
import { Loader } from '../helpers';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';
import './rtl-layout.css';
import { Themes } from '../settings/theme';

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  showCodeAllySelector,
  userSelector,
  (
    isSignedIn,
    flashMessage,
    isOnline: boolean,
    isServerOnline: boolean,
    fetchState: UserFetchState,
    showCodeAlly: boolean,
    user: User
  ) => ({
    isSignedIn,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline,
    isServerOnline,
    fetchState,
    theme: user.theme,
    showCodeAlly,
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
  showCodeAlly: boolean;
  superBlock?: string;
  t: TFunction;
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
  t,
  theme = Themes.Default,
  showCodeAlly,
  user,
  fetchUser,
  updateAllChallengesInfo
}: DefaultLayoutProps): JSX.Element {
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
        <Helmet
          bodyAttributes={{
            class: useSystemTheme
              ? getSystemTheme()
              : `${theme === 'night' ? 'dark' : 'light'}-palette`
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
          {isChallenge && !showCodeAlly && (
            <div className='breadcrumbs-demo'>
              <BreadCrumb
                block={block as string}
                superBlock={superBlock as string}
              />
            </div>
          )}
          <div id='content-start' tabIndex={-1}>
            {fetchState.complete && children}
          </div>
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
