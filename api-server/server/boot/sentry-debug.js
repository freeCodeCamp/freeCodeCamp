import { wrapHandledError } from '../utils/create-handled-error';

export default function bootStatus(app) {
  const api = app.loopback.Router();

  // DEBUG ROUTE
  api.get('/sentry/error', () => {
    throw Error('debugging sentry');
  });
  api.get('/sentry/wrapped', () => {
    throw wrapHandledError(Error('debugging sentry, wrapped'), {
      type: 'info',
      message: 'debugmessage',
      redirectTo: `a/page`
    });
  });
  app.use(api);
}
