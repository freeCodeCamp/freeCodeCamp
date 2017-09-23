import reduce from 'lodash/reduce';
import { types } from './redux';
import routes from './routes';

const base = '/:lang';

export default {
  ...reduce(routes, (routes, route, type) => {
    let newRoute;
    if (typeof route === 'string') {
      newRoute = base + route;
    } else {
      newRoute = { ...route, path: base + route.path };
    }
    routes[type] = newRoute;
    return routes;
  }, {}),
  [types.routeOnHome]: base
};
