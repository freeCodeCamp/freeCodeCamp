import Fetchr from 'fetchr';
import getUserServices from '../services/user';

export default function bootServices(app) {

  const user = getUserServices(app);

  Fetchr.registerFetcher(user);

  const middleware = Fetchr.middleware();
  app.use('/external/services', middleware);
  app.use('/internal/services', middleware);
}
