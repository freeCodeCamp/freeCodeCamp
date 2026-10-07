"use strict";
const DOMException = require("domexception/webidl2js-wrapper");
const conversions = require("webidl-conversions");

exports.FILTER_ACCEPT = 1; // NodeFilter.FILTER_ACCEPT
exports.FILTER_REJECT = 2; // NodeFilter.FILTER_REJECT
exports.FILTER_SKIP = 3; // NodeFilter.FILTER_SKIP

exports.filter = (nodeIteratorOrTreeWalkerImpl, nodeImpl) => {
  if (nodeIteratorOrTreeWalkerImpl._active) {
    throw DOMException.create(nodeIteratorOrTreeWalkerImpl._globalObject, [
      "Recursive node filtering",
      "InvalidStateError"
    ]);
  }

  const n = nodeImpl.nodeType - 1;

  if (!((1 << n) & nodeIteratorOrTreeWalkerImpl.whatToShow)) {
    return exports.FILTER_SKIP;
  }

  // Saving in a variable is important so we don't accidentally call it as a method later.
  const { filter } = nodeIteratorOrTreeWalkerImpl;

  if (filter === null) {
    return exports.FILTER_ACCEPT;
  }

  nodeIteratorOrTreeWalkerImpl._active = true;

  let result;

  // https://github.com/whatwg/dom/issues/494
  try {
    result = filter(nodeImpl);
  } finally {
    nodeIteratorOrTreeWalkerImpl._active = false;
  }

  result = conversions["unsigned short"](result);

  return result;
};
