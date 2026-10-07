"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const ValidityState = require("../generated/ValidityState");
const { mixin } = require("../../utils");

const DOMException = require("../generated/DOMException");
const { cloningSteps } = require("../helpers/internal-constants");
const { isDisabled, getLabelsForLabelable, formOwner } = require("../helpers/form-controls");
const { childTextContent } = require("../helpers/text");
const { fireAnEvent } = require("../helpers/events");

class HTMLTextAreaElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._selectionStart = this._selectionEnd = 0;
    this._selectionDirection = "none";
    this._rawValue = "";
    this._dirtyValue = false;

    this._customValidityErrorMessage = "";

    this._labels = null;
  }

  _formReset() {
    this._rawValue = childTextContent(this);
    this._dirtyValue = false;
  }

  _getAPIValue() {
    return this._rawValue.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#textarea-wrapping-transformation
  _getValue() {
    const apiValue = this._getAPIValue();
    const wrap = this.getAttributeNS(null, "wrap");
    return wrap === "hard" ?
      textareaWrappingTransformation(apiValue, this.getAttributeNS(null, "cols") ?? 20) :
      apiValue;
  }

  _childTextContentChangeSteps() {
    super._childTextContentChangeSteps();

    if (this._dirtyValue === false) {
      this._rawValue = childTextContent(this);
    }
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return formOwner(this);
  }

  get defaultValue() {
    return childTextContent(this);
  }

  set defaultValue(val) {
    this.textContent = val;
  }

  get value() {
    return this._getAPIValue();
  }

  set value(val) {
    // https://html.spec.whatwg.org/multipage/form-elements.html#dom-textarea-value
    const oldAPIValue = this._getAPIValue();
    this._rawValue = val;
    this._dirtyValue = true;

    if (oldAPIValue !== this._getAPIValue()) {
      this._selectionStart = this._selectionEnd = this._getValueLength();
      this._selectionDirection = "none";
    }
  }

  get textLength() {
    return this.value.length; // code unit length (16 bit)
  }

  get type() {
    return "textarea";
  }

  _dispatchSelectEvent() {
    setTimeout(() => fireAnEvent("select", this, undefined, { bubbles: true, cancelable: false }), 0);
  }

  _getValueLength() {
    return typeof this.value === "string" ? this.value.length : 0;
  }

  select() {
    this._selectionStart = 0;
    this._selectionEnd = this._getValueLength();
    this._selectionDirection = "none";
    this._dispatchSelectEvent();
  }

  get selectionStart() {
    return this._selectionStart;
  }

  set selectionStart(start) {
    this.setSelectionRange(start, Math.max(start, this._selectionEnd), this._selectionDirection);
  }

  get selectionEnd() {
    return this._selectionEnd;
  }

  set selectionEnd(end) {
    this.setSelectionRange(this._selectionStart, end, this._selectionDirection);
  }

  get selectionDirection() {
    return this._selectionDirection;
  }

  set selectionDirection(dir) {
    this.setSelectionRange(this._selectionStart, this._selectionEnd, dir);
  }

  setSelectionRange(start, end, dir) {
    this._selectionEnd = Math.min(end, this._getValueLength());
    this._selectionStart = Math.min(start, this._selectionEnd);
    this._selectionDirection = dir === "forward" || dir === "backward" ? dir : "none";
    this._dispatchSelectEvent();
  }

  setRangeText(repl, start, end, selectionMode = "preserve") {
    if (arguments.length < 2) {
      start = this._selectionStart;
      end = this._selectionEnd;
    } else if (start > end) {
      throw DOMException.create(this._globalObject, ["The index is not in the allowed range.", "IndexSizeError"]);
    }

    start = Math.min(start, this._getValueLength());
    end = Math.min(end, this._getValueLength());

    const val = this.value;
    let selStart = this._selectionStart;
    let selEnd = this._selectionEnd;

    this.value = val.slice(0, start) + repl + val.slice(end);

    const newEnd = start + repl.length;

    if (selectionMode === "select") {
      this.setSelectionRange(start, newEnd);
    } else if (selectionMode === "start") {
      this.setSelectionRange(start, start);
    } else if (selectionMode === "end") {
      this.setSelectionRange(newEnd, newEnd);
    } else { // preserve
      const delta = repl.length - (end - start);

      if (selStart > end) {
        selStart += delta;
      } else if (selStart > start) {
        selStart = start;
      }

      if (selEnd > end) {
        selEnd += delta;
      } else if (selEnd > start) {
        selEnd = newEnd;
      }

      this.setSelectionRange(selStart, selEnd);
    }
  }

  _barredFromConstraintValidationSpecialization() {
    return this.hasAttributeNS(null, "readonly");
  }

  get _mutable() {
    return !isDisabled(this) && !this.hasAttributeNS(null, "readonly");
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-required
  get validity() {
    if (!this._validity) {
      const state = {
        valueMissing: () => this.hasAttributeNS(null, "required") && this._mutable && this.value === ""
      };

      this._validity = ValidityState.createImpl(this._globalObject, [], {
        element: this,
        state
      });
    }
    return this._validity;
  }

  [cloningSteps](copy, node) {
    copy._dirtyValue = node._dirtyValue;
    copy._rawValue = node._rawValue;
  }
}

mixin(HTMLTextAreaElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLTextAreaElementImpl
};

function textareaWrappingTransformation(text, cols) {
  let lineStart = 0;
  let lineEnd = text.indexOf("\n");
  if (lineEnd === -1) {
    lineEnd = text.length;
  }

  while (lineStart < text.length) {
    const lineLength = lineEnd - lineStart;
    if (lineLength > cols) {
      // split the line
      lineEnd = lineStart + cols;
      text = text.slice(0, lineEnd) + "\n" + text.slice(lineEnd);
    }
    // move to next line
    lineStart = lineEnd + 1; // step over the newline
    lineEnd = text.indexOf("\n", lineStart);
    if (lineEnd === -1) {
      lineEnd = text.length;
    }
  }

  return text;
}
