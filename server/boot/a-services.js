import Fetchr from 'fetchr';
import getHikesService from '../services/hikes';
import getUserServices from '../services/user';

export default function bootServices(app) {
  const hikesService = getHikesService(app);
  const userServices = getUserServices(app);
  Fetchr.registerFetcher(hikesService);
  Fetchr.registerFetcher(userServices);
  app.use('/services', Fetchr.middleware());
}
