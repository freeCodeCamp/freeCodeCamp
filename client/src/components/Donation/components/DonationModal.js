/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { Link } from '../../../components/helpers';
import { blockNameify } from '../../../../utils/blockNameify';
import Heart from '../../../assets/icons/Heart';
import Cup from '../../../assets/icons/Cup';

import ga from '../../../analytics';
import {
  closeDonationModal,
  isDonationModalOpenSelector,
  isBlockDonationModalSelector,
  activeDonationsSelector
} from '../../../redux';

import { challengeMetaSelector } from '../../../templates/Challenges/redux';

import '../Donation.css';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  challengeMetaSelector,
  isBlockDonationModalSelector,
  activeDonationsSelector,
  (show, { block }, isBlockDonation, activeDonors) => ({
    show,
    block,
    isBlockDonation,
    activeDonors
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeDonationModal
    },
    dispatch
  );

const propTypes = {
  activeDonors: PropTypes.number,
  block: PropTypes.string,
  closeDonationModal: PropTypes.func.isRequired,
  isBlockDonation: PropTypes.bool,
  show: PropTypes.bool
};

function DonateModal({
  show,
  block,
  activeDonors,
  isBlockDonation,
  closeDonationModal
}) {
  if (show) {
    ga.modalview('/donation-modal');
  }
  const blockDonationText = (
    <div className='block-modal-text'>
      <div className='donation-icon-container'>
        <Cup className='donation-icon' />
      </div>
      <p className='text-center'>
        Nicely done. You just completed {blockNameify(block)}.
      </p>
      <p className='text-center'>
        Help us create even more learning resources like this.
      </p>
    </div>
  );

  const progressDonationText = (
    <div className='text-center progress-modal-text'>
      <div className='donation-icon-container'>
        <Heart className='donation-icon' />
      </div>
      <p>
        freeCodeCamp.org is a tiny nonprofit that's helping millions of people
        learn to code for free.
      </p>
      <p>
        Join <strong>{activeDonors}</strong> supporters.
      </p>
      <p>Your donation will help keep tech education free and open.</p>
    </div>
  );

  return (
    <Modal bsSize='lg' className='donation-modal' show={show}>
      <Modal.Header className='fcc-modal'>
        <Modal.Title className='modal-title text-center'>
          <strong>Support freeCodeCamp.org</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isBlockDonation ? blockDonationText : progressDonationText}
      </Modal.Body>
      <Modal.Footer>
        <Link
          className='btn-invert btn btn-lg btn-primary btn-block btn-cta'
          onClick={closeDonationModal}
          to={`/donate`}
        >
          Support our nonprofit
        </Link>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          className='btn-invert'
          onClick={closeDonationModal}
        >
          Ask me later
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';
DonateModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateModal);
