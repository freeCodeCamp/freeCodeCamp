/* eslint-disable camelcase */
import axios from 'axios';
import debug from 'debug';
import { donationSubscriptionConfig } from '../../../../config/donation-settings';
import keys from '../../../../config/secrets';

const log = debug('fcc:boot:donate');

const paypalVerifyWebhookURL =
  keys.paypal.verifyWebhookURL ||
  `https://api.sandbox.paypal.com/v1/notifications/verify-webhook-signature`;
const paypalTokenURL =
  keys.paypal.tokenUrl || `https://api.sandbox.paypal.com/v1/oauth2/token`;

export async function getAsyncPaypalToken() {
  const res = await axios.post(paypalTokenURL, null, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: keys.paypal.client,
      password: keys.paypal.secret
    },
    params: {
      grant_type: 'client_credentials'
    }
  });
  return res.data.access_token;
}

export function capitalizeKeys(object) {
  Object.keys(object).forEach(function (key) {
    object[key.toUpperCase()] = object[key];
  });
}

export async function verifyWebHook(headers, body, token, webhookId) {
  var webhookEventBody = typeof body === 'string' ? JSON.parse(body) : body;

  capitalizeKeys(headers);

  const payload = {
    auth_algo: headers['PAYPAL-AUTH-ALGO'],
    cert_url: headers['PAYPAL-CERT-URL'],
    transmission_id: headers['PAYPAL-TRANSMISSION-ID'],
    transmission_sig: headers['PAYPAL-TRANSMISSION-SIG'],
    transmission_time: headers['PAYPAL-TRANSMISSION-TIME'],
    webhook_id: webhookId,
    webhook_event: webhookEventBody
  };

  const response = await axios.post(paypalVerifyWebhookURL, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  if (response.data.verification_status === 'SUCCESS') {
    return body;
  } else {
    throw {
      // if verification fails, throw token verification error
      message: `Failed token verification.`,
      type: 'FailedPaypalTokenVerificationError'
    };
  }
}

export function verifyWebHookType(req) {
  // check if webhook type for creation
  const {
    body: { event_type }
  } = req;

  if (
    event_type === 'BILLING.SUBSCRIPTION.ACTIVATED' ||
    event_type === 'BILLING.SUBSCRIPTION.CANCELLED'
  )
    return req;
  else
    throw {
      message: 'Webhook type is not supported',
      type: 'UnsupportedWebhookType'
    };
}

export const createAsyncUserDonation = (user, donation) => {
  log(`Creating donation:${donation.subscriptionId}`);
  // log user donation
  user
    .createDonation(donation)
    .toPromise()
    .catch(err => {
      throw new Error(err);
    });
};

export function createDonationObj(body) {
  // creates donation object
  const {
    resource: {
      id,
      status_update_time,
      subscriber: { email_address } = {
        email_address: null
      }
    }
  } = body;

  let donation = {
    email: email_address,
    amount: 500,
    duration: 'month',
    provider: 'paypal',
    subscriptionId: id,
    customerId: email_address,
    startDate: new Date(status_update_time).toISOString()
  };
  return donation;
}

export function createDonation(body, app) {
  const { User } = app.models;
  const {
    resource: {
      subscriber: { email_address } = {
        email_address: null
      }
    }
  } = body;

  let donation = createDonationObj(body);

  let email = email_address;
  return User.findOne({ where: { email } }, (err, user) => {
    if (err) throw new Error(err);
    if (!user) {
      log(`Creating new user:${email}`);
      return User.create({ email })
        .then(user => {
          createAsyncUserDonation(user, donation);
        })
        .catch(err => {
          throw new Error(err);
        });
    }
    return createAsyncUserDonation(user, donation);
  });
}

export async function cancelDonation(body, app) {
  const {
    resource: { id, status_update_time = new Date(Date.now()).toISOString() }
  } = body;
  const { Donation } = app.models;
  Donation.findOne({ where: { subscriptionId: id } }, (err, donation) => {
    if (err || !donation) throw Error(err);
    log(`Updating donation record: ${donation.subscriptionId}`);
    donation.updateAttributes({
      endDate: new Date(status_update_time).toISOString()
    });
  });
}

export async function updateUser(body, app) {
  const { event_type } = body;
  if (event_type === 'BILLING.SUBSCRIPTION.ACTIVATED') {
    // update user status based on new billing subscription events
    createDonation(body, app);
  } else if (event_type === 'BILLING.SUBSCRIPTION.CANCELLED') {
    cancelDonation(body, app);
  } else
    throw {
      message: 'Webhook type is not supported',
      type: 'UnsupportedWebhookType'
    };
}

export async function createStripeCardDonation(req, res, stripe) {
  const {
    body: { paymentMethodId, amount, duration },
    user: { name, id: userId, email },
    user
  } = req;

  if (!paymentMethodId || !amount || !duration || !userId || !email) {
    throw {
      message: 'Request is not valid',
      type: 'InvalidRequest'
    };
  }

  /*
   * if user is already donating and the donation isn't one time only,
   * throw error
   */
  if (user.isDonating && duration !== 'onetime') {
    throw {
      message: `User already has active recurring donation(s).`,
      type: 'AlreadyDonatingError'
    };
  }

  let customerId;
  try {
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId },
      ...(name && { name })
    });
    customerId = customer?.id;
  } catch {
    throw {
      type: 'customerCreationFailed',
      message: 'Failed to create stripe customer'
    };
  }
  log(`Stripe customer with id ${customerId} created`);

  let subscriptionId;
  try {
    const {
      id: subscription_id,
      latest_invoice: {
        payment_intent: { client_secret, status: intent_status }
      }
    } = await stripe.subscriptions.create({
      // create Stripe subscription
      customer: customerId,
      payment_behavior: 'allow_incomplete',
      items: [
        {
          plan: `${donationSubscriptionConfig.duration[
            duration
          ].toLowerCase()}-donation-${amount}`
        }
      ],
      expand: ['latest_invoice.payment_intent']
    });

    if (intent_status === 'requires_source_action')
      throw {
        type: 'UserActionRequired',
        message: 'Payment requires user action',
        client_secret
      };
    else if (intent_status === 'requires_source')
      throw {
        type: 'PaymentMethodRequired',
        message: 'Card has been declined'
      };
    subscriptionId = subscription_id;
  } catch (err) {
    if (
      err.type === 'UserActionRequired' ||
      err.type === 'PaymentMethodRequired'
    )
      throw err;
    else
      throw {
        type: 'SubscriptionCreationFailed',
        message: 'Failed to create stripe subscription'
      };
  }
  log(`Stripe subscription with id ${subscriptionId} created`);

  // save Donation
  let donation = {
    email,
    amount,
    duration,
    provider: 'stripe',
    subscriptionId,
    customerId,
    startDate: new Date().toISOString()
  };
  await createAsyncUserDonation(user, donation);
  return res.status(200).json({ isDonating: true });
}
