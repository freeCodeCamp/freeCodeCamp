"use strict";

const DOMException = require("domexception");
const idlUtils = require("../generated/utils.js");
const attributes = require("../attributes.js");
const { HTML_NS } = require("../helpers/namespaces");

exports.implementation = class NamedNodeMapImpl {
  constructor(args, privateData) {
    this._element = privateData.element;
  }
  get _attributeList() {
    return this._element._attributeList;
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._attributeList.keys();
  }
  get length() {
    return this._attributeList.length;
  }
  item(index) {
    if (index >= this._attributeList.length) {
      return null;
    }
    return this._attributeList[index];
  }

  get [idlUtils.supportedPropertyNames]() {
    const names = new Set(this._attributeList.map(a => a._qualifiedName));
    const el = this._element;
    if (el._namespaceURI === HTML_NS && el._ownerDocument._parsingMode === "html") {
      for (const name of names) {
        const lowercaseName = name.toLowerCase();
        if (lowercaseName !== name) {
          names.delete(name);
        }
      }
    }
    return names;
  }
  getNamedItem(qualifiedName) {
    return attributes.getAttributeByName(this._element, qualifiedName);
  }
  getNamedItemNS(namespace, localName) {
    return attributes.getAttributeByNameNS(this._element, namespace, localName);
  }
  setNamedItem(attr) {
    return attributes.setAttribute(this._element, attr);
  }
  setNamedItemNS(attr) {
    return attributes.setAttribute(this._element, attr);
  }
  removeNamedItem(qualifiedName) {
    const attr = attributes.removeAttributeByName(this._element, qualifiedName);
    if (attr === null) {
      throw new DOMException("Tried to remove an attribute that was not present", "NotFoundError");
    }
    return attr;
  }
  removeNamedItemNS(namespace, localName) {
    const attr = attributes.removeAttributeByNameNS(this._element, namespace, localName);
    if (attr === null) {
      throw new DOMException("Tried to remove an attribute that was not present", "NotFoundError");
    }
    return attr;
  }
};
