import {
  PaymentRequestButtonElement,
  ElementsConsumer
} from '@stripe/react-stripe-js';
import type { PaymentRequest, Stripe } from '@stripe/stripe-js';
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Themes } from '../settings/theme';
import {
  PaymentProvider,
  DonationDuration
} from '../../../../shared/config/donation-settings';
import { createStripePaymentIntent } from '../../utils/ajax';
import { DonationApprovalData, PostPayment } from './types';

interface WrapperProps {
  label: string;
  amount: number;
  theme: Themes;
  duration: DonationDuration;
  postPayment: (arg0: PostPayment) => void;
  onDonationStateChange: (donationState: DonationApprovalData) => void;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
}
interface WalletsButtonProps extends WrapperProps {
  stripe: Stripe | null;
}

const WalletsButton = ({
  stripe,
  label,
  amount,
  theme,
  duration,
  postPayment,
  onDonationStateChange,
  handlePaymentButtonLoad
}: WalletsButtonProps) => {
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );
  const { t } = useTranslation();

  const displayError = useCallback(
    (errorMessage: string): void => {
      onDonationStateChange({
        redirecting: false,
        processing: false,
        success: false,
        error: errorMessage
      });
    },
    [onDonationStateChange]
  );

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: { label, amount },
      requestPayerName: true,
      requestPayerEmail: true,
      disableWallets: ['browserCard']
    });

    pr.on('paymentmethod', async event => {
      const {
        payerEmail,
        payerName,
        paymentMethod: { id: paymentMethodId }
      } = event;
      //create payment intent
      const {
        data: { clientSecret, subscriptionId, error }
      } = await createStripePaymentIntent({
        email: payerEmail,
        name: payerName,
        amount,
        duration
      });

      if (error) {
        event.complete('fail');
        displayError(t('donate.try-another-method'));
      } else if (clientSecret) {
        // confirm payment intent
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: event.paymentMethod.id },
            { handleActions: false }
          );

        if (confirmError) {
          event.complete('fail');
          displayError(t('donate.try-another-method'));
        } else {
          event.complete('success');
          if (paymentIntent.status === 'requires_action') {
            const { error } = await stripe.confirmCardPayment(clientSecret);
            if (error) {
              return displayError(t('donate.try-another-method'));
            }
          }
          postPayment({
            paymentProvider: PaymentProvider.Stripe,
            paymentMethodId,
            payerEmail,
            payerName,
            subscriptionId
          });
        }
      }
    });

    void pr.canMakePayment().then(result => {
      if (result) setPaymentRequest(pr);
    });

    return () => {
      setPaymentRequest(null);
    };
  }, [
    label,
    amount,
    stripe,
    postPayment,
    handlePaymentButtonLoad,
    duration,
    displayError,
    t
  ]);

  return (
    <form className='wallets-form'>
      {paymentRequest && (
        <PaymentRequestButtonElement
          onReady={() => handlePaymentButtonLoad('stripe')}
          options={{
            style: {
              paymentRequestButton: {
                type: 'default',
                theme: theme === Themes.Night ? 'light' : 'dark',
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

export default function InjectedCheckoutForm(props: WrapperProps): JSX.Element {
  return (
    <ElementsConsumer>
      {({ stripe }: { stripe: Stripe | null }) => (
        <WalletsButton stripe={stripe} {...props} />
      )}
    </ElementsConsumer>
  );
}
