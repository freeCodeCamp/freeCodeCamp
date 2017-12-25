import { routes as challengesRoutes } from './Challenges';
import { routes as mapRoutes } from './Map';
import { routes as settingsRoutes } from './Settings';

// import { addLang } from '../utils/lang';

export { createPanesMap } from './Challenges';

export default {
  ...challengesRoutes,
  ...mapRoutes,
  ...settingsRoutes
};

// export default function createChildRoute(deps) {
//   return {
//     path: '/:lang',
//     indexRoute: {
//       onEnter(nextState, replace) {
//         const { lang } = nextState.params;
//         const { pathname } = nextState.location;
//         replace(addLang(pathname, lang));
//       }
//     },
//     childRoutes: [
//       ...challenges(deps),
//       ...map(deps),
//       ...settings(deps),
//       { path: '*', component: NotFound }
//     ]
//   };
// }
