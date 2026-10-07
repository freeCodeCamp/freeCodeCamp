"use strict";
const DOMException = require("domexception/webidl2js-wrapper");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { HTML_NS } = require("../helpers/namespaces");
const { domSymbolTree } = require("../helpers/internal-constants");
const { firstChildWithLocalName, childrenByLocalName } = require("../helpers/traversal");
const HTMLCollection = require("../generated/HTMLCollection");
const NODE_TYPE = require("../node-type");

function tHeadInsertionPoint(table) {
  const iterator = domSymbolTree.childrenIterator(table);
  for (const child of iterator) {
    if (child.nodeType !== NODE_TYPE.ELEMENT_NODE) {
      continue;
    }

    if (child._namespaceURI !== HTML_NS || (child._localName !== "caption" && child._localName !== "colgroup")) {
      return child;
    }
  }

  return null;
}

class HTMLTableElementImpl extends HTMLElementImpl {
  get caption() {
    return firstChildWithLocalName(this, "caption");
  }

  set caption(value) {
    const currentCaption = this.caption;
    if (currentCaption !== null) {
      this.removeChild(currentCaption);
    }

    if (value !== null) {
      const insertionPoint = this.firstChild;
      this.insertBefore(value, insertionPoint);
    }
  }

  get tHead() {
    return firstChildWithLocalName(this, "thead");
  }

  set tHead(value) {
    if (value !== null && value._localName !== "thead") {
      throw DOMException.create(this._globalObject, [
        "Cannot set a non-thead element as a table header",
        "HierarchyRequestError"
      ]);
    }

    const currentHead = this.tHead;
    if (currentHead !== null) {
      this.removeChild(currentHead);
    }

    if (value !== null) {
      const insertionPoint = tHeadInsertionPoint(this);
      this.insertBefore(value, insertionPoint);
    }
  }

  get tFoot() {
    return firstChildWithLocalName(this, "tfoot");
  }

  set tFoot(value) {
    if (value !== null && value._localName !== "tfoot") {
      throw DOMException.create(this._globalObject, [
        "Cannot set a non-tfoot element as a table footer",
        "HierarchyRequestError"
      ]);
    }

    const currentFoot = this.tFoot;
    if (currentFoot !== null) {
      this.removeChild(currentFoot);
    }

    if (value !== null) {
      this.appendChild(value);
    }
  }

  get rows() {
    if (!this._rows) {
      this._rows = HTMLCollection.createImpl(this._globalObject, [], {
        element: this,
        query: () => {
          const headerRows = [];
          const bodyRows = [];
          const footerRows = [];

          const iterator = domSymbolTree.childrenIterator(this);
          for (const child of iterator) {
            if (child.nodeType !== NODE_TYPE.ELEMENT_NODE || child._namespaceURI !== HTML_NS) {
              continue;
            }

            if (child._localName === "thead") {
              headerRows.push(...childrenByLocalName(child, "tr"));
            } else if (child._localName === "tbody") {
              bodyRows.push(...childrenByLocalName(child, "tr"));
            } else if (child._localName === "tfoot") {
              footerRows.push(...childrenByLocalName(child, "tr"));
            } else if (child._localName === "tr") {
              bodyRows.push(child);
            }
          }

          return [...headerRows, ...bodyRows, ...footerRows];
        }
      });
    }
    return this._rows;
  }

  get tBodies() {
    if (!this._tBodies) {
      this._tBodies = HTMLCollection.createImpl(this._globalObject, [], {
        element: this,
        query: () => childrenByLocalName(this, "tbody")
      });
    }
    return this._tBodies;
  }

  createTBody() {
    const el = this._ownerDocument.createElement("TBODY");

    const tbodies = childrenByLocalName(this, "tbody");
    const insertionPoint = tbodies[tbodies.length - 1];

    if (insertionPoint) {
      this.insertBefore(el, insertionPoint.nextSibling);
    } else {
      this.appendChild(el);
    }
    return el;
  }

  createTHead() {
    let el = this.tHead;
    if (!el) {
      el = this.tHead = this._ownerDocument.createElement("THEAD");
    }
    return el;
  }

  deleteTHead() {
    this.tHead = null;
  }

  createTFoot() {
    let el = this.tFoot;
    if (!el) {
      el = this.tFoot = this._ownerDocument.createElement("TFOOT");
    }
    return el;
  }

  deleteTFoot() {
    this.tFoot = null;
  }

  createCaption() {
    let el = this.caption;
    if (!el) {
      el = this.caption = this._ownerDocument.createElement("CAPTION");
    }
    return el;
  }

  deleteCaption() {
    const c = this.caption;
    if (c) {
      c.parentNode.removeChild(c);
    }
  }

  insertRow(index) {
    if (index < -1 || index > this.rows.length) {
      throw DOMException.create(this._globalObject, [
        "Cannot insert a row at an index that is less than -1 or greater than the number of existing rows",
        "IndexSizeError"
      ]);
    }

    const tr = this._ownerDocument.createElement("tr");

    if (this.rows.length === 0 && this.tBodies.length === 0) {
      const tBody = this._ownerDocument.createElement("tbody");
      tBody.appendChild(tr);
      this.appendChild(tBody);
    } else if (this.rows.length === 0) {
      const tBody = this.tBodies.item(this.tBodies.length - 1);
      tBody.appendChild(tr);
    } else if (index === -1 || index === this.rows.length) {
      const tSection = this.rows.item(this.rows.length - 1).parentNode;
      tSection.appendChild(tr);
    } else {
      const beforeTR = this.rows.item(index);
      const tSection = beforeTR.parentNode;
      tSection.insertBefore(tr, beforeTR);
    }

    return tr;
  }

  deleteRow(index) {
    const rowLength = this.rows.length;
    if (index < -1 || index >= rowLength) {
      throw DOMException.create(this._globalObject, [
        `Cannot delete a row at index ${index}, where no row exists`,
        "IndexSizeError"
      ]);
    }

    if (index === -1) {
      if (rowLength === 0) {
        return;
      }

      index = rowLength - 1;
    }

    const tr = this.rows.item(index);
    tr.parentNode.removeChild(tr);
  }
}

module.exports = {
  implementation: HTMLTableElementImpl
};
