"use strict";

var _core = require("@babel/core");
/* eslint-disable @babel/no-invalid-this */

const webpackRemoveExportsLoader = function webpackRemoveExportsLoader(source, sourceMap) {
  var _options$remove;
  const callback = this.async();
  const options = this.getOptions();
  (0, _core.transform)(source, {
    babelrc: false,
    configFile: false,
    // @ts-ignore inputSourceMap expect object or falsy, but webpack types suggest sourceMap can be a string,
    // which is not compatibile with babel's transform options
    inputSourceMap: this.sourceMap ? sourceMap || undefined : undefined,
    sourceFileName: this.resourcePath,
    sourceMaps: this.sourceMap,
    filename: this.resourcePath,
    presets: options !== null && options !== void 0 && options.jsx ? [[require.resolve(`babel-preset-gatsby/babel-preset-react`), {
      useBuiltIns: true,
      pragma: `React.createElement`,
      // jsx is used only in develop, so for now this is fine
      development: true
    }]] : undefined,
    plugins: [[require.resolve(`../../babel/babel-plugin-remove-api`), {
      apis: (_options$remove = options === null || options === void 0 ? void 0 : options.remove) !== null && _options$remove !== void 0 ? _options$remove : []
    }]]
  }, (err, result) => {
    if (err) {
      callback(err);
    } else if (result && result.code) {
      var _result$map;
      callback(null, result === null || result === void 0 ? void 0 : result.code, (_result$map = result === null || result === void 0 ? void 0 : result.map) !== null && _result$map !== void 0 ? _result$map : undefined);
    } else {
      callback(null, source, sourceMap);
    }
  });
};
module.exports = webpackRemoveExportsLoader;
//# sourceMappingURL=webpack-remove-exports-loader.js.map