import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../components/helpers';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../../redux/selectors';

import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type User = {
  acceptedPrivacyTerms: boolean;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

const mapDispatchToProps = {};

type LearnLayoutProps = {
  isSignedIn?: boolean;
  fetchState: FetchState;
  user: User;
  children?: React.ReactNode;
};

function LearnLayout({ fetchState, children }: LearnLayoutProps): JSX.Element {
  useEffect(() => {
    return () => {
      const metaTag = document.querySelector(`meta[name="robots"]`);
      if (metaTag) {
        metaTag.remove();
      }
    };
  }, []);

  if (fetchState.pending && !fetchState.complete) {
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet>
        <meta content='noindex' name='robots' />
      </Helmet>
      <main id='learn-app-wrapper'>{children}</main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
