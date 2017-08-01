import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

import ns from '../ns.json';

export const types = createTypes([
  'makeToast',
  'removeToast'
], 'toast');

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

export default function createReducer() {
  const reducer = handleActions({
    [types.makeToast]: (state, { payload: toast }) => [
      ...state,
      toast
    ],
    [types.removeToast]: (state, { payload: key }) => state.filter(
      toast => toast.key !== key
    )
  }, initialState);

  reducer.toString = () => ns;
  return reducer;
}
