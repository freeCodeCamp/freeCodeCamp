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

import {
  closeDonationModal,
  isDonationModalOpenSelector,
  isBlockDonationModalSelector,
  executeGA
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
      closeDonationModal,
      executeGA
    },
    dispatch
  );

const propTypes = {
  activeDonors: PropTypes.number,
  block: PropTypes.string,
  closeDonationModal: PropTypes.func.isRequired,
  executeGA: PropTypes.func,
  isBlockDonation: PropTypes.bool,
  show: PropTypes.bool
};

function DonateModal({
  show,
  block,
  isBlockDonation,
  closeDonationModal,
  executeGA
}) {
  const [closeLabel, setCloseLabel] = React.useState(false);
  const handleProcessing = (duration, amount) => {
    executeGA({
      type: 'event',
      data: {
        category: 'donation',
        action: 'Modal strip form submission',
        label: duration,
        value: amount
      }
    });
    setCloseLabel(true);
  };

  if (show) {
    executeGA({ type: 'modal', data: '/donation-modal' });
    executeGA({
      type: 'event',
      data: {
        category: 'Donation',
        action: `Displayed ${
          isBlockDonation ? 'block' : 'progress'
        } donation modal`,
        nonInteraction: true
      }
    });
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
        <MinimalDonateForm handleProcessing={handleProcessing} />
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
