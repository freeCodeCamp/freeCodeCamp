"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpileConstEnum;
var _enum = require("./enum.js");
function transpileConstEnum(path, t) {
  const {
    name
  } = path.node.id;
  const parentIsExport = path.parentPath.isExportNamedDeclaration();
  let isExported = parentIsExport;
  if (!isExported && t.isProgram(path.parent)) {
    isExported = path.parent.body.some(stmt => t.isExportNamedDeclaration(stmt) && stmt.exportKind !== "type" && !stmt.source && stmt.specifiers.some(spec => t.isExportSpecifier(spec) && spec.exportKind !== "type" && spec.local.name === name));
  }
  const {
    enumValues: entries
  } = (0, _enum.translateEnumValues)(path, t);
  if (isExported) {
    const obj = t.objectExpression(entries.map(([name, value]) => t.objectProperty(t.isValidIdentifier(name) ? t.identifier(name) : t.stringLiteral(name), value)));
    if (path.scope.hasOwnBinding(name)) {
      (parentIsExport ? path.parentPath : path).replaceWith(t.expressionStatement(t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("assign")), [path.node.id, obj])));
    } else {
      path.replaceWith(t.variableDeclaration("var", [t.variableDeclarator(path.node.id, obj)]));
      path.scope.registerDeclaration(path);
    }
    return;
  }
  const entriesMap = new Map(entries);
  path.scope.path.traverse({
    Scope(path) {
      if (path.scope.hasOwnBinding(name)) path.skip();
    },
    MemberExpression(path) {
      if (!t.isIdentifier(path.node.object, {
        name
      })) return;
      let key;
      if (path.node.computed) {
        if (t.isStringLiteral(path.node.property)) {
          key = path.node.property.value;
        } else {
          return;
        }
      } else if (t.isIdentifier(path.node.property)) {
        key = path.node.property.name;
      } else {
        return;
      }
      if (!entriesMap.has(key)) return;
      path.replaceWith(t.cloneNode(entriesMap.get(key)));
    }
  });
  path.remove();
}

//# sourceMappingURL=const-enum.js.map
