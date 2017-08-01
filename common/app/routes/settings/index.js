import Settings from './Settings.jsx';
import updateEmailRoute from './routes/update-email';

export default function settingsRoute(deps) {
  return [{
    path: 'settings',
    component: Settings,
    childRoutes: updateEmailRoute(deps)
  }];
}
