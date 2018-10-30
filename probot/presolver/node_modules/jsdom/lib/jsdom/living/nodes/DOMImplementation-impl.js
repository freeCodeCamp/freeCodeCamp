"use strict";

const validateNames = require("../helpers/validate-names");
const DocumentType = require("../generated/DocumentType");
const Document = require("../generated/Document");
const { HTML_NS, SVG_NS } = require("../helpers/namespaces");

class DOMImplementationImpl {
  constructor(args, privateData) {
    this._ownerDocument = privateData.ownerDocument;
    this._features = Object.create(null);
  }

  hasFeature() {
    return true;
  }

  createDocumentType(qualifiedName, publicId, systemId) {
    validateNames.qname(qualifiedName);

    return DocumentType.createImpl([], {
      ownerDocument: this._ownerDocument,
      name: qualifiedName,
      publicId,
      systemId
    });
  }

  createDocument(namespace, qualifiedName, doctype) {
    let contentType = "application/xml";

    if (namespace === HTML_NS) {
      contentType = "application/xhtml+xml";
    } else if (namespace === SVG_NS) {
      contentType = "image/svg+xml";
    }

    const document = Document.createImpl([], {
      options: { contentType, parsingMode: "xml", encoding: "UTF-8" }
    });

    let element = null;
    if (qualifiedName !== "") {
      element = document.createElementNS(namespace, qualifiedName);
    }

    if (doctype !== null) {
      document.appendChild(doctype);
    }

    if (element !== null) {
      document.appendChild(element);
    }

    document.origin = this._ownerDocument.origin;

    return document;
  }

  createHTMLDocument(title) {
    // Let doc be a new document that is an HTML document.
    // Set doc's content type to "text/html".
    const document = Document.createImpl([], {
      options: { parsingMode: "html", encoding: "UTF-8" }
    });

    // Create a doctype, with "html" as its name and with its node document set
    // to doc. Append the newly created node to doc.
    const doctype = DocumentType.createImpl([], {
      ownerDocument: this,
      name: "html",
      publicId: "",
      systemId: ""
    });

    document.appendChild(doctype);

    // Create an html element in the HTML namespace, and append it to doc.
    const htmlElement = document.createElementNS(HTML_NS, "html");
    document.appendChild(htmlElement);

    // Create a head element in the HTML namespace, and append it to the html
    // element created in the previous step.
    const headElement = document.createElement("head");
    htmlElement.appendChild(headElement);

    // If the title argument is not omitted:
    if (title !== undefined) {
      // Create a title element in the HTML namespace, and append it to the head
      // element created in the previous step.
      const titleElement = document.createElement("title");
      headElement.appendChild(titleElement);

      // Create a Text node, set its data to title (which could be the empty
      // string), and append it to the title element created in the previous step.
      titleElement.appendChild(document.createTextNode(title));
    }

    // Create a body element in the HTML namespace, and append it to the html
    // element created in the earlier step.
    htmlElement.appendChild(document.createElement("body"));

    // doc's origin is an alias to the origin of the context object's associated
    // document, and doc's effective script origin is an alias to the effective
    // script origin of the context object's associated document.

    return document;
  }

  _removeFeature(feature, version) {
    feature = feature.toLowerCase();
    if (this._features[feature]) {
      if (version) {
        const versions = this._features[feature];
        for (let j = 0; j < versions.length; j++) {
          if (versions[j] === version) {
            versions.splice(j, 1);
            return;
          }
        }
      } else {
        delete this._features[feature];
      }
    }
  }

  _addFeature(feature, version) {
    feature = feature.toLowerCase();

    if (version) {
      if (!this._features[feature]) {
        this._features[feature] = [];
      }

      if (version instanceof Array) {
        Array.prototype.push.apply(this._features[feature], version);
      } else {
        this._features[feature].push(version);
      }
    } else {
      this._features[feature] = [];
    }
  }

  _hasFeature(feature, version) {
    feature = feature ? feature.toLowerCase() : "";
    const versions = this._features[feature] || false;

    if (!version && versions.length && versions.length > 0) {
      return true;
    } else if (typeof versions === "string") {
      return versions === version;
    } else if (versions.indexOf && versions.length > 0) {
      for (let i = 0; i < versions.length; i++) {
        const found = versions[i] instanceof RegExp ? versions[i].test(version) : versions[i] === version;
        if (found) {
          return true;
        }
      }
      return false;
    }

    return false;
  }
}

module.exports = {
  implementation: DOMImplementationImpl
};
