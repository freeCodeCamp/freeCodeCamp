"use strict";

const DOMException = require("domexception");
const nwsapi = require("nwsapi");
const idlUtils = require("../generated/utils");

exports.matchesDontThrow = (elImpl, selector) => {
  const document = elImpl._ownerDocument;

  if (!document._nwsapiDontThrow) {
    document._nwsapiDontThrow = nwsapi({
      document,
      DOMException
    });
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
    document._nwsapi = nwsapi({
      document,
      DOMException
    });
    document._nwsapi.configure({
      LOGERRORS: false,
      IDS_DUPES: true,
      MIXEDCASE: true
    });
  }

  return document._nwsapi;
};
