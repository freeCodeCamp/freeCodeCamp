"use strict";
const attributes = require("./attributes");
const { cloningSteps, domSymbolTree } = require("./helpers/internal-constants");
const NODE_TYPE = require("./node-type");
const orderedSetParse = require("./helpers/ordered-set").parse;
const { asciiCaseInsensitiveMatch, asciiLowercase } = require("./helpers/strings");
const { HTML_NS, XMLNS_NS } = require("./helpers/namespaces");
const HTMLCollection = require("./generated/HTMLCollection");

module.exports.clone = function (node, document, cloneChildren) {
  if (document === undefined) {
    document = node._ownerDocument;
  }

  let copy;
  switch (node.nodeType) {
    case NODE_TYPE.DOCUMENT_NODE:
      // Can't use a simple Document.createImpl because of circular dependency issues :-/
      copy = document.implementation.createDocument(null, "", null);
      copy._encoding = node._encoding;
      copy.contentType = node.contentType;
      copy._URL = node._URL;
      copy.origin = node.origin;
      copy._parsingMode = node._parsingMode;
      break;

    case NODE_TYPE.DOCUMENT_TYPE_NODE:
      copy = document.implementation.createDocumentType(node.name, node.publicId, node.systemId);
      break;

    case NODE_TYPE.ELEMENT_NODE:
      copy = document._createElementWithCorrectElementInterface(node._localName, node._namespaceURI);
      copy._prefix = node._prefix;
      attributes.copyAttributeList(node, copy);
      break;

    case NODE_TYPE.TEXT_NODE:
      copy = document.createTextNode(node._data);
      break;

    case NODE_TYPE.CDATA_SECTION_NODE:
      copy = document.createCDATASection(node._data);
      break;

    case NODE_TYPE.COMMENT_NODE:
      copy = document.createComment(node._data);
      break;

    case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      copy = document.createProcessingInstruction(node.target, node._data);
      break;

    case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
      copy = document.createDocumentFragment();
      break;
  }

  if (node[cloningSteps]) {
    node[cloningSteps](copy, node, document, cloneChildren);
  }

  if (cloneChildren) {
    for (const child of domSymbolTree.childrenIterator(node)) {
      const childCopy = module.exports.clone(child, document, true);
      copy.appendChild(childCopy);
    }
  }

  return copy;
};

// For the following, memoization is not applied here since the memoized results are stored on `this`.

module.exports.listOfElementsWithClassNames = (classNames, root) => {
  // https://dom.spec.whatwg.org/#concept-getElementsByClassName

  const classes = orderedSetParse(classNames);

  if (classes.size === 0) {
    return HTMLCollection.createImpl([], { element: root, query: () => [] });
  }

  return HTMLCollection.createImpl([], {
    element: root,
    query: () => {
      const isQuirksMode = root._ownerDocument.compatMode === "BackCompat";

      return domSymbolTree.treeToArray(root, { filter(node) {
        if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
          return false;
        }

        const { classList } = node;
        if (isQuirksMode) {
          for (const className of classes) {
            if (!classList.tokenSet.some(cur => asciiCaseInsensitiveMatch(cur, className))) {
              return false;
            }
          }
        } else {
          for (const className of classes) {
            if (!classList.tokenSet.contains(className)) {
              return false;
            }
          }
        }

        return true;
      } });
    }
  });
};

module.exports.listOfElementsWithQualifiedName = (qualifiedName, root) => {
  // https://dom.spec.whatwg.org/#concept-getelementsbytagname

  if (qualifiedName === "*") {
    return HTMLCollection.createImpl([], {
      element: root,
      query: () => domSymbolTree.treeToArray(root, {
        filter: node => node.nodeType === NODE_TYPE.ELEMENT_NODE && node !== root
      })
    });
  }

  if (root._ownerDocument._parsingMode === "html") {
    const lowerQualifiedName = asciiLowercase(qualifiedName);

    return HTMLCollection.createImpl([], {
      element: root,
      query: () => domSymbolTree.treeToArray(root, {
        filter(node) {
          if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
            return false;
          }

          if (node._namespaceURI === HTML_NS) {
            return node._qualifiedName === lowerQualifiedName;
          }

          return node._qualifiedName === qualifiedName;
        }
      })
    });
  }

  return HTMLCollection.createImpl([], {
    element: root,
    query: () => domSymbolTree.treeToArray(root, {
      filter(node) {
        if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
          return false;
        }

        return node._qualifiedName === qualifiedName;
      }
    })
  });
};

module.exports.listOfElementsWithNamespaceAndLocalName = (namespace, localName, root) => {
  // https://dom.spec.whatwg.org/#concept-getelementsbytagnamens

  if (namespace === "") {
    namespace = null;
  }

  if (namespace === "*" && localName === "*") {
    return HTMLCollection.createImpl([], {
      element: root,
      query: () => domSymbolTree.treeToArray(root, {
        filter: node => node.nodeType === NODE_TYPE.ELEMENT_NODE && node !== root
      })
    });
  }

  if (namespace === "*") {
    return HTMLCollection.createImpl([], {
      element: root,
      query: () => domSymbolTree.treeToArray(root, {
        filter(node) {
          if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
            return false;
          }

          return node._localName === localName;
        }
      })
    });
  }

  if (localName === "*") {
    return HTMLCollection.createImpl([], {
      element: root,
      query: () => domSymbolTree.treeToArray(root, {
        filter(node) {
          if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
            return false;
          }

          return node._namespaceURI === namespace;
        }
      })
    });
  }

  return HTMLCollection.createImpl([], {
    element: root,
    query: () => domSymbolTree.treeToArray(root, {
      filter(node) {
        if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) {
          return false;
        }

        return node._localName === localName && node._namespaceURI === namespace;
      }
    })
  });
};

// https://dom.spec.whatwg.org/#converting-nodes-into-a-node
// create a fragment (or just return a node for one item)
exports.convertNodesIntoNode = (document, nodes) => {
  if (nodes.length === 1) { // note: I'd prefer to check instanceof Node rather than string
    return typeof nodes[0] === "string" ? document.createTextNode(nodes[0]) : nodes[0];
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < nodes.length; i++) {
    fragment.appendChild(typeof nodes[i] === "string" ? document.createTextNode(nodes[i]) : nodes[i]);
  }
  return fragment;
};

// https://dom.spec.whatwg.org/#locate-a-namespace-prefix
exports.locateNamespacePrefix = (element, namespace) => {
  if (element._namespaceURI === namespace && element._prefix !== null) {
    return element._prefix;
  }

  for (const attribute of element._attributeList) {
    if (attribute._namespacePrefix === "xmlns" && attribute._value === namespace) {
      return attribute._localName;
    }
  }

  if (element.parentElement !== null) {
    return exports.locateNamespacePrefix(element.parentElement, namespace);
  }

  return null;
};

// https://dom.spec.whatwg.org/#locate-a-namespace
exports.locateNamespace = (node, prefix) => {
  switch (node.nodeType) {
    case NODE_TYPE.ELEMENT_NODE: {
      if (node._namespaceURI !== null && node._prefix === prefix) {
        return node._namespaceURI;
      }

      if (prefix === null) {
        for (const attribute of node._attributeList) {
          if (attribute._namespace === XMLNS_NS &&
              attribute._namespacePrefix === null &&
              attribute._localName === "xmlns") {
            return attribute._value !== "" ? attribute._value : null;
          }
        }
      } else {
        for (const attribute of node._attributeList) {
          if (attribute._namespace === XMLNS_NS &&
              attribute._namespacePrefix === "xmlns" &&
              attribute._localName === prefix) {
            return attribute._value !== "" ? attribute._value : null;
          }
        }
      }

      if (node.parentElement === null) {
        return null;
      }

      return exports.locateNamespace(node.parentElement, prefix);
    }

    case NODE_TYPE.DOCUMENT_NODE: {
      if (node.documentElement === null) {
        return null;
      }

      return exports.locateNamespace(node.documentElement, prefix);
    }

    case NODE_TYPE.DOCUMENT_TYPE_NODE:
    case NODE_TYPE.DOCUMENT_FRAGMENT_NODE: {
      return null;
    }

    case NODE_TYPE.ATTRIBUTE_NODE: {
      if (node._element === null) {
        return null;
      }

      return exports.locateNamespace(node._element, prefix);
    }

    default: {
      if (node.parentElement === null) {
        return null;
      }

      return exports.locateNamespace(node.parentElement, prefix);
    }
  }
};
