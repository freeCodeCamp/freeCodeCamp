"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.redirectsReducer = void 0;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
const redirects = new Map();
function exists(newRedirect) {
  const fromPathRedirects = redirects.get(newRedirect.fromPath);
  if (!fromPathRedirects) return false;
  return fromPathRedirects.some(redirect => (0, _isEqual2.default)(redirect, newRedirect));
}
function add(redirect) {
  let samePathRedirects = redirects.get(redirect.fromPath);
  if (!samePathRedirects) {
    samePathRedirects = [];
    redirects.set(redirect.fromPath, samePathRedirects);
  }
  samePathRedirects.push(redirect);
}
const redirectsReducer = (state = [], action) => {
  switch (action.type) {
    case `CREATE_REDIRECT`:
      {
        const redirect = action.payload;

        // Add redirect only if it wasn't yet added to prevent duplicates
        if (!exists(redirect)) {
          add(redirect);
          state.push(redirect);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.redirectsReducer = redirectsReducer;
//# sourceMappingURL=redirects.js.map