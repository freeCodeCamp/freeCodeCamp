/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable camelcase */

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  paypalConfigurator,
  paypalConfigTypes,
  defaultDonation
} from '../../../../config/donation-settings';
import envData from '../../../../config/env.json';
import { signInLoadingSelector, userSelector } from '../../redux';
import PayPalButtonScriptLoader from './PayPalButtonScriptLoader';

type PaypalButtonProps = {
  addDonation: (data: AddDonationData) => void;
  donationAmount: number;
  donationDuration: string;
  handleProcessing: (
    duration: string,
    amount: number,
    action: string
  ) => unknown;
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
  isPaypalLoading: boolean;
  skipAddDonation?: boolean;
  t: (label: string) => string;
  theme: string;
  isSubscription?: boolean;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
};

type PaypalButtonState = {
  amount: number;
  duration: string;
  planId: string | null;
};

export interface AddDonationData {
  redirecting: boolean;
  processing: boolean;
  success: boolean;
  error: string | null;
  loading?: {
    stripe: boolean;
    paypal: boolean;
  };
}

const {
  paypalClientId,
  deploymentEnv
}: { paypalClientId: string | null; deploymentEnv: 'staging' | 'live' } =
  envData as {
    paypalClientId: string | null;
    deploymentEnv: 'staging' | 'live';
  };

export class PaypalButton extends Component<
  PaypalButtonProps,
  PaypalButtonState
> {
  static displayName = 'PaypalButton';
  state: PaypalButtonState = {
    amount: defaultDonation.donationAmount,
    duration: defaultDonation.donationDuration,
    planId: null
  };
  constructor(props: PaypalButtonProps) {
    super(props);
    this.handleApproval = this.handleApproval.bind(this);
  }

  static getDerivedStateFromProps(props: PaypalButtonProps): PaypalButtonState {
    const { donationAmount, donationDuration } = props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const configurationObj: {
      amount: number;
      duration: string;
      planId: string | null;
    } = paypalConfigurator(
      donationAmount,
      donationDuration,
      paypalConfigTypes[deploymentEnv || 'staging']
    );
    // re-implement it as a deep comparison.
    // if (state === configurationObj) {
    //   return null;
    // }
    return { ...configurationObj };
  }

  handleApproval = (data: AddDonationData, isSubscription: boolean): void => {
    const { amount, duration } = this.state;
    const { skipAddDonation = false } = this.props;

    // Skip the api if user is not signed in or if its a one-time donation
    if (!skipAddDonation || isSubscription) {
      this.props.addDonation(data);
    }

    this.props.handleProcessing(duration, amount, 'Paypal payment submission');

    // Show success anytime because the payment has gone through paypal
    this.props.onDonationStateChange({
      redirecting: false,
      processing: false,
      success: true,
      error: data.error ? data.error : null
    });
  };

  render(): JSX.Element | null {
    const { duration, planId, amount } = this.state;
    const { t, theme, isPaypalLoading } = this.props;
    const isSubscription = duration !== 'onetime';
    const buttonColor = theme === 'night' ? 'white' : 'gold';
    if (!paypalClientId) {
      return null;
    }

    return (
      <div className={'paypal-buttons-container'}>
        {/* help needed */}
        <PayPalButtonScriptLoader
          clientId={paypalClientId}
          createOrder={(
            data: unknown,
            actions: {
              order: {
                create: (arg0: {
                  purchase_units: {
                    amount: { currency_code: string; value: string };
                  }[];
                }) => unknown;
              };
            }
          ) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: (amount / 100).toString()
                  }
                }
              ]
            });
          }}
          createSubscription={(
            data: unknown,
            actions: {
              subscription: {
                create: (arg0: { plan_id: string | null }) => unknown;
              };
            }
          ) => {
            return actions.subscription.create({
              plan_id: planId
            });
          }}
          isPaypalLoading={isPaypalLoading}
          isSubscription={isSubscription}
          onApprove={(data: AddDonationData) => {
            this.handleApproval(data, isSubscription);
          }}
          onCancel={() => {
            this.props.onDonationStateChange({
              redirecting: false,
              processing: false,
              success: false,
              error: t('donate.failed-pay')
            });
          }}
          onError={() => {
            this.props.handlePaymentButtonLoad('paypal');
            this.props.onDonationStateChange({
              redirecting: false,
              processing: false,
              success: false,
              error: t('donate.try-again')
            });
          }}
          onLoad={() => this.props.handlePaymentButtonLoad('paypal')}
          planId={planId}
          style={{
            tagline: false,
            height: 43,
            color: buttonColor
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }: { isDonating: boolean }, showLoading: boolean) => ({
    isDonating,
    showLoading
  })
);

PaypalButton.displayName = 'PaypalButton';

export default connect(mapStateToProps)(withTranslation()(PaypalButton));
