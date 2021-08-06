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

import React, { useState, useEffect, useContext } from 'react';
import envData from '../../../../config/env.json';

interface WalletsButtonProps {
  elements: StripeElements | null;
  stripe: Stripe | null;
}

const defaultConfig = {
  amount: 5,
  theme: 'dark',
  label: ''
};

const WalletConfig = React.createContext(defaultConfig);
const { stripePublicKey }: { stripePublicKey: string | null } = envData as {
  stripePublicKey: string | null;
};

interface WalletsButtonState {
  canMakePayment: boolean;
  hasCheckedAvailability: boolean;
  errorMessage: string | null;
  paymentMethod?: Record<string, unknown> | null;
}

const WalletsButton = ({ stripe, elements }: WalletsButtonProps) => {
  const [token, setToken] = useState(null);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasCheckedAvailability, checkAvailability] = useState(false);
  const [canMakePayment, checkpaymentPossiblity] = useState(false);

  const config = useContext(WalletConfig);
  console.log('lodaed');

  useEffect(() => {
    if (!stripe) {
      // We can't create a PaymentRequest until Stripe.js loads.
      console.log('nostripe');
      return;
    }

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: config.label,
        amount: config.amount
      },
      requestPayerName: true,
      requestPayerEmail: true,
      disableWallets: ['browserCard']
    });

    pr.on('token', event => {
      const { token, payerEmail, payerName } = event;
      setToken(token);
      console.log(token);
      event.complete('success');
      // this.context.postStripeDonation(token);
    });

    void pr.canMakePayment().then(canMakePaymentRes => {
      if (canMakePaymentRes) {
        setPaymentRequest(pr);
        checkAvailability(true);
        checkpaymentPossiblity(true);
      } else {
        checkAvailability(true);
        checkpaymentPossiblity(false);
      }
    });
  }, [stripe]);

  return (
    <form>
      {canMakePayment && (
        <PaymentRequestButtonElement
          onClick={event => {
            if (token) {
              event.preventDefault();
              setErrorMessage(
                'You can only use the PaymentRequest button once.'
              );
            }
          }}
          options={{
            style: {
              paymentRequestButton: {
                type: 'default',
                theme: config.theme === 'night' ? 'light' : 'dark',
                height: '43px'
              }
            },
            paymentRequest
          }}
        />
      )}
      {token && `Got PaymentMethod: ${token.id}`}
      {!canMakePayment && hasCheckedAvailability && 'notavailableresults'}
      {errorMessage && `err: ${errorMessage}`}
    </form>
  );
};

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <WalletsButton elements={elements} stripe={stripe} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe(stripePublicKey as string);

interface WrapperProps {
  label: string;
  amount: number;
  theme: string;
  postStripeDonation: (token: unknown) => void;
}

const WalletsWrapper = ({
  label,
  amount,
  theme,
  postStripeDonation
}: WrapperProps): JSX.Element => (
  <WalletConfig.Provider
    value={{
      label,
      amount,
      theme,
      postStripeDonation
    }}
  >
    <Elements stripe={stripePromise}>
      <InjectedCheckoutForm />
    </Elements>
  </WalletConfig.Provider>
);

export default WalletsWrapper;
