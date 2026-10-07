"use strict";

exports.__esModule = true;
exports.nodesTouchedReducer = void 0;
const nodesTouchedReducer = (state = new Set(), action) => {
  switch (action.type) {
    case `CREATE_NODE`:
      state.add(action.payload.id);
      return state;
    case `TOUCH_NODE`:
      state.add(action.payload);
      return state;
    default:
      return state;
  }
};
exports.nodesTouchedReducer = nodesTouchedReducer;
//# sourceMappingURL=nodes-touched.js.map