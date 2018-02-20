import Fetchr from 'fetchr';
import getUserServices from '../services/user';
import getMapServices from '../services/map';
import getMapUiServices from '../services/mapUi';

export default function bootServices(app) {
  const userServices = getUserServices(app);
  const mapServices = getMapServices(app);
  const mapUiServices = getMapUiServices(app);

  Fetchr.registerFetcher(userServices);
  Fetchr.registerFetcher(mapServices);
  Fetchr.registerFetcher(mapUiServices);
  app.use('/services', Fetchr.middleware());
}
