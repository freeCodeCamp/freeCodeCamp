/* eslint-disable camelcase */
/* global ENVIRONMENT */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { PayPalButton } from 'react-paypal-button-v2';
import { paypalClientId } from '../../../config/env.json';
import { verifySubscriptionPaypal } from '../../utils/ajax';
import { paypalConfig } from '../../../../config/donation-settings';
import { signInLoadingSelector, userSelector, executeGA } from '../../redux';

const paypalDurationPlans =
  ENVIRONMENT === 'production'
    ? paypalConfig.production.durationPlans
    : paypalConfig.development.durationPlans;

export class PaypalButton extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      planId: paypalDurationPlans.month['500'].planId
    };
    this.handleApproval = this.handleApproval.bind(this);
  }

  handleApproval = data => {
    this.props.handleProcessing('month', 500, 'Paypal payment submission');
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
                error:
                  'Something is not right. Please contact team@freecodecamp.org'
              };
        this.props.onDonationStateChange(false, false, data.error);
      });
  };

  render() {
    return (
      <PayPalButton
        createSubscription={(data, actions) => {
          executeGA({
            type: 'event',
            data: {
              category: 'Donation',
              action: `Modal Paypal clicked`
            }
          });
          return actions.subscription.create({
            plan_id: this.state.planId
          });
        }}
        onApprove={data => {
          this.handleApproval(data);
        }}
        onCancel={() => {
          this.props.onDonationStateChange(
            false,
            false,
            'Payment has been canceled.'
          );
        }}
        onError={() =>
          this.props.onDonationStateChange(false, false, 'Please try again.')
        }
        options={{
          vault: true,
          disableFunding: 'card',
          clientId: paypalClientId
        }}
        style={{
          tagline: false,
          height: 43
        }}
      />
    );
  }
}

const propTypes = {
  handleProcessing: PropTypes.func,
  isDonating: PropTypes.bool,
  onDonationStateChange: PropTypes.func
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
