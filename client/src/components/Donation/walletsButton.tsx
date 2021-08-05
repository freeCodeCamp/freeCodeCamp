/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable camelcase */

import {
  PaymentRequestButtonElement,
  Elements,
  ElementsConsumer
} from '@stripe/react-stripe-js';
import { Stripe, StripeElements, loadStripe } from '@stripe/stripe-js';

import React from 'react';
import envData from '../../../../config/env.json';

interface WalletsButtonProps {
  elements: StripeElements | null;
  stripe: Stripe | null;
}

const { stripePublicKey }: { stripePublicKey: string | null } = envData as {
  stripePublicKey: string | null;
};

interface WalletsButtonState {
  canMakePayment: boolean;
  hasCheckedAvailability: boolean;
  errorMessage: string | null;
  paymentMethod?: Record<string, unknown> | null;
}

class WalletsButton extends React.Component<
  WalletsButtonProps,
  WalletsButtonState
> {
  paymentRequest: any;
  constructor(props: WalletsButtonProps) {
    super(props);
    this.state = {
      canMakePayment: false,
      hasCheckedAvailability: false,
      errorMessage: null
    };
  }

  async componentDidUpdate(): Promise<void> {
    const { stripe } = this.props;

    if (stripe && !this.paymentRequest) {
      // Create PaymentRequest after Stripe.js loads.
      await this.createPaymentRequest(stripe);
    }
  }

  async createPaymentRequest(stripe: Stripe): Promise<void> {
    this.paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Monthly subscription',
        amount: 100
      },
      requestPayerName: true,
      requestPayerEmail: true,
      disableWallets: ['browserCard']
    });

    this.paymentRequest.on('paymentmethod', async (event: any) => {
      this.setState({ paymentMethod: event.paymentMethod });
      await event.complete('success');
    });

    this.paymentRequest.on('token', (event: any) => {
      console.log({ event });
    });

    const canMakePaymentRes = await this.paymentRequest.canMakePayment();
    if (canMakePaymentRes) {
      this.setState({ canMakePayment: true, hasCheckedAvailability: true });
    } else {
      this.setState({ canMakePayment: false, hasCheckedAvailability: true });
    }
  }

  render(): JSX.Element {
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
              style: {
                paymentRequestButton: {
                  type: 'default',
                  theme: 'dark',
                  height: '43px'
                }
              },
              paymentRequest: this.paymentRequest
            }}
          />
        )}
        {paymentMethod && `Got PaymentMethod: ${paymentMethod.id}`}
        {!canMakePayment && hasCheckedAvailability && 'notavailableresults'}
        {errorMessage && `err: ${errorMessage}`}
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <WalletsButton elements={elements} stripe={stripe} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe(stripePublicKey as string);

const WalletsWrapper = (): JSX.Element => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

export default WalletsWrapper;
