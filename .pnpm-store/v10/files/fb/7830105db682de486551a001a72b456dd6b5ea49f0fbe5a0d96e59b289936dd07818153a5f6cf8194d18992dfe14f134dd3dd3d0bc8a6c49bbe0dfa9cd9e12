"use strict";

function duplicateNode(node) {
  return {
    type: node.type,
    children: [],
    tagName: node.tagName,
    value: node.value,
    properties: node.properties
  };
}
function getConcatenatedValue(node) {
  if (!node) {
    return ``;
  }
  if (node.type === `text`) {
    return node.value;
  } else if (node.children && node.children.length) {
    return node.children.map(getConcatenatedValue).filter(value => value).join(``);
  }
  return ``;
}
function cloneTreeUntil(root, endCondition) {
  let clonedRoot;
  let endConditionMet = false;
  function preOrderTraversal(node) {
    if (endConditionMet || endCondition({
      root: clonedRoot,
      nextNode: node
    })) {
      endConditionMet = true;
      return;
    }
    const newNode = duplicateNode(node);
    if (clonedRoot) {
      clonedRoot.children.push(newNode);
    } else {
      clonedRoot = newNode;
    }
    if (node.children) {
      node.children.forEach(child => {
        clonedRoot = newNode;
        preOrderTraversal(child);
      });
      clonedRoot = newNode;
    }
  }
  preOrderTraversal(root);
  return clonedRoot;
}
function findLastTextNode(node, textNode) {
  if (node.type === `text`) {
    textNode = node;
  }
  if (node.children) {
    node.children.forEach(child => {
      const laterTextNode = findLastTextNode(child, textNode);
      if (laterTextNode !== textNode) {
        textNode = laterTextNode;
      }
    });
  }
  return textNode;
}
module.exports = {
  getConcatenatedValue,
  cloneTreeUntil,
  findLastTextNode
};