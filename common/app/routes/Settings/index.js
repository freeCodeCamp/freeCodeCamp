import { types } from './redux';

export { default } from './Show.jsx';

export const routes = {
  [types.onRouteSettings]: '/settings',
  [types.onRouteUpdateEmail]: '/settings/update-email'
};
