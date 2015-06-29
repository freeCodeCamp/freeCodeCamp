exports.ids = [1];
exports.modules = {

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(53);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _thundercats = __webpack_require__(22);
	
	var _reactBootstrap = __webpack_require__(233);
	
	var _default = (function (_React$Component) {
	  var _class = function _default(props) {
	    _classCallCheck(this, _class2);
	
	    _get(Object.getPrototypeOf(_class2.prototype), 'constructor', this).call(this, props);
	  };
	
	  _inherits(_class, _React$Component);
	
	  var _class2 = _class;
	
	  _createClass(_class2, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _reactBootstrap.Grid,
	        null,
	        _react2['default'].createElement(
	          _reactBootstrap.Row,
	          null,
	          'foo'
	        )
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'Jobs',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      jobs: _react.PropTypes.array
	    },
	    enumerable: true
	  }]);
	
	  _class = (0, _thundercats.createContainer)({
	    store: 'JobsStore'
	  })(_class) || _class;
	  return _class;
	})(_react2['default'].Component);
	
	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }

};;
//# sourceMappingURL=1.fcc.js.map