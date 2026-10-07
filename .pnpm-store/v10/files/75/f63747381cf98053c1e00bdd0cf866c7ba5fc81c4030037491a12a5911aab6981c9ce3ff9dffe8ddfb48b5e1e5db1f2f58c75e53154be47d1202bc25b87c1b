"use strict";

exports.__esModule = true;
exports.BABEL_RUNTIME = void 0;
exports.callMethod = callMethod;
exports.coreJSModule = coreJSModule;
exports.coreJSPureHelper = coreJSPureHelper;
exports.isCoreJSSource = isCoreJSSource;
var _babel = _interopRequireWildcard(require("@babel/core"));
var _entries = _interopRequireDefault(require("../core-js-compat/entries.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  types: t
} = _babel.default || _babel;
const BABEL_RUNTIME = "@babel/runtime-corejs3";
exports.BABEL_RUNTIME = BABEL_RUNTIME;
function callMethod(path, id) {
  const {
    object
  } = path.node;
  let context1, context2;
  if (t.isIdentifier(object)) {
    context1 = object;
    context2 = t.cloneNode(object);
  } else {
    context1 = path.scope.generateDeclaredUidIdentifier("context");
    context2 = t.assignmentExpression("=", t.cloneNode(context1), object);
  }
  path.replaceWith(t.memberExpression(t.callExpression(id, [context2]), t.identifier("call")));
  path.parentPath.unshiftContainer("arguments", context1);
}
function isCoreJSSource(source) {
  if (typeof source === "string") {
    source = source.replace(/\\/g, "/").replace(/(\/(index)?)?(\.js)?$/i, "").toLowerCase();
  }
  return Object.prototype.hasOwnProperty.call(_entries.default, source) && _entries.default[source];
}
function coreJSModule(name) {
  return `core-js/modules/${name}.js`;
}
function coreJSPureHelper(name, useBabelRuntime, ext) {
  return useBabelRuntime ? `${BABEL_RUNTIME}/core-js/${name}${ext}` : `core-js-pure/features/${name}.js`;
}