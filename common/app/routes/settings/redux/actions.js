import { createAction, handleActions } from 'redux-actions';

import createTypes from '../../../utils/create-types';

const initialState = {
  showDeleteModal: false
};
export const types = createTypes([
  'toggleUserFlag',
  'openDeleteModal',
  'hideDeleteModal'
], 'settings');

export const toggleUserFlag = createAction(types.toggleUserFlag);
export const openDeleteModal = createAction(types.openDeleteModal);
export const hideDeleteModal = createAction(types.hideDeleteModal);

export default handleActions(
  {
    [openDeleteModal]: state => ({
      ...state,
      isDeleteOpen: true
    }),
    [hideDeleteModal]: state => ({
      ...state,
      isDeleteOpen: false
    })
  },
  initialState
);
