import { createAction } from 'redux-actions';
import types from './types';

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
