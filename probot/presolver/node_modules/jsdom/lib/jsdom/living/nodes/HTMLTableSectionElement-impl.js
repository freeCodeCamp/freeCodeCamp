"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { childrenByHTMLLocalName } = require("../helpers/traversal");
const HTMLCollection = require("../generated/HTMLCollection");
const DOMException = require("domexception");

class HTMLTableSectionElementImpl extends HTMLElementImpl {
  get rows() {
    if (!this._rows) {
      this._rows = HTMLCollection.createImpl([], {
        element: this,
        query: () => childrenByHTMLLocalName(this, "tr")
      });
    }
    return this._rows;
  }

  insertRow(index) {
    if (index < -1 || index > this.rows.length) {
      throw new DOMException("Cannot insert a row at an index that is less than -1 or greater than the number of " +
        "existing rows", "IndexSizeError");
    }

    const tr = this._ownerDocument.createElement("tr");

    if (index === -1 || index === this.rows.length) {
      this.appendChild(tr);
    } else {
      const beforeTR = this.rows.item(index);
      this.insertBefore(tr, beforeTR);
    }

    return tr;
  }

  deleteRow(index) {
    if (index < -1 || index >= this.rows.length) {
      throw new DOMException(`Cannot delete a row at index ${index}, where no row exists`, "IndexSizeError");
    }

    if (index === -1) {
      if (this.rows.length > 0) {
        const tr = this.rows.item(this.rows.length - 1);
        this.removeChild(tr);
      }
    } else {
      const tr = this.rows.item(index);
      this.removeChild(tr);
    }
  }
}

module.exports = {
  implementation: HTMLTableSectionElementImpl
};
