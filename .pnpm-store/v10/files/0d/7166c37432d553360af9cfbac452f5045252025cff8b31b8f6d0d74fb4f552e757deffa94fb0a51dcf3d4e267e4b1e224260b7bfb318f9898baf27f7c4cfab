'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortTrees = sortTrees;
exports.recurseTree = recurseTree;
exports.getFormattedOutput = getFormattedOutput;


// public


// types
function sortTrees(trees) {
  return trees.sort(function (tree1, tree2) {
    return tree1.name.localeCompare(tree2.name);
  });
}

function recurseTree(tree, prefix, recurseFunc) {
  const treeLen = tree.length;
  const treeEnd = treeLen - 1;
  for (let i = 0; i < treeLen; i++) {
    const atEnd = i === treeEnd;
    recurseFunc(tree[i], prefix + getLastIndentChar(atEnd), prefix + getNextIndentChar(atEnd));
  }
}

function getFormattedOutput(fmt) {
  const item = formatColor(fmt.color, fmt.name, fmt.formatter);
  const suffix = getSuffix(fmt.hint, fmt.formatter);
  return `${fmt.prefix}─ ${item}${suffix}\n`;
}

function getNextIndentChar(end) {
  return end ? '   ' : '│  ';
}

function getLastIndentChar(end) {
  return end ? '└' : '├';
}

function getSuffix(hint, formatter) {
  return hint ? ` (${formatter.grey(hint)})` : '';
}

function formatColor(color, strToFormat, formatter) {
  return color ? formatter[color](strToFormat) : strToFormat;
}