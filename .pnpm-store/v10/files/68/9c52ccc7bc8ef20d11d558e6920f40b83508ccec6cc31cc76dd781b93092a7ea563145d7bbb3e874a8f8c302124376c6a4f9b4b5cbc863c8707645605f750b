"use strict";

const { nodeRoot } = require("../helpers/node");
const { mixin } = require("../../utils");

const DocumentFragment = require("./DocumentFragment-impl").implementation;
const DocumentOrShadowRootImpl = require("./DocumentOrShadowRoot-impl").implementation;
const InnerHTMLImpl = require("../domparsing/InnerHTML-impl").implementation;

class ShadowRootImpl extends DocumentFragment {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    const { mode } = privateData;
    this._mode = mode;
    this._availableToElementInternals = false;
  }

  _getTheParent(event) {
    if (!event.composed && this === nodeRoot(event._path[0].item)) {
      return null;
    }

    return this._host;
  }

  get mode() {
    return this._mode;
  }

  get host() {
    return this._host;
  }
}

mixin(ShadowRootImpl.prototype, DocumentOrShadowRootImpl.prototype);
mixin(ShadowRootImpl.prototype, InnerHTMLImpl.prototype);

module.exports = {
  implementation: ShadowRootImpl
};
