"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const MouseEvent = require("../generated/MouseEvent");
const { domSymbolTree } = require("../helpers/internal-constants");
const NODE_TYPE = require("../node-type");
const { isLabelable, isDisabled, isInteractiveContent } = require("../helpers/form-controls");
const { isInclusiveAncestor } = require("../helpers/node");
const { fireAnEvent } = require("../helpers/events");

function sendClickToAssociatedNode(node) {
  fireAnEvent("click", node, MouseEvent, {
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
  });
}

class HTMLLabelElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._hasActivationBehavior = true;
  }

  get control() {
    if (this.hasAttributeNS(null, "for")) {
      const forValue = this.getAttributeNS(null, "for");
      if (forValue === "") {
        return null;
      }
      const root = this.getRootNode({});
      for (const descendant of domSymbolTree.treeIterator(root)) {
        if (descendant.nodeType === NODE_TYPE.ELEMENT_NODE &&
          descendant.getAttributeNS(null, "id") === forValue) {
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

  _activationBehavior(event) {
    // Check if the event's target is an inclusive descendant of any interactive content descendant of this <label>.
    // If so, do nothing.
    if (event.target && event.target !== this && isInclusiveAncestor(this, event.target)) {
      for (const ancestor of domSymbolTree.ancestorsIterator(event.target)) {
        if (ancestor === this) {
          break;
        }
        if (isInteractiveContent(ancestor)) {
          return;
        }
      }
    }

    const node = this.control;
    if (node && !isDisabled(node)) {
      // Check if the control is an inclusive ancestor of the event's target (and has already received this event).
      // If so, do nothing.
      // See https://github.com/whatwg/html/issues/5415.
      if (event.target && isInclusiveAncestor(node, event.target)) {
        return;
      }

      sendClickToAssociatedNode(node);
    }
  }
}

module.exports = {
  implementation: HTMLLabelElementImpl
};
