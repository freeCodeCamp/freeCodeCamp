"use strict";
const whatwgURL = require("whatwg-url");

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
    return exports.documentBaseURL(document._defaultView._parent._document);
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

  const baseHrefAttribute = baseElement.getAttribute("href");
  const result = whatwgURL.parseURL(baseHrefAttribute, { baseURL: fallbackBaseURL });
  return result === null ? fallbackBaseURL : result;
}
