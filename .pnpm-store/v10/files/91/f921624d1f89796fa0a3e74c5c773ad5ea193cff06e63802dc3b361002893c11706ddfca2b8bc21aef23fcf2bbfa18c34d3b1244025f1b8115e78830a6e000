import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

var MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
var DAYS_IN_WEEK = 7;
var MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

// returns a new date shifted a certain number of days (can be negative)
function shiftDate(date, numDays) {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
function getBeginningTimeForDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
} // obj can be a parseable string, a millisecond timestamp, or a Date object

function convertToDate(obj) {
  return obj instanceof Date ? obj : new Date(obj);
}
function dateNDaysAgo(numDaysAgo) {
  return shiftDate(new Date(), -numDaysAgo);
}
function getRange(count) {
  var arr = [];

  for (var idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }

  return arr;
}

var SQUARE_SIZE = 10;
var MONTH_LABEL_GUTTER_SIZE = 4;
var CSS_PSEDUO_NAMESPACE = 'react-calendar-heatmap-';

var CalendarHeatmap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarHeatmap, _React$Component);

  function CalendarHeatmap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarHeatmap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarHeatmap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getValueCache", memoizeOne(function (props) {
      return props.values.reduce(function (memo, value) {
        var date = convertToDate(value.date);
        var index = Math.floor((date - _this.getStartDateWithEmptyDays()) / MILLISECONDS_IN_ONE_DAY); // eslint-disable-next-line no-param-reassign

        memo[index] = {
          value: value,
          className: _this.props.classForValue(value),
          title: _this.props.titleForValue ? _this.props.titleForValue(value) : null,
          tooltipDataAttrs: _this.getTooltipDataAttrsForValue(value)
        };
        return memo;
      }, {});
    }));

    return _this;
  }

  _createClass(CalendarHeatmap, [{
    key: "getDateDifferenceInDays",
    value: function getDateDifferenceInDays() {
      var _this$props = this.props,
          startDate = _this$props.startDate,
          numDays = _this$props.numDays;

      if (numDays) {
        // eslint-disable-next-line no-console
        console.warn('numDays is a deprecated prop. It will be removed in the next release. Consider using the startDate prop instead.');
        return numDays;
      }

      var timeDiff = this.getEndDate() - convertToDate(startDate);
      return Math.ceil(timeDiff / MILLISECONDS_IN_ONE_DAY);
    }
  }, {
    key: "getSquareSizeWithGutter",
    value: function getSquareSizeWithGutter() {
      return SQUARE_SIZE + this.props.gutterSize;
    }
  }, {
    key: "getMonthLabelSize",
    value: function getMonthLabelSize() {
      if (!this.props.showMonthLabels) {
        return 0;
      }

      if (this.props.horizontal) {
        return SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE;
      }

      return 2 * (SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE);
    }
  }, {
    key: "getWeekdayLabelSize",
    value: function getWeekdayLabelSize() {
      if (!this.props.showWeekdayLabels) {
        return 0;
      }

      if (this.props.horizontal) {
        return 30;
      }

      return SQUARE_SIZE * 1.5;
    }
  }, {
    key: "getStartDate",
    value: function getStartDate() {
      return shiftDate(this.getEndDate(), -this.getDateDifferenceInDays() + 1); // +1 because endDate is inclusive
    }
  }, {
    key: "getEndDate",
    value: function getEndDate() {
      return getBeginningTimeForDate(convertToDate(this.props.endDate));
    }
  }, {
    key: "getStartDateWithEmptyDays",
    value: function getStartDateWithEmptyDays() {
      return shiftDate(this.getStartDate(), -this.getNumEmptyDaysAtStart());
    }
  }, {
    key: "getNumEmptyDaysAtStart",
    value: function getNumEmptyDaysAtStart() {
      return this.getStartDate().getDay();
    }
  }, {
    key: "getNumEmptyDaysAtEnd",
    value: function getNumEmptyDaysAtEnd() {
      return DAYS_IN_WEEK - 1 - this.getEndDate().getDay();
    }
  }, {
    key: "getWeekCount",
    value: function getWeekCount() {
      var numDaysRoundedToWeek = this.getDateDifferenceInDays() + this.getNumEmptyDaysAtStart() + this.getNumEmptyDaysAtEnd();
      return Math.ceil(numDaysRoundedToWeek / DAYS_IN_WEEK);
    }
  }, {
    key: "getWeekWidth",
    value: function getWeekWidth() {
      return DAYS_IN_WEEK * this.getSquareSizeWithGutter();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.getWeekCount() * this.getSquareSizeWithGutter() - (this.props.gutterSize - this.getWeekdayLabelSize());
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.getWeekWidth() + (this.getMonthLabelSize() - this.props.gutterSize) + this.getWeekdayLabelSize();
    }
  }, {
    key: "getValueForIndex",
    value: function getValueForIndex(index) {
      if (this.valueCache[index]) {
        return this.valueCache[index].value;
      }

      return null;
    }
  }, {
    key: "getClassNameForIndex",
    value: function getClassNameForIndex(index) {
      if (this.valueCache[index]) {
        return this.valueCache[index].className;
      }

      return this.props.classForValue(null);
    }
  }, {
    key: "getTitleForIndex",
    value: function getTitleForIndex(index) {
      if (this.valueCache[index]) {
        return this.valueCache[index].title;
      }

      return this.props.titleForValue ? this.props.titleForValue(null) : null;
    }
  }, {
    key: "getTooltipDataAttrsForIndex",
    value: function getTooltipDataAttrsForIndex(index) {
      if (this.valueCache[index]) {
        return this.valueCache[index].tooltipDataAttrs;
      }

      return this.getTooltipDataAttrsForValue({
        date: null,
        count: null
      });
    }
  }, {
    key: "getTooltipDataAttrsForValue",
    value: function getTooltipDataAttrsForValue(value) {
      var tooltipDataAttrs = this.props.tooltipDataAttrs;

      if (typeof tooltipDataAttrs === 'function') {
        return tooltipDataAttrs(value);
      }

      return tooltipDataAttrs;
    }
  }, {
    key: "getTransformForWeek",
    value: function getTransformForWeek(weekIndex) {
      if (this.props.horizontal) {
        return "translate(".concat(weekIndex * this.getSquareSizeWithGutter(), ", 0)");
      }

      return "translate(0, ".concat(weekIndex * this.getSquareSizeWithGutter(), ")");
    }
  }, {
    key: "getTransformForWeekdayLabels",
    value: function getTransformForWeekdayLabels() {
      if (this.props.horizontal) {
        return "translate(".concat(SQUARE_SIZE, ", ").concat(this.getMonthLabelSize(), ")");
      }

      return null;
    }
  }, {
    key: "getTransformForMonthLabels",
    value: function getTransformForMonthLabels() {
      if (this.props.horizontal) {
        return "translate(".concat(this.getWeekdayLabelSize(), ", 0)");
      }

      return "translate(".concat(this.getWeekWidth() + MONTH_LABEL_GUTTER_SIZE, ", ").concat(this.getWeekdayLabelSize(), ")");
    }
  }, {
    key: "getTransformForAllWeeks",
    value: function getTransformForAllWeeks() {
      if (this.props.horizontal) {
        return "translate(".concat(this.getWeekdayLabelSize(), ", ").concat(this.getMonthLabelSize(), ")");
      }

      return "translate(0, ".concat(this.getWeekdayLabelSize(), ")");
    }
  }, {
    key: "getViewBox",
    value: function getViewBox() {
      if (this.props.horizontal) {
        return "0 0 ".concat(this.getWidth(), " ").concat(this.getHeight());
      }

      return "0 0 ".concat(this.getHeight(), " ").concat(this.getWidth());
    }
  }, {
    key: "getSquareCoordinates",
    value: function getSquareCoordinates(dayIndex) {
      if (this.props.horizontal) {
        return [0, dayIndex * this.getSquareSizeWithGutter()];
      }

      return [dayIndex * this.getSquareSizeWithGutter(), 0];
    }
  }, {
    key: "getWeekdayLabelCoordinates",
    value: function getWeekdayLabelCoordinates(dayIndex) {
      if (this.props.horizontal) {
        return [0, (dayIndex + 1) * SQUARE_SIZE + dayIndex * this.props.gutterSize];
      }

      return [dayIndex * SQUARE_SIZE + dayIndex * this.props.gutterSize, SQUARE_SIZE];
    }
  }, {
    key: "getMonthLabelCoordinates",
    value: function getMonthLabelCoordinates(weekIndex) {
      if (this.props.horizontal) {
        return [weekIndex * this.getSquareSizeWithGutter(), this.getMonthLabelSize() - MONTH_LABEL_GUTTER_SIZE];
      }

      var verticalOffset = -2;
      return [0, (weekIndex + 1) * this.getSquareSizeWithGutter() + verticalOffset];
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      if (this.props.onClick) {
        this.props.onClick(value);
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver(e, value) {
      if (this.props.onMouseOver) {
        this.props.onMouseOver(e, value);
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(e, value) {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(e, value);
      }
    }
  }, {
    key: "renderSquare",
    value: function renderSquare(dayIndex, index) {
      var _this2 = this;

      var indexOutOfRange = index < this.getNumEmptyDaysAtStart() || index >= this.getNumEmptyDaysAtStart() + this.getDateDifferenceInDays();

      if (indexOutOfRange && !this.props.showOutOfRangeDays) {
        return null;
      }

      var _this$getSquareCoordi = this.getSquareCoordinates(dayIndex),
          _this$getSquareCoordi2 = _slicedToArray(_this$getSquareCoordi, 2),
          x = _this$getSquareCoordi2[0],
          y = _this$getSquareCoordi2[1];

      var value = this.getValueForIndex(index);
      var rect = // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      React.createElement("rect", _extends({
        key: index,
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        x: x,
        y: y,
        className: this.getClassNameForIndex(index),
        onClick: function onClick() {
          return _this2.handleClick(value);
        },
        onMouseOver: function onMouseOver(e) {
          return _this2.handleMouseOver(e, value);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.handleMouseLeave(e, value);
        }
      }, this.getTooltipDataAttrsForIndex(index)), React.createElement("title", null, this.getTitleForIndex(index)));
      var transformDayElement = this.props.transformDayElement;
      return transformDayElement ? transformDayElement(rect, value, index) : rect;
    }
  }, {
    key: "renderWeek",
    value: function renderWeek(weekIndex) {
      var _this3 = this;

      return React.createElement("g", {
        key: weekIndex,
        transform: this.getTransformForWeek(weekIndex),
        className: "".concat(CSS_PSEDUO_NAMESPACE, "week")
      }, getRange(DAYS_IN_WEEK).map(function (dayIndex) {
        return _this3.renderSquare(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex);
      }));
    }
  }, {
    key: "renderAllWeeks",
    value: function renderAllWeeks() {
      var _this4 = this;

      return getRange(this.getWeekCount()).map(function (weekIndex) {
        return _this4.renderWeek(weekIndex);
      });
    }
  }, {
    key: "renderMonthLabels",
    value: function renderMonthLabels() {
      var _this5 = this;

      if (!this.props.showMonthLabels) {
        return null;
      }

      var weekRange = getRange(this.getWeekCount() - 1); // don't render for last week, because label will be cut off

      return weekRange.map(function (weekIndex) {
        var endOfWeek = shiftDate(_this5.getStartDateWithEmptyDays(), (weekIndex + 1) * DAYS_IN_WEEK);

        var _this5$getMonthLabelC = _this5.getMonthLabelCoordinates(weekIndex),
            _this5$getMonthLabelC2 = _slicedToArray(_this5$getMonthLabelC, 2),
            x = _this5$getMonthLabelC2[0],
            y = _this5$getMonthLabelC2[1];

        return endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK ? React.createElement("text", {
          key: weekIndex,
          x: x,
          y: y,
          className: "".concat(CSS_PSEDUO_NAMESPACE, "month-label")
        }, _this5.props.monthLabels[endOfWeek.getMonth()]) : null;
      });
    }
  }, {
    key: "renderWeekdayLabels",
    value: function renderWeekdayLabels() {
      var _this6 = this;

      if (!this.props.showWeekdayLabels) {
        return null;
      }

      return this.props.weekdayLabels.map(function (weekdayLabel, dayIndex) {
        var _this6$getWeekdayLabe = _this6.getWeekdayLabelCoordinates(dayIndex),
            _this6$getWeekdayLabe2 = _slicedToArray(_this6$getWeekdayLabe, 2),
            x = _this6$getWeekdayLabe2[0],
            y = _this6$getWeekdayLabe2[1];

        var cssClasses = "".concat(_this6.props.horizontal ? '' : "".concat(CSS_PSEDUO_NAMESPACE, "small-text"), " ").concat(CSS_PSEDUO_NAMESPACE, "weekday-label"); // eslint-disable-next-line no-bitwise

        return dayIndex & 1 ? React.createElement("text", {
          key: "".concat(x).concat(y),
          x: x,
          y: y,
          className: cssClasses
        }, weekdayLabel) : null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.valueCache = this.getValueCache(this.props);
      return React.createElement("svg", {
        className: "react-calendar-heatmap",
        viewBox: this.getViewBox()
      }, React.createElement("g", {
        transform: this.getTransformForMonthLabels(),
        className: "".concat(CSS_PSEDUO_NAMESPACE, "month-labels")
      }, this.renderMonthLabels()), React.createElement("g", {
        transform: this.getTransformForAllWeeks(),
        className: "".concat(CSS_PSEDUO_NAMESPACE, "all-weeks")
      }, this.renderAllWeeks()), React.createElement("g", {
        transform: this.getTransformForWeekdayLabels(),
        className: "".concat(CSS_PSEDUO_NAMESPACE, "weekday-labels")
      }, this.renderWeekdayLabels()));
    }
  }]);

  return CalendarHeatmap;
}(React.Component);

CalendarHeatmap.propTypes = {
  values: propTypes.arrayOf(propTypes.shape({
    date: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]).isRequired
  }).isRequired).isRequired,
  // array of objects with date and arbitrary metadata
  numDays: propTypes.number,
  // number of days back from endDate to show
  startDate: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]),
  // start of date range
  endDate: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]),
  // end of date range
  gutterSize: propTypes.number,
  // size of space between squares
  horizontal: propTypes.bool,
  // whether to orient horizontally or vertically
  showMonthLabels: propTypes.bool,
  // whether to show month labels
  showWeekdayLabels: propTypes.bool,
  // whether to show weekday labels
  showOutOfRangeDays: propTypes.bool,
  // whether to render squares for extra days in week after endDate, and before start date
  tooltipDataAttrs: propTypes.oneOfType([propTypes.object, propTypes.func]),
  // data attributes to add to square for setting 3rd party tooltips, e.g. { 'data-toggle': 'tooltip' } for bootstrap tooltips
  titleForValue: propTypes.func,
  // function which returns title text for value
  classForValue: propTypes.func,
  // function which returns html class for value
  monthLabels: propTypes.arrayOf(propTypes.string),
  // An array with 12 strings representing the text from janurary to december
  weekdayLabels: propTypes.arrayOf(propTypes.string),
  // An array with 7 strings representing the text from Sun to Sat
  onClick: propTypes.func,
  // callback function when a square is clicked
  onMouseOver: propTypes.func,
  // callback function when mouse pointer is over a square
  onMouseLeave: propTypes.func,
  // callback function when mouse pointer is left a square
  transformDayElement: propTypes.func // function to further transform the svg element for a single day

};
CalendarHeatmap.defaultProps = {
  numDays: null,
  startDate: dateNDaysAgo(200),
  endDate: new Date(),
  gutterSize: 1,
  horizontal: true,
  showMonthLabels: true,
  showWeekdayLabels: false,
  showOutOfRangeDays: false,
  tooltipDataAttrs: null,
  titleForValue: null,
  classForValue: function classForValue(value) {
    return value ? 'color-filled' : 'color-empty';
  },
  monthLabels: MONTH_LABELS,
  weekdayLabels: DAY_LABELS,
  onClick: null,
  onMouseOver: null,
  onMouseLeave: null,
  transformDayElement: null
};

export default CalendarHeatmap;
//# sourceMappingURL=react-calendar-heatmap.esm.js.map
