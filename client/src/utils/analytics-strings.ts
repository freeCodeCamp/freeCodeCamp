import { PaymentContext, PaymentProvider } from '../components/Donation/types';

export function stringifyDonationEvents(
  paymentContext: PaymentContext,
  paymentProvider: PaymentProvider
): string {
  const donationString = `${paymentContext} ${paymentProvider} payment ${
    paymentProvider === 'patreon' ? 'redirection' : 'submission'
  }`;

  // return title case
  return donationString.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()
  );
}
