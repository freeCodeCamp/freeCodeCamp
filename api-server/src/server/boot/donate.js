import debug from 'debug';
import Stripe from 'stripe';
import { donationSubscriptionConfig } from '../../../../config/donation-settings';
import keys from '../../../../config/secrets';
import {
  getAsyncPaypalToken,
  verifyWebHook,
  updateUser,
  verifyWebHookType
} from '../utils/donation';
import { validStripeForm } from '../utils/stripeHelpers';

const log = debug('fcc:boot:donate');

export default function donateBoot(app, done) {
  console.log('donationBoot');
  let stripe = false;
  const { User } = app.models;
  const api = app.loopback.Router();
  const hooks = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  function connectToStripe() {
    console.log('connectToStripe');
    return new Promise(function () {
      // connect to stripe API
      stripe = Stripe(keys.stripe.secret);
    });
  }

  function createStripeDonation(req, res) {
    console.log('createStripeDonation');
    console.log(req.body);
    const { user, body } = req;

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

    console.log('attemping to add user to fCC database');
    const fccUser = user
      ? Promise.resolve(user)
      : new Promise((resolve, reject) =>
          User.findOrCreate(
            { where: { email } },
            { email },
            (err, instance, isNew) => {
              log('creating a new donating user instance: ', isNew);
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
      console.log('createCustomer');
      let cust;
      donatingUser = user;
      try {
        cust = await stripe.customers.create({
          email,
          card: id
        });
      } catch (e) {
        console.log('error creating stripe customer');
        console.log(e);
      }
      return cust;
    };

    const createSubscription = customer => {
      console.log(customer);
      console.log('createSubscription');
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

    /* const createOneTimeCharge = customer => {
      console.log('createOneTimeCharge');
      console.log({ customer });

      donation.customerId = customer.id;
      return stripe.charges.create({
        amount: amount,
        currency: 'usd',
        customer: customer.id
      });
    };*/

    const createAsyncUserDonation = () => {
      console.log('createAsyncUserDonation');

      donatingUser
        .createDonation(donation)
        .toPromise()
        .catch(err => {
          throw new Error(err);
        });
    };

    return Promise.resolve(fccUser)
      .then(nonDonatingUser => {
        const { isDonating } = nonDonatingUser;
        if (isDonating && duration !== 'onetime') {
          throw {
            message: `User already has active recurring donation(s).`,
            type: 'AlreadyDonatingError'
          };
        }
        return nonDonatingUser;
      })
      .then(createCustomer)
      .then(customer => {
        return createSubscription(customer).then(subscription => {
          console.log('subscription');
          console.log(subscription);
          donation.subscriptionId = subscription.id;
          return res.send(subscription);
        });

        /* duration === 'onetime'
          ? createOneTimeCharge(customer).then(charge => {
              donation.subscriptionId = 'one-time-charge-prefix-' + charge.id;
              return res.send(charge);
            })
          : */
      })
      .then(createAsyncUserDonation)
      .catch(err => {
        console.log('err');
        console.log(err);
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
    console.log('addDonation');
    const { user, body } = req;
    console.log(user, body);
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
    console.log('updatePaypal');
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
  const paypalKey = keys.paypal.client;
  const paypalSec = keys.paypal.secret;

  const stripeSecretInvalid = !secKey || secKey === 'sk_from_stripe_dashboard';
  const stripPublicInvalid =
    !stripeKey || stripeKey === 'pk_from_stripe_dashboard';

  const paypalSecretInvalid =
    !paypalKey || paypalKey === 'id_from_paypal_dashboard';
  const paypalPublicInvalid =
    !paypalSec || paypalSec === 'secret_from_paypal_dashboard';

  const stripeInvalid = stripeSecretInvalid || stripPublicInvalid;
  const paypalInvalid = paypalPublicInvalid || paypalSecretInvalid;

  if (stripeInvalid || paypalInvalid) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Donation API keys are required to boot the server!');
    }
    log('Donation disabled in development unless ALL test keys are provided');
    done();
  } else {
    api.post('/charge-stripe', createStripeDonation);
    api.post('/add-donation', addDonation);
    hooks.post('/update-paypal', updatePaypal);
    donateRouter.use('/donate', api);
    donateRouter.use('/hooks', hooks);
    app.use(donateRouter);
    connectToStripe(stripe).then(done);
    done();
  }
}
