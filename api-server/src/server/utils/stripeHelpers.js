import { isEmail, isNumeric } from 'validator';
import {
  durationKeysConfig,
  donationOneTimeConfig,
  donationSubscriptionConfig
} from '../../../../config/donation-settings';

export function validStripeForm(amount, duration, email) {
  return isEmail('' + email) &&
    isNumeric('' + amount) &&
    durationKeysConfig.includes(duration) &&
    duration === 'onetime'
    ? donationOneTimeConfig.includes(amount)
    : donationSubscriptionConfig.plans[duration];
}
