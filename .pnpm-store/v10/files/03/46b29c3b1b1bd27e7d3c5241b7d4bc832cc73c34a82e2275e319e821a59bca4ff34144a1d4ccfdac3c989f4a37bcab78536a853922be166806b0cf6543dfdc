"use strict";

const parse5 = require("parse5");

const { createElement } = require("../../living/helpers/create-element");
const { HTML_NS } = require("../../living/helpers/namespaces");

const DocumentType = require("../../living/generated/DocumentType");
const DocumentFragment = require("../../living/generated/DocumentFragment");
const Text = require("../../living/generated/Text");
const Comment = require("../../living/generated/Comment");

const attributes = require("../../living/attributes");
const nodeTypes = require("../../living/node-type");

const serializationAdapter = require("../../living/domparsing/parse5-adapter-serialization");
const {
  customElementReactionsStack, invokeCEReactions, lookupCEDefinition
} = require("../../living/helpers/custom-elements");


class JSDOMParse5Adapter {
  constructor(documentImpl, options = {}) {
    this._documentImpl = documentImpl;
    this._globalObject = documentImpl._globalObject;
    this._fragment = options.fragment || false;

    // Since the createElement hook doesn't provide the parent element, we keep track of this using _currentElement:
    // https://github.com/inikulin/parse5/issues/285.
    this._currentElement = undefined;
  }

  _ownerDocument() {
    const { _currentElement } = this;

    // The _currentElement is undefined when parsing elements at the root of the document.
    if (_currentElement) {
      return _currentElement.localName === "template" && _currentElement.namespaceURI === HTML_NS ?
        _currentElement.content._ownerDocument :
        _currentElement._ownerDocument;
    }

    return this._documentImpl;
  }

  createDocument() {
    // parse5's model assumes that parse(html) will call into here to create the new Document, then return it. However,
    // jsdom's model assumes we can create a Window (and through that create an empty Document), do some other setup
    // stuff, and then parse, stuffing nodes into that Document as we go. So to adapt between these two models, we just
    // return the already-created Document when asked by parse5 to "create" a Document.
    return this._documentImpl;
  }

  createDocumentFragment() {
    const ownerDocument = this._ownerDocument();
    return DocumentFragment.createImpl(this._globalObject, [], { ownerDocument });
  }

  // https://html.spec.whatwg.org/#create-an-element-for-the-token
  createElement(localName, namespace, attrs) {
    const ownerDocument = this._ownerDocument();

    const isAttribute = attrs.find(attr => attr.name === "is");
    const isValue = isAttribute ? isAttribute.value : null;

    const definition = lookupCEDefinition(ownerDocument, namespace, localName);

    let willExecuteScript = false;
    if (definition !== null && !this._fragment) {
      willExecuteScript = true;
    }

    if (willExecuteScript) {
      ownerDocument._throwOnDynamicMarkupInsertionCounter++;
      customElementReactionsStack.push([]);
    }

    const element = createElement(ownerDocument, localName, namespace, null, isValue, willExecuteScript);
    this.adoptAttributes(element, attrs);

    if (willExecuteScript) {
      const queue = customElementReactionsStack.pop();
      invokeCEReactions(queue);
      ownerDocument._throwOnDynamicMarkupInsertionCounter--;
    }

    if ("_parserInserted" in element) {
      element._parserInserted = true;
    }

    return element;
  }

  createCommentNode(data) {
    const ownerDocument = this._ownerDocument();
    return Comment.createImpl(this._globalObject, [], { data, ownerDocument });
  }

  appendChild(parentNode, newNode) {
    parentNode._append(newNode);
  }

  insertBefore(parentNode, newNode, referenceNode) {
    parentNode._insert(newNode, referenceNode);
  }

  setTemplateContent(templateElement, contentFragment) {
    // This code makes the glue between jsdom and parse5 HTMLTemplateElement parsing:
    //
    // * jsdom during the construction of the HTMLTemplateElement (for example when create via
    //   `document.createElement("template")`), creates a DocumentFragment and set it into _templateContents.
    // * parse5 when parsing a <template> tag creates an HTMLTemplateElement (`createElement` adapter hook) and also
    //   create a DocumentFragment (`createDocumentFragment` adapter hook).
    //
    // At this point we now have to replace the one created in jsdom with one created by parse5.
    const { _ownerDocument, _host } = templateElement._templateContents;
    contentFragment._ownerDocument = _ownerDocument;
    contentFragment._host = _host;

    templateElement._templateContents = contentFragment;
  }

  setDocumentType(document, name, publicId, systemId) {
    const ownerDocument = this._ownerDocument();
    const documentType = DocumentType.createImpl(this._globalObject, [], { name, publicId, systemId, ownerDocument });

    document._append(documentType);
  }

  setDocumentMode(document, mode) {
    // TODO: the rest of jsdom ignores this
    document._mode = mode;
  }

  detachNode(node) {
    node.remove();
  }

  insertText(parentNode, text) {
    const { lastChild } = parentNode;
    if (lastChild && lastChild.nodeType === nodeTypes.TEXT_NODE) {
      lastChild.data += text;
    } else {
      const ownerDocument = this._ownerDocument();
      const textNode = Text.createImpl(this._globalObject, [], { data: text, ownerDocument });
      parentNode._append(textNode);
    }
  }

  insertTextBefore(parentNode, text, referenceNode) {
    const { previousSibling } = referenceNode;
    if (previousSibling && previousSibling.nodeType === nodeTypes.TEXT_NODE) {
      previousSibling.data += text;
    } else {
      const ownerDocument = this._ownerDocument();
      const textNode = Text.createImpl(this._globalObject, [], { data: text, ownerDocument });
      parentNode._append(textNode, referenceNode);
    }
  }

  adoptAttributes(element, attrs) {
    for (const attr of attrs) {
      const prefix = attr.prefix === "" ? null : attr.prefix;
      attributes.setAttributeValue(element, attr.name, attr.value, prefix, attr.namespace);
    }
  }

  onItemPush(after) {
    this._currentElement = after;
    after._pushedOnStackOfOpenElements?.();
  }

  onItemPop(before, newTop) {
    this._currentElement = newTop;
    before._poppedOffStackOfOpenElements?.();
  }
}

// Assign shared adapters with serializer.
Object.assign(JSDOMParse5Adapter.prototype, serializationAdapter);

function parseFragment(markup, contextElement) {
  const ownerDocument = contextElement.localName === "template" && contextElement.namespaceURI === HTML_NS ?
    contextElement.content._ownerDocument :
    contextElement._ownerDocument;

  const config = {
    ...ownerDocument._parseOptions,
    sourceCodeLocationInfo: false,
    treeAdapter: new JSDOMParse5Adapter(ownerDocument, { fragment: true })
  };

  return parse5.parseFragment(contextElement, markup, config);
}

function parseIntoDocument(markup, ownerDocument) {
  const config = {
    ...ownerDocument._parseOptions,
    treeAdapter: new JSDOMParse5Adapter(ownerDocument)
  };

  return parse5.parse(markup, config);
}

module.exports = {
  parseFragment,
  parseIntoDocument
};
