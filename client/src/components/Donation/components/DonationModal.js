import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { Link } from '../../../components/helpers';
import { blockNameify } from '../../../../utils/blockNameify';
import Heart from '../../../assets/icons/Heart';

import ga from '../../../analytics';
import {
  closeDonationModal,
  isDonationModalOpenSelector
} from '../../../redux';

import { challengeMetaSelector } from '../../../templates/Challenges/redux';

import '../Donation.css';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  challengeMetaSelector,
  (show, { block }) => ({
    show,
    block
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
  block: PropTypes.string,
  closeDonationModal: PropTypes.func.isRequired,
  show: PropTypes.bool
};

class DonateModal extends Component {
  render() {
    const { show, block } = this.props;
    if (show) {
      ga.modalview('/donation-modal');
    }

    return (
      <Modal bsSize='lg' className='donation-modal' show={show}>
        <Modal.Header className='fcc-modal'>
          <Modal.Title className='modal-title text-center'>
            <strong>Support freeCodeCamp.org</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-center'>
            Nicely done. You just completed {blockNameify(block)}.
          </p>
          <div className='heart-icon-container'>
            <Heart className='heart-icon' />
          </div>
          <p className='text-center'>
            Help us create even more learning resources like this.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link
            className='btn-invert btn btn-lg btn-primary btn-block btn-cta'
            onClick={this.props.closeDonationModal}
            to={`/donate`}
          >
            Support our nonprofit
          </Link>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            className='btn-invert'
            onClick={this.props.closeDonationModal}
          >
            Ask me later
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

DonateModal.displayName = 'DonateModal';
DonateModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateModal);
