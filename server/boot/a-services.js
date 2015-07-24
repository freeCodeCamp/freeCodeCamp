import Fetchr from 'fetchr';
import getHikesService from '../services/hikes';

export default function bootServices(app) {
  const hikesService = getHikesService(app);
  Fetchr.registerFetcher(hikesService);
  app.use('/services', Fetchr.middleware());
}
