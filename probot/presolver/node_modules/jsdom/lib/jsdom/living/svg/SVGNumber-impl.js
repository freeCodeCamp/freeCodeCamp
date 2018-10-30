"use strict";

const DOMException = require("domexception");

class SVGNumberImpl {
  constructor(args, privateData) {
    // Delegate to parent List object for (almost) everything related to reflection.
    this._parentList = privateData.parentList;
    this._value = 0;
  }

  get _readOnly() {
    if (this._parentList !== undefined) {
      return this._parentList._readOnly;
    }
    return false;
  }

  _synchronize() {
    if (this._parentList !== undefined) {
      this._parentList._synchronize();
    }
  }

  _reserialize() {
    if (this._parentList !== undefined) {
      this._parentList._reserialize();
    }
  }

  get value() {
    this._synchronize();
    return this._value;
  }

  set value(value) {
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only SVGNumber", "NoModificationAllowedError");
    }
    this._value = value;
    this._reserialize();
  }
}

exports.implementation = SVGNumberImpl;
