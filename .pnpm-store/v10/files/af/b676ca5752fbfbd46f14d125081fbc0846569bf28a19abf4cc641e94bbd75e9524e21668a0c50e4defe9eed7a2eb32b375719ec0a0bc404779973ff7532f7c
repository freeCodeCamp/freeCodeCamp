"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const NODE_TYPE = require("../node-type");
const { stripAndCollapseASCIIWhitespace } = require("../helpers/strings");
const { domSymbolTree } = require("../helpers/internal-constants");
const { HTML_NS, SVG_NS } = require("../helpers/namespaces");
const { closest } = require("../helpers/traversal");
const { formOwner } = require("../helpers/form-controls");

class HTMLOptionElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    // whenever selectedness is set to true, make sure all
    // other options set selectedness to false
    this._selectedness = false;
    this._dirtyness = false;
  }

  _removeOtherSelectedness() {
    // Remove the selectedness flag from all other options in this select
    const select = this._selectNode;

    if (select && !select.hasAttributeNS(null, "multiple")) {
      for (const option of select.options) {
        if (option !== this) {
          option._selectedness = false;
        }
      }
    }
  }

  _askForAReset() {
    const select = this._selectNode;
    if (select) {
      select._askedForAReset();
    }
  }

  _attrModified(name, value, oldValue) {
    if (!this._dirtyness && name === "selected") {
      this._selectedness = this.hasAttributeNS(null, "selected");
      if (this._selectedness) {
        this._removeOtherSelectedness();
      }
      this._askForAReset();
    }
    super._attrModified(name, value, oldValue);
  }

  get _selectNode() {
    let select = domSymbolTree.parent(this);
    if (!select) {
      return null;
    }

    if (select._localName !== "select") {
      select = domSymbolTree.parent(select);
      if (!select || select._localName !== "select") {
        return null;
      }
    }
    return select;
  }

  get form() {
    return formOwner(this);
  }

  get text() {
    return stripAndCollapseASCIIWhitespace(childTextContentExcludingDescendantsOfScript(this));
  }
  set text(value) {
    this.textContent = value;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-value
  _getValue() {
    if (this.hasAttributeNS(null, "value")) {
      return this.getAttributeNS(null, "value");
    }

    return this.text;
  }

  get value() {
    return this._getValue();
  }
  set value(value) {
    this.setAttributeNS(null, "value", value);
  }

  get index() {
    const select = closest(this, "select");
    if (select === null) {
      return 0;
    }

    return select.options.indexOf(this);
  }

  get selected() {
    return this._selectedness;
  }
  set selected(s) {
    this._dirtyness = true;
    this._selectedness = Boolean(s);
    if (this._selectedness) {
      this._removeOtherSelectedness();
    }
    this._askForAReset();
    this._modified();
  }

  get label() {
    if (this.hasAttributeNS(null, "label")) {
      return this.getAttributeNS(null, "label");
    }

    return this.text;
  }
  set label(value) {
    this.setAttributeNS(null, "label", value);
  }
}

function childTextContentExcludingDescendantsOfScript(root) {
  let text = "";
  for (const child of domSymbolTree.childrenIterator(root)) {
    if (child._localName === "script" && (child._namespaceURI === HTML_NS || child._namespaceURI === SVG_NS)) {
      continue;
    }

    if (child.nodeType === NODE_TYPE.TEXT_NODE || child.nodeType === NODE_TYPE.CDATA_SECTION_NODE) {
      text += child.nodeValue;
    } else {
      text += childTextContentExcludingDescendantsOfScript(child);
    }
  }
  return text;
}

module.exports = {
  implementation: HTMLOptionElementImpl
};
