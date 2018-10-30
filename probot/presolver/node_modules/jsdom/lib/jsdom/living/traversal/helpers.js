"use strict";
const DOMException = require("domexception");
const idlUtils = require("../generated/utils");
const conversions = require("webidl-conversions");

// TODO: Once NodeFilter is ported to IDL method, use those instead.
exports.FILTER_ACCEPT = 1; // NodeFilter.FILTER_ACCEPT
exports.FILTER_REJECT = 2; // NodeFilter.FILTER_REJECT
exports.FILTER_SKIP = 3; // NodeFilter.FILTER_SKIP

exports.filter = (nodeIteratorOrTreeWalkerImpl, nodeImpl) => {
  if (nodeIteratorOrTreeWalkerImpl._active) {
    throw new DOMException("Recursive node filtering", "InvalidStateError");
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
    if (typeof filter === "function") {
      result = filter(idlUtils.wrapperForImpl(nodeImpl));
    } else {
      result = filter.acceptNode(idlUtils.wrapperForImpl(nodeImpl));
    }
  } finally {
    nodeIteratorOrTreeWalkerImpl._active = false;
  }

  result = conversions["unsigned short"](result);

  return result;
};
