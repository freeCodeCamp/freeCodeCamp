"use strict";
const hasOwnProp = Object.prototype.hasOwnProperty;
const namedPropertiesTracker = require("../named-properties-tracker");
const NODE_TYPE = require("./node-type");
const HTMLCollection = require("./generated/HTMLCollection");
const { treeOrderSorter } = require("../utils");
const idlUtils = require("./generated/utils");

function isNamedPropertyElement(element) {
  // (for the name attribute)

  // use hasOwnProperty to make sure contentWindow comes from the prototype,
  // and is not set directly on the node by a script.
  if ("contentWindow" in element && !hasOwnProp.call(element, "contentWindow")) {
    return true;
  }

  switch (element.nodeName) {
    case "A":
    case "AREA":
    case "EMBED":
    case "FORM":
    case "FRAMESET":
    case "IMG":
    case "OBJECT":
      return true;
    default:
      return false;
  }
}

function namedPropertyResolver(window, name, values) {
  function getResult() {
    const results = [];

    for (const node of values().keys()) {
      if (node.nodeType !== NODE_TYPE.ELEMENT_NODE) {
        continue;
      }

      if (node.getAttribute("id") === name) {
        results.push(node);
      } else if (node.getAttribute("name") === name && isNamedPropertyElement(node)) {
        results.push(node);
      }
    }

    results.sort(treeOrderSorter);

    return results;
  }

  const document = window._document;
  const objects = HTMLCollection.create([], {
    element: idlUtils.implForWrapper(document.documentElement),
    query: getResult
  });

  const { length } = objects;
  for (let i = 0; i < length; ++i) {
    const node = objects[i];

    if ("contentWindow" in node && !hasOwnProp.call(node, "contentWindow") &&
       node.getAttribute("name") === name) {
      return node.contentWindow;
    }
  }

  if (length === 0) {
    return undefined;
  }

  if (length === 1) {
    return objects[0];
  }

  return objects;
}

exports.initializeWindow = function (window, windowProxy) {
  namedPropertiesTracker.create(window, windowProxy, namedPropertyResolver.bind(null));
};

exports.elementAttributeModified = function (element, name, value, oldValue) {
  if (!element._attached) {
    return;
  }

  const useName = isNamedPropertyElement(element);

  if (name === "id" || (name === "name" && useName)) {
    const tracker = namedPropertiesTracker.get(element._ownerDocument._global);

    // (tracker will be null if the document has no Window)
    if (tracker) {
      if (name === "id" && (!useName || element.getAttribute("name") !== oldValue)) {
        tracker.untrack(oldValue, element);
      }

      if (name === "name" && element.getAttribute("id") !== oldValue) {
        tracker.untrack(oldValue, element);
      }

      tracker.track(value, element);
    }
  }
};

exports.nodeAttachedToDocument = function (node) {
  if (node.nodeType !== NODE_TYPE.ELEMENT_NODE) {
    return;
  }

  const tracker = namedPropertiesTracker.get(node._ownerDocument._global);
  if (!tracker) {
    return;
  }

  tracker.track(node.getAttribute("id"), node);

  if (isNamedPropertyElement(node)) {
    tracker.track(node.getAttribute("name"), node);
  }
};

exports.nodeDetachedFromDocument = function (node) {
  if (node.nodeType !== NODE_TYPE.ELEMENT_NODE) {
    return;
  }

  const tracker = namedPropertiesTracker.get(node._ownerDocument._global);
  if (!tracker) {
    return;
  }

  tracker.untrack(node.getAttribute("id"), node);

  if (isNamedPropertyElement(node)) {
    tracker.untrack(node.getAttribute("name"), node);
  }
};
