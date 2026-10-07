"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLabelContent = getLabelContent;
exports.getLabels = getLabels;
exports.getRealLabels = getRealLabels;
var _helpers = require("./helpers");
const labelledNodeNames = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input'];
function getTextContent(node) {
  if (labelledNodeNames.includes(node.nodeName.toLowerCase())) {
    return '';
  }
  if (node.nodeType === _helpers.TEXT_NODE) return node.textContent;
  return Array.from(node.childNodes).map(childNode => getTextContent(childNode)).join('');
}
function getLabelContent(element) {
  let textContent;
  if (element.tagName.toLowerCase() === 'label') {
    textContent = getTextContent(element);
  } else {
    textContent = element.value || element.textContent;
  }
  return textContent;
}

// Based on https://github.com/eps1lon/dom-accessibility-api/pull/352
function getRealLabels(element) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- types are not aware of older browsers that don't implement `labels`
  if (element.labels !== undefined) {
    return element.labels ?? [];
  }
  if (!isLabelable(element)) return [];
  const labels = element.ownerDocument.querySelectorAll('label');
  return Array.from(labels).filter(label => label.control === element);
}
function isLabelable(element) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === 'INPUT' && element.getAttribute('type') !== 'hidden';
}
function getLabels(container, element, {
  selector = '*'
} = {}) {
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  const labelsId = ariaLabelledBy ? ariaLabelledBy.split(' ') : [];
  return labelsId.length ? labelsId.map(labelId => {
    const labellingElement = container.querySelector(`[id="${labelId}"]`);
    return labellingElement ? {
      content: getLabelContent(labellingElement),
      formControl: null
    } : {
      content: '',
      formControl: null
    };
  }) : Array.from(getRealLabels(element)).map(label => {
    const textToMatch = getLabelContent(label);
    const formControlSelector = 'button, input, meter, output, progress, select, textarea';
    const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter(formControlElement => formControlElement.matches(selector))[0];
    return {
      content: textToMatch,
      formControl: labelledFormControl
    };
  });
}