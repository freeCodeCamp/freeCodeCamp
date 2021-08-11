/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-nested-ternary */
import {
  Col,
  Row,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup
} from '@freecodecamp/react-bootstrap';

import type { Token } from '@stripe/stripe-js';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
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
  donationAmount: number;
  donationDuration: string;
  processing: boolean;
  redirecting: boolean;
  success: boolean;
  error: string;
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

class DonateForm extends Component<DonateFormProps, DonateFormState> {
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

    this.state = {
      ...initialAmountAndDuration,
      processing: false,
      redirecting: false,
      success: false,
      error: ''
    };

    this.onDonationStateChange = this.onDonationStateChange.bind(this);
    this.getActiveDonationAmount = this.getActiveDonationAmount.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.handleSelectDuration = this.handleSelectDuration.bind(this);
    this.hideAmountOptionsCB = this.hideAmountOptionsCB.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
    this.postStripeDonation = this.postStripeDonation.bind(this);
  }

  componentWillUnmount() {
    this.resetDonation();
  }

  onDonationStateChange(donationState: AddDonationData) {
    // scroll to top
    window.scrollTo(0, 0);
    this.props.updateDonationFormState(donationState);
  }

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

  renderAmountButtons(duration: 'month' | 'onetime') {
    return this.amounts[duration].map((amount: number) => (
      <ToggleButton
        className='amount-value'
        id={`${this.durations[duration]}-donation-${amount}`}
        key={`${this.durations[duration]}-donation-${amount}`}
        value={amount}
      >
        {this.getFormattedAmountLabel(amount)}
      </ToggleButton>
    ));
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

  renderDurationAmountOptions() {
    const { donationAmount, donationDuration, processing } = this.state;
    const { t } = this.props;

    return !processing ? (
      <div>
        <h3>{t('donate.gift-frequency')}</h3>
        <Tabs
          activeKey={donationDuration}
          animation={false}
          bsStyle='pills'
          className='donate-tabs'
          id='Duration'
          onSelect={this.handleSelectDuration}
        >
          {(Object.keys(this.durations) as ['month' | 'onetime']).map(
            duration => (
              <Tab
                eventKey={duration}
                key={duration}
                title={this.durations[duration]}
              >
                <Spacer />
                <h3>{t('donate.gift-amount')}</h3>
                <div>
                  <ToggleButtonGroup
                    animation={`false`}
                    className='amount-values'
                    name='amounts'
                    onChange={this.handleSelectAmount}
                    type='radio'
                    value={this.getActiveDonationAmount(
                      duration,
                      donationAmount
                    )}
                  >
                    {this.renderAmountButtons(duration)}
                  </ToggleButtonGroup>
                  <Spacer />
                  {this.renderDonationDescription()}
                </div>
              </Tab>
            )
          )}
        </Tabs>
      </div>
    ) : null;
  }

  hideAmountOptionsCB(hide: boolean) {
    this.setState({ processing: hide });
  }

  renderDonationOptions() {
    const {
      handleProcessing,
      isSignedIn,
      addDonation,
      t,
      defaultTheme,
      theme
    } = this.props;
    const { donationAmount, donationDuration } = this.state;
    const isOneTime = donationDuration === 'onetime';
    const formlabel = `${t(
      isOneTime ? 'donate.confirm-2' : 'donate.confirm-3',
      { usd: donationAmount / 100 }
    )}:`;

    const walletlabel = `${t(
      isOneTime ? 'donate.wallet-label' : 'donate.wallet-label-1',
      { usd: donationAmount / 100 }
    )}:`;
    const priorityTheme = defaultTheme ? defaultTheme : theme;

    return (
      <div>
        <b>{formlabel}</b>
        <Spacer />
        <div className='donate-btn-group'>
          <WalletsWrapper
            amount={donationAmount}
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
            handleProcessing={handleProcessing}
            isSubscription={isOneTime ? false : true}
            onDonationStateChange={this.onDonationStateChange}
            skipAddDonation={!isSignedIn}
            theme={priorityTheme}
          />
        </div>
      </div>
    );
  }

  resetDonation() {
    return this.props.updateDonationFormState({ ...defaultDonationFormState });
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

  renderModalForm() {
    const { donationAmount, donationDuration } = this.state;
    const { handleProcessing, addDonation, defaultTheme, theme, t } =
      this.props;
    const priorityTheme = defaultTheme ? defaultTheme : theme;
    const isOneTime = donationDuration === 'onetime';
    const walletlabel = `${t(
      isOneTime ? 'donate.wallet-label' : 'donate.wallet-label-1',
      { usd: donationAmount / 100 }
    )}:`;
    return (
      <Row>
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <b className='donation-label'>{this.getDonationButtonLabel()}:</b>
          <Spacer />
          <div className='donate-btn-group'>
            <WalletsWrapper
              amount={donationAmount}
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
              handleProcessing={handleProcessing}
              onDonationStateChange={this.onDonationStateChange}
              theme={defaultTheme ? defaultTheme : theme}
            />
          </div>
        </Col>
      </Row>
    );
  }

  renderPageForm() {
    return (
      <Row>
        <Col xs={12}>{this.renderDonationDescription()}</Col>
        <Col xs={12}>{this.renderDonationOptions()}</Col>
      </Row>
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
          {isMinimalForm ? this.renderModalForm() : this.renderPageForm()}
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
