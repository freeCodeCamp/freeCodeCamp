'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var prettyFormat = require('pretty-format');
var domAccessibilityApi = require('dom-accessibility-api');
var ariaQuery = require('aria-query');
var lzString = require('lz-string');

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

var prettyFormat__namespace = /*#__PURE__*/_interopNamespace(prettyFormat);
var lzString__default = /*#__PURE__*/_interopDefaultLegacy(lzString);

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
} = prettyFormat__namespace.plugins;

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
    maxLength = typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;
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
  const debugContent = prettyFormat__namespace.format(dom, {
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
    throw new Error( // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
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

const elementRoleList = buildElementRoleList(ariaQuery.elementRoles);

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
      const nameString = "Name \"" + domAccessibilityApi.computeAccessibleName(el, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
      }) + "\":\n";
      const domString = prettyDOM(el.cloneNode(false));
      if (includeDescription) {
        const descriptionString = "Description \"" + domAccessibilityApi.computeAccessibleDescription(el, {
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
  if (element.matches(getConfig().defaultIgnore)) {
    return undefined;
  }

  //We prefer to suggest something else if the role is generic
  const role = (_element$getAttribute = element.getAttribute('role')) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
  if (role !== 'generic' && canSuggest('Role', method, role)) {
    return makeSuggestion('Role', element, role, {
      variant,
      name: domAccessibilityApi.computeAccessibleName(element, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
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
  let {
    container = getDocument(),
    timeout = getConfig().asyncUtilTimeout,
    showOriginalStackTrace = getConfig().showOriginalStackTrace,
    stackTraceError,
    interval = 50,
    onTimeout = error => {
      Object.defineProperty(error, 'message', {
        value: getConfig().getElementError(error.message, container).message
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
    const usingJestFakeTimers = jestFakeTimersAreEnabled();
    if (usingJestFakeTimers) {
      const {
        unstable_advanceTimersWrapper: advanceTimersWrapper
      } = getConfig();
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
  const [{
    suggest = getConfig().throwSuggestions
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
    suggest = getConfig().throwSuggestions
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
const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6);

const queryAllByText = function (container, text, _temp) {
  let {
    selector = '*',
    exact = true,
    collapseWhitespace,
    trim,
    ignore = getConfig().defaultIgnore,
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
    hidden = getConfig().defaultHidden,
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
    if (((_allRoles$get = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get.props['aria-selected']) === undefined) {
      throw new Error("\"aria-selected\" is not supported on role \"" + role + "\".");
    }
  }
  if (busy !== undefined) {
    var _allRoles$get2;
    // guard against unknown roles
    if (((_allRoles$get2 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get2.props['aria-busy']) === undefined) {
      throw new Error("\"aria-busy\" is not supported on role \"" + role + "\".");
    }
  }
  if (checked !== undefined) {
    var _allRoles$get3;
    // guard against unknown roles
    if (((_allRoles$get3 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get3.props['aria-checked']) === undefined) {
      throw new Error("\"aria-checked\" is not supported on role \"" + role + "\".");
    }
  }
  if (pressed !== undefined) {
    var _allRoles$get4;
    // guard against unknown roles
    if (((_allRoles$get4 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get4.props['aria-pressed']) === undefined) {
      throw new Error("\"aria-pressed\" is not supported on role \"" + role + "\".");
    }
  }
  if (current !== undefined) {
    var _allRoles$get5;
    /* istanbul ignore next */
    // guard against unknown roles
    // All currently released ARIA versions support `aria-current` on all roles.
    // Leaving this for symetry and forward compatibility
    if (((_allRoles$get5 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get5.props['aria-current']) === undefined) {
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
    if (((_allRoles$get6 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get6.props['aria-valuenow']) === undefined) {
      throw new Error("\"aria-valuenow\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueMax !== undefined) {
    var _allRoles$get7;
    // guard against unknown roles
    if (((_allRoles$get7 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get7.props['aria-valuemax']) === undefined) {
      throw new Error("\"aria-valuemax\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueMin !== undefined) {
    var _allRoles$get8;
    // guard against unknown roles
    if (((_allRoles$get8 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get8.props['aria-valuemin']) === undefined) {
      throw new Error("\"aria-valuemin\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueText !== undefined) {
    var _allRoles$get9;
    // guard against unknown roles
    if (((_allRoles$get9 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get9.props['aria-valuetext']) === undefined) {
      throw new Error("\"aria-valuetext\" is not supported on role \"" + role + "\".");
    }
  }
  if (expanded !== undefined) {
    var _allRoles$get10;
    // guard against unknown roles
    if (((_allRoles$get10 = ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get10.props['aria-expanded']) === undefined) {
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
    return matches(domAccessibilityApi.computeAccessibleName(element, {
      computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
    }), element, name, text => text);
  }).filter(element => {
    if (description === undefined) {
      // Don't care
      return true;
    }
    return matches(domAccessibilityApi.computeAccessibleDescription(element, {
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
  const roleRelations = (_roleElements$get = ariaQuery.roleElements.get(role)) != null ? _roleElements$get : new Set();
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
    hidden = getConfig().defaultHidden,
    name,
    description
  } = _temp3 === void 0 ? {} : _temp3;
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
const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1);

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
  fireEvent[key] = (node, init) => fireEvent(node, createEvent[key](node, init));
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
  fireEvent[aliasKey] = function () {
    return fireEvent[key](...arguments);
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
  return lzString__default["default"].compressToEncodedURIComponent(unindent(value));
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

exports.prettyFormat = prettyFormat__namespace;
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
