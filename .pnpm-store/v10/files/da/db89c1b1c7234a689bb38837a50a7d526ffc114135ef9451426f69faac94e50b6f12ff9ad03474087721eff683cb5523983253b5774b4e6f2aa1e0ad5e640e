"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trans = Trans;
Object.defineProperty(exports, "nodesToString", {
  enumerable: true,
  get: function () {
    return _TransWithoutContext.nodesToString;
  }
});
var _react = require("react");
var _TransWithoutContext = require("./TransWithoutContext.js");
var _context = require("./context.js");
function Trans({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0, _react.useContext)(_context.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  const t = tFromProps || i18n?.t.bind(i18n);
  return (0, _TransWithoutContext.Trans)({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}