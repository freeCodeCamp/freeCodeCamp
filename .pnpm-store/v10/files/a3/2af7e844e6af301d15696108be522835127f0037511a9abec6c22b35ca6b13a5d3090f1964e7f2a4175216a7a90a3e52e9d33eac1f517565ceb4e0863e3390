"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByTestId = exports.queryAllByTestId = exports.getByTestId = exports.getAllByTestId = exports.findByTestId = exports.findAllByTestId = void 0;
var _helpers = require("../helpers");
var _queryHelpers = require("../query-helpers");
var _allUtils = require("./all-utils");
const getTestIdAttribute = () => (0, _allUtils.getConfig)().testIdAttribute;
const queryAllByTestId = (...args) => {
  (0, _helpers.checkContainerType)(args[0]);
  return (0, _allUtils.queryAllByAttribute)(getTestIdAttribute(), ...args);
};
const getMultipleError = (c, id) => `Found multiple elements by: [${getTestIdAttribute()}="${id}"]`;
const getMissingError = (c, id) => `Unable to find an element by: [${getTestIdAttribute()}="${id}"]`;
const queryAllByTestIdWithSuggestions = exports.queryAllByTestId = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTestId, queryAllByTestId.name, 'queryAll');
const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = (0, _allUtils.buildQueries)(queryAllByTestId, getMultipleError, getMissingError);
exports.findByTestId = findByTestId;
exports.findAllByTestId = findAllByTestId;
exports.getByTestId = getByTestId;
exports.getAllByTestId = getAllByTestId;
exports.queryByTestId = queryByTestId;