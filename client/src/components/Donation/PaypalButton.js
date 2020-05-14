/* eslint-disable camelcase */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PayPalButtonScriptLoader from './PayPalButtonScriptLoader';
import { paypalClientId, deploymentEnv } from '../../../config/env.json';
import { verifySubscriptionPaypal } from '../../utils/ajax';
import {
  paypalConfigurator,
  paypalConfigTypes
} from '../../../../config/donation-settings';
import { signInLoadingSelector, userSelector } from '../../redux';

export class PaypalButton extends Component {
  constructor(props) {
    super(props);
    this.handleApproval = this.handleApproval.bind(this);
  }

  state = {};

  static getDerivedStateFromProps(props, state) {
    const { donationAmount, donationDuration } = props;

    const configurationObj = paypalConfigurator(
      donationAmount,
      donationDuration,
      paypalConfigTypes[deploymentEnv || 'staging']
    );
    if (state === configurationObj) {
      return null;
    }
    return { ...configurationObj };
  }

  handleApproval = (data, isSubscription) => {
    const { amount, duration } = this.state;
    const { skipAddDonation = false } = this.props;
    // Skip the api if user is not signed in or if its a one-time donation
    if (skipAddDonation || !isSubscription) {
      this.props.onDonationStateChange(
        true,
        false,
        data.error ? data.error : ''
      );
    } else {
      this.props.handleProcessing(
        duration,
        amount,
        'Paypal payment submission'
      );
      this.props.onDonationStateChange(false, true, '');
      verifySubscriptionPaypal(data)
        .then(response => {
          const data = response && response.data;
          this.props.onDonationStateChange(
            true,
            false,
            data.error ? data.error : ''
          );
        })
        .catch(error => {
          const data =
            error.response && error.response.data
              ? error.response.data
              : {
                  error: `Something is not right. Please contact team@freecodecamp.org`
                };
          this.props.onDonationStateChange(false, false, data.error);
        });
    }
  };

  render() {
    const { duration, planId, amount } = this.state;
    const isSubscription = duration !== 'onetime';

    if (!paypalClientId) {
      return null;
    }

    return (
      <PayPalButtonScriptLoader
        amount={amount}
        clientId={paypalClientId}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: (amount / 100).toString()
                }
              }
            ]
          });
        }}
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: planId
          });
        }}
        isSubscription={isSubscription}
        onApprove={data => {
          this.handleApproval(data, isSubscription);
        }}
        onCancel={() => {
          this.props.onDonationStateChange(
            false,
            false,
            `Uh - oh. It looks like your transaction didn't go through. Could you please try again?`
          );
        }}
        onError={() =>
          this.props.onDonationStateChange(false, false, 'Please try again.')
        }
        plantId={planId}
        style={{
          tagline: false,
          height: 43
        }}
      />
    );
  }
}

const propTypes = {
  donationAmount: PropTypes.number,
  donationDuration: PropTypes.string,
  handleProcessing: PropTypes.func,
  isDonating: PropTypes.bool,
  onDonationStateChange: PropTypes.func,
  skipAddDonation: PropTypes.bool
};

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }, showLoading) => ({
    isDonating,
    showLoading
  })
);

PaypalButton.displayName = 'PaypalButton';
PaypalButton.propTypes = propTypes;

export default connect(mapStateToProps)(PaypalButton);
