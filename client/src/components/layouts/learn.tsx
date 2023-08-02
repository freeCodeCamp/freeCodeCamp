import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../components/helpers';
import { tryToShowDonationModal } from '../../redux/actions';
import { userFetchStateSelector } from '../../redux/selectors';
import DonateModal from '../Donation/donation-modal';

import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  (fetchState: FetchState) => ({
    fetchState
  })
);

const mapDispatchToProps = {
  tryToShowDonationModal
};

type LearnLayoutProps = {
  fetchState: FetchState;
  tryToShowDonationModal: () => void;
  children?: React.ReactNode;
  hasEditableBoundaries?: boolean;
};

function LearnLayout({
  fetchState,
  tryToShowDonationModal,
  children,
  hasEditableBoundaries
}: LearnLayoutProps): JSX.Element {
  useEffect(() => {
    tryToShowDonationModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <main
        id='learn-app-wrapper'
        {...(hasEditableBoundaries && { 'data-has-editable-boundaries': true })}
      >
        {children}
      </main>
      <DonateModal />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
