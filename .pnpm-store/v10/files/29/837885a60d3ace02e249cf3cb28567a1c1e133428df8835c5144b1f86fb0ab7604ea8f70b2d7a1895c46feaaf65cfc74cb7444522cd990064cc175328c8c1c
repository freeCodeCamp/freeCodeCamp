"use strict";

const idlUtils = require("../generated/utils.js");
const { setAttributeValue, removeAttributeByName } = require("../attributes");
const validateName = require("../helpers/validate-names").name;
const DOMException = require("../generated/DOMException");

const dataAttrRe = /^data-([^A-Z]*)$/;

function attrCamelCase(name) {
  return name.replace(/-([a-z])/g, (match, alpha) => alpha.toUpperCase());
}

function attrSnakeCase(name) {
  return name.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
}

exports.implementation = class DOMStringMapImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;
    this._element = privateData.element;
  }
  get [idlUtils.supportedPropertyNames]() {
    const result = new Set();
    const { attributes } = this._element;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes.item(i);
      const matches = dataAttrRe.exec(attr.localName);
      if (matches) {
        result.add(attrCamelCase(matches[1]));
      }
    }
    return result;
  }
  [idlUtils.namedGet](name) {
    const { attributes } = this._element;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes.item(i);
      const matches = dataAttrRe.exec(attr.localName);
      if (matches && attrCamelCase(matches[1]) === name) {
        return attr.value;
      }
    }
    return undefined;
  }
  [idlUtils.namedSetNew](name, value) {
    if (/-[a-z]/.test(name)) {
      throw DOMException.create(this._globalObject, [
        `'${name}' is not a valid property name`,
        "SyntaxError"
      ]);
    }
    name = `data-${attrSnakeCase(name)}`;
    validateName(this._globalObject, name);
    setAttributeValue(this._element, name, value);
  }
  [idlUtils.namedSetExisting](name, value) {
    this[idlUtils.namedSetNew](name, value);
  }
  [idlUtils.namedDelete](name) {
    name = `data-${attrSnakeCase(name)}`;
    removeAttributeByName(this._element, name);
  }
};
