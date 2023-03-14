import { stringifyDonationEvents } from './analytics-strings';

describe('Analytics donation strings', () => {
  it('Should return correct string for modal patreon payment', () => {
    expect(stringifyDonationEvents('modal', 'patreon')).toEqual(
      'Modal Patreon Payment Redirection'
    );
  });
  it('Should return correct string for modal donate page stripe card payment', () => {
    expect(stringifyDonationEvents('donate page', 'stripe card')).toEqual(
      'Donate Page Stripe Card Payment Submission'
    );
  });
});
