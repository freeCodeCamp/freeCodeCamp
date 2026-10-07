"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterationDecorator = _interopRequireDefault(require("./util/iterationDecorator"));
var _AXObjectsMap = _interopRequireDefault(require("./AXObjectsMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var AXObjectElements = [];
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
          if (concept) {
            var index = AXObjectElements.findIndex(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                key = _ref6[0];
              return key === name;
            });
            if (index === -1) {
              AXObjectElements.push([name, []]);
              index = AXObjectElements.length - 1;
            }
            AXObjectElements[index][1].push(concept);
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
var AXObjectElementMap = {
  entries: function entries() {
    return AXObjectElements;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    for (var _i = 0, _AXObjectElements = AXObjectElements; _i < _AXObjectElements.length; _i++) {
      var _AXObjectElements$_i = _slicedToArray(_AXObjectElements[_i], 2),
        key = _AXObjectElements$_i[0],
        values = _AXObjectElements$_i[1];
      fn.call(thisArg, values, key, AXObjectElements);
    }
  },
  get: function get(key) {
    var item = AXObjectElements.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!AXObjectElementMap.get(key);
  },
  keys: function keys() {
    return AXObjectElements.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return AXObjectElements.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(AXObjectElementMap, AXObjectElementMap.entries());
exports.default = _default;