'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _preact = require("preact");
var KEYS = {
    DOWN: 40,
    END: 35,
    ESC: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    RIGHT: 39,
    UP: 38
};
var PERCENT_EMPTY = 0;
var PERCENT_FULL = 100;
function getPosition(value, min, max) {
    return (value - min) / (max - min) * 100;
}
function getValue(pos, min, max) {
    var decimal = pos / 100;
    if (pos === 0) {
        return min;
    } else if (pos === 100) {
        return max;
    }
    return Math.round((max - min) * decimal + min);
}
function getClassName(props) {
    var orientation = props.orientation === 'vertical' ? 'rheostat-vertical' : 'rheostat-horizontal';
    return [
        'rheostat',
        orientation
    ].concat(props.className.split(' ')).join(' ');
}
function getHandleFor(ev) {
    return Number(ev.currentTarget.getAttribute('data-handle-key'));
}
function killEvent(ev) {
    ev.stopPropagation();
    ev.preventDefault();
}
function Button(props) {
    return /*#__PURE__*/ (0, _preact.h)("button", _object_spread_props._(_object_spread._({}, props), {
        type: "button"
    }));
}
var Rheostat = /*#__PURE__*/ function(Component) {
    _inherits._(Rheostat, Component);
    function Rheostat() {
        _class_call_check._(this, Rheostat);
        var _this;
        _this = _call_super._(this, Rheostat, arguments), _define_property._(_this, "x", [
            0,
            0
        ].map(function(y) {
            return y;
        })), _define_property._(_this, "state", {
            className: getClassName(_this.props),
            // non-null thanks to defaultProps
            handlePos: _this.props.values.map(function(value) {
                return getPosition(value, _this.props.min, _this.props.max);
            }),
            handleDimensions: 0,
            mousePos: null,
            sliderBox: {},
            slidingIndex: null,
            // non-null thanks to defaultProps
            values: _this.props.values
        }), _define_property._(_this, "rheostat", (0, _preact.createRef)()), _define_property._(_this, "componentWillReceiveProps", function(nextProps) {
            var _this_props = _this.props, className = _this_props.className, disabled = _this_props.disabled, min = _this_props.min, max = _this_props.max, orientation = _this_props.orientation;
            var _this_state = _this.state, values = _this_state.values, slidingIndex = _this_state.slidingIndex;
            var minMaxChanged = nextProps.min !== min || nextProps.max !== max;
            var valuesChanged = values.length !== nextProps.values.length || values.some(function(value, idx) {
                return nextProps.values[idx] !== value;
            });
            var orientationChanged = nextProps.className !== className || nextProps.orientation !== orientation;
            var willBeDisabled = nextProps.disabled && !disabled;
            if (orientationChanged) {
                _this.setState({
                    className: getClassName(nextProps)
                });
            }
            if (minMaxChanged || valuesChanged) _this.updateNewValues(nextProps);
            if (willBeDisabled && slidingIndex !== null) {
                _this.endSlide();
            }
        }), _define_property._(_this, "getPublicState", function() {
            var _this_props = _this.props, min = _this_props.min, max = _this_props.max;
            var values = _this.state.values;
            return {
                max: max,
                min: min,
                values: values
            };
        }), _define_property._(_this, "getSliderBoundingBox", function() {
            // only gets called after render, so it will always be defined
            var node = _this.rheostat.current;
            var rect = node.getBoundingClientRect();
            return {
                height: rect.height || node.clientHeight,
                left: rect.left,
                top: rect.top,
                width: rect.width || node.clientWidth
            };
        }), _define_property._(_this, "getProgressStyle", function(idx) {
            var handlePos = _this.state.handlePos;
            var value = handlePos[idx];
            if (idx === 0) {
                return _this.props.orientation === 'vertical' ? {
                    height: "".concat(value, "%"),
                    top: 0
                } : {
                    left: 0,
                    width: "".concat(value, "%")
                };
            }
            var prevValue = handlePos[idx - 1];
            var diffValue = value - prevValue;
            return _this.props.orientation === 'vertical' ? {
                height: "".concat(diffValue, "%"),
                top: "".concat(prevValue, "%")
            } : {
                left: "".concat(prevValue, "%"),
                width: "".concat(diffValue, "%")
            };
        }), _define_property._(_this, "getMinValue", function(idx) {
            return _this.state.values[idx - 1] ? Math.max(_this.props.min, _this.state.values[idx - 1]) : _this.props.min;
        }), _define_property._(_this, "getMaxValue", function(idx) {
            return _this.state.values[idx + 1] ? Math.min(_this.props.max, _this.state.values[idx + 1]) : _this.props.max;
        }), _define_property._(_this, "getHandleDimensions", function(ev, sliderBox) {
            var handleNode = ev.currentTarget || null;
            if (!handleNode) return 0;
            return _this.props.orientation === 'vertical' ? handleNode.clientHeight / sliderBox.height * PERCENT_FULL / 2 : handleNode.clientWidth / sliderBox.width * PERCENT_FULL / 2;
        }), _define_property._(_this, "getClosestSnapPoint", function(value) {
            // non-null thanks to defaultProps
            if (!_this.props.snapPoints.length) return value;
            return _this.props.snapPoints.reduce(function(snapTo, snap) {
                return Math.abs(snapTo - value) < Math.abs(snap - value) ? snapTo : snap;
            });
        }), _define_property._(_this, "getSnapPosition", function(positionPercent) {
            if (!_this.props.snap) return positionPercent;
            var _this_props = _this.props, max = _this_props.max, min = _this_props.min;
            var value = getValue(positionPercent, min, max);
            var snapValue = _this.getClosestSnapPoint(value);
            return getPosition(snapValue, min, max);
        }), _define_property._(_this, "getNextPositionForKey", function(idx, keyCode) {
            var _this_state = _this.state, handlePos = _this_state.handlePos, values = _this_state.values;
            var _this_props = _this.props, max = _this_props.max, min = _this_props.min, snapPoints = _this_props.snapPoints;
            var shouldSnap = _this.props.snap;
            var proposedValue = values[idx];
            var proposedPercentage = handlePos[idx];
            var originalPercentage = proposedPercentage;
            var stepValue = 1;
            if (max >= 100) {
                proposedPercentage = Math.round(proposedPercentage);
            } else {
                stepValue = 100 / (max - min);
            }
            var currentIndex = null;
            if (shouldSnap) {
                currentIndex = snapPoints.indexOf(_this.getClosestSnapPoint(values[idx]));
            }
            var _obj;
            var stepMultiplier = (_obj = {}, _define_property._(_obj, KEYS.LEFT, function(v) {
                return v * -1;
            }), _define_property._(_obj, KEYS.RIGHT, function(v) {
                return v;
            }), _define_property._(_obj, KEYS.UP, function(v) {
                return v;
            }), _define_property._(_obj, KEYS.DOWN, function(v) {
                return v * -1;
            }), _define_property._(_obj, KEYS.PAGE_DOWN, function(v) {
                return v > 1 ? -v : v * -10;
            }), _define_property._(_obj, KEYS.PAGE_UP, function(v) {
                return v > 1 ? v : v * 10;
            }), _obj);
            if (Object.prototype.hasOwnProperty.call(stepMultiplier, keyCode)) {
                proposedPercentage += stepMultiplier[keyCode](stepValue);
                if (shouldSnap) {
                    if (!currentIndex) ; else if (proposedPercentage > originalPercentage) {
                        // move cursor right unless overflow
                        if (currentIndex < snapPoints.length - 1) {
                            proposedValue = snapPoints[currentIndex + 1];
                        }
                    // move cursor left unless there is overflow
                    } else if (currentIndex > 0) {
                        proposedValue = snapPoints[currentIndex - 1];
                    }
                }
            } else if (keyCode === KEYS.HOME) {
                proposedPercentage = PERCENT_EMPTY;
                if (shouldSnap) {
                    proposedValue = snapPoints[0];
                }
            } else if (keyCode === KEYS.END) {
                proposedPercentage = PERCENT_FULL;
                if (shouldSnap) {
                    proposedValue = snapPoints[snapPoints.length - 1];
                }
            } else {
                return null;
            }
            return shouldSnap ? getPosition(proposedValue, min, max) : proposedPercentage;
        }), _define_property._(_this, "getNextState", function(idx, proposedPosition) {
            var handlePos = _this.state.handlePos;
            var _this_props = _this.props, max = _this_props.max, min = _this_props.min;
            var actualPosition = _this.validatePosition(idx, proposedPosition);
            var nextHandlePos = handlePos.map(function(pos, index) {
                return index === idx ? actualPosition : pos;
            });
            return {
                handlePos: nextHandlePos,
                values: nextHandlePos.map(function(pos) {
                    return getValue(pos, min, max);
                })
            };
        }), _define_property._(_this, "getClosestHandle", function(positionPercent) {
            var handlePos = _this.state.handlePos;
            return handlePos.reduce(function(closestIdx, _node, idx) {
                var challenger = Math.abs(handlePos[idx] - positionPercent);
                var current = Math.abs(handlePos[closestIdx] - positionPercent);
                return challenger < current ? idx : closestIdx;
            }, 0);
        }), _define_property._(_this, "setStartSlide", function(ev, x, y) {
            var sliderBox = _this.getSliderBoundingBox();
            _this.setState({
                handleDimensions: _this.getHandleDimensions(ev, sliderBox),
                mousePos: {
                    x: x,
                    y: y
                },
                sliderBox: sliderBox,
                slidingIndex: getHandleFor(ev)
            });
        }), _define_property._(_this, "startMouseSlide", function(ev) {
            _this.setStartSlide(ev, ev.clientX, ev.clientY);
            document.addEventListener('mousemove', _this.handleMouseSlide, false);
            document.addEventListener('mouseup', _this.endSlide, false);
            killEvent(ev);
        }), _define_property._(_this, "startTouchSlide", function(ev) {
            if (ev.changedTouches.length > 1) return;
            var touch = ev.changedTouches[0];
            _this.setStartSlide(ev, touch.clientX, touch.clientY);
            document.addEventListener('touchmove', _this.handleTouchSlide, false);
            document.addEventListener('touchend', _this.endSlide, false);
            if (_this.props.onSliderDragStart) _this.props.onSliderDragStart();
            killEvent(ev);
        }), _define_property._(_this, "handleMouseSlide", function(ev) {
            if (_this.state.slidingIndex === null) return;
            _this.handleSlide(ev.clientX, ev.clientY);
            killEvent(ev);
        }), _define_property._(_this, "handleTouchSlide", function(ev) {
            if (_this.state.slidingIndex === null) return;
            if (ev.changedTouches.length > 1) {
                _this.endSlide();
                return;
            }
            var touch = ev.changedTouches[0];
            _this.handleSlide(touch.clientX, touch.clientY);
            killEvent(ev);
        }), _define_property._(_this, "handleSlide", function(x, y) {
            var _this_state = _this.state, idx = _this_state.slidingIndex, sliderBox = _this_state.sliderBox;
            var positionPercent = _this.props.orientation === 'vertical' ? (y - sliderBox.top) / sliderBox.height * PERCENT_FULL : (x - sliderBox.left) / sliderBox.width * PERCENT_FULL;
            _this.slideTo(idx, positionPercent);
            if (_this.canMove(idx, positionPercent)) {
                // update mouse positions
                _this.setState({
                    mousePos: {
                        x: x,
                        y: y
                    }
                });
                if (_this.props.onSliderDragMove) _this.props.onSliderDragMove();
            }
        }), _define_property._(_this, "endSlide", function() {
            var idx = _this.state.slidingIndex;
            _this.setState({
                slidingIndex: null
            });
            document.removeEventListener('mouseup', _this.endSlide, false);
            document.removeEventListener('touchend', _this.endSlide, false);
            document.removeEventListener('touchmove', _this.handleTouchSlide, false);
            document.removeEventListener('mousemove', _this.handleMouseSlide, false);
            if (_this.props.onSliderDragEnd) _this.props.onSliderDragEnd();
            if (_this.props.snap) {
                var positionPercent = _this.getSnapPosition(_this.state.handlePos[idx]);
                _this.slideTo(idx, positionPercent, function() {
                    return _this.fireChangeEvent();
                });
            } else {
                _this.fireChangeEvent();
            }
        }), _define_property._(_this, "handleClick", function(ev) {
            if (ev.target.getAttribute('data-handle-key')) {
                return;
            }
            // Calculate the position of the slider on the page so we can determine
            // the position where you click in relativity.
            var sliderBox = _this.getSliderBoundingBox();
            var positionDecimal = _this.props.orientation === 'vertical' ? (ev.clientY - sliderBox.top) / sliderBox.height : (ev.clientX - sliderBox.left) / sliderBox.width;
            var positionPercent = positionDecimal * PERCENT_FULL;
            var handleId = _this.getClosestHandle(positionPercent);
            var validPositionPercent = _this.getSnapPosition(positionPercent);
            // Move the handle there
            _this.slideTo(handleId, validPositionPercent, function() {
                return _this.fireChangeEvent();
            });
            if (_this.props.onClick) _this.props.onClick();
        }), _define_property._(_this, "handleKeydown", function(ev) {
            var idx = getHandleFor(ev);
            if (ev.keyCode === KEYS.ESC) {
                ev.currentTarget.blur();
                return;
            }
            var proposedPercentage = _this.getNextPositionForKey(idx, ev.keyCode);
            if (proposedPercentage === null) return;
            if (_this.canMove(idx, proposedPercentage)) {
                _this.slideTo(idx, proposedPercentage, function() {
                    return _this.fireChangeEvent();
                });
                if (_this.props.onKeyPress) _this.props.onKeyPress();
            }
            killEvent(ev);
        }), // Make sure the proposed position respects the bounds and
        // does not collide with other handles too much.
        _define_property._(_this, "validatePosition", function(idx, proposedPosition) {
            var _this_state = _this.state, handlePos = _this_state.handlePos, handleDimensions = _this_state.handleDimensions;
            return Math.max(Math.min(proposedPosition, handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : PERCENT_FULL // 100% is the highest value
            ), handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : PERCENT_EMPTY // 0% is the lowest value
            );
        }), _define_property._(_this, "validateValues", function(proposedValues, props) {
            var _ref = props || _this.props, max = _ref.max, min = _ref.min;
            return proposedValues.map(function(value, idx, values) {
                var realValue = Math.max(Math.min(value, max), min);
                if (values.length && realValue < values[idx - 1]) {
                    return values[idx - 1];
                }
                return realValue;
            });
        }), _define_property._(_this, "canMove", function(idx, proposedPosition) {
            var _this_state = _this.state, handlePos = _this_state.handlePos, handleDimensions = _this_state.handleDimensions;
            if (proposedPosition < PERCENT_EMPTY) return false;
            if (proposedPosition > PERCENT_FULL) return false;
            var nextHandlePosition = handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : Infinity;
            if (proposedPosition > nextHandlePosition) return false;
            var prevHandlePosition = handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : -Infinity;
            if (proposedPosition < prevHandlePosition) return false;
            return true;
        }), _define_property._(_this, "fireChangeEvent", function() {
            var onChange = _this.props.onChange;
            if (onChange) onChange(_this.getPublicState());
        }), _define_property._(_this, "slideTo", function(idx, proposedPosition, onAfterSet) {
            var nextState = _this.getNextState(idx, proposedPosition);
            _this.setState(nextState, function() {
                var onValuesUpdated = _this.props.onValuesUpdated;
                if (onValuesUpdated) onValuesUpdated(_this.getPublicState());
                if (onAfterSet) onAfterSet();
            });
        }), _define_property._(_this, "updateNewValues", function(nextProps) {
            var slidingIndex = _this.state.slidingIndex;
            // Don't update while the slider is sliding
            if (slidingIndex !== null) {
                return;
            }
            var max = nextProps.max, min = nextProps.min, values = nextProps.values;
            var nextValues = _this.validateValues(values, nextProps);
            _this.setState({
                handlePos: nextValues.map(function(value) {
                    return getPosition(value, min, max);
                }),
                values: nextValues
            }, function() {
                return _this.fireChangeEvent();
            });
        }), _define_property._(_this, "render", function() {
            var _this_props = _this.props, children = _this_props.children, disabled = _this_props.disabled, Handle = _this_props.handle, max = _this_props.max, min = _this_props.min, orientation = _this_props.orientation, PitComponent = _this_props.pitComponent, pitPoints = _this_props.pitPoints, ProgressBar = _this_props.progressBar; // all required thanks to defaultProps
            var _this_state = _this.state, className = _this_state.className, handlePos = _this_state.handlePos, values = _this_state.values;
            return /*#__PURE__*/ (0, _preact.h)("div", {
                className: className,
                ref: _this.rheostat,
                onClick: disabled ? undefined : _this.handleClick,
                style: {
                    position: 'relative'
                }
            }, /*#__PURE__*/ (0, _preact.h)("div", {
                className: "rheostat-background"
            }), handlePos.map(function(pos, idx) {
                var handleStyle = orientation === 'vertical' ? {
                    top: "".concat(pos, "%"),
                    position: 'absolute'
                } : {
                    left: "".concat(pos, "%"),
                    position: 'absolute'
                };
                return /*#__PURE__*/ (0, _preact.h)(Handle, {
                    "aria-valuemax": _this.getMaxValue(idx),
                    "aria-valuemin": _this.getMinValue(idx),
                    "aria-valuenow": values[idx],
                    "aria-disabled": disabled,
                    "data-handle-key": idx,
                    className: "rheostat-handle",
                    key: "handle-".concat(idx),
                    onClick: killEvent,
                    onKeyDown: disabled ? undefined : _this.handleKeydown,
                    onMouseDown: disabled ? undefined : _this.startMouseSlide,
                    onTouchStart: disabled ? undefined : _this.startTouchSlide,
                    role: "slider",
                    style: handleStyle,
                    tabIndex: 0
                });
            }), handlePos.map(function(_node, idx, arr) {
                if (idx === 0 && arr.length > 1) {
                    return null;
                }
                return /*#__PURE__*/ (0, _preact.h)(ProgressBar, {
                    className: "rheostat-progress",
                    key: "progress-bar-".concat(idx),
                    style: _this.getProgressStyle(idx)
                });
            }), PitComponent && pitPoints.map(function(n) {
                var pos = getPosition(n, min, max);
                var pitStyle = orientation === 'vertical' ? {
                    top: "".concat(pos, "%"),
                    position: 'absolute'
                } : {
                    left: "".concat(pos, "%"),
                    position: 'absolute'
                };
                return /*#__PURE__*/ (0, _preact.h)(PitComponent, {
                    key: "pit-".concat(n),
                    style: pitStyle
                }, n);
            }), children);
        });
        return _this;
    }
    return Rheostat;
}(_preact.Component);
_define_property._(Rheostat, "defaultProps", {
    className: '',
    children: null,
    disabled: false,
    handle: Button,
    max: PERCENT_FULL,
    min: PERCENT_EMPTY,
    onClick: null,
    onChange: null,
    onKeyPress: null,
    onSliderDragEnd: null,
    onSliderDragMove: null,
    onSliderDragStart: null,
    onValuesUpdated: null,
    orientation: 'horizontal',
    pitComponent: null,
    pitPoints: [],
    progressBar: 'div',
    snap: false,
    snapPoints: [],
    values: [
        PERCENT_EMPTY
    ]
});
var _default = Rheostat;
