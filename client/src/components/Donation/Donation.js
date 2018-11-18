import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal } from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';

import ga from '../../analytics';
import DonateForm from './components/DonateForm';
import DonateCompletion from './components/DonateCompletion';
import {
  userSelector,
  closeDonationModal,
  isDonationModalOpenSelector
} from '../../redux';

import './donation.css';
import poweredByStripe from '../../images/powered_by_stripe.svg';

const mapStateToProps = createSelector(
  userSelector,
  isDonationModalOpenSelector,
  ({ email }, show) => ({ email, show })
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
  email: PropTypes.string,
  show: PropTypes.bool
};

const stripeKey = 'pk_live_E6Z6xPM8pEsJziHW905zpAvF';

class DonationModal extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null
    };
    this.renderCompletion = this.renderCompletion.bind(this);
    this.renderMaybe = this.renderMaybe.bind(this);
  }
  componentDidMount() {
    if (window.Stripe) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripeKey)
      }));
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        console.info('stripe has loaded');
        this.setState(state => ({
          ...state,
          stripe: window.Stripe(stripeKey)
        }));
      });
    }
  }

  renderCompletion(props) {
    return (
      <DonateCompletion close={this.props.closeDonationModal} {...props} />
    );
  }

  renderMaybe() {
    const { closeDonationModal } = this.props;
    const handleClick = e => {
      e.preventDefault();
      return closeDonationModal();
    };
    return (
      <div className='maybe-later-container'>
        <button onClick={handleClick}>Maybe later</button>
      </div>
    );
  }

  render() {
    const { email, show } = this.props;
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
              <DonateForm
                email={email}
                maybeButton={this.renderMaybe}
                renderCompletion={this.renderCompletion}
              />
            </Modal.Body>
            <Modal.Footer>
              <img alt='powered by stripe' src={poweredByStripe} />
            </Modal.Footer>
          </Modal>
        </Elements>
      </StripeProvider>
    );
  }
}

DonationModal.displayName = 'DonationModal';
DonationModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (state, dispatch, own) => ({ ...state, ...dispatch, ...own }),
  {
    pure: false
  }
)(DonationModal);
