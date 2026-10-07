"use strict";
const { domSymbolTree } = require("../helpers/internal-constants");
const { filter, FILTER_ACCEPT } = require("./helpers");

exports.implementation = class NodeIteratorImpl {
  constructor(globalObject, args, privateData) {
    this._active = false;
    this.root = privateData.root;
    this.whatToShow = privateData.whatToShow;
    this.filter = privateData.filter;

    this._referenceNode = this.root;
    this._pointerBeforeReferenceNode = true;

    this._globalObject = globalObject;
  }

  get referenceNode() {
    return this._referenceNode;
  }

  get pointerBeforeReferenceNode() {
    return this._pointerBeforeReferenceNode;
  }

  nextNode() {
    return this._traverse("next");
  }

  previousNode() {
    return this._traverse("previous");
  }

  detach() {
    // Intentionally do nothing, per spec.
  }

  // Called by Documents.
  _preRemovingSteps(toBeRemovedNode) {
    // Second clause is https://github.com/whatwg/dom/issues/496
    if (!toBeRemovedNode.contains(this._referenceNode) || toBeRemovedNode === this.root) {
      return;
    }

    if (this._pointerBeforeReferenceNode) {
      let next = null;
      let candidateForNext = domSymbolTree.following(toBeRemovedNode, { skipChildren: true });
      while (candidateForNext !== null) {
        if (this.root.contains(candidateForNext)) {
          next = candidateForNext;
          break;
        }
        candidateForNext = domSymbolTree.following(candidateForNext, { skipChildren: true });
      }

      if (next !== null) {
        this._referenceNode = next;
        return;
      }

      this._pointerBeforeReferenceNode = false;
    }

    const { previousSibling } = toBeRemovedNode;
    this._referenceNode = previousSibling === null ?
                          toBeRemovedNode.parentNode :
                          domSymbolTree.lastInclusiveDescendant(toBeRemovedNode.previousSibling);
  }

  _traverse(direction) {
    let node = this._referenceNode;
    let beforeNode = this._pointerBeforeReferenceNode;

    while (true) {
      if (direction === "next") {
        if (!beforeNode) {
          node = domSymbolTree.following(node, { root: this.root });

          if (!node) {
            return null;
          }
        }

        beforeNode = false;
      } else if (direction === "previous") {
        if (beforeNode) {
          node = domSymbolTree.preceding(node, { root: this.root });

          if (!node) {
            return null;
          }
        }

        beforeNode = true;
      }

      const result = filter(this, node);
      if (result === FILTER_ACCEPT) {
        break;
      }
    }

    this._referenceNode = node;
    this._pointerBeforeReferenceNode = beforeNode;
    return node;
  }
};
