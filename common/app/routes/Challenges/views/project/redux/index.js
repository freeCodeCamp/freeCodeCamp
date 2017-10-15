import {
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
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

export default handleActions(
  () => ({
    [types.showProjectSubmit]: state => ({
      ...state,
      isSubmitting: true
    })
  }),
  initialState,
  ns
);
