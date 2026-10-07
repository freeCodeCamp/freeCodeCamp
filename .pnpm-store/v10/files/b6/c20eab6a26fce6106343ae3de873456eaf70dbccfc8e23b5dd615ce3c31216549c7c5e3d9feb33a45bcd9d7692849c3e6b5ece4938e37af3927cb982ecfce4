"use strict";

exports.__esModule = true;
exports.nodesReducer = void 0;
const nodesReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      return new Map();
    case `CREATE_NODE`:
      {
        state.set(action.payload.id, action.payload);
        return state;
      }
    case `ADD_FIELD_TO_NODE`:
    case `ADD_CHILD_NODE_TO_PARENT_NODE`:
      state.set(action.payload.id, action.payload);
      return state;
    case `DELETE_NODE`:
      {
        if (action.payload) {
          state.delete(action.payload.id);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.nodesReducer = nodesReducer;
//# sourceMappingURL=nodes.js.map