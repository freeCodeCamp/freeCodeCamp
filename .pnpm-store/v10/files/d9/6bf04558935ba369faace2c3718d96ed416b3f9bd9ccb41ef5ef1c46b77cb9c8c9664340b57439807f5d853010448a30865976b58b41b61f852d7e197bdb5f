"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripSpacesBefore = exports.stripSpacesAfter = exports.stripSpaces = exports.replaceWithSpaceBefore = exports.replaceWithSpaceAfter = exports.replaceWithSpace = exports.addSpaceBefore = exports.addSpaceAfter = exports.addSpace = void 0;

const stripSpacesBefore = (node, spaces) => {
  return fixer => {
    return fixer.removeRange([node.range[0] - spaces, node.range[0]]);
  };
};

exports.stripSpacesBefore = stripSpacesBefore;

const stripSpacesAfter = (node, spaces) => {
  return fixer => {
    return fixer.removeRange([node.range[1], node.range[1] + spaces]);
  };
};

exports.stripSpacesAfter = stripSpacesAfter;

const addSpaceBefore = node => {
  return fixer => {
    return fixer.insertTextBefore(node, ' ');
  };
};

exports.addSpaceBefore = addSpaceBefore;

const addSpaceAfter = node => {
  return fixer => {
    return fixer.insertTextAfter(node, ' ');
  };
};

exports.addSpaceAfter = addSpaceAfter;

const replaceWithSpaceBefore = (node, spaces) => {
  return fixer => {
    return fixer.replaceTextRange([node.range[0] - spaces, node.range[0]], ' ');
  };
};

exports.replaceWithSpaceBefore = replaceWithSpaceBefore;

const replaceWithSpaceAfter = (node, spaces) => {
  return fixer => {
    return fixer.replaceTextRange([node.range[1], node.range[1] + spaces], ' ');
  };
};

exports.replaceWithSpaceAfter = replaceWithSpaceAfter;

const stripSpaces = (direction, node, spaces) => {
  if (direction === 'before') {
    return stripSpacesBefore(node, spaces);
  }

  return stripSpacesAfter(node, spaces);
};

exports.stripSpaces = stripSpaces;

const addSpace = (direction, node) => {
  if (direction === 'before') {
    return addSpaceBefore(node);
  }

  return addSpaceAfter(node);
};

exports.addSpace = addSpace;

const replaceWithSpace = (direction, node, spaces) => {
  if (direction === 'before') {
    return replaceWithSpaceBefore(node, spaces);
  }

  return replaceWithSpaceAfter(node, spaces);
};

exports.replaceWithSpace = replaceWithSpace;