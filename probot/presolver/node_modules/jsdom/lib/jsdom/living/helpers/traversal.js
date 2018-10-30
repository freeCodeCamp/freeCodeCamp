"use strict";
const { domSymbolTree } = require("./internal-constants");
const { DOCUMENT_NODE } = require("../node-type");
const { HTML_NS } = require("./namespaces");

// All these operate on and return impls, not wrappers!

exports.closest = (e, localName) => {
  while (e) {
    if (e.localName === localName && e.namespaceURI === HTML_NS) {
      return e;
    }
    e = domSymbolTree.parent(e);
  }

  return null;
};

exports.isConnected = node => {
  while (node) {
    if (node.nodeType === DOCUMENT_NODE) {
      return true;
    }
    node = domSymbolTree.parent(node);
  }
  return false;
};

exports.childrenByHTMLLocalName = (parent, localName) => {
  return domSymbolTree.childrenToArray(parent, { filter(node) {
    return node._localName === localName && node._namespaceURI === HTML_NS;
  } });
};

exports.descendantsByHTMLLocalName = (parent, localName) => {
  return domSymbolTree.treeToArray(parent, { filter(node) {
    return node._localName === localName && node._namespaceURI === HTML_NS && node !== parent;
  } });
};

exports.childrenByHTMLLocalNames = (parent, localNamesSet) => {
  return domSymbolTree.childrenToArray(parent, { filter(node) {
    return localNamesSet.has(node._localName) && node._namespaceURI === HTML_NS;
  } });
};

exports.descendantsByHTMLLocalNames = (parent, localNamesSet) => {
  return domSymbolTree.treeToArray(parent, { filter(node) {
    return localNamesSet.has(node._localName) &&
           node._namespaceURI === HTML_NS &&
           node !== parent;
  } });
};

exports.firstChildWithHTMLLocalName = (parent, localName) => {
  const iterator = domSymbolTree.childrenIterator(parent);
  for (const child of iterator) {
    if (child._localName === localName && child._namespaceURI === HTML_NS) {
      return child;
    }
  }
  return null;
};

exports.firstChildWithHTMLLocalNames = (parent, localNamesSet) => {
  const iterator = domSymbolTree.childrenIterator(parent);
  for (const child of iterator) {
    if (localNamesSet.has(child._localName) && child._namespaceURI === HTML_NS) {
      return child;
    }
  }
  return null;
};

exports.firstDescendantWithHTMLLocalName = (parent, localName) => {
  const iterator = domSymbolTree.treeIterator(parent);
  for (const descendant of iterator) {
    if (descendant._localName === localName && descendant._namespaceURI === HTML_NS) {
      return descendant;
    }
  }
  return null;
};
