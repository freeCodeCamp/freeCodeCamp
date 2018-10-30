"use strict";
const { addConstants } = require("../utils");

module.exports = function (core) {
  // https://dom.spec.whatwg.org/#interface-nodefilter
  core.NodeFilter = function () {
    throw new TypeError("Illegal constructor");
  };

  /**
   * Returns an unsigned short that will be used to tell if a given Node must
   * be accepted or not by the NodeIterator or TreeWalker iteration
   * algorithm. This method is expected to be written by the user of a
   * NodeFilter.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
   * @interface
   *
   * @param  {Node} node DOM Node
   * @return {FILTER_ACCEPT|FILTER_REJECT|FILTER_SKIP}
   */
  core.NodeFilter.acceptNode = function (/* node */) {
    throw new Error("This method is expected to be written by the user of a NodeFilter.");
  };

  addConstants(core.NodeFilter, {
    // Constants for whatToShow
    SHOW_ALL: 0xFFFFFFFF,
    SHOW_ELEMENT: 0x00000001,
    SHOW_ATTRIBUTE: 0x00000002,
    SHOW_TEXT: 0x00000004,
    SHOW_CDATA_SECTION: 0x00000008,
    SHOW_ENTITY_REFERENCE: 0x00000010,
    SHOW_ENTITY: 0x00000020,
    SHOW_PROCESSING_INSTRUCTION: 0x00000040,
    SHOW_COMMENT: 0x00000080,
    SHOW_DOCUMENT: 0x00000100,
    SHOW_DOCUMENT_TYPE: 0x00000200,
    SHOW_DOCUMENT_FRAGMENT: 0x00000400,
    SHOW_NOTATION: 0x00000800,

    // Constants returned by acceptNode
    FILTER_ACCEPT: 1,
    FILTER_REJECT: 2,
    FILTER_SKIP: 3
  });
};
