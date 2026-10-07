"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAssignmentIdentifiers;
function getAssignmentIdentifiers(node) {
  const search = [].concat(node);
  const ids = Object.create(null);
  while (search.length) {
    const id = search.pop();
    if (!id) continue;
    switch (id.type) {
      case "ArrayPattern":
        search.push(...id.elements);
        break;
      case "AssignmentExpression":
      case "AssignmentPattern":
      case "ForInStatement":
      case "ForOfStatement":
        search.push(id.left);
        break;
      case "ObjectPattern":
        search.push(...id.properties);
        break;
      case "ObjectProperty":
        search.push(id.value);
        break;
      case "RestElement":
      case "UpdateExpression":
        search.push(id.argument);
        break;
      case "UnaryExpression":
        if (id.operator === "delete") {
          search.push(id.argument);
        }
        break;
      case "Identifier":
        ids[id.name] = id;
        break;
      default:
        break;
    }
  }
  return ids;
}

//# sourceMappingURL=getAssignmentIdentifiers.js.map
