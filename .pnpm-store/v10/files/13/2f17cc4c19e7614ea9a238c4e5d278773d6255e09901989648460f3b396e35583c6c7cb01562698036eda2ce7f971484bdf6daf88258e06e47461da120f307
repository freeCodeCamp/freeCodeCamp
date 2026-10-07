"use strict";
const { hasWeakRefs } = require("../../utils");
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

    // This is used to deactivate the NodeIterator if there are too many working in a Document at the same time.
    // Without weak references, a JS implementation of NodeIterator will leak, since we can't know when to clean it up.
    // This ensures we force a clean up of those beyond some maximum (specified by the Document).
    if (!hasWeakRefs) {
      this._working = true;
    }

    this._globalObject = globalObject;
  }

  get referenceNode() {
    this._throwIfNotWorking();
    return this._referenceNode;
  }

  get pointerBeforeReferenceNode() {
    this._throwIfNotWorking();
    return this._pointerBeforeReferenceNode;
  }

  nextNode() {
    this._throwIfNotWorking();
    return this._traverse("next");
  }

  previousNode() {
    this._throwIfNotWorking();
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

  // Only called by getters and methods that are affected by the pre-removing steps
  _throwIfNotWorking() {
    if (!hasWeakRefs && !this._working) {
      throw Error(`This NodeIterator is no longer working. More than 10 iterators are being used concurrently. ` +
        `Using more than 10 node iterators requires WeakRef support.`);
    }
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
