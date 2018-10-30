"use strict";

const idlUtils = require("../generated/utils.js");
const DOMException = require("domexception");
const { DOCUMENT_POSITION_CONTAINS, DOCUMENT_POSITION_CONTAINED_BY } = require("../node-document-position");
const Element = require("../generated/Element");
const Node = require("../generated/Node");
const HTMLCollectionImpl = require("./HTMLCollection-impl").implementation;

exports.implementation = class HTMLOptionsCollectionImpl extends HTMLCollectionImpl {
  // inherits supported property indices
  get length() {
    this._update();
    return this._list.length;
  }
  set length(value) {
    this._update();
    if (value > this._list.length) {
      const doc = this._element._ownerDocument;
      for (let i = this._list.length; i < value; i++) {
        const el = doc.createElement("option");
        this._element.appendChild(el);
      }
    } else if (value < this._list.length) {
      for (let i = this._list.length - 1; i >= value; i--) {
        const el = this._list[i];
        this._element.removeChild(el);
      }
    }
  }

  get [idlUtils.supportedPropertyNames]() {
    this._update();
    const result = new Set();
    for (const element of this._list) {
      result.add(element.getAttribute("id"));
      result.add(element.getAttribute("name"));
    }
    return result;
  }
  [idlUtils.indexedSetNew](index, value) {
    if (value === null) {
      this.remove(index);
      return;
    }
    this._update();
    const { length } = this._list;
    const n = index - length;
    if (n > 0) {
      const doc = this._element._ownerDocument;
      const frag = doc.createDocumentFragment();
      // Spec says n - 1, but n seems to be the right number here.
      for (let i = 0; i < n; i++) {
        const el = doc.createElement("option");
        frag.appendChild(el);
      }
      this._element.appendChild(frag);
    }
    if (n >= 0) {
      this._element.appendChild(value);
    } else {
      this._element.replaceChild(value, this._list[index]);
    }
  }
  [idlUtils.indexedSetExisting](index, value) {
    return this[idlUtils.indexedSetNew](index, value);
  }
  add(element, before) {
    if (this._element.compareDocumentPosition(element) & DOCUMENT_POSITION_CONTAINS) {
      throw new DOMException("The operation would yield an incorrect node tree.", "HierarchyRequestError");
    }
    if (Element.isImpl(before) && !(this._element.compareDocumentPosition(before) & DOCUMENT_POSITION_CONTAINED_BY)) {
      throw new DOMException("The object can not be found here.", "NotFoundError");
    }
    if (element === before) {
      return;
    }

    let reference = null;
    if (Node.isImpl(before)) {
      reference = before;
    } else if (typeof before === "number") {
      this._update();
      reference = this._list[before] || null;
    }

    const parent = reference !== null ? reference.parentNode : this._element;
    parent.insertBefore(element, reference);
  }
  remove(index) {
    this._update();
    if (this._list.length === 0) {
      return;
    }
    if (index < 0 || index >= this._list.length) {
      return;
    }
    const element = this._list[index];
    element.parentNode.removeChild(element);
  }
  get selectedIndex() {
    return this._element.selectedIndex;
  }
  set selectedIndex(value) {
    this._element.selectedIndex = value;
  }
};
