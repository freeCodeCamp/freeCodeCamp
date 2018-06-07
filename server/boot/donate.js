import Stripe from 'stripe';

import keys from '../../config/secrets';

const stripe = Stripe(keys.stripe.secret);

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

export default function donateBoot(app) {
  const { User } = app.models;
  const api = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  function createStripeDonation(req, res) {
    const { user, body } = req;

    if (!body || !body.amount) {
      return res.status(400).send({ error: 'Amount Required' });
    }

    const { amount, token: {email, id} } = body;

    const fccUser = user ?
      Promise.resolve(user) :
      User.create$({ email }).toPromise();

    let donatingUser = {};
    let donation = {
      email,
      amount,
      provider: 'stripe',
      startDate: new Date(Date.now()).toISOString()
    };

    return fccUser.then(
      user => {
        donatingUser = user;
        return stripe.customers
        .create({
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
        donatingUser.createDonation(donation).toPromise()
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

  api.post('/charge-stripe', createStripeDonation);

  donateRouter.use('/donate', api);
  app.use(donateRouter);
  app.use('/external', donateRouter);
}
