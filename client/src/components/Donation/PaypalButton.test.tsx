import { render } from '@testing-library/react';
import React from 'react';

import { PaypalButton } from './PaypalButton';

const commonProps = {
  donationAmount: 500,
  donationDuration: 'month',
  handleProcessing: () => null,
  isDonating: false,
  onDonationStateChange: () => null
};

const donationData = {
  redirecting: false,
  processing: false,
  success: false,
  error: null
};

interface Ref {
  current: null | {
    handleApproval: (donationData: unknown, isSubscription: boolean) => void;
  };
}

jest.mock('../../analytics');

describe('<Paypal Button/>', () => {
  it('calls api on approval when user is signed and subscribes', () => {
    const ref: Ref = React.createRef();
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
    const ref: Ref = React.createRef();
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
