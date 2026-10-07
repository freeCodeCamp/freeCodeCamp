"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;
function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }
      return parent.object === node;
    case "JSXMemberExpression":
      return parent.object === node;
    case "VariableDeclarator":
      return parent.init === node;
    case "ArrowFunctionExpression":
      return parent.body === node;
    case "PrivateName":
      return false;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return false;
    case "ObjectProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return (grandparent == null ? void 0 : grandparent.type) !== "ObjectPattern";
    case "ClassProperty":
    case "ClassAccessorProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
    case "ClassPrivateProperty":
      return parent.key !== node;
    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;
    case "AssignmentExpression":
      return parent.right === node;
    case "AssignmentPattern":
      return parent.right === node;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return false;
    case "RestElement":
      return false;
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;
    case "ExportSpecifier":
      if (grandparent != null && grandparent.source) {
        return false;
      }
      return parent.local === node;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ImportAttribute":
      return false;
    case "JSXAttribute":
      return false;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
    case "MetaProperty":
      return false;
    case "ObjectTypeProperty":
      return parent.key !== node;
    case "TSEnumMember":
      return parent.id !== node;
    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
  }
  return true;
}

//# sourceMappingURL=isReferenced.js.map
