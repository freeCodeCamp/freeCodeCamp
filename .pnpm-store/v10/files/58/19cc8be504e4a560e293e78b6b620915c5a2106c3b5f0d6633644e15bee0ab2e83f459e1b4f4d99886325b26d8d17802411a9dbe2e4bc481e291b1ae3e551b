"use strict";

const DOMException = require("domexception/webidl2js-wrapper");
const OrderedSet = require("../helpers/ordered-set.js");
const { asciiLowercase } = require("../helpers/strings.js");
const idlUtils = require("../generated/utils.js");

const { getAttributeValue, setAttributeValue, hasAttributeByName } = require("../attributes.js");

function validateTokens(globalObject, ...tokens) {
  for (const token of tokens) {
    if (token === "") {
      throw DOMException.create(globalObject, ["The token provided must not be empty.", "SyntaxError"]);
    }
  }
  for (const token of tokens) {
    if (/[\t\n\f\r ]/.test(token)) {
      throw DOMException.create(globalObject, [
        "The token provided contains HTML space characters, which are not valid in tokens.",
        "InvalidCharacterError"
      ]);
    }
  }
}

// https://dom.spec.whatwg.org/#domtokenlist
class DOMTokenListImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;

    // _syncWithElement() must always be called before any _tokenSet access.
    this._tokenSet = new OrderedSet();
    this._element = privateData.element;
    this._attributeLocalName = privateData.attributeLocalName;
    this._supportedTokens = privateData.supportedTokens;

    // Needs synchronization with element if token set is to be accessed.
    this._dirty = true;
  }

  attrModified() {
    this._dirty = true;
  }

  _syncWithElement() {
    if (!this._dirty) {
      return;
    }

    const val = getAttributeValue(this._element, this._attributeLocalName);
    if (val === null) {
      this._tokenSet.empty();
    } else {
      this._tokenSet = OrderedSet.parse(val);
    }

    this._dirty = false;
  }

  _validationSteps(token) {
    if (!this._supportedTokens) {
      throw new TypeError(`${this._attributeLocalName} attribute has no supported tokens`);
    }
    const lowerToken = asciiLowercase(token);
    return this._supportedTokens.has(lowerToken);
  }

  _updateSteps() {
    if (!hasAttributeByName(this._element, this._attributeLocalName) && this._tokenSet.isEmpty()) {
      return;
    }
    setAttributeValue(this._element, this._attributeLocalName, this._tokenSet.serialize());
  }

  _serializeSteps() {
    return getAttributeValue(this._element, this._attributeLocalName);
  }

  // Used by other parts of jsdom
  get tokenSet() {
    this._syncWithElement();
    return this._tokenSet;
  }

  get length() {
    this._syncWithElement();
    return this._tokenSet.size;
  }

  get [idlUtils.supportedPropertyIndices]() {
    this._syncWithElement();
    return this._tokenSet.keys();
  }

  item(index) {
    this._syncWithElement();
    if (index >= this._tokenSet.size) {
      return null;
    }
    return this._tokenSet.get(index);
  }

  contains(token) {
    this._syncWithElement();
    return this._tokenSet.contains(token);
  }

  add(...tokens) {
    for (const token of tokens) {
      validateTokens(this._globalObject, token);
    }
    this._syncWithElement();
    for (const token of tokens) {
      this._tokenSet.append(token);
    }
    this._updateSteps();
  }

  remove(...tokens) {
    for (const token of tokens) {
      validateTokens(this._globalObject, token);
    }
    this._syncWithElement();
    this._tokenSet.remove(...tokens);
    this._updateSteps();
  }

  toggle(token, force = undefined) {
    validateTokens(this._globalObject, token);
    this._syncWithElement();
    if (this._tokenSet.contains(token)) {
      if (force === undefined || force === false) {
        this._tokenSet.remove(token);
        this._updateSteps();
        return false;
      }
      return true;
    }
    if (force === undefined || force === true) {
      this._tokenSet.append(token);
      this._updateSteps();
      return true;
    }
    return false;
  }

  replace(token, newToken) {
    validateTokens(this._globalObject, token, newToken);
    this._syncWithElement();
    if (!this._tokenSet.contains(token)) {
      return false;
    }
    this._tokenSet.replace(token, newToken);
    this._updateSteps();
    return true;
  }

  supports(token) {
    return this._validationSteps(token);
  }

  get value() {
    return this._serializeSteps();
  }

  set value(V) {
    setAttributeValue(this._element, this._attributeLocalName, V);
  }
}

exports.implementation = DOMTokenListImpl;
