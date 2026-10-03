import { randomUUID } from 'node:crypto';

import Stripe from 'stripe';

import { paypalConfigTypes } from '@freecodecamp/shared/config/donation-settings';
import {
  DEPLOYMENT_ENV,
  PAYPAL_API_URL,
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET
} from './env.js';
import { isWithinMinutes } from './validate-donation.js';
import { encodeCustomId } from './paypal-custom-id.js';

// Roomier than the public charge-stripe route, because this claim happens
// behind a session and has to survive a slow 3D Secure challenge.
const CLAIM_WINDOW_MINUTES = 10;

type VerificationSuccess = {
  amount: number;
  currency: string;
  // The provider's own customer id, so the donation record can be written
  // without asking the provider again.
  customerId?: string;
  email?: string;
  provider: 'paypal' | 'stripe';
  reference: string;
};

type VerificationFailure = {
  error:
    | 'api_failure'
    | 'incomplete_payment'
    | 'malformed_response'
    | 'refunded_payment'
    | 'stale_payment';
  provider: 'paypal' | 'stripe';
};

export type DonationVerificationResult =
  | ({ ok: true } & VerificationSuccess)
  | ({ ok: false } & VerificationFailure);

const donationPlans = () =>
  paypalConfigTypes[DEPLOYMENT_ENV === 'production' ? 'production' : 'staging']
    .month;

/**
 * Finds the PayPal plan for a monthly donation of the given amount in cents.
 *
 * Donation plans live on our own PayPal account and creating one requires the
 * client secret, so choosing the plan here is what fixes the amount. An amount
 * we have no plan for cannot be donated.
 */
export const paypalPlanIdForAmount = (amount: number) =>
  Object.entries(donationPlans()).find(
    ([planAmount]) => planAmount === `${amount}`
  )?.[1].planId;

const stripeFailure = (error: VerificationFailure['error']) =>
  ({
    ok: false,
    provider: 'stripe',
    error
  }) as const;

const getPayPalAccessToken = async (fetchImplementation = fetch) => {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    return null;
  }

  const credentials = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetchImplementation(
    `${PAYPAL_API_URL}/v1/oauth2/token`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    }
  );

  if (!response.ok) {
    throw new Error('PayPal access token request failed');
  }

  const body = (await response.json()) as { access_token?: unknown };
  return typeof body.access_token === 'string' ? body.access_token : null;
};

/**
 * Creates a PayPal subscription for one of our donation plans.
 *
 * The plan is chosen here rather than by the client, and `custom_id` records
 * which user the subscription belongs to so that the activation webhook can
 * attribute it. Donors who are not signed in get no `custom_id`, so their
 * subscriptions are never claimable.
 */
export const createPayPalSubscription = async (
  planId: string,
  userId: string | undefined,
  fetchImplementation = fetch
) => {
  const accessToken = await getPayPalAccessToken(fetchImplementation);

  if (!accessToken) return null;

  const response = await fetchImplementation(
    `${PAYPAL_API_URL}/v1/billing/subscriptions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        // Stops a retried request from creating a second subscription.
        'PayPal-Request-Id': randomUUID()
      },
      body: JSON.stringify({
        plan_id: planId,
        ...(userId && { custom_id: encodeCustomId(userId) })
      })
    }
  );

  if (!response.ok) return null;

  const subscription = (await response.json()) as { id?: unknown };

  return typeof subscription.id === 'string' ? subscription.id : null;
};

const isExpandedCharge = (
  charge: Stripe.PaymentIntent['latest_charge']
): charge is Stripe.Charge =>
  typeof charge === 'object' && charge !== null && 'refunded' in charge;

const isExpandedInvoice = (
  invoice: Stripe.PaymentIntent['invoice']
): invoice is Stripe.Invoice =>
  typeof invoice === 'object' && invoice !== null && 'subscription' in invoice;

/**
 * Verifies that a Stripe PaymentIntent succeeded and has not been refunded,
 * then reports the subscription it paid for.
 *
 * Every Stripe donation is a subscription, so the subscription is what gets
 * claimed. Reporting the payment intent instead would let the same donation be
 * claimed twice, once per identifier.
 */
export const verifyStripePaymentIntent = async (
  stripe: Stripe,
  paymentIntentId: string
): Promise<DonationVerificationResult> => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId,
      {
        expand: ['latest_charge', 'invoice']
      }
    );

    if (paymentIntent.status !== 'succeeded') {
      return stripeFailure('incomplete_payment');
    }

    // Only a payment the donor just made can be claimed, so an id from an
    // earlier donation is worthless to whoever holds it.
    if (!isWithinMinutes(paymentIntent.created, CLAIM_WINDOW_MINUTES)) {
      return stripeFailure('stale_payment');
    }

    if (
      !isExpandedCharge(paymentIntent.latest_charge) ||
      !isExpandedInvoice(paymentIntent.invoice)
    ) {
      return stripeFailure('malformed_response');
    }

    const { latest_charge: latestCharge, invoice } = paymentIntent;

    if (latestCharge.refunded || latestCharge.amount_refunded > 0) {
      return stripeFailure('refunded_payment');
    }

    // Stripe API 2024-06-20 keeps the subscription on `invoice.subscription`.
    // It moved to `invoice.parent.subscription_details.subscription` in 2025
    // versions, so this has to be revisited when the api version is bumped.
    const { subscription } = invoice;

    if (typeof subscription !== 'string') {
      return stripeFailure('malformed_response');
    }

    return {
      ok: true,
      provider: 'stripe',
      reference: subscription,
      amount: paymentIntent.amount_received,
      currency: paymentIntent.currency,
      ...(typeof paymentIntent.customer === 'string' && {
        customerId: paymentIntent.customer
      }),
      ...(typeof latestCharge.billing_details?.email === 'string' && {
        email: latestCharge.billing_details.email
      })
    };
  } catch {
    return stripeFailure('api_failure');
  }
};
