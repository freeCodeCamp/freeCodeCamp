"use strict";

const xmlParser = require("./xml");
const htmlParser = require("./html");

// https://w3c.github.io/DOM-Parsing/#dfn-fragment-parsing-algorithm
function parseFragment(markup, contextElement) {
  const { _parsingMode } = contextElement._ownerDocument;

  let parseAlgorithm;
  if (_parsingMode === "html") {
    parseAlgorithm = htmlParser.parseFragment;
  } else if (_parsingMode === "xml") {
    parseAlgorithm = xmlParser.parseFragment;
  }

  // Note: HTML and XML fragment parsing algorithm already return a document fragments; no need to do steps 3 and 4
  return parseAlgorithm(markup, contextElement);
}

function parseIntoDocument(markup, ownerDocument) {
  const { _parsingMode } = ownerDocument;

  let parseAlgorithm;
  if (_parsingMode === "html") {
    parseAlgorithm = htmlParser.parseIntoDocument;
  } else if (_parsingMode === "xml") {
    parseAlgorithm = xmlParser.parseIntoDocument;
  }

  return parseAlgorithm(markup, ownerDocument);
}

module.exports = {
  parseFragment,
  parseIntoDocument
};
