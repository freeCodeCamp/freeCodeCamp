import challenges from './challenges';
import map from './map';
import settings from './settings';

import NotFound from '../NotFound';
import { addLang } from '../utils/lang';

export { createPanesMap } from './challenges';

export default function createChildRoute(deps) {
  return {
    path: '/:lang',
    indexRoute: {
      onEnter(nextState, replace) {
        const { lang } = nextState.params;
        const { pathname } = nextState.location;
        replace(addLang(pathname, lang));
      }
    },
    childRoutes: [
      ...challenges(deps),
      ...map(deps),
      ...settings(deps),
      { path: '*', component: NotFound }
    ]
  };
}
