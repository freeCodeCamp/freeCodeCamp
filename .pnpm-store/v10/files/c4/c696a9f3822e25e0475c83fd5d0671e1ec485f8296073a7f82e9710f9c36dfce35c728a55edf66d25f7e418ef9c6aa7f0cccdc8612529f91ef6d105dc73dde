"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByPlaceholderText = exports.queryAllByPlaceholderText = exports.getByPlaceholderText = exports.getAllByPlaceholderText = exports.findByPlaceholderText = exports.findAllByPlaceholderText = void 0;
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
const queryAllByPlaceholderText = (...args) => {
  (0, _helpers.checkContainerType)(args[0]);
  return (0, _allUtils.queryAllByAttribute)('placeholder', ...args);
};
const getMultipleError = (c, text) => `Found multiple elements with the placeholder text of: ${text}`;
const getMissingError = (c, text) => `Unable to find an element with the placeholder text of: ${text}`;
const queryAllByPlaceholderTextWithSuggestions = exports.queryAllByPlaceholderText = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByPlaceholderText, queryAllByPlaceholderText.name, 'queryAll');
const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = (0, _allUtils.buildQueries)(queryAllByPlaceholderText, getMultipleError, getMissingError);
exports.findByPlaceholderText = findByPlaceholderText;
exports.findAllByPlaceholderText = findAllByPlaceholderText;
exports.getByPlaceholderText = getByPlaceholderText;
exports.getAllByPlaceholderText = getAllByPlaceholderText;
exports.queryByPlaceholderText = queryByPlaceholderText;