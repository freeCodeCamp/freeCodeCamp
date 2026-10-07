'use strict';

const { selectAll, selectOne, is } = require('css-select');
const svgoCssSelectAdapter = require('./css-select-adapter');
const CSSClassList = require('./css-class-list');
const CSSStyleDeclaration = require('./css-style-declaration');

/**
 * @type {(name: string) => { prefix: string, local: string }}
 */
const parseName = (name) => {
  if (name == null) {
    return {
      prefix: '',
      local: '',
    };
  }
  if (name === 'xmlns') {
    return {
      prefix: 'xmlns',
      local: '',
    };
  }
  const chunks = name.split(':');
  if (chunks.length === 1) {
    return {
      prefix: '',
      local: chunks[0],
    };
  }
  return {
    prefix: chunks[0],
    local: chunks[1],
  };
};

var cssSelectOpts = {
  xmlMode: true,
  adapter: svgoCssSelectAdapter,
};

const attrsHandler = {
  get: (attributes, name) => {
    // eslint-disable-next-line no-prototype-builtins
    if (attributes.hasOwnProperty(name)) {
      return {
        name,
        get value() {
          return attributes[name];
        },
        set value(value) {
          attributes[name] = value;
        },
      };
    }
  },
  set: (attributes, name, attr) => {
    attributes[name] = attr.value;
    return true;
  },
};

var JSAPI = function (data, parentNode) {
  Object.assign(this, data);
  if (this.type === 'element') {
    if (this.attributes == null) {
      this.attributes = {};
    }
    if (this.children == null) {
      this.children = [];
    }
    Object.defineProperty(this, 'class', {
      writable: true,
      configurable: true,
      value: new CSSClassList(this),
    });
    Object.defineProperty(this, 'style', {
      writable: true,
      configurable: true,
      value: new CSSStyleDeclaration(this),
    });
    Object.defineProperty(this, 'parentNode', {
      writable: true,
      value: parentNode,
    });

    // temporary attrs polyfill
    // TODO remove after migration
    const element = this;
    Object.defineProperty(this, 'attrs', {
      configurable: true,
      get() {
        return new Proxy(element.attributes, attrsHandler);
      },
      set(value) {
        const newAttributes = {};
        for (const attr of Object.values(value)) {
          newAttributes[attr.name] = attr.value;
        }
        element.attributes = newAttributes;
      },
    });
  }
};
module.exports = JSAPI;

/**
 * Perform a deep clone of this node.
 *
 * @return {Object} element
 */
JSAPI.prototype.clone = function () {
  const { children, ...nodeData } = this;
  // Deep-clone node data.
  const clonedNode = new JSAPI(JSON.parse(JSON.stringify(nodeData)), null);
  if (children) {
    clonedNode.children = children.map((child) => {
      const clonedChild = child.clone();
      clonedChild.parentNode = clonedNode;
      return clonedChild;
    });
  }
  return clonedNode;
};

/**
 * Determine if item is an element
 * (any, with a specific name or in a names array).
 *
 * @param {String|Array} [param] element name or names arrays
 * @return {Boolean}
 */
JSAPI.prototype.isElem = function (param) {
  if (this.type !== 'element') {
    return false;
  }
  if (param == null) {
    return true;
  }
  if (Array.isArray(param)) {
    return param.includes(this.name);
  }
  return this.name === param;
};

/**
 * Renames an element
 *
 * @param {String} name new element name
 * @return {Object} element
 */
JSAPI.prototype.renameElem = function (name) {
  if (name && typeof name === 'string') this.name = name;

  return this;
};

/**
 * Determine if element is empty.
 *
 * @return {Boolean}
 */
JSAPI.prototype.isEmpty = function () {
  return !this.children || !this.children.length;
};

/**
 * Find the closest ancestor of the current element.
 * @param elemName
 *
 * @return {?Object}
 */
JSAPI.prototype.closestElem = function (elemName) {
  var elem = this;

  while ((elem = elem.parentNode) && !elem.isElem(elemName));

  return elem;
};

/**
 * Changes children by removing elements and/or adding new elements.
 *
 * @param {Number} start Index at which to start changing the children.
 * @param {Number} n Number of elements to remove.
 * @param {Array|Object} [insertion] Elements to add to the children.
 * @return {Array} Removed elements.
 */
JSAPI.prototype.spliceContent = function (start, n, insertion) {
  if (arguments.length < 2) return [];

  if (!Array.isArray(insertion))
    insertion = Array.apply(null, arguments).slice(2);

  insertion.forEach(function (inner) {
    inner.parentNode = this;
  }, this);

  return this.children.splice.apply(
    this.children,
    [start, n].concat(insertion)
  );
};

/**
 * Determine if element has an attribute
 * (any, or by name or by name + value).
 *
 * @param {String} [name] attribute name
 * @param {String} [val] attribute value (will be toString()'ed)
 * @return {Boolean}
 */
JSAPI.prototype.hasAttr = function (name, val) {
  if (this.type !== 'element') {
    return false;
  }
  if (Object.keys(this.attributes).length === 0) {
    return false;
  }
  if (name == null) {
    return true;
  }
  // eslint-disable-next-line no-prototype-builtins
  if (this.attributes.hasOwnProperty(name) === false) {
    return false;
  }
  if (val !== undefined) {
    return this.attributes[name] === val.toString();
  }
  return true;
};

/**
 * Determine if element has an attribute by local name
 * (any, or by name or by name + value).
 *
 * @param {String} [localName] local attribute name
 * @param {Number|String|RegExp|Function} [val] attribute value (will be toString()'ed or executed, otherwise ignored)
 * @return {Boolean}
 */
JSAPI.prototype.hasAttrLocal = function (localName, val) {
  if (!this.attrs || !Object.keys(this.attrs).length) return false;

  if (!arguments.length) return !!this.attrs;

  var callback;

  switch (val != null && val.constructor && val.constructor.name) {
    case 'Number': // same as String
    case 'String':
      callback = stringValueTest;
      break;
    case 'RegExp':
      callback = regexpValueTest;
      break;
    case 'Function':
      callback = funcValueTest;
      break;
    default:
      callback = nameTest;
  }
  return this.someAttr(callback);

  function nameTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName;
  }

  function stringValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val == attr.value;
  }

  function regexpValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val.test(attr.value);
  }

  function funcValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val(attr.value);
  }
};

/**
 * Get a specific attribute from an element
 * (by name or name + value).
 *
 * @param {String} name attribute name
 * @param {String} [val] attribute value (will be toString()'ed)
 * @return {Object|Undefined}
 */
JSAPI.prototype.attr = function (name, val) {
  if (this.hasAttr(name, val)) {
    return this.attrs[name];
  }
};

/**
 * Get computed attribute value from an element
 *
 * @param {String} name attribute name
 * @return {Object|Undefined}
 */
JSAPI.prototype.computedAttr = function (name, val) {
  if (!arguments.length) return;

  for (
    var elem = this;
    elem && (!elem.hasAttr(name) || !elem.attributes[name]);
    elem = elem.parentNode
  );

  if (val != null) {
    return elem ? elem.hasAttr(name, val) : false;
  } else if (elem && elem.hasAttr(name)) {
    return elem.attributes[name];
  }
};

/**
 * Remove a specific attribute.
 *
 * @param {String|Array} name attribute name
 * @param {String} [val] attribute value
 * @return {Boolean}
 */
JSAPI.prototype.removeAttr = function (name, val) {
  if (this.type !== 'element') {
    return false;
  }
  if (arguments.length === 0) {
    return false;
  }
  if (Array.isArray(name)) {
    for (const nameItem of name) {
      this.removeAttr(nameItem, val);
    }
    return false;
  }
  if (this.hasAttr(name, val) === false) {
    return false;
  }
  delete this.attributes[name];
  return true;
};

/**
 * Add attribute.
 *
 * @param {Object} [attr={}] attribute object
 * @return {Object|Boolean} created attribute or false if no attr was passed in
 */
JSAPI.prototype.addAttr = function (attr) {
  attr = attr || {};

  if (attr.name === undefined) return false;

  this.attributes[attr.name] = attr.value;

  if (attr.name === 'class') {
    // newly added class attribute
    this.class.addClassValueHandler();
  }

  if (attr.name === 'style') {
    // newly added style attribute
    this.style.addStyleValueHandler();
  }

  return this.attrs[attr.name];
};

/**
 * Iterates over all attributes.
 *
 * @param {Function} callback callback
 * @param {Object} [context] callback context
 * @return {Boolean} false if there are no any attributes
 */
JSAPI.prototype.eachAttr = function (callback, context) {
  if (this.type !== 'element') {
    return false;
  }
  if (callback == null) {
    return false;
  }
  for (const attr of Object.values(this.attrs)) {
    callback.call(context, attr);
  }
  return true;
};

/**
 * Tests whether some attribute passes the test.
 *
 * @param {Function} callback callback
 * @param {Object} [context] callback context
 * @return {Boolean} false if there are no any attributes
 */
JSAPI.prototype.someAttr = function (callback, context) {
  if (this.type !== 'element') {
    return false;
  }

  for (const attr of Object.values(this.attrs)) {
    if (callback.call(context, attr)) return true;
  }

  return false;
};

/**
 * Evaluate a string of CSS selectors against the element and returns matched elements.
 *
 * @param {String} selectors CSS selector(s) string
 * @return {Array} null if no elements matched
 */
JSAPI.prototype.querySelectorAll = function (selectors) {
  var matchedEls = selectAll(selectors, this, cssSelectOpts);

  return matchedEls.length > 0 ? matchedEls : null;
};

/**
 * Evaluate a string of CSS selectors against the element and returns only the first matched element.
 *
 * @param {String} selectors CSS selector(s) string
 * @return {Array} null if no element matched
 */
JSAPI.prototype.querySelector = function (selectors) {
  return selectOne(selectors, this, cssSelectOpts);
};

/**
 * Test if a selector matches a given element.
 *
 * @param {String} selector CSS selector string
 * @return {Boolean} true if element would be selected by selector string, false if it does not
 */
JSAPI.prototype.matches = function (selector) {
  return is(this, selector, cssSelectOpts);
};
