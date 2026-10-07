/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var utils = require('./utils.js');

//

//

var defaultKeyExtractor = function defaultKeyExtractor(index) {
  return index;
};
var defaultRangeExtractor = function defaultRangeExtractor(range) {
  var start = Math.max(range.startIndex - range.overscan, 0);
  var end = Math.min(range.endIndex + range.overscan, range.count - 1);
  var arr = [];
  for (var _i = start; _i <= end; _i++) {
    arr.push(_i);
  }
  return arr;
};
var observeElementRect = function observeElementRect(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler(rect) {
    var width = rect.width,
      height = rect.height;
    cb({
      width: Math.round(width),
      height: Math.round(height)
    });
  };
  handler(element.getBoundingClientRect());
  var observer = new ResizeObserver(function (entries) {
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
    box: 'border-box'
  });
  return function () {
    observer.unobserve(element);
  };
};
var observeWindowRect = function observeWindowRect(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb({
      width: element.innerWidth,
      height: element.innerHeight
    });
  };
  handler();
  element.addEventListener('resize', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('resize', handler);
  };
};
var observeElementOffset = function observeElementOffset(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb(element[instance.options.horizontal ? 'scrollLeft' : 'scrollTop']);
  };
  handler();
  element.addEventListener('scroll', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('scroll', handler);
  };
};
var observeWindowOffset = function observeWindowOffset(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb(element[instance.options.horizontal ? 'scrollX' : 'scrollY']);
  };
  handler();
  element.addEventListener('scroll', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('scroll', handler);
  };
};
var measureElement = function measureElement(element, entry, instance) {
  if (entry != null && entry.borderBoxSize) {
    var box = entry.borderBoxSize[0];
    if (box) {
      var size = Math.round(box[instance.options.horizontal ? 'inlineSize' : 'blockSize']);
      return size;
    }
  }
  return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? 'width' : 'height']);
};
var windowScroll = function windowScroll(offset, _ref, instance) {
  var _instance$scrollEleme, _instance$scrollEleme2;
  var _ref$adjustments = _ref.adjustments,
    adjustments = _ref$adjustments === void 0 ? 0 : _ref$adjustments,
    behavior = _ref.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme = instance.scrollElement) == null || _instance$scrollEleme.scrollTo == null || _instance$scrollEleme.scrollTo((_instance$scrollEleme2 = {}, _instance$scrollEleme2[instance.options.horizontal ? 'left' : 'top'] = toOffset, _instance$scrollEleme2.behavior = behavior, _instance$scrollEleme2));
};
var elementScroll = function elementScroll(offset, _ref2, instance) {
  var _instance$scrollEleme3, _instance$scrollEleme4;
  var _ref2$adjustments = _ref2.adjustments,
    adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments,
    behavior = _ref2.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme3 = instance.scrollElement) == null || _instance$scrollEleme3.scrollTo == null || _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? 'left' : 'top'] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
};
var Virtualizer = function Virtualizer(_opts) {
  var _this = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = false;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = new Map();
  this.observer = function () {
    var _ro = null;
    var get = function get() {
      if (_ro) {
        return _ro;
      } else if (typeof ResizeObserver !== 'undefined') {
        return _ro = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) {
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
          box: 'border-box'
        });
      },
      unobserve: function unobserve(target) {
        var _get3;
        return (_get3 = get()) == null ? void 0 : _get3.unobserve(target);
      }
    };
  }();
  this.range = null;
  this.setOptions = function (opts) {
    Object.entries(opts).forEach(function (_ref3) {
      var key = _ref3[0],
        value = _ref3[1];
      if (typeof value === 'undefined') delete opts[key];
    });
    _this.options = _rollupPluginBabelHelpers["extends"]({
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
      onChange: function onChange() {},
      measureElement: measureElement,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: 'data-index',
      initialMeasurementsCache: [],
      lanes: 1
    }, opts);
  };
  this.notify = function (sync) {
    _this.options.onChange == null || _this.options.onChange(_this, sync);
  };
  this.maybeNotify = utils.memo(function () {
    _this.calculateRange();
    return [_this.isScrolling, _this.range ? _this.range.startIndex : null, _this.range ? _this.range.endIndex : null];
  }, function (isScrolling) {
    _this.notify(isScrolling);
  }, {
    key: process.env.NODE_ENV !== 'production' && 'maybeNotify',
    debug: function debug() {
      return _this.options.debug;
    },
    initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
  });
  this.cleanup = function () {
    _this.unsubs.filter(Boolean).forEach(function (d) {
      return d();
    });
    _this.unsubs = [];
    _this.scrollElement = null;
  };
  this._didMount = function () {
    _this.measureElementCache.forEach(_this.observer.observe);
    return function () {
      _this.observer.disconnect();
      _this.cleanup();
    };
  };
  this._willUpdate = function () {
    var scrollElement = _this.options.getScrollElement();
    if (_this.scrollElement !== scrollElement) {
      _this.cleanup();
      _this.scrollElement = scrollElement;
      _this._scrollToOffset(_this.scrollOffset, {
        adjustments: undefined,
        behavior: undefined
      });
      _this.unsubs.push(_this.options.observeElementRect(_this, function (rect) {
        _this.scrollRect = rect;
        _this.maybeNotify();
      }));
      _this.unsubs.push(_this.options.observeElementOffset(_this, function (offset) {
        _this.scrollAdjustments = 0;
        if (_this.scrollOffset === offset) {
          return;
        }
        if (_this.isScrollingTimeoutId !== null) {
          clearTimeout(_this.isScrollingTimeoutId);
          _this.isScrollingTimeoutId = null;
        }
        _this.isScrolling = true;
        _this.scrollDirection = _this.scrollOffset < offset ? 'forward' : 'backward';
        _this.scrollOffset = offset;
        _this.maybeNotify();
        _this.isScrollingTimeoutId = setTimeout(function () {
          _this.isScrollingTimeoutId = null;
          _this.isScrolling = false;
          _this.scrollDirection = null;
          _this.maybeNotify();
        }, _this.options.scrollingDelay);
      }));
    }
  };
  this.getSize = function () {
    return _this.scrollRect[_this.options.horizontal ? 'width' : 'height'];
  };
  this.memoOptions = utils.memo(function () {
    return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
  }, function (count, paddingStart, scrollMargin, getItemKey) {
    _this.pendingMeasuredCacheIndexes = [];
    return {
      count: count,
      paddingStart: paddingStart,
      scrollMargin: scrollMargin,
      getItemKey: getItemKey
    };
  }, {
    key: false
  });
  this.getFurthestMeasurement = function (measurements, index) {
    var furthestMeasurementsFound = new Map();
    var furthestMeasurements = new Map();
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
    return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function (a, b) {
      return a.end - b.end;
    })[0] : undefined;
  };
  this.getMeasurements = utils.memo(function () {
    return [_this.memoOptions(), _this.itemSizeCache];
  }, function (_ref4, itemSizeCache) {
    var count = _ref4.count,
      paddingStart = _ref4.paddingStart,
      scrollMargin = _ref4.scrollMargin,
      getItemKey = _ref4.getItemKey;
    var min = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
    _this.pendingMeasuredCacheIndexes = [];
    var measurements = _this.measurementsCache.slice(0, min);
    for (var _i2 = min; _i2 < count; _i2++) {
      var key = getItemKey(_i2);
      var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
      var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
      var measuredSize = itemSizeCache.get(key);
      var size = typeof measuredSize === 'number' ? measuredSize : _this.options.estimateSize(_i2);
      var end = start + size;
      var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
      measurements[_i2] = {
        index: _i2,
        start: start,
        size: size,
        end: end,
        key: key,
        lane: lane
      };
    }
    _this.measurementsCache = measurements;
    return measurements;
  }, {
    key: process.env.NODE_ENV !== 'production' && 'getMeasurements',
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.calculateRange = utils.memo(function () {
    return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
  }, function (measurements, outerSize, scrollOffset) {
    return _this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
      measurements: measurements,
      outerSize: outerSize,
      scrollOffset: scrollOffset
    }) : null;
  }, {
    key: process.env.NODE_ENV !== 'production' && 'calculateRange',
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getIndexes = utils.memo(function () {
    return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
  }, function (rangeExtractor, range, overscan, count) {
    return range === null ? [] : rangeExtractor(_rollupPluginBabelHelpers["extends"]({}, range, {
      overscan: overscan,
      count: count
    }));
  }, {
    key: process.env.NODE_ENV !== 'production' && 'getIndexes',
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.indexFromElement = function (node) {
    var attributeName = _this.options.indexAttribute;
    var indexStr = node.getAttribute(attributeName);
    if (!indexStr) {
      console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
      return -1;
    }
    return parseInt(indexStr, 10);
  };
  this._measureElement = function (node, entry) {
    var item = _this.measurementsCache[_this.indexFromElement(node)];
    if (!item || !node.isConnected) {
      _this.measureElementCache.forEach(function (cached, key) {
        if (cached === node) {
          _this.observer.unobserve(node);
          _this.measureElementCache["delete"](key);
        }
      });
      return;
    }
    var prevNode = _this.measureElementCache.get(item.key);
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
  this.resizeItem = function (item, size) {
    var _this$itemSizeCache$g;
    var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
    var delta = size - itemSize;
    if (delta !== 0) {
      if (item.start < _this.scrollOffset) {
        if (process.env.NODE_ENV !== 'production' && _this.options.debug) {
          console.info('correction', delta);
        }
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: _this.scrollAdjustments += delta,
          behavior: undefined
        });
      }
      _this.pendingMeasuredCacheIndexes.push(item.index);
      _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, size));
      _this.notify(false);
    }
  };
  this.measureElement = function (node) {
    if (!node) {
      return;
    }
    _this._measureElement(node, undefined);
  };
  this.getVirtualItems = utils.memo(function () {
    return [_this.getIndexes(), _this.getMeasurements()];
  }, function (indexes, measurements) {
    var virtualItems = [];
    for (var k = 0, len = indexes.length; k < len; k++) {
      var _i3 = indexes[k];
      var measurement = measurements[_i3];
      virtualItems.push(measurement);
    }
    return virtualItems;
  }, {
    key: process.env.NODE_ENV !== 'production' && 'getIndexes',
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getVirtualItemForOffset = function (offset) {
    var measurements = _this.getMeasurements();
    return utils.notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function (index) {
      return utils.notUndefined(measurements[index]).start;
    }, offset)]);
  };
  this.getOffsetForAlignment = function (toOffset, align) {
    var size = _this.getSize();
    if (align === 'auto') {
      if (toOffset <= _this.scrollOffset) {
        align = 'start';
      } else if (toOffset >= _this.scrollOffset + size) {
        align = 'end';
      } else {
        align = 'start';
      }
    }
    if (align === 'start') {
      toOffset = toOffset;
    } else if (align === 'end') {
      toOffset = toOffset - size;
    } else if (align === 'center') {
      toOffset = toOffset - size / 2;
    }
    var scrollSizeProp = _this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
    var scrollSize = _this.scrollElement ? 'document' in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
    var maxOffset = scrollSize - _this.getSize();
    return Math.max(Math.min(maxOffset, toOffset), 0);
  };
  this.getOffsetForIndex = function (index, align) {
    if (align === void 0) {
      align = 'auto';
    }
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    var measurement = utils.notUndefined(_this.getMeasurements()[index]);
    if (align === 'auto') {
      if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
        align = 'end';
      } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
        align = 'start';
      } else {
        return [_this.scrollOffset, align];
      }
    }
    var toOffset = align === 'end' ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
    return [_this.getOffsetForAlignment(toOffset, align), align];
  };
  this.isDynamicMode = function () {
    return _this.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function () {
    if (_this.scrollToIndexTimeoutId !== null) {
      clearTimeout(_this.scrollToIndexTimeoutId);
      _this.scrollToIndexTimeoutId = null;
    }
  };
  this.scrollToOffset = function (toOffset, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp,
      _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'start' : _ref5$align,
      behavior = _ref5.behavior;
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
      adjustments: undefined,
      behavior: behavior
    });
  };
  this.scrollToIndex = function (index, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2,
      _ref6$align = _ref6.align,
      initialAlign = _ref6$align === void 0 ? 'auto' : _ref6$align,
      behavior = _ref6.behavior;
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign),
      toOffset = _this$getOffsetForInd[0],
      align = _this$getOffsetForInd[1];
    _this._scrollToOffset(toOffset, {
      adjustments: undefined,
      behavior: behavior
    });
    if (behavior !== 'smooth' && _this.isDynamicMode()) {
      _this.scrollToIndexTimeoutId = setTimeout(function () {
        _this.scrollToIndexTimeoutId = null;
        var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
        if (elementInDOM) {
          var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align),
            _toOffset = _this$getOffsetForInd2[0];
          if (!utils.approxEqual(_toOffset, _this.scrollOffset)) {
            _this.scrollToIndex(index, {
              align: align,
              behavior: behavior
            });
          }
        } else {
          _this.scrollToIndex(index, {
            align: align,
            behavior: behavior
          });
        }
      });
    }
  };
  this.scrollBy = function (delta, _temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3,
      behavior = _ref7.behavior;
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    _this._scrollToOffset(_this.scrollOffset + delta, {
      adjustments: undefined,
      behavior: behavior
    });
  };
  this.getTotalSize = function () {
    var _this$getMeasurements;
    return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
  };
  this._scrollToOffset = function (offset, _ref8) {
    var adjustments = _ref8.adjustments,
      behavior = _ref8.behavior;
    _this.options.scrollToFn(offset, {
      behavior: behavior,
      adjustments: adjustments
    }, _this);
  };
  this.measure = function () {
    _this.itemSizeCache = new Map();
    _this.notify(false);
  };
  this.setOptions(_opts);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function (item) {
    _this.itemSizeCache.set(item.key, item.size);
  });
  this.maybeNotify();
};
var findNearestBinarySearch = function findNearestBinarySearch(low, high, getCurrentValue, value) {
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
  var measurements = _ref9.measurements,
    outerSize = _ref9.outerSize,
    scrollOffset = _ref9.scrollOffset;
  var count = measurements.length - 1;
  var getOffset = function getOffset(index) {
    return measurements[index].start;
  };
  var startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  var endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return {
    startIndex: startIndex,
    endIndex: endIndex
  };
}

exports.approxEqual = utils.approxEqual;
exports.memo = utils.memo;
exports.notUndefined = utils.notUndefined;
exports.Virtualizer = Virtualizer;
exports.defaultKeyExtractor = defaultKeyExtractor;
exports.defaultRangeExtractor = defaultRangeExtractor;
exports.elementScroll = elementScroll;
exports.measureElement = measureElement;
exports.observeElementOffset = observeElementOffset;
exports.observeElementRect = observeElementRect;
exports.observeWindowOffset = observeWindowOffset;
exports.observeWindowRect = observeWindowRect;
exports.windowScroll = windowScroll;
//# sourceMappingURL=index.js.map
