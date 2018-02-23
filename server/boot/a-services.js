import Fetchr from 'fetchr';
import getUserServices from '../services/user';
import getMapServices from '../services/map';
import getMapUiServices from '../services/mapUi';
import getChallengesForBlockService from '../services/challenge';

export default function bootServices(app) {

  const user = getUserServices(app);
  const map = getMapServices(app);
  const mapUi = getMapUiServices(app);
  const challenge = getChallengesForBlockService(app);

  Fetchr.registerFetcher(user);
  Fetchr.registerFetcher(map);
  Fetchr.registerFetcher(mapUi);
  Fetchr.registerFetcher(challenge);

  app.use('/services', Fetchr.middleware());
}
