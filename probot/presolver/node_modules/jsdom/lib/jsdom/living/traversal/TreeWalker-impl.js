"use strict";

const DOMException = require("domexception");
const { filter, FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP } = require("./helpers");

const FIRST = false;
const LAST = true;
const NEXT = false;
const PREVIOUS = true;

exports.implementation = class TreeWalkerImpl {
  constructor(args, privateData) {
    this._active = false;
    this.root = privateData.root;
    this.whatToShow = privateData.whatToShow;
    this.filter = privateData.filter;

    this.currentNode = this.root;
  }

  get currentNode() {
    return this._currentNode;
  }

  set currentNode(node) {
    if (node === null) {
      throw new DOMException("Cannot set currentNode to null", "NotSupportedError");
    }

    this._currentNode = node;
  }

  parentNode() {
    let node = this._currentNode;
    while (node !== null && node !== this.root) {
      node = node.parentNode;

      if (node !== null && filter(this, node) === FILTER_ACCEPT) {
        return (this._currentNode = node);
      }
    }
    return null;
  }

  firstChild() {
    return this._traverseChildren(FIRST);
  }

  lastChild() {
    return this._traverseChildren(LAST);
  }

  previousSibling() {
    return this._traverseSiblings(PREVIOUS);
  }

  nextSibling() {
    return this._traverseSiblings(NEXT);
  }

  previousNode() {
    let node = this._currentNode;

    while (node !== this.root) {
      let sibling = node.previousSibling;

      while (sibling !== null) {
        node = sibling;
        let result = filter(this, node);

        while (result !== FILTER_REJECT && node.hasChildNodes()) {
          node = node.lastChild;
          result = filter(this, node);
        }

        if (result === FILTER_ACCEPT) {
          return (this._currentNode = node);
        }

        sibling = node.previousSibling;
      }

      if (node === this.root || node.parentNode === null) {
        return null;
      }

      node = node.parentNode;

      if (filter(this, node) === FILTER_ACCEPT) {
        return (this._currentNode = node);
      }
    }

    return null;
  }

  nextNode() {
    let node = this._currentNode;
    let result = FILTER_ACCEPT;

    for (;;) {
      while (result !== FILTER_REJECT && node.hasChildNodes()) {
        node = node.firstChild;
        result = filter(this, node);
        if (result === FILTER_ACCEPT) {
          return (this._currentNode = node);
        }
      }

      do {
        if (node === this.root) {
          return null;
        }

        const sibling = node.nextSibling;

        if (sibling !== null) {
          node = sibling;
          break;
        }

        node = node.parentNode;
      } while (node !== null);

      if (node === null) {
        return null;
      }

      result = filter(this, node);

      if (result === FILTER_ACCEPT) {
        return (this._currentNode = node);
      }
    }
  }

  _traverseChildren(type) {
    let node = this._currentNode;
    node = type === FIRST ? node.firstChild : node.lastChild;

    if (node === null) {
      return null;
    }

    main: for (;;) {
      const result = filter(this, node);

      if (result === FILTER_ACCEPT) {
        return (this._currentNode = node);
      }

      if (result === FILTER_SKIP) {
        const child = type === FIRST ? node.firstChild : node.lastChild;

        if (child !== null) {
          node = child;
          continue;
        }
      }

      for (;;) {
        const sibling = type === FIRST ? node.nextSibling : node.previousSibling;

        if (sibling !== null) {
          node = sibling;
          continue main;
        }

        const parent = node.parentNode;

        if (parent === null || parent === this.root || parent === this._currentNode) {
          return null;
        }

        node = parent;
      }
    }
  }

  _traverseSiblings(type) {
    let node = this._currentNode;

    if (node === this.root) {
      return null;
    }

    for (;;) {
      let sibling = type === NEXT ? node.nextSibling : node.previousSibling;

      while (sibling !== null) {
        node = sibling;
        const result = filter(this, node);

        if (result === FILTER_ACCEPT) {
          return (this._currentNode = node);
        }

        sibling = type === NEXT ? node.firstChild : node.lastChild;

        if (result === FILTER_REJECT || sibling === null) {
          sibling = type === NEXT ? node.nextSibling : node.previousSibling;
        }
      }

      node = node.parentNode;

      if (node === null || node === this.root) {
        return null;
      }

      if (filter(this, node) === FILTER_ACCEPT) {
        return null;
      }
    }
  }
};
