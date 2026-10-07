"use strict";

exports.__esModule = true;
exports.pendingPageDataWritesReducer = void 0;
const pendingPageDataWritesReducer = (state = {
  pagePaths: new Set(),
  sliceNames: new Set()
}, action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      {
        return {
          pagePaths: new Set(),
          sliceNames: new Set()
        };
      }
    case `CREATE_PAGE`:
      if (action.componentModified || action.slicesModified) {
        state.pagePaths.add(action.payload.path);
      }
      return state;
    case `CREATE_SLICE`:
      {
        if (action.componentModified) {
          state.sliceNames.add(action.payload.name);
        }
        return state;
      }
    case `ADD_PENDING_PAGE_DATA_WRITE`:
      state.pagePaths.add(action.payload.path);
      return state;
    case `ADD_PENDING_SLICE_DATA_WRITE`:
      {
        state.sliceNames.add(action.payload.name);
        return state;
      }
    case `ADD_PENDING_TEMPLATE_DATA_WRITE`:
      {
        for (const page of action.payload.pages) {
          state.pagePaths.add(page);
        }
        return state;
      }
    case `ADD_PENDING_SLICE_TEMPLATE_DATA_WRITE`:
      {
        for (const name of action.payload.sliceNames) {
          state.sliceNames.add(name);
        }
        return state;
      }
    case `CLEAR_PENDING_PAGE_DATA_WRITE`:
      {
        state.pagePaths.delete(action.payload.page);
        return state;
      }
    case `CLEAR_PENDING_SLICE_DATA_WRITE`:
      {
        state.sliceNames.delete(action.payload.name);
        return state;
      }
    default:
      return state;
  }
};
exports.pendingPageDataWritesReducer = pendingPageDataWritesReducer;
//# sourceMappingURL=pending-page-data-writes.js.map