"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;
var _react = require("react");
var _context = require("./context.js");
function I18nextProvider({
  i18n,
  defaultNS,
  children
}) {
  const value = (0, _react.useMemo)(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return (0, _react.createElement)(_context.I18nContext.Provider, {
    value
  }, children);
}