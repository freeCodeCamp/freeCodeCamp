import Stripe from 'stripe';
import debug from 'debug';

import keys from '../../../config/secrets';

const log = debug('fcc:boot:donate');

export default function donateBoot(app, done) {
  let stripe = false;
  const { User } = app.models;
  const api = app.loopback.Router();
  const donateRouter = app.loopback.Router();
  const subscriptionPlans = [500, 1000, 3500, 5000, 25000].reduce(
    (accu, current) => ({
      ...accu,
      [current]: {
        amount: current,
        interval: 'month',
        product: {
          name:
            'Monthly Donation to freeCodeCamp.org - ' +
            `Thank you ($${current / 100})`
        },
        currency: 'usd',
        id: `monthly-donation-${current}`
      }
    }),
    {}
  );

  function connectToStripe() {
    return new Promise(function(resolve) {
      // connect to stripe API
      stripe = Stripe(keys.stripe.secret);
      // parse stripe plans
      stripe.plans.list({}, function(err, plans) {
        if (err) {
          throw err;
        }
        const requiredPlans = Object.keys(subscriptionPlans).map(
          key => subscriptionPlans[key].id
        );
        const availablePlans = plans.data.map(plan => plan.id);
        requiredPlans.forEach(planId => {
          if (!availablePlans.includes(planId)) {
            const key = planId.split('-').slice(-1)[0];
            createStripePlan(subscriptionPlans[key]);
          }
        });
      });
      resolve();
    });
  }

  function createStripePlan(plan) {
    stripe.plans.create(plan, function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(`${plan.id} created`);
      return;
    });
  }

  function createStripeDonation(req, res) {
    const { user, body } = req;

    if (!body || !body.amount) {
      return res.status(400).send({ error: 'Amount Required' });
    }

    const {
      amount,
      token: { email, id }
    } = body;

    const fccUser = user
      ? Promise.resolve(user)
      : new Promise((resolve, reject) =>
          User.findOrCreate(
            { where: { email } },
            { email },
            (err, instance, isNew) => {
              log('is new user instance: ', isNew);
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
      provider: 'stripe',
      startDate: new Date(Date.now()).toISOString()
    };

    return fccUser
      .then(user => {
        donatingUser = user;
        return stripe.customers.create({
          email,
          card: id
        });
      })
      .then(customer => {
        donation.customerId = customer.id;
        return stripe.subscriptions.create({
          customer: customer.id,
          items: [
            {
              plan: `monthly-donation-${amount}`
            }
          ]
        });
      })
      .then(subscription => {
        donation.subscriptionId = subscription.id;
        return res.send(subscription);
      })
      .then(() => {
        donatingUser
          .createDonation(donation)
          .toPromise()
          .catch(err => {
            throw new Error(err);
          });
      })
      .catch(err => {
        if (err.type === 'StripeCardError') {
          return res.status(402).send({ error: err.message });
        }
        return res.status(500).send({ error: 'Donation Failed' });
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
    app.use('/unauthenticated', donateRouter);
    connectToStripe().then(done);
  }
}
