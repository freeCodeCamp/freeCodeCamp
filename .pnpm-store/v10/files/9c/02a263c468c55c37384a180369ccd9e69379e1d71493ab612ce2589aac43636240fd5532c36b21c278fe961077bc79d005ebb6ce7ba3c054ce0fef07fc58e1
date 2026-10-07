"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const SelectionMode = require("./SelectionMode.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const FileList = require("./FileList.js");
const parseURLToResultingURLRecord_helpers_document_base_url =
  require("../helpers/document-base-url.js").parseURLToResultingURLRecord;
const serializeURLwhatwg_url = require("whatwg-url").serializeURL;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLInputElement";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'HTMLInputElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLInputElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLInputElement is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
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

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

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

  if (globalObject.HTMLElement === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLInputElement before HTMLElement");
  }
  class HTMLInputElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    stepUp() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'stepUp' called on an object that is not a valid instance of HTMLInputElement.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'stepUp' on 'HTMLInputElement': parameter 1"
          });
        } else {
          curArg = 1;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].stepUp(...args);
    }

    stepDown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'stepDown' called on an object that is not a valid instance of HTMLInputElement.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'stepDown' on 'HTMLInputElement': parameter 1"
          });
        } else {
          curArg = 1;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].stepDown(...args);
    }

    checkValidity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'checkValidity' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol].checkValidity();
    }

    reportValidity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'reportValidity' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol].reportValidity();
    }

    setCustomValidity(error) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError(
          "'setCustomValidity' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setCustomValidity' on 'HTMLInputElement': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setCustomValidity' on 'HTMLInputElement': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setCustomValidity(...args);
    }

    select() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'select' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol].select();
    }

    setRangeText(replacement) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setRangeText' called on an object that is not a valid instance of HTMLInputElement.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setRangeText' on 'HTMLInputElement': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      switch (arguments.length) {
        case 1:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
            });
            args.push(curArg);
          }
          break;
        case 2:
          throw new TypeError(
            "Failed to execute 'setRangeText' on 'HTMLInputElement': only " + arguments.length + " arguments present."
          );
          break;
        case 3:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 2"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 3"
            });
            args.push(curArg);
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 2"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["unsigned long"](curArg, {
              context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 3"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[3];
            if (curArg !== undefined) {
              curArg = SelectionMode.convert(curArg, {
                context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 4"
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
        throw new TypeError(
          "'setSelectionRange' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'setSelectionRange' on 'HTMLInputElement': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 3"
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].setSelectionRange(...args);
    }

    get accept() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get accept' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "accept");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set accept(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set accept' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'accept' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "accept", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get alt() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get alt' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "alt");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set alt(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set alt' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'alt' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "alt", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get autocomplete() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get autocomplete' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "autocomplete");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autocomplete(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set autocomplete' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'autocomplete' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "autocomplete", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get autofocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get autofocus' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "autofocus");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autofocus(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set autofocus' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'autofocus' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "autofocus", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "autofocus");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get defaultChecked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get defaultChecked' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "checked");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defaultChecked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set defaultChecked' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'defaultChecked' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "checked", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "checked");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get checked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get checked' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol]["checked"];
    }

    set checked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set checked' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'checked' property on 'HTMLInputElement': The provided value"
      });

      esValue[implSymbol]["checked"] = V;
    }

    get dirName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get dirName' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "dirname");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set dirName(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set dirName' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'dirName' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "dirname", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get disabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get disabled' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "disabled");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set disabled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set disabled' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'disabled' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "disabled", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "disabled");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get form() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get form' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["form"]);
    }

    get files() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get files' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["files"]);
    }

    set files(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set files' called on an object that is not a valid instance of HTMLInputElement.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = FileList.convert(V, {
          context: "Failed to set the 'files' property on 'HTMLInputElement': The provided value"
        });
      }
      esValue[implSymbol]["files"] = V;
    }

    get formNoValidate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get formNoValidate' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "formnovalidate");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set formNoValidate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set formNoValidate' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'formNoValidate' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "formnovalidate", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "formnovalidate");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get formTarget() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get formTarget' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "formtarget");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set formTarget(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set formTarget' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'formTarget' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "formtarget", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get indeterminate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get indeterminate' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      return esValue[implSymbol]["indeterminate"];
    }

    set indeterminate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set indeterminate' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'indeterminate' property on 'HTMLInputElement': The provided value"
      });

      esValue[implSymbol]["indeterminate"] = V;
    }

    get inputMode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get inputMode' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "inputmode");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set inputMode(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set inputMode' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'inputMode' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "inputmode", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get list() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get list' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["list"]);
    }

    get max() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get max' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "max");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set max(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set max' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'max' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "max", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get maxLength() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get maxLength' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["maxLength"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set maxLength(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set maxLength' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'maxLength' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["maxLength"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get min() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get min' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "min");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set min(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set min' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'min' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "min", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get minLength() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get minLength' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["minLength"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set minLength(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set minLength' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'minLength' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["minLength"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get multiple() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get multiple' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "multiple");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set multiple(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set multiple' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'multiple' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "multiple", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "multiple");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get name' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "name");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set name(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set name' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'name' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "name", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get pattern() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get pattern' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "pattern");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set pattern(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set pattern' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'pattern' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "pattern", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get placeholder() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get placeholder' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "placeholder");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set placeholder(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set placeholder' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'placeholder' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "placeholder", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get readOnly() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get readOnly' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "readonly");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set readOnly(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set readOnly' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'readOnly' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "readonly", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "readonly");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get required() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get required' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "required");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set required(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set required' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'required' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "required", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "required");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get size() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get size' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["size"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set size(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set size' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'size' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["size"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get src() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get src' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "src");
        if (value === null) {
          return "";
        }
        const urlRecord = parseURLToResultingURLRecord_helpers_document_base_url(
          value,
          esValue[implSymbol]._ownerDocument
        );
        if (urlRecord !== null) {
          return serializeURLwhatwg_url(urlRecord);
        }
        return conversions.USVString(value);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set src(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set src' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'src' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "src", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get step() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get step' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "step");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set step(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set step' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'step' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "step", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get type' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["type"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set type(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set type' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'type' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["type"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get defaultValue() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get defaultValue' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "value");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defaultValue(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set defaultValue' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'defaultValue' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "value", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get value() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get value' called on an object that is not a valid instance of HTMLInputElement.");
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
        throw new TypeError("'set value' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'value' property on 'HTMLInputElement': The provided value",
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["value"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get valueAsDate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get valueAsDate' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol]["valueAsDate"];
    }

    set valueAsDate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set valueAsDate' called on an object that is not a valid instance of HTMLInputElement.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["object"](V, {
          context: "Failed to set the 'valueAsDate' property on 'HTMLInputElement': The provided value"
        });
      }
      esValue[implSymbol]["valueAsDate"] = V;
    }

    get valueAsNumber() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get valueAsNumber' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      return esValue[implSymbol]["valueAsNumber"];
    }

    set valueAsNumber(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set valueAsNumber' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'valueAsNumber' property on 'HTMLInputElement': The provided value"
      });

      esValue[implSymbol]["valueAsNumber"] = V;
    }

    get willValidate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get willValidate' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol]["willValidate"];
    }

    get validity() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get validity' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["validity"]);
    }

    get validationMessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get validationMessage' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      return esValue[implSymbol]["validationMessage"];
    }

    get labels() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get labels' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["labels"]);
    }

    get selectionStart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get selectionStart' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      return esValue[implSymbol]["selectionStart"];
    }

    set selectionStart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set selectionStart' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["unsigned long"](V, {
          context: "Failed to set the 'selectionStart' property on 'HTMLInputElement': The provided value"
        });
      }
      esValue[implSymbol]["selectionStart"] = V;
    }

    get selectionEnd() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get selectionEnd' called on an object that is not a valid instance of HTMLInputElement.");
      }

      return esValue[implSymbol]["selectionEnd"];
    }

    set selectionEnd(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set selectionEnd' called on an object that is not a valid instance of HTMLInputElement.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["unsigned long"](V, {
          context: "Failed to set the 'selectionEnd' property on 'HTMLInputElement': The provided value"
        });
      }
      esValue[implSymbol]["selectionEnd"] = V;
    }

    get selectionDirection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get selectionDirection' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      return esValue[implSymbol]["selectionDirection"];
    }

    set selectionDirection(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set selectionDirection' called on an object that is not a valid instance of HTMLInputElement."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'selectionDirection' property on 'HTMLInputElement': The provided value"
        });
      }
      esValue[implSymbol]["selectionDirection"] = V;
    }

    get align() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get align' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "align");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set align(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set align' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'align' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "align", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get useMap() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get useMap' called on an object that is not a valid instance of HTMLInputElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "usemap");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set useMap(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set useMap' called on an object that is not a valid instance of HTMLInputElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'useMap' property on 'HTMLInputElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "usemap", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLInputElement.prototype, {
    stepUp: { enumerable: true },
    stepDown: { enumerable: true },
    checkValidity: { enumerable: true },
    reportValidity: { enumerable: true },
    setCustomValidity: { enumerable: true },
    select: { enumerable: true },
    setRangeText: { enumerable: true },
    setSelectionRange: { enumerable: true },
    accept: { enumerable: true },
    alt: { enumerable: true },
    autocomplete: { enumerable: true },
    autofocus: { enumerable: true },
    defaultChecked: { enumerable: true },
    checked: { enumerable: true },
    dirName: { enumerable: true },
    disabled: { enumerable: true },
    form: { enumerable: true },
    files: { enumerable: true },
    formNoValidate: { enumerable: true },
    formTarget: { enumerable: true },
    indeterminate: { enumerable: true },
    inputMode: { enumerable: true },
    list: { enumerable: true },
    max: { enumerable: true },
    maxLength: { enumerable: true },
    min: { enumerable: true },
    minLength: { enumerable: true },
    multiple: { enumerable: true },
    name: { enumerable: true },
    pattern: { enumerable: true },
    placeholder: { enumerable: true },
    readOnly: { enumerable: true },
    required: { enumerable: true },
    size: { enumerable: true },
    src: { enumerable: true },
    step: { enumerable: true },
    type: { enumerable: true },
    defaultValue: { enumerable: true },
    value: { enumerable: true },
    valueAsDate: { enumerable: true },
    valueAsNumber: { enumerable: true },
    willValidate: { enumerable: true },
    validity: { enumerable: true },
    validationMessage: { enumerable: true },
    labels: { enumerable: true },
    selectionStart: { enumerable: true },
    selectionEnd: { enumerable: true },
    selectionDirection: { enumerable: true },
    align: { enumerable: true },
    useMap: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLInputElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLInputElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLInputElement
  });
};

const Impl = require("../nodes/HTMLInputElement-impl.js");
