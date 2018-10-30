"use strict";

const parse5 = require("parse5");
const sax = require("sax");
const attributes = require("../living/attributes");
const DocumentType = require("../living/generated/DocumentType");
const JSDOMParse5Adapter = require("./parse5-adapter-parsing");
const { HTML_NS } = require("../living/helpers/namespaces");

// Horrible monkey-patch to implement https://github.com/inikulin/parse5/issues/237
const OpenElementStack = require("parse5/lib/parser/open_element_stack");
const originalPop = OpenElementStack.prototype.pop;
OpenElementStack.prototype.pop = function (...args) {
  const before = this.items[this.stackTop];
  originalPop.apply(this, args);
  if (before._poppedOffStackOfOpenElements) {
    before._poppedOffStackOfOpenElements();
  }
};

const originalPush = OpenElementStack.prototype.push;
OpenElementStack.prototype.push = function (...args) {
  originalPush.apply(this, args);
  const after = this.items[this.stackTop];
  if (after._pushedOnStackOfOpenElements) {
    after._pushedOnStackOfOpenElements();
  }
};

module.exports = class HTMLToDOM {
  constructor(parsingMode) {
    this.parser = parsingMode === "xml" ? sax : parse5;
  }

  appendToNode(html, node) {
    html = String(html);

    return this._doParse(html, true, node);
  }

  appendToDocument(html, documentImpl) {
    html = String(html);

    return this._doParse(html, false, documentImpl, documentImpl._parseOptions);
  }

  _doParse(...args) {
    return this.parser === parse5 ? this._parseWithParse5(...args) : this._parseWithSax(...args);
  }

  _parseWithParse5(html, isFragment, contextNode, options = {}) {
    const adapter = new JSDOMParse5Adapter(contextNode._ownerDocument || contextNode);
    options.treeAdapter = adapter;

    if (isFragment) {
      const fragment = this.parser.parseFragment(contextNode, html, options);

      if (contextNode._templateContents) {
        contextNode._templateContents.appendChild(fragment);
      } else {
        contextNode.appendChild(fragment);
      }
    } else {
      this.parser.parse(html, options);
    }

    return contextNode;
  }

  _parseWithSax(html, isFragment, contextNode) {
    const SaxParser = this.parser.parser;
    const parser = new SaxParser(/* strict = */true, { xmlns: true, strictEntities: true });
    parser.noscript = false;
    parser.looseCase = "toString";
    const openStack = [contextNode];
    parser.ontext = text => {
      setChildForSax(openStack[openStack.length - 1], {
        type: "text",
        data: text
      });
    };
    parser.oncdata = cdata => {
      setChildForSax(openStack[openStack.length - 1], {
        type: "cdata",
        data: cdata
      });
    };
    parser.onopentag = arg => {
      const attrs = Object.keys(arg.attributes).map(key => {
        const rawAttribute = arg.attributes[key];

        let { prefix } = rawAttribute;
        let localName = rawAttribute.local;
        if (prefix === "xmlns" && localName === "") {
          // intended weirdness in node-sax, see https://github.com/isaacs/sax-js/issues/165
          localName = prefix;
          prefix = null;
        }

        if (prefix === "") {
          prefix = null;
        }

        const namespace = rawAttribute.uri === "" ? null : rawAttribute.uri;

        return { name: rawAttribute.name, value: rawAttribute.value, prefix, localName, namespace };
      });
      const tag = {
        type: "tag",
        name: arg.local,
        prefix: arg.prefix,
        namespace: arg.uri,
        attributes: attrs
      };

      if (arg.local === "script" && arg.uri === HTML_NS) {
        openStack.push(tag);
      } else {
        const elem = setChildForSax(openStack[openStack.length - 1], tag);
        openStack.push(elem);
      }
    };
    parser.onclosetag = () => {
      const elem = openStack.pop();
      if (elem.constructor.name === "Object") { // we have an empty script tag
        setChildForSax(openStack[openStack.length - 1], elem);
      }
    };
    parser.onscript = scriptText => {
      const tag = openStack.pop();
      tag.children = [{ type: "text", data: scriptText }];
      const elem = setChildForSax(openStack[openStack.length - 1], tag);
      openStack.push(elem);
    };
    parser.oncomment = comment => {
      setChildForSax(openStack[openStack.length - 1], {
        type: "comment",
        data: comment
      });
    };
    parser.onprocessinginstruction = pi => {
      setChildForSax(openStack[openStack.length - 1], {
        type: "directive",
        name: "?" + pi.name,
        data: "?" + pi.name + " " + pi.body + "?"
      });
    };
    parser.ondoctype = dt => {
      setChildForSax(openStack[openStack.length - 1], {
        type: "directive",
        name: "!doctype",
        data: "!doctype " + dt
      });

      const entityMatcher = /<!ENTITY ([^ ]+) "([^"]+)">/g;
      let result;
      while ((result = entityMatcher.exec(dt))) {
        const [, name, value] = result;
        if (!(name in parser.ENTITIES)) {
          parser.ENTITIES[name] = value;
        }
      }
    };

    parser.onerror = err => {
      throw err;
    };
    parser.write(html).close();
  }
};

function setChildForSax(parentImpl, node) {
  const currentDocument = (parentImpl && parentImpl._ownerDocument) || parentImpl;

  let newNode;
  let isTemplateContents = false;
  switch (node.type) {
    case "tag":
    case "script":
    case "style":
      newNode = currentDocument._createElementWithCorrectElementInterface(node.name, node.namespace);
      newNode._prefix = node.prefix || null;
      newNode._namespaceURI = node.namespace || null;
      break;

    case "root":
      // If we are in <template> then add all children to the parent's _templateContents; skip this virtual root node.
      if (parentImpl.tagName === "TEMPLATE" && parentImpl._namespaceURI === HTML_NS) {
        newNode = parentImpl._templateContents;
        isTemplateContents = true;
      }
      break;

    case "text":
      // HTML entities should already be decoded by the parser, so no need to decode them
      newNode = currentDocument.createTextNode(node.data);
      break;

    case "cdata":
      newNode = currentDocument.createCDATASection(node.data);
      break;

    case "comment":
      newNode = currentDocument.createComment(node.data);
      break;

    case "directive":
      if (node.name[0] === "?" && node.name.toLowerCase() !== "?xml") {
        const data = node.data.slice(node.name.length + 1, -1);
        newNode = currentDocument.createProcessingInstruction(node.name.substring(1), data);
      } else if (node.name.toLowerCase() === "!doctype") {
        newNode = parseDocType(currentDocument, "<" + node.data + ">");
      }
      break;
  }

  if (!newNode) {
    return null;
  }

  if (node.attributes) {
    for (const a of node.attributes) {
      attributes.setAttributeValue(newNode, a.localName, a.value, a.prefix, a.namespace);
    }
  }

  if (node.children) {
    for (let c = 0; c < node.children.length; c++) {
      setChildForSax(newNode, node.children[c]);
    }
  }

  if (!isTemplateContents) {
    if (parentImpl._templateContents) {
      // Setting innerHTML on a <template>
      parentImpl._templateContents.appendChild(newNode);
    } else {
      parentImpl.appendChild(newNode);
    }
  }

  return newNode;
}

const HTML5_DOCTYPE = /<!doctype html>/i;
const PUBLIC_DOCTYPE = /<!doctype\s+([^\s]+)\s+public\s+"([^"]+)"\s+"([^"]+)"/i;
const SYSTEM_DOCTYPE = /<!doctype\s+([^\s]+)\s+system\s+"([^"]+)"/i;

function parseDocType(doc, html) {
  if (HTML5_DOCTYPE.test(html)) {
    return createDocumentTypeInternal(doc, "html", "", "");
  }

  const publicPieces = PUBLIC_DOCTYPE.exec(html);
  if (publicPieces) {
    return createDocumentTypeInternal(doc, publicPieces[1], publicPieces[2], publicPieces[3]);
  }

  const systemPieces = SYSTEM_DOCTYPE.exec(html);
  if (systemPieces) {
    return createDocumentTypeInternal(doc, systemPieces[1], "", systemPieces[2]);
  }

  // Shouldn't get here (the parser shouldn't let us know about invalid doctypes), but our logic likely isn't
  // real-world perfect, so let's fallback.
  return createDocumentTypeInternal(doc, "html", "", "");
}

function createDocumentTypeInternal(ownerDocument, name, publicId, systemId) {
  return DocumentType.createImpl([], { ownerDocument, name, publicId, systemId });
}
