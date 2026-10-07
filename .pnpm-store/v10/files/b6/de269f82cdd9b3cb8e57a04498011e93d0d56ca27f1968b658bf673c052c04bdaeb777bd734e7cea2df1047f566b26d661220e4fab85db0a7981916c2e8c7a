"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _core = require("@babel/core");
const buildForAwait = (0, _core.template)(`
  async function wrapper() {
    var ITERATOR_ABRUPT_COMPLETION = false;
    var ITERATOR_HAD_ERROR_KEY = false;
    var ITERATOR_ERROR_KEY;
    try {
      for (
        var ITERATOR_KEY = GET_ITERATOR(OBJECT), STEP_KEY;
        ITERATOR_ABRUPT_COMPLETION = !(STEP_KEY = await ITERATOR_KEY.next()).done;
        ITERATOR_ABRUPT_COMPLETION = false
      ) {
      }
    } catch (err) {
      ITERATOR_HAD_ERROR_KEY = true;
      ITERATOR_ERROR_KEY = err;
    } finally {
      try {
        if (ITERATOR_ABRUPT_COMPLETION && ITERATOR_KEY.return != null) {
          await ITERATOR_KEY.return();
        }
      } finally {
        if (ITERATOR_HAD_ERROR_KEY) {
          throw ITERATOR_ERROR_KEY;
        }
      }
    }
  }
`);
function _default(path, {
  getAsyncIterator
}) {
  const {
    node,
    scope,
    parent
  } = path;
  const stepKey = scope.generateUidIdentifier("step");
  const stepValue = _core.types.memberExpression(stepKey, _core.types.identifier("value"));
  const left = node.left;
  let declar;
  if (_core.types.isIdentifier(left) || _core.types.isPattern(left) || _core.types.isMemberExpression(left)) {
    declar = _core.types.expressionStatement(_core.types.assignmentExpression("=", left, stepValue));
  } else if (_core.types.isVariableDeclaration(left)) {
    declar = _core.types.variableDeclaration(left.kind, [_core.types.variableDeclarator(left.declarations[0].id, stepValue)]);
  }
  let template = buildForAwait({
    ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
    ITERATOR_ABRUPT_COMPLETION: scope.generateUidIdentifier("iteratorAbruptCompletion"),
    ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
    ITERATOR_KEY: scope.generateUidIdentifier("iterator"),
    GET_ITERATOR: getAsyncIterator,
    OBJECT: node.right,
    STEP_KEY: _core.types.cloneNode(stepKey)
  });
  template = template.body.body;
  const isLabeledParent = _core.types.isLabeledStatement(parent);
  const tryBody = template[3].block.body;
  const loop = tryBody[0];
  if (isLabeledParent) {
    tryBody[0] = _core.types.labeledStatement(parent.label, loop);
  }
  return {
    replaceParent: isLabeledParent,
    node: template,
    declar,
    loop
  };
}

//# sourceMappingURL=for-await.js.map
