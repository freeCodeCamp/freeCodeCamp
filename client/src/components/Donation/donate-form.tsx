/* eslint-disable @typescript-eslint/unbound-method */
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
  isDonatingSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  addDonation,
  updateDonationFormState,
  defaultDonationFormState,
  userSelector,
  postChargeStripe,
  postChargeStripeCard,
  isAVariantSelector
} from '../../redux';
import Spacer from '../helpers/spacer';
import { Themes } from '../settings/theme';
import DonateCompletion from './donate-completion';
import PatreonButton from './patreon-button';
import type { AddDonationData } from './paypal-button';
import PaypalButton from './paypal-button';
import StripeCardForm, { HandleAuthentication } from './stripe-card-form';
import WalletsWrapper from './walletsButton';
import SecurityLockIcon from './security-lock-icon';

import './donation.css';

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

type DonateFormComponentState = {
  donationAmount: number;
  donationDuration: string;
};

type DonateFormProps = {
  addDonation: (data: unknown) => unknown;
  postChargeStripe: (data: unknown) => unknown;
  postChargeStripeCard: (data: {
    paymentMethodId: string;
    amount: number;
    duration: string;
    handleAuthentication: HandleAuthentication;
  }) => void;
  defaultTheme?: Themes;
  email: string;
  handleProcessing: (duration: string, amount: number, action: string) => void;
  donationFormState: DonateFormState;
  isMinimalForm?: boolean;
  isSignedIn: boolean;
  isDonating: boolean;
  showLoading: boolean;
  t: (
    label: string,
    { usd, hours }?: { usd?: string | number; hours?: string }
  ) => string;
  theme: Themes;
  updateDonationFormState: (state: AddDonationData) => unknown;
  isAVariant: boolean;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  isDonatingSelector,
  donationFormStateSelector,
  userSelector,
  isAVariantSelector,
  (
    showLoading: DonateFormProps['showLoading'],
    isSignedIn: DonateFormProps['isSignedIn'],
    isDonating: DonateFormProps['isDonating'],
    donationFormState: DonateFormState,
    { email, theme }: { email: string; theme: Themes },
    isAVariant: boolean
  ) => ({
    isSignedIn,
    isDonating,
    showLoading,
    donationFormState,
    email,
    theme,
    isAVariant
  })
);

const mapDispatchToProps = {
  addDonation,
  updateDonationFormState,
  postChargeStripe,
  postChargeStripeCard
};

class DonateForm extends Component<DonateFormProps, DonateFormComponentState> {
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
    this.postStripeCardDonation = this.postStripeCardDonation.bind(this);
    this.postPatreonRedirect = this.postPatreonRedirect.bind(this);
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

  postStripeCardDonation(
    paymentMethodId: string,
    handleAuthentication: HandleAuthentication
  ) {
    const { donationAmount: amount, donationDuration: duration } = this.state;
    this.props.handleProcessing(
      duration,
      amount,
      'Stripe card payment submission'
    );
    this.props.postChargeStripeCard({
      paymentMethodId,
      amount,
      duration,
      handleAuthentication
    });
  }

  postPatreonRedirect() {
    const { donationAmount: amount, donationDuration: duration } = this.state;
    this.props.handleProcessing(
      duration,
      amount,
      'Patreon payment redirection'
    );
  }

  handleSelectAmount(donationAmount: number) {
    this.setState({ donationAmount });
  }

  renderDonationDescription() {
    const { donationAmount, donationDuration } = this.state;
    const { t } = this.props;
    const usd = this.getFormattedAmountLabel(donationAmount);
    const hours = this.convertToTimeContributed(donationAmount);

    let donationDescription = t('donate.your-donation-3', { usd, hours });

    if (donationDuration === 'onetime') {
      donationDescription = t('donate.your-donation', { usd, hours });
    } else if (donationDuration === 'month') {
      donationDescription = t('donate.your-donation-2', { usd, hours });
    }

    return <p className='donation-description'>{donationDescription}</p>;
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
    isSignedIn: boolean;
    reset: () => unknown;
  }) {
    return <DonateCompletion {...props} />;
  }

  renderButtonGroup() {
    const { donationAmount, donationDuration } = this.state;
    const {
      donationFormState: { loading, processing },
      handleProcessing,
      addDonation,
      defaultTheme,
      theme,
      t,
      isMinimalForm,
      isSignedIn,
      isDonating,
      isAVariant
    } = this.props;
    const priorityTheme = defaultTheme ? defaultTheme : theme;
    const isOneTime = donationDuration === 'onetime';
    const walletlabel = `${t(
      isOneTime ? 'donate.wallet-label' : 'donate.wallet-label-1',
      { usd: donationAmount / 100 }
    )}:`;
    const showMinimalPayments = isSignedIn && (isMinimalForm || !isDonating);

    const isAsVariant = !isAVariant;

    return (
      <>
        <b className={isMinimalForm ? 'donation-label-modal' : ''}>
          {this.getDonationButtonLabel()}:
        </b>
        <Spacer />
        <fieldset
          className={`donate-btn-group ${
            isAsVariant === false ? 'test-btn-group' : ''
          }`}
        >
          {isAsVariant === false && (
            <legend>
              <SecurityLockIcon />
              {t('donate.secure-donation')}
            </legend>
          )}
          {loading.stripe && loading.paypal && this.paymentButtonsLoader()}
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
            isMinimalForm={showMinimalPayments}
            isPaypalLoading={loading.paypal}
            isSignedIn={isSignedIn}
            onDonationStateChange={this.onDonationStateChange}
            theme={priorityTheme}
          />
          {(!loading.stripe || !loading.paypal) && (
            <PatreonButton postPatreonRedirect={this.postPatreonRedirect} />
          )}
          {showMinimalPayments && (
            <>
              <div className='separator'>{t('donate.or-card')}</div>
              <StripeCardForm
                onDonationStateChange={this.onDonationStateChange}
                postStripeCardDonation={this.postStripeCardDonation}
                processing={processing}
                t={t}
                theme={priorityTheme}
              />
            </>
          )}
        </fieldset>
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
      isMinimalForm,
      isSignedIn
    } = this.props;

    if (success || error) {
      return this.renderCompletion({
        processing,
        redirecting,
        success,
        error,
        isSignedIn,
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
            isSignedIn,
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
