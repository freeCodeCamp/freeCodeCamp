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
var Subtag = require('./Subtag.js');
var Tag = /*#__PURE__*/function () {
  /** @param {string} tag */
  function Tag(tag) {
    _classCallCheck(this, Tag);
    var types;

    // Lowercase for consistency (case is only a formatting convention, not a standard requirement).
    tag = tag.trim().toLowerCase();
    this.data = {
      tag: tag
    };

    // Check if the input tag is grandfathered or redundant.
    types = index[tag];
    if (types && (types.grandfathered || types.redundant)) {
      this.data.record = registry[types.grandfathered || types.redundant];
    }
  }
  _createClass(Tag, [{
    key: "preferred",
    value: function preferred() {
      var preferred = this.data.record['Preferred-Value'];
      if (preferred) {
        return new Tag(preferred);
      }
      return null;
    }

    /** @return {Subtag[]} */
  }, {
    key: "subtags",
    value: function subtags() {
      var codes,
        data = this.data,
        subtags = [];

      // No subtags if the tag is grandfathered.
      if (data.record && this.type() === 'grandfathered') {
        return subtags;
      }
      codes = data.tag.split('-');
      if (!codes.length) {
        return subtags;
      }

      // Try and find the language tag.
      codes.some(function (code, i) {
        var types;

        // Singletons and anything after are unhandled.
        if (code.length < 2) {
          return true; // Stop the loop (stop processing after a singleton).
        }

        types = index[code];

        // Check for non-existent tag.
        if (!types) {
          return; // Skip to the next item.
        }

        // Check against undefined because value could be 0.
        // Language subtags may only appear at the beginning of the tag, otherwise the subtag type is indeterminate.
        if (0 === i && undefined !== types.language) {
          subtags.push(new Subtag(code, 'language'));
          return;
        }
        switch (code.length) {
          case 2:
            // Should be a region.
            if (types.region) {
              subtags.push(new Subtag(code, 'region'));

              // Error case: language subtag in the wrong place.
            } else if (types.language) {
              subtags.push(new Subtag(code, 'language'));
            }
            break;
          case 3:
            // Could be a numeric region code e.g. '001' for 'World'.
            if (types.region) {
              subtags.push(new Subtag(code, 'region'));
            } else if (types.extlang) {
              subtags.push(new Subtag(code, 'extlang'));

              // Error case: language subtag in the wrong place.
            } else if (types.language) {
              subtags.push(new Subtag(code, 'language'));
            }
            break;
          case 4:
            // Could be a numeric variant.
            if (types.variant) {
              subtags.push(new Subtag(code, 'variant'));
            } else if (types.script) {
              subtags.push(new Subtag(code, 'script'));
            }
            break;
          default:
            // Should be a variant.
            if (types.variant) {
              subtags.push(new Subtag(code, 'variant'));
            }
            break;
        }
      });
      return subtags;
    }
  }, {
    key: "language",
    value: function language() {
      return this.find('language');
    }
  }, {
    key: "region",
    value: function region() {
      return this.find('region');
    }
  }, {
    key: "script",
    value: function script() {
      return this.find('script');
    }

    /** @param {string} type */
  }, {
    key: "find",
    value: function find(type) {
      var i,
        l,
        subtag,
        subtags = this.subtags();
      for (i = 0, l = subtags.length; i < l; i++) {
        subtag = subtags[i];
        if (subtag.type() === type) {
          return subtag;
        }
      }
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.errors().length < 1;
    }
  }, {
    key: "errors",
    value: function errors() {
      var error,
        subtags,
        data = this.data,
        errors = [];
      error = function error(code, subtag) {
        var err, message;
        switch (code) {
          case Tag.ERR_DEPRECATED:
            message = 'The tag \'' + data.tag + '\' is deprecated.';

            // Note that a record that contains a 'Deprecated' field and no corresponding 'Preferred-Value' field has no replacement mapping (RFC 5646 section 3.1.6).
            if (data.record['Preferred-Value']) {
              message += ' Use \'' + data.record['Preferred-Value'] + '\' instead.';
            }
            break;
          case Tag.ERR_SUBTAG_DEPRECATED:
            message = 'The subtag \'' + subtag + '\' is deprecated.';
            break;
          case Tag.ERR_NO_LANGUAGE:
            if (!data.tag) {
              message = 'Empty tag.';
            } else {
              message = 'Missing language tag in \'' + data.tag + '\'.';
            }
            break;
          case Tag.ERR_UNKNOWN:
            message = 'Unknown code \'' + subtag + '\'';
            break;
          case Tag.ERR_TOO_LONG:
            message = 'The private-use subtag \'' + subtag + '\' is too long.';
            break;
          case Tag.ERR_EXTRA_LANGUAGE:
          case Tag.ERR_EXTRA_EXTLANG:
          case Tag.ERR_EXTRA_REGION:
          case Tag.ERR_EXTRA_SCRIPT:
            message = 'Extra ' + subtag.type() + ' subtag \'' + subtag + '\' found.';
            break;
          case Tag.ERR_DUPLICATE_VARIANT:
            message = 'Duplicate variant subtag \'' + subtag + '\' found.';
            break;
          case Tag.ERR_WRONG_ORDER:
            message = 'The subtag \'' + subtag[0] + '\' should not appear before \'' + subtag[1] + '\'.';
            break;
          case Tag.ERR_SUPPRESS_SCRIPT:
            message = 'The script subtag \'' + subtag + '\' is the same as the language suppress-script.';
            break;
        }
        err = new Error(message);
        err.code = code;
        err.tag = data.tag;
        err.subtag = subtag;
        errors.push(err);
      };

      // Check if the tag is grandfathered and if the grandfathered tag is deprecated (e.g. no-nyn).
      if (data.record) {
        if (data.record.Deprecated) {
          error(Tag.ERR_DEPRECATED);
        }

        // Only check every subtag if the tag is not explicitly listed as grandfathered or redundant.
        return errors;
      }

      // Check that all subtag codes are meaningful.
      data.tag.split('-').some(function (code, i, codes) {
        var types;

        // Ignore anything after a singleton.
        if (code.length < 2) {
          // Check that each private-use subtag is within the maximum allowed length.
          codes.slice(i).forEach(function (code) {
            if (code.length > 8) {
              error(Tag.ERR_TOO_LONG, code);
            }
          });
          return true;
        }
        types = index[code];
        if (!types) {
          error(Tag.ERR_UNKNOWN, code);
        }
        return false; // Continue to the next item.
      });

      // Check that first tag is a language tag.
      subtags = this.subtags();
      if (!subtags.length || 'language' !== subtags[0].type()) {
        error(Tag.ERR_NO_LANGUAGE);
        return errors;
      }

      // Check for more than one of some types and for deprecation.
      subtags.forEach(function (subtag, i) {
        var type = subtag.type(),
          language,
          script,
          found = this;
        if (subtag.deprecated()) {
          error(Tag.ERR_SUBTAG_DEPRECATED, subtag);
        }
        if (found[type]) {
          found[type].push(subtag);
        }
        switch (type) {
          case 'language':
            if (found.language.length > 1) {
              error(Tag.ERR_EXTRA_LANGUAGE, subtag);
            }
            break;
          case 'region':
            if (found.region.length > 1) {
              error(Tag.ERR_EXTRA_REGION, subtag);
            }
            break;
          case 'extlang':
            if (found.extlang.length > 1) {
              error(Tag.ERR_EXTRA_EXTLANG, subtag);
            }
            break;
          case 'script':
            if (found.script.length > 1) {
              error(Tag.ERR_EXTRA_SCRIPT, subtag);

              // Check if script is same as language suppress-script.
            } else {
              language = subtags[0];
              if ('language' === language.type()) {
                script = language.script();
                if (script && script.format() === subtag.format()) {
                  error(Tag.ERR_SUPPRESS_SCRIPT, subtag);
                }
              }
            }
            break;
          case 'variant':
            if (found.variant.length > 1 && found.variant.some(function (variant) {
              return variant.format() === subtag.format();
            })) {
              error(Tag.ERR_DUPLICATE_VARIANT, subtag);
            }
        }
      }, {
        language: [],
        extlang: [],
        variant: [],
        script: [],
        region: []
      });

      // Check for correct order.
      subtags.forEach(function (subtag, i, subtags) {
        var priority = this,
          next = subtags[i + 1];
        if (next && priority[subtag.type()] > priority[next.type()]) {
          error(Tag.ERR_WRONG_ORDER, [subtag, next]);
        }
      }, {
        language: 4,
        extlang: 5,
        script: 6,
        region: 7,
        variant: 8
      });
      return errors;
    }
  }, {
    key: "type",
    value: function type() {
      var record = this.data.record;
      if (record) {
        return record.Type;
      }
      return 'tag';
    }
  }, {
    key: "added",
    value: function added() {
      var record = this.data.record;
      return record && record.Added;
    }
  }, {
    key: "deprecated",
    value: function deprecated() {
      var record = this.data.record;
      return record && record.Deprecated;
    }
  }, {
    key: "descriptions",
    value: function descriptions() {
      var record = this.data.record;
      if (record && record.Description) {
        return record.Description;
      }
      return [];
    }
  }, {
    key: "format",
    value: function format() {
      var tag = this.data.tag;

      // Format according to algorithm defined in RFC 5646 section 2.1.1.
      return tag.split('-').reduce(function (p, c, i, a) {
        if (i === 0) {
          return c;
        }
        if (a[i - 1].length === 1) {
          return p + '-' + c;
        }
        switch (c.length) {
          case 2:
            return p + '-' + c.toUpperCase();
          case 4:
            return p + '-' + c[0].toUpperCase() + c.substr(1);
        }
        return p + '-' + c;
      });
    }
  }]);
  return Tag;
}();
_defineProperty(Tag, "ERR_DEPRECATED", 1);
_defineProperty(Tag, "ERR_NO_LANGUAGE", 2);
_defineProperty(Tag, "ERR_UNKNOWN", 3);
_defineProperty(Tag, "ERR_TOO_LONG", 4);
_defineProperty(Tag, "ERR_EXTRA_REGION", 5);
_defineProperty(Tag, "ERR_EXTRA_EXTLANG", 6);
_defineProperty(Tag, "ERR_EXTRA_SCRIPT", 7);
_defineProperty(Tag, "ERR_DUPLICATE_VARIANT", 8);
_defineProperty(Tag, "ERR_WRONG_ORDER", 9);
_defineProperty(Tag, "ERR_SUPPRESS_SCRIPT", 10);
_defineProperty(Tag, "ERR_SUBTAG_DEPRECATED", 11);
_defineProperty(Tag, "ERR_EXTRA_LANGUAGE", 12);
module.exports = Tag;