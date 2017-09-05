import { types } from './redux';
import routes from './routes';

export default {
  ...routes,
  [types.routeOnHome]: '/'
};
