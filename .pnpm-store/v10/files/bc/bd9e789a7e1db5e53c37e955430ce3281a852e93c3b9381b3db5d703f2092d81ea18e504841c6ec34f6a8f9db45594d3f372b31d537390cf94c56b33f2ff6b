"use strict";
const DOMException = require("domexception/webidl2js-wrapper");

const { HTML_NS } = require("./helpers/namespaces");
const { asciiLowercase } = require("./helpers/strings");
const { queueAttributeMutationRecord } = require("./helpers/mutation-observers");
const { enqueueCECallbackReaction } = require("./helpers/custom-elements");

// The following three are for https://dom.spec.whatwg.org/#concept-element-attribute-has. We don't just have a
// predicate tester since removing that kind of flexibility gives us the potential for better future optimizations.

/* eslint-disable no-restricted-properties */

exports.hasAttribute = function (element, A) {
  return element._attributeList.includes(A);
};

exports.hasAttributeByName = function (element, name) {
  return element._attributesByNameMap.has(name);
};

exports.hasAttributeByNameNS = function (element, namespace, localName) {
  return element._attributeList.some(attribute => {
    return attribute._localName === localName && attribute._namespace === namespace;
  });
};

// https://dom.spec.whatwg.org/#concept-element-attributes-change
exports.changeAttribute = (element, attribute, value) => {
  const { _localName, _namespace, _value } = attribute;

  queueAttributeMutationRecord(element, _localName, _namespace, _value);

  if (element._ceState === "custom") {
    enqueueCECallbackReaction(element, "attributeChangedCallback", [
      _localName,
      _value,
      value,
      _namespace
    ]);
  }

  attribute._value = value;

  // Run jsdom hooks; roughly correspond to spec's "An attribute is set and an attribute is changed."
  element._attrModified(attribute._qualifiedName, value, _value);
};

// https://dom.spec.whatwg.org/#concept-element-attributes-append
exports.appendAttribute = function (element, attribute) {
  const { _localName, _namespace, _value } = attribute;
  queueAttributeMutationRecord(element, _localName, _namespace, null);

  if (element._ceState === "custom") {
    enqueueCECallbackReaction(element, "attributeChangedCallback", [
      _localName,
      null,
      _value,
      _namespace
    ]);
  }

  const attributeList = element._attributeList;

  attributeList.push(attribute);
  attribute._element = element;

  // Sync name cache
  const name = attribute._qualifiedName;
  const cache = element._attributesByNameMap;
  let entry = cache.get(name);
  if (!entry) {
    entry = [];
    cache.set(name, entry);
  }
  entry.push(attribute);

  // Run jsdom hooks; roughly correspond to spec's "An attribute is set and an attribute is added."
  element._attrModified(name, _value, null);
};

exports.removeAttribute = function (element, attribute) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-remove

  const { _localName, _namespace, _value } = attribute;

  queueAttributeMutationRecord(element, _localName, _namespace, _value);

  if (element._ceState === "custom") {
    enqueueCECallbackReaction(element, "attributeChangedCallback", [
      _localName,
      _value,
      null,
      _namespace
    ]);
  }

  const attributeList = element._attributeList;

  for (let i = 0; i < attributeList.length; ++i) {
    if (attributeList[i] === attribute) {
      attributeList.splice(i, 1);
      attribute._element = null;

      // Sync name cache
      const name = attribute._qualifiedName;
      const cache = element._attributesByNameMap;
      const entry = cache.get(name);
      entry.splice(entry.indexOf(attribute), 1);
      if (entry.length === 0) {
        cache.delete(name);
      }

      // Run jsdom hooks; roughly correspond to spec's "An attribute is removed."
      element._attrModified(name, null, attribute._value);

      return;
    }
  }
};

exports.replaceAttribute = function (element, oldAttr, newAttr) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-replace

  const { _localName, _namespace, _value } = oldAttr;

  queueAttributeMutationRecord(element, _localName, _namespace, _value);

  if (element._ceState === "custom") {
    enqueueCECallbackReaction(element, "attributeChangedCallback", [
      _localName,
      _value,
      newAttr._value,
      _namespace
    ]);
  }

  const attributeList = element._attributeList;

  for (let i = 0; i < attributeList.length; ++i) {
    if (attributeList[i] === oldAttr) {
      attributeList.splice(i, 1, newAttr);
      oldAttr._element = null;
      newAttr._element = element;

      // Sync name cache
      const name = newAttr._qualifiedName;
      const cache = element._attributesByNameMap;
      let entry = cache.get(name);
      if (!entry) {
        entry = [];
        cache.set(name, entry);
      }
      entry.splice(entry.indexOf(oldAttr), 1, newAttr);

      // Run jsdom hooks; roughly correspond to spec's "An attribute is set and an attribute is changed."
      element._attrModified(name, newAttr._value, oldAttr._value);

      return;
    }
  }
};

exports.getAttributeByName = function (element, name) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name

  if (element._namespaceURI === HTML_NS &&
      element._ownerDocument._parsingMode === "html") {
    name = asciiLowercase(name);
  }

  const cache = element._attributesByNameMap;
  const entry = cache.get(name);
  if (!entry) {
    return null;
  }

  return entry[0];
};

exports.getAttributeByNameNS = function (element, namespace, localName) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace

  if (namespace === "") {
    namespace = null;
  }

  const attributeList = element._attributeList;
  for (let i = 0; i < attributeList.length; ++i) {
    const attr = attributeList[i];
    if (attr._namespace === namespace && attr._localName === localName) {
      return attr;
    }
  }

  return null;
};

// Both of the following functions implement https://dom.spec.whatwg.org/#concept-element-attributes-get-value.
// Separated them into two to keep symmetry with other functions.
exports.getAttributeValue = function (element, localName) {
  const attr = exports.getAttributeByNameNS(element, null, localName);

  if (!attr) {
    return "";
  }

  return attr._value;
};

exports.getAttributeValueNS = function (element, namespace, localName) {
  const attr = exports.getAttributeByNameNS(element, namespace, localName);

  if (!attr) {
    return "";
  }

  return attr._value;
};

exports.setAttribute = function (element, attr) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-set

  if (attr._element !== null && attr._element !== element) {
    throw DOMException.create(element._globalObject, ["The attribute is in use.", "InUseAttributeError"]);
  }

  const oldAttr = exports.getAttributeByNameNS(element, attr._namespace, attr._localName);
  if (oldAttr === attr) {
    return attr;
  }

  if (oldAttr !== null) {
    exports.replaceAttribute(element, oldAttr, attr);
  } else {
    exports.appendAttribute(element, attr);
  }

  return oldAttr;
};

exports.setAttributeValue = function (element, localName, value, prefix, namespace) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-set-value

  if (prefix === undefined) {
    prefix = null;
  }
  if (namespace === undefined) {
    namespace = null;
  }

  const attribute = exports.getAttributeByNameNS(element, namespace, localName);
  if (attribute === null) {
    const newAttribute = element._ownerDocument._createAttribute({
      namespace,
      namespacePrefix: prefix,
      localName,
      value
    });
    exports.appendAttribute(element, newAttribute);

    return;
  }

  exports.changeAttribute(element, attribute, value);
};

// https://dom.spec.whatwg.org/#set-an-existing-attribute-value
exports.setAnExistingAttributeValue = (attribute, value) => {
  const element = attribute._element;
  if (element === null) {
    attribute._value = value;
  } else {
    exports.changeAttribute(element, attribute, value);
  }
};

exports.removeAttributeByName = function (element, name) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name

  const attr = exports.getAttributeByName(element, name);

  if (attr !== null) {
    exports.removeAttribute(element, attr);
  }

  return attr;
};

exports.removeAttributeByNameNS = function (element, namespace, localName) {
  // https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace

  const attr = exports.getAttributeByNameNS(element, namespace, localName);

  if (attr !== null) {
    exports.removeAttribute(element, attr);
  }

  return attr;
};

exports.attributeNames = function (element) {
  // Needed by https://dom.spec.whatwg.org/#dom-element-getattributenames

  return element._attributeList.map(a => a._qualifiedName);
};

exports.hasAttributes = function (element) {
  // Needed by https://dom.spec.whatwg.org/#dom-element-hasattributes

  return element._attributeList.length > 0;
};
