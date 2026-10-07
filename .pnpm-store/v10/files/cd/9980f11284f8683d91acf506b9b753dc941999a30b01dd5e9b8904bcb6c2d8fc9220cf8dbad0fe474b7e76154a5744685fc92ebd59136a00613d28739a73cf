Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const object = require('./object.js');

const SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
  if (span) {
    object.addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
  } else {
    delete scope[SCOPE_SPAN_FIELD];
  }
}
function _getSpanForScope(scope) {
  return scope[SCOPE_SPAN_FIELD];
}

exports._getSpanForScope = _getSpanForScope;
exports._setSpanForScope = _setSpanForScope;
//# sourceMappingURL=spanOnScope.js.map
