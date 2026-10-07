module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/clipboard-js/clipboard.js":
/*!*********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/clipboard-js/clipboard.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//  Import support https://stackoverflow.com/questions/13673346/supporting-both-commonjs-and-amd
(function (name, definition) {
  if (true) {
    module.exports = definition();
  } else {}
})("clipboard", function () {
  if (typeof document === 'undefined' || !document.addEventListener) {
    return null;
  }

  var clipboard = {};

  clipboard.copy = function () {
    var _intercept = false;
    var _data = null; // Map from data type (e.g. "text/html") to value.

    var _bogusSelection = false;

    function cleanup() {
      _intercept = false;
      _data = null;

      if (_bogusSelection) {
        window.getSelection().removeAllRanges();
      }

      _bogusSelection = false;
    }

    document.addEventListener("copy", function (e) {
      if (_intercept) {
        for (var key in _data) {
          e.clipboardData.setData(key, _data[key]);
        }

        e.preventDefault();
      }
    }); // Workaround for Safari: https://bugs.webkit.org/show_bug.cgi?id=156529

    function bogusSelect() {
      var sel = document.getSelection(); // If "nothing" is selected...

      if (!document.queryCommandEnabled("copy") && sel.isCollapsed) {
        // ... temporarily select the entire body.
        //
        // We select the entire body because:
        // - it's guaranteed to exist,
        // - it works (unlike, say, document.head, or phantom element that is
        //   not inserted into the DOM),
        // - it doesn't seem to flicker (due to the synchronous copy event), and
        // - it avoids modifying the DOM (can trigger mutation observers).
        //
        // Because we can't do proper feature detection (we already checked
        // document.queryCommandEnabled("copy") , which actually gives a false
        // negative for Blink when nothing is selected) and UA sniffing is not
        // reliable (a lot of UA strings contain "Safari"), this will also
        // happen for some browsers other than Safari. :-()
        var range = document.createRange();
        range.selectNodeContents(document.body);
        sel.removeAllRanges();
        sel.addRange(range);
        _bogusSelection = true;
      }
    }

    ;
    return function (data) {
      return new Promise(function (resolve, reject) {
        _intercept = true;

        if (typeof data === "string") {
          _data = {
            "text/plain": data
          };
        } else if (data instanceof Node) {
          _data = {
            "text/html": new XMLSerializer().serializeToString(data)
          };
        } else if (data instanceof Object) {
          _data = data;
        } else {
          reject("Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings.");
        }

        function triggerCopy(tryBogusSelect) {
          try {
            if (document.execCommand("copy")) {
              // document.execCommand is synchronous: http://www.w3.org/TR/2015/WD-clipboard-apis-20150421/#integration-with-rich-text-editing-apis
              // So we can call resolve() back here.
              cleanup();
              resolve();
            } else {
              if (!tryBogusSelect) {
                bogusSelect();
                triggerCopy(true);
              } else {
                cleanup();
                throw new Error("Unable to copy. Perhaps it's not available in your browser?");
              }
            }
          } catch (e) {
            cleanup();
            reject(e);
          }
        }

        triggerCopy(false);
      });
    };
  }();

  clipboard.paste = function () {
    var _intercept = false;

    var _resolve;

    var _dataType;

    document.addEventListener("paste", function (e) {
      if (_intercept) {
        _intercept = false;
        e.preventDefault();
        var resolve = _resolve;
        _resolve = null;
        resolve(e.clipboardData.getData(_dataType));
      }
    });
    return function (dataType) {
      return new Promise(function (resolve, reject) {
        _intercept = true;
        _resolve = resolve;
        _dataType = dataType || "text/plain";

        try {
          if (!document.execCommand("paste")) {
            _intercept = false;
            reject(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."));
          }
        } catch (e) {
          _intercept = false;
          reject(new Error(e));
        }
      });
    };
  }(); // Handle IE behaviour.


  if (typeof ClipboardEvent === "undefined" && typeof window.clipboardData !== "undefined" && typeof window.clipboardData.setData !== "undefined") {
    /*! promise-polyfill 2.0.1 */
    (function (a) {
      function b(a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }

      function c(a) {
        if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof a) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], i(a, b(e, this), b(f, this));
      }

      function d(a) {
        var b = this;
        return null === this._state ? void this._deferreds.push(a) : void j(function () {
          var c = b._state ? a.onFulfilled : a.onRejected;
          if (null === c) return void (b._state ? a.resolve : a.reject)(b._value);
          var d;

          try {
            d = c(b._value);
          } catch (e) {
            return void a.reject(e);
          }

          a.resolve(d);
        });
      }

      function e(a) {
        try {
          if (a === this) throw new TypeError("A promise cannot be resolved with itself.");

          if (a && ("object" == _typeof(a) || "function" == typeof a)) {
            var c = a.then;
            if ("function" == typeof c) return void i(b(c, a), b(e, this), b(f, this));
          }

          this._state = !0, this._value = a, g.call(this);
        } catch (d) {
          f.call(this, d);
        }
      }

      function f(a) {
        this._state = !1, this._value = a, g.call(this);
      }

      function g() {
        for (var a = 0, b = this._deferreds.length; b > a; a++) {
          d.call(this, this._deferreds[a]);
        }

        this._deferreds = null;
      }

      function h(a, b, c, d) {
        this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof b ? b : null, this.resolve = c, this.reject = d;
      }

      function i(a, b, c) {
        var d = !1;

        try {
          a(function (a) {
            d || (d = !0, b(a));
          }, function (a) {
            d || (d = !0, c(a));
          });
        } catch (e) {
          if (d) return;
          d = !0, c(e);
        }
      }

      var j = c.immediateFn || "function" == typeof setImmediate && setImmediate || function (a) {
        setTimeout(a, 1);
      },
          k = Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      };

      c.prototype["catch"] = function (a) {
        return this.then(null, a);
      }, c.prototype.then = function (a, b) {
        var e = this;
        return new c(function (c, f) {
          d.call(e, new h(a, b, c, f));
        });
      }, c.all = function () {
        var a = Array.prototype.slice.call(1 === arguments.length && k(arguments[0]) ? arguments[0] : arguments);
        return new c(function (b, c) {
          function d(f, g) {
            try {
              if (g && ("object" == _typeof(g) || "function" == typeof g)) {
                var h = g.then;
                if ("function" == typeof h) return void h.call(g, function (a) {
                  d(f, a);
                }, c);
              }

              a[f] = g, 0 === --e && b(a);
            } catch (i) {
              c(i);
            }
          }

          if (0 === a.length) return b([]);

          for (var e = a.length, f = 0; f < a.length; f++) {
            d(f, a[f]);
          }
        });
      }, c.resolve = function (a) {
        return a && "object" == _typeof(a) && a.constructor === c ? a : new c(function (b) {
          b(a);
        });
      }, c.reject = function (a) {
        return new c(function (b, c) {
          c(a);
        });
      }, c.race = function (a) {
        return new c(function (b, c) {
          for (var d = 0, e = a.length; e > d; d++) {
            a[d].then(b, c);
          }
        });
      },  true && module.exports ? module.exports = c : a.Promise || (a.Promise = c);
    })(this);

    clipboard.copy = function (data) {
      return new Promise(function (resolve, reject) {
        // IE supports string and URL types: https://msdn.microsoft.com/en-us/library/ms536744(v=vs.85).aspx
        // We only support the string type for now.
        if (typeof data !== "string" && !("text/plain" in data)) {
          throw new Error("You must provide a text/plain type.");
        }

        var strData = typeof data === "string" ? data : data["text/plain"];
        var copySucceeded = window.clipboardData.setData("Text", strData);

        if (copySucceeded) {
          resolve();
        } else {
          reject(new Error("Copying was rejected."));
        }
      });
    };

    clipboard.paste = function () {
      return new Promise(function (resolve, reject) {
        var strData = window.clipboardData.getData("Text");

        if (strData) {
          resolve(strData);
        } else {
          // The user rejected the paste request.
          reject(new Error("Pasting was rejected."));
        }
      });
    };
  }

  return clipboard;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/node_modules/timers-browserify/main.js */ "../../node_modules/webpack/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../node_modules/d/index.js":
/*!******************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/d/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! type/value/is */ "../../node_modules/type/value/is.js"),
    isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "../../node_modules/type/plain-function/is.js"),
    assign = __webpack_require__(/*! es5-ext/object/assign */ "../../node_modules/es5-ext/object/assign/index.js"),
    normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "../../node_modules/es5-ext/object/normalize-options.js"),
    contains = __webpack_require__(/*! es5-ext/string/#/contains */ "../../node_modules/es5-ext/string/#/contains/index.js");

var d = module.exports = function (dscr, value
/*, options*/
) {
  var c, e, w, options, desc;

  if (arguments.length < 2 || typeof dscr !== "string") {
    options = value;
    value = dscr;
    dscr = null;
  } else {
    options = arguments[2];
  }

  if (isValue(dscr)) {
    c = contains.call(dscr, "c");
    e = contains.call(dscr, "e");
    w = contains.call(dscr, "w");
  } else {
    c = w = true;
    e = false;
  }

  desc = {
    value: value,
    configurable: c,
    enumerable: e,
    writable: w
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set
/*, options*/
) {
  var c, e, options, desc;

  if (typeof dscr !== "string") {
    options = set;
    set = get;
    get = dscr;
    dscr = null;
  } else {
    options = arguments[3];
  }

  if (!isValue(get)) {
    get = undefined;
  } else if (!isPlainFunction(get)) {
    options = get;
    get = set = undefined;
  } else if (!isValue(set)) {
    set = undefined;
  } else if (!isPlainFunction(set)) {
    options = set;
    set = undefined;
  }

  if (isValue(dscr)) {
    c = contains.call(dscr, "c");
    e = contains.call(dscr, "e");
  } else {
    c = true;
    e = false;
  }

  desc = {
    get: get,
    set: set,
    configurable: c,
    enumerable: e
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),

/***/ "../../node_modules/error-stack-parser/error-stack-parser.js":
/*!************************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/error-stack-parser/error-stack-parser.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "../../node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

/***/ }),

/***/ "../../node_modules/es5-ext/function/noop.js":
/*!********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/function/noop.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/index.js":
/*!**************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/assign/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/object/assign/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/is-implemented.js":
/*!***********************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/assign/is-implemented.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var assign = Object.assign,
      obj;
  if (typeof assign !== "function") return false;
  obj = {
    foo: "raz"
  };
  assign(obj, {
    bar: "dwa"
  }, {
    trzy: "trzy"
  });
  return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/shim.js":
/*!*************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/assign/shim.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! ../keys */ "../../node_modules/es5-ext/object/keys/index.js"),
    value = __webpack_require__(/*! ../valid-value */ "../../node_modules/es5-ext/object/valid-value.js"),
    max = Math.max;

module.exports = function (dest, src
/*, …srcn*/
) {
  var error,
      i,
      length = max(arguments.length, 2),
      assign;
  dest = Object(value(dest));

  assign = function assign(key) {
    try {
      dest[key] = src[key];
    } catch (e) {
      if (!error) error = e;
    }
  };

  for (i = 1; i < length; ++i) {
    src = arguments[i];
    keys(src).forEach(assign);
  }

  if (error !== undefined) throw error;
  return dest;
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/is-value.js":
/*!**********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/is-value.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "../../node_modules/es5-ext/function/noop.js")(); // Support ES3 engines


module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/index.js":
/*!************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/keys/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/object/keys/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/is-implemented.js":
/*!*********************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/keys/is-implemented.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  try {
    Object.keys("primitive");
    return true;
  } catch (e) {
    return false;
  }
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/shim.js":
/*!***********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/keys/shim.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "../../node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) {
  return keys(isValue(object) ? Object(object) : object);
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/normalize-options.js":
/*!*******************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/normalize-options.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "../../node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
  var key;

  for (key in src) {
    obj[key] = src[key];
  }
}; // eslint-disable-next-line no-unused-vars


module.exports = function (opts1
/*, …options*/
) {
  var result = create(null);
  forEach.call(arguments, function (options) {
    if (!isValue(options)) return;
    process(Object(options), result);
  });
  return result;
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/valid-value.js":
/*!*************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/object/valid-value.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "../../node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
  if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
  return value;
};

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/index.js":
/*!******************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/string/#/contains/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/string/#/contains/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!***************************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
  if (typeof str.contains !== "function") return false;
  return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/shim.js":
/*!*****************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es5-ext/string/#/contains/shim.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString
/*, position*/
) {
  return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),

/***/ "../../node_modules/es6-symbol/index.js":
/*!***************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es6-symbol/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es6-symbol/is-implemented.js")() ? Symbol : __webpack_require__(/*! ./polyfill */ "../../node_modules/es6-symbol/polyfill.js");

/***/ }),

/***/ "../../node_modules/es6-symbol/is-implemented.js":
/*!************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es6-symbol/is-implemented.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var validTypes = {
  object: true,
  symbol: true
};

module.exports = function () {
  var symbol;
  if (typeof Symbol !== 'function') return false;
  symbol = Symbol('test symbol');

  try {
    String(symbol);
  } catch (e) {
    return false;
  } // Return 'true' also for polyfills


  if (!validTypes[_typeof(Symbol.iterator)]) return false;
  if (!validTypes[_typeof(Symbol.toPrimitive)]) return false;
  if (!validTypes[_typeof(Symbol.toStringTag)]) return false;
  return true;
};

/***/ }),

/***/ "../../node_modules/es6-symbol/is-symbol.js":
/*!*******************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es6-symbol/is-symbol.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (x) {
  if (!x) return false;
  if (_typeof(x) === 'symbol') return true;
  if (!x.constructor) return false;
  if (x.constructor.name !== 'Symbol') return false;
  return x[x.constructor.toStringTag] === 'Symbol';
};

/***/ }),

/***/ "../../node_modules/es6-symbol/polyfill.js":
/*!******************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es6-symbol/polyfill.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var d = __webpack_require__(/*! d */ "../../node_modules/d/index.js"),
    validateSymbol = __webpack_require__(/*! ./validate-symbol */ "../../node_modules/es6-symbol/validate-symbol.js"),
    create = Object.create,
    defineProperties = Object.defineProperties,
    defineProperty = Object.defineProperty,
    objPrototype = Object.prototype,
    NativeSymbol,
    SymbolPolyfill,
    HiddenSymbol,
    globalSymbols = create(null),
    isNativeSafe;

if (typeof Symbol === 'function') {
  NativeSymbol = Symbol;

  try {
    String(NativeSymbol());
    isNativeSafe = true;
  } catch (ignore) {}
}

var generateName = function () {
  var created = create(null);
  return function (desc) {
    var postfix = 0,
        name,
        ie11BugWorkaround;

    while (created[desc + (postfix || '')]) {
      ++postfix;
    }

    desc += postfix || '';
    created[desc] = true;
    name = '@@' + desc;
    defineProperty(objPrototype, name, d.gs(null, function (value) {
      // For IE11 issue see:
      // https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
      //    ie11-broken-getters-on-dom-objects
      // https://github.com/medikoo/es6-symbol/issues/12
      if (ie11BugWorkaround) return;
      ie11BugWorkaround = true;
      defineProperty(this, name, d(value));
      ie11BugWorkaround = false;
    }));
    return name;
  };
}(); // Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false


HiddenSymbol = function _Symbol(description) {
  if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
  return SymbolPolyfill(description);
}; // Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)


module.exports = SymbolPolyfill = function _Symbol2(description) {
  var symbol;
  if (this instanceof _Symbol2) throw new TypeError('Symbol is not a constructor');
  if (isNativeSafe) return NativeSymbol(description);
  symbol = create(HiddenSymbol.prototype);
  description = description === undefined ? '' : String(description);
  return defineProperties(symbol, {
    __description__: d('', description),
    __name__: d('', generateName(description))
  });
};

defineProperties(SymbolPolyfill, {
  for: d(function (key) {
    if (globalSymbols[key]) return globalSymbols[key];
    return globalSymbols[key] = SymbolPolyfill(String(key));
  }),
  keyFor: d(function (s) {
    var key;
    validateSymbol(s);

    for (key in globalSymbols) {
      if (globalSymbols[key] === s) return key;
    }
  }),
  // To ensure proper interoperability with other native functions (e.g. Array.from)
  // fallback to eventual native implementation of given symbol
  hasInstance: d('', NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill('hasInstance')),
  isConcatSpreadable: d('', NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill('isConcatSpreadable')),
  iterator: d('', NativeSymbol && NativeSymbol.iterator || SymbolPolyfill('iterator')),
  match: d('', NativeSymbol && NativeSymbol.match || SymbolPolyfill('match')),
  replace: d('', NativeSymbol && NativeSymbol.replace || SymbolPolyfill('replace')),
  search: d('', NativeSymbol && NativeSymbol.search || SymbolPolyfill('search')),
  species: d('', NativeSymbol && NativeSymbol.species || SymbolPolyfill('species')),
  split: d('', NativeSymbol && NativeSymbol.split || SymbolPolyfill('split')),
  toPrimitive: d('', NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill('toPrimitive')),
  toStringTag: d('', NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill('toStringTag')),
  unscopables: d('', NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill('unscopables'))
}); // Internal tweaks for real symbol producer

defineProperties(HiddenSymbol.prototype, {
  constructor: d(SymbolPolyfill),
  toString: d('', function () {
    return this.__name__;
  })
}); // Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype

defineProperties(SymbolPolyfill.prototype, {
  toString: d(function () {
    return 'Symbol (' + validateSymbol(this).__description__ + ')';
  }),
  valueOf: d(function () {
    return validateSymbol(this);
  })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
  var symbol = validateSymbol(this);
  if (_typeof(symbol) === 'symbol') return symbol;
  return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol')); // Proper implementaton of toPrimitive and toStringTag for returned symbol instances

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])); // Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

/***/ }),

/***/ "../../node_modules/es6-symbol/validate-symbol.js":
/*!*************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/es6-symbol/validate-symbol.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "../../node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
  if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
  return value;
};

/***/ }),

/***/ "../../node_modules/escape-string-regexp/index.js":
/*!*************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/escape-string-regexp/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/events/events.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.

EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;
  if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];

      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];
  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;

      case 2:
        handler.call(this, arguments[1]);
        break;

      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower

      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;

    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".

  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
  if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);else // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener]; // Check for listener leak

  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events || !this._events[type]) return this;
  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;
  if (!this._events) return this; // not listening for removeListener, no need to emit

  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }

  delete this._events[type];
  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];
    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }

  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),

/***/ "../../node_modules/lodash.throttle/index.js":
/*!********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/lodash.throttle/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */


function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lru-cache/index.js":
/*!**************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/lru-cache/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = LRUCache; // This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.

var Map = __webpack_require__(/*! pseudomap */ "../../node_modules/pseudomap/map.js");

var util = __webpack_require__(/*! util */ "../../node_modules/util/util.js"); // A linked list to keep track of recently-used-ness


var Yallist = __webpack_require__(/*! yallist */ "../../node_modules/lru-cache/node_modules/yallist/yallist.js"); // use symbols if possible, otherwise just _props


var hasSymbol = typeof Symbol === 'function' && process.env._nodeLRUCacheForceNoSymbol !== '1';
var makeSymbol;

if (hasSymbol) {
  makeSymbol = function makeSymbol(key) {
    return Symbol(key);
  };
} else {
  makeSymbol = function makeSymbol(key) {
    return '_' + key;
  };
}

var MAX = makeSymbol('max');
var LENGTH = makeSymbol('length');
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator');
var ALLOW_STALE = makeSymbol('allowStale');
var MAX_AGE = makeSymbol('maxAge');
var DISPOSE = makeSymbol('dispose');
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet');
var LRU_LIST = makeSymbol('lruList');
var CACHE = makeSymbol('cache');

function naiveLength() {
  return 1;
} // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


function LRUCache(options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options);
  }

  if (typeof options === 'number') {
    options = {
      max: options
    };
  }

  if (!options) {
    options = {};
  }

  var max = this[MAX] = options.max; // Kind of weird to have a default max of Infinity, but oh well.

  if (!max || !(typeof max === 'number') || max <= 0) {
    this[MAX] = Infinity;
  }

  var lc = options.length || naiveLength;

  if (typeof lc !== 'function') {
    lc = naiveLength;
  }

  this[LENGTH_CALCULATOR] = lc;
  this[ALLOW_STALE] = options.stale || false;
  this[MAX_AGE] = options.maxAge || 0;
  this[DISPOSE] = options.dispose;
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
  this.reset();
} // resize the cache when the max changes.


Object.defineProperty(LRUCache.prototype, 'max', {
  set: function set(mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity;
    }

    this[MAX] = mL;
    trim(this);
  },
  get: function get() {
    return this[MAX];
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function set(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  },
  get: function get() {
    return this[ALLOW_STALE];
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function set(mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0;
    }

    this[MAX_AGE] = mA;
    trim(this);
  },
  get: function get() {
    return this[MAX_AGE];
  },
  enumerable: true
}); // resize the cache when the lengthCalculator changes.

Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function set(lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength;
    }

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      }, this);
    }

    trim(this);
  },
  get: function get() {
    return this[LENGTH_CALCULATOR];
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, 'length', {
  get: function get() {
    return this[LENGTH];
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function get() {
    return this[LRU_LIST].length;
  },
  enumerable: true
});

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev;
    forEachStep(this, fn, walker, thisp);
    walker = prev;
  }
};

function forEachStep(self, fn, node, thisp) {
  var hit = node.value;

  if (isStale(self, hit)) {
    del(self, node);

    if (!self[ALLOW_STALE]) {
      hit = undefined;
    }
  }

  if (hit) {
    fn.call(thisp, hit.value, hit.key, self);
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next;
    forEachStep(this, fn, walker, thisp);
    walker = next;
  }
};

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key;
  }, this);
};

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value;
  }, this);
};

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value);
    }, this);
  }

  this[CACHE] = new Map(); // hash of items by key

  this[LRU_LIST] = new Yallist(); // list of items in order of use recency

  this[LENGTH] = 0; // length of items in the list
};

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      };
    }
  }, this).toArray().filter(function (h) {
    return h;
  });
};

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST];
};
/* istanbul ignore next */


LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {';
  var extras = false;
  var as = this[ALLOW_STALE];

  if (as) {
    str += '\n  allowStale: true';
    extras = true;
  }

  var max = this[MAX];

  if (max && max !== Infinity) {
    if (extras) {
      str += ',';
    }

    str += '\n  max: ' + util.inspect(max, opts);
    extras = true;
  }

  var maxAge = this[MAX_AGE];

  if (maxAge) {
    if (extras) {
      str += ',';
    }

    str += '\n  maxAge: ' + util.inspect(maxAge, opts);
    extras = true;
  }

  var lc = this[LENGTH_CALCULATOR];

  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ',';
    }

    str += '\n  length: ' + util.inspect(this[LENGTH], opts);
    extras = true;
  }

  var didFirst = false;
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  ';
    } else {
      if (extras) {
        str += ',\n';
      }

      didFirst = true;
      str += '\n  ';
    }

    var key = util.inspect(item.key).split('\n').join('\n  ');
    var val = {
      value: item.value
    };

    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge;
    }

    if (lc !== naiveLength) {
      val.length = item.length;
    }

    if (isStale(this, item)) {
      val.stale = true;
    }

    val = util.inspect(val, opts).split('\n').join('\n  ');
    str += key + ' => ' + val;
  });

  if (didFirst || extras) {
    str += '\n';
  }

  str += '}';
  return str;
};

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE];
  var now = maxAge ? Date.now() : 0;
  var len = this[LENGTH_CALCULATOR](value, key);

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key));
      return false;
    }

    var node = this[CACHE].get(key);
    var item = node.value; // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking

    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value);
      }
    }

    item.now = now;
    item.maxAge = maxAge;
    item.value = value;
    this[LENGTH] += len - item.length;
    item.length = len;
    this.get(key);
    trim(this);
    return true;
  }

  var hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value);
    }

    return false;
  }

  this[LENGTH] += hit.length;
  this[LRU_LIST].unshift(hit);
  this[CACHE].set(key, this[LRU_LIST].head);
  trim(this);
  return true;
};

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false;
  var hit = this[CACHE].get(key).value;

  if (isStale(this, hit)) {
    return false;
  }

  return true;
};

LRUCache.prototype.get = function (key) {
  return get(this, key, true);
};

LRUCache.prototype.peek = function (key) {
  return get(this, key, false);
};

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail;
  if (!node) return null;
  del(this, node);
  return node.value;
};

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key));
};

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset();
  var now = Date.now(); // A previous serialized cache has the most recent items first

  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l];
    var expiresAt = hit.e || 0;

    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v);
    } else {
      var maxAge = expiresAt - now; // dont add already expired items

      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge);
      }
    }
  }
};

LRUCache.prototype.prune = function () {
  var self = this;
  this[CACHE].forEach(function (value, key) {
    get(self, key, false);
  });
};

function get(self, key, doUse) {
  var node = self[CACHE].get(key);

  if (node) {
    var hit = node.value;

    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE]) hit = undefined;
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node);
      }
    }

    if (hit) hit = hit.value;
  }

  return hit;
}

function isStale(self, hit) {
  if (!hit || !hit.maxAge && !self[MAX_AGE]) {
    return false;
  }

  var stale = false;
  var diff = Date.now() - hit.now;

  if (hit.maxAge) {
    stale = diff > hit.maxAge;
  } else {
    stale = self[MAX_AGE] && diff > self[MAX_AGE];
  }

  return stale;
}

function trim(self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
}

function del(self, node) {
  if (node) {
    var hit = node.value;

    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value);
    }

    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
} // classy, since V8 prefers predictable objects.


function Entry(key, value, length, now, maxAge) {
  this.key = key;
  this.value = value;
  this.length = length;
  this.now = now;
  this.maxAge = maxAge || 0;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/lru-cache/node_modules/yallist/yallist.js":
/*!*************************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/lru-cache/node_modules/yallist/yallist.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

/***/ }),

/***/ "../../node_modules/memoize-one/esm/index.js":
/*!********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/memoize-one/esm/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

/* harmony default export */ __webpack_exports__["default"] = (function (resultFn) {
  var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : simpleIsEqual;
  var lastThis = void 0;
  var lastArgs = [];
  var lastResult = void 0;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    lastResult = resultFn.apply(this, newArgs);
    return lastResult;
  };

  return result;
});

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!******************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/object-assign/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/process/browser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "../../node_modules/pseudomap/map.js":
/*!************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/pseudomap/map.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {if (process.env.npm_package_name === 'pseudomap' && process.env.npm_lifecycle_script === 'test') process.env.TEST_PSEUDOMAP = 'true';

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map;
} else {
  module.exports = __webpack_require__(/*! ./pseudomap */ "../../node_modules/pseudomap/pseudomap.js");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/pseudomap/pseudomap.js":
/*!******************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/pseudomap/pseudomap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty;
module.exports = PseudoMap;

function PseudoMap(set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'");
  this.clear();

  if (set) {
    if (set instanceof PseudoMap || typeof Map === 'function' && set instanceof Map) set.forEach(function (value, key) {
      this.set(key, value);
    }, this);else if (Array.isArray(set)) set.forEach(function (kv) {
      this.set(kv[0], kv[1]);
    }, this);else throw new TypeError('invalid argument');
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size') fn.call(thisp, this._data[k].value, this._data[k].key);
  }, this);
};

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k);
};

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k);
  return res && res.value;
};

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v);
};

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k);

  if (res) {
    delete this._data[res._index];
    this._data.size--;
  }
};

PseudoMap.prototype.clear = function () {
  var data = Object.create(null);
  data.size = 0;
  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  });
};

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function get() {
    return this._data.size;
  },
  set: function set(n) {},
  enumerable: true,
  configurable: true
});

PseudoMap.prototype.values = PseudoMap.prototype.keys = PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version');
}; // Either identical, or both NaN


function same(a, b) {
  return a === b || a !== a && b !== b;
}

function Entry(k, v, i) {
  this.key = k;
  this.value = v;
  this._index = i;
}

function find(data, k) {
  for (var i = 0, s = '_' + k, key = s; hasOwnProperty.call(data, key); key = s + i++) {
    if (same(data[key].key, k)) return data[key];
  }
}

function set(data, k, v) {
  for (var i = 0, s = '_' + k, key = s; hasOwnProperty.call(data, key); key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v;
      return;
    }
  }

  data.size++;
  data[key] = new Entry(k, v, key);
}

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../react-devtools-shared/src/devtools/views/root.css":
/*!***********************************************************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/raw-loader/dist/cjs.js!../react-devtools-shared/src/devtools/views/root.css ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /**\n   * IMPORTANT: When new theme variables are added below– also add them to SettingsContext updateThemeVariables()\n   */\n\n  /* Light theme */\n  --light-color-attribute-name: #ef6632;\n  --light-color-attribute-name-inverted: rgba(255, 255, 255, 0.7);\n  --light-color-attribute-value: #1a1aa6;\n  --light-color-attribute-value-inverted: #ffffff;\n  --light-color-attribute-editable-value: #1a1aa6;\n  --light-color-background: #ffffff;\n  --light-color-background-hover: rgba(0, 136, 250, 0.1);\n  --light-color-background-inactive: #e5e5e5;\n  --light-color-background-invalid: #fff0f0;\n  --light-color-background-selected: #0088fa;\n  --light-color-button-background: #ffffff;\n  --light-color-button-background-focus: #ededed;\n  --light-color-button: #5f6673;\n  --light-color-button-disabled: #cfd1d5;\n  --light-color-button-active: #0088fa;\n  --light-color-button-focus: #23272f;\n  --light-color-button-hover: #23272f;\n  --light-color-border: #eeeeee;\n  --light-color-commit-did-not-render-fill: #cfd1d5;\n  --light-color-commit-did-not-render-fill-text: #000000;\n  --light-color-commit-did-not-render-pattern: #cfd1d5;\n  --light-color-commit-did-not-render-pattern-text: #333333;\n  --light-color-commit-gradient-0: #37afa9;\n  --light-color-commit-gradient-1: #63b19e;\n  --light-color-commit-gradient-2: #80b393;\n  --light-color-commit-gradient-3: #97b488;\n  --light-color-commit-gradient-4: #abb67d;\n  --light-color-commit-gradient-5: #beb771;\n  --light-color-commit-gradient-6: #cfb965;\n  --light-color-commit-gradient-7: #dfba57;\n  --light-color-commit-gradient-8: #efbb49;\n  --light-color-commit-gradient-9: #febc38;\n  --light-color-commit-gradient-text: #000000;\n  --light-color-component-name: #6a51b2;\n  --light-color-component-name-inverted: #ffffff;\n  --light-color-component-badge-background: rgba(0, 0, 0, 0.1);\n  --light-color-component-badge-background-inverted: rgba(255, 255, 255, 0.25);\n  --light-color-component-badge-count: #777d88;\n  --light-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);\n  --light-color-context-background: rgba(0,0,0,.9);\n  --light-color-context-background-hover: rgba(255, 255, 255, 0.1);\n  --light-color-context-background-selected: #178fb9;\n  --light-color-context-border: #3d424a;\n  --light-color-context-text: #ffffff;\n  --light-color-context-text-selected: #ffffff;\n  --light-color-dim: #777d88;\n  --light-color-dimmer: #cfd1d5;\n  --light-color-dimmest: #eff0f1;\n  --light-color-expand-collapse-toggle: #777d88;\n  --light-color-modal-background: rgba(255, 255, 255, 0.75);\n  --light-color-record-active: #fc3a4b;\n  --light-color-record-hover: #3578e5;\n  --light-color-record-inactive: #0088fa;\n  --light-color-scroll-thumb: #c2c2c2;\n  --light-color-scroll-track: #fafafa;\n  --light-color-search-match: yellow;\n  --light-color-search-match-current: #f7923b;\n  --light-color-selected-tree-highlight-active: rgba(0, 136, 250, 0.1);\n  --light-color-selected-tree-highlight-inactive: rgba(0, 0, 0, 0.05);\n  --light-color-shadow: rgba(0, 0, 0, 0.25);\n  --light-color-tab-selected-border: #0088fa;\n  --light-color-text: #000000;\n  --light-color-text-invalid: #ff0000;\n  --light-color-text-selected: #ffffff;\n  --light-color-toggle-background-invalid: #fc3a4b;\n  --light-color-toggle-background-on: #0088fa;\n  --light-color-toggle-background-off: #cfd1d5;\n  --light-color-toggle-text: #ffffff;\n  --light-color-tooltip-background: rgba(0, 0, 0, 0.9);\n  --light-color-tooltip-text: #ffffff;\n\n  /* Dark theme */\n  --dark-color-attribute-name: #9d87d2;\n  --dark-color-attribute-name-inverted: #282828;\n  --dark-color-attribute-value: #cedae0;\n  --dark-color-attribute-value-inverted: #ffffff;\n  --dark-color-attribute-editable-value: yellow;\n  --dark-color-background: #282c34;\n  --dark-color-background-hover: rgba(255, 255, 255, 0.1);\n  --dark-color-background-inactive: #3d424a;\n  --dark-color-background-invalid: #5c0000;\n  --dark-color-background-selected: #178fb9;\n  --dark-color-button-background: #282c34;\n  --dark-color-button-background-focus: #3d424a;\n  --dark-color-button: #afb3b9;\n  --dark-color-button-active: #61dafb;\n  --dark-color-button-disabled: #4f5766;\n  --dark-color-button-focus: #a2e9fc;\n  --dark-color-button-hover: #ededed;\n  --dark-color-border: #3d424a;\n  --dark-color-commit-did-not-render-fill: #777d88;\n  --dark-color-commit-did-not-render-fill-text: #000000;\n  --dark-color-commit-did-not-render-pattern: #666c77;\n  --dark-color-commit-did-not-render-pattern-text: #ffffff;\n  --dark-color-commit-gradient-0: #37afa9;\n  --dark-color-commit-gradient-1: #63b19e;\n  --dark-color-commit-gradient-2: #80b393;\n  --dark-color-commit-gradient-3: #97b488;\n  --dark-color-commit-gradient-4: #abb67d;\n  --dark-color-commit-gradient-5: #beb771;\n  --dark-color-commit-gradient-6: #cfb965;\n  --dark-color-commit-gradient-7: #dfba57;\n  --dark-color-commit-gradient-8: #efbb49;\n  --dark-color-commit-gradient-9: #febc38;\n  --dark-color-commit-gradient-text: #000000;\n  --dark-color-component-name: #61dafb;\n  --dark-color-component-name-inverted: #282828;\n  --dark-color-component-badge-background: rgba(255, 255, 255, 0.25);\n  --dark-color-component-badge-background-inverted: rgba(0, 0, 0, 0.25);\n  --dark-color-component-badge-count: #8f949d;\n  --dark-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);\n  --dark-color-context-background: rgba(255,255,255,.9);\n  --dark-color-context-background-hover: rgba(0, 136, 250, 0.1);\n  --dark-color-context-background-selected: #0088fa;\n  --dark-color-context-border: #eeeeee;\n  --dark-color-context-text: #000000;\n  --dark-color-context-text-selected: #ffffff;\n  --dark-color-dim: #8f949d;\n  --dark-color-dimmer: #777d88;\n  --dark-color-dimmest: #4f5766;\n  --dark-color-expand-collapse-toggle: #8f949d;\n  --dark-color-modal-background: rgba(0, 0, 0, 0.75);\n  --dark-color-record-active: #fc3a4b;\n  --dark-color-record-hover: #a2e9fc;\n  --dark-color-record-inactive: #61dafb;\n  --dark-color-scroll-thumb: #afb3b9;\n  --dark-color-scroll-track: #313640;\n  --dark-color-search-match: yellow;\n  --dark-color-search-match-current: #f7923b;\n  --dark-color-selected-tree-highlight-active: rgba(23, 143, 185, 0.15);\n  --dark-color-selected-tree-highlight-inactive: rgba(255, 255, 255, 0.05);\n  --dark-color-shadow: rgba(0, 0, 0, 0.5);\n  --dark-color-tab-selected-border: #178fb9;\n  --dark-color-text: #ffffff;\n  --dark-color-text-invalid: #ff8080;\n  --dark-color-text-selected: #ffffff;\n  --dark-color-toggle-background-invalid: #fc3a4b;\n  --dark-color-toggle-background-on: #178fb9;\n  --dark-color-toggle-background-off: #777d88;\n  --dark-color-toggle-text: #ffffff;\n  --dark-color-tooltip-background: rgba(255, 255, 255, 0.9);\n  --dark-color-tooltip-text: #000000;\n\n  /* Font smoothing */\n  --light-font-smoothing: auto;\n  --dark-font-smoothing: antialiased;\n  --font-smoothing: auto;\n\n  /* Compact density */\n  --compact-font-size-monospace-small: 9px;\n  --compact-font-size-monospace-normal: 11px;\n  --compact-font-size-monospace-large: 15px;\n  --compact-font-size-sans-small: 10px;\n  --compact-font-size-sans-normal: 12px;\n  --compact-font-size-sans-large: 14px;\n  --compact-line-height-data: 18px;\n  --compact-root-font-size: 16px;\n\n  /* Comfortable density */\n  --comfortable-font-size-monospace-small: 10px;\n  --comfortable-font-size-monospace-normal: 13px;\n  --comfortable-font-size-monospace-large: 17px;\n  --comfortable-font-size-sans-small: 12px;\n  --comfortable-font-size-sans-normal: 14px;\n  --comfortable-font-size-sans-large: 16px;\n  --comfortable-line-height-data: 22px;\n  --comfortable-root-font-size: 20px;\n\n  /* GitHub.com system fonts */\n  --font-family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,\n    Courier, monospace;\n  --font-family-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,\n    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\n  /* Constant values shared between JS and CSS */\n  --interaction-commit-size: 10px;\n  --interaction-label-width: 200px;\n}\n\n* {\n  box-sizing: border-box;\n\n  -webkit-font-smoothing: var(--font-smoothing);\n}\n");

/***/ }),

/***/ "../../node_modules/semver/semver.js":
/*!************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/semver/semver.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports = module.exports = SemVer;
var debug;
/* istanbul ignore next */

if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function debug() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('SEMVER');
    console.log.apply(console, args);
  };
} else {
  debug = function debug() {};
} // Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.


exports.SEMVER_SPEC_VERSION = '2.0.0';
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

var re = exports.re = [];
var src = exports.src = [];
var R = 0; // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'; // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
src[FULL] = '^' + FULLPLAIN + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';
var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'; // Coercion.
// Extract anything that could conceivably be a part of a valid semver

var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])'; // Tilde ranges.
// Meaning is "reasonably at or greater than"

var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';
var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';
var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'; // Caret ranges.
// Meaning is "at least and backwards compatible with"

var LONECARET = R++;
src[LONECARET] = '(?:\\^)';
var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';
var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'; // this one has to use the /g flag

re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.

for (var i = 0; i < R; i++) {
  debug(i, src[i]);

  if (!re[i]) {
    re[i] = new RegExp(src[i]);
  }
}

exports.parse = parse;

function parse(version, options) {
  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH) {
    return null;
  }

  var r = options.loose ? re[LOOSE] : re[FULL];

  if (!r.test(version)) {
    return null;
  }

  try {
    return new SemVer(version, options);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;

function valid(version, options) {
  var v = parse(version, options);
  return v ? v.version : null;
}

exports.clean = clean;

function clean(version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, options) {
  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version;
    } else {
      version = version.version;
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options);
  }

  debug('SemVer', version, options);
  this.options = options;
  this.loose = !!options.loose;
  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);

  if (!m) {
    throw new TypeError('Invalid Version: ' + version);
  }

  this.raw = version; // these are actually numbers

  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version');
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version');
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version');
  } // numberify any prerelease numeric ids


  if (!m[4]) {
    this.prerelease = [];
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;

        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num;
        }
      }

      return id;
    });
  }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch;

  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.');
  }

  return this.version;
};

SemVer.prototype.toString = function () {
  return this.version;
};

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other);

  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  } // NOT having a prerelease is > having one


  if (this.prerelease.length && !other.prerelease.length) {
    return -1;
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1;
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0;
  }

  var i = 0;

  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);

    if (a === undefined && b === undefined) {
      return 0;
    } else if (b === undefined) {
      return 1;
    } else if (a === undefined) {
      return -1;
    } else if (a === b) {
      continue;
    } else {
      return compareIdentifiers(a, b);
    }
  } while (++i);
}; // preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.


SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;

    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;

    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.

    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier);
      }

      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
        this.major++;
      }

      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;

    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++;
      }

      this.patch = 0;
      this.prerelease = [];
      break;

    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++;
      }

      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0];
      } else {
        var i = this.prerelease.length;

        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }

        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0);
        }
      }

      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0];
          }
        } else {
          this.prerelease = [identifier, 0];
        }
      }

      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }

  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;

function inc(version, release, loose, identifier) {
  if (typeof loose === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;

function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    var prefix = '';

    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre';
      var defaultResult = 'prerelease';
    }

    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }

    return defaultResult; // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers;
var numeric = /^[0-9]+$/;

function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
}

exports.rcompareIdentifiers = rcompareIdentifiers;

function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;

function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;

function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;

function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;

function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;

function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;

function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;

function sort(list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;

function rsort(list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;

function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;

function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;

function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;

function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;

function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;

function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;

function cmp(a, op, b, loose) {
  switch (op) {
    case '===':
      if (_typeof(a) === 'object') a = a.version;
      if (_typeof(b) === 'object') b = b.version;
      return a === b;

    case '!==':
      if (_typeof(a) === 'object') a = a.version;
      if (_typeof(b) === 'object') b = b.version;
      return a !== b;

    case '':
    case '=':
    case '==':
      return eq(a, b, loose);

    case '!=':
      return neq(a, b, loose);

    case '>':
      return gt(a, b, loose);

    case '>=':
      return gte(a, b, loose);

    case '<':
      return lt(a, b, loose);

    case '<=':
      return lte(a, b, loose);

    default:
      throw new TypeError('Invalid operator: ' + op);
  }
}

exports.Comparator = Comparator;

function Comparator(comp, options) {
  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp;
    } else {
      comp = comp.value;
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options);
  }

  debug('comparator', comp, options);
  this.options = options;
  this.loose = !!options.loose;
  this.parse(comp);

  if (this.semver === ANY) {
    this.value = '';
  } else {
    this.value = this.operator + this.semver.version;
  }

  debug('comp', this);
}

var ANY = {};

Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp);
  }

  this.operator = m[1];

  if (this.operator === '=') {
    this.operator = '';
  } // if it literally is just '>' or '' then allow anything.


  if (!m[2]) {
    this.semver = ANY;
  } else {
    this.semver = new SemVer(m[2], this.options.loose);
  }
};

Comparator.prototype.toString = function () {
  return this.value;
};

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose);

  if (this.semver === ANY) {
    return true;
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options);
  }

  return cmp(version, this.operator, this.semver, this.options);
};

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options);
    return satisfies(this.value, rangeTmp, options);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options);
    return satisfies(comp.semver, rangeTmp, options);
  }

  var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
  var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
  return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};

exports.Range = Range;

function Range(range, options) {
  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
      return range;
    } else {
      return new Range(range.raw, options);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options);
  }

  if (!(this instanceof Range)) {
    return new Range(range, options);
  }

  this.options = options;
  this.loose = !!options.loose;
  this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim());
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function () {
  return this.range;
};

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose;
  range = range.trim(); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

  range = range.replace(re[TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

  range = range.replace(re[CARETTRIM], caretTrimReplace); // normalize spaces

  range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options);
  }, this).join(' ').split(/\s+/);

  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe);
    });
  }

  set = set.map(function (comp) {
    return new Comparator(comp, this.options);
  }, this);
  return set;
};

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options);
        });
      });
    });
  });
}; // Mostly just for testing and legacy API reasons


exports.toComparators = toComparators;

function toComparators(range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
} // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


function parseComparator(comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
} // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


function replaceTildes(comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options);
  }).join(' ');
}

function replaceTilde(comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    } else if (pr) {
      debug('replaceTilde pr', pr);
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
    }

    debug('tilde return', ret);
    return ret;
  });
} // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0


function replaceCarets(comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options);
  }).join(' ');
}

function replaceCaret(comp, options) {
  debug('caret', comp, options);
  var r = options.loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
      }
    } else if (pr) {
      debug('replaceCaret pr', pr);

      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
      }
    } else {
      debug('no pr');

      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
      }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options);
  }).join(' ');
}

function replaceXRange(comp, options) {
  comp = comp.trim();
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }

      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';

        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);
    return ret;
  });
} // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


function replaceStars(comp, options) {
  debug('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re[STAR], '');
} // This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0


function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = '';
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0';
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0';
  } else {
    from = '>=' + from;
  }

  if (isX(tM)) {
    to = '';
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0';
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  } else {
    to = '<=' + to;
  }

  return (from + ' ' + to).trim();
} // if ANY of the sets match ALL of its comparators, then pass


Range.prototype.test = function (version) {
  if (!version) {
    return false;
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options);
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true;
    }
  }

  return false;
};

function testSet(set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver);

      if (set[i].semver === ANY) {
        continue;
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;

        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
}

exports.satisfies = satisfies;

function satisfies(version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }

  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;

function maxSatisfying(versions, range, options) {
  var max = null;
  var maxSV = null;

  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  });
  return max;
}

exports.minSatisfying = minSatisfying;

function minSatisfying(versions, range, options) {
  var min = null;
  var minSV = null;

  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  });
  return min;
}

exports.minVersion = minVersion;

function minVersion(range, loose) {
  range = new Range(range, loose);
  var minver = new SemVer('0.0.0');

  if (range.test(minver)) {
    return minver;
  }

  minver = new SemVer('0.0.0-0');

  if (range.test(minver)) {
    return minver;
  }

  minver = null;

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];
    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version);

      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }

          compver.raw = compver.format();

        /* fallthrough */

        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver;
          }

          break;

        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;

        /* istanbul ignore next */

        default:
          throw new Error('Unexpected operation: ' + comparator.operator);
      }
    });
  }

  if (minver && range.test(minver)) {
    return minver;
  }

  return null;
}

exports.validRange = validRange;

function validRange(range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*';
  } catch (er) {
    return null;
  }
} // Determine if version is less than all the versions possible in the range


exports.ltr = ltr;

function ltr(version, range, options) {
  return outside(version, range, '<', options);
} // Determine if version is greater than all the versions possible in the range.


exports.gtr = gtr;

function gtr(version, range, options) {
  return outside(version, range, '>', options);
}

exports.outside = outside;

function outside(version, range, hilo, options) {
  version = new SemVer(version, options);
  range = new Range(range, options);
  var gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisifes the range it is not outside


  if (satisfies(version, range, options)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];
    var high = null;
    var low = null;
    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }

      high = high || comparator;
      low = low || comparator;

      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return false;
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }

  return true;
}

exports.prerelease = prerelease;

function prerelease(version, options) {
  var parsed = parse(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}

exports.intersects = intersects;

function intersects(r1, r2, options) {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2);
}

exports.coerce = coerce;

function coerce(version) {
  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  var match = version.match(re[COERCE]);

  if (match == null) {
    return null;
  }

  return parse(match[1] + '.' + (match[2] || '0') + '.' + (match[3] || '0'));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/setimmediate/setImmediate.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/stackframe/stackframe.js":
/*!********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/stackframe/stackframe.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (obj instanceof Object) {
      for (var i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function getArgs() {
      return this.args;
    },
    setArgs: function setArgs(v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function getEvalOrigin() {
      return this.evalOrigin;
    },
    setEvalOrigin: function setEvalOrigin(v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function toString() {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

/***/ }),

/***/ "../../node_modules/type/function/is.js":
/*!***************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/type/function/is.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "../../node_modules/type/prototype/is.js");

module.exports = function (value) {
  if (typeof value !== "function") return false;
  if (!hasOwnProperty.call(value, "length")) return false;

  try {
    if (typeof value.length !== "number") return false;
    if (typeof value.call !== "function") return false;
    if (typeof value.apply !== "function") return false;
  } catch (error) {
    return false;
  }

  return !isPrototype(value);
};

/***/ }),

/***/ "../../node_modules/type/object/is.js":
/*!*************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/type/object/is.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isValue = __webpack_require__(/*! ../value/is */ "../../node_modules/type/value/is.js"); // prettier-ignore


var possibleTypes = {
  "object": true,
  "function": true,
  "undefined": true
  /* document.all */

};

module.exports = function (value) {
  if (!isValue(value)) return false;
  return hasOwnProperty.call(possibleTypes, _typeof(value));
};

/***/ }),

/***/ "../../node_modules/type/plain-function/is.js":
/*!*********************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/type/plain-function/is.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "../../node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

module.exports = function (value) {
  if (!isFunction(value)) return false;
  if (classRe.test(functionToString.call(value))) return false;
  return true;
};

/***/ }),

/***/ "../../node_modules/type/prototype/is.js":
/*!****************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/type/prototype/is.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "../../node_modules/type/object/is.js");

module.exports = function (value) {
  if (!isObject(value)) return false;

  try {
    if (!value.constructor) return false;
    return value.constructor.prototype === value;
  } catch (error) {
    return false;
  }
};

/***/ }),

/***/ "../../node_modules/type/value/is.js":
/*!************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/type/value/is.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ES3 safe

var _undefined = void 0;

module.exports = function (value) {
  return value !== _undefined && value !== null;
};

/***/ }),

/***/ "../../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!******************************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!***************************************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/util/support/isBufferBrowser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isBuffer(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!********************************************************************!*\
  !*** /Users/bvaughn/Documents/git/react/node_modules/util/util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function cb() {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../../node_modules/webpack/node_modules/timers-browserify/main.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/timers-browserify/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../react-debug-tools/index.js":
/*!*************************************!*\
  !*** ../react-debug-tools/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactDebugTools = __webpack_require__(/*! ./src/ReactDebugTools */ "../react-debug-tools/src/ReactDebugTools.js"); // This is hacky but makes it work with both Rollup and Jest.


module.exports = ReactDebugTools.default || ReactDebugTools;

/***/ }),

/***/ "../react-debug-tools/src/ReactDebugHooks.js":
/*!***************************************************!*\
  !*** ../react-debug-tools/src/ReactDebugHooks.js ***!
  \***************************************************/
/*! exports provided: inspectHooks, inspectHooksOfFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooks", function() { return inspectHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooksOfFiber", function() { return inspectHooksOfFiber; });
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ "../../node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ReactSharedInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ReactSharedInternals */ "../shared/ReactSharedInternals.js");
/* harmony import */ var shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ReactWorkTags */ "../shared/ReactWorkTags.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var hookLog = []; // Primitives

var primitiveStackCache = null;

function getPrimitiveStackCache() {
  // This initializes a cache of all primitive hooks so that the top
  // most stack frames added by calling the primitive hook can be removed.
  if (primitiveStackCache === null) {
    var cache = new Map();
    var readHookLog;

    try {
      // Use all hooks here to add them to the hook log.
      Dispatcher.useContext({
        _currentValue: null
      });
      Dispatcher.useState(null);
      Dispatcher.useReducer(function (s, a) {
        return s;
      }, null);
      Dispatcher.useRef(null);
      Dispatcher.useLayoutEffect(function () {});
      Dispatcher.useEffect(function () {});
      Dispatcher.useImperativeHandle(undefined, function () {
        return null;
      });
      Dispatcher.useDebugValue(null);
      Dispatcher.useCallback(function () {});
      Dispatcher.useMemo(function () {
        return null;
      });
    } finally {
      readHookLog = hookLog;
      hookLog = [];
    }

    for (var i = 0; i < readHookLog.length; i++) {
      var hook = readHookLog[i];
      cache.set(hook.primitive, error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError));
    }

    primitiveStackCache = cache;
  }

  return primitiveStackCache;
}

var currentHook = null;

function nextHook() {
  var hook = currentHook;

  if (hook !== null) {
    currentHook = hook.next;
  }

  return hook;
}

function readContext(context, observedBits) {
  // For now we don't expose readContext usage in the hooks debugging info.
  return context._currentValue;
}

function useContext(context, observedBits) {
  hookLog.push({
    primitive: 'Context',
    stackError: new Error(),
    value: context._currentValue
  });
  return context._currentValue;
}

function useState(initialState) {
  var hook = nextHook();
  var state = hook !== null ? hook.memoizedState : typeof initialState === 'function' ? initialState() : initialState;
  hookLog.push({
    primitive: 'State',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useReducer(reducer, initialArg, init) {
  var hook = nextHook();
  var state;

  if (hook !== null) {
    state = hook.memoizedState;
  } else {
    state = init !== undefined ? init(initialArg) : initialArg;
  }

  hookLog.push({
    primitive: 'Reducer',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useRef(initialValue) {
  var hook = nextHook();
  var ref = hook !== null ? hook.memoizedState : {
    current: initialValue
  };
  hookLog.push({
    primitive: 'Ref',
    stackError: new Error(),
    value: ref.current
  });
  return ref;
}

function useLayoutEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'LayoutEffect',
    stackError: new Error(),
    value: create
  });
}

function useEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'Effect',
    stackError: new Error(),
    value: create
  });
}

function useImperativeHandle(ref, create, inputs) {
  nextHook(); // We don't actually store the instance anywhere if there is no ref callback
  // and if there is a ref callback it might not store it but if it does we
  // have no way of knowing where. So let's only enable introspection of the
  // ref itself if it is using the object form.

  var instance = undefined;

  if (ref !== null && _typeof(ref) === 'object') {
    instance = ref.current;
  }

  hookLog.push({
    primitive: 'ImperativeHandle',
    stackError: new Error(),
    value: instance
  });
}

function useDebugValue(value, formatterFn) {
  hookLog.push({
    primitive: 'DebugValue',
    stackError: new Error(),
    value: typeof formatterFn === 'function' ? formatterFn(value) : value
  });
}

function useCallback(callback, inputs) {
  var hook = nextHook();
  hookLog.push({
    primitive: 'Callback',
    stackError: new Error(),
    value: hook !== null ? hook.memoizedState[0] : callback
  });
  return callback;
}

function useMemo(nextCreate, inputs) {
  var hook = nextHook();
  var value = hook !== null ? hook.memoizedState[0] : nextCreate();
  hookLog.push({
    primitive: 'Memo',
    stackError: new Error(),
    value: value
  });
  return value;
}

function useResponder(responder, listenerProps) {
  // Don't put the actual event responder object in, just its displayName
  var value = {
    responder: responder.displayName || 'EventResponder',
    props: listenerProps
  };
  hookLog.push({
    primitive: 'Responder',
    stackError: new Error(),
    value: value
  });
  return {
    responder: responder,
    props: listenerProps
  };
}

function useTransition(config) {
  nextHook();
  hookLog.push({
    primitive: 'Transition',
    stackError: new Error(),
    value: config
  });
  return [function (callback) {}, false];
}

function useDeferredValue(value, config) {
  nextHook();
  hookLog.push({
    primitive: 'DeferredValue',
    stackError: new Error(),
    value: value
  });
  return value;
}

var Dispatcher = {
  readContext: readContext,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useResponder: useResponder,
  useTransition: useTransition,
  useDeferredValue: useDeferredValue
}; // Inspect

// Don't assume
//
// We can't assume that stack frames are nth steps away from anything.
// E.g. we can't assume that the root call shares all frames with the stack
// of a hook call. A simple way to demonstrate this is wrapping `new Error()`
// in a wrapper constructor like a polyfill. That'll add an extra frame.
// Similar things can happen with the call to the dispatcher. The top frame
// may not be the primitive. Likewise the primitive can have fewer stack frames
// such as when a call to useState got inlined to use dispatcher.useState.
//
// We also can't assume that the last frame of the root call is the same
// frame as the last frame of the hook call because long stack traces can be
// truncated to a stack trace limit.
var mostLikelyAncestorIndex = 0;

function findSharedIndex(hookStack, rootStack, rootIndex) {
  var source = rootStack[rootIndex].source;

  hookSearch: for (var i = 0; i < hookStack.length; i++) {
    if (hookStack[i].source === source) {
      // This looks like a match. Validate that the rest of both stack match up.
      for (var a = rootIndex + 1, b = i + 1; a < rootStack.length && b < hookStack.length; a++, b++) {
        if (hookStack[b].source !== rootStack[a].source) {
          // If not, give up and try a different match.
          continue hookSearch;
        }
      }

      return i;
    }
  }

  return -1;
}

function findCommonAncestorIndex(rootStack, hookStack) {
  var rootIndex = findSharedIndex(hookStack, rootStack, mostLikelyAncestorIndex);

  if (rootIndex !== -1) {
    return rootIndex;
  } // If the most likely one wasn't a hit, try any other frame to see if it is shared.
  // If that takes more than 5 frames, something probably went wrong.


  for (var i = 0; i < rootStack.length && i < 5; i++) {
    rootIndex = findSharedIndex(hookStack, rootStack, i);

    if (rootIndex !== -1) {
      mostLikelyAncestorIndex = i;
      return rootIndex;
    }
  }

  return -1;
}

function isReactWrapper(functionName, primitiveName) {
  if (!functionName) {
    return false;
  }

  var expectedPrimitiveName = 'use' + primitiveName;

  if (functionName.length < expectedPrimitiveName.length) {
    return false;
  }

  return functionName.lastIndexOf(expectedPrimitiveName) === functionName.length - expectedPrimitiveName.length;
}

function findPrimitiveIndex(hookStack, hook) {
  var stackCache = getPrimitiveStackCache();
  var primitiveStack = stackCache.get(hook.primitive);

  if (primitiveStack === undefined) {
    return -1;
  }

  for (var i = 0; i < primitiveStack.length && i < hookStack.length; i++) {
    if (primitiveStack[i].source !== hookStack[i].source) {
      // If the next two frames are functions called `useX` then we assume that they're part of the
      // wrappers that the React packager or other packages adds around the dispatcher.
      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      return i;
    }
  }

  return -1;
}

function parseTrimmedStack(rootStack, hook) {
  // Get the stack trace between the primitive hook function and
  // the root function call. I.e. the stack frames of custom hooks.
  var hookStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError);
  var rootIndex = findCommonAncestorIndex(rootStack, hookStack);
  var primitiveIndex = findPrimitiveIndex(hookStack, hook);

  if (rootIndex === -1 || primitiveIndex === -1 || rootIndex - primitiveIndex < 2) {
    // Something went wrong. Give up.
    return null;
  }

  return hookStack.slice(primitiveIndex, rootIndex - 1);
}

function parseCustomHookName(functionName) {
  if (!functionName) {
    return '';
  }

  var startIndex = functionName.lastIndexOf('.');

  if (startIndex === -1) {
    startIndex = 0;
  }

  if (functionName.substr(startIndex, 3) === 'use') {
    startIndex += 3;
  }

  return functionName.substr(startIndex);
}

function buildTree(rootStack, readHookLog) {
  var rootChildren = [];
  var prevStack = null;
  var levelChildren = rootChildren;
  var nativeHookID = 0;
  var stackOfChildren = [];

  for (var i = 0; i < readHookLog.length; i++) {
    var hook = readHookLog[i];
    var stack = parseTrimmedStack(rootStack, hook);

    if (stack !== null) {
      // Note: The indices 0 <= n < length-1 will contain the names.
      // The indices 1 <= n < length will contain the source locations.
      // That's why we get the name from n - 1 and don't check the source
      // of index 0.
      var commonSteps = 0;

      if (prevStack !== null) {
        // Compare the current level's stack to the new stack.
        while (commonSteps < stack.length && commonSteps < prevStack.length) {
          var stackSource = stack[stack.length - commonSteps - 1].source;
          var prevSource = prevStack[prevStack.length - commonSteps - 1].source;

          if (stackSource !== prevSource) {
            break;
          }

          commonSteps++;
        } // Pop back the stack as many steps as were not common.


        for (var j = prevStack.length - 1; j > commonSteps; j--) {
          levelChildren = stackOfChildren.pop();
        }
      } // The remaining part of the new stack are custom hooks. Push them
      // to the tree.


      for (var _j = stack.length - commonSteps - 1; _j >= 1; _j--) {
        var children = [];
        levelChildren.push({
          id: null,
          isStateEditable: false,
          name: parseCustomHookName(stack[_j - 1].functionName),
          value: undefined,
          subHooks: children
        });
        stackOfChildren.push(levelChildren);
        levelChildren = children;
      }

      prevStack = stack;
    }

    var primitive = hook.primitive; // For now, the "id" of stateful hooks is just the stateful hook index.
    // Custom hooks have no ids, nor do non-stateful native hooks (e.g. Context, DebugValue).

    var id = primitive === 'Context' || primitive === 'DebugValue' ? null : nativeHookID++; // For the time being, only State and Reducer hooks support runtime overrides.

    var isStateEditable = primitive === 'Reducer' || primitive === 'State';
    levelChildren.push({
      id: id,
      isStateEditable: isStateEditable,
      name: primitive,
      value: hook.value,
      subHooks: []
    });
  } // Associate custom hook values (useDebugValue() hook entries) with the correct hooks.


  processDebugValues(rootChildren, null);
  return rootChildren;
} // Custom hooks support user-configurable labels (via the special useDebugValue() hook).
// That hook adds user-provided values to the hooks tree,
// but these values aren't intended to appear alongside of the other hooks.
// Instead they should be attributed to their parent custom hook.
// This method walks the tree and assigns debug values to their custom hook owners.


function processDebugValues(hooksTree, parentHooksNode) {
  var debugValueHooksNodes = [];

  for (var i = 0; i < hooksTree.length; i++) {
    var hooksNode = hooksTree[i];

    if (hooksNode.name === 'DebugValue' && hooksNode.subHooks.length === 0) {
      hooksTree.splice(i, 1);
      i--;
      debugValueHooksNodes.push(hooksNode);
    } else {
      processDebugValues(hooksNode.subHooks, hooksNode);
    }
  } // Bubble debug value labels to their custom hook owner.
  // If there is no parent hook, just ignore them for now.
  // (We may warn about this in the future.)


  if (parentHooksNode !== null) {
    if (debugValueHooksNodes.length === 1) {
      parentHooksNode.value = debugValueHooksNodes[0].value;
    } else if (debugValueHooksNodes.length > 1) {
      parentHooksNode.value = debugValueHooksNodes.map(function (_ref) {
        var value = _ref.value;
        return value;
      });
    }
  }
}

function inspectHooks(renderFunction, props, currentDispatcher) {
  // DevTools will pass the current renderer's injected dispatcher.
  // Other apps might compile debug hooks as part of their app though.
  if (currentDispatcher == null) {
    currentDispatcher = shared_ReactSharedInternals__WEBPACK_IMPORTED_MODULE_1__["default"].ReactCurrentDispatcher;
  }

  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function setupContexts(contextMap, fiber) {
  var current = fiber;

  while (current) {
    if (current.tag === shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]) {
      var providerType = current.type;
      var context = providerType._context;

      if (!contextMap.has(context)) {
        // Store the current value that we're going to restore later.
        contextMap.set(context, context._currentValue); // Set the inner most provider value on the context.

        context._currentValue = current.memoizedProps.value;
      }
    }

    current = current.return;
  }
}

function restoreContexts(contextMap) {
  contextMap.forEach(function (value, context) {
    return context._currentValue = value;
  });
}

function inspectHooksOfForwardRef(renderFunction, props, ref, currentDispatcher) {
  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props, ref);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = Object.assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function inspectHooksOfFiber(fiber, currentDispatcher) {
  // DevTools will pass the current renderer's injected dispatcher.
  // Other apps might compile debug hooks as part of their app though.
  if (currentDispatcher == null) {
    currentDispatcher = shared_ReactSharedInternals__WEBPACK_IMPORTED_MODULE_1__["default"].ReactCurrentDispatcher;
  }

  if (fiber.tag !== shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["FunctionComponent"] && fiber.tag !== shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["SimpleMemoComponent"] && fiber.tag !== shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["ForwardRef"] && fiber.tag !== shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["Chunk"]) {
    throw new Error('Unknown Fiber. Needs to be a function component to inspect hooks.');
  } // Warm up the cache so that it doesn't consume the currentHook.


  getPrimitiveStackCache();
  var type = fiber.type;
  var props = fiber.memoizedProps;

  if (type !== fiber.elementType) {
    props = resolveDefaultProps(type, props);
  } // Set up the current hook so that we can step through and read the
  // current state from them.


  currentHook = fiber.memoizedState;
  var contextMap = new Map();

  try {
    setupContexts(contextMap, fiber);

    if (fiber.tag === shared_ReactWorkTags__WEBPACK_IMPORTED_MODULE_2__["ForwardRef"]) {
      return inspectHooksOfForwardRef(type.render, props, fiber.ref, currentDispatcher);
    }

    return inspectHooks(type, props, currentDispatcher);
  } finally {
    currentHook = null;
    restoreContexts(contextMap);
  }
}

/***/ }),

/***/ "../react-debug-tools/src/ReactDebugTools.js":
/*!***************************************************!*\
  !*** ../react-debug-tools/src/ReactDebugTools.js ***!
  \***************************************************/
/*! exports provided: inspectHooks, inspectHooksOfFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactDebugHooks */ "../react-debug-tools/src/ReactDebugHooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inspectHooks", function() { return _ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__["inspectHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inspectHooksOfFiber", function() { return _ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__["inspectHooksOfFiber"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/***/ }),

/***/ "../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js":
/*!*********************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveBoxStyle; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * This mirrors react-native/Libraries/Inspector/resolveBoxStyle.js (but without RTL support).
 *
 * Resolve a style property into it's component parts, e.g.
 *
 * resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
 * -> {top: 5, left: 5, right: 5, bottom: 10}
 */
function resolveBoxStyle(prefix, style) {
  var hasParts = false;
  var result = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  };
  var styleForAll = style[prefix];

  if (styleForAll != null) {
    // eslint-disable-next-line no-for-of-loops/no-for-of-loops
    for (var _i = 0, _Object$keys = Object.keys(result); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      result[key] = styleForAll;
    }

    hasParts = true;
  }

  var styleForHorizontal = style[prefix + 'Horizontal'];

  if (styleForHorizontal != null) {
    result.left = styleForHorizontal;
    result.right = styleForHorizontal;
    hasParts = true;
  } else {
    var styleForLeft = style[prefix + 'Left'];

    if (styleForLeft != null) {
      result.left = styleForLeft;
      hasParts = true;
    }

    var styleForRight = style[prefix + 'Right'];

    if (styleForRight != null) {
      result.right = styleForRight;
      hasParts = true;
    }

    var styleForEnd = style[prefix + 'End'];

    if (styleForEnd != null) {
      // TODO RTL support
      result.right = styleForEnd;
      hasParts = true;
    }

    var styleForStart = style[prefix + 'Start'];

    if (styleForStart != null) {
      // TODO RTL support
      result.left = styleForStart;
      hasParts = true;
    }
  }

  var styleForVertical = style[prefix + 'Vertical'];

  if (styleForVertical != null) {
    result.bottom = styleForVertical;
    result.top = styleForVertical;
    hasParts = true;
  } else {
    var styleForBottom = style[prefix + 'Bottom'];

    if (styleForBottom != null) {
      result.bottom = styleForBottom;
      hasParts = true;
    }

    var styleForTop = style[prefix + 'Top'];

    if (styleForTop != null) {
      result.top = styleForTop;
      hasParts = true;
    }
  }

  return hasParts ? result : null;
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js":
/*!****************************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupNativeStyleEditor; });
/* harmony import */ var react_devtools_shared_src_backend_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-devtools-shared/src/backend/agent */ "../react-devtools-shared/src/backend/agent.js");
/* harmony import */ var _resolveBoxStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveBoxStyle */ "../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function setupNativeStyleEditor(bridge, agent, resolveNativeStyle, validAttributes) {
  bridge.addListener('NativeStyleEditor_measure', function (_ref) {
    var id = _ref.id,
        rendererID = _ref.rendererID;
    measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
  });
  bridge.addListener('NativeStyleEditor_renameAttribute', function (_ref2) {
    var id = _ref2.id,
        rendererID = _ref2.rendererID,
        oldName = _ref2.oldName,
        newName = _ref2.newName,
        value = _ref2.value;
    renameStyle(agent, id, rendererID, oldName, newName, value);
    setTimeout(function () {
      return measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
    });
  });
  bridge.addListener('NativeStyleEditor_setValue', function (_ref3) {
    var id = _ref3.id,
        rendererID = _ref3.rendererID,
        name = _ref3.name,
        value = _ref3.value;
    setStyle(agent, id, rendererID, name, value);
    setTimeout(function () {
      return measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
    });
  });
  bridge.send('isNativeStyleEditorSupported', {
    isSupported: true,
    validAttributes: validAttributes
  });
}
var EMPTY_BOX_STYLE = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var componentIDToStyleOverrides = new Map();

function measureStyle(agent, bridge, resolveNativeStyle, id, rendererID) {
  var data = agent.getInstanceAndStyle({
    id: id,
    rendererID: rendererID
  });

  if (!data || !data.style) {
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id: id,
      layout: null,
      style: null
    });
    return;
  }

  var instance = data.instance,
      style = data.style;
  var resolvedStyle = resolveNativeStyle(style); // If it's a host component we edited before, amend styles.

  var styleOverrides = componentIDToStyleOverrides.get(id);

  if (styleOverrides != null) {
    resolvedStyle = Object.assign({}, resolvedStyle, styleOverrides);
  }

  if (!instance || typeof instance.measure !== 'function') {
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id: id,
      layout: null,
      style: resolvedStyle || null
    });
    return;
  } // $FlowFixMe the parameter types of an unknown function are unknown


  instance.measure(function (x, y, width, height, left, top) {
    // RN Android sometimes returns undefined here. Don't send measurements in this case.
    // https://github.com/jhen0409/react-native-debugger/issues/84#issuecomment-304611817
    if (typeof x !== 'number') {
      bridge.send('NativeStyleEditor_styleAndLayout', {
        id: id,
        layout: null,
        style: resolvedStyle || null
      });
      return;
    }

    var margin = resolvedStyle != null && Object(_resolveBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"])('margin', resolvedStyle) || EMPTY_BOX_STYLE;
    var padding = resolvedStyle != null && Object(_resolveBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"])('padding', resolvedStyle) || EMPTY_BOX_STYLE;
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id: id,
      layout: {
        x: x,
        y: y,
        width: width,
        height: height,
        left: left,
        top: top,
        margin: margin,
        padding: padding
      },
      style: resolvedStyle || null
    });
  });
}

function shallowClone(object) {
  var cloned = {};

  for (var n in object) {
    cloned[n] = object[n];
  }

  return cloned;
}

function renameStyle(agent, id, rendererID, oldName, newName, value) {
  var _ref4;

  var data = agent.getInstanceAndStyle({
    id: id,
    rendererID: rendererID
  });

  if (!data || !data.style) {
    return;
  }

  var instance = data.instance,
      style = data.style;
  var newStyle = newName ? (_ref4 = {}, _defineProperty(_ref4, oldName, undefined), _defineProperty(_ref4, newName, value), _ref4) : _defineProperty({}, oldName, undefined);
  var customStyle; // TODO It would be nice if the renderer interface abstracted this away somehow.

  if (instance !== null && typeof instance.setNativeProps === 'function') {
    // In the case of a host component, we need to use setNativeProps().
    // Remember to "correct" resolved styles when we read them next time.
    var styleOverrides = componentIDToStyleOverrides.get(id);

    if (!styleOverrides) {
      componentIDToStyleOverrides.set(id, newStyle);
    } else {
      Object.assign(styleOverrides, newStyle);
    } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli


    instance.setNativeProps({
      style: newStyle
    });
  } else if (Array.isArray(style)) {
    var lastIndex = style.length - 1;

    if (_typeof(style[lastIndex]) === 'object' && !Array.isArray(style[lastIndex])) {
      customStyle = shallowClone(style[lastIndex]);
      delete customStyle[oldName];

      if (newName) {
        customStyle[newName] = value;
      } else {
        customStyle[oldName] = undefined;
      }

      agent.overrideProps({
        id: id,
        rendererID: rendererID,
        path: ['style', lastIndex],
        value: customStyle
      });
    } else {
      agent.overrideProps({
        id: id,
        rendererID: rendererID,
        path: ['style'],
        value: style.concat([newStyle])
      });
    }
  } else if (_typeof(style) === 'object') {
    customStyle = shallowClone(style);
    delete customStyle[oldName];

    if (newName) {
      customStyle[newName] = value;
    } else {
      customStyle[oldName] = undefined;
    }

    agent.overrideProps({
      id: id,
      rendererID: rendererID,
      path: ['style'],
      value: customStyle
    });
  } else {
    agent.overrideProps({
      id: id,
      rendererID: rendererID,
      path: ['style'],
      value: [style, newStyle]
    });
  }

  agent.emit('hideNativeHighlight');
}

function setStyle(agent, id, rendererID, name, value) {
  var data = agent.getInstanceAndStyle({
    id: id,
    rendererID: rendererID
  });

  if (!data || !data.style) {
    return;
  }

  var instance = data.instance,
      style = data.style;

  var newStyle = _defineProperty({}, name, value); // TODO It would be nice if the renderer interface abstracted this away somehow.


  if (instance !== null && typeof instance.setNativeProps === 'function') {
    // In the case of a host component, we need to use setNativeProps().
    // Remember to "correct" resolved styles when we read them next time.
    var styleOverrides = componentIDToStyleOverrides.get(id);

    if (!styleOverrides) {
      componentIDToStyleOverrides.set(id, newStyle);
    } else {
      Object.assign(styleOverrides, newStyle);
    } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli


    instance.setNativeProps({
      style: newStyle
    });
  } else if (Array.isArray(style)) {
    var lastLength = style.length - 1;

    if (_typeof(style[lastLength]) === 'object' && !Array.isArray(style[lastLength])) {
      agent.overrideProps({
        id: id,
        rendererID: rendererID,
        path: ['style', lastLength, name],
        value: value
      });
    } else {
      agent.overrideProps({
        id: id,
        rendererID: rendererID,
        path: ['style'],
        value: style.concat([newStyle])
      });
    }
  } else {
    agent.overrideProps({
      id: id,
      rendererID: rendererID,
      path: ['style'],
      value: [style, newStyle]
    });
  }

  agent.emit('hideNativeHighlight');
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/agent.js":
/*!*****************************************************!*\
  !*** ../react-devtools-shared/src/backend/agent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Agent; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "../../node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../react-devtools-shared/src/constants.js");
/* harmony import */ var react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-devtools-shared/src/storage */ "../react-devtools-shared/src/storage.js");
/* harmony import */ var _views_Highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/Highlighter */ "../react-devtools-shared/src/backend/views/Highlighter/index.js");
/* harmony import */ var _views_TraceUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/TraceUpdates */ "../react-devtools-shared/src/backend/views/TraceUpdates/index.js");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./console */ "../react-devtools-shared/src/backend/console.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








var debug = function debug(methodName) {
  if (_constants__WEBPACK_IMPORTED_MODULE_2__["__DEBUG__"]) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console).log.apply(_console, ["%cAgent %c".concat(methodName), 'color: purple; font-weight: bold;', 'font-weight: bold;'].concat(args));
  }
};

var Agent =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Agent, _EventEmitter);

  function Agent(bridge) {
    var _this;

    _classCallCheck(this, Agent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Agent).call(this));

    _defineProperty(_assertThisInitialized(_this), "_isProfiling", false);

    _defineProperty(_assertThisInitialized(_this), "_recordChangeDescriptions", false);

    _defineProperty(_assertThisInitialized(_this), "_rendererInterfaces", {});

    _defineProperty(_assertThisInitialized(_this), "_persistedSelection", null);

    _defineProperty(_assertThisInitialized(_this), "_persistedSelectionMatch", null);

    _defineProperty(_assertThisInitialized(_this), "_traceUpdatesEnabled", false);

    _defineProperty(_assertThisInitialized(_this), "copyElementPath", function (_ref) {
      var id = _ref.id,
          path = _ref.path,
          rendererID = _ref.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.copyElementPath(id, path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getProfilingData", function (_ref2) {
      var rendererID = _ref2.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\""));
      }

      _this._bridge.send('profilingData', renderer.getProfilingData());
    });

    _defineProperty(_assertThisInitialized(_this), "getProfilingStatus", function () {
      _this._bridge.send('profilingStatus', _this._isProfiling);
    });

    _defineProperty(_assertThisInitialized(_this), "getOwnersList", function (_ref3) {
      var id = _ref3.id,
          rendererID = _ref3.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        var owners = renderer.getOwnersList(id);

        _this._bridge.send('ownersList', {
          id: id,
          owners: owners
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inspectElement", function (_ref4) {
      var id = _ref4.id,
          path = _ref4.path,
          rendererID = _ref4.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        _this._bridge.send('inspectedElement', renderer.inspectElement(id, path)); // When user selects an element, stop trying to restore the selection,
        // and instead remember the current selection for the next reload.


        if (_this._persistedSelectionMatch === null || _this._persistedSelectionMatch.id !== id) {
          _this._persistedSelection = null;
          _this._persistedSelectionMatch = null;
          renderer.setTrackedPath(null);

          _this._throttledPersistSelection(rendererID, id);
        } // TODO: If there was a way to change the selected DOM element
        // in native Elements tab without forcing a switch to it, we'd do it here.
        // For now, it doesn't seem like there is a way to do that:
        // https://github.com/bvaughn/react-devtools-experimental/issues/102
        // (Setting $0 doesn't work, and calling inspect() switches the tab.)

      }
    });

    _defineProperty(_assertThisInitialized(_this), "logElementToConsole", function (_ref5) {
      var id = _ref5.id,
          rendererID = _ref5.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.logElementToConsole(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "reloadAndProfile", function (recordChangeDescriptions) {
      Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageSetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RELOAD_AND_PROFILE_KEY"], 'true');
      Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageSetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY"], recordChangeDescriptions ? 'true' : 'false'); // This code path should only be hit if the shell has explicitly told the Store that it supports profiling.
      // In that case, the shell must also listen for this specific message to know when it needs to reload the app.
      // The agent can't do this in a way that is renderer agnostic.

      _this._bridge.send('reloadAppForProfiling');
    });

    _defineProperty(_assertThisInitialized(_this), "overrideContext", function (_ref6) {
      var id = _ref6.id,
          path = _ref6.path,
          rendererID = _ref6.rendererID,
          value = _ref6.value;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.setInContext(id, path, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "overrideHookState", function (_ref7) {
      var id = _ref7.id,
          hookID = _ref7.hookID,
          path = _ref7.path,
          rendererID = _ref7.rendererID,
          value = _ref7.value;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.setInHook(id, hookID, path, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "overrideProps", function (_ref8) {
      var id = _ref8.id,
          path = _ref8.path,
          rendererID = _ref8.rendererID,
          value = _ref8.value;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.setInProps(id, path, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "overrideState", function (_ref9) {
      var id = _ref9.id,
          path = _ref9.path,
          rendererID = _ref9.rendererID,
          value = _ref9.value;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.setInState(id, path, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "overrideSuspense", function (_ref10) {
      var id = _ref10.id,
          rendererID = _ref10.rendererID,
          forceFallback = _ref10.forceFallback;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.overrideSuspense(id, forceFallback);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTraceUpdatesEnabled", function (traceUpdatesEnabled) {
      _this._traceUpdatesEnabled = traceUpdatesEnabled;
      Object(_views_TraceUpdates__WEBPACK_IMPORTED_MODULE_5__["toggleEnabled"])(traceUpdatesEnabled);

      for (var rendererID in _this._rendererInterfaces) {
        var renderer = _this._rendererInterfaces[rendererID];
        renderer.setTraceUpdatesEnabled(traceUpdatesEnabled);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "syncSelectionFromNativeElementsPanel", function () {
      var target = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;

      if (target == null) {
        return;
      }

      _this.selectNode(target);
    });

    _defineProperty(_assertThisInitialized(_this), "shutdown", function () {
      // Clean up the overlay if visible, and associated events.
      _this.emit('shutdown');
    });

    _defineProperty(_assertThisInitialized(_this), "startProfiling", function (recordChangeDescriptions) {
      _this._recordChangeDescriptions = recordChangeDescriptions;
      _this._isProfiling = true;

      for (var rendererID in _this._rendererInterfaces) {
        var renderer = _this._rendererInterfaces[rendererID];
        renderer.startProfiling(recordChangeDescriptions);
      }

      _this._bridge.send('profilingStatus', _this._isProfiling);
    });

    _defineProperty(_assertThisInitialized(_this), "stopProfiling", function () {
      _this._isProfiling = false;
      _this._recordChangeDescriptions = false;

      for (var rendererID in _this._rendererInterfaces) {
        var renderer = _this._rendererInterfaces[rendererID];
        renderer.stopProfiling();
      }

      _this._bridge.send('profilingStatus', _this._isProfiling);
    });

    _defineProperty(_assertThisInitialized(_this), "storeAsGlobal", function (_ref11) {
      var count = _ref11.count,
          id = _ref11.id,
          path = _ref11.path,
          rendererID = _ref11.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.storeAsGlobal(id, path, count);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateAppendComponentStack", function (appendComponentStack) {
      // If the frontend preference has change,
      // or in the case of React Native- if the backend is just finding out the preference-
      // then install or uninstall the console overrides.
      // It's safe to call these methods multiple times, so we don't need to worry about that.
      if (appendComponentStack) {
        Object(_console__WEBPACK_IMPORTED_MODULE_6__["patch"])();
      } else {
        Object(_console__WEBPACK_IMPORTED_MODULE_6__["unpatch"])();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateComponentFilters", function (componentFilters) {
      for (var rendererID in _this._rendererInterfaces) {
        var renderer = _this._rendererInterfaces[rendererID];
        renderer.updateComponentFilters(componentFilters);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "viewAttributeSource", function (_ref12) {
      var id = _ref12.id,
          path = _ref12.path,
          rendererID = _ref12.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.prepareViewAttributeSource(id, path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "viewElementSource", function (_ref13) {
      var id = _ref13.id,
          rendererID = _ref13.rendererID;
      var renderer = _this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
      } else {
        renderer.prepareViewElementSource(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTraceUpdates", function (nodes) {
      _this.emit('traceUpdates', nodes);
    });

    _defineProperty(_assertThisInitialized(_this), "onHookOperations", function (operations) {
      if (_constants__WEBPACK_IMPORTED_MODULE_2__["__DEBUG__"]) {
        debug('onHookOperations', operations);
      } // TODO:
      // The chrome.runtime does not currently support transferables; it forces JSON serialization.
      // See bug https://bugs.chromium.org/p/chromium/issues/detail?id=927134
      //
      // Regarding transferables, the postMessage doc states:
      // If the ownership of an object is transferred, it becomes unusable (neutered)
      // in the context it was sent from and becomes available only to the worker it was sent to.
      //
      // Even though Chrome is eventually JSON serializing the array buffer,
      // using the transferable approach also sometimes causes it to throw:
      //   DOMException: Failed to execute 'postMessage' on 'Window': ArrayBuffer at index 0 is already neutered.
      //
      // See bug https://github.com/bvaughn/react-devtools-experimental/issues/25
      //
      // The Store has a fallback in place that parses the message as JSON if the type isn't an array.
      // For now the simplest fix seems to be to not transfer the array.
      // This will negatively impact performance on Firefox so it's unfortunate,
      // but until we're able to fix the Chrome error mentioned above, it seems necessary.
      //
      // this._bridge.send('operations', operations, [operations.buffer]);


      _this._bridge.send('operations', operations);

      if (_this._persistedSelection !== null) {
        var rendererID = operations[0];

        if (_this._persistedSelection.rendererID === rendererID) {
          // Check if we can select a deeper match for the persisted selection.
          var renderer = _this._rendererInterfaces[rendererID];

          if (renderer == null) {
            console.warn("Invalid renderer id \"".concat(rendererID, "\""));
          } else {
            var prevMatch = _this._persistedSelectionMatch;
            var nextMatch = renderer.getBestMatchForTrackedPath();
            _this._persistedSelectionMatch = nextMatch;
            var prevMatchID = prevMatch !== null ? prevMatch.id : null;
            var nextMatchID = nextMatch !== null ? nextMatch.id : null;

            if (prevMatchID !== nextMatchID) {
              if (nextMatchID !== null) {
                // We moved forward, unlocking a deeper node.
                _this._bridge.send('selectFiber', nextMatchID);
              }
            }

            if (nextMatch !== null && nextMatch.isFullMatch) {
              // We've just unlocked the innermost selected node.
              // There's no point tracking it further.
              _this._persistedSelection = null;
              _this._persistedSelectionMatch = null;
              renderer.setTrackedPath(null);
            }
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_throttledPersistSelection", lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function (rendererID, id) {
      // This is throttled, so both renderer and selected ID
      // might not be available by the time we read them.
      // This is why we need the defensive checks here.
      var renderer = _this._rendererInterfaces[rendererID];
      var path = renderer != null ? renderer.getPathForElement(id) : null;

      if (path !== null) {
        Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageSetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_LAST_SELECTION_KEY"], JSON.stringify({
          rendererID: rendererID,
          path: path
        }));
      } else {
        Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageRemoveItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_LAST_SELECTION_KEY"]);
      }
    }, 1000));

    if (Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RELOAD_AND_PROFILE_KEY"]) === 'true') {
      _this._recordChangeDescriptions = Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY"]) === 'true';
      _this._isProfiling = true;
      Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageRemoveItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY"]);
      Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageRemoveItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_RELOAD_AND_PROFILE_KEY"]);
    }

    var persistedSelectionString = Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_LAST_SELECTION_KEY"]);

    if (persistedSelectionString != null) {
      _this._persistedSelection = JSON.parse(persistedSelectionString);
    }

    _this._bridge = bridge;
    bridge.addListener('copyElementPath', _this.copyElementPath);
    bridge.addListener('getProfilingData', _this.getProfilingData);
    bridge.addListener('getProfilingStatus', _this.getProfilingStatus);
    bridge.addListener('getOwnersList', _this.getOwnersList);
    bridge.addListener('inspectElement', _this.inspectElement);
    bridge.addListener('logElementToConsole', _this.logElementToConsole);
    bridge.addListener('overrideContext', _this.overrideContext);
    bridge.addListener('overrideHookState', _this.overrideHookState);
    bridge.addListener('overrideProps', _this.overrideProps);
    bridge.addListener('overrideState', _this.overrideState);
    bridge.addListener('overrideSuspense', _this.overrideSuspense);
    bridge.addListener('reloadAndProfile', _this.reloadAndProfile);
    bridge.addListener('setTraceUpdatesEnabled', _this.setTraceUpdatesEnabled);
    bridge.addListener('startProfiling', _this.startProfiling);
    bridge.addListener('stopProfiling', _this.stopProfiling);
    bridge.addListener('storeAsGlobal', _this.storeAsGlobal);
    bridge.addListener('syncSelectionFromNativeElementsPanel', _this.syncSelectionFromNativeElementsPanel);
    bridge.addListener('shutdown', _this.shutdown);
    bridge.addListener('updateAppendComponentStack', _this.updateAppendComponentStack);
    bridge.addListener('updateComponentFilters', _this.updateComponentFilters);
    bridge.addListener('viewAttributeSource', _this.viewAttributeSource);
    bridge.addListener('viewElementSource', _this.viewElementSource);

    if (_this._isProfiling) {
      bridge.send('profilingStatus', true);
    } // Notify the frontend if the backend supports the Storage API (e.g. localStorage).
    // If not, features like reload-and-profile will not work correctly and must be disabled.


    var isBackendStorageAPISupported = false;

    try {
      localStorage.getItem('test');
      isBackendStorageAPISupported = true;
    } catch (error) {}

    bridge.send('isBackendStorageAPISupported', isBackendStorageAPISupported);
    Object(_views_Highlighter__WEBPACK_IMPORTED_MODULE_4__["default"])(bridge, _assertThisInitialized(_this));
    Object(_views_TraceUpdates__WEBPACK_IMPORTED_MODULE_5__["initialize"])(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Agent, [{
    key: "getInstanceAndStyle",
    value: function getInstanceAndStyle(_ref14) {
      var id = _ref14.id,
          rendererID = _ref14.rendererID;
      var renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn("Invalid renderer id \"".concat(rendererID, "\""));
        return null;
      }

      return renderer.getInstanceAndStyle(id);
    }
  }, {
    key: "getIDForNode",
    value: function getIDForNode(node) {
      for (var rendererID in this._rendererInterfaces) {
        var renderer = this._rendererInterfaces[rendererID];

        try {
          var id = renderer.getFiberIDForNative(node, true);

          if (id !== null) {
            return id;
          }
        } catch (error) {// Some old React versions might throw if they can't find a match.
          // If so we should ignore it...
        }
      }

      return null;
    }
  }, {
    key: "selectNode",
    value: function selectNode(target) {
      var id = this.getIDForNode(target);

      if (id !== null) {
        this._bridge.send('selectFiber', id);
      }
    }
  }, {
    key: "setRendererInterface",
    value: function setRendererInterface(rendererID, rendererInterface) {
      this._rendererInterfaces[rendererID] = rendererInterface;

      if (this._isProfiling) {
        rendererInterface.startProfiling(this._recordChangeDescriptions);
      }

      rendererInterface.setTraceUpdatesEnabled(this._traceUpdatesEnabled); // When the renderer is attached, we need to tell it whether
      // we remember the previous selection that we'd like to restore.
      // It'll start tracking mounts for matches to the last selection path.

      var selection = this._persistedSelection;

      if (selection !== null && selection.rendererID === rendererID) {
        rendererInterface.setTrackedPath(selection.path);
      }
    }
  }, {
    key: "onUnsupportedRenderer",
    value: function onUnsupportedRenderer(rendererID) {
      this._bridge.send('unsupportedRendererVersion', rendererID);
    }
  }, {
    key: "rendererInterfaces",
    get: function get() {
      return this._rendererInterfaces;
    }
  }]);

  return Agent;
}(events__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),

/***/ "../react-devtools-shared/src/backend/console.js":
/*!*******************************************************!*\
  !*** ../react-devtools-shared/src/backend/console.js ***!
  \*******************************************************/
/*! exports provided: dangerous_setTargetConsoleForTesting, registerRenderer, patch, unpatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerous_setTargetConsoleForTesting", function() { return dangerous_setTargetConsoleForTesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRenderer", function() { return registerRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpatch", function() { return unpatch; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "../react-devtools-shared/src/backend/renderer.js");
/* harmony import */ var _describeComponentFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./describeComponentFrame */ "../react-devtools-shared/src/backend/describeComponentFrame.js");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var APPEND_STACK_TO_METHODS = ['error', 'trace', 'warn'];
var FRAME_REGEX = /\n {4}in /;
var injectedRenderers = new Map();
var targetConsole = console;
var targetConsoleMethods = {};

for (var method in console) {
  targetConsoleMethods[method] = console[method];
}

var unpatchFn = null; // Enables e.g. Jest tests to inject a mock console object.

function dangerous_setTargetConsoleForTesting(targetConsoleForTesting) {
  targetConsole = targetConsoleForTesting;
  targetConsoleMethods = {};

  for (var _method in targetConsole) {
    targetConsoleMethods[_method] = console[_method];
  }
} // v16 renderers should use this method to inject internals necessary to generate a component stack.
// These internals will be used if the console is patched.
// Injecting them separately allows the console to easily be patched or un-patched later (at runtime).

function registerRenderer(renderer) {
  var getCurrentFiber = renderer.getCurrentFiber,
      findFiberByHostInstance = renderer.findFiberByHostInstance,
      version = renderer.version; // Ignore React v15 and older because they don't expose a component stack anyway.

  if (typeof findFiberByHostInstance !== 'function') {
    return;
  }

  if (typeof getCurrentFiber === 'function') {
    var _getInternalReactCons = Object(_renderer__WEBPACK_IMPORTED_MODULE_0__["getInternalReactConstants"])(version),
        getDisplayNameForFiber = _getInternalReactCons.getDisplayNameForFiber;

    injectedRenderers.set(renderer, {
      getCurrentFiber: getCurrentFiber,
      getDisplayNameForFiber: getDisplayNameForFiber
    });
  }
} // Patches whitelisted console methods to append component stack for the current fiber.
// Call unpatch() to remove the injected behavior.

function patch() {
  if (unpatchFn !== null) {
    // Don't patch twice.
    return;
  }

  var originalConsoleMethods = {};

  unpatchFn = function unpatchFn() {
    for (var _method2 in originalConsoleMethods) {
      try {
        // $FlowFixMe property error|warn is not writable.
        targetConsole[_method2] = originalConsoleMethods[_method2];
      } catch (error) {}
    }
  };

  APPEND_STACK_TO_METHODS.forEach(function (method) {
    try {
      var originalMethod = originalConsoleMethods[method] = targetConsole[method];

      var overrideMethod = function overrideMethod() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        try {
          // If we are ever called with a string that already has a component stack, e.g. a React error/warning,
          // don't append a second stack.
          var alreadyHasComponentStack = args.length > 0 && FRAME_REGEX.exec(args[args.length - 1]);

          if (!alreadyHasComponentStack) {
            // If there's a component stack for at least one of the injected renderers, append it.
            // We don't handle the edge case of stacks for more than one (e.g. interleaved renderers?)
            // eslint-disable-next-line no-for-of-loops/no-for-of-loops
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = injectedRenderers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _step.value,
                    getCurrentFiber = _step$value.getCurrentFiber,
                    getDisplayNameForFiber = _step$value.getDisplayNameForFiber;
                var current = getCurrentFiber();
                var ownerStack = '';

                while (current != null) {
                  var name = getDisplayNameForFiber(current);
                  var owner = current._debugOwner;
                  var ownerName = owner != null ? getDisplayNameForFiber(owner) : null;
                  ownerStack += Object(_describeComponentFrame__WEBPACK_IMPORTED_MODULE_1__["default"])(name, current._debugSource, ownerName);
                  current = owner;
                }

                if (ownerStack !== '') {
                  args.push(ownerStack);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        } catch (error) {// Don't let a DevTools or React internal error interfere with logging.
        }

        originalMethod.apply(void 0, args);
      };

      overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = originalMethod; // $FlowFixMe property error|warn is not writable.

      targetConsole[method] = overrideMethod;
    } catch (error) {}
  });
} // Removed component stack patch from whitelisted console methods.

function unpatch() {
  if (unpatchFn !== null) {
    unpatchFn();
    unpatchFn = null;
  }
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/describeComponentFrame.js":
/*!**********************************************************************!*\
  !*** ../react-devtools-shared/src/backend/describeComponentFrame.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return describeComponentFrame; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This file was forked from the React GitHub repo:
// https://raw.githubusercontent.com/facebook/react/master/packages/shared/describeComponentFrame.js
//
// It has been modified slightly to add a zero width space as commented below.
var BEFORE_SLASH_RE = /^(.*)[\\/]/;
function describeComponentFrame(name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    if (true) {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, ''); // Note the below string contains a zero width space after the "/" character.
            // This is to prevent browsers like Chrome from formatting the file name as a link.
            // (Since this is a source link, it would not work to open the source file anyway.)

            fileName = folderName + '/​' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/index.js":
/*!*****************************************************!*\
  !*** ../react-devtools-shared/src/backend/index.js ***!
  \*****************************************************/
/*! exports provided: initBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBackend", function() { return initBackend; });
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent */ "../react-devtools-shared/src/backend/agent.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "../react-devtools-shared/src/backend/renderer.js");
/* harmony import */ var _legacy_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy/renderer */ "../react-devtools-shared/src/backend/legacy/renderer.js");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function initBackend(hook, agent, global) {
  var subs = [hook.sub('renderer-attached', function (_ref) {
    var id = _ref.id,
        renderer = _ref.renderer,
        rendererInterface = _ref.rendererInterface;
    agent.setRendererInterface(id, rendererInterface); // Now that the Store and the renderer interface are connected,
    // it's time to flush the pending operation codes to the frontend.

    rendererInterface.flushInitialOperations();
  }), hook.sub('unsupported-renderer-version', function (id) {
    agent.onUnsupportedRenderer(id);
  }), hook.sub('operations', agent.onHookOperations), hook.sub('traceUpdates', agent.onTraceUpdates)];

  var attachRenderer = function attachRenderer(id, renderer) {
    var rendererInterface = hook.rendererInterfaces.get(id); // Inject any not-yet-injected renderers (if we didn't reload-and-profile)

    if (rendererInterface == null) {
      if (typeof renderer.findFiberByHostInstance === 'function') {
        // react-reconciler v16+
        rendererInterface = Object(_renderer__WEBPACK_IMPORTED_MODULE_1__["attach"])(hook, id, renderer, global);
      } else if (renderer.ComponentTree) {
        // react-dom v15
        rendererInterface = Object(_legacy_renderer__WEBPACK_IMPORTED_MODULE_2__["attach"])(hook, id, renderer, global);
      } else {// Older react-dom or other unsupported renderer version
      }

      if (rendererInterface != null) {
        hook.rendererInterfaces.set(id, rendererInterface);
      }
    } // Notify the DevTools frontend about new renderers.
    // This includes any that were attached early (via __REACT_DEVTOOLS_ATTACH__).


    if (rendererInterface != null) {
      hook.emit('renderer-attached', {
        id: id,
        renderer: renderer,
        rendererInterface: rendererInterface
      });
    } else {
      hook.emit('unsupported-renderer-version', id);
    }
  }; // Connect renderers that have already injected themselves.


  hook.renderers.forEach(function (renderer, id) {
    attachRenderer(id, renderer);
  }); // Connect any new renderers that injected themselves.

  subs.push(hook.sub('renderer', function (_ref2) {
    var id = _ref2.id,
        renderer = _ref2.renderer;
    attachRenderer(id, renderer);
  }));
  hook.emit('react-devtools', agent);
  hook.reactDevtoolsAgent = agent;

  var onAgentShutdown = function onAgentShutdown() {
    subs.forEach(function (fn) {
      return fn();
    });
    hook.rendererInterfaces.forEach(function (rendererInterface) {
      rendererInterface.cleanup();
    });
    hook.reactDevtoolsAgent = null;
  };

  agent.addListener('shutdown', onAgentShutdown);
  subs.push(function () {
    agent.removeListener('shutdown', onAgentShutdown);
  });
  return function () {
    subs.forEach(function (fn) {
      return fn();
    });
  };
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/legacy/renderer.js":
/*!***************************************************************!*\
  !*** ../react-devtools-shared/src/backend/legacy/renderer.js ***!
  \***************************************************************/
/*! exports provided: attach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attach", function() { return attach; });
/* harmony import */ var react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-devtools-shared/src/types */ "../react-devtools-shared/src/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "../react-devtools-shared/src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../react-devtools-shared/src/backend/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../react-devtools-shared/src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../react-devtools-shared/src/backend/legacy/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







function getData(internalInstance) {
  var displayName = null;
  var key = null; // != used deliberately here to catch undefined and null

  if (internalInstance._currentElement != null) {
    if (internalInstance._currentElement.key) {
      key = '' + internalInstance._currentElement.key;
    }

    var elementType = internalInstance._currentElement.type;

    if (typeof elementType === 'string') {
      displayName = elementType;
    } else if (typeof elementType === 'function') {
      displayName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(elementType);
    }
  }

  return {
    displayName: displayName,
    key: key
  };
}

function getElementType(internalInstance) {
  // != used deliberately here to catch undefined and null
  if (internalInstance._currentElement != null) {
    var elementType = internalInstance._currentElement.type;

    if (typeof elementType === 'function') {
      var publicInstance = internalInstance.getPublicInstance();

      if (publicInstance !== null) {
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeClass"];
      } else {
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeFunction"];
      }
    } else if (typeof elementType === 'string') {
      return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeHostComponent"];
    }
  }

  return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"];
}

function getChildren(internalInstance) {
  var children = []; // If the parent is a native node without rendered children, but with
  // multiple string children, then the `element` that gets passed in here is
  // a plain value -- a string or number.

  if (_typeof(internalInstance) !== 'object') {// No children
  } else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {// No children
  } else if (internalInstance._renderedComponent) {
    var child = internalInstance._renderedComponent;

    if (getElementType(child) !== react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
      children.push(child);
    }
  } else if (internalInstance._renderedChildren) {
    var renderedChildren = internalInstance._renderedChildren;

    for (var name in renderedChildren) {
      var _child = renderedChildren[name];

      if (getElementType(_child) !== react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
        children.push(_child);
      }
    }
  } // Note: we skip the case where children are just strings or numbers
  // because the new DevTools skips over host text nodes anyway.


  return children;
}

function attach(hook, rendererID, renderer, global) {
  var idToInternalInstanceMap = new Map();
  var internalInstanceToIDMap = new WeakMap();
  var internalInstanceToRootIDMap = new WeakMap();
  var getInternalIDForNative = null;
  var findNativeNodeForInternalID;

  if (renderer.ComponentTree) {
    getInternalIDForNative = function getInternalIDForNative(node, findNearestUnfilteredAncestor) {
      var internalInstance = renderer.ComponentTree.getClosestInstanceFromNode(node);
      return internalInstanceToIDMap.get(internalInstance) || null;
    };

    findNativeNodeForInternalID = function findNativeNodeForInternalID(id) {
      var internalInstance = idToInternalInstanceMap.get(id);
      return renderer.ComponentTree.getNodeFromInstance(internalInstance);
    };
  } else if (renderer.Mount.getID && renderer.Mount.getNode) {
    getInternalIDForNative = function getInternalIDForNative(node, findNearestUnfilteredAncestor) {
      // Not implemented.
      return null;
    };

    findNativeNodeForInternalID = function findNativeNodeForInternalID(id) {
      // Not implemented.
      return null;
    };
  }

  function getID(internalInstance) {
    if (_typeof(internalInstance) !== 'object') {
      throw new Error('Invalid internal instance: ' + internalInstance);
    }

    if (!internalInstanceToIDMap.has(internalInstance)) {
      var _id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUID"])();

      internalInstanceToIDMap.set(internalInstance, _id);
      idToInternalInstanceMap.set(_id, internalInstance);
    }

    return internalInstanceToIDMap.get(internalInstance);
  }

  function areEqualArrays(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  } // This is shared mutable state that lets us keep track of where we are.


  var parentIDStack = [];
  var oldReconcilerMethods = null;

  if (renderer.Reconciler) {
    // React 15
    oldReconcilerMethods = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["decorateMany"])(renderer.Reconciler, {
      mountComponent: function mountComponent(fn, args) {
        var internalInstance = args[0];
        var hostContainerInfo = args[3];

        if (getElementType(internalInstance) === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
          return fn.apply(this, args);
        }

        if (hostContainerInfo._topLevelWrapper === undefined) {
          // SSR
          return fn.apply(this, args);
        }

        var id = getID(internalInstance); // Push the operation.

        var parentID = parentIDStack.length > 0 ? parentIDStack[parentIDStack.length - 1] : 0;
        recordMount(internalInstance, id, parentID);
        parentIDStack.push(id); // Remember the root.

        internalInstanceToRootIDMap.set(internalInstance, getID(hostContainerInfo._topLevelWrapper));

        try {
          var result = fn.apply(this, args);
          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            var rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },
      performUpdateIfNecessary: function performUpdateIfNecessary(fn, args) {
        var internalInstance = args[0];

        if (getElementType(internalInstance) === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
          return fn.apply(this, args);
        }

        var id = getID(internalInstance);
        parentIDStack.push(id);
        var prevChildren = getChildren(internalInstance);

        try {
          var result = fn.apply(this, args);
          var nextChildren = getChildren(internalInstance);

          if (!areEqualArrays(prevChildren, nextChildren)) {
            // Push the operation
            recordReorder(internalInstance, id, nextChildren);
          }

          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            var rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },
      receiveComponent: function receiveComponent(fn, args) {
        var internalInstance = args[0];

        if (getElementType(internalInstance) === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
          return fn.apply(this, args);
        }

        var id = getID(internalInstance);
        parentIDStack.push(id);
        var prevChildren = getChildren(internalInstance);

        try {
          var result = fn.apply(this, args);
          var nextChildren = getChildren(internalInstance);

          if (!areEqualArrays(prevChildren, nextChildren)) {
            // Push the operation
            recordReorder(internalInstance, id, nextChildren);
          }

          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            var rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },
      unmountComponent: function unmountComponent(fn, args) {
        var internalInstance = args[0];

        if (getElementType(internalInstance) === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeOtherOrUnknown"]) {
          return fn.apply(this, args);
        }

        var id = getID(internalInstance);
        parentIDStack.push(id);

        try {
          var result = fn.apply(this, args);
          parentIDStack.pop(); // Push the operation.

          recordUnmount(internalInstance, id);
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            var rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      }
    });
  }

  function cleanup() {
    if (oldReconcilerMethods !== null) {
      if (renderer.Component) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["restoreMany"])(renderer.Component.Mixin, oldReconcilerMethods);
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["restoreMany"])(renderer.Reconciler, oldReconcilerMethods);
      }
    }

    oldReconcilerMethods = null;
  }

  function recordMount(internalInstance, id, parentID) {
    var isRoot = parentID === 0;

    if (_constants__WEBPACK_IMPORTED_MODULE_3__["__DEBUG__"]) {
      console.log('%crecordMount()', 'color: green; font-weight: bold;', id, getData(internalInstance).displayName);
    }

    if (isRoot) {
      // TODO Is this right? For all versions?
      var hasOwnerMetadata = internalInstance._currentElement != null && internalInstance._currentElement._owner != null;
      pushOperation(_constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_ADD"]);
      pushOperation(id);
      pushOperation(react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeRoot"]);
      pushOperation(0); // isProfilingSupported?

      pushOperation(hasOwnerMetadata ? 1 : 0);
    } else {
      var type = getElementType(internalInstance);

      var _getData = getData(internalInstance),
          displayName = _getData.displayName,
          key = _getData.key;

      var ownerID = internalInstance._currentElement != null && internalInstance._currentElement._owner != null ? getID(internalInstance._currentElement._owner) : 0;
      var displayNameStringID = getStringID(displayName);
      var keyStringID = getStringID(key);
      pushOperation(_constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_ADD"]);
      pushOperation(id);
      pushOperation(type);
      pushOperation(parentID);
      pushOperation(ownerID);
      pushOperation(displayNameStringID);
      pushOperation(keyStringID);
    }
  }

  function recordReorder(internalInstance, id, nextChildren) {
    pushOperation(_constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_REORDER_CHILDREN"]);
    pushOperation(id);
    var nextChildIDs = nextChildren.map(getID);
    pushOperation(nextChildIDs.length);

    for (var i = 0; i < nextChildIDs.length; i++) {
      pushOperation(nextChildIDs[i]);
    }
  }

  function recordUnmount(internalInstance, id) {
    pendingUnmountedIDs.push(id);
    idToInternalInstanceMap.delete(id);
  }

  function crawlAndRecordInitialMounts(id, parentID, rootID) {
    if (_constants__WEBPACK_IMPORTED_MODULE_3__["__DEBUG__"]) {
      console.group('crawlAndRecordInitialMounts() id:', id);
    }

    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      internalInstanceToRootIDMap.set(internalInstance, rootID);
      recordMount(internalInstance, id, parentID);
      getChildren(internalInstance).forEach(function (child) {
        return crawlAndRecordInitialMounts(getID(child), id, rootID);
      });
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_3__["__DEBUG__"]) {
      console.groupEnd();
    }
  }

  function flushInitialOperations() {
    // Crawl roots though and register any nodes that mounted before we were injected.
    var roots = renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID;

    for (var key in roots) {
      var internalInstance = roots[key];

      var _id2 = getID(internalInstance);

      crawlAndRecordInitialMounts(_id2, 0, _id2);
      flushPendingEvents(_id2);
    }
  }

  var pendingOperations = [];
  var pendingStringTable = new Map();
  var pendingUnmountedIDs = [];
  var pendingStringTableLength = 0;
  var pendingUnmountedRootID = null;

  function flushPendingEvents(rootID) {
    if (pendingOperations.length === 0 && pendingUnmountedIDs.length === 0 && pendingUnmountedRootID === null) {
      return;
    }

    var numUnmountIDs = pendingUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
    var operations = new Array( // Identify which renderer this update is coming from.
    2 + // [rendererID, rootFiberID]
    // How big is the string table?
    1 + // [stringTableLength]
    // Then goes the actual string table.
    pendingStringTableLength + ( // All unmounts are batched in a single message.
    // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
    numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Mount operations
    pendingOperations.length); // Identify which renderer this update is coming from.
    // This enables roots to be mapped to renderers,
    // Which in turn enables fiber properations, states, and hooks to be inspected.

    var i = 0;
    operations[i++] = rendererID;
    operations[i++] = rootID; // Now fill in the string table.
    // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

    operations[i++] = pendingStringTableLength;
    pendingStringTable.forEach(function (value, key) {
      operations[i++] = key.length;
      var encodedKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["utfEncodeString"])(key);

      for (var j = 0; j < encodedKey.length; j++) {
        operations[i + j] = encodedKey[j];
      }

      i += key.length;
    });

    if (numUnmountIDs > 0) {
      // All unmounts except roots are batched in a single message.
      operations[i++] = _constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_REMOVE"]; // The first number is how many unmounted IDs we're gonna send.

      operations[i++] = numUnmountIDs; // Fill in the unmounts

      for (var j = 0; j < pendingUnmountedIDs.length; j++) {
        operations[i++] = pendingUnmountedIDs[j];
      } // The root ID should always be unmounted last.


      if (pendingUnmountedRootID !== null) {
        operations[i] = pendingUnmountedRootID;
        i++;
      }
    } // Fill in the rest of the operations.


    for (var _j = 0; _j < pendingOperations.length; _j++) {
      operations[i + _j] = pendingOperations[_j];
    }

    i += pendingOperations.length;

    if (_constants__WEBPACK_IMPORTED_MODULE_3__["__DEBUG__"]) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["printOperationsArray"])(operations);
    } // If we've already connected to the frontend, just pass the operations through.


    hook.emit('operations', operations);
    pendingOperations.length = 0;
    pendingUnmountedIDs = [];
    pendingUnmountedRootID = null;
    pendingStringTable.clear();
    pendingStringTableLength = 0;
  }

  function pushOperation(op) {
    if (true) {
      if (!Number.isInteger(op)) {
        console.error('pushOperation() was called but the value is not an integer.', op);
      }
    }

    pendingOperations.push(op);
  }

  function getStringID(str) {
    if (str === null) {
      return 0;
    }

    var existingID = pendingStringTable.get(str);

    if (existingID !== undefined) {
      return existingID;
    }

    var stringID = pendingStringTable.size + 1;
    pendingStringTable.set(str, stringID); // The string table total length needs to account
    // both for the string length, and for the array item
    // that contains the length itself. Hence + 1.

    pendingStringTableLength += str.length + 1;
    return stringID;
  }

  var currentlyInspectedElementID = null;
  var currentlyInspectedPaths = {}; // Track the intersection of currently inspected paths,
  // so that we can send their data along if the element is re-rendered.

  function mergeInspectedPaths(path) {
    var current = currentlyInspectedPaths;
    path.forEach(function (key) {
      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    });
  }

  function createIsPathWhitelisted(key) {
    // This function helps prevent previously-inspected paths from being dehydrated in updates.
    // This is important to avoid a bad user experience where expanded toggles collapse on update.
    return function isPathWhitelisted(path) {
      var current = currentlyInspectedPaths[key];

      if (!current) {
        return false;
      }

      for (var i = 0; i < path.length; i++) {
        current = current[path[i]];

        if (!current) {
          return false;
        }
      }

      return true;
    };
  } // Fast path props lookup for React Native style editor.


  function getInstanceAndStyle(id) {
    var instance = null;
    var style = null;
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      instance = internalInstance._instance || null;
      var element = internalInstance._currentElement;

      if (element != null && element.props != null) {
        style = element.props.style || null;
      }
    }

    return {
      instance: instance,
      style: style
    };
  }

  function updateSelectedElement(id) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      console.warn("Could not find instance with id \"".concat(id, "\""));
      return;
    }

    switch (getElementType(internalInstance)) {
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeClass"]:
        global.$r = internalInstance._instance;
        break;

      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeFunction"]:
        var element = internalInstance._currentElement;

        if (element == null) {
          console.warn("Could not find element with id \"".concat(id, "\""));
          return;
        }

        global.$r = {
          props: element.props,
          type: element.type
        };
        break;

      default:
        global.$r = null;
        break;
    }
  }

  function storeAsGlobal(id, path, count) {
    var inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      var value = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(inspectedElement, path);
      var key = "$reactTemp".concat(count);
      window[key] = value;
      console.log(key);
      console.log(value);
    }
  }

  function copyElementPath(id, path) {
    var inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["copyToClipboard"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(inspectedElement, path));
    }
  }

  function inspectElement(id, path) {
    if (currentlyInspectedElementID !== id) {
      currentlyInspectedElementID = id;
      currentlyInspectedPaths = {};
    }

    var inspectedElement = inspectElementRaw(id);

    if (inspectedElement === null) {
      return {
        id: id,
        type: 'not-found'
      };
    }

    if (path != null) {
      mergeInspectedPaths(path);
    } // Any time an inspected element has an update,
    // we should update the selected $r value as wel.
    // Do this before dehyration (cleanForBridge).


    updateSelectedElement(id);
    inspectedElement.context = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["cleanForBridge"])(inspectedElement.context, createIsPathWhitelisted('context'));
    inspectedElement.props = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["cleanForBridge"])(inspectedElement.props, createIsPathWhitelisted('props'));
    inspectedElement.state = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["cleanForBridge"])(inspectedElement.state, createIsPathWhitelisted('state'));
    return {
      id: id,
      type: 'full-data',
      value: inspectedElement
    };
  }

  function inspectElementRaw(id) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      return null;
    }

    var _getData2 = getData(internalInstance),
        displayName = _getData2.displayName;

    var type = getElementType(internalInstance);
    var context = null;
    var owners = null;
    var props = null;
    var state = null;
    var source = null;
    var element = internalInstance._currentElement;

    if (element !== null) {
      props = element.props;
      source = element._source != null ? element._source : null;
      var owner = element._owner;

      if (owner) {
        owners = [];

        while (owner != null) {
          owners.push({
            displayName: getData(owner).displayName || 'Unknown',
            id: getID(owner),
            type: getElementType(owner)
          });

          if (owner._currentElement) {
            owner = owner._currentElement._owner;
          }
        }
      }
    }

    var publicInstance = internalInstance._instance;

    if (publicInstance != null) {
      context = publicInstance.context || null;
      state = publicInstance.state || null;
    }

    return {
      id: id,
      // Hooks did not exist in legacy versions
      canEditHooks: false,
      // Does the current renderer support editable function props?
      canEditFunctionProps: true,
      // Suspense did not exist in legacy versions
      canToggleSuspense: false,
      // Can view component source location.
      canViewSource: type === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeClass"] || type === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_0__["ElementTypeFunction"],
      // Only legacy context exists in legacy versions.
      hasLegacyContext: true,
      displayName: displayName,
      type: type,
      // Inspectable properties.
      context: context,
      hooks: null,
      props: props,
      state: state,
      // List of owners
      owners: owners,
      // Location of component in source coude.
      source: source
    };
  }

  function logElementToConsole(id) {
    var result = inspectElementRaw(id);

    if (result === null) {
      console.warn("Could not find element with id \"".concat(id, "\""));
      return;
    }

    var supportsGroup = typeof console.groupCollapsed === 'function';

    if (supportsGroup) {
      console.groupCollapsed("[Click to expand] %c<".concat(result.displayName || 'Component', " />"), // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
      'color: var(--dom-tag-name-color); font-weight: normal;');
    }

    if (result.props !== null) {
      console.log('Props:', result.props);
    }

    if (result.state !== null) {
      console.log('State:', result.state);
    }

    if (result.context !== null) {
      console.log('Context:', result.context);
    }

    var nativeNode = findNativeNodeForInternalID(id);

    if (nativeNode !== null) {
      console.log('Node:', nativeNode);
    }

    if (window.chrome || /firefox/i.test(navigator.userAgent)) {
      console.log('Right-click any value to save it as a global variable for further inspection.');
    }

    if (supportsGroup) {
      console.groupEnd();
    }
  }

  function prepareViewAttributeSource(id, path) {
    var inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      window.$attribute = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(inspectedElement, path);
    }
  }

  function prepareViewElementSource(id) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      console.warn("Could not find instance with id \"".concat(id, "\""));
      return;
    }

    var element = internalInstance._currentElement;

    if (element == null) {
      console.warn("Could not find element with id \"".concat(id, "\""));
      return;
    }

    global.$type = element.type;
  }

  function setInProps(id, path, value) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      var element = internalInstance._currentElement;
      internalInstance._currentElement = _objectSpread({}, element, {
        props: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["copyWithSet"])(element.props, path, value)
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["forceUpdate"])(internalInstance._instance);
    }
  }

  function setInState(id, path, value) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      var publicInstance = internalInstance._instance;

      if (publicInstance != null) {
        setIn(publicInstance.state, path, value);
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["forceUpdate"])(publicInstance);
      }
    }
  }

  function setInContext(id, path, value) {
    var internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      var publicInstance = internalInstance._instance;

      if (publicInstance != null) {
        setIn(publicInstance.context, path, value);
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["forceUpdate"])(publicInstance);
      }
    }
  }

  function setIn(obj, path, value) {
    var last = path.pop();
    var parent = path.reduce( // $FlowFixMe
    function (reduced, attr) {
      return reduced ? reduced[attr] : null;
    }, obj);

    if (parent) {
      // $FlowFixMe
      parent[last] = value;
    }
  } // v16+ only features


  var getProfilingData = function getProfilingData() {
    throw new Error('getProfilingData not supported by this renderer');
  };

  var handleCommitFiberRoot = function handleCommitFiberRoot() {
    throw new Error('handleCommitFiberRoot not supported by this renderer');
  };

  var handleCommitFiberUnmount = function handleCommitFiberUnmount() {
    throw new Error('handleCommitFiberUnmount not supported by this renderer');
  };

  var overrideSuspense = function overrideSuspense() {
    throw new Error('overrideSuspense not supported by this renderer');
  };

  var setInHook = function setInHook() {
    throw new Error('setInHook not supported by this renderer');
  };

  var startProfiling = function startProfiling() {// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
  };

  var stopProfiling = function stopProfiling() {// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
  };

  function getBestMatchForTrackedPath() {
    // Not implemented.
    return null;
  }

  function getPathForElement(id) {
    // Not implemented.
    return null;
  }

  function updateComponentFilters(componentFilters) {// Not implemented.
  }

  function setTraceUpdatesEnabled(enabled) {// Not implemented.
  }

  function setTrackedPath(path) {// Not implemented.
  }

  function getOwnersList(id) {
    // Not implemented.
    return null;
  }

  return {
    cleanup: cleanup,
    copyElementPath: copyElementPath,
    flushInitialOperations: flushInitialOperations,
    getBestMatchForTrackedPath: getBestMatchForTrackedPath,
    getFiberIDForNative: getInternalIDForNative,
    getInstanceAndStyle: getInstanceAndStyle,
    findNativeNodesForFiberID: function findNativeNodesForFiberID(id) {
      var nativeNode = findNativeNodeForInternalID(id);
      return nativeNode == null ? null : [nativeNode];
    },
    getOwnersList: getOwnersList,
    getPathForElement: getPathForElement,
    getProfilingData: getProfilingData,
    handleCommitFiberRoot: handleCommitFiberRoot,
    handleCommitFiberUnmount: handleCommitFiberUnmount,
    inspectElement: inspectElement,
    logElementToConsole: logElementToConsole,
    overrideSuspense: overrideSuspense,
    prepareViewAttributeSource: prepareViewAttributeSource,
    prepareViewElementSource: prepareViewElementSource,
    renderer: renderer,
    setInContext: setInContext,
    setInHook: setInHook,
    setInProps: setInProps,
    setInState: setInState,
    setTraceUpdatesEnabled: setTraceUpdatesEnabled,
    setTrackedPath: setTrackedPath,
    startProfiling: startProfiling,
    stopProfiling: stopProfiling,
    storeAsGlobal: storeAsGlobal,
    updateComponentFilters: updateComponentFilters
  };
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/legacy/utils.js":
/*!************************************************************!*\
  !*** ../react-devtools-shared/src/backend/legacy/utils.js ***!
  \************************************************************/
/*! exports provided: decorate, decorateMany, restoreMany, forceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorateMany", function() { return decorateMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreMany", function() { return restoreMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceUpdate", function() { return forceUpdate; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function decorate(object, attr, fn) {
  var old = object[attr];

  object[attr] = function (instance) {
    return fn.call(this, old, arguments);
  };

  return old;
}
function decorateMany(source, fns) {
  var olds = {};

  for (var name in fns) {
    olds[name] = decorate(source, name, fns[name]);
  }

  return olds;
}
function restoreMany(source, olds) {
  for (var name in olds) {
    source[name] = olds[name];
  }
}
function forceUpdate(instance) {
  if (typeof instance.forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (instance.updater != null && typeof instance.updater.enqueueForceUpdate === 'function') {
    instance.updater.enqueueForceUpdate(this, function () {}, 'forceUpdate');
  }
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/renderer.js":
/*!********************************************************!*\
  !*** ../react-devtools-shared/src/backend/renderer.js ***!
  \********************************************************/
/*! exports provided: getInternalReactConstants, attach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalReactConstants", function() { return getInternalReactConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attach", function() { return attach; });
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver */ "../../node_modules/semver/semver.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-devtools-shared/src/types */ "../react-devtools-shared/src/types.js");
/* harmony import */ var react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-devtools-shared/src/utils */ "../react-devtools-shared/src/utils.js");
/* harmony import */ var react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-devtools-shared/src/storage */ "../react-devtools-shared/src/storage.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../react-devtools-shared/src/backend/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "../react-devtools-shared/src/constants.js");
/* harmony import */ var react_debug_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-debug-tools */ "../react-debug-tools/index.js");
/* harmony import */ var react_debug_tools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_debug_tools__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./console */ "../react-devtools-shared/src/backend/console.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








// Some environments (e.g. React Native / Hermes) don't support the performace API yet.
var getCurrentTime = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && typeof performance.now === 'function' ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function getInternalReactConstants(version) {
  var ReactSymbols = {
    CONCURRENT_MODE_NUMBER: 0xeacf,
    CONCURRENT_MODE_SYMBOL_STRING: 'Symbol(react.concurrent_mode)',
    DEPRECATED_ASYNC_MODE_SYMBOL_STRING: 'Symbol(react.async_mode)',
    CONTEXT_CONSUMER_NUMBER: 0xeace,
    CONTEXT_CONSUMER_SYMBOL_STRING: 'Symbol(react.context)',
    CONTEXT_PROVIDER_NUMBER: 0xeacd,
    CONTEXT_PROVIDER_SYMBOL_STRING: 'Symbol(react.provider)',
    FORWARD_REF_NUMBER: 0xead0,
    FORWARD_REF_SYMBOL_STRING: 'Symbol(react.forward_ref)',
    MEMO_NUMBER: 0xead3,
    MEMO_SYMBOL_STRING: 'Symbol(react.memo)',
    PROFILER_NUMBER: 0xead2,
    PROFILER_SYMBOL_STRING: 'Symbol(react.profiler)',
    STRICT_MODE_NUMBER: 0xeacc,
    STRICT_MODE_SYMBOL_STRING: 'Symbol(react.strict_mode)',
    SCOPE_NUMBER: 0xead7,
    SCOPE_SYMBOL_STRING: 'Symbol(react.scope)'
  };
  var ReactTypeOfSideEffect = {
    NoEffect: 0,
    PerformedWork: 1,
    Placement: 2
  }; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.
  //
  // Technically these priority levels are invalid for versions before 16.9,
  // but 16.9 is the first version to report priority level to DevTools,
  // so we can avoid checking for earlier versions and support pre-16.9 canary releases in the process.

  var ReactPriorityLevels = {
    ImmediatePriority: 99,
    UserBlockingPriority: 98,
    NormalPriority: 97,
    LowPriority: 96,
    IdlePriority: 95,
    NoPriority: 90
  };
  var ReactTypeOfWork = null; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.

  if (Object(semver__WEBPACK_IMPORTED_MODULE_0__["gte"])(version, '16.6.0-beta.0')) {
    ReactTypeOfWork = {
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: 18,
      // Behind a flag
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      MemoComponent: 14,
      Mode: 8,
      Profiler: 12,
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      SuspenseListComponent: 19,
      // Experimental
      YieldComponent: -1 // Removed

    };
  } else if (Object(semver__WEBPACK_IMPORTED_MODULE_0__["gte"])(version, '16.4.3-alpha')) {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 11,
      ContextProvider: 12,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: -1,
      // Doesn't exist yet
      ForwardRef: 13,
      Fragment: 9,
      FunctionComponent: 0,
      HostComponent: 7,
      HostPortal: 6,
      HostRoot: 5,
      HostText: 8,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 4,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 10,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      SuspenseListComponent: -1,
      // Doesn't exist yet
      YieldComponent: -1 // Removed

    };
  } else {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 12,
      ContextProvider: 13,
      CoroutineComponent: 7,
      CoroutineHandlerPhase: 8,
      DehydratedSuspenseComponent: -1,
      // Doesn't exist yet
      ForwardRef: 14,
      Fragment: 10,
      FunctionComponent: 1,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 0,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 11,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      SuspenseListComponent: -1,
      // Doesn't exist yet
      YieldComponent: 9
    };
  } // **********************************************************
  // End of copied code.
  // **********************************************************


  function getTypeSymbol(type) {
    var symbolOrNumber = _typeof(type) === 'object' && type !== null ? type.$$typeof : type; // $FlowFixMe Flow doesn't know about typeof "symbol"

    return _typeof(symbolOrNumber) === 'symbol' ? symbolOrNumber.toString() : symbolOrNumber;
  }

  var _ReactTypeOfWork = ReactTypeOfWork,
      ClassComponent = _ReactTypeOfWork.ClassComponent,
      IncompleteClassComponent = _ReactTypeOfWork.IncompleteClassComponent,
      FunctionComponent = _ReactTypeOfWork.FunctionComponent,
      IndeterminateComponent = _ReactTypeOfWork.IndeterminateComponent,
      ForwardRef = _ReactTypeOfWork.ForwardRef,
      HostRoot = _ReactTypeOfWork.HostRoot,
      HostComponent = _ReactTypeOfWork.HostComponent,
      HostPortal = _ReactTypeOfWork.HostPortal,
      HostText = _ReactTypeOfWork.HostText,
      Fragment = _ReactTypeOfWork.Fragment,
      MemoComponent = _ReactTypeOfWork.MemoComponent,
      SimpleMemoComponent = _ReactTypeOfWork.SimpleMemoComponent,
      SuspenseComponent = _ReactTypeOfWork.SuspenseComponent,
      SuspenseListComponent = _ReactTypeOfWork.SuspenseListComponent;
  var CONCURRENT_MODE_NUMBER = ReactSymbols.CONCURRENT_MODE_NUMBER,
      CONCURRENT_MODE_SYMBOL_STRING = ReactSymbols.CONCURRENT_MODE_SYMBOL_STRING,
      DEPRECATED_ASYNC_MODE_SYMBOL_STRING = ReactSymbols.DEPRECATED_ASYNC_MODE_SYMBOL_STRING,
      CONTEXT_PROVIDER_NUMBER = ReactSymbols.CONTEXT_PROVIDER_NUMBER,
      CONTEXT_PROVIDER_SYMBOL_STRING = ReactSymbols.CONTEXT_PROVIDER_SYMBOL_STRING,
      CONTEXT_CONSUMER_NUMBER = ReactSymbols.CONTEXT_CONSUMER_NUMBER,
      CONTEXT_CONSUMER_SYMBOL_STRING = ReactSymbols.CONTEXT_CONSUMER_SYMBOL_STRING,
      STRICT_MODE_NUMBER = ReactSymbols.STRICT_MODE_NUMBER,
      STRICT_MODE_SYMBOL_STRING = ReactSymbols.STRICT_MODE_SYMBOL_STRING,
      PROFILER_NUMBER = ReactSymbols.PROFILER_NUMBER,
      PROFILER_SYMBOL_STRING = ReactSymbols.PROFILER_SYMBOL_STRING,
      SCOPE_NUMBER = ReactSymbols.SCOPE_NUMBER,
      SCOPE_SYMBOL_STRING = ReactSymbols.SCOPE_SYMBOL_STRING,
      FORWARD_REF_NUMBER = ReactSymbols.FORWARD_REF_NUMBER,
      FORWARD_REF_SYMBOL_STRING = ReactSymbols.FORWARD_REF_SYMBOL_STRING,
      MEMO_NUMBER = ReactSymbols.MEMO_NUMBER,
      MEMO_SYMBOL_STRING = ReactSymbols.MEMO_SYMBOL_STRING;

  function resolveFiberType(type) {
    var typeSymbol = getTypeSymbol(type);

    switch (typeSymbol) {
      case MEMO_NUMBER:
      case MEMO_SYMBOL_STRING:
        // recursively resolving memo type in case of memo(forwardRef(Component))
        return resolveFiberType(type.type);

      case FORWARD_REF_NUMBER:
      case FORWARD_REF_SYMBOL_STRING:
        return type.render;

      default:
        return type;
    }
  } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods


  function getDisplayNameForFiber(fiber) {
    var type = fiber.type,
        tag = fiber.tag;
    var resolvedType = type;

    if (_typeof(type) === 'object' && type !== null) {
      resolvedType = resolveFiberType(type);
    }

    var resolvedContext = null;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
        return Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(resolvedType);

      case FunctionComponent:
      case IndeterminateComponent:
        return Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(resolvedType);

      case ForwardRef:
        // Mirror https://github.com/facebook/react/blob/7c21bf72ace77094fd1910cc350a548287ef8350/packages/shared/getComponentName.js#L27-L37
        return type && type.displayName || Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(resolvedType, 'Anonymous');

      case HostRoot:
        return null;

      case HostComponent:
        return type;

      case HostPortal:
      case HostText:
      case Fragment:
        return null;

      case MemoComponent:
      case SimpleMemoComponent:
        return Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(resolvedType, 'Anonymous');

      case SuspenseComponent:
        return 'Suspense';

      case SuspenseListComponent:
        return 'SuspenseList';

      default:
        var typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case CONCURRENT_MODE_NUMBER:
          case CONCURRENT_MODE_SYMBOL_STRING:
          case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
            return null;

          case CONTEXT_PROVIDER_NUMBER:
          case CONTEXT_PROVIDER_SYMBOL_STRING:
            // 16.3.0 exposed the context object as "context"
            // PR #12501 changed it to "_context" for 16.3.1+
            // NOTE Keep in sync with inspectElementRaw()
            resolvedContext = fiber.type._context || fiber.type.context;
            return "".concat(resolvedContext.displayName || 'Context', ".Provider");

          case CONTEXT_CONSUMER_NUMBER:
          case CONTEXT_CONSUMER_SYMBOL_STRING:
            // 16.3-16.5 read from "type" because the Consumer is the actual context object.
            // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
            // NOTE Keep in sync with inspectElementRaw()
            resolvedContext = fiber.type._context || fiber.type; // NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
            // If you change the name, figure out a more resilient way to detect it.

            return "".concat(resolvedContext.displayName || 'Context', ".Consumer");

          case STRICT_MODE_NUMBER:
          case STRICT_MODE_SYMBOL_STRING:
            return null;

          case PROFILER_NUMBER:
          case PROFILER_SYMBOL_STRING:
            return "Profiler(".concat(fiber.memoizedProps.id, ")");

          case SCOPE_NUMBER:
          case SCOPE_SYMBOL_STRING:
            return 'Scope';

          default:
            // Unknown element type.
            // This may mean a new element type that has not yet been added to DevTools.
            return null;
        }

    }
  }

  return {
    getDisplayNameForFiber: getDisplayNameForFiber,
    getTypeSymbol: getTypeSymbol,
    ReactPriorityLevels: ReactPriorityLevels,
    ReactTypeOfWork: ReactTypeOfWork,
    ReactSymbols: ReactSymbols,
    ReactTypeOfSideEffect: ReactTypeOfSideEffect
  };
}
function attach(hook, rendererID, renderer, global) {
  var _getInternalReactCons = getInternalReactConstants(renderer.version),
      getDisplayNameForFiber = _getInternalReactCons.getDisplayNameForFiber,
      getTypeSymbol = _getInternalReactCons.getTypeSymbol,
      ReactPriorityLevels = _getInternalReactCons.ReactPriorityLevels,
      ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork,
      ReactSymbols = _getInternalReactCons.ReactSymbols,
      ReactTypeOfSideEffect = _getInternalReactCons.ReactTypeOfSideEffect;

  var NoEffect = ReactTypeOfSideEffect.NoEffect,
      PerformedWork = ReactTypeOfSideEffect.PerformedWork,
      Placement = ReactTypeOfSideEffect.Placement;
  var FunctionComponent = ReactTypeOfWork.FunctionComponent,
      ClassComponent = ReactTypeOfWork.ClassComponent,
      ContextConsumer = ReactTypeOfWork.ContextConsumer,
      DehydratedSuspenseComponent = ReactTypeOfWork.DehydratedSuspenseComponent,
      Fragment = ReactTypeOfWork.Fragment,
      ForwardRef = ReactTypeOfWork.ForwardRef,
      HostRoot = ReactTypeOfWork.HostRoot,
      HostPortal = ReactTypeOfWork.HostPortal,
      HostComponent = ReactTypeOfWork.HostComponent,
      HostText = ReactTypeOfWork.HostText,
      IncompleteClassComponent = ReactTypeOfWork.IncompleteClassComponent,
      IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent,
      MemoComponent = ReactTypeOfWork.MemoComponent,
      SimpleMemoComponent = ReactTypeOfWork.SimpleMemoComponent,
      SuspenseComponent = ReactTypeOfWork.SuspenseComponent,
      SuspenseListComponent = ReactTypeOfWork.SuspenseListComponent;
  var ImmediatePriority = ReactPriorityLevels.ImmediatePriority,
      UserBlockingPriority = ReactPriorityLevels.UserBlockingPriority,
      NormalPriority = ReactPriorityLevels.NormalPriority,
      LowPriority = ReactPriorityLevels.LowPriority,
      IdlePriority = ReactPriorityLevels.IdlePriority,
      NoPriority = ReactPriorityLevels.NoPriority;
  var CONCURRENT_MODE_NUMBER = ReactSymbols.CONCURRENT_MODE_NUMBER,
      CONCURRENT_MODE_SYMBOL_STRING = ReactSymbols.CONCURRENT_MODE_SYMBOL_STRING,
      DEPRECATED_ASYNC_MODE_SYMBOL_STRING = ReactSymbols.DEPRECATED_ASYNC_MODE_SYMBOL_STRING,
      CONTEXT_CONSUMER_NUMBER = ReactSymbols.CONTEXT_CONSUMER_NUMBER,
      CONTEXT_CONSUMER_SYMBOL_STRING = ReactSymbols.CONTEXT_CONSUMER_SYMBOL_STRING,
      CONTEXT_PROVIDER_NUMBER = ReactSymbols.CONTEXT_PROVIDER_NUMBER,
      CONTEXT_PROVIDER_SYMBOL_STRING = ReactSymbols.CONTEXT_PROVIDER_SYMBOL_STRING,
      PROFILER_NUMBER = ReactSymbols.PROFILER_NUMBER,
      PROFILER_SYMBOL_STRING = ReactSymbols.PROFILER_SYMBOL_STRING,
      STRICT_MODE_NUMBER = ReactSymbols.STRICT_MODE_NUMBER,
      STRICT_MODE_SYMBOL_STRING = ReactSymbols.STRICT_MODE_SYMBOL_STRING;
  var overrideHookState = renderer.overrideHookState,
      overrideProps = renderer.overrideProps,
      setSuspenseHandler = renderer.setSuspenseHandler,
      scheduleUpdate = renderer.scheduleUpdate;
  var supportsTogglingSuspense = typeof setSuspenseHandler === 'function' && typeof scheduleUpdate === 'function'; // Patching the console enables DevTools to do a few useful things:
  // * Append component stacks to warnings and error messages
  // * Disable logging during re-renders to inspect hooks (see inspectHooksOfFiber)
  //
  // Don't patch in test environments because we don't want to interfere with Jest's own console overrides.

  if (true) {
    Object(_console__WEBPACK_IMPORTED_MODULE_7__["registerRenderer"])(renderer); // The renderer interface can't read this preference directly,
    // because it is stored in localStorage within the context of the extension.
    // It relies on the extension to pass the preference through via the global.

    if (window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ !== false) {
      Object(_console__WEBPACK_IMPORTED_MODULE_7__["patch"])();
    }
  }

  var debug = function debug(name, fiber, parentFiber) {
    if (_constants__WEBPACK_IMPORTED_MODULE_5__["__DEBUG__"]) {
      var displayName = getDisplayNameForFiber(fiber) || 'null';
      var parentDisplayName = parentFiber != null && getDisplayNameForFiber(parentFiber) || 'null'; // NOTE: calling getFiberID or getPrimaryFiber is unsafe here
      // because it will put them in the map. For now, we'll omit them.
      // TODO: better debugging story for this.

      console.log("[renderer] %c".concat(name, " %c").concat(displayName, " %c").concat(parentFiber ? parentDisplayName : ''), 'color: red; font-weight: bold;', 'color: blue;', 'color: purple;');
    }
  }; // Configurable Components tree filters.


  var hideElementsWithDisplayNames = new Set();
  var hideElementsWithPaths = new Set();
  var hideElementsWithTypes = new Set(); // Highlight updates

  var traceUpdatesEnabled = false;
  var traceUpdatesForNodes = new Set();

  function applyComponentFilters(componentFilters) {
    hideElementsWithTypes.clear();
    hideElementsWithDisplayNames.clear();
    hideElementsWithPaths.clear();
    componentFilters.forEach(function (componentFilter) {
      if (!componentFilter.isEnabled) {
        return;
      }

      switch (componentFilter.type) {
        case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ComponentFilterDisplayName"]:
          if (componentFilter.isValid && componentFilter.value !== '') {
            hideElementsWithDisplayNames.add(new RegExp(componentFilter.value, 'i'));
          }

          break;

        case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ComponentFilterElementType"]:
          hideElementsWithTypes.add(componentFilter.value);
          break;

        case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ComponentFilterLocation"]:
          if (componentFilter.isValid && componentFilter.value !== '') {
            hideElementsWithPaths.add(new RegExp(componentFilter.value, 'i'));
          }

          break;

        case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ComponentFilterHOC"]:
          hideElementsWithDisplayNames.add(new RegExp('\\('));
          break;

        default:
          console.warn("Invalid component filter type \"".concat(componentFilter.type, "\""));
          break;
      }
    });
  } // The renderer interface can't read saved component filters directly,
  // because they are stored in localStorage within the context of the extension.
  // Instead it relies on the extension to pass filters through.


  if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
    applyComponentFilters(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
  } else {
    // Unfortunately this feature is not expected to work for React Native for now.
    // It would be annoying for us to spam YellowBox warnings with unactionable stuff,
    // so for now just skip this message...
    //console.warn('⚛️ DevTools: Could not locate saved component filters');
    // Fallback to assuming the default filters in this case.
    applyComponentFilters(Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getDefaultComponentFilters"])());
  } // If necessary, we can revisit optimizing this operation.
  // For example, we could add a new recursive unmount tree operation.
  // The unmount operations are already significantly smaller than mount opreations though.
  // This is something to keep in mind for later.


  function updateComponentFilters(componentFilters) {
    if (isProfiling) {
      // Re-mounting a tree while profiling is in progress might break a lot of assumptions.
      // If necessary, we could support this- but it doesn't seem like a necessary use case.
      throw Error('Cannot modify filter preferences while profiling');
    } // Recursively unmount all roots.


    hook.getFiberRoots(rendererID).forEach(function (root) {
      currentRootID = getFiberID(getPrimaryFiber(root.current));
      unmountFiberChildrenRecursively(root.current);
      recordUnmount(root.current, false);
      currentRootID = -1;
    });
    applyComponentFilters(componentFilters); // Reset psuedo counters so that new path selections will be persisted.

    rootDisplayNameCounter.clear(); // Recursively re-mount all roots with new filter criteria applied.

    hook.getFiberRoots(rendererID).forEach(function (root) {
      currentRootID = getFiberID(getPrimaryFiber(root.current));
      setRootPseudoKey(currentRootID, root.current);
      mountFiberRecursively(root.current, null, false, false);
      flushPendingEvents(root);
      currentRootID = -1;
    });
  } // NOTICE Keep in sync with get*ForFiber methods


  function shouldFilterFiber(fiber) {
    var _debugSource = fiber._debugSource,
        tag = fiber.tag,
        type = fiber.type;

    switch (tag) {
      case DehydratedSuspenseComponent:
        // TODO: ideally we would show dehydrated Suspense immediately.
        // However, it has some special behavior (like disconnecting
        // an alternate and turning into real Suspense) which breaks DevTools.
        // For now, ignore it, and only show it once it gets hydrated.
        // https://github.com/bvaughn/react-devtools-experimental/issues/197
        return true;

      case HostPortal:
      case HostText:
      case Fragment:
        return true;

      case HostRoot:
        // It is never valid to filter the root element.
        return false;

      default:
        var typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case CONCURRENT_MODE_NUMBER:
          case CONCURRENT_MODE_SYMBOL_STRING:
          case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
          case STRICT_MODE_NUMBER:
          case STRICT_MODE_SYMBOL_STRING:
            return true;

          default:
            break;
        }

    }

    var elementType = getElementTypeForFiber(fiber);

    if (hideElementsWithTypes.has(elementType)) {
      return true;
    }

    if (hideElementsWithDisplayNames.size > 0) {
      var displayName = getDisplayNameForFiber(fiber);

      if (displayName != null) {
        // eslint-disable-next-line no-for-of-loops/no-for-of-loops
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = hideElementsWithDisplayNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var displayNameRegExp = _step.value;

            if (displayNameRegExp.test(displayName)) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }

    if (_debugSource != null && hideElementsWithPaths.size > 0) {
      var fileName = _debugSource.fileName; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = hideElementsWithPaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var pathRegExp = _step2.value;

          if (pathRegExp.test(fileName)) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    return false;
  } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods


  function getElementTypeForFiber(fiber) {
    var type = fiber.type,
        tag = fiber.tag;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"];

      case FunctionComponent:
      case IndeterminateComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeFunction"];

      case ForwardRef:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeForwardRef"];

      case HostRoot:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeRoot"];

      case HostComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeHostComponent"];

      case HostPortal:
      case HostText:
      case Fragment:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeOtherOrUnknown"];

      case MemoComponent:
      case SimpleMemoComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeMemo"];

      case SuspenseComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeSuspense"];

      case SuspenseListComponent:
        return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeSuspenseList"];

      default:
        var typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case CONCURRENT_MODE_NUMBER:
          case CONCURRENT_MODE_SYMBOL_STRING:
          case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeOtherOrUnknown"];

          case CONTEXT_PROVIDER_NUMBER:
          case CONTEXT_PROVIDER_SYMBOL_STRING:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeContext"];

          case CONTEXT_CONSUMER_NUMBER:
          case CONTEXT_CONSUMER_SYMBOL_STRING:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeContext"];

          case STRICT_MODE_NUMBER:
          case STRICT_MODE_SYMBOL_STRING:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeOtherOrUnknown"];

          case PROFILER_NUMBER:
          case PROFILER_SYMBOL_STRING:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeProfiler"];

          default:
            return react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeOtherOrUnknown"];
        }

    }
  } // This is a slightly annoying indirection.
  // It is currently necessary because DevTools wants to use unique objects as keys for instances.
  // However fibers have two versions.
  // We use this set to remember first encountered fiber for each conceptual instance.


  function getPrimaryFiber(fiber) {
    if (primaryFibers.has(fiber)) {
      return fiber;
    }

    var alternate = fiber.alternate;

    if (alternate != null && primaryFibers.has(alternate)) {
      return alternate;
    }

    primaryFibers.add(fiber);
    return fiber;
  }

  var fiberToIDMap = new Map();
  var idToFiberMap = new Map();
  var primaryFibers = new Set(); // When profiling is supported, we store the latest tree base durations for each Fiber.
  // This is so that we can quickly capture a snapshot of those values if profiling starts.
  // If we didn't store these values, we'd have to crawl the tree when profiling started,
  // and use a slow path to find each of the current Fibers.

  var idToTreeBaseDurationMap = new Map(); // When profiling is supported, we store the latest tree base durations for each Fiber.
  // This map enables us to filter these times by root when sending them to the frontend.

  var idToRootMap = new Map(); // When a mount or update is in progress, this value tracks the root that is being operated on.

  var currentRootID = -1;

  function getFiberID(primaryFiber) {
    if (!fiberToIDMap.has(primaryFiber)) {
      var id = Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getUID"])();
      fiberToIDMap.set(primaryFiber, id);
      idToFiberMap.set(id, primaryFiber);
    }

    return fiberToIDMap.get(primaryFiber);
  }

  function getChangeDescription(prevFiber, nextFiber) {
    switch (getElementTypeForFiber(nextFiber)) {
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"]:
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeFunction"]:
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeMemo"]:
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeForwardRef"]:
        if (prevFiber === null) {
          return {
            context: null,
            didHooksChange: false,
            isFirstMount: true,
            props: null,
            state: null
          };
        } else {
          return {
            context: getContextChangedKeys(nextFiber),
            didHooksChange: didHooksChange(prevFiber.memoizedState, nextFiber.memoizedState),
            isFirstMount: false,
            props: getChangedKeys(prevFiber.memoizedProps, nextFiber.memoizedProps),
            state: getChangedKeys(prevFiber.memoizedState, nextFiber.memoizedState)
          };
        }

      default:
        return null;
    }
  }

  function updateContextsForFiber(fiber) {
    switch (getElementTypeForFiber(fiber)) {
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"]:
        if (idToContextsMap !== null) {
          var id = getFiberID(getPrimaryFiber(fiber));
          var contexts = getContextsForFiber(fiber);

          if (contexts !== null) {
            idToContextsMap.set(id, contexts);
          }
        }

        break;

      default:
        break;
    }
  } // Differentiates between a null context value and no context.


  var NO_CONTEXT = {};

  function getContextsForFiber(fiber) {
    switch (getElementTypeForFiber(fiber)) {
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"]:
        var instance = fiber.stateNode;
        var legacyContext = NO_CONTEXT;
        var modernContext = NO_CONTEXT;

        if (instance != null) {
          if (instance.constructor && instance.constructor.contextType != null) {
            modernContext = instance.context;
          } else {
            legacyContext = instance.context;

            if (legacyContext && Object.keys(legacyContext).length === 0) {
              legacyContext = NO_CONTEXT;
            }
          }
        }

        return [legacyContext, modernContext];

      default:
        return null;
    }
  } // Record all contexts at the time profiling is started.
  // Fibers only store the current context value,
  // so we need to track them separatenly in order to determine changed keys.


  function crawlToInitializeContextsMap(fiber) {
    updateContextsForFiber(fiber);
    var current = fiber.child;

    while (current !== null) {
      crawlToInitializeContextsMap(current);
      current = current.sibling;
    }
  }

  function getContextChangedKeys(fiber) {
    switch (getElementTypeForFiber(fiber)) {
      case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"]:
        if (idToContextsMap !== null) {
          var id = getFiberID(getPrimaryFiber(fiber));
          var prevContexts = idToContextsMap.has(id) ? idToContextsMap.get(id) : null;
          var nextContexts = getContextsForFiber(fiber);

          if (prevContexts == null || nextContexts == null) {
            return null;
          }

          var _prevContexts = _slicedToArray(prevContexts, 2),
              prevLegacyContext = _prevContexts[0],
              prevModernContext = _prevContexts[1];

          var _nextContexts = _slicedToArray(nextContexts, 2),
              nextLegacyContext = _nextContexts[0],
              nextModernContext = _nextContexts[1];

          if (nextLegacyContext !== NO_CONTEXT) {
            return getChangedKeys(prevLegacyContext, nextLegacyContext);
          } else if (nextModernContext !== NO_CONTEXT) {
            return prevModernContext !== nextModernContext;
          }
        }

        break;

      default:
        break;
    }

    return null;
  }

  function didHooksChange(prev, next) {
    if (next == null) {
      return false;
    } // We can't report anything meaningful for hooks changes.


    if (next.hasOwnProperty('baseState') && next.hasOwnProperty('memoizedState') && next.hasOwnProperty('next') && next.hasOwnProperty('queue')) {
      while (next !== null) {
        if (next.memoizedState !== prev.memoizedState) {
          return true;
        } else {
          next = next.next;
          prev = prev.next;
        }
      }
    }

    return false;
  }

  function getChangedKeys(prev, next) {
    if (prev == null || next == null) {
      return null;
    } // We can't report anything meaningful for hooks changes.


    if (next.hasOwnProperty('baseState') && next.hasOwnProperty('memoizedState') && next.hasOwnProperty('next') && next.hasOwnProperty('queue')) {
      return null;
    }

    var keys = new Set([].concat(_toConsumableArray(Object.keys(prev)), _toConsumableArray(Object.keys(next))));
    var changedKeys = []; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var key = _step3.value;

        if (prev[key] !== next[key]) {
          changedKeys.push(key);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return changedKeys;
  } // eslint-disable-next-line no-unused-vars


  function didFiberRender(prevFiber, nextFiber) {
    switch (nextFiber.tag) {
      case ClassComponent:
      case FunctionComponent:
      case ContextConsumer:
      case MemoComponent:
      case SimpleMemoComponent:
        // For types that execute user code, we check PerformedWork effect.
        // We don't reflect bailouts (either referential or sCU) in DevTools.
        // eslint-disable-next-line no-bitwise
        return (nextFiber.effectTag & PerformedWork) === PerformedWork;
      // Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
      // so it won't get highlighted with React 16.3.0 to 16.3.2.

      default:
        // For host components and other types, we compare inputs
        // to determine whether something is an update.
        return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
    }
  }

  var pendingOperations = [];
  var pendingRealUnmountedIDs = [];
  var pendingSimulatedUnmountedIDs = [];
  var pendingOperationsQueue = [];
  var pendingStringTable = new Map();
  var pendingStringTableLength = 0;
  var pendingUnmountedRootID = null;

  function pushOperation(op) {
    if (true) {
      if (!Number.isInteger(op)) {
        console.error('pushOperation() was called but the value is not an integer.', op);
      }
    }

    pendingOperations.push(op);
  }

  function flushPendingEvents(root) {
    if (pendingOperations.length === 0 && pendingRealUnmountedIDs.length === 0 && pendingSimulatedUnmountedIDs.length === 0 && pendingUnmountedRootID === null) {
      // If we aren't profiling, we can just bail out here.
      // No use sending an empty update over the bridge.
      if (!isProfiling) {
        return;
      }

      var current = root.current;
      var alternate = current.alternate; // Certain types of updates bail out at the root without doing any actual render work.
      // React should probably not call the DevTools commit hook in this case,
      // but if it does- we can detect it and filter them out from the profiler.
      // NOTE: Keep this logic in sync with the one in handleCommitFiberRoot()

      var didBailoutAtRoot = alternate !== null && alternate.expirationTime === 0 && alternate.childExpirationTime === 0; // The Profiler stores metadata for each commit and reconstructs the app tree per commit using:
      // (1) an initial tree snapshot and
      // (2) the operations array for each commit
      // Because of this, it's important that the operations and metadata arrays align,
      // So the logic that skips metadata for bailout commits should also apply to filter operations.

      if (didBailoutAtRoot) {
        return;
      }
    }

    var numUnmountIDs = pendingRealUnmountedIDs.length + pendingSimulatedUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
    var operations = new Array( // Identify which renderer this update is coming from.
    2 + // [rendererID, rootFiberID]
    // How big is the string table?
    1 + // [stringTableLength]
    // Then goes the actual string table.
    pendingStringTableLength + ( // All unmounts are batched in a single message.
    // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
    numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Regular operations
    pendingOperations.length); // Identify which renderer this update is coming from.
    // This enables roots to be mapped to renderers,
    // Which in turn enables fiber props, states, and hooks to be inspected.

    var i = 0;
    operations[i++] = rendererID;
    operations[i++] = currentRootID; // Use this ID in case the root was unmounted!
    // Now fill in the string table.
    // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

    operations[i++] = pendingStringTableLength;
    pendingStringTable.forEach(function (value, key) {
      operations[i++] = key.length;
      var encodedKey = Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["utfEncodeString"])(key);

      for (var j = 0; j < encodedKey.length; j++) {
        operations[i + j] = encodedKey[j];
      }

      i += key.length;
    });

    if (numUnmountIDs > 0) {
      // All unmounts except roots are batched in a single message.
      operations[i++] = _constants__WEBPACK_IMPORTED_MODULE_5__["TREE_OPERATION_REMOVE"]; // The first number is how many unmounted IDs we're gonna send.

      operations[i++] = numUnmountIDs; // Fill in the real unmounts in the reverse order.
      // They were inserted parents-first by React, but we want children-first.
      // So we traverse our array backwards.

      for (var j = pendingRealUnmountedIDs.length - 1; j >= 0; j--) {
        operations[i++] = pendingRealUnmountedIDs[j];
      } // Fill in the simulated unmounts (hidden Suspense subtrees) in their order.
      // (We want children to go before parents.)
      // They go *after* the real unmounts because we know for sure they won't be
      // children of already pushed "real" IDs. If they were, we wouldn't be able
      // to discover them during the traversal, as they would have been deleted.


      for (var _j = 0; _j < pendingSimulatedUnmountedIDs.length; _j++) {
        operations[i + _j] = pendingSimulatedUnmountedIDs[_j];
      }

      i += pendingSimulatedUnmountedIDs.length; // The root ID should always be unmounted last.

      if (pendingUnmountedRootID !== null) {
        operations[i] = pendingUnmountedRootID;
        i++;
      }
    } // Fill in the rest of the operations.


    for (var _j2 = 0; _j2 < pendingOperations.length; _j2++) {
      operations[i + _j2] = pendingOperations[_j2];
    }

    i += pendingOperations.length; // Let the frontend know about tree operations.
    // The first value in this array will identify which root it corresponds to,
    // so we do no longer need to dispatch a separate root-committed event.

    if (pendingOperationsQueue !== null) {
      // Until the frontend has been connected, store the tree operations.
      // This will let us avoid walking the tree later when the frontend connects,
      // and it enables the Profiler's reload-and-profile functionality to work as well.
      pendingOperationsQueue.push(operations);
    } else {
      // If we've already connected to the frontend, just pass the operations through.
      hook.emit('operations', operations);
    }

    pendingOperations.length = 0;
    pendingRealUnmountedIDs.length = 0;
    pendingSimulatedUnmountedIDs.length = 0;
    pendingUnmountedRootID = null;
    pendingStringTable.clear();
    pendingStringTableLength = 0;
  }

  function getStringID(str) {
    if (str === null) {
      return 0;
    }

    var existingID = pendingStringTable.get(str);

    if (existingID !== undefined) {
      return existingID;
    }

    var stringID = pendingStringTable.size + 1;
    pendingStringTable.set(str, stringID); // The string table total length needs to account
    // both for the string length, and for the array item
    // that contains the length itself. Hence + 1.

    pendingStringTableLength += str.length + 1;
    return stringID;
  }

  function recordMount(fiber, parentFiber) {
    var isRoot = fiber.tag === HostRoot;
    var id = getFiberID(getPrimaryFiber(fiber));
    var hasOwnerMetadata = fiber.hasOwnProperty('_debugOwner');
    var isProfilingSupported = fiber.hasOwnProperty('treeBaseDuration');

    if (isRoot) {
      pushOperation(_constants__WEBPACK_IMPORTED_MODULE_5__["TREE_OPERATION_ADD"]);
      pushOperation(id);
      pushOperation(react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeRoot"]);
      pushOperation(isProfilingSupported ? 1 : 0);
      pushOperation(hasOwnerMetadata ? 1 : 0);

      if (isProfiling) {
        if (displayNamesByRootID !== null) {
          displayNamesByRootID.set(id, getDisplayNameForRoot(fiber));
        }
      }
    } else {
      var key = fiber.key;
      var displayName = getDisplayNameForFiber(fiber);
      var elementType = getElementTypeForFiber(fiber);
      var _debugOwner = fiber._debugOwner;
      var ownerID = _debugOwner != null ? getFiberID(getPrimaryFiber(_debugOwner)) : 0;
      var parentID = parentFiber ? getFiberID(getPrimaryFiber(parentFiber)) : 0;
      var displayNameStringID = getStringID(displayName); // This check is a guard to handle a React element that has been modified
      // in such a way as to bypass the default stringification of the "key" property.

      var keyString = key === null ? null : '' + key;
      var keyStringID = getStringID(keyString);
      pushOperation(_constants__WEBPACK_IMPORTED_MODULE_5__["TREE_OPERATION_ADD"]);
      pushOperation(id);
      pushOperation(elementType);
      pushOperation(parentID);
      pushOperation(ownerID);
      pushOperation(displayNameStringID);
      pushOperation(keyStringID);
    }

    if (isProfilingSupported) {
      idToRootMap.set(id, currentRootID);
      recordProfilingDurations(fiber);
    }
  }

  function recordUnmount(fiber, isSimulated) {
    if (trackedPathMatchFiber !== null) {
      // We're in the process of trying to restore previous selection.
      // If this fiber matched but is being unmounted, there's no use trying.
      // Reset the state so we don't keep holding onto it.
      if (fiber === trackedPathMatchFiber || fiber === trackedPathMatchFiber.alternate) {
        setTrackedPath(null);
      }
    }

    var isRoot = fiber.tag === HostRoot;
    var primaryFiber = getPrimaryFiber(fiber);

    if (!fiberToIDMap.has(primaryFiber)) {
      // If we've never seen this Fiber, it might be because
      // it is inside a non-current Suspense fragment tree,
      // and so the store is not even aware of it.
      // In that case we can just ignore it, or otherwise
      // there will be errors later on.
      primaryFibers.delete(primaryFiber); // TODO: this is fragile and can obscure actual bugs.

      return;
    }

    var id = getFiberID(primaryFiber);

    if (isRoot) {
      // Roots must be removed only after all children (pending and simultated) have been removed.
      // So we track it separately.
      pendingUnmountedRootID = id;
    } else if (!shouldFilterFiber(fiber)) {
      // To maintain child-first ordering,
      // we'll push it into one of these queues,
      // and later arrange them in the correct order.
      if (isSimulated) {
        pendingSimulatedUnmountedIDs.push(id);
      } else {
        pendingRealUnmountedIDs.push(id);
      }
    }

    fiberToIDMap.delete(primaryFiber);
    idToFiberMap.delete(id);
    primaryFibers.delete(primaryFiber);
    var isProfilingSupported = fiber.hasOwnProperty('treeBaseDuration');

    if (isProfilingSupported) {
      idToRootMap.delete(id);
      idToTreeBaseDurationMap.delete(id);
    }
  }

  function mountFiberRecursively(fiber, parentFiber, traverseSiblings, traceNearestHostComponentUpdate) {
    if (_constants__WEBPACK_IMPORTED_MODULE_5__["__DEBUG__"]) {
      debug('mountFiberRecursively()', fiber, parentFiber);
    } // If we have the tree selection from previous reload, try to match this Fiber.
    // Also remember whether to do the same for siblings.


    var mightSiblingsBeOnTrackedPath = updateTrackedPathStateBeforeMount(fiber);
    var shouldIncludeInTree = !shouldFilterFiber(fiber);

    if (shouldIncludeInTree) {
      recordMount(fiber, parentFiber);
    }

    if (traceUpdatesEnabled) {
      if (traceNearestHostComponentUpdate) {
        var elementType = getElementTypeForFiber(fiber); // If an ancestor updated, we should mark the nearest host nodes for highlighting.

        if (elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeHostComponent"]) {
          traceUpdatesForNodes.add(fiber.stateNode);
          traceNearestHostComponentUpdate = false;
        }
      } // We intentionally do not re-enable the traceNearestHostComponentUpdate flag in this branch,
      // because we don't want to highlight every host node inside of a newly mounted subtree.

    }

    var isTimedOutSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent && fiber.memoizedState !== null;

    if (isTimedOutSuspense) {
      // Special case: if Suspense mounts in a timed-out state,
      // get the fallback child from the inner fragment and mount
      // it as if it was our own child. Updates handle this too.
      var primaryChildFragment = fiber.child;
      var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
      var fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;

      if (fallbackChild !== null) {
        mountFiberRecursively(fallbackChild, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
      }
    } else {
      if (fiber.child !== null) {
        mountFiberRecursively(fiber.child, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
      }
    } // We're exiting this Fiber now, and entering its siblings.
    // If we have selection to restore, we might need to re-activate tracking.


    updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath);

    if (traverseSiblings && fiber.sibling !== null) {
      mountFiberRecursively(fiber.sibling, parentFiber, true, traceNearestHostComponentUpdate);
    }
  } // We use this to simulate unmounting for Suspense trees
  // when we switch from primary to fallback.


  function unmountFiberChildrenRecursively(fiber) {
    if (_constants__WEBPACK_IMPORTED_MODULE_5__["__DEBUG__"]) {
      debug('unmountFiberChildrenRecursively()', fiber);
    } // We might meet a nested Suspense on our way.


    var isTimedOutSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent && fiber.memoizedState !== null;
    var child = fiber.child;

    if (isTimedOutSuspense) {
      // If it's showing fallback tree, let's traverse it instead.
      var primaryChildFragment = fiber.child;
      var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null; // Skip over to the real Fiber child.

      child = fallbackChildFragment ? fallbackChildFragment.child : null;
    }

    while (child !== null) {
      // Record simulated unmounts children-first.
      // We skip nodes without return because those are real unmounts.
      if (child.return !== null) {
        unmountFiberChildrenRecursively(child);
        recordUnmount(child, true);
      }

      child = child.sibling;
    }
  }

  function recordProfilingDurations(fiber) {
    var id = getFiberID(getPrimaryFiber(fiber));
    var actualDuration = fiber.actualDuration,
        treeBaseDuration = fiber.treeBaseDuration;
    idToTreeBaseDurationMap.set(id, treeBaseDuration || 0);

    if (isProfiling) {
      var alternate = fiber.alternate;

      if (alternate == null || treeBaseDuration !== alternate.treeBaseDuration) {
        // Tree base duration updates are included in the operations typed array.
        // So we have to convert them from milliseconds to microseconds so we can send them as ints.
        var convertedTreeBaseDuration = Math.floor((treeBaseDuration || 0) * 1000);
        pushOperation(_constants__WEBPACK_IMPORTED_MODULE_5__["TREE_OPERATION_UPDATE_TREE_BASE_DURATION"]);
        pushOperation(id);
        pushOperation(convertedTreeBaseDuration);
      }

      if (alternate == null || didFiberRender(alternate, fiber)) {
        if (actualDuration != null) {
          // The actual duration reported by React includes time spent working on children.
          // This is useful information, but it's also useful to be able to exclude child durations.
          // The frontend can't compute this, since the immediate children may have been filtered out.
          // So we need to do this on the backend.
          // Note that this calculated self duration is not the same thing as the base duration.
          // The two are calculated differently (tree duration does not accumulate).
          var selfDuration = actualDuration;
          var child = fiber.child;

          while (child !== null) {
            selfDuration -= child.actualDuration || 0;
            child = child.sibling;
          } // If profiling is active, store durations for elements that were rendered during the commit.
          // Note that we should do this for any fiber we performed work on, regardless of its actualDuration value.
          // In some cases actualDuration might be 0 for fibers we worked on (particularly if we're using Date.now)
          // In other cases (e.g. Memo) actualDuration might be greater than 0 even if we "bailed out".


          var metadata = currentCommitProfilingMetadata;
          metadata.durations.push(id, actualDuration, selfDuration);
          metadata.maxActualDuration = Math.max(metadata.maxActualDuration, actualDuration);

          if (recordChangeDescriptions) {
            var changeDescription = getChangeDescription(alternate, fiber);

            if (changeDescription !== null) {
              if (metadata.changeDescriptions !== null) {
                metadata.changeDescriptions.set(id, changeDescription);
              }
            }

            updateContextsForFiber(fiber);
          }
        }
      }
    }
  }

  function recordResetChildren(fiber, childSet) {
    // The frontend only really cares about the displayName, key, and children.
    // The first two don't really change, so we are only concerned with the order of children here.
    // This is trickier than a simple comparison though, since certain types of fibers are filtered.
    var nextChildren = []; // This is a naive implimentation that shallowly recurses children.
    // We might want to revisit this if it proves to be too inefficient.

    var child = childSet;

    while (child !== null) {
      findReorderedChildrenRecursively(child, nextChildren);
      child = child.sibling;
    }

    var numChildren = nextChildren.length;

    if (numChildren < 2) {
      // No need to reorder.
      return;
    }

    pushOperation(_constants__WEBPACK_IMPORTED_MODULE_5__["TREE_OPERATION_REORDER_CHILDREN"]);
    pushOperation(getFiberID(getPrimaryFiber(fiber)));
    pushOperation(numChildren);

    for (var i = 0; i < nextChildren.length; i++) {
      pushOperation(nextChildren[i]);
    }
  }

  function findReorderedChildrenRecursively(fiber, nextChildren) {
    if (!shouldFilterFiber(fiber)) {
      nextChildren.push(getFiberID(getPrimaryFiber(fiber)));
    } else {
      var child = fiber.child;

      while (child !== null) {
        findReorderedChildrenRecursively(child, nextChildren);
        child = child.sibling;
      }
    }
  } // Returns whether closest unfiltered fiber parent needs to reset its child list.


  function updateFiberRecursively(nextFiber, prevFiber, parentFiber, traceNearestHostComponentUpdate) {
    if (_constants__WEBPACK_IMPORTED_MODULE_5__["__DEBUG__"]) {
      debug('updateFiberRecursively()', nextFiber, parentFiber);
    }

    if (traceUpdatesEnabled) {
      var elementType = getElementTypeForFiber(nextFiber);

      if (traceNearestHostComponentUpdate) {
        // If an ancestor updated, we should mark the nearest host nodes for highlighting.
        if (elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeHostComponent"]) {
          traceUpdatesForNodes.add(nextFiber.stateNode);
          traceNearestHostComponentUpdate = false;
        }
      } else {
        if (elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeFunction"] || elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"] || elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeContext"]) {
          // Otherwise if this is a traced ancestor, flag for the nearest host descendant(s).
          traceNearestHostComponentUpdate = didFiberRender(prevFiber, nextFiber);
        }
      }
    }

    if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === getFiberID(getPrimaryFiber(nextFiber)) && didFiberRender(prevFiber, nextFiber)) {
      // If this Fiber has updated, clear cached inspected data.
      // If it is inspected again, it may need to be re-run to obtain updated hooks values.
      hasElementUpdatedSinceLastInspected = true;
    }

    var shouldIncludeInTree = !shouldFilterFiber(nextFiber);
    var isSuspense = nextFiber.tag === SuspenseComponent;
    var shouldResetChildren = false; // The behavior of timed-out Suspense trees is unique.
    // Rather than unmount the timed out content (and possibly lose important state),
    // React re-parents this content within a hidden Fragment while the fallback is showing.
    // This behavior doesn't need to be observable in the DevTools though.
    // It might even result in a bad user experience for e.g. node selection in the Elements panel.
    // The easiest fix is to strip out the intermediate Fragment fibers,
    // so the Elements panel and Profiler don't need to special case them.
    // Suspense components only have a non-null memoizedState if they're timed-out.

    var prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
    var nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null; // The logic below is inspired by the codepaths in updateSuspenseComponent()
    // inside ReactFiberBeginWork in the React source code.

    if (prevDidTimeout && nextDidTimeOut) {
      // Fallback -> Fallback:
      // 1. Reconcile fallback set.
      var nextFiberChild = nextFiber.child;
      var nextFallbackChildSet = nextFiberChild ? nextFiberChild.sibling : null; // Note: We can't use nextFiber.child.sibling.alternate
      // because the set is special and alternate may not exist.

      var prevFiberChild = prevFiber.child;
      var prevFallbackChildSet = prevFiberChild ? prevFiberChild.sibling : null;

      if (nextFallbackChildSet != null && prevFallbackChildSet != null && updateFiberRecursively(nextFallbackChildSet, prevFallbackChildSet, nextFiber, traceNearestHostComponentUpdate)) {
        shouldResetChildren = true;
      }
    } else if (prevDidTimeout && !nextDidTimeOut) {
      // Fallback -> Primary:
      // 1. Unmount fallback set
      // Note: don't emulate fallback unmount because React actually did it.
      // 2. Mount primary set
      var nextPrimaryChildSet = nextFiber.child;

      if (nextPrimaryChildSet !== null) {
        mountFiberRecursively(nextPrimaryChildSet, nextFiber, true, traceNearestHostComponentUpdate);
      }

      shouldResetChildren = true;
    } else if (!prevDidTimeout && nextDidTimeOut) {
      // Primary -> Fallback:
      // 1. Hide primary set
      // This is not a real unmount, so it won't get reported by React.
      // We need to manually walk the previous tree and record unmounts.
      unmountFiberChildrenRecursively(prevFiber); // 2. Mount fallback set

      var _nextFiberChild = nextFiber.child;

      var _nextFallbackChildSet = _nextFiberChild ? _nextFiberChild.sibling : null;

      if (_nextFallbackChildSet != null) {
        mountFiberRecursively(_nextFallbackChildSet, nextFiber, true, traceNearestHostComponentUpdate);
        shouldResetChildren = true;
      }
    } else {
      // Common case: Primary -> Primary.
      // This is the same codepath as for non-Suspense fibers.
      if (nextFiber.child !== prevFiber.child) {
        // If the first child is different, we need to traverse them.
        // Each next child will be either a new child (mount) or an alternate (update).
        var nextChild = nextFiber.child;
        var prevChildAtSameIndex = prevFiber.child;

        while (nextChild) {
          // We already know children will be referentially different because
          // they are either new mounts or alternates of previous children.
          // Schedule updates and mounts depending on whether alternates exist.
          // We don't track deletions here because they are reported separately.
          if (nextChild.alternate) {
            var prevChild = nextChild.alternate;

            if (updateFiberRecursively(nextChild, prevChild, shouldIncludeInTree ? nextFiber : parentFiber, traceNearestHostComponentUpdate)) {
              // If a nested tree child order changed but it can't handle its own
              // child order invalidation (e.g. because it's filtered out like host nodes),
              // propagate the need to reset child order upwards to this Fiber.
              shouldResetChildren = true;
            } // However we also keep track if the order of the children matches
            // the previous order. They are always different referentially, but
            // if the instances line up conceptually we'll want to know that.


            if (prevChild !== prevChildAtSameIndex) {
              shouldResetChildren = true;
            }
          } else {
            mountFiberRecursively(nextChild, shouldIncludeInTree ? nextFiber : parentFiber, false, traceNearestHostComponentUpdate);
            shouldResetChildren = true;
          } // Try the next child.


          nextChild = nextChild.sibling; // Advance the pointer in the previous list so that we can
          // keep comparing if they line up.

          if (!shouldResetChildren && prevChildAtSameIndex !== null) {
            prevChildAtSameIndex = prevChildAtSameIndex.sibling;
          }
        } // If we have no more children, but used to, they don't line up.


        if (prevChildAtSameIndex !== null) {
          shouldResetChildren = true;
        }
      } else {
        if (traceUpdatesEnabled) {
          // If we're tracing updates and we've bailed out before reaching a host node,
          // we should fall back to recursively marking the nearest host descendates for highlight.
          if (traceNearestHostComponentUpdate) {
            var hostFibers = findAllCurrentHostFibers(getFiberID(getPrimaryFiber(nextFiber)));
            hostFibers.forEach(function (hostFiber) {
              traceUpdatesForNodes.add(hostFiber.stateNode);
            });
          }
        }
      }
    }

    if (shouldIncludeInTree) {
      var isProfilingSupported = nextFiber.hasOwnProperty('treeBaseDuration');

      if (isProfilingSupported) {
        recordProfilingDurations(nextFiber);
      }
    }

    if (shouldResetChildren) {
      // We need to crawl the subtree for closest non-filtered Fibers
      // so that we can display them in a flat children set.
      if (shouldIncludeInTree) {
        // Normally, search for children from the rendered child.
        var nextChildSet = nextFiber.child;

        if (nextDidTimeOut) {
          // Special case: timed-out Suspense renders the fallback set.
          var _nextFiberChild2 = nextFiber.child;
          nextChildSet = _nextFiberChild2 ? _nextFiberChild2.sibling : null;
        }

        if (nextChildSet != null) {
          recordResetChildren(nextFiber, nextChildSet);
        } // We've handled the child order change for this Fiber.
        // Since it's included, there's no need to invalidate parent child order.


        return false;
      } else {
        // Let the closest unfiltered parent Fiber reset its child order instead.
        return true;
      }
    } else {
      return false;
    }
  }

  function cleanup() {// We don't patch any methods so there is no cleanup.
  }

  function flushInitialOperations() {
    var localPendingOperationsQueue = pendingOperationsQueue;
    pendingOperationsQueue = null;

    if (localPendingOperationsQueue !== null && localPendingOperationsQueue.length > 0) {
      // We may have already queued up some operations before the frontend connected
      // If so, let the frontend know about them.
      localPendingOperationsQueue.forEach(function (operations) {
        hook.emit('operations', operations);
      });
    } else {
      // Before the traversals, remember to start tracking
      // our path in case we have selection to restore.
      if (trackedPath !== null) {
        mightBeOnTrackedPath = true;
      } // If we have not been profiling, then we can just walk the tree and build up its current state as-is.


      hook.getFiberRoots(rendererID).forEach(function (root) {
        currentRootID = getFiberID(getPrimaryFiber(root.current));
        setRootPseudoKey(currentRootID, root.current); // Checking root.memoizedInteractions handles multi-renderer edge-case-
        // where some v16 renderers support profiling and others don't.

        if (isProfiling && root.memoizedInteractions != null) {
          // If profiling is active, store commit time and duration, and the current interactions.
          // The frontend may request this information after profiling has stopped.
          currentCommitProfilingMetadata = {
            changeDescriptions: recordChangeDescriptions ? new Map() : null,
            durations: [],
            commitTime: getCurrentTime() - profilingStartTime,
            interactions: Array.from(root.memoizedInteractions).map(function (interaction) {
              return _objectSpread({}, interaction, {
                timestamp: interaction.timestamp - profilingStartTime
              });
            }),
            maxActualDuration: 0,
            priorityLevel: null
          };
        }

        mountFiberRecursively(root.current, null, false, false);
        flushPendingEvents(root);
        currentRootID = -1;
      });
    }
  }

  function handleCommitFiberUnmount(fiber) {
    // This is not recursive.
    // We can't traverse fibers after unmounting so instead
    // we rely on React telling us about each unmount.
    recordUnmount(fiber, false);
  }

  function handleCommitFiberRoot(root, priorityLevel) {
    var current = root.current;
    var alternate = current.alternate; // Certain types of updates bail out at the root without doing any actual render work.
    // React should probably not call the DevTools commit hook in this case,
    // but if it does- we can detect it and filter them out from the profiler.
    // NOTE: Keep this logic in sync with the one in flushPendingEvents()

    var didBailoutAtRoot = alternate !== null && alternate.expirationTime === 0 && alternate.childExpirationTime === 0;
    currentRootID = getFiberID(getPrimaryFiber(current)); // Before the traversals, remember to start tracking
    // our path in case we have selection to restore.

    if (trackedPath !== null) {
      mightBeOnTrackedPath = true;
    }

    if (traceUpdatesEnabled) {
      traceUpdatesForNodes.clear();
    } // Checking root.memoizedInteractions handles multi-renderer edge-case-
    // where some v16 renderers support profiling and others don't.


    var isProfilingSupported = root.memoizedInteractions != null;

    if (isProfiling && isProfilingSupported && !didBailoutAtRoot) {
      // If profiling is active, store commit time and duration, and the current interactions.
      // The frontend may request this information after profiling has stopped.
      currentCommitProfilingMetadata = {
        changeDescriptions: recordChangeDescriptions ? new Map() : null,
        durations: [],
        commitTime: getCurrentTime() - profilingStartTime,
        interactions: Array.from(root.memoizedInteractions).map(function (interaction) {
          return _objectSpread({}, interaction, {
            timestamp: interaction.timestamp - profilingStartTime
          });
        }),
        maxActualDuration: 0,
        priorityLevel: priorityLevel == null ? null : formatPriorityLevel(priorityLevel)
      };
    }

    if (alternate) {
      // TODO: relying on this seems a bit fishy.
      var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
      var isMounted = current.memoizedState != null && current.memoizedState.element != null;

      if (!wasMounted && isMounted) {
        // Mount a new root.
        setRootPseudoKey(currentRootID, current);
        mountFiberRecursively(current, null, false, false);
      } else if (wasMounted && isMounted) {
        // Update an existing root.
        updateFiberRecursively(current, alternate, null, false);
      } else if (wasMounted && !isMounted) {
        // Unmount an existing root.
        removeRootPseudoKey(currentRootID);
        recordUnmount(current, false);
      }
    } else {
      // Mount a new root.
      setRootPseudoKey(currentRootID, current);
      mountFiberRecursively(current, null, false, false);
    }

    if (isProfiling && isProfilingSupported && !didBailoutAtRoot) {
      var commitProfilingMetadata = rootToCommitProfilingMetadataMap.get(currentRootID);

      if (commitProfilingMetadata != null) {
        commitProfilingMetadata.push(currentCommitProfilingMetadata);
      } else {
        rootToCommitProfilingMetadataMap.set(currentRootID, [currentCommitProfilingMetadata]);
      }
    } // We're done here.


    flushPendingEvents(root);

    if (traceUpdatesEnabled) {
      hook.emit('traceUpdates', traceUpdatesForNodes);
    }

    currentRootID = -1;
  }

  function findAllCurrentHostFibers(id) {
    var fibers = [];
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (!fiber) {
      return fibers;
    } // Next we'll drill down this component to find all HostComponent/Text.


    var node = fiber;

    while (true) {
      if (node.tag === HostComponent || node.tag === HostText) {
        fibers.push(node);
      } else if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === fiber) {
        return fibers;
      }

      while (!node.sibling) {
        if (!node.return || node.return === fiber) {
          return fibers;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    } // Flow needs the return here, but ESLint complains about it.
    // eslint-disable-next-line no-unreachable


    return fibers;
  }

  function findNativeNodesForFiberID(id) {
    try {
      var _fiber = findCurrentFiberUsingSlowPathById(id);

      if (_fiber === null) {
        return null;
      } // Special case for a timed-out Suspense.


      var isTimedOutSuspense = _fiber.tag === SuspenseComponent && _fiber.memoizedState !== null;

      if (isTimedOutSuspense) {
        // A timed-out Suspense's findDOMNode is useless.
        // Try our best to find the fallback directly.
        var maybeFallbackFiber = _fiber.child && _fiber.child.sibling;

        if (maybeFallbackFiber != null) {
          _fiber = maybeFallbackFiber;
        }
      }

      var hostFibers = findAllCurrentHostFibers(id);
      return hostFibers.map(function (hostFiber) {
        return hostFiber.stateNode;
      }).filter(Boolean);
    } catch (err) {
      // The fiber might have unmounted by now.
      return null;
    }
  }

  function getFiberIDForNative(hostInstance) {
    var findNearestUnfilteredAncestor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var fiber = renderer.findFiberByHostInstance(hostInstance);

    if (fiber != null) {
      if (findNearestUnfilteredAncestor) {
        while (fiber !== null && shouldFilterFiber(fiber)) {
          fiber = fiber.return;
        }
      }

      return getFiberID(getPrimaryFiber(fiber));
    }

    return null;
  }

  var MOUNTING = 1;
  var MOUNTED = 2;
  var UNMOUNTED = 3; // This function is copied from React and should be kept in sync:
  // https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberTreeReflection.js

  function isFiberMountedImpl(fiber) {
    var node = fiber;

    if (!fiber.alternate) {
      // If there is no alternate, this might be a new tree that isn't inserted
      // yet. If it is, then it will have a pending insertion effect on it.
      if ((node.effectTag & Placement) !== NoEffect) {
        return MOUNTING;
      }

      while (node.return) {
        node = node.return;

        if ((node.effectTag & Placement) !== NoEffect) {
          return MOUNTING;
        }
      }
    } else {
      while (node.return) {
        node = node.return;
      }
    }

    if (node.tag === HostRoot) {
      // TODO: Check if this was a nested HostRoot when used with
      // renderContainerIntoSubtree.
      return MOUNTED;
    } // If we didn't hit the root, that means that we're in an disconnected tree
    // that has been unmounted.


    return UNMOUNTED;
  } // This function is copied from React and should be kept in sync:
  // https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberTreeReflection.js
  // It would be nice if we updated React to inject this function directly (vs just indirectly via findDOMNode).
  // BEGIN copied code


  function findCurrentFiberUsingSlowPathById(id) {
    var fiber = idToFiberMap.get(id);

    if (fiber == null) {
      console.warn("Could not find Fiber with id \"".concat(id, "\""));
      return null;
    }

    var alternate = fiber.alternate;

    if (!alternate) {
      // If there is no alternate, then we only need to check if it is mounted.
      var state = isFiberMountedImpl(fiber);

      if (state === UNMOUNTED) {
        throw Error('Unable to find node on an unmounted component.');
      }

      if (state === MOUNTING) {
        return null;
      }

      return fiber;
    } // If we have two possible branches, we'll walk backwards up to the root
    // to see what path the root points to. On the way we may hit one of the
    // special cases and we'll deal with them.


    var a = fiber;
    var b = alternate;

    while (true) {
      var parentA = a.return;

      if (parentA === null) {
        // We're at the root.
        break;
      }

      var parentB = parentA.alternate;

      if (parentB === null) {
        // There is no alternate. This is an unusual case. Currently, it only
        // happens when a Suspense component is hidden. An extra fragment fiber
        // is inserted in between the Suspense fiber and its children. Skip
        // over this extra fragment fiber and proceed to the next parent.
        var nextParent = parentA.return;

        if (nextParent !== null) {
          a = b = nextParent;
          continue;
        } // If there's no parent, we're at the root.


        break;
      } // If both copies of the parent fiber point to the same child, we can
      // assume that the child is current. This happens when we bailout on low
      // priority: the bailed out fiber's child reuses the current child.


      if (parentA.child === parentB.child) {
        var child = parentA.child;

        while (child) {
          if (child === a) {
            // We've determined that A is the current branch.
            if (isFiberMountedImpl(parentA) !== MOUNTED) {
              throw Error('Unable to find node on an unmounted component.');
            }

            return fiber;
          }

          if (child === b) {
            // We've determined that B is the current branch.
            if (isFiberMountedImpl(parentA) !== MOUNTED) {
              throw Error('Unable to find node on an unmounted component.');
            }

            return alternate;
          }

          child = child.sibling;
        } // We should never have an alternate for any mounting node. So the only
        // way this could possibly happen is if this was unmounted, if at all.


        throw Error('Unable to find node on an unmounted component.');
      }

      if (a.return !== b.return) {
        // The return pointer of A and the return pointer of B point to different
        // fibers. We assume that return pointers never criss-cross, so A must
        // belong to the child set of A.return, and B must belong to the child
        // set of B.return.
        a = parentA;
        b = parentB;
      } else {
        // The return pointers point to the same fiber. We'll have to use the
        // default, slow path: scan the child sets of each parent alternate to see
        // which child belongs to which set.
        //
        // Search parent A's child set
        var didFindChild = false;
        var _child = parentA.child;

        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentA;
            b = parentB;
            break;
          }

          if (_child === b) {
            didFindChild = true;
            b = parentA;
            a = parentB;
            break;
          }

          _child = _child.sibling;
        }

        if (!didFindChild) {
          // Search parent B's child set
          _child = parentB.child;

          while (_child) {
            if (_child === a) {
              didFindChild = true;
              a = parentB;
              b = parentA;
              break;
            }

            if (_child === b) {
              didFindChild = true;
              b = parentB;
              a = parentA;
              break;
            }

            _child = _child.sibling;
          }

          if (!didFindChild) {
            throw Error('Child was not found in either parent set. This indicates a bug ' + 'in React related to the return pointer. Please file an issue.');
          }
        }
      }

      if (a.alternate !== b) {
        throw Error("Return fibers should always be each others' alternates. " + 'This error is likely caused by a bug in React. Please file an issue.');
      }
    } // If the root is not a host container, we're in a disconnected tree. I.e.
    // unmounted.


    if (a.tag !== HostRoot) {
      throw Error('Unable to find node on an unmounted component.');
    }

    if (a.stateNode.current === a) {
      // We've determined that A is the current branch.
      return fiber;
    } // Otherwise B has to be current branch.


    return alternate;
  } // END copied code


  function prepareViewAttributeSource(id, path) {
    var isCurrent = isMostRecentlyInspectedElementCurrent(id);

    if (isCurrent) {
      window.$attribute = Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getInObject"])(mostRecentlyInspectedElement, path);
    }
  }

  function prepareViewElementSource(id) {
    var fiber = idToFiberMap.get(id);

    if (fiber == null) {
      console.warn("Could not find Fiber with id \"".concat(id, "\""));
      return;
    }

    var elementType = fiber.elementType,
        tag = fiber.tag,
        type = fiber.type;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
      case FunctionComponent:
        global.$type = type;
        break;

      case ForwardRef:
        global.$type = type.render;
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        global.$type = elementType != null && elementType.type != null ? elementType.type : type;
        break;

      default:
        global.$type = null;
        break;
    }
  }

  function getOwnersList(id) {
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber == null) {
      return null;
    }

    var _debugOwner = fiber._debugOwner;
    var owners = [{
      displayName: getDisplayNameForFiber(fiber) || 'Anonymous',
      id: id,
      type: getElementTypeForFiber(fiber)
    }];

    if (_debugOwner) {
      var owner = _debugOwner;

      while (owner !== null) {
        owners.unshift({
          displayName: getDisplayNameForFiber(owner) || 'Anonymous',
          id: getFiberID(getPrimaryFiber(owner)),
          type: getElementTypeForFiber(owner)
        });
        owner = owner._debugOwner || null;
      }
    }

    return owners;
  } // Fast path props lookup for React Native style editor.
  // Could use inspectElementRaw() but that would require shallow rendering hooks components,
  // and could also mess with memoization.


  function getInstanceAndStyle(id) {
    var instance = null;
    var style = null;
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      instance = fiber.stateNode;

      if (fiber.memoizedProps !== null) {
        style = fiber.memoizedProps.style;
      }
    }

    return {
      instance: instance,
      style: style
    };
  }

  function inspectElementRaw(id) {
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber == null) {
      return null;
    }

    var _debugOwner = fiber._debugOwner,
        _debugSource = fiber._debugSource,
        dependencies = fiber.dependencies,
        stateNode = fiber.stateNode,
        memoizedProps = fiber.memoizedProps,
        memoizedState = fiber.memoizedState,
        tag = fiber.tag,
        type = fiber.type;
    var elementType = getElementTypeForFiber(fiber);
    var usesHooks = (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) && (!!memoizedState || !!dependencies);
    var typeSymbol = getTypeSymbol(type);
    var canViewSource = false;
    var context = null;

    if (tag === ClassComponent || tag === FunctionComponent || tag === IncompleteClassComponent || tag === IndeterminateComponent || tag === MemoComponent || tag === ForwardRef || tag === SimpleMemoComponent) {
      canViewSource = true;

      if (stateNode && stateNode.context != null) {
        // Don't show an empty context object for class components that don't use the context API.
        var shouldHideContext = elementType === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_1__["ElementTypeClass"] && !(type.contextTypes || type.contextType);

        if (!shouldHideContext) {
          context = stateNode.context;
        }
      }
    } else if (typeSymbol === CONTEXT_CONSUMER_NUMBER || typeSymbol === CONTEXT_CONSUMER_SYMBOL_STRING) {
      // 16.3-16.5 read from "type" because the Consumer is the actual context object.
      // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
      // NOTE Keep in sync with getDisplayNameForFiber()
      var consumerResolvedContext = type._context || type; // Global context value.

      context = consumerResolvedContext._currentValue || null; // Look for overridden value.

      var current = fiber.return;

      while (current !== null) {
        var currentType = current.type;
        var currentTypeSymbol = getTypeSymbol(currentType);

        if (currentTypeSymbol === CONTEXT_PROVIDER_NUMBER || currentTypeSymbol === CONTEXT_PROVIDER_SYMBOL_STRING) {
          // 16.3.0 exposed the context object as "context"
          // PR #12501 changed it to "_context" for 16.3.1+
          // NOTE Keep in sync with getDisplayNameForFiber()
          var providerResolvedContext = currentType._context || currentType.context;

          if (providerResolvedContext === consumerResolvedContext) {
            context = current.memoizedProps.value;
            break;
          }
        }

        current = current.return;
      }
    }

    var hasLegacyContext = false;

    if (context !== null) {
      hasLegacyContext = !!type.contextTypes; // To simplify hydration and display logic for context, wrap in a value object.
      // Otherwise simple values (e.g. strings, booleans) become harder to handle.

      context = {
        value: context
      };
    }

    var owners = null;

    if (_debugOwner) {
      owners = [];
      var owner = _debugOwner;

      while (owner !== null) {
        owners.push({
          displayName: getDisplayNameForFiber(owner) || 'Anonymous',
          id: getFiberID(getPrimaryFiber(owner)),
          type: getElementTypeForFiber(owner)
        });
        owner = owner._debugOwner || null;
      }
    }

    var isTimedOutSuspense = tag === SuspenseComponent && memoizedState !== null;
    var hooks = null;

    if (usesHooks) {
      var originalConsoleMethods = {}; // Temporarily disable all console logging before re-running the hook.

      for (var method in console) {
        try {
          originalConsoleMethods[method] = console[method]; // $FlowFixMe property error|warn is not writable.

          console[method] = function () {};
        } catch (error) {}
      }

      try {
        hooks = Object(react_debug_tools__WEBPACK_IMPORTED_MODULE_6__["inspectHooksOfFiber"])(fiber, renderer.currentDispatcherRef);
      } finally {
        // Restore original console functionality.
        for (var _method in originalConsoleMethods) {
          try {
            // $FlowFixMe property error|warn is not writable.
            console[_method] = originalConsoleMethods[_method];
          } catch (error) {}
        }
      }
    }

    return {
      id: id,
      // Does the current renderer support editable hooks?
      canEditHooks: typeof overrideHookState === 'function',
      // Does the current renderer support editable function props?
      canEditFunctionProps: typeof overrideProps === 'function',
      canToggleSuspense: supportsTogglingSuspense && ( // If it's showing the real content, we can always flip fallback.
      !isTimedOutSuspense || // If it's showing fallback because we previously forced it to,
      // allow toggling it back to remove the fallback override.
      forceFallbackForSuspenseIDs.has(id)),
      // Can view component source location.
      canViewSource: canViewSource,
      // Does the component have legacy context attached to it.
      hasLegacyContext: hasLegacyContext,
      displayName: getDisplayNameForFiber(fiber),
      type: elementType,
      // Inspectable properties.
      // TODO Review sanitization approach for the below inspectable values.
      context: context,
      hooks: hooks,
      props: memoizedProps,
      state: usesHooks ? null : memoizedState,
      // List of owners
      owners: owners,
      // Location of component in source coude.
      source: _debugSource || null
    };
  }

  var mostRecentlyInspectedElement = null;
  var hasElementUpdatedSinceLastInspected = false;
  var currentlyInspectedPaths = {};

  function isMostRecentlyInspectedElementCurrent(id) {
    return mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id && !hasElementUpdatedSinceLastInspected;
  } // Track the intersection of currently inspected paths,
  // so that we can send their data along if the element is re-rendered.


  function mergeInspectedPaths(path) {
    var current = currentlyInspectedPaths;
    path.forEach(function (key) {
      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    });
  }

  function createIsPathWhitelisted(key, secondaryCategory) {
    // This function helps prevent previously-inspected paths from being dehydrated in updates.
    // This is important to avoid a bad user experience where expanded toggles collapse on update.
    return function isPathWhitelisted(path) {
      switch (secondaryCategory) {
        case 'hooks':
          if (path.length === 1) {
            // Never dehydrate the "hooks" object at the top levels.
            return true;
          }

          if (path[path.length - 1] === 'subHooks' || path[path.length - 2] === 'subHooks') {
            // Dehydrating the 'subHooks' property makes the HooksTree UI a lot more complicated,
            // so it's easiest for now if we just don't break on this boundary.
            // We can always dehydrate a level deeper (in the value object).
            return true;
          }

          break;

        default:
          break;
      }

      var current = key === null ? currentlyInspectedPaths : currentlyInspectedPaths[key];

      if (!current) {
        return false;
      }

      for (var i = 0; i < path.length; i++) {
        current = current[path[i]];

        if (!current) {
          return false;
        }
      }

      return true;
    };
  }

  function updateSelectedElement(inspectedElement) {
    var hooks = inspectedElement.hooks,
        id = inspectedElement.id,
        props = inspectedElement.props;
    var fiber = idToFiberMap.get(id);

    if (fiber == null) {
      console.warn("Could not find Fiber with id \"".concat(id, "\""));
      return;
    }

    var elementType = fiber.elementType,
        stateNode = fiber.stateNode,
        tag = fiber.tag,
        type = fiber.type;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
        global.$r = stateNode;
        break;

      case FunctionComponent:
        global.$r = {
          hooks: hooks,
          props: props,
          type: type
        };
        break;

      case ForwardRef:
        global.$r = {
          props: props,
          type: type.render
        };
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        global.$r = {
          props: props,
          type: elementType != null && elementType.type != null ? elementType.type : type
        };
        break;

      default:
        global.$r = null;
        break;
    }
  }

  function storeAsGlobal(id, path, count) {
    var isCurrent = isMostRecentlyInspectedElementCurrent(id);

    if (isCurrent) {
      var value = Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getInObject"])(mostRecentlyInspectedElement, path);
      var key = "$reactTemp".concat(count);
      window[key] = value;
      console.log(key);
      console.log(value);
    }
  }

  function copyElementPath(id, path) {
    var isCurrent = isMostRecentlyInspectedElementCurrent(id);

    if (isCurrent) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["copyToClipboard"])(Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getInObject"])(mostRecentlyInspectedElement, path));
    }
  }

  function inspectElement(id, path) {
    var isCurrent = isMostRecentlyInspectedElementCurrent(id);

    if (isCurrent) {
      if (path != null) {
        mergeInspectedPaths(path);
        var secondaryCategory = null;

        if (path[0] === 'hooks') {
          secondaryCategory = 'hooks';
        } // If this element has not been updated since it was last inspected,
        // we can just return the subset of data in the newly-inspected path.


        return {
          id: id,
          type: 'hydrated-path',
          path: path,
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanForBridge"])(Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["getInObject"])(mostRecentlyInspectedElement, path), createIsPathWhitelisted(null, secondaryCategory), path)
        };
      } else {
        // If this element has not been updated since it was last inspected, we don't need to re-run it.
        // Instead we can just return the ID to indicate that it has not changed.
        return {
          id: id,
          type: 'no-change'
        };
      }
    } else {
      hasElementUpdatedSinceLastInspected = false;

      if (mostRecentlyInspectedElement === null || mostRecentlyInspectedElement.id !== id) {
        currentlyInspectedPaths = {};
      }

      mostRecentlyInspectedElement = inspectElementRaw(id);

      if (mostRecentlyInspectedElement === null) {
        return {
          id: id,
          type: 'not-found'
        };
      }

      if (path != null) {
        mergeInspectedPaths(path);
      } // Any time an inspected element has an update,
      // we should update the selected $r value as wel.
      // Do this before dehyration (cleanForBridge).


      updateSelectedElement(mostRecentlyInspectedElement); // Clone before cleaning so that we preserve the full data.
      // This will enable us to send patches without re-inspecting if hydrated paths are requested.
      // (Reducing how often we shallow-render is a better DX for function components that use hooks.)

      var cleanedInspectedElement = _objectSpread({}, mostRecentlyInspectedElement);

      cleanedInspectedElement.context = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanForBridge"])(cleanedInspectedElement.context, createIsPathWhitelisted('context', null));
      cleanedInspectedElement.hooks = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanForBridge"])(cleanedInspectedElement.hooks, createIsPathWhitelisted('hooks', 'hooks'));
      cleanedInspectedElement.props = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanForBridge"])(cleanedInspectedElement.props, createIsPathWhitelisted('props', null));
      cleanedInspectedElement.state = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanForBridge"])(cleanedInspectedElement.state, createIsPathWhitelisted('state', null));
      return {
        id: id,
        type: 'full-data',
        value: cleanedInspectedElement
      };
    }
  }

  function logElementToConsole(id) {
    var result = isMostRecentlyInspectedElementCurrent(id) ? mostRecentlyInspectedElement : inspectElementRaw(id);

    if (result === null) {
      console.warn("Could not find Fiber with id \"".concat(id, "\""));
      return;
    }

    var supportsGroup = typeof console.groupCollapsed === 'function';

    if (supportsGroup) {
      console.groupCollapsed("[Click to expand] %c<".concat(result.displayName || 'Component', " />"), // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
      'color: var(--dom-tag-name-color); font-weight: normal;');
    }

    if (result.props !== null) {
      console.log('Props:', result.props);
    }

    if (result.state !== null) {
      console.log('State:', result.state);
    }

    if (result.hooks !== null) {
      console.log('Hooks:', result.hooks);
    }

    var nativeNodes = findNativeNodesForFiberID(id);

    if (nativeNodes !== null) {
      console.log('Nodes:', nativeNodes);
    }

    if (result.source !== null) {
      console.log('Location:', result.source);
    }

    if (window.chrome || /firefox/i.test(navigator.userAgent)) {
      console.log('Right-click any value to save it as a global variable for further inspection.');
    }

    if (supportsGroup) {
      console.groupEnd();
    }
  }

  function setInHook(id, index, path, value) {
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      if (typeof overrideHookState === 'function') {
        overrideHookState(fiber, index, path, value);
      }
    }
  }

  function setInProps(id, path, value) {
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      var instance = fiber.stateNode;

      if (instance === null) {
        if (typeof overrideProps === 'function') {
          overrideProps(fiber, path, value);
        }
      } else {
        fiber.pendingProps = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["copyWithSet"])(instance.props, path, value);
        instance.forceUpdate();
      }
    }
  }

  function setInState(id, path, value) {
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      var instance = fiber.stateNode;
      Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["setInObject"])(instance.state, path, value);
      instance.forceUpdate();
    }
  }

  function setInContext(id, path, value) {
    // To simplify hydration and display of primative context values (e.g. number, string)
    // the inspectElement() method wraps context in a {value: ...} object.
    // We need to remove the first part of the path (the "value") before continuing.
    path = path.slice(1);
    var fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      var instance = fiber.stateNode;

      if (path.length === 0) {
        // Simple context value
        instance.context = value;
      } else {
        Object(react_devtools_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["setInObject"])(instance.context, path, value);
      }

      instance.forceUpdate();
    }
  }

  var currentCommitProfilingMetadata = null;
  var displayNamesByRootID = null;
  var idToContextsMap = null;
  var initialTreeBaseDurationsMap = null;
  var initialIDToRootMap = null;
  var isProfiling = false;
  var profilingStartTime = 0;
  var recordChangeDescriptions = false;
  var rootToCommitProfilingMetadataMap = null;

  function getProfilingData() {
    var dataForRoots = [];

    if (rootToCommitProfilingMetadataMap === null) {
      throw Error('getProfilingData() called before any profiling data was recorded');
    }

    rootToCommitProfilingMetadataMap.forEach(function (commitProfilingMetadata, rootID) {
      var commitData = [];
      var initialTreeBaseDurations = [];
      var allInteractions = new Map();
      var interactionCommits = new Map();
      var displayName = displayNamesByRootID !== null && displayNamesByRootID.get(rootID) || 'Unknown';

      if (initialTreeBaseDurationsMap != null) {
        initialTreeBaseDurationsMap.forEach(function (treeBaseDuration, id) {
          if (initialIDToRootMap != null && initialIDToRootMap.get(id) === rootID) {
            // We don't need to convert milliseconds to microseconds in this case,
            // because the profiling summary is JSON serialized.
            initialTreeBaseDurations.push([id, treeBaseDuration]);
          }
        });
      }

      commitProfilingMetadata.forEach(function (commitProfilingData, commitIndex) {
        var changeDescriptions = commitProfilingData.changeDescriptions,
            durations = commitProfilingData.durations,
            interactions = commitProfilingData.interactions,
            maxActualDuration = commitProfilingData.maxActualDuration,
            priorityLevel = commitProfilingData.priorityLevel,
            commitTime = commitProfilingData.commitTime;
        var interactionIDs = [];
        interactions.forEach(function (interaction) {
          if (!allInteractions.has(interaction.id)) {
            allInteractions.set(interaction.id, interaction);
          }

          interactionIDs.push(interaction.id);
          var commitIndices = interactionCommits.get(interaction.id);

          if (commitIndices != null) {
            commitIndices.push(commitIndex);
          } else {
            interactionCommits.set(interaction.id, [commitIndex]);
          }
        });
        var fiberActualDurations = [];
        var fiberSelfDurations = [];

        for (var i = 0; i < durations.length; i += 3) {
          var fiberID = durations[i];
          fiberActualDurations.push([fiberID, durations[i + 1]]);
          fiberSelfDurations.push([fiberID, durations[i + 2]]);
        }

        commitData.push({
          changeDescriptions: changeDescriptions !== null ? Array.from(changeDescriptions.entries()) : null,
          duration: maxActualDuration,
          fiberActualDurations: fiberActualDurations,
          fiberSelfDurations: fiberSelfDurations,
          interactionIDs: interactionIDs,
          priorityLevel: priorityLevel,
          timestamp: commitTime
        });
      });
      dataForRoots.push({
        commitData: commitData,
        displayName: displayName,
        initialTreeBaseDurations: initialTreeBaseDurations,
        interactionCommits: Array.from(interactionCommits.entries()),
        interactions: Array.from(allInteractions.entries()),
        rootID: rootID
      });
    });
    return {
      dataForRoots: dataForRoots,
      rendererID: rendererID
    };
  }

  function startProfiling(shouldRecordChangeDescriptions) {
    if (isProfiling) {
      return;
    }

    recordChangeDescriptions = shouldRecordChangeDescriptions; // Capture initial values as of the time profiling starts.
    // It's important we snapshot both the durations and the id-to-root map,
    // since either of these may change during the profiling session
    // (e.g. when a fiber is re-rendered or when a fiber gets removed).

    displayNamesByRootID = new Map();
    initialTreeBaseDurationsMap = new Map(idToTreeBaseDurationMap);
    initialIDToRootMap = new Map(idToRootMap);
    idToContextsMap = new Map();
    hook.getFiberRoots(rendererID).forEach(function (root) {
      var rootID = getFiberID(getPrimaryFiber(root.current));
      displayNamesByRootID.set(rootID, getDisplayNameForRoot(root.current));

      if (shouldRecordChangeDescriptions) {
        // Record all contexts at the time profiling is started.
        // Fibers only store the current context value,
        // so we need to track them separatenly in order to determine changed keys.
        crawlToInitializeContextsMap(root.current);
      }
    });
    isProfiling = true;
    profilingStartTime = getCurrentTime();
    rootToCommitProfilingMetadataMap = new Map();
  }

  function stopProfiling() {
    isProfiling = false;
    recordChangeDescriptions = false;
  } // Automatically start profiling so that we don't miss timing info from initial "mount".


  if (Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE_RELOAD_AND_PROFILE_KEY"]) === 'true') {
    startProfiling(Object(react_devtools_shared_src_storage__WEBPACK_IMPORTED_MODULE_3__["sessionStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY"]) === 'true');
  } // React will switch between these implementations depending on whether
  // we have any manually suspended Fibers or not.


  function shouldSuspendFiberAlwaysFalse() {
    return false;
  }

  var forceFallbackForSuspenseIDs = new Set();

  function shouldSuspendFiberAccordingToSet(fiber) {
    var id = getFiberID(getPrimaryFiber(fiber));
    return forceFallbackForSuspenseIDs.has(id);
  }

  function overrideSuspense(id, forceFallback) {
    if (typeof setSuspenseHandler !== 'function' || typeof scheduleUpdate !== 'function') {
      throw new Error('Expected overrideSuspense() to not get called for earlier React versions.');
    }

    if (forceFallback) {
      forceFallbackForSuspenseIDs.add(id);

      if (forceFallbackForSuspenseIDs.size === 1) {
        // First override is added. Switch React to slower path.
        setSuspenseHandler(shouldSuspendFiberAccordingToSet);
      }
    } else {
      forceFallbackForSuspenseIDs.delete(id);

      if (forceFallbackForSuspenseIDs.size === 0) {
        // Last override is gone. Switch React back to fast path.
        setSuspenseHandler(shouldSuspendFiberAlwaysFalse);
      }
    }

    var fiber = idToFiberMap.get(id);

    if (fiber != null) {
      scheduleUpdate(fiber);
    }
  } // Remember if we're trying to restore the selection after reload.
  // In that case, we'll do some extra checks for matching mounts.


  var trackedPath = null;
  var trackedPathMatchFiber = null;
  var trackedPathMatchDepth = -1;
  var mightBeOnTrackedPath = false;

  function setTrackedPath(path) {
    if (path === null) {
      trackedPathMatchFiber = null;
      trackedPathMatchDepth = -1;
      mightBeOnTrackedPath = false;
    }

    trackedPath = path;
  } // We call this before traversing a new mount.
  // It remembers whether this Fiber is the next best match for tracked path.
  // The return value signals whether we should keep matching siblings or not.


  function updateTrackedPathStateBeforeMount(fiber) {
    if (trackedPath === null || !mightBeOnTrackedPath) {
      // Fast path: there's nothing to track so do nothing and ignore siblings.
      return false;
    }

    var returnFiber = fiber.return;
    var returnAlternate = returnFiber !== null ? returnFiber.alternate : null; // By now we know there's some selection to restore, and this is a new Fiber.
    // Is this newly mounted Fiber a direct child of the current best match?
    // (This will also be true for new roots if we haven't matched anything yet.)

    if (trackedPathMatchFiber === returnFiber || trackedPathMatchFiber === returnAlternate && returnAlternate !== null) {
      // Is this the next Fiber we should select? Let's compare the frames.
      var actualFrame = getPathFrame(fiber);
      var expectedFrame = trackedPath[trackedPathMatchDepth + 1];

      if (expectedFrame === undefined) {
        throw new Error('Expected to see a frame at the next depth.');
      }

      if (actualFrame.index === expectedFrame.index && actualFrame.key === expectedFrame.key && actualFrame.displayName === expectedFrame.displayName) {
        // We have our next match.
        trackedPathMatchFiber = fiber;
        trackedPathMatchDepth++; // Are we out of frames to match?

        if (trackedPathMatchDepth === trackedPath.length - 1) {
          // There's nothing that can possibly match afterwards.
          // Don't check the children.
          mightBeOnTrackedPath = false;
        } else {
          // Check the children, as they might reveal the next match.
          mightBeOnTrackedPath = true;
        } // In either case, since we have a match, we don't need
        // to check the siblings. They'll never match.


        return false;
      }
    } // This Fiber's parent is on the path, but this Fiber itself isn't.
    // There's no need to check its children--they won't be on the path either.


    mightBeOnTrackedPath = false; // However, one of its siblings may be on the path so keep searching.

    return true;
  }

  function updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath) {
    // updateTrackedPathStateBeforeMount() told us whether to match siblings.
    // Now that we're entering siblings, let's use that information.
    mightBeOnTrackedPath = mightSiblingsBeOnTrackedPath;
  } // Roots don't have a real persistent identity.
  // A root's "pseudo key" is "childDisplayName:indexWithThatName".
  // For example, "App:0" or, in case of similar roots, "Story:0", "Story:1", etc.
  // We will use this to try to disambiguate roots when restoring selection between reloads.


  var rootPseudoKeys = new Map();
  var rootDisplayNameCounter = new Map();

  function setRootPseudoKey(id, fiber) {
    var name = getDisplayNameForRoot(fiber);
    var counter = rootDisplayNameCounter.get(name) || 0;
    rootDisplayNameCounter.set(name, counter + 1);
    var pseudoKey = "".concat(name, ":").concat(counter);
    rootPseudoKeys.set(id, pseudoKey);
  }

  function removeRootPseudoKey(id) {
    var pseudoKey = rootPseudoKeys.get(id);

    if (pseudoKey === undefined) {
      throw new Error('Expected root pseudo key to be known.');
    }

    var name = pseudoKey.substring(0, pseudoKey.lastIndexOf(':'));
    var counter = rootDisplayNameCounter.get(name);

    if (counter === undefined) {
      throw new Error('Expected counter to be known.');
    }

    if (counter > 1) {
      rootDisplayNameCounter.set(name, counter - 1);
    } else {
      rootDisplayNameCounter.delete(name);
    }

    rootPseudoKeys.delete(id);
  }

  function getDisplayNameForRoot(fiber) {
    var preferredDisplayName = null;
    var fallbackDisplayName = null;
    var child = fiber.child; // Go at most three levels deep into direct children
    // while searching for a child that has a displayName.

    for (var i = 0; i < 3; i++) {
      if (child === null) {
        break;
      }

      var displayName = getDisplayNameForFiber(child);

      if (displayName !== null) {
        // Prefer display names that we get from user-defined components.
        // We want to avoid using e.g. 'Suspense' unless we find nothing else.
        if (typeof child.type === 'function') {
          // There's a few user-defined tags, but we'll prefer the ones
          // that are usually explicitly named (function or class components).
          preferredDisplayName = displayName;
        } else if (fallbackDisplayName === null) {
          fallbackDisplayName = displayName;
        }
      }

      if (preferredDisplayName !== null) {
        break;
      }

      child = child.child;
    }

    return preferredDisplayName || fallbackDisplayName || 'Anonymous';
  }

  function getPathFrame(fiber) {
    var key = fiber.key;
    var displayName = getDisplayNameForFiber(fiber);
    var index = fiber.index;

    switch (fiber.tag) {
      case HostRoot:
        // Roots don't have a real displayName, index, or key.
        // Instead, we'll use the pseudo key (childDisplayName:indexWithThatName).
        var id = getFiberID(getPrimaryFiber(fiber));
        var pseudoKey = rootPseudoKeys.get(id);

        if (pseudoKey === undefined) {
          throw new Error('Expected mounted root to have known pseudo key.');
        }

        displayName = pseudoKey;
        break;

      case HostComponent:
        displayName = fiber.type;
        break;

      default:
        break;
    }

    return {
      displayName: displayName,
      key: key,
      index: index
    };
  } // Produces a serializable representation that does a best effort
  // of identifying a particular Fiber between page reloads.
  // The return path will contain Fibers that are "invisible" to the store
  // because their keys and indexes are important to restoring the selection.


  function getPathForElement(id) {
    var fiber = idToFiberMap.get(id);

    if (fiber == null) {
      return null;
    }

    var keyPath = [];

    while (fiber !== null) {
      keyPath.push(getPathFrame(fiber));
      fiber = fiber.return;
    }

    keyPath.reverse();
    return keyPath;
  }

  function getBestMatchForTrackedPath() {
    if (trackedPath === null) {
      // Nothing to match.
      return null;
    }

    if (trackedPathMatchFiber === null) {
      // We didn't find anything.
      return null;
    } // Find the closest Fiber store is aware of.


    var fiber = trackedPathMatchFiber;

    while (fiber !== null && shouldFilterFiber(fiber)) {
      fiber = fiber.return;
    }

    if (fiber === null) {
      return null;
    }

    return {
      id: getFiberID(getPrimaryFiber(fiber)),
      isFullMatch: trackedPathMatchDepth === trackedPath.length - 1
    };
  }

  var formatPriorityLevel = function formatPriorityLevel(priorityLevel) {
    if (priorityLevel == null) {
      return 'Unknown';
    }

    switch (priorityLevel) {
      case ImmediatePriority:
        return 'Immediate';

      case UserBlockingPriority:
        return 'User-Blocking';

      case NormalPriority:
        return 'Normal';

      case LowPriority:
        return 'Low';

      case IdlePriority:
        return 'Idle';

      case NoPriority:
      default:
        return 'Unknown';
    }
  };

  function setTraceUpdatesEnabled(isEnabled) {
    traceUpdatesEnabled = isEnabled;
  }

  return {
    cleanup: cleanup,
    copyElementPath: copyElementPath,
    findNativeNodesForFiberID: findNativeNodesForFiberID,
    flushInitialOperations: flushInitialOperations,
    getBestMatchForTrackedPath: getBestMatchForTrackedPath,
    getFiberIDForNative: getFiberIDForNative,
    getInstanceAndStyle: getInstanceAndStyle,
    getOwnersList: getOwnersList,
    getPathForElement: getPathForElement,
    getProfilingData: getProfilingData,
    handleCommitFiberRoot: handleCommitFiberRoot,
    handleCommitFiberUnmount: handleCommitFiberUnmount,
    inspectElement: inspectElement,
    logElementToConsole: logElementToConsole,
    prepareViewAttributeSource: prepareViewAttributeSource,
    prepareViewElementSource: prepareViewElementSource,
    overrideSuspense: overrideSuspense,
    renderer: renderer,
    setInContext: setInContext,
    setInHook: setInHook,
    setInProps: setInProps,
    setInState: setInState,
    setTraceUpdatesEnabled: setTraceUpdatesEnabled,
    setTrackedPath: setTrackedPath,
    startProfiling: startProfiling,
    stopProfiling: stopProfiling,
    storeAsGlobal: storeAsGlobal,
    updateComponentFilters: updateComponentFilters
  };
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/utils.js":
/*!*****************************************************!*\
  !*** ../react-devtools-shared/src/backend/utils.js ***!
  \*****************************************************/
/*! exports provided: cleanForBridge, copyToClipboard, copyWithSet, serializeToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForBridge", function() { return cleanForBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyWithSet", function() { return copyWithSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeToString", function() { return serializeToString; });
/* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard-js */ "../../node_modules/clipboard-js/clipboard.js");
/* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration */ "../react-devtools-shared/src/hydration.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function cleanForBridge(data, isPathWhitelisted) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (data !== null) {
    var cleanedPaths = [];
    var unserializablePaths = [];
    var cleanedData = Object(_hydration__WEBPACK_IMPORTED_MODULE_1__["dehydrate"])(data, cleanedPaths, unserializablePaths, path, isPathWhitelisted);
    return {
      data: cleanedData,
      cleaned: cleanedPaths,
      unserializable: unserializablePaths
    };
  } else {
    return null;
  }
}
function copyToClipboard(value) {
  var safeToCopy = serializeToString(value);
  var text = safeToCopy === undefined ? 'undefined' : safeToCopy;
  var clipboardCopyText = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.clipboardCopyText; // On Firefox navigator.clipboard.writeText has to be called from
  // the content script js code (because it requires the clipboardWrite
  // permission to be allowed out of a "user handling" callback),
  // clipboardCopyText is an helper injected into the page from.
  // injectGlobalHook.

  if (typeof clipboardCopyText === 'function') {
    clipboardCopyText(text).catch(function (err) {});
  } else {
    Object(clipboard_js__WEBPACK_IMPORTED_MODULE_0__["copy"])(text);
  }
}
function copyWithSet(obj, path, value) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (index >= path.length) {
    return value;
  }

  var key = path[index];
  var updated = Array.isArray(obj) ? obj.slice() : _objectSpread({}, obj); // $FlowFixMe number or string is fine here

  updated[key] = copyWithSet(obj[key], path, value, index + 1);
  return updated;
}
function serializeToString(data) {
  var cache = new Set(); // Use a custom replacer function to protect against circular references.

  return JSON.stringify(data, function (key, value) {
    if (_typeof(value) === 'object' && value !== null) {
      if (cache.has(value)) {
        return;
      }

      cache.add(value);
    }

    return value;
  });
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js":
/*!*****************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js ***!
  \*****************************************************************************/
/*! exports provided: hideOverlay, showOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideOverlay", function() { return hideOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOverlay", function() { return showOverlay; });
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ "../react-devtools-shared/src/backend/views/Highlighter/Overlay.js");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var SHOW_DURATION = 2000;
var timeoutID = null;
var overlay = null;
function hideOverlay() {
  timeoutID = null;

  if (overlay !== null) {
    overlay.remove();
    overlay = null;
  }
}
function showOverlay(elements, componentName, hideAfterTimeout) {
  // TODO (npm-packages) Detect RN and support it somehow
  if (window.document == null) {
    return;
  }

  if (timeoutID !== null) {
    clearTimeout(timeoutID);
  }

  if (elements == null) {
    return;
  }

  if (overlay === null) {
    overlay = new _Overlay__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  overlay.inspect(elements, componentName);

  if (hideAfterTimeout) {
    timeoutID = setTimeout(hideOverlay, SHOW_DURATION);
  }
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/Highlighter/Overlay.js":
/*!*************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/Highlighter/Overlay.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overlay; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../react-devtools-shared/src/backend/views/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// Note that the Overlay components are not affected by the active Theme,
// because they highlight elements in the main Chrome window (outside of devtools).
// The colors below were chosen to roughly match those used by Chrome devtools.
var OverlayRect =
/*#__PURE__*/
function () {
  function OverlayRect(doc, container) {
    _classCallCheck(this, OverlayRect);

    this.node = doc.createElement('div');
    this.border = doc.createElement('div');
    this.padding = doc.createElement('div');
    this.content = doc.createElement('div');
    this.border.style.borderColor = overlayStyles.border;
    this.padding.style.borderColor = overlayStyles.padding;
    this.content.style.backgroundColor = overlayStyles.background;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.node.style, {
      borderColor: overlayStyles.margin,
      pointerEvents: 'none',
      position: 'fixed'
    });
    this.node.style.zIndex = '10000000';
    this.node.appendChild(this.border);
    this.border.appendChild(this.padding);
    this.padding.appendChild(this.content);
    container.appendChild(this.node);
  }

  _createClass(OverlayRect, [{
    key: "remove",
    value: function remove() {
      if (this.node.parentNode) {
        this.node.parentNode.removeChild(this.node);
      }
    }
  }, {
    key: "update",
    value: function update(box, dims) {
      boxWrap(dims, 'margin', this.node);
      boxWrap(dims, 'border', this.border);
      boxWrap(dims, 'padding', this.padding);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.content.style, {
        height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + 'px',
        width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + 'px'
      });
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.node.style, {
        top: box.top - dims.marginTop + 'px',
        left: box.left - dims.marginLeft + 'px'
      });
    }
  }]);

  return OverlayRect;
}();

var OverlayTip =
/*#__PURE__*/
function () {
  function OverlayTip(doc, container) {
    _classCallCheck(this, OverlayTip);

    this.tip = doc.createElement('div');
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.tip.style, {
      display: 'flex',
      flexFlow: 'row nowrap',
      backgroundColor: '#333740',
      borderRadius: '2px',
      fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontWeight: 'bold',
      padding: '3px 5px',
      pointerEvents: 'none',
      position: 'fixed',
      fontSize: '12px',
      whiteSpace: 'nowrap'
    });
    this.nameSpan = doc.createElement('span');
    this.tip.appendChild(this.nameSpan);
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.nameSpan.style, {
      color: '#ee78e6',
      borderRight: '1px solid #aaaaaa',
      paddingRight: '0.5rem',
      marginRight: '0.5rem'
    });
    this.dimSpan = doc.createElement('span');
    this.tip.appendChild(this.dimSpan);
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.dimSpan.style, {
      color: '#d7d7d7'
    });
    this.tip.style.zIndex = '10000000';
    container.appendChild(this.tip);
  }

  _createClass(OverlayTip, [{
    key: "remove",
    value: function remove() {
      if (this.tip.parentNode) {
        this.tip.parentNode.removeChild(this.tip);
      }
    }
  }, {
    key: "updateText",
    value: function updateText(name, width, height) {
      this.nameSpan.textContent = name;
      this.dimSpan.textContent = Math.round(width) + 'px × ' + Math.round(height) + 'px';
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(dims, bounds) {
      var tipRect = this.tip.getBoundingClientRect();
      var tipPos = findTipPos(dims, bounds, {
        width: tipRect.width,
        height: tipRect.height
      });
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.tip.style, tipPos.style);
    }
  }]);

  return OverlayTip;
}();

var Overlay =
/*#__PURE__*/
function () {
  function Overlay() {
    _classCallCheck(this, Overlay);

    // Find the root window, because overlays are positioned relative to it.
    var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
    this.window = currentWindow; // When opened in shells/dev, the tooltip should be bound by the app iframe, not by the topmost window.

    var tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
    this.tipBoundsWindow = tipBoundsWindow;
    var doc = currentWindow.document;
    this.container = doc.createElement('div');
    this.container.style.zIndex = '10000000';
    this.tip = new OverlayTip(doc, this.container);
    this.rects = [];
    doc.body.appendChild(this.container);
  }

  _createClass(Overlay, [{
    key: "remove",
    value: function remove() {
      this.tip.remove();
      this.rects.forEach(function (rect) {
        rect.remove();
      });
      this.rects.length = 0;

      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }, {
    key: "inspect",
    value: function inspect(nodes, name) {
      var _this = this;

      // We can't get the size of text nodes or comment nodes. React as of v15
      // heavily uses comment nodes to delimit text.
      var elements = nodes.filter(function (node) {
        return node.nodeType === Node.ELEMENT_NODE;
      });

      while (this.rects.length > elements.length) {
        var rect = this.rects.pop();
        rect.remove();
      }

      if (elements.length === 0) {
        return;
      }

      while (this.rects.length < elements.length) {
        this.rects.push(new OverlayRect(this.window.document, this.container));
      }

      var outerBox = {
        top: Number.POSITIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        left: Number.POSITIVE_INFINITY
      };
      elements.forEach(function (element, index) {
        var box = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNestedBoundingClientRect"])(element, _this.window);
        var dims = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElementDimensions"])(element);
        outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
        outerBox.right = Math.max(outerBox.right, box.left + box.width + dims.marginRight);
        outerBox.bottom = Math.max(outerBox.bottom, box.top + box.height + dims.marginBottom);
        outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
        var rect = _this.rects[index];
        rect.update(box, dims);
      });

      if (!name) {
        name = elements[0].nodeName.toLowerCase();
        var ownerName = getOwnerDisplayName(elements[0]);

        if (ownerName) {
          name += ' (in ' + ownerName + ')';
        }
      }

      this.tip.updateText(name, outerBox.right - outerBox.left, outerBox.bottom - outerBox.top);
      var tipBounds = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNestedBoundingClientRect"])(this.tipBoundsWindow.document.documentElement, this.window);
      this.tip.updatePosition({
        top: outerBox.top,
        left: outerBox.left,
        height: outerBox.bottom - outerBox.top,
        width: outerBox.right - outerBox.left
      }, {
        top: tipBounds.top + this.tipBoundsWindow.scrollY,
        left: tipBounds.left + this.tipBoundsWindow.scrollX,
        height: this.tipBoundsWindow.innerHeight,
        width: this.tipBoundsWindow.innerWidth
      });
    }
  }]);

  return Overlay;
}();



function getOwnerDisplayName(node) {
  var fiber = getFiber(node);

  if (fiber === null) {
    return null;
  }

  var owner = fiber._debugOwner;

  if (owner && owner.type) {
    var ownerName = owner.type.displayName || owner.type.name;
    return ownerName || null;
  }

  return null;
}

var lastFoundInternalKey = null;

function getFiber(node) {
  if (lastFoundInternalKey !== null && node.hasOwnProperty(lastFoundInternalKey)) {
    return node[lastFoundInternalKey];
  }

  var internalKey = Object.keys(node).find(function (key) {
    return key.indexOf('__reactInternalInstance') === 0;
  });

  if (internalKey) {
    lastFoundInternalKey = internalKey;
    return node[lastFoundInternalKey];
  }

  return null;
}

function findTipPos(dims, bounds, tipSize) {
  var tipHeight = Math.max(tipSize.height, 20);
  var tipWidth = Math.max(tipSize.width, 60);
  var margin = 5;
  var top;

  if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) {
    if (dims.top + dims.height < bounds.top + 0) {
      top = bounds.top + margin;
    } else {
      top = dims.top + dims.height + margin;
    }
  } else if (dims.top - tipHeight <= bounds.top + bounds.height) {
    if (dims.top - tipHeight - margin < bounds.top + margin) {
      top = bounds.top + margin;
    } else {
      top = dims.top - tipHeight - margin;
    }
  } else {
    top = bounds.top + bounds.height - tipHeight - margin;
  }

  var left = dims.left + margin;

  if (dims.left < bounds.left) {
    left = bounds.left + margin;
  }

  if (dims.left + tipWidth > bounds.left + bounds.width) {
    left = bounds.left + bounds.width - tipWidth - margin;
  }

  top += 'px';
  left += 'px';
  return {
    style: {
      top: top,
      left: left
    }
  };
}

function boxWrap(dims, what, node) {
  object_assign__WEBPACK_IMPORTED_MODULE_0___default()(node.style, {
    borderTopWidth: dims[what + 'Top'] + 'px',
    borderLeftWidth: dims[what + 'Left'] + 'px',
    borderRightWidth: dims[what + 'Right'] + 'px',
    borderBottomWidth: dims[what + 'Bottom'] + 'px',
    borderStyle: 'solid'
  });
}

var overlayStyles = {
  background: 'rgba(120, 170, 210, 0.7)',
  padding: 'rgba(77, 200, 0, 0.3)',
  margin: 'rgba(255, 155, 0, 0.3)',
  border: 'rgba(255, 200, 50, 0.3)'
};

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/Highlighter/index.js":
/*!***********************************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/Highlighter/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupHighlighter; });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "../../node_modules/memoize-one/esm/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "../../node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_devtools_shared_src_backend_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-devtools-shared/src/backend/agent */ "../react-devtools-shared/src/backend/agent.js");
/* harmony import */ var _Highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Highlighter */ "../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// This plug-in provides in-page highlighting of the selected element.
// It is used by the browser extension nad the standalone DevTools shell (when connected to a browser).
// It is not currently the mechanism used to highlight React Native views.
// That is done by the React Native Inspector component.
var iframesListeningTo = new Set();
function setupHighlighter(bridge, agent) {
  bridge.addListener('clearNativeElementHighlight', clearNativeElementHighlight);
  bridge.addListener('highlightNativeElement', highlightNativeElement);
  bridge.addListener('shutdown', stopInspectingNative);
  bridge.addListener('startInspectingNative', startInspectingNative);
  bridge.addListener('stopInspectingNative', stopInspectingNative);

  function startInspectingNative() {
    registerListenersOnWindow(window);
  }

  function registerListenersOnWindow(window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (window && typeof window.addEventListener === 'function') {
      window.addEventListener('click', onClick, true);
      window.addEventListener('mousedown', onMouseEvent, true);
      window.addEventListener('mouseover', onMouseEvent, true);
      window.addEventListener('mouseup', onMouseEvent, true);
      window.addEventListener('pointerdown', onPointerDown, true);
      window.addEventListener('pointerover', onPointerOver, true);
      window.addEventListener('pointerup', onPointerUp, true);
    }
  }

  function stopInspectingNative() {
    Object(_Highlighter__WEBPACK_IMPORTED_MODULE_3__["hideOverlay"])();
    removeListenersOnWindow(window);
    iframesListeningTo.forEach(function (frame) {
      try {
        removeListenersOnWindow(frame.contentWindow);
      } catch (error) {// This can error when the iframe is on a cross-origin.
      }
    });
    iframesListeningTo = new Set();
  }

  function removeListenersOnWindow(window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (window && typeof window.removeEventListener === 'function') {
      window.removeEventListener('click', onClick, true);
      window.removeEventListener('mousedown', onMouseEvent, true);
      window.removeEventListener('mouseover', onMouseEvent, true);
      window.removeEventListener('mouseup', onMouseEvent, true);
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointerover', onPointerOver, true);
      window.removeEventListener('pointerup', onPointerUp, true);
    }
  }

  function clearNativeElementHighlight() {
    Object(_Highlighter__WEBPACK_IMPORTED_MODULE_3__["hideOverlay"])();
  }

  function highlightNativeElement(_ref) {
    var displayName = _ref.displayName,
        hideAfterTimeout = _ref.hideAfterTimeout,
        id = _ref.id,
        openNativeElementsPanel = _ref.openNativeElementsPanel,
        rendererID = _ref.rendererID,
        scrollIntoView = _ref.scrollIntoView;
    var renderer = agent.rendererInterfaces[rendererID];

    if (renderer == null) {
      console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
    }

    var nodes = null;

    if (renderer !== null) {
      nodes = renderer.findNativeNodesForFiberID(id);
    }

    if (nodes != null && nodes[0] != null) {
      var node = nodes[0];

      if (scrollIntoView && typeof node.scrollIntoView === 'function') {
        // If the node isn't visible show it before highlighting it.
        // We may want to reconsider this; it might be a little disruptive.
        // $FlowFixMe Flow only knows about 'start' | 'end'
        node.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }

      Object(_Highlighter__WEBPACK_IMPORTED_MODULE_3__["showOverlay"])(nodes, displayName, hideAfterTimeout);

      if (openNativeElementsPanel) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = node;
        bridge.send('syncSelectionToNativeElementsPanel');
      }
    } else {
      Object(_Highlighter__WEBPACK_IMPORTED_MODULE_3__["hideOverlay"])();
    }
  }

  function onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    stopInspectingNative();
    bridge.send('stopInspectingNative', true);
  }

  function onMouseEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function onPointerDown(event) {
    event.preventDefault();
    event.stopPropagation();
    selectFiberForNode(event.target);
  }

  function onPointerOver(event) {
    event.preventDefault();
    event.stopPropagation();
    var target = event.target;

    if (target.tagName === 'IFRAME') {
      var iframe = target;

      try {
        if (!iframesListeningTo.has(iframe)) {
          var _window = iframe.contentWindow;
          registerListenersOnWindow(_window);
          iframesListeningTo.add(iframe);
        }
      } catch (error) {// This can error when the iframe is on a cross-origin.
      }
    } // Don't pass the name explicitly.
    // It will be inferred from DOM tag and Fiber owner.


    Object(_Highlighter__WEBPACK_IMPORTED_MODULE_3__["showOverlay"])([target], null, false);
    selectFiberForNode(target);
  }

  function onPointerUp(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  var selectFiberForNode = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function (node) {
    var id = agent.getIDForNode(node);

    if (id !== null) {
      bridge.send('selectFiber', id);
    }
  }), 200, // Don't change the selection in the very first 200ms
  // because those are usually unintentional as you lift the cursor.
  {
    leading: false
  });
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js":
/*!*************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js ***!
  \*************************************************************************/
/*! exports provided: draw, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var OUTLINE_COLOR = '#f0f0f0'; // Note these colors are in sync with DevTools Profiler chart colors.

var COLORS = ['#37afa9', '#63b19e', '#80b393', '#97b488', '#abb67d', '#beb771', '#cfb965', '#dfba57', '#efbb49', '#febc38'];
var canvas = null;
function draw(nodeToData) {
  if (canvas === null) {
    initialize();
  }

  var canvasFlow = canvas;
  canvasFlow.width = window.screen.availWidth;
  canvasFlow.height = window.screen.availHeight;
  var context = canvasFlow.getContext('2d');
  context.clearRect(0, 0, canvasFlow.width, canvasFlow.height);
  nodeToData.forEach(function (_ref) {
    var count = _ref.count,
        rect = _ref.rect;

    if (rect !== null) {
      var colorIndex = Math.min(COLORS.length - 1, count - 1);
      var color = COLORS[colorIndex];
      drawBorder(context, rect, color);
    }
  });
}

function drawBorder(context, rect, color) {
  var height = rect.height,
      left = rect.left,
      top = rect.top,
      width = rect.width; // outline

  context.lineWidth = 1;
  context.strokeStyle = OUTLINE_COLOR;
  context.strokeRect(left - 1, top - 1, width + 2, height + 2); // inset

  context.lineWidth = 1;
  context.strokeStyle = OUTLINE_COLOR;
  context.strokeRect(left + 1, top + 1, width - 1, height - 1);
  context.strokeStyle = color;
  context.setLineDash([0]); // border

  context.lineWidth = 1;
  context.strokeRect(left, top, width - 1, height - 1);
  context.setLineDash([0]);
}

function destroy() {
  if (canvas !== null) {
    if (canvas.parentNode != null) {
      canvas.parentNode.removeChild(canvas);
    }

    canvas = null;
  }
}

function initialize() {
  canvas = window.document.createElement('canvas');
  canvas.style.cssText = "\n    xx-background-color: red;\n    xx-opacity: 0.5;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 1000000000;\n  ";
  var root = window.document.documentElement;
  root.insertBefore(canvas, root.firstChild);
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/TraceUpdates/index.js":
/*!************************************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/TraceUpdates/index.js ***!
  \************************************************************************/
/*! exports provided: initialize, toggleEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEnabled", function() { return toggleEnabled; });
/* harmony import */ var react_devtools_shared_src_backend_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-devtools-shared/src/backend/agent */ "../react-devtools-shared/src/backend/agent.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../react-devtools-shared/src/backend/views/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// How long the rect should be shown for?
var DISPLAY_DURATION = 250; // What's the longest we are willing to show the overlay for?
// This can be important if we're getting a flurry of events (e.g. scroll update).

var MAX_DISPLAY_DURATION = 3000; // How long should a rect be considered valid for?

var REMEASUREMENT_AFTER_DURATION = 250; // Some environments (e.g. React Native / Hermes) don't support the performace API yet.

var getCurrentTime = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && typeof performance.now === 'function' ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var nodeToData = new Map();
var agent = null;
var drawAnimationFrameID = null;
var isEnabled = false;
var redrawTimeoutID = null;
function initialize(injectedAgent) {
  agent = injectedAgent;
  agent.addListener('traceUpdates', traceUpdates);
}
function toggleEnabled(value) {
  isEnabled = value;

  if (!isEnabled) {
    nodeToData.clear();

    if (drawAnimationFrameID !== null) {
      cancelAnimationFrame(drawAnimationFrameID);
      drawAnimationFrameID = null;
    }

    if (redrawTimeoutID !== null) {
      clearTimeout(redrawTimeoutID);
      redrawTimeoutID = null;
    }

    Object(_canvas__WEBPACK_IMPORTED_MODULE_1__["destroy"])();
  }
}

function traceUpdates(nodes) {
  if (!isEnabled) {
    return;
  }

  nodes.forEach(function (node) {
    var data = nodeToData.get(node);
    var now = getCurrentTime();
    var lastMeasuredAt = data != null ? data.lastMeasuredAt : 0;
    var rect = data != null ? data.rect : null;

    if (rect === null || lastMeasuredAt + REMEASUREMENT_AFTER_DURATION < now) {
      lastMeasuredAt = now;
      rect = measureNode(node);
    }

    nodeToData.set(node, {
      count: data != null ? data.count + 1 : 1,
      expirationTime: data != null ? Math.min(now + MAX_DISPLAY_DURATION, data.expirationTime + DISPLAY_DURATION) : now + DISPLAY_DURATION,
      lastMeasuredAt: lastMeasuredAt,
      rect: rect
    });
  });

  if (redrawTimeoutID !== null) {
    clearTimeout(redrawTimeoutID);
    redrawTimeoutID = null;
  }

  if (drawAnimationFrameID === null) {
    drawAnimationFrameID = requestAnimationFrame(prepareToDraw);
  }
}

function prepareToDraw() {
  drawAnimationFrameID = null;
  redrawTimeoutID = null;
  var now = getCurrentTime();
  var earliestExpiration = Number.MAX_VALUE; // Remove any items that have already expired.

  nodeToData.forEach(function (data, node) {
    if (data.expirationTime < now) {
      nodeToData.delete(node);
    } else {
      earliestExpiration = Math.min(earliestExpiration, data.expirationTime);
    }
  });
  Object(_canvas__WEBPACK_IMPORTED_MODULE_1__["draw"])(nodeToData);
  redrawTimeoutID = setTimeout(prepareToDraw, earliestExpiration - now);
}

function measureNode(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') {
    return null;
  }

  var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNestedBoundingClientRect"])(node, currentWindow);
}

/***/ }),

/***/ "../react-devtools-shared/src/backend/views/utils.js":
/*!***********************************************************!*\
  !*** ../react-devtools-shared/src/backend/views/utils.js ***!
  \***********************************************************/
/*! exports provided: getOwnerWindow, getOwnerIframe, getBoundingClientRectWithBorderOffset, mergeRectOffsets, getNestedBoundingClientRect, getElementDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerWindow", function() { return getOwnerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerIframe", function() { return getOwnerIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingClientRectWithBorderOffset", function() { return getBoundingClientRectWithBorderOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRectOffsets", function() { return mergeRectOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedBoundingClientRect", function() { return getNestedBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementDimensions", function() { return getElementDimensions; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Get the window object for the document that a node belongs to,
// or return null if it cannot be found (node not attached to DOM,
// etc).
function getOwnerWindow(node) {
  if (!node.ownerDocument) {
    return null;
  }

  return node.ownerDocument.defaultView;
} // Get the iframe containing a node, or return null if it cannot
// be found (node not within iframe, etc).

function getOwnerIframe(node) {
  var nodeWindow = getOwnerWindow(node);

  if (nodeWindow) {
    return nodeWindow.frameElement;
  }

  return null;
} // Get a bounding client rect for a node, with an
// offset added to compensate for its border.

function getBoundingClientRectWithBorderOffset(node) {
  var dimensions = getElementDimensions(node);
  return mergeRectOffsets([node.getBoundingClientRect(), {
    top: dimensions.borderTop,
    left: dimensions.borderLeft,
    bottom: dimensions.borderBottom,
    right: dimensions.borderRight,
    // This width and height won't get used by mergeRectOffsets (since this
    // is not the first rect in the array), but we set them so that this
    // object typechecks as a ClientRect.
    width: 0,
    height: 0
  }]);
} // Add together the top, left, bottom, and right properties of
// each ClientRect, but keep the width and height of the first one.

function mergeRectOffsets(rects) {
  return rects.reduce(function (previousRect, rect) {
    if (previousRect == null) {
      return rect;
    }

    return {
      top: previousRect.top + rect.top,
      left: previousRect.left + rect.left,
      width: previousRect.width,
      height: previousRect.height,
      bottom: previousRect.bottom + rect.bottom,
      right: previousRect.right + rect.right
    };
  });
} // Calculate a boundingClientRect for a node relative to boundaryWindow,
// taking into account any offsets caused by intermediate iframes.

function getNestedBoundingClientRect(node, boundaryWindow) {
  var ownerIframe = getOwnerIframe(node);

  if (ownerIframe && ownerIframe !== boundaryWindow) {
    var rects = [node.getBoundingClientRect()];
    var currentIframe = ownerIframe;
    var onlyOneMore = false;

    while (currentIframe) {
      var rect = getBoundingClientRectWithBorderOffset(currentIframe);
      rects.push(rect);
      currentIframe = getOwnerIframe(currentIframe);

      if (onlyOneMore) {
        break;
      } // We don't want to calculate iframe offsets upwards beyond
      // the iframe containing the boundaryWindow, but we
      // need to calculate the offset relative to the boundaryWindow.


      if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
        onlyOneMore = true;
      }
    }

    return mergeRectOffsets(rects);
  } else {
    return node.getBoundingClientRect();
  }
}
function getElementDimensions(domElement) {
  var calculatedStyle = window.getComputedStyle(domElement);
  return {
    borderLeft: parseInt(calculatedStyle.borderLeftWidth, 10),
    borderRight: parseInt(calculatedStyle.borderRightWidth, 10),
    borderTop: parseInt(calculatedStyle.borderTopWidth, 10),
    borderBottom: parseInt(calculatedStyle.borderBottomWidth, 10),
    marginLeft: parseInt(calculatedStyle.marginLeft, 10),
    marginRight: parseInt(calculatedStyle.marginRight, 10),
    marginTop: parseInt(calculatedStyle.marginTop, 10),
    marginBottom: parseInt(calculatedStyle.marginBottom, 10),
    paddingLeft: parseInt(calculatedStyle.paddingLeft, 10),
    paddingRight: parseInt(calculatedStyle.paddingRight, 10),
    paddingTop: parseInt(calculatedStyle.paddingTop, 10),
    paddingBottom: parseInt(calculatedStyle.paddingBottom, 10)
  };
}

/***/ }),

/***/ "../react-devtools-shared/src/bridge.js":
/*!**********************************************!*\
  !*** ../react-devtools-shared/src/bridge.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var BATCH_DURATION = 100;

var Bridge =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Bridge, _EventEmitter);

  function Bridge(wall) {
    var _this;

    _classCallCheck(this, Bridge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bridge).call(this));

    _defineProperty(_assertThisInitialized(_this), "_isShutdown", false);

    _defineProperty(_assertThisInitialized(_this), "_messageQueue", []);

    _defineProperty(_assertThisInitialized(_this), "_timeoutID", null);

    _defineProperty(_assertThisInitialized(_this), "_wallUnlisten", null);

    _defineProperty(_assertThisInitialized(_this), "_flush", function () {
      // This method is used after the bridge is marked as destroyed in shutdown sequence,
      // so we do not bail out if the bridge marked as destroyed.
      // It is a private method that the bridge ensures is only called at the right times.
      if (_this._timeoutID !== null) {
        clearTimeout(_this._timeoutID);
        _this._timeoutID = null;
      }

      if (_this._messageQueue.length) {
        for (var i = 0; i < _this._messageQueue.length; i += 2) {
          var _this$_wall;

          (_this$_wall = _this._wall).send.apply(_this$_wall, [_this._messageQueue[i]].concat(_toConsumableArray(_this._messageQueue[i + 1])));
        }

        _this._messageQueue.length = 0; // Check again for queued messages in BATCH_DURATION ms. This will keep
        // flushing in a loop as long as messages continue to be added. Once no
        // more are, the timer expires.

        _this._timeoutID = setTimeout(_this._flush, BATCH_DURATION);
      }
    });

    _this._wall = wall;
    _this._wallUnlisten = wall.listen(function (message) {
      _assertThisInitialized(_this).emit(message.event, message.payload);
    }) || null;
    return _this;
  } // Listening directly to the wall isn't advised.
  // It can be used to listen for legacy (v3) messages (since they use a different format).


  _createClass(Bridge, [{
    key: "send",
    value: function send(event) {
      if (this._isShutdown) {
        console.warn("Cannot send message \"".concat(event, "\" through a Bridge that has been shutdown."));
        return;
      } // When we receive a message:
      // - we add it to our queue of messages to be sent
      // - if there hasn't been a message recently, we set a timer for 0 ms in
      //   the future, allowing all messages created in the same tick to be sent
      //   together
      // - if there *has* been a message flushed in the last BATCH_DURATION ms
      //   (or we're waiting for our setTimeout-0 to fire), then _timeoutID will
      //   be set, and we'll simply add to the queue and wait for that


      for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      this._messageQueue.push(event, payload);

      if (!this._timeoutID) {
        this._timeoutID = setTimeout(this._flush, 0);
      }
    }
  }, {
    key: "shutdown",
    value: function shutdown() {
      if (this._isShutdown) {
        console.warn('Bridge was already shutdown.');
        return;
      } // Queue the shutdown outgoing message for subscribers.


      this.send('shutdown'); // Mark this bridge as destroyed, i.e. disable its public API.

      this._isShutdown = true; // Disable the API inherited from EventEmitter that can add more listeners and send more messages.
      // $FlowFixMe This property is not writable.

      this.addListener = function () {}; // $FlowFixMe This property is not writable.


      this.emit = function () {}; // NOTE: There's also EventEmitter API like `on` and `prependListener` that we didn't add to our Flow type of EventEmitter.
      // Unsubscribe this bridge incoming message listeners to be sure, and so they don't have to do that.


      this.removeAllListeners(); // Stop accepting and emitting incoming messages from the wall.

      var wallUnlisten = this._wallUnlisten;

      if (wallUnlisten) {
        wallUnlisten();
      } // Synchronously flush all queued outgoing messages.
      // At this step the subscribers' code may run in this call stack.


      do {
        this._flush();
      } while (this._messageQueue.length); // Make sure once again that there is no dangling timer.


      if (this._timeoutID !== null) {
        clearTimeout(this._timeoutID);
        this._timeoutID = null;
      }
    }
  }, {
    key: "wall",
    get: function get() {
      return this._wall;
    }
  }]);

  return Bridge;
}(events__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Bridge);

/***/ }),

/***/ "../react-devtools-shared/src/constants.js":
/*!*************************************************!*\
  !*** ../react-devtools-shared/src/constants.js ***!
  \*************************************************/
/*! exports provided: __DEBUG__, TREE_OPERATION_ADD, TREE_OPERATION_REMOVE, TREE_OPERATION_REORDER_CHILDREN, TREE_OPERATION_UPDATE_TREE_BASE_DURATION, LOCAL_STORAGE_FILTER_PREFERENCES_KEY, SESSION_STORAGE_LAST_SELECTION_KEY, SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY, SESSION_STORAGE_RELOAD_AND_PROFILE_KEY, LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY, LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY, PROFILER_EXPORT_VERSION, CHANGE_LOG_URL, UNSUPPORTED_VERSION_URL, COMFORTABLE_LINE_HEIGHT, COMPACT_LINE_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DEBUG__", function() { return __DEBUG__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_OPERATION_ADD", function() { return TREE_OPERATION_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_OPERATION_REMOVE", function() { return TREE_OPERATION_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_OPERATION_REORDER_CHILDREN", function() { return TREE_OPERATION_REORDER_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_OPERATION_UPDATE_TREE_BASE_DURATION", function() { return TREE_OPERATION_UPDATE_TREE_BASE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_FILTER_PREFERENCES_KEY", function() { return LOCAL_STORAGE_FILTER_PREFERENCES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE_LAST_SELECTION_KEY", function() { return SESSION_STORAGE_LAST_SELECTION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY", function() { return SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE_RELOAD_AND_PROFILE_KEY", function() { return SESSION_STORAGE_RELOAD_AND_PROFILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY", function() { return LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY", function() { return LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILER_EXPORT_VERSION", function() { return PROFILER_EXPORT_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOG_URL", function() { return CHANGE_LOG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSUPPORTED_VERSION_URL", function() { return UNSUPPORTED_VERSION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMFORTABLE_LINE_HEIGHT", function() { return COMFORTABLE_LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPACT_LINE_HEIGHT", function() { return COMPACT_LINE_HEIGHT; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Flip this flag to true to enable verbose console debug logging.
var __DEBUG__ = false;
var TREE_OPERATION_ADD = 1;
var TREE_OPERATION_REMOVE = 2;
var TREE_OPERATION_REORDER_CHILDREN = 3;
var TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4;
var LOCAL_STORAGE_FILTER_PREFERENCES_KEY = 'React::DevTools::componentFilters';
var SESSION_STORAGE_LAST_SELECTION_KEY = 'React::DevTools::lastSelection';
var SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY = 'React::DevTools::recordChangeDescriptions';
var SESSION_STORAGE_RELOAD_AND_PROFILE_KEY = 'React::DevTools::reloadAndProfile';
var LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY = 'React::DevTools::appendComponentStack';
var LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY = 'React::DevTools::traceUpdatesEnabled';
var PROFILER_EXPORT_VERSION = 4;
var CHANGE_LOG_URL = 'https://github.com/facebook/react/blob/master/packages/react-devtools/CHANGELOG.md';
var UNSUPPORTED_VERSION_URL = 'https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back'; // HACK
//
// Extracting during build time avoids a temporarily invalid state for the inline target.
// Sometimes the inline target is rendered before root styles are applied,
// which would result in e.g. NaN itemSize being passed to react-window list.
//

var COMFORTABLE_LINE_HEIGHT;
var COMPACT_LINE_HEIGHT;

try {
  // $FlowFixMe
  var rawStyleString = __webpack_require__(/*! !raw-loader!react-devtools-shared/src/devtools/views/root.css */ "../../node_modules/raw-loader/dist/cjs.js!../react-devtools-shared/src/devtools/views/root.css").default;

  var extractVar = function extractVar(varName) {
    var regExp = new RegExp("".concat(varName, ": ([0-9]+)"));
    var match = rawStyleString.match(regExp);
    return parseInt(match[1], 10);
  };

  COMFORTABLE_LINE_HEIGHT = extractVar('comfortable-line-height-data');
  COMPACT_LINE_HEIGHT = extractVar('compact-line-height-data');
} catch (error) {
  // We can't use the Webpack loader syntax in the context of Jest,
  // so tests need some reasonably meaningful fallback value.
  COMFORTABLE_LINE_HEIGHT = 15;
  COMPACT_LINE_HEIGHT = 10;
}



/***/ }),

/***/ "../react-devtools-shared/src/devtools/views/utils.js":
/*!************************************************************!*\
  !*** ../react-devtools-shared/src/devtools/views/utils.js ***!
  \************************************************************/
/*! exports provided: alphaSortEntries, createRegExp, getMetaValueLabel, serializeDataForCopy, serializeHooksForCopy, downloadFile, truncateText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaSortEntries", function() { return alphaSortEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegExp", function() { return createRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaValueLabel", function() { return getMetaValueLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeDataForCopy", function() { return serializeDataForCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeHooksForCopy", function() { return serializeHooksForCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateText", function() { return truncateText; });
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ "../../node_modules/escape-string-regexp/index.js");
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hydration */ "../react-devtools-shared/src/hydration.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "../react-devtools-shared/src/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function alphaSortEntries(entryA, entryB) {
  var a = entryA[0];
  var b = entryB[0];

  if ('' + +a === a) {
    if ('' + +b !== b) {
      return -1;
    }

    return +a < +b ? -1 : 1;
  }

  return a < b ? -1 : 1;
}
function createRegExp(string) {
  // Allow /regex/ syntax with optional last /
  if (string[0] === '/') {
    // Cut off first slash
    string = string.substring(1); // Cut off last slash, but only if it's there

    if (string[string.length - 1] === '/') {
      string = string.substring(0, string.length - 1);
    }

    try {
      return new RegExp(string, 'i');
    } catch (err) {
      // Bad regex. Make it not match anything.
      // TODO: maybe warn in console?
      return new RegExp('.^');
    }
  }

  function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }

  function matchAnyCase(char) {
    if (!isLetter(char)) {
      // Don't mess with special characters like [.
      return char;
    }

    return '[' + char.toLowerCase() + char.toUpperCase() + ']';
  } // 'item' should match 'Item' and 'ListItem', but not 'InviteMom'.
  // To do this, we'll slice off 'tem' and check first letter separately.


  var escaped = escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default()(string);
  var firstChar = escaped[0];
  var restRegex = ''; // For 'item' input, restRegex becomes '[tT][eE][mM]'
  // We can't simply make it case-insensitive because first letter case matters.

  for (var i = 1; i < escaped.length; i++) {
    restRegex += matchAnyCase(escaped[i]);
  }

  if (!isLetter(firstChar)) {
    // We can't put a non-character like [ in a group
    // so we fall back to the simple case.
    return new RegExp(firstChar + restRegex);
  } // Construct a smarter regex.


  return new RegExp( // For example:
  // (^[iI]|I)[tT][eE][mM]
  // Matches:
  // 'Item'
  // 'ListItem'
  // but not 'InviteMom'
  '(^' + matchAnyCase(firstChar) + '|' + firstChar.toUpperCase() + ')' + restRegex);
}
function getMetaValueLabel(data) {
  if (hasOwnProperty.call(data, _hydration__WEBPACK_IMPORTED_MODULE_1__["meta"].preview_long)) {
    return data[_hydration__WEBPACK_IMPORTED_MODULE_1__["meta"].preview_long];
  } else {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatDataForPreview"])(data, true);
  }
}

function sanitize(data) {
  for (var key in data) {
    var value = data[key];

    if (value && value[_hydration__WEBPACK_IMPORTED_MODULE_1__["meta"].type]) {
      data[key] = getMetaValueLabel(value);
    } else if (value != null) {
      if (Array.isArray(value)) {
        sanitize(value);
      } else if (_typeof(value) === 'object') {
        sanitize(value);
      }
    }
  }
}

function serializeDataForCopy(props) {
  var cloned = Object.assign({}, props);
  sanitize(cloned);

  try {
    return JSON.stringify(cloned, null, 2);
  } catch (error) {
    return '';
  }
}
function serializeHooksForCopy(hooks) {
  // $FlowFixMe "HooksTree is not an object"
  var cloned = Object.assign([], hooks);

  var queue = _toConsumableArray(cloned);

  while (queue.length > 0) {
    var current = queue.pop(); // These aren't meaningful

    delete current.id;
    delete current.isStateEditable;

    if (current.subHooks.length > 0) {
      queue.push.apply(queue, _toConsumableArray(current.subHooks));
    }
  }

  sanitize(cloned);

  try {
    return JSON.stringify(cloned, null, 2);
  } catch (error) {
    return '';
  }
} // Keeping this in memory seems to be enough to enable the browser to download larger profiles.
// Without this, we would see a "Download failed: network error" failure.

var downloadUrl = null;
function downloadFile(element, filename, text) {
  var blob = new Blob([text], {
    type: 'text/plain;charset=utf-8'
  });

  if (downloadUrl !== null) {
    URL.revokeObjectURL(downloadUrl);
  }

  downloadUrl = URL.createObjectURL(blob);
  element.setAttribute('href', downloadUrl);
  element.setAttribute('download', filename);
  element.click();
}
function truncateText(text, maxLength) {
  var length = text.length;

  if (length > maxLength) {
    return text.substr(0, Math.floor(maxLength / 2)) + '…' + text.substr(length - Math.ceil(maxLength / 2) - 1);
  } else {
    return text;
  }
}

/***/ }),

/***/ "../react-devtools-shared/src/hook.js":
/*!********************************************!*\
  !*** ../react-devtools-shared/src/hook.js ***!
  \********************************************/
/*! exports provided: installHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installHook", function() { return installHook; });
/* harmony import */ var _backend_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend/console */ "../react-devtools-shared/src/backend/console.js");
/**
 * Install the hook on window, which is an event emitter.
 * Note because Chrome content scripts cannot directly modify the window object,
 * we are evaling this function by inserting a script tag.
 * That's why we have to inline the whole event emitter implementation here.
 *
 * 
 */

function installHook(target) {
  if (target.hasOwnProperty('__REACT_DEVTOOLS_GLOBAL_HOOK__')) {
    return null;
  }

  function detectReactBuildType(renderer) {
    try {
      if (typeof renderer.version === 'string') {
        // React DOM Fiber (16+)
        if (renderer.bundleType > 0) {
          // This is not a production build.
          // We are currently only using 0 (PROD) and 1 (DEV)
          // but might add 2 (PROFILE) in the future.
          return 'development';
        } // React 16 uses flat bundles. If we report the bundle as production
        // version, it means we also minified and envified it ourselves.


        return 'production'; // Note: There is still a risk that the CommonJS entry point has not
        // been envified or uglified. In this case the user would have *both*
        // development and production bundle, but only the prod one would run.
        // This would be really bad. We have a separate check for this because
        // it happens *outside* of the renderer injection. See `checkDCE` below.
      }

      var _toString = Function.prototype.toString;

      if (renderer.Mount && renderer.Mount._renderNewRootComponent) {
        // React DOM Stack
        var renderRootCode = _toString.call(renderer.Mount._renderNewRootComponent); // Filter out bad results (if that is even possible):


        if (renderRootCode.indexOf('function') !== 0) {
          // Hope for the best if we're not sure.
          return 'production';
        } // Check for React DOM Stack < 15.1.0 in development.
        // If it contains "storedMeasure" call, it's wrapped in ReactPerf (DEV only).
        // This would be true even if it's minified, as method name still matches.


        if (renderRootCode.indexOf('storedMeasure') !== -1) {
          return 'development';
        } // For other versions (and configurations) it's not so easy.
        // Let's quickly exclude proper production builds.
        // If it contains a warning message, it's either a DEV build,
        // or an PROD build without proper dead code elimination.


        if (renderRootCode.indexOf('should be a pure function') !== -1) {
          // Now how do we tell a DEV build from a bad PROD build?
          // If we see NODE_ENV, we're going to assume this is a dev build
          // because most likely it is referring to an empty shim.
          if (renderRootCode.indexOf('NODE_ENV') !== -1) {
            return 'development';
          } // If we see "development", we're dealing with an envified DEV build
          // (such as the official React DEV UMD).


          if (renderRootCode.indexOf('development') !== -1) {
            return 'development';
          } // I've seen process.env.NODE_ENV !== 'production' being smartly
          // replaced by `true` in DEV by Webpack. I don't know how that
          // works but we can safely guard against it because `true` was
          // never used in the function source since it was written.


          if (renderRootCode.indexOf('true') !== -1) {
            return 'development';
          } // By now either it is a production build that has not been minified,
          // or (worse) this is a minified development build using non-standard
          // environment (e.g. "staging"). We're going to look at whether
          // the function argument name is mangled:


          if ( // 0.13 to 15
          renderRootCode.indexOf('nextElement') !== -1 || // 0.12
          renderRootCode.indexOf('nextComponent') !== -1) {
            // We can't be certain whether this is a development build or not,
            // but it is definitely unminified.
            return 'unminified';
          } else {
            // This is likely a minified development build.
            return 'development';
          }
        } // By now we know that it's envified and dead code elimination worked,
        // but what if it's still not minified? (Is this even possible?)
        // Let's check matches for the first argument name.


        if ( // 0.13 to 15
        renderRootCode.indexOf('nextElement') !== -1 || // 0.12
        renderRootCode.indexOf('nextComponent') !== -1) {
          return 'unminified';
        } // Seems like we're using the production version.
        // However, the branch above is Stack-only so this is 15 or earlier.


        return 'outdated';
      }
    } catch (err) {// Weird environments may exist.
      // This code needs a higher fault tolerance
      // because it runs even with closed DevTools.
      // TODO: should we catch errors in all injected code, and not just this part?
    }

    return 'production';
  }

  function checkDCE(fn) {
    // This runs for production versions of React.
    // Needs to be super safe.
    try {
      var _toString2 = Function.prototype.toString;

      var code = _toString2.call(fn); // This is a string embedded in the passed function under DEV-only
      // condition. However the function executes only in PROD. Therefore,
      // if we see it, dead code elimination did not work.


      if (code.indexOf('^_^') > -1) {
        // Remember to report during next injection.
        hasDetectedBadDCE = true; // Bonus: throw an exception hoping that it gets picked up by a reporting system.
        // Not synchronously so that it doesn't break the calling code.

        setTimeout(function () {
          throw new Error('React is running in production mode, but dead code ' + 'elimination has not been applied. Read how to correctly ' + 'configure React for production: ' + 'https://fb.me/react-perf-use-the-production-build');
        });
      }
    } catch (err) {}
  }

  var uidCounter = 0;

  function inject(renderer) {
    var id = ++uidCounter;
    renderers.set(id, renderer);
    var reactBuildType = hasDetectedBadDCE ? 'deadcode' : detectReactBuildType(renderer); // Patching the console enables DevTools to do a few useful things:
    // * Append component stacks to warnings and error messages
    // * Disable logging during re-renders to inspect hooks (see inspectHooksOfFiber)
    //
    // For React Native, we intentionally patch early (during injection).
    // This provides React Native developers with components stacks even if they don't run DevTools.
    // This won't work for DOM though, since this entire file is eval'ed and inserted as a script tag.
    // In that case, we'll patch later (when the frontend attaches).
    //
    // Don't patch in test environments because we don't want to interfere with Jest's own console overrides.

    if (true) {
      try {
        // The installHook() function is injected by being stringified in the browser,
        // so imports outside of this function do not get included.
        //
        // Normally we could check "typeof patchConsole === 'function'",
        // but Webpack wraps imports with an object (e.g. _backend_console__WEBPACK_IMPORTED_MODULE_0__)
        // and the object itself will be undefined as well for the reasons mentioned above,
        // so we use try/catch instead.
        if (window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ !== false) {
          Object(_backend_console__WEBPACK_IMPORTED_MODULE_0__["registerRenderer"])(renderer);
          Object(_backend_console__WEBPACK_IMPORTED_MODULE_0__["patch"])();
        }
      } catch (error) {}
    } // If we have just reloaded to profile, we need to inject the renderer interface before the app loads.
    // Otherwise the renderer won't yet exist and we can skip this step.


    var attach = target.__REACT_DEVTOOLS_ATTACH__;

    if (typeof attach === 'function') {
      var rendererInterface = attach(hook, id, renderer, target);
      hook.rendererInterfaces.set(id, rendererInterface);
    }

    hook.emit('renderer', {
      id: id,
      renderer: renderer,
      reactBuildType: reactBuildType
    });
    return id;
  }

  var hasDetectedBadDCE = false;

  function sub(event, fn) {
    hook.on(event, fn);
    return function () {
      return hook.off(event, fn);
    };
  }

  function on(event, fn) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(fn);
  }

  function off(event, fn) {
    if (!listeners[event]) {
      return;
    }

    var index = listeners[event].indexOf(fn);

    if (index !== -1) {
      listeners[event].splice(index, 1);
    }

    if (!listeners[event].length) {
      delete listeners[event];
    }
  }

  function emit(event, data) {
    if (listeners[event]) {
      listeners[event].map(function (fn) {
        return fn(data);
      });
    }
  }

  function getFiberRoots(rendererID) {
    var roots = fiberRoots;

    if (!roots[rendererID]) {
      roots[rendererID] = new Set();
    }

    return roots[rendererID];
  }

  function onCommitFiberUnmount(rendererID, fiber) {
    var rendererInterface = rendererInterfaces.get(rendererID);

    if (rendererInterface != null) {
      rendererInterface.handleCommitFiberUnmount(fiber);
    }
  }

  function onCommitFiberRoot(rendererID, root, priorityLevel) {
    var mountedRoots = hook.getFiberRoots(rendererID);
    var current = root.current;
    var isKnownRoot = mountedRoots.has(root);
    var isUnmounting = current.memoizedState == null || current.memoizedState.element == null; // Keep track of mounted roots so we can hydrate when DevTools connect.

    if (!isKnownRoot && !isUnmounting) {
      mountedRoots.add(root);
    } else if (isKnownRoot && isUnmounting) {
      mountedRoots.delete(root);
    }

    var rendererInterface = rendererInterfaces.get(rendererID);

    if (rendererInterface != null) {
      rendererInterface.handleCommitFiberRoot(root, priorityLevel);
    }
  } // TODO: More meaningful names for "rendererInterfaces" and "renderers".


  var fiberRoots = {};
  var rendererInterfaces = new Map();
  var listeners = {};
  var renderers = new Map();
  var hook = {
    rendererInterfaces: rendererInterfaces,
    listeners: listeners,
    // Fast Refresh for web relies on this.
    renderers: renderers,
    emit: emit,
    getFiberRoots: getFiberRoots,
    inject: inject,
    on: on,
    off: off,
    sub: sub,
    // This is a legacy flag.
    // React v16 checks the hook for this to ensure DevTools is new enough.
    supportsFiber: true,
    // React calls these methods.
    checkDCE: checkDCE,
    onCommitFiberUnmount: onCommitFiberUnmount,
    onCommitFiberRoot: onCommitFiberRoot
  };
  Object.defineProperty(target, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
    // This property needs to be configurable for the test environment,
    // else we won't be able to delete and recreate it beween tests.
    configurable: true,
    enumerable: false,
    get: function get() {
      return hook;
    }
  });
  return hook;
}

/***/ }),

/***/ "../react-devtools-shared/src/hydration.js":
/*!*************************************************!*\
  !*** ../react-devtools-shared/src/hydration.js ***!
  \*************************************************/
/*! exports provided: meta, dehydrate, fillInPath, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return dehydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillInPath", function() { return fillInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-symbol */ "../../node_modules/es6-symbol/index.js");
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../react-devtools-shared/src/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var meta = {
  inspectable: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('inspectable'),
  inspected: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('inspected'),
  name: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('name'),
  preview_long: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('preview_long'),
  preview_short: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('preview_short'),
  readonly: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('readonly'),
  size: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('size'),
  type: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('type'),
  unserializable: es6_symbol__WEBPACK_IMPORTED_MODULE_0___default()('unserializable')
};
// This threshold determines the depth at which the bridge "dehydrates" nested data.
// Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
// unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).
//
// Reducing this threshold will improve the speed of initial component inspection,
// but may decrease the responsiveness of expanding objects/arrays to inspect further.
var LEVEL_THRESHOLD = 2;
/**
 * Generate the dehydrated metadata for complex object instances
 */

function createDehydrated(type, inspectable, data, cleaned, path) {
  cleaned.push(path);
  var dehydrated = {
    inspectable: inspectable,
    type: type,
    preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
    preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
    name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
  };

  if (type === 'array' || type === 'typed_array') {
    dehydrated.size = data.length;
  } else if (type === 'object') {
    dehydrated.size = Object.keys(data).length;
  }

  if (type === 'iterator' || type === 'typed_array') {
    dehydrated.readonly = true;
  }

  return dehydrated;
}
/**
 * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels deep).
 * The paths of the stripped out objects are appended to the `cleaned` list.
 * On the other side of the barrier, the cleaned list is used to "re-hydrate" the cleaned representation into
 * an object with symbols as attributes, so that a sanitized object can be distinguished from a normal object.
 *
 * Input: {"some": {"attr": fn()}, "other": AnInstance}
 * Output: {
 *   "some": {
 *     "attr": {"name": the fn.name, type: "function"}
 *   },
 *   "other": {
 *     "name": "AnInstance",
 *     "type": "object",
 *   },
 * }
 * and cleaned = [["some", "attr"], ["other"]]
 */


function dehydrate(data, cleaned, unserializable, path, isPathWhitelisted) {
  var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var type = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDataType"])(data);
  var isPathWhitelistedCheck;

  switch (type) {
    case 'html_element':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.tagName,
        type: type
      };

    case 'function':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.name,
        type: type
      };

    case 'string':
      return data.length <= 500 ? data : data.slice(0, 500) + '...';

    case 'bigint':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.toString(),
        type: type
      };

    case 'symbol':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.toString(),
        type: type
      };
    // React Elements aren't very inspector-friendly,
    // and often contain private fields or circular references.

    case 'react_element':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayNameForReactElement"])(data) || 'Unknown',
        type: type
      };
    // ArrayBuffers error if you try to inspect them.

    case 'array_buffer':
    case 'data_view':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: type === 'data_view' ? 'DataView' : 'ArrayBuffer',
        size: data.byteLength,
        type: type
      };

    case 'array':
      isPathWhitelistedCheck = isPathWhitelisted(path);

      if (level >= LEVEL_THRESHOLD && !isPathWhitelistedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      }

      return data.map(function (item, i) {
        return dehydrate(item, cleaned, unserializable, path.concat([i]), isPathWhitelisted, isPathWhitelistedCheck ? 1 : level + 1);
      });

    case 'typed_array':
    case 'iterator':
      isPathWhitelistedCheck = isPathWhitelisted(path);

      if (level >= LEVEL_THRESHOLD && !isPathWhitelistedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      } else {
        var unserializableValue = {
          unserializable: true,
          type: type,
          readonly: true,
          size: type === 'typed_array' ? data.length : undefined,
          preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
          preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
          name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
        };

        if (_typeof(data[es6_symbol__WEBPACK_IMPORTED_MODULE_0___default.a.iterator])) {
          // TRICKY
          // Don't use [...spread] syntax for this purpose.
          // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
          // Other types (e.g. typed arrays, Sets) will not spread correctly.
          Array.from(data).forEach(function (item, i) {
            return unserializableValue[i] = dehydrate(item, cleaned, unserializable, path.concat([i]), isPathWhitelisted, isPathWhitelistedCheck ? 1 : level + 1);
          });
        }

        unserializable.push(path);
        return unserializableValue;
      }

    case 'date':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.toString(),
        type: type
      };

    case 'regexp':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatDataForPreview"])(data, true),
        name: data.toString(),
        type: type
      };

    case 'object':
      isPathWhitelistedCheck = isPathWhitelisted(path);

      if (level >= LEVEL_THRESHOLD && !isPathWhitelistedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      } else {
        var object = {};

        for (var name in data) {
          object[name] = dehydrate(data[name], cleaned, unserializable, path.concat([name]), isPathWhitelisted, isPathWhitelistedCheck ? 1 : level + 1);
        }

        return object;
      }

    case 'infinity':
    case 'nan':
    case 'undefined':
      // Some values are lossy when sent through a WebSocket.
      // We dehydrate+rehydrate them to preserve their type.
      cleaned.push(path);
      return {
        type: type
      };

    default:
      return data;
  }
}
function fillInPath(object, data, path, value) {
  var target = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(object, path);

  if (target != null) {
    if (!target[meta.unserializable]) {
      delete target[meta.inspectable];
      delete target[meta.inspected];
      delete target[meta.name];
      delete target[meta.preview_long];
      delete target[meta.preview_short];
      delete target[meta.readonly];
      delete target[meta.size];
      delete target[meta.type];
    }
  }

  if (value !== null && data.unserializable.length > 0) {
    var unserializablePath = data.unserializable[0];
    var isMatch = unserializablePath.length === path.length;

    for (var i = 0; i < path.length; i++) {
      if (path[i] !== unserializablePath[i]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      upgradeUnserializable(value, value);
    }
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setInObject"])(object, path, value);
}
function hydrate(object, cleaned, unserializable) {
  cleaned.forEach(function (path) {
    var length = path.length;
    var last = path[length - 1];
    var parent = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(object, path.slice(0, length - 1));

    if (!parent || !parent.hasOwnProperty(last)) {
      return;
    }

    var value = parent[last];

    if (value.type === 'infinity') {
      parent[last] = Infinity;
    } else if (value.type === 'nan') {
      parent[last] = NaN;
    } else if (value.type === 'undefined') {
      parent[last] = undefined;
    } else {
      // Replace the string keys with Symbols so they're non-enumerable.
      var replaced = {};
      replaced[meta.inspectable] = !!value.inspectable;
      replaced[meta.inspected] = false;
      replaced[meta.name] = value.name;
      replaced[meta.preview_long] = value.preview_long;
      replaced[meta.preview_short] = value.preview_short;
      replaced[meta.size] = value.size;
      replaced[meta.readonly] = !!value.readonly;
      replaced[meta.type] = value.type;
      parent[last] = replaced;
    }
  });
  unserializable.forEach(function (path) {
    var length = path.length;
    var last = path[length - 1];
    var parent = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getInObject"])(object, path.slice(0, length - 1));

    if (!parent || !parent.hasOwnProperty(last)) {
      return;
    }

    var node = parent[last];

    var replacement = _objectSpread({}, node);

    upgradeUnserializable(replacement, node);
    parent[last] = replacement;
  });
  return object;
}

function upgradeUnserializable(destination, source) {
  var _Object$definePropert;

  Object.defineProperties(destination, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, meta.inspected, {
    configurable: true,
    enumerable: false,
    value: !!source.inspected
  }), _defineProperty(_Object$definePropert, meta.name, {
    configurable: true,
    enumerable: false,
    value: source.name
  }), _defineProperty(_Object$definePropert, meta.preview_long, {
    configurable: true,
    enumerable: false,
    value: source.preview_long
  }), _defineProperty(_Object$definePropert, meta.preview_short, {
    configurable: true,
    enumerable: false,
    value: source.preview_short
  }), _defineProperty(_Object$definePropert, meta.size, {
    configurable: true,
    enumerable: false,
    value: source.size
  }), _defineProperty(_Object$definePropert, meta.readonly, {
    configurable: true,
    enumerable: false,
    value: !!source.readonly
  }), _defineProperty(_Object$definePropert, meta.type, {
    configurable: true,
    enumerable: false,
    value: source.type
  }), _defineProperty(_Object$definePropert, meta.unserializable, {
    configurable: true,
    enumerable: false,
    value: !!source.unserializable
  }), _Object$definePropert));
  delete destination.inspected;
  delete destination.name;
  delete destination.preview_long;
  delete destination.preview_short;
  delete destination.size;
  delete destination.readonly;
  delete destination.type;
  delete destination.unserializable;
}

/***/ }),

/***/ "../react-devtools-shared/src/storage.js":
/*!***********************************************!*\
  !*** ../react-devtools-shared/src/storage.js ***!
  \***********************************************/
/*! exports provided: localStorageGetItem, localStorageRemoveItem, localStorageSetItem, sessionStorageGetItem, sessionStorageRemoveItem, sessionStorageSetItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageGetItem", function() { return localStorageGetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageRemoveItem", function() { return localStorageRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSetItem", function() { return localStorageSetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageGetItem", function() { return sessionStorageGetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageRemoveItem", function() { return sessionStorageRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageSetItem", function() { return sessionStorageSetItem; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function localStorageGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}
function localStorageRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}
function localStorageSetItem(key, value) {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {}
}
function sessionStorageGetItem(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}
function sessionStorageRemoveItem(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {}
}
function sessionStorageSetItem(key, value) {
  try {
    return sessionStorage.setItem(key, value);
  } catch (error) {}
}

/***/ }),

/***/ "../react-devtools-shared/src/types.js":
/*!*********************************************!*\
  !*** ../react-devtools-shared/src/types.js ***!
  \*********************************************/
/*! exports provided: ElementTypeClass, ElementTypeContext, ElementTypeFunction, ElementTypeForwardRef, ElementTypeHostComponent, ElementTypeMemo, ElementTypeOtherOrUnknown, ElementTypeProfiler, ElementTypeRoot, ElementTypeSuspense, ElementTypeSuspenseList, ComponentFilterElementType, ComponentFilterDisplayName, ComponentFilterLocation, ComponentFilterHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeClass", function() { return ElementTypeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeContext", function() { return ElementTypeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeFunction", function() { return ElementTypeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeForwardRef", function() { return ElementTypeForwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeHostComponent", function() { return ElementTypeHostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeMemo", function() { return ElementTypeMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeOtherOrUnknown", function() { return ElementTypeOtherOrUnknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeProfiler", function() { return ElementTypeProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeRoot", function() { return ElementTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeSuspense", function() { return ElementTypeSuspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypeSuspenseList", function() { return ElementTypeSuspenseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFilterElementType", function() { return ComponentFilterElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFilterDisplayName", function() { return ComponentFilterDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFilterLocation", function() { return ComponentFilterLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFilterHOC", function() { return ComponentFilterHOC; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// WARNING
// The values below are referenced by ComponentFilters (which are saved via localStorage).
// Do not change them or it will break previously saved user customizations.
// If new element types are added, use new numbers rather than re-ordering existing ones.
//
// Changing these types is also a backwards breaking change for the standalone shell,
// since the frontend and backend must share the same values-
// and the backend is embedded in certain environments (like React Native).
var ElementTypeClass = 1;
var ElementTypeContext = 2;
var ElementTypeFunction = 5;
var ElementTypeForwardRef = 6;
var ElementTypeHostComponent = 7;
var ElementTypeMemo = 8;
var ElementTypeOtherOrUnknown = 9;
var ElementTypeProfiler = 10;
var ElementTypeRoot = 11;
var ElementTypeSuspense = 12;
var ElementTypeSuspenseList = 13; // Different types of elements displayed in the Elements tree.
// These types may be used to visually distinguish types,
// or to enable/disable certain functionality.

// WARNING
// The values below are referenced by ComponentFilters (which are saved via localStorage).
// Do not change them or it will break previously saved user customizations.
// If new filter types are added, use new numbers rather than re-ordering existing ones.
var ComponentFilterElementType = 1;
var ComponentFilterDisplayName = 2;
var ComponentFilterLocation = 3;
var ComponentFilterHOC = 4;

/***/ }),

/***/ "../react-devtools-shared/src/utils.js":
/*!*********************************************!*\
  !*** ../react-devtools-shared/src/utils.js ***!
  \*********************************************/
/*! exports provided: getDisplayName, getUID, utfDecodeString, utfEncodeString, printOperationsArray, getDefaultComponentFilters, getSavedComponentFilters, saveComponentFilters, getAppendComponentStack, setAppendComponentStack, separateDisplayNameAndHOCs, shallowDiffers, getInObject, setInObject, getDataType, getDisplayNameForReactElement, formatDataForPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUID", function() { return getUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utfDecodeString", function() { return utfDecodeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utfEncodeString", function() { return utfEncodeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printOperationsArray", function() { return printOperationsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultComponentFilters", function() { return getDefaultComponentFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedComponentFilters", function() { return getSavedComponentFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveComponentFilters", function() { return saveComponentFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppendComponentStack", function() { return getAppendComponentStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppendComponentStack", function() { return setAppendComponentStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateDisplayNameAndHOCs", function() { return separateDisplayNameAndHOCs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowDiffers", function() { return shallowDiffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInObject", function() { return getInObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInObject", function() { return setInObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return getDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayNameForReactElement", function() { return getDisplayNameForReactElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataForPreview", function() { return formatDataForPreview; });
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-symbol */ "../../node_modules/es6-symbol/index.js");
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "../../node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../react-devtools-shared/src/constants.js");
/* harmony import */ var react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-devtools-shared/src/types */ "../react-devtools-shared/src/types.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "../react-devtools-shared/src/storage.js");
/* harmony import */ var _devtools_views_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devtools/views/utils */ "../react-devtools-shared/src/devtools/views/utils.js");
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hydration */ "../react-devtools-shared/src/hydration.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











var cachedDisplayNames = new WeakMap(); // On large trees, encoding takes significant time.
// Try to reuse the already encoded strings.

var encodedStringCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1___default.a({
  max: 1000
});
function getDisplayName(type) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Anonymous';
  var nameFromCache = cachedDisplayNames.get(type);

  if (nameFromCache != null) {
    return nameFromCache;
  }

  var displayName = fallbackName; // The displayName property is not guaranteed to be a string.
  // It's only safe to use for our purposes if it's a string.
  // github.com/facebook/react-devtools/issues/803

  if (typeof type.displayName === 'string') {
    displayName = type.displayName;
  } else if (typeof type.name === 'string' && type.name !== '') {
    displayName = type.name;
  }

  cachedDisplayNames.set(type, displayName);
  return displayName;
}
var uidCounter = 0;
function getUID() {
  return ++uidCounter;
}
function utfDecodeString(array) {
  return String.fromCodePoint.apply(String, _toConsumableArray(array));
}
function utfEncodeString(string) {
  var cached = encodedStringCache.get(string);

  if (cached !== undefined) {
    return cached;
  }

  var encoded = new Array(string.length);

  for (var i = 0; i < string.length; i++) {
    encoded[i] = string.codePointAt(i);
  }

  encodedStringCache.set(string, encoded);
  return encoded;
}
function printOperationsArray(operations) {
  // The first two values are always rendererID and rootID
  var rendererID = operations[0];
  var rootID = operations[1];
  var logs = ["opertions for renderer:".concat(rendererID, " and root:").concat(rootID)];
  var i = 2; // Reassemble the string table.

  var stringTable = [null];
  var stringTableSize = operations[i++];
  var stringTableEnd = i + stringTableSize;

  while (i < stringTableEnd) {
    var nextLength = operations[i++];
    var nextString = utfDecodeString(operations.slice(i, i + nextLength));
    stringTable.push(nextString);
    i += nextLength;
  }

  while (i < operations.length) {
    var operation = operations[i];

    switch (operation) {
      case _constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_ADD"]:
        {
          var id = operations[i + 1];
          var type = operations[i + 2];
          i += 3;

          if (type === react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeRoot"]) {
            logs.push("Add new root node ".concat(id));
            i++; // supportsProfiling

            i++; // hasOwnerMetadata
          } else {
            var parentID = operations[i];
            i++;
            i++; // ownerID

            var displayNameStringID = operations[i];
            var displayName = stringTable[displayNameStringID];
            i++;
            i++; // key

            logs.push("Add node ".concat(id, " (").concat(displayName || 'null', ") as child of ").concat(parentID));
          }

          break;
        }

      case _constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_REMOVE"]:
        {
          var removeLength = operations[i + 1];
          i += 2;

          for (var removeIndex = 0; removeIndex < removeLength; removeIndex++) {
            var _id = operations[i];
            i += 1;
            logs.push("Remove node ".concat(_id));
          }

          break;
        }

      case _constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_REORDER_CHILDREN"]:
        {
          var _id2 = operations[i + 1];
          var numChildren = operations[i + 2];
          i += 3;
          var children = operations.slice(i, i + numChildren);
          i += numChildren;
          logs.push("Re-order node ".concat(_id2, " children ").concat(children.join(',')));
          break;
        }

      case _constants__WEBPACK_IMPORTED_MODULE_3__["TREE_OPERATION_UPDATE_TREE_BASE_DURATION"]:
        // Base duration updates are only sent while profiling is in progress.
        // We can ignore them at this point.
        // The profiler UI uses them lazily in order to generate the tree.
        i += 3;
        break;

      default:
        throw Error("Unsupported Bridge operation ".concat(operation));
    }
  }

  console.log(logs.join('\n  '));
}
function getDefaultComponentFilters() {
  return [{
    type: react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ComponentFilterElementType"],
    value: react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeHostComponent"],
    isEnabled: true
  }];
}
function getSavedComponentFilters() {
  try {
    var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__["localStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_FILTER_PREFERENCES_KEY"]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return getDefaultComponentFilters();
}
function saveComponentFilters(componentFilters) {
  Object(_storage__WEBPACK_IMPORTED_MODULE_5__["localStorageSetItem"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_FILTER_PREFERENCES_KEY"], JSON.stringify(componentFilters));
}
function getAppendComponentStack() {
  try {
    var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__["localStorageGetItem"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY"]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return true;
}
function setAppendComponentStack(value) {
  Object(_storage__WEBPACK_IMPORTED_MODULE_5__["localStorageSetItem"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY"], JSON.stringify(value));
}
function separateDisplayNameAndHOCs(displayName, type) {
  if (displayName === null) {
    return [null, null];
  }

  var hocDisplayNames = null;

  switch (type) {
    case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeClass"]:
    case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeForwardRef"]:
    case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeFunction"]:
    case react_devtools_shared_src_types__WEBPACK_IMPORTED_MODULE_4__["ElementTypeMemo"]:
      if (displayName.indexOf('(') >= 0) {
        var matches = displayName.match(/[^()]+/g);

        if (matches != null) {
          displayName = matches.pop();
          hocDisplayNames = matches;
        }
      }

      break;

    default:
      break;
  }

  return [displayName, hocDisplayNames];
} // Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349

function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}
function getInObject(object, path) {
  return path.reduce(function (reduced, attr) {
    if (reduced) {
      if (hasOwnProperty.call(reduced, attr)) {
        return reduced[attr];
      }

      if (typeof reduced[es6_symbol__WEBPACK_IMPORTED_MODULE_0___default.a.iterator] === 'function') {
        // Convert iterable to array and return array[index]
        //
        // TRICKY
        // Don't use [...spread] syntax for this purpose.
        // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
        // Other types (e.g. typed arrays, Sets) will not spread correctly.
        return Array.from(reduced)[attr];
      }
    }

    return null;
  }, object);
}
function setInObject(object, path, value) {
  var length = path.length;
  var last = path[length - 1];

  if (object != null) {
    var parent = getInObject(object, path.slice(0, length - 1));

    if (parent) {
      parent[last] = value;
    }
  }
}

/**
 * Get a enhanced/artificial type string based on the object instance
 */
function getDataType(data) {
  if (data === null) {
    return 'null';
  } else if (data === undefined) {
    return 'undefined';
  }

  if (Object(react_is__WEBPACK_IMPORTED_MODULE_2__["isElement"])(data)) {
    return 'react_element';
  }

  if (typeof HTMLElement !== 'undefined' && data instanceof HTMLElement) {
    return 'html_element';
  }

  var type = _typeof(data);

  switch (type) {
    case 'bigint':
      return 'bigint';

    case 'boolean':
      return 'boolean';

    case 'function':
      return 'function';

    case 'number':
      if (Number.isNaN(data)) {
        return 'nan';
      } else if (!Number.isFinite(data)) {
        return 'infinity';
      } else {
        return 'number';
      }

    case 'object':
      if (Array.isArray(data)) {
        return 'array';
      } else if (ArrayBuffer.isView(data)) {
        return hasOwnProperty.call(data.constructor, 'BYTES_PER_ELEMENT') ? 'typed_array' : 'data_view';
      } else if (data.constructor && data.constructor.name === 'ArrayBuffer') {
        // HACK This ArrayBuffer check is gross; is there a better way?
        // We could try to create a new DataView with the value.
        // If it doesn't error, we know it's an ArrayBuffer,
        // but this seems kind of awkward and expensive.
        return 'array_buffer';
      } else if (typeof data[es6_symbol__WEBPACK_IMPORTED_MODULE_0___default.a.iterator] === 'function') {
        return 'iterator';
      } else if (data.constructor && data.constructor.name === 'RegExp') {
        return 'regexp';
      } else if (Object.prototype.toString.call(data) === '[object Date]') {
        return 'date';
      }

      return 'object';

    case 'string':
      return 'string';

    case 'symbol':
      return 'symbol';

    default:
      return 'unknown';
  }
}
function getDisplayNameForReactElement(element) {
  var elementType = Object(react_is__WEBPACK_IMPORTED_MODULE_2__["typeOf"])(element);

  switch (elementType) {
    case react_is__WEBPACK_IMPORTED_MODULE_2__["AsyncMode"]:
    case react_is__WEBPACK_IMPORTED_MODULE_2__["ConcurrentMode"]:
      return 'ConcurrentMode';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["ContextConsumer"]:
      return 'ContextConsumer';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]:
      return 'ContextProvider';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["ForwardRef"]:
      return 'ForwardRef';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Fragment"]:
      return 'Fragment';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Lazy"]:
      return 'Lazy';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Memo"]:
      return 'Memo';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Portal"]:
      return 'Portal';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Profiler"]:
      return 'Profiler';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["StrictMode"]:
      return 'StrictMode';

    case react_is__WEBPACK_IMPORTED_MODULE_2__["Suspense"]:
      return 'Suspense';

    default:
      var type = element.type;

      if (typeof type === 'string') {
        return type;
      } else if (type != null) {
        return getDisplayName(type, 'Anonymous');
      } else {
        return 'Element';
      }

  }
}
var MAX_PREVIEW_STRING_LENGTH = 50;

function truncateForDisplay(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_PREVIEW_STRING_LENGTH;

  if (string.length > length) {
    return string.substr(0, length) + '…';
  } else {
    return string;
  }
} // Attempts to mimic Chrome's inline preview for values.
// For example, the following value...
//   {
//      foo: 123,
//      bar: "abc",
//      baz: [true, false],
//      qux: { ab: 1, cd: 2 }
//   };
//
// Would show a preview of...
//   {foo: 123, bar: "abc", baz: Array(2), qux: {…}}
//
// And the following value...
//   [
//     123,
//     "abc",
//     [true, false],
//     { foo: 123, bar: "abc" }
//   ];
//
// Would show a preview of...
//   [123, "abc", Array(2), {…}]


function formatDataForPreview(data, showFormattedValue) {
  if (data != null && hasOwnProperty.call(data, _hydration__WEBPACK_IMPORTED_MODULE_7__["meta"].type)) {
    return showFormattedValue ? data[_hydration__WEBPACK_IMPORTED_MODULE_7__["meta"].preview_long] : data[_hydration__WEBPACK_IMPORTED_MODULE_7__["meta"].preview_short];
  }

  var type = getDataType(data);

  switch (type) {
    case 'html_element':
      return "<".concat(truncateForDisplay(data.tagName.toLowerCase()), " />");

    case 'function':
      return truncateForDisplay(data.name);

    case 'string':
      return "\"".concat(data, "\"");

    case 'bigint':
      return truncateForDisplay(data.toString() + 'n');

    case 'regexp':
      return truncateForDisplay(data.toString());

    case 'symbol':
      return truncateForDisplay(data.toString());

    case 'react_element':
      return "<".concat(truncateForDisplay(getDisplayNameForReactElement(data) || 'Unknown'), " />");

    case 'array_buffer':
      return "ArrayBuffer(".concat(data.byteLength, ")");

    case 'data_view':
      return "DataView(".concat(data.buffer.byteLength, ")");

    case 'array':
      if (showFormattedValue) {
        var formatted = '';

        for (var i = 0; i < data.length; i++) {
          if (i > 0) {
            formatted += ', ';
          }

          formatted += formatDataForPreview(data[i], false);

          if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return "[".concat(truncateForDisplay(formatted), "]");
      } else {
        var length = hasOwnProperty.call(data, _hydration__WEBPACK_IMPORTED_MODULE_7__["meta"].size) ? data[_hydration__WEBPACK_IMPORTED_MODULE_7__["meta"].size] : data.length;
        return "Array(".concat(length, ")");
      }

    case 'typed_array':
      var shortName = "".concat(data.constructor.name, "(").concat(data.length, ")");

      if (showFormattedValue) {
        var _formatted = '';

        for (var _i = 0; _i < data.length; _i++) {
          if (_i > 0) {
            _formatted += ', ';
          }

          _formatted += data[_i];

          if (_formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return "".concat(shortName, " [").concat(truncateForDisplay(_formatted), "]");
      } else {
        return shortName;
      }

    case 'iterator':
      var name = data.constructor.name;

      if (showFormattedValue) {
        // TRICKY
        // Don't use [...spread] syntax for this purpose.
        // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
        // Other types (e.g. typed arrays, Sets) will not spread correctly.
        var array = Array.from(data);
        var _formatted2 = '';

        for (var _i2 = 0; _i2 < array.length; _i2++) {
          var entryOrEntries = array[_i2];

          if (_i2 > 0) {
            _formatted2 += ', ';
          } // TRICKY
          // Browsers display Maps and Sets differently.
          // To mimic their behavior, detect if we've been given an entries tuple.
          //   Map(2) {"abc" => 123, "def" => 123}
          //   Set(2) {"abc", 123}


          if (Array.isArray(entryOrEntries)) {
            var key = formatDataForPreview(entryOrEntries[0], true);
            var value = formatDataForPreview(entryOrEntries[1], false);
            _formatted2 += "".concat(key, " => ").concat(value);
          } else {
            _formatted2 += formatDataForPreview(entryOrEntries, false);
          }

          if (_formatted2.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return "".concat(name, "(").concat(data.size, ") {").concat(truncateForDisplay(_formatted2), "}");
      } else {
        return "".concat(name, "(").concat(data.size, ")");
      }

    case 'date':
      return data.toString();

    case 'object':
      if (showFormattedValue) {
        var keys = Object.keys(data).sort(_devtools_views_utils__WEBPACK_IMPORTED_MODULE_6__["alphaSortEntries"]);
        var _formatted3 = '';

        for (var _i3 = 0; _i3 < keys.length; _i3++) {
          var _key = keys[_i3];

          if (_i3 > 0) {
            _formatted3 += ', ';
          }

          _formatted3 += "".concat(_key, ": ").concat(formatDataForPreview(data[_key], false));

          if (_formatted3.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return "{".concat(truncateForDisplay(_formatted3), "}");
      } else {
        return '{…}';
      }

    case 'boolean':
    case 'number':
    case 'infinity':
    case 'nan':
    case 'null':
    case 'undefined':
      return data;

    default:
      try {
        return truncateForDisplay('' + data);
      } catch (error) {
        return 'unserializable';
      }

  }
}

/***/ }),

/***/ "../shared/ReactSharedInternals.js":
/*!*****************************************!*\
  !*** ../shared/ReactSharedInternals.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactSharedInternals = react__WEBPACK_IMPORTED_MODULE_0___default.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ReactSharedInternals);

/***/ }),

/***/ "../shared/ReactWorkTags.js":
/*!**********************************!*\
  !*** ../shared/ReactWorkTags.js ***!
  \**********************************/
/*! exports provided: FunctionComponent, ClassComponent, IndeterminateComponent, HostRoot, HostPortal, HostComponent, HostText, Fragment, Mode, ContextConsumer, ContextProvider, ForwardRef, Profiler, SuspenseComponent, MemoComponent, SimpleMemoComponent, LazyComponent, IncompleteClassComponent, DehydratedFragment, SuspenseListComponent, FundamentalComponent, ScopeComponent, Chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionComponent", function() { return FunctionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeterminateComponent", function() { return IndeterminateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRoot", function() { return HostRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostPortal", function() { return HostPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostText", function() { return HostText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextConsumer", function() { return ContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardRef", function() { return ForwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseComponent", function() { return SuspenseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoComponent", function() { return MemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMemoComponent", function() { return SimpleMemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleteClassComponent", function() { return IncompleteClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFragment", function() { return DehydratedFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseListComponent", function() { return SuspenseListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundamentalComponent", function() { return FundamentalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeComponent", function() { return ScopeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chunk", function() { return Chunk; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var FunctionComponent = 0;
var ClassComponent = 1;
var IndeterminateComponent = 2; // Before we know whether it is function or class

var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

var HostComponent = 5;
var HostText = 6;
var Fragment = 7;
var Mode = 8;
var ContextConsumer = 9;
var ContextProvider = 10;
var ForwardRef = 11;
var Profiler = 12;
var SuspenseComponent = 13;
var MemoComponent = 14;
var SimpleMemoComponent = 15;
var LazyComponent = 16;
var IncompleteClassComponent = 17;
var DehydratedFragment = 18;
var SuspenseListComponent = 19;
var FundamentalComponent = 20;
var ScopeComponent = 21;
var Chunk = 22;

/***/ }),

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/*! exports provided: activate, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var react_devtools_shared_src_backend_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-devtools-shared/src/backend/agent */ "../react-devtools-shared/src/backend/agent.js");
/* harmony import */ var react_devtools_shared_src_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-devtools-shared/src/bridge */ "../react-devtools-shared/src/bridge.js");
/* harmony import */ var react_devtools_shared_src_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-devtools-shared/src/backend */ "../react-devtools-shared/src/backend/index.js");
/* harmony import */ var react_devtools_shared_src_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-devtools-shared/src/hook */ "../react-devtools-shared/src/hook.js");
/* harmony import */ var react_devtools_shared_src_backend_NativeStyleEditor_setupNativeStyleEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor */ "../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");







function startActivation(contentWindow) {
  var parent = contentWindow.parent;

  var onMessage = function onMessage(_ref) {
    var data = _ref.data;

    switch (data.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE_SAVED_PREFERENCES"]:
        // This is the only message we're listening for,
        // so it's safe to cleanup after we've received it.
        contentWindow.removeEventListener('message', onMessage);
        var appendComponentStack = data.appendComponentStack,
            componentFilters = data.componentFilters;
        contentWindow.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = appendComponentStack;
        contentWindow.__REACT_DEVTOOLS_COMPONENT_FILTERS__ = componentFilters; // TRICKY
        // The backend entry point may be required in the context of an iframe or the parent window.
        // If it's required within the parent window, store the saved values on it as well,
        // since the injected renderer interface will read from window.
        // Technically we don't need to store them on the contentWindow in this case,
        // but it doesn't really hurt anything to store them there too.

        if (contentWindow !== window) {
          window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = appendComponentStack;
          window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ = componentFilters;
        }

        finishActivation(contentWindow);
        break;

      default:
        break;
    }
  };

  contentWindow.addEventListener('message', onMessage); // The backend may be unable to read saved preferences directly,
  // because they are stored in localStorage within the context of the extension (on the frontend).
  // Instead it relies on the extension to pass preferences through.
  // Because we might be in a sandboxed iframe, we have to ask for them by way of postMessage().

  parent.postMessage({
    type: _constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE_GET_SAVED_PREFERENCES"]
  }, '*');
}

function finishActivation(contentWindow) {
  var parent = contentWindow.parent;
  var bridge = new react_devtools_shared_src_bridge__WEBPACK_IMPORTED_MODULE_1__["default"]({
    listen: function listen(fn) {
      var onMessage = function onMessage(event) {
        fn(event.data);
      };

      contentWindow.addEventListener('message', onMessage);
      return function () {
        contentWindow.removeEventListener('message', onMessage);
      };
    },
    send: function send(event, payload, transferable) {
      parent.postMessage({
        event: event,
        payload: payload
      }, '*', transferable);
    }
  });
  var agent = new react_devtools_shared_src_backend_agent__WEBPACK_IMPORTED_MODULE_0__["default"](bridge);
  var hook = contentWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  Object(react_devtools_shared_src_backend__WEBPACK_IMPORTED_MODULE_2__["initBackend"])(hook, agent, contentWindow); // Setup React Native style editor if a renderer like react-native-web has injected it.

  if (hook.resolveRNStyle) {
    Object(react_devtools_shared_src_backend_NativeStyleEditor_setupNativeStyleEditor__WEBPACK_IMPORTED_MODULE_4__["default"])(bridge, agent, hook.resolveRNStyle, hook.nativeStyleEditorValidAttributes);
  }
}

function activate(contentWindow) {
  startActivation(contentWindow);
}
function initialize(contentWindow) {
  Object(react_devtools_shared_src_hook__WEBPACK_IMPORTED_MODULE_3__["installHook"])(contentWindow);
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: MESSAGE_TYPE_GET_SAVED_PREFERENCES, MESSAGE_TYPE_SAVED_PREFERENCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_TYPE_GET_SAVED_PREFERENCES", function() { return MESSAGE_TYPE_GET_SAVED_PREFERENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_TYPE_SAVED_PREFERENCES", function() { return MESSAGE_TYPE_SAVED_PREFERENCES; });
var MESSAGE_TYPE_GET_SAVED_PREFERENCES = 'React::DevTools::getSavedPreferences';
var MESSAGE_TYPE_SAVED_PREFERENCES = 'React::DevTools::savedPreferences';

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });