"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByDisplayValue = exports.queryAllByDisplayValue = exports.getByDisplayValue = exports.getAllByDisplayValue = exports.findByDisplayValue = exports.findAllByDisplayValue = void 0;
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
const queryAllByDisplayValue = (container, value, {
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
  return Array.from(container.querySelectorAll(`input,textarea,select`)).filter(node => {
    if (node.tagName === 'SELECT') {
      const selectedOptions = Array.from(node.options).filter(option => option.selected);
      return selectedOptions.some(optionNode => matcher((0, _allUtils.getNodeText)(optionNode), optionNode, value, matchNormalizer));
    } else {
      return matcher(node.value, node, value, matchNormalizer);
    }
  });
};
const getMultipleError = (c, value) => `Found multiple elements with the display value: ${value}.`;
const getMissingError = (c, value) => `Unable to find an element with the display value: ${value}.`;
const queryAllByDisplayValueWithSuggestions = exports.queryAllByDisplayValue = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByDisplayValue, queryAllByDisplayValue.name, 'queryAll');
const [queryByDisplayValue, getAllByDisplayValue, getByDisplayValue, findAllByDisplayValue, findByDisplayValue] = (0, _allUtils.buildQueries)(queryAllByDisplayValue, getMultipleError, getMissingError);
exports.findByDisplayValue = findByDisplayValue;
exports.findAllByDisplayValue = findAllByDisplayValue;
exports.getByDisplayValue = getByDisplayValue;
exports.getAllByDisplayValue = getAllByDisplayValue;
exports.queryByDisplayValue = queryByDisplayValue;