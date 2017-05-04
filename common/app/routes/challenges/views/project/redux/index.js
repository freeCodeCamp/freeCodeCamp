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

const reducer = handleActions({
  [types.showProjectSubmit]: state => ({
    ...state,
    isSubmitting: true
  })
}, initialState);

reducer.toString = () => ns;
export default reducer;
