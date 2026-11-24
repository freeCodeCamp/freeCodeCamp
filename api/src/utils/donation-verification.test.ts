import { describe, expect, it, vi } from 'vitest';
import Stripe from 'stripe';

import { verifyStripePaymentIntent } from './donation-verification.js';

vi.mock('./env.js', () => ({
  DEPLOYMENT_ENV: 'staging',
  PAYPAL_API_URL: 'https://api-m.sandbox.paypal.com',
  PAYPAL_CLIENT_ID: 'paypal-client-id',
  PAYPAL_CLIENT_SECRET: 'paypal-client-secret'
}));

const minutesAgoInSeconds = (minutes: number) =>
  Math.floor(Date.now() / 1000) - minutes * 60;

const createStripe = (paymentIntent: unknown) =>
  ({
    paymentIntents: {
      retrieve: vi.fn().mockResolvedValue(paymentIntent)
    }
  }) as unknown as Stripe;

// Defaults describe a card payment the donor just completed, so each test only
// states the part it is about.
const stripePaymentIntent = (overrides: Record<string, unknown> = {}) => ({
  id: 'pi_test',
  status: 'succeeded',
  amount_received: 500,
  currency: 'usd',
  created: minutesAgoInSeconds(1),
  latest_charge: {
    refunded: false,
    amount_refunded: 0
  },
  invoice: { subscription: 'sub_test' },
  ...overrides
});

describe('donation verification', () => {
  describe('verifyStripePaymentIntent', () => {
    // The subscription is the claimed reference, not the payment intent, so
    // that a donation cannot be claimed once per identifier.
    it('reports the subscription a payment intent paid for', async () => {
      const stripe = createStripe(stripePaymentIntent());

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: true,
        provider: 'stripe',
        reference: 'sub_test',
        amount: 500,
        currency: 'usd'
      });
    });

    it('rejects payment intents created outside the claim window', async () => {
      const stripe = createStripe(
        stripePaymentIntent({ created: minutesAgoInSeconds(11) })
      );

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'stale_payment'
      });
    });

    it('rejects a payment intent with no subscription to claim', async () => {
      const stripe = createStripe(
        stripePaymentIntent({ invoice: { subscription: null } })
      );

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'malformed_response'
      });
    });

    it('rejects a payment intent whose invoice was not expanded', async () => {
      const stripe = createStripe(stripePaymentIntent({ invoice: 'in_test' }));

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'malformed_response'
      });
    });

    it('rejects incomplete Stripe payment intents', async () => {
      const stripe = createStripe(
        stripePaymentIntent({
          status: 'requires_action',
          amount_received: 0,
          latest_charge: null
        })
      );

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'incomplete_payment'
      });
    });

    it('rejects refunded Stripe payment intents', async () => {
      const stripe = createStripe(
        stripePaymentIntent({
          latest_charge: {
            refunded: true,
            amount_refunded: 500
          }
        })
      );

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'refunded_payment'
      });
    });

    it('rejects malformed Stripe payment intents', async () => {
      const stripe = createStripe(
        stripePaymentIntent({ latest_charge: 'ch_test' })
      );

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'malformed_response'
      });
    });

    it('normalizes Stripe API failures', async () => {
      const stripe = {
        paymentIntents: {
          retrieve: vi.fn().mockRejectedValue(new Error('Stripe unavailable'))
        }
      } as unknown as Stripe;

      await expect(
        verifyStripePaymentIntent(stripe, 'pi_test')
      ).resolves.toEqual({
        ok: false,
        provider: 'stripe',
        error: 'api_failure'
      });
    });
  });
});
