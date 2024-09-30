import debug from 'debug';
import Stripe from 'stripe';

import {
  donationSubscriptionConfig,
  allStripeProductIdsArray
} from '../../../../shared/config/donation-settings';
import keys from '../../../config/secrets';
import {
  createStripeCardDonation,
  handleStripeCardUpdateSession,
  inLastFiveMinutes
} from '../utils/donation';
import { validStripeForm } from '../utils/stripeHelpers';

const log = debug('fcc:boot:donate');

export default function donateBoot(app, done) {
  let stripe = false;
  const { User } = app.models;
  const api = app.loopback.Router();
  const hooks = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  function connectToStripe() {
    return new Promise(function () {
      // connect to stripe API
      stripe = Stripe(keys.stripe.secret);
    });
  }

  async function handleStripeCardDonation(req, res) {
    return createStripeCardDonation(req, res, stripe, app).catch(err => {
      if (
        err.type === 'AlreadyDonatingError' ||
        err.type === 'UserActionRequired' ||
        err.type === 'PaymentMethodRequired'
      ) {
        return res.status(402).send({ error: err });
      }
      if (err.type === 'InvalidRequest')
        return res.status(400).send({ error: err });
      return res.status(500).send({
        error: 'Donation failed due to a server error.'
      });
    });
  }

  async function createStripeDonation(req, res) {
    const { body } = req;
    const { amount, duration, email, subscriptionId } = body;
    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const isSubscriptionActive = subscription.status === 'active';
      const productId = subscription.items.data[0].plan.product;
      const isStartedRecently = inLastFiveMinutes(
        subscription.current_period_start
      );
      const isProductIdValid = allStripeProductIdsArray.includes(productId);

      if (isSubscriptionActive && isProductIdValid && isStartedRecently) {
        const [donatingUser] = await User.findOrCreate(
          { where: { email } },
          { email }
        );
        const donation = {
          email,
          amount,
          duration,
          provider: 'stripe',
          subscriptionId,
          customerId: subscription.customer,
          startDate: new Date().toISOString()
        };
        await donatingUser.createDonation(donation);
        return res.status(200).send({ isDonating: true });
      } else {
        throw new Error('Donation failed due to a server error.');
      }
    } catch (err) {
      return res
        .status(500)
        .send({ error: 'Donation failed due to a server error.' });
    }
  }

  async function createStripePaymentIntent(req, res) {
    const { body } = req;
    const { amount, duration, email, name } = body;

    if (!validStripeForm(amount, duration, email)) {
      return res.status(400).send({
        error: 'The donation form had invalid values for this submission.'
      });
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

      res.status(200).send({
        subscriptionId: stripeSubscription.id,
        clientSecret:
          stripeSubscription.latest_invoice.payment_intent.client_secret
      });
    } catch (err) {
      return res
        .status(500)
        .send({ error: 'Donation failed due to a server error.' });
    }
  }

  function addDonation(req, res) {
    const { user, body } = req;
    if (!user || !body) {
      return res
        .status(500)
        .json({ error: 'User must be signed in for this request.' });
    }
    return Promise.resolve(req)
      .then(
        user.updateAttributes({
          isDonating: true
        })
      )
      .then(() => res.status(200).json({ isDonating: true }))
      .catch(err => {
        log(err.message);
        return res.status(500).json({
          type: 'danger',
          message: 'Something went wrong.'
        });
      });
  }

  async function handleStripeCardUpdate(req, res, next) {
    try {
      const sessionIdObj = await handleStripeCardUpdateSession(
        req,
        app,
        stripe
      );
      return res.status(200).json(sessionIdObj);
    } catch (err) {
      return next(err);
    }
  }

  const stripeKey = keys.stripe.public;
  const secKey = keys.stripe.secret;
  const stripeSecretInvalid = !secKey || secKey === 'sk_from_stripe_dashboard';
  const stripPublicInvalid =
    !stripeKey || stripeKey === 'pk_from_stripe_dashboard';

  const stripeInvalid = stripeSecretInvalid || stripPublicInvalid;

  if (stripeInvalid) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Donation API keys are required to boot the server!');
    }
    log('Donation disabled in development unless ALL test keys are provided');
    done();
  } else {
    api.post('/charge-stripe', createStripeDonation);
    api.post('/charge-stripe-card', handleStripeCardDonation);
    api.post('/create-stripe-payment-intent', createStripePaymentIntent);
    api.put('/update-stripe-card', handleStripeCardUpdate);
    api.post('/add-donation', addDonation);
    donateRouter.use('/donate', api);
    donateRouter.use('/hooks', hooks);
    app.use(donateRouter);
    connectToStripe(stripe).then(done);
    done();
  }
}
