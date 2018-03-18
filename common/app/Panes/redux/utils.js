import _ from 'lodash';
import invariant from 'invariant';

export function isPanesAction({ type } = {}, panesMap) {
  return !!panesMap[type];
}

export function getDividerLeft(numOfPanes, index) {
  let dividerLeft = null;
  if (numOfPanes === 2 && numOfPanes !== index + 1) {
    dividerLeft = 33;
  } else if (numOfPanes > 1 && numOfPanes !== index + 1) {
    dividerLeft = (100 / numOfPanes) * (index + 1);
  }
  return dividerLeft;
}

export function checkForTypeKeys(panesMap) {
  _.forEach(panesMap, (_, actionType) => {
    invariant(
      actionType !== 'undefined',
      `action type for ${panesMap[actionType]} is undefined`
    );
  });
  return panesMap;
}

export const getPane = (panesByName, panes, index) => _.get(
  panesByName,
  getPaneName(panes, index),
  null
);

export const getPaneName = (panes, index) => _.get(
  panes,
  [index, 'name'],
  ''
);

export const getRightBound = (pane, buffer) =>
    ((pane && !pane.isHidden && pane.dividerLeft) || 100) - buffer;
export const getLeftBound = (pane, buffer) =>
    ((pane && !pane.isHidden && pane.dividerLeft) || 0) + buffer;

export function normalizePanesMapCreator(createPanesMap) {
  invariant(
    _.isFunction(createPanesMap),
    'createPanesMap should be a function but got %s',
    createPanesMap
  );
  const panesMap = createPanesMap({}, { type: '@@panes/test' });
  if (typeof panesMap === 'function') {
    return normalizePanesMapCreator(panesMap);
  }
  invariant(
    !panesMap,
    'panesMap test should return undefined or null on test action but got %s',
    panesMap
  );
  return createPanesMap;
}

