var REACT_ELEMENT_TYPE;
function _createRawReactElement(e, r, E, l) {
  REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103);
  var o = e && e.defaultProps,
    n = arguments.length - 3;
  if (r || 0 === n || (r = {
    children: void 0
  }), 1 === n) r.children = l;else if (n > 1) {
    for (var t = Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3];
    r.children = t;
  }
  if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {});
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: e,
    key: void 0 === E ? null : "" + E,
    ref: null,
    props: r,
    _owner: null
  };
}
export { _createRawReactElement as default };