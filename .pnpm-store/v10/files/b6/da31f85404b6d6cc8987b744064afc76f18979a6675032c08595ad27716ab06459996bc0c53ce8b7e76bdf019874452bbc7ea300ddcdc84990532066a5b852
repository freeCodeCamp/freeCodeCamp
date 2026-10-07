"use strict";

const webIDLConversions = require("webidl-conversions");
const DOMException = require("../generated/DOMException");

const NODE_TYPE = require("../node-type");

const { HTML_NS } = require("../helpers/namespaces");
const { getHTMLElementInterface } = require("../helpers/create-element");
const { shadowIncludingInclusiveDescendantsIterator } = require("../helpers/shadow-dom");
const { isValidCustomElementName, tryUpgradeElement, enqueueCEUpgradeReaction } = require("../helpers/custom-elements");

const idlUtils = require("../generated/utils");
const IDLFunction = require("../generated/Function.js");
const HTMLUnknownElement = require("../generated/HTMLUnknownElement");

const LIFECYCLE_CALLBACKS = [
  "connectedCallback",
  "disconnectedCallback",
  "adoptedCallback",
  "attributeChangedCallback"
];

function convertToSequenceDOMString(obj) {
  if (!obj || !obj[Symbol.iterator]) {
    throw new TypeError("Invalid Sequence");
  }

  return Array.from(obj, webIDLConversions.DOMString);
}

// Returns true is the passed value is a valid constructor.
// Borrowed from: https://stackoverflow.com/a/39336206/3832710
function isConstructor(value) {
  if (typeof value !== "function") {
    return false;
  }

  try {
    const P = new Proxy(value, {
      construct() {
        return {};
      }
    });

    // eslint-disable-next-line no-new
    new P();

    return true;
  } catch {
    return false;
  }
}

// https://html.spec.whatwg.org/#customelementregistry
class CustomElementRegistryImpl {
  constructor(globalObject) {
    this._customElementDefinitions = [];
    this._elementDefinitionIsRunning = false;
    this._whenDefinedPromiseMap = Object.create(null);

    this._globalObject = globalObject;
  }

  // https://html.spec.whatwg.org/#dom-customelementregistry-define
  define(name, constructor, options) {
    const { _globalObject } = this;
    const ctor = constructor.objectReference;

    if (!isConstructor(ctor)) {
      throw new TypeError("Constructor argument is not a constructor.");
    }

    if (!isValidCustomElementName(name)) {
      throw DOMException.create(_globalObject, ["Name argument is not a valid custom element name.", "SyntaxError"]);
    }

    const nameAlreadyRegistered = this._customElementDefinitions.some(entry => entry.name === name);
    if (nameAlreadyRegistered) {
      throw DOMException.create(_globalObject, [
        "This name has already been registered in the registry.",
        "NotSupportedError"
      ]);
    }

    const ctorAlreadyRegistered = this._customElementDefinitions.some(entry => entry.objectReference === ctor);
    if (ctorAlreadyRegistered) {
      throw DOMException.create(_globalObject, [
        "This constructor has already been registered in the registry.",
        "NotSupportedError"
      ]);
    }

    let localName = name;

    let extendsOption = null;
    if (options !== undefined && options.extends) {
      extendsOption = options.extends;
    }

    if (extendsOption !== null) {
      if (isValidCustomElementName(extendsOption)) {
        throw DOMException.create(_globalObject, [
          "Option extends value can't be a valid custom element name.",
          "NotSupportedError"
        ]);
      }

      const extendsInterface = getHTMLElementInterface(extendsOption);
      if (extendsInterface === HTMLUnknownElement) {
        throw DOMException.create(_globalObject, [
          `${extendsOption} is an HTMLUnknownElement.`,
          "NotSupportedError"
        ]);
      }

      localName = extendsOption;
    }

    if (this._elementDefinitionIsRunning) {
      throw DOMException.create(_globalObject, [
        "Invalid nested custom element definition.",
        "NotSupportedError"
      ]);
    }

    this._elementDefinitionIsRunning = true;

    let disableInternals = false;
    let disableShadow = false;
    let observedAttributes = [];
    let formAssociated = false;
    const lifecycleCallbacks = {
      connectedCallback: null,
      disconnectedCallback: null,
      adoptedCallback: null,
      attributeChangedCallback: null
    };

    let caughtError;
    try {
      const { prototype } = ctor;

      if (typeof prototype !== "object") {
        throw new TypeError("Invalid constructor prototype.");
      }

      for (const callbackName of LIFECYCLE_CALLBACKS) {
        const callbackValue = prototype[callbackName];

        if (callbackValue !== undefined) {
          lifecycleCallbacks[callbackName] = IDLFunction.convert(_globalObject, callbackValue, {
            context: `The lifecycle callback "${callbackName}"`
          });
        }
      }

      if (lifecycleCallbacks.attributeChangedCallback !== null) {
        const observedAttributesIterable = ctor.observedAttributes;

        if (observedAttributesIterable !== undefined) {
          observedAttributes = convertToSequenceDOMString(observedAttributesIterable);
        }
      }

      let disabledFeatures = [];
      const disabledFeaturesIterable = ctor.disabledFeatures;
      if (disabledFeaturesIterable) {
        disabledFeatures = convertToSequenceDOMString(disabledFeaturesIterable);
      }

      const formAssociatedValue = ctor.formAssociated;

      disableInternals = disabledFeatures.includes("internals");
      disableShadow = disabledFeatures.includes("shadow");
      formAssociated = webIDLConversions.boolean(formAssociatedValue);
    } catch (err) {
      caughtError = err;
    } finally {
      this._elementDefinitionIsRunning = false;
    }

    if (caughtError !== undefined) {
      throw caughtError;
    }

    const definition = {
      name,
      localName,
      constructor,
      objectReference: ctor,
      formAssociated,
      observedAttributes,
      lifecycleCallbacks,
      disableShadow,
      disableInternals,
      constructionStack: []
    };

    this._customElementDefinitions.push(definition);

    const document = idlUtils.implForWrapper(this._globalObject._document);

    const upgradeCandidates = [];
    for (const candidate of shadowIncludingInclusiveDescendantsIterator(document)) {
      if (
        (candidate._namespaceURI === HTML_NS && candidate._localName === localName) &&
        (extendsOption === null || candidate._isValue === name)
      ) {
        upgradeCandidates.push(candidate);
      }
    }

    for (const upgradeCandidate of upgradeCandidates) {
      enqueueCEUpgradeReaction(upgradeCandidate, definition);
    }

    if (this._whenDefinedPromiseMap[name] !== undefined) {
      this._whenDefinedPromiseMap[name].resolve(ctor);
      delete this._whenDefinedPromiseMap[name];
    }
  }

  // https://html.spec.whatwg.org/#dom-customelementregistry-get
  get(name) {
    const definition = this._customElementDefinitions.find(entry => entry.name === name);
    return definition && definition.objectReference;
  }

  // https://html.spec.whatwg.org/#dom-customelementregistry-whendefined
  whenDefined(name) {
    if (!isValidCustomElementName(name)) {
      return Promise.reject(DOMException.create(
        this._globalObject,
        ["Name argument is not a valid custom element name.", "SyntaxError"]
      ));
    }

    const alreadyRegistered = this._customElementDefinitions.find(entry => entry.name === name);
    if (alreadyRegistered) {
      return Promise.resolve(alreadyRegistered.objectReference);
    }

    if (this._whenDefinedPromiseMap[name] === undefined) {
      let resolve;
      const promise = new Promise(r => {
        resolve = r;
      });

      // Store the pending Promise along with the extracted resolve callback to actually resolve the returned Promise,
      // once the custom element is registered.
      this._whenDefinedPromiseMap[name] = {
        promise,
        resolve
      };
    }

    return this._whenDefinedPromiseMap[name].promise;
  }

  // https://html.spec.whatwg.org/#dom-customelementregistry-upgrade
  upgrade(root) {
    for (const candidate of shadowIncludingInclusiveDescendantsIterator(root)) {
      if (candidate.nodeType === NODE_TYPE.ELEMENT_NODE) {
        tryUpgradeElement(candidate);
      }
    }
  }
}

module.exports = {
  implementation: CustomElementRegistryImpl
};
