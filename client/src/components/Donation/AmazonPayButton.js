/* eslint-disable camelcase */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Alert } from '@freecodecamp/react-bootstrap';

import { signInLoadingSelector, userSelector } from '../../redux';
import { scriptLoader } from '../../utils/scriptLoaders';
import { postChargeAmazonPay } from '../../utils/ajax';
import { Spacer } from '../../components/helpers';

import { amazonPayClientId, amazonPaySellerId } from '../../../config/env.json';

const consentErrorMessage =
  'Please check the box below to consent to reccuring payments.';
const generalErrorMessage =
  'Something is not right. Please contact team@freecodecamp.org';

export class AmazonPayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasConsent: 'false',
      billingAgreementId: '',
      showWalletWidget: 'true',
      showConsentWidget: 'true',
      billingAgreementStatus: 'Draft',
      hasAmazonPayButtonLoaded: false,
      error: '',
      consentError: ''
    };

    this.handleConsentChange = this.handleConsentChange.bind(this);
    this.handleBillingAgreementId = this.handleBillingAgreementId.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.showAmazonPayButton = this.showAmazonPayButton.bind(this);
  }

  showAmazonPayButton = () => {
    this.setState({ hasAmazonPayButtonLoaded: true });
  };

  componentDidMount() {
    const componentContext = this;
    // get access token
    function getURLParameter(name, source) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&amp;|#]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            source
            // eslint-disable-next-line no-sparse-arrays
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      );
    }

    var accessToken = getURLParameter('access_token', window.location.hash);
    if (typeof accessToken === 'string' && accessToken.match(/^Atza/)) {
      document.cookie =
        'amazon_Login_accessToken=' + accessToken + ';path=/;secure';
    }

    window.onAmazonLoginReady = function() {
      window.amazon.Login.setClientId(amazonPayClientId);
    };

    window.onAmazonPaymentsReady = function() {
      componentContext.showLoginButton();
      componentContext.showWalletWidget(null);
    };

    // document.getElementById('Logout').onclick = function() {
    //   window.amazon.Login.logout();
    //   document.cookie =
    //     'amazon_Login_accessToken=; ' +
    //     'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    // };

    scriptLoader(
      'amazon-widgets',
      'amazon-widgets',
      true,
      'https://static-na.payments-amazon.com/OffAmazonPayments/us/sandbox/js/Widgets.js'
    );
  }

  showLoginButton() {
    const componentContext = this;
    console.log('load button');
    // eslint-disable-next-line no-unused-vars
    var authRequest;
    var loginOptions;
    window.OffAmazonPayments.Button('AmazonPayButton', amazonPaySellerId, {
      type: 'PwA',
      color: 'Gold',
      size: 'large',
      authorization: function() {
        loginOptions = {
          scope: 'profile payments:widget payments:shipping_address',
          popup: true
        };
        authRequest = window.amazon.Login.authorize(loginOptions, function(t) {
          console.log(t.access_token);
          console.log(t.expires_in);
          console.log(t.token_type);
          componentContext.showWalletWidget(null);
          componentContext.props.showAmazonWidget();
        });
      }
    });
    componentContext.showAmazonPayButton();
  }

  showWalletWidget(billingAgreementId) {
    const componentContext = this;
    // Wallet
    new window.OffAmazonPayments.Widgets.Wallet({
      sellerId: amazonPaySellerId,
      agreementType: 'BillingAgreement',
      amazonBillingAgreementId: billingAgreementId,
      onReady: function(billingAgreement) {
        componentContext.handleBillingAgreementId(
          billingAgreement.getAmazonBillingAgreementId()
        );
        componentContext.showConsentWidget(billingAgreement);
      },
      onPaymentSelect: function() {
        console.log(arguments);
      },
      design: {
        designMode: 'responsive'
      },
      onError: function(error) {
        // Error handling code
        // We also recommend that you implement
        // an onError handler in your code.
        // @see https://payments.amazon.com/documentation/lpwa/201954960
        console.log(
          'OffAmazonPayments.Widgets.Wallet',
          error.getErrorCode(),
          error.getErrorMessage()
        );
      }
    }).bind('walletWidgetDiv');
  }

  showConsentWidget(billingAgreement) {
    const componentContext = this;
    // Consent
    new window.OffAmazonPayments.Widgets.Consent({
      sellerId: amazonPaySellerId,
      // eslint-disable-next-line max-len
      amazonBillingAgreementId: billingAgreement.getAmazonBillingAgreementId(),
      onReady: function(billingAgreementConsentStatus) {
        componentContext.handleConsentChange(
          billingAgreementConsentStatus.getConsentStatus()
        );
      },
      onConsent: function(billingAgreementConsentStatus) {
        componentContext.handleConsentChange(
          billingAgreementConsentStatus.getConsentStatus()
        );
      },
      design: {
        designMode: 'responsive'
      },
      onError: function(error) {
        // Error handling code
        // We also recommend that you implement
        // an onError handler in your code.
        // @see https://payments.amazon.com/documentation/lpwa/201954960
        console.log(
          'OffAmazonPayments.Widgets.Consent',
          error.getErrorCode(),
          error.getErrorMessage()
        );
      }
    }).bind('consentWidgetDiv');
  }

  handleConsentChange = hasConsent => {
    this.setState({ hasConsent });
  };

  handleBillingAgreementId(billingAgreementId) {
    this.setState({ billingAgreementId });
  }

  handleOnSubmit() {
    this.setState({ error: '', consentError: '' });
    if (this.state.hasConsent === 'false' || !this.state.billingAgreementId) {
      this.setState({ consentError: consentErrorMessage });
    } else {
      let { donationAmount, donationDuration } = this.props;
      console.log(`Submitting ${this.state.billingAgreementId}`);

      postChargeAmazonPay({ ...this.state, donationAmount, donationDuration })
        .then(response => {
          console.log(response);
          // const data = response && response.data;
          // this.setState(state => ({
          //   ...state,
          //   donationState: {
          //     ...state.donationState,
          //     processing: false,
          //     success: true,
          //     error: data.error ? data.error : null
          //   }
          // }));
          console.log('success', response);
        })
        .catch(error => {
          const data =
            error.response && error.response.data
              ? error.response.data
              : {
                  error: generalErrorMessage
                };
          console.log(data);
          if (
            error.response &&
            error.response.data &&
            error.response.data.type === 'InvalidPaymentMethod'
          ) {
            this.showWalletWidget(this.state.billingAgreementId);
            this.setState({ showConsentWidget: false });
          }
          this.setState({ error: data.error });
        });
    }
  }

  renderErrorMessage(error) {
    return <Alert bsStyle='danger'>{error}</Alert>;
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    let {
      showConsentWidget,
      showWalletWidget,
      error,
      consentError
    } = this.state;
    let { donationAmount, donationPlan, isAmazonWidgetsDisplayed } = this.props;
    console.log(consentError);
    if (!isAmazonWidgetsDisplayed) {
      return (
        <div
          style={{
            textAlign: 'center',
            borderRadius: '3px',
            padding: '5px',
            margin: '5px'
          }}
        >
          <div id='AmazonPayButton'></div>
        </div>
      );
    }
    return (
      <div>
        <Spacer />
        <b>
          Confirm your donation of ${donationAmount / 100} today and at the
          begining of every month:
        </b>
        <Spacer />
        <div>{error && this.renderErrorMessage(error)}</div>
        {showWalletWidget && (
          <div id='walletWidgetDiv' style={{ height: '250px' }} />
        )}
        <Spacer />
        <div>{consentError && this.renderErrorMessage(consentError)}</div>
        {showConsentWidget && (
          <div id='consentWidgetDiv' style={{ height: '120px' }} />
        )}
        <Spacer />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-cta'
          onClick={this.handleOnSubmit}
          type='submit'
        >
          Confirm your donation of {donationPlan}
        </Button>
      </div>
    );
  }
}

const propTypes = {
  donationAmount: PropTypes.number,
  donationDuration: PropTypes.string,
  donationPlan: PropTypes.string,
  handleProcessing: PropTypes.func,
  isAmazonWidgetsDisplayed: PropTypes.bool,
  isDonating: PropTypes.bool,
  onDonationStateChange: PropTypes.func,
  showAmazonWidget: PropTypes.func,
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

AmazonPayButton.displayName = 'AmazonPayButton';
AmazonPayButton.propTypes = propTypes;

export default connect(mapStateToProps)(AmazonPayButton);
