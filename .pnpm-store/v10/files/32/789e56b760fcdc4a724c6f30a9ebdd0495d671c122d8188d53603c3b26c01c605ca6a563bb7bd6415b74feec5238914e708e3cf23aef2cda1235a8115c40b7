"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildQueries = buildQueries;
exports.getElementError = getElementError;
exports.getMultipleElementsFoundError = getMultipleElementsFoundError;
exports.makeFindQuery = makeFindQuery;
exports.makeGetAllQuery = makeGetAllQuery;
exports.makeSingleQuery = makeSingleQuery;
exports.queryAllByAttribute = queryAllByAttribute;
exports.queryByAttribute = queryByAttribute;
exports.wrapSingleQueryWithSuggestion = exports.wrapAllByQueryWithSuggestion = void 0;
var _suggestions = require("./suggestions");
var _matches = require("./matches");
var _waitFor = require("./wait-for");
var _config = require("./config");
function getElementError(message, container) {
  return (0, _config.getConfig)().getElementError(message, container);
}
function getMultipleElementsFoundError(message, container) {
  return getElementError(`${message}\n\n(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`, container);
}
function queryAllByAttribute(attribute, container, text, {
  exact = true,
  collapseWhitespace,
  trim,
  normalizer
} = {}) {
  const matcher = exact ? _matches.matches : _matches.fuzzyMatches;
  const matchNormalizer = (0, _matches.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll(`[${attribute}]`)).filter(node => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
}
function queryByAttribute(attribute, container, text, options) {
  const els = queryAllByAttribute(attribute, container, text, options);
  if (els.length > 1) {
    throw getMultipleElementsFoundError(`Found multiple elements by [${attribute}=${text}]`, container);
  }
  return els[0] || null;
}

// this accepts a query function and returns a function which throws an error
// if more than one elements is returned, otherwise it returns the first
// element or null
function makeSingleQuery(allQuery, getMultipleError) {
  return (container, ...args) => {
    const els = allQuery(container, ...args);
    if (els.length > 1) {
      const elementStrings = els.map(element => getElementError(null, element).message).join('\n\n');
      throw getMultipleElementsFoundError(`${getMultipleError(container, ...args)}

Here are the matching elements:

${elementStrings}`, container);
    }
    return els[0] || null;
  };
}
function getSuggestionError(suggestion, container) {
  return (0, _config.getConfig)().getElementError(`A better query is available, try this:
${suggestion.toString()}
`, container);
}

// this accepts a query function and returns a function which throws an error
// if an empty list of elements is returned
function makeGetAllQuery(allQuery, getMissingError) {
  return (container, ...args) => {
    const els = allQuery(container, ...args);
    if (!els.length) {
      throw (0, _config.getConfig)().getElementError(getMissingError(container, ...args), container);
    }
    return els;
  };
}

// this accepts a getter query function and returns a function which calls
// waitFor and passing a function which invokes the getter.
function makeFindQuery(getter) {
  return (container, text, options, waitForOptions) => {
    return (0, _waitFor.waitFor)(() => {
      return getter(container, text, options);
    }, {
      container,
      ...waitForOptions
    });
  };
}
const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) => (container, ...args) => {
  const element = query(container, ...args);
  const [{
    suggest = (0, _config.getConfig)().throwSuggestions
  } = {}] = args.slice(-1);
  if (element && suggest) {
    const suggestion = (0, _suggestions.getSuggestedQuery)(element, variant);
    if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
      throw getSuggestionError(suggestion.toString(), container);
    }
  }
  return element;
};
exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion;
const wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) => (container, ...args) => {
  const els = query(container, ...args);
  const [{
    suggest = (0, _config.getConfig)().throwSuggestions
  } = {}] = args.slice(-1);
  if (els.length && suggest) {
    // get a unique list of all suggestion messages.  We are only going to make a suggestion if
    // all the suggestions are the same
    const uniqueSuggestionMessages = [...new Set(els.map(element => (0, _suggestions.getSuggestedQuery)(element, variant)?.toString()))];
    if (
    // only want to suggest if all the els have the same suggestion.
    uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
    (0, _suggestions.getSuggestedQuery)(els[0], variant).queryName)) {
      throw getSuggestionError(uniqueSuggestionMessages[0], container);
    }
  }
  return els;
};

// TODO: This deviates from the published declarations
// However, the implementation always required a dyadic (after `container`) not variadic `queryAllBy` considering the implementation of `makeFindQuery`
// This is at least statically true and can be verified by accepting `QueryMethod<Arguments, HTMLElement[]>`
exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion;
function buildQueries(queryAllBy, getMultipleError, getMissingError) {
  const queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, 'query');
  const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
  const getBy = makeSingleQuery(getAllBy, getMultipleError);
  const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get');
  const getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace('query', 'get'), 'getAll');
  const findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'));
  const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'));
  return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
}