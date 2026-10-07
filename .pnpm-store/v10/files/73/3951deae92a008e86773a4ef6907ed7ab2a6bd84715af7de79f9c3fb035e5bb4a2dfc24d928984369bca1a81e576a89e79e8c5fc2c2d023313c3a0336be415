(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('react-dom/client'), require('react-dom/test-utils')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'react-dom/client', 'react-dom/test-utils'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TestingLibraryReact = {}, global.React, global.ReactDOM, global.ReactDOMClient, global.ReactTestUtils));
})(this, (function (exports, React, ReactDOM, ReactDOMClient, DeprecatedReactTestUtils) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespace(React);
	var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
	var ReactDOMClient__namespace = /*#__PURE__*/_interopNamespace(ReactDOMClient);
	var DeprecatedReactTestUtils__namespace = /*#__PURE__*/_interopNamespace(DeprecatedReactTestUtils);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var build = {};

	var ansiStyles = {exports: {}};

	(function (module) {

	  const ANSI_BACKGROUND_OFFSET = 10;
	  const wrapAnsi256 = function (offset) {
	    if (offset === void 0) {
	      offset = 0;
	    }
	    return code => `\u001B[${38 + offset};5;${code}m`;
	  };
	  const wrapAnsi16m = function (offset) {
	    if (offset === void 0) {
	      offset = 0;
	    }
	    return (red, green, blue) => `\u001B[${38 + offset};2;${red};${green};${blue}m`;
	  };
	  function assembleStyles() {
	    const codes = new Map();
	    const styles = {
	      modifier: {
	        reset: [0, 0],
	        // 21 isn't widely supported and 22 does the same thing
	        bold: [1, 22],
	        dim: [2, 22],
	        italic: [3, 23],
	        underline: [4, 24],
	        overline: [53, 55],
	        inverse: [7, 27],
	        hidden: [8, 28],
	        strikethrough: [9, 29]
	      },
	      color: {
	        black: [30, 39],
	        red: [31, 39],
	        green: [32, 39],
	        yellow: [33, 39],
	        blue: [34, 39],
	        magenta: [35, 39],
	        cyan: [36, 39],
	        white: [37, 39],
	        // Bright color
	        blackBright: [90, 39],
	        redBright: [91, 39],
	        greenBright: [92, 39],
	        yellowBright: [93, 39],
	        blueBright: [94, 39],
	        magentaBright: [95, 39],
	        cyanBright: [96, 39],
	        whiteBright: [97, 39]
	      },
	      bgColor: {
	        bgBlack: [40, 49],
	        bgRed: [41, 49],
	        bgGreen: [42, 49],
	        bgYellow: [43, 49],
	        bgBlue: [44, 49],
	        bgMagenta: [45, 49],
	        bgCyan: [46, 49],
	        bgWhite: [47, 49],
	        // Bright color
	        bgBlackBright: [100, 49],
	        bgRedBright: [101, 49],
	        bgGreenBright: [102, 49],
	        bgYellowBright: [103, 49],
	        bgBlueBright: [104, 49],
	        bgMagentaBright: [105, 49],
	        bgCyanBright: [106, 49],
	        bgWhiteBright: [107, 49]
	      }
	    };

	    // Alias bright black as gray (and grey)
	    styles.color.gray = styles.color.blackBright;
	    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	    styles.color.grey = styles.color.blackBright;
	    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
	    for (const [groupName, group] of Object.entries(styles)) {
	      for (const [styleName, style] of Object.entries(group)) {
	        styles[styleName] = {
	          open: `\u001B[${style[0]}m`,
	          close: `\u001B[${style[1]}m`
	        };
	        group[styleName] = styles[styleName];
	        codes.set(style[0], style[1]);
	      }
	      Object.defineProperty(styles, groupName, {
	        value: group,
	        enumerable: false
	      });
	    }
	    Object.defineProperty(styles, 'codes', {
	      value: codes,
	      enumerable: false
	    });
	    styles.color.close = '\u001B[39m';
	    styles.bgColor.close = '\u001B[49m';
	    styles.color.ansi256 = wrapAnsi256();
	    styles.color.ansi16m = wrapAnsi16m();
	    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
	    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);

	    // From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
	    Object.defineProperties(styles, {
	      rgbToAnsi256: {
	        value: (red, green, blue) => {
	          // We use the extended greyscale palette here, with the exception of
	          // black and white. normal palette only has 4 greyscale shades.
	          if (red === green && green === blue) {
	            if (red < 8) {
	              return 16;
	            }
	            if (red > 248) {
	              return 231;
	            }
	            return Math.round((red - 8) / 247 * 24) + 232;
	          }
	          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
	        },
	        enumerable: false
	      },
	      hexToRgb: {
	        value: hex => {
	          const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
	          if (!matches) {
	            return [0, 0, 0];
	          }
	          let {
	            colorString
	          } = matches.groups;
	          if (colorString.length === 3) {
	            colorString = colorString.split('').map(character => character + character).join('');
	          }
	          const integer = Number.parseInt(colorString, 16);
	          return [integer >> 16 & 0xFF, integer >> 8 & 0xFF, integer & 0xFF];
	        },
	        enumerable: false
	      },
	      hexToAnsi256: {
	        value: hex => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
	        enumerable: false
	      }
	    });
	    return styles;
	  }

	  // Make the export immutable
	  Object.defineProperty(module, 'exports', {
	    enumerable: true,
	    get: assembleStyles
	  });
	})(ansiStyles);

	var collections = {};

	Object.defineProperty(collections, '__esModule', {
	  value: true
	});
	collections.printIteratorEntries = printIteratorEntries;
	collections.printIteratorValues = printIteratorValues;
	collections.printListItems = printListItems;
	collections.printObjectProperties = printObjectProperties;

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	const getKeysOfEnumerableProperties = (object, compareKeys) => {
	  const keys = Object.keys(object).sort(compareKeys);
	  if (Object.getOwnPropertySymbols) {
	    Object.getOwnPropertySymbols(object).forEach(symbol => {
	      if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
	        keys.push(symbol);
	      }
	    });
	  }
	  return keys;
	};
	/**
	 * Return entries (for example, of a map)
	 * with spacing, indentation, and comma
	 * without surrounding punctuation (for example, braces)
	 */

	function printIteratorEntries(iterator, config, indentation, depth, refs, printer,
	// Too bad, so sad that separator for ECMAScript Map has been ' => '
	// What a distracting diff if you change a data structure to/from
	// ECMAScript Object or Immutable.Map/OrderedMap which use the default.
	separator) {
	  if (separator === void 0) {
	    separator = ': ';
	  }
	  let result = '';
	  let current = iterator.next();
	  if (!current.done) {
	    result += config.spacingOuter;
	    const indentationNext = indentation + config.indent;
	    while (!current.done) {
	      const name = printer(current.value[0], config, indentationNext, depth, refs);
	      const value = printer(current.value[1], config, indentationNext, depth, refs);
	      result += indentationNext + name + separator + value;
	      current = iterator.next();
	      if (!current.done) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }
	    result += config.spacingOuter + indentation;
	  }
	  return result;
	}
	/**
	 * Return values (for example, of a set)
	 * with spacing, indentation, and comma
	 * without surrounding punctuation (braces or brackets)
	 */

	function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
	  let result = '';
	  let current = iterator.next();
	  if (!current.done) {
	    result += config.spacingOuter;
	    const indentationNext = indentation + config.indent;
	    while (!current.done) {
	      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);
	      current = iterator.next();
	      if (!current.done) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }
	    result += config.spacingOuter + indentation;
	  }
	  return result;
	}
	/**
	 * Return items (for example, of an array)
	 * with spacing, indentation, and comma
	 * without surrounding punctuation (for example, brackets)
	 **/

	function printListItems(list, config, indentation, depth, refs, printer) {
	  let result = '';
	  if (list.length) {
	    result += config.spacingOuter;
	    const indentationNext = indentation + config.indent;
	    for (let i = 0; i < list.length; i++) {
	      result += indentationNext;
	      if (i in list) {
	        result += printer(list[i], config, indentationNext, depth, refs);
	      }
	      if (i < list.length - 1) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }
	    result += config.spacingOuter + indentation;
	  }
	  return result;
	}
	/**
	 * Return properties of an object
	 * with spacing, indentation, and comma
	 * without surrounding punctuation (for example, braces)
	 */

	function printObjectProperties(val, config, indentation, depth, refs, printer) {
	  let result = '';
	  const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
	  if (keys.length) {
	    result += config.spacingOuter;
	    const indentationNext = indentation + config.indent;
	    for (let i = 0; i < keys.length; i++) {
	      const key = keys[i];
	      const name = printer(key, config, indentationNext, depth, refs);
	      const value = printer(val[key], config, indentationNext, depth, refs);
	      result += indentationNext + name + ': ' + value;
	      if (i < keys.length - 1) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }
	    result += config.spacingOuter + indentation;
	  }
	  return result;
	}

	var AsymmetricMatcher = {};

	Object.defineProperty(AsymmetricMatcher, '__esModule', {
	  value: true
	});
	AsymmetricMatcher.test = AsymmetricMatcher.serialize = AsymmetricMatcher.default = void 0;
	var _collections$3 = collections;
	var global$2 = function () {
	  if (typeof globalThis !== 'undefined') {
	    return globalThis;
	  } else if (typeof global$2 !== 'undefined') {
	    return global$2;
	  } else if (typeof self !== 'undefined') {
	    return self;
	  } else if (typeof window !== 'undefined') {
	    return window;
	  } else {
	    return Function('return this')();
	  }
	}();
	var Symbol$2 = global$2['jest-symbol-do-not-touch'] || global$2.Symbol;
	const asymmetricMatcher = typeof Symbol$2 === 'function' && Symbol$2.for ? Symbol$2.for('jest.asymmetricMatcher') : 0x1357a5;
	const SPACE$2 = ' ';
	const serialize$6 = (val, config, indentation, depth, refs, printer) => {
	  const stringedValue = val.toString();
	  if (stringedValue === 'ArrayContaining' || stringedValue === 'ArrayNotContaining') {
	    if (++depth > config.maxDepth) {
	      return '[' + stringedValue + ']';
	    }
	    return stringedValue + SPACE$2 + '[' + (0, _collections$3.printListItems)(val.sample, config, indentation, depth, refs, printer) + ']';
	  }
	  if (stringedValue === 'ObjectContaining' || stringedValue === 'ObjectNotContaining') {
	    if (++depth > config.maxDepth) {
	      return '[' + stringedValue + ']';
	    }
	    return stringedValue + SPACE$2 + '{' + (0, _collections$3.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + '}';
	  }
	  if (stringedValue === 'StringMatching' || stringedValue === 'StringNotMatching') {
	    return stringedValue + SPACE$2 + printer(val.sample, config, indentation, depth, refs);
	  }
	  if (stringedValue === 'StringContaining' || stringedValue === 'StringNotContaining') {
	    return stringedValue + SPACE$2 + printer(val.sample, config, indentation, depth, refs);
	  }
	  return val.toAsymmetricMatcher();
	};
	AsymmetricMatcher.serialize = serialize$6;
	const test$7 = val => val && val.$$typeof === asymmetricMatcher;
	AsymmetricMatcher.test = test$7;
	const plugin$6 = {
	  serialize: serialize$6,
	  test: test$7
	};
	var _default$2p = plugin$6;
	AsymmetricMatcher.default = _default$2p;

	var ConvertAnsi = {};

	var ansiRegex = function (_temp) {
	  let {
	    onlyFirst = false
	  } = _temp === void 0 ? {} : _temp;
	  const pattern = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
	  return new RegExp(pattern, onlyFirst ? undefined : 'g');
	};

	Object.defineProperty(ConvertAnsi, '__esModule', {
	  value: true
	});
	ConvertAnsi.test = ConvertAnsi.serialize = ConvertAnsi.default = void 0;
	var _ansiRegex = _interopRequireDefault$d(ansiRegex);
	var _ansiStyles$1 = _interopRequireDefault$d(ansiStyles.exports);
	function _interopRequireDefault$d(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	const toHumanReadableAnsi = text => text.replace((0, _ansiRegex.default)(), match => {
	  switch (match) {
	    case _ansiStyles$1.default.red.close:
	    case _ansiStyles$1.default.green.close:
	    case _ansiStyles$1.default.cyan.close:
	    case _ansiStyles$1.default.gray.close:
	    case _ansiStyles$1.default.white.close:
	    case _ansiStyles$1.default.yellow.close:
	    case _ansiStyles$1.default.bgRed.close:
	    case _ansiStyles$1.default.bgGreen.close:
	    case _ansiStyles$1.default.bgYellow.close:
	    case _ansiStyles$1.default.inverse.close:
	    case _ansiStyles$1.default.dim.close:
	    case _ansiStyles$1.default.bold.close:
	    case _ansiStyles$1.default.reset.open:
	    case _ansiStyles$1.default.reset.close:
	      return '</>';
	    case _ansiStyles$1.default.red.open:
	      return '<red>';
	    case _ansiStyles$1.default.green.open:
	      return '<green>';
	    case _ansiStyles$1.default.cyan.open:
	      return '<cyan>';
	    case _ansiStyles$1.default.gray.open:
	      return '<gray>';
	    case _ansiStyles$1.default.white.open:
	      return '<white>';
	    case _ansiStyles$1.default.yellow.open:
	      return '<yellow>';
	    case _ansiStyles$1.default.bgRed.open:
	      return '<bgRed>';
	    case _ansiStyles$1.default.bgGreen.open:
	      return '<bgGreen>';
	    case _ansiStyles$1.default.bgYellow.open:
	      return '<bgYellow>';
	    case _ansiStyles$1.default.inverse.open:
	      return '<inverse>';
	    case _ansiStyles$1.default.dim.open:
	      return '<dim>';
	    case _ansiStyles$1.default.bold.open:
	      return '<bold>';
	    default:
	      return '';
	  }
	});
	const test$6 = val => typeof val === 'string' && !!val.match((0, _ansiRegex.default)());
	ConvertAnsi.test = test$6;
	const serialize$5 = (val, config, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
	ConvertAnsi.serialize = serialize$5;
	const plugin$5 = {
	  serialize: serialize$5,
	  test: test$6
	};
	var _default$2o = plugin$5;
	ConvertAnsi.default = _default$2o;

	var DOMCollection$1 = {};

	Object.defineProperty(DOMCollection$1, '__esModule', {
	  value: true
	});
	DOMCollection$1.test = DOMCollection$1.serialize = DOMCollection$1.default = void 0;
	var _collections$2 = collections;

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/* eslint-disable local/ban-types-eventually */
	const SPACE$1 = ' ';
	const OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'];
	const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
	const testName = name => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
	const test$5 = val => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
	DOMCollection$1.test = test$5;
	const isNamedNodeMap = collection => collection.constructor.name === 'NamedNodeMap';
	const serialize$4 = (collection, config, indentation, depth, refs, printer) => {
	  const name = collection.constructor.name;
	  if (++depth > config.maxDepth) {
	    return '[' + name + ']';
	  }
	  return (config.min ? '' : name + SPACE$1) + (OBJECT_NAMES.indexOf(name) !== -1 ? '{' + (0, _collections$2.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
	    props[attribute.name] = attribute.value;
	    return props;
	  }, {}) : {
	    ...collection
	  }, config, indentation, depth, refs, printer) + '}' : '[' + (0, _collections$2.printListItems)(Array.from(collection), config, indentation, depth, refs, printer) + ']');
	};
	DOMCollection$1.serialize = serialize$4;
	const plugin$4 = {
	  serialize: serialize$4,
	  test: test$5
	};
	var _default$2n = plugin$4;
	DOMCollection$1.default = _default$2n;

	var DOMElement = {};

	var markup = {};

	var escapeHTML$2 = {};

	Object.defineProperty(escapeHTML$2, '__esModule', {
	  value: true
	});
	escapeHTML$2.default = escapeHTML$1;

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function escapeHTML$1(str) {
	  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	Object.defineProperty(markup, '__esModule', {
	  value: true
	});
	markup.printText = markup.printProps = markup.printElementAsLeaf = markup.printElement = markup.printComment = markup.printChildren = void 0;
	var _escapeHTML = _interopRequireDefault$c(escapeHTML$2);
	function _interopRequireDefault$c(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	// Return empty string if keys is empty.
	const printProps$1 = (keys, props, config, indentation, depth, refs, printer) => {
	  const indentationNext = indentation + config.indent;
	  const colors = config.colors;
	  return keys.map(key => {
	    const value = props[key];
	    let printed = printer(value, config, indentationNext, depth, refs);
	    if (typeof value !== 'string') {
	      if (printed.indexOf('\n') !== -1) {
	        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
	      }
	      printed = '{' + printed + '}';
	    }
	    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
	  }).join('');
	}; // Return empty string if children is empty.

	markup.printProps = printProps$1;
	const printChildren$1 = (children, config, indentation, depth, refs, printer) => children.map(child => config.spacingOuter + indentation + (typeof child === 'string' ? printText$1(child, config) : printer(child, config, indentation, depth, refs))).join('');
	markup.printChildren = printChildren$1;
	const printText$1 = (text, config) => {
	  const contentColor = config.colors.content;
	  return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
	};
	markup.printText = printText$1;
	const printComment$1 = (comment, config) => {
	  const commentColor = config.colors.comment;
	  return commentColor.open + '<!--' + (0, _escapeHTML.default)(comment) + '-->' + commentColor.close;
	}; // Separate the functions to format props, children, and element,
	// so a plugin could override a particular function, if needed.
	// Too bad, so sad: the traditional (but unnecessary) space
	// in a self-closing tagColor requires a second test of printedProps.

	markup.printComment = printComment$1;
	const printElement$1 = (type, printedProps, printedChildren, config, indentation) => {
	  const tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
	};
	markup.printElement = printElement$1;
	const printElementAsLeaf$1 = (type, config) => {
	  const tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
	};
	markup.printElementAsLeaf = printElementAsLeaf$1;

	Object.defineProperty(DOMElement, '__esModule', {
	  value: true
	});
	DOMElement.test = DOMElement.serialize = DOMElement.default = void 0;
	var _markup$2 = markup;

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	const ELEMENT_NODE$2 = 1;
	const TEXT_NODE$2 = 3;
	const COMMENT_NODE$2 = 8;
	const FRAGMENT_NODE$1 = 11;
	const ELEMENT_REGEXP$1 = /^((HTML|SVG)\w*)?Element$/;
	const testHasAttribute = val => {
	  try {
	    return typeof val.hasAttribute === 'function' && val.hasAttribute('is');
	  } catch {
	    return false;
	  }
	};
	const testNode$1 = val => {
	  const constructorName = val.constructor.name;
	  const {
	    nodeType,
	    tagName
	  } = val;
	  const isCustomElement = typeof tagName === 'string' && tagName.includes('-') || testHasAttribute(val);
	  return nodeType === ELEMENT_NODE$2 && (ELEMENT_REGEXP$1.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE$2 && constructorName === 'Text' || nodeType === COMMENT_NODE$2 && constructorName === 'Comment' || nodeType === FRAGMENT_NODE$1 && constructorName === 'DocumentFragment';
	};
	const test$4 = val => {
	  var _val$constructor;
	  return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode$1(val);
	};
	DOMElement.test = test$4;
	function nodeIsText$1(node) {
	  return node.nodeType === TEXT_NODE$2;
	}
	function nodeIsComment$1(node) {
	  return node.nodeType === COMMENT_NODE$2;
	}
	function nodeIsFragment$1(node) {
	  return node.nodeType === FRAGMENT_NODE$1;
	}
	const serialize$3 = (node, config, indentation, depth, refs, printer) => {
	  if (nodeIsText$1(node)) {
	    return (0, _markup$2.printText)(node.data, config);
	  }
	  if (nodeIsComment$1(node)) {
	    return (0, _markup$2.printComment)(node.data, config);
	  }
	  const type = nodeIsFragment$1(node) ? 'DocumentFragment' : node.tagName.toLowerCase();
	  if (++depth > config.maxDepth) {
	    return (0, _markup$2.printElementAsLeaf)(type, config);
	  }
	  return (0, _markup$2.printElement)(type, (0, _markup$2.printProps)(nodeIsFragment$1(node) ? [] : Array.from(node.attributes).map(attr => attr.name).sort(), nodeIsFragment$1(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
	    props[attribute.name] = attribute.value;
	    return props;
	  }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup$2.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
	};
	DOMElement.serialize = serialize$3;
	const plugin$3 = {
	  serialize: serialize$3,
	  test: test$4
	};
	var _default$2m = plugin$3;
	DOMElement.default = _default$2m;

	var Immutable = {};

	Object.defineProperty(Immutable, '__esModule', {
	  value: true
	});
	Immutable.test = Immutable.serialize = Immutable.default = void 0;
	var _collections$1 = collections;

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	// SENTINEL constants are from https://github.com/facebook/immutable-js
	const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4

	const IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	const IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	const IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	const getImmutableName = name => 'Immutable.' + name;
	const printAsLeaf = name => '[' + name + ']';
	const SPACE = ' ';
	const LAZY = '…'; // Seq is lazy if it calls a method like filter

	const printImmutableEntries = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '{' + (0, _collections$1.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) + '}'; // Record has an entries method because it is a collection in immutable v3.
	// Return an iterator for Immutable Record from version v3 or v4.

	function getRecordEntries(val) {
	  let i = 0;
	  return {
	    next() {
	      if (i < val._keys.length) {
	        const key = val._keys[i++];
	        return {
	          done: false,
	          value: [key, val.get(key)]
	        };
	      }
	      return {
	        done: true,
	        value: undefined
	      };
	    }
	  };
	}
	const printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
	  // _name property is defined only for an Immutable Record instance
	  // which was constructed with a second optional descriptive name arg
	  const name = getImmutableName(val._name || 'Record');
	  return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE + '{' + (0, _collections$1.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer) + '}';
	};
	const printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
	  const name = getImmutableName('Seq');
	  if (++depth > config.maxDepth) {
	    return printAsLeaf(name);
	  }
	  if (val[IS_KEYED_SENTINEL]) {
	    return name + SPACE + '{' + (
	    // from Immutable collection of entries or from ECMAScript object
	    val._iter || val._object ? (0, _collections$1.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY) + '}';
	  }
	  return name + SPACE + '[' + (val._iter ||
	  // from Immutable collection of values
	  val._array ||
	  // from ECMAScript array
	  val._collection ||
	  // from ECMAScript collection in immutable v4
	  val._iterable // from ECMAScript collection in immutable v3
	  ? (0, _collections$1.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY) + ']';
	};
	const printImmutableValues = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '[' + (0, _collections$1.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + ']';
	const serialize$2 = (val, config, indentation, depth, refs, printer) => {
	  if (val[IS_MAP_SENTINEL]) {
	    return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map');
	  }
	  if (val[IS_LIST_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, 'List');
	  }
	  if (val[IS_SET_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set');
	  }
	  if (val[IS_STACK_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack');
	  }
	  if (val[IS_SEQ_SENTINEL]) {
	    return printImmutableSeq(val, config, indentation, depth, refs, printer);
	  } // For compatibility with immutable v3 and v4, let record be the default.

	  return printImmutableRecord(val, config, indentation, depth, refs, printer);
	}; // Explicitly comparing sentinel properties to true avoids false positive
	// when mock identity-obj-proxy returns the key as the value for any key.

	Immutable.serialize = serialize$2;
	const test$3 = val => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
	Immutable.test = test$3;
	const plugin$2 = {
	  serialize: serialize$2,
	  test: test$3
	};
	var _default$2l = plugin$2;
	Immutable.default = _default$2l;

	var ReactElement = {};

	var reactIs = {exports: {}};

	var reactIs_development = {};

	/** @license React v17.0.2
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_development;
	function requireReactIs_development() {
	  if (hasRequiredReactIs_development) return reactIs_development;
	  hasRequiredReactIs_development = 1;
	  {
	    (function () {

	      // ATTENTION
	      // When adding new symbols to this file,
	      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	      // nor polyfill, then a plain number is used for performance.
	      var REACT_ELEMENT_TYPE = 0xeac7;
	      var REACT_PORTAL_TYPE = 0xeaca;
	      var REACT_FRAGMENT_TYPE = 0xeacb;
	      var REACT_STRICT_MODE_TYPE = 0xeacc;
	      var REACT_PROFILER_TYPE = 0xead2;
	      var REACT_PROVIDER_TYPE = 0xeacd;
	      var REACT_CONTEXT_TYPE = 0xeace;
	      var REACT_FORWARD_REF_TYPE = 0xead0;
	      var REACT_SUSPENSE_TYPE = 0xead1;
	      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
	      var REACT_MEMO_TYPE = 0xead3;
	      var REACT_LAZY_TYPE = 0xead4;
	      var REACT_BLOCK_TYPE = 0xead9;
	      var REACT_SERVER_BLOCK_TYPE = 0xeada;
	      var REACT_FUNDAMENTAL_TYPE = 0xead5;
	      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
	      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
	      if (typeof Symbol === 'function' && Symbol.for) {
	        var symbolFor = Symbol.for;
	        REACT_ELEMENT_TYPE = symbolFor('react.element');
	        REACT_PORTAL_TYPE = symbolFor('react.portal');
	        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
	        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
	        REACT_PROFILER_TYPE = symbolFor('react.profiler');
	        REACT_PROVIDER_TYPE = symbolFor('react.provider');
	        REACT_CONTEXT_TYPE = symbolFor('react.context');
	        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
	        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
	        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
	        REACT_MEMO_TYPE = symbolFor('react.memo');
	        REACT_LAZY_TYPE = symbolFor('react.lazy');
	        REACT_BLOCK_TYPE = symbolFor('react.block');
	        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
	        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
	        symbolFor('react.scope');
	        symbolFor('react.opaque.id');
	        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
	        symbolFor('react.offscreen');
	        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
	      }

	      // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

	      var enableScopeAPI = false; // Experimental Create Event Handle API.

	      function isValidElementType(type) {
	        if (typeof type === 'string' || typeof type === 'function') {
	          return true;
	        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
	          return true;
	        }
	        if (typeof type === 'object' && type !== null) {
	          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
	            return true;
	          }
	        }
	        return false;
	      }
	      function typeOf(object) {
	        if (typeof object === 'object' && object !== null) {
	          var $$typeof = object.$$typeof;
	          switch ($$typeof) {
	            case REACT_ELEMENT_TYPE:
	              var type = object.type;
	              switch (type) {
	                case REACT_FRAGMENT_TYPE:
	                case REACT_PROFILER_TYPE:
	                case REACT_STRICT_MODE_TYPE:
	                case REACT_SUSPENSE_TYPE:
	                case REACT_SUSPENSE_LIST_TYPE:
	                  return type;
	                default:
	                  var $$typeofType = type && type.$$typeof;
	                  switch ($$typeofType) {
	                    case REACT_CONTEXT_TYPE:
	                    case REACT_FORWARD_REF_TYPE:
	                    case REACT_LAZY_TYPE:
	                    case REACT_MEMO_TYPE:
	                    case REACT_PROVIDER_TYPE:
	                      return $$typeofType;
	                    default:
	                      return $$typeof;
	                  }
	              }
	            case REACT_PORTAL_TYPE:
	              return $$typeof;
	          }
	        }
	        return undefined;
	      }
	      var ContextConsumer = REACT_CONTEXT_TYPE;
	      var ContextProvider = REACT_PROVIDER_TYPE;
	      var Element = REACT_ELEMENT_TYPE;
	      var ForwardRef = REACT_FORWARD_REF_TYPE;
	      var Fragment = REACT_FRAGMENT_TYPE;
	      var Lazy = REACT_LAZY_TYPE;
	      var Memo = REACT_MEMO_TYPE;
	      var Portal = REACT_PORTAL_TYPE;
	      var Profiler = REACT_PROFILER_TYPE;
	      var StrictMode = REACT_STRICT_MODE_TYPE;
	      var Suspense = REACT_SUSPENSE_TYPE;
	      var hasWarnedAboutDeprecatedIsAsyncMode = false;
	      var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	      function isAsyncMode(object) {
	        {
	          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	          }
	        }
	        return false;
	      }
	      function isConcurrentMode(object) {
	        {
	          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	            console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	          }
	        }
	        return false;
	      }
	      function isContextConsumer(object) {
	        return typeOf(object) === REACT_CONTEXT_TYPE;
	      }
	      function isContextProvider(object) {
	        return typeOf(object) === REACT_PROVIDER_TYPE;
	      }
	      function isElement(object) {
	        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	      }
	      function isForwardRef(object) {
	        return typeOf(object) === REACT_FORWARD_REF_TYPE;
	      }
	      function isFragment(object) {
	        return typeOf(object) === REACT_FRAGMENT_TYPE;
	      }
	      function isLazy(object) {
	        return typeOf(object) === REACT_LAZY_TYPE;
	      }
	      function isMemo(object) {
	        return typeOf(object) === REACT_MEMO_TYPE;
	      }
	      function isPortal(object) {
	        return typeOf(object) === REACT_PORTAL_TYPE;
	      }
	      function isProfiler(object) {
	        return typeOf(object) === REACT_PROFILER_TYPE;
	      }
	      function isStrictMode(object) {
	        return typeOf(object) === REACT_STRICT_MODE_TYPE;
	      }
	      function isSuspense(object) {
	        return typeOf(object) === REACT_SUSPENSE_TYPE;
	      }
	      reactIs_development.ContextConsumer = ContextConsumer;
	      reactIs_development.ContextProvider = ContextProvider;
	      reactIs_development.Element = Element;
	      reactIs_development.ForwardRef = ForwardRef;
	      reactIs_development.Fragment = Fragment;
	      reactIs_development.Lazy = Lazy;
	      reactIs_development.Memo = Memo;
	      reactIs_development.Portal = Portal;
	      reactIs_development.Profiler = Profiler;
	      reactIs_development.StrictMode = StrictMode;
	      reactIs_development.Suspense = Suspense;
	      reactIs_development.isAsyncMode = isAsyncMode;
	      reactIs_development.isConcurrentMode = isConcurrentMode;
	      reactIs_development.isContextConsumer = isContextConsumer;
	      reactIs_development.isContextProvider = isContextProvider;
	      reactIs_development.isElement = isElement;
	      reactIs_development.isForwardRef = isForwardRef;
	      reactIs_development.isFragment = isFragment;
	      reactIs_development.isLazy = isLazy;
	      reactIs_development.isMemo = isMemo;
	      reactIs_development.isPortal = isPortal;
	      reactIs_development.isProfiler = isProfiler;
	      reactIs_development.isStrictMode = isStrictMode;
	      reactIs_development.isSuspense = isSuspense;
	      reactIs_development.isValidElementType = isValidElementType;
	      reactIs_development.typeOf = typeOf;
	    })();
	  }
	  return reactIs_development;
	}

	(function (module) {

	  {
	    module.exports = requireReactIs_development();
	  }
	})(reactIs);

	Object.defineProperty(ReactElement, '__esModule', {
	  value: true
	});
	ReactElement.test = ReactElement.serialize = ReactElement.default = void 0;
	var ReactIs = _interopRequireWildcard(reactIs.exports);
	var _markup$1 = markup;
	function _getRequireWildcardCache(nodeInterop) {
	  if (typeof WeakMap !== 'function') return null;
	  var cacheBabelInterop = new WeakMap();
	  var cacheNodeInterop = new WeakMap();
	  return (_getRequireWildcardCache = function (nodeInterop) {
	    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	  })(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
	  if (!nodeInterop && obj && obj.__esModule) {
	    return obj;
	  }
	  if (obj === null || typeof obj !== 'object' && typeof obj !== 'function') {
	    return {
	      default: obj
	    };
	  }
	  var cache = _getRequireWildcardCache(nodeInterop);
	  if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }
	  var newObj = {};
	  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	  for (var key in obj) {
	    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	      if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }
	  newObj.default = obj;
	  if (cache) {
	    cache.set(obj, newObj);
	  }
	  return newObj;
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	// Given element.props.children, or subtree during recursive traversal,
	// return flattened array of children.
	const getChildren = function (arg, children) {
	  if (children === void 0) {
	    children = [];
	  }
	  if (Array.isArray(arg)) {
	    arg.forEach(item => {
	      getChildren(item, children);
	    });
	  } else if (arg != null && arg !== false) {
	    children.push(arg);
	  }
	  return children;
	};
	const getType = element => {
	  const type = element.type;
	  if (typeof type === 'string') {
	    return type;
	  }
	  if (typeof type === 'function') {
	    return type.displayName || type.name || 'Unknown';
	  }
	  if (ReactIs.isFragment(element)) {
	    return 'React.Fragment';
	  }
	  if (ReactIs.isSuspense(element)) {
	    return 'React.Suspense';
	  }
	  if (typeof type === 'object' && type !== null) {
	    if (ReactIs.isContextProvider(element)) {
	      return 'Context.Provider';
	    }
	    if (ReactIs.isContextConsumer(element)) {
	      return 'Context.Consumer';
	    }
	    if (ReactIs.isForwardRef(element)) {
	      if (type.displayName) {
	        return type.displayName;
	      }
	      const functionName = type.render.displayName || type.render.name || '';
	      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    }
	    if (ReactIs.isMemo(element)) {
	      const functionName = type.displayName || type.type.displayName || type.type.name || '';
	      return functionName !== '' ? 'Memo(' + functionName + ')' : 'Memo';
	    }
	  }
	  return 'UNDEFINED';
	};
	const getPropKeys$1 = element => {
	  const {
	    props
	  } = element;
	  return Object.keys(props).filter(key => key !== 'children' && props[key] !== undefined).sort();
	};
	const serialize$1 = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup$1.printElementAsLeaf)(getType(element), config) : (0, _markup$1.printElement)(getType(element), (0, _markup$1.printProps)(getPropKeys$1(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup$1.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
	ReactElement.serialize = serialize$1;
	const test$2 = val => val != null && ReactIs.isElement(val);
	ReactElement.test = test$2;
	const plugin$1 = {
	  serialize: serialize$1,
	  test: test$2
	};
	var _default$2k = plugin$1;
	ReactElement.default = _default$2k;

	var ReactTestComponent = {};

	Object.defineProperty(ReactTestComponent, '__esModule', {
	  value: true
	});
	ReactTestComponent.test = ReactTestComponent.serialize = ReactTestComponent.default = void 0;
	var _markup = markup;
	var global$1 = function () {
	  if (typeof globalThis !== 'undefined') {
	    return globalThis;
	  } else if (typeof global$1 !== 'undefined') {
	    return global$1;
	  } else if (typeof self !== 'undefined') {
	    return self;
	  } else if (typeof window !== 'undefined') {
	    return window;
	  } else {
	    return Function('return this')();
	  }
	}();
	var Symbol$1 = global$1['jest-symbol-do-not-touch'] || global$1.Symbol;
	const testSymbol = typeof Symbol$1 === 'function' && Symbol$1.for ? Symbol$1.for('react.test.json') : 0xea71357;
	const getPropKeys = object => {
	  const {
	    props
	  } = object;
	  return props ? Object.keys(props).filter(key => props[key] !== undefined).sort() : [];
	};
	const serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);
	ReactTestComponent.serialize = serialize;
	const test$1 = val => val && val.$$typeof === testSymbol;
	ReactTestComponent.test = test$1;
	const plugin = {
	  serialize,
	  test: test$1
	};
	var _default$2j = plugin;
	ReactTestComponent.default = _default$2j;

	Object.defineProperty(build, '__esModule', {
	  value: true
	});
	var default_1 = build.default = DEFAULT_OPTIONS_1 = build.DEFAULT_OPTIONS = void 0;
	var format_1 = build.format = format;
	var plugins_1 = build.plugins = void 0;
	var _ansiStyles = _interopRequireDefault$b(ansiStyles.exports);
	var _collections = collections;
	var _AsymmetricMatcher = _interopRequireDefault$b(AsymmetricMatcher);
	var _ConvertAnsi = _interopRequireDefault$b(ConvertAnsi);
	var _DOMCollection = _interopRequireDefault$b(DOMCollection$1);
	var _DOMElement = _interopRequireDefault$b(DOMElement);
	var _Immutable = _interopRequireDefault$b(Immutable);
	var _ReactElement = _interopRequireDefault$b(ReactElement);
	var _ReactTestComponent = _interopRequireDefault$b(ReactTestComponent);
	function _interopRequireDefault$b(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/* eslint-disable local/ban-types-eventually */
	const toString$1 = Object.prototype.toString;
	const toISOString = Date.prototype.toISOString;
	const errorToString = Error.prototype.toString;
	const regExpToString = RegExp.prototype.toString;
	/**
	 * Explicitly comparing typeof constructor to function avoids undefined as name
	 * when mock identity-obj-proxy returns the key as the value for any key.
	 */

	const getConstructorName = val => typeof val.constructor === 'function' && val.constructor.name || 'Object';
	/* global window */

	/** Is val is equal to global window object? Works even if it does not exist :) */

	const isWindow = val => typeof window !== 'undefined' && val === window;
	const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
	const NEWLINE_REGEXP = /\n/gi;
	class PrettyFormatPluginError extends Error {
	  constructor(message, stack) {
	    super(message);
	    this.stack = stack;
	    this.name = this.constructor.name;
	  }
	}
	function isToStringedArrayType(toStringed) {
	  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';
	}
	function printNumber(val) {
	  return Object.is(val, -0) ? '-0' : String(val);
	}
	function printBigInt(val) {
	  return String(`${val}n`);
	}
	function printFunction(val, printFunctionName) {
	  if (!printFunctionName) {
	    return '[Function]';
	  }
	  return '[Function ' + (val.name || 'anonymous') + ']';
	}
	function printSymbol(val) {
	  return String(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
	}
	function printError(val) {
	  return '[' + errorToString.call(val) + ']';
	}
	/**
	 * The first port of call for printing an object, handles most of the
	 * data-types in JS.
	 */

	function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
	  if (val === true || val === false) {
	    return '' + val;
	  }
	  if (val === undefined) {
	    return 'undefined';
	  }
	  if (val === null) {
	    return 'null';
	  }
	  const typeOf = typeof val;
	  if (typeOf === 'number') {
	    return printNumber(val);
	  }
	  if (typeOf === 'bigint') {
	    return printBigInt(val);
	  }
	  if (typeOf === 'string') {
	    if (escapeString) {
	      return '"' + val.replace(/"|\\/g, '\\$&') + '"';
	    }
	    return '"' + val + '"';
	  }
	  if (typeOf === 'function') {
	    return printFunction(val, printFunctionName);
	  }
	  if (typeOf === 'symbol') {
	    return printSymbol(val);
	  }
	  const toStringed = toString$1.call(val);
	  if (toStringed === '[object WeakMap]') {
	    return 'WeakMap {}';
	  }
	  if (toStringed === '[object WeakSet]') {
	    return 'WeakSet {}';
	  }
	  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
	    return printFunction(val, printFunctionName);
	  }
	  if (toStringed === '[object Symbol]') {
	    return printSymbol(val);
	  }
	  if (toStringed === '[object Date]') {
	    return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val);
	  }
	  if (toStringed === '[object Error]') {
	    return printError(val);
	  }
	  if (toStringed === '[object RegExp]') {
	    if (escapeRegex) {
	      // https://github.com/benjamingr/RegExp.escape/blob/main/polyfill.js
	      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	    return regExpToString.call(val);
	  }
	  if (val instanceof Error) {
	    return printError(val);
	  }
	  return null;
	}
	/**
	 * Handles more complex objects ( such as objects with circular references.
	 * maps and sets etc )
	 */

	function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
	  if (refs.indexOf(val) !== -1) {
	    return '[Circular]';
	  }
	  refs = refs.slice();
	  refs.push(val);
	  const hitMaxDepth = ++depth > config.maxDepth;
	  const min = config.min;
	  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function' && !hasCalledToJSON) {
	    return printer(val.toJSON(), config, indentation, depth, refs, true);
	  }
	  const toStringed = toString$1.call(val);
	  if (toStringed === '[object Arguments]') {
	    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
	  }
	  if (isToStringedArrayType(toStringed)) {
	    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : !config.printBasicPrototype && val.constructor.name === 'Array' ? '' : val.constructor.name + ' ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
	  }
	  if (toStringed === '[object Map]') {
	    return hitMaxDepth ? '[Map]' : 'Map {' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';
	  }
	  if (toStringed === '[object Set]') {
	    return hitMaxDepth ? '[Set]' : 'Set {' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + '}';
	  } // Avoid failure to serialize global window object in jsdom test environment.
	  // For example, not even relevant if window is prop of React element.

	  return hitMaxDepth || isWindow(val) ? '[' + getConstructorName(val) + ']' : (min ? '' : !config.printBasicPrototype && getConstructorName(val) === 'Object' ? '' : getConstructorName(val) + ' ') + '{' + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + '}';
	}
	function isNewPlugin(plugin) {
	  return plugin.serialize != null;
	}
	function printPlugin(plugin, val, config, indentation, depth, refs) {
	  let printed;
	  try {
	    printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, valChild => printer(valChild, config, indentation, depth, refs), str => {
	      const indentationNext = indentation + config.indent;
	      return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext);
	    }, {
	      edgeSpacing: config.spacingOuter,
	      min: config.min,
	      spacing: config.spacingInner
	    }, config.colors);
	  } catch (error) {
	    throw new PrettyFormatPluginError(error.message, error.stack);
	  }
	  if (typeof printed !== 'string') {
	    throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
	  }
	  return printed;
	}
	function findPlugin(plugins, val) {
	  for (let p = 0; p < plugins.length; p++) {
	    try {
	      if (plugins[p].test(val)) {
	        return plugins[p];
	      }
	    } catch (error) {
	      throw new PrettyFormatPluginError(error.message, error.stack);
	    }
	  }
	  return null;
	}
	function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
	  const plugin = findPlugin(config.plugins, val);
	  if (plugin !== null) {
	    return printPlugin(plugin, val, config, indentation, depth, refs);
	  }
	  const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
	  if (basicResult !== null) {
	    return basicResult;
	  }
	  return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
	}
	const DEFAULT_THEME = {
	  comment: 'gray',
	  content: 'reset',
	  prop: 'yellow',
	  tag: 'cyan',
	  value: 'green'
	};
	const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
	const DEFAULT_OPTIONS = {
	  callToJSON: true,
	  compareKeys: undefined,
	  escapeRegex: false,
	  escapeString: true,
	  highlight: false,
	  indent: 2,
	  maxDepth: Infinity,
	  min: false,
	  plugins: [],
	  printBasicPrototype: true,
	  printFunctionName: true,
	  theme: DEFAULT_THEME
	};
	var DEFAULT_OPTIONS_1 = build.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
	function validateOptions(options) {
	  Object.keys(options).forEach(key => {
	    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
	      throw new Error(`pretty-format: Unknown option "${key}".`);
	    }
	  });
	  if (options.min && options.indent !== undefined && options.indent !== 0) {
	    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
	  }
	  if (options.theme !== undefined) {
	    if (options.theme === null) {
	      throw new Error('pretty-format: Option "theme" must not be null.');
	    }
	    if (typeof options.theme !== 'object') {
	      throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
	    }
	  }
	}
	const getColorsHighlight = options => DEFAULT_THEME_KEYS.reduce((colors, key) => {
	  const value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
	  const color = value && _ansiStyles.default[value];
	  if (color && typeof color.close === 'string' && typeof color.open === 'string') {
	    colors[key] = color;
	  } else {
	    throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
	  }
	  return colors;
	}, Object.create(null));
	const getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
	  colors[key] = {
	    close: '',
	    open: ''
	  };
	  return colors;
	}, Object.create(null));
	const getPrintFunctionName = options => options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
	const getEscapeRegex = options => options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
	const getEscapeString = options => options && options.escapeString !== undefined ? options.escapeString : DEFAULT_OPTIONS.escapeString;
	const getConfig$2 = options => {
	  var _options$printBasicPr;
	  return {
	    callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
	    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
	    compareKeys: options && typeof options.compareKeys === 'function' ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
	    escapeRegex: getEscapeRegex(options),
	    escapeString: getEscapeString(options),
	    indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
	    maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
	    min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
	    plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
	    printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
	    printFunctionName: getPrintFunctionName(options),
	    spacingInner: options && options.min ? ' ' : '\n',
	    spacingOuter: options && options.min ? '' : '\n'
	  };
	};
	function createIndent(indent) {
	  return new Array(indent + 1).join(' ');
	}
	/**
	 * Returns a presentation string of your `val` object
	 * @param val any potential JavaScript object
	 * @param options Custom settings
	 */

	function format(val, options) {
	  if (options) {
	    validateOptions(options);
	    if (options.plugins) {
	      const plugin = findPlugin(options.plugins, val);
	      if (plugin !== null) {
	        return printPlugin(plugin, val, getConfig$2(options), '', 0, []);
	      }
	    }
	  }
	  const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
	  if (basicResult !== null) {
	    return basicResult;
	  }
	  return printComplexValue(val, getConfig$2(options), '', 0, []);
	}
	const plugins = {
	  AsymmetricMatcher: _AsymmetricMatcher.default,
	  ConvertAnsi: _ConvertAnsi.default,
	  DOMCollection: _DOMCollection.default,
	  DOMElement: _DOMElement.default,
	  Immutable: _Immutable.default,
	  ReactElement: _ReactElement.default,
	  ReactTestComponent: _ReactTestComponent.default
	};
	plugins_1 = build.plugins = plugins;
	var _default$2i = format;
	default_1 = build.default = _default$2i;

	var index = /*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		get DEFAULT_OPTIONS () { return DEFAULT_OPTIONS_1; },
		format: format_1,
		get plugins () { return plugins_1; },
		get default () { return default_1; }
	}, [build]);

	/**
	 * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}
	 * but without thisArg (too hard to type, no need to `this`)
	 */
	var toStr$a = Object.prototype.toString;
	function isCallable$2(fn) {
	  return typeof fn === "function" || toStr$a.call(fn) === "[object Function]";
	}
	function toInteger(value) {
	  var number = Number(value);
	  if (isNaN(number)) {
	    return 0;
	  }
	  if (number === 0 || !isFinite(number)) {
	    return number;
	  }
	  return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(value) {
	  var len = toInteger(value);
	  return Math.min(Math.max(len, 0), maxSafeInteger);
	}
	/**
	 * Creates an array from an iterable object.
	 * @param iterable An iterable object to convert to an array.
	 */

	/**
	 * Creates an array from an iterable object.
	 * @param iterable An iterable object to convert to an array.
	 * @param mapfn A mapping function to call on every element of the array.
	 * @param thisArg Value of 'this' used to invoke the mapfn.
	 */
	function arrayFrom(arrayLike, mapFn) {
	  // 1. Let C be the this value.
	  // edit(@eps1lon): we're not calling it as Array.from
	  var C = Array;

	  // 2. Let items be ToObject(arrayLike).
	  var items = Object(arrayLike);

	  // 3. ReturnIfAbrupt(items).
	  if (arrayLike == null) {
	    throw new TypeError("Array.from requires an array-like object - not null or undefined");
	  }

	  // 4. If mapfn is undefined, then let mapping be false.
	  // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;

	  if (typeof mapFn !== "undefined") {
	    // 5. else
	    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	    if (!isCallable$2(mapFn)) {
	      throw new TypeError("Array.from: when provided, the second argument must be a function");
	    }
	  }

	  // 10. Let lenValue be Get(items, "length").
	  // 11. Let len be ToLength(lenValue).
	  var len = toLength(items.length);

	  // 13. If IsConstructor(C) is true, then
	  // 13. a. Let A be the result of calling the [[Construct]] internal method
	  // of C with an argument list containing the single item len.
	  // 14. a. Else, Let A be ArrayCreate(len).
	  var A = isCallable$2(C) ? Object(new C(len)) : new Array(len);

	  // 16. Let k be 0.
	  var k = 0;
	  // 17. Repeat, while k < len… (also steps a - h)
	  var kValue;
	  while (k < len) {
	    kValue = items[k];
	    if (mapFn) {
	      A[k] = mapFn(kValue, k);
	    } else {
	      A[k] = kValue;
	    }
	    k += 1;
	  }
	  // 18. Let putStatus be Put(A, "length", len, true).
	  A.length = len;
	  // 20. Return A.
	  return A;
	}

	function _typeof$2(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$2(obj);
	}
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
	    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty$2(obj, key, value) {
	  key = _toPropertyKey$1(key);
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
	function _toPropertyKey$1(arg) {
	  var key = _toPrimitive$1(arg, "string");
	  return _typeof$2(key) === "symbol" ? key : String(key);
	}
	function _toPrimitive$1(input, hint) {
	  if (_typeof$2(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof$2(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	// for environments without Set we fallback to arrays with unique members
	var SetLike = /*#__PURE__*/function () {
	  function SetLike() {
	    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    _classCallCheck(this, SetLike);
	    _defineProperty$2(this, "items", void 0);
	    this.items = items;
	  }
	  _createClass(SetLike, [{
	    key: "add",
	    value: function add(value) {
	      if (this.has(value) === false) {
	        this.items.push(value);
	      }
	      return this;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.items = [];
	    }
	  }, {
	    key: "delete",
	    value: function _delete(value) {
	      var previousLength = this.items.length;
	      this.items = this.items.filter(function (item) {
	        return item !== value;
	      });
	      return previousLength !== this.items.length;
	    }
	  }, {
	    key: "forEach",
	    value: function forEach(callbackfn) {
	      var _this = this;
	      this.items.forEach(function (item) {
	        callbackfn(item, item, _this);
	      });
	    }
	  }, {
	    key: "has",
	    value: function has(value) {
	      return this.items.indexOf(value) !== -1;
	    }
	  }, {
	    key: "size",
	    get: function get() {
	      return this.items.length;
	    }
	  }]);
	  return SetLike;
	}();
	var SetLike$1 = typeof Set === "undefined" ? Set : SetLike;

	// https://w3c.github.io/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html

	/**
	 * Safe Element.localName for all supported environments
	 * @param element
	 */
	function getLocalName(element) {
	  var _element$localName;
	  return (
	    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
	    (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName :
	    // eslint-disable-next-line no-restricted-properties -- required for the fallback
	    element.tagName.toLowerCase()
	  );
	}
	var localNameToRoleMappings = {
	  article: "article",
	  aside: "complementary",
	  button: "button",
	  datalist: "listbox",
	  dd: "definition",
	  details: "group",
	  dialog: "dialog",
	  dt: "term",
	  fieldset: "group",
	  figure: "figure",
	  // WARNING: Only with an accessible name
	  form: "form",
	  footer: "contentinfo",
	  h1: "heading",
	  h2: "heading",
	  h3: "heading",
	  h4: "heading",
	  h5: "heading",
	  h6: "heading",
	  header: "banner",
	  hr: "separator",
	  html: "document",
	  legend: "legend",
	  li: "listitem",
	  math: "math",
	  main: "main",
	  menu: "list",
	  nav: "navigation",
	  ol: "list",
	  optgroup: "group",
	  // WARNING: Only in certain context
	  option: "option",
	  output: "status",
	  progress: "progressbar",
	  // WARNING: Only with an accessible name
	  section: "region",
	  summary: "button",
	  table: "table",
	  tbody: "rowgroup",
	  textarea: "textbox",
	  tfoot: "rowgroup",
	  // WARNING: Only in certain context
	  td: "cell",
	  th: "columnheader",
	  thead: "rowgroup",
	  tr: "row",
	  ul: "list"
	};
	var prohibitedAttributes = {
	  caption: new Set(["aria-label", "aria-labelledby"]),
	  code: new Set(["aria-label", "aria-labelledby"]),
	  deletion: new Set(["aria-label", "aria-labelledby"]),
	  emphasis: new Set(["aria-label", "aria-labelledby"]),
	  generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
	  insertion: new Set(["aria-label", "aria-labelledby"]),
	  paragraph: new Set(["aria-label", "aria-labelledby"]),
	  presentation: new Set(["aria-label", "aria-labelledby"]),
	  strong: new Set(["aria-label", "aria-labelledby"]),
	  subscript: new Set(["aria-label", "aria-labelledby"]),
	  superscript: new Set(["aria-label", "aria-labelledby"])
	};

	/**
	 *
	 * @param element
	 * @param role The role used for this element. This is specified to control whether you want to use the implicit or explicit role.
	 */
	function hasGlobalAriaAttributes(element, role) {
	  // https://rawgit.com/w3c/aria/stable/#global_states
	  // commented attributes are deprecated
	  return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details",
	  // "disabled",
	  "aria-dropeffect",
	  // "errormessage",
	  "aria-flowto", "aria-grabbed",
	  // "haspopup",
	  "aria-hidden",
	  // "invalid",
	  "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some(function (attributeName) {
	    var _prohibitedAttributes;
	    return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes[role]) !== null && _prohibitedAttributes !== void 0 && _prohibitedAttributes.has(attributeName));
	  });
	}
	function ignorePresentationalRole(element, implicitRole) {
	  // https://rawgit.com/w3c/aria/stable/#conflict_resolution_presentation_none
	  return hasGlobalAriaAttributes(element, implicitRole);
	}
	function getRole(element) {
	  var explicitRole = getExplicitRole(element);
	  if (explicitRole === null || explicitRole === "presentation") {
	    var implicitRole = getImplicitRole(element);
	    if (explicitRole !== "presentation" || ignorePresentationalRole(element, implicitRole || "")) {
	      return implicitRole;
	    }
	  }
	  return explicitRole;
	}
	function getImplicitRole(element) {
	  var mappedByTag = localNameToRoleMappings[getLocalName(element)];
	  if (mappedByTag !== undefined) {
	    return mappedByTag;
	  }
	  switch (getLocalName(element)) {
	    case "a":
	    case "area":
	    case "link":
	      if (element.hasAttribute("href")) {
	        return "link";
	      }
	      break;
	    case "img":
	      if (element.getAttribute("alt") === "" && !ignorePresentationalRole(element, "img")) {
	        return "presentation";
	      }
	      return "img";
	    case "input":
	      {
	        var _ref = element,
	          type = _ref.type;
	        switch (type) {
	          case "button":
	          case "image":
	          case "reset":
	          case "submit":
	            return "button";
	          case "checkbox":
	          case "radio":
	            return type;
	          case "range":
	            return "slider";
	          case "email":
	          case "tel":
	          case "text":
	          case "url":
	            if (element.hasAttribute("list")) {
	              return "combobox";
	            }
	            return "textbox";
	          case "search":
	            if (element.hasAttribute("list")) {
	              return "combobox";
	            }
	            return "searchbox";
	          case "number":
	            return "spinbutton";
	          default:
	            return null;
	        }
	      }
	    case "select":
	      if (element.hasAttribute("multiple") || element.size > 1) {
	        return "listbox";
	      }
	      return "combobox";
	  }
	  return null;
	}
	function getExplicitRole(element) {
	  var role = element.getAttribute("role");
	  if (role !== null) {
	    var explicitRole = role.trim().split(" ")[0];
	    // String.prototype.split(sep, limit) will always return an array with at least one member
	    // as long as limit is either undefined or > 0
	    if (explicitRole.length > 0) {
	      return explicitRole;
	    }
	  }
	  return null;
	}

	function isElement$1(node) {
	  return node !== null && node.nodeType === node.ELEMENT_NODE;
	}
	function isHTMLTableCaptionElement(node) {
	  return isElement$1(node) && getLocalName(node) === "caption";
	}
	function isHTMLInputElement(node) {
	  return isElement$1(node) && getLocalName(node) === "input";
	}
	function isHTMLOptGroupElement(node) {
	  return isElement$1(node) && getLocalName(node) === "optgroup";
	}
	function isHTMLSelectElement(node) {
	  return isElement$1(node) && getLocalName(node) === "select";
	}
	function isHTMLTableElement(node) {
	  return isElement$1(node) && getLocalName(node) === "table";
	}
	function isHTMLTextAreaElement(node) {
	  return isElement$1(node) && getLocalName(node) === "textarea";
	}
	function safeWindow(node) {
	  var _ref = node.ownerDocument === null ? node : node.ownerDocument,
	    defaultView = _ref.defaultView;
	  if (defaultView === null) {
	    throw new TypeError("no window available");
	  }
	  return defaultView;
	}
	function isHTMLFieldSetElement(node) {
	  return isElement$1(node) && getLocalName(node) === "fieldset";
	}
	function isHTMLLegendElement(node) {
	  return isElement$1(node) && getLocalName(node) === "legend";
	}
	function isHTMLSlotElement(node) {
	  return isElement$1(node) && getLocalName(node) === "slot";
	}
	function isSVGElement(node) {
	  return isElement$1(node) && node.ownerSVGElement !== undefined;
	}
	function isSVGSVGElement(node) {
	  return isElement$1(node) && getLocalName(node) === "svg";
	}
	function isSVGTitleElement(node) {
	  return isSVGElement(node) && getLocalName(node) === "title";
	}

	/**
	 *
	 * @param {Node} node -
	 * @param {string} attributeName -
	 * @returns {Element[]} -
	 */
	function queryIdRefs(node, attributeName) {
	  if (isElement$1(node) && node.hasAttribute(attributeName)) {
	    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
	    var ids = node.getAttribute(attributeName).split(" ");

	    // Browsers that don't support shadow DOM won't have getRootNode
	    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
	    return ids.map(function (id) {
	      return root.getElementById(id);
	    }).filter(function (element) {
	      return element !== null;
	    }
	    // TODO: why does this not narrow?
	    );
	  }
	  return [];
	}
	function hasAnyConcreteRoles(node, roles) {
	  if (isElement$1(node)) {
	    return roles.indexOf(getRole(node)) !== -1;
	  }
	  return false;
	}

	/**
	 * implements https://w3c.github.io/accname/
	 */

	/**
	 *  A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.
	 */

	/**
	 *
	 * @param {string} string -
	 * @returns {FlatString} -
	 */
	function asFlatString(s) {
	  return s.trim().replace(/\s\s+/g, " ");
	}

	/**
	 *
	 * @param node -
	 * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`
	 * @returns {boolean} -
	 */
	function isHidden(node, getComputedStyleImplementation) {
	  if (!isElement$1(node)) {
	    return false;
	  }
	  if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
	    return true;
	  }
	  var style = getComputedStyleImplementation(node);
	  return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
	}

	/**
	 * @param {Node} node -
	 * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te
	 */
	function isControl(node) {
	  return hasAnyConcreteRoles(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole(node, "range");
	}
	function hasAbstractRole(node, role) {
	  if (!isElement$1(node)) {
	    return false;
	  }
	  switch (role) {
	    case "range":
	      return hasAnyConcreteRoles(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
	    default:
	      throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
	  }
	}

	/**
	 * element.querySelectorAll but also considers owned tree
	 * @param element
	 * @param selectors
	 */
	function querySelectorAllSubtree(element, selectors) {
	  var elements = arrayFrom(element.querySelectorAll(selectors));
	  queryIdRefs(element, "aria-owns").forEach(function (root) {
	    // babel transpiles this assuming an iterator
	    elements.push.apply(elements, arrayFrom(root.querySelectorAll(selectors)));
	  });
	  return elements;
	}
	function querySelectedOptions(listbox) {
	  if (isHTMLSelectElement(listbox)) {
	    // IE11 polyfill
	    return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
	  }
	  return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
	}
	function isMarkedPresentational(node) {
	  return hasAnyConcreteRoles(node, ["none", "presentation"]);
	}

	/**
	 * Elements specifically listed in html-aam
	 *
	 * We don't need this for `label` or `legend` elements.
	 * Their implicit roles already allow "naming from content".
	 *
	 * sources:
	 *
	 * - https://w3c.github.io/html-aam/#table-element
	 */
	function isNativeHostLanguageTextAlternativeElement(node) {
	  return isHTMLTableCaptionElement(node);
	}

	/**
	 * https://w3c.github.io/aria/#namefromcontent
	 */
	function allowsNameFromContent(node) {
	  return hasAnyConcreteRoles(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
	}

	/**
	 * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100
	 */
	function isDescendantOfNativeHostLanguageTextAlternativeElement(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet
	node) {
	  return false;
	}
	function getValueOfTextbox(element) {
	  if (isHTMLInputElement(element) || isHTMLTextAreaElement(element)) {
	    return element.value;
	  }
	  // https://github.com/eps1lon/dom-accessibility-api/issues/4
	  return element.textContent || "";
	}
	function getTextualContent(declaration) {
	  var content = declaration.getPropertyValue("content");
	  if (/^["'].*["']$/.test(content)) {
	    return content.slice(1, -1);
	  }
	  return "";
	}

	/**
	 * https://html.spec.whatwg.org/multipage/forms.html#category-label
	 * TODO: form-associated custom elements
	 * @param element
	 */
	function isLabelableElement(element) {
	  var localName = getLocalName(element);
	  return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
	}

	/**
	 * > [...], then the first such descendant in tree order is the label element's labeled control.
	 * -- https://html.spec.whatwg.org/multipage/forms.html#labeled-control
	 * @param element
	 */
	function findLabelableElement(element) {
	  if (isLabelableElement(element)) {
	    return element;
	  }
	  var labelableElement = null;
	  element.childNodes.forEach(function (childNode) {
	    if (labelableElement === null && isElement$1(childNode)) {
	      var descendantLabelableElement = findLabelableElement(childNode);
	      if (descendantLabelableElement !== null) {
	        labelableElement = descendantLabelableElement;
	      }
	    }
	  });
	  return labelableElement;
	}

	/**
	 * Polyfill of HTMLLabelElement.control
	 * https://html.spec.whatwg.org/multipage/forms.html#labeled-control
	 * @param label
	 */
	function getControlOfLabel(label) {
	  if (label.control !== undefined) {
	    return label.control;
	  }
	  var htmlFor = label.getAttribute("for");
	  if (htmlFor !== null) {
	    return label.ownerDocument.getElementById(htmlFor);
	  }
	  return findLabelableElement(label);
	}

	/**
	 * Polyfill of HTMLInputElement.labels
	 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
	 * @param element
	 */
	function getLabels$1(element) {
	  var labelsProperty = element.labels;
	  if (labelsProperty === null) {
	    return labelsProperty;
	  }
	  if (labelsProperty !== undefined) {
	    return arrayFrom(labelsProperty);
	  }

	  // polyfill
	  if (!isLabelableElement(element)) {
	    return null;
	  }
	  var document = element.ownerDocument;
	  return arrayFrom(document.querySelectorAll("label")).filter(function (label) {
	    return getControlOfLabel(label) === element;
	  });
	}

	/**
	 * Gets the contents of a slot used for computing the accname
	 * @param slot
	 */
	function getSlotContents(slot) {
	  // Computing the accessible name for elements containing slots is not
	  // currently defined in the spec. This implementation reflects the
	  // behavior of NVDA 2020.2/Firefox 81 and iOS VoiceOver/Safari 13.6.
	  var assignedNodes = slot.assignedNodes();
	  if (assignedNodes.length === 0) {
	    // if no nodes are assigned to the slot, it displays the default content
	    return arrayFrom(slot.childNodes);
	  }
	  return assignedNodes;
	}

	/**
	 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
	 * @param root
	 * @param options
	 * @returns
	 */
	function computeTextAlternative(root) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var consultedNodes = new SetLike$1();
	  var window = safeWindow(root);
	  var _options$compute = options.compute,
	    compute = _options$compute === void 0 ? "name" : _options$compute,
	    _options$computedStyl = options.computedStyleSupportsPseudoElements,
	    computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== undefined : _options$computedStyl,
	    _options$getComputedS = options.getComputedStyle,
	    getComputedStyle = _options$getComputedS === void 0 ? window.getComputedStyle.bind(window) : _options$getComputedS,
	    _options$hidden = options.hidden,
	    hidden = _options$hidden === void 0 ? false : _options$hidden;

	  // 2F.i
	  function computeMiscTextAlternative(node, context) {
	    var accumulatedText = "";
	    if (isElement$1(node) && computedStyleSupportsPseudoElements) {
	      var pseudoBefore = getComputedStyle(node, "::before");
	      var beforeContent = getTextualContent(pseudoBefore);
	      accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
	    }

	    // FIXME: Including aria-owns is not defined in the spec
	    // But it is required in the web-platform-test
	    var childNodes = isHTMLSlotElement(node) ? getSlotContents(node) : arrayFrom(node.childNodes).concat(queryIdRefs(node, "aria-owns"));
	    childNodes.forEach(function (child) {
	      var result = computeTextAlternative(child, {
	        isEmbeddedInLabel: context.isEmbeddedInLabel,
	        isReferenced: false,
	        recursion: true
	      });
	      // TODO: Unclear why display affects delimiter
	      // see https://github.com/w3c/accname/issues/3
	      var display = isElement$1(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
	      var separator = display !== "inline" ? " " : "";
	      // trailing separator for wpt tests
	      accumulatedText += "".concat(separator).concat(result).concat(separator);
	    });
	    if (isElement$1(node) && computedStyleSupportsPseudoElements) {
	      var pseudoAfter = getComputedStyle(node, "::after");
	      var afterContent = getTextualContent(pseudoAfter);
	      accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
	    }
	    return accumulatedText.trim();
	  }

	  /**
	   *
	   * @param element
	   * @param attributeName
	   * @returns A string non-empty string or `null`
	   */
	  function useAttribute(element, attributeName) {
	    var attribute = element.getAttributeNode(attributeName);
	    if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
	      consultedNodes.add(attribute);
	      return attribute.value;
	    }
	    return null;
	  }
	  function computeTooltipAttributeValue(node) {
	    if (!isElement$1(node)) {
	      return null;
	    }
	    return useAttribute(node, "title");
	  }
	  function computeElementTextAlternative(node) {
	    if (!isElement$1(node)) {
	      return null;
	    }

	    // https://w3c.github.io/html-aam/#fieldset-and-legend-elements
	    if (isHTMLFieldSetElement(node)) {
	      consultedNodes.add(node);
	      var children = arrayFrom(node.childNodes);
	      for (var i = 0; i < children.length; i += 1) {
	        var child = children[i];
	        if (isHTMLLegendElement(child)) {
	          return computeTextAlternative(child, {
	            isEmbeddedInLabel: false,
	            isReferenced: false,
	            recursion: false
	          });
	        }
	      }
	    } else if (isHTMLTableElement(node)) {
	      // https://w3c.github.io/html-aam/#table-element
	      consultedNodes.add(node);
	      var _children = arrayFrom(node.childNodes);
	      for (var _i = 0; _i < _children.length; _i += 1) {
	        var _child = _children[_i];
	        if (isHTMLTableCaptionElement(_child)) {
	          return computeTextAlternative(_child, {
	            isEmbeddedInLabel: false,
	            isReferenced: false,
	            recursion: false
	          });
	        }
	      }
	    } else if (isSVGSVGElement(node)) {
	      // https://www.w3.org/TR/svg-aam-1.0/
	      consultedNodes.add(node);
	      var _children2 = arrayFrom(node.childNodes);
	      for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
	        var _child2 = _children2[_i2];
	        if (isSVGTitleElement(_child2)) {
	          return _child2.textContent;
	        }
	      }
	      return null;
	    } else if (getLocalName(node) === "img" || getLocalName(node) === "area") {
	      // https://w3c.github.io/html-aam/#area-element
	      // https://w3c.github.io/html-aam/#img-element
	      var nameFromAlt = useAttribute(node, "alt");
	      if (nameFromAlt !== null) {
	        return nameFromAlt;
	      }
	    } else if (isHTMLOptGroupElement(node)) {
	      var nameFromLabel = useAttribute(node, "label");
	      if (nameFromLabel !== null) {
	        return nameFromLabel;
	      }
	    }
	    if (isHTMLInputElement(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
	      // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation
	      var nameFromValue = useAttribute(node, "value");
	      if (nameFromValue !== null) {
	        return nameFromValue;
	      }

	      // TODO: l10n
	      if (node.type === "submit") {
	        return "Submit";
	      }
	      // TODO: l10n
	      if (node.type === "reset") {
	        return "Reset";
	      }
	    }
	    var labels = getLabels$1(node);
	    if (labels !== null && labels.length !== 0) {
	      consultedNodes.add(node);
	      return arrayFrom(labels).map(function (element) {
	        return computeTextAlternative(element, {
	          isEmbeddedInLabel: true,
	          isReferenced: false,
	          recursion: true
	        });
	      }).filter(function (label) {
	        return label.length > 0;
	      }).join(" ");
	    }

	    // https://w3c.github.io/html-aam/#input-type-image-accessible-name-computation
	    // TODO: wpt test consider label elements but html-aam does not mention them
	    // We follow existing implementations over spec
	    if (isHTMLInputElement(node) && node.type === "image") {
	      var _nameFromAlt = useAttribute(node, "alt");
	      if (_nameFromAlt !== null) {
	        return _nameFromAlt;
	      }
	      var nameFromTitle = useAttribute(node, "title");
	      if (nameFromTitle !== null) {
	        return nameFromTitle;
	      }

	      // TODO: l10n
	      return "Submit Query";
	    }
	    if (hasAnyConcreteRoles(node, ["button"])) {
	      // https://www.w3.org/TR/html-aam-1.0/#button-element
	      var nameFromSubTree = computeMiscTextAlternative(node, {
	        isEmbeddedInLabel: false,
	        isReferenced: false
	      });
	      if (nameFromSubTree !== "") {
	        return nameFromSubTree;
	      }
	    }
	    return null;
	  }
	  function computeTextAlternative(current, context) {
	    if (consultedNodes.has(current)) {
	      return "";
	    }

	    // 2A
	    if (!hidden && isHidden(current, getComputedStyle) && !context.isReferenced) {
	      consultedNodes.add(current);
	      return "";
	    }

	    // 2B
	    var labelAttributeNode = isElement$1(current) ? current.getAttributeNode("aria-labelledby") : null;
	    // TODO: Do we generally need to block query IdRefs of attributes we have already consulted?
	    var labelElements = labelAttributeNode !== null && !consultedNodes.has(labelAttributeNode) ? queryIdRefs(current, "aria-labelledby") : [];
	    if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
	      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Can't be null here otherwise labelElements would be empty
	      consultedNodes.add(labelAttributeNode);
	      return labelElements.map(function (element) {
	        // TODO: Chrome will consider repeated values i.e. use a node multiple times while we'll bail out in computeTextAlternative.
	        return computeTextAlternative(element, {
	          isEmbeddedInLabel: context.isEmbeddedInLabel,
	          isReferenced: true,
	          // this isn't recursion as specified, otherwise we would skip
	          // `aria-label` in
	          // <input id="myself" aria-label="foo" aria-labelledby="myself"
	          recursion: false
	        });
	      }).join(" ");
	    }

	    // 2C
	    // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64
	    // spec says we should only consider skipping if we have a non-empty label
	    var skipToStep2E = context.recursion && isControl(current) && compute === "name";
	    if (!skipToStep2E) {
	      var ariaLabel = (isElement$1(current) && current.getAttribute("aria-label") || "").trim();
	      if (ariaLabel !== "" && compute === "name") {
	        consultedNodes.add(current);
	        return ariaLabel;
	      }

	      // 2D
	      if (!isMarkedPresentational(current)) {
	        var elementTextAlternative = computeElementTextAlternative(current);
	        if (elementTextAlternative !== null) {
	          consultedNodes.add(current);
	          return elementTextAlternative;
	        }
	      }
	    }

	    // special casing, cheating to make tests pass
	    // https://github.com/w3c/accname/issues/67
	    if (hasAnyConcreteRoles(current, ["menu"])) {
	      consultedNodes.add(current);
	      return "";
	    }

	    // 2E
	    if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
	      if (hasAnyConcreteRoles(current, ["combobox", "listbox"])) {
	        consultedNodes.add(current);
	        var selectedOptions = querySelectedOptions(current);
	        if (selectedOptions.length === 0) {
	          // defined per test `name_heading_combobox`
	          return isHTMLInputElement(current) ? current.value : "";
	        }
	        return arrayFrom(selectedOptions).map(function (selectedOption) {
	          return computeTextAlternative(selectedOption, {
	            isEmbeddedInLabel: context.isEmbeddedInLabel,
	            isReferenced: false,
	            recursion: true
	          });
	        }).join(" ");
	      }
	      if (hasAbstractRole(current, "range")) {
	        consultedNodes.add(current);
	        if (current.hasAttribute("aria-valuetext")) {
	          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
	          return current.getAttribute("aria-valuetext");
	        }
	        if (current.hasAttribute("aria-valuenow")) {
	          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
	          return current.getAttribute("aria-valuenow");
	        }
	        // Otherwise, use the value as specified by a host language attribute.
	        return current.getAttribute("value") || "";
	      }
	      if (hasAnyConcreteRoles(current, ["textbox"])) {
	        consultedNodes.add(current);
	        return getValueOfTextbox(current);
	      }
	    }

	    // 2F: https://w3c.github.io/accname/#step2F
	    if (allowsNameFromContent(current) || isElement$1(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement()) {
	      var accumulatedText2F = computeMiscTextAlternative(current, {
	        isEmbeddedInLabel: context.isEmbeddedInLabel,
	        isReferenced: false
	      });
	      if (accumulatedText2F !== "") {
	        consultedNodes.add(current);
	        return accumulatedText2F;
	      }
	    }
	    if (current.nodeType === current.TEXT_NODE) {
	      consultedNodes.add(current);
	      return current.textContent || "";
	    }
	    if (context.recursion) {
	      consultedNodes.add(current);
	      return computeMiscTextAlternative(current, {
	        isEmbeddedInLabel: context.isEmbeddedInLabel,
	        isReferenced: false
	      });
	    }
	    var tooltipAttributeValue = computeTooltipAttributeValue(current);
	    if (tooltipAttributeValue !== null) {
	      consultedNodes.add(current);
	      return tooltipAttributeValue;
	    }

	    // TODO should this be reachable?
	    consultedNodes.add(current);
	    return "";
	  }
	  return asFlatString(computeTextAlternative(root, {
	    isEmbeddedInLabel: false,
	    // by spec computeAccessibleDescription starts with the referenced elements as roots
	    isReferenced: compute === "description",
	    recursion: false
	  }));
	}

	function _typeof$1(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$1(obj);
	}
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}
	function _defineProperty$1(obj, key, value) {
	  key = _toPropertyKey(key);
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
	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof$1(key) === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
	  if (_typeof$1(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof$1(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	/**
	 * @param root
	 * @param options
	 * @returns
	 */
	function computeAccessibleDescription(root) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var description = queryIdRefs(root, "aria-describedby").map(function (element) {
	    return computeTextAlternative(element, _objectSpread(_objectSpread({}, options), {}, {
	      compute: "description"
	    }));
	  }).join(" ");

	  // TODO: Technically we need to make sure that node wasn't used for the accessible name
	  //       This causes `description_1.0_combobox-focusable-manual` to fail
	  //
	  // https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation
	  // says for so many elements to use the `title` that we assume all elements are considered
	  if (description === "") {
	    var title = root.getAttribute("title");
	    description = title === null ? "" : title;
	  }
	  return description;
	}

	/**
	 * https://w3c.github.io/aria/#namefromprohibited
	 */
	function prohibitsNaming(node) {
	  return hasAnyConcreteRoles(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
	}

	/**
	 * implements https://w3c.github.io/accname/#mapping_additional_nd_name
	 * @param root
	 * @param options
	 * @returns
	 */
	function computeAccessibleName(root) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  if (prohibitsNaming(root)) {
	    return "";
	  }
	  return computeTextAlternative(root, options);
	}

	var lib = {};

	var ariaPropsMap$1 = {};

	var iterationDecorator$1 = {};

	var iteratorProxy$1 = {};

	Object.defineProperty(iteratorProxy$1, "__esModule", {
	  value: true
	});
	iteratorProxy$1.default = void 0;

	// eslint-disable-next-line no-unused-vars
	function iteratorProxy() {
	  var values = this;
	  var index = 0;
	  var iter = {
	    '@@iterator': function iterator() {
	      return iter;
	    },
	    next: function next() {
	      if (index < values.length) {
	        var value = values[index];
	        index = index + 1;
	        return {
	          done: false,
	          value: value
	        };
	      } else {
	        return {
	          done: true
	        };
	      }
	    }
	  };
	  return iter;
	}
	var _default$2h = iteratorProxy;
	iteratorProxy$1.default = _default$2h;

	Object.defineProperty(iterationDecorator$1, "__esModule", {
	  value: true
	});
	iterationDecorator$1.default = iterationDecorator;
	var _iteratorProxy = _interopRequireDefault$a(iteratorProxy$1);
	function _interopRequireDefault$a(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}
	function iterationDecorator(collection, entries) {
	  if (typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol') {
	    Object.defineProperty(collection, Symbol.iterator, {
	      value: _iteratorProxy.default.bind(entries)
	    });
	  }
	  return collection;
	}

	Object.defineProperty(ariaPropsMap$1, "__esModule", {
	  value: true
	});
	ariaPropsMap$1.default = void 0;
	var _iterationDecorator$4 = _interopRequireDefault$9(iterationDecorator$1);
	function _interopRequireDefault$9(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _slicedToArray$4(arr, i) {
	  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$4();
	}
	function _nonIterableRest$4() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _iterableToArrayLimit$4(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
	function _arrayWithHoles$4(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _createForOfIteratorHelper$4(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e2) {
	          throw _e2;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function s() {
	      it = it.call(o);
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e3) {
	      didErr = true;
	      err = _e3;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _unsupportedIterableToArray$4(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
	}
	function _arrayLikeToArray$4(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }
	  return arr2;
	}
	var properties = [['aria-activedescendant', {
	  'type': 'id'
	}], ['aria-atomic', {
	  'type': 'boolean'
	}], ['aria-autocomplete', {
	  'type': 'token',
	  'values': ['inline', 'list', 'both', 'none']
	}], ['aria-busy', {
	  'type': 'boolean'
	}], ['aria-checked', {
	  'type': 'tristate'
	}], ['aria-colcount', {
	  type: 'integer'
	}], ['aria-colindex', {
	  type: 'integer'
	}], ['aria-colspan', {
	  type: 'integer'
	}], ['aria-controls', {
	  'type': 'idlist'
	}], ['aria-current', {
	  type: 'token',
	  values: ['page', 'step', 'location', 'date', 'time', true, false]
	}], ['aria-describedby', {
	  'type': 'idlist'
	}], ['aria-details', {
	  'type': 'id'
	}], ['aria-disabled', {
	  'type': 'boolean'
	}], ['aria-dropeffect', {
	  'type': 'tokenlist',
	  'values': ['copy', 'execute', 'link', 'move', 'none', 'popup']
	}], ['aria-errormessage', {
	  'type': 'id'
	}], ['aria-expanded', {
	  'type': 'boolean',
	  'allowundefined': true
	}], ['aria-flowto', {
	  'type': 'idlist'
	}], ['aria-grabbed', {
	  'type': 'boolean',
	  'allowundefined': true
	}], ['aria-haspopup', {
	  'type': 'token',
	  'values': [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog']
	}], ['aria-hidden', {
	  'type': 'boolean',
	  'allowundefined': true
	}], ['aria-invalid', {
	  'type': 'token',
	  'values': ['grammar', false, 'spelling', true]
	}], ['aria-keyshortcuts', {
	  type: 'string'
	}], ['aria-label', {
	  'type': 'string'
	}], ['aria-labelledby', {
	  'type': 'idlist'
	}], ['aria-level', {
	  'type': 'integer'
	}], ['aria-live', {
	  'type': 'token',
	  'values': ['assertive', 'off', 'polite']
	}], ['aria-modal', {
	  type: 'boolean'
	}], ['aria-multiline', {
	  'type': 'boolean'
	}], ['aria-multiselectable', {
	  'type': 'boolean'
	}], ['aria-orientation', {
	  'type': 'token',
	  'values': ['vertical', 'undefined', 'horizontal']
	}], ['aria-owns', {
	  'type': 'idlist'
	}], ['aria-placeholder', {
	  type: 'string'
	}], ['aria-posinset', {
	  'type': 'integer'
	}], ['aria-pressed', {
	  'type': 'tristate'
	}], ['aria-readonly', {
	  'type': 'boolean'
	}], ['aria-relevant', {
	  'type': 'tokenlist',
	  'values': ['additions', 'all', 'removals', 'text']
	}], ['aria-required', {
	  'type': 'boolean'
	}], ['aria-roledescription', {
	  type: 'string'
	}], ['aria-rowcount', {
	  type: 'integer'
	}], ['aria-rowindex', {
	  type: 'integer'
	}], ['aria-rowspan', {
	  type: 'integer'
	}], ['aria-selected', {
	  'type': 'boolean',
	  'allowundefined': true
	}], ['aria-setsize', {
	  'type': 'integer'
	}], ['aria-sort', {
	  'type': 'token',
	  'values': ['ascending', 'descending', 'none', 'other']
	}], ['aria-valuemax', {
	  'type': 'number'
	}], ['aria-valuemin', {
	  'type': 'number'
	}], ['aria-valuenow', {
	  'type': 'number'
	}], ['aria-valuetext', {
	  'type': 'string'
	}]];
	var ariaPropsMap = {
	  entries: function entries() {
	    return properties;
	  },
	  forEach: function forEach(fn) {
	    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var _iterator = _createForOfIteratorHelper$4(properties),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray$4(_step.value, 2),
	          key = _step$value[0],
	          values = _step$value[1];
	        fn.call(thisArg, values, key, properties);
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  },
	  get: function get(key) {
	    var item = properties.find(function (tuple) {
	      return tuple[0] === key ? true : false;
	    });
	    return item && item[1];
	  },
	  has: function has(key) {
	    return !!ariaPropsMap.get(key);
	  },
	  keys: function keys() {
	    return properties.map(function (_ref) {
	      var _ref2 = _slicedToArray$4(_ref, 1),
	        key = _ref2[0];
	      return key;
	    });
	  },
	  values: function values() {
	    return properties.map(function (_ref3) {
	      var _ref4 = _slicedToArray$4(_ref3, 2),
	        values = _ref4[1];
	      return values;
	    });
	  }
	};
	var _default$2g = (0, _iterationDecorator$4.default)(ariaPropsMap, ariaPropsMap.entries());
	ariaPropsMap$1.default = _default$2g;

	var domMap$1 = {};

	Object.defineProperty(domMap$1, "__esModule", {
	  value: true
	});
	domMap$1.default = void 0;
	var _iterationDecorator$3 = _interopRequireDefault$8(iterationDecorator$1);
	function _interopRequireDefault$8(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _slicedToArray$3(arr, i) {
	  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
	}
	function _nonIterableRest$3() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _iterableToArrayLimit$3(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
	function _arrayWithHoles$3(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _createForOfIteratorHelper$3(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e2) {
	          throw _e2;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function s() {
	      it = it.call(o);
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e3) {
	      didErr = true;
	      err = _e3;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _unsupportedIterableToArray$3(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
	}
	function _arrayLikeToArray$3(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }
	  return arr2;
	}
	var dom$1 = [['a', {
	  reserved: false
	}], ['abbr', {
	  reserved: false
	}], ['acronym', {
	  reserved: false
	}], ['address', {
	  reserved: false
	}], ['applet', {
	  reserved: false
	}], ['area', {
	  reserved: false
	}], ['article', {
	  reserved: false
	}], ['aside', {
	  reserved: false
	}], ['audio', {
	  reserved: false
	}], ['b', {
	  reserved: false
	}], ['base', {
	  reserved: true
	}], ['bdi', {
	  reserved: false
	}], ['bdo', {
	  reserved: false
	}], ['big', {
	  reserved: false
	}], ['blink', {
	  reserved: false
	}], ['blockquote', {
	  reserved: false
	}], ['body', {
	  reserved: false
	}], ['br', {
	  reserved: false
	}], ['button', {
	  reserved: false
	}], ['canvas', {
	  reserved: false
	}], ['caption', {
	  reserved: false
	}], ['center', {
	  reserved: false
	}], ['cite', {
	  reserved: false
	}], ['code', {
	  reserved: false
	}], ['col', {
	  reserved: true
	}], ['colgroup', {
	  reserved: true
	}], ['content', {
	  reserved: false
	}], ['data', {
	  reserved: false
	}], ['datalist', {
	  reserved: false
	}], ['dd', {
	  reserved: false
	}], ['del', {
	  reserved: false
	}], ['details', {
	  reserved: false
	}], ['dfn', {
	  reserved: false
	}], ['dialog', {
	  reserved: false
	}], ['dir', {
	  reserved: false
	}], ['div', {
	  reserved: false
	}], ['dl', {
	  reserved: false
	}], ['dt', {
	  reserved: false
	}], ['em', {
	  reserved: false
	}], ['embed', {
	  reserved: false
	}], ['fieldset', {
	  reserved: false
	}], ['figcaption', {
	  reserved: false
	}], ['figure', {
	  reserved: false
	}], ['font', {
	  reserved: false
	}], ['footer', {
	  reserved: false
	}], ['form', {
	  reserved: false
	}], ['frame', {
	  reserved: false
	}], ['frameset', {
	  reserved: false
	}], ['h1', {
	  reserved: false
	}], ['h2', {
	  reserved: false
	}], ['h3', {
	  reserved: false
	}], ['h4', {
	  reserved: false
	}], ['h5', {
	  reserved: false
	}], ['h6', {
	  reserved: false
	}], ['head', {
	  reserved: true
	}], ['header', {
	  reserved: false
	}], ['hgroup', {
	  reserved: false
	}], ['hr', {
	  reserved: false
	}], ['html', {
	  reserved: true
	}], ['i', {
	  reserved: false
	}], ['iframe', {
	  reserved: false
	}], ['img', {
	  reserved: false
	}], ['input', {
	  reserved: false
	}], ['ins', {
	  reserved: false
	}], ['kbd', {
	  reserved: false
	}], ['keygen', {
	  reserved: false
	}], ['label', {
	  reserved: false
	}], ['legend', {
	  reserved: false
	}], ['li', {
	  reserved: false
	}], ['link', {
	  reserved: true
	}], ['main', {
	  reserved: false
	}], ['map', {
	  reserved: false
	}], ['mark', {
	  reserved: false
	}], ['marquee', {
	  reserved: false
	}], ['menu', {
	  reserved: false
	}], ['menuitem', {
	  reserved: false
	}], ['meta', {
	  reserved: true
	}], ['meter', {
	  reserved: false
	}], ['nav', {
	  reserved: false
	}], ['noembed', {
	  reserved: true
	}], ['noscript', {
	  reserved: true
	}], ['object', {
	  reserved: false
	}], ['ol', {
	  reserved: false
	}], ['optgroup', {
	  reserved: false
	}], ['option', {
	  reserved: false
	}], ['output', {
	  reserved: false
	}], ['p', {
	  reserved: false
	}], ['param', {
	  reserved: true
	}], ['picture', {
	  reserved: true
	}], ['pre', {
	  reserved: false
	}], ['progress', {
	  reserved: false
	}], ['q', {
	  reserved: false
	}], ['rp', {
	  reserved: false
	}], ['rt', {
	  reserved: false
	}], ['rtc', {
	  reserved: false
	}], ['ruby', {
	  reserved: false
	}], ['s', {
	  reserved: false
	}], ['samp', {
	  reserved: false
	}], ['script', {
	  reserved: true
	}], ['section', {
	  reserved: false
	}], ['select', {
	  reserved: false
	}], ['small', {
	  reserved: false
	}], ['source', {
	  reserved: true
	}], ['spacer', {
	  reserved: false
	}], ['span', {
	  reserved: false
	}], ['strike', {
	  reserved: false
	}], ['strong', {
	  reserved: false
	}], ['style', {
	  reserved: true
	}], ['sub', {
	  reserved: false
	}], ['summary', {
	  reserved: false
	}], ['sup', {
	  reserved: false
	}], ['table', {
	  reserved: false
	}], ['tbody', {
	  reserved: false
	}], ['td', {
	  reserved: false
	}], ['textarea', {
	  reserved: false
	}], ['tfoot', {
	  reserved: false
	}], ['th', {
	  reserved: false
	}], ['thead', {
	  reserved: false
	}], ['time', {
	  reserved: false
	}], ['title', {
	  reserved: true
	}], ['tr', {
	  reserved: false
	}], ['track', {
	  reserved: true
	}], ['tt', {
	  reserved: false
	}], ['u', {
	  reserved: false
	}], ['ul', {
	  reserved: false
	}], ['var', {
	  reserved: false
	}], ['video', {
	  reserved: false
	}], ['wbr', {
	  reserved: false
	}], ['xmp', {
	  reserved: false
	}]];
	var domMap = {
	  entries: function entries() {
	    return dom$1;
	  },
	  forEach: function forEach(fn) {
	    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var _iterator = _createForOfIteratorHelper$3(dom$1),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray$3(_step.value, 2),
	          key = _step$value[0],
	          values = _step$value[1];
	        fn.call(thisArg, values, key, dom$1);
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  },
	  get: function get(key) {
	    var item = dom$1.find(function (tuple) {
	      return tuple[0] === key ? true : false;
	    });
	    return item && item[1];
	  },
	  has: function has(key) {
	    return !!domMap.get(key);
	  },
	  keys: function keys() {
	    return dom$1.map(function (_ref) {
	      var _ref2 = _slicedToArray$3(_ref, 1),
	        key = _ref2[0];
	      return key;
	    });
	  },
	  values: function values() {
	    return dom$1.map(function (_ref3) {
	      var _ref4 = _slicedToArray$3(_ref3, 2),
	        values = _ref4[1];
	      return values;
	    });
	  }
	};
	var _default$2f = (0, _iterationDecorator$3.default)(domMap, domMap.entries());
	domMap$1.default = _default$2f;

	var rolesMap$1 = {};

	var ariaAbstractRoles$1 = {};

	var commandRole$1 = {};

	Object.defineProperty(commandRole$1, "__esModule", {
	  value: true
	});
	commandRole$1.default = void 0;
	var commandRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'menuitem'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget']]
	};
	var _default$2e = commandRole;
	commandRole$1.default = _default$2e;

	var compositeRole$1 = {};

	Object.defineProperty(compositeRole$1, "__esModule", {
	  value: true
	});
	compositeRole$1.default = void 0;
	var compositeRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-activedescendant': null,
	    'aria-disabled': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget']]
	};
	var _default$2d = compositeRole;
	compositeRole$1.default = _default$2d;

	var inputRole$1 = {};

	Object.defineProperty(inputRole$1, "__esModule", {
	  value: true
	});
	inputRole$1.default = void 0;
	var inputRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'input'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget']]
	};
	var _default$2c = inputRole;
	inputRole$1.default = _default$2c;

	var landmarkRole$1 = {};

	Object.defineProperty(landmarkRole$1, "__esModule", {
	  value: true
	});
	landmarkRole$1.default = void 0;
	var landmarkRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$2b = landmarkRole;
	landmarkRole$1.default = _default$2b;

	var rangeRole$1 = {};

	Object.defineProperty(rangeRole$1, "__esModule", {
	  value: true
	});
	rangeRole$1.default = void 0;
	var rangeRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-valuemax': null,
	    'aria-valuemin': null,
	    'aria-valuenow': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$2a = rangeRole;
	rangeRole$1.default = _default$2a;

	var roletypeRole$1 = {};

	Object.defineProperty(roletypeRole$1, "__esModule", {
	  value: true
	});
	roletypeRole$1.default = void 0;
	var roletypeRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: [],
	  prohibitedProps: [],
	  props: {
	    'aria-atomic': null,
	    'aria-busy': null,
	    'aria-controls': null,
	    'aria-current': null,
	    'aria-describedby': null,
	    'aria-details': null,
	    'aria-dropeffect': null,
	    'aria-flowto': null,
	    'aria-grabbed': null,
	    'aria-hidden': null,
	    'aria-keyshortcuts': null,
	    'aria-label': null,
	    'aria-labelledby': null,
	    'aria-live': null,
	    'aria-owns': null,
	    'aria-relevant': null,
	    'aria-roledescription': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'rel'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'role'
	    },
	    module: 'XHTML'
	  }, {
	    concept: {
	      name: 'type'
	    },
	    module: 'Dublin Core'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: []
	};
	var _default$29 = roletypeRole;
	roletypeRole$1.default = _default$29;

	var sectionRole$1 = {};

	Object.defineProperty(sectionRole$1, "__esModule", {
	  value: true
	});
	sectionRole$1.default = void 0;
	var sectionRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: [],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'frontmatter'
	    },
	    module: 'DTB'
	  }, {
	    concept: {
	      name: 'level'
	    },
	    module: 'DTB'
	  }, {
	    concept: {
	      name: 'level'
	    },
	    module: 'SMIL'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$28 = sectionRole;
	sectionRole$1.default = _default$28;

	var sectionheadRole$1 = {};

	Object.defineProperty(sectionheadRole$1, "__esModule", {
	  value: true
	});
	sectionheadRole$1.default = void 0;
	var sectionheadRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$27 = sectionheadRole;
	sectionheadRole$1.default = _default$27;

	var selectRole$1 = {};

	Object.defineProperty(selectRole$1, "__esModule", {
	  value: true
	});
	selectRole$1.default = void 0;
	var selectRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-orientation': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'group']]
	};
	var _default$26 = selectRole;
	selectRole$1.default = _default$26;

	var structureRole$1 = {};

	Object.defineProperty(structureRole$1, "__esModule", {
	  value: true
	});
	structureRole$1.default = void 0;
	var structureRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: [],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype']]
	};
	var _default$25 = structureRole;
	structureRole$1.default = _default$25;

	var widgetRole$1 = {};

	Object.defineProperty(widgetRole$1, "__esModule", {
	  value: true
	});
	widgetRole$1.default = void 0;
	var widgetRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: [],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype']]
	};
	var _default$24 = widgetRole;
	widgetRole$1.default = _default$24;

	var windowRole$1 = {};

	Object.defineProperty(windowRole$1, "__esModule", {
	  value: true
	});
	windowRole$1.default = void 0;
	var windowRole = {
	  abstract: true,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-modal': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype']]
	};
	var _default$23 = windowRole;
	windowRole$1.default = _default$23;

	Object.defineProperty(ariaAbstractRoles$1, "__esModule", {
	  value: true
	});
	ariaAbstractRoles$1.default = void 0;
	var _commandRole = _interopRequireDefault$7(commandRole$1);
	var _compositeRole = _interopRequireDefault$7(compositeRole$1);
	var _inputRole = _interopRequireDefault$7(inputRole$1);
	var _landmarkRole = _interopRequireDefault$7(landmarkRole$1);
	var _rangeRole = _interopRequireDefault$7(rangeRole$1);
	var _roletypeRole = _interopRequireDefault$7(roletypeRole$1);
	var _sectionRole = _interopRequireDefault$7(sectionRole$1);
	var _sectionheadRole = _interopRequireDefault$7(sectionheadRole$1);
	var _selectRole = _interopRequireDefault$7(selectRole$1);
	var _structureRole = _interopRequireDefault$7(structureRole$1);
	var _widgetRole = _interopRequireDefault$7(widgetRole$1);
	var _windowRole = _interopRequireDefault$7(windowRole$1);
	function _interopRequireDefault$7(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	var ariaAbstractRoles = [['command', _commandRole.default], ['composite', _compositeRole.default], ['input', _inputRole.default], ['landmark', _landmarkRole.default], ['range', _rangeRole.default], ['roletype', _roletypeRole.default], ['section', _sectionRole.default], ['sectionhead', _sectionheadRole.default], ['select', _selectRole.default], ['structure', _structureRole.default], ['widget', _widgetRole.default], ['window', _windowRole.default]];
	var _default$22 = ariaAbstractRoles;
	ariaAbstractRoles$1.default = _default$22;

	var ariaLiteralRoles$1 = {};

	var alertRole$1 = {};

	Object.defineProperty(alertRole$1, "__esModule", {
	  value: true
	});
	alertRole$1.default = void 0;
	var alertRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-atomic': 'true',
	    'aria-live': 'assertive'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'alert'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$21 = alertRole;
	alertRole$1.default = _default$21;

	var alertdialogRole$1 = {};

	Object.defineProperty(alertdialogRole$1, "__esModule", {
	  value: true
	});
	alertdialogRole$1.default = void 0;
	var alertdialogRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'alert'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'alert'], ['roletype', 'window', 'dialog']]
	};
	var _default$20 = alertdialogRole;
	alertdialogRole$1.default = _default$20;

	var applicationRole$1 = {};

	Object.defineProperty(applicationRole$1, "__esModule", {
	  value: true
	});
	applicationRole$1.default = void 0;
	var applicationRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-activedescendant': null,
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'Device Independence Delivery Unit'
	    }
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$1$ = applicationRole;
	applicationRole$1.default = _default$1$;

	var articleRole$1 = {};

	Object.defineProperty(articleRole$1, "__esModule", {
	  value: true
	});
	articleRole$1.default = void 0;
	var articleRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-posinset': null,
	    'aria-setsize': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'article'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'document']]
	};
	var _default$1_ = articleRole;
	articleRole$1.default = _default$1_;

	var bannerRole$1 = {};

	Object.defineProperty(bannerRole$1, "__esModule", {
	  value: true
	});
	bannerRole$1.default = void 0;
	var bannerRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      constraints: ['direct descendant of document'],
	      name: 'header'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1Z = bannerRole;
	bannerRole$1.default = _default$1Z;

	var blockquoteRole$1 = {};

	Object.defineProperty(blockquoteRole$1, "__esModule", {
	  value: true
	});
	blockquoteRole$1.default = void 0;
	var blockquoteRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1Y = blockquoteRole;
	blockquoteRole$1.default = _default$1Y;

	var buttonRole$1 = {};

	Object.defineProperty(buttonRole$1, "__esModule", {
	  value: true
	});
	buttonRole$1.default = void 0;
	var buttonRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-pressed': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'aria-pressed'
	      }, {
	        name: 'type',
	        value: 'checkbox'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'aria-expanded',
	        value: 'false'
	      }],
	      name: 'summary'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'aria-expanded',
	        value: 'true'
	      }],
	      constraints: ['direct descendant of details element with the open attribute defined'],
	      name: 'summary'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'button'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'image'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'reset'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'submit'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'button'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'trigger'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command']]
	};
	var _default$1X = buttonRole;
	buttonRole$1.default = _default$1X;

	var captionRole$1 = {};

	Object.defineProperty(captionRole$1, "__esModule", {
	  value: true
	});
	captionRole$1.default = void 0;
	var captionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: ['figure', 'grid', 'table'],
	  requiredContextRole: ['figure', 'grid', 'table'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1W = captionRole;
	captionRole$1.default = _default$1W;

	var cellRole$1 = {};

	Object.defineProperty(cellRole$1, "__esModule", {
	  value: true
	});
	cellRole$1.default = void 0;
	var cellRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-colindex': null,
	    'aria-colspan': null,
	    'aria-rowindex': null,
	    'aria-rowspan': null
	  },
	  relatedConcepts: [{
	    concept: {
	      constraints: ['descendant of table'],
	      name: 'td'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['row'],
	  requiredContextRole: ['row'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1V = cellRole;
	cellRole$1.default = _default$1V;

	var checkboxRole$1 = {};

	Object.defineProperty(checkboxRole$1, "__esModule", {
	  value: true
	});
	checkboxRole$1.default = void 0;
	var checkboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-checked': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-required': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'checkbox'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'option'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-checked': null
	  },
	  superClass: [['roletype', 'widget', 'input']]
	};
	var _default$1U = checkboxRole;
	checkboxRole$1.default = _default$1U;

	var codeRole$1 = {};

	Object.defineProperty(codeRole$1, "__esModule", {
	  value: true
	});
	codeRole$1.default = void 0;
	var codeRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1T = codeRole;
	codeRole$1.default = _default$1T;

	var columnheaderRole$1 = {};

	Object.defineProperty(columnheaderRole$1, "__esModule", {
	  value: true
	});
	columnheaderRole$1.default = void 0;
	var columnheaderRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-sort': null
	  },
	  relatedConcepts: [{
	    attributes: [{
	      name: 'scope',
	      value: 'col'
	    }],
	    concept: {
	      name: 'th'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['row'],
	  requiredContextRole: ['row'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]
	};
	var _default$1S = columnheaderRole;
	columnheaderRole$1.default = _default$1S;

	var comboboxRole$1 = {};

	Object.defineProperty(comboboxRole$1, "__esModule", {
	  value: true
	});
	comboboxRole$1.default = void 0;
	var comboboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-activedescendant': null,
	    'aria-autocomplete': null,
	    'aria-errormessage': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-required': null,
	    'aria-expanded': 'false',
	    'aria-haspopup': 'listbox'
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'email'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'search'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'tel'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'text'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'url'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'url'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'multiple'
	      }, {
	        constraints: ['undefined'],
	        name: 'size'
	      }],
	      name: 'select'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'multiple'
	      }, {
	        name: 'size',
	        value: 1
	      }],
	      name: 'select'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'select'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-controls': null,
	    'aria-expanded': 'false'
	  },
	  superClass: [['roletype', 'widget', 'input']]
	};
	var _default$1R = comboboxRole;
	comboboxRole$1.default = _default$1R;

	var complementaryRole$1 = {};

	Object.defineProperty(complementaryRole$1, "__esModule", {
	  value: true
	});
	complementaryRole$1.default = void 0;
	var complementaryRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'aside'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1Q = complementaryRole;
	complementaryRole$1.default = _default$1Q;

	var contentinfoRole$1 = {};

	Object.defineProperty(contentinfoRole$1, "__esModule", {
	  value: true
	});
	contentinfoRole$1.default = void 0;
	var contentinfoRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      constraints: ['direct descendant of document'],
	      name: 'footer'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1P = contentinfoRole;
	contentinfoRole$1.default = _default$1P;

	var definitionRole$1 = {};

	Object.defineProperty(definitionRole$1, "__esModule", {
	  value: true
	});
	definitionRole$1.default = void 0;
	var definitionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'dd'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1O = definitionRole;
	definitionRole$1.default = _default$1O;

	var deletionRole$1 = {};

	Object.defineProperty(deletionRole$1, "__esModule", {
	  value: true
	});
	deletionRole$1.default = void 0;
	var deletionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1N = deletionRole;
	deletionRole$1.default = _default$1N;

	var dialogRole$1 = {};

	Object.defineProperty(dialogRole$1, "__esModule", {
	  value: true
	});
	dialogRole$1.default = void 0;
	var dialogRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'dialog'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'window']]
	};
	var _default$1M = dialogRole;
	dialogRole$1.default = _default$1M;

	var directoryRole$1 = {};

	Object.defineProperty(directoryRole$1, "__esModule", {
	  value: true
	});
	directoryRole$1.default = void 0;
	var directoryRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    module: 'DAISY Guide'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'list']]
	};
	var _default$1L = directoryRole;
	directoryRole$1.default = _default$1L;

	var documentRole$1 = {};

	Object.defineProperty(documentRole$1, "__esModule", {
	  value: true
	});
	documentRole$1.default = void 0;
	var documentRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'Device Independence Delivery Unit'
	    }
	  }, {
	    concept: {
	      name: 'body'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$1K = documentRole;
	documentRole$1.default = _default$1K;

	var emphasisRole$1 = {};

	Object.defineProperty(emphasisRole$1, "__esModule", {
	  value: true
	});
	emphasisRole$1.default = void 0;
	var emphasisRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1J = emphasisRole;
	emphasisRole$1.default = _default$1J;

	var feedRole$1 = {};

	Object.defineProperty(feedRole$1, "__esModule", {
	  value: true
	});
	feedRole$1.default = void 0;
	var feedRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['article']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'list']]
	};
	var _default$1I = feedRole;
	feedRole$1.default = _default$1I;

	var figureRole$1 = {};

	Object.defineProperty(figureRole$1, "__esModule", {
	  value: true
	});
	figureRole$1.default = void 0;
	var figureRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'figure'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1H = figureRole;
	figureRole$1.default = _default$1H;

	var formRole$1 = {};

	Object.defineProperty(formRole$1, "__esModule", {
	  value: true
	});
	formRole$1.default = void 0;
	var formRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'aria-label'
	      }],
	      name: 'form'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'aria-labelledby'
	      }],
	      name: 'form'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'name'
	      }],
	      name: 'form'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1G = formRole;
	formRole$1.default = _default$1G;

	var genericRole$1 = {};

	Object.defineProperty(genericRole$1, "__esModule", {
	  value: true
	});
	genericRole$1.default = void 0;
	var genericRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'span'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'div'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$1F = genericRole;
	genericRole$1.default = _default$1F;

	var gridRole$1 = {};

	Object.defineProperty(gridRole$1, "__esModule", {
	  value: true
	});
	gridRole$1.default = void 0;
	var gridRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-multiselectable': null,
	    'aria-readonly': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'role',
	        value: 'grid'
	      }],
	      name: 'table'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'table']]
	};
	var _default$1E = gridRole;
	gridRole$1.default = _default$1E;

	var gridcellRole$1 = {};

	Object.defineProperty(gridcellRole$1, "__esModule", {
	  value: true
	});
	gridcellRole$1.default = void 0;
	var gridcellRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-required': null,
	    'aria-selected': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'role',
	        value: 'gridcell'
	      }],
	      name: 'td'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['row'],
	  requiredContextRole: ['row'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'widget']]
	};
	var _default$1D = gridcellRole;
	gridcellRole$1.default = _default$1D;

	var groupRole$1 = {};

	Object.defineProperty(groupRole$1, "__esModule", {
	  value: true
	});
	groupRole$1.default = void 0;
	var groupRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-activedescendant': null,
	    'aria-disabled': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'details'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'fieldset'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'optgroup'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1C = groupRole;
	groupRole$1.default = _default$1C;

	var headingRole$1 = {};

	Object.defineProperty(headingRole$1, "__esModule", {
	  value: true
	});
	headingRole$1.default = void 0;
	var headingRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-level': '2'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'h1'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'h2'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'h3'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'h4'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'h5'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'h6'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-level': '2'
	  },
	  superClass: [['roletype', 'structure', 'sectionhead']]
	};
	var _default$1B = headingRole;
	headingRole$1.default = _default$1B;

	var imgRole$1 = {};

	Object.defineProperty(imgRole$1, "__esModule", {
	  value: true
	});
	imgRole$1.default = void 0;
	var imgRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'alt'
	      }],
	      name: 'img'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'alt'
	      }],
	      name: 'img'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'imggroup'
	    },
	    module: 'DTB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1A = imgRole;
	imgRole$1.default = _default$1A;

	var insertionRole$1 = {};

	Object.defineProperty(insertionRole$1, "__esModule", {
	  value: true
	});
	insertionRole$1.default = void 0;
	var insertionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1z = insertionRole;
	insertionRole$1.default = _default$1z;

	var linkRole$1 = {};

	Object.defineProperty(linkRole$1, "__esModule", {
	  value: true
	});
	linkRole$1.default = void 0;
	var linkRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-expanded': null,
	    'aria-haspopup': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'href'
	      }],
	      name: 'a'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'href'
	      }],
	      name: 'area'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'href'
	      }],
	      name: 'link'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command']]
	};
	var _default$1y = linkRole;
	linkRole$1.default = _default$1y;

	var listRole$1 = {};

	Object.defineProperty(listRole$1, "__esModule", {
	  value: true
	});
	listRole$1.default = void 0;
	var listRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'menu'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'ol'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'ul'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['listitem']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1x = listRole;
	listRole$1.default = _default$1x;

	var listboxRole$1 = {};

	Object.defineProperty(listboxRole$1, "__esModule", {
	  value: true
	});
	listboxRole$1.default = void 0;
	var listboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-invalid': null,
	    'aria-multiselectable': null,
	    'aria-readonly': null,
	    'aria-required': null,
	    'aria-orientation': 'vertical'
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['>1'],
	        name: 'size'
	      }, {
	        name: 'multiple'
	      }],
	      name: 'select'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['>1'],
	        name: 'size'
	      }],
	      name: 'select'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'multiple'
	      }],
	      name: 'select'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'datalist'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'list'
	    },
	    module: 'ARIA'
	  }, {
	    concept: {
	      name: 'select'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['option', 'group'], ['option']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
	};
	var _default$1w = listboxRole;
	listboxRole$1.default = _default$1w;

	var listitemRole$1 = {};

	Object.defineProperty(listitemRole$1, "__esModule", {
	  value: true
	});
	listitemRole$1.default = void 0;
	var listitemRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-level': null,
	    'aria-posinset': null,
	    'aria-setsize': null
	  },
	  relatedConcepts: [{
	    concept: {
	      constraints: ['direct descendant of ol, ul or menu'],
	      name: 'li'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'item'
	    },
	    module: 'XForms'
	  }],
	  requireContextRole: ['directory', 'list'],
	  requiredContextRole: ['directory', 'list'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1v = listitemRole;
	listitemRole$1.default = _default$1v;

	var logRole$1 = {};

	Object.defineProperty(logRole$1, "__esModule", {
	  value: true
	});
	logRole$1.default = void 0;
	var logRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-live': 'polite'
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1u = logRole;
	logRole$1.default = _default$1u;

	var mainRole$1 = {};

	Object.defineProperty(mainRole$1, "__esModule", {
	  value: true
	});
	mainRole$1.default = void 0;
	var mainRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'main'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1t = mainRole;
	mainRole$1.default = _default$1t;

	var marqueeRole$1 = {};

	Object.defineProperty(marqueeRole$1, "__esModule", {
	  value: true
	});
	marqueeRole$1.default = void 0;
	var marqueeRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1s = marqueeRole;
	marqueeRole$1.default = _default$1s;

	var mathRole$1 = {};

	Object.defineProperty(mathRole$1, "__esModule", {
	  value: true
	});
	mathRole$1.default = void 0;
	var mathRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'math'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1r = mathRole;
	mathRole$1.default = _default$1r;

	var menuRole$1 = {};

	Object.defineProperty(menuRole$1, "__esModule", {
	  value: true
	});
	menuRole$1.default = void 0;
	var menuRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-orientation': 'vertical'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'MENU'
	    },
	    module: 'JAPI'
	  }, {
	    concept: {
	      name: 'list'
	    },
	    module: 'ARIA'
	  }, {
	    concept: {
	      name: 'select'
	    },
	    module: 'XForms'
	  }, {
	    concept: {
	      name: 'sidebar'
	    },
	    module: 'DTB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['menuitem', 'group'], ['menuitemradio', 'group'], ['menuitemcheckbox', 'group'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
	};
	var _default$1q = menuRole;
	menuRole$1.default = _default$1q;

	var menubarRole$1 = {};

	Object.defineProperty(menubarRole$1, "__esModule", {
	  value: true
	});
	menubarRole$1.default = void 0;
	var menubarRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-orientation': 'horizontal'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'toolbar'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['menuitem', 'group'], ['menuitemradio', 'group'], ['menuitemcheckbox', 'group'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'select', 'menu'], ['roletype', 'structure', 'section', 'group', 'select', 'menu']]
	};
	var _default$1p = menubarRole;
	menubarRole$1.default = _default$1p;

	var menuitemRole$1 = {};

	Object.defineProperty(menuitemRole$1, "__esModule", {
	  value: true
	});
	menuitemRole$1.default = void 0;
	var menuitemRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-posinset': null,
	    'aria-setsize': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'MENU_ITEM'
	    },
	    module: 'JAPI'
	  }, {
	    concept: {
	      name: 'listitem'
	    },
	    module: 'ARIA'
	  }, {
	    concept: {
	      name: 'menuitem'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'option'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: ['group', 'menu', 'menubar'],
	  requiredContextRole: ['group', 'menu', 'menubar'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command']]
	};
	var _default$1o = menuitemRole;
	menuitemRole$1.default = _default$1o;

	var menuitemcheckboxRole$1 = {};

	Object.defineProperty(menuitemcheckboxRole$1, "__esModule", {
	  value: true
	});
	menuitemcheckboxRole$1.default = void 0;
	var menuitemcheckboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'menuitem'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: ['group', 'menu', 'menubar'],
	  requiredContextRole: ['group', 'menu', 'menubar'],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-checked': null
	  },
	  superClass: [['roletype', 'widget', 'input', 'checkbox'], ['roletype', 'widget', 'command', 'menuitem']]
	};
	var _default$1n = menuitemcheckboxRole;
	menuitemcheckboxRole$1.default = _default$1n;

	var menuitemradioRole$1 = {};

	Object.defineProperty(menuitemradioRole$1, "__esModule", {
	  value: true
	});
	menuitemradioRole$1.default = void 0;
	var menuitemradioRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'menuitem'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: ['group', 'menu', 'menubar'],
	  requiredContextRole: ['group', 'menu', 'menubar'],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-checked': null
	  },
	  superClass: [['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'], ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'], ['roletype', 'widget', 'input', 'radio']]
	};
	var _default$1m = menuitemradioRole;
	menuitemradioRole$1.default = _default$1m;

	var meterRole$1 = {};

	Object.defineProperty(meterRole$1, "__esModule", {
	  value: true
	});
	meterRole$1.default = void 0;
	var meterRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-valuetext': null,
	    'aria-valuemax': '100',
	    'aria-valuemin': '0'
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-valuenow': null
	  },
	  superClass: [['roletype', 'structure', 'range']]
	};
	var _default$1l = meterRole;
	meterRole$1.default = _default$1l;

	var navigationRole$1 = {};

	Object.defineProperty(navigationRole$1, "__esModule", {
	  value: true
	});
	navigationRole$1.default = void 0;
	var navigationRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'nav'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1k = navigationRole;
	navigationRole$1.default = _default$1k;

	var noneRole$1 = {};

	Object.defineProperty(noneRole$1, "__esModule", {
	  value: true
	});
	noneRole$1.default = void 0;
	var noneRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: [],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: []
	};
	var _default$1j = noneRole;
	noneRole$1.default = _default$1j;

	var noteRole$1 = {};

	Object.defineProperty(noteRole$1, "__esModule", {
	  value: true
	});
	noteRole$1.default = void 0;
	var noteRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1i = noteRole;
	noteRole$1.default = _default$1i;

	var optionRole$1 = {};

	Object.defineProperty(optionRole$1, "__esModule", {
	  value: true
	});
	optionRole$1.default = void 0;
	var optionRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-checked': null,
	    'aria-posinset': null,
	    'aria-setsize': null,
	    'aria-selected': 'false'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'item'
	    },
	    module: 'XForms'
	  }, {
	    concept: {
	      name: 'listitem'
	    },
	    module: 'ARIA'
	  }, {
	    concept: {
	      name: 'option'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-selected': 'false'
	  },
	  superClass: [['roletype', 'widget', 'input']]
	};
	var _default$1h = optionRole;
	optionRole$1.default = _default$1h;

	var paragraphRole$1 = {};

	Object.defineProperty(paragraphRole$1, "__esModule", {
	  value: true
	});
	paragraphRole$1.default = void 0;
	var paragraphRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$1g = paragraphRole;
	paragraphRole$1.default = _default$1g;

	var presentationRole$1 = {};

	Object.defineProperty(presentationRole$1, "__esModule", {
	  value: true
	});
	presentationRole$1.default = void 0;
	var presentationRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$1f = presentationRole;
	presentationRole$1.default = _default$1f;

	var progressbarRole$1 = {};

	Object.defineProperty(progressbarRole$1, "__esModule", {
	  value: true
	});
	progressbarRole$1.default = void 0;
	var progressbarRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-valuetext': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'progress'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'status'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'range'], ['roletype', 'widget']]
	};
	var _default$1e = progressbarRole;
	progressbarRole$1.default = _default$1e;

	var radioRole$1 = {};

	Object.defineProperty(radioRole$1, "__esModule", {
	  value: true
	});
	radioRole$1.default = void 0;
	var radioRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-checked': null,
	    'aria-posinset': null,
	    'aria-setsize': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'radio'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-checked': null
	  },
	  superClass: [['roletype', 'widget', 'input']]
	};
	var _default$1d = radioRole;
	radioRole$1.default = _default$1d;

	var radiogroupRole$1 = {};

	Object.defineProperty(radiogroupRole$1, "__esModule", {
	  value: true
	});
	radiogroupRole$1.default = void 0;
	var radiogroupRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-required': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'list'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['radio']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
	};
	var _default$1c = radiogroupRole;
	radiogroupRole$1.default = _default$1c;

	var regionRole$1 = {};

	Object.defineProperty(regionRole$1, "__esModule", {
	  value: true
	});
	regionRole$1.default = void 0;
	var regionRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'aria-label'
	      }],
	      name: 'section'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['set'],
	        name: 'aria-labelledby'
	      }],
	      name: 'section'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'Device Independence Glossart perceivable unit'
	    }
	  }, {
	    concept: {
	      name: 'frame'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$1b = regionRole;
	regionRole$1.default = _default$1b;

	var rowRole$1 = {};

	Object.defineProperty(rowRole$1, "__esModule", {
	  value: true
	});
	rowRole$1.default = void 0;
	var rowRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-colindex': null,
	    'aria-expanded': null,
	    'aria-level': null,
	    'aria-posinset': null,
	    'aria-rowindex': null,
	    'aria-selected': null,
	    'aria-setsize': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'tr'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
	  requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
	  requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'group'], ['roletype', 'widget']]
	};
	var _default$1a = rowRole;
	rowRole$1.default = _default$1a;

	var rowgroupRole$1 = {};

	Object.defineProperty(rowgroupRole$1, "__esModule", {
	  value: true
	});
	rowgroupRole$1.default = void 0;
	var rowgroupRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'tbody'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'tfoot'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'thead'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['grid', 'table', 'treegrid'],
	  requiredContextRole: ['grid', 'table', 'treegrid'],
	  requiredOwnedElements: [['row']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$19 = rowgroupRole;
	rowgroupRole$1.default = _default$19;

	var rowheaderRole$1 = {};

	Object.defineProperty(rowheaderRole$1, "__esModule", {
	  value: true
	});
	rowheaderRole$1.default = void 0;
	var rowheaderRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-sort': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'scope',
	        value: 'row'
	      }],
	      name: 'th'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        name: 'scope',
	        value: 'rowgroup'
	      }],
	      name: 'th'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: ['row', 'rowgroup'],
	  requiredContextRole: ['row', 'rowgroup'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]
	};
	var _default$18 = rowheaderRole;
	rowheaderRole$1.default = _default$18;

	var scrollbarRole$1 = {};

	Object.defineProperty(scrollbarRole$1, "__esModule", {
	  value: true
	});
	scrollbarRole$1.default = void 0;
	var scrollbarRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-valuetext': null,
	    'aria-orientation': 'vertical',
	    'aria-valuemax': '100',
	    'aria-valuemin': '0'
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-controls': null,
	    'aria-valuenow': null
	  },
	  superClass: [['roletype', 'structure', 'range'], ['roletype', 'widget']]
	};
	var _default$17 = scrollbarRole;
	scrollbarRole$1.default = _default$17;

	var searchRole$1 = {};

	Object.defineProperty(searchRole$1, "__esModule", {
	  value: true
	});
	searchRole$1.default = void 0;
	var searchRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$16 = searchRole;
	searchRole$1.default = _default$16;

	var searchboxRole$1 = {};

	Object.defineProperty(searchboxRole$1, "__esModule", {
	  value: true
	});
	searchboxRole$1.default = void 0;
	var searchboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'search'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'input', 'textbox']]
	};
	var _default$15 = searchboxRole;
	searchboxRole$1.default = _default$15;

	var separatorRole$1 = {};

	Object.defineProperty(separatorRole$1, "__esModule", {
	  value: true
	});
	separatorRole$1.default = void 0;
	var separatorRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-orientation': 'horizontal',
	    'aria-valuemax': '100',
	    'aria-valuemin': '0',
	    'aria-valuenow': null,
	    'aria-valuetext': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'hr'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure']]
	};
	var _default$14 = separatorRole;
	separatorRole$1.default = _default$14;

	var sliderRole$1 = {};

	Object.defineProperty(sliderRole$1, "__esModule", {
	  value: true
	});
	sliderRole$1.default = void 0;
	var sliderRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-haspopup': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-valuetext': null,
	    'aria-orientation': 'horizontal',
	    'aria-valuemax': '100',
	    'aria-valuemin': '0'
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'range'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-valuenow': null
	  },
	  superClass: [['roletype', 'widget', 'input'], ['roletype', 'structure', 'range']]
	};
	var _default$13 = sliderRole;
	sliderRole$1.default = _default$13;

	var spinbuttonRole$1 = {};

	Object.defineProperty(spinbuttonRole$1, "__esModule", {
	  value: true
	});
	spinbuttonRole$1.default = void 0;
	var spinbuttonRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null,
	    'aria-readonly': null,
	    'aria-required': null,
	    'aria-valuetext': null,
	    'aria-valuenow': '0'
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        name: 'type',
	        value: 'number'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'widget', 'input'], ['roletype', 'structure', 'range']]
	};
	var _default$12 = spinbuttonRole;
	spinbuttonRole$1.default = _default$12;

	var statusRole$1 = {};

	Object.defineProperty(statusRole$1, "__esModule", {
	  value: true
	});
	statusRole$1.default = void 0;
	var statusRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-atomic': 'true',
	    'aria-live': 'polite'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'output'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$11 = statusRole;
	statusRole$1.default = _default$11;

	var strongRole$1 = {};

	Object.defineProperty(strongRole$1, "__esModule", {
	  value: true
	});
	strongRole$1.default = void 0;
	var strongRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$10 = strongRole;
	strongRole$1.default = _default$10;

	var subscriptRole$1 = {};

	Object.defineProperty(subscriptRole$1, "__esModule", {
	  value: true
	});
	subscriptRole$1.default = void 0;
	var subscriptRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$$ = subscriptRole;
	subscriptRole$1.default = _default$$;

	var superscriptRole$1 = {};

	Object.defineProperty(superscriptRole$1, "__esModule", {
	  value: true
	});
	superscriptRole$1.default = void 0;
	var superscriptRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['prohibited'],
	  prohibitedProps: ['aria-label', 'aria-labelledby'],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$_ = superscriptRole;
	superscriptRole$1.default = _default$_;

	var switchRole$1 = {};

	Object.defineProperty(switchRole$1, "__esModule", {
	  value: true
	});
	switchRole$1.default = void 0;
	var switchRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'button'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-checked': null
	  },
	  superClass: [['roletype', 'widget', 'input', 'checkbox']]
	};
	var _default$Z = switchRole;
	switchRole$1.default = _default$Z;

	var tabRole$1 = {};

	Object.defineProperty(tabRole$1, "__esModule", {
	  value: true
	});
	tabRole$1.default = void 0;
	var tabRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-posinset': null,
	    'aria-setsize': null,
	    'aria-selected': 'false'
	  },
	  relatedConcepts: [],
	  requireContextRole: ['tablist'],
	  requiredContextRole: ['tablist'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'sectionhead'], ['roletype', 'widget']]
	};
	var _default$Y = tabRole;
	tabRole$1.default = _default$Y;

	var tableRole$1 = {};

	Object.defineProperty(tableRole$1, "__esModule", {
	  value: true
	});
	tableRole$1.default = void 0;
	var tableRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-colcount': null,
	    'aria-rowcount': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'table'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$X = tableRole;
	tableRole$1.default = _default$X;

	var tablistRole$1 = {};

	Object.defineProperty(tablistRole$1, "__esModule", {
	  value: true
	});
	tablistRole$1.default = void 0;
	var tablistRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-level': null,
	    'aria-multiselectable': null,
	    'aria-orientation': 'horizontal'
	  },
	  relatedConcepts: [{
	    module: 'DAISY',
	    concept: {
	      name: 'guide'
	    }
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['tab']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite']]
	};
	var _default$W = tablistRole;
	tablistRole$1.default = _default$W;

	var tabpanelRole$1 = {};

	Object.defineProperty(tabpanelRole$1, "__esModule", {
	  value: true
	});
	tabpanelRole$1.default = void 0;
	var tabpanelRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$V = tabpanelRole;
	tabpanelRole$1.default = _default$V;

	var termRole$1 = {};

	Object.defineProperty(termRole$1, "__esModule", {
	  value: true
	});
	termRole$1.default = void 0;
	var termRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'dfn'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'dt'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$U = termRole;
	termRole$1.default = _default$U;

	var textboxRole$1 = {};

	Object.defineProperty(textboxRole$1, "__esModule", {
	  value: true
	});
	textboxRole$1.default = void 0;
	var textboxRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-activedescendant': null,
	    'aria-autocomplete': null,
	    'aria-errormessage': null,
	    'aria-haspopup': null,
	    'aria-invalid': null,
	    'aria-multiline': null,
	    'aria-placeholder': null,
	    'aria-readonly': null,
	    'aria-required': null
	  },
	  relatedConcepts: [{
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'type'
	      }, {
	        constraints: ['undefined'],
	        name: 'list'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'email'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'tel'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'text'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      attributes: [{
	        constraints: ['undefined'],
	        name: 'list'
	      }, {
	        name: 'type',
	        value: 'url'
	      }],
	      name: 'input'
	    },
	    module: 'HTML'
	  }, {
	    concept: {
	      name: 'input'
	    },
	    module: 'XForms'
	  }, {
	    concept: {
	      name: 'textarea'
	    },
	    module: 'HTML'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'input']]
	};
	var _default$T = textboxRole;
	textboxRole$1.default = _default$T;

	var timeRole$1 = {};

	Object.defineProperty(timeRole$1, "__esModule", {
	  value: true
	});
	timeRole$1.default = void 0;
	var timeRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$S = timeRole;
	timeRole$1.default = _default$S;

	var timerRole$1 = {};

	Object.defineProperty(timerRole$1, "__esModule", {
	  value: true
	});
	timerRole$1.default = void 0;
	var timerRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'status']]
	};
	var _default$R = timerRole;
	timerRole$1.default = _default$R;

	var toolbarRole$1 = {};

	Object.defineProperty(toolbarRole$1, "__esModule", {
	  value: true
	});
	toolbarRole$1.default = void 0;
	var toolbarRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-orientation': 'horizontal'
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'menubar'
	    },
	    module: 'ARIA'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'group']]
	};
	var _default$Q = toolbarRole;
	toolbarRole$1.default = _default$Q;

	var tooltipRole$1 = {};

	Object.defineProperty(tooltipRole$1, "__esModule", {
	  value: true
	});
	tooltipRole$1.default = void 0;
	var tooltipRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$P = tooltipRole;
	tooltipRole$1.default = _default$P;

	var treeRole$1 = {};

	Object.defineProperty(treeRole$1, "__esModule", {
	  value: true
	});
	treeRole$1.default = void 0;
	var treeRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null,
	    'aria-multiselectable': null,
	    'aria-required': null,
	    'aria-orientation': 'vertical'
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
	};
	var _default$O = treeRole;
	treeRole$1.default = _default$O;

	var treegridRole$1 = {};

	Object.defineProperty(treegridRole$1, "__esModule", {
	  value: true
	});
	treegridRole$1.default = void 0;
	var treegridRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'composite', 'grid'], ['roletype', 'structure', 'section', 'table', 'grid'], ['roletype', 'widget', 'composite', 'select', 'tree'], ['roletype', 'structure', 'section', 'group', 'select', 'tree']]
	};
	var _default$N = treegridRole;
	treegridRole$1.default = _default$N;

	var treeitemRole$1 = {};

	Object.defineProperty(treeitemRole$1, "__esModule", {
	  value: true
	});
	treeitemRole$1.default = void 0;
	var treeitemRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-expanded': null,
	    'aria-haspopup': null
	  },
	  relatedConcepts: [],
	  requireContextRole: ['group', 'tree'],
	  requiredContextRole: ['group', 'tree'],
	  requiredOwnedElements: [],
	  requiredProps: {
	    'aria-selected': null
	  },
	  superClass: [['roletype', 'structure', 'section', 'listitem'], ['roletype', 'widget', 'input', 'option']]
	};
	var _default$M = treeitemRole;
	treeitemRole$1.default = _default$M;

	Object.defineProperty(ariaLiteralRoles$1, "__esModule", {
	  value: true
	});
	ariaLiteralRoles$1.default = void 0;
	var _alertRole = _interopRequireDefault$6(alertRole$1);
	var _alertdialogRole = _interopRequireDefault$6(alertdialogRole$1);
	var _applicationRole = _interopRequireDefault$6(applicationRole$1);
	var _articleRole = _interopRequireDefault$6(articleRole$1);
	var _bannerRole = _interopRequireDefault$6(bannerRole$1);
	var _blockquoteRole = _interopRequireDefault$6(blockquoteRole$1);
	var _buttonRole = _interopRequireDefault$6(buttonRole$1);
	var _captionRole = _interopRequireDefault$6(captionRole$1);
	var _cellRole = _interopRequireDefault$6(cellRole$1);
	var _checkboxRole = _interopRequireDefault$6(checkboxRole$1);
	var _codeRole = _interopRequireDefault$6(codeRole$1);
	var _columnheaderRole = _interopRequireDefault$6(columnheaderRole$1);
	var _comboboxRole = _interopRequireDefault$6(comboboxRole$1);
	var _complementaryRole = _interopRequireDefault$6(complementaryRole$1);
	var _contentinfoRole = _interopRequireDefault$6(contentinfoRole$1);
	var _definitionRole = _interopRequireDefault$6(definitionRole$1);
	var _deletionRole = _interopRequireDefault$6(deletionRole$1);
	var _dialogRole = _interopRequireDefault$6(dialogRole$1);
	var _directoryRole = _interopRequireDefault$6(directoryRole$1);
	var _documentRole = _interopRequireDefault$6(documentRole$1);
	var _emphasisRole = _interopRequireDefault$6(emphasisRole$1);
	var _feedRole = _interopRequireDefault$6(feedRole$1);
	var _figureRole = _interopRequireDefault$6(figureRole$1);
	var _formRole = _interopRequireDefault$6(formRole$1);
	var _genericRole = _interopRequireDefault$6(genericRole$1);
	var _gridRole = _interopRequireDefault$6(gridRole$1);
	var _gridcellRole = _interopRequireDefault$6(gridcellRole$1);
	var _groupRole = _interopRequireDefault$6(groupRole$1);
	var _headingRole = _interopRequireDefault$6(headingRole$1);
	var _imgRole = _interopRequireDefault$6(imgRole$1);
	var _insertionRole = _interopRequireDefault$6(insertionRole$1);
	var _linkRole = _interopRequireDefault$6(linkRole$1);
	var _listRole = _interopRequireDefault$6(listRole$1);
	var _listboxRole = _interopRequireDefault$6(listboxRole$1);
	var _listitemRole = _interopRequireDefault$6(listitemRole$1);
	var _logRole = _interopRequireDefault$6(logRole$1);
	var _mainRole = _interopRequireDefault$6(mainRole$1);
	var _marqueeRole = _interopRequireDefault$6(marqueeRole$1);
	var _mathRole = _interopRequireDefault$6(mathRole$1);
	var _menuRole = _interopRequireDefault$6(menuRole$1);
	var _menubarRole = _interopRequireDefault$6(menubarRole$1);
	var _menuitemRole = _interopRequireDefault$6(menuitemRole$1);
	var _menuitemcheckboxRole = _interopRequireDefault$6(menuitemcheckboxRole$1);
	var _menuitemradioRole = _interopRequireDefault$6(menuitemradioRole$1);
	var _meterRole = _interopRequireDefault$6(meterRole$1);
	var _navigationRole = _interopRequireDefault$6(navigationRole$1);
	var _noneRole = _interopRequireDefault$6(noneRole$1);
	var _noteRole = _interopRequireDefault$6(noteRole$1);
	var _optionRole = _interopRequireDefault$6(optionRole$1);
	var _paragraphRole = _interopRequireDefault$6(paragraphRole$1);
	var _presentationRole = _interopRequireDefault$6(presentationRole$1);
	var _progressbarRole = _interopRequireDefault$6(progressbarRole$1);
	var _radioRole = _interopRequireDefault$6(radioRole$1);
	var _radiogroupRole = _interopRequireDefault$6(radiogroupRole$1);
	var _regionRole = _interopRequireDefault$6(regionRole$1);
	var _rowRole = _interopRequireDefault$6(rowRole$1);
	var _rowgroupRole = _interopRequireDefault$6(rowgroupRole$1);
	var _rowheaderRole = _interopRequireDefault$6(rowheaderRole$1);
	var _scrollbarRole = _interopRequireDefault$6(scrollbarRole$1);
	var _searchRole = _interopRequireDefault$6(searchRole$1);
	var _searchboxRole = _interopRequireDefault$6(searchboxRole$1);
	var _separatorRole = _interopRequireDefault$6(separatorRole$1);
	var _sliderRole = _interopRequireDefault$6(sliderRole$1);
	var _spinbuttonRole = _interopRequireDefault$6(spinbuttonRole$1);
	var _statusRole = _interopRequireDefault$6(statusRole$1);
	var _strongRole = _interopRequireDefault$6(strongRole$1);
	var _subscriptRole = _interopRequireDefault$6(subscriptRole$1);
	var _superscriptRole = _interopRequireDefault$6(superscriptRole$1);
	var _switchRole = _interopRequireDefault$6(switchRole$1);
	var _tabRole = _interopRequireDefault$6(tabRole$1);
	var _tableRole = _interopRequireDefault$6(tableRole$1);
	var _tablistRole = _interopRequireDefault$6(tablistRole$1);
	var _tabpanelRole = _interopRequireDefault$6(tabpanelRole$1);
	var _termRole = _interopRequireDefault$6(termRole$1);
	var _textboxRole = _interopRequireDefault$6(textboxRole$1);
	var _timeRole = _interopRequireDefault$6(timeRole$1);
	var _timerRole = _interopRequireDefault$6(timerRole$1);
	var _toolbarRole = _interopRequireDefault$6(toolbarRole$1);
	var _tooltipRole = _interopRequireDefault$6(tooltipRole$1);
	var _treeRole = _interopRequireDefault$6(treeRole$1);
	var _treegridRole = _interopRequireDefault$6(treegridRole$1);
	var _treeitemRole = _interopRequireDefault$6(treeitemRole$1);
	function _interopRequireDefault$6(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	var ariaLiteralRoles = [['alert', _alertRole.default], ['alertdialog', _alertdialogRole.default], ['application', _applicationRole.default], ['article', _articleRole.default], ['banner', _bannerRole.default], ['blockquote', _blockquoteRole.default], ['button', _buttonRole.default], ['caption', _captionRole.default], ['cell', _cellRole.default], ['checkbox', _checkboxRole.default], ['code', _codeRole.default], ['columnheader', _columnheaderRole.default], ['combobox', _comboboxRole.default], ['complementary', _complementaryRole.default], ['contentinfo', _contentinfoRole.default], ['definition', _definitionRole.default], ['deletion', _deletionRole.default], ['dialog', _dialogRole.default], ['directory', _directoryRole.default], ['document', _documentRole.default], ['emphasis', _emphasisRole.default], ['feed', _feedRole.default], ['figure', _figureRole.default], ['form', _formRole.default], ['generic', _genericRole.default], ['grid', _gridRole.default], ['gridcell', _gridcellRole.default], ['group', _groupRole.default], ['heading', _headingRole.default], ['img', _imgRole.default], ['insertion', _insertionRole.default], ['link', _linkRole.default], ['list', _listRole.default], ['listbox', _listboxRole.default], ['listitem', _listitemRole.default], ['log', _logRole.default], ['main', _mainRole.default], ['marquee', _marqueeRole.default], ['math', _mathRole.default], ['menu', _menuRole.default], ['menubar', _menubarRole.default], ['menuitem', _menuitemRole.default], ['menuitemcheckbox', _menuitemcheckboxRole.default], ['menuitemradio', _menuitemradioRole.default], ['meter', _meterRole.default], ['navigation', _navigationRole.default], ['none', _noneRole.default], ['note', _noteRole.default], ['option', _optionRole.default], ['paragraph', _paragraphRole.default], ['presentation', _presentationRole.default], ['progressbar', _progressbarRole.default], ['radio', _radioRole.default], ['radiogroup', _radiogroupRole.default], ['region', _regionRole.default], ['row', _rowRole.default], ['rowgroup', _rowgroupRole.default], ['rowheader', _rowheaderRole.default], ['scrollbar', _scrollbarRole.default], ['search', _searchRole.default], ['searchbox', _searchboxRole.default], ['separator', _separatorRole.default], ['slider', _sliderRole.default], ['spinbutton', _spinbuttonRole.default], ['status', _statusRole.default], ['strong', _strongRole.default], ['subscript', _subscriptRole.default], ['superscript', _superscriptRole.default], ['switch', _switchRole.default], ['tab', _tabRole.default], ['table', _tableRole.default], ['tablist', _tablistRole.default], ['tabpanel', _tabpanelRole.default], ['term', _termRole.default], ['textbox', _textboxRole.default], ['time', _timeRole.default], ['timer', _timerRole.default], ['toolbar', _toolbarRole.default], ['tooltip', _tooltipRole.default], ['tree', _treeRole.default], ['treegrid', _treegridRole.default], ['treeitem', _treeitemRole.default]];
	var _default$L = ariaLiteralRoles;
	ariaLiteralRoles$1.default = _default$L;

	var ariaDpubRoles$1 = {};

	var docAbstractRole$1 = {};

	Object.defineProperty(docAbstractRole$1, "__esModule", {
	  value: true
	});
	docAbstractRole$1.default = void 0;
	var docAbstractRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'abstract [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$K = docAbstractRole;
	docAbstractRole$1.default = _default$K;

	var docAcknowledgmentsRole$1 = {};

	Object.defineProperty(docAcknowledgmentsRole$1, "__esModule", {
	  value: true
	});
	docAcknowledgmentsRole$1.default = void 0;
	var docAcknowledgmentsRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'acknowledgments [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$J = docAcknowledgmentsRole;
	docAcknowledgmentsRole$1.default = _default$J;

	var docAfterwordRole$1 = {};

	Object.defineProperty(docAfterwordRole$1, "__esModule", {
	  value: true
	});
	docAfterwordRole$1.default = void 0;
	var docAfterwordRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'afterword [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$I = docAfterwordRole;
	docAfterwordRole$1.default = _default$I;

	var docAppendixRole$1 = {};

	Object.defineProperty(docAppendixRole$1, "__esModule", {
	  value: true
	});
	docAppendixRole$1.default = void 0;
	var docAppendixRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'appendix [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$H = docAppendixRole;
	docAppendixRole$1.default = _default$H;

	var docBacklinkRole$1 = {};

	Object.defineProperty(docBacklinkRole$1, "__esModule", {
	  value: true
	});
	docBacklinkRole$1.default = void 0;
	var docBacklinkRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'content'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'referrer [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command', 'link']]
	};
	var _default$G = docBacklinkRole;
	docBacklinkRole$1.default = _default$G;

	var docBiblioentryRole$1 = {};

	Object.defineProperty(docBiblioentryRole$1, "__esModule", {
	  value: true
	});
	docBiblioentryRole$1.default = void 0;
	var docBiblioentryRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'EPUB biblioentry [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: ['doc-bibliography'],
	  requiredContextRole: ['doc-bibliography'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'listitem']]
	};
	var _default$F = docBiblioentryRole;
	docBiblioentryRole$1.default = _default$F;

	var docBibliographyRole$1 = {};

	Object.defineProperty(docBibliographyRole$1, "__esModule", {
	  value: true
	});
	docBibliographyRole$1.default = void 0;
	var docBibliographyRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'bibliography [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['doc-biblioentry']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$E = docBibliographyRole;
	docBibliographyRole$1.default = _default$E;

	var docBibliorefRole$1 = {};

	Object.defineProperty(docBibliorefRole$1, "__esModule", {
	  value: true
	});
	docBibliorefRole$1.default = void 0;
	var docBibliorefRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'biblioref [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command', 'link']]
	};
	var _default$D = docBibliorefRole;
	docBibliorefRole$1.default = _default$D;

	var docChapterRole$1 = {};

	Object.defineProperty(docChapterRole$1, "__esModule", {
	  value: true
	});
	docChapterRole$1.default = void 0;
	var docChapterRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'chapter [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$C = docChapterRole;
	docChapterRole$1.default = _default$C;

	var docColophonRole$1 = {};

	Object.defineProperty(docColophonRole$1, "__esModule", {
	  value: true
	});
	docColophonRole$1.default = void 0;
	var docColophonRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'colophon [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$B = docColophonRole;
	docColophonRole$1.default = _default$B;

	var docConclusionRole$1 = {};

	Object.defineProperty(docConclusionRole$1, "__esModule", {
	  value: true
	});
	docConclusionRole$1.default = void 0;
	var docConclusionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'conclusion [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$A = docConclusionRole;
	docConclusionRole$1.default = _default$A;

	var docCoverRole$1 = {};

	Object.defineProperty(docCoverRole$1, "__esModule", {
	  value: true
	});
	docCoverRole$1.default = void 0;
	var docCoverRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'cover [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'img']]
	};
	var _default$z = docCoverRole;
	docCoverRole$1.default = _default$z;

	var docCreditRole$1 = {};

	Object.defineProperty(docCreditRole$1, "__esModule", {
	  value: true
	});
	docCreditRole$1.default = void 0;
	var docCreditRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'credit [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$y = docCreditRole;
	docCreditRole$1.default = _default$y;

	var docCreditsRole$1 = {};

	Object.defineProperty(docCreditsRole$1, "__esModule", {
	  value: true
	});
	docCreditsRole$1.default = void 0;
	var docCreditsRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'credits [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$x = docCreditsRole;
	docCreditsRole$1.default = _default$x;

	var docDedicationRole$1 = {};

	Object.defineProperty(docDedicationRole$1, "__esModule", {
	  value: true
	});
	docDedicationRole$1.default = void 0;
	var docDedicationRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'dedication [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$w = docDedicationRole;
	docDedicationRole$1.default = _default$w;

	var docEndnoteRole$1 = {};

	Object.defineProperty(docEndnoteRole$1, "__esModule", {
	  value: true
	});
	docEndnoteRole$1.default = void 0;
	var docEndnoteRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'rearnote [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: ['doc-endnotes'],
	  requiredContextRole: ['doc-endnotes'],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'listitem']]
	};
	var _default$v = docEndnoteRole;
	docEndnoteRole$1.default = _default$v;

	var docEndnotesRole$1 = {};

	Object.defineProperty(docEndnotesRole$1, "__esModule", {
	  value: true
	});
	docEndnotesRole$1.default = void 0;
	var docEndnotesRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'rearnotes [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['doc-endnote']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$u = docEndnotesRole;
	docEndnotesRole$1.default = _default$u;

	var docEpigraphRole$1 = {};

	Object.defineProperty(docEpigraphRole$1, "__esModule", {
	  value: true
	});
	docEpigraphRole$1.default = void 0;
	var docEpigraphRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'epigraph [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$t = docEpigraphRole;
	docEpigraphRole$1.default = _default$t;

	var docEpilogueRole$1 = {};

	Object.defineProperty(docEpilogueRole$1, "__esModule", {
	  value: true
	});
	docEpilogueRole$1.default = void 0;
	var docEpilogueRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'epilogue [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$s = docEpilogueRole;
	docEpilogueRole$1.default = _default$s;

	var docErrataRole$1 = {};

	Object.defineProperty(docErrataRole$1, "__esModule", {
	  value: true
	});
	docErrataRole$1.default = void 0;
	var docErrataRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'errata [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$r = docErrataRole;
	docErrataRole$1.default = _default$r;

	var docExampleRole$1 = {};

	Object.defineProperty(docExampleRole$1, "__esModule", {
	  value: true
	});
	docExampleRole$1.default = void 0;
	var docExampleRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$q = docExampleRole;
	docExampleRole$1.default = _default$q;

	var docFootnoteRole$1 = {};

	Object.defineProperty(docFootnoteRole$1, "__esModule", {
	  value: true
	});
	docFootnoteRole$1.default = void 0;
	var docFootnoteRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'footnote [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$p = docFootnoteRole;
	docFootnoteRole$1.default = _default$p;

	var docForewordRole$1 = {};

	Object.defineProperty(docForewordRole$1, "__esModule", {
	  value: true
	});
	docForewordRole$1.default = void 0;
	var docForewordRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'foreword [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$o = docForewordRole;
	docForewordRole$1.default = _default$o;

	var docGlossaryRole$1 = {};

	Object.defineProperty(docGlossaryRole$1, "__esModule", {
	  value: true
	});
	docGlossaryRole$1.default = void 0;
	var docGlossaryRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'glossary [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [['definition'], ['term']],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$n = docGlossaryRole;
	docGlossaryRole$1.default = _default$n;

	var docGlossrefRole$1 = {};

	Object.defineProperty(docGlossrefRole$1, "__esModule", {
	  value: true
	});
	docGlossrefRole$1.default = void 0;
	var docGlossrefRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'glossref [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command', 'link']]
	};
	var _default$m = docGlossrefRole;
	docGlossrefRole$1.default = _default$m;

	var docIndexRole$1 = {};

	Object.defineProperty(docIndexRole$1, "__esModule", {
	  value: true
	});
	docIndexRole$1.default = void 0;
	var docIndexRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'index [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	};
	var _default$l = docIndexRole;
	docIndexRole$1.default = _default$l;

	var docIntroductionRole$1 = {};

	Object.defineProperty(docIntroductionRole$1, "__esModule", {
	  value: true
	});
	docIntroductionRole$1.default = void 0;
	var docIntroductionRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'introduction [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$k = docIntroductionRole;
	docIntroductionRole$1.default = _default$k;

	var docNoterefRole$1 = {};

	Object.defineProperty(docNoterefRole$1, "__esModule", {
	  value: true
	});
	docNoterefRole$1.default = void 0;
	var docNoterefRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'noteref [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'widget', 'command', 'link']]
	};
	var _default$j = docNoterefRole;
	docNoterefRole$1.default = _default$j;

	var docNoticeRole$1 = {};

	Object.defineProperty(docNoticeRole$1, "__esModule", {
	  value: true
	});
	docNoticeRole$1.default = void 0;
	var docNoticeRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'notice [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'note']]
	};
	var _default$i = docNoticeRole;
	docNoticeRole$1.default = _default$i;

	var docPagebreakRole$1 = {};

	Object.defineProperty(docPagebreakRole$1, "__esModule", {
	  value: true
	});
	docPagebreakRole$1.default = void 0;
	var docPagebreakRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'pagebreak [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'separator']]
	};
	var _default$h = docPagebreakRole;
	docPagebreakRole$1.default = _default$h;

	var docPagelistRole$1 = {};

	Object.defineProperty(docPagelistRole$1, "__esModule", {
	  value: true
	});
	docPagelistRole$1.default = void 0;
	var docPagelistRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'page-list [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	};
	var _default$g = docPagelistRole;
	docPagelistRole$1.default = _default$g;

	var docPartRole$1 = {};

	Object.defineProperty(docPartRole$1, "__esModule", {
	  value: true
	});
	docPartRole$1.default = void 0;
	var docPartRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'part [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$f = docPartRole;
	docPartRole$1.default = _default$f;

	var docPrefaceRole$1 = {};

	Object.defineProperty(docPrefaceRole$1, "__esModule", {
	  value: true
	});
	docPrefaceRole$1.default = void 0;
	var docPrefaceRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'preface [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$e = docPrefaceRole;
	docPrefaceRole$1.default = _default$e;

	var docPrologueRole$1 = {};

	Object.defineProperty(docPrologueRole$1, "__esModule", {
	  value: true
	});
	docPrologueRole$1.default = void 0;
	var docPrologueRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'prologue [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark']]
	};
	var _default$d = docPrologueRole;
	docPrologueRole$1.default = _default$d;

	var docPullquoteRole$1 = {};

	Object.defineProperty(docPullquoteRole$1, "__esModule", {
	  value: true
	});
	docPullquoteRole$1.default = void 0;
	var docPullquoteRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {},
	  relatedConcepts: [{
	    concept: {
	      name: 'pullquote [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['none']]
	};
	var _default$c = docPullquoteRole;
	docPullquoteRole$1.default = _default$c;

	var docQnaRole$1 = {};

	Object.defineProperty(docQnaRole$1, "__esModule", {
	  value: true
	});
	docQnaRole$1.default = void 0;
	var docQnaRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'qna [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section']]
	};
	var _default$b = docQnaRole;
	docQnaRole$1.default = _default$b;

	var docSubtitleRole$1 = {};

	Object.defineProperty(docSubtitleRole$1, "__esModule", {
	  value: true
	});
	docSubtitleRole$1.default = void 0;
	var docSubtitleRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'subtitle [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'sectionhead']]
	};
	var _default$a = docSubtitleRole;
	docSubtitleRole$1.default = _default$a;

	var docTipRole$1 = {};

	Object.defineProperty(docTipRole$1, "__esModule", {
	  value: true
	});
	docTipRole$1.default = void 0;
	var docTipRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'help [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'note']]
	};
	var _default$9 = docTipRole;
	docTipRole$1.default = _default$9;

	var docTocRole$1 = {};

	Object.defineProperty(docTocRole$1, "__esModule", {
	  value: true
	});
	docTocRole$1.default = void 0;
	var docTocRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    concept: {
	      name: 'toc [EPUB-SSV]'
	    },
	    module: 'EPUB'
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	};
	var _default$8 = docTocRole;
	docTocRole$1.default = _default$8;

	Object.defineProperty(ariaDpubRoles$1, "__esModule", {
	  value: true
	});
	ariaDpubRoles$1.default = void 0;
	var _docAbstractRole = _interopRequireDefault$5(docAbstractRole$1);
	var _docAcknowledgmentsRole = _interopRequireDefault$5(docAcknowledgmentsRole$1);
	var _docAfterwordRole = _interopRequireDefault$5(docAfterwordRole$1);
	var _docAppendixRole = _interopRequireDefault$5(docAppendixRole$1);
	var _docBacklinkRole = _interopRequireDefault$5(docBacklinkRole$1);
	var _docBiblioentryRole = _interopRequireDefault$5(docBiblioentryRole$1);
	var _docBibliographyRole = _interopRequireDefault$5(docBibliographyRole$1);
	var _docBibliorefRole = _interopRequireDefault$5(docBibliorefRole$1);
	var _docChapterRole = _interopRequireDefault$5(docChapterRole$1);
	var _docColophonRole = _interopRequireDefault$5(docColophonRole$1);
	var _docConclusionRole = _interopRequireDefault$5(docConclusionRole$1);
	var _docCoverRole = _interopRequireDefault$5(docCoverRole$1);
	var _docCreditRole = _interopRequireDefault$5(docCreditRole$1);
	var _docCreditsRole = _interopRequireDefault$5(docCreditsRole$1);
	var _docDedicationRole = _interopRequireDefault$5(docDedicationRole$1);
	var _docEndnoteRole = _interopRequireDefault$5(docEndnoteRole$1);
	var _docEndnotesRole = _interopRequireDefault$5(docEndnotesRole$1);
	var _docEpigraphRole = _interopRequireDefault$5(docEpigraphRole$1);
	var _docEpilogueRole = _interopRequireDefault$5(docEpilogueRole$1);
	var _docErrataRole = _interopRequireDefault$5(docErrataRole$1);
	var _docExampleRole = _interopRequireDefault$5(docExampleRole$1);
	var _docFootnoteRole = _interopRequireDefault$5(docFootnoteRole$1);
	var _docForewordRole = _interopRequireDefault$5(docForewordRole$1);
	var _docGlossaryRole = _interopRequireDefault$5(docGlossaryRole$1);
	var _docGlossrefRole = _interopRequireDefault$5(docGlossrefRole$1);
	var _docIndexRole = _interopRequireDefault$5(docIndexRole$1);
	var _docIntroductionRole = _interopRequireDefault$5(docIntroductionRole$1);
	var _docNoterefRole = _interopRequireDefault$5(docNoterefRole$1);
	var _docNoticeRole = _interopRequireDefault$5(docNoticeRole$1);
	var _docPagebreakRole = _interopRequireDefault$5(docPagebreakRole$1);
	var _docPagelistRole = _interopRequireDefault$5(docPagelistRole$1);
	var _docPartRole = _interopRequireDefault$5(docPartRole$1);
	var _docPrefaceRole = _interopRequireDefault$5(docPrefaceRole$1);
	var _docPrologueRole = _interopRequireDefault$5(docPrologueRole$1);
	var _docPullquoteRole = _interopRequireDefault$5(docPullquoteRole$1);
	var _docQnaRole = _interopRequireDefault$5(docQnaRole$1);
	var _docSubtitleRole = _interopRequireDefault$5(docSubtitleRole$1);
	var _docTipRole = _interopRequireDefault$5(docTipRole$1);
	var _docTocRole = _interopRequireDefault$5(docTocRole$1);
	function _interopRequireDefault$5(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	var ariaDpubRoles = [['doc-abstract', _docAbstractRole.default], ['doc-acknowledgments', _docAcknowledgmentsRole.default], ['doc-afterword', _docAfterwordRole.default], ['doc-appendix', _docAppendixRole.default], ['doc-backlink', _docBacklinkRole.default], ['doc-biblioentry', _docBiblioentryRole.default], ['doc-bibliography', _docBibliographyRole.default], ['doc-biblioref', _docBibliorefRole.default], ['doc-chapter', _docChapterRole.default], ['doc-colophon', _docColophonRole.default], ['doc-conclusion', _docConclusionRole.default], ['doc-cover', _docCoverRole.default], ['doc-credit', _docCreditRole.default], ['doc-credits', _docCreditsRole.default], ['doc-dedication', _docDedicationRole.default], ['doc-endnote', _docEndnoteRole.default], ['doc-endnotes', _docEndnotesRole.default], ['doc-epigraph', _docEpigraphRole.default], ['doc-epilogue', _docEpilogueRole.default], ['doc-errata', _docErrataRole.default], ['doc-example', _docExampleRole.default], ['doc-footnote', _docFootnoteRole.default], ['doc-foreword', _docForewordRole.default], ['doc-glossary', _docGlossaryRole.default], ['doc-glossref', _docGlossrefRole.default], ['doc-index', _docIndexRole.default], ['doc-introduction', _docIntroductionRole.default], ['doc-noteref', _docNoterefRole.default], ['doc-notice', _docNoticeRole.default], ['doc-pagebreak', _docPagebreakRole.default], ['doc-pagelist', _docPagelistRole.default], ['doc-part', _docPartRole.default], ['doc-preface', _docPrefaceRole.default], ['doc-prologue', _docPrologueRole.default], ['doc-pullquote', _docPullquoteRole.default], ['doc-qna', _docQnaRole.default], ['doc-subtitle', _docSubtitleRole.default], ['doc-tip', _docTipRole.default], ['doc-toc', _docTocRole.default]];
	var _default$7 = ariaDpubRoles;
	ariaDpubRoles$1.default = _default$7;

	var ariaGraphicsRoles$1 = {};

	var graphicsDocumentRole$1 = {};

	Object.defineProperty(graphicsDocumentRole$1, "__esModule", {
	  value: true
	});
	graphicsDocumentRole$1.default = void 0;
	var graphicsDocumentRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    module: 'GRAPHICS',
	    concept: {
	      name: 'graphics-object'
	    }
	  }, {
	    module: 'ARIA',
	    concept: {
	      name: 'img'
	    }
	  }, {
	    module: 'ARIA',
	    concept: {
	      name: 'article'
	    }
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'document']]
	};
	var _default$6 = graphicsDocumentRole;
	graphicsDocumentRole$1.default = _default$6;

	var graphicsObjectRole$1 = {};

	Object.defineProperty(graphicsObjectRole$1, "__esModule", {
	  value: true
	});
	graphicsObjectRole$1.default = void 0;
	var graphicsObjectRole = {
	  abstract: false,
	  accessibleNameRequired: false,
	  baseConcepts: [],
	  childrenPresentational: false,
	  nameFrom: ['author', 'contents'],
	  prohibitedProps: [],
	  props: {
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [{
	    module: 'GRAPHICS',
	    concept: {
	      name: 'graphics-document'
	    }
	  }, {
	    module: 'ARIA',
	    concept: {
	      name: 'group'
	    }
	  }, {
	    module: 'ARIA',
	    concept: {
	      name: 'img'
	    }
	  }, {
	    module: 'GRAPHICS',
	    concept: {
	      name: 'graphics-symbol'
	    }
	  }],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'group']]
	};
	var _default$5 = graphicsObjectRole;
	graphicsObjectRole$1.default = _default$5;

	var graphicsSymbolRole$1 = {};

	Object.defineProperty(graphicsSymbolRole$1, "__esModule", {
	  value: true
	});
	graphicsSymbolRole$1.default = void 0;
	var graphicsSymbolRole = {
	  abstract: false,
	  accessibleNameRequired: true,
	  baseConcepts: [],
	  childrenPresentational: true,
	  nameFrom: ['author'],
	  prohibitedProps: [],
	  props: {
	    'aria-disabled': null,
	    'aria-errormessage': null,
	    'aria-expanded': null,
	    'aria-haspopup': null,
	    'aria-invalid': null
	  },
	  relatedConcepts: [],
	  requireContextRole: [],
	  requiredContextRole: [],
	  requiredOwnedElements: [],
	  requiredProps: {},
	  superClass: [['roletype', 'structure', 'section', 'img']]
	};
	var _default$4 = graphicsSymbolRole;
	graphicsSymbolRole$1.default = _default$4;

	Object.defineProperty(ariaGraphicsRoles$1, "__esModule", {
	  value: true
	});
	ariaGraphicsRoles$1.default = void 0;
	var _graphicsDocumentRole = _interopRequireDefault$4(graphicsDocumentRole$1);
	var _graphicsObjectRole = _interopRequireDefault$4(graphicsObjectRole$1);
	var _graphicsSymbolRole = _interopRequireDefault$4(graphicsSymbolRole$1);
	function _interopRequireDefault$4(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	var ariaGraphicsRoles = [['graphics-document', _graphicsDocumentRole.default], ['graphics-object', _graphicsObjectRole.default], ['graphics-symbol', _graphicsSymbolRole.default]];
	var _default$3 = ariaGraphicsRoles;
	ariaGraphicsRoles$1.default = _default$3;

	Object.defineProperty(rolesMap$1, "__esModule", {
	  value: true
	});
	rolesMap$1.default = void 0;
	var _ariaAbstractRoles = _interopRequireDefault$3(ariaAbstractRoles$1);
	var _ariaLiteralRoles = _interopRequireDefault$3(ariaLiteralRoles$1);
	var _ariaDpubRoles = _interopRequireDefault$3(ariaDpubRoles$1);
	var _ariaGraphicsRoles = _interopRequireDefault$3(ariaGraphicsRoles$1);
	var _iterationDecorator$2 = _interopRequireDefault$3(iterationDecorator$1);
	function _interopRequireDefault$3(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
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
	function _createForOfIteratorHelper$2(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e2) {
	          throw _e2;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function s() {
	      it = it.call(o);
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e3) {
	      didErr = true;
	      err = _e3;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _slicedToArray$2(arr, i) {
	  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
	}
	function _nonIterableRest$2() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _unsupportedIterableToArray$2(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
	}
	function _arrayLikeToArray$2(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }
	  return arr2;
	}
	function _iterableToArrayLimit$2(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
	function _arrayWithHoles$2(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	var roles$1 = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default, _ariaGraphicsRoles.default);
	roles$1.forEach(function (_ref) {
	  var _ref2 = _slicedToArray$2(_ref, 2),
	    roleDefinition = _ref2[1];
	  // Conglomerate the properties
	  var _iterator = _createForOfIteratorHelper$2(roleDefinition.superClass),
	    _step;
	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var superClassIter = _step.value;
	      var _iterator2 = _createForOfIteratorHelper$2(superClassIter),
	        _step2;
	      try {
	        var _loop = function _loop() {
	          var superClassName = _step2.value;
	          var superClassRoleTuple = roles$1.find(function (_ref3) {
	            var _ref4 = _slicedToArray$2(_ref3, 1),
	              name = _ref4[0];
	            return name === superClassName;
	          });
	          if (superClassRoleTuple) {
	            var superClassDefinition = superClassRoleTuple[1];
	            for (var _i2 = 0, _Object$keys = Object.keys(superClassDefinition.props); _i2 < _Object$keys.length; _i2++) {
	              var prop = _Object$keys[_i2];
	              if (
	              // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
	              !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
	                Object.assign(roleDefinition.props, _defineProperty({}, prop, superClassDefinition.props[prop]));
	              }
	            }
	          }
	        };
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          _loop();
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }
	});
	var rolesMap = {
	  entries: function entries() {
	    return roles$1;
	  },
	  forEach: function forEach(fn) {
	    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var _iterator3 = _createForOfIteratorHelper$2(roles$1),
	      _step3;
	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var _step3$value = _slicedToArray$2(_step3.value, 2),
	          key = _step3$value[0],
	          values = _step3$value[1];
	        fn.call(thisArg, values, key, roles$1);
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }
	  },
	  get: function get(key) {
	    var item = roles$1.find(function (tuple) {
	      return tuple[0] === key ? true : false;
	    });
	    return item && item[1];
	  },
	  has: function has(key) {
	    return !!rolesMap.get(key);
	  },
	  keys: function keys() {
	    return roles$1.map(function (_ref5) {
	      var _ref6 = _slicedToArray$2(_ref5, 1),
	        key = _ref6[0];
	      return key;
	    });
	  },
	  values: function values() {
	    return roles$1.map(function (_ref7) {
	      var _ref8 = _slicedToArray$2(_ref7, 2),
	        values = _ref8[1];
	      return values;
	    });
	  }
	};
	var _default$2 = (0, _iterationDecorator$2.default)(rolesMap, rolesMap.entries());
	rolesMap$1.default = _default$2;

	var elementRoleMap$1 = {};

	var toStr$9 = Object.prototype.toString;
	var isArguments$3 = function isArguments(value) {
	  var str = toStr$9.call(value);
	  var isArgs = str === '[object Arguments]';
	  if (!isArgs) {
	    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr$9.call(value.callee) === '[object Function]';
	  }
	  return isArgs;
	};

	var implementation$b;
	var hasRequiredImplementation;
	function requireImplementation() {
	  if (hasRequiredImplementation) return implementation$b;
	  hasRequiredImplementation = 1;
	  var keysShim;
	  if (!Object.keys) {
	    // modified from https://github.com/es-shims/es5-shim
	    var has = Object.prototype.hasOwnProperty;
	    var toStr = Object.prototype.toString;
	    var isArgs = isArguments$3; // eslint-disable-line global-require
	    var isEnumerable = Object.prototype.propertyIsEnumerable;
	    var hasDontEnumBug = !isEnumerable.call({
	      toString: null
	    }, 'toString');
	    var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	    var equalsConstructorPrototype = function (o) {
	      var ctor = o.constructor;
	      return ctor && ctor.prototype === o;
	    };
	    var excludedKeys = {
	      $applicationCache: true,
	      $console: true,
	      $external: true,
	      $frame: true,
	      $frameElement: true,
	      $frames: true,
	      $innerHeight: true,
	      $innerWidth: true,
	      $onmozfullscreenchange: true,
	      $onmozfullscreenerror: true,
	      $outerHeight: true,
	      $outerWidth: true,
	      $pageXOffset: true,
	      $pageYOffset: true,
	      $parent: true,
	      $scrollLeft: true,
	      $scrollTop: true,
	      $scrollX: true,
	      $scrollY: true,
	      $self: true,
	      $webkitIndexedDB: true,
	      $webkitStorageInfo: true,
	      $window: true
	    };
	    var hasAutomationEqualityBug = function () {
	      /* global window */
	      if (typeof window === 'undefined') {
	        return false;
	      }
	      for (var k in window) {
	        try {
	          if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
	            try {
	              equalsConstructorPrototype(window[k]);
	            } catch (e) {
	              return true;
	            }
	          }
	        } catch (e) {
	          return true;
	        }
	      }
	      return false;
	    }();
	    var equalsConstructorPrototypeIfNotBuggy = function (o) {
	      /* global window */
	      if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
	        return equalsConstructorPrototype(o);
	      }
	      try {
	        return equalsConstructorPrototype(o);
	      } catch (e) {
	        return false;
	      }
	    };
	    keysShim = function keys(object) {
	      var isObject = object !== null && typeof object === 'object';
	      var isFunction = toStr.call(object) === '[object Function]';
	      var isArguments = isArgs(object);
	      var isString = isObject && toStr.call(object) === '[object String]';
	      var theKeys = [];
	      if (!isObject && !isFunction && !isArguments) {
	        throw new TypeError('Object.keys called on a non-object');
	      }
	      var skipProto = hasProtoEnumBug && isFunction;
	      if (isString && object.length > 0 && !has.call(object, 0)) {
	        for (var i = 0; i < object.length; ++i) {
	          theKeys.push(String(i));
	        }
	      }
	      if (isArguments && object.length > 0) {
	        for (var j = 0; j < object.length; ++j) {
	          theKeys.push(String(j));
	        }
	      } else {
	        for (var name in object) {
	          if (!(skipProto && name === 'prototype') && has.call(object, name)) {
	            theKeys.push(String(name));
	          }
	        }
	      }
	      if (hasDontEnumBug) {
	        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	        for (var k = 0; k < dontEnums.length; ++k) {
	          if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
	            theKeys.push(dontEnums[k]);
	          }
	        }
	      }
	      return theKeys;
	    };
	  }
	  implementation$b = keysShim;
	  return implementation$b;
	}

	var slice = Array.prototype.slice;
	var isArgs = isArguments$3;
	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) {
	  return origKeys(o);
	} : requireImplementation();
	var originalKeys = Object.keys;
	keysShim.shim = function shimObjectKeys() {
	  if (Object.keys) {
	    var keysWorksWithArguments = function () {
	      // Safari 5.0 bug
	      var args = Object.keys(arguments);
	      return args && args.length === arguments.length;
	    }(1, 2);
	    if (!keysWorksWithArguments) {
	      Object.keys = function keys(object) {
	        // eslint-disable-line func-name-matching
	        if (isArgs(object)) {
	          return originalKeys(slice.call(object));
	        }
	        return originalKeys(object);
	      };
	    }
	  } else {
	    Object.keys = keysShim;
	  }
	  return Object.keys || keysShim;
	};
	var objectKeys$2 = keysShim;

	/** @type {import('.')} */
	var esErrors = Error;

	/** @type {import('./eval')} */
	var _eval = EvalError;

	/** @type {import('./range')} */
	var range = RangeError;

	/** @type {import('./ref')} */
	var ref = ReferenceError;

	/** @type {import('./syntax')} */
	var syntax = SyntaxError;

	/** @type {import('./type')} */
	var type = TypeError;

	/** @type {import('./uri')} */
	var uri = URIError;

	var shams$1;
	var hasRequiredShams;
	function requireShams() {
	  if (hasRequiredShams) return shams$1;
	  hasRequiredShams = 1;

	  /* eslint complexity: [2, 18], max-statements: [2, 33] */
	  shams$1 = function hasSymbols() {
	    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
	      return false;
	    }
	    if (typeof Symbol.iterator === 'symbol') {
	      return true;
	    }
	    var obj = {};
	    var sym = Symbol('test');
	    var symObj = Object(sym);
	    if (typeof sym === 'string') {
	      return false;
	    }
	    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
	      return false;
	    }
	    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
	      return false;
	    }

	    // temp disabled per https://github.com/ljharb/object.assign/issues/17
	    // if (sym instanceof Symbol) { return false; }
	    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	    // if (!(symObj instanceof Symbol)) { return false; }

	    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
	    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	    var symVal = 42;
	    obj[sym] = symVal;
	    for (sym in obj) {
	      return false;
	    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
	      return false;
	    }
	    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
	      return false;
	    }
	    var syms = Object.getOwnPropertySymbols(obj);
	    if (syms.length !== 1 || syms[0] !== sym) {
	      return false;
	    }
	    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
	      return false;
	    }
	    if (typeof Object.getOwnPropertyDescriptor === 'function') {
	      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
	      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
	        return false;
	      }
	    }
	    return true;
	  };
	  return shams$1;
	}

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams();
	var hasSymbols$5 = function hasNativeSymbols() {
	  if (typeof origSymbol !== 'function') {
	    return false;
	  }
	  if (typeof Symbol !== 'function') {
	    return false;
	  }
	  if (typeof origSymbol('foo') !== 'symbol') {
	    return false;
	  }
	  if (typeof Symbol('bar') !== 'symbol') {
	    return false;
	  }
	  return hasSymbolSham();
	};

	var test = {
	  __proto__: null,
	  foo: {}
	};
	var $Object$1 = Object;

	/** @type {import('.')} */
	var hasProto$1 = function hasProto() {
	  // @ts-expect-error: TS errors on an inherited property for some reason
	  return {
	    __proto__: test
	  }.foo === test.foo && !(test instanceof $Object$1);
	};

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr$8 = Object.prototype.toString;
	var max = Math.max;
	var funcType = '[object Function]';
	var concatty = function concatty(a, b) {
	  var arr = [];
	  for (var i = 0; i < a.length; i += 1) {
	    arr[i] = a[i];
	  }
	  for (var j = 0; j < b.length; j += 1) {
	    arr[j + a.length] = b[j];
	  }
	  return arr;
	};
	var slicy = function slicy(arrLike, offset) {
	  var arr = [];
	  for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
	    arr[j] = arrLike[i];
	  }
	  return arr;
	};
	var joiny = function (arr, joiner) {
	  var str = '';
	  for (var i = 0; i < arr.length; i += 1) {
	    str += arr[i];
	    if (i + 1 < arr.length) {
	      str += joiner;
	    }
	  }
	  return str;
	};
	var implementation$a = function bind(that) {
	  var target = this;
	  if (typeof target !== 'function' || toStr$8.apply(target) !== funcType) {
	    throw new TypeError(ERROR_MESSAGE + target);
	  }
	  var args = slicy(arguments, 1);
	  var bound;
	  var binder = function () {
	    if (this instanceof bound) {
	      var result = target.apply(this, concatty(args, arguments));
	      if (Object(result) === result) {
	        return result;
	      }
	      return this;
	    }
	    return target.apply(that, concatty(args, arguments));
	  };
	  var boundLength = max(0, target.length - args.length);
	  var boundArgs = [];
	  for (var i = 0; i < boundLength; i++) {
	    boundArgs[i] = '$' + i;
	  }
	  bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
	  if (target.prototype) {
	    var Empty = function Empty() {};
	    Empty.prototype = target.prototype;
	    bound.prototype = new Empty();
	    Empty.prototype = null;
	  }
	  return bound;
	};

	var implementation$9 = implementation$a;
	var functionBind = Function.prototype.bind || implementation$9;

	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind$1 = functionBind;

	/** @type {import('.')} */
	var hasown = bind$1.call(call, $hasOwn);

	var undefined$1;
	var $Error = esErrors;
	var $EvalError = _eval;
	var $RangeError = range;
	var $ReferenceError = ref;
	var $SyntaxError$2 = syntax;
	var $TypeError$6 = type;
	var $URIError = uri;
	var $Function = Function;

	// eslint-disable-next-line consistent-return
	var getEvalledConstructor = function (expressionSyntax) {
	  try {
	    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	  } catch (e) {}
	};
	var $gOPD$2 = Object.getOwnPropertyDescriptor;
	if ($gOPD$2) {
	  try {
	    $gOPD$2({}, '');
	  } catch (e) {
	    $gOPD$2 = null; // this is IE 8, which has a broken gOPD
	  }
	}
	var throwTypeError = function () {
	  throw new $TypeError$6();
	};
	var ThrowTypeError = $gOPD$2 ? function () {
	  try {
	    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
	    arguments.callee; // IE 8 does not throw here
	    return throwTypeError;
	  } catch (calleeThrows) {
	    try {
	      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
	      return $gOPD$2(arguments, 'callee').get;
	    } catch (gOPDthrows) {
	      return throwTypeError;
	    }
	  }
	}() : throwTypeError;
	var hasSymbols$4 = hasSymbols$5();
	var hasProto = hasProto$1();
	var getProto$1 = Object.getPrototypeOf || (hasProto ? function (x) {
	  return x.__proto__;
	} // eslint-disable-line no-proto
	: null);
	var needsEval = {};
	var TypedArray = typeof Uint8Array === 'undefined' || !getProto$1 ? undefined$1 : getProto$1(Uint8Array);
	var INTRINSICS = {
	  __proto__: null,
	  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	  '%Array%': Array,
	  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	  '%ArrayIteratorPrototype%': hasSymbols$4 && getProto$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
	  '%AsyncFromSyncIteratorPrototype%': undefined$1,
	  '%AsyncFunction%': needsEval,
	  '%AsyncGenerator%': needsEval,
	  '%AsyncGeneratorFunction%': needsEval,
	  '%AsyncIteratorPrototype%': needsEval,
	  '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	  '%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	  '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
	  '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
	  '%Boolean%': Boolean,
	  '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	  '%Date%': Date,
	  '%decodeURI%': decodeURI,
	  '%decodeURIComponent%': decodeURIComponent,
	  '%encodeURI%': encodeURI,
	  '%encodeURIComponent%': encodeURIComponent,
	  '%Error%': $Error,
	  '%eval%': eval,
	  // eslint-disable-line no-eval
	  '%EvalError%': $EvalError,
	  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	  '%Function%': $Function,
	  '%GeneratorFunction%': needsEval,
	  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	  '%isFinite%': isFinite,
	  '%isNaN%': isNaN,
	  '%IteratorPrototype%': hasSymbols$4 && getProto$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
	  '%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	  '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$4 || !getProto$1 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
	  '%Math%': Math,
	  '%Number%': Number,
	  '%Object%': Object,
	  '%parseFloat%': parseFloat,
	  '%parseInt%': parseInt,
	  '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	  '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	  '%RangeError%': $RangeError,
	  '%ReferenceError%': $ReferenceError,
	  '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	  '%RegExp%': RegExp,
	  '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$4 || !getProto$1 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
	  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	  '%String%': String,
	  '%StringIteratorPrototype%': hasSymbols$4 && getProto$1 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
	  '%Symbol%': hasSymbols$4 ? Symbol : undefined$1,
	  '%SyntaxError%': $SyntaxError$2,
	  '%ThrowTypeError%': ThrowTypeError,
	  '%TypedArray%': TypedArray,
	  '%TypeError%': $TypeError$6,
	  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	  '%URIError%': $URIError,
	  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
	};
	if (getProto$1) {
	  try {
	    null.error; // eslint-disable-line no-unused-expressions
	  } catch (e) {
	    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
	    var errorProto = getProto$1(getProto$1(e));
	    INTRINSICS['%Error.prototype%'] = errorProto;
	  }
	}
	var doEval = function doEval(name) {
	  var value;
	  if (name === '%AsyncFunction%') {
	    value = getEvalledConstructor('async function () {}');
	  } else if (name === '%GeneratorFunction%') {
	    value = getEvalledConstructor('function* () {}');
	  } else if (name === '%AsyncGeneratorFunction%') {
	    value = getEvalledConstructor('async function* () {}');
	  } else if (name === '%AsyncGenerator%') {
	    var fn = doEval('%AsyncGeneratorFunction%');
	    if (fn) {
	      value = fn.prototype;
	    }
	  } else if (name === '%AsyncIteratorPrototype%') {
	    var gen = doEval('%AsyncGenerator%');
	    if (gen && getProto$1) {
	      value = getProto$1(gen.prototype);
	    }
	  }
	  INTRINSICS[name] = value;
	  return value;
	};
	var LEGACY_ALIASES = {
	  __proto__: null,
	  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	  '%ArrayPrototype%': ['Array', 'prototype'],
	  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
	  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	  '%BooleanPrototype%': ['Boolean', 'prototype'],
	  '%DataViewPrototype%': ['DataView', 'prototype'],
	  '%DatePrototype%': ['Date', 'prototype'],
	  '%ErrorPrototype%': ['Error', 'prototype'],
	  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
	  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	  '%FunctionPrototype%': ['Function', 'prototype'],
	  '%Generator%': ['GeneratorFunction', 'prototype'],
	  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	  '%JSONParse%': ['JSON', 'parse'],
	  '%JSONStringify%': ['JSON', 'stringify'],
	  '%MapPrototype%': ['Map', 'prototype'],
	  '%NumberPrototype%': ['Number', 'prototype'],
	  '%ObjectPrototype%': ['Object', 'prototype'],
	  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	  '%PromisePrototype%': ['Promise', 'prototype'],
	  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	  '%Promise_all%': ['Promise', 'all'],
	  '%Promise_reject%': ['Promise', 'reject'],
	  '%Promise_resolve%': ['Promise', 'resolve'],
	  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
	  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	  '%RegExpPrototype%': ['RegExp', 'prototype'],
	  '%SetPrototype%': ['Set', 'prototype'],
	  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	  '%StringPrototype%': ['String', 'prototype'],
	  '%SymbolPrototype%': ['Symbol', 'prototype'],
	  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
	  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	  '%URIErrorPrototype%': ['URIError', 'prototype'],
	  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
	  '%WeakSetPrototype%': ['WeakSet', 'prototype']
	};
	var bind = functionBind;
	var hasOwn$2 = hasown;
	var $concat$1 = bind.call(Function.call, Array.prototype.concat);
	var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
	var $replace$1 = bind.call(Function.call, String.prototype.replace);
	var $strSlice = bind.call(Function.call, String.prototype.slice);
	var $exec$1 = bind.call(Function.call, RegExp.prototype.exec);

	/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
	var stringToPath = function stringToPath(string) {
	  var first = $strSlice(string, 0, 1);
	  var last = $strSlice(string, -1);
	  if (first === '%' && last !== '%') {
	    throw new $SyntaxError$2('invalid intrinsic syntax, expected closing `%`');
	  } else if (last === '%' && first !== '%') {
	    throw new $SyntaxError$2('invalid intrinsic syntax, expected opening `%`');
	  }
	  var result = [];
	  $replace$1(string, rePropName, function (match, number, quote, subString) {
	    result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
	  });
	  return result;
	};
	/* end adaptation */

	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	  var intrinsicName = name;
	  var alias;
	  if (hasOwn$2(LEGACY_ALIASES, intrinsicName)) {
	    alias = LEGACY_ALIASES[intrinsicName];
	    intrinsicName = '%' + alias[0] + '%';
	  }
	  if (hasOwn$2(INTRINSICS, intrinsicName)) {
	    var value = INTRINSICS[intrinsicName];
	    if (value === needsEval) {
	      value = doEval(intrinsicName);
	    }
	    if (typeof value === 'undefined' && !allowMissing) {
	      throw new $TypeError$6('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	    }
	    return {
	      alias: alias,
	      name: intrinsicName,
	      value: value
	    };
	  }
	  throw new $SyntaxError$2('intrinsic ' + name + ' does not exist!');
	};
	var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	  if (typeof name !== 'string' || name.length === 0) {
	    throw new $TypeError$6('intrinsic name must be a non-empty string');
	  }
	  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
	    throw new $TypeError$6('"allowMissing" argument must be a boolean');
	  }
	  if ($exec$1(/^%?[^%]*%?$/, name) === null) {
	    throw new $SyntaxError$2('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	  }
	  var parts = stringToPath(name);
	  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
	  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	  var intrinsicRealName = intrinsic.name;
	  var value = intrinsic.value;
	  var skipFurtherCaching = false;
	  var alias = intrinsic.alias;
	  if (alias) {
	    intrinsicBaseName = alias[0];
	    $spliceApply(parts, $concat$1([0, 1], alias));
	  }
	  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
	    var part = parts[i];
	    var first = $strSlice(part, 0, 1);
	    var last = $strSlice(part, -1);
	    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
	      throw new $SyntaxError$2('property names with quotes must have matching quotes');
	    }
	    if (part === 'constructor' || !isOwn) {
	      skipFurtherCaching = true;
	    }
	    intrinsicBaseName += '.' + part;
	    intrinsicRealName = '%' + intrinsicBaseName + '%';
	    if (hasOwn$2(INTRINSICS, intrinsicRealName)) {
	      value = INTRINSICS[intrinsicRealName];
	    } else if (value != null) {
	      if (!(part in value)) {
	        if (!allowMissing) {
	          throw new $TypeError$6('base intrinsic for ' + name + ' exists, but the property is not available.');
	        }
	        return void undefined$1;
	      }
	      if ($gOPD$2 && i + 1 >= parts.length) {
	        var desc = $gOPD$2(value, part);
	        isOwn = !!desc;

	        // By convention, when a data property is converted to an accessor
	        // property to emulate a data property that does not suffer from
	        // the override mistake, that accessor's getter is marked with
	        // an `originalValue` property. Here, when we detect this, we
	        // uphold the illusion by pretending to see that original data
	        // property, i.e., returning the value rather than the getter
	        // itself.
	        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
	          value = desc.get;
	        } else {
	          value = value[part];
	        }
	      } else {
	        isOwn = hasOwn$2(value, part);
	        value = value[part];
	      }
	      if (isOwn && !skipFurtherCaching) {
	        INTRINSICS[intrinsicRealName] = value;
	      }
	    }
	  }
	  return value;
	};

	var esDefineProperty;
	var hasRequiredEsDefineProperty;
	function requireEsDefineProperty() {
	  if (hasRequiredEsDefineProperty) return esDefineProperty;
	  hasRequiredEsDefineProperty = 1;
	  var GetIntrinsic = getIntrinsic;

	  /** @type {import('.')} */
	  var $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;
	  if ($defineProperty) {
	    try {
	      $defineProperty({}, 'a', {
	        value: 1
	      });
	    } catch (e) {
	      // IE 8 has a broken defineProperty
	      $defineProperty = false;
	    }
	  }
	  esDefineProperty = $defineProperty;
	  return esDefineProperty;
	}

	var GetIntrinsic$7 = getIntrinsic;
	var $gOPD$1 = GetIntrinsic$7('%Object.getOwnPropertyDescriptor%', true);
	if ($gOPD$1) {
	  try {
	    $gOPD$1([], 'length');
	  } catch (e) {
	    // IE 8 has a broken gOPD
	    $gOPD$1 = null;
	  }
	}
	var gopd$1 = $gOPD$1;

	var $defineProperty$1 = requireEsDefineProperty();
	var $SyntaxError$1 = syntax;
	var $TypeError$5 = type;
	var gopd = gopd$1;

	/** @type {import('.')} */
	var defineDataProperty$1 = function defineDataProperty(obj, property, value) {
	  if (!obj || typeof obj !== 'object' && typeof obj !== 'function') {
	    throw new $TypeError$5('`obj` must be an object or a function`');
	  }
	  if (typeof property !== 'string' && typeof property !== 'symbol') {
	    throw new $TypeError$5('`property` must be a string or a symbol`');
	  }
	  if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
	    throw new $TypeError$5('`nonEnumerable`, if provided, must be a boolean or null');
	  }
	  if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
	    throw new $TypeError$5('`nonWritable`, if provided, must be a boolean or null');
	  }
	  if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
	    throw new $TypeError$5('`nonConfigurable`, if provided, must be a boolean or null');
	  }
	  if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
	    throw new $TypeError$5('`loose`, if provided, must be a boolean');
	  }
	  var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	  var nonWritable = arguments.length > 4 ? arguments[4] : null;
	  var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	  var loose = arguments.length > 6 ? arguments[6] : false;

	  /* @type {false | TypedPropertyDescriptor<unknown>} */
	  var desc = !!gopd && gopd(obj, property);
	  if ($defineProperty$1) {
	    $defineProperty$1(obj, property, {
	      configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
	      enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
	      value: value,
	      writable: nonWritable === null && desc ? desc.writable : !nonWritable
	    });
	  } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
	    // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
	    obj[property] = value; // eslint-disable-line no-param-reassign
	  } else {
	    throw new $SyntaxError$1('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	  }
	};

	var $defineProperty = requireEsDefineProperty();
	var hasPropertyDescriptors = function hasPropertyDescriptors() {
	  return !!$defineProperty;
	};
	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	  // node v0.6 has a bug where array lengths can be Set but not Defined
	  if (!$defineProperty) {
	    return null;
	  }
	  try {
	    return $defineProperty([], 'length', {
	      value: 1
	    }).length !== 1;
	  } catch (e) {
	    // In Firefox 4-22, defining length on an array throws an exception.
	    return true;
	  }
	};
	var hasPropertyDescriptors_1 = hasPropertyDescriptors;

	var keys$2 = objectKeys$2;
	var hasSymbols$3 = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
	var toStr$7 = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var defineDataProperty = defineDataProperty$1;
	var isFunction = function (fn) {
	  return typeof fn === 'function' && toStr$7.call(fn) === '[object Function]';
	};
	var supportsDescriptors$2 = hasPropertyDescriptors_1();
	var defineProperty$1 = function (object, name, value, predicate) {
	  if (name in object) {
	    if (predicate === true) {
	      if (object[name] === value) {
	        return;
	      }
	    } else if (!isFunction(predicate) || !predicate()) {
	      return;
	    }
	  }
	  if (supportsDescriptors$2) {
	    defineDataProperty(object, name, value, true);
	  } else {
	    defineDataProperty(object, name, value);
	  }
	};
	var defineProperties$1 = function (object, map) {
	  var predicates = arguments.length > 2 ? arguments[2] : {};
	  var props = keys$2(map);
	  if (hasSymbols$3) {
	    props = concat.call(props, Object.getOwnPropertySymbols(map));
	  }
	  for (var i = 0; i < props.length; i += 1) {
	    defineProperty$1(object, props[i], map[props[i]], predicates[props[i]]);
	  }
	};
	defineProperties$1.supportsDescriptors = !!supportsDescriptors$2;
	var defineProperties_1 = defineProperties$1;

	var callBind$6 = {exports: {}};

	var GetIntrinsic$6 = getIntrinsic;
	var define$5 = defineDataProperty$1;
	var hasDescriptors$1 = hasPropertyDescriptors_1();
	var gOPD$4 = gopd$1;
	var $TypeError$4 = type;
	var $floor$1 = GetIntrinsic$6('%Math.floor%');

	/** @type {import('.')} */
	var setFunctionLength = function setFunctionLength(fn, length) {
	  if (typeof fn !== 'function') {
	    throw new $TypeError$4('`fn` is not a function');
	  }
	  if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor$1(length) !== length) {
	    throw new $TypeError$4('`length` must be a positive 32-bit integer');
	  }
	  var loose = arguments.length > 2 && !!arguments[2];
	  var functionLengthIsConfigurable = true;
	  var functionLengthIsWritable = true;
	  if ('length' in fn && gOPD$4) {
	    var desc = gOPD$4(fn, 'length');
	    if (desc && !desc.configurable) {
	      functionLengthIsConfigurable = false;
	    }
	    if (desc && !desc.writable) {
	      functionLengthIsWritable = false;
	    }
	  }
	  if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
	    if (hasDescriptors$1) {
	      define$5( /** @type {Parameters<define>[0]} */fn, 'length', length, true, true);
	    } else {
	      define$5( /** @type {Parameters<define>[0]} */fn, 'length', length);
	    }
	  }
	  return fn;
	};

	(function (module) {

	  var bind = functionBind;
	  var GetIntrinsic = getIntrinsic;
	  var setFunctionLength$1 = setFunctionLength;
	  var $TypeError = type;
	  var $apply = GetIntrinsic('%Function.prototype.apply%');
	  var $call = GetIntrinsic('%Function.prototype.call%');
	  var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
	  var $defineProperty = requireEsDefineProperty();
	  var $max = GetIntrinsic('%Math.max%');
	  module.exports = function callBind(originalFunction) {
	    if (typeof originalFunction !== 'function') {
	      throw new $TypeError('a function is required');
	    }
	    var func = $reflectApply(bind, $call, arguments);
	    return setFunctionLength$1(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
	  };
	  var applyBind = function applyBind() {
	    return $reflectApply(bind, $apply, arguments);
	  };
	  if ($defineProperty) {
	    $defineProperty(module.exports, 'apply', {
	      value: applyBind
	    });
	  } else {
	    module.exports.apply = applyBind;
	  }
	})(callBind$6);

	var GetIntrinsic$5 = getIntrinsic;
	var callBind$5 = callBind$6.exports;
	var $indexOf$1 = callBind$5(GetIntrinsic$5('String.prototype.indexOf'));
	var callBound$c = function callBoundIntrinsic(name, allowMissing) {
	  var intrinsic = GetIntrinsic$5(name, !!allowMissing);
	  if (typeof intrinsic === 'function' && $indexOf$1(name, '.prototype.') > -1) {
	    return callBind$5(intrinsic);
	  }
	  return intrinsic;
	};

	// modified from https://github.com/es-shims/es6-shim
	var objectKeys$1 = objectKeys$2;
	var hasSymbols$2 = requireShams()();
	var callBound$b = callBound$c;
	var toObject = Object;
	var $push = callBound$b('Array.prototype.push');
	var $propIsEnumerable = callBound$b('Object.prototype.propertyIsEnumerable');
	var originalGetSymbols = hasSymbols$2 ? Object.getOwnPropertySymbols : null;

	// eslint-disable-next-line no-unused-vars
	var implementation$8 = function assign(target, source1) {
	  if (target == null) {
	    throw new TypeError('target must be an object');
	  }
	  var to = toObject(target); // step 1
	  if (arguments.length === 1) {
	    return to; // step 2
	  }
	  for (var s = 1; s < arguments.length; ++s) {
	    var from = toObject(arguments[s]); // step 3.a.i

	    // step 3.a.ii:
	    var keys = objectKeys$1(from);
	    var getSymbols = hasSymbols$2 && (Object.getOwnPropertySymbols || originalGetSymbols);
	    if (getSymbols) {
	      var syms = getSymbols(from);
	      for (var j = 0; j < syms.length; ++j) {
	        var key = syms[j];
	        if ($propIsEnumerable(from, key)) {
	          $push(keys, key);
	        }
	      }
	    }

	    // step 3.a.iii:
	    for (var i = 0; i < keys.length; ++i) {
	      var nextKey = keys[i];
	      if ($propIsEnumerable(from, nextKey)) {
	        // step 3.a.iii.2
	        var propValue = from[nextKey]; // step 3.a.iii.2.a
	        to[nextKey] = propValue; // step 3.a.iii.2.b
	      }
	    }
	  }
	  return to; // step 4
	};

	var implementation$7 = implementation$8;
	var lacksProperEnumerationOrder = function () {
	  if (!Object.assign) {
	    return false;
	  }
	  /*
	   * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	   * note: this does not detect the bug unless there's 20 characters
	   */
	  var str = 'abcdefghijklmnopqrst';
	  var letters = str.split('');
	  var map = {};
	  for (var i = 0; i < letters.length; ++i) {
	    map[letters[i]] = letters[i];
	  }
	  var obj = Object.assign({}, map);
	  var actual = '';
	  for (var k in obj) {
	    actual += k;
	  }
	  return str !== actual;
	};
	var assignHasPendingExceptions = function () {
	  if (!Object.assign || !Object.preventExtensions) {
	    return false;
	  }
	  /*
	   * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	   * which is 72% slower than our shim, and Firefox 40's native implementation.
	   */
	  var thrower = Object.preventExtensions({
	    1: 2
	  });
	  try {
	    Object.assign(thrower, 'xy');
	  } catch (e) {
	    return thrower[1] === 'y';
	  }
	  return false;
	};
	var polyfill$4 = function getPolyfill() {
	  if (!Object.assign) {
	    return implementation$7;
	  }
	  if (lacksProperEnumerationOrder()) {
	    return implementation$7;
	  }
	  if (assignHasPendingExceptions()) {
	    return implementation$7;
	  }
	  return Object.assign;
	};

	var define$4 = defineProperties_1;
	var getPolyfill$5 = polyfill$4;
	var shim$5 = function shimAssign() {
	  var polyfill = getPolyfill$5();
	  define$4(Object, {
	    assign: polyfill
	  }, {
	    assign: function () {
	      return Object.assign !== polyfill;
	    }
	  });
	  return polyfill;
	};

	var defineProperties = defineProperties_1;
	var callBind$4 = callBind$6.exports;
	var implementation$6 = implementation$8;
	var getPolyfill$4 = polyfill$4;
	var shim$4 = shim$5;
	var polyfill$3 = callBind$4.apply(getPolyfill$4());
	// eslint-disable-next-line no-unused-vars
	var bound = function assign(target, source1) {
	  return polyfill$3(Object, arguments);
	};
	defineProperties(bound, {
	  getPolyfill: getPolyfill$4,
	  implementation: implementation$6,
	  shim: shim$4
	});
	var object_assign = bound;

	var functionsHaveNames = function functionsHaveNames() {
	  return typeof function f() {}.name === 'string';
	};
	var gOPD$3 = Object.getOwnPropertyDescriptor;
	if (gOPD$3) {
	  try {
	    gOPD$3([], 'length');
	  } catch (e) {
	    // IE 8 has a broken gOPD
	    gOPD$3 = null;
	  }
	}
	functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	  if (!functionsHaveNames() || !gOPD$3) {
	    return false;
	  }
	  var desc = gOPD$3(function () {}, 'name');
	  return !!desc && !!desc.configurable;
	};
	var $bind = Function.prototype.bind;
	functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	  return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
	};
	var functionsHaveNames_1 = functionsHaveNames;

	var define$3 = defineDataProperty$1;
	var hasDescriptors = hasPropertyDescriptors_1();
	var functionsHaveConfigurableNames = functionsHaveNames_1.functionsHaveConfigurableNames();
	var $TypeError$3 = type;

	/** @type {import('.')} */
	var setFunctionName$1 = function setFunctionName(fn, name) {
	  if (typeof fn !== 'function') {
	    throw new $TypeError$3('`fn` is not a function');
	  }
	  var loose = arguments.length > 2 && !!arguments[2];
	  if (!loose || functionsHaveConfigurableNames) {
	    if (hasDescriptors) {
	      define$3( /** @type {Parameters<define>[0]} */fn, 'name', name, true, true);
	    } else {
	      define$3( /** @type {Parameters<define>[0]} */fn, 'name', name);
	    }
	  }
	  return fn;
	};

	var setFunctionName = setFunctionName$1;
	var $TypeError$2 = type;
	var $Object = Object;
	var implementation$5 = setFunctionName(function flags() {
	  if (this == null || this !== $Object(this)) {
	    throw new $TypeError$2('RegExp.prototype.flags getter called on non-object');
	  }
	  var result = '';
	  if (this.hasIndices) {
	    result += 'd';
	  }
	  if (this.global) {
	    result += 'g';
	  }
	  if (this.ignoreCase) {
	    result += 'i';
	  }
	  if (this.multiline) {
	    result += 'm';
	  }
	  if (this.dotAll) {
	    result += 's';
	  }
	  if (this.unicode) {
	    result += 'u';
	  }
	  if (this.unicodeSets) {
	    result += 'v';
	  }
	  if (this.sticky) {
	    result += 'y';
	  }
	  return result;
	}, 'get flags', true);

	var implementation$4 = implementation$5;
	var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
	var $gOPD = Object.getOwnPropertyDescriptor;
	var polyfill$2 = function getPolyfill() {
	  if (supportsDescriptors$1 && /a/mig.flags === 'gim') {
	    var descriptor = $gOPD(RegExp.prototype, 'flags');
	    if (descriptor && typeof descriptor.get === 'function' && typeof RegExp.prototype.dotAll === 'boolean' && typeof RegExp.prototype.hasIndices === 'boolean') {
	      /* eslint getter-return: 0 */
	      var calls = '';
	      var o = {};
	      Object.defineProperty(o, 'hasIndices', {
	        get: function () {
	          calls += 'd';
	        }
	      });
	      Object.defineProperty(o, 'sticky', {
	        get: function () {
	          calls += 'y';
	        }
	      });
	      if (calls === 'dy') {
	        return descriptor.get;
	      }
	    }
	  }
	  return implementation$4;
	};

	var supportsDescriptors = defineProperties_1.supportsDescriptors;
	var getPolyfill$3 = polyfill$2;
	var gOPD$2 = Object.getOwnPropertyDescriptor;
	var defineProperty = Object.defineProperty;
	var TypeErr = TypeError;
	var getProto = Object.getPrototypeOf;
	var regex = /a/;
	var shim$3 = function shimFlags() {
	  if (!supportsDescriptors || !getProto) {
	    throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	  }
	  var polyfill = getPolyfill$3();
	  var proto = getProto(regex);
	  var descriptor = gOPD$2(proto, 'flags');
	  if (!descriptor || descriptor.get !== polyfill) {
	    defineProperty(proto, 'flags', {
	      configurable: true,
	      enumerable: false,
	      get: polyfill
	    });
	  }
	  return polyfill;
	};

	var define$2 = defineProperties_1;
	var callBind$3 = callBind$6.exports;
	var implementation$3 = implementation$5;
	var getPolyfill$2 = polyfill$2;
	var shim$2 = shim$3;
	var flagsBound = callBind$3(getPolyfill$2());
	define$2(flagsBound, {
	  getPolyfill: getPolyfill$2,
	  implementation: implementation$3,
	  shim: shim$2
	});
	var regexp_prototype_flags = flagsBound;

	var esGetIterator = {exports: {}};

	var hasSymbols$1 = requireShams();

	/** @type {import('.')} */
	var shams = function hasToStringTagShams() {
	  return hasSymbols$1() && !!Symbol.toStringTag;
	};

	var hasToStringTag$7 = shams();
	var callBound$a = callBound$c;
	var $toString$4 = callBound$a('Object.prototype.toString');
	var isStandardArguments = function isArguments(value) {
	  if (hasToStringTag$7 && value && typeof value === 'object' && Symbol.toStringTag in value) {
	    return false;
	  }
	  return $toString$4(value) === '[object Arguments]';
	};
	var isLegacyArguments = function isArguments(value) {
	  if (isStandardArguments(value)) {
	    return true;
	  }
	  return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString$4(value) !== '[object Array]' && $toString$4(value.callee) === '[object Function]';
	};
	var supportsStandardArguments = function () {
	  return isStandardArguments(arguments);
	}();
	isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

	var isArguments$2 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
	var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
	var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
	var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
	var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
	var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	var functionToString = Function.prototype.toString;
	var $match = String.prototype.match;
	var $slice$1 = String.prototype.slice;
	var $replace = String.prototype.replace;
	var $toUpperCase = String.prototype.toUpperCase;
	var $toLowerCase = String.prototype.toLowerCase;
	var $test = RegExp.prototype.test;
	var $concat = Array.prototype.concat;
	var $join = Array.prototype.join;
	var $arrSlice = Array.prototype.slice;
	var $floor = Math.floor;
	var bigIntValueOf$1 = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
	var gOPS = Object.getOwnPropertySymbols;
	var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
	var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
	// ie, `has-tostringtag/shams
	var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var gPO$1 = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
	? function (O) {
	  return O.__proto__; // eslint-disable-line no-proto
	} : null);
	function addNumericSeparator(num, str) {
	  if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
	    return str;
	  }
	  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
	  if (typeof num === 'number') {
	    var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
	    if (int !== num) {
	      var intStr = String(int);
	      var dec = $slice$1.call(str, intStr.length + 1);
	      return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
	    }
	  }
	  return $replace.call(str, sepRegex, '$&_');
	}
	var utilInspect = require$$0;
	var inspectCustom = utilInspect.custom;
	var inspectSymbol = isSymbol$2(inspectCustom) ? inspectCustom : null;
	var objectInspect = function inspect_(obj, options, depth, seen) {
	  var opts = options || {};
	  if (has$1(opts, 'quoteStyle') && opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double') {
	    throw new TypeError('option "quoteStyle" must be "single" or "double"');
	  }
	  if (has$1(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
	    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
	  }
	  var customInspect = has$1(opts, 'customInspect') ? opts.customInspect : true;
	  if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
	    throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
	  }
	  if (has$1(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
	    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
	  }
	  if (has$1(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
	    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
	  }
	  var numericSeparator = opts.numericSeparator;
	  if (typeof obj === 'undefined') {
	    return 'undefined';
	  }
	  if (obj === null) {
	    return 'null';
	  }
	  if (typeof obj === 'boolean') {
	    return obj ? 'true' : 'false';
	  }
	  if (typeof obj === 'string') {
	    return inspectString(obj, opts);
	  }
	  if (typeof obj === 'number') {
	    if (obj === 0) {
	      return Infinity / obj > 0 ? '0' : '-0';
	    }
	    var str = String(obj);
	    return numericSeparator ? addNumericSeparator(obj, str) : str;
	  }
	  if (typeof obj === 'bigint') {
	    var bigIntStr = String(obj) + 'n';
	    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
	  }
	  var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
	  if (typeof depth === 'undefined') {
	    depth = 0;
	  }
	  if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
	    return isArray$2(obj) ? '[Array]' : '[Object]';
	  }
	  var indent = getIndent(opts, depth);
	  if (typeof seen === 'undefined') {
	    seen = [];
	  } else if (indexOf(seen, obj) >= 0) {
	    return '[Circular]';
	  }
	  function inspect(value, from, noIndent) {
	    if (from) {
	      seen = $arrSlice.call(seen);
	      seen.push(from);
	    }
	    if (noIndent) {
	      var newOpts = {
	        depth: opts.depth
	      };
	      if (has$1(opts, 'quoteStyle')) {
	        newOpts.quoteStyle = opts.quoteStyle;
	      }
	      return inspect_(value, newOpts, depth + 1, seen);
	    }
	    return inspect_(value, opts, depth + 1, seen);
	  }
	  if (typeof obj === 'function' && !isRegExp(obj)) {
	    // in older engines, regexes are callable
	    var name = nameOf(obj);
	    var keys = arrObjKeys(obj, inspect);
	    return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
	  }
	  if (isSymbol$2(obj)) {
	    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
	    return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
	  }
	  if (isElement(obj)) {
	    var s = '<' + $toLowerCase.call(String(obj.nodeName));
	    var attrs = obj.attributes || [];
	    for (var i = 0; i < attrs.length; i++) {
	      s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
	    }
	    s += '>';
	    if (obj.childNodes && obj.childNodes.length) {
	      s += '...';
	    }
	    s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
	    return s;
	  }
	  if (isArray$2(obj)) {
	    if (obj.length === 0) {
	      return '[]';
	    }
	    var xs = arrObjKeys(obj, inspect);
	    if (indent && !singleLineValues(xs)) {
	      return '[' + indentedJoin(xs, indent) + ']';
	    }
	    return '[ ' + $join.call(xs, ', ') + ' ]';
	  }
	  if (isError(obj)) {
	    var parts = arrObjKeys(obj, inspect);
	    if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
	      return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
	    }
	    if (parts.length === 0) {
	      return '[' + String(obj) + ']';
	    }
	    return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
	  }
	  if (typeof obj === 'object' && customInspect) {
	    if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
	      return utilInspect(obj, {
	        depth: maxDepth - depth
	      });
	    } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
	      return obj.inspect();
	    }
	  }
	  if (isMap$3(obj)) {
	    var mapParts = [];
	    if (mapForEach) {
	      mapForEach.call(obj, function (value, key) {
	        mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
	      });
	    }
	    return collectionOf('Map', mapSize.call(obj), mapParts, indent);
	  }
	  if (isSet$3(obj)) {
	    var setParts = [];
	    if (setForEach) {
	      setForEach.call(obj, function (value) {
	        setParts.push(inspect(value, obj));
	      });
	    }
	    return collectionOf('Set', setSize.call(obj), setParts, indent);
	  }
	  if (isWeakMap$1(obj)) {
	    return weakCollectionOf('WeakMap');
	  }
	  if (isWeakSet$1(obj)) {
	    return weakCollectionOf('WeakSet');
	  }
	  if (isWeakRef(obj)) {
	    return weakCollectionOf('WeakRef');
	  }
	  if (isNumber$1(obj)) {
	    return markBoxed(inspect(Number(obj)));
	  }
	  if (isBigInt$1(obj)) {
	    return markBoxed(inspect(bigIntValueOf$1.call(obj)));
	  }
	  if (isBoolean$1(obj)) {
	    return markBoxed(booleanValueOf.call(obj));
	  }
	  if (isString$3(obj)) {
	    return markBoxed(inspect(String(obj)));
	  }
	  // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
	  /* eslint-env browser */
	  if (typeof window !== 'undefined' && obj === window) {
	    return '{ [object Window] }';
	  }
	  if (obj === commonjsGlobal) {
	    return '{ [object globalThis] }';
	  }
	  if (!isDate$1(obj) && !isRegExp(obj)) {
	    var ys = arrObjKeys(obj, inspect);
	    var isPlainObject = gPO$1 ? gPO$1(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
	    var protoTag = obj instanceof Object ? '' : 'null prototype';
	    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice$1.call(toStr$6(obj), 8, -1) : protoTag ? 'Object' : '';
	    var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
	    var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
	    if (ys.length === 0) {
	      return tag + '{}';
	    }
	    if (indent) {
	      return tag + '{' + indentedJoin(ys, indent) + '}';
	    }
	    return tag + '{ ' + $join.call(ys, ', ') + ' }';
	  }
	  return String(obj);
	};
	function wrapQuotes(s, defaultStyle, opts) {
	  var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
	  return quoteChar + s + quoteChar;
	}
	function quote(s) {
	  return $replace.call(String(s), /"/g, '&quot;');
	}
	function isArray$2(obj) {
	  return toStr$6(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isDate$1(obj) {
	  return toStr$6(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isRegExp(obj) {
	  return toStr$6(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isError(obj) {
	  return toStr$6(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isString$3(obj) {
	  return toStr$6(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isNumber$1(obj) {
	  return toStr$6(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}
	function isBoolean$1(obj) {
	  return toStr$6(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
	}

	// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
	function isSymbol$2(obj) {
	  if (hasShammedSymbols) {
	    return obj && typeof obj === 'object' && obj instanceof Symbol;
	  }
	  if (typeof obj === 'symbol') {
	    return true;
	  }
	  if (!obj || typeof obj !== 'object' || !symToString) {
	    return false;
	  }
	  try {
	    symToString.call(obj);
	    return true;
	  } catch (e) {}
	  return false;
	}
	function isBigInt$1(obj) {
	  if (!obj || typeof obj !== 'object' || !bigIntValueOf$1) {
	    return false;
	  }
	  try {
	    bigIntValueOf$1.call(obj);
	    return true;
	  } catch (e) {}
	  return false;
	}
	var hasOwn$1 = Object.prototype.hasOwnProperty || function (key) {
	  return key in this;
	};
	function has$1(obj, key) {
	  return hasOwn$1.call(obj, key);
	}
	function toStr$6(obj) {
	  return objectToString.call(obj);
	}
	function nameOf(f) {
	  if (f.name) {
	    return f.name;
	  }
	  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
	  if (m) {
	    return m[1];
	  }
	  return null;
	}
	function indexOf(xs, x) {
	  if (xs.indexOf) {
	    return xs.indexOf(x);
	  }
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) {
	      return i;
	    }
	  }
	  return -1;
	}
	function isMap$3(x) {
	  if (!mapSize || !x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    mapSize.call(x);
	    try {
	      setSize.call(x);
	    } catch (s) {
	      return true;
	    }
	    return x instanceof Map; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	}
	function isWeakMap$1(x) {
	  if (!weakMapHas || !x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    weakMapHas.call(x, weakMapHas);
	    try {
	      weakSetHas.call(x, weakSetHas);
	    } catch (s) {
	      return true;
	    }
	    return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	}
	function isWeakRef(x) {
	  if (!weakRefDeref || !x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    weakRefDeref.call(x);
	    return true;
	  } catch (e) {}
	  return false;
	}
	function isSet$3(x) {
	  if (!setSize || !x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    setSize.call(x);
	    try {
	      mapSize.call(x);
	    } catch (m) {
	      return true;
	    }
	    return x instanceof Set; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	}
	function isWeakSet$1(x) {
	  if (!weakSetHas || !x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    weakSetHas.call(x, weakSetHas);
	    try {
	      weakMapHas.call(x, weakMapHas);
	    } catch (s) {
	      return true;
	    }
	    return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	}
	function isElement(x) {
	  if (!x || typeof x !== 'object') {
	    return false;
	  }
	  if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	    return true;
	  }
	  return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
	}
	function inspectString(str, opts) {
	  if (str.length > opts.maxStringLength) {
	    var remaining = str.length - opts.maxStringLength;
	    var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
	    return inspectString($slice$1.call(str, 0, opts.maxStringLength), opts) + trailer;
	  }
	  // eslint-disable-next-line no-control-regex
	  var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
	  return wrapQuotes(s, 'single', opts);
	}
	function lowbyte(c) {
	  var n = c.charCodeAt(0);
	  var x = {
	    8: 'b',
	    9: 't',
	    10: 'n',
	    12: 'f',
	    13: 'r'
	  }[n];
	  if (x) {
	    return '\\' + x;
	  }
	  return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
	}
	function markBoxed(str) {
	  return 'Object(' + str + ')';
	}
	function weakCollectionOf(type) {
	  return type + ' { ? }';
	}
	function collectionOf(type, size, entries, indent) {
	  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
	  return type + ' (' + size + ') {' + joinedEntries + '}';
	}
	function singleLineValues(xs) {
	  for (var i = 0; i < xs.length; i++) {
	    if (indexOf(xs[i], '\n') >= 0) {
	      return false;
	    }
	  }
	  return true;
	}
	function getIndent(opts, depth) {
	  var baseIndent;
	  if (opts.indent === '\t') {
	    baseIndent = '\t';
	  } else if (typeof opts.indent === 'number' && opts.indent > 0) {
	    baseIndent = $join.call(Array(opts.indent + 1), ' ');
	  } else {
	    return null;
	  }
	  return {
	    base: baseIndent,
	    prev: $join.call(Array(depth + 1), baseIndent)
	  };
	}
	function indentedJoin(xs, indent) {
	  if (xs.length === 0) {
	    return '';
	  }
	  var lineJoiner = '\n' + indent.prev + indent.base;
	  return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
	}
	function arrObjKeys(obj, inspect) {
	  var isArr = isArray$2(obj);
	  var xs = [];
	  if (isArr) {
	    xs.length = obj.length;
	    for (var i = 0; i < obj.length; i++) {
	      xs[i] = has$1(obj, i) ? inspect(obj[i], obj) : '';
	    }
	  }
	  var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
	  var symMap;
	  if (hasShammedSymbols) {
	    symMap = {};
	    for (var k = 0; k < syms.length; k++) {
	      symMap['$' + syms[k]] = syms[k];
	    }
	  }
	  for (var key in obj) {
	    // eslint-disable-line no-restricted-syntax
	    if (!has$1(obj, key)) {
	      continue;
	    } // eslint-disable-line no-restricted-syntax, no-continue
	    if (isArr && String(Number(key)) === key && key < obj.length) {
	      continue;
	    } // eslint-disable-line no-restricted-syntax, no-continue
	    if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
	      // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
	      continue; // eslint-disable-line no-restricted-syntax, no-continue
	    } else if ($test.call(/[^\w$]/, key)) {
	      xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
	    } else {
	      xs.push(key + ': ' + inspect(obj[key], obj));
	    }
	  }
	  if (typeof gOPS === 'function') {
	    for (var j = 0; j < syms.length; j++) {
	      if (isEnumerable.call(obj, syms[j])) {
	        xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
	      }
	    }
	  }
	  return xs;
	}

	var GetIntrinsic$4 = getIntrinsic;
	var callBound$9 = callBound$c;
	var inspect = objectInspect;
	var $TypeError$1 = type;
	var $WeakMap$1 = GetIntrinsic$4('%WeakMap%', true);
	var $Map$3 = GetIntrinsic$4('%Map%', true);
	var $weakMapGet = callBound$9('WeakMap.prototype.get', true);
	var $weakMapSet = callBound$9('WeakMap.prototype.set', true);
	var $weakMapHas = callBound$9('WeakMap.prototype.has', true);
	var $mapGet$1 = callBound$9('Map.prototype.get', true);
	var $mapSet = callBound$9('Map.prototype.set', true);
	var $mapHas$5 = callBound$9('Map.prototype.has', true);

	/*
	* This function traverses the list returning the node corresponding to the given key.
	*
	* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.
	*/
	/** @type {import('.').listGetNode} */
	var listGetNode = function (list, key) {
	  // eslint-disable-line consistent-return
	  /** @type {typeof list | NonNullable<(typeof list)['next']>} */
	  var prev = list;
	  /** @type {(typeof list)['next']} */
	  var curr;
	  for (; (curr = prev.next) !== null; prev = curr) {
	    if (curr.key === key) {
	      prev.next = curr.next;
	      // eslint-disable-next-line no-extra-parens
	      curr.next = /** @type {NonNullable<typeof list.next>} */list.next;
	      list.next = curr; // eslint-disable-line no-param-reassign
	      return curr;
	    }
	  }
	};

	/** @type {import('.').listGet} */
	var listGet = function (objects, key) {
	  var node = listGetNode(objects, key);
	  return node && node.value;
	};
	/** @type {import('.').listSet} */
	var listSet = function (objects, key, value) {
	  var node = listGetNode(objects, key);
	  if (node) {
	    node.value = value;
	  } else {
	    // Prepend the new node to the beginning of the list
	    objects.next = /** @type {import('.').ListNode<typeof value>} */{
	      // eslint-disable-line no-param-reassign, no-extra-parens
	      key: key,
	      next: objects.next,
	      value: value
	    };
	  }
	};
	/** @type {import('.').listHas} */
	var listHas = function (objects, key) {
	  return !!listGetNode(objects, key);
	};

	/** @type {import('.')} */
	var sideChannel = function getSideChannel() {
	  /** @type {WeakMap<object, unknown>} */var $wm;
	  /** @type {Map<object, unknown>} */
	  var $m;
	  /** @type {import('.').RootNode<unknown>} */
	  var $o;

	  /** @type {import('.').Channel} */
	  var channel = {
	    assert: function (key) {
	      if (!channel.has(key)) {
	        throw new $TypeError$1('Side channel does not contain ' + inspect(key));
	      }
	    },
	    get: function (key) {
	      // eslint-disable-line consistent-return
	      if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
	        if ($wm) {
	          return $weakMapGet($wm, key);
	        }
	      } else if ($Map$3) {
	        if ($m) {
	          return $mapGet$1($m, key);
	        }
	      } else {
	        if ($o) {
	          // eslint-disable-line no-lonely-if
	          return listGet($o, key);
	        }
	      }
	    },
	    has: function (key) {
	      if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
	        if ($wm) {
	          return $weakMapHas($wm, key);
	        }
	      } else if ($Map$3) {
	        if ($m) {
	          return $mapHas$5($m, key);
	        }
	      } else {
	        if ($o) {
	          // eslint-disable-line no-lonely-if
	          return listHas($o, key);
	        }
	      }
	      return false;
	    },
	    set: function (key, value) {
	      if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
	        if (!$wm) {
	          $wm = new $WeakMap$1();
	        }
	        $weakMapSet($wm, key, value);
	      } else if ($Map$3) {
	        if (!$m) {
	          $m = new $Map$3();
	        }
	        $mapSet($m, key, value);
	      } else {
	        if (!$o) {
	          // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
	          $o = {
	            key: {},
	            next: null
	          };
	        }
	        listSet($o, key, value);
	      }
	    }
	  };
	  return channel;
	};

	var hasOwn = hasown;
	var channel = sideChannel();
	var $TypeError = type;
	var SLOT$1 = {
	  assert: function (O, slot) {
	    if (!O || typeof O !== 'object' && typeof O !== 'function') {
	      throw new $TypeError('`O` is not an object');
	    }
	    if (typeof slot !== 'string') {
	      throw new $TypeError('`slot` must be a string');
	    }
	    channel.assert(O);
	    if (!SLOT$1.has(O, slot)) {
	      throw new $TypeError('`' + slot + '` is not present on `O`');
	    }
	  },
	  get: function (O, slot) {
	    if (!O || typeof O !== 'object' && typeof O !== 'function') {
	      throw new $TypeError('`O` is not an object');
	    }
	    if (typeof slot !== 'string') {
	      throw new $TypeError('`slot` must be a string');
	    }
	    var slots = channel.get(O);
	    return slots && slots['$' + slot];
	  },
	  has: function (O, slot) {
	    if (!O || typeof O !== 'object' && typeof O !== 'function') {
	      throw new $TypeError('`O` is not an object');
	    }
	    if (typeof slot !== 'string') {
	      throw new $TypeError('`slot` must be a string');
	    }
	    var slots = channel.get(O);
	    return !!slots && hasOwn(slots, '$' + slot);
	  },
	  set: function (O, slot, V) {
	    if (!O || typeof O !== 'object' && typeof O !== 'function') {
	      throw new $TypeError('`O` is not an object');
	    }
	    if (typeof slot !== 'string') {
	      throw new $TypeError('`slot` must be a string');
	    }
	    var slots = channel.get(O);
	    if (!slots) {
	      slots = {};
	      channel.set(O, slots);
	    }
	    slots['$' + slot] = V;
	  }
	};
	if (Object.freeze) {
	  Object.freeze(SLOT$1);
	}
	var internalSlot = SLOT$1;

	var SLOT = internalSlot;
	var $SyntaxError = SyntaxError;
	var $StopIteration = typeof StopIteration === 'object' ? StopIteration : null;
	var stopIterationIterator = function getStopIterationIterator(origIterator) {
	  if (!$StopIteration) {
	    throw new $SyntaxError('this environment lacks StopIteration');
	  }
	  SLOT.set(origIterator, '[[Done]]', false);
	  var siIterator = {
	    next: function next() {
	      var iterator = SLOT.get(this, '[[Iterator]]');
	      var done = SLOT.get(iterator, '[[Done]]');
	      try {
	        return {
	          done: done,
	          value: done ? void undefined : iterator.next()
	        };
	      } catch (e) {
	        SLOT.set(iterator, '[[Done]]', true);
	        if (e !== $StopIteration) {
	          throw e;
	        }
	        return {
	          done: true,
	          value: void undefined
	        };
	      }
	    }
	  };
	  SLOT.set(siIterator, '[[Iterator]]', origIterator);
	  return siIterator;
	};

	var toString = {}.toString;
	var isarray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
	  try {
	    strValue.call(value);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	var toStr$5 = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag$6 = shams();
	var isString$2 = function isString(value) {
	  if (typeof value === 'string') {
	    return true;
	  }
	  if (typeof value !== 'object') {
	    return false;
	  }
	  return hasToStringTag$6 ? tryStringObject(value) : toStr$5.call(value) === strClass;
	};

	/** @const */
	var $Map$2 = typeof Map === 'function' && Map.prototype ? Map : null;
	var $Set$3 = typeof Set === 'function' && Set.prototype ? Set : null;
	var exported$2;
	if (!$Map$2) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported$2 = function isMap(x) {
	    // `Map` is not present in this environment.
	    return false;
	  };
	}
	var $mapHas$4 = $Map$2 ? Map.prototype.has : null;
	var $setHas$4 = $Set$3 ? Set.prototype.has : null;
	if (!exported$2 && !$mapHas$4) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported$2 = function isMap(x) {
	    // `Map` does not have a `has` method
	    return false;
	  };
	}

	/** @type {import('.')} */
	var isMap$2 = exported$2 || function isMap(x) {
	  if (!x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    $mapHas$4.call(x);
	    if ($setHas$4) {
	      try {
	        $setHas$4.call(x);
	      } catch (e) {
	        return true;
	      }
	    }
	    // @ts-expect-error TS can't figure out that $Map is always truthy here
	    return x instanceof $Map$2; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	};

	var $Map$1 = typeof Map === 'function' && Map.prototype ? Map : null;
	var $Set$2 = typeof Set === 'function' && Set.prototype ? Set : null;
	var exported$1;
	if (!$Set$2) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported$1 = function isSet(x) {
	    // `Set` is not present in this environment.
	    return false;
	  };
	}
	var $mapHas$3 = $Map$1 ? Map.prototype.has : null;
	var $setHas$3 = $Set$2 ? Set.prototype.has : null;
	if (!exported$1 && !$setHas$3) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported$1 = function isSet(x) {
	    // `Set` does not have a `has` method
	    return false;
	  };
	}

	/** @type {import('.')} */
	var isSet$2 = exported$1 || function isSet(x) {
	  if (!x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    $setHas$3.call(x);
	    if ($mapHas$3) {
	      try {
	        $mapHas$3.call(x);
	      } catch (e) {
	        return true;
	      }
	    }
	    // @ts-expect-error TS can't figure out that $Set is always truthy here
	    return x instanceof $Set$2; // core-js workaround, pre-v2.5.0
	  } catch (e) {}
	  return false;
	};

	/* eslint global-require: 0 */
	// the code is structured this way so that bundlers can
	// alias out `has-symbols` to `() => true` or `() => false` if your target
	// environments' Symbol capabilities are known, and then use
	// dead code elimination on the rest of this module.
	//
	// Similarly, `isarray` can be aliased to `Array.isArray` if
	// available in all target environments.

	var isArguments$1 = isArguments$2;
	var getStopIterationIterator = stopIterationIterator;
	if (hasSymbols$5() || requireShams()()) {
	  var $iterator = Symbol.iterator;
	  // Symbol is available natively or shammed
	  // natively:
	  //  - Chrome >= 38
	  //  - Edge 12-14?, Edge >= 15 for sure
	  //  - FF >= 36
	  //  - Safari >= 9
	  //  - node >= 0.12
	  esGetIterator.exports = function getIterator(iterable) {
	    // alternatively, `iterable[$iterator]?.()`
	    if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
	      return iterable[$iterator]();
	    }
	    if (isArguments$1(iterable)) {
	      // arguments objects lack Symbol.iterator
	      // - node 0.12
	      return Array.prototype[$iterator].call(iterable);
	    }
	  };
	} else {
	  // Symbol is not available, native or shammed
	  var isArray$1 = isarray;
	  var isString$1 = isString$2;
	  var GetIntrinsic$3 = getIntrinsic;
	  var $Map = GetIntrinsic$3('%Map%', true);
	  var $Set$1 = GetIntrinsic$3('%Set%', true);
	  var callBound$8 = callBound$c;
	  var $arrayPush = callBound$8('Array.prototype.push');
	  var $charCodeAt = callBound$8('String.prototype.charCodeAt');
	  var $stringSlice = callBound$8('String.prototype.slice');
	  var advanceStringIndex = function advanceStringIndex(S, index) {
	    var length = S.length;
	    if (index + 1 >= length) {
	      return index + 1;
	    }
	    var first = $charCodeAt(S, index);
	    if (first < 0xD800 || first > 0xDBFF) {
	      return index + 1;
	    }
	    var second = $charCodeAt(S, index + 1);
	    if (second < 0xDC00 || second > 0xDFFF) {
	      return index + 1;
	    }
	    return index + 2;
	  };
	  var getArrayIterator = function getArrayIterator(arraylike) {
	    var i = 0;
	    return {
	      next: function next() {
	        var done = i >= arraylike.length;
	        var value;
	        if (!done) {
	          value = arraylike[i];
	          i += 1;
	        }
	        return {
	          done: done,
	          value: value
	        };
	      }
	    };
	  };
	  var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
	    if (isArray$1(iterable) || isArguments$1(iterable)) {
	      return getArrayIterator(iterable);
	    }
	    if (isString$1(iterable)) {
	      var i = 0;
	      return {
	        next: function next() {
	          var nextIndex = advanceStringIndex(iterable, i);
	          var value = $stringSlice(iterable, i, nextIndex);
	          i = nextIndex;
	          return {
	            done: nextIndex > iterable.length,
	            value: value
	          };
	        }
	      };
	    }

	    // es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
	    if (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') {
	      return iterable['_es6-shim iterator_']();
	    }
	  };
	  if (!$Map && !$Set$1) {
	    // the only language iterables are Array, String, arguments
	    // - Safari <= 6.0
	    // - Chrome < 38
	    // - node < 0.12
	    // - FF < 13
	    // - IE < 11
	    // - Edge < 11

	    esGetIterator.exports = function getIterator(iterable) {
	      if (iterable != null) {
	        return getNonCollectionIterator(iterable, true);
	      }
	    };
	  } else {
	    // either Map or Set are available, but Symbol is not
	    // - es6-shim on an ES5 browser
	    // - Safari 6.2 (maybe 6.1?)
	    // - FF v[13, 36)
	    // - IE 11
	    // - Edge 11
	    // - Safari v[6, 9)

	    var isMap$1 = isMap$2;
	    var isSet$1 = isSet$2;

	    // Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
	    var $mapForEach = callBound$8('Map.prototype.forEach', true);
	    var $setForEach = callBound$8('Set.prototype.forEach', true);
	    if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
	      // "if is not node"

	      // Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
	      // returns a value, or throws a StopIteration object. These browsers
	      // do not have any other mechanism for iteration.
	      var $mapIterator = callBound$8('Map.prototype.iterator', true);
	      var $setIterator = callBound$8('Set.prototype.iterator', true);
	    }
	    // Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
	    // this returns a proper iterator object, so we should use it instead of forEach.
	    // newer es6-shim versions use a string "_es6-shim iterator_" property.
	    var $mapAtAtIterator = callBound$8('Map.prototype.@@iterator', true) || callBound$8('Map.prototype._es6-shim iterator_', true);
	    var $setAtAtIterator = callBound$8('Set.prototype.@@iterator', true) || callBound$8('Set.prototype._es6-shim iterator_', true);
	    var getCollectionIterator = function getCollectionIterator(iterable) {
	      if (isMap$1(iterable)) {
	        if ($mapIterator) {
	          return getStopIterationIterator($mapIterator(iterable));
	        }
	        if ($mapAtAtIterator) {
	          return $mapAtAtIterator(iterable);
	        }
	        if ($mapForEach) {
	          var entries = [];
	          $mapForEach(iterable, function (v, k) {
	            $arrayPush(entries, [k, v]);
	          });
	          return getArrayIterator(entries);
	        }
	      }
	      if (isSet$1(iterable)) {
	        if ($setIterator) {
	          return getStopIterationIterator($setIterator(iterable));
	        }
	        if ($setAtAtIterator) {
	          return $setAtAtIterator(iterable);
	        }
	        if ($setForEach) {
	          var values = [];
	          $setForEach(iterable, function (v) {
	            $arrayPush(values, v);
	          });
	          return getArrayIterator(values);
	        }
	      }
	    };
	    esGetIterator.exports = function getIterator(iterable) {
	      return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
	    };
	  }
	}

	var numberIsNaN = function (value) {
	  return value !== value;
	};
	var implementation$2 = function is(a, b) {
	  if (a === 0 && b === 0) {
	    return 1 / a === 1 / b;
	  }
	  if (a === b) {
	    return true;
	  }
	  if (numberIsNaN(a) && numberIsNaN(b)) {
	    return true;
	  }
	  return false;
	};

	var implementation$1 = implementation$2;
	var polyfill$1 = function getPolyfill() {
	  return typeof Object.is === 'function' ? Object.is : implementation$1;
	};

	var getPolyfill$1 = polyfill$1;
	var define$1 = defineProperties_1;
	var shim$1 = function shimObjectIs() {
	  var polyfill = getPolyfill$1();
	  define$1(Object, {
	    is: polyfill
	  }, {
	    is: function testObjectIs() {
	      return Object.is !== polyfill;
	    }
	  });
	  return polyfill;
	};

	var define = defineProperties_1;
	var callBind$2 = callBind$6.exports;
	var implementation = implementation$2;
	var getPolyfill = polyfill$1;
	var shim = shim$1;
	var polyfill = callBind$2(getPolyfill(), Object);
	define(polyfill, {
	  getPolyfill: getPolyfill,
	  implementation: implementation,
	  shim: shim
	});
	var objectIs = polyfill;

	var callBind$1 = callBind$6.exports;
	var callBound$7 = callBound$c;
	var GetIntrinsic$2 = getIntrinsic;
	var $ArrayBuffer = GetIntrinsic$2('%ArrayBuffer%', true);
	/** @type {undefined | ((receiver: ArrayBuffer) => number) | ((receiver: unknown) => never)} */
	var $byteLength$2 = callBound$7('ArrayBuffer.prototype.byteLength', true);
	var $toString$3 = callBound$7('Object.prototype.toString');

	// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method
	var abSlice = !!$ArrayBuffer && !$byteLength$2 && new $ArrayBuffer(0).slice;
	var $abSlice = !!abSlice && callBind$1(abSlice);

	/** @type {import('.')} */
	var isArrayBuffer$2 = $byteLength$2 || $abSlice ? function isArrayBuffer(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	  try {
	    if ($byteLength$2) {
	      // @ts-expect-error no idea why TS can't handle the overload
	      $byteLength$2(obj);
	    } else {
	      // @ts-expect-error TS chooses not to type-narrow inside a closure
	      $abSlice(obj, 0);
	    }
	    return true;
	  } catch (e) {
	    return false;
	  }
	} : $ArrayBuffer
	// in node 0.8, ArrayBuffers have no prototype or own methods, but also no Symbol.toStringTag
	? function isArrayBuffer(obj) {
	  return $toString$3(obj) === '[object ArrayBuffer]';
	} : function isArrayBuffer(obj) {
	  // eslint-disable-line no-unused-vars
	  return false;
	};

	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateGetDayCall(value) {
	  try {
	    getDay.call(value);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	var toStr$4 = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag$5 = shams();
	var isDateObject = function isDateObject(value) {
	  if (typeof value !== 'object' || value === null) {
	    return false;
	  }
	  return hasToStringTag$5 ? tryDateObject(value) : toStr$4.call(value) === dateClass;
	};

	var callBound$6 = callBound$c;
	var hasToStringTag$4 = shams();
	var has;
	var $exec;
	var isRegexMarker;
	var badStringifier;
	if (hasToStringTag$4) {
	  has = callBound$6('Object.prototype.hasOwnProperty');
	  $exec = callBound$6('RegExp.prototype.exec');
	  isRegexMarker = {};
	  var throwRegexMarker = function () {
	    throw isRegexMarker;
	  };
	  badStringifier = {
	    toString: throwRegexMarker,
	    valueOf: throwRegexMarker
	  };
	  if (typeof Symbol.toPrimitive === 'symbol') {
	    badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	  }
	}
	var $toString$2 = callBound$6('Object.prototype.toString');
	var gOPD$1 = Object.getOwnPropertyDescriptor;
	var regexClass = '[object RegExp]';
	var isRegex$1 = hasToStringTag$4
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
	  if (!value || typeof value !== 'object') {
	    return false;
	  }
	  var descriptor = gOPD$1(value, 'lastIndex');
	  var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	  if (!hasLastIndexDataProperty) {
	    return false;
	  }
	  try {
	    $exec(value, badStringifier);
	  } catch (e) {
	    return e === isRegexMarker;
	  }
	} : function isRegex(value) {
	  // In older browsers, typeof regex incorrectly returns 'function'
	  if (!value || typeof value !== 'object' && typeof value !== 'function') {
	    return false;
	  }
	  return $toString$2(value) === regexClass;
	};

	var callBound$5 = callBound$c;
	var $byteLength$1 = callBound$5('SharedArrayBuffer.prototype.byteLength', true);

	/** @type {import('.')} */
	var isSharedArrayBuffer$1 = $byteLength$1 ? function isSharedArrayBuffer(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	  try {
	    $byteLength$1(obj);
	    return true;
	  } catch (e) {
	    return false;
	  }
	} : function isSharedArrayBuffer(obj) {
	  // eslint-disable-line no-unused-vars
	  return false;
	};

	var numToStr = Number.prototype.toString;
	var tryNumberObject = function tryNumberObject(value) {
	  try {
	    numToStr.call(value);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	var toStr$3 = Object.prototype.toString;
	var numClass = '[object Number]';
	var hasToStringTag$3 = shams();
	var isNumberObject = function isNumberObject(value) {
	  if (typeof value === 'number') {
	    return true;
	  }
	  if (typeof value !== 'object') {
	    return false;
	  }
	  return hasToStringTag$3 ? tryNumberObject(value) : toStr$3.call(value) === numClass;
	};

	var callBound$4 = callBound$c;
	var $boolToStr = callBound$4('Boolean.prototype.toString');
	var $toString$1 = callBound$4('Object.prototype.toString');
	var tryBooleanObject = function booleanBrandCheck(value) {
	  try {
	    $boolToStr(value);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	var boolClass = '[object Boolean]';
	var hasToStringTag$2 = shams();
	var isBooleanObject = function isBoolean(value) {
	  if (typeof value === 'boolean') {
	    return true;
	  }
	  if (value === null || typeof value !== 'object') {
	    return false;
	  }
	  return hasToStringTag$2 && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString$1(value) === boolClass;
	};

	var isSymbol$1 = {exports: {}};

	var toStr$2 = Object.prototype.toString;
	var hasSymbols = hasSymbols$5();
	if (hasSymbols) {
	  var symToStr = Symbol.prototype.toString;
	  var symStringRegex = /^Symbol\(.*\)$/;
	  var isSymbolObject = function isRealSymbolObject(value) {
	    if (typeof value.valueOf() !== 'symbol') {
	      return false;
	    }
	    return symStringRegex.test(symToStr.call(value));
	  };
	  isSymbol$1.exports = function isSymbol(value) {
	    if (typeof value === 'symbol') {
	      return true;
	    }
	    if (toStr$2.call(value) !== '[object Symbol]') {
	      return false;
	    }
	    try {
	      return isSymbolObject(value);
	    } catch (e) {
	      return false;
	    }
	  };
	} else {
	  isSymbol$1.exports = function isSymbol(value) {
	    // this environment does not support Symbols.
	    return false ;
	  };
	}

	var isBigint = {exports: {}};

	var $BigInt = typeof BigInt !== 'undefined' && BigInt;
	var hasBigints = function hasNativeBigInts() {
	  return typeof $BigInt === 'function' && typeof BigInt === 'function' && typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers
	  && typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers
	};

	var hasBigInts = hasBigints();
	if (hasBigInts) {
	  var bigIntValueOf = BigInt.prototype.valueOf;
	  var tryBigInt = function tryBigIntObject(value) {
	    try {
	      bigIntValueOf.call(value);
	      return true;
	    } catch (e) {}
	    return false;
	  };
	  isBigint.exports = function isBigInt(value) {
	    if (value === null || typeof value === 'undefined' || typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'function') {
	      return false;
	    }
	    if (typeof value === 'bigint') {
	      return true;
	    }
	    return tryBigInt(value);
	  };
	} else {
	  isBigint.exports = function isBigInt(value) {
	    return false ;
	  };
	}

	var isString = isString$2;
	var isNumber = isNumberObject;
	var isBoolean = isBooleanObject;
	var isSymbol = isSymbol$1.exports;
	var isBigInt = isBigint.exports;

	// eslint-disable-next-line consistent-return
	var whichBoxedPrimitive$1 = function whichBoxedPrimitive(value) {
	  // eslint-disable-next-line eqeqeq
	  if (value == null || typeof value !== 'object' && typeof value !== 'function') {
	    return null;
	  }
	  if (isString(value)) {
	    return 'String';
	  }
	  if (isNumber(value)) {
	    return 'Number';
	  }
	  if (isBoolean(value)) {
	    return 'Boolean';
	  }
	  if (isSymbol(value)) {
	    return 'Symbol';
	  }
	  if (isBigInt(value)) {
	    return 'BigInt';
	  }
	};

	var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
	var $WeakSet$1 = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;
	var exported;
	if (!$WeakMap) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported = function isWeakMap(x) {
	    // `WeakMap` is not present in this environment.
	    return false;
	  };
	}
	var $mapHas$2 = $WeakMap ? $WeakMap.prototype.has : null;
	var $setHas$2 = $WeakSet$1 ? $WeakSet$1.prototype.has : null;
	if (!exported && !$mapHas$2) {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  exported = function isWeakMap(x) {
	    // `WeakMap` does not have a `has` method
	    return false;
	  };
	}

	/** @type {import('.')} */
	var isWeakmap = exported || function isWeakMap(x) {
	  if (!x || typeof x !== 'object') {
	    return false;
	  }
	  try {
	    $mapHas$2.call(x, $mapHas$2);
	    if ($setHas$2) {
	      try {
	        $setHas$2.call(x, $setHas$2);
	      } catch (e) {
	        return true;
	      }
	    }
	    // @ts-expect-error TS can't figure out that $WeakMap is always truthy here
	    return x instanceof $WeakMap; // core-js workaround, pre-v3
	  } catch (e) {}
	  return false;
	};

	var isWeakset = {exports: {}};

	var GetIntrinsic$1 = getIntrinsic;
	var callBound$3 = callBound$c;
	var $WeakSet = GetIntrinsic$1('%WeakSet%', true);
	var $setHas$1 = callBound$3('WeakSet.prototype.has', true);
	if ($setHas$1) {
	  var $mapHas$1 = callBound$3('WeakMap.prototype.has', true);

	  /** @type {import('.')} */
	  isWeakset.exports = function isWeakSet(x) {
	    if (!x || typeof x !== 'object') {
	      return false;
	    }
	    try {
	      $setHas$1(x, $setHas$1);
	      if ($mapHas$1) {
	        try {
	          $mapHas$1(x, $mapHas$1);
	        } catch (e) {
	          return true;
	        }
	      }
	      // @ts-expect-error TS can't figure out that $WeakSet is always truthy here
	      return x instanceof $WeakSet; // core-js workaround, pre-v3
	    } catch (e) {}
	    return false;
	  };
	} else {
	  /** @type {import('.')} */
	  // eslint-disable-next-line no-unused-vars
	  isWeakset.exports = function isWeakSet(x) {
	    // `WeakSet` does not exist, or does not have a `has` method
	    return false;
	  };
	}

	var isMap = isMap$2;
	var isSet = isSet$2;
	var isWeakMap = isWeakmap;
	var isWeakSet = isWeakset.exports;

	/** @type {import('.')} */
	var whichCollection$1 = function whichCollection( /** @type {unknown} */value) {
	  if (value && typeof value === 'object') {
	    if (isMap(value)) {
	      return 'Map';
	    }
	    if (isSet(value)) {
	      return 'Set';
	    }
	    if (isWeakMap(value)) {
	      return 'WeakMap';
	    }
	    if (isWeakSet(value)) {
	      return 'WeakSet';
	    }
	  }
	  return false;
	};

	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
	var badArrayLike;
	var isCallableMarker;
	if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	  try {
	    badArrayLike = Object.defineProperty({}, 'length', {
	      get: function () {
	        throw isCallableMarker;
	      }
	    });
	    isCallableMarker = {};
	    // eslint-disable-next-line no-throw-literal
	    reflectApply(function () {
	      throw 42;
	    }, null, badArrayLike);
	  } catch (_) {
	    if (_ !== isCallableMarker) {
	      reflectApply = null;
	    }
	  }
	} else {
	  reflectApply = null;
	}
	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
	  try {
	    var fnStr = fnToStr.call(value);
	    return constructorRegex.test(fnStr);
	  } catch (e) {
	    return false; // not a function
	  }
	};
	var tryFunctionObject = function tryFunctionToStr(value) {
	  try {
	    if (isES6ClassFn(value)) {
	      return false;
	    }
	    fnToStr.call(value);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	var toStr$1 = Object.prototype.toString;
	var objectClass = '[object Object]';
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var ddaClass = '[object HTMLAllCollection]'; // IE 11
	var ddaClass2 = '[object HTML document.all class]';
	var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
	var hasToStringTag$1 = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

	var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

	var isDDA = function isDocumentDotAll() {
	  return false;
	};
	if (typeof document === 'object') {
	  // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	  var all = document.all;
	  if (toStr$1.call(all) === toStr$1.call(document.all)) {
	    isDDA = function isDocumentDotAll(value) {
	      /* globals document: false */
	      // in IE 6-8, typeof document.all is "object" and it's truthy
	      if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
	        try {
	          var str = toStr$1.call(value);
	          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
	          || str === objectClass // IE 6-8
	          ) && value('') == null; // eslint-disable-line eqeqeq
	        } catch (e) {/**/}
	      }
	      return false;
	    };
	  }
	}
	var isCallable$1 = reflectApply ? function isCallable(value) {
	  if (isDDA(value)) {
	    return true;
	  }
	  if (!value) {
	    return false;
	  }
	  if (typeof value !== 'function' && typeof value !== 'object') {
	    return false;
	  }
	  try {
	    reflectApply(value, null, badArrayLike);
	  } catch (e) {
	    if (e !== isCallableMarker) {
	      return false;
	    }
	  }
	  return !isES6ClassFn(value) && tryFunctionObject(value);
	} : function isCallable(value) {
	  if (isDDA(value)) {
	    return true;
	  }
	  if (!value) {
	    return false;
	  }
	  if (typeof value !== 'function' && typeof value !== 'object') {
	    return false;
	  }
	  if (hasToStringTag$1) {
	    return tryFunctionObject(value);
	  }
	  if (isES6ClassFn(value)) {
	    return false;
	  }
	  var strClass = toStr$1.call(value);
	  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
	    return false;
	  }
	  return tryFunctionObject(value);
	};

	var isCallable = isCallable$1;
	var toStr = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var forEachArray = function forEachArray(array, iterator, receiver) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (hasOwnProperty.call(array, i)) {
	      if (receiver == null) {
	        iterator(array[i], i, array);
	      } else {
	        iterator.call(receiver, array[i], i, array);
	      }
	    }
	  }
	};
	var forEachString = function forEachString(string, iterator, receiver) {
	  for (var i = 0, len = string.length; i < len; i++) {
	    // no such thing as a sparse string.
	    if (receiver == null) {
	      iterator(string.charAt(i), i, string);
	    } else {
	      iterator.call(receiver, string.charAt(i), i, string);
	    }
	  }
	};
	var forEachObject = function forEachObject(object, iterator, receiver) {
	  for (var k in object) {
	    if (hasOwnProperty.call(object, k)) {
	      if (receiver == null) {
	        iterator(object[k], k, object);
	      } else {
	        iterator.call(receiver, object[k], k, object);
	      }
	    }
	  }
	};
	var forEach$1 = function forEach(list, iterator, thisArg) {
	  if (!isCallable(iterator)) {
	    throw new TypeError('iterator must be a function');
	  }
	  var receiver;
	  if (arguments.length >= 3) {
	    receiver = thisArg;
	  }
	  if (toStr.call(list) === '[object Array]') {
	    forEachArray(list, iterator, receiver);
	  } else if (typeof list === 'string') {
	    forEachString(list, iterator, receiver);
	  } else {
	    forEachObject(list, iterator, receiver);
	  }
	};
	var forEach_1 = forEach$1;

	/** @type {import('.')} */
	var possibleTypedArrayNames = ['Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array'];

	var possibleNames = possibleTypedArrayNames;
	var g$1 = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;

	/** @type {import('.')} */
	var availableTypedArrays$1 = function availableTypedArrays() {
	  var /** @type {ReturnType<typeof availableTypedArrays>} */out = [];
	  for (var i = 0; i < possibleNames.length; i++) {
	    if (typeof g$1[possibleNames[i]] === 'function') {
	      // @ts-expect-error
	      out[out.length] = possibleNames[i];
	    }
	  }
	  return out;
	};

	var forEach = forEach_1;
	var availableTypedArrays = availableTypedArrays$1;
	var callBind = callBind$6.exports;
	var callBound$2 = callBound$c;
	var gOPD = gopd$1;

	/** @type {(O: object) => string} */
	var $toString = callBound$2('Object.prototype.toString');
	var hasToStringTag = shams();
	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
	var typedArrays = availableTypedArrays();
	var $slice = callBound$2('String.prototype.slice');
	var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

	/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
	var $indexOf = callBound$2('Array.prototype.indexOf', true) || function indexOf(array, value) {
	  for (var i = 0; i < array.length; i += 1) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	};

	/** @typedef {(receiver: import('.').TypedArray) => string | typeof Uint8Array.prototype.slice.call | typeof Uint8Array.prototype.set.call} Getter */
	/** @type {{ [k in `\$${import('.').TypedArrayName}`]?: Getter } & { __proto__: null }} */
	var cache = {
	  __proto__: null
	};
	if (hasToStringTag && gOPD && getPrototypeOf) {
	  forEach(typedArrays, function (typedArray) {
	    var arr = new g[typedArray]();
	    if (Symbol.toStringTag in arr) {
	      var proto = getPrototypeOf(arr);
	      // @ts-expect-error TS won't narrow inside a closure
	      var descriptor = gOPD(proto, Symbol.toStringTag);
	      if (!descriptor) {
	        var superProto = getPrototypeOf(proto);
	        // @ts-expect-error TS won't narrow inside a closure
	        descriptor = gOPD(superProto, Symbol.toStringTag);
	      }
	      // @ts-expect-error TODO: fix
	      cache['$' + typedArray] = callBind(descriptor.get);
	    }
	  });
	} else {
	  forEach(typedArrays, function (typedArray) {
	    var arr = new g[typedArray]();
	    var fn = arr.slice || arr.set;
	    if (fn) {
	      // @ts-expect-error TODO: fix
	      cache['$' + typedArray] = callBind(fn);
	    }
	  });
	}

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
	  /** @type {ReturnType<typeof tryAllTypedArrays>} */var found = false;
	  forEach(
	  // eslint-disable-next-line no-extra-parens
	  /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */
	  cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
	  function (getter, typedArray) {
	    if (!found) {
	      try {
	        // @ts-expect-error TODO: fix
	        if ('$' + getter(value) === typedArray) {
	          found = $slice(typedArray, 1);
	        }
	      } catch (e) {/**/}
	    }
	  });
	  return found;
	};

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var trySlices = function tryAllSlices(value) {
	  /** @type {ReturnType<typeof tryAllSlices>} */var found = false;
	  forEach(
	  // eslint-disable-next-line no-extra-parens
	  /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */
	  cache, /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */function (getter, name) {
	    if (!found) {
	      try {
	        // @ts-expect-error TODO: fix
	        getter(value);
	        found = $slice(name, 1);
	      } catch (e) {/**/}
	    }
	  });
	  return found;
	};

	/** @type {import('.')} */
	var whichTypedArray$1 = function whichTypedArray(value) {
	  if (!value || typeof value !== 'object') {
	    return false;
	  }
	  if (!hasToStringTag) {
	    /** @type {string} */
	    var tag = $slice($toString(value), 8, -1);
	    if ($indexOf(typedArrays, tag) > -1) {
	      return tag;
	    }
	    if (tag !== 'Object') {
	      return false;
	    }
	    // node < 0.6 hits here on real Typed Arrays
	    return trySlices(value);
	  }
	  if (!gOPD) {
	    return null;
	  } // unknown engine
	  return tryTypedArrays(value);
	};

	var callBound$1 = callBound$c;
	var $byteLength = callBound$1('ArrayBuffer.prototype.byteLength', true);
	var isArrayBuffer$1 = isArrayBuffer$2;

	/** @type {import('.')} */
	var arrayBufferByteLength = function byteLength(ab) {
	  if (!isArrayBuffer$1(ab)) {
	    return NaN;
	  }
	  return $byteLength ? $byteLength(ab) : ab.byteLength;
	}; // in node < 0.11, byteLength is an own nonconfigurable property

	var assign = object_assign;
	var callBound = callBound$c;
	var flags = regexp_prototype_flags;
	var GetIntrinsic = getIntrinsic;
	var getIterator = esGetIterator.exports;
	var getSideChannel = sideChannel;
	var is = objectIs;
	var isArguments = isArguments$2;
	var isArray = isarray;
	var isArrayBuffer = isArrayBuffer$2;
	var isDate = isDateObject;
	var isRegex = isRegex$1;
	var isSharedArrayBuffer = isSharedArrayBuffer$1;
	var objectKeys = objectKeys$2;
	var whichBoxedPrimitive = whichBoxedPrimitive$1;
	var whichCollection = whichCollection$1;
	var whichTypedArray = whichTypedArray$1;
	var byteLength = arrayBufferByteLength;
	var sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);
	var $getTime = callBound('Date.prototype.getTime');
	var gPO = Object.getPrototypeOf;
	var $objToString = callBound('Object.prototype.toString');
	var $Set = GetIntrinsic('%Set%', true);
	var $mapHas = callBound('Map.prototype.has', true);
	var $mapGet = callBound('Map.prototype.get', true);
	var $mapSize = callBound('Map.prototype.size', true);
	var $setAdd = callBound('Set.prototype.add', true);
	var $setDelete = callBound('Set.prototype.delete', true);
	var $setHas = callBound('Set.prototype.has', true);
	var $setSize = callBound('Set.prototype.size', true);

	// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
	function setHasEqualElement(set, val1, opts, channel) {
	  var i = getIterator(set);
	  var result;
	  while ((result = i.next()) && !result.done) {
	    if (internalDeepEqual(val1, result.value, opts, channel)) {
	      // eslint-disable-line no-use-before-define
	      // Remove the matching element to make sure we do not check that again.
	      $setDelete(set, result.value);
	      return true;
	    }
	  }
	  return false;
	}

	// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
	function findLooseMatchingPrimitives(prim) {
	  if (typeof prim === 'undefined') {
	    return null;
	  }
	  if (typeof prim === 'object') {
	    // Only pass in null as object!
	    return void 0;
	  }
	  if (typeof prim === 'symbol') {
	    return false;
	  }
	  if (typeof prim === 'string' || typeof prim === 'number') {
	    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
	    return +prim === +prim; // eslint-disable-line no-implicit-coercion
	  }
	  return true;
	}

	// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
	function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
	  var altValue = findLooseMatchingPrimitives(prim);
	  if (altValue != null) {
	    return altValue;
	  }
	  var curB = $mapGet(b, altValue);
	  var looseOpts = assign({}, opts, {
	    strict: false
	  });
	  if (typeof curB === 'undefined' && !$mapHas(b, altValue)
	  // eslint-disable-next-line no-use-before-define
	  || !internalDeepEqual(item, curB, looseOpts, channel)) {
	    return false;
	  }
	  // eslint-disable-next-line no-use-before-define
	  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
	}

	// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
	function setMightHaveLoosePrim(a, b, prim) {
	  var altValue = findLooseMatchingPrimitives(prim);
	  if (altValue != null) {
	    return altValue;
	  }
	  return $setHas(b, altValue) && !$setHas(a, altValue);
	}

	// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
	function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
	  var i = getIterator(set);
	  var result;
	  var key2;
	  while ((result = i.next()) && !result.done) {
	    key2 = result.value;
	    if (
	    // eslint-disable-next-line no-use-before-define
	    internalDeepEqual(key1, key2, opts, channel)
	    // eslint-disable-next-line no-use-before-define
	    && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)) {
	      $setDelete(set, key2);
	      return true;
	    }
	  }
	  return false;
	}
	function internalDeepEqual(actual, expected, options, channel) {
	  var opts = options || {};

	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (opts.strict ? is(actual, expected) : actual === expected) {
	    return true;
	  }
	  var actualBoxed = whichBoxedPrimitive(actual);
	  var expectedBoxed = whichBoxedPrimitive(expected);
	  if (actualBoxed !== expectedBoxed) {
	    return false;
	  }

	  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
	  if (!actual || !expected || typeof actual !== 'object' && typeof expected !== 'object') {
	    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
	  }

	  /*
	   * 7.4. For all other Object pairs, including Array objects, equivalence is
	   * determined by having the same number of owned properties (as verified
	   * with Object.prototype.hasOwnProperty.call), the same set of keys
	   * (although not necessarily the same order), equivalent values for every
	   * corresponding key, and an identical 'prototype' property. Note: this
	   * accounts for both named and indexed properties on Arrays.
	   */
	  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

	  var hasActual = channel.has(actual);
	  var hasExpected = channel.has(expected);
	  var sentinel;
	  if (hasActual && hasExpected) {
	    if (channel.get(actual) === channel.get(expected)) {
	      return true;
	    }
	  } else {
	    sentinel = {};
	  }
	  if (!hasActual) {
	    channel.set(actual, sentinel);
	  }
	  if (!hasExpected) {
	    channel.set(expected, sentinel);
	  }

	  // eslint-disable-next-line no-use-before-define
	  return objEquiv(actual, expected, opts, channel);
	}
	function isBuffer(x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
	    return false;
	  }
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') {
	    return false;
	  }
	  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
	}
	function setEquiv(a, b, opts, channel) {
	  if ($setSize(a) !== $setSize(b)) {
	    return false;
	  }
	  var iA = getIterator(a);
	  var iB = getIterator(b);
	  var resultA;
	  var resultB;
	  var set;
	  while ((resultA = iA.next()) && !resultA.done) {
	    if (resultA.value && typeof resultA.value === 'object') {
	      if (!set) {
	        set = new $Set();
	      }
	      $setAdd(set, resultA.value);
	    } else if (!$setHas(b, resultA.value)) {
	      if (opts.strict) {
	        return false;
	      }
	      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
	        return false;
	      }
	      if (!set) {
	        set = new $Set();
	      }
	      $setAdd(set, resultA.value);
	    }
	  }
	  if (set) {
	    while ((resultB = iB.next()) && !resultB.done) {
	      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
	      if (resultB.value && typeof resultB.value === 'object') {
	        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
	          return false;
	        }
	      } else if (!opts.strict && !$setHas(a, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) {
	        return false;
	      }
	    }
	    return $setSize(set) === 0;
	  }
	  return true;
	}
	function mapEquiv(a, b, opts, channel) {
	  if ($mapSize(a) !== $mapSize(b)) {
	    return false;
	  }
	  var iA = getIterator(a);
	  var iB = getIterator(b);
	  var resultA;
	  var resultB;
	  var set;
	  var key;
	  var item1;
	  var item2;
	  while ((resultA = iA.next()) && !resultA.done) {
	    key = resultA.value[0];
	    item1 = resultA.value[1];
	    if (key && typeof key === 'object') {
	      if (!set) {
	        set = new $Set();
	      }
	      $setAdd(set, key);
	    } else {
	      item2 = $mapGet(b, key);
	      if (typeof item2 === 'undefined' && !$mapHas(b, key) || !internalDeepEqual(item1, item2, opts, channel)) {
	        if (opts.strict) {
	          return false;
	        }
	        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
	          return false;
	        }
	        if (!set) {
	          set = new $Set();
	        }
	        $setAdd(set, key);
	      }
	    }
	  }
	  if (set) {
	    while ((resultB = iB.next()) && !resultB.done) {
	      key = resultB.value[0];
	      item2 = resultB.value[1];
	      if (key && typeof key === 'object') {
	        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
	          return false;
	        }
	      } else if (!opts.strict && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel)) && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, {
	        strict: false
	      }), channel)) {
	        return false;
	      }
	    }
	    return $setSize(set) === 0;
	  }
	  return true;
	}
	function objEquiv(a, b, opts, channel) {
	  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5], max-lines: [2, 400] */
	  var i, key;
	  if (typeof a !== typeof b) {
	    return false;
	  }
	  if (a == null || b == null) {
	    return false;
	  }
	  if ($objToString(a) !== $objToString(b)) {
	    return false;
	  }
	  if (isArguments(a) !== isArguments(b)) {
	    return false;
	  }
	  var aIsArray = isArray(a);
	  var bIsArray = isArray(b);
	  if (aIsArray !== bIsArray) {
	    return false;
	  }

	  // TODO: replace when a cross-realm brand check is available
	  var aIsError = a instanceof Error;
	  var bIsError = b instanceof Error;
	  if (aIsError !== bIsError) {
	    return false;
	  }
	  if (aIsError || bIsError) {
	    if (a.name !== b.name || a.message !== b.message) {
	      return false;
	    }
	  }
	  var aIsRegex = isRegex(a);
	  var bIsRegex = isRegex(b);
	  if (aIsRegex !== bIsRegex) {
	    return false;
	  }
	  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
	    return false;
	  }
	  var aIsDate = isDate(a);
	  var bIsDate = isDate(b);
	  if (aIsDate !== bIsDate) {
	    return false;
	  }
	  if (aIsDate || bIsDate) {
	    // && would work too, because both are true or both false here
	    if ($getTime(a) !== $getTime(b)) {
	      return false;
	    }
	  }
	  if (opts.strict && gPO && gPO(a) !== gPO(b)) {
	    return false;
	  }
	  var aWhich = whichTypedArray(a);
	  var bWhich = whichTypedArray(b);
	  if (aWhich !== bWhich) {
	    return false;
	  }
	  if (aWhich || bWhich) {
	    // && would work too, because both are true or both false here
	    if (a.length !== b.length) {
	      return false;
	    }
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) {
	        return false;
	      }
	    }
	    return true;
	  }
	  var aIsBuffer = isBuffer(a);
	  var bIsBuffer = isBuffer(b);
	  if (aIsBuffer !== bIsBuffer) {
	    return false;
	  }
	  if (aIsBuffer || bIsBuffer) {
	    // && would work too, because both are true or both false here
	    if (a.length !== b.length) {
	      return false;
	    }
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) {
	        return false;
	      }
	    }
	    return true;
	  }
	  var aIsArrayBuffer = isArrayBuffer(a);
	  var bIsArrayBuffer = isArrayBuffer(b);
	  if (aIsArrayBuffer !== bIsArrayBuffer) {
	    return false;
	  }
	  if (aIsArrayBuffer || bIsArrayBuffer) {
	    // && would work too, because both are true or both false here
	    if (byteLength(a) !== byteLength(b)) {
	      return false;
	    }
	    return typeof Uint8Array === 'function' && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
	  }
	  var aIsSAB = isSharedArrayBuffer(a);
	  var bIsSAB = isSharedArrayBuffer(b);
	  if (aIsSAB !== bIsSAB) {
	    return false;
	  }
	  if (aIsSAB || bIsSAB) {
	    // && would work too, because both are true or both false here
	    if (sabByteLength(a) !== sabByteLength(b)) {
	      return false;
	    }
	    return typeof Uint8Array === 'function' && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
	  }
	  if (typeof a !== typeof b) {
	    return false;
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  // having the same number of owned properties (keys incorporates hasOwnProperty)
	  if (ka.length !== kb.length) {
	    return false;
	  }

	  // the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  // ~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i]) {
	      return false;
	    } // eslint-disable-line eqeqeq
	  }

	  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!internalDeepEqual(a[key], b[key], opts, channel)) {
	      return false;
	    }
	  }
	  var aCollection = whichCollection(a);
	  var bCollection = whichCollection(b);
	  if (aCollection !== bCollection) {
	    return false;
	  }
	  if (aCollection === 'Set' || bCollection === 'Set') {
	    // aCollection === bCollection
	    return setEquiv(a, b, opts, channel);
	  }
	  if (aCollection === 'Map') {
	    // aCollection === bCollection
	    return mapEquiv(a, b, opts, channel);
	  }
	  return true;
	}
	var deepEqual = function deepEqual(a, b, opts) {
	  return internalDeepEqual(a, b, opts, getSideChannel());
	};

	Object.defineProperty(elementRoleMap$1, "__esModule", {
	  value: true
	});
	elementRoleMap$1.default = void 0;
	var _deepEqual = _interopRequireDefault$2(deepEqual);
	var _iterationDecorator$1 = _interopRequireDefault$2(iterationDecorator$1);
	var _rolesMap$2 = _interopRequireDefault$2(rolesMap$1);
	function _interopRequireDefault$2(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _slicedToArray$1(arr, i) {
	  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
	}
	function _nonIterableRest$1() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _iterableToArrayLimit$1(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
	function _arrayWithHoles$1(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _createForOfIteratorHelper$1(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e2) {
	          throw _e2;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function s() {
	      it = it.call(o);
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e3) {
	      didErr = true;
	      err = _e3;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _unsupportedIterableToArray$1(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
	}
	function _arrayLikeToArray$1(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }
	  return arr2;
	}
	var elementRoles$1 = [];
	var keys$1 = _rolesMap$2.default.keys();
	for (var i$1 = 0; i$1 < keys$1.length; i$1++) {
	  var key = keys$1[i$1];
	  var role = _rolesMap$2.default.get(key);
	  if (role) {
	    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
	    for (var k = 0; k < concepts.length; k++) {
	      var relation = concepts[k];
	      if (relation.module === 'HTML') {
	        var concept = relation.concept;
	        if (concept) {
	          (function () {
	            var conceptStr = JSON.stringify(concept);
	            var elementRoleRelation = elementRoles$1.find(function (relation) {
	              return JSON.stringify(relation[0]) === conceptStr;
	            });
	            var roles = void 0;
	            if (elementRoleRelation) {
	              roles = elementRoleRelation[1];
	            } else {
	              roles = [];
	            }
	            var isUnique = true;
	            for (var _i = 0; _i < roles.length; _i++) {
	              if (roles[_i] === key) {
	                isUnique = false;
	                break;
	              }
	            }
	            if (isUnique) {
	              roles.push(key);
	            }
	            elementRoles$1.push([concept, roles]);
	          })();
	        }
	      }
	    }
	  }
	}
	var elementRoleMap = {
	  entries: function entries() {
	    return elementRoles$1;
	  },
	  forEach: function forEach(fn) {
	    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var _iterator = _createForOfIteratorHelper$1(elementRoles$1),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray$1(_step.value, 2),
	          _key = _step$value[0],
	          values = _step$value[1];
	        fn.call(thisArg, values, _key, elementRoles$1);
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  },
	  get: function get(key) {
	    var item = elementRoles$1.find(function (tuple) {
	      return (0, _deepEqual.default)(key, tuple[0]);
	    });
	    return item && item[1];
	  },
	  has: function has(key) {
	    return !!elementRoleMap.get(key);
	  },
	  keys: function keys() {
	    return elementRoles$1.map(function (_ref) {
	      var _ref2 = _slicedToArray$1(_ref, 1),
	        key = _ref2[0];
	      return key;
	    });
	  },
	  values: function values() {
	    return elementRoles$1.map(function (_ref3) {
	      var _ref4 = _slicedToArray$1(_ref3, 2),
	        values = _ref4[1];
	      return values;
	    });
	  }
	};
	var _default$1 = (0, _iterationDecorator$1.default)(elementRoleMap, elementRoleMap.entries());
	elementRoleMap$1.default = _default$1;

	var roleElementMap$1 = {};

	Object.defineProperty(roleElementMap$1, "__esModule", {
	  value: true
	});
	roleElementMap$1.default = void 0;
	var _iterationDecorator = _interopRequireDefault$1(iterationDecorator$1);
	var _rolesMap$1 = _interopRequireDefault$1(rolesMap$1);
	function _interopRequireDefault$1(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e2) {
	          throw _e2;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function s() {
	      it = it.call(o);
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e3) {
	      didErr = true;
	      err = _e3;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }
	  return arr2;
	}
	var roleElement = [];
	var keys = _rolesMap$1.default.keys();
	var _loop = function _loop(i) {
	  var key = keys[i];
	  var role = _rolesMap$1.default.get(key);
	  if (role) {
	    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
	    for (var k = 0; k < concepts.length; k++) {
	      var relation = concepts[k];
	      if (relation.module === 'HTML') {
	        var concept = relation.concept;
	        if (concept) {
	          var roleElementRelation = roleElement.find(function (item) {
	            return item[0] === key;
	          });
	          var relationConcepts = void 0;
	          if (roleElementRelation) {
	            relationConcepts = roleElementRelation[1];
	          } else {
	            relationConcepts = [];
	          }
	          relationConcepts.push(concept);
	          roleElement.push([key, relationConcepts]);
	        }
	      }
	    }
	  }
	};
	for (var i = 0; i < keys.length; i++) {
	  _loop(i);
	}
	var roleElementMap = {
	  entries: function entries() {
	    return roleElement;
	  },
	  forEach: function forEach(fn) {
	    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var _iterator = _createForOfIteratorHelper(roleElement),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          values = _step$value[1];
	        fn.call(thisArg, values, key, roleElement);
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  },
	  get: function get(key) {
	    var item = roleElement.find(function (tuple) {
	      return tuple[0] === key ? true : false;
	    });
	    return item && item[1];
	  },
	  has: function has(key) {
	    return !!roleElementMap.get(key);
	  },
	  keys: function keys() {
	    return roleElement.map(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	        key = _ref2[0];
	      return key;
	    });
	  },
	  values: function values() {
	    return roleElement.map(function (_ref3) {
	      var _ref4 = _slicedToArray(_ref3, 2),
	        values = _ref4[1];
	      return values;
	    });
	  }
	};
	var _default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());
	roleElementMap$1.default = _default;

	Object.defineProperty(lib, "__esModule", {
	  value: true
	});
	var roles_1 = lib.roles = roleElements_1 = lib.roleElements = elementRoles_1 = lib.elementRoles = lib.dom = lib.aria = void 0;
	var _ariaPropsMap = _interopRequireDefault(ariaPropsMap$1);
	var _domMap = _interopRequireDefault(domMap$1);
	var _rolesMap = _interopRequireDefault(rolesMap$1);
	var _elementRoleMap = _interopRequireDefault(elementRoleMap$1);
	var _roleElementMap = _interopRequireDefault(roleElementMap$1);
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	var aria = _ariaPropsMap.default;
	lib.aria = aria;
	var dom = _domMap.default;
	lib.dom = dom;
	var roles = _rolesMap.default;
	roles_1 = lib.roles = roles;
	var elementRoles = _elementRoleMap.default;
	var elementRoles_1 = lib.elementRoles = elementRoles;
	var roleElements = _roleElementMap.default;
	var roleElements_1 = lib.roleElements = roleElements;

	var lzString$1 = {exports: {}};

	(function (module) {
	  // Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
	  // This work is free. You can redistribute it and/or modify it
	  // under the terms of the WTFPL, Version 2
	  // For more information see LICENSE.txt or http://www.wtfpl.net/
	  //
	  // For more information, the home page:
	  // http://pieroxy.net/blog/pages/lz-string/testing.html
	  //
	  // LZ-based compression algorithm, version 1.4.5
	  var LZString = function () {
	    // private property
	    var f = String.fromCharCode;
	    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
	    var baseReverseDic = {};
	    function getBaseValue(alphabet, character) {
	      if (!baseReverseDic[alphabet]) {
	        baseReverseDic[alphabet] = {};
	        for (var i = 0; i < alphabet.length; i++) {
	          baseReverseDic[alphabet][alphabet.charAt(i)] = i;
	        }
	      }
	      return baseReverseDic[alphabet][character];
	    }
	    var LZString = {
	      compressToBase64: function (input) {
	        if (input == null) return "";
	        var res = LZString._compress(input, 6, function (a) {
	          return keyStrBase64.charAt(a);
	        });
	        switch (res.length % 4) {
	          // To produce valid Base64
	          default: // When could this happen ?
	          case 0:
	            return res;
	          case 1:
	            return res + "===";
	          case 2:
	            return res + "==";
	          case 3:
	            return res + "=";
	        }
	      },
	      decompressFromBase64: function (input) {
	        if (input == null) return "";
	        if (input == "") return null;
	        return LZString._decompress(input.length, 32, function (index) {
	          return getBaseValue(keyStrBase64, input.charAt(index));
	        });
	      },
	      compressToUTF16: function (input) {
	        if (input == null) return "";
	        return LZString._compress(input, 15, function (a) {
	          return f(a + 32);
	        }) + " ";
	      },
	      decompressFromUTF16: function (compressed) {
	        if (compressed == null) return "";
	        if (compressed == "") return null;
	        return LZString._decompress(compressed.length, 16384, function (index) {
	          return compressed.charCodeAt(index) - 32;
	        });
	      },
	      //compress into uint8array (UCS-2 big endian format)
	      compressToUint8Array: function (uncompressed) {
	        var compressed = LZString.compress(uncompressed);
	        var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

	        for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
	          var current_value = compressed.charCodeAt(i);
	          buf[i * 2] = current_value >>> 8;
	          buf[i * 2 + 1] = current_value % 256;
	        }
	        return buf;
	      },
	      //decompress from uint8array (UCS-2 big endian format)
	      decompressFromUint8Array: function (compressed) {
	        if (compressed === null || compressed === undefined) {
	          return LZString.decompress(compressed);
	        } else {
	          var buf = new Array(compressed.length / 2); // 2 bytes per character
	          for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
	            buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
	          }
	          var result = [];
	          buf.forEach(function (c) {
	            result.push(f(c));
	          });
	          return LZString.decompress(result.join(''));
	        }
	      },
	      //compress into a string that is already URI encoded
	      compressToEncodedURIComponent: function (input) {
	        if (input == null) return "";
	        return LZString._compress(input, 6, function (a) {
	          return keyStrUriSafe.charAt(a);
	        });
	      },
	      //decompress from an output of compressToEncodedURIComponent
	      decompressFromEncodedURIComponent: function (input) {
	        if (input == null) return "";
	        if (input == "") return null;
	        input = input.replace(/ /g, "+");
	        return LZString._decompress(input.length, 32, function (index) {
	          return getBaseValue(keyStrUriSafe, input.charAt(index));
	        });
	      },
	      compress: function (uncompressed) {
	        return LZString._compress(uncompressed, 16, function (a) {
	          return f(a);
	        });
	      },
	      _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
	        if (uncompressed == null) return "";
	        var i,
	          value,
	          context_dictionary = {},
	          context_dictionaryToCreate = {},
	          context_c = "",
	          context_wc = "",
	          context_w = "",
	          context_enlargeIn = 2,
	          // Compensate for the first entry which should not count
	          context_dictSize = 3,
	          context_numBits = 2,
	          context_data = [],
	          context_data_val = 0,
	          context_data_position = 0,
	          ii;
	        for (ii = 0; ii < uncompressed.length; ii += 1) {
	          context_c = uncompressed.charAt(ii);
	          if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
	            context_dictionary[context_c] = context_dictSize++;
	            context_dictionaryToCreate[context_c] = true;
	          }
	          context_wc = context_w + context_c;
	          if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
	            context_w = context_wc;
	          } else {
	            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
	              if (context_w.charCodeAt(0) < 256) {
	                for (i = 0; i < context_numBits; i++) {
	                  context_data_val = context_data_val << 1;
	                  if (context_data_position == bitsPerChar - 1) {
	                    context_data_position = 0;
	                    context_data.push(getCharFromInt(context_data_val));
	                    context_data_val = 0;
	                  } else {
	                    context_data_position++;
	                  }
	                }
	                value = context_w.charCodeAt(0);
	                for (i = 0; i < 8; i++) {
	                  context_data_val = context_data_val << 1 | value & 1;
	                  if (context_data_position == bitsPerChar - 1) {
	                    context_data_position = 0;
	                    context_data.push(getCharFromInt(context_data_val));
	                    context_data_val = 0;
	                  } else {
	                    context_data_position++;
	                  }
	                  value = value >> 1;
	                }
	              } else {
	                value = 1;
	                for (i = 0; i < context_numBits; i++) {
	                  context_data_val = context_data_val << 1 | value;
	                  if (context_data_position == bitsPerChar - 1) {
	                    context_data_position = 0;
	                    context_data.push(getCharFromInt(context_data_val));
	                    context_data_val = 0;
	                  } else {
	                    context_data_position++;
	                  }
	                  value = 0;
	                }
	                value = context_w.charCodeAt(0);
	                for (i = 0; i < 16; i++) {
	                  context_data_val = context_data_val << 1 | value & 1;
	                  if (context_data_position == bitsPerChar - 1) {
	                    context_data_position = 0;
	                    context_data.push(getCharFromInt(context_data_val));
	                    context_data_val = 0;
	                  } else {
	                    context_data_position++;
	                  }
	                  value = value >> 1;
	                }
	              }
	              context_enlargeIn--;
	              if (context_enlargeIn == 0) {
	                context_enlargeIn = Math.pow(2, context_numBits);
	                context_numBits++;
	              }
	              delete context_dictionaryToCreate[context_w];
	            } else {
	              value = context_dictionary[context_w];
	              for (i = 0; i < context_numBits; i++) {
	                context_data_val = context_data_val << 1 | value & 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = value >> 1;
	              }
	            }
	            context_enlargeIn--;
	            if (context_enlargeIn == 0) {
	              context_enlargeIn = Math.pow(2, context_numBits);
	              context_numBits++;
	            }
	            // Add wc to the dictionary.
	            context_dictionary[context_wc] = context_dictSize++;
	            context_w = String(context_c);
	          }
	        }

	        // Output the code for w.
	        if (context_w !== "") {
	          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
	            if (context_w.charCodeAt(0) < 256) {
	              for (i = 0; i < context_numBits; i++) {
	                context_data_val = context_data_val << 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	              }
	              value = context_w.charCodeAt(0);
	              for (i = 0; i < 8; i++) {
	                context_data_val = context_data_val << 1 | value & 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = value >> 1;
	              }
	            } else {
	              value = 1;
	              for (i = 0; i < context_numBits; i++) {
	                context_data_val = context_data_val << 1 | value;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = 0;
	              }
	              value = context_w.charCodeAt(0);
	              for (i = 0; i < 16; i++) {
	                context_data_val = context_data_val << 1 | value & 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = value >> 1;
	              }
	            }
	            context_enlargeIn--;
	            if (context_enlargeIn == 0) {
	              context_enlargeIn = Math.pow(2, context_numBits);
	              context_numBits++;
	            }
	            delete context_dictionaryToCreate[context_w];
	          } else {
	            value = context_dictionary[context_w];
	            for (i = 0; i < context_numBits; i++) {
	              context_data_val = context_data_val << 1 | value & 1;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	              value = value >> 1;
	            }
	          }
	          context_enlargeIn--;
	          if (context_enlargeIn == 0) {
	            context_enlargeIn = Math.pow(2, context_numBits);
	            context_numBits++;
	          }
	        }

	        // Mark the end of the stream
	        value = 2;
	        for (i = 0; i < context_numBits; i++) {
	          context_data_val = context_data_val << 1 | value & 1;
	          if (context_data_position == bitsPerChar - 1) {
	            context_data_position = 0;
	            context_data.push(getCharFromInt(context_data_val));
	            context_data_val = 0;
	          } else {
	            context_data_position++;
	          }
	          value = value >> 1;
	        }

	        // Flush the last char
	        while (true) {
	          context_data_val = context_data_val << 1;
	          if (context_data_position == bitsPerChar - 1) {
	            context_data.push(getCharFromInt(context_data_val));
	            break;
	          } else context_data_position++;
	        }
	        return context_data.join('');
	      },
	      decompress: function (compressed) {
	        if (compressed == null) return "";
	        if (compressed == "") return null;
	        return LZString._decompress(compressed.length, 32768, function (index) {
	          return compressed.charCodeAt(index);
	        });
	      },
	      _decompress: function (length, resetValue, getNextValue) {
	        var dictionary = [],
	          enlargeIn = 4,
	          dictSize = 4,
	          numBits = 3,
	          entry = "",
	          result = [],
	          i,
	          w,
	          bits,
	          resb,
	          maxpower,
	          power,
	          c,
	          data = {
	            val: getNextValue(0),
	            position: resetValue,
	            index: 1
	          };
	        for (i = 0; i < 3; i += 1) {
	          dictionary[i] = i;
	        }
	        bits = 0;
	        maxpower = Math.pow(2, 2);
	        power = 1;
	        while (power != maxpower) {
	          resb = data.val & data.position;
	          data.position >>= 1;
	          if (data.position == 0) {
	            data.position = resetValue;
	            data.val = getNextValue(data.index++);
	          }
	          bits |= (resb > 0 ? 1 : 0) * power;
	          power <<= 1;
	        }
	        switch (bits) {
	          case 0:
	            bits = 0;
	            maxpower = Math.pow(2, 8);
	            power = 1;
	            while (power != maxpower) {
	              resb = data.val & data.position;
	              data.position >>= 1;
	              if (data.position == 0) {
	                data.position = resetValue;
	                data.val = getNextValue(data.index++);
	              }
	              bits |= (resb > 0 ? 1 : 0) * power;
	              power <<= 1;
	            }
	            c = f(bits);
	            break;
	          case 1:
	            bits = 0;
	            maxpower = Math.pow(2, 16);
	            power = 1;
	            while (power != maxpower) {
	              resb = data.val & data.position;
	              data.position >>= 1;
	              if (data.position == 0) {
	                data.position = resetValue;
	                data.val = getNextValue(data.index++);
	              }
	              bits |= (resb > 0 ? 1 : 0) * power;
	              power <<= 1;
	            }
	            c = f(bits);
	            break;
	          case 2:
	            return "";
	        }
	        dictionary[3] = c;
	        w = c;
	        result.push(c);
	        while (true) {
	          if (data.index > length) {
	            return "";
	          }
	          bits = 0;
	          maxpower = Math.pow(2, numBits);
	          power = 1;
	          while (power != maxpower) {
	            resb = data.val & data.position;
	            data.position >>= 1;
	            if (data.position == 0) {
	              data.position = resetValue;
	              data.val = getNextValue(data.index++);
	            }
	            bits |= (resb > 0 ? 1 : 0) * power;
	            power <<= 1;
	          }
	          switch (c = bits) {
	            case 0:
	              bits = 0;
	              maxpower = Math.pow(2, 8);
	              power = 1;
	              while (power != maxpower) {
	                resb = data.val & data.position;
	                data.position >>= 1;
	                if (data.position == 0) {
	                  data.position = resetValue;
	                  data.val = getNextValue(data.index++);
	                }
	                bits |= (resb > 0 ? 1 : 0) * power;
	                power <<= 1;
	              }
	              dictionary[dictSize++] = f(bits);
	              c = dictSize - 1;
	              enlargeIn--;
	              break;
	            case 1:
	              bits = 0;
	              maxpower = Math.pow(2, 16);
	              power = 1;
	              while (power != maxpower) {
	                resb = data.val & data.position;
	                data.position >>= 1;
	                if (data.position == 0) {
	                  data.position = resetValue;
	                  data.val = getNextValue(data.index++);
	                }
	                bits |= (resb > 0 ? 1 : 0) * power;
	                power <<= 1;
	              }
	              dictionary[dictSize++] = f(bits);
	              c = dictSize - 1;
	              enlargeIn--;
	              break;
	            case 2:
	              return result.join('');
	          }
	          if (enlargeIn == 0) {
	            enlargeIn = Math.pow(2, numBits);
	            numBits++;
	          }
	          if (dictionary[c]) {
	            entry = dictionary[c];
	          } else {
	            if (c === dictSize) {
	              entry = w + w.charAt(0);
	            } else {
	              return null;
	            }
	          }
	          result.push(entry);

	          // Add w+entry[0] to the dictionary.
	          dictionary[dictSize++] = w + entry.charAt(0);
	          enlargeIn--;
	          w = entry;
	          if (enlargeIn == 0) {
	            enlargeIn = Math.pow(2, numBits);
	            numBits++;
	          }
	        }
	      }
	    };
	    return LZString;
	  }();
	  if (module != null) {
	    module.exports = LZString;
	  } else if (typeof angular !== 'undefined' && angular != null) {
	    angular.module('LZString', []).factory('LZString', function () {
	      return LZString;
	    });
	  }
	})(lzString$1);
	var lzString = lzString$1.exports;

	/**
	 * Source: https://github.com/facebook/jest/blob/e7bb6a1e26ffab90611b2593912df15b69315611/packages/pretty-format/src/plugins/DOMElement.ts
	 */
	/* eslint-disable -- trying to stay as close to the original as possible */
	/* istanbul ignore file */

	function escapeHTML(str) {
	  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
	// Return empty string if keys is empty.
	const printProps = (keys, props, config, indentation, depth, refs, printer) => {
	  const indentationNext = indentation + config.indent;
	  const colors = config.colors;
	  return keys.map(key => {
	    const value = props[key];
	    let printed = printer(value, config, indentationNext, depth, refs);
	    if (typeof value !== 'string') {
	      if (printed.indexOf('\n') !== -1) {
	        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
	      }
	      printed = '{' + printed + '}';
	    }
	    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
	  }).join('');
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
	const NodeTypeTextNode = 3;

	// Return empty string if children is empty.
	const printChildren = (children, config, indentation, depth, refs, printer) => children.map(child => {
	  const printedChild = typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs);
	  if (printedChild === '' && typeof child === 'object' && child !== null && child.nodeType !== NodeTypeTextNode) {
	    // A plugin serialized this Node to '' meaning we should ignore it.
	    return '';
	  }
	  return config.spacingOuter + indentation + printedChild;
	}).join('');
	const printText = (text, config) => {
	  const contentColor = config.colors.content;
	  return contentColor.open + escapeHTML(text) + contentColor.close;
	};
	const printComment = (comment, config) => {
	  const commentColor = config.colors.comment;
	  return commentColor.open + '<!--' + escapeHTML(comment) + '-->' + commentColor.close;
	};

	// Separate the functions to format props, children, and element,
	// so a plugin could override a particular function, if needed.
	// Too bad, so sad: the traditional (but unnecessary) space
	// in a self-closing tagColor requires a second test of printedProps.
	const printElement = (type, printedProps, printedChildren, config, indentation) => {
	  const tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
	};
	const printElementAsLeaf = (type, config) => {
	  const tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
	};
	const ELEMENT_NODE$1 = 1;
	const TEXT_NODE$1 = 3;
	const COMMENT_NODE$1 = 8;
	const FRAGMENT_NODE = 11;
	const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
	const testNode = val => {
	  const constructorName = val.constructor.name;
	  const {
	    nodeType,
	    tagName
	  } = val;
	  const isCustomElement = typeof tagName === 'string' && tagName.includes('-') || typeof val.hasAttribute === 'function' && val.hasAttribute('is');
	  return nodeType === ELEMENT_NODE$1 && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE$1 && constructorName === 'Text' || nodeType === COMMENT_NODE$1 && constructorName === 'Comment' || nodeType === FRAGMENT_NODE && constructorName === 'DocumentFragment';
	};
	function nodeIsText(node) {
	  return node.nodeType === TEXT_NODE$1;
	}
	function nodeIsComment(node) {
	  return node.nodeType === COMMENT_NODE$1;
	}
	function nodeIsFragment(node) {
	  return node.nodeType === FRAGMENT_NODE;
	}
	function createDOMElementFilter(filterNode) {
	  return {
	    test: val => {
	      var _val$constructor2;
	      return (val == null || (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) && testNode(val);
	    },
	    serialize: (node, config, indentation, depth, refs, printer) => {
	      if (nodeIsText(node)) {
	        return printText(node.data, config);
	      }
	      if (nodeIsComment(node)) {
	        return printComment(node.data, config);
	      }
	      const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
	      if (++depth > config.maxDepth) {
	        return printElementAsLeaf(type, config);
	      }
	      return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes).map(attr => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
	        props[attribute.name] = attribute.value;
	        return props;
	      }, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children).filter(filterNode), config, indentation + config.indent, depth, refs, printer), config, indentation);
	    }
	  };
	}

	// We try to load node dependencies
	let chalk = null;
	let readFileSync = null;
	let codeFrameColumns = null;
	try {
	  const nodeRequire = module && module.require;
	  readFileSync = nodeRequire.call(module, 'fs').readFileSync;
	  codeFrameColumns = nodeRequire.call(module, '@babel/code-frame').codeFrameColumns;
	  chalk = nodeRequire.call(module, 'chalk');
	} catch {
	  // We're in a browser environment
	}

	// frame has the form "at myMethod (location/to/my/file.js:10:2)"
	function getCodeFrame(frame) {
	  const locationStart = frame.indexOf('(') + 1;
	  const locationEnd = frame.indexOf(')');
	  const frameLocation = frame.slice(locationStart, locationEnd);
	  const frameLocationElements = frameLocation.split(':');
	  const [filename, line, column] = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)];
	  let rawFileContents = '';
	  try {
	    rawFileContents = readFileSync(filename, 'utf-8');
	  } catch {
	    return '';
	  }
	  const codeFrame = codeFrameColumns(rawFileContents, {
	    start: {
	      line,
	      column
	    }
	  }, {
	    highlightCode: true,
	    linesBelow: 0
	  });
	  return chalk.dim(frameLocation) + "\n" + codeFrame + "\n";
	}
	function getUserCodeFrame() {
	  // If we couldn't load dependencies, we can't generate the user trace
	  /* istanbul ignore next */
	  if (!readFileSync || !codeFrameColumns) {
	    return '';
	  }
	  const err = new Error();
	  const firstClientCodeFrame = err.stack.split('\n').slice(1) // Remove first line which has the form "Error: TypeError"
	  .find(frame => !frame.includes('node_modules/')); // Ignore frames from 3rd party libraries

	  return getCodeFrame(firstClientCodeFrame);
	}

	// Constant node.nodeType for text nodes, see:
	// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
	const TEXT_NODE = 3;
	function jestFakeTimersAreEnabled$1() {
	  /* istanbul ignore else */
	  // eslint-disable-next-line
	  if (typeof jest !== 'undefined' && jest !== null) {
	    return (
	      // legacy timers
	      setTimeout._isMockFunction === true ||
	      // modern timers
	      // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
	      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
	    );
	  }
	  // istanbul ignore next
	  return false;
	}
	function getDocument() {
	  /* istanbul ignore if */
	  if (typeof window === 'undefined') {
	    throw new Error('Could not find default container');
	  }
	  return window.document;
	}
	function getWindowFromNode(node) {
	  if (node.defaultView) {
	    // node is document
	    return node.defaultView;
	  } else if (node.ownerDocument && node.ownerDocument.defaultView) {
	    // node is a DOM node
	    return node.ownerDocument.defaultView;
	  } else if (node.window) {
	    // node is window
	    return node.window;
	  } else if (node.ownerDocument && node.ownerDocument.defaultView === null) {
	    throw new Error("It looks like the window object is not available for the provided node.");
	  } else if (node.then instanceof Function) {
	    throw new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?");
	  } else if (Array.isArray(node)) {
	    throw new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?");
	  } else if (typeof node.debug === 'function' && typeof node.logTestingPlaygroundURL === 'function') {
	    throw new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?");
	  } else {
	    // The user passed something unusual to a calling function
	    throw new Error("The given node is not an Element, the node type is: " + typeof node + ".");
	  }
	}
	function checkContainerType(container) {
	  if (!container || !(typeof container.querySelector === 'function') || !(typeof container.querySelectorAll === 'function')) {
	    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + getTypeName(container) + ".");
	  }
	  function getTypeName(object) {
	    if (typeof object === 'object') {
	      return object === null ? 'null' : object.constructor.name;
	    }
	    return typeof object;
	  }
	}
	const shouldHighlight = () => {
	  let colors;
	  try {
	    var _process;
	    colors = JSON.parse((_process = process) == null || (_process = _process.env) == null ? void 0 : _process.COLORS);
	  } catch (e) {
	    // If this throws, process?.env?.COLORS wasn't parsable. Since we only
	    // care about `true` or `false`, we can safely ignore the error.
	  }
	  if (typeof colors === 'boolean') {
	    // If `colors` is set explicitly (both `true` and `false`), use that value.
	    return colors;
	  } else {
	    // If `colors` is not set, colorize if we're in node.
	    return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined;
	  }
	};
	const {
	  DOMCollection
	} = plugins_1;

	// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
	const ELEMENT_NODE = 1;
	const COMMENT_NODE = 8;

	// https://github.com/facebook/jest/blob/615084195ae1ae61ddd56162c62bbdda17587569/packages/pretty-format/src/plugins/DOMElement.ts#L50
	function filterCommentsAndDefaultIgnoreTagsTags(value) {
	  return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches(getConfig$1().defaultIgnore));
	}
	function prettyDOM(dom, maxLength, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  if (!dom) {
	    dom = getDocument().body;
	  }
	  if (typeof maxLength !== 'number') {
	    maxLength = typeof process !== 'undefined' && undefined || 7000;
	  }
	  if (maxLength === 0) {
	    return '';
	  }
	  if (dom.documentElement) {
	    dom = dom.documentElement;
	  }
	  let domTypeName = typeof dom;
	  if (domTypeName === 'object') {
	    domTypeName = dom.constructor.name;
	  } else {
	    // To don't fall with `in` operator
	    dom = {};
	  }
	  if (!('outerHTML' in dom)) {
	    throw new TypeError("Expected an element or document but got " + domTypeName);
	  }
	  const {
	    filterNode = filterCommentsAndDefaultIgnoreTagsTags,
	    ...prettyFormatOptions
	  } = options;
	  const debugContent = format_1(dom, {
	    plugins: [createDOMElementFilter(filterNode), DOMCollection],
	    printFunctionName: false,
	    highlight: shouldHighlight(),
	    ...prettyFormatOptions
	  });
	  return maxLength !== undefined && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + "..." : debugContent;
	}
	const logDOM = function () {
	  const userCodeFrame = getUserCodeFrame();
	  if (userCodeFrame) {
	    console.log(prettyDOM(...arguments) + "\n\n" + userCodeFrame);
	  } else {
	    console.log(prettyDOM(...arguments));
	  }
	};

	// It would be cleaner for this to live inside './queries', but
	// other parts of the code assume that all exports from
	// './queries' are query functions.
	let config = {
	  testIdAttribute: 'data-testid',
	  asyncUtilTimeout: 1000,
	  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
	  // forcing react-testing-library to wrap all async functions would've been
	  // a total nightmare (consider wrapping every findBy* query and then also
	  // updating `within` so those would be wrapped too. Total nightmare).
	  // so we have this config option that's really only intended for
	  // react-testing-library to use. For that reason, this feature will remain
	  // undocumented.
	  asyncWrapper: cb => cb(),
	  unstable_advanceTimersWrapper: cb => cb(),
	  eventWrapper: cb => cb(),
	  // default value for the `hidden` option in `ByRole` queries
	  defaultHidden: false,
	  // default value for the `ignore` option in `ByText` queries
	  defaultIgnore: 'script, style',
	  // showOriginalStackTrace flag to show the full error stack traces for async errors
	  showOriginalStackTrace: false,
	  // throw errors w/ suggestions for better queries. Opt in so off by default.
	  throwSuggestions: false,
	  // called when getBy* queries fail. (message, container) => Error
	  getElementError(message, container) {
	    const prettifiedDOM = prettyDOM(container);
	    const error = new Error([message, "Ignored nodes: comments, " + config.defaultIgnore + "\n" + prettifiedDOM].filter(Boolean).join('\n\n'));
	    error.name = 'TestingLibraryElementError';
	    return error;
	  },
	  _disableExpensiveErrorDiagnostics: false,
	  computedStyleSupportsPseudoElements: false
	};
	function runWithExpensiveErrorDiagnosticsDisabled(callback) {
	  try {
	    config._disableExpensiveErrorDiagnostics = true;
	    return callback();
	  } finally {
	    config._disableExpensiveErrorDiagnostics = false;
	  }
	}
	function configure$1(newConfig) {
	  if (typeof newConfig === 'function') {
	    // Pass the existing config out to the provided function
	    // and accept a delta in return
	    newConfig = newConfig(config);
	  }

	  // Merge the incoming config delta
	  config = {
	    ...config,
	    ...newConfig
	  };
	}
	function getConfig$1() {
	  return config;
	}
	const labelledNodeNames = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input'];
	function getTextContent(node) {
	  if (labelledNodeNames.includes(node.nodeName.toLowerCase())) {
	    return '';
	  }
	  if (node.nodeType === TEXT_NODE) return node.textContent;
	  return Array.from(node.childNodes).map(childNode => getTextContent(childNode)).join('');
	}
	function getLabelContent(element) {
	  let textContent;
	  if (element.tagName.toLowerCase() === 'label') {
	    textContent = getTextContent(element);
	  } else {
	    textContent = element.value || element.textContent;
	  }
	  return textContent;
	}

	// Based on https://github.com/eps1lon/dom-accessibility-api/pull/352
	function getRealLabels(element) {
	  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- types are not aware of older browsers that don't implement `labels`
	  if (element.labels !== undefined) {
	    var _labels;
	    return (_labels = element.labels) != null ? _labels : [];
	  }
	  if (!isLabelable(element)) return [];
	  const labels = element.ownerDocument.querySelectorAll('label');
	  return Array.from(labels).filter(label => label.control === element);
	}
	function isLabelable(element) {
	  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === 'INPUT' && element.getAttribute('type') !== 'hidden';
	}
	function getLabels(container, element, _temp) {
	  let {
	    selector = '*'
	  } = _temp === void 0 ? {} : _temp;
	  const ariaLabelledBy = element.getAttribute('aria-labelledby');
	  const labelsId = ariaLabelledBy ? ariaLabelledBy.split(' ') : [];
	  return labelsId.length ? labelsId.map(labelId => {
	    const labellingElement = container.querySelector("[id=\"" + labelId + "\"]");
	    return labellingElement ? {
	      content: getLabelContent(labellingElement),
	      formControl: null
	    } : {
	      content: '',
	      formControl: null
	    };
	  }) : Array.from(getRealLabels(element)).map(label => {
	    const textToMatch = getLabelContent(label);
	    const formControlSelector = 'button, input, meter, output, progress, select, textarea';
	    const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter(formControlElement => formControlElement.matches(selector))[0];
	    return {
	      content: textToMatch,
	      formControl: labelledFormControl
	    };
	  });
	}
	function assertNotNullOrUndefined(matcher) {
	  if (matcher === null || matcher === undefined) {
	    throw new Error(
	    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
	    "It looks like " + matcher + " was passed instead of a matcher. Did you do something like getByText(" + matcher + ")?");
	  }
	}
	function fuzzyMatches(textToMatch, node, matcher, normalizer) {
	  if (typeof textToMatch !== 'string') {
	    return false;
	  }
	  assertNotNullOrUndefined(matcher);
	  const normalizedText = normalizer(textToMatch);
	  if (typeof matcher === 'string' || typeof matcher === 'number') {
	    return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
	  } else if (typeof matcher === 'function') {
	    return matcher(normalizedText, node);
	  } else {
	    return matchRegExp(matcher, normalizedText);
	  }
	}
	function matches(textToMatch, node, matcher, normalizer) {
	  if (typeof textToMatch !== 'string') {
	    return false;
	  }
	  assertNotNullOrUndefined(matcher);
	  const normalizedText = normalizer(textToMatch);
	  if (matcher instanceof Function) {
	    return matcher(normalizedText, node);
	  } else if (matcher instanceof RegExp) {
	    return matchRegExp(matcher, normalizedText);
	  } else {
	    return normalizedText === String(matcher);
	  }
	}
	function getDefaultNormalizer(_temp) {
	  let {
	    trim = true,
	    collapseWhitespace = true
	  } = _temp === void 0 ? {} : _temp;
	  return text => {
	    let normalizedText = text;
	    normalizedText = trim ? normalizedText.trim() : normalizedText;
	    normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText;
	    return normalizedText;
	  };
	}

	/**
	 * Constructs a normalizer to pass to functions in matches.js
	 * @param {boolean|undefined} trim The user-specified value for `trim`, without
	 * any defaulting having been applied
	 * @param {boolean|undefined} collapseWhitespace The user-specified value for
	 * `collapseWhitespace`, without any defaulting having been applied
	 * @param {Function|undefined} normalizer The user-specified normalizer
	 * @returns {Function} A normalizer
	 */

	function makeNormalizer(_ref) {
	  let {
	    trim,
	    collapseWhitespace,
	    normalizer
	  } = _ref;
	  if (!normalizer) {
	    // No custom normalizer specified. Just use default.
	    return getDefaultNormalizer({
	      trim,
	      collapseWhitespace
	    });
	  }
	  if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
	    // They've also specified a value for trim or collapseWhitespace
	    throw new Error('trim and collapseWhitespace are not supported with a normalizer. ' + 'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' + 'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
	  }
	  return normalizer;
	}
	function matchRegExp(matcher, text) {
	  const match = matcher.test(text);
	  if (matcher.global && matcher.lastIndex !== 0) {
	    console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.");
	    matcher.lastIndex = 0;
	  }
	  return match;
	}
	function getNodeText(node) {
	  if (node.matches('input[type=submit], input[type=button], input[type=reset]')) {
	    return node.value;
	  }
	  return Array.from(node.childNodes).filter(child => child.nodeType === TEXT_NODE && Boolean(child.textContent)).map(c => c.textContent).join('');
	}
	const elementRoleList = buildElementRoleList(elementRoles_1);

	/**
	 * @param {Element} element -
	 * @returns {boolean} - `true` if `element` and its subtree are inaccessible
	 */
	function isSubtreeInaccessible(element) {
	  if (element.hidden === true) {
	    return true;
	  }
	  if (element.getAttribute('aria-hidden') === 'true') {
	    return true;
	  }
	  const window = element.ownerDocument.defaultView;
	  if (window.getComputedStyle(element).display === 'none') {
	    return true;
	  }
	  return false;
	}

	/**
	 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
	 * which should only be used for elements with a non-presentational role i.e.
	 * `role="none"` and `role="presentation"` will not be excluded.
	 *
	 * Implements aria-hidden semantics (i.e. parent overrides child)
	 * Ignores "Child Presentational: True" characteristics
	 *
	 * @param {Element} element -
	 * @param {object} [options] -
	 * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
	 * can be used to return cached results from previous isSubtreeInaccessible calls
	 * @returns {boolean} true if excluded, otherwise false
	 */
	function isInaccessible(element, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  const {
	    isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible
	  } = options;
	  const window = element.ownerDocument.defaultView;
	  // since visibility is inherited we can exit early
	  if (window.getComputedStyle(element).visibility === 'hidden') {
	    return true;
	  }
	  let currentElement = element;
	  while (currentElement) {
	    if (isSubtreeInaccessibleImpl(currentElement)) {
	      return true;
	    }
	    currentElement = currentElement.parentElement;
	  }
	  return false;
	}
	function getImplicitAriaRoles(currentNode) {
	  // eslint bug here:
	  // eslint-disable-next-line no-unused-vars
	  for (const {
	    match,
	    roles
	  } of elementRoleList) {
	    if (match(currentNode)) {
	      return [...roles];
	    }
	  }
	  return [];
	}
	function buildElementRoleList(elementRolesMap) {
	  function makeElementSelector(_ref) {
	    let {
	      name,
	      attributes
	    } = _ref;
	    return "" + name + attributes.map(_ref2 => {
	      let {
	        name: attributeName,
	        value,
	        constraints = []
	      } = _ref2;
	      const shouldNotExist = constraints.indexOf('undefined') !== -1;
	      if (shouldNotExist) {
	        return ":not([" + attributeName + "])";
	      } else if (value) {
	        return "[" + attributeName + "=\"" + value + "\"]";
	      } else {
	        return "[" + attributeName + "]";
	      }
	    }).join('');
	  }
	  function getSelectorSpecificity(_ref3) {
	    let {
	      attributes = []
	    } = _ref3;
	    return attributes.length;
	  }
	  function bySelectorSpecificity(_ref4, _ref5) {
	    let {
	      specificity: leftSpecificity
	    } = _ref4;
	    let {
	      specificity: rightSpecificity
	    } = _ref5;
	    return rightSpecificity - leftSpecificity;
	  }
	  function match(element) {
	    let {
	      attributes = []
	    } = element;

	    // https://github.com/testing-library/dom-testing-library/issues/814
	    const typeTextIndex = attributes.findIndex(attribute => attribute.value && attribute.name === 'type' && attribute.value === 'text');
	    if (typeTextIndex >= 0) {
	      // not using splice to not mutate the attributes array
	      attributes = [...attributes.slice(0, typeTextIndex), ...attributes.slice(typeTextIndex + 1)];
	    }
	    const selector = makeElementSelector({
	      ...element,
	      attributes
	    });
	    return node => {
	      if (typeTextIndex >= 0 && node.type !== 'text') {
	        return false;
	      }
	      return node.matches(selector);
	    };
	  }
	  let result = [];

	  // eslint bug here:
	  // eslint-disable-next-line no-unused-vars
	  for (const [element, roles] of elementRolesMap.entries()) {
	    result = [...result, {
	      match: match(element),
	      roles: Array.from(roles),
	      specificity: getSelectorSpecificity(element)
	    }];
	  }
	  return result.sort(bySelectorSpecificity);
	}
	function getRoles(container, _temp) {
	  let {
	    hidden = false
	  } = _temp === void 0 ? {} : _temp;
	  function flattenDOM(node) {
	    return [node, ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], [])];
	  }
	  return flattenDOM(container).filter(element => {
	    return hidden === false ? isInaccessible(element) === false : true;
	  }).reduce((acc, node) => {
	    let roles = [];
	    // TODO: This violates html-aria which does not allow any role on every element
	    if (node.hasAttribute('role')) {
	      roles = node.getAttribute('role').split(' ').slice(0, 1);
	    } else {
	      roles = getImplicitAriaRoles(node);
	    }
	    return roles.reduce((rolesAcc, role) => Array.isArray(rolesAcc[role]) ? {
	      ...rolesAcc,
	      [role]: [...rolesAcc[role], node]
	    } : {
	      ...rolesAcc,
	      [role]: [node]
	    }, acc);
	  }, {});
	}
	function prettyRoles(dom, _ref6) {
	  let {
	    hidden,
	    includeDescription
	  } = _ref6;
	  const roles = getRoles(dom, {
	    hidden
	  });
	  // We prefer to skip generic role, we don't recommend it
	  return Object.entries(roles).filter(_ref7 => {
	    let [role] = _ref7;
	    return role !== 'generic';
	  }).map(_ref8 => {
	    let [role, elements] = _ref8;
	    const delimiterBar = '-'.repeat(50);
	    const elementsString = elements.map(el => {
	      const nameString = "Name \"" + computeAccessibleName(el, {
	        computedStyleSupportsPseudoElements: getConfig$1().computedStyleSupportsPseudoElements
	      }) + "\":\n";
	      const domString = prettyDOM(el.cloneNode(false));
	      if (includeDescription) {
	        const descriptionString = "Description \"" + computeAccessibleDescription(el, {
	          computedStyleSupportsPseudoElements: getConfig$1().computedStyleSupportsPseudoElements
	        }) + "\":\n";
	        return "" + nameString + descriptionString + domString;
	      }
	      return "" + nameString + domString;
	    }).join('\n\n');
	    return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
	  }).join('\n');
	}
	const logRoles = function (dom, _temp2) {
	  let {
	    hidden = false
	  } = _temp2 === void 0 ? {} : _temp2;
	  return console.log(prettyRoles(dom, {
	    hidden
	  }));
	};

	/**
	 * @param {Element} element -
	 * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
	 */
	function computeAriaSelected(element) {
	  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
	  // https://www.w3.org/TR/html-aam-1.0/#details-id-97
	  if (element.tagName === 'OPTION') {
	    return element.selected;
	  }

	  // explicit value
	  return checkBooleanAttribute(element, 'aria-selected');
	}

	/**
	 * @param {Element} element -
	 * @returns {boolean} -
	 */
	function computeAriaBusy(element) {
	  // https://www.w3.org/TR/wai-aria-1.1/#aria-busy
	  return element.getAttribute('aria-busy') === 'true';
	}

	/**
	 * @param {Element} element -
	 * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
	 */
	function computeAriaChecked(element) {
	  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
	  // https://www.w3.org/TR/html-aam-1.0/#details-id-56
	  // https://www.w3.org/TR/html-aam-1.0/#details-id-67
	  if ('indeterminate' in element && element.indeterminate) {
	    return undefined;
	  }
	  if ('checked' in element) {
	    return element.checked;
	  }

	  // explicit value
	  return checkBooleanAttribute(element, 'aria-checked');
	}

	/**
	 * @param {Element} element -
	 * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
	 */
	function computeAriaPressed(element) {
	  // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
	  return checkBooleanAttribute(element, 'aria-pressed');
	}

	/**
	 * @param {Element} element -
	 * @returns {boolean | string | null} -
	 */
	function computeAriaCurrent(element) {
	  var _ref9, _checkBooleanAttribut;
	  // https://www.w3.org/TR/wai-aria-1.1/#aria-current
	  return (_ref9 = (_checkBooleanAttribut = checkBooleanAttribute(element, 'aria-current')) != null ? _checkBooleanAttribut : element.getAttribute('aria-current')) != null ? _ref9 : false;
	}

	/**
	 * @param {Element} element -
	 * @returns {boolean | undefined} - false/true if (not)expanded, undefined if not expand-able
	 */
	function computeAriaExpanded(element) {
	  // https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
	  return checkBooleanAttribute(element, 'aria-expanded');
	}
	function checkBooleanAttribute(element, attribute) {
	  const attributeValue = element.getAttribute(attribute);
	  if (attributeValue === 'true') {
	    return true;
	  }
	  if (attributeValue === 'false') {
	    return false;
	  }
	  return undefined;
	}

	/**
	 * @param {Element} element -
	 * @returns {number | undefined} - number if implicit heading or aria-level present, otherwise undefined
	 */
	function computeHeadingLevel(element) {
	  // https://w3c.github.io/html-aam/#el-h1-h6
	  // https://w3c.github.io/html-aam/#el-h1-h6
	  const implicitHeadingLevels = {
	    H1: 1,
	    H2: 2,
	    H3: 3,
	    H4: 4,
	    H5: 5,
	    H6: 6
	  };
	  // explicit aria-level value
	  // https://www.w3.org/TR/wai-aria-1.2/#aria-level
	  const ariaLevelAttribute = element.getAttribute('aria-level') && Number(element.getAttribute('aria-level'));
	  return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
	}

	/**
	 * @param {Element} element -
	 * @returns {number | undefined} -
	 */
	function computeAriaValueNow(element) {
	  const valueNow = element.getAttribute('aria-valuenow');
	  return valueNow === null ? undefined : +valueNow;
	}

	/**
	 * @param {Element} element -
	 * @returns {number | undefined} -
	 */
	function computeAriaValueMax(element) {
	  const valueMax = element.getAttribute('aria-valuemax');
	  return valueMax === null ? undefined : +valueMax;
	}

	/**
	 * @param {Element} element -
	 * @returns {number | undefined} -
	 */
	function computeAriaValueMin(element) {
	  const valueMin = element.getAttribute('aria-valuemin');
	  return valueMin === null ? undefined : +valueMin;
	}

	/**
	 * @param {Element} element -
	 * @returns {string | undefined} -
	 */
	function computeAriaValueText(element) {
	  const valueText = element.getAttribute('aria-valuetext');
	  return valueText === null ? undefined : valueText;
	}
	const normalize = getDefaultNormalizer();
	function escapeRegExp(string) {
	  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}
	function getRegExpMatcher(string) {
	  return new RegExp(escapeRegExp(string.toLowerCase()), 'i');
	}
	function makeSuggestion(queryName, element, content, _ref) {
	  let {
	    variant,
	    name
	  } = _ref;
	  let warning = '';
	  const queryOptions = {};
	  const queryArgs = [['Role', 'TestId'].includes(queryName) ? content : getRegExpMatcher(content)];
	  if (name) {
	    queryOptions.name = getRegExpMatcher(name);
	  }
	  if (queryName === 'Role' && isInaccessible(element)) {
	    queryOptions.hidden = true;
	    warning = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ";
	  }
	  if (Object.keys(queryOptions).length > 0) {
	    queryArgs.push(queryOptions);
	  }
	  const queryMethod = variant + "By" + queryName;
	  return {
	    queryName,
	    queryMethod,
	    queryArgs,
	    variant,
	    warning,
	    toString() {
	      if (warning) {
	        console.warn(warning);
	      }
	      let [text, options] = queryArgs;
	      text = typeof text === 'string' ? "'" + text + "'" : text;
	      options = options ? ", { " + Object.entries(options).map(_ref2 => {
	        let [k, v] = _ref2;
	        return k + ": " + v;
	      }).join(', ') + " }" : '';
	      return queryMethod + "(" + text + options + ")";
	    }
	  };
	}
	function canSuggest(currentMethod, requestedMethod, data) {
	  return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
	}
	function getSuggestedQuery(element, variant, method) {
	  var _element$getAttribute, _getImplicitAriaRoles;
	  if (variant === void 0) {
	    variant = 'get';
	  }
	  // don't create suggestions for script and style elements
	  if (element.matches(getConfig$1().defaultIgnore)) {
	    return undefined;
	  }

	  //We prefer to suggest something else if the role is generic
	  const role = (_element$getAttribute = element.getAttribute('role')) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
	  if (role !== 'generic' && canSuggest('Role', method, role)) {
	    return makeSuggestion('Role', element, role, {
	      variant,
	      name: computeAccessibleName(element, {
	        computedStyleSupportsPseudoElements: getConfig$1().computedStyleSupportsPseudoElements
	      })
	    });
	  }
	  const labelText = getLabels(document, element).map(label => label.content).join(' ');
	  if (canSuggest('LabelText', method, labelText)) {
	    return makeSuggestion('LabelText', element, labelText, {
	      variant
	    });
	  }
	  const placeholderText = element.getAttribute('placeholder');
	  if (canSuggest('PlaceholderText', method, placeholderText)) {
	    return makeSuggestion('PlaceholderText', element, placeholderText, {
	      variant
	    });
	  }
	  const textContent = normalize(getNodeText(element));
	  if (canSuggest('Text', method, textContent)) {
	    return makeSuggestion('Text', element, textContent, {
	      variant
	    });
	  }
	  if (canSuggest('DisplayValue', method, element.value)) {
	    return makeSuggestion('DisplayValue', element, normalize(element.value), {
	      variant
	    });
	  }
	  const alt = element.getAttribute('alt');
	  if (canSuggest('AltText', method, alt)) {
	    return makeSuggestion('AltText', element, alt, {
	      variant
	    });
	  }
	  const title = element.getAttribute('title');
	  if (canSuggest('Title', method, title)) {
	    return makeSuggestion('Title', element, title, {
	      variant
	    });
	  }
	  const testId = element.getAttribute(getConfig$1().testIdAttribute);
	  if (canSuggest('TestId', method, testId)) {
	    return makeSuggestion('TestId', element, testId, {
	      variant
	    });
	  }
	  return undefined;
	}

	// This is so the stack trace the developer sees is one that's
	// closer to their code (because async stack traces are hard to follow).
	function copyStackTrace(target, source) {
	  target.stack = source.stack.replace(source.message, target.message);
	}
	function waitFor(callback, _ref) {
	  let {
	    container = getDocument(),
	    timeout = getConfig$1().asyncUtilTimeout,
	    showOriginalStackTrace = getConfig$1().showOriginalStackTrace,
	    stackTraceError,
	    interval = 50,
	    onTimeout = error => {
	      Object.defineProperty(error, 'message', {
	        value: getConfig$1().getElementError(error.message, container).message
	      });
	      return error;
	    },
	    mutationObserverOptions = {
	      subtree: true,
	      childList: true,
	      attributes: true,
	      characterData: true
	    }
	  } = _ref;
	  if (typeof callback !== 'function') {
	    throw new TypeError('Received `callback` arg must be a function');
	  }
	  return new Promise(async (resolve, reject) => {
	    let lastError, intervalId, observer;
	    let finished = false;
	    let promiseStatus = 'idle';
	    const overallTimeoutTimer = setTimeout(handleTimeout, timeout);
	    const usingJestFakeTimers = jestFakeTimersAreEnabled$1();
	    if (usingJestFakeTimers) {
	      const {
	        unstable_advanceTimersWrapper: advanceTimersWrapper
	      } = getConfig$1();
	      checkCallback();
	      // this is a dangerous rule to disable because it could lead to an
	      // infinite loop. However, eslint isn't smart enough to know that we're
	      // setting finished inside `onDone` which will be called when we're done
	      // waiting or when we've timed out.
	      // eslint-disable-next-line no-unmodified-loop-condition
	      while (!finished) {
	        if (!jestFakeTimersAreEnabled$1()) {
	          const error = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
	          if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
	          reject(error);
	          return;
	        }

	        // In this rare case, we *need* to wait for in-flight promises
	        // to resolve before continuing. We don't need to take advantage
	        // of parallelization so we're fine.
	        // https://stackoverflow.com/a/59243586/971592
	        // eslint-disable-next-line no-await-in-loop
	        await advanceTimersWrapper(async () => {
	          // we *could* (maybe should?) use `advanceTimersToNextTimer` but it's
	          // possible that could make this loop go on forever if someone is using
	          // third party code that's setting up recursive timers so rapidly that
	          // the user's timer's don't get a chance to resolve. So we'll advance
	          // by an interval instead. (We have a test for this case).
	          jest.advanceTimersByTime(interval);
	        });

	        // Could have timed-out
	        if (finished) {
	          break;
	        }
	        // It's really important that checkCallback is run *before* we flush
	        // in-flight promises. To be honest, I'm not sure why, and I can't quite
	        // think of a way to reproduce the problem in a test, but I spent
	        // an entire day banging my head against a wall on this.
	        checkCallback();
	      }
	    } else {
	      try {
	        checkContainerType(container);
	      } catch (e) {
	        reject(e);
	        return;
	      }
	      intervalId = setInterval(checkRealTimersCallback, interval);
	      const {
	        MutationObserver
	      } = getWindowFromNode(container);
	      observer = new MutationObserver(checkRealTimersCallback);
	      observer.observe(container, mutationObserverOptions);
	      checkCallback();
	    }
	    function onDone(error, result) {
	      finished = true;
	      clearTimeout(overallTimeoutTimer);
	      if (!usingJestFakeTimers) {
	        clearInterval(intervalId);
	        observer.disconnect();
	      }
	      if (error) {
	        reject(error);
	      } else {
	        resolve(result);
	      }
	    }
	    function checkRealTimersCallback() {
	      if (jestFakeTimersAreEnabled$1()) {
	        const error = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
	        if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
	        return reject(error);
	      } else {
	        return checkCallback();
	      }
	    }
	    function checkCallback() {
	      if (promiseStatus === 'pending') return;
	      try {
	        const result = runWithExpensiveErrorDiagnosticsDisabled(callback);
	        if (typeof (result == null ? void 0 : result.then) === 'function') {
	          promiseStatus = 'pending';
	          result.then(resolvedValue => {
	            promiseStatus = 'resolved';
	            onDone(null, resolvedValue);
	          }, rejectedValue => {
	            promiseStatus = 'rejected';
	            lastError = rejectedValue;
	          });
	        } else {
	          onDone(null, result);
	        }
	        // If `callback` throws, wait for the next mutation, interval, or timeout.
	      } catch (error) {
	        // Save the most recent callback error to reject the promise with it in the event of a timeout
	        lastError = error;
	      }
	    }
	    function handleTimeout() {
	      let error;
	      if (lastError) {
	        error = lastError;
	        if (!showOriginalStackTrace && error.name === 'TestingLibraryElementError') {
	          copyStackTrace(error, stackTraceError);
	        }
	      } else {
	        error = new Error('Timed out in waitFor.');
	        if (!showOriginalStackTrace) {
	          copyStackTrace(error, stackTraceError);
	        }
	      }
	      onDone(onTimeout(error), null);
	    }
	  });
	}
	function waitForWrapper(callback, options) {
	  // create the error here so its stack trace is as close to the
	  // calling code as possible
	  const stackTraceError = new Error('STACK_TRACE_MESSAGE');
	  return getConfig$1().asyncWrapper(() => waitFor(callback, {
	    stackTraceError,
	    ...options
	  }));
	}

	/*
	eslint
	  max-lines-per-function: ["error", {"max": 200}],
	*/

	function getElementError(message, container) {
	  return getConfig$1().getElementError(message, container);
	}
	function getMultipleElementsFoundError(message, container) {
	  return getElementError(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
	}
	function queryAllByAttribute(attribute, container, text, _temp) {
	  let {
	    exact = true,
	    collapseWhitespace,
	    trim,
	    normalizer
	  } = _temp === void 0 ? {} : _temp;
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  return Array.from(container.querySelectorAll("[" + attribute + "]")).filter(node => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
	}
	function queryByAttribute(attribute, container, text, options) {
	  const els = queryAllByAttribute(attribute, container, text, options);
	  if (els.length > 1) {
	    throw getMultipleElementsFoundError("Found multiple elements by [" + attribute + "=" + text + "]", container);
	  }
	  return els[0] || null;
	}

	// this accepts a query function and returns a function which throws an error
	// if more than one elements is returned, otherwise it returns the first
	// element or null
	function makeSingleQuery(allQuery, getMultipleError) {
	  return function (container) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	    const els = allQuery(container, ...args);
	    if (els.length > 1) {
	      const elementStrings = els.map(element => getElementError(null, element).message).join('\n\n');
	      throw getMultipleElementsFoundError(getMultipleError(container, ...args) + "\n\nHere are the matching elements:\n\n" + elementStrings, container);
	    }
	    return els[0] || null;
	  };
	}
	function getSuggestionError(suggestion, container) {
	  return getConfig$1().getElementError("A better query is available, try this:\n" + suggestion.toString() + "\n", container);
	}

	// this accepts a query function and returns a function which throws an error
	// if an empty list of elements is returned
	function makeGetAllQuery(allQuery, getMissingError) {
	  return function (container) {
	    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	    const els = allQuery(container, ...args);
	    if (!els.length) {
	      throw getConfig$1().getElementError(getMissingError(container, ...args), container);
	    }
	    return els;
	  };
	}

	// this accepts a getter query function and returns a function which calls
	// waitFor and passing a function which invokes the getter.
	function makeFindQuery(getter) {
	  return (container, text, options, waitForOptions) => {
	    return waitForWrapper(() => {
	      return getter(container, text, options);
	    }, {
	      container,
	      ...waitForOptions
	    });
	  };
	}
	const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) => function (container) {
	  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }
	  const element = query(container, ...args);
	  const [{
	    suggest = getConfig$1().throwSuggestions
	  } = {}] = args.slice(-1);
	  if (element && suggest) {
	    const suggestion = getSuggestedQuery(element, variant);
	    if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
	      throw getSuggestionError(suggestion.toString(), container);
	    }
	  }
	  return element;
	};
	const wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) => function (container) {
	  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	  const els = query(container, ...args);
	  const [{
	    suggest = getConfig$1().throwSuggestions
	  } = {}] = args.slice(-1);
	  if (els.length && suggest) {
	    // get a unique list of all suggestion messages.  We are only going to make a suggestion if
	    // all the suggestions are the same
	    const uniqueSuggestionMessages = [...new Set(els.map(element => {
	      var _getSuggestedQuery;
	      return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
	    }))];
	    if (
	    // only want to suggest if all the els have the same suggestion.
	    uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(
	    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
	    getSuggestedQuery(els[0], variant).queryName)) {
	      throw getSuggestionError(uniqueSuggestionMessages[0], container);
	    }
	  }
	  return els;
	};

	// TODO: This deviates from the published declarations
	// However, the implementation always required a dyadic (after `container`) not variadic `queryAllBy` considering the implementation of `makeFindQuery`
	// This is at least statically true and can be verified by accepting `QueryMethod<Arguments, HTMLElement[]>`
	function buildQueries(queryAllBy, getMultipleError, getMissingError) {
	  const queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, 'query');
	  const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
	  const getBy = makeSingleQuery(getAllBy, getMultipleError);
	  const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get');
	  const getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace('query', 'get'), 'getAll');
	  const findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'));
	  const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'));
	  return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
	}
	var queryHelpers = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  getElementError: getElementError,
	  wrapAllByQueryWithSuggestion: wrapAllByQueryWithSuggestion,
	  wrapSingleQueryWithSuggestion: wrapSingleQueryWithSuggestion,
	  getMultipleElementsFoundError: getMultipleElementsFoundError,
	  queryAllByAttribute: queryAllByAttribute,
	  queryByAttribute: queryByAttribute,
	  makeSingleQuery: makeSingleQuery,
	  makeGetAllQuery: makeGetAllQuery,
	  makeFindQuery: makeFindQuery,
	  buildQueries: buildQueries
	});
	function queryAllLabels(container) {
	  return Array.from(container.querySelectorAll('label,input')).map(node => {
	    return {
	      node,
	      textToMatch: getLabelContent(node)
	    };
	  }).filter(_ref => {
	    let {
	      textToMatch
	    } = _ref;
	    return textToMatch !== null;
	  });
	}
	const queryAllLabelsByText = function (container, text, _temp) {
	  let {
	    exact = true,
	    trim,
	    collapseWhitespace,
	    normalizer
	  } = _temp === void 0 ? {} : _temp;
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  const textToMatchByLabels = queryAllLabels(container);
	  return textToMatchByLabels.filter(_ref2 => {
	    let {
	      node,
	      textToMatch
	    } = _ref2;
	    return matcher(textToMatch, node, text, matchNormalizer);
	  }).map(_ref3 => {
	    let {
	      node
	    } = _ref3;
	    return node;
	  });
	};
	const queryAllByLabelText = function (container, text, _temp2) {
	  let {
	    selector = '*',
	    exact = true,
	    collapseWhitespace,
	    trim,
	    normalizer
	  } = _temp2 === void 0 ? {} : _temp2;
	  checkContainerType(container);
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  const matchingLabelledElements = Array.from(container.querySelectorAll('*')).filter(element => {
	    return getRealLabels(element).length || element.hasAttribute('aria-labelledby');
	  }).reduce((labelledElements, labelledElement) => {
	    const labelList = getLabels(container, labelledElement, {
	      selector
	    });
	    labelList.filter(label => Boolean(label.formControl)).forEach(label => {
	      if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl) {
	        labelledElements.push(label.formControl);
	      }
	    });
	    const labelsValue = labelList.filter(label => Boolean(label.content)).map(label => label.content);
	    if (matcher(labelsValue.join(' '), labelledElement, text, matchNormalizer)) {
	      labelledElements.push(labelledElement);
	    }
	    if (labelsValue.length > 1) {
	      labelsValue.forEach((labelValue, index) => {
	        if (matcher(labelValue, labelledElement, text, matchNormalizer)) {
	          labelledElements.push(labelledElement);
	        }
	        const labelsFiltered = [...labelsValue];
	        labelsFiltered.splice(index, 1);
	        if (labelsFiltered.length > 1) {
	          if (matcher(labelsFiltered.join(' '), labelledElement, text, matchNormalizer)) {
	            labelledElements.push(labelledElement);
	          }
	        }
	      });
	    }
	    return labelledElements;
	  }, []).concat(queryAllByAttribute('aria-label', container, text, {
	    exact,
	    normalizer: matchNormalizer
	  }));
	  return Array.from(new Set(matchingLabelledElements)).filter(element => element.matches(selector));
	};

	// the getAll* query would normally look like this:
	// const getAllByLabelText = makeGetAllQuery(
	//   queryAllByLabelText,
	//   (c, text) => `Unable to find a label with the text of: ${text}`,
	// )
	// however, we can give a more helpful error message than the generic one,
	// so we're writing this one out by hand.
	const getAllByLabelText = function (container, text) {
	  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    rest[_key - 2] = arguments[_key];
	  }
	  const els = queryAllByLabelText(container, text, ...rest);
	  if (!els.length) {
	    const labels = queryAllLabelsByText(container, text, ...rest);
	    if (labels.length) {
	      const tagNames = labels.map(label => getTagNameOfElementAssociatedWithLabelViaFor(container, label)).filter(tagName => !!tagName);
	      if (tagNames.length) {
	        throw getConfig$1().getElementError(tagNames.map(tagName => "Found a label with the text of: " + text + ", however the element associated with this label (<" + tagName + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + tagName + " />, you can use aria-label or aria-labelledby instead.").join('\n\n'), container);
	      } else {
	        throw getConfig$1().getElementError("Found a label with the text of: " + text + ", however no form control was found associated to that label. Make sure you're using the \"for\" attribute or \"aria-labelledby\" attribute correctly.", container);
	      }
	    } else {
	      throw getConfig$1().getElementError("Unable to find a label with the text of: " + text, container);
	    }
	  }
	  return els;
	};
	function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
	  const htmlFor = label.getAttribute('for');
	  if (!htmlFor) {
	    return null;
	  }
	  const element = container.querySelector("[id=\"" + htmlFor + "\"]");
	  return element ? element.tagName.toLowerCase() : null;
	}

	// the reason mentioned above is the same reason we're not using buildQueries
	const getMultipleError$7 = (c, text) => "Found multiple elements with the text of: " + text;
	const queryByLabelText = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllByLabelText, getMultipleError$7), queryAllByLabelText.name, 'query');
	const getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7);
	const findAllByLabelText = makeFindQuery(wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'findAll'));
	const findByLabelText = makeFindQuery(wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, 'find'));
	const getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'getAll');
	const getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, 'get');
	const queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByLabelText, queryAllByLabelText.name, 'queryAll');
	const queryAllByPlaceholderText = function () {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  checkContainerType(args[0]);
	  return queryAllByAttribute('placeholder', ...args);
	};
	const getMultipleError$6 = (c, text) => "Found multiple elements with the placeholder text of: " + text;
	const getMissingError$6 = (c, text) => "Unable to find an element with the placeholder text of: " + text;
	const queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByPlaceholderText, queryAllByPlaceholderText.name, 'queryAll');
	const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6);
	const queryAllByText = function (container, text, _temp) {
	  let {
	    selector = '*',
	    exact = true,
	    collapseWhitespace,
	    trim,
	    ignore = getConfig$1().defaultIgnore,
	    normalizer
	  } = _temp === void 0 ? {} : _temp;
	  checkContainerType(container);
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  let baseArray = [];
	  if (typeof container.matches === 'function' && container.matches(selector)) {
	    baseArray = [container];
	  }
	  return [...baseArray, ...Array.from(container.querySelectorAll(selector))]
	  // TODO: `matches` according lib.dom.d.ts can get only `string` but according our code it can handle also boolean :)
	  .filter(node => !ignore || !node.matches(ignore)).filter(node => matcher(getNodeText(node), node, text, matchNormalizer));
	};
	const getMultipleError$5 = (c, text) => "Found multiple elements with the text: " + text;
	const getMissingError$5 = function (c, text, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  const {
	    collapseWhitespace,
	    trim,
	    normalizer,
	    selector
	  } = options;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  const normalizedText = matchNormalizer(text.toString());
	  const isNormalizedDifferent = normalizedText !== text.toString();
	  const isCustomSelector = (selector != null ? selector : '*') !== '*';
	  return "Unable to find an element with the text: " + (isNormalizedDifferent ? normalizedText + " (normalized from '" + text + "')" : text) + (isCustomSelector ? ", which matches selector '" + selector + "'" : '') + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
	};
	const queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByText, queryAllByText.name, 'queryAll');
	const [queryByText, getAllByText, getByText, findAllByText, findByText] = buildQueries(queryAllByText, getMultipleError$5, getMissingError$5);
	const queryAllByDisplayValue = function (container, value, _temp) {
	  let {
	    exact = true,
	    collapseWhitespace,
	    trim,
	    normalizer
	  } = _temp === void 0 ? {} : _temp;
	  checkContainerType(container);
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  return Array.from(container.querySelectorAll("input,textarea,select")).filter(node => {
	    if (node.tagName === 'SELECT') {
	      const selectedOptions = Array.from(node.options).filter(option => option.selected);
	      return selectedOptions.some(optionNode => matcher(getNodeText(optionNode), optionNode, value, matchNormalizer));
	    } else {
	      return matcher(node.value, node, value, matchNormalizer);
	    }
	  });
	};
	const getMultipleError$4 = (c, value) => "Found multiple elements with the display value: " + value + ".";
	const getMissingError$4 = (c, value) => "Unable to find an element with the display value: " + value + ".";
	const queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByDisplayValue, queryAllByDisplayValue.name, 'queryAll');
	const [queryByDisplayValue, getAllByDisplayValue, getByDisplayValue, findAllByDisplayValue, findByDisplayValue] = buildQueries(queryAllByDisplayValue, getMultipleError$4, getMissingError$4);

	// Valid tags are img, input, area and custom elements
	const VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i;
	const queryAllByAltText = function (container, alt, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  checkContainerType(container);
	  return queryAllByAttribute('alt', container, alt, options).filter(node => VALID_TAG_REGEXP.test(node.tagName));
	};
	const getMultipleError$3 = (c, alt) => "Found multiple elements with the alt text: " + alt;
	const getMissingError$3 = (c, alt) => "Unable to find an element with the alt text: " + alt;
	const queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByAltText, queryAllByAltText.name, 'queryAll');
	const [queryByAltText, getAllByAltText, getByAltText, findAllByAltText, findByAltText] = buildQueries(queryAllByAltText, getMultipleError$3, getMissingError$3);
	const isSvgTitle = node => {
	  var _node$parentElement;
	  return node.tagName.toLowerCase() === 'title' && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === 'svg';
	};
	const queryAllByTitle = function (container, text, _temp) {
	  let {
	    exact = true,
	    collapseWhitespace,
	    trim,
	    normalizer
	  } = _temp === void 0 ? {} : _temp;
	  checkContainerType(container);
	  const matcher = exact ? matches : fuzzyMatches;
	  const matchNormalizer = makeNormalizer({
	    collapseWhitespace,
	    trim,
	    normalizer
	  });
	  return Array.from(container.querySelectorAll('[title], svg > title')).filter(node => matcher(node.getAttribute('title'), node, text, matchNormalizer) || isSvgTitle(node) && matcher(getNodeText(node), node, text, matchNormalizer));
	};
	const getMultipleError$2 = (c, title) => "Found multiple elements with the title: " + title + ".";
	const getMissingError$2 = (c, title) => "Unable to find an element with the title: " + title + ".";
	const queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTitle, queryAllByTitle.name, 'queryAll');
	const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = buildQueries(queryAllByTitle, getMultipleError$2, getMissingError$2);

	/* eslint-disable complexity */
	const queryAllByRole = function (container, role, _temp) {
	  let {
	    hidden = getConfig$1().defaultHidden,
	    name,
	    description,
	    queryFallbacks = false,
	    selected,
	    busy,
	    checked,
	    pressed,
	    current,
	    level,
	    expanded,
	    value: {
	      now: valueNow,
	      min: valueMin,
	      max: valueMax,
	      text: valueText
	    } = {}
	  } = _temp === void 0 ? {} : _temp;
	  checkContainerType(container);
	  if (selected !== undefined) {
	    var _allRoles$get;
	    // guard against unknown roles
	    if (((_allRoles$get = roles_1.get(role)) == null ? void 0 : _allRoles$get.props['aria-selected']) === undefined) {
	      throw new Error("\"aria-selected\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (busy !== undefined) {
	    var _allRoles$get2;
	    // guard against unknown roles
	    if (((_allRoles$get2 = roles_1.get(role)) == null ? void 0 : _allRoles$get2.props['aria-busy']) === undefined) {
	      throw new Error("\"aria-busy\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (checked !== undefined) {
	    var _allRoles$get3;
	    // guard against unknown roles
	    if (((_allRoles$get3 = roles_1.get(role)) == null ? void 0 : _allRoles$get3.props['aria-checked']) === undefined) {
	      throw new Error("\"aria-checked\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (pressed !== undefined) {
	    var _allRoles$get4;
	    // guard against unknown roles
	    if (((_allRoles$get4 = roles_1.get(role)) == null ? void 0 : _allRoles$get4.props['aria-pressed']) === undefined) {
	      throw new Error("\"aria-pressed\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (current !== undefined) {
	    var _allRoles$get5;
	    /* istanbul ignore next */
	    // guard against unknown roles
	    // All currently released ARIA versions support `aria-current` on all roles.
	    // Leaving this for symetry and forward compatibility
	    if (((_allRoles$get5 = roles_1.get(role)) == null ? void 0 : _allRoles$get5.props['aria-current']) === undefined) {
	      throw new Error("\"aria-current\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (level !== undefined) {
	    // guard against using `level` option with any role other than `heading`
	    if (role !== 'heading') {
	      throw new Error("Role \"" + role + "\" cannot have \"level\" property.");
	    }
	  }
	  if (valueNow !== undefined) {
	    var _allRoles$get6;
	    // guard against unknown roles
	    if (((_allRoles$get6 = roles_1.get(role)) == null ? void 0 : _allRoles$get6.props['aria-valuenow']) === undefined) {
	      throw new Error("\"aria-valuenow\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (valueMax !== undefined) {
	    var _allRoles$get7;
	    // guard against unknown roles
	    if (((_allRoles$get7 = roles_1.get(role)) == null ? void 0 : _allRoles$get7.props['aria-valuemax']) === undefined) {
	      throw new Error("\"aria-valuemax\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (valueMin !== undefined) {
	    var _allRoles$get8;
	    // guard against unknown roles
	    if (((_allRoles$get8 = roles_1.get(role)) == null ? void 0 : _allRoles$get8.props['aria-valuemin']) === undefined) {
	      throw new Error("\"aria-valuemin\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (valueText !== undefined) {
	    var _allRoles$get9;
	    // guard against unknown roles
	    if (((_allRoles$get9 = roles_1.get(role)) == null ? void 0 : _allRoles$get9.props['aria-valuetext']) === undefined) {
	      throw new Error("\"aria-valuetext\" is not supported on role \"" + role + "\".");
	    }
	  }
	  if (expanded !== undefined) {
	    var _allRoles$get10;
	    // guard against unknown roles
	    if (((_allRoles$get10 = roles_1.get(role)) == null ? void 0 : _allRoles$get10.props['aria-expanded']) === undefined) {
	      throw new Error("\"aria-expanded\" is not supported on role \"" + role + "\".");
	    }
	  }
	  const subtreeIsInaccessibleCache = new WeakMap();
	  function cachedIsSubtreeInaccessible(element) {
	    if (!subtreeIsInaccessibleCache.has(element)) {
	      subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));
	    }
	    return subtreeIsInaccessibleCache.get(element);
	  }
	  return Array.from(container.querySelectorAll(
	  // Only query elements that can be matched by the following filters
	  makeRoleSelector(role))).filter(node => {
	    const isRoleSpecifiedExplicitly = node.hasAttribute('role');
	    if (isRoleSpecifiedExplicitly) {
	      const roleValue = node.getAttribute('role');
	      if (queryFallbacks) {
	        return roleValue.split(' ').filter(Boolean).some(roleAttributeToken => roleAttributeToken === role);
	      }
	      // other wise only send the first token to match
	      const [firstRoleAttributeToken] = roleValue.split(' ');
	      return firstRoleAttributeToken === role;
	    }
	    const implicitRoles = getImplicitAriaRoles(node);
	    return implicitRoles.some(implicitRole => {
	      return implicitRole === role;
	    });
	  }).filter(element => {
	    if (selected !== undefined) {
	      return selected === computeAriaSelected(element);
	    }
	    if (busy !== undefined) {
	      return busy === computeAriaBusy(element);
	    }
	    if (checked !== undefined) {
	      return checked === computeAriaChecked(element);
	    }
	    if (pressed !== undefined) {
	      return pressed === computeAriaPressed(element);
	    }
	    if (current !== undefined) {
	      return current === computeAriaCurrent(element);
	    }
	    if (expanded !== undefined) {
	      return expanded === computeAriaExpanded(element);
	    }
	    if (level !== undefined) {
	      return level === computeHeadingLevel(element);
	    }
	    if (valueNow !== undefined || valueMax !== undefined || valueMin !== undefined || valueText !== undefined) {
	      let valueMatches = true;
	      if (valueNow !== undefined) {
	        valueMatches && (valueMatches = valueNow === computeAriaValueNow(element));
	      }
	      if (valueMax !== undefined) {
	        valueMatches && (valueMatches = valueMax === computeAriaValueMax(element));
	      }
	      if (valueMin !== undefined) {
	        valueMatches && (valueMatches = valueMin === computeAriaValueMin(element));
	      }
	      if (valueText !== undefined) {
	        var _computeAriaValueText;
	        valueMatches && (valueMatches = matches((_computeAriaValueText = computeAriaValueText(element)) != null ? _computeAriaValueText : null, element, valueText, text => text));
	      }
	      return valueMatches;
	    }
	    // don't care if aria attributes are unspecified
	    return true;
	  }).filter(element => {
	    if (name === undefined) {
	      // Don't care
	      return true;
	    }
	    return matches(computeAccessibleName(element, {
	      computedStyleSupportsPseudoElements: getConfig$1().computedStyleSupportsPseudoElements
	    }), element, name, text => text);
	  }).filter(element => {
	    if (description === undefined) {
	      // Don't care
	      return true;
	    }
	    return matches(computeAccessibleDescription(element, {
	      computedStyleSupportsPseudoElements: getConfig$1().computedStyleSupportsPseudoElements
	    }), element, description, text => text);
	  }).filter(element => {
	    return hidden === false ? isInaccessible(element, {
	      isSubtreeInaccessible: cachedIsSubtreeInaccessible
	    }) === false : true;
	  });
	};
	function makeRoleSelector(role) {
	  var _roleElements$get;
	  const explicitRoleSelector = "*[role~=\"" + role + "\"]";
	  const roleRelations = (_roleElements$get = roleElements_1.get(role)) != null ? _roleElements$get : new Set();
	  const implicitRoleSelectors = new Set(Array.from(roleRelations).map(_ref => {
	    let {
	      name
	    } = _ref;
	    return name;
	  }));

	  // Current transpilation config sometimes assumes `...` is always applied to arrays.
	  // `...` is equivalent to `Array.prototype.concat` for arrays.
	  // If you replace this code with `[explicitRoleSelector, ...implicitRoleSelectors]`, make sure every transpilation target retains the `...` in favor of `Array.prototype.concat`.
	  return [explicitRoleSelector].concat(Array.from(implicitRoleSelectors)).join(',');
	}
	const getNameHint = name => {
	  let nameHint = '';
	  if (name === undefined) {
	    nameHint = '';
	  } else if (typeof name === 'string') {
	    nameHint = " and name \"" + name + "\"";
	  } else {
	    nameHint = " and name `" + name + "`";
	  }
	  return nameHint;
	};
	const getMultipleError$1 = function (c, role, _temp2) {
	  let {
	    name
	  } = _temp2 === void 0 ? {} : _temp2;
	  return "Found multiple elements with the role \"" + role + "\"" + getNameHint(name);
	};
	const getMissingError$1 = function (container, role, _temp3) {
	  let {
	    hidden = getConfig$1().defaultHidden,
	    name,
	    description
	  } = _temp3 === void 0 ? {} : _temp3;
	  if (getConfig$1()._disableExpensiveErrorDiagnostics) {
	    return "Unable to find role=\"" + role + "\"" + getNameHint(name);
	  }
	  let roles = '';
	  Array.from(container.children).forEach(childElement => {
	    roles += prettyRoles(childElement, {
	      hidden,
	      includeDescription: description !== undefined
	    });
	  });
	  let roleMessage;
	  if (roles.length === 0) {
	    if (hidden === false) {
	      roleMessage = 'There are no accessible roles. But there might be some inaccessible roles. ' + 'If you wish to access them, then set the `hidden` option to `true`. ' + 'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole';
	    } else {
	      roleMessage = 'There are no available roles.';
	    }
	  } else {
	    roleMessage = ("\nHere are the " + (hidden === false ? 'accessible' : 'available') + " roles:\n\n  " + roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n') + "\n").trim();
	  }
	  let nameHint = '';
	  if (name === undefined) {
	    nameHint = '';
	  } else if (typeof name === 'string') {
	    nameHint = " and name \"" + name + "\"";
	  } else {
	    nameHint = " and name `" + name + "`";
	  }
	  let descriptionHint = '';
	  if (description === undefined) {
	    descriptionHint = '';
	  } else if (typeof description === 'string') {
	    descriptionHint = " and description \"" + description + "\"";
	  } else {
	    descriptionHint = " and description `" + description + "`";
	  }
	  return ("\nUnable to find an " + (hidden === false ? 'accessible ' : '') + "element with the role \"" + role + "\"" + nameHint + descriptionHint + "\n\n" + roleMessage).trim();
	};
	const queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByRole, queryAllByRole.name, 'queryAll');
	const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1);
	const getTestIdAttribute = () => getConfig$1().testIdAttribute;
	const queryAllByTestId = function () {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  checkContainerType(args[0]);
	  return queryAllByAttribute(getTestIdAttribute(), ...args);
	};
	const getMultipleError = (c, id) => "Found multiple elements by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
	const getMissingError = (c, id) => "Unable to find an element by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
	const queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTestId, queryAllByTestId.name, 'queryAll');
	const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = buildQueries(queryAllByTestId, getMultipleError, getMissingError);
	var queries = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  queryAllByLabelText: queryAllByLabelTextWithSuggestions,
	  queryByLabelText: queryByLabelText,
	  getAllByLabelText: getAllByLabelTextWithSuggestions,
	  getByLabelText: getByLabelTextWithSuggestions,
	  findAllByLabelText: findAllByLabelText,
	  findByLabelText: findByLabelText,
	  queryByPlaceholderText: queryByPlaceholderText,
	  queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
	  getByPlaceholderText: getByPlaceholderText,
	  getAllByPlaceholderText: getAllByPlaceholderText,
	  findAllByPlaceholderText: findAllByPlaceholderText,
	  findByPlaceholderText: findByPlaceholderText,
	  queryByText: queryByText,
	  queryAllByText: queryAllByTextWithSuggestions,
	  getByText: getByText,
	  getAllByText: getAllByText,
	  findAllByText: findAllByText,
	  findByText: findByText,
	  queryByDisplayValue: queryByDisplayValue,
	  queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
	  getByDisplayValue: getByDisplayValue,
	  getAllByDisplayValue: getAllByDisplayValue,
	  findAllByDisplayValue: findAllByDisplayValue,
	  findByDisplayValue: findByDisplayValue,
	  queryByAltText: queryByAltText,
	  queryAllByAltText: queryAllByAltTextWithSuggestions,
	  getByAltText: getByAltText,
	  getAllByAltText: getAllByAltText,
	  findAllByAltText: findAllByAltText,
	  findByAltText: findByAltText,
	  queryByTitle: queryByTitle,
	  queryAllByTitle: queryAllByTitleWithSuggestions,
	  getByTitle: getByTitle,
	  getAllByTitle: getAllByTitle,
	  findAllByTitle: findAllByTitle,
	  findByTitle: findByTitle,
	  queryByRole: queryByRole,
	  queryAllByRole: queryAllByRoleWithSuggestions,
	  getAllByRole: getAllByRole,
	  getByRole: getByRole,
	  findAllByRole: findAllByRole,
	  findByRole: findByRole,
	  queryByTestId: queryByTestId,
	  queryAllByTestId: queryAllByTestIdWithSuggestions,
	  getByTestId: getByTestId,
	  getAllByTestId: getAllByTestId,
	  findAllByTestId: findAllByTestId,
	  findByTestId: findByTestId
	});

	/**
	 * @typedef {{[key: string]: Function}} FuncMap
	 */

	/**
	 * @param {HTMLElement} element container
	 * @param {FuncMap} queries object of functions
	 * @param {Object} initialValue for reducer
	 * @returns {FuncMap} returns object of functions bound to container
	 */
	function getQueriesForElement(element, queries$1, initialValue) {
	  if (queries$1 === void 0) {
	    queries$1 = queries;
	  }
	  if (initialValue === void 0) {
	    initialValue = {};
	  }
	  return Object.keys(queries$1).reduce((helpers, key) => {
	    const fn = queries$1[key];
	    helpers[key] = fn.bind(null, element);
	    return helpers;
	  }, initialValue);
	}
	const isRemoved = result => !result || Array.isArray(result) && !result.length;

	// Check if the element is not present.
	// As the name implies, waitForElementToBeRemoved should check `present` --> `removed`
	function initialCheck(elements) {
	  if (isRemoved(elements)) {
	    throw new Error('The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.');
	  }
	}
	async function waitForElementToBeRemoved(callback, options) {
	  // created here so we get a nice stacktrace
	  const timeoutError = new Error('Timed out in waitForElementToBeRemoved.');
	  if (typeof callback !== 'function') {
	    initialCheck(callback);
	    const elements = Array.isArray(callback) ? callback : [callback];
	    const getRemainingElements = elements.map(element => {
	      let parent = element.parentElement;
	      if (parent === null) return () => null;
	      while (parent.parentElement) parent = parent.parentElement;
	      return () => parent.contains(element) ? element : null;
	    });
	    callback = () => getRemainingElements.map(c => c()).filter(Boolean);
	  }
	  initialCheck(callback());
	  return waitForWrapper(() => {
	    let result;
	    try {
	      result = callback();
	    } catch (error) {
	      if (error.name === 'TestingLibraryElementError') {
	        return undefined;
	      }
	      throw error;
	    }
	    if (!isRemoved(result)) {
	      throw timeoutError;
	    }
	    return undefined;
	  }, options);
	}

	/*
	eslint
	  require-await: "off"
	*/

	const eventMap = {
	  // Clipboard Events
	  copy: {
	    EventType: 'ClipboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  cut: {
	    EventType: 'ClipboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  paste: {
	    EventType: 'ClipboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  // Composition Events
	  compositionEnd: {
	    EventType: 'CompositionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  compositionStart: {
	    EventType: 'CompositionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  compositionUpdate: {
	    EventType: 'CompositionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  // Keyboard Events
	  keyDown: {
	    EventType: 'KeyboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      charCode: 0,
	      composed: true
	    }
	  },
	  keyPress: {
	    EventType: 'KeyboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      charCode: 0,
	      composed: true
	    }
	  },
	  keyUp: {
	    EventType: 'KeyboardEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      charCode: 0,
	      composed: true
	    }
	  },
	  // Focus Events
	  focus: {
	    EventType: 'FocusEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false,
	      composed: true
	    }
	  },
	  blur: {
	    EventType: 'FocusEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false,
	      composed: true
	    }
	  },
	  focusIn: {
	    EventType: 'FocusEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  focusOut: {
	    EventType: 'FocusEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  // Form Events
	  change: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  input: {
	    EventType: 'InputEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  invalid: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: true
	    }
	  },
	  submit: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true
	    }
	  },
	  reset: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true
	    }
	  },
	  // Mouse Events
	  click: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      button: 0,
	      composed: true
	    }
	  },
	  contextMenu: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  dblClick: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  drag: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  dragEnd: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  dragEnter: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  dragExit: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  dragLeave: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  dragOver: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  dragStart: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  drop: {
	    EventType: 'DragEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  mouseDown: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  mouseEnter: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false,
	      composed: true
	    }
	  },
	  mouseLeave: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false,
	      composed: true
	    }
	  },
	  mouseMove: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  mouseOut: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  mouseOver: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  mouseUp: {
	    EventType: 'MouseEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  // Selection Events
	  select: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  // Touch Events
	  touchCancel: {
	    EventType: 'TouchEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  touchEnd: {
	    EventType: 'TouchEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  touchMove: {
	    EventType: 'TouchEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  touchStart: {
	    EventType: 'TouchEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  // UI Events
	  resize: {
	    EventType: 'UIEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  scroll: {
	    EventType: 'UIEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  // Wheel Events
	  wheel: {
	    EventType: 'WheelEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  // Media Events
	  abort: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  canPlay: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  canPlayThrough: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  durationChange: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  emptied: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  encrypted: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  ended: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  loadedData: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  loadedMetadata: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  loadStart: {
	    EventType: 'ProgressEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  pause: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  play: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  playing: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  progress: {
	    EventType: 'ProgressEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  rateChange: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  seeked: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  seeking: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  stalled: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  suspend: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  timeUpdate: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  volumeChange: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  waiting: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  // Events
	  load: {
	    // TODO: load events can be UIEvent or Event depending on what generated them
	    // This is where this abstraction breaks down.
	    // But the common targets are <img />, <script /> and window.
	    // Neither of these targets receive a UIEvent
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  error: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  // Animation Events
	  animationStart: {
	    EventType: 'AnimationEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  animationEnd: {
	    EventType: 'AnimationEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  animationIteration: {
	    EventType: 'AnimationEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  // Transition Events
	  transitionCancel: {
	    EventType: 'TransitionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  transitionEnd: {
	    EventType: 'TransitionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true
	    }
	  },
	  transitionRun: {
	    EventType: 'TransitionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  transitionStart: {
	    EventType: 'TransitionEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  // pointer events
	  pointerOver: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  pointerEnter: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  pointerDown: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  pointerMove: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  pointerUp: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  pointerCancel: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  pointerOut: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: true,
	      composed: true
	    }
	  },
	  pointerLeave: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  gotPointerCapture: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  lostPointerCapture: {
	    EventType: 'PointerEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false,
	      composed: true
	    }
	  },
	  // history events
	  popState: {
	    EventType: 'PopStateEvent',
	    defaultInit: {
	      bubbles: true,
	      cancelable: false
	    }
	  },
	  // window events
	  offline: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  },
	  online: {
	    EventType: 'Event',
	    defaultInit: {
	      bubbles: false,
	      cancelable: false
	    }
	  }
	};
	const eventAliasMap = {
	  doubleClick: 'dblClick'
	};
	function fireEvent$1(element, event) {
	  return getConfig$1().eventWrapper(() => {
	    if (!event) {
	      throw new Error("Unable to fire an event - please provide an event object.");
	    }
	    if (!element) {
	      throw new Error("Unable to fire a \"" + event.type + "\" event - please provide a DOM element.");
	    }
	    return element.dispatchEvent(event);
	  });
	}
	function createEvent(eventName, node, init, _temp) {
	  let {
	    EventType = 'Event',
	    defaultInit = {}
	  } = _temp === void 0 ? {} : _temp;
	  if (!node) {
	    throw new Error("Unable to fire a \"" + eventName + "\" event - please provide a DOM element.");
	  }
	  const eventInit = {
	    ...defaultInit,
	    ...init
	  };
	  const {
	    target: {
	      value,
	      files,
	      ...targetProperties
	    } = {}
	  } = eventInit;
	  if (value !== undefined) {
	    setNativeValue(node, value);
	  }
	  if (files !== undefined) {
	    // input.files is a read-only property so this is not allowed:
	    // input.files = [file]
	    // so we have to use this workaround to set the property
	    Object.defineProperty(node, 'files', {
	      configurable: true,
	      enumerable: true,
	      writable: true,
	      value: files
	    });
	  }
	  Object.assign(node, targetProperties);
	  const window = getWindowFromNode(node);
	  const EventConstructor = window[EventType] || window.Event;
	  let event;
	  /* istanbul ignore else  */
	  if (typeof EventConstructor === 'function') {
	    event = new EventConstructor(eventName, eventInit);
	  } else {
	    // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
	    event = window.document.createEvent(EventType);
	    const {
	      bubbles,
	      cancelable,
	      detail,
	      ...otherInit
	    } = eventInit;
	    event.initEvent(eventName, bubbles, cancelable, detail);
	    Object.keys(otherInit).forEach(eventKey => {
	      event[eventKey] = otherInit[eventKey];
	    });
	  }

	  // DataTransfer is not supported in jsdom: https://github.com/jsdom/jsdom/issues/1568
	  const dataTransferProperties = ['dataTransfer', 'clipboardData'];
	  dataTransferProperties.forEach(dataTransferKey => {
	    const dataTransferValue = eventInit[dataTransferKey];
	    if (typeof dataTransferValue === 'object') {
	      /* istanbul ignore if  */
	      if (typeof window.DataTransfer === 'function') {
	        Object.defineProperty(event, dataTransferKey, {
	          value: Object.getOwnPropertyNames(dataTransferValue).reduce((acc, propName) => {
	            Object.defineProperty(acc, propName, {
	              value: dataTransferValue[propName]
	            });
	            return acc;
	          }, new window.DataTransfer())
	        });
	      } else {
	        Object.defineProperty(event, dataTransferKey, {
	          value: dataTransferValue
	        });
	      }
	    }
	  });
	  return event;
	}
	Object.keys(eventMap).forEach(key => {
	  const {
	    EventType,
	    defaultInit
	  } = eventMap[key];
	  const eventName = key.toLowerCase();
	  createEvent[key] = (node, init) => createEvent(eventName, node, init, {
	    EventType,
	    defaultInit
	  });
	  fireEvent$1[key] = (node, init) => fireEvent$1(node, createEvent[key](node, init));
	});

	// function written after some investigation here:
	// https://github.com/facebook/react/issues/10135#issuecomment-401496776
	function setNativeValue(element, value) {
	  const {
	    set: valueSetter
	  } = Object.getOwnPropertyDescriptor(element, 'value') || {};
	  const prototype = Object.getPrototypeOf(element);
	  const {
	    set: prototypeValueSetter
	  } = Object.getOwnPropertyDescriptor(prototype, 'value') || {};
	  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
	    prototypeValueSetter.call(element, value);
	  } else {
	    /* istanbul ignore if */
	    // eslint-disable-next-line no-lonely-if -- Can't be ignored by istanbul otherwise
	    if (valueSetter) {
	      valueSetter.call(element, value);
	    } else {
	      throw new Error('The given element does not have a value setter');
	    }
	  }
	}
	Object.keys(eventAliasMap).forEach(aliasKey => {
	  const key = eventAliasMap[aliasKey];
	  fireEvent$1[aliasKey] = function () {
	    return fireEvent$1[key](...arguments);
	  };
	});

	/* eslint complexity:["error", 9] */

	// WARNING: `lz-string` only has a default export but statically we assume named exports are allowd
	function unindent(string) {
	  // remove white spaces first, to save a few bytes.
	  // testing-playground will reformat on load any ways.
	  return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
	}
	function encode(value) {
	  return lzString.compressToEncodedURIComponent(unindent(value));
	}
	function getPlaygroundUrl(markup) {
	  return "https://testing-playground.com/#markup=" + encode(markup);
	}
	const debug = (element, maxLength, options) => Array.isArray(element) ? element.forEach(el => logDOM(el, maxLength, options)) : logDOM(element, maxLength, options);
	const logTestingPlaygroundURL = function (element) {
	  if (element === void 0) {
	    element = getDocument().body;
	  }
	  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	  if (!element || !('innerHTML' in element)) {
	    console.log("The element you're providing isn't a valid DOM element.");
	    return;
	  }
	  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	  if (!element.innerHTML) {
	    console.log("The provided element doesn't have any children.");
	    return;
	  }
	  const playgroundUrl = getPlaygroundUrl(element.innerHTML);
	  console.log("Open this URL in your browser\n\n" + playgroundUrl);
	  return playgroundUrl;
	};
	const initialValue = {
	  debug,
	  logTestingPlaygroundURL
	};
	const screen = typeof document !== 'undefined' && document.body // eslint-disable-line @typescript-eslint/no-unnecessary-condition
	? getQueriesForElement(document.body, queries, initialValue) : Object.keys(queries).reduce((helpers, key) => {
	  // `key` is for all intents and purposes the type of keyof `helpers`, which itself is the type of `initialValue` plus incoming properties from `queries`
	  // if `Object.keys(something)` returned Array<keyof typeof something> this explicit type assertion would not be necessary
	  // see https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript
	  helpers[key] = () => {
	    throw new TypeError('For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error');
	  };
	  return helpers;
	}, initialValue);

	const reactAct = typeof React__namespace.act === 'function' ? React__namespace.act : DeprecatedReactTestUtils__namespace.act;
	function getGlobalThis() {
	  /* istanbul ignore else */
	  if (typeof globalThis !== 'undefined') {
	    return globalThis;
	  }
	  /* istanbul ignore next */
	  if (typeof self !== 'undefined') {
	    return self;
	  }
	  /* istanbul ignore next */
	  if (typeof window !== 'undefined') {
	    return window;
	  }
	  /* istanbul ignore next */
	  if (typeof global !== 'undefined') {
	    return global;
	  }
	  /* istanbul ignore next */
	  throw new Error('unable to locate global object');
	}
	function setIsReactActEnvironment(isReactActEnvironment) {
	  getGlobalThis().IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
	}
	function getIsReactActEnvironment() {
	  return getGlobalThis().IS_REACT_ACT_ENVIRONMENT;
	}
	function withGlobalActEnvironment(actImplementation) {
	  return callback => {
	    const previousActEnvironment = getIsReactActEnvironment();
	    setIsReactActEnvironment(true);
	    try {
	      // The return value of `act` is always a thenable.
	      let callbackNeedsToBeAwaited = false;
	      const actResult = actImplementation(() => {
	        const result = callback();
	        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
	          callbackNeedsToBeAwaited = true;
	        }
	        return result;
	      });
	      if (callbackNeedsToBeAwaited) {
	        const thenable = actResult;
	        return {
	          then: (resolve, reject) => {
	            thenable.then(returnValue => {
	              setIsReactActEnvironment(previousActEnvironment);
	              resolve(returnValue);
	            }, error => {
	              setIsReactActEnvironment(previousActEnvironment);
	              reject(error);
	            });
	          }
	        };
	      } else {
	        setIsReactActEnvironment(previousActEnvironment);
	        return actResult;
	      }
	    } catch (error) {
	      // Can't be a `finally {}` block since we don't know if we have to immediately restore IS_REACT_ACT_ENVIRONMENT
	      // or if we have to await the callback first.
	      setIsReactActEnvironment(previousActEnvironment);
	      throw error;
	    }
	  };
	}
	const act = withGlobalActEnvironment(reactAct);

	/* eslint no-console:0 */

	// react-testing-library's version of fireEvent will call
	// dom-testing-library's version of fireEvent. The reason
	// we make this distinction however is because we have
	// a few extra events that work a bit differently
	const fireEvent = function () {
	  return fireEvent$1(...arguments);
	};
	Object.keys(fireEvent$1).forEach(key => {
	  fireEvent[key] = function () {
	    return fireEvent$1[key](...arguments);
	  };
	});

	// React event system tracks native mouseOver/mouseOut events for
	// running onMouseEnter/onMouseLeave handlers
	// @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/EnterLeaveEventPlugin.js#L24-L31
	const mouseEnter = fireEvent.mouseEnter;
	const mouseLeave = fireEvent.mouseLeave;
	fireEvent.mouseEnter = function () {
	  mouseEnter(...arguments);
	  return fireEvent.mouseOver(...arguments);
	};
	fireEvent.mouseLeave = function () {
	  mouseLeave(...arguments);
	  return fireEvent.mouseOut(...arguments);
	};
	const pointerEnter = fireEvent.pointerEnter;
	const pointerLeave = fireEvent.pointerLeave;
	fireEvent.pointerEnter = function () {
	  pointerEnter(...arguments);
	  return fireEvent.pointerOver(...arguments);
	};
	fireEvent.pointerLeave = function () {
	  pointerLeave(...arguments);
	  return fireEvent.pointerOut(...arguments);
	};
	const select = fireEvent.select;
	fireEvent.select = (node, init) => {
	  select(node, init);
	  // React tracks this event only on focused inputs
	  node.focus();

	  // React creates this event when one of the following native events happens
	  // - contextMenu
	  // - mouseUp
	  // - dragEnd
	  // - keyUp
	  // - keyDown
	  // so we can use any here
	  // @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/SelectEventPlugin.js#L203-L224
	  fireEvent.keyUp(node, init);
	};

	// React event system tracks native focusout/focusin events for
	// running blur/focus handlers
	// @link https://github.com/facebook/react/pull/19186
	const blur = fireEvent.blur;
	const focus = fireEvent.focus;
	fireEvent.blur = function () {
	  fireEvent.focusOut(...arguments);
	  return blur(...arguments);
	};
	fireEvent.focus = function () {
	  fireEvent.focusIn(...arguments);
	  return focus(...arguments);
	};

	let configForRTL = {
	  reactStrictMode: false
	};
	function getConfig() {
	  return {
	    ...getConfig$1(),
	    ...configForRTL
	  };
	}
	function configure(newConfig) {
	  if (typeof newConfig === 'function') {
	    // Pass the existing config out to the provided function
	    // and accept a delta in return
	    newConfig = newConfig(getConfig());
	  }
	  const {
	    reactStrictMode,
	    ...configForDTL
	  } = newConfig;
	  configure$1(configForDTL);
	  configForRTL = {
	    ...configForRTL,
	    reactStrictMode
	  };
	}

	function jestFakeTimersAreEnabled() {
	  /* istanbul ignore else */
	  if (typeof jest !== 'undefined' && jest !== null) {
	    return (
	      // legacy timers
	      setTimeout._isMockFunction === true ||
	      // modern timers
	      // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
	      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
	    );
	  } // istanbul ignore next

	  return false;
	}
	configure$1({
	  unstable_advanceTimersWrapper: cb => {
	    return act(cb);
	  },
	  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
	  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
	  // Let's just hope nobody else is using it.
	  asyncWrapper: async cb => {
	    const previousActEnvironment = getIsReactActEnvironment();
	    setIsReactActEnvironment(false);
	    try {
	      const result = await cb();
	      // Drain microtask queue.
	      // Otherwise we'll restore the previous act() environment, before we resolve the `waitFor` call.
	      // The caller would have no chance to wrap the in-flight Promises in `act()`
	      await new Promise(resolve => {
	        setTimeout(() => {
	          resolve();
	        }, 0);
	        if (jestFakeTimersAreEnabled()) {
	          jest.advanceTimersByTime(0);
	        }
	      });
	      return result;
	    } finally {
	      setIsReactActEnvironment(previousActEnvironment);
	    }
	  },
	  eventWrapper: cb => {
	    let result;
	    act(() => {
	      result = cb();
	    });
	    return result;
	  }
	});

	// Ideally we'd just use a WeakMap where containers are keys and roots are values.
	// We use two variables so that we can bail out in constant time when we render with a new container (most common use case)
	/**
	 * @type {Set<import('react-dom').Container>}
	 */
	const mountedContainers = new Set();
	/**
	 * @type Array<{container: import('react-dom').Container, root: ReturnType<typeof createConcurrentRoot>}>
	 */
	const mountedRootEntries = [];
	function strictModeIfNeeded(innerElement) {
	  return getConfig().reactStrictMode ? /*#__PURE__*/React__namespace.createElement(React__namespace.StrictMode, null, innerElement) : innerElement;
	}
	function wrapUiIfNeeded(innerElement, wrapperComponent) {
	  return wrapperComponent ? /*#__PURE__*/React__namespace.createElement(wrapperComponent, null, innerElement) : innerElement;
	}
	function createConcurrentRoot(container, _ref) {
	  let {
	    hydrate,
	    ui,
	    wrapper: WrapperComponent
	  } = _ref;
	  let root;
	  if (hydrate) {
	    act(() => {
	      root = ReactDOMClient__namespace.hydrateRoot(container, strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)));
	    });
	  } else {
	    root = ReactDOMClient__namespace.createRoot(container);
	  }
	  return {
	    hydrate() {
	      /* istanbul ignore if */
	      if (!hydrate) {
	        throw new Error('Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.');
	      }
	      // Nothing to do since hydration happens when creating the root object.
	    },
	    render(element) {
	      root.render(element);
	    },
	    unmount() {
	      root.unmount();
	    }
	  };
	}
	function createLegacyRoot(container) {
	  return {
	    hydrate(element) {
	      ReactDOM__default["default"].hydrate(element, container);
	    },
	    render(element) {
	      ReactDOM__default["default"].render(element, container);
	    },
	    unmount() {
	      ReactDOM__default["default"].unmountComponentAtNode(container);
	    }
	  };
	}
	function renderRoot(ui, _ref2) {
	  let {
	    baseElement,
	    container,
	    hydrate,
	    queries,
	    root,
	    wrapper: WrapperComponent
	  } = _ref2;
	  act(() => {
	    if (hydrate) {
	      root.hydrate(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
	    } else {
	      root.render(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
	    }
	  });
	  return {
	    container,
	    baseElement,
	    debug: function (el, maxLength, options) {
	      if (el === void 0) {
	        el = baseElement;
	      }
	      return Array.isArray(el) ?
	      // eslint-disable-next-line no-console
	      el.forEach(e => console.log(prettyDOM(e, maxLength, options))) :
	      // eslint-disable-next-line no-console,
	      console.log(prettyDOM(el, maxLength, options));
	    },
	    unmount: () => {
	      act(() => {
	        root.unmount();
	      });
	    },
	    rerender: rerenderUi => {
	      renderRoot(rerenderUi, {
	        container,
	        baseElement,
	        root,
	        wrapper: WrapperComponent
	      });
	      // Intentionally do not return anything to avoid unnecessarily complicating the API.
	      // folks can use all the same utilities we return in the first place that are bound to the container
	    },
	    asFragment: () => {
	      /* istanbul ignore else (old jsdom limitation) */
	      if (typeof document.createRange === 'function') {
	        return document.createRange().createContextualFragment(container.innerHTML);
	      } else {
	        const template = document.createElement('template');
	        template.innerHTML = container.innerHTML;
	        return template.content;
	      }
	    },
	    ...getQueriesForElement(baseElement, queries)
	  };
	}
	function render(ui, _temp) {
	  let {
	    container,
	    baseElement = container,
	    legacyRoot = false,
	    queries,
	    hydrate = false,
	    wrapper
	  } = _temp === void 0 ? {} : _temp;
	  if (legacyRoot && typeof ReactDOM__default["default"].render !== 'function') {
	    const error = new Error('`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.');
	    Error.captureStackTrace(error, render);
	    throw error;
	  }
	  if (!baseElement) {
	    // default to document.body instead of documentElement to avoid output of potentially-large
	    // head elements (such as JSS style blocks) in debug output
	    baseElement = document.body;
	  }
	  if (!container) {
	    container = baseElement.appendChild(document.createElement('div'));
	  }
	  let root;
	  // eslint-disable-next-line no-negated-condition -- we want to map the evolution of this over time. The root is created first. Only later is it re-used so we don't want to read the case that happens later first.
	  if (!mountedContainers.has(container)) {
	    const createRootImpl = legacyRoot ? createLegacyRoot : createConcurrentRoot;
	    root = createRootImpl(container, {
	      hydrate,
	      ui,
	      wrapper
	    });
	    mountedRootEntries.push({
	      container,
	      root
	    });
	    // we'll add it to the mounted containers regardless of whether it's actually
	    // added to document.body so the cleanup method works regardless of whether
	    // they're passing us a custom container or not.
	    mountedContainers.add(container);
	  } else {
	    mountedRootEntries.forEach(rootEntry => {
	      // Else is unreachable since `mountedContainers` has the `container`.
	      // Only reachable if one would accidentally add the container to `mountedContainers` but not the root to `mountedRootEntries`
	      /* istanbul ignore else */
	      if (rootEntry.container === container) {
	        root = rootEntry.root;
	      }
	    });
	  }
	  return renderRoot(ui, {
	    container,
	    baseElement,
	    queries,
	    hydrate,
	    wrapper,
	    root
	  });
	}
	function cleanup() {
	  mountedRootEntries.forEach(_ref3 => {
	    let {
	      root,
	      container
	    } = _ref3;
	    act(() => {
	      root.unmount();
	    });
	    if (container.parentNode === document.body) {
	      document.body.removeChild(container);
	    }
	  });
	  mountedRootEntries.length = 0;
	  mountedContainers.clear();
	}
	function renderHook(renderCallback, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  const {
	    initialProps,
	    ...renderOptions
	  } = options;
	  if (renderOptions.legacyRoot && typeof ReactDOM__default["default"].render !== 'function') {
	    const error = new Error('`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.');
	    Error.captureStackTrace(error, renderHook);
	    throw error;
	  }
	  const result = /*#__PURE__*/React__namespace.createRef();
	  function TestComponent(_ref4) {
	    let {
	      renderCallbackProps
	    } = _ref4;
	    const pendingResult = renderCallback(renderCallbackProps);
	    React__namespace.useEffect(() => {
	      result.current = pendingResult;
	    });
	    return null;
	  }
	  const {
	    rerender: baseRerender,
	    unmount
	  } = render( /*#__PURE__*/React__namespace.createElement(TestComponent, {
	    renderCallbackProps: initialProps
	  }), renderOptions);
	  function rerender(rerenderCallbackProps) {
	    return baseRerender( /*#__PURE__*/React__namespace.createElement(TestComponent, {
	      renderCallbackProps: rerenderCallbackProps
	    }));
	  }
	  return {
	    result,
	    rerender,
	    unmount
	  };
	}

	/* eslint func-name-matching:0 */

	exports.act = act;
	exports.buildQueries = buildQueries;
	exports.cleanup = cleanup;
	exports.configure = configure;
	exports.createEvent = createEvent;
	exports.findAllByAltText = findAllByAltText;
	exports.findAllByDisplayValue = findAllByDisplayValue;
	exports.findAllByLabelText = findAllByLabelText;
	exports.findAllByPlaceholderText = findAllByPlaceholderText;
	exports.findAllByRole = findAllByRole;
	exports.findAllByTestId = findAllByTestId;
	exports.findAllByText = findAllByText;
	exports.findAllByTitle = findAllByTitle;
	exports.findByAltText = findByAltText;
	exports.findByDisplayValue = findByDisplayValue;
	exports.findByLabelText = findByLabelText;
	exports.findByPlaceholderText = findByPlaceholderText;
	exports.findByRole = findByRole;
	exports.findByTestId = findByTestId;
	exports.findByText = findByText;
	exports.findByTitle = findByTitle;
	exports.fireEvent = fireEvent;
	exports.getAllByAltText = getAllByAltText;
	exports.getAllByDisplayValue = getAllByDisplayValue;
	exports.getAllByLabelText = getAllByLabelTextWithSuggestions;
	exports.getAllByPlaceholderText = getAllByPlaceholderText;
	exports.getAllByRole = getAllByRole;
	exports.getAllByTestId = getAllByTestId;
	exports.getAllByText = getAllByText;
	exports.getAllByTitle = getAllByTitle;
	exports.getByAltText = getByAltText;
	exports.getByDisplayValue = getByDisplayValue;
	exports.getByLabelText = getByLabelTextWithSuggestions;
	exports.getByPlaceholderText = getByPlaceholderText;
	exports.getByRole = getByRole;
	exports.getByTestId = getByTestId;
	exports.getByText = getByText;
	exports.getByTitle = getByTitle;
	exports.getConfig = getConfig;
	exports.getDefaultNormalizer = getDefaultNormalizer;
	exports.getElementError = getElementError;
	exports.getMultipleElementsFoundError = getMultipleElementsFoundError;
	exports.getNodeText = getNodeText;
	exports.getQueriesForElement = getQueriesForElement;
	exports.getRoles = getRoles;
	exports.getSuggestedQuery = getSuggestedQuery;
	exports.isInaccessible = isInaccessible;
	exports.logDOM = logDOM;
	exports.logRoles = logRoles;
	exports.makeFindQuery = makeFindQuery;
	exports.makeGetAllQuery = makeGetAllQuery;
	exports.makeSingleQuery = makeSingleQuery;
	exports.prettyDOM = prettyDOM;
	exports.prettyFormat = index;
	exports.queries = queries;
	exports.queryAllByAltText = queryAllByAltTextWithSuggestions;
	exports.queryAllByAttribute = queryAllByAttribute;
	exports.queryAllByDisplayValue = queryAllByDisplayValueWithSuggestions;
	exports.queryAllByLabelText = queryAllByLabelTextWithSuggestions;
	exports.queryAllByPlaceholderText = queryAllByPlaceholderTextWithSuggestions;
	exports.queryAllByRole = queryAllByRoleWithSuggestions;
	exports.queryAllByTestId = queryAllByTestIdWithSuggestions;
	exports.queryAllByText = queryAllByTextWithSuggestions;
	exports.queryAllByTitle = queryAllByTitleWithSuggestions;
	exports.queryByAltText = queryByAltText;
	exports.queryByAttribute = queryByAttribute;
	exports.queryByDisplayValue = queryByDisplayValue;
	exports.queryByLabelText = queryByLabelText;
	exports.queryByPlaceholderText = queryByPlaceholderText;
	exports.queryByRole = queryByRole;
	exports.queryByTestId = queryByTestId;
	exports.queryByText = queryByText;
	exports.queryByTitle = queryByTitle;
	exports.queryHelpers = queryHelpers;
	exports.render = render;
	exports.renderHook = renderHook;
	exports.screen = screen;
	exports.waitFor = waitForWrapper;
	exports.waitForElementToBeRemoved = waitForElementToBeRemoved;
	exports.within = getQueriesForElement;
	exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion;
	exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react.pure.umd.js.map
