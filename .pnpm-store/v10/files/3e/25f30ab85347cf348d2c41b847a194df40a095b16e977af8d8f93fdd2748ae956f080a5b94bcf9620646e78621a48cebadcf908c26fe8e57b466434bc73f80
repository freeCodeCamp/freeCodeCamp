"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDynamicImport = buildDynamicImport;
var _core = require("@babel/core");
exports.getDynamicImportSource = function getDynamicImportSource(node) {
  const [source] = node.arguments;
  return _core.types.isStringLiteral(source) || _core.types.isTemplateLiteral(source) ? source : _core.template.expression.ast`\`\${${source}}\``;
};
function buildDynamicImport(node, deferToThen, wrapWithPromise, builder) {
  const specifier = _core.types.isCallExpression(node) ? node.arguments[0] : node.source;
  if (_core.types.isStringLiteral(specifier) || _core.types.isTemplateLiteral(specifier) && specifier.quasis.length === 0) {
    if (deferToThen) {
      return _core.template.expression.ast`
        Promise.resolve().then(() => ${builder(specifier)})
      `;
    } else return builder(specifier);
  }
  const specifierToString = _core.types.isTemplateLiteral(specifier) ? _core.types.identifier("specifier") : _core.types.templateLiteral([_core.types.templateElement({
    raw: ""
  }), _core.types.templateElement({
    raw: ""
  })], [_core.types.identifier("specifier")]);
  if (deferToThen) {
    return _core.template.expression.ast`
      (specifier =>
        new Promise(r => r(${specifierToString}))
          .then(s => ${builder(_core.types.identifier("s"))})
      )(${specifier})
    `;
  } else if (wrapWithPromise) {
    return _core.template.expression.ast`
      (specifier =>
        new Promise(r => r(${builder(specifierToString)}))
      )(${specifier})
    `;
  } else {
    return _core.template.expression.ast`
      (specifier => ${builder(specifierToString)})(${specifier})
    `;
  }
}

//# sourceMappingURL=dynamic-import.js.map
