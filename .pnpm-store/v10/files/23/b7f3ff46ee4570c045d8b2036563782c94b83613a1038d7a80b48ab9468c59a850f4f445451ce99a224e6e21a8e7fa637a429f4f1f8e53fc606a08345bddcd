"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByAltText = exports.queryAllByAltText = exports.getByAltText = exports.getAllByAltText = exports.findByAltText = exports.findAllByAltText = void 0;
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
// Valid tags are img, input, area and custom elements
const VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i;
const queryAllByAltText = (container, alt, options = {}) => {
  (0, _helpers.checkContainerType)(container);
  return (0, _queryHelpers.queryAllByAttribute)('alt', container, alt, options).filter(node => VALID_TAG_REGEXP.test(node.tagName));
};
const getMultipleError = (c, alt) => `Found multiple elements with the alt text: ${alt}`;
const getMissingError = (c, alt) => `Unable to find an element with the alt text: ${alt}`;
const queryAllByAltTextWithSuggestions = exports.queryAllByAltText = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByAltText, queryAllByAltText.name, 'queryAll');
const [queryByAltText, getAllByAltText, getByAltText, findAllByAltText, findByAltText] = (0, _allUtils.buildQueries)(queryAllByAltText, getMultipleError, getMissingError);
exports.findByAltText = findByAltText;
exports.findAllByAltText = findAllByAltText;
exports.getByAltText = getByAltText;
exports.getAllByAltText = getAllByAltText;
exports.queryByAltText = queryByAltText;