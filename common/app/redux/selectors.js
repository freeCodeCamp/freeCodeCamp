import { createSelector } from 'reselect';

export const userSelector = createSelector(
  state => state.app.user,
  state => state.entities.user,
  (username, userMap) => ({
    user: userMap[username] || {}
  })
);
