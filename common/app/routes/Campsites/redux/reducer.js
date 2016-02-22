import { handleActions } from 'redux-actions';
import types from './types';
var _ = require('lodash');

const DEFAULT_CAMPSITE = { campsiteURL: { value: '' } };

const initialState = {
  campsite: DEFAULT_CAMPSITE,
  searchMap: {
    markers: [],
    bounds: {},
    center: {}
  },
  approvedCampsites: [],
  editingCampsites: [],
  pendingCampsites: []
};

export default handleActions(
  {
    [types.setSearchMapAttribute]: (state, { payload: { name, value } }) => {
      return {...state,
      searchMap: {...state.searchMap, [name]: value} };
    },

    // TODO: this isn't being called, not sure why
    [types.resetCampsite]: state => {
      return {...state, campsite: DEFAULT_CAMPSITE };
    },

    [types.updatePendingCampsites]: state => {
      const approved = state.pendingCampsites.filter(c => c.isApproved);
      const deleted = state.pendingCampsites.filter(c => c.isDeleted);
      const idsToDelete = deleted.concat(approved).map(c => c.id);

      // filter ids that have been approved or deleted
      let newPendingCampsites = state.pendingCampsites
        .filter(c => idsToDelete.indexOf(c.id) === -1);

      let appCam = state.approvedCampsites;
      let editCam = state.editingCampsites;
      let newApprovedCampsites = [];
      let appClone = _.clone(appCam);
      // if editing, handle merge of edited campsite into approved
      if (editCam.length > 0) {
        // find index of item to updatex
        const index = _.findIndex(appCam, _.pick(editCam, 'id'));
        if (state.editingCampsites[0].isDeleted) {
          // if deleted, remove
          newApprovedCampsites = appClone.slice(0, index)
            .concat(appClone.slice(index + 1));
        } else {
          // not deleted, update based on new value
          newApprovedCampsites = appClone.slice(0, index)
            .concat(editCam, appClone.slice(index + 1));
        }
      } else {
        newApprovedCampsites = appCam;
      }
      return {...state,
        pendingCampsites: newPendingCampsites,
        approvedCampsites: newApprovedCampsites.concat(approved),
        editingCampsites: []
      };
    },
    [types.addEditingCampsite]: (state, { payload: {
      campsite
    } }) => {
      return {
        ...state,
        editingCampsites: [Object.assign({}, campsite)]
      };
    },

    [types.editExistingCampsite]: (state, { payload: {
      campsiteID,
      value
    } }) => {
      const { editingCampsites } = state;
      // find matching campsite in array and update value
      const newEditingCampsites = editingCampsites.map(campsite =>
        campsite.id === campsiteID ?
          Object.assign({}, campsite, value) : campsite
      );
      return {
        ...state,
        editingCampsites: newEditingCampsites
      };
    },

    [types.editPendingCampsite]: (state, { payload: {
      campsiteID,
      value
    } }) => {
      const { pendingCampsites } = state;
      // find matching campsite in array and update value
      const newPendingCampsites = pendingCampsites.map(campsite =>
        campsite.id === campsiteID ?
          Object.assign({}, campsite, value) : campsite
      );
      return {
        ...state,
        pendingCampsites: newPendingCampsites
      };
    },

    [types.updateCreateForm]: (state, { payload: { name, value } } ) => (
      {
        ...state,
        campsite: {...state.campsite, [name]: { value } }
      }
    ),
    [types.fetchCampsitesCompleted]: (state, { payload }) => {
      const { approvedCampsites, pendingCampsites } = payload;

      return {
        ...state,
        approvedCampsites,
        pendingCampsites
      };
    }

  },
  initialState
);
