"use strict";

exports.__esModule = true;
exports.slicesReducer = void 0;
const slicesReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `CREATE_SLICE`:
      {
        state.set(action.payload.name, action.payload);
        return state;
      }
    case `DELETE_SLICE`:
      {
        state.delete(action.payload.name);
        return state;
      }
    default:
      return state;
  }
};
exports.slicesReducer = slicesReducer;
//# sourceMappingURL=slices.js.map