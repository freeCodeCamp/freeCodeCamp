/**
 * This is a fork from the CSS Style Declaration part of
 * https://github.com/NV/CSSOM
 */
"use strict";
const CSSOM = require("rrweb-cssom");
const allExtraProperties = require("./allExtraProperties");
const allProperties = require("./generated/allProperties");
const implementedProperties = require("./generated/implementedProperties");
const generatedProperties = require("./generated/properties");
const { hasVarFunc, parseKeyword, parseShorthand, prepareValue, splitValue } = require("./parsers");
const { dashedToCamelCase } = require("./utils/camelize");
const { getPropertyDescriptor } = require("./utils/propertyDescriptors");
const { asciiLowercase } = require("./utils/strings");

/**
 * @see https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface
 */
class CSSStyleDeclaration {
  /**
   * @param {Function} onChangeCallback
   * @param {object} [opt]
   * @param {object} [opt.context] - Window, Element or CSSRule.
   */
  constructor(onChangeCallback, opt = {}) {
    // Make constructor and internals non-enumerable.
    Object.defineProperties(this, {
      constructor: {
        enumerable: false,
        writable: true
      },

      // Window
      _global: {
        value: globalThis,
        enumerable: false,
        writable: true
      },

      // Element
      _ownerNode: {
        value: null,
        enumerable: false,
        writable: true
      },

      // CSSRule
      _parentNode: {
        value: null,
        enumerable: false,
        writable: true
      },

      _onChange: {
        value: null,
        enumerable: false,
        writable: true
      },

      _values: {
        value: new Map(),
        enumerable: false,
        writable: true
      },

      _priorities: {
        value: new Map(),
        enumerable: false,
        writable: true
      },

      _length: {
        value: 0,
        enumerable: false,
        writable: true
      },

      _computed: {
        value: false,
        enumerable: false,
        writable: true
      },

      _readonly: {
        value: false,
        enumerable: false,
        writable: true
      },

      _setInProgress: {
        value: false,
        enumerable: false,
        writable: true
      }
    });

    const { context } = opt;
    if (context) {
      if (typeof context.getComputedStyle === "function") {
        this._global = context;
        this._computed = true;
        this._readonly = true;
      } else if (context.nodeType === 1 && Object.hasOwn(context, "style")) {
        this._global = context.ownerDocument.defaultView;
        this._ownerNode = context;
      } else if (Object.hasOwn(context, "parentRule")) {
        this._parentRule = context;
        // Find Window from the owner node of the StyleSheet.
        const window = context?.parentStyleSheet?.ownerNode?.ownerDocument?.defaultView;
        if (window) {
          this._global = window;
        }
      }
    }
    if (typeof onChangeCallback === "function") {
      this._onChange = onChangeCallback;
    }
  }

  get cssText() {
    if (this._computed) {
      return "";
    }
    const properties = [];
    for (let i = 0; i < this._length; i++) {
      const property = this[i];
      const value = this.getPropertyValue(property);
      const priority = this.getPropertyPriority(property);
      if (priority === "important") {
        properties.push(`${property}: ${value} !${priority};`);
      } else {
        properties.push(`${property}: ${value};`);
      }
    }
    return properties.join(" ");
  }

  set cssText(value) {
    if (this._readonly) {
      const msg = "cssText can not be modified.";
      const name = "NoModificationAllowedError";
      throw new this._global.DOMException(msg, name);
    }
    Array.prototype.splice.call(this, 0, this._length);
    this._values.clear();
    this._priorities.clear();
    if (this._parentRule || (this._ownerNode && this._setInProgress)) {
      return;
    }
    this._setInProgress = true;
    let dummyRule;
    try {
      dummyRule = CSSOM.parse(`#bogus{${value}}`).cssRules[0].style;
    } catch {
      // Malformed css, just return.
      return;
    }
    for (let i = 0; i < dummyRule.length; i++) {
      const property = dummyRule[i];
      this.setProperty(
        property,
        dummyRule.getPropertyValue(property),
        dummyRule.getPropertyPriority(property)
      );
    }
    this._setInProgress = false;
    if (typeof this._onChange === "function") {
      this._onChange(this.cssText);
    }
  }

  get length() {
    return this._length;
  }

  // This deletes indices if the new length is less then the current length.
  // If the new length is more, it does nothing, the new indices will be
  // undefined until set.
  set length(len) {
    for (let i = len; i < this._length; i++) {
      delete this[i];
    }
    this._length = len;
  }

  // Readonly
  get parentRule() {
    return this._parentRule;
  }

  get cssFloat() {
    return this.getPropertyValue("float");
  }

  set cssFloat(value) {
    this._setProperty("float", value);
  }

  /**
   * @param {string} property
   */
  getPropertyPriority(property) {
    return this._priorities.get(property) || "";
  }

  /**
   * @param {string} property
   */
  getPropertyValue(property) {
    if (this._values.has(property)) {
      return this._values.get(property).toString();
    }
    return "";
  }

  /**
   * @param {...number} args
   */
  item(...args) {
    if (!args.length) {
      const msg = "1 argument required, but only 0 present.";
      throw new this._global.TypeError(msg);
    }
    let [index] = args;
    index = parseInt(index);
    if (Number.isNaN(index) || index < 0 || index >= this._length) {
      return "";
    }
    return this[index];
  }

  /**
   * @param {string} property
   */
  removeProperty(property) {
    if (this._readonly) {
      const msg = `Property ${property} can not be modified.`;
      const name = "NoModificationAllowedError";
      throw new this._global.DOMException(msg, name);
    }
    if (!this._values.has(property)) {
      return "";
    }
    const prevValue = this._values.get(property);
    this._values.delete(property);
    this._priorities.delete(property);
    const index = Array.prototype.indexOf.call(this, property);
    if (index >= 0) {
      Array.prototype.splice.call(this, index, 1);
      if (typeof this._onChange === "function") {
        this._onChange(this.cssText);
      }
    }
    return prevValue;
  }

  /**
   * @param {string} property
   * @param {string} value
   * @param {string?} [priority] - "important" or null
   */
  setProperty(property, value, priority = null) {
    if (this._readonly) {
      const msg = `Property ${property} can not be modified.`;
      const name = "NoModificationAllowedError";
      throw new this._global.DOMException(msg, name);
    }
    value = prepareValue(value, this._global);
    if (value === "") {
      this[property] = "";
      this.removeProperty(property);
      return;
    }
    const isCustomProperty = property.startsWith("--");
    if (isCustomProperty) {
      this._setProperty(property, value);
      return;
    }
    property = asciiLowercase(property);
    if (!allProperties.has(property) && !allExtraProperties.has(property)) {
      return;
    }
    this[property] = value;
    if (priority) {
      this._priorities.set(property, priority);
    } else {
      this._priorities.delete(property);
    }
  }
}

// Internal methods
Object.defineProperties(CSSStyleDeclaration.prototype, {
  _shorthandGetter: {
    /**
     * @param {string} property
     * @param {object} shorthandFor
     */
    value(property, shorthandFor) {
      const parts = [];
      for (const key of shorthandFor.keys()) {
        const val = this.getPropertyValue(key);
        if (hasVarFunc(val)) {
          return "";
        }
        if (val !== "") {
          parts.push(val);
        }
      }
      if (parts.length) {
        return parts.join(" ");
      }
      if (this._values.has(property)) {
        return this.getPropertyValue(property);
      }
      return "";
    },
    enumerable: false
  },

  _implicitGetter: {
    /**
     * @param {string} property
     * @param {Array.<string>} positions
     */
    value(property, positions = []) {
      const parts = [];
      for (const position of positions) {
        const val = this.getPropertyValue(`${property}-${position}`);
        if (val === "" || hasVarFunc(val)) {
          return "";
        }
        parts.push(val);
      }
      if (!parts.length) {
        return "";
      }
      switch (positions.length) {
        case 4: {
          const [top, right, bottom, left] = parts;
          if (top === right && top === bottom && right === left) {
            return top;
          }
          if (top !== right && top === bottom && right === left) {
            return `${top} ${right}`;
          }
          if (top !== right && top !== bottom && right === left) {
            return `${top} ${right} ${bottom}`;
          }
          return `${top} ${right} ${bottom} ${left}`;
        }
        case 2: {
          const [x, y] = parts;
          if (x === y) {
            return x;
          }
          return `${x} ${y}`;
        }
        default:
          return "";
      }
    },
    enumerable: false
  },

  _setProperty: {
    /**
     * @param {string} property
     * @param {string} val
     * @param {string?} [priority]
     */
    value(property, val, priority = null) {
      if (typeof val !== "string") {
        return;
      }
      if (val === "") {
        this.removeProperty(property);
        return;
      }
      let originalText = "";
      if (typeof this._onChange === "function") {
        originalText = this.cssText;
      }
      if (this._values.has(property)) {
        const index = Array.prototype.indexOf.call(this, property);
        // The property already exists but is not indexed into `this` so add it.
        if (index < 0) {
          this[this._length] = property;
          this._length++;
        }
      } else {
        // New property.
        this[this._length] = property;
        this._length++;
      }
      this._values.set(property, val);
      if (priority) {
        this._priorities.set(property, priority);
      } else {
        this._priorities.delete(property);
      }
      if (
        typeof this._onChange === "function" &&
        this.cssText !== originalText &&
        !this._setInProgress
      ) {
        this._onChange(this.cssText);
      }
    },
    enumerable: false
  },

  _shorthandSetter: {
    /**
     * @param {string} property
     * @param {string} val
     * @param {object} shorthandFor
     */
    value(property, val, shorthandFor) {
      val = prepareValue(val, this._global);
      const obj = parseShorthand(val, shorthandFor);
      if (!obj) {
        return;
      }
      for (const subprop of Object.keys(obj)) {
        // In case subprop is an implicit property, this will clear *its*
        // subpropertiesX.
        const camel = dashedToCamelCase(subprop);
        this[camel] = obj[subprop];
        // In case it gets translated into something else (0 -> 0px).
        obj[subprop] = this[camel];
        this.removeProperty(subprop);
        // Don't add in empty properties.
        if (obj[subprop] !== "") {
          this._values.set(subprop, obj[subprop]);
        }
      }
      for (const [subprop] of shorthandFor) {
        if (!Object.hasOwn(obj, subprop)) {
          this.removeProperty(subprop);
          this._values.delete(subprop);
        }
      }
      // In case the value is something like 'none' that removes all values,
      // check that the generated one is not empty, first remove the property,
      // if it already exists, then call the shorthandGetter, if it's an empty
      // string, don't set the property.
      this.removeProperty(property);
      const calculated = this._shorthandGetter(property, shorthandFor);
      if (calculated !== "") {
        this._setProperty(property, calculated);
      }
      return obj;
    },
    enumerable: false
  },

  // Companion to shorthandSetter, but for the individual parts which takes
  // position value in the middle.
  _midShorthandSetter: {
    /**
     * @param {string} property
     * @param {string} val
     * @param {object} shorthandFor
     * @param {Array.<string>} positions
     */
    value(property, val, shorthandFor, positions = []) {
      val = prepareValue(val, this._global);
      const obj = this._shorthandSetter(property, val, shorthandFor);
      if (!obj) {
        return;
      }
      for (const position of positions) {
        this.removeProperty(`${property}-${position}`);
        this._values.set(`${property}-${position}`, val);
      }
    },
    enumerable: false
  },

  _implicitSetter: {
    /**
     * @param {string} prefix
     * @param {string} part
     * @param {string} val
     * @param {Function} isValid
     * @param {Function} parser
     * @param {Array.<string>} positions
     */
    value(prefix, part, val, isValid, parser, positions = []) {
      val = prepareValue(val, this._global);
      if (typeof val !== "string") {
        return;
      }
      part ||= "";
      if (part) {
        part = `-${part}`;
      }
      let parts = [];
      if (val === "") {
        parts.push(val);
      } else {
        const key = parseKeyword(val);
        if (key) {
          parts.push(key);
        } else {
          parts.push(...splitValue(val));
        }
      }
      if (!parts.length || parts.length > positions.length || !parts.every(isValid)) {
        return;
      }
      parts = parts.map((p) => parser(p));
      this._setProperty(`${prefix}${part}`, parts.join(" "));
      switch (positions.length) {
        case 4:
          if (parts.length === 1) {
            parts.push(parts[0], parts[0], parts[0]);
          } else if (parts.length === 2) {
            parts.push(parts[0], parts[1]);
          } else if (parts.length === 3) {
            parts.push(parts[1]);
          }
          break;
        case 2:
          if (parts.length === 1) {
            parts.push(parts[0]);
          }
          break;
        default:
      }
      for (let i = 0; i < positions.length; i++) {
        const property = `${prefix}-${positions[i]}${part}`;
        this.removeProperty(property);
        this._values.set(property, parts[i]);
      }
    },
    enumerable: false
  },

  // Companion to implicitSetter, but for the individual parts.
  // This sets the individual value, and checks to see if all sub-parts are
  // set. If so, it sets the shorthand version and removes the individual parts
  // from the cssText.
  _subImplicitSetter: {
    /**
     * @param {string} prefix
     * @param {string} part
     * @param {string} val
     * @param {Function} isValid
     * @param {Function} parser
     * @param {Array.<string>} positions
     */
    value(prefix, part, val, isValid, parser, positions = []) {
      val = prepareValue(val, this._global);
      if (typeof val !== "string" || !isValid(val)) {
        return;
      }
      val = parser(val);
      const property = `${prefix}-${part}`;
      this._setProperty(property, val);
      const combinedPriority = this.getPropertyPriority(prefix);
      const subparts = [];
      for (const position of positions) {
        subparts.push(`${prefix}-${position}`);
      }
      const parts = subparts.map((subpart) => this._values.get(subpart));
      const priorities = subparts.map((subpart) => this.getPropertyPriority(subpart));
      const [priority] = priorities;
      // Combine into a single property if all values are set and have the same
      // priority.
      if (
        priority === combinedPriority &&
        parts.every((p) => p) &&
        priorities.every((p) => p === priority)
      ) {
        for (let i = 0; i < subparts.length; i++) {
          this.removeProperty(subparts[i]);
          this._values.set(subparts[i], parts[i]);
        }
        this._setProperty(prefix, parts.join(" "), priority);
      } else {
        this.removeProperty(prefix);
        for (let i = 0; i < subparts.length; i++) {
          // The property we're setting won't be important, the rest will either
          // keep their priority or inherit it from the combined property
          const subPriority = subparts[i] === property ? "" : priorities[i] || combinedPriority;
          this._setProperty(subparts[i], parts[i], subPriority);
        }
      }
    },
    enumerable: false
  }
});

// Properties
Object.defineProperties(CSSStyleDeclaration.prototype, generatedProperties);

// Additional properties
[...allProperties, ...allExtraProperties].forEach(function (property) {
  if (!implementedProperties.has(property)) {
    const declaration = getPropertyDescriptor(property);
    Object.defineProperty(CSSStyleDeclaration.prototype, property, declaration);
    const camel = dashedToCamelCase(property);
    Object.defineProperty(CSSStyleDeclaration.prototype, camel, declaration);
    if (/^webkit[A-Z]/.test(camel)) {
      const pascal = camel.replace(/^webkit/, "Webkit");
      Object.defineProperty(CSSStyleDeclaration.prototype, pascal, declaration);
    }
  }
});

exports.CSSStyleDeclaration = CSSStyleDeclaration;
