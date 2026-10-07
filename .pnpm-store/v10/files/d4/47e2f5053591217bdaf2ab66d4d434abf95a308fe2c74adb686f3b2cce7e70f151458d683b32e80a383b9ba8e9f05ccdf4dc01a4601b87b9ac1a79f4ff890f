(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TestingLibraryDom = {}));
})(this, (function (exports) { 'use strict';

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

  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  var build = {};

  var ansiStyles = {exports: {}};

  (function (module) {

    const ANSI_BACKGROUND_OFFSET = 10;
    const wrapAnsi256 = function (offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return code => "\x1B[" + (38 + offset) + ";5;" + code + "m";
    };
    const wrapAnsi16m = function (offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (red, green, blue) => "\x1B[" + (38 + offset) + ";2;" + red + ";" + green + ";" + blue + "m";
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
      for (const _ref of Object.entries(styles)) {
        const groupName = _ref[0];
        const group = _ref[1];
        for (const _ref2 of Object.entries(group)) {
          const styleName = _ref2[0];
          const style = _ref2[1];
          styles[styleName] = {
            open: "\x1B[" + style[0] + "m",
            close: "\x1B[" + style[1] + "m"
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
            let colorString = matches.groups.colorString;
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
  var Symbol$2 = global$1['jest-symbol-do-not-touch'] || global$1.Symbol;
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
  const test$6 = val => val && val.$$typeof === asymmetricMatcher;
  AsymmetricMatcher.test = test$6;
  const plugin$6 = {
    serialize: serialize$6,
    test: test$6
  };
  var _default$2q = plugin$6;
  AsymmetricMatcher.default = _default$2q;

  var ConvertAnsi = {};

  var ansiRegex = function (_temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$onlyFirst = _ref.onlyFirst,
      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;
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
  const test$5 = val => typeof val === 'string' && !!val.match((0, _ansiRegex.default)());
  ConvertAnsi.test = test$5;
  const serialize$5 = (val, config, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
  ConvertAnsi.serialize = serialize$5;
  const plugin$5 = {
    serialize: serialize$5,
    test: test$5
  };
  var _default$2p = plugin$5;
  ConvertAnsi.default = _default$2p;

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
  const test$4 = val => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
  DOMCollection$1.test = test$4;
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
    test: test$4
  };
  var _default$2o = plugin$4;
  DOMCollection$1.default = _default$2o;

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
    const nodeType = val.nodeType,
      tagName = val.tagName;
    const isCustomElement = typeof tagName === 'string' && tagName.includes('-') || testHasAttribute(val);
    return nodeType === ELEMENT_NODE$2 && (ELEMENT_REGEXP$1.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE$2 && constructorName === 'Text' || nodeType === COMMENT_NODE$2 && constructorName === 'Comment' || nodeType === FRAGMENT_NODE$1 && constructorName === 'DocumentFragment';
  };
  const test$3 = val => {
    var _val$constructor;
    return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode$1(val);
  };
  DOMElement.test = test$3;
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
    test: test$3
  };
  var _default$2n = plugin$3;
  DOMElement.default = _default$2n;

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
  const test$2 = val => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
  Immutable.test = test$2;
  const plugin$2 = {
    serialize: serialize$2,
    test: test$2
  };
  var _default$2m = plugin$2;
  Immutable.default = _default$2m;

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
    const props = element.props;
    return Object.keys(props).filter(key => key !== 'children' && props[key] !== undefined).sort();
  };
  const serialize$1 = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup$1.printElementAsLeaf)(getType(element), config) : (0, _markup$1.printElement)(getType(element), (0, _markup$1.printProps)(getPropKeys$1(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup$1.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
  ReactElement.serialize = serialize$1;
  const test$1 = val => val != null && ReactIs.isElement(val);
  ReactElement.test = test$1;
  const plugin$1 = {
    serialize: serialize$1,
    test: test$1
  };
  var _default$2l = plugin$1;
  ReactElement.default = _default$2l;

  var ReactTestComponent = {};

  Object.defineProperty(ReactTestComponent, '__esModule', {
    value: true
  });
  ReactTestComponent.test = ReactTestComponent.serialize = ReactTestComponent.default = void 0;
  var _markup = markup;
  var global = function () {
    if (typeof globalThis !== 'undefined') {
      return globalThis;
    } else if (typeof global !== 'undefined') {
      return global;
    } else if (typeof self !== 'undefined') {
      return self;
    } else if (typeof window !== 'undefined') {
      return window;
    } else {
      return Function('return this')();
    }
  }();
  var Symbol$1 = global['jest-symbol-do-not-touch'] || global.Symbol;
  const testSymbol = typeof Symbol$1 === 'function' && Symbol$1.for ? Symbol$1.for('react.test.json') : 0xea71357;
  const getPropKeys = object => {
    const props = object.props;
    return props ? Object.keys(props).filter(key => props[key] !== undefined).sort() : [];
  };
  const serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);
  ReactTestComponent.serialize = serialize;
  const test = val => val && val.$$typeof === testSymbol;
  ReactTestComponent.test = test;
  const plugin = {
    serialize,
    test
  };
  var _default$2k = plugin;
  ReactTestComponent.default = _default$2k;

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
  const toString = Object.prototype.toString;
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
    return String(val + "n");
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
    const toStringed = toString.call(val);
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
    const toStringed = toString.call(val);
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
      throw new Error("pretty-format: Plugin must return type \"string\" but instead returned \"" + typeof printed + "\".");
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
        throw new Error("pretty-format: Unknown option \"" + key + "\".");
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
        throw new Error("pretty-format: Option \"theme\" must be of type \"object\" but instead received \"" + typeof options.theme + "\".");
      }
    }
  }
  const getColorsHighlight = options => DEFAULT_THEME_KEYS.reduce((colors, key) => {
    const value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
    const color = value && _ansiStyles.default[value];
    if (color && typeof color.close === 'string' && typeof color.open === 'string') {
      colors[key] = color;
    } else {
      throw new Error("pretty-format: Option \"theme\" has a key \"" + key + "\" whose value \"" + value + "\" is undefined in ansi-styles.");
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
  const getConfig$1 = options => {
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
          return printPlugin(plugin, val, getConfig$1(options), '', 0, []);
        }
      }
    }
    const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
    if (basicResult !== null) {
      return basicResult;
    }
    return printComplexValue(val, getConfig$1(options), '', 0, []);
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
  var _default$2j = format;
  default_1 = build.default = _default$2j;

  var index = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    get DEFAULT_OPTIONS () { return DEFAULT_OPTIONS_1; },
    format: format_1,
    get plugins () { return plugins_1; },
    get default () { return default_1; }
  }, [build]);

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
  const isCustomElement = val => {
    const tagName = val.tagName;
    return Boolean(typeof tagName === 'string' && tagName.includes('-') || typeof val.hasAttribute === 'function' && val.hasAttribute('is'));
  };
  const testNode = val => {
    const constructorName = val.constructor.name;
    const nodeType = val.nodeType;
    return nodeType === ELEMENT_NODE$1 && (ELEMENT_REGEXP.test(constructorName) || isCustomElement(val)) || nodeType === TEXT_NODE$1 && constructorName === 'Text' || nodeType === COMMENT_NODE$1 && constructorName === 'Comment' || nodeType === FRAGMENT_NODE && constructorName === 'DocumentFragment';
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
        return ((val == null || (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) || isCustomElement(val)) && testNode(val);
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
  let picocolors = null;
  let readFileSync = null;
  let codeFrameColumns = null;
  try {
    const nodeRequire = module && module.require;
    readFileSync = nodeRequire.call(module, 'fs').readFileSync;
    codeFrameColumns = nodeRequire.call(module, '@babel/code-frame').codeFrameColumns;
    picocolors = nodeRequire.call(module, 'picocolors');
  } catch {
    // We're in a browser environment
  }

  // frame has the form "at myMethod (location/to/my/file.js:10:2)"
  function getCodeFrame(frame) {
    const locationStart = frame.indexOf('(') + 1;
    const locationEnd = frame.indexOf(')');
    const frameLocation = frame.slice(locationStart, locationEnd);
    const frameLocationElements = frameLocation.split(':');
    const _ref = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)],
      filename = _ref[0],
      line = _ref[1],
      column = _ref[2];
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
    return picocolors.dim(frameLocation) + "\n" + codeFrame + "\n";
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
  function jestFakeTimersAreEnabled() {
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

  const _excluded$1 = ["filterNode"];
  const shouldHighlight = () => {
    if (typeof process === 'undefined') {
      // Don't colorize in non-node environments (e.g. Browsers)
      return false;
    }
    let colors;
    // Try to safely parse env COLORS: We will default behavior if any step fails.
    try {
      var _process$env;
      const colorsJSON = (_process$env = process.env) == null ? void 0 : _process$env.COLORS;
      if (colorsJSON) {
        colors = JSON.parse(colorsJSON);
      }
    } catch {
      // If this throws, process.env?.COLORS wasn't parsable. Since we only
      // care about `true` or `false`, we can safely ignore the error.
    }
    if (typeof colors === 'boolean') {
      // If `colors` is set explicitly (both `true` and `false`), use that value.
      return colors;
    } else {
      // If `colors` is not set, colorize if we're in node.
      return process.versions !== undefined && process.versions.node !== undefined;
    }
  };
  const DOMCollection = plugins_1.DOMCollection;

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
  const ELEMENT_NODE = 1;
  const COMMENT_NODE = 8;

  // https://github.com/facebook/jest/blob/615084195ae1ae61ddd56162c62bbdda17587569/packages/pretty-format/src/plugins/DOMElement.ts#L50
  function filterCommentsAndDefaultIgnoreTagsTags(value) {
    return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches(getConfig().defaultIgnore));
  }
  function prettyDOM(dom, maxLength, options) {
    if (options === void 0) {
      options = {};
    }
    if (!dom) {
      dom = getDocument().body;
    }
    if (typeof maxLength !== 'number') {
      maxLength = typeof process !== 'undefined' && typeof process.env !== 'undefined' && undefined || 7000;
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
    const _options = options,
      _options$filterNode = _options.filterNode,
      filterNode = _options$filterNode === void 0 ? filterCommentsAndDefaultIgnoreTagsTags : _options$filterNode,
      prettyFormatOptions = _objectWithoutPropertiesLoose(_options, _excluded$1);
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
  function configure(newConfig) {
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
  function getConfig() {
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
  function getLabels$1(container, element, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '*' : _ref$selector;
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
      throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
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
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$trim = _ref.trim,
      trim = _ref$trim === void 0 ? true : _ref$trim,
      _ref$collapseWhitespa = _ref.collapseWhitespace,
      collapseWhitespace = _ref$collapseWhitespa === void 0 ? true : _ref$collapseWhitespa;
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

  function makeNormalizer(_ref2) {
    let trim = _ref2.trim,
      collapseWhitespace = _ref2.collapseWhitespace,
      normalizer = _ref2.normalizer;
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

  /**
   * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}
   * but without thisArg (too hard to type, no need to `this`)
   */
  var toStr = Object.prototype.toString;
  function isCallable(fn) {
    return typeof fn === "function" || toStr.call(fn) === "[object Function]";
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
      if (!isCallable(mapFn)) {
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
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);

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

  function isElement(node) {
    return node !== null && node.nodeType === node.ELEMENT_NODE;
  }
  function isHTMLTableCaptionElement(node) {
    return isElement(node) && getLocalName(node) === "caption";
  }
  function isHTMLInputElement(node) {
    return isElement(node) && getLocalName(node) === "input";
  }
  function isHTMLOptGroupElement(node) {
    return isElement(node) && getLocalName(node) === "optgroup";
  }
  function isHTMLSelectElement(node) {
    return isElement(node) && getLocalName(node) === "select";
  }
  function isHTMLTableElement(node) {
    return isElement(node) && getLocalName(node) === "table";
  }
  function isHTMLTextAreaElement(node) {
    return isElement(node) && getLocalName(node) === "textarea";
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
    return isElement(node) && getLocalName(node) === "fieldset";
  }
  function isHTMLLegendElement(node) {
    return isElement(node) && getLocalName(node) === "legend";
  }
  function isHTMLSlotElement(node) {
    return isElement(node) && getLocalName(node) === "slot";
  }
  function isSVGElement(node) {
    return isElement(node) && node.ownerSVGElement !== undefined;
  }
  function isSVGSVGElement(node) {
    return isElement(node) && getLocalName(node) === "svg";
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
    if (isElement(node) && node.hasAttribute(attributeName)) {
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
    if (isElement(node)) {
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
    if (!isElement(node)) {
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
    if (!isElement(node)) {
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
      if (labelableElement === null && isElement(childNode)) {
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
  function getLabels(element) {
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
      if (isElement(node) && computedStyleSupportsPseudoElements) {
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
        var display = isElement(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
        var separator = display !== "inline" ? " " : "";
        // trailing separator for wpt tests
        accumulatedText += "".concat(separator).concat(result).concat(separator);
      });
      if (isElement(node) && computedStyleSupportsPseudoElements) {
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
      if (!isElement(node)) {
        return null;
      }
      return useAttribute(node, "title");
    }
    function computeElementTextAlternative(node) {
      if (!isElement(node)) {
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
      var labels = getLabels(node);
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
      var labelAttributeNode = isElement(current) ? current.getAttributeNode("aria-labelledby") : null;
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
        var ariaLabel = (isElement(current) && current.getAttribute("aria-label") || "").trim();
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
      if (allowsNameFromContent(current) || isElement(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement()) {
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
  var _default$2i = iteratorProxy;
  iteratorProxy$1.default = _default$2i;

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
  }], ['aria-braillelabel', {
    'type': 'string'
  }], ['aria-brailleroledescription', {
    'type': 'string'
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
  }], ['aria-description', {
    'type': 'string'
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
  var _default$2h = (0, _iterationDecorator$4.default)(ariaPropsMap, ariaPropsMap.entries());
  ariaPropsMap$1.default = _default$2h;

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
  var _default$2g = (0, _iterationDecorator$3.default)(domMap, domMap.entries());
  domMap$1.default = _default$2g;

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
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']]
  };
  var _default$2f = commandRole;
  commandRole$1.default = _default$2f;

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
  var _default$2e = compositeRole;
  compositeRole$1.default = _default$2e;

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
  var _default$2d = inputRole;
  inputRole$1.default = _default$2d;

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
  var _default$2c = landmarkRole;
  landmarkRole$1.default = _default$2c;

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
  var _default$2b = rangeRole;
  rangeRole$1.default = _default$2b;

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
  var _default$2a = roletypeRole;
  roletypeRole$1.default = _default$2a;

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
  var _default$29 = sectionRole;
  sectionRole$1.default = _default$29;

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
  var _default$28 = sectionheadRole;
  sectionheadRole$1.default = _default$28;

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
  var _default$27 = selectRole;
  selectRole$1.default = _default$27;

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
  var _default$26 = structureRole;
  structureRole$1.default = _default$26;

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
  var _default$25 = widgetRole;
  widgetRole$1.default = _default$25;

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
  var _default$24 = windowRole;
  windowRole$1.default = _default$24;

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
  var _default$23 = ariaAbstractRoles;
  ariaAbstractRoles$1.default = _default$23;

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
  var _default$22 = alertRole;
  alertRole$1.default = _default$22;

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
  var _default$21 = alertdialogRole;
  alertdialogRole$1.default = _default$21;

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
  var _default$20 = applicationRole;
  applicationRole$1.default = _default$20;

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
  var _default$1$ = articleRole;
  articleRole$1.default = _default$1$;

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
        constraints: ['scoped to the body element'],
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
  var _default$1_ = bannerRole;
  bannerRole$1.default = _default$1_;

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
    relatedConcepts: [{
      concept: {
        name: 'blockquote'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1Z = blockquoteRole;
  blockquoteRole$1.default = _default$1Z;

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
  var _default$1Y = buttonRole;
  buttonRole$1.default = _default$1Y;

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
    relatedConcepts: [{
      concept: {
        name: 'caption'
      },
      module: 'HTML'
    }],
    requireContextRole: ['figure', 'grid', 'table'],
    requiredContextRole: ['figure', 'grid', 'table'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1X = captionRole;
  captionRole$1.default = _default$1X;

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
        constraints: ['ancestor table element has table role'],
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
  var _default$1W = cellRole;
  cellRole$1.default = _default$1W;

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
  var _default$1V = checkboxRole;
  checkboxRole$1.default = _default$1V;

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
    relatedConcepts: [{
      concept: {
        name: 'code'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1U = codeRole;
  codeRole$1.default = _default$1U;

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
      concept: {
        name: 'th'
      },
      module: 'HTML'
    }, {
      concept: {
        attributes: [{
          name: 'scope',
          value: 'col'
        }],
        name: 'th'
      },
      module: 'HTML'
    }, {
      concept: {
        attributes: [{
          name: 'scope',
          value: 'colgroup'
        }],
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
  var _default$1T = columnheaderRole;
  columnheaderRole$1.default = _default$1T;

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
        constraints: ['the multiple attribute is not set and the size attribute does not have a value greater than 1'],
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
  var _default$1S = comboboxRole;
  comboboxRole$1.default = _default$1S;

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
    }, {
      concept: {
        attributes: [{
          constraints: ['set'],
          name: 'aria-label'
        }],
        constraints: ['scoped to a sectioning content element', 'scoped to a sectioning root element other than body'],
        name: 'aside'
      },
      module: 'HTML'
    }, {
      concept: {
        attributes: [{
          constraints: ['set'],
          name: 'aria-labelledby'
        }],
        constraints: ['scoped to a sectioning content element', 'scoped to a sectioning root element other than body'],
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
  var _default$1R = complementaryRole;
  complementaryRole$1.default = _default$1R;

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
        constraints: ['scoped to the body element'],
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
  var _default$1Q = contentinfoRole;
  contentinfoRole$1.default = _default$1Q;

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
  var _default$1P = definitionRole;
  definitionRole$1.default = _default$1P;

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
    relatedConcepts: [{
      concept: {
        name: 'del'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1O = deletionRole;
  deletionRole$1.default = _default$1O;

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
  var _default$1N = dialogRole;
  dialogRole$1.default = _default$1N;

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
  var _default$1M = directoryRole;
  directoryRole$1.default = _default$1M;

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
        name: 'html'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  };
  var _default$1L = documentRole;
  documentRole$1.default = _default$1L;

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
    relatedConcepts: [{
      concept: {
        name: 'em'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1K = emphasisRole;
  emphasisRole$1.default = _default$1K;

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
  var _default$1J = feedRole;
  feedRole$1.default = _default$1J;

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
  var _default$1I = figureRole;
  figureRole$1.default = _default$1I;

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
  var _default$1H = formRole;
  formRole$1.default = _default$1H;

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
        name: 'a'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'area'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'aside'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'b'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'bdo'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'body'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'data'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'div'
      },
      module: 'HTML'
    }, {
      concept: {
        constraints: ['scoped to the main element', 'scoped to a sectioning content element', 'scoped to a sectioning root element other than body'],
        name: 'footer'
      },
      module: 'HTML'
    }, {
      concept: {
        constraints: ['scoped to the main element', 'scoped to a sectioning content element', 'scoped to a sectioning root element other than body'],
        name: 'header'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'hgroup'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'i'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'pre'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'q'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'samp'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'section'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'small'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'span'
      },
      module: 'HTML'
    }, {
      concept: {
        name: 'u'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  };
  var _default$1G = genericRole;
  genericRole$1.default = _default$1G;

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
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'table']]
  };
  var _default$1F = gridRole;
  gridRole$1.default = _default$1F;

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
        constraints: ['ancestor table element has grid role', 'ancestor table element has treegrid role'],
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
  var _default$1E = gridcellRole;
  gridcellRole$1.default = _default$1E;

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
    }, {
      concept: {
        name: 'address'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1D = groupRole;
  groupRole$1.default = _default$1D;

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
  var _default$1C = headingRole;
  headingRole$1.default = _default$1C;

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
  var _default$1B = imgRole;
  imgRole$1.default = _default$1B;

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
    relatedConcepts: [{
      concept: {
        name: 'ins'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1A = insertionRole;
  insertionRole$1.default = _default$1A;

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
          constraints: ['set'],
          name: 'href'
        }],
        name: 'a'
      },
      module: 'HTML'
    }, {
      concept: {
        attributes: [{
          constraints: ['set'],
          name: 'href'
        }],
        name: 'area'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']]
  };
  var _default$1z = linkRole;
  linkRole$1.default = _default$1z;

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
  var _default$1y = listRole;
  listRole$1.default = _default$1y;

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
        }],
        constraints: ['the size attribute value is greater than 1'],
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
  var _default$1x = listboxRole;
  listboxRole$1.default = _default$1x;

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
        constraints: ['direct descendant of ol', 'direct descendant of ul', 'direct descendant of menu'],
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
  var _default$1w = listitemRole;
  listitemRole$1.default = _default$1w;

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
  var _default$1v = logRole;
  logRole$1.default = _default$1v;

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
  var _default$1u = mainRole;
  mainRole$1.default = _default$1u;

  var markRole$1 = {};

  Object.defineProperty(markRole$1, "__esModule", {
    value: true
  });
  markRole$1.default = void 0;
  var markRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: ['prohibited'],
    prohibitedProps: [],
    props: {
      'aria-braillelabel': null,
      'aria-brailleroledescription': null,
      'aria-description': null
    },
    relatedConcepts: [{
      concept: {
        name: 'mark'
      },
      module: 'HTML'
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  };
  var _default$1t = markRole;
  markRole$1.default = _default$1t;

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
    relatedConcepts: [{
      concept: {
        name: 'meter'
      },
      module: 'HTML'
    }],
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
    relatedConcepts: [{
      concept: {
        name: 'p'
      },
      module: 'HTML'
    }],
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
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: 'alt',
          value: ''
        }],
        name: 'img'
      },
      module: 'HTML'
    }],
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
        constraints: ['the list attribute is not set'],
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
    relatedConcepts: [{
      concept: {
        name: 'strong'
      },
      module: 'HTML'
    }],
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
    relatedConcepts: [{
      concept: {
        name: 'sub'
      },
      module: 'HTML'
    }],
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
    relatedConcepts: [{
      concept: {
        name: 'sup'
      },
      module: 'HTML'
    }],
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
        constraints: ['the list attribute is not set'],
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
        constraints: ['the list attribute is not set'],
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
        constraints: ['the list attribute is not set'],
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
        constraints: ['the list attribute is not set'],
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
        constraints: ['the list attribute is not set'],
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
    relatedConcepts: [{
      concept: {
        name: 'time'
      },
      module: 'HTML'
    }],
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
  var _markRole = _interopRequireDefault$6(markRole$1);
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
  var ariaLiteralRoles = [['alert', _alertRole.default], ['alertdialog', _alertdialogRole.default], ['application', _applicationRole.default], ['article', _articleRole.default], ['banner', _bannerRole.default], ['blockquote', _blockquoteRole.default], ['button', _buttonRole.default], ['caption', _captionRole.default], ['cell', _cellRole.default], ['checkbox', _checkboxRole.default], ['code', _codeRole.default], ['columnheader', _columnheaderRole.default], ['combobox', _comboboxRole.default], ['complementary', _complementaryRole.default], ['contentinfo', _contentinfoRole.default], ['definition', _definitionRole.default], ['deletion', _deletionRole.default], ['dialog', _dialogRole.default], ['directory', _directoryRole.default], ['document', _documentRole.default], ['emphasis', _emphasisRole.default], ['feed', _feedRole.default], ['figure', _figureRole.default], ['form', _formRole.default], ['generic', _genericRole.default], ['grid', _gridRole.default], ['gridcell', _gridcellRole.default], ['group', _groupRole.default], ['heading', _headingRole.default], ['img', _imgRole.default], ['insertion', _insertionRole.default], ['link', _linkRole.default], ['list', _listRole.default], ['listbox', _listboxRole.default], ['listitem', _listitemRole.default], ['log', _logRole.default], ['main', _mainRole.default], ['mark', _markRole.default], ['marquee', _marqueeRole.default], ['math', _mathRole.default], ['menu', _menuRole.default], ['menubar', _menubarRole.default], ['menuitem', _menuitemRole.default], ['menuitemcheckbox', _menuitemcheckboxRole.default], ['menuitemradio', _menuitemradioRole.default], ['meter', _meterRole.default], ['navigation', _navigationRole.default], ['none', _noneRole.default], ['note', _noteRole.default], ['option', _optionRole.default], ['paragraph', _paragraphRole.default], ['presentation', _presentationRole.default], ['progressbar', _progressbarRole.default], ['radio', _radioRole.default], ['radiogroup', _radiogroupRole.default], ['region', _regionRole.default], ['row', _rowRole.default], ['rowgroup', _rowgroupRole.default], ['rowheader', _rowheaderRole.default], ['scrollbar', _scrollbarRole.default], ['search', _searchRole.default], ['searchbox', _searchboxRole.default], ['separator', _separatorRole.default], ['slider', _sliderRole.default], ['spinbutton', _spinbuttonRole.default], ['status', _statusRole.default], ['strong', _strongRole.default], ['subscript', _subscriptRole.default], ['superscript', _superscriptRole.default], ['switch', _switchRole.default], ['tab', _tabRole.default], ['table', _tableRole.default], ['tablist', _tablistRole.default], ['tabpanel', _tabpanelRole.default], ['term', _termRole.default], ['textbox', _textboxRole.default], ['time', _timeRole.default], ['timer', _timerRole.default], ['toolbar', _toolbarRole.default], ['tooltip', _tooltipRole.default], ['tree', _treeRole.default], ['treegrid', _treegridRole.default], ['treeitem', _treeitemRole.default]];
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
    nameFrom: ['author', 'contents'],
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

  var lite = {};

  var has = Object.prototype.hasOwnProperty;
  function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
      if (ctor === Date) return foo.getTime() === bar.getTime();
      if (ctor === RegExp) return foo.toString() === bar.toString();
      if (ctor === Array) {
        if ((len = foo.length) === bar.length) {
          while (len-- && dequal(foo[len], bar[len]));
        }
        return len === -1;
      }
      if (!ctor || typeof foo === 'object') {
        len = 0;
        for (ctor in foo) {
          if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
          if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
        }
        return Object.keys(bar).length === len;
      }
    }
    return foo !== foo && bar !== bar;
  }
  lite.dequal = dequal;

  Object.defineProperty(elementRoleMap$1, "__esModule", {
    value: true
  });
  elementRoleMap$1.default = void 0;
  var _lite = lite;
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
    var key$1 = keys$1[i$1];
    var role$1 = _rolesMap$2.default.get(key$1);
    if (role$1) {
      var concepts$1 = [].concat(role$1.baseConcepts, role$1.relatedConcepts);
      for (var k$1 = 0; k$1 < concepts$1.length; k$1++) {
        var relation$1 = concepts$1[k$1];
        if (relation$1.module === 'HTML') {
          (function () {
            var concept = relation$1.concept;
            if (concept) {
              var elementRoleRelation = elementRoles$1.find(function (relation) {
                return (0, _lite.dequal)(relation, concept);
              });
              var roles;
              if (elementRoleRelation) {
                roles = elementRoleRelation[1];
              } else {
                roles = [];
              }
              var isUnique = true;
              for (var _i = 0; _i < roles.length; _i++) {
                if (roles[_i] === key$1) {
                  isUnique = false;
                  break;
                }
              }
              if (isUnique) {
                roles.push(key$1);
              }
              elementRoles$1.push([concept, roles]);
            }
          })();
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
        return key.name === tuple[0].name && (0, _lite.dequal)(key.attributes, tuple[0].attributes);
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
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var role = _rolesMap$1.default.get(key);
    var relationConcepts = [];
    if (role) {
      var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
      for (var k = 0; k < concepts.length; k++) {
        var relation = concepts[k];
        if (relation.module === 'HTML') {
          var concept = relation.concept;
          if (concept != null) {
            relationConcepts.push(concept);
          }
        }
      }
      if (relationConcepts.length > 0) {
        roleElement.push([key, relationConcepts]);
      }
    }
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
            _key = _step$value[0],
            values = _step$value[1];
          fn.call(thisArg, values, _key, roleElement);
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
    const _options = options,
      _options$isSubtreeIna = _options.isSubtreeInaccessible,
      isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
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
    for (const _ref of elementRoleList) {
      const match = _ref.match;
      const roles = _ref.roles;
      if (match(currentNode)) {
        return [...roles];
      }
    }
    return [];
  }
  function buildElementRoleList(elementRolesMap) {
    function makeElementSelector(_ref2) {
      let name = _ref2.name,
        attributes = _ref2.attributes;
      return "" + name + attributes.map(_ref3 => {
        let attributeName = _ref3.name,
          value = _ref3.value,
          _ref3$constraints = _ref3.constraints,
          constraints = _ref3$constraints === void 0 ? [] : _ref3$constraints;
        const shouldNotExist = constraints.indexOf('undefined') !== -1;
        const shouldBeNonEmpty = constraints.indexOf('set') !== -1;
        const hasExplicitValue = typeof value !== 'undefined';
        if (hasExplicitValue) {
          return "[" + attributeName + "=\"" + value + "\"]";
        } else if (shouldNotExist) {
          return ":not([" + attributeName + "])";
        } else if (shouldBeNonEmpty) {
          return "[" + attributeName + "]:not([" + attributeName + "=\"\"])";
        }
        return "[" + attributeName + "]";
      }).join('');
    }
    function getSelectorSpecificity(_ref4) {
      let _ref4$attributes = _ref4.attributes,
        attributes = _ref4$attributes === void 0 ? [] : _ref4$attributes;
      return attributes.length;
    }
    function bySelectorSpecificity(_ref5, _ref6) {
      let leftSpecificity = _ref5.specificity;
      let rightSpecificity = _ref6.specificity;
      return rightSpecificity - leftSpecificity;
    }
    function match(element) {
      let _element$attributes = element.attributes,
        attributes = _element$attributes === void 0 ? [] : _element$attributes;

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
    for (const _ref7 of elementRolesMap.entries()) {
      const element = _ref7[0];
      const roles = _ref7[1];
      result = [...result, {
        match: match(element),
        roles: Array.from(roles),
        specificity: getSelectorSpecificity(element)
      }];
    }
    return result.sort(bySelectorSpecificity);
  }
  function getRoles(container, _temp) {
    let _ref8 = _temp === void 0 ? {} : _temp,
      _ref8$hidden = _ref8.hidden,
      hidden = _ref8$hidden === void 0 ? false : _ref8$hidden;
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
  function prettyRoles(dom, _ref9) {
    let hidden = _ref9.hidden,
      includeDescription = _ref9.includeDescription;
    const roles = getRoles(dom, {
      hidden
    });
    // We prefer to skip generic role, we don't recommend it
    return Object.entries(roles).filter(_ref0 => {
      let role = _ref0[0];
      return role !== 'generic';
    }).map(_ref1 => {
      let role = _ref1[0],
        elements = _ref1[1];
      const delimiterBar = '-'.repeat(50);
      const elementsString = elements.map(el => {
        const nameString = "Name \"" + computeAccessibleName(el, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        }) + "\":\n";
        const domString = prettyDOM(el.cloneNode(false));
        if (includeDescription) {
          const descriptionString = "Description \"" + computeAccessibleDescription(el, {
            computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
          }) + "\":\n";
          return "" + nameString + descriptionString + domString;
        }
        return "" + nameString + domString;
      }).join('\n\n');
      return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
    }).join('\n');
  }
  const logRoles = function (dom, _temp2) {
    let _ref10 = _temp2 === void 0 ? {} : _temp2,
      _ref10$hidden = _ref10.hidden,
      hidden = _ref10$hidden === void 0 ? false : _ref10$hidden;
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
    var _ref11, _checkBooleanAttribut;
    // https://www.w3.org/TR/wai-aria-1.1/#aria-current
    return (_ref11 = (_checkBooleanAttribut = checkBooleanAttribute(element, 'aria-current')) != null ? _checkBooleanAttribut : element.getAttribute('aria-current')) != null ? _ref11 : false;
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
    let variant = _ref.variant,
      name = _ref.name;
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
        let text = queryArgs[0],
          options = queryArgs[1];
        text = typeof text === 'string' ? "'" + text + "'" : text;
        options = options ? ", { " + Object.entries(options).map(_ref2 => {
          let k = _ref2[0],
            v = _ref2[1];
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
    if (element.matches(getConfig().defaultIgnore)) {
      return undefined;
    }

    //We prefer to suggest something else if the role is generic
    const role = (_element$getAttribute = element.getAttribute('role')) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
    if (role !== 'generic' && canSuggest('Role', method, role)) {
      return makeSuggestion('Role', element, role, {
        variant,
        name: computeAccessibleName(element, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        })
      });
    }
    const labelText = getLabels$1(document, element).map(label => label.content).join(' ');
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
    const testId = element.getAttribute(getConfig().testIdAttribute);
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
    let _ref$container = _ref.container,
      container = _ref$container === void 0 ? getDocument() : _ref$container,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$showOriginalStac = _ref.showOriginalStackTrace,
      showOriginalStackTrace = _ref$showOriginalStac === void 0 ? getConfig().showOriginalStackTrace : _ref$showOriginalStac,
      stackTraceError = _ref.stackTraceError,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 50 : _ref$interval,
      _ref$onTimeout = _ref.onTimeout,
      onTimeout = _ref$onTimeout === void 0 ? error => {
        Object.defineProperty(error, 'message', {
          value: getConfig().getElementError(error.message, container).message
        });
        return error;
      } : _ref$onTimeout,
      _ref$mutationObserver = _ref.mutationObserverOptions,
      mutationObserverOptions = _ref$mutationObserver === void 0 ? {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true
      } : _ref$mutationObserver;
    if (typeof callback !== 'function') {
      throw new TypeError('Received `callback` arg must be a function');
    }
    return new Promise(async (resolve, reject) => {
      let lastError, intervalId, observer;
      let finished = false;
      let promiseStatus = 'idle';
      const overallTimeoutTimer = setTimeout(handleTimeout, timeout);
      const usingJestFakeTimers = jestFakeTimersAreEnabled();
      if (usingJestFakeTimers) {
        const _getConfig = getConfig(),
          advanceTimersWrapper = _getConfig.unstable_advanceTimersWrapper;
        checkCallback();
        // this is a dangerous rule to disable because it could lead to an
        // infinite loop. However, eslint isn't smart enough to know that we're
        // setting finished inside `onDone` which will be called when we're done
        // waiting or when we've timed out.
        // eslint-disable-next-line no-unmodified-loop-condition
        while (!finished) {
          if (!jestFakeTimersAreEnabled()) {
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
        const _getWindowFromNode = getWindowFromNode(container),
          MutationObserver = _getWindowFromNode.MutationObserver;
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
        if (jestFakeTimersAreEnabled()) {
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
    return getConfig().asyncWrapper(() => waitFor(callback, {
      stackTraceError,
      ...options
    }));
  }

  /*
  eslint
    max-lines-per-function: ["error", {"max": 200}],
  */

  function getElementError(message, container) {
    return getConfig().getElementError(message, container);
  }
  function getMultipleElementsFoundError(message, container) {
    return getElementError(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
  }
  function queryAllByAttribute(attribute, container, text, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;
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
    return getConfig().getElementError("A better query is available, try this:\n" + suggestion.toString() + "\n", container);
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
        throw getConfig().getElementError(getMissingError(container, ...args), container);
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
    const _ref2 = args.slice(-1),
      _ref2$ = _ref2[0],
      _ref2$2 = _ref2$ === void 0 ? {} : _ref2$,
      _ref2$2$suggest = _ref2$2.suggest,
      suggest = _ref2$2$suggest === void 0 ? getConfig().throwSuggestions : _ref2$2$suggest;
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
    const _ref3 = args.slice(-1),
      _ref3$ = _ref3[0],
      _ref3$2 = _ref3$ === void 0 ? {} : _ref3$,
      _ref3$2$suggest = _ref3$2.suggest,
      suggest = _ref3$2$suggest === void 0 ? getConfig().throwSuggestions : _ref3$2$suggest;
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
      let textToMatch = _ref.textToMatch;
      return textToMatch !== null;
    });
  }
  const queryAllLabelsByText = function (container, text, _temp) {
    let _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$exact = _ref2.exact,
      exact = _ref2$exact === void 0 ? true : _ref2$exact,
      trim = _ref2.trim,
      collapseWhitespace = _ref2.collapseWhitespace,
      normalizer = _ref2.normalizer;
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    const textToMatchByLabels = queryAllLabels(container);
    return textToMatchByLabels.filter(_ref3 => {
      let node = _ref3.node,
        textToMatch = _ref3.textToMatch;
      return matcher(textToMatch, node, text, matchNormalizer);
    }).map(_ref4 => {
      let node = _ref4.node;
      return node;
    });
  };
  const queryAllByLabelText = function (container, text, _temp2) {
    let _ref5 = _temp2 === void 0 ? {} : _temp2,
      _ref5$selector = _ref5.selector,
      selector = _ref5$selector === void 0 ? '*' : _ref5$selector,
      _ref5$exact = _ref5.exact,
      exact = _ref5$exact === void 0 ? true : _ref5$exact,
      collapseWhitespace = _ref5.collapseWhitespace,
      trim = _ref5.trim,
      normalizer = _ref5.normalizer;
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
      const labelList = getLabels$1(container, labelledElement, {
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
          throw getConfig().getElementError(tagNames.map(tagName => "Found a label with the text of: " + text + ", however the element associated with this label (<" + tagName + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + tagName + " />, you can use aria-label or aria-labelledby instead.").join('\n\n'), container);
        } else {
          throw getConfig().getElementError("Found a label with the text of: " + text + ", however no form control was found associated to that label. Make sure you're using the \"for\" attribute or \"aria-labelledby\" attribute correctly.", container);
        }
      } else {
        throw getConfig().getElementError("Unable to find a label with the text of: " + text, container);
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
  const _buildQueries$6 = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6),
    queryByPlaceholderText = _buildQueries$6[0],
    getAllByPlaceholderText = _buildQueries$6[1],
    getByPlaceholderText = _buildQueries$6[2],
    findAllByPlaceholderText = _buildQueries$6[3],
    findByPlaceholderText = _buildQueries$6[4];

  const queryAllByText = function (container, text, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '*' : _ref$selector,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      _ref$ignore = _ref.ignore,
      ignore = _ref$ignore === void 0 ? getConfig().defaultIgnore : _ref$ignore,
      normalizer = _ref.normalizer;
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
    const _options = options,
      collapseWhitespace = _options.collapseWhitespace,
      trim = _options.trim,
      normalizer = _options.normalizer,
      selector = _options.selector;
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
  const _buildQueries$5 = buildQueries(queryAllByText, getMultipleError$5, getMissingError$5),
    queryByText = _buildQueries$5[0],
    getAllByText = _buildQueries$5[1],
    getByText = _buildQueries$5[2],
    findAllByText = _buildQueries$5[3],
    findByText = _buildQueries$5[4];

  const queryAllByDisplayValue = function (container, value, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;
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
  const _buildQueries$4 = buildQueries(queryAllByDisplayValue, getMultipleError$4, getMissingError$4),
    queryByDisplayValue = _buildQueries$4[0],
    getAllByDisplayValue = _buildQueries$4[1],
    getByDisplayValue = _buildQueries$4[2],
    findAllByDisplayValue = _buildQueries$4[3],
    findByDisplayValue = _buildQueries$4[4];

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
  const _buildQueries$3 = buildQueries(queryAllByAltText, getMultipleError$3, getMissingError$3),
    queryByAltText = _buildQueries$3[0],
    getAllByAltText = _buildQueries$3[1],
    getByAltText = _buildQueries$3[2],
    findAllByAltText = _buildQueries$3[3],
    findByAltText = _buildQueries$3[4];

  const isSvgTitle = node => {
    var _node$parentElement;
    return node.tagName.toLowerCase() === 'title' && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === 'svg';
  };
  const queryAllByTitle = function (container, text, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;
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
  const _buildQueries$2 = buildQueries(queryAllByTitle, getMultipleError$2, getMissingError$2),
    queryByTitle = _buildQueries$2[0],
    getAllByTitle = _buildQueries$2[1],
    getByTitle = _buildQueries$2[2],
    findAllByTitle = _buildQueries$2[3],
    findByTitle = _buildQueries$2[4];

  /* eslint-disable complexity */
  const queryAllByRole = function (container, role, _temp) {
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? getConfig().defaultHidden : _ref$hidden,
      name = _ref.name,
      description = _ref.description,
      _ref$queryFallbacks = _ref.queryFallbacks,
      queryFallbacks = _ref$queryFallbacks === void 0 ? false : _ref$queryFallbacks,
      selected = _ref.selected,
      busy = _ref.busy,
      checked = _ref.checked,
      pressed = _ref.pressed,
      current = _ref.current,
      level = _ref.level,
      expanded = _ref.expanded,
      _ref$value = _ref.value,
      _ref$value2 = _ref$value === void 0 ? {} : _ref$value,
      valueNow = _ref$value2.now,
      valueMin = _ref$value2.min,
      valueMax = _ref$value2.max,
      valueText = _ref$value2.text;
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
      // Leaving this for symmetry and forward compatibility
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
      var _allRoles$get0;
      // guard against unknown roles
      if (((_allRoles$get0 = roles_1.get(role)) == null ? void 0 : _allRoles$get0.props['aria-expanded']) === undefined) {
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
        const _roleValue$split = roleValue.split(' '),
          firstRoleAttributeToken = _roleValue$split[0];
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
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
      }), element, name, text => text);
    }).filter(element => {
      if (description === undefined) {
        // Don't care
        return true;
      }
      return matches(computeAccessibleDescription(element, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
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
    const implicitRoleSelectors = new Set(Array.from(roleRelations).map(_ref2 => {
      let name = _ref2.name;
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
    let _ref3 = _temp2 === void 0 ? {} : _temp2,
      name = _ref3.name;
    return "Found multiple elements with the role \"" + role + "\"" + getNameHint(name);
  };
  const getMissingError$1 = function (container, role, _temp3) {
    let _ref4 = _temp3 === void 0 ? {} : _temp3,
      _ref4$hidden = _ref4.hidden,
      hidden = _ref4$hidden === void 0 ? getConfig().defaultHidden : _ref4$hidden,
      name = _ref4.name,
      description = _ref4.description;
    if (getConfig()._disableExpensiveErrorDiagnostics) {
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
  const _buildQueries$1 = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1),
    queryByRole = _buildQueries$1[0],
    getAllByRole = _buildQueries$1[1],
    getByRole = _buildQueries$1[2],
    findAllByRole = _buildQueries$1[3],
    findByRole = _buildQueries$1[4];

  const getTestIdAttribute = () => getConfig().testIdAttribute;
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
  const _buildQueries = buildQueries(queryAllByTestId, getMultipleError, getMissingError),
    queryByTestId = _buildQueries[0],
    getAllByTestId = _buildQueries[1],
    getByTestId = _buildQueries[2],
    findAllByTestId = _buildQueries[3],
    findByTestId = _buildQueries[4];

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
    },
    pageHide: {
      EventType: 'PageTransitionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true
      }
    },
    pageShow: {
      EventType: 'PageTransitionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true
      }
    }
  };
  const eventAliasMap = {
    doubleClick: 'dblClick'
  };

  const _excluded = ["value", "files"],
    _excluded2 = ["bubbles", "cancelable", "detail"];
  function fireEvent(element, event) {
    return getConfig().eventWrapper(() => {
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
    let _ref = _temp === void 0 ? {} : _temp,
      _ref$EventType = _ref.EventType,
      EventType = _ref$EventType === void 0 ? 'Event' : _ref$EventType,
      _ref$defaultInit = _ref.defaultInit,
      defaultInit = _ref$defaultInit === void 0 ? {} : _ref$defaultInit;
    if (!node) {
      throw new Error("Unable to fire a \"" + eventName + "\" event - please provide a DOM element.");
    }
    const eventInit = {
      ...defaultInit,
      ...init
    };
    const _eventInit$target = eventInit.target,
      _eventInit$target2 = _eventInit$target === void 0 ? {} : _eventInit$target,
      value = _eventInit$target2.value,
      files = _eventInit$target2.files,
      targetProperties = _objectWithoutPropertiesLoose(_eventInit$target2, _excluded);
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
      const bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail,
        otherInit = _objectWithoutPropertiesLoose(eventInit, _excluded2);
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
    const _eventMap$key = eventMap[key],
      EventType = _eventMap$key.EventType,
      defaultInit = _eventMap$key.defaultInit;
    const eventName = key.toLowerCase();
    createEvent[key] = (node, init) => createEvent(eventName, node, init, {
      EventType,
      defaultInit
    });
    fireEvent[key] = (node, init) => fireEvent(node, createEvent[key](node, init));
  });

  // function written after some investigation here:
  // https://github.com/facebook/react/issues/10135#issuecomment-401496776
  function setNativeValue(element, value) {
    const _ref2 = Object.getOwnPropertyDescriptor(element, 'value') || {},
      valueSetter = _ref2.set;
    const prototype = Object.getPrototypeOf(element);
    const _ref3 = Object.getOwnPropertyDescriptor(prototype, 'value') || {},
      prototypeValueSetter = _ref3.set;
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
    fireEvent[aliasKey] = function () {
      return fireEvent[key](...arguments);
    };
  });

  /* eslint complexity:["error", 9] */

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

  // WARNING: `lz-string` only has a default export but statically we assume named exports are allowed
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

  exports.buildQueries = buildQueries;
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
  exports.screen = screen;
  exports.waitFor = waitForWrapper;
  exports.waitForElementToBeRemoved = waitForElementToBeRemoved;
  exports.within = getQueriesForElement;
  exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion;
  exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dom.umd.js.map
