import { render } from '@testing-library/react';
import React from 'react';
import { Themes } from '../settings/theme';

import { PaypalButton } from './paypal-button';

const commonProps = {
  donationAmount: 500,
  donationDuration: 'month',
  handleProcessing: () => null,
  isDonating: false,
  onDonationStateChange: () => null,
  isPaypalLoading: true,
  t: jest.fn(),
  theme: Themes.Night,
  handlePaymentButtonLoad: jest.fn(),
  isMinimalForm: true
};

const donationData = {
  redirecting: false,
  processing: false,
  success: false,
  error: null
};

jest.mock('../../analytics');

describe('<Paypal Button/>', () => {
  it('does not call addDonate api on payment approval when user is not signed ', () => {
    const ref = React.createRef<PaypalButton>();
    const isSubscription = true;
    const addDonation = jest.fn();
    render(
      <PaypalButton
        {...commonProps}
        addDonation={addDonation}
        isSignedIn={false}
        ref={ref}
      />
    );

    ref.current?.handleApproval(donationData, isSubscription);
    expect(addDonation).toBeCalledTimes(0);
  });
  it('calls addDonate api on payment approval when user is signed in', () => {
    const ref = React.createRef<PaypalButton>();
    const isSubscription = true;
    const addDonation = jest.fn();
    render(
      <PaypalButton
        {...commonProps}
        addDonation={addDonation}
        isSignedIn={true}
        ref={ref}
      />
    );

    ref.current?.handleApproval(donationData, isSubscription);
    expect(addDonation).toBeCalledTimes(1);
  });
});
