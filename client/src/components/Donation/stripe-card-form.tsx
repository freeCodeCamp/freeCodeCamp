import { Button, Form } from '@freecodecamp/react-bootstrap';
import {
  CardNumberElement,
  CardExpiryElement,
  useStripe,
  useElements,
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type {
  StripeCardNumberElementChangeEvent,
  StripeCardExpiryElementChangeEvent
} from '@stripe/stripe-js';
import React, { useState } from 'react';

import { PaymentProvider } from '../../../../config/donation-settings';
import envData from '../../../../config/env.json';
import { Themes } from '../settings/theme';
import { DonationApprovalData, PostPayment } from './types';

const { stripePublicKey }: { stripePublicKey: string | null } = envData;

interface FormPropTypes {
  onDonationStateChange: (donationState: DonationApprovalData) => void;
  postPayment: (arg0: PostPayment) => void;
  t: (label: string) => string;
  theme: Themes;
  processing: boolean;
}

interface Element {
  elementType: 'cardNumber' | 'cardExpiry';
  complete: boolean;
  error?: null | { type: 'validation_error'; code: string; message: string };
}

type PaymentInfoValidation = Element[];

const StripeCardForm = ({
  theme,
  t,
  onDonationStateChange,
  postPayment,
  processing
}: FormPropTypes): JSX.Element => {
  const [isSubmissionValid, setSubmissionValidity] = useState(true);
  const [isTokenizing, setTokenizing] = useState(false);
  const [paymentInfoValidation, setPaymentValidity] =
    useState<PaymentInfoValidation>([
      {
        elementType: 'cardNumber',
        complete: false,
        error: null
      },
      {
        elementType: 'cardExpiry',
        complete: false,
        error: null
      }
    ]);
  const isPaymentInfoValid = paymentInfoValidation.every(
    ({ complete, error }) => complete && !error
  );
  const isSubmitting = isTokenizing || processing;
  const stripe = useStripe();
  const elements = useElements();

  function handleInputChange(
    event:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
  ) {
    const { elementType, error, complete } = event;
    setPaymentValidity(
      paymentInfoValidation.map(element => {
        if (element.elementType === elementType)
          return { elementType, error, complete };
        return element;
      })
    );
  }

  const options = {
    style: {
      base: {
        fontSize: '18px',
        color: `${theme === Themes.Night ? '#fff' : '#0a0a23'}`,
        '::placeholder': {
          color: `#858591`
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPaymentInfoValid) return setSubmissionValidity(false);
    else setSubmissionValidity(true);

    if (!isSubmitting && stripe && elements) {
      const cardElement = elements.getElement(CardNumberElement);
      if (cardElement) {
        setTokenizing(true);
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement
        });
        if (error) {
          onDonationStateChange({
            redirecting: false,
            processing: false,
            success: false,
            error: t('donate.went-wrong')
          });
        } else if (paymentMethod)
          postPayment({
            paymentProvider: PaymentProvider.StripeCard,
            paymentMethodId: paymentMethod.id,
            handleAuthentication
          });
      }
    }
    return setTokenizing(false);
  };
  const handleAuthentication = async (
    clientSecret: string,
    paymentMethod: string
  ) => {
    if (stripe) {
      return stripe.confirmCardPayment(clientSecret, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        payment_method: paymentMethod
      });
    }
    return { error: { type: 'StripeNotLoaded' } };
  };

  return (
    <Form className='donation-form' onSubmit={handleSubmit}>
      <div
        className={`donation-elements${
          !isSubmissionValid ? ' failed-submition' : ''
        }`}
      >
        <CardNumberElement
          className='form-control donate-input-element'
          onChange={handleInputChange}
          options={options}
        />
        <CardExpiryElement
          className='form-control donate-input-element'
          onChange={handleInputChange}
          options={options}
        />
      </div>
      <div className={'form-status'}>
        {!isSubmissionValid && <p>{t('donate.valid-card')}</p>}
      </div>
      <Button
        block={true}
        bsStyle='primary'
        className='confirm-donation-btn'
        disabled={!stripe || !elements || isSubmitting}
        type='submit'
      >
        {t('buttons.donate')}
      </Button>
    </Form>
  );
};

const CardFormWrapper = (props: FormPropTypes): JSX.Element | null => {
  if (!stripePublicKey) {
    return null;
  } else {
    return (
      <Elements stripe={loadStripe(stripePublicKey)}>
        <StripeCardForm {...props} />
      </Elements>
    );
  }
};

export default CardFormWrapper;
