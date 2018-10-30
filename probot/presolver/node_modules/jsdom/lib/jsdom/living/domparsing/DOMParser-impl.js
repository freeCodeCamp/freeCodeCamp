"use strict";
const Document = require("../generated/Document");
const { applyDocumentFeatures } = require("../../browser/documentfeatures");

exports.implementation = class DOMParserImpl {
  parseFromString(string, contentType) {
    switch (String(contentType)) {
      case "text/html": {
        return createScriptingDisabledDocument("html", contentType, string);
      }

      case "text/xml":
      case "application/xml":
      case "application/xhtml+xml":
      case "image/svg+xml": {
        // TODO: use a strict XML parser (sax's strict mode might work?) and create parsererror elements
        try {
          return createScriptingDisabledDocument("xml", contentType, string);
        } catch (error) {
          const document = createScriptingDisabledDocument("xml", contentType);
          const element = document.createElementNS("http://www.mozilla.org/newlayout/xml/parsererror.xml", "parsererror");

          element.textContent = error.message;

          document.appendChild(element);
          return document;
        }
      }

      default:
        throw new TypeError("Invalid contentType");
    }
  }
};

function createScriptingDisabledDocument(parsingMode, contentType, string) {
  const document = Document.createImpl([], {
    options: {
      parsingMode,
      encoding: "UTF-8",
      contentType
      // TODO: somehow set URL to active document's URL
    }
  });

  // "scripting enabled" set to false
  applyDocumentFeatures(document, {
    FetchExternalResources: [],
    SkipExternalResources: false
  });

  if (string !== undefined) {
    document._htmlToDom.appendToDocument(string, document);
  }
  document.close();
  return document;
}
