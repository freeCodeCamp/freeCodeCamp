import { render } from '@testing-library/react';
import React from 'react';

import { PaypalButton } from './PaypalButton';

const commonProps = {
  donationAmount: 500,
  donationDuration: 'month',
  handleProcessing: () => null,
  isDonating: false,
  onDonationStateChange: () => null,
  isPaypalLoading: true,
  t: jest.fn(),
  theme: 'night',
  handlePaymentButtonLoad: jest.fn()
};

const donationData = {
  redirecting: false,
  processing: false,
  success: false,
  error: null
};

jest.mock('../../analytics');

describe('<Paypal Button/>', () => {
  it('calls api on approval when user is signed and subscribes', () => {
    const ref = React.createRef<PaypalButton>();
    const isSubscription = false;
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
    expect(addDonation).toBeCalledTimes(0);
  });
  it('calls api on approval when user is signed and subscribes', () => {
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
