"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitExportDeclaration;
var _t = require("@babel/types");
const {
  cloneNode,
  exportNamedDeclaration,
  exportSpecifier,
  identifier,
  variableDeclaration,
  variableDeclarator
} = _t;
function splitExportDeclaration(exportDeclaration) {
  if (!exportDeclaration.isExportDeclaration() || exportDeclaration.isExportAllDeclaration()) {
    throw new Error("Only default and named export declarations can be split.");
  }
  if (exportDeclaration.isExportDefaultDeclaration()) {
    const declaration = exportDeclaration.get("declaration");
    const standaloneDeclaration = declaration.isFunctionDeclaration() || declaration.isClassDeclaration();
    const exportExpr = declaration.isFunctionExpression() || declaration.isClassExpression();
    const scope = declaration.isScope() ? declaration.scope.parent : declaration.scope;
    let id = declaration.node.id;
    let needBindingRegistration = false;
    if (!id) {
      needBindingRegistration = true;
      id = scope.generateUidIdentifier("default");
      if (standaloneDeclaration || exportExpr) {
        declaration.node.id = cloneNode(id);
      }
    } else if (exportExpr && scope.hasBinding(id.name)) {
      needBindingRegistration = true;
      id = scope.generateUidIdentifier(id.name);
    }
    const updatedDeclaration = standaloneDeclaration ? declaration.node : variableDeclaration("var", [variableDeclarator(cloneNode(id), declaration.node)]);
    const updatedExportDeclaration = exportNamedDeclaration(null, [exportSpecifier(cloneNode(id), identifier("default"))]);
    exportDeclaration.insertAfter(updatedExportDeclaration);
    exportDeclaration.replaceWith(updatedDeclaration);
    if (needBindingRegistration) {
      scope.registerDeclaration(exportDeclaration);
    }
    return exportDeclaration;
  } else if (exportDeclaration.get("specifiers").length > 0) {
    throw new Error("It doesn't make sense to split exported specifiers.");
  }
  const declaration = exportDeclaration.get("declaration");
  const bindingIdentifiers = declaration.getOuterBindingIdentifiers();
  const specifiers = Object.keys(bindingIdentifiers).map(name => {
    return exportSpecifier(identifier(name), identifier(name));
  });
  const aliasDeclar = exportNamedDeclaration(null, specifiers);
  exportDeclaration.insertAfter(aliasDeclar);
  exportDeclaration.replaceWith(declaration.node);
  return exportDeclaration;
}

//# sourceMappingURL=index.js.map
