"use strict";

exports.__esModule = true;
exports.updateNodesByType = updateNodesByType;
function updateNodesByType(nodesByTypeDb, action) {
  switch (action.type) {
    case `CREATE_NODE`:
    case `ADD_FIELD_TO_NODE`:
    case `ADD_CHILD_NODE_TO_PARENT_NODE`:
      {
        // nodesByType db uses dupSort, so `put` will effectively append an id
        return nodesByTypeDb.put(action.payload.internal.type, action.payload.id);
      }
    case `DELETE_NODE`:
      {
        return action.payload ? nodesByTypeDb.remove(action.payload.internal.type, action.payload.id) : false;
      }
  }
  return false;
}
//# sourceMappingURL=nodes-by-type.js.map