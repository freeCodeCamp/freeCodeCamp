"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByText = exports.queryAllByText = exports.getByText = exports.getAllByText = exports.findByText = exports.findAllByText = void 0;
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
const queryAllByText = (container, text, {
  selector = '*',
  exact = true,
  collapseWhitespace,
  trim,
  ignore = (0, _allUtils.getConfig)().defaultIgnore,
  normalizer
} = {}) => {
  (0, _helpers.checkContainerType)(container);
  const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  let baseArray = [];
  if (typeof container.matches === 'function' && container.matches(selector)) {
    baseArray = [container];
  }
  return [...baseArray, ...Array.from(container.querySelectorAll(selector))]
  // TODO: `matches` according lib.dom.d.ts can get only `string` but according our code it can handle also boolean :)
  .filter(node => !ignore || !node.matches(ignore)).filter(node => matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
};
const getMultipleError = (c, text) => `Found multiple elements with the text: ${text}`;
const getMissingError = (c, text, options = {}) => {
  const {
    collapseWhitespace,
    trim,
    normalizer,
    selector
  } = options;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  const normalizedText = matchNormalizer(text.toString());
  const isNormalizedDifferent = normalizedText !== text.toString();
  const isCustomSelector = (selector ?? '*') !== '*';
  return `Unable to find an element with the text: ${isNormalizedDifferent ? `${normalizedText} (normalized from '${text}')` : text}${isCustomSelector ? `, which matches selector '${selector}'` : ''}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`;
};
const queryAllByTextWithSuggestions = exports.queryAllByText = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByText, queryAllByText.name, 'queryAll');
const [queryByText, getAllByText, getByText, findAllByText, findByText] = (0, _allUtils.buildQueries)(queryAllByText, getMultipleError, getMissingError);
exports.findByText = findByText;
exports.findAllByText = findAllByText;
exports.getByText = getByText;
exports.getAllByText = getAllByText;
exports.queryByText = queryByText;