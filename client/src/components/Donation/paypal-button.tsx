import React, { Component, Ref } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  paypalConfigurator,
  paypalConfigTypes,
  defaultDonation
} from '../../../../config/donation-settings';
import envData from '../../../../config/env.json';
import { userSelector, signInLoadingSelector } from '../../redux/selectors';
import { Themes } from '../settings/theme';
import { PayPalButtonScriptLoader } from './paypal-button-script-loader';

type PaypalButtonProps = {
  addDonation: (data: AddDonationData) => void;
  isSignedIn: boolean;
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
  ref?: Ref<PaypalButton>;
  theme: Themes;
  isSubscription?: boolean;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
  isMinimalForm: boolean | undefined;
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

  static getDerivedStateFromProps(
    props: Readonly<PaypalButtonProps>
  ): PaypalButtonState {
    const { donationAmount, donationDuration } = props;
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
    const { isSignedIn = false } = this.props;

    // If the user is signed in and the payment is subscritipn call the api
    if (isSignedIn && isSubscription) {
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
    const { t, theme, isPaypalLoading, isMinimalForm } = this.props;
    const isSubscription = duration !== 'onetime';
    const buttonColor = theme === Themes.Night ? 'white' : 'gold';
    if (!paypalClientId) {
      return null;
    }

    return (
      <div className={'paypal-buttons-container'}>
        {/* eslint-disable @typescript-eslint/naming-convention */}
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
          isMinimalForm={isMinimalForm}
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
        {/* eslint-enable @typescript-eslint/naming-convention */}
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
