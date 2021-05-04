import debug from 'debug';
import {
  getAsyncPaypalToken,
  verifyWebHook,
  updateUser,
  verifyWebHookType
} from '../utils/donation';
import keys from '../../../../config/secrets';

const log = debug('fcc:boot:donate');

export default function donateBoot(app, done) {
  const api = app.loopback.Router();
  const hooks = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  function addDonation(req, res) {
    const { user, body } = req;

    if (!user || !body) {
      return res
        .status(500)
        .send({ error: 'User must be signed in for this request.' });
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
        return res.status(500).send({
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

  const paypalKey = keys.paypal.client;
  const paypalSec = keys.paypal.secret;

  const paypalSecretInvalid =
    !paypalKey || paypalKey === 'id_from_paypal_dashboard';
  const paypalPublicInvalid =
    !paypalSec || paypalSec === 'secret_from_paypal_dashboard';

  const paypalInvalid = paypalPublicInvalid || paypalSecretInvalid;

  if (paypalInvalid) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Donation API keys are required to boot the server!');
    }
    log('Donation disabled in development unless ALL test keys are provided');
    done();
  } else {
    api.post('/add-donation', addDonation);
    hooks.post('/update-paypal', updatePaypal);
    donateRouter.use('/donate', api);
    donateRouter.use('/hooks', hooks);
    app.use(donateRouter);
    done();
  }
}
