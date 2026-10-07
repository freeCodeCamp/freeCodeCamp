"use strict";

const nwsapi = require("nwsapi");

const idlUtils = require("../generated/utils");

function initNwsapi(node) {
  const { _globalObject, _ownerDocument } = node;

  return nwsapi({
    document: _ownerDocument,
    DOMException: _globalObject.DOMException
  });
}

exports.matchesDontThrow = (elImpl, selector) => {
  const document = elImpl._ownerDocument;

  if (!document._nwsapiDontThrow) {
    document._nwsapiDontThrow = initNwsapi(elImpl);
    document._nwsapiDontThrow.configure({
      LOGERRORS: false,
      VERBOSITY: false,
      IDS_DUPES: true,
      MIXEDCASE: true
    });
  }

  return document._nwsapiDontThrow.match(selector, idlUtils.wrapperForImpl(elImpl));
};

// nwsapi gets `document.documentElement` at creation-time, so we have to initialize lazily, since in the initial
// stages of Document initialization, there is no documentElement present yet.
exports.addNwsapi = parentNode => {
  const document = parentNode._ownerDocument;

  if (!document._nwsapi) {
    document._nwsapi = initNwsapi(parentNode);
    document._nwsapi.configure({
      LOGERRORS: false,
      IDS_DUPES: true,
      MIXEDCASE: true
    });
  }

  return document._nwsapi;
};
