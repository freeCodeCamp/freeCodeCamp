import invariant from 'invariant';
import { redirect as createRedirect } from 'redux-first-router';

import routesMap from '../routes-map.js';
import { langSelector } from '../Router/redux';

export function onBeforeChange(dispatch, getState, action) {
  const route = routesMap[action.type];
  const lang = langSelector(getState());
  if (route && route.redirect) {
    invariant(
      typeof route.redirect === 'function',
      `
        route redirect should be a function but got %s
        check the redirect method of route %s
      `,
      route.redirect,
      route
    );
    return dispatch(createRedirect(route.redirect({ lang })));
  }
  return action;
}

// prevent function from serializing during SSR
onBeforeChange.toString = () => 'onBeforeChange';
