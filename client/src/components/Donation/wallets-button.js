/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable camelcase */

import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import React from 'react';

const ELEMENT_OPTIONS = {
  style: {
    paymentRequestButton: {
      type: 'donate',
      theme: 'dark',
      height: '43px'
    }
  }
};

class WalletButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canMakePayment: false,
      hasCheckedAvailability: false,
      errorMessage: null
    };
  }

  async componentDidUpdate() {
    const { stripe } = this.props;

    if (stripe && !this.paymentRequest) {
      // Create PaymentRequest after Stripe.js loads.
      this.createPaymentRequest(stripe);
    }
  }

  async createPaymentRequest(stripe) {
    this.paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 100
      },
      requestPayerName: true,
      requestPayerEmail: true
    });

    this.paymentRequest.on('paymentmethod', async event => {
      this.setState({ paymentMethod: event.paymentMethod });
      event.complete('success');
    });

    this.paymentRequest.on('token', async event => {
      console.log({ event });
    });

    const canMakePaymentRes = await this.paymentRequest.canMakePayment();
    if (canMakePaymentRes) {
      this.setState({ canMakePayment: true, hasCheckedAvailability: true });
    } else {
      this.setState({ canMakePayment: false, hasCheckedAvailability: true });
    }
  }

  render() {
    console.log('walletButons');
    const {
      canMakePayment,
      hasCheckedAvailability,
      errorMessage,
      paymentMethod
    } = this.state;
    console.log(this.state);
    return (
      <form>
        {canMakePayment && (
          <PaymentRequestButtonElement
            onClick={event => {
              if (paymentMethod) {
                event.preventDefault();
                this.setState({
                  errorMessage:
                    'You can only use the PaymentRequest button once. Refresh the page to start over.'
                });
              }
            }}
            options={{
              ...ELEMENT_OPTIONS,
              paymentRequest: this.paymentRequest
            }}
          />
        )}
        {paymentMethod && 'Got PaymentMethod:' + paymentMethod.id}
        {!canMakePayment && hasCheckedAvailability && 'notavailableresults'}
        {errorMessage && 'err:' + { errorMessage }}
      </form>
    );
  }
}

export default WalletButtons;
