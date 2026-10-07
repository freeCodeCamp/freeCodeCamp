"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "ElementInternals";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'ElementInternals'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["ElementInternals"].prototype;
  }

  return Object.create(proto);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class ElementInternals {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get shadowRoot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get shadowRoot' called on an object that is not a valid instance of ElementInternals."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["shadowRoot"]);
    }

    get labels() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get labels' called on an object that is not a valid instance of ElementInternals."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["labels"]);
    }

    get role() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get role' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("role");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set role(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set role' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'role' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("role");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("role", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaAtomic() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaAtomic' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-atomic");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaAtomic(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaAtomic' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaAtomic' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-atomic");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-atomic", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaAutoComplete() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaAutoComplete' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-autocomplete");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaAutoComplete(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaAutoComplete' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaAutoComplete' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-autocomplete");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-autocomplete", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaBusy() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaBusy' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-busy");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaBusy(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaBusy' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaBusy' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-busy");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-busy", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaChecked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaChecked' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-checked");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaChecked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaChecked' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaChecked' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-checked");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-checked", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColCount' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colcount");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColCount(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColCount' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColCount' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colcount");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colcount", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColIndex' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colindex");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColIndex' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColIndex' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colindex");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colindex", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColIndexText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColIndexText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colindextext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColIndexText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColIndexText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColIndexText' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colindextext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colindextext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColSpan() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColSpan' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colspan");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColSpan(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColSpan' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColSpan' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colspan");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colspan", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaCurrent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaCurrent' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-current");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaCurrent(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaCurrent' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaCurrent' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-current");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-current", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaDescription() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaDescription' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-description");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaDescription(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaDescription' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaDescription' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-description");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-description", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaDisabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaDisabled' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-disabled");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaDisabled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaDisabled' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaDisabled' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-disabled");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-disabled", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaExpanded() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaExpanded' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-expanded");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaExpanded(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaExpanded' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaExpanded' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-expanded");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-expanded", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaHasPopup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaHasPopup' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-haspopup");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaHasPopup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaHasPopup' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaHasPopup' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-haspopup");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-haspopup", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaHidden() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaHidden' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-hidden");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaHidden(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaHidden' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaHidden' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-hidden");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-hidden", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaInvalid() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaInvalid' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-invalid");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaInvalid(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaInvalid' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaInvalid' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-invalid");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-invalid", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaKeyShortcuts() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaKeyShortcuts' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-keyshortcuts");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaKeyShortcuts(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaKeyShortcuts' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaKeyShortcuts' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-keyshortcuts");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-keyshortcuts", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLabel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaLabel' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-label");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLabel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaLabel' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLabel' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-label");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-label", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLevel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaLevel' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-level");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLevel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaLevel' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLevel' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-level");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-level", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLive() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaLive' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-live");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLive(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaLive' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLive' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-live");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-live", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaModal() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaModal' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-modal");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaModal(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaModal' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaModal' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-modal");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-modal", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaMultiLine() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaMultiLine' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-multiline");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaMultiLine(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaMultiLine' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaMultiLine' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-multiline");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-multiline", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaMultiSelectable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaMultiSelectable' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-multiselectable");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaMultiSelectable(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaMultiSelectable' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaMultiSelectable' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-multiselectable");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-multiselectable", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaOrientation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaOrientation' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-orientation");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaOrientation(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaOrientation' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaOrientation' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-orientation");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-orientation", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPlaceholder() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPlaceholder' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-placeholder");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPlaceholder(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPlaceholder' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPlaceholder' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-placeholder");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-placeholder", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPosInSet() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPosInSet' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-posinset");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPosInSet(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPosInSet' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPosInSet' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-posinset");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-posinset", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPressed() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPressed' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-pressed");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPressed(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPressed' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPressed' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-pressed");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-pressed", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaReadOnly() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaReadOnly' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-readonly");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaReadOnly(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaReadOnly' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaReadOnly' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-readonly");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-readonly", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRequired() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRequired' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-required");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRequired(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRequired' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRequired' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-required");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-required", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRoleDescription() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRoleDescription' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-roledescription");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRoleDescription(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRoleDescription' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRoleDescription' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-roledescription");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-roledescription", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowCount' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowcount");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowCount(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowCount' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowCount' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowcount");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowcount", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowIndex' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowindex");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowIndex' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowIndex' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowindex");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowindex", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowIndexText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowIndexText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowindextext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowIndexText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowIndexText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowIndexText' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowindextext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowindextext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowSpan() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowSpan' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowspan");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowSpan(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowSpan' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowSpan' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowspan");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowspan", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSelected() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaSelected' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-selected");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSelected(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaSelected' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSelected' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-selected");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-selected", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSetSize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaSetSize' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-setsize");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSetSize(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaSetSize' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSetSize' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-setsize");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-setsize", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaSort' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-sort");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaSort' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSort' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-sort");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-sort", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueMax() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueMax' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuemax");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueMax(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueMax' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueMax' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuemax");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuemax", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueMin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueMin' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuemin");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueMin(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueMin' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueMin' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuemin");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuemin", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueNow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueNow' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuenow");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueNow(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueNow' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueNow' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuenow");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuenow", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuetext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueText' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueText' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuetext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuetext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRelevant() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRelevant' called on an object that is not a valid instance of ElementInternals."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-relevant");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRelevant(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRelevant' called on an object that is not a valid instance of ElementInternals."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRelevant' property on 'ElementInternals': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-relevant");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-relevant", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(ElementInternals.prototype, {
    shadowRoot: { enumerable: true },
    labels: { enumerable: true },
    role: { enumerable: true },
    ariaAtomic: { enumerable: true },
    ariaAutoComplete: { enumerable: true },
    ariaBusy: { enumerable: true },
    ariaChecked: { enumerable: true },
    ariaColCount: { enumerable: true },
    ariaColIndex: { enumerable: true },
    ariaColIndexText: { enumerable: true },
    ariaColSpan: { enumerable: true },
    ariaCurrent: { enumerable: true },
    ariaDescription: { enumerable: true },
    ariaDisabled: { enumerable: true },
    ariaExpanded: { enumerable: true },
    ariaHasPopup: { enumerable: true },
    ariaHidden: { enumerable: true },
    ariaInvalid: { enumerable: true },
    ariaKeyShortcuts: { enumerable: true },
    ariaLabel: { enumerable: true },
    ariaLevel: { enumerable: true },
    ariaLive: { enumerable: true },
    ariaModal: { enumerable: true },
    ariaMultiLine: { enumerable: true },
    ariaMultiSelectable: { enumerable: true },
    ariaOrientation: { enumerable: true },
    ariaPlaceholder: { enumerable: true },
    ariaPosInSet: { enumerable: true },
    ariaPressed: { enumerable: true },
    ariaReadOnly: { enumerable: true },
    ariaRequired: { enumerable: true },
    ariaRoleDescription: { enumerable: true },
    ariaRowCount: { enumerable: true },
    ariaRowIndex: { enumerable: true },
    ariaRowIndexText: { enumerable: true },
    ariaRowSpan: { enumerable: true },
    ariaSelected: { enumerable: true },
    ariaSetSize: { enumerable: true },
    ariaSort: { enumerable: true },
    ariaValueMax: { enumerable: true },
    ariaValueMin: { enumerable: true },
    ariaValueNow: { enumerable: true },
    ariaValueText: { enumerable: true },
    ariaRelevant: { enumerable: true },
    [Symbol.toStringTag]: { value: "ElementInternals", configurable: true }
  });
  ctorRegistry[interfaceName] = ElementInternals;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: ElementInternals
  });
};

const Impl = require("../custom-elements/ElementInternals-impl.js");
