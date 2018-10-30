"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const ValidityState = require("../generated/ValidityState");
const { mixin } = require("../../utils");

const DOMException = require("domexception");
const { closest } = require("../helpers/traversal");
const { normalizeToCRLF, getLabelsForLabelable } = require("../helpers/form-controls");
const { childTextContent } = require("../helpers/text");

class HTMLTextAreaElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

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

  _getValue() {
    // Hard-wrapping omitted, for now.
    return normalizeToCRLF(this._rawValue);
  }

  _childTextContentChangeSteps() {
    if (this._dirtyValue === false) {
      this._rawValue = childTextContent(this);
    }
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return closest(this, "form");
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
    this._rawValue = val;
    this._dirtyValue = true;

    this._selectionStart = 0;
    this._selectionEnd = 0;
    this._selectionDirection = "none";
  }

  get textLength() {
    return this.value.length; // code unit length (16 bit)
  }

  get type() {
    return "textarea";
  }

  _dispatchSelectEvent() {
    const event = this._ownerDocument.createEvent("HTMLEvents");
    event.initEvent("select", true, true);
    this.dispatchEvent(event);
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
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }

    start = Math.min(start, this._getValueLength());
    end = Math.min(end, this._getValueLength());

    const val = this.value;
    let selStart = this._selectionStart;
    let selEnd = this._selectionEnd;

    this.value = val.slice(0, start) + repl + val.slice(end);

    const newEnd = start + this.value.length;

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

  get cols() {
    if (!this.hasAttribute("cols")) {
      return 20;
    }
    return parseInt(this.getAttribute("cols"));
  }

  set cols(value) {
    if (value <= 0) {
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }
    this.setAttribute("cols", String(value));
  }

  get rows() {
    if (!this.hasAttribute("rows")) {
      return 2;
    }
    return parseInt(this.getAttribute("rows"));
  }

  set rows(value) {
    if (value <= 0) {
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }
    this.setAttribute("rows", String(value));
  }

  _barredFromConstraintValidationSpecialization() {
    return this.hasAttribute("readonly");
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-required
  get validity() {
    if (!this._validity) {
      this._validity = ValidityState.createImpl(this, {
        valueMissing: () => this.hasAttribute("required") && this.value === ""
      });
    }
    return this._validity;
  }
}

mixin(HTMLTextAreaElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLTextAreaElementImpl
};
