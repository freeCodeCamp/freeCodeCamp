/**
 * @author Matthew Caruana Galizia <mattcg@gmail.com>
 * @license MIT: http://mattcg.mit-license.org/
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 */

'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var index = require('language-subtag-registry/data/json/index.json');
var registry = require('language-subtag-registry/data/json/registry.json');
var Subtag = /*#__PURE__*/function () {
  /**
   * @param {string} subtag
   * @param {string} type
   */
  function Subtag(subtag, type) {
    _classCallCheck(this, Subtag);
    var types, i, record;

    // Lowercase for consistency (case is only a formatting convention, not a standard requirement).
    subtag = subtag.toLowerCase();
    type = type.toLowerCase();
    function error(code, message) {
      var err;
      err = new Error(message);
      err.code = code;
      err.subtag = subtag;
      throw err;
    }
    types = index[subtag];
    if (!types) {
      error(Subtag.ERR_NONEXISTENT, 'Non-existent subtag \'' + subtag + '\'.');
    }
    i = types[type];
    if (!i && 0 !== i) {
      error(Subtag.ERR_NONEXISTENT, 'Non-existent subtag \'' + subtag + '\' of type \'' + type + '\'.');
    }
    record = registry[i];
    if (!record.Subtag) {
      error(Subtag.ERR_TAG, '\'' + subtag + '\' is a \'' + type + '\' tag.');
    }
    this.data = {
      subtag: subtag,
      record: record,
      type: type
    };
  }
  _createClass(Subtag, [{
    key: "type",
    value: function type() {
      return this.data.type;
    }
  }, {
    key: "descriptions",
    value: function descriptions() {
      // Every record has one or more descriptions (stored as an array).
      return this.data.record.Description;
    }
  }, {
    key: "preferred",
    value: function preferred() {
      var type,
        preferred = this.data.record['Preferred-Value'];
      if (preferred) {
        type = this.data.type;
        if (type === 'extlang') {
          type = 'language';
        }
        return new Subtag(preferred, type);
      }
      return null;
    }
  }, {
    key: "script",
    value: function script() {
      var script = this.data.record['Suppress-Script'];
      if (script) {
        return new Subtag(script, 'script');
      }
      return null;
    }
  }, {
    key: "scope",
    value: function scope() {
      return this.data.record.Scope || null;
    }
  }, {
    key: "deprecated",
    value: function deprecated() {
      return this.data.record.Deprecated || null;
    }
  }, {
    key: "added",
    value: function added() {
      return this.data.record.Added;
    }
  }, {
    key: "comments",
    value: function comments() {
      // Comments don't always occur for records, so switch to an empty array if missing.
      return this.data.record.Comments || [];
    }
  }, {
    key: "format",
    value: function format() {
      var subtag = this.data.subtag;
      switch (this.data.type) {
        case 'region':
          return subtag.toUpperCase();
        case 'script':
          return subtag[0].toUpperCase() + subtag.slice(1);
      }
      return subtag;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.format();
    }
  }]);
  return Subtag;
}();
_defineProperty(Subtag, "ERR_NONEXISTENT", 1);
_defineProperty(Subtag, "ERR_TAG", 2);
module.exports = Subtag;