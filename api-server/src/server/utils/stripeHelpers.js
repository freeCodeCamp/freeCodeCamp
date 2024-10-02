import { isEmail, isNumeric } from 'validator';
import { donationSubscriptionConfig } from '../../../../shared/config/donation-settings';

export function validStripeForm(amount, duration, email) {
  return (
    isEmail('' + email) &&
    isNumeric('' + amount) &&
    donationSubscriptionConfig.plans[duration].includes(amount)
  );
}
