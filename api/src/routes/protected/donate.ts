import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import Stripe from 'stripe';

import * as schemas from '../../schemas';
import { donationSubscriptionConfig } from '../../../../shared/config/donation-settings';
import { STRIPE_SECRET_KEY, HOME_LOCATION } from '../../utils/env';

/**
 * Plugin for the donation endpoints requiring auth.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const donateRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // Stripe plugin
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
    typescript: true
  });

  fastify.put(
    '/donate/update-stripe-card',
    {
      schema: schemas.updateStripeCard
    },
    async req => {
      const donation = await fastify.prisma.donation.findFirst({
        where: { userId: req.user?.id, provider: 'stripe' }
      });
      if (!donation)
        throw Error(`Stripe donation record not found: ${req.user?.id}`);
      const { customerId, subscriptionId } = donation;
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'setup',
        customer: customerId,
        setup_intent_data: {
          metadata: {
            customer_id: customerId,
            subscription_id: subscriptionId
          }
        },
        success_url: `${HOME_LOCATION}/update-stripe-card?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${HOME_LOCATION}/update-stripe-card`
      });
      return { sessionId: session.id } as const;
    }
  );

  fastify.post(
    '/donate/add-donation',
    {
      schema: schemas.addDonation
    },
    async (req, reply) => {
      try {
        const user = await fastify.prisma.user.findUnique({
          where: { id: req.user?.id }
        });

        if (user?.isDonating) {
          void reply.code(400);
          return {
            type: 'info',
            message: 'User is already donating.'
          } as const;
        }

        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            isDonating: true
          }
        });

        return {
          isDonating: true
        } as const;
      } catch (error) {
        fastify.log.error(error);
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return {
          type: 'danger',
          message: 'Something went wrong.'
        } as const;
      }
    }
  );

  fastify.post(
    '/donate/charge-stripe-card',
    {
      schema: schemas.chargeStripeCard
    },
    async (req, reply) => {
      try {
        const { paymentMethodId, amount, duration } = req.body;
        const id = req.user!.id;

        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id }
        });

        const { email, name } = user;
        const threeChallengesCompleted = user.completedChallenges.length >= 3;

        if (!threeChallengesCompleted) {
          void reply.code(400);
          return {
            error: {
              type: 'MethodRestrictionError',
              message: `Donate using another method`
            }
          } as const;
        }

        if (user.isDonating) {
          void reply.code(400);
          return reply.send({
            error: {
              type: 'AlreadyDonatingError',
              message: 'User is already donating.'
            }
          });
        }

        // Create Stripe Customer
        const { id: customerId } = await stripe.customers.create({
          email,
          payment_method: paymentMethodId,
          invoice_settings: { default_payment_method: paymentMethodId },
          ...(name && { name })
        });

        // //Create Stripe Subscription
        const plan = `${donationSubscriptionConfig.duration[
          duration
        ].toLowerCase()}-donation-${amount}`;

        const {
          id: subscriptionId,
          latest_invoice: {
            // For older api versions, @ts-ignore is recommended by Stripe. More info: https://github.com/stripe/stripe-node/blob/fe81d1f28064c9b468c7b380ab09f7a93054ba63/README.md?plain=1#L91
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore stripe-version-2019-10-17
            payment_intent: { client_secret, status }
          }
        } = await stripe.subscriptions.create({
          customer: customerId,
          payment_behavior: 'allow_incomplete',
          items: [{ plan }],
          expand: ['latest_invoice.payment_intent']
        });
        if (status === 'requires_source_action') {
          void reply.code(402);
          return reply.send({
            error: {
              type: 'UserActionRequired',
              message: 'Payment requires user action',
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              client_secret
            }
          });
        } else if (status === 'requires_source') {
          void reply.code(402);
          return reply.send({
            error: {
              type: 'PaymentMethodRequired',
              message: 'Card has been declined'
            }
          });
        }

        // update record in database
        const donation = {
          userId: id,
          email,
          amount,
          duration,
          provider: 'stripe',
          subscriptionId,
          customerId: customerId,
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
          where: { id },
          data: {
            isDonating: true
          }
        });

        return reply.send({
          type: 'success',
          isDonating: true
        });
      } catch (error) {
        fastify.log.error(error);
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
