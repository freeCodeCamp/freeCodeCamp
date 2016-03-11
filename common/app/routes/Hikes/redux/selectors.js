// use this file for common selectors
import { createSelector } from 'reselect';

export const getCurrentHike = createSelector(
  state => state.entities.hike,
  state => state.hikesApp.currentHike,
  (hikesMap, currentHikeDashedName) => (hikesMap[currentHikeDashedName] || {})
);
