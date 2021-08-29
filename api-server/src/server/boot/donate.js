import debug from 'debug';
import { Client, Environment } from 'square';
import Stripe from 'stripe';
import uuid from 'uuid/v4';

import {
  donationSubscriptionConfig,
  squarePlanConfig,
  squareLocationConfig
} from '../../../../config/donation-settings';
import keys from '../../../../config/secrets';
import {
  getAsyncPaypalToken,
  verifyWebHook,
  updateUser,
  verifyWebHookType,
  createAsyncUserDonation
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

  async function createSquareDonation(req, res) {
    const {
      body: { token, email, amount, duration },
      user: { name, id, completedChallenges },
      user
    } = req;

    try {
      if (
        !token ||
        !email ||
        !amount ||
        !duration ||
        !name ||
        !id ||
        !completedChallenges
      ) {
        return res.status(500).send({
          error: 'Request is not valid'
        });
      }
      // check if after signing the previous challenges are sent to api
      // check if completedChallenges are passed to api
      if (completedChallenges.length > 1000) throw Error('New user');

      // check if a user has already made multiple donations
      const { Donation } = app.models;
      await Donation.find({ where: { userId: id } }, (err, donations) => {
        if (err) throw Error(err);
        if (donations.length > 3000) throw Error('Too many Donations');
      });
      // connect to square
      const { customersApi, cardsApi, subscriptionsApi } = new Client({
        environment: Environment.Sandbox,
        accessToken: keys.square.secret
      });

      // create a customer
      const {
        result: {
          customer: { id: customerId }
        }
      } = await customersApi.createCustomer({
        idempotencyKey: uuid(),
        emailAddress: email,
        givenName: name === '' ? 'freeCodeCamp donor' : name
      });

      // create a card for the customer
      const {
        result: {
          card: { id: cardId }
        }
      } = await cardsApi.createCard({
        card: {
          customerId
        },
        sourceId: token,
        idempotencyKey: uuid()
      });

      // add user to a subscription
      const locationId = squareLocationConfig[process.env.DEPLOYMENT_ENV];
      const planId =
        squarePlanConfig[process.env.DEPLOYMENT_ENV][duration][amount];
      const {
        result: {
          subscription: { id: subscriptionId }
        }
      } = await subscriptionsApi.createSubscription({
        idempotencyKey: uuid(),
        locationId,
        planId,
        customerId,
        cardId
      });

      // save Donation
      let donation = {
        email,
        amount,
        duration,
        provider: 'square',
        subscriptionId,
        customerId,
        startDate: new Date().toISOString()
      };
      await createAsyncUserDonation(user, donation);

      console.log({ customerId, cardId, subscriptionId });
      return res.status(200);
    } catch (err) {
      // and send back an error accondingly
      console.log(err);
      res.status(500).send({ error: 'Donation failed due to a server error.' });
      throw new Error('Error creating square subscription');
    }
  }

  function createStripeDonation(req, res) {
    const { user, body } = req;

    const {
      amount,
      duration,
      token: { id },
      email,
      name
    } = body;

    if (!validStripeForm(amount, duration, email)) {
      return res.status(500).send({
        error: 'The donation form had invalid values for this submission.'
      });
    }

    const fccUser = user
      ? Promise.resolve(user)
      : new Promise((resolve, reject) =>
          User.findOrCreate(
            { where: { email } },
            { email },
            (err, instance) => {
              if (err) {
                return reject(err);
              }
              return resolve(instance);
            }
          )
        );

    let donatingUser = {};
    let donation = {
      email,
      amount,
      duration,
      provider: 'stripe',
      startDate: new Date(Date.now()).toISOString()
    };

    const createCustomer = async user => {
      let customer;
      donatingUser = user;
      try {
        customer = await stripe.customers.create({
          email,
          card: id,
          name
        });
      } catch (err) {
        throw new Error('Error creating stripe customer');
      }
      log(`Stripe customer with id ${customer.id} created`);
      return customer;
    };

    const createSubscription = async customer => {
      donation.customerId = customer.id;
      let sub;
      try {
        sub = await stripe.subscriptions.create({
          customer: customer.id,
          items: [
            {
              plan: `${donationSubscriptionConfig.duration[
                duration
              ].toLowerCase()}-donation-${amount}`
            }
          ]
        });
      } catch (err) {
        throw new Error('Error creating stripe subscription');
      }
      return sub;
    };

    const createAsyncUserDonation = () => {
      donatingUser
        .createDonation(donation)
        .toPromise()
        .catch(err => {
          throw new Error(err);
        });
    };

    return Promise.resolve(fccUser)
      .then(nonDonatingUser => {
        // the logic is removed since users can donate without an account
        return nonDonatingUser;
      })
      .then(createCustomer)
      .then(customer => {
        return createSubscription(customer).then(subscription => {
          log(`Stripe subscription with id ${subscription.id} created`);
          donation.subscriptionId = subscription.id;
          return res.send(subscription);
        });
      })
      .then(createAsyncUserDonation)
      .catch(err => {
        if (
          err.type === 'StripeCardError' ||
          err.type === 'AlreadyDonatingError'
        ) {
          return res.status(402).send({ error: err.message });
        }
        return res
          .status(500)
          .send({ error: 'Donation failed due to a server error.' });
      });
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

  function updatePaypal(req, res) {
    const { headers, body } = req;
    return Promise.resolve(req)
      .then(verifyWebHookType)
      .then(getAsyncPaypalToken)
      .then(token => verifyWebHook(headers, body, token, keys.paypal.webhookId))
      .then(hookBody => updateUser(hookBody, app))
      .catch(err => {
        // Todo: This probably need to be thrown and caught in error handler
        log(err.message);
      })
      .finally(() => res.status(200).json({ message: 'received paypal hook' }));
  }

  const stripeKey = keys.stripe.public;
  const secKey = keys.stripe.secret;
  const squareKey = keys.square.public;
  const squareSec = keys.square.secret;
  const paypalKey = keys.paypal.client;
  const paypalSec = keys.paypal.secret;

  const stripeSecretInvalid = !secKey || secKey === 'sk_from_stripe_dashboard';
  const stripPublicInvalid =
    !stripeKey || stripeKey === 'pk_from_stripe_dashboard';
  const paypalSecretInvalid =
    !paypalKey || paypalKey === 'id_from_paypal_dashboard';
  const paypalPublicInvalid =
    !paypalSec || paypalSec === 'secret_from_paypal_dashboard';
  const squareSecretInvalid =
    !squareSec || squareSec === 'token_from_square_dashboard';
  const squarePublicInvalid =
    !squareKey || squareKey === 'id_from_square_dashboard';

  const squareInvalid = squareSecretInvalid || squarePublicInvalid;
  const stripeInvalid = stripeSecretInvalid || stripPublicInvalid;
  const paypalInvalid = paypalPublicInvalid || paypalSecretInvalid;

  if (stripeInvalid || paypalInvalid || squareInvalid) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Donation API keys are required to boot the server!');
    }
    log('Donation disabled in development unless ALL test keys are provided');
    done();
  } else {
    api.post('/charge-stripe', createStripeDonation);
    api.post('/add-donation', addDonation);
    api.post('/charge-square', createSquareDonation);
    hooks.post('/update-paypal', updatePaypal);
    donateRouter.use('/donate', api);
    donateRouter.use('/hooks', hooks);
    app.use(donateRouter);
    connectToStripe(stripe).then(done);
    done();
  }
}
