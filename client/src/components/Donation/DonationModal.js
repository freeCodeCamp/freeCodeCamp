/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';
import { Spacer } from '../helpers';
import { blockNameify } from '../../../utils/blockNameify';
import Heart from '../../assets/icons/Heart';
import Cup from '../../assets/icons/Cup';
import MinimalDonateForm from './MinimalDonateForm';

import ga from '../../analytics';
import {
  closeDonationModal,
  isDonationModalOpenSelector,
  isBlockDonationModalSelector
} from '../../redux';

import { challengeMetaSelector } from '../../templates/Challenges/redux';

import './Donation.css';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  challengeMetaSelector,
  isBlockDonationModalSelector,
  (show, { block }, isBlockDonation) => ({
    show,
    block,
    isBlockDonation
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

function DonateModal({ show, block, isBlockDonation, closeDonationModal }) {
  const [closeLabel, setCloseLabel] = React.useState(false);
  const showCloseBtn = () => {
    setCloseLabel(true);
  };

  if (show) {
    ga.modalview('/donation-modal');
  }

  const donationText = (
    <b>
      Become a supporter and help us create even more learning resources for
      you.
    </b>
  );
  const blockDonationText = (
    <div className='block-modal-text'>
      <div className='donation-icon-container'>
        <Cup className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            <b>Nicely done. You just completed {blockNameify(block)}. </b>
            {donationText}
          </Col>
        )}
      </Row>
    </div>
  );

  const progressDonationText = (
    <div className='text-center progress-modal-text'>
      <div className='donation-icon-container'>
        <Heart className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            {donationText}
          </Col>
        )}
      </Row>
    </div>
  );

  return (
    <Modal bsSize='lg' className='donation-modal' show={show}>
      <Modal.Body>
        {isBlockDonation ? blockDonationText : progressDonationText}
        <Spacer />
        <MinimalDonateForm showCloseBtn={showCloseBtn} />
        <Spacer />
        <Row>
          <Col sm={4} smOffset={4} xs={8} xsOffset={2}>
            <Button
              block={true}
              bsSize='sm'
              bsStyle='primary'
              className='btn-link'
              onClick={closeDonationModal}
              tabIndex='0'
            >
              {closeLabel ? 'Close' : 'Ask me later'}
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';
DonateModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateModal);
