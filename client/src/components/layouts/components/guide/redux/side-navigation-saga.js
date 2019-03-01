import { takeEvery, put, all } from 'redux-saga/effects';

import { toggleExpandedState } from './';
import { types as appTypes } from '../../../../../redux';

function* expandSideNavOnMountSaga() {
  let guideRegex = /^\/guide\//;
  let onGuide = guideRegex.test(window.location.pathname);
  if (onGuide && typeof window !== 'undefined') {
    const pathMap = window.location.pathname
      .slice(1)
      .split('/')
      .slice(0, -1)
      .reduce((map, current, i, pathArray) => {
        const path =
          i !== 0 ? map[pathArray[i - 1]] + `/${current}` : `/${current}`;
        return {
          ...map,
          [current]: path
        };
      }, {});

    let routes = Object.keys(pathMap).map(key => pathMap[key]);

    yield all(routes.map(route => put(toggleExpandedState(route))));
  }
}

export function createSideNavigationSaga() {
  return [takeEvery(appTypes.appMount, expandSideNavOnMountSaga)];
}
