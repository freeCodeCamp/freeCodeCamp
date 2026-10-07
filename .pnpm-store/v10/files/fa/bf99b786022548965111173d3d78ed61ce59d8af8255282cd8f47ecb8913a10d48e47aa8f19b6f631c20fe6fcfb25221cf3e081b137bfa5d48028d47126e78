"use strict";

const { SaxesParser } = require("saxes");
const DOMException = require("../../living/generated/DOMException");

const { createElement } = require("../../living/helpers/create-element");

const DocumentFragment = require("../../living/generated/DocumentFragment");
const DocumentType = require("../../living/generated/DocumentType");
const CDATASection = require("../../living/generated/CDATASection");
const Comment = require("../../living/generated/Comment");
const ProcessingInstruction = require("../../living/generated/ProcessingInstruction");
const Text = require("../../living/generated/Text");

const attributes = require("../../living/attributes");
const { HTML_NS } = require("../../living/helpers/namespaces");

const HTML5_DOCTYPE = /<!doctype html>/i;
const PUBLIC_DOCTYPE = /<!doctype\s+([^\s]+)\s+public\s+"([^"]+)"\s+"([^"]+)"/i;
const SYSTEM_DOCTYPE = /<!doctype\s+([^\s]+)\s+system\s+"([^"]+)"/i;
const CUSTOM_NAME_DOCTYPE = /<!doctype\s+([^\s>]+)/i;

function parseDocType(globalObject, ownerDocument, html) {
  if (HTML5_DOCTYPE.test(html)) {
    return createDocumentType(globalObject, ownerDocument, "html", "", "");
  }

  const publicPieces = PUBLIC_DOCTYPE.exec(html);
  if (publicPieces) {
    return createDocumentType(globalObject, ownerDocument, publicPieces[1], publicPieces[2], publicPieces[3]);
  }

  const systemPieces = SYSTEM_DOCTYPE.exec(html);
  if (systemPieces) {
    return createDocumentType(globalObject, ownerDocument, systemPieces[1], "", systemPieces[2]);
  }

  const namePiece = CUSTOM_NAME_DOCTYPE.exec(html)[1] || "html";
  return createDocumentType(globalObject, ownerDocument, namePiece, "", "");
}

function createDocumentType(globalObject, ownerDocument, name, publicId, systemId) {
  return DocumentType.createImpl(globalObject, [], { ownerDocument, name, publicId, systemId });
}

function isHTMLTemplateElement(element) {
  return element.tagName === "template" && element.namespaceURI === HTML_NS;
}


function createParser(rootNode, globalObject, saxesOptions) {
  const parser = new SaxesParser({
    ...saxesOptions,
    // Browsers always have namespace support.
    xmlns: true,
    // We force the parser to treat all documents (even documents declaring themselves to be XML 1.1 documents) as XML
    // 1.0 documents. See https://github.com/jsdom/jsdom/issues/2677 for a discussion of the stakes.
    defaultXMLVersion: "1.0",
    forceXMLVersion: true
  });
  const openStack = [rootNode];

  function getOwnerDocument() {
    const currentElement = openStack[openStack.length - 1];

    return isHTMLTemplateElement(currentElement) ?
      currentElement._templateContents._ownerDocument :
      currentElement._ownerDocument;
  }

  function appendChild(child) {
    const parentElement = openStack[openStack.length - 1];

    if (isHTMLTemplateElement(parentElement)) {
      parentElement._templateContents._insert(child, null);
    } else {
      parentElement._insert(child, null);
    }
  }

  parser.on("text", saxesOptions.fragment ?
    // In a fragment, all text events produced by saxes must result in a text
    // node.
    data => {
      const ownerDocument = getOwnerDocument();
      appendChild(Text.createImpl(globalObject, [], { data, ownerDocument }));
    } :
    // When parsing a whole document, we must ignore those text nodes that are
    // produced outside the root element. Saxes produces events for them,
    // but DOM trees do not record text outside the root element.
    data => {
      if (openStack.length > 1) {
        const ownerDocument = getOwnerDocument();
        appendChild(Text.createImpl(globalObject, [], { data, ownerDocument }));
      }
    });

  parser.on("cdata", data => {
    const ownerDocument = getOwnerDocument();
    appendChild(CDATASection.createImpl(globalObject, [], { data, ownerDocument }));
  });

  parser.on("opentag", tag => {
    const { local: tagLocal, attributes: tagAttributes } = tag;

    const ownerDocument = getOwnerDocument();
    const tagNamespace = tag.uri === "" ? null : tag.uri;
    const tagPrefix = tag.prefix === "" ? null : tag.prefix;
    const isValue = tagAttributes.is === undefined ? null : tagAttributes.is.value;

    const elem = createElement(ownerDocument, tagLocal, tagNamespace, tagPrefix, isValue, true);

    // We mark a script element as "parser-inserted", which prevents it from
    // being immediately executed.
    if (tagLocal === "script" && tagNamespace === HTML_NS) {
      elem._parserInserted = true;
    }

    for (const key of Object.keys(tagAttributes)) {
      const { prefix, local, uri, value } = tagAttributes[key];
      attributes.setAttributeValue(elem, local, value, prefix === "" ? null : prefix, uri === "" ? null : uri);
    }

    appendChild(elem);
    openStack.push(elem);
  });

  parser.on("closetag", () => {
    const elem = openStack.pop();
    // Once a script is populated, we can execute it.
    if (elem.localName === "script" && elem.namespaceURI === HTML_NS) {
      elem._eval();
    }
  });

  parser.on("comment", data => {
    const ownerDocument = getOwnerDocument();
    appendChild(Comment.createImpl(globalObject, [], { data, ownerDocument }));
  });

  parser.on("processinginstruction", ({ target, body }) => {
    const ownerDocument = getOwnerDocument();
    appendChild(ProcessingInstruction.createImpl(globalObject, [], { target, data: body, ownerDocument }));
  });

  parser.on("doctype", dt => {
    const ownerDocument = getOwnerDocument();
    appendChild(parseDocType(globalObject, ownerDocument, `<!doctype ${dt}>`));

    const entityMatcher = /<!ENTITY ([^ ]+) "([^"]+)">/g;
    let result;
    while ((result = entityMatcher.exec(dt))) {
      const [, name, value] = result;
      if (!(name in parser.ENTITIES)) {
        parser.ENTITIES[name] = value;
      }
    }
  });

  parser.on("error", err => {
    throw DOMException.create(globalObject, [err.message, "SyntaxError"]);
  });

  return parser;
}

function parseFragment(markup, contextElement) {
  const { _globalObject, _ownerDocument } = contextElement;

  const fragment = DocumentFragment.createImpl(_globalObject, [], { ownerDocument: _ownerDocument });

  // Only parseFragment needs resolvePrefix per the saxes documentation:
  // https://github.com/lddubeau/saxes#parsing-xml-fragments
  const parser = createParser(fragment, _globalObject, {
    fragment: true,
    resolvePrefix(prefix) {
      // saxes wants undefined as the return value if the prefix is not defined, not null.
      return contextElement.lookupNamespaceURI(prefix) || undefined;
    }
  });

  parser.write(markup).close();

  return fragment;
}

function parseIntoDocument(markup, ownerDocument) {
  const { _globalObject } = ownerDocument;

  const parser = createParser(ownerDocument, _globalObject, {
    fileName: ownerDocument.location && ownerDocument.location.href
  });

  parser.write(markup).close();

  return ownerDocument;
}

module.exports = {
  parseFragment,
  parseIntoDocument
};
