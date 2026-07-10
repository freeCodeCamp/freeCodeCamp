import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import Stripe from 'stripe';

import { STRIPE_SECRET_KEY } from '../../utils/env.js';
import {
  donationSubscriptionConfig,
  allStripeProductIdsArray
} from '@freecodecamp/shared/config/donation-settings';
import * as schemas from '../../schemas.js';
import { inLastFiveMinutes } from '../../utils/validate-donation.js';
import { findOrCreateUser } from '../helpers/auth-helpers.js';
import { clientNetInfo } from '../../utils/logger.js';

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
      fastify.Sentry?.setUser({ email });
      req.log.debug({ amount, duration }, 'Creating Stripe payment intent');

      if (!donationSubscriptionConfig.plans[duration].includes(amount)) {
        fastify.Sentry?.metrics?.count('donation.intent_rejected', 1, {
          attributes: { reason: 'invalid_amount' }
        });
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
          req.log.debug('Successfully created payment intent');
          return reply.send({
            subscriptionId: stripeSubscription.id,
            clientSecret
          });
        } else {
          throw new Error('Stripe payment intent client secret is missing');
        }
      } catch (err) {
        const ctx = {
          audit: true,
          err,
          email: req.body.email,
          amount,
          duration,
          ...clientNetInfo(req)
        };
        if (
          err instanceof Stripe.errors.StripeCardError ||
          err instanceof Stripe.errors.StripeInvalidRequestError
        ) {
          req.log.warn(ctx, 'Stripe upstream error creating payment intent');
        } else {
          fastify.Sentry?.captureException(err);
          req.log.error(ctx, 'Failed to create payment intent');
        }
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
        fastify.Sentry?.setUser({ email });
        req.log.debug(
          { amount, duration, subscriptionId },
          'Processing Stripe charge'
        );

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
          req.log.warn(
            { status: subscription.status },
            'Invalid subscription status'
          );
          fastify.Sentry?.captureException(
            new Error(
              `Stripe subscription information is invalid: ${subscriptionId}`
            )
          );
          void reply.code(500);
          return {
            error: 'Donation failed due to a server error.'
          } as const;
        }
        if (!isProductIdValid) {
          req.log.warn({ productId }, 'Invalid product ID');
          fastify.Sentry?.captureException(
            new Error(`Product ID is invalid: ${subscriptionId}`)
          );
          void reply.code(500);
          return {
            error: 'Donation failed due to a server error.'
          } as const;
        }
        if (!isStartedRecently) {
          req.log.warn(
            { startTime: subscription.current_period_start },
            'Subscription not recent'
          );
          fastify.Sentry?.captureException(
            new Error(`Subscription is not recent: ${subscriptionId}`)
          );
          void reply.code(500);
          return {
            error: 'Donation failed due to a server error.'
          } as const;
        }
        if (!isValidCustomer) {
          req.log.warn(
            { customerId: subscription.customer },
            'Invalid customer ID'
          );
          fastify.Sentry?.captureException(
            new Error(`Customer ID is invalid: ${subscriptionId}`)
          );
          void reply.code(500);
          return {
            error: 'Donation failed due to a server error.'
          } as const;
        }

        const user = await findOrCreateUser(fastify, email);
        req.log.debug({ userId: user.id }, 'Found or created user');

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
        req.log.info(
          {
            audit: true,
            userId: user.id,
            email,
            amount,
            duration,
            subscriptionId,
            ...clientNetInfo(req)
          },
          'Successfully processed donation'
        );
        fastify.Sentry?.metrics?.count('donation.created', 1, {
          attributes: { flow: 'charge-stripe' }
        });

        return reply.send({
          isDonating: true
        });
      } catch (err) {
        const ctx = {
          audit: true,
          err,
          email: req.body.email,
          subscriptionId: req.body.subscriptionId,
          ...clientNetInfo(req)
        };
        if (
          err instanceof Stripe.errors.StripeCardError ||
          err instanceof Stripe.errors.StripeInvalidRequestError
        ) {
          req.log.warn(ctx, 'Stripe upstream error processing charge');
        } else {
          fastify.Sentry?.captureException(err);
          req.log.error(ctx, 'Failed to process Stripe charge');
        }
        void reply.code(500);
        return {
          error: 'Donation failed due to a server error.'
        } as const;
      }
    }
  );

  done();
};
