"use strict";
const whatwgURL = require("whatwg-url");
const { implForWrapper } = require("../generated/utils");

exports.documentBaseURL = document => {
  // https://html.spec.whatwg.org/multipage/infrastructure.html#document-base-url

  const firstBase = document.querySelector("base[href]");
  const fallbackBaseURL = exports.fallbackBaseURL(document);

  if (firstBase === null) {
    return fallbackBaseURL;
  }

  return frozenBaseURL(firstBase, fallbackBaseURL);
};

exports.documentBaseURLSerialized = document => {
  return whatwgURL.serializeURL(exports.documentBaseURL(document));
};

exports.fallbackBaseURL = document => {
  // https://html.spec.whatwg.org/multipage/infrastructure.html#fallback-base-url

  // Unimplemented: <iframe srcdoc>

  if (document.URL === "about:blank" && document._defaultView &&
      document._defaultView._parent !== document._defaultView) {
    const parentDocument = implForWrapper(document._defaultView._parent._document);
    return exports.documentBaseURL(parentDocument);
  }

  return document._URL;
};

exports.parseURLToResultingURLRecord = (url, document) => {
  // https://html.spec.whatwg.org/#resolve-a-url

  // Encoding stuff ignored; always UTF-8 for us, for now.

  const baseURL = exports.documentBaseURL(document);

  return whatwgURL.parseURL(url, { baseURL });
  // This returns the resulting URL record; to get the resulting URL string, just serialize it.
};

function frozenBaseURL(baseElement, fallbackBaseURL) {
  // https://html.spec.whatwg.org/multipage/semantics.html#frozen-base-url
  // The spec is eager (setting the frozen base URL when things change); we are lazy (getting it when we need to)

  const baseHrefAttribute = baseElement.getAttributeNS(null, "href");
  const result = whatwgURL.parseURL(baseHrefAttribute, { baseURL: fallbackBaseURL });
  return result === null ? fallbackBaseURL : result;
}
