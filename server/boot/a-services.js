import Fetchr from 'fetchr';
import getUserServices from '../services/user';
import getMapServices from '../services/map';

export default function bootServices(app) {
  const userServices = getUserServices(app);
  const mapServices = getMapServices(app);

  Fetchr.registerFetcher(userServices);
  Fetchr.registerFetcher(mapServices);
  app.use('/services', Fetchr.middleware());
}
