'use strict';

/*
 json-stringify-safe
 Like JSON.stringify, but doesn't throw on circular references.

 Originally forked from https://github.com/isaacs/json-stringify-safe
 version 5.0.1 on 2017-09-21 and modified to handle Errors serialization.
 Tests for this are in test/vendor.

 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
 */

exports = module.exports = stringify;
exports.getSerialize = serializer;

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
function stringifyError(value) {
  var err = {
    // These properties are implemented as magical getters and don't show up in for in
    stack: value.stack,
    message: value.message,
    name: value.name
  };

  for (var i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      err[i] = value[i];
    }
  }

  return err;
}

function serializer(replacer, cycleReplacer) {
  var stack = [];
  var keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = function(key, value) {
      if (stack[0] === value) {
        return '[Circular ~]';
      }
      return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
    };
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~stack.indexOf(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null
      ? value instanceof Error ? stringifyError(value) : value
      : replacer.call(this, key, value);
  };
}
