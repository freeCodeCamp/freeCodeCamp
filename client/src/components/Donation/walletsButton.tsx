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
import { Stripe, loadStripe } from '@stripe/stripe-js';

import React, { useState, useEffect } from 'react';
import envData from '../../../../config/env.json';

const { stripePublicKey }: { stripePublicKey: string | null } = envData as {
  stripePublicKey: string | null;
};

// interface WalletsButtonState {
//   canMakePayment: boolean;
//   hasCheckedAvailability: boolean;
//   errorMessage: string | null;
//   paymentMethod?: Record<string, unknown> | null;
// }
interface WrapperProps {
  label: string;
  amount: number;
  theme: string;
  postStripeDonation: (token: unknown) => void;
  onDonationStateChange: (token: unknown) => void;
  refreshErrorMessage: string;
}
interface WalletsButtonProps extends WrapperProps {
  stripe: Stripe | null;
}

const WalletsButton = ({
  stripe,
  label,
  amount,
  theme,
  refreshErrorMessage,
  postStripeDonation,
  onDonationStateChange
}: WalletsButtonProps) => {
  const [token, setToken] = useState(null);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [hasCheckedAvailability, checkAvailability] = useState(null);
  const [canMakePayment, checkpaymentPossiblity] = useState(false);

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
        label,
        amount
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
      // postStripeDonation(token);
    });

    void pr.canMakePayment().then(canMakePaymentRes => {
      if (canMakePaymentRes) {
        setPaymentRequest(pr);
        checkAvailability(true);
        checkpaymentPossiblity(true);
      } else {
        checkAvailability(true);
        checkpaymentPossiblity(false);
        console.log('walletsavailabler');
      }
    });
  }, [stripe]);

  const displayRefreshError = (): void => {
    onDonationStateChange({
      redirecting: false,
      processing: false,
      success: false,
      error: refreshErrorMessage
    });
  };

  return (
    <form>
      {canMakePayment && (
        <PaymentRequestButtonElement
          onClick={event => {
            if (token) {
              displayRefreshError();
            }
          }}
          options={{
            style: {
              paymentRequestButton: {
                type: 'default',
                theme: theme === 'night' ? 'light' : 'dark',
                height: '43px'
              }
            },
            paymentRequest
          }}
        />
      )}
    </form>
  );
};

const InjectedCheckoutForm = (props: WrapperProps): JSX.Element => (
  <ElementsConsumer>
    {({ stripe }) => <WalletsButton stripe={stripe} {...props} />}
  </ElementsConsumer>
);

const stripePromise = loadStripe(stripePublicKey as string);

const WalletsWrapper = (props: WrapperProps): JSX.Element => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm {...props} />
  </Elements>
);

export default WalletsWrapper;
