'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
require('./types.js');
var actionTypes = require('./actionTypes.js');
require('./utils.js');
require('./environment.js');

function toInvokeSource(src) {
  if (typeof src === 'string') {
    var simpleSrc = {
      type: src
    };

    simpleSrc.toString = function () {
      return src;
    }; // v4 compat - TODO: remove in v5


    return simpleSrc;
  }

  return src;
}
function toInvokeDefinition(invokeConfig) {
  return _tslib.__assign(_tslib.__assign({
    type: actionTypes.invoke
  }, invokeConfig), {
    toJSON: function () {
      invokeConfig.onDone;
          invokeConfig.onError;
          var invokeDef = _tslib.__rest(invokeConfig, ["onDone", "onError"]);

      return _tslib.__assign(_tslib.__assign({}, invokeDef), {
        type: actionTypes.invoke,
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}

exports.toInvokeDefinition = toInvokeDefinition;
exports.toInvokeSource = toInvokeSource;
