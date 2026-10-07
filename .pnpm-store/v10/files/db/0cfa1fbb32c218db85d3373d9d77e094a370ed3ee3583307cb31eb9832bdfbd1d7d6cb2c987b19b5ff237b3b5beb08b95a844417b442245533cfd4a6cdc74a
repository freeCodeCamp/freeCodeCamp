"use strict";

const { HTML_NS } = require("./namespaces");
const { createElement, getValidTagNames } = require("./create-element");

const { implForWrapper, wrapperForImpl } = require("../generated/utils");

// https://html.spec.whatwg.org/multipage/custom-elements.html#concept-already-constructed-marker
const ALREADY_CONSTRUCTED_MARKER = Symbol("already-constructed-marker");

// https://html.spec.whatwg.org/multipage/dom.html#htmlconstructor
function HTMLConstructor(globalObject, constructorName, newTarget) {
  const registry = implForWrapper(globalObject.customElements);
  if (newTarget === HTMLConstructor) {
    throw new TypeError("Invalid constructor");
  }

  const definition = registry._customElementDefinitions.find(entry => entry.objectReference === newTarget);
  if (definition === undefined) {
    throw new TypeError("Invalid constructor, the constructor is not part of the custom element registry");
  }

  let isValue = null;

  if (definition.localName === definition.name) {
    if (constructorName !== "HTMLElement") {
      throw new TypeError("Invalid constructor, autonomous custom element should extend from HTMLElement");
    }
  } else {
    const validLocalNames = getValidTagNames(HTML_NS, constructorName);
    if (!validLocalNames.includes(definition.localName)) {
      throw new TypeError(`${definition.localName} is not valid local name for ${constructorName}`);
    }

    isValue = definition.name;
  }

  let { prototype } = newTarget;

  if (prototype === null || typeof prototype !== "object") {
    // The following line deviates from the specification. The HTMLElement prototype should be retrieved from the realm
    // associated with the "new.target". Because it is impossible to get such information in jsdom, we fallback to the
    // HTMLElement prototype associated with the current object.
    prototype = globalObject.HTMLElement.prototype;
  }

  if (definition.constructionStack.length === 0) {
    const documentImpl = implForWrapper(globalObject.document);

    const elementImpl = createElement(documentImpl, definition.localName, HTML_NS);

    const element = wrapperForImpl(elementImpl);
    Object.setPrototypeOf(element, prototype);

    elementImpl._ceState = "custom";
    elementImpl._ceDefinition = definition;
    elementImpl._isValue = isValue;

    return element;
  }

  const elementImpl = definition.constructionStack[definition.constructionStack.length - 1];
  const element = wrapperForImpl(elementImpl);

  if (elementImpl === ALREADY_CONSTRUCTED_MARKER) {
    throw new TypeError("This instance is already constructed");
  }

  Object.setPrototypeOf(element, prototype);

  definition.constructionStack[definition.constructionStack.length - 1] = ALREADY_CONSTRUCTED_MARKER;

  return element;
}

module.exports = {
  HTMLConstructor
};
