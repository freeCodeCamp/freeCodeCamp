import reduce from 'lodash/reduce';
import { types } from './redux';
import routes from './routes';

export default {
  ...reduce(routes, (routes, route, type) => {
    let newRoute;
    if (typeof route === 'string') {
      newRoute = route;
    } else {
      newRoute = { ...route, path: route.path };
    }
    routes[type] = newRoute;
    return routes;
  }, {}),
  [types.routeOnHome]: '/'
};
