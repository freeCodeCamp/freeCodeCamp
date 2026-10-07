"use strict";

const DOMException = require("domexception/webidl2js-wrapper");
const isPotentialCustomElementName = require("is-potential-custom-element-name");

const NODE_TYPE = require("../node-type");
const { HTML_NS } = require("./namespaces");
const { shadowIncludingRoot } = require("./shadow-dom");
const reportException = require("./runtime-script-errors");

const { implForWrapper, wrapperForImpl } = require("../generated/utils");

// https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-reactions-stack
class CEReactionsStack {
  constructor() {
    this._stack = [];

    // https://html.spec.whatwg.org/multipage/custom-elements.html#backup-element-queue
    this.backupElementQueue = [];

    // https://html.spec.whatwg.org/multipage/custom-elements.html#processing-the-backup-element-queue
    this.processingBackupElementQueue = false;
  }

  push(elementQueue) {
    this._stack.push(elementQueue);
  }

  pop() {
    return this._stack.pop();
  }

  get currentElementQueue() {
    const { _stack } = this;
    return _stack[_stack.length - 1];
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}

// In theory separate cross-origin Windows created by separate JSDOM instances could have separate stacks. But, we would
// need to implement the whole agent architecture. Which is kind of questionable given that we don't run our Windows in
// their own separate threads, which is what agents are meant to represent.
const customElementReactionsStack = new CEReactionsStack();

// https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions
function ceReactionsPreSteps() {
  customElementReactionsStack.push([]);
}
function ceReactionsPostSteps() {
  const queue = customElementReactionsStack.pop();
  invokeCEReactions(queue);
}

const RESTRICTED_CUSTOM_ELEMENT_NAME = new Set([
  "annotation-xml",
  "color-profile",
  "font-face",
  "font-face-src",
  "font-face-uri",
  "font-face-format",
  "font-face-name",
  "missing-glyph"
]);

// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
function isValidCustomElementName(name) {
  if (RESTRICTED_CUSTOM_ELEMENT_NAME.has(name)) {
    return false;
  }

  return isPotentialCustomElementName(name);
}

// https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element
function upgradeElement(definition, element) {
  if (element._ceState !== "undefined" || element._ceState === "uncustomized") {
    return;
  }

  element._ceDefinition = definition;
  element._ceState = "failed";

  for (const attribute of element._attributeList) {
    const { _localName, _namespace, _value } = attribute;
    enqueueCECallbackReaction(element, "attributeChangedCallback", [_localName, null, _value, _namespace]);
  }

  if (shadowIncludingRoot(element).nodeType === NODE_TYPE.DOCUMENT_NODE) {
    enqueueCECallbackReaction(element, "connectedCallback", []);
  }

  definition.constructionStack.push(element);

  const { constructionStack, constructor: C } = definition;

  let constructionError;
  try {
    if (definition.disableShadow === true && element._shadowRoot !== null) {
      throw DOMException.create(element._globalObject, [
        "Can't upgrade a custom element with a shadow root if shadow is disabled",
        "NotSupportedError"
      ]);
    }

    const constructionResult = C.construct();
    const constructionResultImpl = implForWrapper(constructionResult);

    if (constructionResultImpl !== element) {
      throw new TypeError("Invalid custom element constructor return value");
    }
  } catch (error) {
    constructionError = error;
  }

  constructionStack.pop();

  if (constructionError !== undefined) {
    element._ceDefinition = null;
    element._ceReactionQueue = [];

    throw constructionError;
  }

  element._ceState = "custom";
}

// https://html.spec.whatwg.org/#concept-try-upgrade
function tryUpgradeElement(element) {
  const { _ownerDocument, _namespaceURI, _localName, _isValue } = element;
  const definition = lookupCEDefinition(_ownerDocument, _namespaceURI, _localName, _isValue);

  if (definition !== null) {
    enqueueCEUpgradeReaction(element, definition);
  }
}

// https://html.spec.whatwg.org/#look-up-a-custom-element-definition
function lookupCEDefinition(document, namespace, localName, isValue) {
  const definition = null;

  if (namespace !== HTML_NS) {
    return definition;
  }

  if (!document._defaultView) {
    return definition;
  }

  const registry = implForWrapper(document._globalObject.customElements);

  const definitionByName = registry._customElementDefinitions.find(def => {
    return def.name === def.localName && def.localName === localName;
  });
  if (definitionByName !== undefined) {
    return definitionByName;
  }

  const definitionByIs = registry._customElementDefinitions.find(def => {
    return def.name === isValue && def.localName === localName;
  });
  if (definitionByIs !== undefined) {
    return definitionByIs;
  }

  return definition;
}

// https://html.spec.whatwg.org/multipage/custom-elements.html#invoke-custom-element-reactions
function invokeCEReactions(elementQueue) {
  while (elementQueue.length > 0) {
    const element = elementQueue.shift();

    const reactions = element._ceReactionQueue;

    try {
      while (reactions.length > 0) {
        const reaction = reactions.shift();

        switch (reaction.type) {
          case "upgrade":
            upgradeElement(reaction.definition, element);
            break;

          case "callback":
            reaction.callback.apply(wrapperForImpl(element), reaction.args);
            break;
        }
      }
    } catch (error) {
      reportException(element._globalObject, error);
    }
  }
}

// https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-an-element-on-the-appropriate-element-queue
function enqueueElementOnAppropriateElementQueue(element) {
  if (customElementReactionsStack.isEmpty()) {
    customElementReactionsStack.backupElementQueue.push(element);

    if (customElementReactionsStack.processingBackupElementQueue) {
      return;
    }

    customElementReactionsStack.processingBackupElementQueue = true;

    Promise.resolve().then(() => {
      const elementQueue = customElementReactionsStack.backupElementQueue;
      invokeCEReactions(elementQueue);

      customElementReactionsStack.processingBackupElementQueue = false;
    });
  } else {
    customElementReactionsStack.currentElementQueue.push(element);
  }
}

// https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction
function enqueueCECallbackReaction(element, callbackName, args) {
  const { _ceDefinition: { lifecycleCallbacks, observedAttributes } } = element;

  const callback = lifecycleCallbacks[callbackName];
  if (callback === null) {
    return;
  }

  if (callbackName === "attributeChangedCallback") {
    const attributeName = args[0];
    if (!observedAttributes.includes(attributeName)) {
      return;
    }
  }

  element._ceReactionQueue.push({
    type: "callback",
    callback,
    args
  });

  enqueueElementOnAppropriateElementQueue(element);
}

// https://html.spec.whatwg.org/#enqueue-a-custom-element-upgrade-reaction
function enqueueCEUpgradeReaction(element, definition) {
  element._ceReactionQueue.push({
    type: "upgrade",
    definition
  });

  enqueueElementOnAppropriateElementQueue(element);
}

module.exports = {
  customElementReactionsStack,

  ceReactionsPreSteps,
  ceReactionsPostSteps,

  isValidCustomElementName,

  upgradeElement,
  tryUpgradeElement,

  lookupCEDefinition,
  enqueueCEUpgradeReaction,
  enqueueCECallbackReaction,
  invokeCEReactions
};
