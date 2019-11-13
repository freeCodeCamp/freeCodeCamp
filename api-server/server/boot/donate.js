import Stripe from 'stripe';
import debug from 'debug';
import { isEmail, isNumeric } from 'validator';

import keys from '../../../config/secrets';

const log = debug('fcc:boot:donate');

export default function donateBoot(app, done) {
  let stripe = false;
  const api = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  const durationKeys = ['year', 'month', 'onetime'];
  const donationOneTimeConfig = [100000, 25000, 3500];
  const donationSubscriptionConfig = {
    duration: {
      year: 'Yearly',
      month: 'Monthly'
    },
    plans: {
      year: [100000, 25000, 3500],
      month: [5000, 3500, 500]
    }
  };

  const subscriptionPlans = Object.keys(
    donationSubscriptionConfig.plans
  ).reduce(
    (prevDuration, duration) =>
      prevDuration.concat(
        donationSubscriptionConfig.plans[duration].reduce(
          (prevAmount, amount) =>
            prevAmount.concat({
              amount: amount,
              interval: duration,
              product: {
                name: `${
                  donationSubscriptionConfig.duration[duration]
                } Donation to freeCodeCamp.org - Thank you ($${amount / 100})`,
                metadata: {
                  /* eslint-disable camelcase */
                  sb_service: `freeCodeCamp.org`,
                  sb_tier: `${
                    donationSubscriptionConfig.duration[duration]
                  } $${amount / 100} Donation`
                  /* eslint-enable camelcase */
                }
              },
              currency: 'usd',
              id: `${donationSubscriptionConfig.duration[
                duration
              ].toLowerCase()}-donation-${amount}`
            }),
          []
        )
      ),
    []
  );

  function validStripeForm(amount, duration, email) {
    return isEmail('' + email) &&
      isNumeric('' + amount) &&
      durationKeys.includes(duration) &&
      duration === 'onetime'
      ? donationOneTimeConfig.includes(amount)
      : donationSubscriptionConfig.plans[duration];
  }

  function connectToStripe() {
    return new Promise(function(resolve) {
      // connect to stripe API
      stripe = Stripe(keys.stripe.secret);
      // parse stripe plans
      stripe.plans.list({}, function(err, stripePlans) {
        if (err) {
          throw err;
        }
        const requiredPlans = subscriptionPlans.map(plan => plan.id);
        const availablePlans = stripePlans.data.map(plan => plan.id);
        requiredPlans.forEach(requiredPlan => {
          if (!availablePlans.includes(requiredPlan)) {
            createStripePlan(
              subscriptionPlans.find(plan => plan.id === requiredPlan)
            );
          }
        });
      });
      resolve();
    });
  }

  function createStripePlan(plan) {
    log(`Creating subscription plan: ${plan.product.name}`);
    stripe.plans.create(plan, function(err) {
      if (err) {
        log(err);
      }
      log(`Created plan with plan id: ${plan.id}`);
      return;
    });
  }

  function createStripeDonation(req, res) {
    const { user, body } = req;

    if (!user) {
      return res
        .status(500)
        .send({ error: 'User must be signed in for this request.' });
    }

    if (!body || !body.amount || !body.duration) {
      return res.status(500).send({
        error: 'The donation form had invalid values for this submission.'
      });
    }

    const {
      amount,
      duration,
      token: { email, id }
    } = body;

    if (!validStripeForm(amount, duration, email)) {
      return res.status(500).send({
        error: 'The donation form had invalid values for this submission.'
      });
    }

    let donatingUser = {};
    let donation = {
      email,
      amount,
      duration,
      provider: 'stripe',
      startDate: new Date(Date.now()).toISOString()
    };

    const createCustomer = user => {
      donatingUser = user;
      return stripe.customers.create({
        email,
        card: id
      });
    };

    const createSubscription = customer => {
      donation.customerId = customer.id;
      return stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            plan: `${donationSubscriptionConfig.duration[
              duration
            ].toLowerCase()}-donation-${amount}`
          }
        ]
      });
    };

    const createOneTimeCharge = customer => {
      donation.customerId = customer.id;
      return stripe.charges.create({
        amount: amount,
        currency: 'usd',
        customer: customer.id
      });
    };

    const createAsyncUserDonation = () => {
      donatingUser
        .createDonation(donation)
        .toPromise()
        .catch(err => {
          throw new Error(err);
        });
    };

    return Promise.resolve(user)
      .then(nonDonatingUser => {
        const { isDonating } = nonDonatingUser;
        if (isDonating) {
          throw {
            message: `User already has active donation(s).`,
            type: 'AlreadyDonatingError'
          };
        }
        return nonDonatingUser;
      })
      .then(createCustomer)
      .then(customer => {
        return duration === 'onetime'
          ? createOneTimeCharge(customer).then(charge => {
              donation.subscriptionId = 'one-time-charge-prefix-' + charge.id;
              return res.send(charge);
            })
          : createSubscription(customer).then(subscription => {
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

  const pubKey = keys.stripe.public;
  const secKey = keys.stripe.secret;
  const secretInvalid = !secKey || secKey === 'sk_from_stipe_dashboard';
  const publicInvalid = !pubKey || pubKey === 'pk_from_stipe_dashboard';

  if (secretInvalid || publicInvalid) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Stripe API keys are required to boot the server!');
    }
    console.info('No Stripe API keys were found, moving on...');
    done();
  } else {
    api.post('/charge-stripe', createStripeDonation);
    donateRouter.use('/donate', api);
    app.use(donateRouter);
    app.use('/internal', donateRouter);
    connectToStripe().then(done);
  }
}
