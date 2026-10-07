"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeAriaBusy = computeAriaBusy;
exports.computeAriaChecked = computeAriaChecked;
exports.computeAriaCurrent = computeAriaCurrent;
exports.computeAriaExpanded = computeAriaExpanded;
exports.computeAriaPressed = computeAriaPressed;
exports.computeAriaSelected = computeAriaSelected;
exports.computeAriaValueMax = computeAriaValueMax;
exports.computeAriaValueMin = computeAriaValueMin;
exports.computeAriaValueNow = computeAriaValueNow;
exports.computeAriaValueText = computeAriaValueText;
exports.computeHeadingLevel = computeHeadingLevel;
exports.getImplicitAriaRoles = getImplicitAriaRoles;
exports.getRoles = getRoles;
exports.isInaccessible = isInaccessible;
exports.isSubtreeInaccessible = isSubtreeInaccessible;
exports.logRoles = void 0;
exports.prettyRoles = prettyRoles;
var _ariaQuery = require("aria-query");
var _domAccessibilityApi = require("dom-accessibility-api");
var _prettyDom = require("./pretty-dom");
var _config = require("./config");
const elementRoleList = buildElementRoleList(_ariaQuery.elementRoles);

/**
 * @param {Element} element -
 * @returns {boolean} - `true` if `element` and its subtree are inaccessible
 */
function isSubtreeInaccessible(element) {
  if (element.hidden === true) {
    return true;
  }
  if (element.getAttribute('aria-hidden') === 'true') {
    return true;
  }
  const window = element.ownerDocument.defaultView;
  if (window.getComputedStyle(element).display === 'none') {
    return true;
  }
  return false;
}

/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param {Element} element -
 * @param {object} [options] -
 * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
 * can be used to return cached results from previous isSubtreeInaccessible calls
 * @returns {boolean} true if excluded, otherwise false
 */
function isInaccessible(element, options = {}) {
  const {
    isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible
  } = options;
  const window = element.ownerDocument.defaultView;
  // since visibility is inherited we can exit early
  if (window.getComputedStyle(element).visibility === 'hidden') {
    return true;
  }
  let currentElement = element;
  while (currentElement) {
    if (isSubtreeInaccessibleImpl(currentElement)) {
      return true;
    }
    currentElement = currentElement.parentElement;
  }
  return false;
}
function getImplicitAriaRoles(currentNode) {
  // eslint bug here:
  // eslint-disable-next-line no-unused-vars
  for (const {
    match,
    roles
  } of elementRoleList) {
    if (match(currentNode)) {
      return [...roles];
    }
  }
  return [];
}
function buildElementRoleList(elementRolesMap) {
  function makeElementSelector({
    name,
    attributes
  }) {
    return `${name}${attributes.map(({
      name: attributeName,
      value,
      constraints = []
    }) => {
      const shouldNotExist = constraints.indexOf('undefined') !== -1;
      const shouldBeNonEmpty = constraints.indexOf('set') !== -1;
      const hasExplicitValue = typeof value !== 'undefined';
      if (hasExplicitValue) {
        return `[${attributeName}="${value}"]`;
      } else if (shouldNotExist) {
        return `:not([${attributeName}])`;
      } else if (shouldBeNonEmpty) {
        return `[${attributeName}]:not([${attributeName}=""])`;
      }
      return `[${attributeName}]`;
    }).join('')}`;
  }
  function getSelectorSpecificity({
    attributes = []
  }) {
    return attributes.length;
  }
  function bySelectorSpecificity({
    specificity: leftSpecificity
  }, {
    specificity: rightSpecificity
  }) {
    return rightSpecificity - leftSpecificity;
  }
  function match(element) {
    let {
      attributes = []
    } = element;

    // https://github.com/testing-library/dom-testing-library/issues/814
    const typeTextIndex = attributes.findIndex(attribute => attribute.value && attribute.name === 'type' && attribute.value === 'text');
    if (typeTextIndex >= 0) {
      // not using splice to not mutate the attributes array
      attributes = [...attributes.slice(0, typeTextIndex), ...attributes.slice(typeTextIndex + 1)];
    }
    const selector = makeElementSelector({
      ...element,
      attributes
    });
    return node => {
      if (typeTextIndex >= 0 && node.type !== 'text') {
        return false;
      }
      return node.matches(selector);
    };
  }
  let result = [];

  // eslint bug here:
  // eslint-disable-next-line no-unused-vars
  for (const [element, roles] of elementRolesMap.entries()) {
    result = [...result, {
      match: match(element),
      roles: Array.from(roles),
      specificity: getSelectorSpecificity(element)
    }];
  }
  return result.sort(bySelectorSpecificity);
}
function getRoles(container, {
  hidden = false
} = {}) {
  function flattenDOM(node) {
    return [node, ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], [])];
  }
  return flattenDOM(container).filter(element => {
    return hidden === false ? isInaccessible(element) === false : true;
  }).reduce((acc, node) => {
    let roles = [];
    // TODO: This violates html-aria which does not allow any role on every element
    if (node.hasAttribute('role')) {
      roles = node.getAttribute('role').split(' ').slice(0, 1);
    } else {
      roles = getImplicitAriaRoles(node);
    }
    return roles.reduce((rolesAcc, role) => Array.isArray(rolesAcc[role]) ? {
      ...rolesAcc,
      [role]: [...rolesAcc[role], node]
    } : {
      ...rolesAcc,
      [role]: [node]
    }, acc);
  }, {});
}
function prettyRoles(dom, {
  hidden,
  includeDescription
}) {
  const roles = getRoles(dom, {
    hidden
  });
  // We prefer to skip generic role, we don't recommend it
  return Object.entries(roles).filter(([role]) => role !== 'generic').map(([role, elements]) => {
    const delimiterBar = '-'.repeat(50);
    const elementsString = elements.map(el => {
      const nameString = `Name "${(0, _domAccessibilityApi.computeAccessibleName)(el, {
        computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
      })}":\n`;
      const domString = (0, _prettyDom.prettyDOM)(el.cloneNode(false));
      if (includeDescription) {
        const descriptionString = `Description "${(0, _domAccessibilityApi.computeAccessibleDescription)(el, {
          computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
        })}":\n`;
        return `${nameString}${descriptionString}${domString}`;
      }
      return `${nameString}${domString}`;
    }).join('\n\n');
    return `${role}:\n\n${elementsString}\n\n${delimiterBar}`;
  }).join('\n');
}
const logRoles = (dom, {
  hidden = false
} = {}) => console.log(prettyRoles(dom, {
  hidden
}));

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
 */
exports.logRoles = logRoles;
function computeAriaSelected(element) {
  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
  // https://www.w3.org/TR/html-aam-1.0/#details-id-97
  if (element.tagName === 'OPTION') {
    return element.selected;
  }

  // explicit value
  return checkBooleanAttribute(element, 'aria-selected');
}

/**
 * @param {Element} element -
 * @returns {boolean} -
 */
function computeAriaBusy(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-busy
  return element.getAttribute('aria-busy') === 'true';
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
 */
function computeAriaChecked(element) {
  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
  // https://www.w3.org/TR/html-aam-1.0/#details-id-56
  // https://www.w3.org/TR/html-aam-1.0/#details-id-67
  if ('indeterminate' in element && element.indeterminate) {
    return undefined;
  }
  if ('checked' in element) {
    return element.checked;
  }

  // explicit value
  return checkBooleanAttribute(element, 'aria-checked');
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
 */
function computeAriaPressed(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
  return checkBooleanAttribute(element, 'aria-pressed');
}

/**
 * @param {Element} element -
 * @returns {boolean | string | null} -
 */
function computeAriaCurrent(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-current
  return checkBooleanAttribute(element, 'aria-current') ?? element.getAttribute('aria-current') ?? false;
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)expanded, undefined if not expand-able
 */
function computeAriaExpanded(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
  return checkBooleanAttribute(element, 'aria-expanded');
}
function checkBooleanAttribute(element, attribute) {
  const attributeValue = element.getAttribute(attribute);
  if (attributeValue === 'true') {
    return true;
  }
  if (attributeValue === 'false') {
    return false;
  }
  return undefined;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} - number if implicit heading or aria-level present, otherwise undefined
 */
function computeHeadingLevel(element) {
  // https://w3c.github.io/html-aam/#el-h1-h6
  // https://w3c.github.io/html-aam/#el-h1-h6
  const implicitHeadingLevels = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  // explicit aria-level value
  // https://www.w3.org/TR/wai-aria-1.2/#aria-level
  const ariaLevelAttribute = element.getAttribute('aria-level') && Number(element.getAttribute('aria-level'));
  return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueNow(element) {
  const valueNow = element.getAttribute('aria-valuenow');
  return valueNow === null ? undefined : +valueNow;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueMax(element) {
  const valueMax = element.getAttribute('aria-valuemax');
  return valueMax === null ? undefined : +valueMax;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueMin(element) {
  const valueMin = element.getAttribute('aria-valuemin');
  return valueMin === null ? undefined : +valueMin;
}

/**
 * @param {Element} element -
 * @returns {string | undefined} -
 */
function computeAriaValueText(element) {
  const valueText = element.getAttribute('aria-valuetext');
  return valueText === null ? undefined : valueText;
}