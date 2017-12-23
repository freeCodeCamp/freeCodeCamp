import { handleActions } from 'redux-actions';
import types from './types';

const initialState = [];
export default handleActions({
  [types.makeToast]: (state, { payload: toast }) => [
    ...state,
    toast
  ],
  [types.removeToast]: (state, { payload: key }) => state.filter(
    toast => toast.key !== key
  )
}, initialState);
