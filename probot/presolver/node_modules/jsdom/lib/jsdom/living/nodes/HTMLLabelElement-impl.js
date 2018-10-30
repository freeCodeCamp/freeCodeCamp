"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const MouseEvent = require("../generated/MouseEvent");
const { domSymbolTree } = require("../helpers/internal-constants");
const NODE_TYPE = require("../node-type");
const { isLabelable, isDisabled } = require("../helpers/form-controls");

function sendClickToAssociatedNode(node) {
  node.dispatchEvent(MouseEvent.createImpl([
    "click",
    {
      bubbles: true,
      cancelable: true,
      view: node.ownerDocument ? node.ownerDocument.defaultView : null,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      button: 0,
      detail: 1,
      relatedTarget: null
    }
  ]));
}

class HTMLLabelElementImpl extends HTMLElementImpl {
  get control() {
    if (this.hasAttribute("for")) {
      const forValue = this.getAttribute("for");
      if (forValue === "") {
        return null;
      }
      const root = this.getRootNode();
      for (const descendant of domSymbolTree.treeIterator(root)) {
        if (descendant.nodeType === NODE_TYPE.ELEMENT_NODE &&
          descendant.getAttribute("id") === forValue) {
          return isLabelable(descendant) ? descendant : null;
        }
      }
      return null;
    }
    for (const descendant of domSymbolTree.treeIterator(this)) {
      if (isLabelable(descendant)) {
        return descendant;
      }
    }
    return null;
  }

  get form() {
    const node = this.control;
    if (node) {
      return node.form;
    }
    return null;
  }

  _activationBehavior() {
    const node = this.control;
    if (node && !isDisabled(node)) {
      sendClickToAssociatedNode(node);
    }
  }
}

module.exports = {
  implementation: HTMLLabelElementImpl
};
