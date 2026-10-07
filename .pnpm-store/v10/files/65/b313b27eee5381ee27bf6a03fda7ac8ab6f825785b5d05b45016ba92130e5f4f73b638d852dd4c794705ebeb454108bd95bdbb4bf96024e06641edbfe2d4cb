"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.webpackReducer = void 0;
var _webpackMerge = _interopRequireDefault(require("webpack-merge"));
const webpackReducer = (state = {}, action) => {
  switch (action.type) {
    case `SET_WEBPACK_CONFIG`:
      {
        const nextConfig = action.payload;
        delete nextConfig.entry;
        delete nextConfig.output;
        delete nextConfig.target;
        delete nextConfig.resolveLoaders;
        return (0, _webpackMerge.default)(state, nextConfig);
      }
    case `REPLACE_WEBPACK_CONFIG`:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
exports.webpackReducer = webpackReducer;
//# sourceMappingURL=webpack.js.map