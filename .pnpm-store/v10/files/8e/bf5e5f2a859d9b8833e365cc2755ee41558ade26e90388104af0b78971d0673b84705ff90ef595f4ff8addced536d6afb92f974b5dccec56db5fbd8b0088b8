"use strict";

exports.__esModule = true;
exports.staticQueriesByTemplateReducer = void 0;
const staticQueriesByTemplateReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `REMOVE_STATIC_QUERIES_BY_TEMPLATE`:
      state.delete(action.payload.componentPath);
      return state;
    case `SET_STATIC_QUERIES_BY_TEMPLATE`:
      {
        return state.set(action.payload.componentPath, action.payload.staticQueryHashes);
      }
    default:
      return state;
  }
};
exports.staticQueriesByTemplateReducer = staticQueriesByTemplateReducer;
//# sourceMappingURL=static-queries-by-template.js.map