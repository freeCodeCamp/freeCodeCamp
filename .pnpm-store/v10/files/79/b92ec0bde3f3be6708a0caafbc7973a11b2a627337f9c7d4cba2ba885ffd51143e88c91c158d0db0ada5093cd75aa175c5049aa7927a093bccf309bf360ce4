"use strict";

exports.__esModule = true;
exports.staticQueryComponentsReducer = void 0;
const staticQueryComponentsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      return new Map();
    case `REPLACE_STATIC_QUERY`:
      return state.set(action.payload.id, action.payload);
    case `REMOVE_STATIC_QUERY`:
      state.delete(action.payload);
      return state;
  }
  return state;
};
exports.staticQueryComponentsReducer = staticQueryComponentsReducer;
//# sourceMappingURL=static-query-components.js.map