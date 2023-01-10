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
  defaultDonation,
  modalDefaultDonation
} from '../../../../config/donation-settings';
import { defaultDonationFormState } from '../../redux';
import { updateDonationFormState, postCharge } from '../../redux/actions';
import {
  isSignedInSelector,
  userSelector,
  isDonatingSelector,
  signInLoadingSelector,
  donationFormStateSelector
} from '../../redux/selectors';
import Spacer from '../helpers/spacer';
import { Themes } from '../settings/theme';
import DonateCompletion from './donate-completion';
import PatreonButton from './patreon-button';
import PaypalButton from './paypal-button';
import StripeCardForm from './stripe-card-form';
import WalletsWrapper from './walletsButton';
import SecurityLockIcon from './security-lock-icon';
import {
  PaymentProvider,
  PaymentContext,
  PostPayment,
  HandleAuthentication,
  DonationApprovalData,
  DonationAmount,
  DonationConfig
} from './types';

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

type DonateFormComponentState = DonationConfig;

type PostCharge = (data: {
  paymentProvider: PaymentProvider;
  paymentContext: PaymentContext;
  amount: number;
  duration: string;
  data?: DonationApprovalData;
  token?: Token;
  email?: string;
  name?: string | undefined;
  paymentMethodId?: string;
  handleAuthentication?: HandleAuthentication;
}) => void;

type DonateFormProps = {
  postCharge: PostCharge;
  defaultTheme?: Themes;
  email: string;
  handleProcessing?: () => void;
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
  updateDonationFormState: (state: DonationApprovalData) => unknown;
  paymentContext: PaymentContext;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  isDonatingSelector,
  donationFormStateSelector,
  userSelector,
  (
    showLoading: DonateFormProps['showLoading'],
    isSignedIn: DonateFormProps['isSignedIn'],
    isDonating: DonateFormProps['isDonating'],
    donationFormState: DonateFormState,
    { email, theme }: { email: string; theme: Themes }
  ) => ({
    isSignedIn,
    isDonating,
    showLoading,
    donationFormState,
    email,
    theme
  })
);

const mapDispatchToProps = {
  postCharge,
  updateDonationFormState
};

class DonateForm extends Component<DonateFormProps, DonateFormComponentState> {
  static displayName = 'DonateForm';
  durations: { month: 'monthly'; onetime: 'one-time' };
  amounts: { month: number[]; onetime: number[] };
  constructor(props: DonateFormProps) {
    super(props);

    this.durations = durationsConfig;
    this.amounts = amountsConfig;

    const initialAmountAndDuration: DonationConfig = this.props.isMinimalForm
      ? modalDefaultDonation
      : defaultDonation;

    this.state = { ...initialAmountAndDuration };

    this.onDonationStateChange = this.onDonationStateChange.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
    this.postPayment = this.postPayment.bind(this);
    this.handlePaymentButtonLoad = this.handlePaymentButtonLoad.bind(this);
  }

  componentWillUnmount() {
    this.resetDonation();
  }

  onDonationStateChange(donationState: DonationApprovalData) {
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
    if (donationDuration === 'one-time') {
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

  postPayment = ({
    paymentProvider,
    data,
    payerEmail,
    payerName,
    token,
    paymentMethodId,
    handleAuthentication
  }: PostPayment): void => {
    const { donationAmount: amount, donationDuration: duration } = this.state;
    const { paymentContext, email } = this.props;

    this.props.postCharge({
      paymentProvider,
      paymentContext,
      amount,
      duration,
      data,
      token,
      email: email || payerEmail,
      name: payerName,
      paymentMethodId,
      handleAuthentication
    });
    if (this.props.handleProcessing) this.props.handleProcessing();
  };

  handleSelectAmount(donationAmount: DonationAmount) {
    this.setState({ donationAmount });
  }

  renderDonationDescription() {
    const { donationAmount, donationDuration } = this.state;
    const { t } = this.props;
    const usd = this.getFormattedAmountLabel(donationAmount);
    const hours = this.convertToTimeContributed(donationAmount);

    let donationDescription = t('donate.your-donation-3', { usd, hours });

    if (donationDuration === 'one-time') {
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
      defaultTheme,
      theme,
      t,
      isMinimalForm,
      isSignedIn,
      isDonating
    } = this.props;
    const priorityTheme = defaultTheme ? defaultTheme : theme;
    const isOneTime = donationDuration === 'one-time';
    const walletlabel = `${t(
      isOneTime ? 'donate.wallet-label' : 'donate.wallet-label-1',
      { usd: donationAmount / 100 }
    )}:`;
    const showMinimalPayments = isSignedIn && (isMinimalForm || !isDonating);

    return (
      <>
        <b className={isMinimalForm ? 'donation-label-modal' : ''}>
          {this.getDonationButtonLabel()}:
        </b>
        <Spacer />
        <fieldset className={'donate-btn-group security-legend'}>
          <legend>
            <SecurityLockIcon />
            {t('donate.secure-donation')}
          </legend>

          {loading.stripe && loading.paypal && this.paymentButtonsLoader()}
          <WalletsWrapper
            amount={donationAmount}
            handlePaymentButtonLoad={this.handlePaymentButtonLoad}
            label={walletlabel}
            onDonationStateChange={this.onDonationStateChange}
            postPayment={this.postPayment}
            refreshErrorMessage={t('donate.refresh-needed')}
            theme={priorityTheme}
          />
          <PaypalButton
            donationAmount={donationAmount}
            donationDuration={donationDuration}
            handlePaymentButtonLoad={this.handlePaymentButtonLoad}
            postPayment={this.postPayment}
            isMinimalForm={showMinimalPayments}
            isPaypalLoading={loading.paypal}
            onDonationStateChange={this.onDonationStateChange}
            theme={priorityTheme}
          />
          {(!loading.stripe || !loading.paypal) && (
            <PatreonButton postPayment={this.postPayment} />
          )}
          {showMinimalPayments && (
            <>
              <div className='separator'>{t('donate.or-card')}</div>
              <StripeCardForm
                onDonationStateChange={this.onDonationStateChange}
                postPayment={this.postPayment}
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
