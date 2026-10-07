"use strict";

exports.__esModule = true;
exports.applyHtmlAndBodyAttributes = applyHtmlAndBodyAttributes;
exports.diffNodes = diffNodes;
exports.filterHeadProps = filterHeadProps;
exports.getValidHeadNodesAndAttributes = getValidHeadNodesAndAttributes;
exports.headExportValidator = headExportValidator;
exports.isElementType = isElementType;
exports.isEqualNode = isEqualNode;
exports.isValidNodeName = isValidNodeName;
exports.removeHtmlAndBodyAttributes = removeHtmlAndBodyAttributes;
exports.removePrevHeadElements = removePrevHeadElements;
exports.warnForInvalidTag = warnForInvalidTag;
var _constants = require("./constants");
/**
 * Filter the props coming from a page down to just the ones that are relevant for head.
 * This e.g. filters out properties that are undefined during SSR.
 */
function filterHeadProps(input) {
  return {
    location: {
      pathname: input.location.pathname
    },
    params: input.params,
    data: input.data || {},
    serverData: input.serverData,
    pageContext: input.pageContext
  };
}

/**
 * Throw error if Head export is not a valid function
 */
function headExportValidator(head) {
  if (typeof head !== `function`) throw new Error(`Expected "Head" export to be a function got "${typeof head}".`);
}

/**
 * Warn once for same messsage
 */
let warnOnce = _ => {};
if (process.env.NODE_ENV !== `production`) {
  const warnings = new Set();
  warnOnce = msg => {
    if (!warnings.has(msg)) {
      console.warn(msg);
    }
    warnings.add(msg);
  };
}

/**
 * Warn for invalid tags in Head which may have been directly added or introduced by `wrapRootElement`
 * @param {string} tagName
 */
function warnForInvalidTag(tagName) {
  if (process.env.NODE_ENV !== `production`) {
    const warning = createWarningForInvalidTag(tagName);
    warnOnce(warning);
  }
}
function createWarningForInvalidTag(tagName) {
  return `<${tagName}> is not a valid head element. Please use one of the following: ${_constants.VALID_NODE_NAMES.join(`, `)}.\n\nAlso make sure that wrapRootElement in gatsby-ssr/gatsby-browser doesn't contain UI elements: https://gatsby.dev/invalid-head-elements`;
}

/**
 * When a `nonce` is present on an element, browsers such as Chrome and Firefox strip it out of the
 * actual HTML attributes for security reasons *when the element is added to the document*. Thus,
 * given two equivalent elements that have nonces, `Element,isEqualNode()` will return false if one
 * of those elements gets added to the document. Although the `element.nonce` property will be the
 * same for both elements, the one that was added to the document will return an empty string for
 * its nonce HTML attribute value.
 *
 * This custom `isEqualNode()` function therefore removes the nonce value from the `newTag` before
 * comparing it to `oldTag`, restoring it afterwards.
 *
 * For more information, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1211471#c12
 */
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute(`nonce`);
    // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
    // be stripped if there is no content security policy response header that includes a nonce.
    if (nonce && !oldTag.getAttribute(`nonce`)) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute(`nonce`, ``);
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
function diffNodes({
  oldNodes,
  newNodes,
  onStale,
  onNew
}) {
  for (const existingHeadElement of oldNodes) {
    const indexInNewNodes = newNodes.findIndex(e => isEqualNode(e, existingHeadElement));
    if (indexInNewNodes === -1) {
      onStale(existingHeadElement);
    } else {
      // this node is re-created as-is, so we keep old node, and remove it from list of new nodes (as we handled it already here)
      newNodes.splice(indexInNewNodes, 1);
    }
  }

  // remaing new nodes didn't have matching old node, so need to be added
  for (const newNode of newNodes) {
    onNew(newNode);
  }
}
function getValidHeadNodesAndAttributes(rootNode, htmlAndBodyAttributes = {
  html: {},
  body: {}
}) {
  const seenIds = new Map();
  const validHeadNodes = [];
  for (const node of rootNode.childNodes) {
    var _node$attributes$getN, _node$attributes, _node$attributes$getN2, _node$attributes2, _node$attributes2$id;
    // Filter out non-element nodes before looping since we don't care about them
    if (!isElementType(node)) continue;
    const nodeName = (_node$attributes$getN = (_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : (_node$attributes$getN2 = _node$attributes.getNamedItem(_constants.HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY)) === null || _node$attributes$getN2 === void 0 ? void 0 : _node$attributes$getN2.value) !== null && _node$attributes$getN !== void 0 ? _node$attributes$getN : node.nodeName.toLowerCase();
    const id = (_node$attributes2 = node.attributes) === null || _node$attributes2 === void 0 ? void 0 : (_node$attributes2$id = _node$attributes2.id) === null || _node$attributes2$id === void 0 ? void 0 : _node$attributes2$id.value;
    if (isValidNodeName(nodeName)) {
      // <html> and <body> tags are treated differently, in that we don't render them, we only extract the attributes and apply them separetely
      if (nodeName === `html` || nodeName === `body`) {
        for (const attribute of node.attributes) {
          if (attribute.name === _constants.HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY) continue;
          const isStyleAttribute = attribute.name === `style`;

          // Merge attributes for same nodeName from previous loop iteration
          htmlAndBodyAttributes[nodeName] = {
            ...htmlAndBodyAttributes[nodeName]
          };
          if (!isStyleAttribute) {
            htmlAndBodyAttributes[nodeName][attribute.name] = attribute.value;
          }

          // If there is already a style attribute, we need to merge them as otherwise the last one will "win"
          if (isStyleAttribute) {
            var _htmlAndBodyAttribute;
            htmlAndBodyAttributes[nodeName].style = `${(_htmlAndBodyAttribute = htmlAndBodyAttributes[nodeName]) !== null && _htmlAndBodyAttribute !== void 0 && _htmlAndBodyAttribute.style ? htmlAndBodyAttributes[nodeName].style : ``}${attribute.value} `;
          }
        }
      } else {
        let clonedNode = node.cloneNode(true);
        clonedNode.setAttribute(`data-gatsby-head`, true);
        if (clonedNode.getAttribute(_constants.ITEM_PROP_WORKAROUND_KEY) === _constants.ITEM_PROP_WORKAROUND_VALUE) {
          clonedNode.removeAttribute(_constants.ITEM_PROP_WORKAROUND_KEY);
        }

        // This is a hack to make script tags work
        // TODO(serhalp): Explain what this is solving
        if (clonedNode.nodeName.toLowerCase() === `script`) {
          clonedNode = cloneNodeWithoutNS(clonedNode);
        }
        // Duplicate ids are not allowed in the head, so we need to dedupe them
        if (id) {
          if (!seenIds.has(id)) {
            validHeadNodes.push(clonedNode);
            seenIds.set(id, validHeadNodes.length - 1);
          } else {
            var _validHeadNodes$index;
            const indexOfPreviouslyInsertedNode = seenIds.get(id);
            (_validHeadNodes$index = validHeadNodes[indexOfPreviouslyInsertedNode].parentNode) === null || _validHeadNodes$index === void 0 ? void 0 : _validHeadNodes$index.removeChild(validHeadNodes[indexOfPreviouslyInsertedNode]);
            validHeadNodes[indexOfPreviouslyInsertedNode] = clonedNode;
          }
        } else {
          validHeadNodes.push(clonedNode);
        }
      }
    } else {
      warnForInvalidTag(nodeName);
    }
    if (node.childNodes.length) {
      validHeadNodes.push(...getValidHeadNodesAndAttributes(node, htmlAndBodyAttributes).validHeadNodes);
    }
  }
  return {
    validHeadNodes,
    htmlAndBodyAttributes
  };
}

/**
 * Recreate an element in the HTML namespace.
 *
 * This is similar to `cloneNode()` but reinitializes immutable properties like the namespace.
 */
function cloneNodeWithoutNS(node) {
  const clonedNode = document.createElement(node.nodeName);
  for (const attr of node.attributes) {
    clonedNode.setAttribute(attr.name, attr.value);
  }
  clonedNode.innerHTML = node.innerHTML;
  return clonedNode;
}
function isValidNodeName(nodeName) {
  return _constants.VALID_NODE_NAMES.includes(nodeName);
}
/*
 * For Head, we only care about element nodes(type = 1), so this util is used to skip over non-element nodes
 * For Node type, see https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
 */
function isElementType(node) {
  return node.nodeType === 1;
}

/**
 * Removes all the head elements that were added by `Head`
 */
function removePrevHeadElements() {
  const prevHeadNodes = document.querySelectorAll(`[data-gatsby-head]`);
  for (const node of prevHeadNodes) {
    node.parentNode.removeChild(node);
  }
}
function applyHtmlAndBodyAttributes(htmlAndBodyAttributes) {
  if (!htmlAndBodyAttributes) return;
  const {
    html,
    body
  } = htmlAndBodyAttributes;
  const htmlElement = document.querySelector(`html`);
  if (htmlElement) {
    Object.entries(html).forEach(([attributeName, attributeValue]) => {
      htmlElement.setAttribute(attributeName, attributeValue);
    });
  }
  const bodyElement = document.querySelector(`body`);
  if (bodyElement) {
    Object.entries(body).forEach(([attributeName, attributeValue]) => {
      bodyElement.setAttribute(attributeName, attributeValue);
    });
  }
}
function removeHtmlAndBodyAttributes(htmlAndBodyattributeList) {
  if (!htmlAndBodyattributeList) return;
  const {
    html,
    body
  } = htmlAndBodyattributeList;
  if (html) {
    const htmlElement = document.querySelector(`html`);
    html.forEach(attributeName => {
      if (htmlElement) {
        htmlElement.removeAttribute(attributeName);
      }
    });
  }
  if (body) {
    const bodyElement = document.querySelector(`body`);
    body.forEach(attributeName => {
      if (bodyElement) {
        bodyElement.removeAttribute(attributeName);
      }
    });
  }
}
//# sourceMappingURL=utils.js.map