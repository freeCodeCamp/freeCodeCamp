import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import Stripe from 'stripe';
import { Type } from '@sinclair/typebox';

import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '../../utils/env';

/**
 * Plugin for webhook endpoints to handle payment provider events.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const webhookRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
    typescript: true
  });

  // Stripe webhook handler for payment status updates
  fastify.post(
    '/webhooks/stripe',
    {
      schema: {
        body: Type.Object({}, { additionalProperties: true })
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      const signature = req.headers['stripe-signature'] as string;

      if (!signature) {
        logger.warn('Missing Stripe signature');
        void reply.code(400);
        return { error: 'Missing signature' };
      }

      let event: Stripe.Event;
      try {
        event = stripe.webhooks.constructEvent(
          JSON.stringify(req.body),
          signature,
          STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        logger.error(err, 'Webhook signature verification failed');
        void reply.code(400);
        return { error: 'Invalid signature' };
      }

      logger.info({ type: event.type }, 'Processing Stripe webhook');

      try {
        switch (event.type) {
          case 'customer.subscription.created':
          case 'customer.subscription.updated': {
            await handleSubscriptionChange(
              fastify,
              event.data.object as Stripe.Subscription,
              logger
            );
            break;
          }
          case 'customer.subscription.deleted': {
            await handleSubscriptionCancellation(
              fastify,
              event.data.object as Stripe.Subscription,
              logger
            );
            break;
          }
          case 'invoice.payment_succeeded': {
            await handlePaymentSuccess(
              fastify,
              event.data.object as Stripe.Invoice,
              logger
            );
            break;
          }
          case 'invoice.payment_failed': {
            await handlePaymentFailure(
              fastify,
              event.data.object as Stripe.Invoice,
              logger
            );
            break;
          }
          default:
            logger.info({ type: event.type }, 'Unhandled webhook event type');
        }

        // Broadcast payment status change via WebSocket
        await broadcastPaymentUpdate(fastify, event, logger);

        return { received: true };
      } catch (error) {
        logger.error(error, 'Error processing webhook');
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return { error: 'Internal server error' };
      }
    }
  );

  // PayPal webhook handler
  fastify.post(
    '/webhooks/paypal',
    {
      schema: {
        body: Type.Object({}, { additionalProperties: true })
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info('Processing PayPal webhook');

      try {
        const event = req.body as any;
        
        switch (event.event_type) {
          case 'BILLING.SUBSCRIPTION.ACTIVATED':
          case 'BILLING.SUBSCRIPTION.RENEWED': {
            await handlePaypalSubscriptionUpdate(fastify, event, logger);
            break;
          }
          case 'BILLING.SUBSCRIPTION.CANCELLED':
          case 'BILLING.SUBSCRIPTION.EXPIRED': {
            await handlePaypalSubscriptionCancellation(fastify, event, logger);
            break;
          }
          case 'PAYMENT.SALE.COMPLETED': {
            await handlePaypalPaymentSuccess(fastify, event, logger);
            break;
          }
          case 'PAYMENT.SALE.DENIED': {
            await handlePaypalPaymentFailure(fastify, event, logger);
            break;
          }
          default:
            logger.info({ type: event.event_type }, 'Unhandled PayPal webhook event');
        }

        // Broadcast payment status change via WebSocket
        await broadcastPaymentUpdate(fastify, event, logger);

        return { received: true };
      } catch (error) {
        logger.error(error, 'Error processing PayPal webhook');
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return { error: 'Internal server error' };
      }
    }
  );

  done();
};

async function handleSubscriptionChange(
  fastify: any,
  subscription: Stripe.Subscription,
  logger: any
) {
  const customerId = subscription.customer as string;
  
  try {
    // Find existing donation record
    const donation = await fastify.prisma.donation.findFirst({
      where: { customerId, provider: 'stripe' }
    });

    if (donation) {
      // Update existing donation status
      await fastify.prisma.donation.update({
        where: { id: donation.id },
        data: {
          subscriptionId: subscription.id,
          // Update end date if subscription period changed
          endDate: subscription.current_period_end ? {
            date: new Date(subscription.current_period_end * 1000),
            when: new Date(subscription.current_period_end * 1000).toISOString()
          } : null
        }
      });

      logger.info({ subscriptionId: subscription.id }, 'Updated Stripe subscription');
    }
  } catch (error) {
    logger.error(error, 'Failed to handle subscription change');
    throw error;
  }
}

async function handleSubscriptionCancellation(
  fastify: any,
  subscription: Stripe.Subscription,
  logger: any
) {
  const customerId = subscription.customer as string;
  
  try {
    // Find donation record and user
    const donation = await fastify.prisma.donation.findFirst({
      where: { customerId, provider: 'stripe' }
    });

    if (donation) {
      // Update donation record with end date
      await fastify.prisma.donation.update({
        where: { id: donation.id },
        data: {
          endDate: {
            date: new Date(),
            when: new Date().toISOString()
          }
        }
      });

      // Update user's donating status
      await fastify.prisma.user.update({
        where: { id: donation.userId },
        data: { isDonating: false }
      });

      logger.info({ subscriptionId: subscription.id }, 'Handled subscription cancellation');
    }
  } catch (error) {
    logger.error(error, 'Failed to handle subscription cancellation');
    throw error;
  }
}

async function handlePaymentSuccess(
  fastify: any,
  invoice: Stripe.Invoice,
  logger: any
) {
  const subscriptionId = invoice.subscription as string;
  
  try {
    if (subscriptionId) {
      const donation = await fastify.prisma.donation.findFirst({
        where: { subscriptionId, provider: 'stripe' }
      });

      if (donation) {
        // Ensure user is marked as donating
        await fastify.prisma.user.update({
          where: { id: donation.userId },
          data: { isDonating: true }
        });

        logger.info({ invoiceId: invoice.id }, 'Payment successful');
      }
    }
  } catch (error) {
    logger.error(error, 'Failed to handle payment success');
    throw error;
  }
}

async function handlePaymentFailure(
  fastify: any,
  invoice: Stripe.Invoice,
  logger: any
) {
  const subscriptionId = invoice.subscription as string;
  
  try {
    if (subscriptionId) {
      const donation = await fastify.prisma.donation.findFirst({
        where: { subscriptionId, provider: 'stripe' }
      });

      if (donation && invoice.attempt_count && invoice.attempt_count >= 3) {
        // After multiple failed attempts, mark subscription as ended
        await fastify.prisma.donation.update({
          where: { id: donation.id },
          data: {
            endDate: {
              date: new Date(),
              when: new Date().toISOString()
            }
          }
        });

        await fastify.prisma.user.update({
          where: { id: donation.userId },
          data: { isDonating: false }
        });

        logger.info({ invoiceId: invoice.id }, 'Payment failed after multiple attempts');
      }
    }
  } catch (error) {
    logger.error(error, 'Failed to handle payment failure');
    throw error;
  }
}

async function handlePaypalSubscriptionUpdate(
  fastify: any,
  event: any,
  logger: any
) {
  const subscriptionId = event.resource?.id;
  
  try {
    if (subscriptionId) {
      const donation = await fastify.prisma.donation.findFirst({
        where: { subscriptionId, provider: 'paypal' }
      });

      if (donation) {
        await fastify.prisma.user.update({
          where: { id: donation.userId },
          data: { isDonating: true }
        });

        logger.info({ subscriptionId }, 'PayPal subscription updated');
      }
    }
  } catch (error) {
    logger.error(error, 'Failed to handle PayPal subscription update');
    throw error;
  }
}

async function handlePaypalSubscriptionCancellation(
  fastify: any,
  event: any,
  logger: any
) {
  const subscriptionId = event.resource?.id;
  
  try {
    if (subscriptionId) {
      const donation = await fastify.prisma.donation.findFirst({
        where: { subscriptionId, provider: 'paypal' }
      });

      if (donation) {
        await fastify.prisma.donation.update({
          where: { id: donation.id },
          data: {
            endDate: {
              date: new Date(),
              when: new Date().toISOString()
            }
          }
        });

        await fastify.prisma.user.update({
          where: { id: donation.userId },
          data: { isDonating: false }
        });

        logger.info({ subscriptionId }, 'PayPal subscription cancelled');
      }
    }
  } catch (error) {
    logger.error(error, 'Failed to handle PayPal subscription cancellation');
    throw error;
  }
}

async function handlePaypalPaymentSuccess(
  fastify: any,
  event: any,
  logger: any
) {
  // Handle one-time PayPal payments
  const paymentId = event.resource?.id;
  logger.info({ paymentId }, 'PayPal payment completed');
}

async function handlePaypalPaymentFailure(
  fastify: any,
  event: any,
  logger: any
) {
  const paymentId = event.resource?.id;
  logger.info({ paymentId }, 'PayPal payment failed');
}

async function broadcastPaymentUpdate(
  fastify: any,
  event: any,
  logger: any
) {
  try {
    // Use WebSocket to broadcast payment status changes to connected clients
    if (fastify.websocketServer) {
      const message = {
        type: 'payment_status_update',
        event: event.type || event.event_type,
        timestamp: new Date().toISOString(),
        data: {
          provider: event.type ? 'stripe' : 'paypal',
          status: getPaymentStatus(event)
        }
      };

      fastify.websocketServer.clients.forEach((client: any) => {
        if (client.readyState === 1) { // WebSocket.OPEN
          client.send(JSON.stringify(message));
        }
      });

      logger.debug('Payment update broadcasted via WebSocket');
    }
  } catch (error) {
    logger.error(error, 'Failed to broadcast payment update');
  }
}

function getPaymentStatus(event: any): string {
  if (event.type) {
    // Stripe event
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        return 'active';
      case 'customer.subscription.deleted':
        return 'cancelled';
      case 'invoice.payment_succeeded':
        return 'paid';
      case 'invoice.payment_failed':
        return 'failed';
      default:
        return 'unknown';
    }
  } else {
    // PayPal event
    switch (event.event_type) {
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
      case 'BILLING.SUBSCRIPTION.RENEWED':
        return 'active';
      case 'BILLING.SUBSCRIPTION.CANCELLED':
      case 'BILLING.SUBSCRIPTION.EXPIRED':
        return 'cancelled';
      case 'PAYMENT.SALE.COMPLETED':
        return 'paid';
      case 'PAYMENT.SALE.DENIED':
        return 'failed';
      default:
        return 'unknown';
    }
  }
}