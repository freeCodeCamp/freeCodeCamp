"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const SelectionMode = require("./SelectionMode.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const parseNonNegativeInteger_helpers_strings = require("../helpers/strings.js").parseNonNegativeInteger;
const create_DOMException = require("./DOMException.js").create;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLTextAreaElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'HTMLTextAreaElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLTextAreaElement"].prototype;
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

exports._internalSetup = (wrapper, globalObject) => {
  HTMLElement._internalSetup(wrapper, globalObject);
};

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
  class HTMLTextAreaElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    checkValidity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'checkValidity' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol].checkValidity();
    }

    reportValidity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'reportValidity' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol].reportValidity();
    }

    setCustomValidity(error) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setCustomValidity' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setCustomValidity' on 'HTMLTextAreaElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setCustomValidity' on 'HTMLTextAreaElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setCustomValidity(...args);
    }

    select() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'select' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol].select();
    }

    setRangeText(replacement) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setRangeText' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setRangeText' on 'HTMLTextAreaElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      switch (arguments.length) {
        case 1:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          break;
        case 2:
          throw new globalObject.TypeError(
            `Failed to execute 'setRangeText' on 'HTMLTextAreaElement': only ${arguments.length} arguments present.`
          );
          break;
        case 3:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 3",
              globals: globalObject
            });
            args.push(curArg);
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 3",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[3];
            if (curArg !== undefined) {
              curArg = SelectionMode.convert(globalObject, curArg, {
                context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 4"
              });
            } else {
              curArg = "preserve";
            }
            args.push(curArg);
          }
      }
      return esValue[implSymbol].setRangeText(...args);
    }

    setSelectionRange(start, end) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setSelectionRange' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 3",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].setSelectionRange(...args);
    }

    get autocomplete() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get autocomplete' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("autocomplete");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autocomplete(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set autocomplete' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'autocomplete' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("autocomplete", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get autofocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get autofocus' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("autofocus") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autofocus(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set autofocus' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'autofocus' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("autofocus", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("autofocus");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get cols() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get cols' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("cols");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && value >= 1 && value <= 2147483647) {
            return value;
          }
        }
        return 20;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set cols(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set cols' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'cols' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const newValue = V <= 2147483647 && V >= 1 ? V : 20;
        esValue[implSymbol]._reflectSetTheContentAttribute("cols", String(newValue));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get dirName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get dirName' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("dirname");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set dirName(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set dirName' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'dirName' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("dirname", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get disabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get disabled' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("disabled") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set disabled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set disabled' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'disabled' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("disabled", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("disabled");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get form() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get form' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["form"]);
    }

    get inputMode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get inputMode' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("inputmode");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set inputMode(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set inputMode' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'inputMode' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("inputmode", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get maxLength() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get maxLength' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("maxlength");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && conversions.long(value) === value) {
            return value;
          }
        }
        return -1;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set maxLength(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set maxLength' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'maxLength' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V < 0) {
          throw create_DOMException(globalObject, [
            `The negative value ${V} cannot be set for the maxLength property.`,
            "IndexSizeError"
          ]);
        }

        esValue[implSymbol]._reflectSetTheContentAttribute("maxlength", String(V));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get minLength() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get minLength' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("minlength");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && conversions.long(value) === value) {
            return value;
          }
        }
        return -1;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set minLength(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set minLength' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'minLength' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V < 0) {
          throw create_DOMException(globalObject, [
            `The negative value ${V} cannot be set for the minLength property.`,
            "IndexSizeError"
          ]);
        }

        esValue[implSymbol]._reflectSetTheContentAttribute("minlength", String(V));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get name' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("name");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set name(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set name' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'name' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("name", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get placeholder() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get placeholder' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("placeholder");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set placeholder(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set placeholder' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'placeholder' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("placeholder", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get readOnly() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get readOnly' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("readonly") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set readOnly(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set readOnly' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'readOnly' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("readonly", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("readonly");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get required() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get required' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("required") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set required(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set required' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'required' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("required", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("required");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get rows() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get rows' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("rows");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && value >= 1 && value <= 2147483647) {
            return value;
          }
        }
        return 2;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set rows(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set rows' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'rows' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const newValue = V <= 2147483647 && V >= 1 ? V : 2;
        esValue[implSymbol]._reflectSetTheContentAttribute("rows", String(newValue));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get wrap() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get wrap' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("wrap");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set wrap(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set wrap' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'wrap' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("wrap", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get type' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["type"];
    }

    get defaultValue() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get defaultValue' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["defaultValue"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defaultValue(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set defaultValue' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'defaultValue' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["defaultValue"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get value() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get value' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["value"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set value(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set value' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'value' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["value"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get textLength() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get textLength' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["textLength"];
    }

    get willValidate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get willValidate' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["willValidate"];
    }

    get validity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get validity' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["validity"]);
    }

    get validationMessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get validationMessage' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["validationMessage"];
    }

    get labels() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get labels' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["labels"]);
    }

    get selectionStart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get selectionStart' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["selectionStart"];
    }

    set selectionStart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set selectionStart' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'selectionStart' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["selectionStart"] = V;
    }

    get selectionEnd() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get selectionEnd' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["selectionEnd"];
    }

    set selectionEnd(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set selectionEnd' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'selectionEnd' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["selectionEnd"] = V;
    }

    get selectionDirection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get selectionDirection' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      return esValue[implSymbol]["selectionDirection"];
    }

    set selectionDirection(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set selectionDirection' called on an object that is not a valid instance of HTMLTextAreaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'selectionDirection' property on 'HTMLTextAreaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["selectionDirection"] = V;
    }
  }
  Object.defineProperties(HTMLTextAreaElement.prototype, {
    checkValidity: { enumerable: true },
    reportValidity: { enumerable: true },
    setCustomValidity: { enumerable: true },
    select: { enumerable: true },
    setRangeText: { enumerable: true },
    setSelectionRange: { enumerable: true },
    autocomplete: { enumerable: true },
    autofocus: { enumerable: true },
    cols: { enumerable: true },
    dirName: { enumerable: true },
    disabled: { enumerable: true },
    form: { enumerable: true },
    inputMode: { enumerable: true },
    maxLength: { enumerable: true },
    minLength: { enumerable: true },
    name: { enumerable: true },
    placeholder: { enumerable: true },
    readOnly: { enumerable: true },
    required: { enumerable: true },
    rows: { enumerable: true },
    wrap: { enumerable: true },
    type: { enumerable: true },
    defaultValue: { enumerable: true },
    value: { enumerable: true },
    textLength: { enumerable: true },
    willValidate: { enumerable: true },
    validity: { enumerable: true },
    validationMessage: { enumerable: true },
    labels: { enumerable: true },
    selectionStart: { enumerable: true },
    selectionEnd: { enumerable: true },
    selectionDirection: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLTextAreaElement", configurable: true }
  });
  ctorRegistry[interfaceName] = HTMLTextAreaElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLTextAreaElement
  });
};

const Impl = require("../nodes/HTMLTextAreaElement-impl.js");
