import Settings from './components/Settings.jsx';
import updateEmailRoute from './routes/update-email';

export default function settingsRoute(deps) {
  const { getState } = deps;
  return {
    path: 'settings',
    component: Settings,
    onEnter(nextState, replace) {
      const { app: { user } } = getState();
      if (!user) {
        replace('/map');
      }
    },
    childRoutes: [
      updateEmailRoute(deps)
    ]
  };
}
