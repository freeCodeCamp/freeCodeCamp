"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { removeStylesheet, createStylesheet } = require("../helpers/stylesheets");
const { childTextContent } = require("../helpers/text");
const { asciiCaseInsensitiveMatch } = require("../helpers/strings");

class HTMLStyleElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this.sheet = null;
    this._isOnStackOfOpenElements = false;
  }

  _attach() {
    super._attach();
    if (!this._isOnStackOfOpenElements) {
      this._updateAStyleBlock();
    }
  }

  _detach() {
    super._detach();
    if (!this._isOnStackOfOpenElements) {
      this._updateAStyleBlock();
    }
  }

  _childTextContentChangeSteps() {
    super._childTextContentChangeSteps();

    // This guard is not required by the spec, but should be unobservable (since you can't run script during the middle
    // of parsing a <style> element) and saves a bunch of unnecessary work.
    if (!this._isOnStackOfOpenElements) {
      this._updateAStyleBlock();
    }
  }

  _poppedOffStackOfOpenElements() {
    this._isOnStackOfOpenElements = false;
    this._updateAStyleBlock();
  }

  _pushedOnStackOfOpenElements() {
    this._isOnStackOfOpenElements = true;
  }

  _updateAStyleBlock() {
    if (this.sheet) {
      removeStylesheet(this.sheet, this);
    }

    // Browsing-context connected, per https://github.com/whatwg/html/issues/4547
    if (!this.isConnected || !this._ownerDocument._defaultView) {
      return;
    }

    const type = this.getAttributeNS(null, "type");
    if (type !== null && type !== "" && !asciiCaseInsensitiveMatch(type, "text/css")) {
      return;
    }

    // Not implemented: CSP

    const content = childTextContent(this);
    // Not implemented: a bunch of other state, e.g. title/media attributes
    createStylesheet(content, this, this._ownerDocument.baseURL());
  }
}

module.exports = {
  implementation: HTMLStyleElementImpl
};
