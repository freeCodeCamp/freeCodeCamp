import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import Stripe from 'stripe';

import { STRIPE_SECRET_KEY, DEPLOYMENT_ENV } from '../../utils/env.js';
import { PAYPAL_BASE_URL, getPayPalAccessToken } from '../../utils/paypal.js';
import {
  donationSubscriptionConfig,
  allStripeProductIdsArray,
  paypalConfigTypes
} from '@freecodecamp/shared/config/donation-settings';
import type { DonationAmount } from '@freecodecamp/shared/config/donation-settings';
import * as schemas from '../../schemas.js';
import { inLastFiveMinutes } from '../../utils/validate-donation.js';
import { findOrCreateUser } from '../helpers/auth-helpers.js';

/**
 * Plugin for public donation endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const chargeStripeRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // Stripe plugin
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
    typescript: true
  });

  fastify.post(
    '/donate/create-stripe-payment-intent',
    {
      schema: schemas.createStripePaymentIntent
    },
    async (req, reply) => {
      const { email, name, amount, duration } = req.body;
      const log = fastify.log.child({ req, email, amount, duration });
      log.debug('Creating Stripe payment intent');

      if (!donationSubscriptionConfig.plans[duration].includes(amount)) {
        void reply.code(400);
        return {
          error: 'The donation form had invalid values for this submission.'
        } as const;
      }

      try {
        const stripeCustomer = await stripe.customers.create({
          email,
          name
        });

        const stripeSubscription = await stripe.subscriptions.create({
          customer: stripeCustomer.id,
          items: [
            {
              plan: `${donationSubscriptionConfig.duration[duration]}-donation-${amount}`
            }
          ],
          payment_behavior: 'default_incomplete',
          payment_settings: { save_default_payment_method: 'on_subscription' },
          expand: ['latest_invoice.payment_intent']
        });

        if (
          stripeSubscription.latest_invoice &&
          typeof stripeSubscription.latest_invoice !== 'string' &&
          stripeSubscription.latest_invoice.payment_intent &&
          typeof stripeSubscription.latest_invoice.payment_intent !==
            'string' &&
          stripeSubscription.latest_invoice.payment_intent.client_secret !==
            null
        ) {
          const clientSecret =
            stripeSubscription.latest_invoice.payment_intent.client_secret;
          log.info('Successfully created payment intent');
          return reply.send({
            subscriptionId: stripeSubscription.id,
            clientSecret
          });
        } else {
          throw new Error('Stripe payment intent client secret is missing');
        }
      } catch (error) {
        log.error(error, 'Failed to create payment intent');
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return reply.send({
          error: 'Donation failed due to a server error.'
        });
      }
    }
  );

  fastify.post(
    '/donate/charge-stripe',
    {
      schema: schemas.chargeStripe
    },
    async (req, reply) => {
      try {
        const { email, amount, duration, subscriptionId } = req.body;
        const log = fastify.log.child({
          req,
          email,
          amount,
          duration,
          subscriptionId
        });
        log.debug('Processing Stripe charge');

        const subscription =
          await stripe.subscriptions.retrieve(subscriptionId);
        const isSubscriptionActive = subscription.status === 'active';
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        const productId = subscription.items.data[0]?.plan.product?.toString();
        const isStartedRecently = inLastFiveMinutes(
          subscription.current_period_start
        );
        const isProductIdValid =
          productId && allStripeProductIdsArray.includes(productId);
        const isValidCustomer = typeof subscription.customer === 'string';

        if (!isSubscriptionActive) {
          log.warn(
            { status: subscription.status },
            'Invalid subscription status'
          );
          throw new Error(
            `Stripe subscription information is invalid: ${subscriptionId}`
          );
        }
        if (!isProductIdValid) {
          log.warn({ productId }, 'Invalid product ID');
          throw new Error(`Product ID is invalid: ${subscriptionId}`);
        }
        if (!isStartedRecently) {
          log.warn(
            { startTime: subscription.current_period_start },
            'Subscription not recent'
          );
          throw new Error(`Subscription is not recent: ${subscriptionId}`);
        }
        if (!isValidCustomer) {
          log.warn(
            { customerId: subscription.customer },
            'Invalid customer ID'
          );
          throw new Error(`Customer ID is invalid: ${subscriptionId}`);
        }

        const user = await findOrCreateUser(fastify, email);
        log.debug({ userId: user.id }, 'Found or created user');

        const donation = {
          userId: user.id,
          email,
          amount,
          duration,
          provider: 'stripe',
          subscriptionId,
          customerId: subscription.customer as string,
          // TODO(Post-MVP) migrate to startDate: new Date()
          startDate: {
            date: new Date().toISOString(),
            when: new Date().toISOString().replace(/.$/, '+00:00')
          }
        };

        await fastify.prisma.donation.create({
          data: donation
        });

        await fastify.prisma.user.update({
          where: { id: user.id },
          data: {
            isDonating: true
          }
        });
        log.info('Successfully processed donation');

        return reply.send({
          isDonating: true
        });
      } catch (error) {
        fastify.log.error(error, 'Failed to process Stripe charge');
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return {
          error: 'Donation failed due to a server error.'
        } as const;
      }
    }
  );

  fastify.post(
    '/donate/confirm-paypal-subscription',
    { schema: schemas.confirmPaypalSubscription },
    async (req, reply) => {
      const { subscriptionId, amount, duration } = req.body;
      const log = fastify.log.child({ req, subscriptionId, amount, duration });
      log.debug('Confirming PayPal subscription');

      if (!donationSubscriptionConfig.plans[duration].includes(amount)) {
        void reply.code(400);
        return {
          error: 'The donation form had invalid values for this submission.'
        };
      }

      try {
        const accessToken = await getPayPalAccessToken();

        const subRes = await fetch(
          `${PAYPAL_BASE_URL}/v1/billing/subscriptions/${subscriptionId}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        if (!subRes.ok) {
          throw new Error(
            `PayPal subscription retrieval failed with status ${subRes.status}`
          );
        }

        const subscription = (await subRes.json()) as {
          id: string;
          status: string;
          plan_id: string;
          create_time: string; // ISO 8601
          subscriber: { email_address: string; payer_id: string };
        };

        const validStatuses = ['APPROVED', 'ACTIVE'];
        if (!validStatuses.includes(subscription.status)) {
          log.warn(
            { status: subscription.status },
            'PayPal subscription has invalid status'
          );
          void reply.code(400);
          return {
            error: `PayPal subscription has unexpected status: ${subscription.status}`
          };
        }

        // create_time is ISO 8601; inLastFiveMinutes expects Unix seconds
        const createTimeUnix = Math.floor(
          new Date(subscription.create_time).getTime() / 1000
        );
        if (!inLastFiveMinutes(createTimeUnix)) {
          log.warn(
            { createTime: subscription.create_time },
            'PayPal subscription was not created recently'
          );
          void reply.code(400);
          return {
            error: `PayPal subscription is not recent: ${subscriptionId}`
          };
        }

        const env = DEPLOYMENT_ENV === 'production' ? 'production' : 'staging';
        const expectedPlanId =
          paypalConfigTypes[env].month[amount as DonationAmount]?.planId;

        if (!expectedPlanId || subscription.plan_id !== expectedPlanId) {
          log.warn(
            { planId: subscription.plan_id, expectedPlanId },
            'PayPal plan ID does not match expected value'
          );
          void reply.code(400);
          return { error: 'PayPal subscription plan does not match.' };
        }

        const status = subscription.status === 'ACTIVE' ? 'active' : 'pending';

        const { user } = await req.getAuthedUser();
        if (user && !user.isDonating) {
          await fastify.prisma.user.update({
            where: { id: user.id },
            data: { isDonating: true }
          });
        }

        log.info(
          { subscriptionId, userId: user?.id, status },
          'PayPal subscription confirmed'
        );

        return reply.send({ subscriptionId, status });
      } catch (error) {
        log.error(error, 'Failed to confirm PayPal subscription');
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return reply.send({
          error: 'Donation failed due to a server error.'
        });
      }
    }
  );

  done();
};
