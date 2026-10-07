"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_NODE = void 0;
exports.checkContainerType = checkContainerType;
exports.getDocument = getDocument;
exports.getWindowFromNode = getWindowFromNode;
exports.jestFakeTimersAreEnabled = jestFakeTimersAreEnabled;
// Constant node.nodeType for text nodes, see:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
const TEXT_NODE = exports.TEXT_NODE = 3;
function jestFakeTimersAreEnabled() {
  /* istanbul ignore else */
  // eslint-disable-next-line
  if (typeof jest !== 'undefined' && jest !== null) {
    return (
      // legacy timers
      setTimeout._isMockFunction === true ||
      // modern timers
      // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    );
  }
  // istanbul ignore next
  return false;
}
function getDocument() {
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    throw new Error('Could not find default container');
  }
  return window.document;
}
function getWindowFromNode(node) {
  if (node.defaultView) {
    // node is document
    return node.defaultView;
  } else if (node.ownerDocument && node.ownerDocument.defaultView) {
    // node is a DOM node
    return node.ownerDocument.defaultView;
  } else if (node.window) {
    // node is window
    return node.window;
  } else if (node.ownerDocument && node.ownerDocument.defaultView === null) {
    throw new Error(`It looks like the window object is not available for the provided node.`);
  } else if (node.then instanceof Function) {
    throw new Error(`It looks like you passed a Promise object instead of a DOM node. Did you do something like \`fireEvent.click(screen.findBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`, or await the findBy query \`fireEvent.click(await screen.findBy...\`?`);
  } else if (Array.isArray(node)) {
    throw new Error(`It looks like you passed an Array instead of a DOM node. Did you do something like \`fireEvent.click(screen.getAllBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`?`);
  } else if (typeof node.debug === 'function' && typeof node.logTestingPlaygroundURL === 'function') {
    throw new Error(`It looks like you passed a \`screen\` object. Did you do something like \`fireEvent.click(screen, ...\` when you meant to use a query, e.g. \`fireEvent.click(screen.getBy..., \`?`);
  } else {
    // The user passed something unusual to a calling function
    throw new Error(`The given node is not an Element, the node type is: ${typeof node}.`);
  }
}
function checkContainerType(container) {
  if (!container || !(typeof container.querySelector === 'function') || !(typeof container.querySelectorAll === 'function')) {
    throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${getTypeName(container)}.`);
  }
  function getTypeName(object) {
    if (typeof object === 'object') {
      return object === null ? 'null' : object.constructor.name;
    }
    return typeof object;
  }
}