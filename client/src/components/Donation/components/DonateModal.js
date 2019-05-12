import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';

import { stripePublicKey } from '../../../../config/env.json';

import ga from '../../../analytics';
import DonateForm from './DonateForm';
import {
  closeDonationModal,
  isDonationModalOpenSelector
} from '../../../redux';

import PoweredByStripe from './poweredByStripe';
import DonateText from './DonateText';

import '../Donation.css';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  show => ({
    show
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
  closeDonationModal: PropTypes.func.isRequired,
  show: PropTypes.bool
};

class DonateModal extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null
    };
    this.renderMaybe = this.renderMaybe.bind(this);
  }
  componentDidMount() {
    if (window.Stripe) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripePublicKey)
      }));
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        console.info('stripe has loaded');
        this.setState(state => ({
          ...state,
          stripe: window.Stripe(stripePublicKey)
        }));
      });
    }
  }

  renderMaybe() {
    const { closeDonationModal } = this.props;
    const handleClick = e => {
      e.preventDefault();
      return closeDonationModal();
    };
    return (
      <div className='modal-close-btn-container'>
        <Button bsStyle='link' onClick={handleClick}>
          Close
        </Button>
      </div>
    );
  }

  render() {
    const { show } = this.props;
    if (show) {
      ga.modalview('/donation-modal');
    }
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <Modal bsSize='lg' className='donation-modal' show={show}>
            <Modal.Header className='fcc-modal'>
              <Modal.Title className='text-center'>
                Support Our NonProfit
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DonateText />
              <DonateForm />
              {this.renderMaybe()}
            </Modal.Body>
            <Modal.Footer>
              <PoweredByStripe />
            </Modal.Footer>
          </Modal>
        </Elements>
      </StripeProvider>
    );
  }
}

DonateModal.displayName = 'DonateModal';
DonateModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (state, dispatch, own) => ({ ...state, ...dispatch, ...own }),
  {
    pure: false
  }
)(DonateModal);
