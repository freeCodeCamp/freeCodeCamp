import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { StripeProvider, Elements } from 'react-stripe-elements';
import {
  Button,
  Col,
  Row,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup
} from '@freecodecamp/react-bootstrap';
import ApplePay from './assets/ApplePay';
import GooglePay from './assets/GooglePay';
import acceptedCards from './assets/accepted-cards.png';
import {
  amountsConfig,
  durationsConfig,
  defaultAmount,
  defaultDonation,
  onetimeSKUConfig,
  donationUrls,
  modalDefaultDonation
} from '../../../../config/donation-settings';
import { stripePublicKey } from '../../../../config/env.json';
import { stripeScriptLoader } from '../../utils/scriptLoaders';
import DonateFormChildViewForHOC from './DonateFormChildViewForHOC';
import { deploymentEnv } from '../../../config/env.json';
import Spacer from '../helpers/Spacer';
import PaypalButton from './PaypalButton';
import DonateCompletion from './DonateCompletion';
import {
  isSignedInSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  hardGoTo as navigate,
  addDonation,
  postChargeStripe,
  updateDonationFormState,
  defaultDonationFormState
} from '../../redux';

import './Donation.css';

const numToCommas = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const propTypes = {
  addDonation: PropTypes.func,
  defaultTheme: PropTypes.string,
  donationFormState: PropTypes.object,
  handleProcessing: PropTypes.func,
  isDonating: PropTypes.bool,
  isMinimalForm: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  postChargeStripe: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  updateDonationFormState: PropTypes.func
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  donationFormStateSelector,
  (showLoading, isSignedIn, donationFormState) => ({
    isSignedIn,
    showLoading,
    donationFormState
  })
);

const mapDispatchToProps = {
  addDonation,
  navigate,
  postChargeStripe,
  updateDonationFormState
};

class DonateForm extends Component {
  constructor(...args) {
    super(...args);

    this.durations = durationsConfig;
    this.amounts = amountsConfig;

    const initialAmountAndDuration = this.props.isMinimalForm
      ? modalDefaultDonation
      : defaultDonation;

    this.state = {
      ...initialAmountAndDuration,
      processing: false,
      stripe: null
    };

    this.handleStripeLoad = this.handleStripeLoad.bind(this);
    this.onDonationStateChange = this.onDonationStateChange.bind(this);
    this.getActiveDonationAmount = this.getActiveDonationAmount.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.handleSelectDuration = this.handleSelectDuration.bind(this);
    this.handleStripeCheckoutRedirect = this.handleStripeCheckoutRedirect.bind(
      this
    );
    this.hideAmountOptionsCB = this.hideAmountOptionsCB.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
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
    this.resetDonation();
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

  onDonationStateChange(donationState) {
    // scroll to top
    window.scrollTo(0, 0);

    this.props.updateDonationFormState(donationState);
    // send donation made on the donate page to related news article
    if (donationState.success && !this.props.isMinimalForm) {
      this.props.navigate(donationUrls.successUrl);
    }
  }

  getActiveDonationAmount(durationSelected, amountSelected) {
    return this.amounts[durationSelected].includes(amountSelected)
      ? amountSelected
      : defaultAmount[durationSelected] || this.amounts[durationSelected][0];
  }

  convertToTimeContributed(amount) {
    return `${numToCommas((amount / 100) * 50)} hours`;
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
      )} ${donationDuration === 'month' ? ' / month' : ' / year'}`;
    }
    return donationBtnLabel;
  }

  handleSelectDuration(donationDuration) {
    const donationAmount = this.getActiveDonationAmount(donationDuration, 0);
    this.setState({ donationDuration, donationAmount });
  }

  handleSelectAmount(donationAmount) {
    this.setState({ donationAmount });
  }

  async handleStripeCheckoutRedirect(e, paymentMethod) {
    const { stripe } = this.state;
    const { donationAmount, donationDuration } = this.state;

    this.props.handleProcessing(
      donationDuration,
      donationAmount,
      `stripe (${paymentMethod}) button click`
    );

    const isOneTime = donationDuration === 'onetime';
    const getSKUId = () => {
      const { id } = onetimeSKUConfig[deploymentEnv || 'staging'].find(
        skuConfig => skuConfig.amount === `${donationAmount}`
      );
      return id;
    };

    e.preventDefault();
    const item = isOneTime
      ? {
          sku: getSKUId(),
          quantity: 1
        }
      : {
          plan: `${this.durations[donationDuration]}-donation-${donationAmount}`,
          quantity: 1
        };
    const { error } = await stripe.redirectToCheckout({
      items: [item],
      successUrl: donationUrls.successUrl,
      cancelUrl: donationUrls.cancelUrl
    });
    console.error(error);
  }

  renderAmountButtons(duration) {
    return this.amounts[duration].map(amount => (
      <ToggleButton
        className='amount-value'
        id={`${this.durations[duration]}-donation-${amount}`}
        key={`${this.durations[duration]}-donation-${amount}`}
        value={amount}
      >
        {this.getFormatedAmountLabel(amount)}
      </ToggleButton>
    ));
  }

  renderDurationAmountOptions() {
    const { donationAmount, donationDuration, processing } = this.state;
    return !processing ? (
      <div>
        <h3>Duration and amount:</h3>
        <Tabs
          activeKey={donationDuration}
          animation={false}
          bsStyle='pills'
          className='donate-tabs'
          id='Duration'
          onSelect={this.handleSelectDuration}
        >
          {Object.keys(this.durations).map(duration => (
            <Tab
              eventKey={duration}
              key={duration}
              title={this.durations[duration]}
            >
              <Spacer />
              <div>
                <ToggleButtonGroup
                  animation={`false`}
                  className='amount-values'
                  name='amounts'
                  onChange={this.handleSelectAmount}
                  type='radio'
                  value={this.getActiveDonationAmount(duration, donationAmount)}
                >
                  {this.renderAmountButtons(duration)}
                </ToggleButtonGroup>
                <Spacer />
                <p className='donation-description'>
                  {`Your `}
                  {this.getFormatedAmountLabel(donationAmount)}
                  {` donation will provide `}
                  {this.convertToTimeContributed(donationAmount)}
                  {` of learning to people around the world`}
                  {duration === 'onetime' ? `.` : ` each ${duration}.`}
                </p>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    ) : null;
  }

  hideAmountOptionsCB(hide) {
    this.setState({ processing: hide });
  }

  renderDonationOptions() {
    const { handleProcessing, isSignedIn, addDonation } = this.props;
    const { donationAmount, donationDuration } = this.state;

    const isOneTime = donationDuration === 'onetime';

    return (
      <div>
        {isOneTime ? (
          <b>Confirm your one-time donation of ${donationAmount / 100}:</b>
        ) : (
          <b>
            Confirm your donation of ${donationAmount / 100} /{' '}
            {donationDuration}:
          </b>
        )}
        <Spacer />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-cta'
          id='confirm-donation-btn'
          onClick={e => this.handleStripeCheckoutRedirect(e, 'apple pay')}
        >
          <span>Donate with Apple Pay</span>

          <ApplePay className='apple-pay-logo' />
        </Button>
        <Spacer />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-cta'
          id='confirm-donation-btn'
          onClick={e => this.handleStripeCheckoutRedirect(e, 'google pay')}
        >
          <span>Donate with Google Pay</span>
          <GooglePay className='google-pay-logo' />
        </Button>
        <Spacer />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-cta'
          id='confirm-donation-btn'
          onClick={e => this.handleStripeCheckoutRedirect(e, 'credit card')}
        >
          <span>Donate with Card</span>

          <img
            alt='accepted cards'
            className='accepted-cards'
            src={acceptedCards}
          />
        </Button>
        <Spacer />
        <PaypalButton
          addDonation={addDonation}
          donationAmount={donationAmount}
          donationDuration={donationDuration}
          handleProcessing={handleProcessing}
          isSubscription={isOneTime ? false : true}
          onDonationStateChange={this.onDonationStateChange}
          skipAddDonation={!isSignedIn}
        />
        <Spacer size={2} />
      </div>
    );
  }

  resetDonation() {
    return this.props.updateDonationFormState({ ...defaultDonationFormState });
  }

  renderCompletion(props) {
    return <DonateCompletion {...props} />;
  }

  renderModalForm() {
    const { donationAmount, donationDuration, stripe } = this.state;
    const {
      handleProcessing,
      defaultTheme,
      addDonation,
      postChargeStripe
    } = this.props;

    return (
      <Row>
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer />
          <b>{this.getDonationButtonLabel()} with PayPal:</b>
          <Spacer />
          <PaypalButton
            addDonation={addDonation}
            donationAmount={donationAmount}
            donationDuration={donationDuration}
            handleProcessing={handleProcessing}
            onDonationStateChange={this.onDonationStateChange}
          />
        </Col>
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer />
          <b>Or donate with a credit card:</b>
          <Spacer />
          <StripeProvider stripe={stripe}>
            <Elements>
              <DonateFormChildViewForHOC
                defaultTheme={defaultTheme}
                donationAmount={donationAmount}
                donationDuration={donationDuration}
                getDonationButtonLabel={this.getDonationButtonLabel}
                handleProcessing={handleProcessing}
                onDonationStateChange={this.onDonationStateChange}
                postChargeStripe={postChargeStripe}
              />
            </Elements>
          </StripeProvider>
        </Col>
      </Row>
    );
  }

  renderPageForm() {
    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderDurationAmountOptions()}
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderDonationOptions()}
        </Col>
      </Row>
    );
  }

  render() {
    const {
      donationFormState: { processing, success, error },
      isMinimalForm
    } = this.props;
    if (success || error) {
      return this.renderCompletion({
        processing,
        success,
        error,
        reset: this.resetDonation
      });
    }

    // keep payment provider elements on DOM during processing to avoid errors.
    return (
      <>
        {processing &&
          this.renderCompletion({
            processing,
            success,
            error,
            reset: this.resetDonation
          })}
        <div className={processing ? 'hide' : ''}>
          {isMinimalForm
            ? this.renderModalForm(processing)
            : this.renderPageForm(processing)}
        </div>
      </>
    );
  }
}

DonateForm.displayName = 'DonateForm';
DonateForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateForm);
