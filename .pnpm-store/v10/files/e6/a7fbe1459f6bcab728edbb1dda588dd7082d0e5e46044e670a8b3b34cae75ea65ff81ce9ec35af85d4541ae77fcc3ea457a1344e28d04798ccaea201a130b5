"use strict";
const NODE_TYPE = require("../node-type");
const { nodeRoot } = require("../helpers/node");
const { retarget } = require("../helpers/shadow-dom");

class DocumentOrShadowRootImpl {
  get activeElement() {
    let candidate = this._ownerDocument._lastFocusedElement || this._ownerDocument.body;
    if (!candidate) {
      return null;
    }
    candidate = retarget(candidate, this);
    if (nodeRoot(candidate) !== this) {
      return null;
    }
    if (candidate.nodeType !== NODE_TYPE.DOCUMENT_NODE) {
      return candidate;
    }
    if (candidate.body !== null) {
      return candidate.body;
    }
    return candidate.documentElement;
  }
}

module.exports = {
  implementation: DocumentOrShadowRootImpl
};
