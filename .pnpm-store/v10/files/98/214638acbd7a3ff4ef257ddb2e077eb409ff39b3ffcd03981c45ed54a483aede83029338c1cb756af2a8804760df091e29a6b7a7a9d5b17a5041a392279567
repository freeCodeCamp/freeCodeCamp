"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.resolvedNodesCacheReducer = void 0;
var _merge = _interopRequireDefault(require("lodash/merge"));
const resolvedNodesCacheReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
    case `CREATE_NODE`:
    case `DELETE_NODE`:
      return new Map();
    case `SET_RESOLVED_NODES`:
      {
        const {
          key,
          nodes
        } = action.payload;
        const existingResolvedNodes = state.get(key);
        if (existingResolvedNodes) {
          // merge new resolved fields for given type with previously existing ones
          for (const [nodeId, resolvedFields] of nodes.entries()) {
            const previouslyResolvedNodeFields = existingResolvedNodes.get(nodeId);
            if (previouslyResolvedNodeFields) {
              // merge new resolved fields for given node id with previously existing ones
              existingResolvedNodes.set(nodeId, (0, _merge.default)(previouslyResolvedNodeFields, resolvedFields));
            } else {
              // we didn't have any resolved fields for this node id, so we can just set new
              // ones as-is
              existingResolvedNodes.set(nodeId, resolvedFields);
            }
          }
        } else {
          // we didn't have resolved fields for this type yet, so
          // we can just set it
          state.set(key, nodes);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.resolvedNodesCacheReducer = resolvedNodesCacheReducer;
//# sourceMappingURL=resolved-nodes.js.map