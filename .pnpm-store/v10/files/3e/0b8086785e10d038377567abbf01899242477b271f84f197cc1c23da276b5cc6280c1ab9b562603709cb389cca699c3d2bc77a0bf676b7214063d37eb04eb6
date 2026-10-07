(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("rxjs/operators"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "rxjs/operators"], factory);
	else if(typeof exports === 'object')
		exports["ReduxObservable"] = factory(require("rxjs"), require("rxjs/operators"));
	else
		root["ReduxObservable"] = factory(root["rxjs"], root["rxjs"]["operators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ActionsObservable.js":
/*!**********************************!*\
  !*** ./src/ActionsObservable.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ActionsObservable = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"rxjs\");\n\nvar _operators = __webpack_require__(/*! ./operators */ \"./src/operators.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ActionsObservable = exports.ActionsObservable = function (_Observable) {\n  _inherits(ActionsObservable, _Observable);\n\n  _createClass(ActionsObservable, null, [{\n    key: 'of',\n    value: function of() {\n      return new this(_rxjs.of.apply(undefined, arguments));\n    }\n  }, {\n    key: 'from',\n    value: function from(actions, scheduler) {\n      return new this((0, _rxjs.from)(actions, scheduler));\n    }\n  }]);\n\n  function ActionsObservable(actionsSubject) {\n    _classCallCheck(this, ActionsObservable);\n\n    var _this = _possibleConstructorReturn(this, (ActionsObservable.__proto__ || Object.getPrototypeOf(ActionsObservable)).call(this));\n\n    _this.source = actionsSubject;\n    return _this;\n  }\n\n  _createClass(ActionsObservable, [{\n    key: 'lift',\n    value: function lift(operator) {\n      var observable = new ActionsObservable(this);\n      observable.operator = operator;\n      return observable;\n    }\n  }, {\n    key: 'ofType',\n    value: function ofType() {\n      return _operators.ofType.apply(undefined, arguments)(this);\n    }\n  }]);\n\n  return ActionsObservable;\n}(_rxjs.Observable);\n\n//# sourceURL=webpack://ReduxObservable/./src/ActionsObservable.js?");

/***/ }),

/***/ "./src/StateObservable.js":
/*!********************************!*\
  !*** ./src/StateObservable.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StateObservable = undefined;\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"rxjs\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StateObservable = exports.StateObservable = function (_Observable) {\n  _inherits(StateObservable, _Observable);\n\n  function StateObservable(stateSubject, initialState) {\n    _classCallCheck(this, StateObservable);\n\n    var _this = _possibleConstructorReturn(this, (StateObservable.__proto__ || Object.getPrototypeOf(StateObservable)).call(this, function (subscriber) {\n      var subscription = _this.__notifier.subscribe(subscriber);\n      if (subscription && !subscription.closed) {\n        subscriber.next(_this.value);\n      }\n      return subscription;\n    }));\n\n    _this.value = initialState;\n    _this.__notifier = new _rxjs.Subject();\n    _this.__subscription = stateSubject.subscribe(function (value) {\n      // We only want to update state$ if it has actually changed since\n      // redux requires reducers use immutability patterns.\n      // This is basically what distinctUntilChanged() does but it's so simple\n      // we don't need to pull that code in\n      if (value !== _this.value) {\n        _this.value = value;\n        _this.__notifier.next(value);\n      }\n    });\n    return _this;\n  }\n\n  return StateObservable;\n}(_rxjs.Observable);\n\n//# sourceURL=webpack://ReduxObservable/./src/StateObservable.js?");

/***/ }),

/***/ "./src/combineEpics.js":
/*!*****************************!*\
  !*** ./src/combineEpics.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.combineEpics = undefined;\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"rxjs\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n  Merges all epics into a single one.\n */\nvar combineEpics = exports.combineEpics = function combineEpics() {\n  for (var _len = arguments.length, epics = Array(_len), _key = 0; _key < _len; _key++) {\n    epics[_key] = arguments[_key];\n  }\n\n  var merger = function merger() {\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _rxjs.merge.apply(undefined, _toConsumableArray(epics.map(function (epic) {\n      var output$ = epic.apply(undefined, args);\n      if (!output$) {\n        throw new TypeError('combineEpics: one of the provided Epics \"' + (epic.name || '<anonymous>') + '\" does not return a stream. Double check you\\'re not missing a return statement!');\n      }\n      return output$;\n    })));\n  };\n\n  // Technically the `name` property on Function's are supposed to be read-only.\n  // While some JS runtimes allow it anyway (so this is useful in debugging)\n  // some actually throw an exception when you attempt to do so.\n  try {\n    Object.defineProperty(merger, 'name', {\n      value: 'combineEpics(' + epics.map(function (epic) {\n        return epic.name || '<anonymous>';\n      }).join(', ') + ')'\n    });\n  } catch (e) {}\n\n  return merger;\n};\n\n//# sourceURL=webpack://ReduxObservable/./src/combineEpics.js?");

/***/ }),

/***/ "./src/createEpicMiddleware.js":
/*!*************************************!*\
  !*** ./src/createEpicMiddleware.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createEpicMiddleware = createEpicMiddleware;\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"rxjs\");\n\nvar _operators = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n\nvar _ActionsObservable = __webpack_require__(/*! ./ActionsObservable */ \"./src/ActionsObservable.js\");\n\nvar _StateObservable = __webpack_require__(/*! ./StateObservable */ \"./src/StateObservable.js\");\n\nvar _console = __webpack_require__(/*! ./utils/console */ \"./src/utils/console.js\");\n\nfunction createEpicMiddleware() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // This isn't great. RxJS doesn't publicly export the constructor for\n  // QueueScheduler nor QueueAction, so we reach in. We need to do this because\n  // we don't want our internal queuing mechanism to be on the same queue as any\n  // other RxJS code outside of redux-observable internals.\n  var QueueScheduler = _rxjs.queueScheduler.constructor;\n  var uniqueQueueScheduler = new QueueScheduler(_rxjs.queueScheduler.SchedulerAction);\n\n  if ( true && typeof options === 'function') {\n    throw new TypeError('Providing your root Epic to `createEpicMiddleware(rootEpic)` is no longer supported, instead use `epicMiddleware.run(rootEpic)`\\n\\nLearn more: https://redux-observable.js.org/MIGRATION.html#setting-up-the-middleware');\n  }\n\n  var epic$ = new _rxjs.Subject();\n  var store = void 0;\n\n  var epicMiddleware = function epicMiddleware(_store) {\n    if ( true && store) {\n      // https://github.com/redux-observable/redux-observable/issues/389\n      (0, _console.warn)('this middleware is already associated with a store. createEpicMiddleware should be called for every store.\\n\\nLearn more: https://goo.gl/2GQ7Da');\n    }\n    store = _store;\n    var actionSubject$ = new _rxjs.Subject().pipe((0, _operators.observeOn)(uniqueQueueScheduler));\n    var stateSubject$ = new _rxjs.Subject().pipe((0, _operators.observeOn)(uniqueQueueScheduler));\n    var action$ = new _ActionsObservable.ActionsObservable(actionSubject$);\n    var state$ = new _StateObservable.StateObservable(stateSubject$, store.getState());\n\n    var result$ = epic$.pipe((0, _operators.map)(function (epic) {\n      var output$ = 'dependencies' in options ? epic(action$, state$, options.dependencies) : epic(action$, state$);\n\n      if (!output$) {\n        throw new TypeError('Your root Epic \"' + (epic.name || '<anonymous>') + '\" does not return a stream. Double check you\\'re not missing a return statement!');\n      }\n\n      return output$;\n    }), (0, _operators.mergeMap)(function (output$) {\n      return (0, _rxjs.from)(output$).pipe((0, _operators.subscribeOn)(uniqueQueueScheduler), (0, _operators.observeOn)(uniqueQueueScheduler));\n    }));\n\n    result$.subscribe(store.dispatch);\n\n    return function (next) {\n      return function (action) {\n        // Downstream middleware gets the action first,\n        // which includes their reducers, so state is\n        // updated before epics receive the action\n        var result = next(action);\n\n        // It's important to update the state$ before we emit\n        // the action because otherwise it would be stale\n        stateSubject$.next(store.getState());\n        actionSubject$.next(action);\n\n        return result;\n      };\n    };\n  };\n\n  epicMiddleware.run = function (rootEpic) {\n    if ( true && !store) {\n      (0, _console.warn)('epicMiddleware.run(rootEpic) called before the middleware has been setup by redux. Provide the epicMiddleware instance to createStore() first.');\n    }\n    epic$.next(rootEpic);\n  };\n\n  return epicMiddleware;\n}\n\n//# sourceURL=webpack://ReduxObservable/./src/createEpicMiddleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createEpicMiddleware = __webpack_require__(/*! ./createEpicMiddleware */ \"./src/createEpicMiddleware.js\");\n\nObject.defineProperty(exports, 'createEpicMiddleware', {\n  enumerable: true,\n  get: function get() {\n    return _createEpicMiddleware.createEpicMiddleware;\n  }\n});\n\nvar _ActionsObservable = __webpack_require__(/*! ./ActionsObservable */ \"./src/ActionsObservable.js\");\n\nObject.defineProperty(exports, 'ActionsObservable', {\n  enumerable: true,\n  get: function get() {\n    return _ActionsObservable.ActionsObservable;\n  }\n});\n\nvar _StateObservable = __webpack_require__(/*! ./StateObservable */ \"./src/StateObservable.js\");\n\nObject.defineProperty(exports, 'StateObservable', {\n  enumerable: true,\n  get: function get() {\n    return _StateObservable.StateObservable;\n  }\n});\n\nvar _combineEpics = __webpack_require__(/*! ./combineEpics */ \"./src/combineEpics.js\");\n\nObject.defineProperty(exports, 'combineEpics', {\n  enumerable: true,\n  get: function get() {\n    return _combineEpics.combineEpics;\n  }\n});\n\nvar _operators = __webpack_require__(/*! ./operators */ \"./src/operators.js\");\n\nObject.defineProperty(exports, 'ofType', {\n  enumerable: true,\n  get: function get() {\n    return _operators.ofType;\n  }\n});\n\n//# sourceURL=webpack://ReduxObservable/./src/index.js?");

/***/ }),

/***/ "./src/operators.js":
/*!**************************!*\
  !*** ./src/operators.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ofType = undefined;\n\nvar _operators = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n\nvar keyHasType = function keyHasType(type, key) {\n  return type === key || typeof key === 'function' && type === key.toString();\n};\n\nvar ofType = exports.ofType = function ofType() {\n  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {\n    keys[_key] = arguments[_key];\n  }\n\n  return function (source) {\n    return source.pipe((0, _operators.filter)(function (_ref) {\n      var type = _ref.type;\n\n      var len = keys.length;\n      if (len === 1) {\n        return keyHasType(type, keys[0]);\n      } else {\n        for (var i = 0; i < len; i++) {\n          if (keyHasType(type, keys[i])) {\n            return true;\n          }\n        }\n      }\n      return false;\n    }));\n  };\n};\n\n//# sourceURL=webpack://ReduxObservable/./src/operators.js?");

/***/ }),

/***/ "./src/utils/console.js":
/*!******************************!*\
  !*** ./src/utils/console.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar deprecationsSeen = {};\nvar resetDeprecationsSeen = exports.resetDeprecationsSeen = function resetDeprecationsSeen() {\n  deprecationsSeen = {};\n};\n\nvar consoleWarn = (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.warn === 'function' ? function () {\n  var _console;\n\n  return (_console = console).warn.apply(_console, arguments);\n} : function () {};\n\nvar deprecate = exports.deprecate = function deprecate(msg) {\n  if (!deprecationsSeen[msg]) {\n    deprecationsSeen[msg] = true;\n    consoleWarn('redux-observable | DEPRECATION: ' + msg);\n  }\n};\n\nvar warn = exports.warn = function warn(msg) {\n  consoleWarn('redux-observable | WARNING: ' + msg);\n};\n\n//# sourceURL=webpack://ReduxObservable/./src/utils/console.js?");

/***/ }),

/***/ "rxjs":
/*!************************************************************************************!*\
  !*** external {"root":["rxjs"],"commonjs":"rxjs","commonjs2":"rxjs","amd":"rxjs"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;\n\n//# sourceURL=webpack://ReduxObservable/external_%7B%22root%22:%5B%22rxjs%22%5D,%22commonjs%22:%22rxjs%22,%22commonjs2%22:%22rxjs%22,%22amd%22:%22rxjs%22%7D?");

/***/ }),

/***/ "rxjs/operators":
/*!******************************************************************************************************************************!*\
  !*** external {"root":["rxjs","operators"],"commonjs":"rxjs/operators","commonjs2":"rxjs/operators","amd":"rxjs/operators"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;\n\n//# sourceURL=webpack://ReduxObservable/external_%7B%22root%22:%5B%22rxjs%22,%22operators%22%5D,%22commonjs%22:%22rxjs/operators%22,%22commonjs2%22:%22rxjs/operators%22,%22amd%22:%22rxjs/operators%22%7D?");

/***/ })

/******/ });
});