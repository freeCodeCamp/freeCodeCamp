"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { stripAndCollapseASCIIWhitespace } = require("../helpers/strings");
const { domSymbolTree } = require("../helpers/internal-constants");
const { closest } = require("../helpers/traversal");

class HTMLOptionElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    // whenever selectedness is set to true, make sure all
    // other options set selectedness to false
    this._selectedness = false;
    this._dirtyness = false;
  }
  _removeOtherSelectedness() {
    // Remove the selectedness flag from all other options in this select
    const select = this._selectNode;

    if (select && !select.hasAttribute("multiple")) {
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
  _attrModified(name) {
    if (!this._dirtyness && name === "selected") {
      this._selectedness = this.hasAttribute("selected");
      if (this._selectedness) {
        this._removeOtherSelectedness();
      }
      this._askForAReset();
    }
    super._attrModified.apply(this, arguments);
  }
  get _selectNode() {
    let select = domSymbolTree.parent(this);
    if (!select) {
      return null;
    }

    if (select.nodeName.toUpperCase() !== "SELECT") {
      select = domSymbolTree.parent(select);
      if (!select || select.nodeName.toUpperCase() !== "SELECT") {
        return null;
      }
    }
    return select;
  }
  get form() {
    return closest(this, "form");
  }
  get text() {
    // TODO is not correctly excluding script and SVG script descendants
    return stripAndCollapseASCIIWhitespace(this.textContent);
  }
  set text(V) {
    this.textContent = V;
  }

  get value() {
    return this.hasAttribute("value") ? this.getAttribute("value") : this.text;
  }
  set value(val) {
    this.setAttribute("value", val);
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
  }

  // TODO this is quite wrong
  get label() {
    if (this.hasAttribute("label")) {
      return this.getAttribute("label");
    }
    const select = this._selectNode;
    if (select) {
      return select.getAttribute("label");
    }
    return null;
  }

  set label(V) {
    const select = this._selectNode;
    if (select) {
      select.setAttribute("label", V);
    }
  }
}

module.exports = {
  implementation: HTMLOptionElementImpl
};
