import {
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import ns from '../ns.json';

export const types = createTypes([
  'makeToast',
  'removeToast'
], ns);

let key = 0;
export const makeToast = createAction(
  types.makeToast,
  ({ timeout, ...rest }) => ({
    ...rest,
    // assign current value of key to new toast
    // and then increment key value
    key: key++,
    dismissAfter: timeout || 6000,
    position: rest.position === 'left' ? 'left' : 'right'
  })
);

export const removeToast = createAction(
  types.removeToast,
  ({ key }) => key
);


const initialState = [];

export default handleActions(
  () => ({
    [types.makeToast]: (state, { payload: toast }) => [
      ...state,
      toast
    ].filter(toast => !!toast.message),
    [types.removeToast]: (state, { payload: key }) => state.filter(
      toast => toast.key !== key
    )
  }),
  initialState,
  ns
);
