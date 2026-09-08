import React, { useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  DISPATCH_ACTION,
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
  type ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';
import {
  paypalConfigurator,
  paypalConfigTypes,
  PaymentProvider,
  type DonationDuration,
  type DonationAmount
} from '@freecodecamp/shared/config/donation-settings';
import envData from '../../../config/env.json';
import { userSelector, signInLoadingSelector } from '../../redux/selectors';
import { LocalStorageThemes } from '../../redux/types';
import type { User } from '../../redux/prop-types';
import { DonationApprovalData, PostPayment } from './types';

type PaypalButtonProps = {
  donationAmount: DonationAmount;
  donationDuration: DonationDuration;
  isDonating: boolean;
  onDonationStateChange: ({
    redirecting,
    processing,
    success,
    error
  }: {
    redirecting: boolean;
    processing: boolean;
    success: boolean;
    error: string | null;
  }) => void;
  t: (label: string) => string;
  theme: LocalStorageThemes;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
  isMinimalForm: boolean | undefined;
  postPayment: (arg0: PostPayment) => void;
};

type ButtonStyle = {
  color: 'gold' | 'white';
  height: number;
  tagline: boolean;
};

const {
  paypalClientId,
  deploymentEnv
}: { paypalClientId: string | null; deploymentEnv: 'staging' | 'production' } =
  envData as {
    paypalClientId: string | null;
    deploymentEnv: 'staging' | 'production';
  };

// The minimal form disables `card` too, since it has its own Stripe card form.
const alwaysDisabledFunding = [
  'credit',
  'bancontact',
  'blik',
  'eps',
  'giropay',
  'ideal',
  'mybank',
  'p24',
  'sepa',
  'sofort',
  'venmo'
];

function getScriptOptions({
  clientId,
  isSubscription,
  isMinimalForm
}: {
  clientId: string;
  isSubscription: boolean;
  isMinimalForm: boolean | undefined;
}): ReactPayPalScriptOptions {
  return {
    clientId,
    disableFunding: [
      ...(isMinimalForm ? ['card'] : []),
      ...alwaysDisabledFunding
    ].join(','),
    // undefined values are dropped from the query string.
    vault: isSubscription ? true : undefined,
    intent: isSubscription ? 'subscription' : undefined
  };
}

type ButtonsProps = {
  amount: DonationAmount;
  planId: string | null;
  isSubscription: boolean;
  scriptOptions: ReactPayPalScriptOptions;
  style: ButtonStyle;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
  onApprove: (data: DonationApprovalData) => void;
  onCancel: () => void;
  onError: () => void;
};

function Buttons({
  amount,
  planId,
  isSubscription,
  scriptOptions,
  style,
  handlePaymentButtonLoad,
  onApprove,
  onCancel,
  onError
}: ButtonsProps): JSX.Element {
  const [{ isResolved }, dispatch] = usePayPalScriptReducer();

  // These options are part of the SDK's query string, so changing them has to
  // reload the script rather than just re-render the buttons.
  const optionsKey = [
    scriptOptions.vault,
    scriptOptions.intent,
    scriptOptions.disableFunding
  ].join('|');
  const loadedOptionsKey = useRef(optionsKey);

  useEffect(() => {
    if (loadedOptionsKey.current === optionsKey) return;
    loadedOptionsKey.current = optionsKey;
    dispatch({ type: DISPATCH_ACTION.RESET_OPTIONS, value: scriptOptions });
  }, [optionsKey, scriptOptions, dispatch]);

  useEffect(() => {
    if (isResolved) handlePaymentButtonLoad('paypal');
  }, [isResolved, handlePaymentButtonLoad]);

  return (
    <PayPalButtons
      forceReRender={[amount, planId, isSubscription, style.color]}
      style={style}
      createOrder={
        isSubscription
          ? undefined
          : (_data, actions) =>
              actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: (amount / 100).toString()
                    }
                  }
                ]
              })
      }
      createSubscription={
        isSubscription
          ? (_data, actions) =>
              actions.subscription.create({ plan_id: planId as string })
          : undefined
      }
      onApprove={async (data, actions) => {
        if (isSubscription) {
          onApprove(data as unknown as DonationApprovalData);
          return;
        }
        const details = await actions.order?.capture();
        // TODO: passing details looks wrong, but the api ignores it for now.
        onApprove(details as unknown as DonationApprovalData);
      }}
      onCancel={onCancel}
      onError={onError}
    />
  );
}

function PaypalButton({
  donationAmount,
  donationDuration,
  t,
  theme,
  isMinimalForm,
  handlePaymentButtonLoad,
  onDonationStateChange,
  postPayment
}: PaypalButtonProps): JSX.Element | null {
  const { amount, duration, planId } = paypalConfigurator(
    donationAmount,
    donationDuration,
    paypalConfigTypes[deploymentEnv || 'staging']
  );
  const isSubscription = duration !== 'one-time';

  if (!paypalClientId) {
    return null;
  }

  const scriptOptions = getScriptOptions({
    clientId: paypalClientId,
    isSubscription,
    isMinimalForm
  });

  return (
    <div className={'paypal-buttons-container'}>
      <PayPalScriptProvider options={scriptOptions}>
        <Buttons
          amount={amount}
          planId={planId}
          isSubscription={isSubscription}
          scriptOptions={scriptOptions}
          style={{
            tagline: false,
            height: 43,
            color: theme === LocalStorageThemes.Dark ? 'white' : 'gold'
          }}
          handlePaymentButtonLoad={handlePaymentButtonLoad}
          onApprove={data => {
            postPayment({ paymentProvider: PaymentProvider.Paypal, data });
          }}
          onCancel={() => {
            onDonationStateChange({
              redirecting: false,
              processing: false,
              success: false,
              error: t('donate.failed-pay')
            });
          }}
          onError={() => {
            handlePaymentButtonLoad('paypal');
            onDonationStateChange({
              redirecting: false,
              processing: false,
              success: false,
              error: t('donate.try-again')
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  (user: User | null, showLoading: boolean) => ({
    isDonating: !!user?.isDonating,
    showLoading
  })
);

PaypalButton.displayName = 'PaypalButton';

export default connect(mapStateToProps)(withTranslation()(PaypalButton));
