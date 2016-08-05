import { createAction } from 'redux-actions';
import types from './types';

// get campsites from the DB
export const fetchCampsites = createAction(types.fetchCampsites);
export const fetchCampsitesCompleted = createAction(
  types.fetchCampsitesCompleted,
  (approvedCampsites, pendingCampsites) => ({
    approvedCampsites, pendingCampsites
  })
);

// updates campsite in database
export const updateCampsite = createAction(types.updateCampsite);
// saves to database
export const saveCampsite = createAction(types.saveCampsite);

// reset campsite state on submit
export const resetCampsite = createAction(types.resetCampsite);

// pending campsite approved or deleted on client
export const updatePendingCampsites =
  createAction(types.updatePendingCampsites);

// edit existing campsites
export const addEditingCampsite = createAction(types.addEditingCampsite);
export const editExistingCampsite = createAction(types.editExistingCampsite);

// edit campsites before approving
export const editPendingCampsite = createAction(types.editPendingCampsite);
export const updateCreateForm = createAction(types.updateCreateForm);

// used by the search map during campsite creation
export const setSearchMapAttribute = createAction(types.setSearchMapAttribute);
