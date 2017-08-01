import App from './App.jsx';
import createChildRoute from './routes';

export default function createRoutes(store) {
  return {
    components: App,
    ...createChildRoute(store)
  };
}
