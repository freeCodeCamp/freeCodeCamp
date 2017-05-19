import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import ns from '../ns.json';

export const types = createTypes([
  'showProjectSubmit'
], ns);

export const showProjectSubmit = createAction(types.showProjectSubmit);

const initialState = {
  // project is ready to submit
  isSubmitting: false
};
export const submittingSelector = state => state[ns].isSubmitting;

export default function createReducer() {
  const reducer = handleActions({
    [types.showProjectSubmit]: state => ({
      ...state,
      isSubmitting: true
    })
  }, initialState);

  reducer.toString = () => ns;
  return [ reducer ];
}
