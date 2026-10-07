"use strict";

const { setAnExistingAttributeValue } = require("../attributes.js");
const NodeImpl = require("../nodes/Node-impl.js").implementation;
const { ATTRIBUTE_NODE } = require("../node-type.js");

exports.implementation = class AttrImpl extends NodeImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._namespace = privateData.namespace !== undefined ? privateData.namespace : null;
    this._namespacePrefix = privateData.namespacePrefix !== undefined ? privateData.namespacePrefix : null;
    this._localName = privateData.localName;
    this._value = privateData.value !== undefined ? privateData.value : "";
    this._element = privateData.element !== undefined ? privateData.element : null;

    this.nodeType = ATTRIBUTE_NODE;
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
  set value(value) {
    setAnExistingAttributeValue(this, value);
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
