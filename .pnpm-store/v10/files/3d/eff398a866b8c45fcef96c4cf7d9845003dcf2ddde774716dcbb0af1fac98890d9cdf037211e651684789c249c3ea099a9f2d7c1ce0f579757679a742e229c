"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformWithoutHelper;
var _core = require("@babel/core");
function transformWithoutHelper(loose, path, state) {
  const pushComputedProps = loose ? pushComputedPropsLoose : pushComputedPropsSpec;
  const {
    node
  } = path;
  const build = pushComputedProps(path, state);
  const declar = build.declar;
  const loop = build.loop;
  const block = loop.body;
  path.ensureBlock();
  if (declar) {
    block.body.push(declar);
  }
  block.body.push(...node.body.body);
  _core.types.inherits(loop, node);
  _core.types.inherits(loop.body, node.body);
  if (build.replaceParent) {
    path.parentPath.replaceWithMultiple(build.node);
    path.remove();
  } else {
    path.replaceWithMultiple(build.node);
  }
}
const buildForOfLoose = _core.template.statement(`
  for (var LOOP_OBJECT = OBJECT,
          IS_ARRAY = Array.isArray(LOOP_OBJECT),
          INDEX = 0,
          LOOP_OBJECT = IS_ARRAY ? LOOP_OBJECT : LOOP_OBJECT[Symbol.iterator]();;) {
    INTERMEDIATE;
    if (IS_ARRAY) {
      if (INDEX >= LOOP_OBJECT.length) break;
      ID = LOOP_OBJECT[INDEX++];
    } else {
      INDEX = LOOP_OBJECT.next();
      if (INDEX.done) break;
      ID = INDEX.value;
    }
  }
`);
const buildForOf = _core.template.statements(`
  var ITERATOR_COMPLETION = true;
  var ITERATOR_HAD_ERROR_KEY = false;
  var ITERATOR_ERROR_KEY = undefined;
  try {
    for (
      var ITERATOR_KEY = OBJECT[Symbol.iterator](), STEP_KEY;
      !(ITERATOR_COMPLETION = (STEP_KEY = ITERATOR_KEY.next()).done);
      ITERATOR_COMPLETION = true
    ) {}
  } catch (err) {
    ITERATOR_HAD_ERROR_KEY = true;
    ITERATOR_ERROR_KEY = err;
  } finally {
    try {
      if (!ITERATOR_COMPLETION && ITERATOR_KEY.return != null) {
        ITERATOR_KEY.return();
      }
    } finally {
      if (ITERATOR_HAD_ERROR_KEY) {
        throw ITERATOR_ERROR_KEY;
      }
    }
  }
`);
function pushComputedPropsLoose(path, state) {
  const {
    node,
    scope,
    parent
  } = path;
  const {
    left
  } = node;
  let declar, id, intermediate;
  if (_core.types.isIdentifier(left) || _core.types.isPattern(left) || _core.types.isMemberExpression(left)) {
    id = left;
    intermediate = null;
  } else if (_core.types.isVariableDeclaration(left)) {
    id = scope.generateUidIdentifier("ref");
    declar = _core.types.variableDeclaration(left.kind, [_core.types.variableDeclarator(left.declarations[0].id, _core.types.identifier(id.name))]);
    intermediate = _core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(id.name))]);
  } else {
    throw state.buildCodeFrameError(left, `Unknown node type ${left.type} in ForStatement`);
  }
  const iteratorKey = scope.generateUidIdentifier("iterator");
  const isArrayKey = scope.generateUidIdentifier("isArray");
  const loop = buildForOfLoose({
    LOOP_OBJECT: iteratorKey,
    IS_ARRAY: isArrayKey,
    OBJECT: node.right,
    INDEX: scope.generateUidIdentifier("i"),
    ID: id,
    INTERMEDIATE: intermediate
  });
  const isLabeledParent = _core.types.isLabeledStatement(parent);
  let labeled;
  if (isLabeledParent) {
    labeled = _core.types.labeledStatement(parent.label, loop);
  }
  return {
    replaceParent: isLabeledParent,
    declar: declar,
    node: labeled || loop,
    loop: loop
  };
}
function pushComputedPropsSpec(path, state) {
  const {
    node,
    scope,
    parent
  } = path;
  const left = node.left;
  let declar;
  const stepKey = scope.generateUid("step");
  const stepValue = _core.types.memberExpression(_core.types.identifier(stepKey), _core.types.identifier("value"));
  if (_core.types.isIdentifier(left) || _core.types.isPattern(left) || _core.types.isMemberExpression(left)) {
    declar = _core.types.expressionStatement(_core.types.assignmentExpression("=", left, stepValue));
  } else if (_core.types.isVariableDeclaration(left)) {
    declar = _core.types.variableDeclaration(left.kind, [_core.types.variableDeclarator(left.declarations[0].id, stepValue)]);
  } else {
    throw state.buildCodeFrameError(left, `Unknown node type ${left.type} in ForStatement`);
  }
  const template = buildForOf({
    ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
    ITERATOR_COMPLETION: scope.generateUidIdentifier("iteratorNormalCompletion"),
    ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
    ITERATOR_KEY: scope.generateUidIdentifier("iterator"),
    STEP_KEY: _core.types.identifier(stepKey),
    OBJECT: node.right
  });
  const isLabeledParent = _core.types.isLabeledStatement(parent);
  const tryBody = template[3].block.body;
  const loop = tryBody[0];
  if (isLabeledParent) {
    tryBody[0] = _core.types.labeledStatement(parent.label, loop);
  }
  return {
    replaceParent: isLabeledParent,
    declar: declar,
    loop: loop,
    node: template
  };
}

//# sourceMappingURL=no-helper-implementation.js.map
