import store from 'store';

import types from '../../common/app/routes/challenges/redux/types';
import {
  savedCodeFound
} from '../../common/app/routes/challenges/redux/actions';

const legecyPrefixes = [
  'Bonfire: ',
  'Waypoint: ',
  'Zipline: ',
  'Basejump: ',
  'Checkpoint: '
];

function getCode(id, legacy) {
  if (store.has(id)) {
    return store.get(id);
  }
  if (store.has(legacy)) {
    const code = '' + store.get(legacy);
    store.remove(legacy);
    return code;
  }
  return legecyPrefixes.reduce((code, prefix) => {
    if (code) {
      return code;
    }
    return store.get(prefix + legacy + 'Val');
  }, null);
}

export default function codeStorageSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.saveCode ||
      type === types.loadCode
    ))
    .map(({ type }) => {
      const { id = '', files = {}, legacyKey = '' } = getState().challengesApp;
      if (type === types.saveCode) {
        store.set(id, files);
        return null;
      }
      const codeFound = getCode(id, legacyKey);
      if (codeFound) {
        return savedCodeFound(codeFound);
      }
      return null;
    });
}
