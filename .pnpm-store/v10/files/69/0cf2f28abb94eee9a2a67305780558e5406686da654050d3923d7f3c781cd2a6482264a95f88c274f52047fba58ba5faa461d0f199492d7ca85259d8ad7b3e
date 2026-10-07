"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByLabelText = exports.queryAllByLabelText = exports.getByLabelText = exports.getAllByLabelText = exports.findByLabelText = exports.findAllByLabelText = void 0;
var _config = require("../config");
var _helpers = require("../helpers");
var _labelHelpers = require("../label-helpers");
var _allUtils = require("./all-utils");
function queryAllLabels(container) {
  return Array.from(container.querySelectorAll('label,input')).map(node => {
    return {
      node,
      textToMatch: (0, _labelHelpers.getLabelContent)(node)
    };
  }).filter(({
    textToMatch
  }) => textToMatch !== null);
}
const queryAllLabelsByText = (container, text, {
  exact = true,
  trim,
  collapseWhitespace,
  normalizer
} = {}) => {
  const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  const textToMatchByLabels = queryAllLabels(container);
  return textToMatchByLabels.filter(({
    node,
    textToMatch
  }) => matcher(textToMatch, node, text, matchNormalizer)).map(({
    node
  }) => node);
};
const queryAllByLabelText = (container, text, {
  selector = '*',
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
  const matchingLabelledElements = Array.from(container.querySelectorAll('*')).filter(element => {
    return (0, _labelHelpers.getRealLabels)(element).length || element.hasAttribute('aria-labelledby');
  }).reduce((labelledElements, labelledElement) => {
    const labelList = (0, _labelHelpers.getLabels)(container, labelledElement, {
      selector
    });
    labelList.filter(label => Boolean(label.formControl)).forEach(label => {
      if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl) {
        labelledElements.push(label.formControl);
      }
    });
    const labelsValue = labelList.filter(label => Boolean(label.content)).map(label => label.content);
    if (matcher(labelsValue.join(' '), labelledElement, text, matchNormalizer)) {
      labelledElements.push(labelledElement);
    }
    if (labelsValue.length > 1) {
      labelsValue.forEach((labelValue, index) => {
        if (matcher(labelValue, labelledElement, text, matchNormalizer)) {
          labelledElements.push(labelledElement);
        }
        const labelsFiltered = [...labelsValue];
        labelsFiltered.splice(index, 1);
        if (labelsFiltered.length > 1) {
          if (matcher(labelsFiltered.join(' '), labelledElement, text, matchNormalizer)) {
            labelledElements.push(labelledElement);
          }
        }
      });
    }
    return labelledElements;
  }, []).concat((0, _allUtils.queryAllByAttribute)('aria-label', container, text, {
    exact,
    normalizer: matchNormalizer
  }));
  return Array.from(new Set(matchingLabelledElements)).filter(element => element.matches(selector));
};

// the getAll* query would normally look like this:
// const getAllByLabelText = makeGetAllQuery(
//   queryAllByLabelText,
//   (c, text) => `Unable to find a label with the text of: ${text}`,
// )
// however, we can give a more helpful error message than the generic one,
// so we're writing this one out by hand.
const getAllByLabelText = (container, text, ...rest) => {
  const els = queryAllByLabelText(container, text, ...rest);
  if (!els.length) {
    const labels = queryAllLabelsByText(container, text, ...rest);
    if (labels.length) {
      const tagNames = labels.map(label => getTagNameOfElementAssociatedWithLabelViaFor(container, label)).filter(tagName => !!tagName);
      if (tagNames.length) {
        throw (0, _config.getConfig)().getElementError(tagNames.map(tagName => `Found a label with the text of: ${text}, however the element associated with this label (<${tagName} />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <${tagName} />, you can use aria-label or aria-labelledby instead.`).join('\n\n'), container);
      } else {
        throw (0, _config.getConfig)().getElementError(`Found a label with the text of: ${text}, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, container);
      }
    } else {
      throw (0, _config.getConfig)().getElementError(`Unable to find a label with the text of: ${text}`, container);
    }
  }
  return els;
};
function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
  const htmlFor = label.getAttribute('for');
  if (!htmlFor) {
    return null;
  }
  const element = container.querySelector(`[id="${htmlFor}"]`);
  return element ? element.tagName.toLowerCase() : null;
}

// the reason mentioned above is the same reason we're not using buildQueries
const getMultipleError = (c, text) => `Found multiple elements with the text of: ${text}`;
const queryByLabelText = exports.queryByLabelText = (0, _allUtils.wrapSingleQueryWithSuggestion)((0, _allUtils.makeSingleQuery)(queryAllByLabelText, getMultipleError), queryAllByLabelText.name, 'query');
const getByLabelText = (0, _allUtils.makeSingleQuery)(getAllByLabelText, getMultipleError);
const findAllByLabelText = exports.findAllByLabelText = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText, getAllByLabelText.name, 'findAll'));
const findByLabelText = exports.findByLabelText = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText, getAllByLabelText.name, 'find'));
const getAllByLabelTextWithSuggestions = exports.getAllByLabelText = (0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText, getAllByLabelText.name, 'getAll');
const getByLabelTextWithSuggestions = exports.getByLabelText = (0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText, getAllByLabelText.name, 'get');
const queryAllByLabelTextWithSuggestions = exports.queryAllByLabelText = (0, _allUtils.wrapAllByQueryWithSuggestion)(queryAllByLabelText, queryAllByLabelText.name, 'queryAll');