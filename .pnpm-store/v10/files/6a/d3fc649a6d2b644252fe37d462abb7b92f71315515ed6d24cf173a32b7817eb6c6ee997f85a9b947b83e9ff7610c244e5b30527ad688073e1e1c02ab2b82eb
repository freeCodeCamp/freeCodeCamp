'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (api) {
  var transformImport = (0, _utils.createDynamicImportTransform)(api);

  return {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
    manipulateOptions: function () {
      function manipulateOptions(opts, parserOpts) {
        parserOpts.plugins.push('dynamicImport');
      }

      return manipulateOptions;
    }(),


    visitor: {
      Import: function () {
        function Import(path) {
          transformImport(this, path);
        }

        return Import;
      }()
    }
  };
};

var _utils = require('./utils');

module.exports = exports['default'];