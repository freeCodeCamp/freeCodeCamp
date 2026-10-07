"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByTitle = exports.queryAllByTitle = exports.getByTitle = exports.getAllByTitle = exports.findByTitle = exports.findAllByTitle = void 0;
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
const isSvgTitle = node => {
  var _node$parentElement;
  return node.tagName.toLowerCase() === 'title' && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === 'svg';
};
const queryAllByTitle = (container, text, {
  exact = true,
  collapseWhitespace,
  trim,
  normalizer
} = {}) => {
  (0, _helpers.checkContainerType)(container);
  const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll('[title], svg > title')).filter(node => matcher(node.getAttribute('title'), node, text, matchNormalizer) || isSvgTitle(node) && matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
};
const getMultipleError = (c, title) => `Found multiple elements with the title: ${title}.`;
const getMissingError = (c, title) => `Unable to find an element with the title: ${title}.`;
const queryAllByTitleWithSuggestions = exports.queryAllByTitle = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTitle, queryAllByTitle.name, 'queryAll');
const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = (0, _allUtils.buildQueries)(queryAllByTitle, getMultipleError, getMissingError);
exports.findByTitle = findByTitle;
exports.findAllByTitle = findAllByTitle;
exports.getByTitle = getByTitle;
exports.getAllByTitle = getAllByTitle;
exports.queryByTitle = queryByTitle;