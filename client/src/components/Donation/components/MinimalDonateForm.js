/* eslint-disable react/sort-prop-types */
/* eslint-disable react/jsx-sort-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';

import {
  amountsConfig,
  durationsConfig,
  defaultStateConfig
} from '../../../../../config/donation-settings';
import DonateFormChildViewForHOC from './DonateFormChildViewForHOC';
import { userSelector } from '../../../redux';

import '../Donation.css';
import DonateCompletion from './DonateCompletion.js';
import { stripePublicKey } from '../../../../../config/env.json';
import { stripeScriptLoader } from '../../../utils/scriptLoaders';

const numToCommas = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const propTypes = {
  showCloseBtn: PropTypes.func,
  defaultTheme: PropTypes.string,
  isDonating: PropTypes.bool,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
};

const mapStateToProps = createSelector(
  userSelector,
  ({ isDonating }) => ({
    isDonating
  })
);

class ModalDonateForm extends Component {
  constructor(...args) {
    super(...args);

    this.durations = durationsConfig;
    this.amounts = amountsConfig;

    this.state = {
      ...defaultStateConfig,
      isDonating: this.props.isDonating,
      stripe: null
    };
    this.handleSelectPaymentType = this.handleSelectPaymentType.bind(this);
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
  }

  componentDidMount() {
    if (window.Stripe) {
      this.handleStripeLoad();
    } else if (document.querySelector('#stripe-js')) {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', this.handleStripeLoad);
    } else {
      stripeScriptLoader(this.handleStripeLoad);
    }
  }

  componentWillUnmount() {
    const stripeMountPoint = document.querySelector('#stripe-js');
    if (stripeMountPoint) {
      stripeMountPoint.removeEventListener('load', this.handleStripeLoad);
    }
  }

  handleStripeLoad() {
    // Create Stripe instance once Stripe.js loads
    if (stripePublicKey) {
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripePublicKey)
      }));
    }
  }

  handleSelectPaymentType(e) {
    this.setState({
      paymentType: e.currentTarget.value
    });
  }

  getFormatedAmountLabel(amount) {
    return `$${numToCommas(amount / 100)}`;
  }

  getDonationButtonLabel() {
    const { donationAmount, donationDuration } = this.state;
    let donationBtnLabel = `Confirm your donation`;
    if (donationDuration === 'onetime') {
      donationBtnLabel = `Confirm your one-time donation of ${this.getFormatedAmountLabel(
        donationAmount
      )}`;
    } else {
      donationBtnLabel = `Confirm your donation of ${this.getFormatedAmountLabel(
        donationAmount
      )} ${donationDuration === 'month' ? 'per month' : 'per year'}`;
    }
    return donationBtnLabel;
  }

  renderDonationOptions() {
    const {
      donationAmount,
      donationDuration,
      paymentType,
      stripe
    } = this.state;

    const { showCloseBtn, defaultTheme } = this.props;
    return (
      <div>
        {paymentType === 'Card' ? (
          <StripeProvider stripe={stripe}>
            <Elements>
              <DonateFormChildViewForHOC
                showCloseBtn={showCloseBtn}
                defaultTheme={defaultTheme}
                donationAmount={donationAmount}
                donationDuration={donationDuration}
                getDonationButtonLabel={this.getDonationButtonLabel}
              />
            </Elements>
          </StripeProvider>
        ) : (
          <p>
            PayPal is currently unavailable. Please use a Credit/Debit card
            instead.
          </p>
        )}
      </div>
    );
  }

  render() {
    const { isDonating } = this.props;

    if (isDonating) {
      return (
        <Row>
          <Col sm={10} smOffset={1} xs={12}>
            <DonateCompletion success={true} />
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderDonationOptions()}
        </Col>
      </Row>
    );
  }
}

ModalDonateForm.displayName = 'ModalDonateForm';
ModalDonateForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null
)(ModalDonateForm);
