import { routes as settingsRoutes } from './Settings';
import { routes as profileRoutes } from './Profile';

export default {
  ...settingsRoutes,
  // ensure profile routes are last else they hijack other routes
  ...profileRoutes
};
