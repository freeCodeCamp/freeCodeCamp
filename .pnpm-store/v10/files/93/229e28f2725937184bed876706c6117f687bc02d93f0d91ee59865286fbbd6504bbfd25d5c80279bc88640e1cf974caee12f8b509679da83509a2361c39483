"use strict";

exports.implementation = class ValidityStateImpl {
  constructor(globalObject, args, privateData) {
    const { element, state = {} } = privateData;

    this._element = element;
    this._state = state;
  }

  get badInput() {
    return this._failsConstraint("badInput");
  }

  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#suffering-from-a-custom-error
  get customError() {
    return this._element._customValidityErrorMessage !== "";
  }

  get patternMismatch() {
    return this._failsConstraint("patternMismatch");
  }

  get rangeOverflow() {
    return this._failsConstraint("rangeOverflow");
  }

  get rangeUnderflow() {
    return this._failsConstraint("rangeUnderflow");
  }

  get stepMismatch() {
    return this._failsConstraint("stepMismatch");
  }

  get tooLong() {
    return this._failsConstraint("tooLong");
  }

  get tooShort() {
    return this._failsConstraint("tooShort");
  }

  get typeMismatch() {
    return this._failsConstraint("typeMismatch");
  }

  get valueMissing() {
    return this._failsConstraint("valueMissing");
  }

  _failsConstraint(method) {
    const validationMethod = this._state[method];
    if (validationMethod) {
      return validationMethod();
    }

    return false;
  }

  get valid() {
    return !(this.badInput || this.valueMissing || this.customError ||
            this.patternMismatch || this.rangeOverflow || this.rangeUnderflow ||
            this.stepMismatch || this.tooLong || this.tooShort || this.typeMismatch);
  }
};
