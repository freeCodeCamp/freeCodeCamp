/* eslint-disable @typescript-eslint/unbound-method */
import type { Token } from '@stripe/stripe-js';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { createSelector } from 'reselect';
import type { TFunction } from 'i18next';

import {
  defaultDonation,
  DonationAmount,
  type DonationConfig
} from '../../../../shared/config/donation-settings';
import { defaultDonationFormState } from '../../redux';
import { updateDonationFormState, postCharge } from '../../redux/actions';
import {
  isSignedInSelector,
  userSelector,
  isDonatingSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  completedChallengesSelector
} from '../../redux/selectors';
import Spacer from '../helpers/spacer';
import { Themes } from '../settings/theme';
import { DonateFormState } from '../../redux/types';
import type { CompletedChallenge } from '../../redux/prop-types';
import { CENTS_IN_DOLLAR, formattedAmountLabel } from './utils';
import DonateCompletion from './donate-completion';
import PatreonButton from './patreon-button';
import PaypalButton from './paypal-button';
import StripeCardForm from './stripe-card-form';
import WalletsWrapper from './wallets-button';
import SecurityLockIcon from './security-lock-icon';
import {
  PaymentProvider,
  PaymentContext,
  PostPayment,
  HandleAuthentication,
  DonationApprovalData
} from './types';

import './donation.css';

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
  subscriptionId?: string;
}) => void;

type DonateFormProps = {
  postCharge: PostCharge;
  defaultTheme?: Themes;
  email: string;
  handleProcessing?: () => void;
  editAmount?: () => void;
  selectedDonationAmount?: DonationAmount;
  donationFormState: DonateFormState;
  isMinimalForm?: boolean;
  isSignedIn: boolean;
  isDonating: boolean;
  showLoading: boolean;
  t: TFunction;
  theme: Themes;
  updateDonationFormState: (state: DonationApprovalData) => unknown;
  paymentContext: PaymentContext;
  completedChallenges: CompletedChallenge[];
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  isDonatingSelector,
  donationFormStateSelector,
  userSelector,
  completedChallengesSelector,
  (
    showLoading: DonateFormProps['showLoading'],
    isSignedIn: DonateFormProps['isSignedIn'],
    isDonating: DonateFormProps['isDonating'],
    donationFormState: DonateFormState,
    { email, theme }: { email: string; theme: Themes },
    completedChallenges: CompletedChallenge[]
  ) => ({
    isSignedIn,
    isDonating,
    showLoading,
    donationFormState,
    email,
    theme,
    completedChallenges
  })
);

const mapDispatchToProps = {
  postCharge,
  updateDonationFormState
};

const PaymentButtonsLoader = () => {
  return (
    <div className=' donation-completion donation-completion-loading'>
      <Spinner
        className='script-loading-spinner'
        fadeIn='none'
        name='line-scale'
      />
    </div>
  );
};

class DonateForm extends Component<DonateFormProps, DonateFormComponentState> {
  static displayName = 'DonateForm';
  constructor(props: DonateFormProps) {
    super(props);

    const initialAmountAndDuration: DonationConfig = defaultDonation;

    this.state = { ...initialAmountAndDuration };

    this.onDonationStateChange = this.onDonationStateChange.bind(this);
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

  postPayment = ({
    paymentProvider,
    data,
    payerEmail,
    payerName,
    paymentMethodId,
    handleAuthentication,
    subscriptionId
  }: PostPayment): void => {
    const { donationAmount, donationDuration: duration } = this.state;
    const { paymentContext, email, selectedDonationAmount } = this.props;
    const amount = selectedDonationAmount || donationAmount;

    this.props.postCharge({
      paymentProvider,
      paymentContext,
      amount,
      duration,
      data,
      email: email || payerEmail,
      name: payerName,
      paymentMethodId,
      handleAuthentication,
      subscriptionId
    });
    if (this.props.handleProcessing) this.props.handleProcessing();
  };

  resetDonation() {
    return this.props.updateDonationFormState({ ...defaultDonationFormState });
  }

  renderButtonGroup() {
    const { donationAmount: defaultAmount, donationDuration } = this.state;
    const {
      donationFormState: { loading, processing },
      defaultTheme,
      theme,
      t,
      isMinimalForm,
      isSignedIn,
      isDonating,
      editAmount,
      selectedDonationAmount,
      completedChallenges
    } = this.props;
    const donationAmount: DonationAmount =
      selectedDonationAmount || defaultAmount;
    const priorityTheme = defaultTheme ? defaultTheme : theme;
    const walletlabel = `${t('donate.wallet-label-1', {
      usd: donationAmount / CENTS_IN_DOLLAR
    })}:`;

    const threeChallengesCompleted = completedChallenges.length >= 3;

    const showMinimalPayments =
      isSignedIn && (isMinimalForm || !isDonating) && threeChallengesCompleted;

    const confirmationWithEditAmount = (
      <>
        <b>
          {t('donate.confirm-multitier', {
            usd: formattedAmountLabel(donationAmount)
          })}
        </b>

        <button
          type='button'
          className='edit-amount-button'
          onClick={editAmount}
        >
          {t('donate.edit-amount')}
        </button>
      </>
    );

    const confirmationClass = () => {
      if (editAmount) return 'edit-amount-confirmation';
      if (isMinimalForm) return 'donation-label-modal';
      return '';
    };
    return (
      <>
        <div className={confirmationClass()}>{confirmationWithEditAmount}</div>
        <Spacer size={editAmount ? 'small' : 'medium'} />
        <fieldset
          data-playwright-test-label='donation-form'
          className={'donate-btn-group security-legend'}
        >
          <legend>
            <SecurityLockIcon />
            {t('donate.secure-donation')}
          </legend>

          {loading.stripe && loading.paypal && <PaymentButtonsLoader />}
          <WalletsWrapper
            amount={donationAmount}
            duration={donationDuration}
            handlePaymentButtonLoad={this.handlePaymentButtonLoad}
            label={walletlabel}
            onDonationStateChange={this.onDonationStateChange}
            postPayment={this.postPayment}
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
            <PatreonButton
              postPayment={this.postPayment}
              donationAmount={donationAmount}
            />
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
      return (
        <DonateCompletion
          processing={processing}
          redirecting={redirecting}
          success={success}
          error={error}
          isSignedIn={isSignedIn}
          reset={this.resetDonation}
        />
      );
    }

    // keep payment provider elements on DOM during processing and redirect to avoid errors.
    return (
      <>
        {(processing || redirecting) && (
          <DonateCompletion
            processing={processing}
            redirecting={redirecting}
            success={success}
            error={error}
            isSignedIn={isSignedIn}
            reset={this.resetDonation}
          />
        )}
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
