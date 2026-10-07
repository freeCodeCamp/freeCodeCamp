"use strict";
const DOMException = require("../generated/DOMException");
const FileList = require("../generated/FileList");
const Decimal = require("decimal.js");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const idlUtils = require("../generated/utils");
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const ValidityState = require("../generated/ValidityState");
const { mixin } = require("../../utils");
const { domSymbolTree, cloningSteps } = require("../helpers/internal-constants");
const { getLabelsForLabelable, formOwner } = require("../helpers/form-controls");
const { fireAnEvent } = require("../helpers/events");
const {
  isDisabled,
  isValidEmailAddress,
  isValidAbsoluteURL,
  sanitizeValueByType
} = require("../helpers/form-controls");
const {
  asciiCaseInsensitiveMatch,
  asciiLowercase,
  parseFloatingPointNumber,
  splitOnCommas
} = require("../helpers/strings");
const { isDate } = require("../helpers/dates-and-times");
const {
  convertStringToNumberByType,
  convertStringToDateByType,
  serializeDateByType,
  convertNumberToStringByType
} = require("../helpers/number-and-date-inputs");

const filesSymbol = Symbol("files");

// https://html.spec.whatwg.org/multipage/input.html#attr-input-type
const inputAllowedTypes = new Set([
  "hidden", "text", "search", "tel", "url", "email", "password", "date",
  "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio",
  "file", "submit", "image", "reset", "button"
]);

// https://html.spec.whatwg.org/multipage/input.html#concept-input-apply

const variableLengthSelectionAllowedTypes = new Set(["text", "search", "url", "tel", "password"]);
const numericTypes = new Set(["date", "month", "week", "time", "datetime-local", "number", "range"]);

const applicableTypesForIDLMember = {
  valueAsDate: new Set(["date", "month", "week", "time"]),
  valueAsNumber: numericTypes,

  select: new Set([
    "text", "search", "url", "tel", "email", "password", "date", "month", "week",
    "time", "datetime-local", "number", "color", "file"
  ]),
  selectionStart: variableLengthSelectionAllowedTypes,
  selectionEnd: variableLengthSelectionAllowedTypes,
  selectionDirection: variableLengthSelectionAllowedTypes,
  setRangeText: variableLengthSelectionAllowedTypes,
  setSelectionRange: variableLengthSelectionAllowedTypes,
  stepDown: numericTypes,
  stepUp: numericTypes
};

const lengthPatternSizeTypes = new Set(["text", "search", "url", "tel", "email", "password"]);
const readonlyTypes =
  new Set([...lengthPatternSizeTypes, "date", "month", "week", "time", "datetime-local", "number"]);

const applicableTypesForContentAttribute = {
  list: new Set(["text", "search", "url", "tel", "email", ...numericTypes, "color"]),
  max: numericTypes,
  maxlength: lengthPatternSizeTypes,
  min: numericTypes,
  minlength: lengthPatternSizeTypes,
  multiple: new Set(["email", "file"]),
  pattern: lengthPatternSizeTypes,
  readonly: readonlyTypes,
  required: new Set([...readonlyTypes, "checkbox", "radio", "file"]),
  step: numericTypes
};

const valueAttributeDefaultMode = new Set(["hidden", "submit", "image", "reset", "button"]);
const valueAttributeDefaultOnMode = new Set(["checkbox", "radio"]);

function valueAttributeMode(type) {
  if (valueAttributeDefaultMode.has(type)) {
    return "default";
  }
  if (valueAttributeDefaultOnMode.has(type)) {
    return "default/on";
  }
  if (type === "file") {
    return "filename";
  }
  return "value";
}

function getTypeFromAttribute(typeAttribute) {
  if (typeof typeAttribute !== "string") {
    return "text";
  }
  const type = asciiLowercase(typeAttribute);
  return inputAllowedTypes.has(type) ? type : "text";
}

class HTMLInputElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._selectionStart = this._selectionEnd = 0;
    this._selectionDirection = "none";
    this._value = "";
    this._dirtyValue = false;
    this._checkedness = false;
    this._dirtyCheckedness = false;

    this._preCheckedRadioState = null;
    this._legacyActivationBehaviorPreviousIndeterminateState = false;

    this.indeterminate = false;

    this._customValidityErrorMessage = "";

    this._labels = null;

    this._hasActivationBehavior = true;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-value-string-number
  get _convertStringToNumber() {
    return convertStringToNumberByType[this.type];
  }

  get _convertNumberToString() {
    return convertNumberToStringByType[this.type];
  }

  get _convertDateToString() {
    return serializeDateByType[this.type];
  }

  get _convertStringToDate() {
    return convertStringToDateByType[this.type];
  }

  _isStepAligned(v) {
    return new Decimal(v).minus(this._stepBase)
      .modulo(this._allowedValueStep)
      .isZero();
  }

  // Returns a Decimal.
  _stepAlign(v, roundUp) {
    const allowedValueStep = this._allowedValueStep;
    const stepBase = this._stepBase;

    return new Decimal(v).minus(stepBase)
      .toNearest(allowedValueStep, roundUp ? Decimal.ROUND_UP : Decimal.ROUND_DOWN)
      .add(stepBase);
  }

  // For <input>, https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-value
  // is a simple value that is gotten and set, not computed.
  _getValue() {
    return this._value;
  }

  _legacyPreActivationBehavior() {
    if (this.type === "checkbox") {
      this.checked = !this.checked;
      this._legacyActivationBehaviorPreviousIndeterminateState = this.indeterminate;
      this.indeterminate = false;
    } else if (this.type === "radio") {
      this._preCheckedRadioState = this.checked;
      this.checked = true;
    }
  }

  _legacyCanceledActivationBehavior() {
    if (this.type === "checkbox") {
      this.checked = !this.checked;
      this.indeterminate = this._legacyActivationBehaviorPreviousIndeterminateState;
    } else if (this.type === "radio") {
      if (this._preCheckedRadioState !== null) {
        this.checked = this._preCheckedRadioState;
        this._preCheckedRadioState = null;
      }
    }
  }

  _activationBehavior(event) {
    if (!this._mutable && this.type !== "checkbox" && this.type !== "radio") {
      return;
    }

    const { form } = this;

    if (this.type === "checkbox" || (this.type === "radio" && !this._preCheckedRadioState)) {
      if (this.isConnected) {
        fireAnEvent("input", this, undefined, { bubbles: true });
        fireAnEvent("change", this, undefined, { bubbles: true });
      }
    } else if (form && this.type === "image") {
      // https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image):input-activation-behavior

      // TODO: if/when layout is implemented, record the selected coordinate at the start of dispatch and use it here,
      // rather than relying on these getters that just mirror pageX/Y outside of dispatch
      this._selectedCoordinate = { x: event.offsetX, y: event.offsetY };
      form._doRequestSubmit(this);
    } else if (form && this.type === "submit") {
      form._doRequestSubmit(this);
    } else if (form && this.type === "reset") {
      form._doReset();
    }
  }

  _attrModified(name, value, oldVal) {
    const wrapper = idlUtils.wrapperForImpl(this);
    if (!this._dirtyValue && name === "value") {
      this._value = sanitizeValueByType(this, wrapper.defaultValue);
    }
    if (!this._dirtyCheckedness && name === "checked") {
      this._checkedness = wrapper.defaultChecked;
      if (this._checkedness) {
        this._removeOtherRadioCheckedness();
      }
    }

    if (name === "name" || name === "type") {
      if (this._checkedness) {
        this._removeOtherRadioCheckedness();
      }
    }

    if (name === "type") {
      const prevType = getTypeFromAttribute(oldVal);
      const curType = getTypeFromAttribute(value);
      // When an input element's type attribute changes state…
      if (prevType !== curType) {
        const prevValueMode = valueAttributeMode(prevType);
        const curValueMode = valueAttributeMode(curType);
        if (prevValueMode === "value" && this._value !== "" &&
            (curValueMode === "default" || curValueMode === "default/on")) {
          this.setAttributeNS(null, "value", this._value);
        } else if (prevValueMode !== "value" && curValueMode === "value") {
          this._value = this.getAttributeNS(null, "value") || "";
          this._dirtyValue = false;
        } else if (prevValueMode !== "filename" && curValueMode === "filename") {
          this._value = "";
        }

        this._signalATypeChange();

        this._value = sanitizeValueByType(this, this._value);

        const previouslySelectable = this._idlMemberApplies("setRangeText", prevType);
        const nowSelectable = this._idlMemberApplies("setRangeText", curType);
        if (!previouslySelectable && nowSelectable) {
          this._selectionStart = 0;
          this._selectionEnd = 0;
          this._selectionDirection = "none";
        }
      }
    }

    super._attrModified(name, value, oldVal);
  }

  // https://html.spec.whatwg.org/multipage/input.html#signal-a-type-change
  _signalATypeChange() {
    if (this._checkedness) {
      this._removeOtherRadioCheckedness();
    }
  }

  _formReset() {
    const wrapper = idlUtils.wrapperForImpl(this);
    this._value = sanitizeValueByType(this, wrapper.defaultValue);
    this._dirtyValue = false;
    this._checkedness = wrapper.defaultChecked;
    this._dirtyCheckedness = false;
    if (this._checkedness) {
      this._removeOtherRadioCheckedness();
    }
  }

  _changedFormOwner() {
    if (this._checkedness) {
      this._removeOtherRadioCheckedness();
    }
  }

  get _otherRadioGroupElements() {
    const wrapper = idlUtils.wrapperForImpl(this);
    const root = this._radioButtonGroupRoot;
    if (!root) {
      return [];
    }

    const result = [];

    const descendants = domSymbolTree.treeIterator(root);
    for (const candidate of descendants) {
      if (candidate._radioButtonGroupRoot !== root) {
        continue;
      }

      const candidateWrapper = idlUtils.wrapperForImpl(candidate);
      if (!candidateWrapper.name || candidateWrapper.name !== wrapper.name) {
        continue;
      }

      if (candidate !== this) {
        result.push(candidate);
      }
    }
    return result;
  }

  _removeOtherRadioCheckedness() {
    for (const radioGroupElement of this._otherRadioGroupElements) {
      radioGroupElement._checkedness = false;
    }
  }

  get _radioButtonGroupRoot() {
    const wrapper = idlUtils.wrapperForImpl(this);
    if (this.type !== "radio" || !wrapper.name) {
      return null;
    }

    let e = domSymbolTree.parent(this);
    while (e) {
      // root node of this home sub tree
      // or the form element we belong to
      if (!domSymbolTree.parent(e) || e._localName === "form") {
        return e;
      }
      e = domSymbolTree.parent(e);
    }
    return null;
  }

  _someInRadioGroup(name) {
    if (this[name]) {
      return true;
    }
    return this._otherRadioGroupElements.some(radioGroupElement => radioGroupElement[name]);
  }

  get _mutable() {
    return !isDisabled(this) && !this._hasAttributeAndApplies("readonly");
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return formOwner(this);
  }

  get checked() {
    return this._checkedness;
  }

  set checked(checked) {
    this._checkedness = Boolean(checked);
    this._dirtyCheckedness = true;
    if (this._checkedness) {
      this._removeOtherRadioCheckedness();
    }
  }

  get value() {
    switch (valueAttributeMode(this.type)) {
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-value
      case "value":
        return this._getValue();
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default
      case "default": {
        const attr = this.getAttributeNS(null, "value");
        return attr !== null ? attr : "";
      }
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
      case "default/on": {
        const attr = this.getAttributeNS(null, "value");
        return attr !== null ? attr : "on";
      }
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-filename
      case "filename":
        return this.files.length ? "C:\\fakepath\\" + this.files[0].name : "";
      default:
        throw new Error("jsdom internal error: unknown value attribute mode");
    }
  }

  set value(val) {
    switch (valueAttributeMode(this.type)) {
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-value
      case "value": {
        const oldValue = this._value;
        this._value = sanitizeValueByType(this, val);
        this._dirtyValue = true;

        if (oldValue !== this._value) {
          this._selectionStart = this._selectionEnd = this._getValueLength();
          this._selectionDirection = "none";
        }
        break;
      }

      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default
      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
      case "default":
      case "default/on":
        this.setAttributeNS(null, "value", val);
        break;

      // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-filename
      case "filename":
        if (val === "") {
          this.files.length = 0;
        } else {
          throw DOMException.create(this._globalObject, [
            "This input element accepts a filename, which may only be programmatically set to the empty string.",
            "InvalidStateError"
          ]);
        }
        break;

      default:
        throw new Error("jsdom internal error: unknown value attribute mode");
    }
  }

  // https://html.spec.whatwg.org/multipage/input.html#dom-input-valueasdate
  get valueAsDate() {
    if (!this._idlMemberApplies("valueAsDate")) {
      return null;
    }

    const window = this._ownerDocument._defaultView;
    const convertedValue = this._convertStringToDate(this._value);

    if (convertedValue instanceof Date) {
      return new window.Date(convertedValue.getTime());
    }

    return null;
  }

  set valueAsDate(v) {
    if (!this._idlMemberApplies("valueAsDate")) {
      throw DOMException.create(this._globalObject, [
        "Failed to set the 'valueAsDate' property on 'HTMLInputElement': This input element does not support Date " +
        "values.",
        "InvalidStateError"
      ]);
    }

    if (v !== null && !isDate(v)) {
      throw new TypeError("Failed to set the 'valueAsDate' property on 'HTMLInputElement': The provided value is " +
        "not a Date.");
    }

    if (v === null || isNaN(v)) {
      this._value = "";
      return;
    }

    this._value = this._convertDateToString(v);
  }

  // https://html.spec.whatwg.org/multipage/input.html#dom-input-valueasnumber
  get valueAsNumber() {
    if (!this._idlMemberApplies("valueAsNumber")) {
      return NaN;
    }

    const parsedValue = this._convertStringToNumber(this._value);
    return parsedValue !== null ? parsedValue : NaN;
  }

  set valueAsNumber(v) {
    if (!isFinite(v) && !isNaN(v)) {
      throw new TypeError("Failed to set infinite value as Number");
    }

    if (!this._idlMemberApplies("valueAsNumber")) {
      throw DOMException.create(this._globalObject, [
        "Failed to set the 'valueAsNumber' property on 'HTMLInputElement': This input element does not support " +
        "Number values.",
        "InvalidStateError"
      ]);
    }

    if (isNaN(v)) {
      this._value = "";
    } else {
      this._value = this._convertNumberToString(v);
    }
  }

  // https://html.spec.whatwg.org/multipage/input.html#dom-input-stepup
  _stepUpdate(n, isUp) {
    const methodName = isUp ? "stepUp" : "stepDown";
    if (!this._idlMemberApplies(methodName)) {
      throw DOMException.create(this._globalObject, [
        `Failed to invoke '${methodName}' method on 'HTMLInputElement': ` +
        "This input element does not support Number values.",
        "InvalidStateError"
      ]);
    }

    const allowedValueStep = this._allowedValueStep;
    if (allowedValueStep === null) {
      throw DOMException.create(this._globalObject, [
        `Failed to invoke '${methodName}' method on 'HTMLInputElement': ` +
        "This input element does not support value step.",
        "InvalidStateError"
      ]);
    }

    const min = this._minimum;
    const max = this._maximum;

    if (min !== null && max !== null) {
      if (min > max) {
        return;
      }

      const candidateStepValue = this._stepAlign(Decimal.add(min, allowedValueStep), /* roundUp = */ false);
      if (candidateStepValue.lt(min) || candidateStepValue.gt(max)) {
        return;
      }
    }

    let value = 0;
    try {
      value = this.valueAsNumber;
      if (isNaN(value)) { // Empty value is parsed as NaN.
        value = 0;
      }
    } catch {
      // Step 5. Default value is 0.
    }
    value = new Decimal(value);

    const valueBeforeStepping = value;

    if (!this._isStepAligned(value)) {
      value = this._stepAlign(value, /* roundUp = */ isUp);
    } else {
      let delta = Decimal.mul(n, allowedValueStep);
      if (!isUp) {
        delta = delta.neg();
      }
      value = value.add(delta);
    }

    if (min !== null && value.lt(min)) {
      value = this._stepAlign(min, /* roundUp = */ true);
    }

    if (max !== null && value.gt(max)) {
      value = this._stepAlign(max, /* roundUp = */ false);
    }

    if (isUp ? value.lt(valueBeforeStepping) : value.gt(valueBeforeStepping)) {
      return;
    }

    this._value = this._convertNumberToString(value.toNumber());
  }

  stepDown(n = 1) {
    return this._stepUpdate(n, false);
  }

  stepUp(n = 1) {
    return this._stepUpdate(n, true);
  }

  get files() {
    if (this.type === "file") {
      this[filesSymbol] ||= FileList.createImpl(this._globalObject);
    } else {
      this[filesSymbol] = null;
    }
    return this[filesSymbol];
  }

  set files(value) {
    if (this.type === "file" && value !== null) {
      this[filesSymbol] = value;
    }
  }

  get type() {
    const typeAttribute = this.getAttributeNS(null, "type");
    return getTypeFromAttribute(typeAttribute);
  }

  set type(type) {
    this.setAttributeNS(null, "type", type);
  }

  _dispatchSelectEvent() {
    setTimeout(() => fireAnEvent("select", this, undefined, { bubbles: true, cancelable: false }), 0);
  }

  _getValueLength() {
    return typeof this.value === "string" ? this.value.length : 0;
  }

  select() {
    if (!this._idlMemberApplies("select")) {
      return;
    }

    this._selectionStart = 0;
    this._selectionEnd = this._getValueLength();
    this._selectionDirection = "none";
    this._dispatchSelectEvent();
  }

  get selectionStart() {
    if (!this._idlMemberApplies("selectionStart")) {
      return null;
    }

    return this._selectionStart;
  }

  set selectionStart(start) {
    if (!this._idlMemberApplies("selectionStart")) {
      throw DOMException.create(this._globalObject, ["The object is in an invalid state.", "InvalidStateError"]);
    }

    this.setSelectionRange(start, Math.max(start, this._selectionEnd), this._selectionDirection);
  }

  get selectionEnd() {
    if (!this._idlMemberApplies("selectionEnd")) {
      return null;
    }

    return this._selectionEnd;
  }

  set selectionEnd(end) {
    if (!this._idlMemberApplies("selectionEnd")) {
      throw DOMException.create(this._globalObject, ["The object is in an invalid state.", "InvalidStateError"]);
    }

    this.setSelectionRange(this._selectionStart, end, this._selectionDirection);
  }

  get selectionDirection() {
    if (!this._idlMemberApplies("selectionDirection")) {
      return null;
    }

    return this._selectionDirection;
  }

  set selectionDirection(dir) {
    if (!this._idlMemberApplies("selectionDirection")) {
      throw DOMException.create(this._globalObject, ["The object is in an invalid state.", "InvalidStateError"]);
    }

    this.setSelectionRange(this._selectionStart, this._selectionEnd, dir);
  }

  setSelectionRange(start, end, dir) {
    if (!this._idlMemberApplies("setSelectionRange")) {
      throw DOMException.create(this._globalObject, ["The object is in an invalid state.", "InvalidStateError"]);
    }

    this._selectionEnd = Math.min(end, this._getValueLength());
    this._selectionStart = Math.min(start, this._selectionEnd);
    this._selectionDirection = dir === "forward" || dir === "backward" ? dir : "none";
    this._dispatchSelectEvent();
  }

  setRangeText(repl, start, end, selectionMode = "preserve") {
    if (!this._idlMemberApplies("setRangeText")) {
      throw DOMException.create(this._globalObject, ["The object is in an invalid state.", "InvalidStateError"]);
    }

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

  // https://html.spec.whatwg.org/multipage/input.html#the-list-attribute
  get list() {
    const id = this._getAttributeIfApplies("list");
    if (!id) {
      return null;
    }

    const el = this.getRootNode({}).getElementById(id);

    if (el && el.localName === "datalist") {
      return el;
    }

    return null;
  }

  // https://html.spec.whatwg.org/multipage/input.html#the-min-and-max-attributes
  get _minimum() {
    let min = this._defaultMinimum;
    const attr = this._getAttributeIfApplies("min");
    if (attr !== null && this._convertStringToNumber !== undefined) {
      const parsed = this._convertStringToNumber(attr);
      if (parsed !== null) {
        min = parsed;
      }
    }
    return min;
  }

  get _maximum() {
    let max = this._defaultMaximum;
    const attr = this._getAttributeIfApplies("max");
    if (attr !== null && this._convertStringToNumber !== undefined) {
      const parsed = this._convertStringToNumber(attr);
      if (parsed !== null) {
        max = parsed;
      }
    }
    return max;
  }

  get _defaultMinimum() {
    if (this.type === "range") {
      return 0;
    }
    return null;
  }

  get _defaultMaximum() {
    if (this.type === "range") {
      return 100;
    }
    return null;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-step
  get _allowedValueStep() {
    if (!this._contentAttributeApplies("step")) {
      return null;
    }
    const attr = this.getAttributeNS(null, "step");
    if (attr === null) {
      return this._defaultStep * this._stepScaleFactor;
    }
    if (asciiCaseInsensitiveMatch(attr, "any")) {
      return null;
    }
    const parsedStep = parseFloatingPointNumber(attr);
    if (parsedStep === null || parsedStep <= 0) {
      return this._defaultStep * this._stepScaleFactor;
    }
    return parsedStep * this._stepScaleFactor;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-step-scale
  get _stepScaleFactor() {
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    switch (this.type) {
      case "week":
        return 7 * dayInMilliseconds;
      case "date":
        return dayInMilliseconds;
      case "datetime-local":
      case "datetime":
      case "time":
        return 1000;
    }
    return 1;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-step-default
  get _defaultStep() {
    if (this.type === "datetime-local" || this.type === "datetime" || this.type === "time") {
      return 60;
    }
    return 1;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-min-zero
  get _stepBase() {
    if (this._hasAttributeAndApplies("min")) {
      const min = this._convertStringToNumber(this.getAttributeNS(null, "min"));
      if (min !== null) {
        return min;
      }
    }
    if (this.hasAttributeNS(null, "value")) {
      const value = this._convertStringToNumber(this.getAttributeNS(null, "value"));
      if (value !== null) {
        return value;
      }
    }
    if (this._defaultStepBase !== null) {
      return this._defaultStepBase;
    }
    return 0;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-step-default-base
  get _defaultStepBase() {
    if (this.type === "week") {
      // The start of week 1970-W01
      return -259200000;
    }
    return null;
  }

  // https://html.spec.whatwg.org/multipage/input.html#common-input-element-attributes
  // When an attribute doesn't apply to an input element, user agents must ignore the attribute.
  _contentAttributeApplies(attribute) {
    return applicableTypesForContentAttribute[attribute].has(this.type);
  }

  _hasAttributeAndApplies(attribute) {
    return this._contentAttributeApplies(attribute) && this.hasAttributeNS(null, attribute);
  }

  _getAttributeIfApplies(attribute) {
    if (this._contentAttributeApplies(attribute)) {
      return this.getAttributeNS(null, attribute);
    }
    return null;
  }

  _idlMemberApplies(member, type = this.type) {
    return applicableTypesForIDLMember[member].has(type);
  }

  _barredFromConstraintValidationSpecialization() {
    // https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)
    // https://html.spec.whatwg.org/multipage/input.html#reset-button-state-(type=reset)
    // https://html.spec.whatwg.org/multipage/input.html#button-state-(type=button)
    const willNotValidateTypes = new Set(["hidden", "reset", "button"]);
    // https://html.spec.whatwg.org/multipage/input.html#attr-input-readonly
    const readOnly = this._hasAttributeAndApplies("readonly");

    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
    return willNotValidateTypes.has(this.type) || readOnly;
  }

  // https://html.spec.whatwg.org/multipage/input.html#concept-input-required
  get _required() {
    return this._hasAttributeAndApplies("required");
  }

  // https://html.spec.whatwg.org/multipage/input.html#has-a-periodic-domain
  get _hasAPeriodicDomain() {
    return this.type === "time";
  }

  // https://html.spec.whatwg.org/multipage/input.html#has-a-reversed-range
  get _hasAReversedRange() {
    return this._hasAPeriodicDomain && this._maximum < this._minimum;
  }

  get validity() {
    if (!this._validity) {
      // Constraint validation: When an element has a reversed range, and the result of applying
      // the algorithm to convert a string to a number to the string given by the element's value
      // is a number, and the number obtained from that algorithm is more than the maximum and less
      // than the minimum, the element is simultaneously suffering from an underflow and suffering
      // from an overflow.
      const reversedRangeSufferingOverUnderflow = () => {
        const parsedValue = this._convertStringToNumber(this._value);
        return parsedValue !== null && parsedValue > this._maximum && parsedValue < this._minimum;
      };

      const state = {
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-being-missing
        valueMissing: () => {
          // https://html.spec.whatwg.org/multipage/input.html#the-required-attribute
          // Constraint validation: If the element is required, and its value IDL attribute applies
          // and is in the mode value, and the element is mutable, and the element's value is the
          // empty string, then the element is suffering from being missing.
          //
          // Note: As of today, the value IDL attribute always applies.
          if (this._required && valueAttributeMode(this.type) === "value" && this._mutable && this._value === "") {
            return true;
          }

          switch (this.type) {
            // https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox)
            // Constraint validation: If the element is required and its checkedness is
            // false, then the element is suffering from being missing.
            case "checkbox":
              if (this._required && !this._checkedness) {
                return true;
              }
              break;

            // https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)
            // Constraint validation: If an element in the radio button group is required,
            // and all of the input elements in the radio button group have a checkedness
            // that is false, then the element is suffering from being missing.
            case "radio":
              if (this._someInRadioGroup("_required") && !this._someInRadioGroup("checked")) {
                return true;
              }
              break;

            // https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file)
            // Constraint validation: If the element is required and the list of selected files is
            // empty, then the element is suffering from being missing.
            case "file":
              if (this._required && this.files.length === 0) {
                return true;
              }
              break;
          }

          return false;
        },

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-being-too-long
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-maxlength
        // jsdom has no way at the moment to emulate a user interaction, so tooLong/tooShort have
        // to be set to false.
        tooLong: () => false,

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-being-too-short
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-minlength
        tooShort: () => false,

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-an-overflow
        rangeOverflow: () => {
          // https://html.spec.whatwg.org/multipage/input.html#the-min-and-max-attributes
          if (this._hasAReversedRange) {
            return reversedRangeSufferingOverUnderflow();
          }
          // Constraint validation: When the element has a maximum and does not have a reversed
          // range, and the result of applying the algorithm to convert a string to a number to the
          // string given by the element's value is a number, and the number obtained from that
          // algorithm is more than the maximum, the element is suffering from an overflow.
          if (this._maximum !== null) {
            const parsedValue = this._convertStringToNumber(this._value);
            if (parsedValue !== null && parsedValue > this._maximum) {
              return true;
            }
          }
          return false;
        },

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-an-underflow
        rangeUnderflow: () => {
          // https://html.spec.whatwg.org/multipage/input.html#the-min-and-max-attributes
          if (this._hasAReversedRange) {
            return reversedRangeSufferingOverUnderflow();
          }
          // Constraint validation: When the element has a minimum and does not have a reversed
          // range, and the result of applying the algorithm to convert a string to a number to the
          // string given by the element's value is a number, and the number obtained from that
          // algorithm is less than the minimum, the element is suffering from an underflow.
          if (this._minimum !== null) {
            const parsedValue = this._convertStringToNumber(this._value);
            if (parsedValue !== null && parsedValue < this._minimum) {
              return true;
            }
          }
          return false;
        },

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-a-pattern-mismatch
        patternMismatch: () => {
          // https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute
          if (this._value === "" || !this._hasAttributeAndApplies("pattern")) {
            return false;
          }
          let regExp;
          try {
            const pattern = this.getAttributeNS(null, "pattern");
            // The pattern attribute should be matched against the entire value, not just any
            // subset, so add ^ and $ anchors. But also check the validity of the regex itself
            // first.
            new RegExp(pattern, "u"); // eslint-disable-line no-new
            regExp = new RegExp("^(?:" + pattern + ")$", "u");
          } catch {
            return false;
          }
          if (this._hasAttributeAndApplies("multiple")) {
            return !splitOnCommas(this._value).every(value => regExp.test(value));
          }
          return !regExp.test(this._value);
        },

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-a-step-mismatch
        // https://html.spec.whatwg.org/multipage/input.html#attr-input-step
        stepMismatch: () => {
          const allowedValueStep = this._allowedValueStep;
          if (allowedValueStep === null) {
            return false;
          }
          const number = this._convertStringToNumber(this._value);
          return number !== null && !this._isStepAligned(number);
        },

        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-a-type-mismatch
        typeMismatch: () => {
          switch (this.type) {
            // https://html.spec.whatwg.org/multipage/input.html#url-state-(type=url)
            // Constraint validation: While the value of the element is neither the empty string
            // nor a valid absolute URL, the element is suffering from a type mismatch.
            case "url":
              if (this._value !== "" && !isValidAbsoluteURL(this._value)) {
                return true;
              }
              break;

            // https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type=email)
            // Constraint validation [multiple=false]: While the value of the element is neither the empty
            // string nor a single valid e - mail address, the element is suffering from a type mismatch.
            // Constraint validation [multiple=true]: While the value of the element is not a valid e-mail address list,
            // the element is suffering from a type mismatch.
            case "email":
              if (this._value !== "" && !isValidEmailAddress(this._getValue(), this.hasAttributeNS(null, "multiple"))) {
                return true;
              }
              break;
          }
          return false;
        }
      };

      this._validity = ValidityState.createImpl(this._globalObject, [], {
        element: this,
        state
      });
    }
    return this._validity;
  }

  [cloningSteps](copy, node) {
    copy._value = node._value;
    copy._checkedness = node._checkedness;
    copy._dirtyValue = node._dirtyValue;
    copy._dirtyCheckedness = node._dirtyCheckedness;
  }
}

mixin(HTMLInputElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLInputElementImpl
};
