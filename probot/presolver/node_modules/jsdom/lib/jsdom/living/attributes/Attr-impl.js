"use strict";

const attributes = require("../attributes.js");

exports.implementation = class AttrImpl {
  constructor(_, privateData) {
    this._namespace = privateData.namespace !== undefined ? privateData.namespace : null;
    this._namespacePrefix = privateData.namespacePrefix !== undefined ? privateData.namespacePrefix : null;
    this._localName = privateData.localName;
    this._value = privateData.value !== undefined ? privateData.value : "";
    this._element = privateData.element !== undefined ? privateData.element : null;

    this.specified = true;
  }

  get namespaceURI() {
    return this._namespace;
  }

  get prefix() {
    return this._namespacePrefix;
  }

  get localName() {
    return this._localName;
  }

  get name() {
    return this._qualifiedName;
  }

  get nodeName() {
    return this._qualifiedName;
  }

  get value() {
    return this._value;
  }
  set value(v) {
    if (this._element === null) {
      this._value = v;
    } else {
      attributes.changeAttribute(this._element, this, v);
    }
  }

  // Delegate to value
  get nodeValue() {
    return this.value;
  }
  set nodeValue(v) {
    this.value = v;
  }

  // Delegate to value
  get textContent() {
    return this.value;
  }
  set textContent(v) {
    this.value = v;
  }

  get ownerElement() {
    return this._element;
  }

  get _qualifiedName() {
    // https://dom.spec.whatwg.org/#concept-attribute-qualified-name
    if (this._namespacePrefix === null) {
      return this._localName;
    }

    return this._namespacePrefix + ":" + this._localName;
  }
};
