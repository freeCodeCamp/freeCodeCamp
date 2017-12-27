import { types as map } from '../../Map/redux';
import { onRouteCurrentChallenge } from '../Challenges/redux';

export const routes = {
  [map.onRouteMap]: {
    type: map.onRouteMap,
    path: '/map',
    redirect: onRouteCurrentChallenge
  }
};
