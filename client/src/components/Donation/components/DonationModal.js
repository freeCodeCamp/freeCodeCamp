import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { Spacer, Link } from '../../../components/helpers';
import { blockNameify } from '../../../../utils/blockNameify';

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
  constructor(...props) {
    super(...props);
  }

  render() {
    const { show, block } = this.props;
    if (show) {
      ga.modalview('/donation-modal');
    }

    return (
      <Modal bsSize='lg' className='donation-modal' show={show}>
        <Modal.Header className='fcc-modal'>
          <Modal.Title className='text-center'>
            <strong>Support freeCodeCamp.org</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Spacer />
          <p>Nicely done. You just completed {blockNameify(block)}.</p>
          <p>Help us create even more learning resources like this.</p>
          <Spacer />
        </Modal.Body>
        <Modal.Footer>
          <Link
            className='btn-invert btn btn-lg btn-primary btn-block'
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
