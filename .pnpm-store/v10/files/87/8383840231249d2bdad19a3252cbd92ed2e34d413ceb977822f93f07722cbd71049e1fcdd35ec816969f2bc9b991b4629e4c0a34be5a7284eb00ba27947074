"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AXObjectsMap = _interopRequireDefault(require("./AXObjectsMap"));
var _iterationDecorator = _interopRequireDefault(require("./util/iterationDecorator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var elementAXObjects = [];
var _iterator = _createForOfIteratorHelper(_AXObjectsMap.default.entries()),
  _step;
try {
  var _loop = function _loop() {
    var _step$value = _slicedToArray(_step.value, 2),
      name = _step$value[0],
      def = _step$value[1];
    var relatedConcepts = def.relatedConcepts;
    if (Array.isArray(relatedConcepts)) {
      relatedConcepts.forEach(function (relation) {
        if (relation.module === 'HTML') {
          var concept = relation.concept;
          if (concept != null) {
            var conceptStr = JSON.stringify(concept);
            var axObjects;
            var index = 0;
            for (; index < elementAXObjects.length; index++) {
              var key = elementAXObjects[index][0];
              if (JSON.stringify(key) === conceptStr) {
                axObjects = elementAXObjects[index][1];
                break;
              }
            }
            if (!Array.isArray(axObjects)) {
              axObjects = [];
            }
            var loc = axObjects.findIndex(function (item) {
              return item === name;
            });
            if (loc === -1) {
              axObjects.push(name);
            }
            if (index < elementAXObjects.length) {
              elementAXObjects.splice(index, 1, [concept, axObjects]);
            } else {
              elementAXObjects.push([concept, axObjects]);
            }
          }
        }
      });
    }
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function deepAxObjectModelRelationshipConceptAttributeCheck(a, b) {
  if (a === undefined && b !== undefined) {
    return false;
  }
  if (a !== undefined && b === undefined) {
    return false;
  }
  if (a !== undefined && b !== undefined) {
    if (a.length != b.length) {
      return false;
    }

    // dequal checks position equality
    // https://github.com/lukeed/dequal/blob/5ecd990c4c055c4658c64b4bdfc170f219604eea/src/index.js#L17-L22
    for (var i = 0; i < a.length; i++) {
      if (b[i].name !== a[i].name || b[i].value !== a[i].value) {
        return false;
      }
    }
  }
  return true;
}
var elementAXObjectMap = {
  entries: function entries() {
    return elementAXObjects;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    for (var _i = 0, _elementAXObjects = elementAXObjects; _i < _elementAXObjects.length; _i++) {
      var _elementAXObjects$_i = _slicedToArray(_elementAXObjects[_i], 2),
        key = _elementAXObjects$_i[0],
        values = _elementAXObjects$_i[1];
      fn.call(thisArg, values, key, elementAXObjects);
    }
  },
  get: function get(key) {
    var item = elementAXObjects.find(function (tuple) {
      return key.name === tuple[0].name && deepAxObjectModelRelationshipConceptAttributeCheck(key.attributes, tuple[0].attributes);
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!elementAXObjectMap.get(key);
  },
  keys: function keys() {
    return elementAXObjects.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return elementAXObjects.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(elementAXObjectMap, elementAXObjectMap.entries());
exports.default = _default;