self.Flatted = (function (exports) {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /// <reference types="../types/index.d.ts" />

  // (c) 2020-present Andrea Giammarchi

  var $parse = JSON.parse,
    $stringify = JSON.stringify;
  var keys = Object.keys;
  var Primitive = String; // it could be Number
  var primitive = 'string'; // it could be 'number'

  var ignore = {};
  var object = 'object';
  var noop = function noop(_, value) {
    return value;
  };
  var primitives = function primitives(value) {
    return value instanceof Primitive ? Primitive(value) : value;
  };
  var Primitives = function Primitives(_, value) {
    return _typeof(value) === primitive ? new Primitive(value) : value;
  };
  var resolver = function resolver(input, lazy, parsed, $) {
    return function (output) {
      for (var ke = keys(output), length = ke.length, y = 0; y < length; y++) {
        var k = ke[y];
        var value = output[k];
        if (value instanceof Primitive) {
          var tmp = input[+value];
          if (_typeof(tmp) === object && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[k] = ignore;
            lazy.push({
              o: output,
              k: k,
              r: tmp
            });
          } else output[k] = $.call(output, k, tmp);
        } else if (output[k] !== ignore) output[k] = $.call(output, k, value);
      }
      return output;
    };
  };
  var set = function set(known, input, value) {
    var index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  };

  /**
   * Converts a specialized flatted string into a JS value.
   * @param {string} text
   * @param {(this: any, key: string, value: any) => any} [reviver]
   * @returns {any}
   */
  var parse = function parse(text, reviver) {
    var input = $parse(text, Primitives).map(primitives);
    var $ = reviver || noop;
    var value = input[0];
    if (_typeof(value) === object && value) {
      var lazy = [];
      var revive = resolver(input, lazy, new Set(), $);
      value = revive(value);
      var i = 0;
      while (i < lazy.length) {
        // it could be a lazy.shift() but that's costly
        var _lazy$i = lazy[i++],
          o = _lazy$i.o,
          k = _lazy$i.k,
          r = _lazy$i.r;
        o[k] = $.call(o, k, revive(r));
      }
    }
    return $.call({
      '': value
    }, '', value);
  };

  /**
   * Converts a JS value into a specialized flatted string.
   * @param {any} value
   * @param {((this: any, key: string, value: any) => any) | (string | number)[] | null | undefined} [replacer]
   * @param {string | number | undefined} [space]
   * @returns {string}
   */
  var stringify = function stringify(value, replacer, space) {
    var $ = replacer && _typeof(replacer) === object ? function (k, v) {
      return k === '' || -1 < replacer.indexOf(k) ? v : void 0;
    } : replacer || noop;
    var known = new Map();
    var input = [];
    var output = [];
    var i = +set(known, input, $.call({
      '': value
    }, '', value));
    var firstRun = !i;
    while (i < input.length) {
      firstRun = true;
      output[i] = $stringify(input[i++], replace, space);
    }
    return '[' + output.join(',') + ']';
    function replace(key, value) {
      if (firstRun) {
        firstRun = !firstRun;
        return value;
      }
      var after = $.call(this, key, value);
      switch (_typeof(after)) {
        case object:
          if (after === null) return after;
        case primitive:
          return known.get(after) || set(known, input, after);
      }
      return after;
    }
  };

  /**
   * Converts a generic value into a JSON serializable object without losing recursion.
   * @param {any} value
   * @returns {any}
   */
  var toJSON = function toJSON(value) {
    return $parse(stringify(value));
  };

  /**
   * Converts a previously serialized object with recursion into a recursive one.
   * @param {any} value
   * @returns {any}
   */
  var fromJSON = function fromJSON(value) {
    return parse($stringify(value));
  };

  exports.fromJSON = fromJSON;
  exports.parse = parse;
  exports.stringify = stringify;
  exports.toJSON = toJSON;

  return exports;

})({});
