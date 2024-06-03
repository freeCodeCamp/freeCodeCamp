import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import Stripe from 'stripe';

import { donationSubscriptionConfig } from '../../../shared/config/donation-settings';
import * as schemas from '../schemas';
import { STRIPE_SECRET_KEY } from '../utils/env';

/**
 * Plugin for the donation endpoints.
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
    apiVersion: '2020-08-27',
    typescript: true
  });

  // The order matters here, since we want to reject invalid cross site requests
  // before checking if the user is authenticated.
  // @ts-expect-error - @fastify/csrf-protection needs to update their types
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authorize);
  fastify.post(
    '/donate/add-donation',
    {
      schema: {
        body: Type.Object({}),
        response: {
          200: Type.Object({
            isDonating: Type.Boolean()
          }),
          400: Type.Object({
            message: Type.Literal('User is already donating.'),
            type: Type.Literal('info')
          }),
          500: Type.Object({
            message: Type.Literal('Something went wrong.'),
            type: Type.Literal('danger')
          })
        }
      }
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
          customerId: id,
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
        void reply.code(500);
        return reply.send({
          error: 'Donation failed due to a server error.'
        });
      }
    }
  );

  done();
};
