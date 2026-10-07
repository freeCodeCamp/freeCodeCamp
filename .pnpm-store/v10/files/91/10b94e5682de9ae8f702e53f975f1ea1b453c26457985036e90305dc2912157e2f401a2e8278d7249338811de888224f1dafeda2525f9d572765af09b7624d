"use strict";

exports.__esModule = true;
exports.nodesByTypeReducer = void 0;
const getNodesOfType = (node, state) => {
  const {
    type
  } = node.internal;
  if (!state.has(type)) {
    state.set(type, new Map());
  }
  const nodeByType = state.get(type);
  if (!nodeByType) {
    throw new Error(`An error occurred finding a node by it's type. This is likely a bug in gatsby. If you experience this error please open an issue.`);
  }
  return nodeByType;
};
const nodesByTypeReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      return new Map();
    case `CREATE_NODE`:
      {
        const node = action.payload;
        const nodesOfType = getNodesOfType(node, state);
        nodesOfType.set(node.id, node);
        return state;
      }
    case `ADD_FIELD_TO_NODE`:
    case `ADD_CHILD_NODE_TO_PARENT_NODE`:
      {
        const node = action.payload;
        const nodesOfType = getNodesOfType(node, state);
        nodesOfType.set(node.id, node);
        return state;
      }
    case `DELETE_NODE`:
      {
        const node = action.payload;
        if (!node) return state;
        const nodesOfType = getNodesOfType(node, state);
        nodesOfType.delete(node.id);
        if (!nodesOfType.size) {
          state.delete(node.internal.type);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.nodesByTypeReducer = nodesByTypeReducer;
//# sourceMappingURL=nodes-by-type.js.map