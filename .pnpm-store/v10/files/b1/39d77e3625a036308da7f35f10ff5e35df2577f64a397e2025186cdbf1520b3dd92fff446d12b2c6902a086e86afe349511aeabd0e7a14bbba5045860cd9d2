"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDOMElementFilter;
exports.test = void 0;
/**
 * Source: https://github.com/facebook/jest/blob/e7bb6a1e26ffab90611b2593912df15b69315611/packages/pretty-format/src/plugins/DOMElement.ts
 */
/* eslint-disable -- trying to stay as close to the original as possible */
/* istanbul ignore file */

function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
// Return empty string if keys is empty.
const printProps = (keys, props, config, indentation, depth, refs, printer) => {
  const indentationNext = indentation + config.indent;
  const colors = config.colors;
  return keys.map(key => {
    const value = props[key];
    let printed = printer(value, config, indentationNext, depth, refs);
    if (typeof value !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
      }
      printed = '{' + printed + '}';
    }
    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
  }).join('');
};

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const NodeTypeTextNode = 3;

// Return empty string if children is empty.
const printChildren = (children, config, indentation, depth, refs, printer) => children.map(child => {
  const printedChild = typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs);
  if (printedChild === '' && typeof child === 'object' && child !== null && child.nodeType !== NodeTypeTextNode) {
    // A plugin serialized this Node to '' meaning we should ignore it.
    return '';
  }
  return config.spacingOuter + indentation + printedChild;
}).join('');
const printText = (text, config) => {
  const contentColor = config.colors.content;
  return contentColor.open + escapeHTML(text) + contentColor.close;
};
const printComment = (comment, config) => {
  const commentColor = config.colors.comment;
  return commentColor.open + '<!--' + escapeHTML(comment) + '-->' + commentColor.close;
};

// Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
const printElement = (type, printedProps, printedChildren, config, indentation) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
};
const printElementAsLeaf = (type, config) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
};
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
const testNode = val => {
  const constructorName = val.constructor.name;
  const {
    nodeType,
    tagName
  } = val;
  const isCustomElement = typeof tagName === 'string' && tagName.includes('-') || typeof val.hasAttribute === 'function' && val.hasAttribute('is');
  return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === 'Text' || nodeType === COMMENT_NODE && constructorName === 'Comment' || nodeType === FRAGMENT_NODE && constructorName === 'DocumentFragment';
};
const test = val => {
  var _val$constructor;
  return (val == null || (_val$constructor = val.constructor) == null ? void 0 : _val$constructor.name) && testNode(val);
};
exports.test = test;
function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}
function createDOMElementFilter(filterNode) {
  return {
    test: val => {
      var _val$constructor2;
      return (val == null || (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) && testNode(val);
    },
    serialize: (node, config, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return printText(node.data, config);
      }
      if (nodeIsComment(node)) {
        return printComment(node.data, config);
      }
      const type = nodeIsFragment(node) ? `DocumentFragment` : node.tagName.toLowerCase();
      if (++depth > config.maxDepth) {
        return printElementAsLeaf(type, config);
      }
      return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes).map(attr => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children).filter(filterNode), config, indentation + config.indent, depth, refs, printer), config, indentation);
    }
  };
}