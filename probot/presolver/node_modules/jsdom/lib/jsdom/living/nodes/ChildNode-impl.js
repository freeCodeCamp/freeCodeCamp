"use strict";

const { convertNodesIntoNode } = require("../node");

class ChildNodeImpl {
  remove() {
    if (!this.parentNode) {
      return;
    }

    this.parentNode.removeChild(this);
  }

  after(...nodes) {
    const parent = this.parentNode;
    if (parent) {
      let viableNextSibling = this.nextSibling;
      let idx = viableNextSibling ? nodes.indexOf(viableNextSibling) : -1;

      while (idx !== -1) {
        viableNextSibling = viableNextSibling.nextSibling;
        if (!viableNextSibling) {
          break;
        }
        idx = nodes.indexOf(viableNextSibling);
      }
      parent.insertBefore(convertNodesIntoNode(this._ownerDocument, nodes), viableNextSibling);
    }
  }

  before(...nodes) {
    const parent = this.parentNode;
    if (parent) {
      let viablePreviousSibling = this.previousSibling;
      let idx = viablePreviousSibling ? nodes.indexOf(viablePreviousSibling) : -1;

      while (idx !== -1) {
        viablePreviousSibling = viablePreviousSibling.previousSibling;
        if (!viablePreviousSibling) {
          break;
        }
        idx = nodes.indexOf(viablePreviousSibling);
      }

      parent.insertBefore(
        convertNodesIntoNode(this._ownerDocument, nodes),
        viablePreviousSibling ? viablePreviousSibling.nextSibling : parent.firstChild
      );
    }
  }

  replaceWith(...nodes) {
    const parent = this.parentNode;
    if (parent) {
      let viableNextSibling = this.nextSibling;
      let idx = viableNextSibling ? nodes.indexOf(viableNextSibling) : -1;

      while (idx !== -1) {
        viableNextSibling = viableNextSibling.nextSibling;
        if (!viableNextSibling) {
          break;
        }
        idx = nodes.indexOf(viableNextSibling);
      }

      const node = convertNodesIntoNode(this._ownerDocument, nodes);

      if (this.parentNode === parent) {
        parent.replaceChild(node, this);
      } else {
        parent.insertBefore(node, viableNextSibling);
      }
    }
  }
}

module.exports = {
  implementation: ChildNodeImpl
};
