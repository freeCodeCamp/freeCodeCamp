"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Combobox: () => Combobox,
  Dialog: () => Dialog,
  Disclosure: () => Disclosure,
  FocusTrap: () => FocusTrap,
  Listbox: () => Listbox,
  Menu: () => Menu,
  Popover: () => Popover,
  Portal: () => Portal,
  RadioGroup: () => RadioGroup,
  Switch: () => Switch,
  Tab: () => Tab,
  Transition: () => Transition
});
module.exports = __toCommonJS(src_exports);

// ../../node_modules/@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// ../../node_modules/@tanstack/react-virtual/build/lib/index.mjs
var React = __toESM(require("react"), 1);

// ../../node_modules/@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// ../../node_modules/@tanstack/virtual-core/build/lib/utils.mjs
function memo(getDeps, fn, opts) {
  var _opts$initialDeps;
  var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
  var result;
  return function() {
    var depTime;
    if (opts.key && opts.debug != null && opts.debug())
      depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function(dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug != null && opts.debug())
      resultTime = Date.now();
    result = fn.apply(void 0, newDeps);
    if (opts.key && opts.debug != null && opts.debug()) {
      var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      var resultFpsPercentage = resultEndTime / 16;
      var pad = function pad2(str, num) {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
    }
    opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error("Unexpected undefined" + (msg ? ": " + msg : ""));
  } else {
    return value;
  }
}
var approxEqual = function approxEqual2(a, b) {
  return Math.abs(a - b) < 1;
};

// ../../node_modules/@tanstack/virtual-core/build/lib/index.mjs
var defaultKeyExtractor = function defaultKeyExtractor2(index) {
  return index;
};
var defaultRangeExtractor = function defaultRangeExtractor2(range) {
  var start = Math.max(range.startIndex - range.overscan, 0);
  var end = Math.min(range.endIndex + range.overscan, range.count - 1);
  var arr = [];
  for (var _i = start; _i <= end; _i++) {
    arr.push(_i);
  }
  return arr;
};
var observeElementRect = function observeElementRect2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2(rect) {
    var width = rect.width, height = rect.height;
    cb({
      width: Math.round(width),
      height: Math.round(height)
    });
  };
  handler(element.getBoundingClientRect());
  var observer = new ResizeObserver(function(entries) {
    var entry = entries[0];
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        handler({
          width: box.inlineSize,
          height: box.blockSize
        });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, {
    box: "border-box"
  });
  return function() {
    observer.unobserve(element);
  };
};
var observeElementOffset = function observeElementOffset2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2() {
    cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  handler();
  element.addEventListener("scroll", handler, {
    passive: true
  });
  return function() {
    element.removeEventListener("scroll", handler);
  };
};
var measureElement = function measureElement2(element, entry, instance) {
  if (entry != null && entry.borderBoxSize) {
    var box = entry.borderBoxSize[0];
    if (box) {
      var size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
      return size;
    }
  }
  return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]);
};
var elementScroll = function elementScroll2(offset, _ref2, instance) {
  var _instance$scrollEleme3, _instance$scrollEleme4;
  var _ref2$adjustments = _ref2.adjustments, adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments, behavior = _ref2.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme3 = instance.scrollElement) == null ? void 0 : _instance$scrollEleme3.scrollTo == null ? void 0 : _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
};
var Virtualizer = function Virtualizer2(_opts) {
  var _this = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = false;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = /* @__PURE__ */ new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = /* @__PURE__ */ new Map();
  this.observer = function() {
    var _ro = null;
    var get = function get2() {
      if (_ro) {
        return _ro;
      } else if (typeof ResizeObserver !== "undefined") {
        return _ro = new ResizeObserver(function(entries) {
          entries.forEach(function(entry) {
            _this._measureElement(entry.target, entry);
          });
        });
      } else {
        return null;
      }
    };
    return {
      disconnect: function disconnect() {
        var _get;
        return (_get = get()) == null ? void 0 : _get.disconnect();
      },
      observe: function observe(target) {
        var _get2;
        return (_get2 = get()) == null ? void 0 : _get2.observe(target, {
          box: "border-box"
        });
      },
      unobserve: function unobserve(target) {
        var _get3;
        return (_get3 = get()) == null ? void 0 : _get3.unobserve(target);
      }
    };
  }();
  this.range = {
    startIndex: 0,
    endIndex: 0
  };
  this.setOptions = function(opts) {
    Object.entries(opts).forEach(function(_ref3) {
      var key = _ref3[0], value = _ref3[1];
      if (typeof value === "undefined")
        delete opts[key];
    });
    _this.options = _extends2({
      debug: false,
      initialOffset: 0,
      overscan: 1,
      paddingStart: 0,
      paddingEnd: 0,
      scrollPaddingStart: 0,
      scrollPaddingEnd: 0,
      horizontal: false,
      getItemKey: defaultKeyExtractor,
      rangeExtractor: defaultRangeExtractor,
      onChange: function onChange() {
      },
      measureElement,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: "data-index",
      initialMeasurementsCache: [],
      lanes: 1
    }, opts);
  };
  this.notify = function() {
    _this.options.onChange == null ? void 0 : _this.options.onChange(_this);
  };
  this.cleanup = function() {
    _this.unsubs.filter(Boolean).forEach(function(d) {
      return d();
    });
    _this.unsubs = [];
    _this.scrollElement = null;
  };
  this._didMount = function() {
    _this.measureElementCache.forEach(_this.observer.observe);
    return function() {
      _this.observer.disconnect();
      _this.cleanup();
    };
  };
  this._willUpdate = function() {
    var scrollElement = _this.options.getScrollElement();
    if (_this.scrollElement !== scrollElement) {
      _this.cleanup();
      _this.scrollElement = scrollElement;
      _this._scrollToOffset(_this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      });
      _this.unsubs.push(_this.options.observeElementRect(_this, function(rect) {
        var prev = _this.scrollRect;
        _this.scrollRect = rect;
        if (_this.options.horizontal ? rect.width !== prev.width : rect.height !== prev.height) {
          _this.maybeNotify();
        }
      }));
      _this.unsubs.push(_this.options.observeElementOffset(_this, function(offset) {
        _this.scrollAdjustments = 0;
        if (_this.scrollOffset === offset) {
          return;
        }
        if (_this.isScrollingTimeoutId !== null) {
          clearTimeout(_this.isScrollingTimeoutId);
          _this.isScrollingTimeoutId = null;
        }
        _this.isScrolling = true;
        _this.scrollDirection = _this.scrollOffset < offset ? "forward" : "backward";
        _this.scrollOffset = offset;
        _this.maybeNotify();
        _this.isScrollingTimeoutId = setTimeout(function() {
          _this.isScrollingTimeoutId = null;
          _this.isScrolling = false;
          _this.scrollDirection = null;
          _this.maybeNotify();
        }, _this.options.scrollingDelay);
      }));
    }
  };
  this.getSize = function() {
    return _this.scrollRect[_this.options.horizontal ? "width" : "height"];
  };
  this.memoOptions = memo(function() {
    return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
  }, function(count, paddingStart, scrollMargin, getItemKey) {
    _this.pendingMeasuredCacheIndexes = [];
    return {
      count,
      paddingStart,
      scrollMargin,
      getItemKey
    };
  }, {
    key: false
  });
  this.getFurthestMeasurement = function(measurements, index) {
    var furthestMeasurementsFound = /* @__PURE__ */ new Map();
    var furthestMeasurements = /* @__PURE__ */ new Map();
    for (var m = index - 1; m >= 0; m--) {
      var measurement = measurements[m];
      if (furthestMeasurementsFound.has(measurement.lane)) {
        continue;
      }
      var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
      if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
        furthestMeasurements.set(measurement.lane, measurement);
      } else if (measurement.end < previousFurthestMeasurement.end) {
        furthestMeasurementsFound.set(measurement.lane, true);
      }
      if (furthestMeasurementsFound.size === _this.options.lanes) {
        break;
      }
    }
    return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function(a, b) {
      return a.end - b.end;
    })[0] : void 0;
  };
  this.getMeasurements = memo(function() {
    return [_this.memoOptions(), _this.itemSizeCache];
  }, function(_ref4, itemSizeCache) {
    var count = _ref4.count, paddingStart = _ref4.paddingStart, scrollMargin = _ref4.scrollMargin, getItemKey = _ref4.getItemKey;
    var min = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
    _this.pendingMeasuredCacheIndexes = [];
    var measurements = _this.measurementsCache.slice(0, min);
    for (var _i2 = min; _i2 < count; _i2++) {
      var key = getItemKey(_i2);
      var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
      var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
      var measuredSize = itemSizeCache.get(key);
      var size = typeof measuredSize === "number" ? measuredSize : _this.options.estimateSize(_i2);
      var end = start + size;
      var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
      measurements[_i2] = {
        index: _i2,
        start,
        size,
        end,
        key,
        lane
      };
    }
    _this.measurementsCache = measurements;
    return measurements;
  }, {
    key: "getMeasurements",
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.calculateRange = memo(function() {
    return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
  }, function(measurements, outerSize, scrollOffset) {
    return _this.range = calculateRange({
      measurements,
      outerSize,
      scrollOffset
    });
  }, {
    key: "calculateRange",
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.maybeNotify = memo(function() {
    var range = _this.calculateRange();
    return [range.startIndex, range.endIndex, _this.isScrolling];
  }, function() {
    _this.notify();
  }, {
    key: "maybeNotify",
    debug: function debug() {
      return _this.options.debug;
    },
    initialDeps: [this.range.startIndex, this.range.endIndex, this.isScrolling]
  });
  this.getIndexes = memo(function() {
    return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
  }, function(rangeExtractor, range, overscan, count) {
    return rangeExtractor(_extends2({}, range, {
      overscan,
      count
    }));
  }, {
    key: "getIndexes",
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.indexFromElement = function(node) {
    var attributeName = _this.options.indexAttribute;
    var indexStr = node.getAttribute(attributeName);
    if (!indexStr) {
      console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
      return -1;
    }
    return parseInt(indexStr, 10);
  };
  this._measureElement = function(node, entry) {
    var item = _this.measurementsCache[_this.indexFromElement(node)];
    if (!item) {
      _this.measureElementCache.forEach(function(cached, key) {
        if (cached === node) {
          _this.observer.unobserve(node);
          _this.measureElementCache["delete"](key);
        }
      });
      return;
    }
    var prevNode = _this.measureElementCache.get(item.key);
    if (!node.isConnected) {
      if (prevNode) {
        _this.observer.unobserve(prevNode);
        _this.measureElementCache["delete"](item.key);
      }
      return;
    }
    if (prevNode !== node) {
      if (prevNode) {
        _this.observer.unobserve(prevNode);
      }
      _this.observer.observe(node);
      _this.measureElementCache.set(item.key, node);
    }
    var measuredItemSize = _this.options.measureElement(node, entry, _this);
    _this.resizeItem(item, measuredItemSize);
  };
  this.resizeItem = function(item, size) {
    var _this$itemSizeCache$g;
    var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
    var delta = size - itemSize;
    if (delta !== 0) {
      if (item.start < _this.scrollOffset) {
        if (_this.options.debug) {
          console.info("correction", delta);
        }
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: _this.scrollAdjustments += delta,
          behavior: void 0
        });
      }
      _this.pendingMeasuredCacheIndexes.push(item.index);
      _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, size));
      _this.notify();
    }
  };
  this.measureElement = function(node) {
    if (!node) {
      return;
    }
    _this._measureElement(node, void 0);
  };
  this.getVirtualItems = memo(function() {
    return [_this.getIndexes(), _this.getMeasurements()];
  }, function(indexes, measurements) {
    var virtualItems = [];
    for (var k = 0, len = indexes.length; k < len; k++) {
      var _i3 = indexes[k];
      var measurement = measurements[_i3];
      virtualItems.push(measurement);
    }
    return virtualItems;
  }, {
    key: "getIndexes",
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getVirtualItemForOffset = function(offset) {
    var measurements = _this.getMeasurements();
    return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function(index) {
      return notUndefined(measurements[index]).start;
    }, offset)]);
  };
  this.getOffsetForAlignment = function(toOffset, align) {
    var size = _this.getSize();
    if (align === "auto") {
      if (toOffset <= _this.scrollOffset) {
        align = "start";
      } else if (toOffset >= _this.scrollOffset + size) {
        align = "end";
      } else {
        align = "start";
      }
    }
    if (align === "start") {
      toOffset = toOffset;
    } else if (align === "end") {
      toOffset = toOffset - size;
    } else if (align === "center") {
      toOffset = toOffset - size / 2;
    }
    var scrollSizeProp = _this.options.horizontal ? "scrollWidth" : "scrollHeight";
    var scrollSize = _this.scrollElement ? "document" in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
    var maxOffset = scrollSize - _this.getSize();
    return Math.max(Math.min(maxOffset, toOffset), 0);
  };
  this.getOffsetForIndex = function(index, align) {
    if (align === void 0) {
      align = "auto";
    }
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    var measurement = notUndefined(_this.getMeasurements()[index]);
    if (align === "auto") {
      if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
        align = "end";
      } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
        align = "start";
      } else {
        return [_this.scrollOffset, align];
      }
    }
    var toOffset = align === "end" ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
    return [_this.getOffsetForAlignment(toOffset, align), align];
  };
  this.isDynamicMode = function() {
    return _this.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function() {
    if (_this.scrollToIndexTimeoutId !== null) {
      clearTimeout(_this.scrollToIndexTimeoutId);
      _this.scrollToIndexTimeoutId = null;
    }
  };
  this.scrollToOffset = function(toOffset, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "start" : _ref5$align, behavior = _ref5.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
      adjustments: void 0,
      behavior
    });
  };
  this.scrollToIndex = function(index, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2, _ref6$align = _ref6.align, initialAlign = _ref6$align === void 0 ? "auto" : _ref6$align, behavior = _ref6.behavior;
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign), toOffset = _this$getOffsetForInd[0], align = _this$getOffsetForInd[1];
    _this._scrollToOffset(toOffset, {
      adjustments: void 0,
      behavior
    });
    if (behavior !== "smooth" && _this.isDynamicMode()) {
      _this.scrollToIndexTimeoutId = setTimeout(function() {
        _this.scrollToIndexTimeoutId = null;
        var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
        if (elementInDOM) {
          var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align), _toOffset = _this$getOffsetForInd2[0];
          if (!approxEqual(_toOffset, _this.scrollOffset)) {
            _this.scrollToIndex(index, {
              align,
              behavior
            });
          }
        } else {
          _this.scrollToIndex(index, {
            align,
            behavior
          });
        }
      });
    }
  };
  this.scrollBy = function(delta, _temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3, behavior = _ref7.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.scrollOffset + delta, {
      adjustments: void 0,
      behavior
    });
  };
  this.getTotalSize = function() {
    var _this$getMeasurements;
    return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
  };
  this._scrollToOffset = function(offset, _ref8) {
    var adjustments = _ref8.adjustments, behavior = _ref8.behavior;
    _this.options.scrollToFn(offset, {
      behavior,
      adjustments
    }, _this);
  };
  this.measure = function() {
    _this.itemSizeCache = /* @__PURE__ */ new Map();
    _this.notify();
  };
  this.setOptions(_opts);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function(item) {
    _this.itemSizeCache.set(item.key, item.size);
  });
  this.maybeNotify();
};
var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
  while (low <= high) {
    var middle = (low + high) / 2 | 0;
    var currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange(_ref9) {
  var measurements = _ref9.measurements, outerSize = _ref9.outerSize, scrollOffset = _ref9.scrollOffset;
  var count = measurements.length - 1;
  var getOffset = function getOffset2(index) {
    return measurements[index].start;
  };
  var startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  var endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return {
    startIndex,
    endIndex
  };
}

// ../../node_modules/@tanstack/react-virtual/build/lib/index.mjs
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  var rerender = React.useReducer(function() {
    return {};
  }, {})[1];
  var resolvedOptions = _extends({}, options, {
    onChange: function onChange(instance2) {
      rerender();
      options.onChange == null ? void 0 : options.onChange(instance2);
    }
  });
  var _React$useState = React.useState(function() {
    return new Virtualizer(resolvedOptions);
  }), instance = _React$useState[0];
  instance.setOptions(resolvedOptions);
  React.useEffect(function() {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(function() {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase(_extends({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll
  }, options));
}

// src/components/combobox/combobox.tsx
var import_react19 = __toESM(require("react"), 1);

// src/hooks/use-computed.ts
var import_react3 = require("react");

// src/hooks/use-iso-morphic-effect.ts
var import_react = require("react");

// src/utils/env.ts
var Env = class {
  constructor() {
    __publicField(this, "current", this.detect());
    __publicField(this, "handoffState", "pending");
    __publicField(this, "currentId", 0);
  }
  set(env2) {
    if (this.current === env2)
      return;
    this.handoffState = "pending";
    this.currentId = 0;
    this.current = env2;
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return "server";
    }
    return "client";
  }
  handoff() {
    if (this.handoffState === "pending") {
      this.handoffState = "complete";
    }
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var env = new Env();

// src/hooks/use-iso-morphic-effect.ts
var useIsoMorphicEffect = (effect, deps) => {
  if (env.isServer) {
    (0, import_react.useEffect)(effect, deps);
  } else {
    (0, import_react.useLayoutEffect)(effect, deps);
  }
};

// src/hooks/use-latest-value.ts
var import_react2 = require("react");
function useLatestValue(value) {
  let cache = (0, import_react2.useRef)(value);
  useIsoMorphicEffect(() => {
    cache.current = value;
  }, [value]);
  return cache;
}

// src/hooks/use-computed.ts
function useComputed(cb, dependencies) {
  let [value, setValue] = (0, import_react3.useState)(cb);
  let cbRef = useLatestValue(cb);
  useIsoMorphicEffect(() => setValue(cbRef.current), [cbRef, setValue, ...dependencies]);
  return value;
}

// src/hooks/use-controllable.ts
var import_react5 = require("react");

// src/hooks/use-event.ts
var import_react4 = __toESM(require("react"), 1);
var useEvent = (
  // TODO: Add React.useEvent ?? once the useEvent hook is available
  function useEvent2(cb) {
    let cache = useLatestValue(cb);
    return import_react4.default.useCallback((...args) => cache.current(...args), [cache]);
  }
);

// src/hooks/use-controllable.ts
function useControllable(controlledValue, onChange, defaultValue) {
  let [internalValue, setInternalValue] = (0, import_react5.useState)(defaultValue);
  let isControlled = controlledValue !== void 0;
  let wasControlled = (0, import_react5.useRef)(isControlled);
  let didWarnOnUncontrolledToControlled = (0, import_react5.useRef)(false);
  let didWarnOnControlledToUncontrolled = (0, import_react5.useRef)(false);
  if (isControlled && !wasControlled.current && !didWarnOnUncontrolledToControlled.current) {
    didWarnOnUncontrolledToControlled.current = true;
    wasControlled.current = isControlled;
    console.error(
      "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
    );
  } else if (!isControlled && wasControlled.current && !didWarnOnControlledToUncontrolled.current) {
    didWarnOnControlledToUncontrolled.current = true;
    wasControlled.current = isControlled;
    console.error(
      "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
    );
  }
  return [
    isControlled ? controlledValue : internalValue,
    useEvent((value) => {
      if (isControlled) {
        return onChange == null ? void 0 : onChange(value);
      } else {
        setInternalValue(value);
        return onChange == null ? void 0 : onChange(value);
      }
    })
  ];
}

// src/hooks/use-disposables.ts
var import_react6 = require("react");

// src/utils/micro-task.ts
function microTask(cb) {
  if (typeof queueMicrotask === "function") {
    queueMicrotask(cb);
  } else {
    Promise.resolve().then(cb).catch(
      (e) => setTimeout(() => {
        throw e;
      })
    );
  }
}

// src/utils/disposables.ts
function disposables() {
  let _disposables = [];
  let api = {
    addEventListener(element, name, listener, options) {
      element.addEventListener(name, listener, options);
      return api.add(() => element.removeEventListener(name, listener, options));
    },
    requestAnimationFrame(...args) {
      let raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },
    nextFrame(...args) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },
    setTimeout(...args) {
      let timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },
    microTask(...args) {
      let task = { current: true };
      microTask(() => {
        if (task.current) {
          args[0]();
        }
      });
      return api.add(() => {
        task.current = false;
      });
    },
    style(node, property, value) {
      let previous = node.style.getPropertyValue(property);
      Object.assign(node.style, { [property]: value });
      return this.add(() => {
        Object.assign(node.style, { [property]: previous });
      });
    },
    group(cb) {
      let d = disposables();
      cb(d);
      return this.add(() => d.dispose());
    },
    add(cb) {
      _disposables.push(cb);
      return () => {
        let idx = _disposables.indexOf(cb);
        if (idx >= 0) {
          for (let dispose of _disposables.splice(idx, 1)) {
            dispose();
          }
        }
      };
    },
    dispose() {
      for (let dispose of _disposables.splice(0)) {
        dispose();
      }
    }
  };
  return api;
}

// src/hooks/use-disposables.ts
function useDisposables() {
  let [d] = (0, import_react6.useState)(disposables);
  (0, import_react6.useEffect)(() => () => d.dispose(), [d]);
  return d;
}

// src/hooks/use-id.ts
var import_react7 = __toESM(require("react"), 1);

// src/hooks/use-server-handoff-complete.ts
var React3 = __toESM(require("react"), 1);
function useIsHydratingInReact18() {
  let isServer = typeof document === "undefined";
  if (!("useSyncExternalStore" in React3)) {
    return false;
  }
  const useSyncExternalStore4 = ((r) => r.useSyncExternalStore)(React3);
  let result = useSyncExternalStore4(
    () => () => {
    },
    () => false,
    () => isServer ? false : true
  );
  return result;
}
function useServerHandoffComplete() {
  let isHydrating = useIsHydratingInReact18();
  let [complete, setComplete] = React3.useState(env.isHandoffComplete);
  if (complete && env.isHandoffComplete === false) {
    setComplete(false);
  }
  React3.useEffect(() => {
    if (complete === true)
      return;
    setComplete(true);
  }, [complete]);
  React3.useEffect(() => env.handoff(), []);
  if (isHydrating) {
    return false;
  }
  return complete;
}

// src/hooks/use-id.ts
var _a;
var useId = (
  // Prefer React's `useId` if it's available.
  // @ts-expect-error - `useId` doesn't exist in React < 18.
  (_a = import_react7.default.useId) != null ? _a : function useId2() {
    let ready = useServerHandoffComplete();
    let [id, setId] = import_react7.default.useState(ready ? () => env.nextId() : null);
    useIsoMorphicEffect(() => {
      if (id === null)
        setId(env.nextId());
    }, [id]);
    return id != null ? "" + id : void 0;
  }
);

// src/hooks/use-outside-click.ts
var import_react10 = require("react");

// src/utils/match.ts
function match(value, lookup, ...args) {
  if (value in lookup) {
    let returnValue = lookup[value];
    return typeof returnValue === "function" ? returnValue(...args) : returnValue;
  }
  let error = new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      lookup
    ).map((key) => `"${key}"`).join(", ")}.`
  );
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// src/utils/owner.ts
function getOwnerDocument(element) {
  if (env.isServer)
    return null;
  if (element instanceof Node)
    return element.ownerDocument;
  if (element == null ? void 0 : element.hasOwnProperty("current")) {
    if (element.current instanceof Node)
      return element.current.ownerDocument;
  }
  return document;
}

// src/utils/focus-management.ts
var focusableSelector = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map(
  false ? (
    // TODO: Remove this once JSDOM fixes the issue where an element that is
    // "hidden" can be the document.activeElement, because this is not possible
    // in real browsers.
    (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])`
  ) : (selector) => `${selector}:not([tabindex='-1'])`
).join(",");
function getFocusableElements(container = document.body) {
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector)).sort(
    // We want to move `tabIndex={0}` to the end of the list, this is what the browser does as well.
    (a, z) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (z.tabIndex || Number.MAX_SAFE_INTEGER))
  );
}
function isFocusableElement(element, mode = 0 /* Strict */) {
  var _a3;
  if (element === ((_a3 = getOwnerDocument(element)) == null ? void 0 : _a3.body))
    return false;
  return match(mode, {
    [0 /* Strict */]() {
      return element.matches(focusableSelector);
    },
    [1 /* Loose */]() {
      let next = element;
      while (next !== null) {
        if (next.matches(focusableSelector))
          return true;
        next = next.parentElement;
      }
      return false;
    }
  });
}
function restoreFocusIfNecessary(element) {
  let ownerDocument = getOwnerDocument(element);
  disposables().nextFrame(() => {
    if (ownerDocument && !isFocusableElement(ownerDocument.activeElement, 0 /* Strict */)) {
      focusElement(element);
    }
  });
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      document.documentElement.dataset.headlessuiFocusVisible = "";
    },
    true
  );
  document.addEventListener(
    "click",
    (event) => {
      if (event.detail === 1 /* Mouse */) {
        delete document.documentElement.dataset.headlessuiFocusVisible;
      } else if (event.detail === 0 /* Keyboard */) {
        document.documentElement.dataset.headlessuiFocusVisible = "";
      }
    },
    true
  );
}
function focusElement(element) {
  element == null ? void 0 : element.focus({ preventScroll: true });
}
var selectableSelector = ["textarea", "input"].join(",");
function isSelectableElement(element) {
  var _a3, _b;
  return (_b = (_a3 = element == null ? void 0 : element.matches) == null ? void 0 : _a3.call(element, selectableSelector)) != null ? _b : false;
}
function sortByDomNode(nodes, resolveKey = (i) => i) {
  return nodes.slice().sort((aItem, zItem) => {
    let a = resolveKey(aItem);
    let z = resolveKey(zItem);
    if (a === null || z === null)
      return 0;
    let position = a.compareDocumentPosition(z);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING)
      return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING)
      return 1;
    return 0;
  });
}
function focusFrom(current, focus) {
  return focusIn(getFocusableElements(), focus, { relativeTo: current });
}
function focusIn(container, focus, {
  sorted = true,
  relativeTo = null,
  skipElements = []
} = {}) {
  let ownerDocument = Array.isArray(container) ? container.length > 0 ? container[0].ownerDocument : document : container.ownerDocument;
  let elements = Array.isArray(container) ? sorted ? sortByDomNode(container) : container : getFocusableElements(container);
  if (skipElements.length > 0 && elements.length > 1) {
    elements = elements.filter((x) => !skipElements.includes(x));
  }
  relativeTo = relativeTo != null ? relativeTo : ownerDocument.activeElement;
  let direction = (() => {
    if (focus & (1 /* First */ | 4 /* Next */))
      return 1 /* Next */;
    if (focus & (2 /* Previous */ | 8 /* Last */))
      return -1 /* Previous */;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let startIndex = (() => {
    if (focus & 1 /* First */)
      return 0;
    if (focus & 2 /* Previous */)
      return Math.max(0, elements.indexOf(relativeTo)) - 1;
    if (focus & 4 /* Next */)
      return Math.max(0, elements.indexOf(relativeTo)) + 1;
    if (focus & 8 /* Last */)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let focusOptions = focus & 32 /* NoScroll */ ? { preventScroll: true } : {};
  let offset = 0;
  let total = elements.length;
  let next = void 0;
  do {
    if (offset >= total || offset + total <= 0)
      return 0 /* Error */;
    let nextIdx = startIndex + offset;
    if (focus & 16 /* WrapAround */) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return 3 /* Underflow */;
      if (nextIdx >= total)
        return 1 /* Overflow */;
    }
    next = elements[nextIdx];
    next == null ? void 0 : next.focus(focusOptions);
    offset += direction;
  } while (next !== ownerDocument.activeElement);
  if (focus & (4 /* Next */ | 2 /* Previous */) && isSelectableElement(next)) {
    next.select();
  }
  return 2 /* Success */;
}

// src/utils/platform.ts
function isIOS() {
  return (
    // Check if it is an iPhone
    /iPhone/gi.test(window.navigator.platform) || // Check if it is an iPad. iPad reports itself as "MacIntel", but we can check if it is a touch
    // screen. Let's hope that Apple doesn't release a touch screen Mac (or maybe this would then
    // work as expected 🤔).
    /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
  );
}
function isAndroid() {
  return /Android/gi.test(window.navigator.userAgent);
}
function isMobile() {
  return isIOS() || isAndroid();
}

// src/hooks/use-document-event.ts
var import_react8 = require("react");
function useDocumentEvent(type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react8.useEffect)(() => {
    function handler(event) {
      listenerRef.current(event);
    }
    document.addEventListener(type, handler, options);
    return () => document.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/hooks/use-window-event.ts
var import_react9 = require("react");
function useWindowEvent(type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react9.useEffect)(() => {
    function handler(event) {
      listenerRef.current(event);
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/hooks/use-outside-click.ts
function useOutsideClick(containers, cb, enabled = true) {
  let enabledRef = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(
    false ? () => {
      enabledRef.current = enabled;
    } : () => {
      requestAnimationFrame(() => {
        enabledRef.current = enabled;
      });
    },
    [enabled]
  );
  function handleOutsideClick(event, resolveTarget) {
    if (!enabledRef.current)
      return;
    if (event.defaultPrevented)
      return;
    let target = resolveTarget(event);
    if (target === null) {
      return;
    }
    if (!target.getRootNode().contains(target))
      return;
    if (!target.isConnected)
      return;
    let _containers = function resolve(containers2) {
      if (typeof containers2 === "function") {
        return resolve(containers2());
      }
      if (Array.isArray(containers2)) {
        return containers2;
      }
      if (containers2 instanceof Set) {
        return containers2;
      }
      return [containers2];
    }(containers);
    for (let container of _containers) {
      if (container === null)
        continue;
      let domNode = container instanceof HTMLElement ? container : container.current;
      if (domNode == null ? void 0 : domNode.contains(target)) {
        return;
      }
      if (event.composed && event.composedPath().includes(domNode)) {
        return;
      }
    }
    if (
      // This check alllows us to know whether or not we clicked on a "focusable" element like a
      // button or an input. This is a backwards compatibility check so that you can open a <Menu
      // /> and click on another <Menu /> which should close Menu A and open Menu B. We might
      // revisit that so that you will require 2 clicks instead.
      !isFocusableElement(target, 1 /* Loose */) && // This could be improved, but the `Combobox.Button` adds tabIndex={-1} to make it
      // unfocusable via the keyboard so that tabbing to the next item from the input doesn't
      // first go to the button.
      target.tabIndex !== -1
    ) {
      event.preventDefault();
    }
    return cb(event, target);
  }
  let initialClickTarget = (0, import_react10.useRef)(null);
  useDocumentEvent(
    "pointerdown",
    (event) => {
      var _a3, _b;
      if (enabledRef.current) {
        initialClickTarget.current = ((_b = (_a3 = event.composedPath) == null ? void 0 : _a3.call(event)) == null ? void 0 : _b[0]) || event.target;
      }
    },
    true
  );
  useDocumentEvent(
    "mousedown",
    (event) => {
      var _a3, _b;
      if (enabledRef.current) {
        initialClickTarget.current = ((_b = (_a3 = event.composedPath) == null ? void 0 : _a3.call(event)) == null ? void 0 : _b[0]) || event.target;
      }
    },
    true
  );
  useDocumentEvent(
    "click",
    (event) => {
      if (isMobile()) {
        return;
      }
      if (!initialClickTarget.current) {
        return;
      }
      handleOutsideClick(event, () => {
        return initialClickTarget.current;
      });
      initialClickTarget.current = null;
    },
    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  );
  useDocumentEvent(
    "touchend",
    (event) => {
      return handleOutsideClick(event, () => {
        if (event.target instanceof HTMLElement) {
          return event.target;
        }
        return null;
      });
    },
    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  );
  useWindowEvent(
    "blur",
    (event) => {
      return handleOutsideClick(event, () => {
        return window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null;
      });
    },
    true
  );
}

// src/hooks/use-owner.ts
var import_react11 = require("react");
function useOwnerDocument(...args) {
  return (0, import_react11.useMemo)(() => getOwnerDocument(...args), [...args]);
}

// src/hooks/use-resolve-button-type.ts
var import_react12 = require("react");
function resolveType(props) {
  var _a3;
  if (props.type)
    return props.type;
  let tag = (_a3 = props.as) != null ? _a3 : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  let [type, setType] = (0, import_react12.useState)(() => resolveType(props));
  useIsoMorphicEffect(() => {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(() => {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// src/hooks/use-sync-refs.ts
var import_react13 = require("react");
var Optional = Symbol();
function optionalRef(cb, isOptional = true) {
  return Object.assign(cb, { [Optional]: isOptional });
}
function useSyncRefs(...refs) {
  let cache = (0, import_react13.useRef)(refs);
  (0, import_react13.useEffect)(() => {
    cache.current = refs;
  }, [refs]);
  let syncRefs = useEvent((value) => {
    for (let ref of cache.current) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  });
  return refs.every(
    (ref) => ref == null || // @ts-expect-error
    (ref == null ? void 0 : ref[Optional])
  ) ? void 0 : syncRefs;
}

// src/hooks/use-tracked-pointer.ts
var import_react14 = require("react");
function eventToPosition(evt) {
  return [evt.screenX, evt.screenY];
}
function useTrackedPointer() {
  let lastPos = (0, import_react14.useRef)([-1, -1]);
  return {
    wasMoved(evt) {
      if (false) {
        return true;
      }
      let newPos = eventToPosition(evt);
      if (lastPos.current[0] === newPos[0] && lastPos.current[1] === newPos[1]) {
        return false;
      }
      lastPos.current = newPos;
      return true;
    },
    update(evt) {
      lastPos.current = eventToPosition(evt);
    }
  };
}

// src/hooks/use-tree-walker.ts
var import_react15 = require("react");
function useTreeWalker({
  container,
  accept,
  walk,
  enabled = true
}) {
  let acceptRef = (0, import_react15.useRef)(accept);
  let walkRef = (0, import_react15.useRef)(walk);
  (0, import_react15.useEffect)(() => {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  useIsoMorphicEffect(() => {
    if (!container)
      return;
    if (!enabled)
      return;
    let ownerDocument = getOwnerDocument(container);
    if (!ownerDocument)
      return;
    let accept2 = acceptRef.current;
    let walk2 = walkRef.current;
    let acceptNode = Object.assign((node) => accept2(node), { acceptNode: accept2 });
    let walker = ownerDocument.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      acceptNode,
      // @ts-expect-error This `false` is a simple small fix for older browsers
      false
    );
    while (walker.nextNode())
      walk2(walker.currentNode);
  }, [container, enabled, acceptRef, walkRef]);
}

// src/hooks/use-watch.ts
var import_react16 = require("react");
function useWatch(cb, dependencies) {
  let track = (0, import_react16.useRef)([]);
  let action = useEvent(cb);
  (0, import_react16.useEffect)(() => {
    let oldValues = [...track.current];
    for (let [idx, value] of dependencies.entries()) {
      if (track.current[idx] !== value) {
        let returnValue = action(dependencies, oldValues);
        track.current = dependencies;
        return returnValue;
      }
    }
  }, [action, ...dependencies]);
}

// src/utils/render.ts
var import_react17 = require("react");

// src/utils/class-names.ts
function classNames(...classes) {
  return Array.from(
    new Set(
      classes.flatMap((value) => {
        if (typeof value === "string") {
          return value.split(" ");
        }
        return [];
      })
    )
  ).filter(Boolean).join(" ");
}

// src/utils/render.ts
function render({
  ourProps,
  theirProps,
  slot,
  defaultTag,
  features,
  visible = true,
  name,
  mergeRefs
}) {
  mergeRefs = mergeRefs != null ? mergeRefs : defaultMergeRefs;
  let props = mergeProps(theirProps, ourProps);
  if (visible)
    return _render(props, slot, defaultTag, name, mergeRefs);
  let featureFlags = features != null ? features : 0 /* None */;
  if (featureFlags & 2 /* Static */) {
    let { static: isStatic = false, ...rest } = props;
    if (isStatic)
      return _render(rest, slot, defaultTag, name, mergeRefs);
  }
  if (featureFlags & 1 /* RenderStrategy */) {
    let { unmount = true, ...rest } = props;
    let strategy = unmount ? 0 /* Unmount */ : 1 /* Hidden */;
    return match(strategy, {
      [0 /* Unmount */]() {
        return null;
      },
      [1 /* Hidden */]() {
        return _render(
          { ...rest, ...{ hidden: true, style: { display: "none" } } },
          slot,
          defaultTag,
          name,
          mergeRefs
        );
      }
    });
  }
  return _render(props, slot, defaultTag, name, mergeRefs);
}
function _render(props, slot = {}, tag, name, mergeRefs) {
  let {
    as: Component = tag,
    children,
    refName = "ref",
    ...rest
  } = omit(props, ["unmount", "static"]);
  let refRelatedProps = props.ref !== void 0 ? { [refName]: props.ref } : {};
  let resolvedChildren = typeof children === "function" ? children(slot) : children;
  if ("className" in rest && rest.className && typeof rest.className === "function") {
    rest.className = rest.className(slot);
  }
  let dataAttributes = {};
  if (slot) {
    let exposeState = false;
    let states = [];
    for (let [k, v] of Object.entries(slot)) {
      if (typeof v === "boolean") {
        exposeState = true;
      }
      if (v === true) {
        states.push(k);
      }
    }
    if (exposeState)
      dataAttributes[`data-headlessui-state`] = states.join(" ");
  }
  if (Component === import_react17.Fragment) {
    if (Object.keys(compact(rest)).length > 0) {
      if (!(0, import_react17.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(
          [
            'Passing props on "Fragment"!',
            "",
            `The current component <${name} /> is rendering a "Fragment".`,
            `However we need to passthrough the following props:`,
            Object.keys(rest).map((line) => `  - ${line}`).join("\n"),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element."
            ].map((line) => `  - ${line}`).join("\n")
          ].join("\n")
        );
      }
      let childProps = resolvedChildren.props;
      let newClassName = typeof (childProps == null ? void 0 : childProps.className) === "function" ? (...args) => classNames(childProps == null ? void 0 : childProps.className(...args), rest.className) : classNames(childProps == null ? void 0 : childProps.className, rest.className);
      let classNameProps = newClassName ? { className: newClassName } : {};
      return (0, import_react17.cloneElement)(
        resolvedChildren,
        Object.assign(
          {},
          // Filter out undefined values so that they don't override the existing values
          mergeProps(resolvedChildren.props, compact(omit(rest, ["ref"]))),
          dataAttributes,
          refRelatedProps,
          { ref: mergeRefs(resolvedChildren.ref, refRelatedProps.ref) },
          classNameProps
        )
      );
    }
  }
  return (0, import_react17.createElement)(
    Component,
    Object.assign(
      {},
      omit(rest, ["ref"]),
      Component !== import_react17.Fragment && refRelatedProps,
      Component !== import_react17.Fragment && dataAttributes
    ),
    resolvedChildren
  );
}
function useMergeRefsFn() {
  let currentRefs = (0, import_react17.useRef)([]);
  let mergedRef = (0, import_react17.useCallback)((value) => {
    for (let ref of currentRefs.current) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, []);
  return (...refs) => {
    if (refs.every((ref) => ref == null)) {
      return void 0;
    }
    currentRefs.current = refs;
    return mergedRef;
  };
}
function defaultMergeRefs(...refs) {
  return refs.every((ref) => ref == null) ? void 0 : (value) => {
    for (let ref of refs) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  };
}
function mergeProps(...listOfProps) {
  var _a3;
  if (listOfProps.length === 0)
    return {};
  if (listOfProps.length === 1)
    return listOfProps[0];
  let target = {};
  let eventHandlers = {};
  for (let props of listOfProps) {
    for (let prop in props) {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        (_a3 = eventHandlers[prop]) != null ? _a3 : eventHandlers[prop] = [];
        eventHandlers[prop].push(props[prop]);
      } else {
        target[prop] = props[prop];
      }
    }
  }
  if (target.disabled || target["aria-disabled"]) {
    return Object.assign(
      target,
      // Set all event listeners that we collected to `undefined`. This is
      // important because of the `cloneElement` from above, which merges the
      // existing and new props, they don't just override therefore we have to
      // explicitly nullify them.
      Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [eventName, void 0]))
    );
  }
  for (let eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](event, ...args) {
        let handlers = eventHandlers[eventName];
        for (let handler of handlers) {
          if ((event instanceof Event || (event == null ? void 0 : event.nativeEvent) instanceof Event) && event.defaultPrevented) {
            return;
          }
          handler(event, ...args);
        }
      }
    });
  }
  return target;
}
function forwardRefWithAs(component) {
  var _a3;
  return Object.assign((0, import_react17.forwardRef)(component), {
    displayName: (_a3 = component.displayName) != null ? _a3 : component.name
  });
}
function compact(object) {
  let clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit = []) {
  let clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// src/internal/hidden.tsx
var DEFAULT_VISUALLY_HIDDEN_TAG = "div";
function VisuallyHidden(props, ref) {
  var _a3;
  let { features = 1 /* None */, ...theirProps } = props;
  let ourProps = {
    ref,
    "aria-hidden": (features & 2 /* Focusable */) === 2 /* Focusable */ ? true : (_a3 = theirProps["aria-hidden"]) != null ? _a3 : void 0,
    hidden: (features & 4 /* Hidden */) === 4 /* Hidden */ ? true : void 0,
    style: {
      position: "fixed",
      top: 1,
      left: 1,
      width: 1,
      height: 0,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
      ...(features & 4 /* Hidden */) === 4 /* Hidden */ && !((features & 2 /* Focusable */) === 2 /* Focusable */) && { display: "none" }
    }
  };
  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: "Hidden"
  });
}
var Hidden = forwardRefWithAs(VisuallyHidden);

// src/internal/open-closed.tsx
var import_react18 = __toESM(require("react"), 1);
var Context = (0, import_react18.createContext)(null);
Context.displayName = "OpenClosedContext";
function useOpenClosed() {
  return (0, import_react18.useContext)(Context);
}
function OpenClosedProvider({ value, children }) {
  return /* @__PURE__ */ import_react18.default.createElement(Context.Provider, { value }, children);
}

// src/utils/document-ready.ts
function onDocumentReady(cb) {
  function check() {
    if (document.readyState === "loading")
      return;
    cb();
    document.removeEventListener("DOMContentLoaded", check);
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", check);
    check();
  }
}

// src/utils/active-element-history.ts
var history = [];
onDocumentReady(() => {
  function handle(e) {
    if (!(e.target instanceof HTMLElement))
      return;
    if (e.target === document.body)
      return;
    if (history[0] === e.target)
      return;
    history.unshift(e.target);
    history = history.filter((x) => x != null && x.isConnected);
    history.splice(10);
  }
  window.addEventListener("click", handle, { capture: true });
  window.addEventListener("mousedown", handle, { capture: true });
  window.addEventListener("focus", handle, { capture: true });
  document.body.addEventListener("click", handle, { capture: true });
  document.body.addEventListener("mousedown", handle, { capture: true });
  document.body.addEventListener("focus", handle, { capture: true });
});

// src/utils/bugs.ts
function isDisabledReactIssue7711(element) {
  let parent = element.parentElement;
  let legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  let isParentDisabled = (parent == null ? void 0 : parent.getAttribute("disabled")) === "";
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  let previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// src/utils/calculate-active-index.ts
function assertNever(x) {
  throw new Error("Unexpected object: " + x);
}
function calculateActiveIndex(action, resolvers) {
  let items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  let currentActiveIndex = resolvers.resolveActiveIndex();
  let activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  switch (action.focus) {
    case 0 /* First */: {
      for (let i = 0; i < items.length; ++i) {
        if (!resolvers.resolveDisabled(items[i], i, items)) {
          return i;
        }
      }
      return currentActiveIndex;
    }
    case 1 /* Previous */: {
      for (let i = activeIndex - 1; i >= 0; --i) {
        if (!resolvers.resolveDisabled(items[i], i, items)) {
          return i;
        }
      }
      return currentActiveIndex;
    }
    case 2 /* Next */: {
      for (let i = activeIndex + 1; i < items.length; ++i) {
        if (!resolvers.resolveDisabled(items[i], i, items)) {
          return i;
        }
      }
      return currentActiveIndex;
    }
    case 3 /* Last */: {
      for (let i = items.length - 1; i >= 0; --i) {
        if (!resolvers.resolveDisabled(items[i], i, items)) {
          return i;
        }
      }
      return currentActiveIndex;
    }
    case 4 /* Specific */: {
      for (let i = 0; i < items.length; ++i) {
        if (resolvers.resolveId(items[i], i, items) === action.id) {
          return i;
        }
      }
      return currentActiveIndex;
    }
    case 5 /* Nothing */:
      return null;
    default:
      assertNever(action);
  }
}

// src/utils/form.ts
function objectToFormEntries(source = {}, parentKey = null, entries = []) {
  for (let [key, value] of Object.entries(source)) {
    append(entries, composeKey(parentKey, key), value);
  }
  return entries;
}
function composeKey(parent, key) {
  return parent ? parent + "[" + key + "]" : key;
}
function append(entries, key, value) {
  if (Array.isArray(value)) {
    for (let [subkey, subvalue] of value.entries()) {
      append(entries, composeKey(key, subkey.toString()), subvalue);
    }
  } else if (value instanceof Date) {
    entries.push([key, value.toISOString()]);
  } else if (typeof value === "boolean") {
    entries.push([key, value ? "1" : "0"]);
  } else if (typeof value === "string") {
    entries.push([key, value]);
  } else if (typeof value === "number") {
    entries.push([key, `${value}`]);
  } else if (value === null || value === void 0) {
    entries.push([key, ""]);
  } else {
    objectToFormEntries(value, key, entries);
  }
}
function attemptSubmit(elementInForm) {
  var _a3, _b;
  let form = (_a3 = elementInForm == null ? void 0 : elementInForm.form) != null ? _a3 : elementInForm.closest("form");
  if (!form)
    return;
  for (let element of form.elements) {
    if (element === elementInForm)
      continue;
    if (element.tagName === "INPUT" && element.type === "submit" || element.tagName === "BUTTON" && element.type === "submit" || element.nodeName === "INPUT" && element.type === "image") {
      element.click();
      return;
    }
  }
  (_b = form.requestSubmit) == null ? void 0 : _b.call(form);
}

// src/components/combobox/combobox.tsx
function adjustOrderedState(state, adjustment = (i) => i) {
  let currentActiveOption = state.activeOptionIndex !== null ? state.options[state.activeOptionIndex] : null;
  let list = adjustment(state.options.slice());
  let sortedOptions = list.length > 0 && list[0].dataRef.current.order !== null ? (
    // Prefer sorting based on the `order`
    list.sort((a, z) => a.dataRef.current.order - z.dataRef.current.order)
  ) : (
    // Fallback to much slower DOM order
    sortByDomNode(list, (option) => option.dataRef.current.domRef.current)
  );
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers = {
  [1 /* CloseCombobox */](state) {
    var _a3;
    if ((_a3 = state.dataRef.current) == null ? void 0 : _a3.disabled)
      return state;
    if (state.comboboxState === 1 /* Closed */)
      return state;
    return { ...state, activeOptionIndex: null, comboboxState: 1 /* Closed */ };
  },
  [0 /* OpenCombobox */](state) {
    var _a3, _b;
    if ((_a3 = state.dataRef.current) == null ? void 0 : _a3.disabled)
      return state;
    if (state.comboboxState === 0 /* Open */)
      return state;
    if ((_b = state.dataRef.current) == null ? void 0 : _b.value) {
      let idx = state.dataRef.current.calculateIndex(state.dataRef.current.value);
      if (idx !== -1) {
        return {
          ...state,
          activeOptionIndex: idx,
          comboboxState: 0 /* Open */
        };
      }
    }
    return { ...state, comboboxState: 0 /* Open */ };
  },
  [2 /* GoToOption */](state, action) {
    var _a3, _b, _c, _d, _e;
    if ((_a3 = state.dataRef.current) == null ? void 0 : _a3.disabled)
      return state;
    if (((_b = state.dataRef.current) == null ? void 0 : _b.optionsRef.current) && !((_c = state.dataRef.current) == null ? void 0 : _c.optionsPropsRef.current.static) && state.comboboxState === 1 /* Closed */) {
      return state;
    }
    if (state.virtual) {
      let activeOptionIndex2 = action.focus === 4 /* Specific */ ? action.idx : calculateActiveIndex(action, {
        resolveItems: () => state.virtual.options,
        resolveActiveIndex: () => {
          var _a4, _b2;
          return (_b2 = (_a4 = state.activeOptionIndex) != null ? _a4 : state.virtual.options.findIndex((option) => !state.virtual.disabled(option))) != null ? _b2 : null;
        },
        resolveDisabled: state.virtual.disabled,
        resolveId() {
          throw new Error("Function not implemented.");
        }
      });
      let activationTrigger2 = (_d = action.trigger) != null ? _d : 2 /* Other */;
      if (state.activeOptionIndex === activeOptionIndex2 && state.activationTrigger === activationTrigger2) {
        return state;
      }
      return {
        ...state,
        activeOptionIndex: activeOptionIndex2,
        activationTrigger: activationTrigger2
      };
    }
    let adjustedState = adjustOrderedState(state);
    if (adjustedState.activeOptionIndex === null) {
      let localActiveOptionIndex = adjustedState.options.findIndex(
        (option) => !option.dataRef.current.disabled
      );
      if (localActiveOptionIndex !== -1) {
        adjustedState.activeOptionIndex = localActiveOptionIndex;
      }
    }
    let activeOptionIndex = action.focus === 4 /* Specific */ ? action.idx : calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    let activationTrigger = (_e = action.trigger) != null ? _e : 2 /* Other */;
    if (state.activeOptionIndex === activeOptionIndex && state.activationTrigger === activationTrigger) {
      return state;
    }
    return {
      ...state,
      ...adjustedState,
      activeOptionIndex,
      activationTrigger
    };
  },
  [3 /* RegisterOption */]: (state, action) => {
    var _a3, _b, _c;
    if ((_a3 = state.dataRef.current) == null ? void 0 : _a3.virtual) {
      return {
        ...state,
        options: [...state.options, action.payload]
      };
    }
    let option = action.payload;
    let adjustedState = adjustOrderedState(state, (options) => {
      options.push(option);
      return options;
    });
    if (state.activeOptionIndex === null) {
      if ((_b = state.dataRef.current) == null ? void 0 : _b.isSelected(action.payload.dataRef.current.value)) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    let nextState = {
      ...state,
      ...adjustedState,
      activationTrigger: 2 /* Other */
    };
    if (((_c = state.dataRef.current) == null ? void 0 : _c.__demoMode) && state.dataRef.current.value === void 0) {
      nextState.activeOptionIndex = 0;
    }
    return nextState;
  },
  [4 /* UnregisterOption */]: (state, action) => {
    var _a3;
    if ((_a3 = state.dataRef.current) == null ? void 0 : _a3.virtual) {
      return {
        ...state,
        options: state.options.filter((option) => option.id !== action.id)
      };
    }
    let adjustedState = adjustOrderedState(state, (options) => {
      let idx = options.findIndex((option) => option.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state,
      ...adjustedState,
      activationTrigger: 2 /* Other */
    };
  },
  [5 /* RegisterLabel */]: (state, action) => {
    if (state.labelId === action.id) {
      return state;
    }
    return {
      ...state,
      labelId: action.id
    };
  },
  [6 /* SetActivationTrigger */]: (state, action) => {
    if (state.activationTrigger === action.trigger) {
      return state;
    }
    return {
      ...state,
      activationTrigger: action.trigger
    };
  },
  [7 /* UpdateVirtualOptions */]: (state, action) => {
    var _a3;
    if (((_a3 = state.virtual) == null ? void 0 : _a3.options) === action.options) {
      return state;
    }
    let adjustedActiveOptionIndex = state.activeOptionIndex;
    if (state.activeOptionIndex !== null) {
      let idx = action.options.indexOf(state.virtual.options[state.activeOptionIndex]);
      if (idx !== -1) {
        adjustedActiveOptionIndex = idx;
      } else {
        adjustedActiveOptionIndex = null;
      }
    }
    return {
      ...state,
      activeOptionIndex: adjustedActiveOptionIndex,
      virtual: Object.assign({}, state.virtual, { options: action.options })
    };
  }
};
var ComboboxActionsContext = (0, import_react19.createContext)(null);
ComboboxActionsContext.displayName = "ComboboxActionsContext";
function useActions(component) {
  let context = (0, import_react19.useContext)(ComboboxActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions);
    throw err;
  }
  return context;
}
var VirtualContext = (0, import_react19.createContext)(null);
function VirtualProvider(props) {
  var _a3;
  let data = useData("VirtualProvider");
  let [paddingStart, paddingEnd] = (0, import_react19.useMemo)(() => {
    let el = data.optionsRef.current;
    if (!el)
      return [0, 0];
    let styles = window.getComputedStyle(el);
    return [
      parseFloat(styles.paddingBlockStart || styles.paddingTop),
      parseFloat(styles.paddingBlockEnd || styles.paddingBottom)
    ];
  }, [data.optionsRef.current]);
  let virtualizer = useVirtualizer({
    scrollPaddingStart: paddingStart,
    scrollPaddingEnd: paddingEnd,
    count: data.virtual.options.length,
    estimateSize() {
      return 40;
    },
    getScrollElement() {
      var _a4;
      return (_a4 = data.optionsRef.current) != null ? _a4 : null;
    },
    overscan: 12
  });
  let [baseKey, setBaseKey] = (0, import_react19.useState)(0);
  useIsoMorphicEffect(() => {
    setBaseKey((v) => v + 1);
  }, [(_a3 = data.virtual) == null ? void 0 : _a3.options]);
  return /* @__PURE__ */ import_react19.default.createElement(VirtualContext.Provider, { value: virtualizer }, /* @__PURE__ */ import_react19.default.createElement(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height: `${virtualizer.getTotalSize()}px`
      },
      ref: (el) => {
        if (!el) {
          return;
        }
        {
          if (typeof process !== "undefined" && process.env.JEST_WORKER_ID !== void 0) {
            return;
          }
          if (data.activationTrigger === 0 /* Pointer */) {
            return;
          }
          if (data.activeOptionIndex !== null && data.virtual.options.length > data.activeOptionIndex) {
            virtualizer.scrollToIndex(data.activeOptionIndex);
          }
        }
      }
    },
    virtualizer.getVirtualItems().map((item) => {
      var _a4;
      return /* @__PURE__ */ import_react19.default.createElement(import_react19.Fragment, { key: item.key }, import_react19.default.cloneElement(
        (_a4 = props.children) == null ? void 0 : _a4.call(props, {
          option: data.virtual.options[item.index],
          open: data.comboboxState === 0 /* Open */
        }),
        {
          key: `${baseKey}-${item.key}`,
          "data-index": item.index,
          "aria-setsize": data.virtual.options.length,
          "aria-posinset": item.index + 1,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translateY(${item.start}px)`,
            overflowAnchor: "none"
          }
        }
      ));
    })
  ));
}
var ComboboxDataContext = (0, import_react19.createContext)(null);
ComboboxDataContext.displayName = "ComboboxDataContext";
function useData(component) {
  let context = (0, import_react19.useContext)(ComboboxDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData);
    throw err;
  }
  return context;
}
function stateReducer(state, action) {
  return match(action.type, reducers, state, action);
}
var DEFAULT_COMBOBOX_TAG = import_react19.Fragment;
function ComboboxFn(props, ref) {
  var _a3;
  let {
    value: controlledValue,
    defaultValue,
    onChange: controlledOnChange,
    form: formName,
    name,
    by = null,
    disabled = false,
    __demoMode = false,
    nullable = false,
    multiple = false,
    // @ts-expect-error
    immediate: _immediate = false,
    // @ts-expect-error
    virtual: _virtual = null,
    ...theirProps
  } = props;
  let immediate = false;
  let virtual = null;
  let [value = multiple ? [] : void 0, theirOnChange] = useControllable(
    controlledValue,
    controlledOnChange,
    defaultValue
  );
  let [state, dispatch] = (0, import_react19.useReducer)(stateReducer, {
    dataRef: (0, import_react19.createRef)(),
    comboboxState: __demoMode ? 0 /* Open */ : 1 /* Closed */,
    options: [],
    virtual: virtual ? { options: virtual.options, disabled: (_a3 = virtual.disabled) != null ? _a3 : () => false } : null,
    activeOptionIndex: null,
    activationTrigger: 2 /* Other */,
    labelId: null
  });
  let defaultToFirstOption = (0, import_react19.useRef)(false);
  let optionsPropsRef = (0, import_react19.useRef)({ static: false, hold: false });
  let labelRef = (0, import_react19.useRef)(null);
  let inputRef = (0, import_react19.useRef)(null);
  let buttonRef = (0, import_react19.useRef)(null);
  let optionsRef = (0, import_react19.useRef)(null);
  let compare = useEvent(
    // @ts-expect-error Eventually we'll want to tackle this, but for now this will do.
    typeof by === "string" ? (a, z) => {
      let property = by;
      return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
    } : by != null ? by : (a, z) => a === z
  );
  let calculateIndex = useEvent((value2) => {
    if (virtual) {
      if (by === null) {
        return virtual.options.indexOf(value2);
      } else {
        return virtual.options.findIndex((other) => compare(other, value2));
      }
    } else {
      return state.options.findIndex((other) => compare(other.dataRef.current.value, value2));
    }
  });
  let isSelected = (0, import_react19.useCallback)(
    (other) => match(data.mode, {
      [1 /* Multi */]: () => value.some((option) => compare(option, other)),
      [0 /* Single */]: () => compare(value, other)
    }),
    [value]
  );
  let isActive = useEvent((other) => {
    return state.activeOptionIndex === calculateIndex(other);
  });
  let data = (0, import_react19.useMemo)(
    () => ({
      ...state,
      immediate,
      optionsPropsRef,
      labelRef,
      inputRef,
      buttonRef,
      optionsRef,
      value,
      defaultValue,
      disabled,
      mode: multiple ? 1 /* Multi */ : 0 /* Single */,
      virtual: state.virtual,
      get activeOptionIndex() {
        if (defaultToFirstOption.current && state.activeOptionIndex === null && (virtual ? virtual.options.length > 0 : state.options.length > 0)) {
          if (virtual) {
            let localActiveOptionIndex2 = virtual.options.findIndex(
              (option) => {
                var _a4, _b;
                return !((_b = (_a4 = virtual == null ? void 0 : virtual.disabled) == null ? void 0 : _a4.call(virtual, option)) != null ? _b : false);
              }
            );
            if (localActiveOptionIndex2 !== -1) {
              return localActiveOptionIndex2;
            }
          }
          let localActiveOptionIndex = state.options.findIndex((option) => {
            return !option.dataRef.current.disabled;
          });
          if (localActiveOptionIndex !== -1) {
            return localActiveOptionIndex;
          }
        }
        return state.activeOptionIndex;
      },
      calculateIndex,
      compare,
      isSelected,
      isActive,
      nullable,
      __demoMode
    }),
    [value, defaultValue, disabled, multiple, nullable, __demoMode, state, virtual]
  );
  useIsoMorphicEffect(() => {
    if (!virtual)
      return;
    dispatch({ type: 7 /* UpdateVirtualOptions */, options: virtual.options });
  }, [virtual, virtual == null ? void 0 : virtual.options]);
  useIsoMorphicEffect(() => {
    state.dataRef.current = data;
  }, [data]);
  useOutsideClick(
    [data.buttonRef, data.inputRef, data.optionsRef],
    () => actions.closeCombobox(),
    data.comboboxState === 0 /* Open */
  );
  let slot = (0, import_react19.useMemo)(
    () => {
      var _a4, _b, _c;
      return {
        open: data.comboboxState === 0 /* Open */,
        disabled,
        activeIndex: data.activeOptionIndex,
        activeOption: data.activeOptionIndex === null ? null : data.virtual ? data.virtual.options[(_a4 = data.activeOptionIndex) != null ? _a4 : 0] : (_c = (_b = data.options[data.activeOptionIndex]) == null ? void 0 : _b.dataRef.current.value) != null ? _c : null,
        value
      };
    },
    [data, disabled, value]
  );
  let selectActiveOption = useEvent(() => {
    if (data.activeOptionIndex === null)
      return;
    if (data.virtual) {
      onChange(data.virtual.options[data.activeOptionIndex]);
    } else {
      let { dataRef } = data.options[data.activeOptionIndex];
      onChange(dataRef.current.value);
    }
    actions.goToOption(4 /* Specific */, data.activeOptionIndex);
  });
  let openCombobox = useEvent(() => {
    dispatch({ type: 0 /* OpenCombobox */ });
    defaultToFirstOption.current = true;
  });
  let closeCombobox = useEvent(() => {
    dispatch({ type: 1 /* CloseCombobox */ });
    defaultToFirstOption.current = false;
  });
  let goToOption = useEvent((focus, idx, trigger) => {
    defaultToFirstOption.current = false;
    if (focus === 4 /* Specific */) {
      return dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, idx, trigger });
    }
    return dispatch({ type: 2 /* GoToOption */, focus, trigger });
  });
  let registerOption = useEvent((id, dataRef) => {
    dispatch({ type: 3 /* RegisterOption */, payload: { id, dataRef } });
    return () => {
      if (data.isActive(dataRef.current.value)) {
        defaultToFirstOption.current = true;
      }
      dispatch({ type: 4 /* UnregisterOption */, id });
    };
  });
  let registerLabel = useEvent((id) => {
    dispatch({ type: 5 /* RegisterLabel */, id });
    return () => dispatch({ type: 5 /* RegisterLabel */, id: null });
  });
  let onChange = useEvent((value2) => {
    return match(data.mode, {
      [0 /* Single */]() {
        return theirOnChange == null ? void 0 : theirOnChange(value2);
      },
      [1 /* Multi */]() {
        let copy = data.value.slice();
        let idx = copy.findIndex((item) => compare(item, value2));
        if (idx === -1) {
          copy.push(value2);
        } else {
          copy.splice(idx, 1);
        }
        return theirOnChange == null ? void 0 : theirOnChange(copy);
      }
    });
  });
  let setActivationTrigger = useEvent((trigger) => {
    dispatch({ type: 6 /* SetActivationTrigger */, trigger });
  });
  let actions = (0, import_react19.useMemo)(
    () => ({
      onChange,
      registerOption,
      registerLabel,
      goToOption,
      closeCombobox,
      openCombobox,
      setActivationTrigger,
      selectActiveOption
    }),
    []
  );
  let ourProps = ref === null ? {} : { ref };
  let form = (0, import_react19.useRef)(null);
  let d = useDisposables();
  (0, import_react19.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      theirOnChange == null ? void 0 : theirOnChange(defaultValue);
    });
  }, [
    form,
    theirOnChange
    /* Explicitly ignoring `defaultValue` */
  ]);
  return /* @__PURE__ */ import_react19.default.createElement(ComboboxActionsContext.Provider, { value: actions }, /* @__PURE__ */ import_react19.default.createElement(ComboboxDataContext.Provider, { value: data }, /* @__PURE__ */ import_react19.default.createElement(
    OpenClosedProvider,
    {
      value: match(data.comboboxState, {
        [0 /* Open */]: 1 /* Open */,
        [1 /* Closed */]: 2 /* Closed */
      })
    },
    name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react19.default.createElement(
      Hidden,
      {
        features: 4 /* Hidden */,
        ref: idx === 0 ? (element) => {
          var _a4;
          form.current = (_a4 = element == null ? void 0 : element.closest("form")) != null ? _a4 : null;
        } : void 0,
        ...compact({
          key: name2,
          as: "input",
          type: "hidden",
          hidden: true,
          readOnly: true,
          form: formName,
          disabled,
          name: name2,
          value: value2
        })
      }
    )),
    render({
      ourProps,
      theirProps,
      slot,
      defaultTag: DEFAULT_COMBOBOX_TAG,
      name: "Combobox"
    })
  )));
}
var DEFAULT_INPUT_TAG = "input";
function InputFn(props, ref) {
  var _a3, _b, _c, _d, _e;
  let internalId = useId();
  let {
    id = `headlessui-combobox-input-${internalId}`,
    onChange,
    displayValue,
    // @ts-ignore: We know this MAY NOT exist for a given tag but we only care when it _does_ exist.
    type = "text",
    ...theirProps
  } = props;
  let data = useData("Combobox.Input");
  let actions = useActions("Combobox.Input");
  let inputRef = useSyncRefs(data.inputRef, ref);
  let ownerDocument = useOwnerDocument(data.inputRef);
  let isTyping = (0, import_react19.useRef)(false);
  let d = useDisposables();
  let clear = useEvent(() => {
    actions.onChange(null);
    if (data.optionsRef.current) {
      data.optionsRef.current.scrollTop = 0;
    }
    actions.goToOption(5 /* Nothing */);
  });
  let currentDisplayValue = function() {
    var _a4;
    if (typeof displayValue === "function" && data.value !== void 0) {
      return (_a4 = displayValue(data.value)) != null ? _a4 : "";
    } else if (typeof data.value === "string") {
      return data.value;
    } else {
      return "";
    }
  }();
  useWatch(
    ([currentDisplayValue2, state], [oldCurrentDisplayValue, oldState]) => {
      if (isTyping.current)
        return;
      let input = data.inputRef.current;
      if (!input)
        return;
      if (oldState === 0 /* Open */ && state === 1 /* Closed */) {
        input.value = currentDisplayValue2;
      } else if (currentDisplayValue2 !== oldCurrentDisplayValue) {
        input.value = currentDisplayValue2;
      }
      requestAnimationFrame(() => {
        if (isTyping.current)
          return;
        if (!input)
          return;
        if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) !== input)
          return;
        let { selectionStart, selectionEnd } = input;
        if (Math.abs((selectionEnd != null ? selectionEnd : 0) - (selectionStart != null ? selectionStart : 0)) !== 0)
          return;
        if (selectionStart !== 0)
          return;
        input.setSelectionRange(input.value.length, input.value.length);
      });
    },
    [currentDisplayValue, data.comboboxState, ownerDocument]
  );
  useWatch(
    ([newState], [oldState]) => {
      if (newState === 0 /* Open */ && oldState === 1 /* Closed */) {
        if (isTyping.current)
          return;
        let input = data.inputRef.current;
        if (!input)
          return;
        let currentValue = input.value;
        let { selectionStart, selectionEnd, selectionDirection } = input;
        input.value = "";
        input.value = currentValue;
        if (selectionDirection !== null) {
          input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
        } else {
          input.setSelectionRange(selectionStart, selectionEnd);
        }
      }
    },
    [data.comboboxState]
  );
  let isComposing = (0, import_react19.useRef)(false);
  let handleCompositionStart = useEvent(() => {
    isComposing.current = true;
  });
  let handleCompositionEnd = useEvent(() => {
    d.nextFrame(() => {
      isComposing.current = false;
    });
  });
  let handleKeyDown = useEvent((event) => {
    isTyping.current = true;
    switch (event.key) {
      case "Enter" /* Enter */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        if (isComposing.current)
          return;
        event.preventDefault();
        event.stopPropagation();
        if (data.activeOptionIndex === null) {
          actions.closeCombobox();
          return;
        }
        actions.selectActiveOption();
        if (data.mode === 0 /* Single */) {
          actions.closeCombobox();
        }
        break;
      case "ArrowDown" /* ArrowDown */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return match(data.comboboxState, {
          [0 /* Open */]: () => actions.goToOption(2 /* Next */),
          [1 /* Closed */]: () => actions.openCombobox()
        });
      case "ArrowUp" /* ArrowUp */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return match(data.comboboxState, {
          [0 /* Open */]: () => actions.goToOption(1 /* Previous */),
          [1 /* Closed */]: () => {
            actions.openCombobox();
            d.nextFrame(() => {
              if (!data.value) {
                actions.goToOption(3 /* Last */);
              }
            });
          }
        });
      case "Home" /* Home */:
        if (event.shiftKey) {
          break;
        }
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "PageUp" /* PageUp */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "End" /* End */:
        if (event.shiftKey) {
          break;
        }
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "PageDown" /* PageDown */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "Escape" /* Escape */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        event.preventDefault();
        if (data.optionsRef.current && !data.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        if (data.nullable && data.mode === 0 /* Single */) {
          if (data.value === null) {
            clear();
          }
        }
        return actions.closeCombobox();
      case "Tab" /* Tab */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        if (data.mode === 0 /* Single */ && data.activationTrigger !== 1 /* Focus */) {
          actions.selectActiveOption();
        }
        actions.closeCombobox();
        break;
    }
  });
  let handleChange = useEvent((event) => {
    onChange == null ? void 0 : onChange(event);
    if (data.nullable && data.mode === 0 /* Single */) {
      if (event.target.value === "") {
        clear();
      }
    }
    actions.openCombobox();
  });
  let handleBlur = useEvent((event) => {
    var _a4, _b2, _c2;
    let relatedTarget = (_a4 = event.relatedTarget) != null ? _a4 : history.find((x) => x !== event.currentTarget);
    isTyping.current = false;
    if ((_b2 = data.optionsRef.current) == null ? void 0 : _b2.contains(relatedTarget)) {
      return;
    }
    if ((_c2 = data.buttonRef.current) == null ? void 0 : _c2.contains(relatedTarget)) {
      return;
    }
    if (data.comboboxState !== 0 /* Open */)
      return;
    event.preventDefault();
    if (data.mode === 0 /* Single */) {
      if (data.nullable && data.value === null) {
        clear();
      } else if (data.activationTrigger !== 1 /* Focus */) {
        actions.selectActiveOption();
      }
    }
    return actions.closeCombobox();
  });
  let handleFocus = useEvent((event) => {
    var _a4, _b2, _c2;
    let relatedTarget = (_a4 = event.relatedTarget) != null ? _a4 : history.find((x) => x !== event.currentTarget);
    if ((_b2 = data.buttonRef.current) == null ? void 0 : _b2.contains(relatedTarget))
      return;
    if ((_c2 = data.optionsRef.current) == null ? void 0 : _c2.contains(relatedTarget))
      return;
    if (data.disabled)
      return;
    if (!data.immediate)
      return;
    if (data.comboboxState === 0 /* Open */)
      return;
    actions.openCombobox();
    d.nextFrame(() => {
      actions.setActivationTrigger(1 /* Focus */);
    });
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId].join(" ");
  }, [data.labelId]);
  let slot = (0, import_react19.useMemo)(
    () => ({ open: data.comboboxState === 0 /* Open */, disabled: data.disabled }),
    [data]
  );
  let ourProps = {
    ref: inputRef,
    id,
    role: "combobox",
    type,
    "aria-controls": (_a3 = data.optionsRef.current) == null ? void 0 : _a3.id,
    "aria-expanded": data.comboboxState === 0 /* Open */,
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : data.virtual ? (_b = data.options.find(
      (option) => {
        var _a4;
        return !((_a4 = data.virtual) == null ? void 0 : _a4.disabled(option.dataRef.current.value)) && data.compare(
          option.dataRef.current.value,
          data.virtual.options[data.activeOptionIndex]
        );
      }
    )) == null ? void 0 : _b.id : (_c = data.options[data.activeOptionIndex]) == null ? void 0 : _c.id,
    "aria-labelledby": labelledby,
    "aria-autocomplete": "list",
    defaultValue: (_e = (_d = props.defaultValue) != null ? _d : data.defaultValue !== void 0 ? displayValue == null ? void 0 : displayValue(data.defaultValue) : null) != null ? _e : data.defaultValue,
    disabled: data.disabled,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_INPUT_TAG,
    name: "Combobox.Input"
  });
}
var DEFAULT_BUTTON_TAG = "button";
function ButtonFn(props, ref) {
  var _a3;
  let data = useData("Combobox.Button");
  let actions = useActions("Combobox.Button");
  let buttonRef = useSyncRefs(data.buttonRef, ref);
  let internalId = useId();
  let { id = `headlessui-combobox-button-${internalId}`, ...theirProps } = props;
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        if (data.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
        }
        return d.nextFrame(() => {
          var _a4;
          return (_a4 = data.inputRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        if (data.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
          d.nextFrame(() => {
            if (!data.value) {
              actions.goToOption(3 /* Last */);
            }
          });
        }
        return d.nextFrame(() => {
          var _a4;
          return (_a4 = data.inputRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
      case "Escape" /* Escape */:
        if (data.comboboxState !== 0 /* Open */)
          return;
        event.preventDefault();
        if (data.optionsRef.current && !data.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        actions.closeCombobox();
        return d.nextFrame(() => {
          var _a4;
          return (_a4 = data.inputRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
      default:
        return;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (data.comboboxState === 0 /* Open */) {
      actions.closeCombobox();
    } else {
      event.preventDefault();
      actions.openCombobox();
    }
    d.nextFrame(() => {
      var _a4;
      return (_a4 = data.inputRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
    });
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId, id].join(" ");
  }, [data.labelId, id]);
  let slot = (0, import_react19.useMemo)(
    () => ({
      open: data.comboboxState === 0 /* Open */,
      disabled: data.disabled,
      value: data.value
    }),
    [data]
  );
  let ourProps = {
    ref: buttonRef,
    id,
    type: useResolveButtonType(props, data.buttonRef),
    tabIndex: -1,
    "aria-haspopup": "listbox",
    "aria-controls": (_a3 = data.optionsRef.current) == null ? void 0 : _a3.id,
    "aria-expanded": data.comboboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: data.disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Combobox.Button"
  });
}
var DEFAULT_LABEL_TAG = "label";
function LabelFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-combobox-label-${internalId}`, ...theirProps } = props;
  let data = useData("Combobox.Label");
  let actions = useActions("Combobox.Label");
  let labelRef = useSyncRefs(data.labelRef, ref);
  useIsoMorphicEffect(() => actions.registerLabel(id), [id]);
  let handleClick = useEvent(() => {
    var _a3;
    return (_a3 = data.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
  });
  let slot = (0, import_react19.useMemo)(
    () => ({ open: data.comboboxState === 0 /* Open */, disabled: data.disabled }),
    [data]
  );
  let ourProps = { ref: labelRef, id, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: "Combobox.Label"
  });
}
var DEFAULT_OPTIONS_TAG = "ul";
var OptionsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
function OptionsFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-combobox-options-${internalId}`, hold = false, ...theirProps } = props;
  let data = useData("Combobox.Options");
  let optionsRef = useSyncRefs(data.optionsRef, ref);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return data.comboboxState === 0 /* Open */;
  })();
  useIsoMorphicEffect(() => {
    var _a3;
    data.optionsPropsRef.current.static = (_a3 = props.static) != null ? _a3 : false;
  }, [data.optionsPropsRef, props.static]);
  useIsoMorphicEffect(() => {
    data.optionsPropsRef.current.hold = hold;
  }, [data.optionsPropsRef, hold]);
  useTreeWalker({
    container: data.optionsRef.current,
    enabled: data.comboboxState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "option")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let labelledby = useComputed(
    () => {
      var _a3, _b;
      return (_b = data.labelId) != null ? _b : (_a3 = data.buttonRef.current) == null ? void 0 : _a3.id;
    },
    [data.labelId, data.buttonRef.current]
  );
  let slot = (0, import_react19.useMemo)(
    () => ({ open: data.comboboxState === 0 /* Open */, option: void 0 }),
    [data]
  );
  let ourProps = {
    "aria-labelledby": labelledby,
    role: "listbox",
    "aria-multiselectable": data.mode === 1 /* Multi */ ? true : void 0,
    id,
    ref: optionsRef
  };
  if (data.virtual && data.comboboxState === 0 /* Open */) {
    Object.assign(theirProps, {
      // @ts-expect-error The `children` prop now is a callback function that receives `{ option }`.
      children: /* @__PURE__ */ import_react19.default.createElement(VirtualProvider, null, theirProps.children)
    });
  }
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible,
    name: "Combobox.Options"
  });
}
var DEFAULT_OPTION_TAG = "li";
function OptionFn(props, ref) {
  var _a3;
  let internalId = useId();
  let {
    id = `headlessui-combobox-option-${internalId}`,
    disabled = false,
    value,
    order = null,
    ...theirProps
  } = props;
  let data = useData("Combobox.Option");
  let actions = useActions("Combobox.Option");
  let active = data.virtual ? data.activeOptionIndex === data.calculateIndex(value) : data.activeOptionIndex === null ? false : ((_a3 = data.options[data.activeOptionIndex]) == null ? void 0 : _a3.id) === id;
  let selected = data.isSelected(value);
  let internalOptionRef = (0, import_react19.useRef)(null);
  let bag = useLatestValue({
    disabled,
    value,
    domRef: internalOptionRef,
    order
  });
  let virtualizer = (0, import_react19.useContext)(VirtualContext);
  let optionRef = useSyncRefs(
    ref,
    internalOptionRef,
    virtualizer ? virtualizer.measureElement : null
  );
  let select = useEvent(() => actions.onChange(value));
  useIsoMorphicEffect(() => actions.registerOption(id, bag), [bag, id]);
  let enableScrollIntoView = (0, import_react19.useRef)(data.virtual || data.__demoMode ? false : true);
  useIsoMorphicEffect(() => {
    if (!data.virtual)
      return;
    if (!data.__demoMode)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      enableScrollIntoView.current = true;
    });
    return d.dispose;
  }, [data.virtual, data.__demoMode]);
  useIsoMorphicEffect(() => {
    if (!enableScrollIntoView.current)
      return;
    if (data.comboboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (data.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a4, _b;
      (_b = (_a4 = internalOptionRef.current) == null ? void 0 : _a4.scrollIntoView) == null ? void 0 : _b.call(_a4, { block: "nearest" });
    });
    return d.dispose;
  }, [
    internalOptionRef,
    active,
    data.comboboxState,
    data.activationTrigger,
    /* We also want to trigger this when the position of the active item changes so that we can re-trigger the scrollIntoView */
    data.activeOptionIndex
  ]);
  let handleClick = useEvent((event) => {
    var _a4;
    if (disabled || ((_a4 = data.virtual) == null ? void 0 : _a4.disabled(value)))
      return event.preventDefault();
    select();
    if (!isMobile()) {
      requestAnimationFrame(() => {
        var _a5;
        return (_a5 = data.inputRef.current) == null ? void 0 : _a5.focus({ preventScroll: true });
      });
    }
    if (data.mode === 0 /* Single */) {
      requestAnimationFrame(() => actions.closeCombobox());
    }
  });
  let handleFocus = useEvent(() => {
    var _a4;
    if (disabled || ((_a4 = data.virtual) == null ? void 0 : _a4.disabled(value))) {
      return actions.goToOption(5 /* Nothing */);
    }
    let idx = data.calculateIndex(value);
    actions.goToOption(4 /* Specific */, idx);
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    var _a4;
    if (!pointer.wasMoved(evt))
      return;
    if (disabled || ((_a4 = data.virtual) == null ? void 0 : _a4.disabled(value)))
      return;
    if (active)
      return;
    let idx = data.calculateIndex(value);
    actions.goToOption(4 /* Specific */, idx, 0 /* Pointer */);
  });
  let handleLeave = useEvent((evt) => {
    var _a4;
    if (!pointer.wasMoved(evt))
      return;
    if (disabled || ((_a4 = data.virtual) == null ? void 0 : _a4.disabled(value)))
      return;
    if (!active)
      return;
    if (data.optionsPropsRef.current.hold)
      return;
    actions.goToOption(5 /* Nothing */);
  });
  let slot = (0, import_react19.useMemo)(
    () => ({ active, selected, disabled }),
    [active, selected, disabled]
  );
  let ourProps = {
    id,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    // According to the WAI-ARIA best practices, we should use aria-checked for
    // multi-select,but Voice-Over disagrees. So we use aria-checked instead for
    // both single and multi-select.
    "aria-selected": selected,
    disabled: void 0,
    // Never forward the `disabled` prop
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: "Combobox.Option"
  });
}
var ComboboxRoot = forwardRefWithAs(ComboboxFn);
var Button = forwardRefWithAs(ButtonFn);
var Input = forwardRefWithAs(InputFn);
var Label = forwardRefWithAs(LabelFn);
var Options = forwardRefWithAs(OptionsFn);
var Option = forwardRefWithAs(OptionFn);
var Combobox = Object.assign(ComboboxRoot, { Input, Button, Label, Options, Option });

// src/components/dialog/dialog.tsx
var import_react30 = __toESM(require("react"), 1);

// src/components/focus-trap/focus-trap.tsx
var import_react24 = __toESM(require("react"), 1);

// src/hooks/use-event-listener.ts
var import_react20 = require("react");
function useEventListener(element, type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react20.useEffect)(() => {
    element = element != null ? element : window;
    function handler(event) {
      listenerRef.current(event);
    }
    element.addEventListener(type, handler, options);
    return () => element.removeEventListener(type, handler, options);
  }, [element, type, options]);
}

// src/hooks/use-is-mounted.ts
var import_react21 = require("react");
function useIsMounted() {
  let mounted = (0, import_react21.useRef)(false);
  useIsoMorphicEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// src/hooks/use-on-unmount.ts
var import_react22 = require("react");
function useOnUnmount(cb) {
  let stableCb = useEvent(cb);
  let trulyUnmounted = (0, import_react22.useRef)(false);
  (0, import_react22.useEffect)(() => {
    trulyUnmounted.current = false;
    return () => {
      trulyUnmounted.current = true;
      microTask(() => {
        if (!trulyUnmounted.current)
          return;
        stableCb();
      });
    };
  }, [stableCb]);
}

// src/hooks/use-tab-direction.ts
var import_react23 = require("react");
function useTabDirection() {
  let direction = (0, import_react23.useRef)(0 /* Forwards */);
  useWindowEvent(
    "keydown",
    (event) => {
      if (event.key === "Tab") {
        direction.current = event.shiftKey ? 1 /* Backwards */ : 0 /* Forwards */;
      }
    },
    true
  );
  return direction;
}

// src/components/focus-trap/focus-trap.tsx
function resolveContainers(containers) {
  if (!containers)
    return /* @__PURE__ */ new Set();
  if (typeof containers === "function")
    return new Set(containers());
  let all = /* @__PURE__ */ new Set();
  for (let container of containers.current) {
    if (container.current instanceof HTMLElement) {
      all.add(container.current);
    }
  }
  return all;
}
var DEFAULT_FOCUS_TRAP_TAG = "div";
var Features3 = /* @__PURE__ */ ((Features4) => {
  Features4[Features4["None"] = 1] = "None";
  Features4[Features4["InitialFocus"] = 2] = "InitialFocus";
  Features4[Features4["TabLock"] = 4] = "TabLock";
  Features4[Features4["FocusLock"] = 8] = "FocusLock";
  Features4[Features4["RestoreFocus"] = 16] = "RestoreFocus";
  Features4[Features4["All"] = 30] = "All";
  return Features4;
})(Features3 || {});
function FocusTrapFn(props, ref) {
  let container = (0, import_react24.useRef)(null);
  let focusTrapRef = useSyncRefs(container, ref);
  let { initialFocus, containers, features = 30 /* All */, ...theirProps } = props;
  if (!useServerHandoffComplete()) {
    features = 1 /* None */;
  }
  let ownerDocument = useOwnerDocument(container);
  useRestoreFocus({ ownerDocument }, Boolean(features & 16 /* RestoreFocus */));
  let previousActiveElement = useInitialFocus(
    { ownerDocument, container, initialFocus },
    Boolean(features & 2 /* InitialFocus */)
  );
  useFocusLock(
    { ownerDocument, container, containers, previousActiveElement },
    Boolean(features & 8 /* FocusLock */)
  );
  let direction = useTabDirection();
  let handleFocus = useEvent((e) => {
    let el = container.current;
    if (!el)
      return;
    let wrapper = false ? microTask : (cb) => cb();
    wrapper(() => {
      match(direction.current, {
        [0 /* Forwards */]: () => {
          focusIn(el, 1 /* First */, { skipElements: [e.relatedTarget] });
        },
        [1 /* Backwards */]: () => {
          focusIn(el, 8 /* Last */, { skipElements: [e.relatedTarget] });
        }
      });
    });
  });
  let d = useDisposables();
  let recentlyUsedTabKey = (0, import_react24.useRef)(false);
  let ourProps = {
    ref: focusTrapRef,
    onKeyDown(e) {
      if (e.key == "Tab") {
        recentlyUsedTabKey.current = true;
        d.requestAnimationFrame(() => {
          recentlyUsedTabKey.current = false;
        });
      }
    },
    onBlur(e) {
      let allContainers = resolveContainers(containers);
      if (container.current instanceof HTMLElement)
        allContainers.add(container.current);
      let relatedTarget = e.relatedTarget;
      if (!(relatedTarget instanceof HTMLElement))
        return;
      if (relatedTarget.dataset.headlessuiFocusGuard === "true") {
        return;
      }
      if (!contains(allContainers, relatedTarget)) {
        if (recentlyUsedTabKey.current) {
          focusIn(
            container.current,
            match(direction.current, {
              [0 /* Forwards */]: () => 4 /* Next */,
              [1 /* Backwards */]: () => 2 /* Previous */
            }) | 16 /* WrapAround */,
            { relativeTo: e.target }
          );
        } else if (e.target instanceof HTMLElement) {
          focusElement(e.target);
        }
      }
    }
  };
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(features & 4 /* TabLock */) && /* @__PURE__ */ import_react24.default.createElement(
    Hidden,
    {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": true,
      onFocus: handleFocus,
      features: 2 /* Focusable */
    }
  ), render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_FOCUS_TRAP_TAG,
    name: "FocusTrap"
  }), Boolean(features & 4 /* TabLock */) && /* @__PURE__ */ import_react24.default.createElement(
    Hidden,
    {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": true,
      onFocus: handleFocus,
      features: 2 /* Focusable */
    }
  ));
}
var FocusTrapRoot = forwardRefWithAs(FocusTrapFn);
var FocusTrap = Object.assign(FocusTrapRoot, {
  features: Features3
});
function useRestoreElement(enabled = true) {
  let localHistory = (0, import_react24.useRef)(history.slice());
  useWatch(
    ([newEnabled], [oldEnabled]) => {
      if (oldEnabled === true && newEnabled === false) {
        microTask(() => {
          localHistory.current.splice(0);
        });
      }
      if (oldEnabled === false && newEnabled === true) {
        localHistory.current = history.slice();
      }
    },
    [enabled, history, localHistory]
  );
  return useEvent(() => {
    var _a3;
    return (_a3 = localHistory.current.find((x) => x != null && x.isConnected)) != null ? _a3 : null;
  });
}
function useRestoreFocus({ ownerDocument }, enabled) {
  let getRestoreElement = useRestoreElement(enabled);
  useWatch(() => {
    if (enabled)
      return;
    if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) === (ownerDocument == null ? void 0 : ownerDocument.body)) {
      focusElement(getRestoreElement());
    }
  }, [enabled]);
  useOnUnmount(() => {
    if (!enabled)
      return;
    focusElement(getRestoreElement());
  });
}
function useInitialFocus({
  ownerDocument,
  container,
  initialFocus
}, enabled) {
  let previousActiveElement = (0, import_react24.useRef)(null);
  let mounted = useIsMounted();
  useWatch(() => {
    if (!enabled)
      return;
    let containerElement = container.current;
    if (!containerElement)
      return;
    microTask(() => {
      if (!mounted.current) {
        return;
      }
      let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
      if (initialFocus == null ? void 0 : initialFocus.current) {
        if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
          previousActiveElement.current = activeElement;
          return;
        }
      } else if (containerElement.contains(activeElement)) {
        previousActiveElement.current = activeElement;
        return;
      }
      if (initialFocus == null ? void 0 : initialFocus.current) {
        focusElement(initialFocus.current);
      } else {
        if (focusIn(containerElement, 1 /* First */) === 0 /* Error */) {
          console.warn("There are no focusable elements inside the <FocusTrap />");
        }
      }
      previousActiveElement.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    });
  }, [enabled]);
  return previousActiveElement;
}
function useFocusLock({
  ownerDocument,
  container,
  containers,
  previousActiveElement
}, enabled) {
  let mounted = useIsMounted();
  useEventListener(
    ownerDocument == null ? void 0 : ownerDocument.defaultView,
    "focus",
    (event) => {
      if (!enabled)
        return;
      if (!mounted.current)
        return;
      let allContainers = resolveContainers(containers);
      if (container.current instanceof HTMLElement)
        allContainers.add(container.current);
      let previous = previousActiveElement.current;
      if (!previous)
        return;
      let toElement = event.target;
      if (toElement && toElement instanceof HTMLElement) {
        if (!contains(allContainers, toElement)) {
          event.preventDefault();
          event.stopPropagation();
          focusElement(previous);
        } else {
          previousActiveElement.current = toElement;
          focusElement(toElement);
        }
      } else {
        focusElement(previousActiveElement.current);
      }
    },
    true
  );
}
function contains(containers, element) {
  for (let container of containers) {
    if (container.contains(element))
      return true;
  }
  return false;
}

// src/components/portal/portal.tsx
var import_react26 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// src/internal/portal-force-root.tsx
var import_react25 = __toESM(require("react"), 1);
var ForcePortalRootContext = (0, import_react25.createContext)(false);
function usePortalRoot() {
  return (0, import_react25.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return /* @__PURE__ */ import_react25.default.createElement(ForcePortalRootContext.Provider, { value: props.force }, props.children);
}

// src/components/portal/portal.tsx
function usePortalTarget(ref) {
  let forceInRoot = usePortalRoot();
  let groupTarget = (0, import_react26.useContext)(PortalGroupContext);
  let ownerDocument = useOwnerDocument(ref);
  let [target, setTarget] = (0, import_react26.useState)(() => {
    if (!forceInRoot && groupTarget !== null)
      return null;
    if (env.isServer)
      return null;
    let existingRoot = ownerDocument == null ? void 0 : ownerDocument.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    if (ownerDocument === null)
      return null;
    let root = ownerDocument.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    return ownerDocument.body.appendChild(root);
  });
  (0, import_react26.useEffect)(() => {
    if (target === null)
      return;
    if (!(ownerDocument == null ? void 0 : ownerDocument.body.contains(target))) {
      ownerDocument == null ? void 0 : ownerDocument.body.appendChild(target);
    }
  }, [target, ownerDocument]);
  (0, import_react26.useEffect)(() => {
    if (forceInRoot)
      return;
    if (groupTarget === null)
      return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
}
var DEFAULT_PORTAL_TAG = import_react26.Fragment;
function PortalFn(props, ref) {
  let theirProps = props;
  let internalPortalRootRef = (0, import_react26.useRef)(null);
  let portalRef = useSyncRefs(
    optionalRef((ref2) => {
      internalPortalRootRef.current = ref2;
    }),
    ref
  );
  let ownerDocument = useOwnerDocument(internalPortalRootRef);
  let target = usePortalTarget(internalPortalRootRef);
  let [element] = (0, import_react26.useState)(
    () => {
      var _a3;
      return env.isServer ? null : (_a3 = ownerDocument == null ? void 0 : ownerDocument.createElement("div")) != null ? _a3 : null;
    }
  );
  let parent = (0, import_react26.useContext)(PortalParentContext);
  let ready = useServerHandoffComplete();
  useIsoMorphicEffect(() => {
    if (!target || !element)
      return;
    if (!target.contains(element)) {
      element.setAttribute("data-headlessui-portal", "");
      target.appendChild(element);
    }
  }, [target, element]);
  useIsoMorphicEffect(() => {
    if (!element)
      return;
    if (!parent)
      return;
    return parent.register(element);
  }, [parent, element]);
  useOnUnmount(() => {
    var _a3;
    if (!target || !element)
      return;
    if (element instanceof Node && target.contains(element)) {
      target.removeChild(element);
    }
    if (target.childNodes.length <= 0) {
      (_a3 = target.parentElement) == null ? void 0 : _a3.removeChild(target);
    }
  });
  if (!ready)
    return null;
  let ourProps = { ref: portalRef };
  return !target || !element ? null : (0, import_react_dom.createPortal)(
    render({
      ourProps,
      theirProps,
      defaultTag: DEFAULT_PORTAL_TAG,
      name: "Portal"
    }),
    element
  );
}
var DEFAULT_GROUP_TAG = import_react26.Fragment;
var PortalGroupContext = (0, import_react26.createContext)(null);
function GroupFn(props, ref) {
  let { target, ...theirProps } = props;
  let groupRef = useSyncRefs(ref);
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react26.default.createElement(PortalGroupContext.Provider, { value: target }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: "Popover.Group"
  }));
}
var PortalParentContext = (0, import_react26.createContext)(null);
function useNestedPortals() {
  let parent = (0, import_react26.useContext)(PortalParentContext);
  let portals = (0, import_react26.useRef)([]);
  let register = useEvent((portal) => {
    portals.current.push(portal);
    if (parent)
      parent.register(portal);
    return () => unregister(portal);
  });
  let unregister = useEvent((portal) => {
    let idx = portals.current.indexOf(portal);
    if (idx !== -1)
      portals.current.splice(idx, 1);
    if (parent)
      parent.unregister(portal);
  });
  let api = (0, import_react26.useMemo)(
    () => ({ register, unregister, portals }),
    [register, unregister, portals]
  );
  return [
    portals,
    (0, import_react26.useMemo)(() => {
      return function PortalWrapper({ children }) {
        return /* @__PURE__ */ import_react26.default.createElement(PortalParentContext.Provider, { value: api }, children);
      };
    }, [api])
  ];
}
var PortalRoot = forwardRefWithAs(PortalFn);
var Group = forwardRefWithAs(GroupFn);
var Portal = Object.assign(PortalRoot, { Group });

// src/use-sync-external-store-shim/index.ts
var React11 = __toESM(require("react"), 1);

// src/use-sync-external-store-shim/useSyncExternalStoreShimClient.ts
var React10 = __toESM(require("react"), 1);
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
var is = typeof Object.is === "function" ? Object.is : isPolyfill;
var { useState: useState9, useEffect: useEffect15, useLayoutEffect: useLayoutEffect3, useDebugValue } = React10;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false;
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  if (true) {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React10) {
        didWarnOld18Alpha = true;
        console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        );
      }
    }
  }
  const value = getSnapshot();
  if (true) {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{ inst }, forceUpdate] = useState9({ inst: { value, getSnapshot } });
  useLayoutEffect3(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect15(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

// src/use-sync-external-store-shim/useSyncExternalStoreShimServer.ts
function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}

// src/use-sync-external-store-shim/index.ts
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isServerEnvironment = !canUseDOM;
var shim = isServerEnvironment ? useSyncExternalStore2 : useSyncExternalStore;
var useSyncExternalStore3 = "useSyncExternalStore" in React11 ? ((r) => r.useSyncExternalStore)(React11) : shim;

// src/hooks/use-store.ts
function useStore(store) {
  return useSyncExternalStore3(store.subscribe, store.getSnapshot, store.getSnapshot);
}

// src/utils/store.ts
function createStore(initial, actions) {
  let state = initial();
  let listeners = /* @__PURE__ */ new Set();
  return {
    getSnapshot() {
      return state;
    },
    subscribe(onChange) {
      listeners.add(onChange);
      return () => listeners.delete(onChange);
    },
    dispatch(key, ...args) {
      let newState = actions[key].call(state, ...args);
      if (newState) {
        state = newState;
        listeners.forEach((listener) => listener());
      }
    }
  };
}

// src/hooks/document-overflow/adjust-scrollbar-padding.ts
function adjustScrollbarPadding() {
  let scrollbarWidthBefore;
  return {
    before({ doc }) {
      var _a3;
      let documentElement = doc.documentElement;
      let ownerWindow = (_a3 = doc.defaultView) != null ? _a3 : window;
      scrollbarWidthBefore = ownerWindow.innerWidth - documentElement.clientWidth;
    },
    after({ doc, d }) {
      let documentElement = doc.documentElement;
      let scrollbarWidthAfter = documentElement.clientWidth - documentElement.offsetWidth;
      let scrollbarWidth = scrollbarWidthBefore - scrollbarWidthAfter;
      d.style(documentElement, "paddingRight", `${scrollbarWidth}px`);
    }
  };
}

// src/hooks/document-overflow/handle-ios-locking.ts
function handleIOSLocking() {
  if (!isIOS()) {
    return {};
  }
  return {
    before({ doc, d, meta }) {
      function inAllowedContainer(el) {
        return meta.containers.flatMap((resolve) => resolve()).some((container) => container.contains(el));
      }
      d.microTask(() => {
        var _a3;
        if (window.getComputedStyle(doc.documentElement).scrollBehavior !== "auto") {
          let _d = disposables();
          _d.style(doc.documentElement, "scrollBehavior", "auto");
          d.add(() => d.microTask(() => _d.dispose()));
        }
        let scrollPosition = (_a3 = window.scrollY) != null ? _a3 : window.pageYOffset;
        let scrollToElement = null;
        d.addEventListener(
          doc,
          "click",
          (e) => {
            if (!(e.target instanceof HTMLElement)) {
              return;
            }
            try {
              let anchor = e.target.closest("a");
              if (!anchor)
                return;
              let { hash } = new URL(anchor.href);
              let el = doc.querySelector(hash);
              if (el && !inAllowedContainer(el)) {
                scrollToElement = el;
              }
            } catch (err) {
            }
          },
          true
        );
        d.addEventListener(doc, "touchstart", (e) => {
          if (e.target instanceof HTMLElement) {
            if (inAllowedContainer(e.target)) {
              let rootContainer = e.target;
              while (rootContainer.parentElement && inAllowedContainer(rootContainer.parentElement)) {
                rootContainer = rootContainer.parentElement;
              }
              d.style(rootContainer, "overscrollBehavior", "contain");
            } else {
              d.style(e.target, "touchAction", "none");
            }
          }
        });
        d.addEventListener(
          doc,
          "touchmove",
          (e) => {
            if (e.target instanceof HTMLElement) {
              if (inAllowedContainer(e.target)) {
                let scrollableParent = e.target;
                while (scrollableParent.parentElement && // Assumption: We are always used in a Headless UI Portal. Once we reach the
                // portal itself, we can stop crawling up the tree.
                scrollableParent.dataset.headlessuiPortal !== "") {
                  if (scrollableParent.scrollHeight > scrollableParent.clientHeight || scrollableParent.scrollWidth > scrollableParent.clientWidth) {
                    break;
                  }
                  scrollableParent = scrollableParent.parentElement;
                }
                if (scrollableParent.dataset.headlessuiPortal === "") {
                  e.preventDefault();
                }
              } else {
                e.preventDefault();
              }
            }
          },
          { passive: false }
        );
        d.add(() => {
          var _a4;
          let newScrollPosition = (_a4 = window.scrollY) != null ? _a4 : window.pageYOffset;
          if (scrollPosition !== newScrollPosition) {
            window.scrollTo(0, scrollPosition);
          }
          if (scrollToElement && scrollToElement.isConnected) {
            scrollToElement.scrollIntoView({ block: "nearest" });
            scrollToElement = null;
          }
        });
      });
    }
  };
}

// src/hooks/document-overflow/prevent-scroll.ts
function preventScroll() {
  return {
    before({ doc, d }) {
      d.style(doc.documentElement, "overflow", "hidden");
    }
  };
}

// src/hooks/document-overflow/overflow-store.ts
function buildMeta(fns) {
  let tmp = {};
  for (let fn of fns) {
    Object.assign(tmp, fn(tmp));
  }
  return tmp;
}
var overflows = createStore(() => /* @__PURE__ */ new Map(), {
  PUSH(doc, meta) {
    var _a3;
    let entry = (_a3 = this.get(doc)) != null ? _a3 : {
      doc,
      count: 0,
      d: disposables(),
      meta: /* @__PURE__ */ new Set()
    };
    entry.count++;
    entry.meta.add(meta);
    this.set(doc, entry);
    return this;
  },
  POP(doc, meta) {
    let entry = this.get(doc);
    if (entry) {
      entry.count--;
      entry.meta.delete(meta);
    }
    return this;
  },
  SCROLL_PREVENT({ doc, d, meta }) {
    let ctx = {
      doc,
      d,
      meta: buildMeta(meta)
    };
    let steps = [
      handleIOSLocking(),
      adjustScrollbarPadding(),
      preventScroll()
    ];
    steps.forEach(({ before }) => before == null ? void 0 : before(ctx));
    steps.forEach(({ after }) => after == null ? void 0 : after(ctx));
  },
  SCROLL_ALLOW({ d }) {
    d.dispose();
  },
  TEARDOWN({ doc }) {
    this.delete(doc);
  }
});
overflows.subscribe(() => {
  let docs = overflows.getSnapshot();
  let styles = /* @__PURE__ */ new Map();
  for (let [doc] of docs) {
    styles.set(doc, doc.documentElement.style.overflow);
  }
  for (let entry of docs.values()) {
    let isHidden = styles.get(entry.doc) === "hidden";
    let isLocked = entry.count !== 0;
    let willChange = isLocked && !isHidden || !isLocked && isHidden;
    if (willChange) {
      overflows.dispatch(entry.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", entry);
    }
    if (entry.count === 0) {
      overflows.dispatch("TEARDOWN", entry);
    }
  }
});

// src/hooks/document-overflow/use-document-overflow.ts
function useDocumentOverflowLockedEffect(doc, shouldBeLocked, meta) {
  let store = useStore(overflows);
  let entry = doc ? store.get(doc) : void 0;
  let locked = entry ? entry.count > 0 : false;
  useIsoMorphicEffect(() => {
    if (!doc || !shouldBeLocked) {
      return;
    }
    overflows.dispatch("PUSH", doc, meta);
    return () => overflows.dispatch("POP", doc, meta);
  }, [shouldBeLocked, doc]);
  return locked;
}

// src/hooks/use-inert.tsx
var originals = /* @__PURE__ */ new Map();
var counts = /* @__PURE__ */ new Map();
function useInert(node, enabled = true) {
  useIsoMorphicEffect(() => {
    var _a3;
    if (!enabled)
      return;
    let element = typeof node === "function" ? node() : node.current;
    if (!element)
      return;
    function cleanup() {
      var _a4;
      if (!element)
        return;
      let count2 = (_a4 = counts.get(element)) != null ? _a4 : 1;
      if (count2 === 1)
        counts.delete(element);
      else
        counts.set(element, count2 - 1);
      if (count2 !== 1)
        return;
      let original = originals.get(element);
      if (!original)
        return;
      if (original["aria-hidden"] === null)
        element.removeAttribute("aria-hidden");
      else
        element.setAttribute("aria-hidden", original["aria-hidden"]);
      element.inert = original.inert;
      originals.delete(element);
    }
    let count = (_a3 = counts.get(element)) != null ? _a3 : 0;
    counts.set(element, count + 1);
    if (count !== 0)
      return cleanup;
    originals.set(element, {
      "aria-hidden": element.getAttribute("aria-hidden"),
      inert: element.inert
    });
    element.setAttribute("aria-hidden", "true");
    element.inert = true;
    return cleanup;
  }, [node, enabled]);
}

// src/hooks/use-root-containers.tsx
var import_react27 = __toESM(require("react"), 1);
function useRootContainers({
  defaultContainers = [],
  portals,
  mainTreeNodeRef: _mainTreeNodeRef
} = {}) {
  var _a3;
  let mainTreeNodeRef = (0, import_react27.useRef)((_a3 = _mainTreeNodeRef == null ? void 0 : _mainTreeNodeRef.current) != null ? _a3 : null);
  let ownerDocument = useOwnerDocument(mainTreeNodeRef);
  let resolveContainers2 = useEvent(() => {
    var _a4, _b, _c;
    let containers = [];
    for (let container of defaultContainers) {
      if (container === null)
        continue;
      if (container instanceof HTMLElement) {
        containers.push(container);
      } else if ("current" in container && container.current instanceof HTMLElement) {
        containers.push(container.current);
      }
    }
    if (portals == null ? void 0 : portals.current) {
      for (let portal of portals.current) {
        containers.push(portal);
      }
    }
    for (let container of (_a4 = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("html > *, body > *")) != null ? _a4 : []) {
      if (container === document.body)
        continue;
      if (container === document.head)
        continue;
      if (!(container instanceof HTMLElement))
        continue;
      if (container.id === "headlessui-portal-root")
        continue;
      if (container.contains(mainTreeNodeRef.current))
        continue;
      if (container.contains((_c = (_b = mainTreeNodeRef.current) == null ? void 0 : _b.getRootNode()) == null ? void 0 : _c.host))
        continue;
      if (containers.some((defaultContainer) => container.contains(defaultContainer)))
        continue;
      containers.push(container);
    }
    return containers;
  });
  return {
    resolveContainers: resolveContainers2,
    contains: useEvent(
      (element) => resolveContainers2().some((container) => container.contains(element))
    ),
    mainTreeNodeRef,
    MainTreeNode: (0, import_react27.useMemo)(() => {
      return function MainTreeNode() {
        if (_mainTreeNodeRef != null)
          return null;
        return /* @__PURE__ */ import_react27.default.createElement(Hidden, { features: 4 /* Hidden */, ref: mainTreeNodeRef });
      };
    }, [mainTreeNodeRef, _mainTreeNodeRef])
  };
}
function useMainTreeNode() {
  let mainTreeNodeRef = (0, import_react27.useRef)(null);
  return {
    mainTreeNodeRef,
    MainTreeNode: (0, import_react27.useMemo)(() => {
      return function MainTreeNode() {
        return /* @__PURE__ */ import_react27.default.createElement(Hidden, { features: 4 /* Hidden */, ref: mainTreeNodeRef });
      };
    }, [mainTreeNodeRef])
  };
}

// src/internal/stack-context.tsx
var import_react28 = __toESM(require("react"), 1);
var StackContext = (0, import_react28.createContext)(() => {
});
StackContext.displayName = "StackContext";
function useStackContext() {
  return (0, import_react28.useContext)(StackContext);
}
function StackProvider({
  children,
  onUpdate,
  type,
  element,
  enabled
}) {
  let parentUpdate = useStackContext();
  let notify = useEvent((...args) => {
    onUpdate == null ? void 0 : onUpdate(...args);
    parentUpdate(...args);
  });
  useIsoMorphicEffect(() => {
    let shouldNotify = enabled === void 0 || enabled === true;
    shouldNotify && notify(0 /* Add */, type, element);
    return () => {
      shouldNotify && notify(1 /* Remove */, type, element);
    };
  }, [notify, type, element, enabled]);
  return /* @__PURE__ */ import_react28.default.createElement(StackContext.Provider, { value: notify }, children);
}

// src/components/description/description.tsx
var import_react29 = __toESM(require("react"), 1);
var DescriptionContext = (0, import_react29.createContext)(null);
function useDescriptionContext() {
  let context = (0, import_react29.useContext)(DescriptionContext);
  if (context === null) {
    let err = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }
  return context;
}
function useDescriptions() {
  let [descriptionIds, setDescriptionIds] = (0, import_react29.useState)([]);
  return [
    // The actual id's as string or undefined
    descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0,
    // The provider component
    (0, import_react29.useMemo)(() => {
      return function DescriptionProvider(props) {
        let register = useEvent((value) => {
          setDescriptionIds((existing) => [...existing, value]);
          return () => setDescriptionIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        });
        let contextBag = (0, import_react29.useMemo)(
          () => ({ register, slot: props.slot, name: props.name, props: props.props }),
          [register, props.slot, props.name, props.props]
        );
        return /* @__PURE__ */ import_react29.default.createElement(DescriptionContext.Provider, { value: contextBag }, props.children);
      };
    }, [setDescriptionIds])
  ];
}
var DEFAULT_DESCRIPTION_TAG = "p";
function DescriptionFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-description-${internalId}`, ...theirProps } = props;
  let context = useDescriptionContext();
  let descriptionRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id), [id, context.register]);
  let ourProps = { ref: descriptionRef, ...context.props, id };
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || "Description"
  });
}
var DescriptionRoot = forwardRefWithAs(DescriptionFn);
var Description = Object.assign(DescriptionRoot, {
  //
});

// src/components/dialog/dialog.tsx
var reducers2 = {
  [0 /* SetTitleId */](state, action) {
    if (state.titleId === action.id)
      return state;
    return { ...state, titleId: action.id };
  }
};
var DialogContext = (0, import_react30.createContext)(null);
DialogContext.displayName = "DialogContext";
function useDialogContext(component) {
  let context = (0, import_react30.useContext)(DialogContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Dialog /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDialogContext);
    throw err;
  }
  return context;
}
function useScrollLock(ownerDocument, enabled, resolveAllowedContainers = () => [document.body]) {
  useDocumentOverflowLockedEffect(ownerDocument, enabled, (meta) => {
    var _a3;
    return {
      containers: [...(_a3 = meta.containers) != null ? _a3 : [], resolveAllowedContainers]
    };
  });
}
function stateReducer2(state, action) {
  return match(action.type, reducers2, state, action);
}
var DEFAULT_DIALOG_TAG = "div";
var DialogRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
function DialogFn(props, ref) {
  let internalId = useId();
  let {
    id = `headlessui-dialog-${internalId}`,
    open,
    onClose,
    initialFocus,
    role = "dialog",
    __demoMode = false,
    ...theirProps
  } = props;
  let [nestedDialogCount, setNestedDialogCount] = (0, import_react30.useState)(0);
  let didWarnOnRole = (0, import_react30.useRef)(false);
  role = function() {
    if (role === "dialog" || role === "alertdialog") {
      return role;
    }
    if (!didWarnOnRole.current) {
      didWarnOnRole.current = true;
      console.warn(
        `Invalid role [${role}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
      );
    }
    return "dialog";
  }();
  let usesOpenClosedState = useOpenClosed();
  if (open === void 0 && usesOpenClosedState !== null) {
    open = (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
  }
  let internalDialogRef = (0, import_react30.useRef)(null);
  let dialogRef = useSyncRefs(internalDialogRef, ref);
  let ownerDocument = useOwnerDocument(internalDialogRef);
  let hasOpen = props.hasOwnProperty("open") || usesOpenClosedState !== null;
  let hasOnClose = props.hasOwnProperty("onClose");
  if (!hasOpen && !hasOnClose) {
    throw new Error(
      `You have to provide an \`open\` and an \`onClose\` prop to the \`Dialog\` component.`
    );
  }
  if (!hasOpen) {
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but forgot an \`open\` prop.`
    );
  }
  if (!hasOnClose) {
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but forgot an \`onClose\` prop.`
    );
  }
  if (typeof open !== "boolean") {
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${open}`
    );
  }
  if (typeof onClose !== "function") {
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${onClose}`
    );
  }
  let dialogState = open ? 0 /* Open */ : 1 /* Closed */;
  let [state, dispatch] = (0, import_react30.useReducer)(stateReducer2, {
    titleId: null,
    descriptionId: null,
    panelRef: (0, import_react30.createRef)()
  });
  let close = useEvent(() => onClose(false));
  let setTitleId = useEvent((id2) => dispatch({ type: 0 /* SetTitleId */, id: id2 }));
  let ready = useServerHandoffComplete();
  let enabled = ready ? __demoMode ? false : dialogState === 0 /* Open */ : false;
  let hasNestedDialogs = nestedDialogCount > 1;
  let hasParentDialog = (0, import_react30.useContext)(DialogContext) !== null;
  let [portals, PortalWrapper] = useNestedPortals();
  let defaultContainer = {
    get current() {
      var _a3;
      return (_a3 = state.panelRef.current) != null ? _a3 : internalDialogRef.current;
    }
  };
  let {
    resolveContainers: resolveRootContainers,
    mainTreeNodeRef,
    MainTreeNode
  } = useRootContainers({
    portals,
    defaultContainers: [defaultContainer]
  });
  let position = !hasNestedDialogs ? "leaf" : "parent";
  let isClosing = usesOpenClosedState !== null ? (usesOpenClosedState & 4 /* Closing */) === 4 /* Closing */ : false;
  let inertOthersEnabled = (() => {
    if (hasParentDialog)
      return false;
    if (isClosing)
      return false;
    return enabled;
  })();
  let resolveRootOfMainTreeNode = (0, import_react30.useCallback)(() => {
    var _a3, _b;
    return (_b = Array.from((_a3 = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("body > *")) != null ? _a3 : []).find((root) => {
      if (root.id === "headlessui-portal-root")
        return false;
      return root.contains(mainTreeNodeRef.current) && root instanceof HTMLElement;
    })) != null ? _b : null;
  }, [mainTreeNodeRef]);
  useInert(resolveRootOfMainTreeNode, inertOthersEnabled);
  let inertParentDialogs = (() => {
    if (hasNestedDialogs)
      return true;
    return enabled;
  })();
  let resolveRootOfParentDialog = (0, import_react30.useCallback)(() => {
    var _a3, _b;
    return (_b = Array.from((_a3 = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("[data-headlessui-portal]")) != null ? _a3 : []).find(
      (root) => root.contains(mainTreeNodeRef.current) && root instanceof HTMLElement
    )) != null ? _b : null;
  }, [mainTreeNodeRef]);
  useInert(resolveRootOfParentDialog, inertParentDialogs);
  let outsideClickEnabled = (() => {
    if (!enabled)
      return false;
    if (hasNestedDialogs)
      return false;
    return true;
  })();
  useOutsideClick(
    resolveRootContainers,
    (event) => {
      event.preventDefault();
      close();
    },
    outsideClickEnabled
  );
  let escapeToCloseEnabled = (() => {
    if (hasNestedDialogs)
      return false;
    if (dialogState !== 0 /* Open */)
      return false;
    return true;
  })();
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "keydown", (event) => {
    if (!escapeToCloseEnabled)
      return;
    if (event.defaultPrevented)
      return;
    if (event.key !== "Escape" /* Escape */)
      return;
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  let scrollLockEnabled = (() => {
    if (isClosing)
      return false;
    if (dialogState !== 0 /* Open */)
      return false;
    if (hasParentDialog)
      return false;
    return true;
  })();
  useScrollLock(ownerDocument, scrollLockEnabled, resolveRootContainers);
  (0, import_react30.useEffect)(() => {
    if (dialogState !== 0 /* Open */)
      return;
    if (!internalDialogRef.current)
      return;
    let observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        let rect = entry.target.getBoundingClientRect();
        if (rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return () => observer.disconnect();
  }, [dialogState, internalDialogRef, close]);
  let [describedby, DescriptionProvider] = useDescriptions();
  let contextBag = (0, import_react30.useMemo)(
    () => [{ dialogState, close, setTitleId }, state],
    [dialogState, state, close, setTitleId]
  );
  let slot = (0, import_react30.useMemo)(
    () => ({ open: dialogState === 0 /* Open */ }),
    [dialogState]
  );
  let ourProps = {
    ref: dialogRef,
    id,
    role,
    "aria-modal": dialogState === 0 /* Open */ ? true : void 0,
    "aria-labelledby": state.titleId,
    "aria-describedby": describedby
  };
  return /* @__PURE__ */ import_react30.default.createElement(
    StackProvider,
    {
      type: "Dialog",
      enabled: dialogState === 0 /* Open */,
      element: internalDialogRef,
      onUpdate: useEvent((message, type) => {
        if (type !== "Dialog")
          return;
        match(message, {
          [0 /* Add */]: () => setNestedDialogCount((count) => count + 1),
          [1 /* Remove */]: () => setNestedDialogCount((count) => count - 1)
        });
      })
    },
    /* @__PURE__ */ import_react30.default.createElement(ForcePortalRoot, { force: true }, /* @__PURE__ */ import_react30.default.createElement(Portal, null, /* @__PURE__ */ import_react30.default.createElement(DialogContext.Provider, { value: contextBag }, /* @__PURE__ */ import_react30.default.createElement(Portal.Group, { target: internalDialogRef }, /* @__PURE__ */ import_react30.default.createElement(ForcePortalRoot, { force: false }, /* @__PURE__ */ import_react30.default.createElement(DescriptionProvider, { slot, name: "Dialog.Description" }, /* @__PURE__ */ import_react30.default.createElement(
      FocusTrap,
      {
        initialFocus,
        containers: resolveRootContainers,
        features: enabled ? match(position, {
          parent: FocusTrap.features.RestoreFocus,
          leaf: FocusTrap.features.All & ~FocusTrap.features.FocusLock
        }) : FocusTrap.features.None
      },
      /* @__PURE__ */ import_react30.default.createElement(PortalWrapper, null, render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_DIALOG_TAG,
        features: DialogRenderFeatures,
        visible: dialogState === 0 /* Open */,
        name: "Dialog"
      }))
    ))))))),
    /* @__PURE__ */ import_react30.default.createElement(MainTreeNode, null)
  );
}
var DEFAULT_OVERLAY_TAG = "div";
function OverlayFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-dialog-overlay-${internalId}`, ...theirProps } = props;
  let [{ dialogState, close }] = useDialogContext("Dialog.Overlay");
  let overlayRef = useSyncRefs(ref);
  let handleClick = useEvent((event) => {
    if (event.target !== event.currentTarget)
      return;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  let slot = (0, import_react30.useMemo)(
    () => ({ open: dialogState === 0 /* Open */ }),
    [dialogState]
  );
  let ourProps = {
    ref: overlayRef,
    id,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: "Dialog.Overlay"
  });
}
var DEFAULT_BACKDROP_TAG = "div";
function BackdropFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-dialog-backdrop-${internalId}`, ...theirProps } = props;
  let [{ dialogState }, state] = useDialogContext("Dialog.Backdrop");
  let backdropRef = useSyncRefs(ref);
  (0, import_react30.useEffect)(() => {
    if (state.panelRef.current === null) {
      throw new Error(
        `A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.`
      );
    }
  }, [state.panelRef]);
  let slot = (0, import_react30.useMemo)(
    () => ({ open: dialogState === 0 /* Open */ }),
    [dialogState]
  );
  let ourProps = {
    ref: backdropRef,
    id,
    "aria-hidden": true
  };
  return /* @__PURE__ */ import_react30.default.createElement(ForcePortalRoot, { force: true }, /* @__PURE__ */ import_react30.default.createElement(Portal, null, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BACKDROP_TAG,
    name: "Dialog.Backdrop"
  })));
}
var DEFAULT_PANEL_TAG = "div";
function PanelFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-dialog-panel-${internalId}`, ...theirProps } = props;
  let [{ dialogState }, state] = useDialogContext("Dialog.Panel");
  let panelRef = useSyncRefs(ref, state.panelRef);
  let slot = (0, import_react30.useMemo)(
    () => ({ open: dialogState === 0 /* Open */ }),
    [dialogState]
  );
  let handleClick = useEvent((event) => {
    event.stopPropagation();
  });
  let ourProps = {
    ref: panelRef,
    id,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    name: "Dialog.Panel"
  });
}
var DEFAULT_TITLE_TAG = "h2";
function TitleFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-dialog-title-${internalId}`, ...theirProps } = props;
  let [{ dialogState, setTitleId }] = useDialogContext("Dialog.Title");
  let titleRef = useSyncRefs(ref);
  (0, import_react30.useEffect)(() => {
    setTitleId(id);
    return () => setTitleId(null);
  }, [id, setTitleId]);
  let slot = (0, import_react30.useMemo)(
    () => ({ open: dialogState === 0 /* Open */ }),
    [dialogState]
  );
  let ourProps = { ref: titleRef, id };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: "Dialog.Title"
  });
}
var DialogRoot = forwardRefWithAs(DialogFn);
var Backdrop = forwardRefWithAs(BackdropFn);
var Panel = forwardRefWithAs(PanelFn);
var Overlay = forwardRefWithAs(OverlayFn);
var Title = forwardRefWithAs(TitleFn);
var Dialog = Object.assign(DialogRoot, {
  Backdrop,
  Panel,
  Overlay,
  Title,
  Description
});

// src/components/disclosure/disclosure.tsx
var import_react32 = __toESM(require("react"), 1);

// src/utils/start-transition.ts
var import_react31 = __toESM(require("react"), 1);
var _a2;
var startTransition = (
  // Prefer React's `startTransition` if it's available.
  // @ts-expect-error - `startTransition` doesn't exist in React < 18.
  (_a2 = import_react31.default.startTransition) != null ? _a2 : function startTransition2(cb) {
    cb();
  }
);

// src/components/disclosure/disclosure.tsx
var reducers3 = {
  [0 /* ToggleDisclosure */]: (state) => ({
    ...state,
    disclosureState: match(state.disclosureState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* CloseDisclosure */]: (state) => {
    if (state.disclosureState === 1 /* Closed */)
      return state;
    return { ...state, disclosureState: 1 /* Closed */ };
  },
  [4 /* LinkPanel */](state) {
    if (state.linkedPanel === true)
      return state;
    return { ...state, linkedPanel: true };
  },
  [5 /* UnlinkPanel */](state) {
    if (state.linkedPanel === false)
      return state;
    return { ...state, linkedPanel: false };
  },
  [2 /* SetButtonId */](state, action) {
    if (state.buttonId === action.buttonId)
      return state;
    return { ...state, buttonId: action.buttonId };
  },
  [3 /* SetPanelId */](state, action) {
    if (state.panelId === action.panelId)
      return state;
    return { ...state, panelId: action.panelId };
  }
};
var DisclosureContext = (0, import_react32.createContext)(null);
DisclosureContext.displayName = "DisclosureContext";
function useDisclosureContext(component) {
  let context = (0, import_react32.useContext)(DisclosureContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }
  return context;
}
var DisclosureAPIContext = (0, import_react32.createContext)(null);
DisclosureAPIContext.displayName = "DisclosureAPIContext";
function useDisclosureAPIContext(component) {
  let context = (0, import_react32.useContext)(DisclosureAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }
  return context;
}
var DisclosurePanelContext = (0, import_react32.createContext)(null);
DisclosurePanelContext.displayName = "DisclosurePanelContext";
function useDisclosurePanelContext() {
  return (0, import_react32.useContext)(DisclosurePanelContext);
}
function stateReducer3(state, action) {
  return match(action.type, reducers3, state, action);
}
var DEFAULT_DISCLOSURE_TAG = import_react32.Fragment;
function DisclosureFn(props, ref) {
  let { defaultOpen = false, ...theirProps } = props;
  let internalDisclosureRef = (0, import_react32.useRef)(null);
  let disclosureRef = useSyncRefs(
    ref,
    optionalRef(
      (ref2) => {
        internalDisclosureRef.current = ref2;
      },
      props.as === void 0 || // @ts-expect-error The `as` prop _can_ be a Fragment
      props.as === import_react32.Fragment
    )
  );
  let panelRef = (0, import_react32.useRef)(null);
  let buttonRef = (0, import_react32.useRef)(null);
  let reducerBag = (0, import_react32.useReducer)(stateReducer3, {
    disclosureState: defaultOpen ? 0 /* Open */ : 1 /* Closed */,
    linkedPanel: false,
    buttonRef,
    panelRef,
    buttonId: null,
    panelId: null
  });
  let [{ disclosureState, buttonId }, dispatch] = reducerBag;
  let close = useEvent((focusableElement) => {
    dispatch({ type: 1 /* CloseDisclosure */ });
    let ownerDocument = getOwnerDocument(internalDisclosureRef);
    if (!ownerDocument)
      return;
    if (!buttonId)
      return;
    let restoreElement = (() => {
      if (!focusableElement)
        return ownerDocument.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return ownerDocument.getElementById(buttonId);
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  });
  let api = (0, import_react32.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react32.useMemo)(
    () => ({ open: disclosureState === 0 /* Open */, close }),
    [disclosureState, close]
  );
  let ourProps = {
    ref: disclosureRef
  };
  return /* @__PURE__ */ import_react32.default.createElement(DisclosureContext.Provider, { value: reducerBag }, /* @__PURE__ */ import_react32.default.createElement(DisclosureAPIContext.Provider, { value: api }, /* @__PURE__ */ import_react32.default.createElement(
    OpenClosedProvider,
    {
      value: match(disclosureState, {
        [0 /* Open */]: 1 /* Open */,
        [1 /* Closed */]: 2 /* Closed */
      })
    },
    render({
      ourProps,
      theirProps,
      slot,
      defaultTag: DEFAULT_DISCLOSURE_TAG,
      name: "Disclosure"
    })
  )));
}
var DEFAULT_BUTTON_TAG2 = "button";
function ButtonFn2(props, ref) {
  let internalId = useId();
  let { id = `headlessui-disclosure-button-${internalId}`, ...theirProps } = props;
  let [state, dispatch] = useDisclosureContext("Disclosure.Button");
  let panelContext = useDisclosurePanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state.panelId;
  let internalButtonRef = (0, import_react32.useRef)(null);
  let buttonRef = useSyncRefs(internalButtonRef, ref, !isWithinPanel ? state.buttonRef : null);
  let mergeRefs = useMergeRefsFn();
  (0, import_react32.useEffect)(() => {
    if (isWithinPanel)
      return;
    dispatch({ type: 2 /* SetButtonId */, buttonId: id });
    return () => {
      dispatch({ type: 2 /* SetButtonId */, buttonId: null });
    };
  }, [id, dispatch, isWithinPanel]);
  let handleKeyDown = useEvent((event) => {
    var _a3;
    if (isWithinPanel) {
      if (state.disclosureState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          (_a3 = state.buttonRef.current) == null ? void 0 : _a3.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          break;
      }
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    var _a3;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 0 /* ToggleDisclosure */ });
      (_a3 = state.buttonRef.current) == null ? void 0 : _a3.focus();
    } else {
      dispatch({ type: 0 /* ToggleDisclosure */ });
    }
  });
  let slot = (0, import_react32.useMemo)(
    () => ({ open: state.disclosureState === 0 /* Open */ }),
    [state]
  );
  let type = useResolveButtonType(props, internalButtonRef);
  let ourProps = isWithinPanel ? { ref: buttonRef, type, onKeyDown: handleKeyDown, onClick: handleClick } : {
    ref: buttonRef,
    id,
    type,
    "aria-expanded": state.disclosureState === 0 /* Open */,
    "aria-controls": state.linkedPanel ? state.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    mergeRefs,
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG2,
    name: "Disclosure.Button"
  });
}
var DEFAULT_PANEL_TAG2 = "div";
var PanelRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
function PanelFn2(props, ref) {
  let internalId = useId();
  let { id = `headlessui-disclosure-panel-${internalId}`, ...theirProps } = props;
  let [state, dispatch] = useDisclosureContext("Disclosure.Panel");
  let { close } = useDisclosureAPIContext("Disclosure.Panel");
  let mergeRefs = useMergeRefsFn();
  let panelRef = useSyncRefs(ref, state.panelRef, (el) => {
    startTransition(() => dispatch({ type: el ? 4 /* LinkPanel */ : 5 /* UnlinkPanel */ }));
  });
  (0, import_react32.useEffect)(() => {
    dispatch({ type: 3 /* SetPanelId */, panelId: id });
    return () => {
      dispatch({ type: 3 /* SetPanelId */, panelId: null });
    };
  }, [id, dispatch]);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return state.disclosureState === 0 /* Open */;
  })();
  let slot = (0, import_react32.useMemo)(
    () => ({ open: state.disclosureState === 0 /* Open */, close }),
    [state, close]
  );
  let ourProps = {
    ref: panelRef,
    id
  };
  return /* @__PURE__ */ import_react32.default.createElement(DisclosurePanelContext.Provider, { value: state.panelId }, render({
    mergeRefs,
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG2,
    features: PanelRenderFeatures,
    visible,
    name: "Disclosure.Panel"
  }));
}
var DisclosureRoot = forwardRefWithAs(DisclosureFn);
var Button2 = forwardRefWithAs(ButtonFn2);
var Panel2 = forwardRefWithAs(PanelFn2);
var Disclosure = Object.assign(DisclosureRoot, { Button: Button2, Panel: Panel2 });

// src/components/listbox/listbox.tsx
var import_react34 = __toESM(require("react"), 1);

// src/hooks/use-text-value.ts
var import_react33 = require("react");

// src/utils/get-text-value.ts
var emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function getTextContents(element) {
  var _a3, _b;
  let currentInnerText = (_a3 = element.innerText) != null ? _a3 : "";
  let copy = element.cloneNode(true);
  if (!(copy instanceof HTMLElement)) {
    return currentInnerText;
  }
  let dropped = false;
  for (let child of copy.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) {
    child.remove();
    dropped = true;
  }
  let value = dropped ? (_b = copy.innerText) != null ? _b : "" : currentInnerText;
  if (emojiRegex.test(value)) {
    value = value.replace(emojiRegex, "");
  }
  return value;
}
function getTextValue(element) {
  let label = element.getAttribute("aria-label");
  if (typeof label === "string")
    return label.trim();
  let labelledby = element.getAttribute("aria-labelledby");
  if (labelledby) {
    let labels = labelledby.split(" ").map((labelledby2) => {
      let labelEl = document.getElementById(labelledby2);
      if (labelEl) {
        let label2 = labelEl.getAttribute("aria-label");
        if (typeof label2 === "string")
          return label2.trim();
        return getTextContents(labelEl).trim();
      }
      return null;
    }).filter(Boolean);
    if (labels.length > 0)
      return labels.join(", ");
  }
  return getTextContents(element).trim();
}

// src/hooks/use-text-value.ts
function useTextValue(element) {
  let cacheKey = (0, import_react33.useRef)("");
  let cacheValue = (0, import_react33.useRef)("");
  return useEvent(() => {
    let el = element.current;
    if (!el)
      return "";
    let currentKey = el.innerText;
    if (cacheKey.current === currentKey) {
      return cacheValue.current;
    }
    let value = getTextValue(el).trim().toLowerCase();
    cacheKey.current = currentKey;
    cacheValue.current = value;
    return value;
  });
}

// src/components/listbox/listbox.tsx
function adjustOrderedState2(state, adjustment = (i) => i) {
  let currentActiveOption = state.activeOptionIndex !== null ? state.options[state.activeOptionIndex] : null;
  let sortedOptions = sortByDomNode(
    adjustment(state.options.slice()),
    (option) => option.dataRef.current.domRef.current
  );
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers4 = {
  [1 /* CloseListbox */](state) {
    if (state.dataRef.current.disabled)
      return state;
    if (state.listboxState === 1 /* Closed */)
      return state;
    return { ...state, activeOptionIndex: null, listboxState: 1 /* Closed */ };
  },
  [0 /* OpenListbox */](state) {
    if (state.dataRef.current.disabled)
      return state;
    if (state.listboxState === 0 /* Open */)
      return state;
    let activeOptionIndex = state.activeOptionIndex;
    let { isSelected } = state.dataRef.current;
    let optionIdx = state.options.findIndex((option) => isSelected(option.dataRef.current.value));
    if (optionIdx !== -1) {
      activeOptionIndex = optionIdx;
    }
    return { ...state, listboxState: 0 /* Open */, activeOptionIndex };
  },
  [2 /* GoToOption */](state, action) {
    var _a3;
    if (state.dataRef.current.disabled)
      return state;
    if (state.listboxState === 1 /* Closed */)
      return state;
    let adjustedState = adjustOrderedState2(state);
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (option) => option.id,
      resolveDisabled: (option) => option.dataRef.current.disabled
    });
    return {
      ...state,
      ...adjustedState,
      searchQuery: "",
      activeOptionIndex,
      activationTrigger: (_a3 = action.trigger) != null ? _a3 : 1 /* Other */
    };
  },
  [3 /* Search */]: (state, action) => {
    if (state.dataRef.current.disabled)
      return state;
    if (state.listboxState === 1 /* Closed */)
      return state;
    let wasAlreadySearching = state.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state.searchQuery + action.value.toLowerCase();
    let reOrderedOptions = state.activeOptionIndex !== null ? state.options.slice(state.activeOptionIndex + offset).concat(state.options.slice(0, state.activeOptionIndex + offset)) : state.options;
    let matchingOption = reOrderedOptions.find(
      (option) => {
        var _a3;
        return !option.dataRef.current.disabled && ((_a3 = option.dataRef.current.textValue) == null ? void 0 : _a3.startsWith(searchQuery));
      }
    );
    let matchIdx = matchingOption ? state.options.indexOf(matchingOption) : -1;
    if (matchIdx === -1 || matchIdx === state.activeOptionIndex)
      return { ...state, searchQuery };
    return {
      ...state,
      searchQuery,
      activeOptionIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [4 /* ClearSearch */](state) {
    if (state.dataRef.current.disabled)
      return state;
    if (state.listboxState === 1 /* Closed */)
      return state;
    if (state.searchQuery === "")
      return state;
    return { ...state, searchQuery: "" };
  },
  [5 /* RegisterOption */]: (state, action) => {
    let option = { id: action.id, dataRef: action.dataRef };
    let adjustedState = adjustOrderedState2(state, (options) => [...options, option]);
    if (state.activeOptionIndex === null) {
      if (state.dataRef.current.isSelected(action.dataRef.current.value)) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    return { ...state, ...adjustedState };
  },
  [6 /* UnregisterOption */]: (state, action) => {
    let adjustedState = adjustOrderedState2(state, (options) => {
      let idx = options.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  },
  [7 /* RegisterLabel */]: (state, action) => {
    return {
      ...state,
      labelId: action.id
    };
  }
};
var ListboxActionsContext = (0, import_react34.createContext)(null);
ListboxActionsContext.displayName = "ListboxActionsContext";
function useActions2(component) {
  let context = (0, import_react34.useContext)(ListboxActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions2);
    throw err;
  }
  return context;
}
var ListboxDataContext = (0, import_react34.createContext)(null);
ListboxDataContext.displayName = "ListboxDataContext";
function useData2(component) {
  let context = (0, import_react34.useContext)(ListboxDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData2);
    throw err;
  }
  return context;
}
function stateReducer4(state, action) {
  return match(action.type, reducers4, state, action);
}
var DEFAULT_LISTBOX_TAG = import_react34.Fragment;
function ListboxFn(props, ref) {
  let {
    value: controlledValue,
    defaultValue,
    form: formName,
    name,
    onChange: controlledOnChange,
    by = (a, z) => a === z,
    disabled = false,
    horizontal = false,
    multiple = false,
    ...theirProps
  } = props;
  const orientation = horizontal ? "horizontal" : "vertical";
  let listboxRef = useSyncRefs(ref);
  let [value = multiple ? [] : void 0, theirOnChange] = useControllable(
    controlledValue,
    controlledOnChange,
    defaultValue
  );
  let [state, dispatch] = (0, import_react34.useReducer)(stateReducer4, {
    dataRef: (0, import_react34.createRef)(),
    listboxState: 1 /* Closed */,
    options: [],
    searchQuery: "",
    labelId: null,
    activeOptionIndex: null,
    activationTrigger: 1 /* Other */
  });
  let optionsPropsRef = (0, import_react34.useRef)({ static: false, hold: false });
  let labelRef = (0, import_react34.useRef)(null);
  let buttonRef = (0, import_react34.useRef)(null);
  let optionsRef = (0, import_react34.useRef)(null);
  let compare = useEvent(
    typeof by === "string" ? (a, z) => {
      let property = by;
      return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
    } : by
  );
  let isSelected = (0, import_react34.useCallback)(
    (compareValue) => match(data.mode, {
      [1 /* Multi */]: () => value.some((option) => compare(option, compareValue)),
      [0 /* Single */]: () => compare(value, compareValue)
    }),
    [value]
  );
  let data = (0, import_react34.useMemo)(
    () => ({
      ...state,
      value,
      disabled,
      mode: multiple ? 1 /* Multi */ : 0 /* Single */,
      orientation,
      compare,
      isSelected,
      optionsPropsRef,
      labelRef,
      buttonRef,
      optionsRef
    }),
    [value, disabled, multiple, state]
  );
  useIsoMorphicEffect(() => {
    state.dataRef.current = data;
  }, [data]);
  useOutsideClick(
    [data.buttonRef, data.optionsRef],
    (event, target) => {
      var _a3;
      dispatch({ type: 1 /* CloseListbox */ });
      if (!isFocusableElement(target, 1 /* Loose */)) {
        event.preventDefault();
        (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus();
      }
    },
    data.listboxState === 0 /* Open */
  );
  let slot = (0, import_react34.useMemo)(
    () => ({ open: data.listboxState === 0 /* Open */, disabled, value }),
    [data, disabled, value]
  );
  let selectOption = useEvent((id) => {
    let option = data.options.find((item) => item.id === id);
    if (!option)
      return;
    onChange(option.dataRef.current.value);
  });
  let selectActiveOption = useEvent(() => {
    if (data.activeOptionIndex !== null) {
      let { dataRef, id } = data.options[data.activeOptionIndex];
      onChange(dataRef.current.value);
      dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, id });
    }
  });
  let openListbox = useEvent(() => dispatch({ type: 0 /* OpenListbox */ }));
  let closeListbox = useEvent(() => dispatch({ type: 1 /* CloseListbox */ }));
  let goToOption = useEvent((focus, id, trigger) => {
    if (focus === 4 /* Specific */) {
      return dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, id, trigger });
    }
    return dispatch({ type: 2 /* GoToOption */, focus, trigger });
  });
  let registerOption = useEvent((id, dataRef) => {
    dispatch({ type: 5 /* RegisterOption */, id, dataRef });
    return () => dispatch({ type: 6 /* UnregisterOption */, id });
  });
  let registerLabel = useEvent((id) => {
    dispatch({ type: 7 /* RegisterLabel */, id });
    return () => dispatch({ type: 7 /* RegisterLabel */, id: null });
  });
  let onChange = useEvent((value2) => {
    return match(data.mode, {
      [0 /* Single */]() {
        return theirOnChange == null ? void 0 : theirOnChange(value2);
      },
      [1 /* Multi */]() {
        let copy = data.value.slice();
        let idx = copy.findIndex((item) => compare(item, value2));
        if (idx === -1) {
          copy.push(value2);
        } else {
          copy.splice(idx, 1);
        }
        return theirOnChange == null ? void 0 : theirOnChange(copy);
      }
    });
  });
  let search = useEvent((value2) => dispatch({ type: 3 /* Search */, value: value2 }));
  let clearSearch = useEvent(() => dispatch({ type: 4 /* ClearSearch */ }));
  let actions = (0, import_react34.useMemo)(
    () => ({
      onChange,
      registerOption,
      registerLabel,
      goToOption,
      closeListbox,
      openListbox,
      selectActiveOption,
      selectOption,
      search,
      clearSearch
    }),
    []
  );
  let ourProps = { ref: listboxRef };
  let form = (0, import_react34.useRef)(null);
  let d = useDisposables();
  (0, import_react34.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      theirOnChange == null ? void 0 : theirOnChange(defaultValue);
    });
  }, [
    form,
    theirOnChange
    /* Explicitly ignoring `defaultValue` */
  ]);
  return /* @__PURE__ */ import_react34.default.createElement(ListboxActionsContext.Provider, { value: actions }, /* @__PURE__ */ import_react34.default.createElement(ListboxDataContext.Provider, { value: data }, /* @__PURE__ */ import_react34.default.createElement(
    OpenClosedProvider,
    {
      value: match(data.listboxState, {
        [0 /* Open */]: 1 /* Open */,
        [1 /* Closed */]: 2 /* Closed */
      })
    },
    name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react34.default.createElement(
      Hidden,
      {
        features: 4 /* Hidden */,
        ref: idx === 0 ? (element) => {
          var _a3;
          form.current = (_a3 = element == null ? void 0 : element.closest("form")) != null ? _a3 : null;
        } : void 0,
        ...compact({
          key: name2,
          as: "input",
          type: "hidden",
          hidden: true,
          readOnly: true,
          form: formName,
          disabled,
          name: name2,
          value: value2
        })
      }
    )),
    render({ ourProps, theirProps, slot, defaultTag: DEFAULT_LISTBOX_TAG, name: "Listbox" })
  )));
}
var DEFAULT_BUTTON_TAG3 = "button";
function ButtonFn3(props, ref) {
  var _a3;
  let internalId = useId();
  let { id = `headlessui-listbox-button-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Button");
  let actions = useActions2("Listbox.Button");
  let buttonRef = useSyncRefs(data.buttonRef, ref);
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        actions.openListbox();
        d.nextFrame(() => {
          if (!data.value)
            actions.goToOption(0 /* First */);
        });
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        actions.openListbox();
        d.nextFrame(() => {
          if (!data.value)
            actions.goToOption(3 /* Last */);
        });
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (data.listboxState === 0 /* Open */) {
      actions.closeListbox();
      d.nextFrame(() => {
        var _a4;
        return (_a4 = data.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      actions.openListbox();
    }
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId, id].join(" ");
  }, [data.labelId, id]);
  let slot = (0, import_react34.useMemo)(
    () => ({
      open: data.listboxState === 0 /* Open */,
      disabled: data.disabled,
      value: data.value
    }),
    [data]
  );
  let ourProps = {
    ref: buttonRef,
    id,
    type: useResolveButtonType(props, data.buttonRef),
    "aria-haspopup": "listbox",
    "aria-controls": (_a3 = data.optionsRef.current) == null ? void 0 : _a3.id,
    "aria-expanded": data.listboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: data.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG3,
    name: "Listbox.Button"
  });
}
var DEFAULT_LABEL_TAG2 = "label";
function LabelFn2(props, ref) {
  let internalId = useId();
  let { id = `headlessui-listbox-label-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Label");
  let actions = useActions2("Listbox.Label");
  let labelRef = useSyncRefs(data.labelRef, ref);
  useIsoMorphicEffect(() => actions.registerLabel(id), [id]);
  let handleClick = useEvent(() => {
    var _a3;
    return (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
  });
  let slot = (0, import_react34.useMemo)(
    () => ({ open: data.listboxState === 0 /* Open */, disabled: data.disabled }),
    [data]
  );
  let ourProps = { ref: labelRef, id, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG2,
    name: "Listbox.Label"
  });
}
var DEFAULT_OPTIONS_TAG2 = "ul";
var OptionsRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
function OptionsFn2(props, ref) {
  var _a3;
  let internalId = useId();
  let { id = `headlessui-listbox-options-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Options");
  let actions = useActions2("Listbox.Options");
  let optionsRef = useSyncRefs(data.optionsRef, ref);
  let d = useDisposables();
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return data.listboxState === 0 /* Open */;
  })();
  (0, import_react34.useEffect)(() => {
    var _a4;
    let container = data.optionsRef.current;
    if (!container)
      return;
    if (data.listboxState !== 0 /* Open */)
      return;
    if (container === ((_a4 = getOwnerDocument(container)) == null ? void 0 : _a4.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [data.listboxState, data.optionsRef]);
  let handleKeyDown = useEvent((event) => {
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (data.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return actions.search(event.key);
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        if (data.activeOptionIndex !== null) {
          let { dataRef } = data.options[data.activeOptionIndex];
          actions.onChange(dataRef.current.value);
        }
        if (data.mode === 0 /* Single */) {
          actions.closeListbox();
          disposables().nextFrame(() => {
            var _a4;
            return (_a4 = data.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
          });
        }
        break;
      case match(data.orientation, { vertical: "ArrowDown" /* ArrowDown */, horizontal: "ArrowRight" /* ArrowRight */ }):
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(2 /* Next */);
      case match(data.orientation, { vertical: "ArrowUp" /* ArrowUp */, horizontal: "ArrowLeft" /* ArrowLeft */ }):
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(1 /* Previous */);
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        actions.closeListbox();
        return d.nextFrame(() => {
          var _a4;
          return (_a4 = data.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          actions.search(event.key);
          searchDisposables.setTimeout(() => actions.clearSearch(), 350);
        }
        break;
    }
  });
  let labelledby = useComputed(() => {
    var _a4;
    return (_a4 = data.buttonRef.current) == null ? void 0 : _a4.id;
  }, [data.buttonRef.current]);
  let slot = (0, import_react34.useMemo)(
    () => ({ open: data.listboxState === 0 /* Open */ }),
    [data]
  );
  let ourProps = {
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_a3 = data.options[data.activeOptionIndex]) == null ? void 0 : _a3.id,
    "aria-multiselectable": data.mode === 1 /* Multi */ ? true : void 0,
    "aria-labelledby": labelledby,
    "aria-orientation": data.orientation,
    id,
    onKeyDown: handleKeyDown,
    role: "listbox",
    tabIndex: 0,
    ref: optionsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG2,
    features: OptionsRenderFeatures2,
    visible,
    name: "Listbox.Options"
  });
}
var DEFAULT_OPTION_TAG2 = "li";
function OptionFn2(props, ref) {
  let internalId = useId();
  let {
    id = `headlessui-listbox-option-${internalId}`,
    disabled = false,
    value,
    ...theirProps
  } = props;
  let data = useData2("Listbox.Option");
  let actions = useActions2("Listbox.Option");
  let active = data.activeOptionIndex !== null ? data.options[data.activeOptionIndex].id === id : false;
  let selected = data.isSelected(value);
  let internalOptionRef = (0, import_react34.useRef)(null);
  let getTextValue2 = useTextValue(internalOptionRef);
  let bag = useLatestValue({
    disabled,
    value,
    domRef: internalOptionRef,
    get textValue() {
      return getTextValue2();
    }
  });
  let optionRef = useSyncRefs(ref, internalOptionRef);
  useIsoMorphicEffect(() => {
    if (data.listboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (data.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a3, _b;
      (_b = (_a3 = internalOptionRef.current) == null ? void 0 : _a3.scrollIntoView) == null ? void 0 : _b.call(_a3, { block: "nearest" });
    });
    return d.dispose;
  }, [
    internalOptionRef,
    active,
    data.listboxState,
    data.activationTrigger,
    /* We also want to trigger this when the position of the active item changes so that we can re-trigger the scrollIntoView */
    data.activeOptionIndex
  ]);
  useIsoMorphicEffect(() => actions.registerOption(id, bag), [bag, id]);
  let handleClick = useEvent((event) => {
    if (disabled)
      return event.preventDefault();
    actions.onChange(value);
    if (data.mode === 0 /* Single */) {
      actions.closeListbox();
      disposables().nextFrame(() => {
        var _a3;
        return (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
      });
    }
  });
  let handleFocus = useEvent(() => {
    if (disabled)
      return actions.goToOption(5 /* Nothing */);
    actions.goToOption(4 /* Specific */, id);
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (active)
      return;
    actions.goToOption(4 /* Specific */, id, 0 /* Pointer */);
  });
  let handleLeave = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (!active)
      return;
    actions.goToOption(5 /* Nothing */);
  });
  let slot = (0, import_react34.useMemo)(
    () => ({ active, selected, disabled }),
    [active, selected, disabled]
  );
  let ourProps = {
    id,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    // According to the WAI-ARIA best practices, we should use aria-checked for
    // multi-select,but Voice-Over disagrees. So we use aria-checked instead for
    // both single and multi-select.
    "aria-selected": selected,
    disabled: void 0,
    // Never forward the `disabled` prop
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG2,
    name: "Listbox.Option"
  });
}
var ListboxRoot = forwardRefWithAs(ListboxFn);
var Button3 = forwardRefWithAs(ButtonFn3);
var Label2 = forwardRefWithAs(LabelFn2);
var Options2 = forwardRefWithAs(OptionsFn2);
var Option2 = forwardRefWithAs(OptionFn2);
var Listbox = Object.assign(ListboxRoot, { Button: Button3, Label: Label2, Options: Options2, Option: Option2 });

// src/components/menu/menu.tsx
var import_react35 = __toESM(require("react"), 1);
function adjustOrderedState3(state, adjustment = (i) => i) {
  let currentActiveItem = state.activeItemIndex !== null ? state.items[state.activeItemIndex] : null;
  let sortedItems = sortByDomNode(
    adjustment(state.items.slice()),
    (item) => item.dataRef.current.domRef.current
  );
  let adjustedActiveItemIndex = currentActiveItem ? sortedItems.indexOf(currentActiveItem) : null;
  if (adjustedActiveItemIndex === -1) {
    adjustedActiveItemIndex = null;
  }
  return {
    items: sortedItems,
    activeItemIndex: adjustedActiveItemIndex
  };
}
var reducers5 = {
  [1 /* CloseMenu */](state) {
    if (state.menuState === 1 /* Closed */)
      return state;
    return { ...state, activeItemIndex: null, menuState: 1 /* Closed */ };
  },
  [0 /* OpenMenu */](state) {
    if (state.menuState === 0 /* Open */)
      return state;
    return {
      ...state,
      /* We can turn off demo mode once we re-open the `Menu` */
      __demoMode: false,
      menuState: 0 /* Open */
    };
  },
  [2 /* GoToItem */]: (state, action) => {
    var _a3;
    let adjustedState = adjustOrderedState3(state);
    let activeItemIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.items,
      resolveActiveIndex: () => adjustedState.activeItemIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    return {
      ...state,
      ...adjustedState,
      searchQuery: "",
      activeItemIndex,
      activationTrigger: (_a3 = action.trigger) != null ? _a3 : 1 /* Other */
    };
  },
  [3 /* Search */]: (state, action) => {
    let wasAlreadySearching = state.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state.searchQuery + action.value.toLowerCase();
    let reOrderedItems = state.activeItemIndex !== null ? state.items.slice(state.activeItemIndex + offset).concat(state.items.slice(0, state.activeItemIndex + offset)) : state.items;
    let matchingItem = reOrderedItems.find(
      (item) => {
        var _a3;
        return ((_a3 = item.dataRef.current.textValue) == null ? void 0 : _a3.startsWith(searchQuery)) && !item.dataRef.current.disabled;
      }
    );
    let matchIdx = matchingItem ? state.items.indexOf(matchingItem) : -1;
    if (matchIdx === -1 || matchIdx === state.activeItemIndex)
      return { ...state, searchQuery };
    return {
      ...state,
      searchQuery,
      activeItemIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [4 /* ClearSearch */](state) {
    if (state.searchQuery === "")
      return state;
    return { ...state, searchQuery: "", searchActiveItemIndex: null };
  },
  [5 /* RegisterItem */]: (state, action) => {
    let adjustedState = adjustOrderedState3(state, (items) => [
      ...items,
      { id: action.id, dataRef: action.dataRef }
    ]);
    return { ...state, ...adjustedState };
  },
  [6 /* UnregisterItem */]: (state, action) => {
    let adjustedState = adjustOrderedState3(state, (items) => {
      let idx = items.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        items.splice(idx, 1);
      return items;
    });
    return {
      ...state,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  }
};
var MenuContext = (0, import_react35.createContext)(null);
MenuContext.displayName = "MenuContext";
function useMenuContext(component) {
  let context = (0, import_react35.useContext)(MenuContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Menu /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useMenuContext);
    throw err;
  }
  return context;
}
function stateReducer5(state, action) {
  return match(action.type, reducers5, state, action);
}
var DEFAULT_MENU_TAG = import_react35.Fragment;
function MenuFn(props, ref) {
  let { __demoMode = false, ...theirProps } = props;
  let reducerBag = (0, import_react35.useReducer)(stateReducer5, {
    __demoMode,
    menuState: __demoMode ? 0 /* Open */ : 1 /* Closed */,
    buttonRef: (0, import_react35.createRef)(),
    itemsRef: (0, import_react35.createRef)(),
    items: [],
    searchQuery: "",
    activeItemIndex: null,
    activationTrigger: 1 /* Other */
  });
  let [{ menuState, itemsRef, buttonRef }, dispatch] = reducerBag;
  let menuRef = useSyncRefs(ref);
  useOutsideClick(
    [buttonRef, itemsRef],
    (event, target) => {
      var _a3;
      dispatch({ type: 1 /* CloseMenu */ });
      if (!isFocusableElement(target, 1 /* Loose */)) {
        event.preventDefault();
        (_a3 = buttonRef.current) == null ? void 0 : _a3.focus();
      }
    },
    menuState === 0 /* Open */
  );
  let close = useEvent(() => {
    dispatch({ type: 1 /* CloseMenu */ });
  });
  let slot = (0, import_react35.useMemo)(
    () => ({ open: menuState === 0 /* Open */, close }),
    [menuState, close]
  );
  let ourProps = { ref: menuRef };
  return /* @__PURE__ */ import_react35.default.createElement(MenuContext.Provider, { value: reducerBag }, /* @__PURE__ */ import_react35.default.createElement(
    OpenClosedProvider,
    {
      value: match(menuState, {
        [0 /* Open */]: 1 /* Open */,
        [1 /* Closed */]: 2 /* Closed */
      })
    },
    render({
      ourProps,
      theirProps,
      slot,
      defaultTag: DEFAULT_MENU_TAG,
      name: "Menu"
    })
  ));
}
var DEFAULT_BUTTON_TAG4 = "button";
function ButtonFn4(props, ref) {
  var _a3;
  let internalId = useId();
  let { id = `headlessui-menu-button-${internalId}`, ...theirProps } = props;
  let [state, dispatch] = useMenuContext("Menu.Button");
  let buttonRef = useSyncRefs(state.buttonRef, ref);
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ }));
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ }));
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (props.disabled)
      return;
    if (state.menuState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseMenu */ });
      d.nextFrame(() => {
        var _a4;
        return (_a4 = state.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      dispatch({ type: 0 /* OpenMenu */ });
    }
  });
  let slot = (0, import_react35.useMemo)(
    () => ({ open: state.menuState === 0 /* Open */ }),
    [state]
  );
  let ourProps = {
    ref: buttonRef,
    id,
    type: useResolveButtonType(props, state.buttonRef),
    "aria-haspopup": "menu",
    "aria-controls": (_a3 = state.itemsRef.current) == null ? void 0 : _a3.id,
    "aria-expanded": state.menuState === 0 /* Open */,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG4,
    name: "Menu.Button"
  });
}
var DEFAULT_ITEMS_TAG = "div";
var ItemsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
function ItemsFn(props, ref) {
  var _a3, _b;
  let internalId = useId();
  let { id = `headlessui-menu-items-${internalId}`, ...theirProps } = props;
  let [state, dispatch] = useMenuContext("Menu.Items");
  let itemsRef = useSyncRefs(state.itemsRef, ref);
  let ownerDocument = useOwnerDocument(state.itemsRef);
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return state.menuState === 0 /* Open */;
  })();
  (0, import_react35.useEffect)(() => {
    let container = state.itemsRef.current;
    if (!container)
      return;
    if (state.menuState !== 0 /* Open */)
      return;
    if (container === (ownerDocument == null ? void 0 : ownerDocument.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [state.menuState, state.itemsRef, ownerDocument]);
  useTreeWalker({
    container: state.itemsRef.current,
    enabled: state.menuState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "menuitem")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = useEvent((event) => {
    var _a4, _b2;
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 3 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        if (state.activeItemIndex !== null) {
          let { dataRef } = state.items[state.activeItemIndex];
          (_b2 = (_a4 = dataRef.current) == null ? void 0 : _a4.domRef.current) == null ? void 0 : _b2.click();
        }
        restoreFocusIfNecessary(state.buttonRef.current);
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 2 /* Next */ });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          var _a5;
          return (_a5 = state.buttonRef.current) == null ? void 0 : _a5.focus({ preventScroll: true });
        });
        break;
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          focusFrom(
            state.buttonRef.current,
            event.shiftKey ? 2 /* Previous */ : 4 /* Next */
          );
        });
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 3 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 4 /* ClearSearch */ }), 350);
        }
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let slot = (0, import_react35.useMemo)(
    () => ({ open: state.menuState === 0 /* Open */ }),
    [state]
  );
  let ourProps = {
    "aria-activedescendant": state.activeItemIndex === null ? void 0 : (_a3 = state.items[state.activeItemIndex]) == null ? void 0 : _a3.id,
    "aria-labelledby": (_b = state.buttonRef.current) == null ? void 0 : _b.id,
    id,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: "menu",
    tabIndex: 0,
    ref: itemsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible,
    name: "Menu.Items"
  });
}
var DEFAULT_ITEM_TAG = import_react35.Fragment;
function ItemFn(props, ref) {
  let internalId = useId();
  let { id = `headlessui-menu-item-${internalId}`, disabled = false, ...theirProps } = props;
  let [state, dispatch] = useMenuContext("Menu.Item");
  let active = state.activeItemIndex !== null ? state.items[state.activeItemIndex].id === id : false;
  let internalItemRef = (0, import_react35.useRef)(null);
  let itemRef = useSyncRefs(ref, internalItemRef);
  useIsoMorphicEffect(() => {
    if (state.__demoMode)
      return;
    if (state.menuState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (state.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a3, _b;
      (_b = (_a3 = internalItemRef.current) == null ? void 0 : _a3.scrollIntoView) == null ? void 0 : _b.call(_a3, { block: "nearest" });
    });
    return d.dispose;
  }, [
    state.__demoMode,
    internalItemRef,
    active,
    state.menuState,
    state.activationTrigger,
    /* We also want to trigger this when the position of the active item changes so that we can re-trigger the scrollIntoView */
    state.activeItemIndex
  ]);
  let getTextValue2 = useTextValue(internalItemRef);
  let bag = (0, import_react35.useRef)({
    disabled,
    domRef: internalItemRef,
    get textValue() {
      return getTextValue2();
    }
  });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterItem */, id, dataRef: bag });
    return () => dispatch({ type: 6 /* UnregisterItem */, id });
  }, [bag, id]);
  let close = useEvent(() => {
    dispatch({ type: 1 /* CloseMenu */ });
  });
  let handleClick = useEvent((event) => {
    if (disabled)
      return event.preventDefault();
    dispatch({ type: 1 /* CloseMenu */ });
    restoreFocusIfNecessary(state.buttonRef.current);
  });
  let handleFocus = useEvent(() => {
    if (disabled)
      return dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
    dispatch({ type: 2 /* GoToItem */, focus: 4 /* Specific */, id });
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: 2 /* GoToItem */,
      focus: 4 /* Specific */,
      id,
      trigger: 0 /* Pointer */
    });
  });
  let handleLeave = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
  });
  let slot = (0, import_react35.useMemo)(
    () => ({ active, disabled, close }),
    [active, disabled, close]
  );
  let ourProps = {
    id,
    ref: itemRef,
    role: "menuitem",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    disabled: void 0,
    // Never forward the `disabled` prop
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: "Menu.Item"
  });
}
var MenuRoot = forwardRefWithAs(MenuFn);
var Button4 = forwardRefWithAs(ButtonFn4);
var Items = forwardRefWithAs(ItemsFn);
var Item = forwardRefWithAs(ItemFn);
var Menu = Object.assign(MenuRoot, { Button: Button4, Items, Item });

// src/components/popover/popover.tsx
var import_react36 = __toESM(require("react"), 1);
var reducers6 = {
  [0 /* TogglePopover */]: (state) => {
    let nextState = {
      ...state,
      popoverState: match(state.popoverState, {
        [0 /* Open */]: 1 /* Closed */,
        [1 /* Closed */]: 0 /* Open */
      })
    };
    if (nextState.popoverState === 0 /* Open */) {
      nextState.__demoMode = false;
    }
    return nextState;
  },
  [1 /* ClosePopover */](state) {
    if (state.popoverState === 1 /* Closed */)
      return state;
    return { ...state, popoverState: 1 /* Closed */ };
  },
  [2 /* SetButton */](state, action) {
    if (state.button === action.button)
      return state;
    return { ...state, button: action.button };
  },
  [3 /* SetButtonId */](state, action) {
    if (state.buttonId === action.buttonId)
      return state;
    return { ...state, buttonId: action.buttonId };
  },
  [4 /* SetPanel */](state, action) {
    if (state.panel === action.panel)
      return state;
    return { ...state, panel: action.panel };
  },
  [5 /* SetPanelId */](state, action) {
    if (state.panelId === action.panelId)
      return state;
    return { ...state, panelId: action.panelId };
  }
};
var PopoverContext = (0, import_react36.createContext)(null);
PopoverContext.displayName = "PopoverContext";
function usePopoverContext(component) {
  let context = (0, import_react36.useContext)(PopoverContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
}
var PopoverAPIContext = (0, import_react36.createContext)(null);
PopoverAPIContext.displayName = "PopoverAPIContext";
function usePopoverAPIContext(component) {
  let context = (0, import_react36.useContext)(PopoverAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}
var PopoverGroupContext = (0, import_react36.createContext)(null);
PopoverGroupContext.displayName = "PopoverGroupContext";
function usePopoverGroupContext() {
  return (0, import_react36.useContext)(PopoverGroupContext);
}
var PopoverPanelContext = (0, import_react36.createContext)(null);
PopoverPanelContext.displayName = "PopoverPanelContext";
function usePopoverPanelContext() {
  return (0, import_react36.useContext)(PopoverPanelContext);
}
function stateReducer6(state, action) {
  return match(action.type, reducers6, state, action);
}
var DEFAULT_POPOVER_TAG = "div";
function PopoverFn(props, ref) {
  var _a3;
  let { __demoMode = false, ...theirProps } = props;
  let internalPopoverRef = (0, import_react36.useRef)(null);
  let popoverRef = useSyncRefs(
    ref,
    optionalRef((ref2) => {
      internalPopoverRef.current = ref2;
    })
  );
  let buttons = (0, import_react36.useRef)([]);
  let reducerBag = (0, import_react36.useReducer)(stateReducer6, {
    __demoMode,
    popoverState: __demoMode ? 0 /* Open */ : 1 /* Closed */,
    buttons,
    button: null,
    buttonId: null,
    panel: null,
    panelId: null,
    beforePanelSentinel: (0, import_react36.createRef)(),
    afterPanelSentinel: (0, import_react36.createRef)()
  });
  let [
    { popoverState, button, buttonId, panel, panelId, beforePanelSentinel, afterPanelSentinel },
    dispatch
  ] = reducerBag;
  let ownerDocument = useOwnerDocument((_a3 = internalPopoverRef.current) != null ? _a3 : button);
  let isPortalled = (0, import_react36.useMemo)(() => {
    if (!button)
      return false;
    if (!panel)
      return false;
    for (let root2 of document.querySelectorAll("body > *")) {
      if (Number(root2 == null ? void 0 : root2.contains(button)) ^ Number(root2 == null ? void 0 : root2.contains(panel))) {
        return true;
      }
    }
    let elements = getFocusableElements();
    let buttonIdx = elements.indexOf(button);
    let beforeIdx = (buttonIdx + elements.length - 1) % elements.length;
    let afterIdx = (buttonIdx + 1) % elements.length;
    let beforeElement = elements[beforeIdx];
    let afterElement = elements[afterIdx];
    if (!panel.contains(beforeElement) && !panel.contains(afterElement)) {
      return true;
    }
    return false;
  }, [button, panel]);
  let buttonIdRef = useLatestValue(buttonId);
  let panelIdRef = useLatestValue(panelId);
  let registerBag = (0, import_react36.useMemo)(
    () => ({
      buttonId: buttonIdRef,
      panelId: panelIdRef,
      close: () => dispatch({ type: 1 /* ClosePopover */ })
    }),
    [buttonIdRef, panelIdRef, dispatch]
  );
  let groupContext = usePopoverGroupContext();
  let registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  let isFocusWithinPopoverGroup = useEvent(() => {
    var _a4;
    return (_a4 = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _a4 : (ownerDocument == null ? void 0 : ownerDocument.activeElement) && ((button == null ? void 0 : button.contains(ownerDocument.activeElement)) || (panel == null ? void 0 : panel.contains(ownerDocument.activeElement)));
  });
  (0, import_react36.useEffect)(() => registerPopover == null ? void 0 : registerPopover(registerBag), [registerPopover, registerBag]);
  let [portals, PortalWrapper] = useNestedPortals();
  let root = useRootContainers({
    mainTreeNodeRef: groupContext == null ? void 0 : groupContext.mainTreeNodeRef,
    portals,
    defaultContainers: [button, panel]
  });
  useEventListener(
    ownerDocument == null ? void 0 : ownerDocument.defaultView,
    "focus",
    (event) => {
      var _a4, _b, _c, _d;
      if (event.target === window)
        return;
      if (!(event.target instanceof HTMLElement))
        return;
      if (popoverState !== 0 /* Open */)
        return;
      if (isFocusWithinPopoverGroup())
        return;
      if (!button)
        return;
      if (!panel)
        return;
      if (root.contains(event.target))
        return;
      if ((_b = (_a4 = beforePanelSentinel.current) == null ? void 0 : _a4.contains) == null ? void 0 : _b.call(_a4, event.target))
        return;
      if ((_d = (_c = afterPanelSentinel.current) == null ? void 0 : _c.contains) == null ? void 0 : _d.call(_c, event.target))
        return;
      dispatch({ type: 1 /* ClosePopover */ });
    },
    true
  );
  useOutsideClick(
    root.resolveContainers,
    (event, target) => {
      dispatch({ type: 1 /* ClosePopover */ });
      if (!isFocusableElement(target, 1 /* Loose */)) {
        event.preventDefault();
        button == null ? void 0 : button.focus();
      }
    },
    popoverState === 0 /* Open */
  );
  let close = useEvent(
    (focusableElement) => {
      dispatch({ type: 1 /* ClosePopover */ });
      let restoreElement = (() => {
        if (!focusableElement)
          return button;
        if (focusableElement instanceof HTMLElement)
          return focusableElement;
        if ("current" in focusableElement && focusableElement.current instanceof HTMLElement)
          return focusableElement.current;
        return button;
      })();
      restoreElement == null ? void 0 : restoreElement.focus();
    }
  );
  let api = (0, import_react36.useMemo)(
    () => ({ close, isPortalled }),
    [close, isPortalled]
  );
  let slot = (0, import_react36.useMemo)(
    () => ({ open: popoverState === 0 /* Open */, close }),
    [popoverState, close]
  );
  let ourProps = { ref: popoverRef };
  return /* @__PURE__ */ import_react36.default.createElement(PopoverPanelContext.Provider, { value: null }, /* @__PURE__ */ import_react36.default.createElement(PopoverContext.Provider, { value: reducerBag }, /* @__PURE__ */ import_react36.default.createElement(PopoverAPIContext.Provider, { value: api }, /* @__PURE__ */ import_react36.default.createElement(
    OpenClosedProvider,
    {
      value: match(popoverState, {
        [0 /* Open */]: 1 /* Open */,
        [1 /* Closed */]: 2 /* Closed */
      })
    },
    /* @__PURE__ */ import_react36.default.createElement(PortalWrapper, null, render({
      ourProps,
      theirProps,
      slot,
      defaultTag: DEFAULT_POPOVER_TAG,
      name: "Popover"
    }), /* @__PURE__ */ import_react36.default.createElement(root.MainTreeNode, null))
  ))));
}
var DEFAULT_BUTTON_TAG5 = "button";
function ButtonFn5(props, ref) {
  let internalId = useId();
  let { id = `headlessui-popover-button-${internalId}`, ...theirProps } = props;
  let [state, dispatch] = usePopoverContext("Popover.Button");
  let { isPortalled } = usePopoverAPIContext("Popover.Button");
  let internalButtonRef = (0, import_react36.useRef)(null);
  let sentinelId = `headlessui-focus-sentinel-${useId()}`;
  let groupContext = usePopoverGroupContext();
  let closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  let panelContext = usePopoverPanelContext();
  let isWithinPanel = panelContext !== null;
  (0, import_react36.useEffect)(() => {
    if (isWithinPanel)
      return;
    dispatch({ type: 3 /* SetButtonId */, buttonId: id });
    return () => {
      dispatch({ type: 3 /* SetButtonId */, buttonId: null });
    };
  }, [isWithinPanel, id, dispatch]);
  let [uniqueIdentifier] = (0, import_react36.useState)(() => Symbol());
  let buttonRef = useSyncRefs(
    internalButtonRef,
    ref,
    isWithinPanel ? null : (button) => {
      if (button) {
        state.buttons.current.push(uniqueIdentifier);
      } else {
        let idx = state.buttons.current.indexOf(uniqueIdentifier);
        if (idx !== -1)
          state.buttons.current.splice(idx, 1);
      }
      if (state.buttons.current.length > 1) {
        console.warn(
          "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
        );
      }
      button && dispatch({ type: 2 /* SetButton */, button });
    }
  );
  let withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  let ownerDocument = useOwnerDocument(internalButtonRef);
  let handleKeyDown = useEvent((event) => {
    var _a3, _b, _c;
    if (isWithinPanel) {
      if (state.popoverState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          (_b = (_a3 = event.target).click) == null ? void 0 : _b.call(_a3);
          dispatch({ type: 1 /* ClosePopover */ });
          (_c = state.button) == null ? void 0 : _c.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          if (state.popoverState === 1 /* Closed */)
            closeOthers == null ? void 0 : closeOthers(state.buttonId);
          dispatch({ type: 0 /* TogglePopover */ });
          break;
        case "Escape" /* Escape */:
          if (state.popoverState !== 0 /* Open */)
            return closeOthers == null ? void 0 : closeOthers(state.buttonId);
          if (!internalButtonRef.current)
            return;
          if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalButtonRef.current.contains(ownerDocument.activeElement)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 1 /* ClosePopover */ });
          break;
      }
    }
  });
  let handleKeyUp = useEvent((event) => {
    if (isWithinPanel)
      return;
    if (event.key === " " /* Space */) {
      event.preventDefault();
    }
  });
  let handleClick = useEvent((event) => {
    var _a3, _b;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 1 /* ClosePopover */ });
      (_a3 = state.button) == null ? void 0 : _a3.focus();
    } else {
      event.preventDefault();
      event.stopPropagation();
      if (state.popoverState === 1 /* Closed */)
        closeOthers == null ? void 0 : closeOthers(state.buttonId);
      dispatch({ type: 0 /* TogglePopover */ });
      (_b = state.button) == null ? void 0 : _b.focus();
    }
  });
  let handleMouseDown = useEvent((event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  let visible = state.popoverState === 0 /* Open */;
  let slot = (0, import_react36.useMemo)(() => ({ open: visible }), [visible]);
  let type = useResolveButtonType(props, internalButtonRef);
  let ourProps = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state.buttonId,
    type,
    "aria-expanded": state.popoverState === 0 /* Open */,
    "aria-controls": state.panel ? state.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick,
    onMouseDown: handleMouseDown
  };
  let direction = useTabDirection();
  let handleFocus = useEvent(() => {
    let el = state.panel;
    if (!el)
      return;
    function run() {
      let result = match(direction.current, {
        [0 /* Forwards */]: () => focusIn(el, 1 /* First */),
        [1 /* Backwards */]: () => focusIn(el, 8 /* Last */)
      });
      if (result === 0 /* Error */) {
        focusIn(
          getFocusableElements().filter((el2) => el2.dataset.headlessuiFocusGuard !== "true"),
          match(direction.current, {
            [0 /* Forwards */]: 4 /* Next */,
            [1 /* Backwards */]: 2 /* Previous */
          }),
          { relativeTo: state.button }
        );
      }
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  return /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG5,
    name: "Popover.Button"
  }), visible && !isWithinPanel && isPortalled && /* @__PURE__ */ import_react36.default.createElement(
    Hidden,
    {
      id: sentinelId,
      features: 2 /* Focusable */,
      "data-headlessui-focus-guard": true,
      as: "button",
      type: "button",
      onFocus: handleFocus
    }
  ));
}
var DEFAULT_OVERLAY_TAG2 = "div";
var OverlayRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
function OverlayFn2(props, ref) {
  let internalId = useId();
  let { id = `headlessui-popover-overlay-${internalId}`, ...theirProps } = props;
  let [{ popoverState }, dispatch] = usePopoverContext("Popover.Overlay");
  let overlayRef = useSyncRefs(ref);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return popoverState === 0 /* Open */;
  })();
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    dispatch({ type: 1 /* ClosePopover */ });
  });
  let slot = (0, import_react36.useMemo)(
    () => ({ open: popoverState === 0 /* Open */ }),
    [popoverState]
  );
  let ourProps = {
    ref: overlayRef,
    id,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG2,
    features: OverlayRenderFeatures,
    visible,
    name: "Popover.Overlay"
  });
}
var DEFAULT_PANEL_TAG3 = "div";
var PanelRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
function PanelFn3(props, ref) {
  let internalId = useId();
  let { id = `headlessui-popover-panel-${internalId}`, focus = false, ...theirProps } = props;
  let [state, dispatch] = usePopoverContext("Popover.Panel");
  let { close, isPortalled } = usePopoverAPIContext("Popover.Panel");
  let beforePanelSentinelId = `headlessui-focus-sentinel-before-${useId()}`;
  let afterPanelSentinelId = `headlessui-focus-sentinel-after-${useId()}`;
  let internalPanelRef = (0, import_react36.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: 4 /* SetPanel */, panel });
  });
  let ownerDocument = useOwnerDocument(internalPanelRef);
  let mergeRefs = useMergeRefsFn();
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* SetPanelId */, panelId: id });
    return () => {
      dispatch({ type: 5 /* SetPanelId */, panelId: null });
    };
  }, [id, dispatch]);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
    }
    return state.popoverState === 0 /* Open */;
  })();
  let handleKeyDown = useEvent((event) => {
    var _a3;
    switch (event.key) {
      case "Escape" /* Escape */:
        if (state.popoverState !== 0 /* Open */)
          return;
        if (!internalPanelRef.current)
          return;
        if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalPanelRef.current.contains(ownerDocument.activeElement)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* ClosePopover */ });
        (_a3 = state.button) == null ? void 0 : _a3.focus();
        break;
    }
  });
  (0, import_react36.useEffect)(() => {
    var _a3;
    if (props.static)
      return;
    if (state.popoverState === 1 /* Closed */ && ((_a3 = props.unmount) != null ? _a3 : true)) {
      dispatch({ type: 4 /* SetPanel */, panel: null });
    }
  }, [state.popoverState, props.unmount, props.static, dispatch]);
  (0, import_react36.useEffect)(() => {
    if (state.__demoMode)
      return;
    if (!focus)
      return;
    if (state.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    if (internalPanelRef.current.contains(activeElement))
      return;
    focusIn(internalPanelRef.current, 1 /* First */);
  }, [state.__demoMode, focus, internalPanelRef, state.popoverState]);
  let slot = (0, import_react36.useMemo)(
    () => ({ open: state.popoverState === 0 /* Open */, close }),
    [state, close]
  );
  let ourProps = {
    ref: panelRef,
    id,
    onKeyDown: handleKeyDown,
    onBlur: focus && state.popoverState === 0 /* Open */ ? (event) => {
      var _a3, _b, _c, _d, _e;
      let el = event.relatedTarget;
      if (!el)
        return;
      if (!internalPanelRef.current)
        return;
      if ((_a3 = internalPanelRef.current) == null ? void 0 : _a3.contains(el))
        return;
      dispatch({ type: 1 /* ClosePopover */ });
      if (((_c = (_b = state.beforePanelSentinel.current) == null ? void 0 : _b.contains) == null ? void 0 : _c.call(_b, el)) || ((_e = (_d = state.afterPanelSentinel.current) == null ? void 0 : _d.contains) == null ? void 0 : _e.call(_d, el))) {
        el.focus({ preventScroll: true });
      }
    } : void 0,
    tabIndex: -1
  };
  let direction = useTabDirection();
  let handleBeforeFocus = useEvent(() => {
    let el = internalPanelRef.current;
    if (!el)
      return;
    function run() {
      match(direction.current, {
        [0 /* Forwards */]: () => {
          var _a3;
          let result = focusIn(el, 1 /* First */);
          if (result === 0 /* Error */) {
            (_a3 = state.afterPanelSentinel.current) == null ? void 0 : _a3.focus();
          }
        },
        [1 /* Backwards */]: () => {
          var _a3;
          (_a3 = state.button) == null ? void 0 : _a3.focus({ preventScroll: true });
        }
      });
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  let handleAfterFocus = useEvent(() => {
    let el = internalPanelRef.current;
    if (!el)
      return;
    function run() {
      match(direction.current, {
        [0 /* Forwards */]: () => {
          var _a3;
          if (!state.button)
            return;
          let elements = getFocusableElements();
          let idx = elements.indexOf(state.button);
          let before = elements.slice(0, idx + 1);
          let after = elements.slice(idx + 1);
          let combined = [...after, ...before];
          for (let element of combined.slice()) {
            if (element.dataset.headlessuiFocusGuard === "true" || ((_a3 = state.panel) == null ? void 0 : _a3.contains(element))) {
              let idx2 = combined.indexOf(element);
              if (idx2 !== -1)
                combined.splice(idx2, 1);
            }
          }
          focusIn(combined, 1 /* First */, { sorted: false });
        },
        [1 /* Backwards */]: () => {
          var _a3;
          let result = focusIn(el, 2 /* Previous */);
          if (result === 0 /* Error */) {
            (_a3 = state.button) == null ? void 0 : _a3.focus();
          }
        }
      });
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  return /* @__PURE__ */ import_react36.default.createElement(PopoverPanelContext.Provider, { value: id }, visible && isPortalled && /* @__PURE__ */ import_react36.default.createElement(
    Hidden,
    {
      id: beforePanelSentinelId,
      ref: state.beforePanelSentinel,
      features: 2 /* Focusable */,
      "data-headlessui-focus-guard": true,
      as: "button",
      type: "button",
      onFocus: handleBeforeFocus
    }
  ), render({
    mergeRefs,
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG3,
    features: PanelRenderFeatures2,
    visible,
    name: "Popover.Panel"
  }), visible && isPortalled && /* @__PURE__ */ import_react36.default.createElement(
    Hidden,
    {
      id: afterPanelSentinelId,
      ref: state.afterPanelSentinel,
      features: 2 /* Focusable */,
      "data-headlessui-focus-guard": true,
      as: "button",
      type: "button",
      onFocus: handleAfterFocus
    }
  ));
}
var DEFAULT_GROUP_TAG2 = "div";
function GroupFn2(props, ref) {
  let internalGroupRef = (0, import_react36.useRef)(null);
  let groupRef = useSyncRefs(internalGroupRef, ref);
  let [popovers, setPopovers] = (0, import_react36.useState)([]);
  let root = useMainTreeNode();
  let unregisterPopover = useEvent((registerbag) => {
    setPopovers((existing) => {
      let idx = existing.indexOf(registerbag);
      if (idx !== -1) {
        let clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  });
  let registerPopover = useEvent((registerbag) => {
    setPopovers((existing) => [...existing, registerbag]);
    return () => unregisterPopover(registerbag);
  });
  let isFocusWithinPopoverGroup = useEvent(() => {
    var _a3;
    let ownerDocument = getOwnerDocument(internalGroupRef);
    if (!ownerDocument)
      return false;
    let element = ownerDocument.activeElement;
    if ((_a3 = internalGroupRef.current) == null ? void 0 : _a3.contains(element))
      return true;
    return popovers.some((bag) => {
      var _a4, _b;
      return ((_a4 = ownerDocument.getElementById(bag.buttonId.current)) == null ? void 0 : _a4.contains(element)) || ((_b = ownerDocument.getElementById(bag.panelId.current)) == null ? void 0 : _b.contains(element));
    });
  });
  let closeOthers = useEvent((buttonId) => {
    for (let popover of popovers) {
      if (popover.buttonId.current !== buttonId)
        popover.close();
    }
  });
  let contextBag = (0, import_react36.useMemo)(
    () => ({
      registerPopover,
      unregisterPopover,
      isFocusWithinPopoverGroup,
      closeOthers,
      mainTreeNodeRef: root.mainTreeNodeRef
    }),
    [
      registerPopover,
      unregisterPopover,
      isFocusWithinPopoverGroup,
      closeOthers,
      root.mainTreeNodeRef
    ]
  );
  let slot = (0, import_react36.useMemo)(() => ({}), []);
  let theirProps = props;
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react36.default.createElement(PopoverGroupContext.Provider, { value: contextBag }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_GROUP_TAG2,
    name: "Popover.Group"
  }), /* @__PURE__ */ import_react36.default.createElement(root.MainTreeNode, null));
}
var PopoverRoot = forwardRefWithAs(PopoverFn);
var Button5 = forwardRefWithAs(ButtonFn5);
var Overlay2 = forwardRefWithAs(OverlayFn2);
var Panel3 = forwardRefWithAs(PanelFn3);
var Group2 = forwardRefWithAs(GroupFn2);
var Popover = Object.assign(PopoverRoot, { Button: Button5, Overlay: Overlay2, Panel: Panel3, Group: Group2 });

// src/components/radio-group/radio-group.tsx
var import_react39 = __toESM(require("react"), 1);

// src/components/label/label.tsx
var import_react37 = __toESM(require("react"), 1);
var LabelContext = (0, import_react37.createContext)(
  null
);
function useLabelContext() {
  let context = (0, import_react37.useContext)(LabelContext);
  if (context === null) {
    let err = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useLabelContext);
    throw err;
  }
  return context;
}
function useLabels() {
  let [labelIds, setLabelIds] = (0, import_react37.useState)([]);
  return [
    // The actual id's as string or undefined.
    labelIds.length > 0 ? labelIds.join(" ") : void 0,
    // The provider component
    (0, import_react37.useMemo)(() => {
      return function LabelProvider(props) {
        let register = useEvent((value) => {
          setLabelIds((existing) => [...existing, value]);
          return () => setLabelIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        });
        let contextBag = (0, import_react37.useMemo)(
          () => ({ register, slot: props.slot, name: props.name, props: props.props }),
          [register, props.slot, props.name, props.props]
        );
        return /* @__PURE__ */ import_react37.default.createElement(LabelContext.Provider, { value: contextBag }, props.children);
      };
    }, [setLabelIds])
  ];
}
var DEFAULT_LABEL_TAG3 = "label";
function LabelFn3(props, ref) {
  let internalId = useId();
  let { id = `headlessui-label-${internalId}`, passive = false, ...theirProps } = props;
  let context = useLabelContext();
  let labelRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id), [id, context.register]);
  let ourProps = { ref: labelRef, ...context.props, id };
  if (passive) {
    if ("onClick" in ourProps) {
      delete ourProps["htmlFor"];
      delete ourProps["onClick"];
    }
    if ("onClick" in theirProps) {
      delete theirProps["onClick"];
    }
  }
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG3,
    name: context.name || "Label"
  });
}
var LabelRoot = forwardRefWithAs(LabelFn3);
var Label3 = Object.assign(LabelRoot, {
  //
});

// src/hooks/use-flags.ts
var import_react38 = require("react");
function useFlags(initialFlags = 0) {
  let [flags, setFlags] = (0, import_react38.useState)(initialFlags);
  let mounted = useIsMounted();
  let addFlag = (0, import_react38.useCallback)(
    (flag) => {
      if (!mounted.current)
        return;
      setFlags((flags2) => flags2 | flag);
    },
    [flags, mounted]
  );
  let hasFlag = (0, import_react38.useCallback)((flag) => Boolean(flags & flag), [flags]);
  let removeFlag = (0, import_react38.useCallback)(
    (flag) => {
      if (!mounted.current)
        return;
      setFlags((flags2) => flags2 & ~flag);
    },
    [setFlags, mounted]
  );
  let toggleFlag = (0, import_react38.useCallback)(
    (flag) => {
      if (!mounted.current)
        return;
      setFlags((flags2) => flags2 ^ flag);
    },
    [setFlags]
  );
  return { flags, addFlag, hasFlag, removeFlag, toggleFlag };
}

// src/components/radio-group/radio-group.tsx
var reducers7 = {
  [0 /* RegisterOption */](state, action) {
    let nextOptions = [
      ...state.options,
      { id: action.id, element: action.element, propsRef: action.propsRef }
    ];
    return {
      ...state,
      options: sortByDomNode(nextOptions, (option) => option.element.current)
    };
  },
  [1 /* UnregisterOption */](state, action) {
    let options = state.options.slice();
    let idx = state.options.findIndex((radio) => radio.id === action.id);
    if (idx === -1)
      return state;
    options.splice(idx, 1);
    return { ...state, options };
  }
};
var RadioGroupDataContext = (0, import_react39.createContext)(null);
RadioGroupDataContext.displayName = "RadioGroupDataContext";
function useData3(component) {
  let context = (0, import_react39.useContext)(RadioGroupDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <RadioGroup /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData3);
    throw err;
  }
  return context;
}
var RadioGroupActionsContext = (0, import_react39.createContext)(null);
RadioGroupActionsContext.displayName = "RadioGroupActionsContext";
function useActions3(component) {
  let context = (0, import_react39.useContext)(RadioGroupActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <RadioGroup /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions3);
    throw err;
  }
  return context;
}
function stateReducer7(state, action) {
  return match(action.type, reducers7, state, action);
}
var DEFAULT_RADIO_GROUP_TAG = "div";
function RadioGroupFn(props, ref) {
  let internalId = useId();
  let {
    id = `headlessui-radiogroup-${internalId}`,
    value: controlledValue,
    defaultValue,
    form: formName,
    name,
    onChange: controlledOnChange,
    by = (a, z) => a === z,
    disabled = false,
    ...theirProps
  } = props;
  let compare = useEvent(
    typeof by === "string" ? (a, z) => {
      let property = by;
      return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
    } : by
  );
  let [state, dispatch] = (0, import_react39.useReducer)(stateReducer7, { options: [] });
  let options = state.options;
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let internalRadioGroupRef = (0, import_react39.useRef)(null);
  let radioGroupRef = useSyncRefs(internalRadioGroupRef, ref);
  let [value, onChange] = useControllable(controlledValue, controlledOnChange, defaultValue);
  let firstOption = (0, import_react39.useMemo)(
    () => options.find((option) => {
      if (option.propsRef.current.disabled)
        return false;
      return true;
    }),
    [options]
  );
  let containsCheckedOption = (0, import_react39.useMemo)(
    () => options.some((option) => compare(option.propsRef.current.value, value)),
    [options, value]
  );
  let triggerChange = useEvent((nextValue) => {
    var _a3;
    if (disabled)
      return false;
    if (compare(nextValue, value))
      return false;
    let nextOption = (_a3 = options.find(
      (option) => compare(option.propsRef.current.value, nextValue)
    )) == null ? void 0 : _a3.propsRef.current;
    if (nextOption == null ? void 0 : nextOption.disabled)
      return false;
    onChange == null ? void 0 : onChange(nextValue);
    return true;
  });
  useTreeWalker({
    container: internalRadioGroupRef.current,
    accept(node) {
      if (node.getAttribute("role") === "radio")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = useEvent((event) => {
    let container = internalRadioGroupRef.current;
    if (!container)
      return;
    let ownerDocument = getOwnerDocument(container);
    let all = options.filter((option) => option.propsRef.current.disabled === false).map((radio) => radio.element.current);
    switch (event.key) {
      case "Enter" /* Enter */:
        attemptSubmit(event.currentTarget);
        break;
      case "ArrowLeft" /* ArrowLeft */:
      case "ArrowUp" /* ArrowUp */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 2 /* Previous */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find(
              (option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement)
            );
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case "ArrowRight" /* ArrowRight */:
      case "ArrowDown" /* ArrowDown */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 4 /* Next */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find(
              (option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement)
            );
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case " " /* Space */:
        {
          event.preventDefault();
          event.stopPropagation();
          let activeOption = options.find(
            (option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement)
          );
          if (activeOption)
            triggerChange(activeOption.propsRef.current.value);
        }
        break;
    }
  });
  let registerOption = useEvent((option) => {
    dispatch({ type: 0 /* RegisterOption */, ...option });
    return () => dispatch({ type: 1 /* UnregisterOption */, id: option.id });
  });
  let radioGroupData = (0, import_react39.useMemo)(
    () => ({ value, firstOption, containsCheckedOption, disabled, compare, ...state }),
    [value, firstOption, containsCheckedOption, disabled, compare, state]
  );
  let radioGroupActions = (0, import_react39.useMemo)(
    () => ({ registerOption, change: triggerChange }),
    [registerOption, triggerChange]
  );
  let ourProps = {
    ref: radioGroupRef,
    id,
    role: "radiogroup",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    onKeyDown: handleKeyDown
  };
  let slot = (0, import_react39.useMemo)(() => ({ value }), [value]);
  let form = (0, import_react39.useRef)(null);
  let d = useDisposables();
  (0, import_react39.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      triggerChange(defaultValue);
    });
  }, [
    form,
    triggerChange
    /* Explicitly ignoring `defaultValue` */
  ]);
  return /* @__PURE__ */ import_react39.default.createElement(DescriptionProvider, { name: "RadioGroup.Description" }, /* @__PURE__ */ import_react39.default.createElement(LabelProvider, { name: "RadioGroup.Label" }, /* @__PURE__ */ import_react39.default.createElement(RadioGroupActionsContext.Provider, { value: radioGroupActions }, /* @__PURE__ */ import_react39.default.createElement(RadioGroupDataContext.Provider, { value: radioGroupData }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react39.default.createElement(
    Hidden,
    {
      features: 4 /* Hidden */,
      ref: idx === 0 ? (element) => {
        var _a3;
        form.current = (_a3 = element == null ? void 0 : element.closest("form")) != null ? _a3 : null;
      } : void 0,
      ...compact({
        key: name2,
        as: "input",
        type: "radio",
        checked: value2 != null,
        hidden: true,
        readOnly: true,
        form: formName,
        disabled,
        name: name2,
        value: value2
      })
    }
  )), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_RADIO_GROUP_TAG,
    name: "RadioGroup"
  })))));
}
var DEFAULT_OPTION_TAG3 = "div";
function OptionFn3(props, ref) {
  var _a3;
  let internalId = useId();
  let {
    id = `headlessui-radiogroup-option-${internalId}`,
    value,
    disabled = false,
    ...theirProps
  } = props;
  let internalOptionRef = (0, import_react39.useRef)(null);
  let optionRef = useSyncRefs(internalOptionRef, ref);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let { addFlag, removeFlag, hasFlag } = useFlags(1 /* Empty */);
  let propsRef = useLatestValue({ value, disabled });
  let data = useData3("RadioGroup.Option");
  let actions = useActions3("RadioGroup.Option");
  useIsoMorphicEffect(
    () => actions.registerOption({ id, element: internalOptionRef, propsRef }),
    [id, actions, internalOptionRef, propsRef]
  );
  let handleClick = useEvent((event) => {
    var _a4;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (!actions.change(value))
      return;
    addFlag(2 /* Active */);
    (_a4 = internalOptionRef.current) == null ? void 0 : _a4.focus();
  });
  let handleFocus = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    addFlag(2 /* Active */);
  });
  let handleBlur = useEvent(() => removeFlag(2 /* Active */));
  let isFirstOption = ((_a3 = data.firstOption) == null ? void 0 : _a3.id) === id;
  let isDisabled = data.disabled || disabled;
  let checked = data.compare(data.value, value);
  let ourProps = {
    ref: optionRef,
    id,
    role: "radio",
    "aria-checked": checked ? "true" : "false",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    "aria-disabled": isDisabled ? true : void 0,
    tabIndex: (() => {
      if (isDisabled)
        return -1;
      if (checked)
        return 0;
      if (!data.containsCheckedOption && isFirstOption)
        return 0;
      return -1;
    })(),
    onClick: isDisabled ? void 0 : handleClick,
    onFocus: isDisabled ? void 0 : handleFocus,
    onBlur: isDisabled ? void 0 : handleBlur
  };
  let slot = (0, import_react39.useMemo)(
    () => ({ checked, disabled: isDisabled, active: hasFlag(2 /* Active */) }),
    [checked, isDisabled, hasFlag]
  );
  return /* @__PURE__ */ import_react39.default.createElement(DescriptionProvider, { name: "RadioGroup.Description" }, /* @__PURE__ */ import_react39.default.createElement(LabelProvider, { name: "RadioGroup.Label" }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG3,
    name: "RadioGroup.Option"
  })));
}
var RadioGroupRoot = forwardRefWithAs(RadioGroupFn);
var Option3 = forwardRefWithAs(OptionFn3);
var RadioGroup = Object.assign(RadioGroupRoot, {
  Option: Option3,
  Label: Label3,
  Description
});

// src/components/switch/switch.tsx
var import_react40 = __toESM(require("react"), 1);
var GroupContext = (0, import_react40.createContext)(null);
GroupContext.displayName = "GroupContext";
var DEFAULT_GROUP_TAG3 = import_react40.Fragment;
function GroupFn3(props) {
  var _a3;
  let [switchElement, setSwitchElement] = (0, import_react40.useState)(null);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let context = (0, import_react40.useMemo)(
    () => ({ switch: switchElement, setSwitch: setSwitchElement, labelledby, describedby }),
    [switchElement, setSwitchElement, labelledby, describedby]
  );
  let ourProps = {};
  let theirProps = props;
  return /* @__PURE__ */ import_react40.default.createElement(DescriptionProvider, { name: "Switch.Description" }, /* @__PURE__ */ import_react40.default.createElement(
    LabelProvider,
    {
      name: "Switch.Label",
      props: {
        htmlFor: (_a3 = context.switch) == null ? void 0 : _a3.id,
        onClick(event) {
          if (!switchElement)
            return;
          if (event.currentTarget.tagName === "LABEL") {
            event.preventDefault();
          }
          switchElement.click();
          switchElement.focus({ preventScroll: true });
        }
      }
    },
    /* @__PURE__ */ import_react40.default.createElement(GroupContext.Provider, { value: context }, render({
      ourProps,
      theirProps,
      defaultTag: DEFAULT_GROUP_TAG3,
      name: "Switch.Group"
    }))
  ));
}
var DEFAULT_SWITCH_TAG = "button";
function SwitchFn(props, ref) {
  var _a3;
  let internalId = useId();
  let {
    id = `headlessui-switch-${internalId}`,
    checked: controlledChecked,
    defaultChecked = false,
    onChange: controlledOnChange,
    disabled = false,
    name,
    value,
    form,
    ...theirProps
  } = props;
  let groupContext = (0, import_react40.useContext)(GroupContext);
  let internalSwitchRef = (0, import_react40.useRef)(null);
  let switchRef = useSyncRefs(
    internalSwitchRef,
    ref,
    groupContext === null ? null : groupContext.setSwitch
  );
  let [checked, onChange] = useControllable(controlledChecked, controlledOnChange, defaultChecked);
  let toggle = useEvent(() => onChange == null ? void 0 : onChange(!checked));
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    toggle();
  });
  let handleKeyUp = useEvent((event) => {
    if (event.key === " " /* Space */) {
      event.preventDefault();
      toggle();
    } else if (event.key === "Enter" /* Enter */) {
      attemptSubmit(event.currentTarget);
    }
  });
  let handleKeyPress = useEvent((event) => event.preventDefault());
  let slot = (0, import_react40.useMemo)(() => ({ checked }), [checked]);
  let ourProps = {
    id,
    ref: switchRef,
    role: "switch",
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: props.tabIndex === -1 ? 0 : (_a3 = props.tabIndex) != null ? _a3 : 0,
    "aria-checked": checked,
    "aria-labelledby": groupContext == null ? void 0 : groupContext.labelledby,
    "aria-describedby": groupContext == null ? void 0 : groupContext.describedby,
    disabled,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  let d = useDisposables();
  (0, import_react40.useEffect)(() => {
    var _a4;
    let form2 = (_a4 = internalSwitchRef.current) == null ? void 0 : _a4.closest("form");
    if (!form2)
      return;
    if (defaultChecked === void 0)
      return;
    d.addEventListener(form2, "reset", () => {
      onChange(defaultChecked);
    });
  }, [
    internalSwitchRef,
    onChange
    /* Explicitly ignoring `defaultValue` */
  ]);
  return /* @__PURE__ */ import_react40.default.createElement(import_react40.default.Fragment, null, name != null && checked && /* @__PURE__ */ import_react40.default.createElement(
    Hidden,
    {
      features: 4 /* Hidden */,
      ...compact({
        as: "input",
        type: "checkbox",
        hidden: true,
        readOnly: true,
        disabled,
        form,
        checked,
        name,
        value
      })
    }
  ), render({ ourProps, theirProps, slot, defaultTag: DEFAULT_SWITCH_TAG, name: "Switch" }));
}
var SwitchRoot = forwardRefWithAs(SwitchFn);
var Group3 = GroupFn3;
var Switch = Object.assign(SwitchRoot, {
  Group: Group3,
  Label: Label3,
  Description
});

// src/components/tabs/tabs.tsx
var import_react42 = __toESM(require("react"), 1);

// src/internal/focus-sentinel.tsx
var import_react41 = __toESM(require("react"), 1);
function FocusSentinel({ onFocus }) {
  let [enabled, setEnabled] = (0, import_react41.useState)(true);
  let mounted = useIsMounted();
  if (!enabled)
    return null;
  return /* @__PURE__ */ import_react41.default.createElement(
    Hidden,
    {
      as: "button",
      type: "button",
      features: 2 /* Focusable */,
      onFocus: (event) => {
        event.preventDefault();
        let frame;
        let tries = 50;
        function forwardFocus() {
          if (tries-- <= 0) {
            if (frame)
              cancelAnimationFrame(frame);
            return;
          }
          if (onFocus()) {
            cancelAnimationFrame(frame);
            if (!mounted.current)
              return;
            setEnabled(false);
            return;
          }
          frame = requestAnimationFrame(forwardFocus);
        }
        frame = requestAnimationFrame(forwardFocus);
      }
    }
  );
}

// src/utils/stable-collection.tsx
var React25 = __toESM(require("react"), 1);
var StableCollectionContext = React25.createContext(null);
function createCollection() {
  return {
    /** @type {Map<string, Map<string, number>>} */
    groups: /* @__PURE__ */ new Map(),
    get(group, key) {
      var _a3;
      let list = this.groups.get(group);
      if (!list) {
        list = /* @__PURE__ */ new Map();
        this.groups.set(group, list);
      }
      let renders = (_a3 = list.get(key)) != null ? _a3 : 0;
      list.set(key, renders + 1);
      let index = Array.from(list.keys()).indexOf(key);
      function release() {
        let renders2 = list.get(key);
        if (renders2 > 1) {
          list.set(key, renders2 - 1);
        } else {
          list.delete(key);
        }
      }
      return [index, release];
    }
  };
}
function StableCollection({ children }) {
  let collection = React25.useRef(createCollection());
  return /* @__PURE__ */ React25.createElement(StableCollectionContext.Provider, { value: collection }, children);
}
function useStableCollectionIndex(group) {
  let collection = React25.useContext(StableCollectionContext);
  if (!collection)
    throw new Error("You must wrap your component in a <StableCollection>");
  let key = useStableCollectionKey();
  let [idx, cleanupIdx] = collection.current.get(group, key);
  React25.useEffect(() => cleanupIdx, []);
  return idx;
}
function useStableCollectionKey() {
  var _a3, _b, _c;
  let owner = (
    // @ts-ignore
    (_c = (_b = (_a3 = React25.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : _a3.ReactCurrentOwner) == null ? void 0 : _b.current) != null ? _c : null
  );
  if (!owner)
    return Symbol();
  let indexes = [];
  let fiber = owner;
  while (fiber) {
    indexes.push(fiber.index);
    fiber = fiber.return;
  }
  return "$." + indexes.join(".");
}

// src/components/tabs/tabs.tsx
var reducers8 = {
  [0 /* SetSelectedIndex */](state, action) {
    var _a3;
    let tabs = sortByDomNode(state.tabs, (tab) => tab.current);
    let panels = sortByDomNode(state.panels, (panel) => panel.current);
    let focusableTabs = tabs.filter((tab) => {
      var _a4;
      return !((_a4 = tab.current) == null ? void 0 : _a4.hasAttribute("disabled"));
    });
    let nextState = { ...state, tabs, panels };
    if (
      // Underflow
      action.index < 0 || // Overflow
      action.index > tabs.length - 1
    ) {
      let direction = match(Math.sign(action.index - state.selectedIndex), {
        [-1 /* Less */]: () => 1 /* Backwards */,
        [0 /* Equal */]: () => {
          return match(Math.sign(action.index), {
            [-1 /* Less */]: () => 0 /* Forwards */,
            [0 /* Equal */]: () => 0 /* Forwards */,
            [1 /* Greater */]: () => 1 /* Backwards */
          });
        },
        [1 /* Greater */]: () => 0 /* Forwards */
      });
      if (focusableTabs.length === 0) {
        return nextState;
      }
      let nextSelectedIndex = match(direction, {
        [0 /* Forwards */]: () => tabs.indexOf(focusableTabs[0]),
        [1 /* Backwards */]: () => tabs.indexOf(focusableTabs[focusableTabs.length - 1])
      });
      return {
        ...nextState,
        selectedIndex: nextSelectedIndex === -1 ? state.selectedIndex : nextSelectedIndex
      };
    }
    let before = tabs.slice(0, action.index);
    let after = tabs.slice(action.index);
    let next = [...after, ...before].find((tab) => focusableTabs.includes(tab));
    if (!next)
      return nextState;
    let selectedIndex = (_a3 = tabs.indexOf(next)) != null ? _a3 : state.selectedIndex;
    if (selectedIndex === -1)
      selectedIndex = state.selectedIndex;
    return { ...nextState, selectedIndex };
  },
  [1 /* RegisterTab */](state, action) {
    if (state.tabs.includes(action.tab))
      return state;
    let activeTab = state.tabs[state.selectedIndex];
    let adjustedTabs = sortByDomNode([...state.tabs, action.tab], (tab) => tab.current);
    let selectedIndex = state.selectedIndex;
    if (!state.info.current.isControlled) {
      selectedIndex = adjustedTabs.indexOf(activeTab);
      if (selectedIndex === -1)
        selectedIndex = state.selectedIndex;
    }
    return { ...state, tabs: adjustedTabs, selectedIndex };
  },
  [2 /* UnregisterTab */](state, action) {
    return { ...state, tabs: state.tabs.filter((tab) => tab !== action.tab) };
  },
  [3 /* RegisterPanel */](state, action) {
    if (state.panels.includes(action.panel))
      return state;
    return {
      ...state,
      panels: sortByDomNode([...state.panels, action.panel], (panel) => panel.current)
    };
  },
  [4 /* UnregisterPanel */](state, action) {
    return { ...state, panels: state.panels.filter((panel) => panel !== action.panel) };
  }
};
var TabsDataContext = (0, import_react42.createContext)(null);
TabsDataContext.displayName = "TabsDataContext";
function useData4(component) {
  let context = (0, import_react42.useContext)(TabsDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData4);
    throw err;
  }
  return context;
}
var TabsActionsContext = (0, import_react42.createContext)(null);
TabsActionsContext.displayName = "TabsActionsContext";
function useActions4(component) {
  let context = (0, import_react42.useContext)(TabsActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions4);
    throw err;
  }
  return context;
}
function stateReducer8(state, action) {
  return match(action.type, reducers8, state, action);
}
var DEFAULT_TABS_TAG = import_react42.Fragment;
function GroupFn4(props, ref) {
  let {
    defaultIndex = 0,
    vertical = false,
    manual = false,
    onChange,
    selectedIndex = null,
    ...theirProps
  } = props;
  const orientation = vertical ? "vertical" : "horizontal";
  const activation = manual ? "manual" : "auto";
  let isControlled = selectedIndex !== null;
  let info = useLatestValue({ isControlled });
  let tabsRef = useSyncRefs(ref);
  let [state, dispatch] = (0, import_react42.useReducer)(stateReducer8, {
    info,
    selectedIndex: selectedIndex != null ? selectedIndex : defaultIndex,
    tabs: [],
    panels: []
  });
  let slot = (0, import_react42.useMemo)(() => ({ selectedIndex: state.selectedIndex }), [state.selectedIndex]);
  let onChangeRef = useLatestValue(onChange || (() => {
  }));
  let stableTabsRef = useLatestValue(state.tabs);
  let tabsData = (0, import_react42.useMemo)(
    () => ({ orientation, activation, ...state }),
    [orientation, activation, state]
  );
  let registerTab = useEvent((tab) => {
    dispatch({ type: 1 /* RegisterTab */, tab });
    return () => dispatch({ type: 2 /* UnregisterTab */, tab });
  });
  let registerPanel = useEvent((panel) => {
    dispatch({ type: 3 /* RegisterPanel */, panel });
    return () => dispatch({ type: 4 /* UnregisterPanel */, panel });
  });
  let change = useEvent((index) => {
    if (realSelectedIndex.current !== index) {
      onChangeRef.current(index);
    }
    if (!isControlled) {
      dispatch({ type: 0 /* SetSelectedIndex */, index });
    }
  });
  let realSelectedIndex = useLatestValue(isControlled ? props.selectedIndex : state.selectedIndex);
  let tabsActions = (0, import_react42.useMemo)(() => ({ registerTab, registerPanel, change }), []);
  useIsoMorphicEffect(() => {
    dispatch({ type: 0 /* SetSelectedIndex */, index: selectedIndex != null ? selectedIndex : defaultIndex });
  }, [
    selectedIndex
    /* Deliberately skipping defaultIndex */
  ]);
  useIsoMorphicEffect(() => {
    if (realSelectedIndex.current === void 0)
      return;
    if (state.tabs.length <= 0)
      return;
    let sorted = sortByDomNode(state.tabs, (tab) => tab.current);
    let didOrderChange = sorted.some((tab, i) => state.tabs[i] !== tab);
    if (didOrderChange) {
      change(sorted.indexOf(state.tabs[realSelectedIndex.current]));
    }
  });
  let ourProps = { ref: tabsRef };
  return /* @__PURE__ */ import_react42.default.createElement(StableCollection, null, /* @__PURE__ */ import_react42.default.createElement(TabsActionsContext.Provider, { value: tabsActions }, /* @__PURE__ */ import_react42.default.createElement(TabsDataContext.Provider, { value: tabsData }, tabsData.tabs.length <= 0 && /* @__PURE__ */ import_react42.default.createElement(
    FocusSentinel,
    {
      onFocus: () => {
        var _a3, _b;
        for (let tab of stableTabsRef.current) {
          if (((_a3 = tab.current) == null ? void 0 : _a3.tabIndex) === 0) {
            (_b = tab.current) == null ? void 0 : _b.focus();
            return true;
          }
        }
        return false;
      }
    }
  ), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TABS_TAG,
    name: "Tabs"
  }))));
}
var DEFAULT_LIST_TAG = "div";
function ListFn(props, ref) {
  let { orientation, selectedIndex } = useData4("Tab.List");
  let listRef = useSyncRefs(ref);
  let slot = { selectedIndex };
  let theirProps = props;
  let ourProps = {
    ref: listRef,
    role: "tablist",
    "aria-orientation": orientation
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: "Tabs.List"
  });
}
var DEFAULT_TAB_TAG = "button";
function TabFn(props, ref) {
  var _a3, _b;
  let internalId = useId();
  let { id = `headlessui-tabs-tab-${internalId}`, ...theirProps } = props;
  let { orientation, activation, selectedIndex, tabs, panels } = useData4("Tab");
  let actions = useActions4("Tab");
  let data = useData4("Tab");
  let internalTabRef = (0, import_react42.useRef)(null);
  let tabRef = useSyncRefs(internalTabRef, ref);
  useIsoMorphicEffect(() => actions.registerTab(internalTabRef), [actions, internalTabRef]);
  let mySSRIndex = useStableCollectionIndex("tabs");
  let myIndex = tabs.indexOf(internalTabRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let activateUsing = useEvent((cb) => {
    var _a4;
    let result = cb();
    if (result === 2 /* Success */ && activation === "auto") {
      let newTab = (_a4 = getOwnerDocument(internalTabRef)) == null ? void 0 : _a4.activeElement;
      let idx = data.tabs.findIndex((tab) => tab.current === newTab);
      if (idx !== -1)
        actions.change(idx);
    }
    return result;
  });
  let handleKeyDown = useEvent((event) => {
    let list = tabs.map((tab) => tab.current).filter(Boolean);
    if (event.key === " " /* Space */ || event.key === "Enter" /* Enter */) {
      event.preventDefault();
      event.stopPropagation();
      actions.change(myIndex);
      return;
    }
    switch (event.key) {
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return activateUsing(() => focusIn(list, 1 /* First */));
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return activateUsing(() => focusIn(list, 8 /* Last */));
    }
    let result = activateUsing(() => {
      return match(orientation, {
        vertical() {
          if (event.key === "ArrowUp" /* ArrowUp */)
            return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
          if (event.key === "ArrowDown" /* ArrowDown */)
            return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
          return 0 /* Error */;
        },
        horizontal() {
          if (event.key === "ArrowLeft" /* ArrowLeft */)
            return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
          if (event.key === "ArrowRight" /* ArrowRight */)
            return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
          return 0 /* Error */;
        }
      });
    });
    if (result === 2 /* Success */) {
      return event.preventDefault();
    }
  });
  let ready = (0, import_react42.useRef)(false);
  let handleSelection = useEvent(() => {
    var _a4;
    if (ready.current)
      return;
    ready.current = true;
    (_a4 = internalTabRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
    actions.change(myIndex);
    microTask(() => {
      ready.current = false;
    });
  });
  let handleMouseDown = useEvent((event) => {
    event.preventDefault();
  });
  let slot = (0, import_react42.useMemo)(
    () => {
      var _a4;
      return { selected, disabled: (_a4 = props.disabled) != null ? _a4 : false };
    },
    [selected, props.disabled]
  );
  let ourProps = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    onClick: handleSelection,
    id,
    role: "tab",
    type: useResolveButtonType(props, internalTabRef),
    "aria-controls": (_b = (_a3 = panels[myIndex]) == null ? void 0 : _a3.current) == null ? void 0 : _b.id,
    "aria-selected": selected,
    tabIndex: selected ? 0 : -1
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: "Tabs.Tab"
  });
}
var DEFAULT_PANELS_TAG = "div";
function PanelsFn(props, ref) {
  let { selectedIndex } = useData4("Tab.Panels");
  let panelsRef = useSyncRefs(ref);
  let slot = (0, import_react42.useMemo)(() => ({ selectedIndex }), [selectedIndex]);
  let theirProps = props;
  let ourProps = { ref: panelsRef };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: "Tabs.Panels"
  });
}
var DEFAULT_PANEL_TAG4 = "div";
var PanelRenderFeatures3 = 1 /* RenderStrategy */ | 2 /* Static */;
function PanelFn4(props, ref) {
  var _a3, _b, _c, _d;
  let internalId = useId();
  let { id = `headlessui-tabs-panel-${internalId}`, tabIndex = 0, ...theirProps } = props;
  let { selectedIndex, tabs, panels } = useData4("Tab.Panel");
  let actions = useActions4("Tab.Panel");
  let internalPanelRef = (0, import_react42.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref);
  useIsoMorphicEffect(
    () => actions.registerPanel(internalPanelRef),
    [
      actions,
      internalPanelRef,
      // The `id` prop is here to force a re-render of the
      // corresponding `Tab` whenever the `id` is calculated in React < 18
      id
    ]
  );
  let mySSRIndex = useStableCollectionIndex("panels");
  let myIndex = panels.indexOf(internalPanelRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let slot = (0, import_react42.useMemo)(() => ({ selected }), [selected]);
  let ourProps = {
    ref: panelRef,
    id,
    role: "tabpanel",
    "aria-labelledby": (_b = (_a3 = tabs[myIndex]) == null ? void 0 : _a3.current) == null ? void 0 : _b.id,
    tabIndex: selected ? tabIndex : -1
  };
  if (!selected && ((_c = theirProps.unmount) != null ? _c : true) && !((_d = theirProps.static) != null ? _d : false)) {
    return /* @__PURE__ */ import_react42.default.createElement(Hidden, { as: "span", "aria-hidden": "true", ...ourProps });
  }
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG4,
    features: PanelRenderFeatures3,
    visible: selected,
    name: "Tabs.Panel"
  });
}
var TabRoot = forwardRefWithAs(TabFn);
var Group4 = forwardRefWithAs(GroupFn4);
var List = forwardRefWithAs(ListFn);
var Panels = forwardRefWithAs(PanelsFn);
var Panel4 = forwardRefWithAs(PanelFn4);
var Tab = Object.assign(TabRoot, { Group: Group4, List, Panels, Panel: Panel4 });

// src/components/transitions/transition.tsx
var import_react43 = __toESM(require("react"), 1);

// src/utils/once.ts
function once(cb) {
  let state = { called: false };
  return (...args) => {
    if (state.called)
      return;
    state.called = true;
    return cb(...args);
  };
}

// src/components/transitions/utils/transition.ts
function addClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.add(...classes);
}
function removeClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.remove(...classes);
}
function waitForTransition(node, done) {
  let d = disposables();
  if (!node)
    return d.dispose;
  let { transitionDuration, transitionDelay } = getComputedStyle(node);
  let [durationMs, delayMs] = [transitionDuration, transitionDelay].map((value) => {
    let [resolvedValue = 0] = value.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((a, z) => z - a);
    return resolvedValue;
  });
  let totalDuration = durationMs + delayMs;
  if (totalDuration !== 0) {
    if (false) {
      let dispose = d.setTimeout(() => {
        done();
        dispose();
      }, totalDuration);
    } else {
      d.group((d2) => {
        d2.setTimeout(() => {
          done();
          d2.dispose();
        }, totalDuration);
        d2.addEventListener(node, "transitionrun", (event) => {
          if (event.target !== event.currentTarget)
            return;
          d2.dispose();
        });
      });
      let dispose = d.addEventListener(node, "transitionend", (event) => {
        if (event.target !== event.currentTarget)
          return;
        done();
        dispose();
      });
    }
  } else {
    done();
  }
  d.add(() => done());
  return d.dispose;
}
function transition(node, classes, show, done) {
  let direction = show ? "enter" : "leave";
  let d = disposables();
  let _done = done !== void 0 ? once(done) : () => {
  };
  if (direction === "enter") {
    node.removeAttribute("hidden");
    node.style.display = "";
  }
  let base = match(direction, {
    enter: () => classes.enter,
    leave: () => classes.leave
  });
  let to = match(direction, {
    enter: () => classes.enterTo,
    leave: () => classes.leaveTo
  });
  let from = match(direction, {
    enter: () => classes.enterFrom,
    leave: () => classes.leaveFrom
  });
  removeClasses(
    node,
    ...classes.base,
    ...classes.enter,
    ...classes.enterTo,
    ...classes.enterFrom,
    ...classes.leave,
    ...classes.leaveFrom,
    ...classes.leaveTo,
    ...classes.entered
  );
  addClasses(node, ...classes.base, ...base, ...from);
  d.nextFrame(() => {
    removeClasses(node, ...classes.base, ...base, ...from);
    addClasses(node, ...classes.base, ...base, ...to);
    waitForTransition(node, () => {
      removeClasses(node, ...classes.base, ...base);
      addClasses(node, ...classes.base, ...classes.entered);
      return _done();
    });
  });
  return d.dispose;
}

// src/hooks/use-transition.ts
function useTransition({
  immediate,
  container,
  direction,
  classes,
  onStart,
  onStop
}) {
  let mounted = useIsMounted();
  let d = useDisposables();
  let latestDirection = useLatestValue(direction);
  useIsoMorphicEffect(() => {
    if (!immediate)
      return;
    latestDirection.current = "enter";
  }, [immediate]);
  useIsoMorphicEffect(() => {
    let dd = disposables();
    d.add(dd.dispose);
    let node = container.current;
    if (!node)
      return;
    if (latestDirection.current === "idle")
      return;
    if (!mounted.current)
      return;
    dd.dispose();
    onStart.current(latestDirection.current);
    dd.add(
      transition(node, classes.current, latestDirection.current === "enter", () => {
        dd.dispose();
        onStop.current(latestDirection.current);
      })
    );
    return dd.dispose;
  }, [direction]);
}

// src/components/transitions/transition.tsx
function splitClasses(classes = "") {
  return classes.split(/\s+/).filter((className) => className.length > 1);
}
var TransitionContext = (0, import_react43.createContext)(null);
TransitionContext.displayName = "TransitionContext";
function useTransitionContext() {
  let context = (0, import_react43.useContext)(TransitionContext);
  if (context === null) {
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  }
  return context;
}
function useParentNesting() {
  let context = (0, import_react43.useContext)(NestingContext);
  if (context === null) {
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  }
  return context;
}
var NestingContext = (0, import_react43.createContext)(null);
NestingContext.displayName = "NestingContext";
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.current.filter(({ el }) => el.current !== null).filter(({ state }) => state === "visible" /* Visible */).length > 0;
}
function useNesting(done, parent) {
  let doneRef = useLatestValue(done);
  let transitionableChildren = (0, import_react43.useRef)([]);
  let mounted = useIsMounted();
  let d = useDisposables();
  let unregister = useEvent((container, strategy = 1 /* Hidden */) => {
    let idx = transitionableChildren.current.findIndex(({ el }) => el === container);
    if (idx === -1)
      return;
    match(strategy, {
      [0 /* Unmount */]() {
        transitionableChildren.current.splice(idx, 1);
      },
      [1 /* Hidden */]() {
        transitionableChildren.current[idx].state = "hidden" /* Hidden */;
      }
    });
    d.microTask(() => {
      var _a3;
      if (!hasChildren(transitionableChildren) && mounted.current) {
        (_a3 = doneRef.current) == null ? void 0 : _a3.call(doneRef);
      }
    });
  });
  let register = useEvent((container) => {
    let child = transitionableChildren.current.find(({ el }) => el === container);
    if (!child) {
      transitionableChildren.current.push({ el: container, state: "visible" /* Visible */ });
    } else if (child.state !== "visible" /* Visible */) {
      child.state = "visible" /* Visible */;
    }
    return () => unregister(container, 0 /* Unmount */);
  });
  let todos = (0, import_react43.useRef)([]);
  let wait = (0, import_react43.useRef)(Promise.resolve());
  let chains = (0, import_react43.useRef)({
    enter: [],
    leave: [],
    idle: []
  });
  let onStart = useEvent(
    (container, direction, cb) => {
      todos.current.splice(0);
      if (parent) {
        parent.chains.current[direction] = parent.chains.current[direction].filter(
          ([containerInParent]) => containerInParent !== container
        );
      }
      parent == null ? void 0 : parent.chains.current[direction].push([
        container,
        new Promise((resolve) => {
          todos.current.push(resolve);
        })
      ]);
      parent == null ? void 0 : parent.chains.current[direction].push([
        container,
        new Promise((resolve) => {
          Promise.all(chains.current[direction].map(([_container, promise]) => promise)).then(
            () => resolve()
          );
        })
      ]);
      if (direction === "enter") {
        wait.current = wait.current.then(() => parent == null ? void 0 : parent.wait.current).then(() => cb(direction));
      } else {
        cb(direction);
      }
    }
  );
  let onStop = useEvent(
    (_container, direction, cb) => {
      Promise.all(chains.current[direction].splice(0).map(([_container2, promise]) => promise)).then(() => {
        var _a3;
        (_a3 = todos.current.shift()) == null ? void 0 : _a3();
      }).then(() => cb(direction));
    }
  );
  return (0, import_react43.useMemo)(
    () => ({
      children: transitionableChildren,
      register,
      unregister,
      onStart,
      onStop,
      wait,
      chains
    }),
    [register, unregister, transitionableChildren, onStart, onStop, chains, wait]
  );
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var _a3;
  let result = {};
  for (let name of eventNames) {
    result[name] = (_a3 = events[name]) != null ? _a3 : noop;
  }
  return result;
}
function useEvents(events) {
  let eventsRef = (0, import_react43.useRef)(ensureEventHooksExist(events));
  (0, import_react43.useEffect)(() => {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = 1 /* RenderStrategy */;
function TransitionChildFn(props, ref) {
  var _a3, _b;
  let {
    // Event "handlers"
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave,
    // Class names
    enter,
    enterFrom,
    enterTo,
    entered,
    leave,
    leaveFrom,
    leaveTo,
    // @ts-expect-error
    ...rest
  } = props;
  let container = (0, import_react43.useRef)(null);
  let transitionRef = useSyncRefs(container, ref);
  let strategy = ((_a3 = rest.unmount) != null ? _a3 : true) ? 0 /* Unmount */ : 1 /* Hidden */;
  let { show, appear, initial } = useTransitionContext();
  let [state, setState] = (0, import_react43.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let parentNesting = useParentNesting();
  let { register, unregister } = parentNesting;
  (0, import_react43.useEffect)(() => register(container), [register, container]);
  (0, import_react43.useEffect)(() => {
    if (strategy !== 1 /* Hidden */)
      return;
    if (!container.current)
      return;
    if (show && state !== "visible" /* Visible */) {
      setState("visible" /* Visible */);
      return;
    }
    return match(state, {
      ["hidden" /* Hidden */]: () => unregister(container),
      ["visible" /* Visible */]: () => register(container)
    });
  }, [state, container, register, unregister, show, strategy]);
  let classes = useLatestValue({
    base: splitClasses(rest.className),
    enter: splitClasses(enter),
    enterFrom: splitClasses(enterFrom),
    enterTo: splitClasses(enterTo),
    entered: splitClasses(entered),
    leave: splitClasses(leave),
    leaveFrom: splitClasses(leaveFrom),
    leaveTo: splitClasses(leaveTo)
  });
  let events = useEvents({
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave
  });
  let ready = useServerHandoffComplete();
  (0, import_react43.useEffect)(() => {
    if (ready && state === "visible" /* Visible */ && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state, ready]);
  let skip = initial && !appear;
  let immediate = appear && show && initial;
  let transitionDirection = (() => {
    if (!ready)
      return "idle";
    if (skip)
      return "idle";
    return show ? "enter" : "leave";
  })();
  let transitionStateFlags = useFlags(0);
  let beforeEvent = useEvent((direction) => {
    return match(direction, {
      enter: () => {
        transitionStateFlags.addFlag(8 /* Opening */);
        events.current.beforeEnter();
      },
      leave: () => {
        transitionStateFlags.addFlag(4 /* Closing */);
        events.current.beforeLeave();
      },
      idle: () => {
      }
    });
  });
  let afterEvent = useEvent((direction) => {
    return match(direction, {
      enter: () => {
        transitionStateFlags.removeFlag(8 /* Opening */);
        events.current.afterEnter();
      },
      leave: () => {
        transitionStateFlags.removeFlag(4 /* Closing */);
        events.current.afterLeave();
      },
      idle: () => {
      }
    });
  });
  let nesting = useNesting(() => {
    setState("hidden" /* Hidden */);
    unregister(container);
  }, parentNesting);
  let isTransitioning = (0, import_react43.useRef)(false);
  useTransition({
    immediate,
    container,
    classes,
    direction: transitionDirection,
    onStart: useLatestValue((direction) => {
      isTransitioning.current = true;
      nesting.onStart(container, direction, beforeEvent);
    }),
    onStop: useLatestValue((direction) => {
      isTransitioning.current = false;
      nesting.onStop(container, direction, afterEvent);
      if (direction === "leave" && !hasChildren(nesting)) {
        setState("hidden" /* Hidden */);
        unregister(container);
      }
    })
  });
  let theirProps = rest;
  let ourProps = { ref: transitionRef };
  if (immediate) {
    theirProps = {
      ...theirProps,
      // Already apply the `enter` and `enterFrom` on the server if required
      className: classNames(rest.className, ...classes.current.enter, ...classes.current.enterFrom)
    };
  } else if (isTransitioning.current) {
    theirProps.className = classNames(rest.className, (_b = container.current) == null ? void 0 : _b.className);
    if (theirProps.className === "")
      delete theirProps.className;
  }
  return /* @__PURE__ */ import_react43.default.createElement(NestingContext.Provider, { value: nesting }, /* @__PURE__ */ import_react43.default.createElement(
    OpenClosedProvider,
    {
      value: match(state, {
        ["visible" /* Visible */]: 1 /* Open */,
        ["hidden" /* Hidden */]: 2 /* Closed */
      }) | transitionStateFlags.flags
    },
    render({
      ourProps,
      theirProps,
      defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
      features: TransitionChildRenderFeatures,
      visible: state === "visible" /* Visible */,
      name: "Transition.Child"
    })
  ));
}
function TransitionRootFn(props, ref) {
  let { show, appear = false, unmount = true, ...theirProps } = props;
  let internalTransitionRef = (0, import_react43.useRef)(null);
  let transitionRef = useSyncRefs(internalTransitionRef, ref);
  useServerHandoffComplete();
  let usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    show = (usesOpenClosedState & 1 /* Open */) === 1 /* Open */;
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  let [state, setState] = (0, import_react43.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let nestingBag = useNesting(() => {
    setState("hidden" /* Hidden */);
  });
  let [initial, setInitial] = (0, import_react43.useState)(true);
  let changes = (0, import_react43.useRef)([show]);
  useIsoMorphicEffect(() => {
    if (initial === false) {
      return;
    }
    if (changes.current[changes.current.length - 1] !== show) {
      changes.current.push(show);
      setInitial(false);
    }
  }, [changes, show]);
  let transitionBag = (0, import_react43.useMemo)(
    () => ({ show, appear, initial }),
    [show, appear, initial]
  );
  (0, import_react43.useEffect)(() => {
    if (show) {
      setState("visible" /* Visible */);
    } else if (!hasChildren(nestingBag)) {
      setState("hidden" /* Hidden */);
    } else if (true) {
      let node = internalTransitionRef.current;
      if (!node)
        return;
      let rect = node.getBoundingClientRect();
      if (rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0) {
        setState("hidden" /* Hidden */);
      }
    }
  }, [show, nestingBag]);
  let sharedProps = { unmount };
  let beforeEnter = useEvent(() => {
    var _a3;
    if (initial)
      setInitial(false);
    (_a3 = props.beforeEnter) == null ? void 0 : _a3.call(props);
  });
  let beforeLeave = useEvent(() => {
    var _a3;
    if (initial)
      setInitial(false);
    (_a3 = props.beforeLeave) == null ? void 0 : _a3.call(props);
  });
  return /* @__PURE__ */ import_react43.default.createElement(NestingContext.Provider, { value: nestingBag }, /* @__PURE__ */ import_react43.default.createElement(TransitionContext.Provider, { value: transitionBag }, render({
    ourProps: {
      ...sharedProps,
      as: import_react43.Fragment,
      children: /* @__PURE__ */ import_react43.default.createElement(
        TransitionChild,
        {
          ref: transitionRef,
          ...sharedProps,
          ...theirProps,
          beforeEnter,
          beforeLeave
        }
      )
    },
    theirProps: {},
    defaultTag: import_react43.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === "visible" /* Visible */,
    name: "Transition"
  })));
}
function ChildFn(props, ref) {
  let hasTransitionContext = (0, import_react43.useContext)(TransitionContext) !== null;
  let hasOpenClosedContext = useOpenClosed() !== null;
  return /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, !hasTransitionContext && hasOpenClosedContext ? (
    // @ts-expect-error This is an object
    /* @__PURE__ */ import_react43.default.createElement(TransitionRoot, { ref, ...props })
  ) : (
    // @ts-expect-error This is an object
    /* @__PURE__ */ import_react43.default.createElement(TransitionChild, { ref, ...props })
  ));
}
var TransitionRoot = forwardRefWithAs(
  TransitionRootFn
);
var TransitionChild = forwardRefWithAs(
  TransitionChildFn
);
var Child = forwardRefWithAs(ChildFn);
var Transition = Object.assign(TransitionRoot, { Child, Root: TransitionRoot });
/*! Bundled license information:

@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/utils.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/index.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-virtual/build/lib/index.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
