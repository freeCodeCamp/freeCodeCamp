import types from './types';
import { initMap } from './actions';
import { unfilterMapUi, applyFilterToMap } from '../utils';

export default function mapUiSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.updateFilter ||
      type === types.clearFilter
    ))
    .debounce(250)
    .map(({ payload: filter = '' }) => filter)
    .distinctUntilChanged()
    .map(filter => {
      const { challengesApp: { mapUi = {} } } = getState();
      let newMapUi;
      if (filter.length <= 3) {
        newMapUi = unfilterMapUi(mapUi);
      } else {
        const regexString = filter
          // replace spaces with any key to match dashes
          .replace(/ /g, '.')
          // makes search more fuzzy (thanks @xRahul)
          .split('')
          .join('.*');
        const filterRegex = new RegExp(regexString, 'i');
        newMapUi = applyFilterToMap(mapUi, filterRegex);
      }
      if (!newMapUi || newMapUi === mapUi) {
        return null;
      }
      return initMap(newMapUi);
    });
}
