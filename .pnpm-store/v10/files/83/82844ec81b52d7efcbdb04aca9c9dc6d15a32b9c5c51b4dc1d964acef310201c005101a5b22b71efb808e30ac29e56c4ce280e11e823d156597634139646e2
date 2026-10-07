"use strict";

const validateNames = require("../helpers/validate-names");
const { HTML_NS, SVG_NS } = require("../helpers/namespaces");
const { createElement, internalCreateElementNSSteps } = require("../helpers/create-element");
const DocumentType = require("../generated/DocumentType");
const documents = require("../documents.js");

class DOMImplementationImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;
    this._ownerDocument = privateData.ownerDocument;
  }

  hasFeature() {
    return true;
  }

  createDocumentType(qualifiedName, publicId, systemId) {
    validateNames.qname(this._globalObject, qualifiedName);

    return DocumentType.createImpl(this._globalObject, [], {
      ownerDocument: this._ownerDocument,
      name: qualifiedName,
      publicId,
      systemId
    });
  }

  // https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
  createDocument(namespace, qualifiedName, doctype) {
    let contentType = "application/xml";

    if (namespace === HTML_NS) {
      contentType = "application/xhtml+xml";
    } else if (namespace === SVG_NS) {
      contentType = "image/svg+xml";
    }

    const document = documents.createImpl(this._globalObject, {
      contentType,
      parsingMode: "xml",
      encoding: "UTF-8"
    });

    let element = null;
    if (qualifiedName !== "") {
      element = internalCreateElementNSSteps(document, namespace, qualifiedName, {});
    }

    if (doctype !== null) {
      document.appendChild(doctype);
    }

    if (element !== null) {
      document.appendChild(element);
    }

    document._origin = this._ownerDocument._origin;

    return document;
  }

  // https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
  createHTMLDocument(title) {
    // Let doc be a new document that is an HTML document.
    // Set doc's content type to "text/html".
    const document = documents.createImpl(this._globalObject, {
      parsingMode: "html",
      encoding: "UTF-8"
    });

    // Create a doctype, with "html" as its name and with its node document set
    // to doc. Append the newly created node to doc.
    const doctype = DocumentType.createImpl(this._globalObject, [], {
      ownerDocument: document,
      name: "html",
      publicId: "",
      systemId: ""
    });

    document.appendChild(doctype);

    // Create an html element in the HTML namespace, and append it to doc.
    const htmlElement = createElement(document, "html", HTML_NS);
    document.appendChild(htmlElement);

    // Create a head element in the HTML namespace, and append it to the html
    // element created in the previous step.
    const headElement = createElement(document, "head", HTML_NS);
    htmlElement.appendChild(headElement);

    // If the title argument is not omitted:
    if (title !== undefined) {
      // Create a title element in the HTML namespace, and append it to the head
      // element created in the previous step.
      const titleElement = createElement(document, "title", HTML_NS);
      headElement.appendChild(titleElement);

      // Create a Text node, set its data to title (which could be the empty
      // string), and append it to the title element created in the previous step.
      titleElement.appendChild(document.createTextNode(title));
    }

    // Create a body element in the HTML namespace, and append it to the html
    // element created in the earlier step.
    const bodyElement = createElement(document, "body", HTML_NS);
    htmlElement.appendChild(bodyElement);

    // doc's origin is an alias to the origin of the context object's associated
    // document, and doc's effective script origin is an alias to the effective
    // script origin of the context object's associated document.

    return document;
  }
}

module.exports = {
  implementation: DOMImplementationImpl
};
