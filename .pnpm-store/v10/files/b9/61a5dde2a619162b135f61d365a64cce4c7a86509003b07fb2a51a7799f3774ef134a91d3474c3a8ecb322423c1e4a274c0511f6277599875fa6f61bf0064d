/**
 * Returns the global window object associated with provided element.
 */
function getWindowOf(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  const ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView

  // Return the local window object if it's not possible extract one from
  // provided element.
  return ownerGlobal || window
};

export default getWindowOf
