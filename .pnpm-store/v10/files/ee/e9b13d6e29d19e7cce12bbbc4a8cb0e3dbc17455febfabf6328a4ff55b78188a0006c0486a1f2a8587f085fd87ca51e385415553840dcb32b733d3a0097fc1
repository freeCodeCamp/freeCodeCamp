"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _ReflexSplitter = _interopRequireDefault(require("./ReflexSplitter"));
var _ReflexEvents = _interopRequireDefault(require("./ReflexEvents"));
var _utilities = require("./utilities");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
require("./Polyfills");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReflexContainer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ReflexContainer, _React$Component);
  var _super = _createSuper(ReflexContainer);
  /////////////////////////////////////////////////////////
  // orientation: Orientation of the layout container
  //              valid values are ['horizontal', 'vertical'] 
  // maxRecDepth: Maximun recursion depth to solve initial flex
  //              of layout elements based on user provided values
  // className: Space separated classnames to apply custom styles 
  //            to the layout container  
  // style: allows passing inline style to the container
  /////////////////////////////////////////////////////////

  function ReflexContainer(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ReflexContainer);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onWindowResize", function () {
      _this.setState({
        flexData: _this.computeFlexData()
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStartResize", function (data) {
      var pos = data.event.changedTouches ? data.event.changedTouches[0] : data.event;
      switch (_this.props.orientation) {
        case 'horizontal':
          document.body.classList.add('reflex-row-resize');
          _this.previousPos = pos.clientY;
          break;
        case 'vertical':
        default:
          document.body.classList.add('reflex-col-resize');
          _this.previousPos = pos.clientX;
          break;
      }
      _this.elements = [_this.children[data.index - 1], _this.children[data.index + 1]];
      _this.emitElementsEvent(_this.elements, 'onStartResize');
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function (data) {
      var pos = data.event.changedTouches ? data.event.changedTouches[0] : data.event;
      var offset = _this.getOffset(pos, data.domElement);
      switch (_this.props.orientation) {
        case 'horizontal':
          _this.previousPos = pos.clientY;
          break;
        case 'vertical':
        default:
          _this.previousPos = pos.clientX;
          break;
      }
      if (offset) {
        var availableOffset = _this.computeAvailableOffset(data.index, offset);
        if (availableOffset) {
          _this.elements = _this.dispatchOffset(data.index, availableOffset);
          _this.adjustFlex(_this.elements);
          _this.setState({
            resizing: true
          }, function () {
            _this.emitElementsEvent(_this.elements, 'onResize');
          });
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStopResize", function (data) {
      document.body.classList.remove('reflex-row-resize');
      document.body.classList.remove('reflex-col-resize');
      var resizedRefs = _this.elements ? _this.elements.map(function (element) {
        return element.ref;
      }) : [];
      var elements = _this.children.filter(function (child) {
        return !_ReflexSplitter.default.isA(child) && resizedRefs.includes(child.ref);
      });
      _this.emitElementsEvent(elements, 'onStopResize');
      _this.setState({
        resizing: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onElementSize", function (data) {
      return new Promise(function (resolve) {
        try {
          var idx = data.index;
          var size = _this.getSize(_this.children[idx]);
          var offset = data.size - size;
          var dir = data.direction;
          var splitterIdx = idx + dir;
          var availableOffset = _this.computeAvailableOffset(splitterIdx, dir * offset);
          _this.elements = null;
          if (availableOffset) {
            _this.elements = _this.dispatchOffset(splitterIdx, availableOffset);
            _this.adjustFlex(_this.elements);
          }
          _this.setState(_this.state, function () {
            _this.emitElementsEvent(_this.elements, 'onResize');
            resolve();
          });
        } catch (ex) {
          // TODO handle exception ...
          console.log(ex);
        }
      });
    });
    _this.events = new _ReflexEvents.default();
    _this.children = [];
    _this.state = {
      flexData: []
    };
    _this.ref = _react.default.createRef();
    return _this;
  }
  (0, _createClass2.default)(ReflexContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var flexData = this.computeFlexData();
      var windowResizeAware = this.props.windowResizeAware;
      if (windowResizeAware) {
        window.addEventListener('resize', this.onWindowResize);
      }
      this.setState({
        windowResizeAware: windowResizeAware,
        flexData: flexData
      });
      this.events.on('element.size', this.onElementSize);
      this.events.on('startResize', this.onStartResize);
      this.events.on('stopResize', this.onStopResize);
      this.events.on('resize', this.onResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.events.off();
      window.removeEventListener('resize', this.onWindowResize);
    }
  }, {
    key: "getValidChildren",
    value: function getValidChildren() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return this.toArray(props.children).filter(function (child) {
        return !!child;
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var children = this.getValidChildren(this.props);
      if (children.length !== this.state.flexData.length || prevProps.orientation !== this.props.orientation || this.flexHasChanged(prevProps)) {
        var flexData = this.computeFlexData(children, this.props);
        this.setState({
          flexData: flexData
        });
      }
      if (this.props.windowResizeAware !== this.state.windowResizeAware) {
        !this.props.windowResizeAware ? window.removeEventListener('resize', this.onWindowResize) : window.addEventListener('resize', this.onWindowResize);
        this.setState({
          windowResizeAware: this.props.windowResizeAware
        });
      }
    }

    // UNSAFE_componentWillReceiveProps(props) {

    //   const children = this.getValidChildren(props)

    //   if (children.length !== this.state.flexData.length || 
    //     props.orientation !== this.props.orientation || 
    //     this.flexHasChanged(props)) 
    //   {
    //     const flexData = this.computeFlexData(
    //       children, props)

    //     this.setState({
    //       flexData
    //     });
    //   }

    //   if (props.windowResizeAware !== this.state.windowResizeAware) {
    //     !props.windowResizeAware
    //       ? window.removeEventListener('resize', this.onWindowResize)
    //       : window.addEventListener('resize', this.onWindowResize)
    //     this.setState({
    //       windowResizeAware: props.windowResizeAware
    //     })
    //   }
    // } 

    /////////////////////////////////////////////////////////
    // attempts to preserve current flex on window resize
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "flexHasChanged",
    value:
    /////////////////////////////////////////////////////////
    // Check if flex has changed: this allows updating the
    // component when different flex is passed as property
    // to one or several children
    //
    /////////////////////////////////////////////////////////
    function flexHasChanged(prevProps) {
      var prevChildrenFlex = this.getValidChildren(prevProps).map(function (child) {
        return child.props.flex || 0;
      });
      var childrenFlex = this.getValidChildren().map(function (child) {
        return child.props.flex || 0;
      });
      return !childrenFlex.every(function (flex, idx) {
        return flex === prevChildrenFlex[idx];
      });
    }

    /////////////////////////////////////////////////////////
    // Returns size of a ReflexElement
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "getSize",
    value: function getSize(element) {
      var _element$ref, _domElement$offsetHei, _domElement$offsetWid;
      var domElement = element === null || element === void 0 ? void 0 : (_element$ref = element.ref) === null || _element$ref === void 0 ? void 0 : _element$ref.current;
      switch (this.props.orientation) {
        case 'horizontal':
          return (_domElement$offsetHei = domElement === null || domElement === void 0 ? void 0 : domElement.offsetHeight) !== null && _domElement$offsetHei !== void 0 ? _domElement$offsetHei : 0;
        case 'vertical':
        default:
          return (_domElement$offsetWid = domElement === null || domElement === void 0 ? void 0 : domElement.offsetWidth) !== null && _domElement$offsetWid !== void 0 ? _domElement$offsetWid : 0;
      }
    }

    /////////////////////////////////////////////////////////
    // Computes offset from pointer position
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "getOffset",
    value: function getOffset(pos, domElement) {
      var _domElement$getBoundi = domElement.getBoundingClientRect(),
        top = _domElement$getBoundi.top,
        bottom = _domElement$getBoundi.bottom,
        left = _domElement$getBoundi.left,
        right = _domElement$getBoundi.right;
      switch (this.props.orientation) {
        case 'horizontal':
          {
            var offset = pos.clientY - this.previousPos;
            if (offset > 0) {
              if (pos.clientY >= top) {
                return offset;
              }
            } else {
              if (pos.clientY <= bottom) {
                return offset;
              }
            }
            break;
          }
        case 'vertical':
        default:
          {
            var _offset = pos.clientX - this.previousPos;
            if (_offset > 0) {
              if (pos.clientX > left) {
                return _offset;
              }
            } else {
              if (pos.clientX < right) {
                return _offset;
              }
            }
          }
          break;
      }
      return 0;
    }

    /////////////////////////////////////////////////////////
    // Handles startResize event
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "adjustFlex",
    value:
    /////////////////////////////////////////////////////////
    // Adjusts flex after a dispatch to make sure
    // total flex of modified elements remains the same
    //
    /////////////////////////////////////////////////////////
    function adjustFlex(elements) {
      var _this2 = this;
      var diffFlex = elements.reduce(function (sum, element) {
        var idx = element.props.index;
        var previousFlex = element.props.flex;
        var nextFlex = _this2.state.flexData[idx].flex;
        return sum + (previousFlex - nextFlex) / elements.length;
      }, 0);
      elements.forEach(function (element) {
        _this2.state.flexData[element.props.index].flex += diffFlex;
      });
    }

    /////////////////////////////////////////////////////////
    // Returns available offset for a given raw offset value
    // This checks how much the panes can be stretched and
    // shrink, then returns the min
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "computeAvailableOffset",
    value: function computeAvailableOffset(idx, offset) {
      var stretch = this.computeAvailableStretch(idx, offset);
      var shrink = this.computeAvailableShrink(idx, offset);
      var availableOffset = Math.min(stretch, shrink) * Math.sign(offset);
      return availableOffset;
    }

    /////////////////////////////////////////////////////////
    // Returns true if the next splitter than the one at idx
    // can propagate the drag. This can happen if that
    // next element is actually a splitter and it has
    // propagate=true property set
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "checkPropagate",
    value: function checkPropagate(idx, direction) {
      if (direction > 0) {
        if (idx < this.children.length - 2) {
          var child = this.children[idx + 2];
          var typeCheck = _ReflexSplitter.default.isA(child);
          return typeCheck && child.props.propagate;
        }
      } else {
        if (idx > 2) {
          var _child = this.children[idx - 2];
          var _typeCheck = _ReflexSplitter.default.isA(_child);
          return _typeCheck && _child.props.propagate;
        }
      }
      return false;
    }

    /////////////////////////////////////////////////////////
    // Recursively computes available stretch at splitter
    // idx for given raw offset
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "computeAvailableStretch",
    value: function computeAvailableStretch(idx, offset) {
      var _child$props$maxSize;
      var childIdx = offset < 0 ? idx + 1 : idx - 1;
      var child = this.children[childIdx];
      var size = this.getSize(child);
      var maxSize = (_child$props$maxSize = child === null || child === void 0 ? void 0 : child.props.maxSize) !== null && _child$props$maxSize !== void 0 ? _child$props$maxSize : 0;
      var availableStretch = maxSize - size;
      if (availableStretch < Math.abs(offset)) {
        if (this.checkPropagate(idx, -1 * offset)) {
          var nextOffset = Math.sign(offset) * (Math.abs(offset) - availableStretch);
          return availableStretch + this.computeAvailableStretch(offset < 0 ? idx + 2 : idx - 2, nextOffset);
        }
      }
      return Math.min(availableStretch, Math.abs(offset));
    }

    /////////////////////////////////////////////////////////
    // Recursively computes available shrink at splitter
    // idx for given raw offset
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "computeAvailableShrink",
    value: function computeAvailableShrink(idx, offset) {
      var _child$props$minSize;
      var childIdx = offset > 0 ? idx + 1 : idx - 1;
      var child = this.children[childIdx];
      var size = this.getSize(child);
      var minSize = Math.max((_child$props$minSize = child === null || child === void 0 ? void 0 : child.props.minSize) !== null && _child$props$minSize !== void 0 ? _child$props$minSize : 0, 0);
      var availableShrink = size - minSize;
      if (availableShrink < Math.abs(offset)) {
        if (this.checkPropagate(idx, offset)) {
          var nextOffset = Math.sign(offset) * (Math.abs(offset) - availableShrink);
          return availableShrink + this.computeAvailableShrink(offset > 0 ? idx + 2 : idx - 2, nextOffset);
        }
      }
      return Math.min(availableShrink, Math.abs(offset));
    }

    /////////////////////////////////////////////////////////
    // Returns flex value for unit pixel
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "computePixelFlex",
    value: function computePixelFlex() {
      var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.orientation;
      if (!this.ref.current) {
        console.warn('Unable to locate ReflexContainer dom node');
        return 0.0;
      }
      switch (orientation) {
        case 'horizontal':
          if (this.ref.current.offsetHeight === 0.0) {
            console.warn('Found ReflexContainer with height=0, ' + 'this will cause invalid behavior...');
            console.warn(this.ref.current);
            return 0.0;
          }
          return 1.0 / this.ref.current.offsetHeight;
        case 'vertical':
        default:
          if (this.ref.current.offsetWidth === 0.0) {
            console.warn('Found ReflexContainer with width=0, ' + 'this will cause invalid behavior...');
            console.warn(this.ref.current);
            return 0.0;
          }
          return 1.0 / this.ref.current.offsetWidth;
      }
    }

    /////////////////////////////////////////////////////////
    // Adds offset to a given ReflexElement
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "addOffset",
    value: function addOffset(element, offset) {
      var size = this.getSize(element);
      var idx = element.props.index;
      var newSize = Math.max(size + offset, 0);
      var currentFlex = this.state.flexData[idx].flex;
      var newFlex = currentFlex > 0 ? currentFlex * newSize / size : this.computePixelFlex() * newSize;
      this.state.flexData[idx].flex = !isFinite(newFlex) || isNaN(newFlex) ? 0 : newFlex;
    }

    /////////////////////////////////////////////////////////
    // Recursively dispatches stretch offset across
    // children elements starting at splitter idx
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "dispatchStretch",
    value: function dispatchStretch(idx, offset) {
      var childIdx = offset < 0 ? idx + 1 : idx - 1;
      if (childIdx < 0 || childIdx > this.children.length - 1) {
        return [];
      }
      var child = this.children[childIdx];
      var size = this.getSize(child);
      var newSize = Math.min(child.props.maxSize, size + Math.abs(offset));
      var dispatchedStretch = newSize - size;
      this.addOffset(child, dispatchedStretch);
      if (dispatchedStretch < Math.abs(offset)) {
        var nextIdx = idx - Math.sign(offset) * 2;
        var nextOffset = Math.sign(offset) * (Math.abs(offset) - dispatchedStretch);
        return [child].concat((0, _toConsumableArray2.default)(this.dispatchStretch(nextIdx, nextOffset)));
      }
      return [child];
    }

    /////////////////////////////////////////////////////////
    // Recursively dispatches shrink offset across
    // children elements starting at splitter idx
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "dispatchShrink",
    value: function dispatchShrink(idx, offset) {
      var childIdx = offset > 0 ? idx + 1 : idx - 1;
      if (childIdx < 0 || childIdx > this.children.length - 1) {
        return [];
      }
      var child = this.children[childIdx];
      var size = this.getSize(child);
      var newSize = Math.max(child.props.minSize, size - Math.abs(offset));
      var dispatchedShrink = newSize - size;
      this.addOffset(child, dispatchedShrink);
      if (Math.abs(dispatchedShrink) < Math.abs(offset)) {
        var nextIdx = idx + Math.sign(offset) * 2;
        var nextOffset = Math.sign(offset) * (Math.abs(offset) + dispatchedShrink);
        return [child].concat((0, _toConsumableArray2.default)(this.dispatchShrink(nextIdx, nextOffset)));
      }
      return [child];
    }

    /////////////////////////////////////////////////////////
    // Dispatch offset at splitter idx
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "dispatchOffset",
    value: function dispatchOffset(idx, offset) {
      return [].concat((0, _toConsumableArray2.default)(this.dispatchStretch(idx, offset)), (0, _toConsumableArray2.default)(this.dispatchShrink(idx, offset)));
    }

    /////////////////////////////////////////////////////////
    // Emits given if event for each given element
    // if present in the component props
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "emitElementsEvent",
    value: function emitElementsEvent(elements, event) {
      this.toArray(elements).forEach(function (component) {
        if (component.props[event]) {
          component.props[event]({
            domElement: component.ref.current,
            component: component
          });
        }
      });
    }

    /////////////////////////////////////////////////////////
    // Computes initial flex data based on provided flex
    // properties. By default each ReflexElement gets
    // evenly arranged within its container
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "computeFlexData",
    value: function computeFlexData() {
      var _this3 = this;
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getValidChildren();
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var pixelFlex = this.computePixelFlex(props.orientation);
      var computeFreeFlex = function computeFreeFlex(flexData) {
        return flexData.reduce(function (sum, entry) {
          if (!_ReflexSplitter.default.isA(entry) && entry.constrained) {
            return sum - entry.flex;
          }
          return sum;
        }, 1.0);
      };
      var computeFreeElements = function computeFreeElements(flexData) {
        return flexData.reduce(function (sum, entry) {
          if (!_ReflexSplitter.default.isA(entry) && !entry.constrained) {
            return sum + 1;
          }
          return sum;
        }, 0.0);
      };
      var flexDataInit = children.map(function (child) {
        var props = child.props;
        return {
          maxFlex: (props.maxSize || Number.MAX_VALUE) * pixelFlex,
          sizeFlex: (props.size || Number.MAX_VALUE) * pixelFlex,
          minFlex: (props.minSize || 1) * pixelFlex,
          constrained: props.flex !== undefined,
          flex: props.flex || 0,
          type: child.type
        };
      });
      var computeFlexDataRec = function computeFlexDataRec(flexDataIn) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var hasContrain = false;
        var freeElements = computeFreeElements(flexDataIn);
        var freeFlex = computeFreeFlex(flexDataIn);
        var flexDataOut = flexDataIn.map(function (entry) {
          if (_ReflexSplitter.default.isA(entry)) {
            return entry;
          }
          var proposedFlex = !entry.constrained ? freeFlex / freeElements : entry.flex;
          var constrainedFlex = Math.min(entry.sizeFlex, Math.min(entry.maxFlex, Math.max(entry.minFlex, proposedFlex)));
          var constrained = entry.constrained || constrainedFlex !== proposedFlex;
          hasContrain = hasContrain || constrained;
          return (0, _objectSpread2.default)({}, entry, {
            flex: constrainedFlex,
            constrained: constrained
          });
        });
        return hasContrain && depth < _this3.props.maxRecDepth ? computeFlexDataRec(flexDataOut, depth + 1) : flexDataOut;
      };
      var flexData = computeFlexDataRec(flexDataInit);
      return flexData.map(function (entry) {
        return {
          flex: !_ReflexSplitter.default.isA(entry) ? entry.flex : 0.0,
          ref: _react.default.createRef()
        };
      });
    }

    /////////////////////////////////////////////////////////
    // Utility method to ensure given argument is
    // returned as an array
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "toArray",
    value: function toArray(obj) {
      return obj ? Array.isArray(obj) ? obj : [obj] : [];
    }

    /////////////////////////////////////////////////////////
    // Render container. This will clone all original child
    // components in order to pass some internal properties
    // used to handle resizing logic
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var className = [this.state.resizing ? 'reflex-resizing' : ''].concat((0, _toConsumableArray2.default)(this.props.className.split(' ')), [this.props.orientation, 'reflex-container']).join(' ').trim();
      this.children = _react.default.Children.map(this.getValidChildren(), function (child, index) {
        if (index > _this4.state.flexData.length - 1) {
          return /*#__PURE__*/_react.default.createElement("div", null);
        }
        var flexData = _this4.state.flexData[index];
        var newProps = (0, _objectSpread2.default)({}, child.props, {
          maxSize: child.props.maxSize || Number.MAX_VALUE,
          orientation: _this4.props.orientation,
          minSize: child.props.minSize || 1,
          events: _this4.events,
          flex: flexData.flex,
          ref: flexData.ref,
          index: index
        });
        return _react.default.cloneElement(child, newProps);
      });
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, (0, _utilities.getDataProps)(this.props), {
        style: this.props.style,
        className: className,
        ref: this.ref
      }), this.children);
    }
  }]);
  return ReflexContainer;
}(_react.default.Component);
exports.default = ReflexContainer;
(0, _defineProperty2.default)(ReflexContainer, "propTypes", {
  windowResizeAware: _propTypes.default.bool,
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  maxRecDepth: _propTypes.default.number,
  className: _propTypes.default.string,
  style: _propTypes.default.object
});
(0, _defineProperty2.default)(ReflexContainer, "defaultProps", {
  orientation: 'horizontal',
  windowResizeAware: false,
  maxRecDepth: 100,
  className: '',
  style: {}
});