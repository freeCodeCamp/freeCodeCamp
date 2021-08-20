/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-nested-ternary */

import type { Token } from '@stripe/stripe-js';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { createSelector } from 'reselect';

import {
  amountsConfig,
  durationsConfig,
  defaultAmount,
  defaultDonation,
  modalDefaultDonation
} from '../../../../config/donation-settings';
import {
  isSignedInSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  addDonation,
  updateDonationFormState,
  defaultDonationFormState,
  userSelector,
  postChargeStripe
} from '../../redux';
import Spacer from '../helpers/spacer';

import DonateCompletion from './DonateCompletion';

import type { AddDonationData } from './PaypalButton';
import PaypalButton from './PaypalButton';
import WalletsWrapper from './walletsButton';

import './Donation.css';

const numToCommas = (num: number): string =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

type DonateFormState = {
  processing: boolean;
  redirecting: boolean;
  success: boolean;
  error: string;
  loading: {
    stripe: boolean;
    paypal: boolean;
  };
};

type DonateFromComponentState = {
  donationAmount: number;
  donationDuration: string;
};

type DonateFormProps = {
  addDonation: (data: unknown) => unknown;
  postChargeStripe: (data: unknown) => unknown;
  defaultTheme?: string;
  email: string;
  handleProcessing: (duration: string, amount: number, action: string) => void;
  donationFormState: DonateFormState;
  isMinimalForm?: boolean;
  isSignedIn: boolean;
  showLoading: boolean;
  t: (
    label: string,
    { usd, hours }?: { usd?: string | number; hours?: string }
  ) => string;
  theme: string;
  updateDonationFormState: (state: AddDonationData) => unknown;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  donationFormStateSelector,
  userSelector,
  (
    showLoading: DonateFormProps['showLoading'],
    isSignedIn: DonateFormProps['isSignedIn'],
    donationFormState: DonateFormState,
    { email, theme }: { email: string; theme: string }
  ) => ({
    isSignedIn,
    showLoading,
    donationFormState,
    email,
    theme
  })
);

const mapDispatchToProps = {
  addDonation,
  updateDonationFormState,
  postChargeStripe
};

class DonateForm extends Component<DonateFormProps, DonateFromComponentState> {
  static displayName = 'DonateForm';
  durations: { month: 'monthly'; onetime: 'one-time' };
  amounts: { month: number[]; onetime: number[] };
  constructor(props: DonateFormProps) {
    super(props);

    this.durations = durationsConfig as {
      month: 'monthly';
      onetime: 'one-time';
    };
    this.amounts = amountsConfig;

    const initialAmountAndDuration = this.props.isMinimalForm
      ? modalDefaultDonation
      : defaultDonation;

    this.state = { ...initialAmountAndDuration };

    this.onDonationStateChange = this.onDonationStateChange.bind(this);
    this.getActiveDonationAmount = this.getActiveDonationAmount.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.handleSelectDuration = this.handleSelectDuration.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
    this.postStripeDonation = this.postStripeDonation.bind(this);
    this.handlePaymentButtonLoad = this.handlePaymentButtonLoad.bind(this);
  }

  componentWillUnmount() {
    this.resetDonation();
  }

  onDonationStateChange(donationState: AddDonationData) {
    // scroll to top
    window.scrollTo(0, 0);
    this.props.updateDonationFormState({
      ...this.props.donationFormState,
      ...donationState
    });
  }

  handlePaymentButtonLoad(provider: 'stripe' | 'paypal') {
    this.props.updateDonationFormState({
      ...this.props.donationFormState,
      loading: {
        ...this.props.donationFormState.loading,
        [provider]: false
      }
    });
  }

  //  onload
  getActiveDonationAmount(
    durationSelected: 'month' | 'onetime',
    amountSelected: number
  ): number {
    return this.amounts[durationSelected].includes(amountSelected)
      ? amountSelected
      : defaultAmount[durationSelected] || this.amounts[durationSelected][0];
  }

  convertToTimeContributed(amount: number) {
    return numToCommas((amount / 100) * 50);
  }

  getFormattedAmountLabel(amount: number): string {
    return `${numToCommas(amount / 100)}`;
  }

  getDonationButtonLabel() {
    const { donationAmount, donationDuration } = this.state;
    const { t } = this.props;
    const usd = this.getFormattedAmountLabel(donationAmount);
    let donationBtnLabel = t('donate.confirm');
    if (donationDuration === 'onetime') {
      donationBtnLabel = t('donate.confirm-2', {
        usd: usd
      });
    } else {
      donationBtnLabel =
        donationDuration === 'month'
          ? t('donate.confirm-3', {
              usd: usd
            })
          : t('donate.confirm-4', { usd: usd });
    }
    return donationBtnLabel;
  }

  handleSelectDuration(donationDuration: 'month' | 'onetime') {
    const donationAmount = this.getActiveDonationAmount(donationDuration, 0);
    this.setState({ donationDuration, donationAmount });
  }

  postStripeDonation(
    token: Token,
    payerEmail: string | undefined,
    payerName: string | undefined
  ) {
    const { email } = this.props;
    const { donationAmount: amount, donationDuration: duration } = this.state;
    payerEmail = email ? email : payerEmail;
    window.scrollTo(0, 0);
    // change the donation modal button label to close
    // or display the close button for the cert donation section
    if (this.props.handleProcessing) {
      this.props.handleProcessing(duration, amount, 'Stripe payment submition');
    }
    this.props.postChargeStripe({
      token,
      amount,
      duration,
      email: payerEmail,
      name: payerName
    });
  }

  handleSelectAmount(donationAmount: number) {
    this.setState({ donationAmount });
  }

  renderDonationDescription() {
    const { donationAmount, donationDuration } = this.state;
    const { t } = this.props;
    const usd = this.getFormattedAmountLabel(donationAmount);
    const hours = this.convertToTimeContributed(donationAmount);

    return (
      <p className='donation-description'>
        {donationDuration === 'onetime'
          ? t('donate.your-donation', { usd: usd, hours: hours })
          : donationDuration === 'month'
          ? t('donate.your-donation-2', { usd: usd, hours: hours })
          : t('donate.your-donation-3', { usd: usd, hours: hours })}
      </p>
    );
  }

  resetDonation() {
    return this.props.updateDonationFormState({ ...defaultDonationFormState });
  }

  paymentButtonsLoader() {
    return (
      <div className=' donation-completion donation-completion-loading'>
        <Spinner
          className='script-loading-spinner'
          fadeIn='none'
          name='line-scale'
        />
      </div>
    );
  }

  renderCompletion(props: {
    processing: boolean;
    redirecting: boolean;
    success: boolean;
    error: string | null;
    reset: () => unknown;
  }) {
    return <DonateCompletion {...props} />;
  }

  renderButtonGroup() {
    const { donationAmount, donationDuration } = this.state;
    const {
      donationFormState: { loading },
      handleProcessing,
      addDonation,
      defaultTheme,
      theme,
      t,
      isMinimalForm
    } = this.props;
    const paymentButtonsLoading = loading.stripe && loading.paypal;
    const priorityTheme = defaultTheme ? defaultTheme : theme;
    const isOneTime = donationDuration === 'onetime';
    const walletlabel = `${t(
      isOneTime ? 'donate.wallet-label' : 'donate.wallet-label-1',
      { usd: donationAmount / 100 }
    )}:`;

    return (
      <>
        <b className={isMinimalForm ? 'donation-label-modal' : ''}>
          {this.getDonationButtonLabel()}:
        </b>
        <Spacer />
        {paymentButtonsLoading && this.paymentButtonsLoader()}
        <div className={'donate-btn-group'}>
          <WalletsWrapper
            amount={donationAmount}
            handlePaymentButtonLoad={this.handlePaymentButtonLoad}
            label={walletlabel}
            onDonationStateChange={this.onDonationStateChange}
            postStripeDonation={this.postStripeDonation}
            refreshErrorMessage={t('donate.refresh-needed')}
            theme={priorityTheme}
          />
          <PaypalButton
            addDonation={addDonation}
            donationAmount={donationAmount}
            donationDuration={donationDuration}
            handlePaymentButtonLoad={this.handlePaymentButtonLoad}
            handleProcessing={handleProcessing}
            isPaypalLoading={loading.paypal}
            onDonationStateChange={this.onDonationStateChange}
            theme={defaultTheme ? defaultTheme : theme}
          />
        </div>
      </>
    );
  }

  renderPageForm() {
    return (
      <>
        <div>{this.renderDonationDescription()}</div>
        <div>{this.renderButtonGroup()}</div>
      </>
    );
  }

  render() {
    const {
      donationFormState: { processing, success, error, redirecting },
      isMinimalForm
    } = this.props;

    if (success || error) {
      return this.renderCompletion({
        processing,
        redirecting,
        success,
        error,
        reset: this.resetDonation
      });
    }

    // keep payment provider elements on DOM during processing and redirect to avoid errors.
    return (
      <>
        {(processing || redirecting) &&
          this.renderCompletion({
            processing,
            redirecting,
            success,
            error,
            reset: this.resetDonation
          })}
        <div className={processing || redirecting ? 'hide' : ''}>
          {isMinimalForm ? this.renderButtonGroup() : this.renderPageForm()}
        </div>
      </>
    );
  }
}

DonateForm.displayName = 'DonateForm';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DonateForm));
