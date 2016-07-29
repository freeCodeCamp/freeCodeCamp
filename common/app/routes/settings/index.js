import Settings from './components/Settings.jsx';
import updateEmail from './routes/update-email';

export default {
  path: 'settings',
  component: Settings,
  childRoutes: [
    updateEmail
  ]
};
