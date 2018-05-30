import Fetchr from 'fetchr';
import getUserServices from '../services/user';
import getMapUiServices from '../services/mapUi';
import getChallengesForBlockService from '../services/challenge';

export default function bootServices(app) {

  const challenge = getChallengesForBlockService(app);
  const mapUi = getMapUiServices(app);
  const user = getUserServices(app);

  Fetchr.registerFetcher(challenge);
  Fetchr.registerFetcher(mapUi);
  Fetchr.registerFetcher(user);

  const middleware = Fetchr.middleware();
  app.use('/services', middleware);
  app.use('/external/services', middleware);
}
