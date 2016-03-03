import { createAction } from 'redux-actions';
import types from './types';

// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

let id = 0;
// makeToast({ type?: String, message: String, title: String }) => Action
export const makeToast = createAction(
  types.makeToast,
  toast => {
    id += 1;
    return {
      ...toast,
      id,
      type: toast.type || 'info'
    };
  }
);

// fetchUser() => Action
// used in combination with fetch-user-saga
export const fetchUser = createAction(types.fetchUser);

// setUser(userInfo: Object) => Action
export const setUser = createAction(types.setUser);

// updatePoints(points: Number) => Action
export const updatePoints = createAction(types.updatePoints);

// hardGoTo(path: String) => Action
export const hardGoTo = createAction(types.hardGoTo);
