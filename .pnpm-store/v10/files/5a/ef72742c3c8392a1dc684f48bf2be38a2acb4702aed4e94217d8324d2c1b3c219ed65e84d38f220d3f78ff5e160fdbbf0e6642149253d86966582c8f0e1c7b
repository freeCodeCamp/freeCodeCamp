"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { childrenByLocalName } = require("../helpers/traversal");
const HTMLCollection = require("../generated/HTMLCollection");
const DOMException = require("domexception/webidl2js-wrapper");

class HTMLTableSectionElementImpl extends HTMLElementImpl {
  get rows() {
    if (!this._rows) {
      this._rows = HTMLCollection.createImpl(this._globalObject, [], {
        element: this,
        query: () => childrenByLocalName(this, "tr")
      });
    }
    return this._rows;
  }

  insertRow(index) {
    if (index < -1 || index > this.rows.length) {
      throw DOMException.create(this._globalObject, [
        "Cannot insert a row at an index that is less than -1 or greater than the number of existing rows",
        "IndexSizeError"
      ]);
    }

    const tr = this._ownerDocument.createElement("tr");

    if (index === -1 || index === this.rows.length) {
      this._append(tr);
    } else {
      const beforeTR = this.rows.item(index);
      this._insert(tr, beforeTR);
    }

    return tr;
  }

  deleteRow(index) {
    if (index < -1 || index >= this.rows.length) {
      throw DOMException.create(this._globalObject, [
        `Cannot delete a row at index ${index}, where no row exists`,
        "IndexSizeError"
      ]);
    }

    if (index === -1) {
      if (this.rows.length > 0) {
        const tr = this.rows.item(this.rows.length - 1);
        this._remove(tr);
      }
    } else {
      const tr = this.rows.item(index);
      this._remove(tr);
    }
  }
}

module.exports = {
  implementation: HTMLTableSectionElementImpl
};
