// use this file for common selectors
import { createSelector } from 'reselect';

export const getCurrentHike = createSelector(
  state => state.hikesApp.hikes.entities,
  state => state.hikesApp.currentHike,
  (hikesMap, currentHikeDashedName) => (hikesMap[currentHikeDashedName] || {})
);
