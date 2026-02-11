import React, { useEffect } from 'react';
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
};

function LearnLayout({
  fetchState,
  tryToShowDonationModal,
  children
}: LearnLayoutProps): JSX.Element {
  useEffect(() => {
    tryToShowDonationModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchState.pending && !fetchState.complete) {
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <main id='learn-app-wrapper'>{children}</main>
      <DonateModal />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
