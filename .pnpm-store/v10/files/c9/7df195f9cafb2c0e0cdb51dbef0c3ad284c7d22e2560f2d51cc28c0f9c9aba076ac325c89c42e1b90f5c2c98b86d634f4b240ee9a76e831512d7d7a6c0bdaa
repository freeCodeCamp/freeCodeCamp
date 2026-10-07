"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryByRole = exports.queryAllByRole = exports.getByRole = exports.getAllByRole = exports.findByRole = exports.findAllByRole = void 0;
var _domAccessibilityApi = require("dom-accessibility-api");
var _ariaQuery = require("aria-query");
var _roleHelpers = require("../role-helpers");
var _queryHelpers = require("../query-helpers");
var _helpers = require("../helpers");
var _allUtils = require("./all-utils");
/* eslint-disable complexity */

const queryAllByRole = (container, role, {
  hidden = (0, _allUtils.getConfig)().defaultHidden,
  name,
  description,
  queryFallbacks = false,
  selected,
  busy,
  checked,
  pressed,
  current,
  level,
  expanded,
  value: {
    now: valueNow,
    min: valueMin,
    max: valueMax,
    text: valueText
  } = {}
} = {}) => {
  (0, _helpers.checkContainerType)(container);
  if (selected !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-selected'] === undefined) {
      throw new Error(`"aria-selected" is not supported on role "${role}".`);
    }
  }
  if (busy !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-busy'] === undefined) {
      throw new Error(`"aria-busy" is not supported on role "${role}".`);
    }
  }
  if (checked !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-checked'] === undefined) {
      throw new Error(`"aria-checked" is not supported on role "${role}".`);
    }
  }
  if (pressed !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-pressed'] === undefined) {
      throw new Error(`"aria-pressed" is not supported on role "${role}".`);
    }
  }
  if (current !== undefined) {
    /* istanbul ignore next */
    // guard against unknown roles
    // All currently released ARIA versions support `aria-current` on all roles.
    // Leaving this for symmetry and forward compatibility
    if (_ariaQuery.roles.get(role)?.props['aria-current'] === undefined) {
      throw new Error(`"aria-current" is not supported on role "${role}".`);
    }
  }
  if (level !== undefined) {
    // guard against using `level` option with any role other than `heading`
    if (role !== 'heading') {
      throw new Error(`Role "${role}" cannot have "level" property.`);
    }
  }
  if (valueNow !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-valuenow'] === undefined) {
      throw new Error(`"aria-valuenow" is not supported on role "${role}".`);
    }
  }
  if (valueMax !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-valuemax'] === undefined) {
      throw new Error(`"aria-valuemax" is not supported on role "${role}".`);
    }
  }
  if (valueMin !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-valuemin'] === undefined) {
      throw new Error(`"aria-valuemin" is not supported on role "${role}".`);
    }
  }
  if (valueText !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-valuetext'] === undefined) {
      throw new Error(`"aria-valuetext" is not supported on role "${role}".`);
    }
  }
  if (expanded !== undefined) {
    // guard against unknown roles
    if (_ariaQuery.roles.get(role)?.props['aria-expanded'] === undefined) {
      throw new Error(`"aria-expanded" is not supported on role "${role}".`);
    }
  }
  const subtreeIsInaccessibleCache = new WeakMap();
  function cachedIsSubtreeInaccessible(element) {
    if (!subtreeIsInaccessibleCache.has(element)) {
      subtreeIsInaccessibleCache.set(element, (0, _roleHelpers.isSubtreeInaccessible)(element));
    }
    return subtreeIsInaccessibleCache.get(element);
  }
  return Array.from(container.querySelectorAll(
  // Only query elements that can be matched by the following filters
  makeRoleSelector(role))).filter(node => {
    const isRoleSpecifiedExplicitly = node.hasAttribute('role');
    if (isRoleSpecifiedExplicitly) {
      const roleValue = node.getAttribute('role');
      if (queryFallbacks) {
        return roleValue.split(' ').filter(Boolean).some(roleAttributeToken => roleAttributeToken === role);
      }
      // other wise only send the first token to match
      const [firstRoleAttributeToken] = roleValue.split(' ');
      return firstRoleAttributeToken === role;
    }
    const implicitRoles = (0, _roleHelpers.getImplicitAriaRoles)(node);
    return implicitRoles.some(implicitRole => {
      return implicitRole === role;
    });
  }).filter(element => {
    if (selected !== undefined) {
      return selected === (0, _roleHelpers.computeAriaSelected)(element);
    }
    if (busy !== undefined) {
      return busy === (0, _roleHelpers.computeAriaBusy)(element);
    }
    if (checked !== undefined) {
      return checked === (0, _roleHelpers.computeAriaChecked)(element);
    }
    if (pressed !== undefined) {
      return pressed === (0, _roleHelpers.computeAriaPressed)(element);
    }
    if (current !== undefined) {
      return current === (0, _roleHelpers.computeAriaCurrent)(element);
    }
    if (expanded !== undefined) {
      return expanded === (0, _roleHelpers.computeAriaExpanded)(element);
    }
    if (level !== undefined) {
      return level === (0, _roleHelpers.computeHeadingLevel)(element);
    }
    if (valueNow !== undefined || valueMax !== undefined || valueMin !== undefined || valueText !== undefined) {
      let valueMatches = true;
      if (valueNow !== undefined) {
        valueMatches &&= valueNow === (0, _roleHelpers.computeAriaValueNow)(element);
      }
      if (valueMax !== undefined) {
        valueMatches &&= valueMax === (0, _roleHelpers.computeAriaValueMax)(element);
      }
      if (valueMin !== undefined) {
        valueMatches &&= valueMin === (0, _roleHelpers.computeAriaValueMin)(element);
      }
      if (valueText !== undefined) {
        valueMatches &&= (0, _allUtils.matches)((0, _roleHelpers.computeAriaValueText)(element) ?? null, element, valueText, text => text);
      }
      return valueMatches;
    }
    // don't care if aria attributes are unspecified
    return true;
  }).filter(element => {
    if (name === undefined) {
      // Don't care
      return true;
    }
    return (0, _allUtils.matches)((0, _domAccessibilityApi.computeAccessibleName)(element, {
      computedStyleSupportsPseudoElements: (0, _allUtils.getConfig)().computedStyleSupportsPseudoElements
    }), element, name, text => text);
  }).filter(element => {
    if (description === undefined) {
      // Don't care
      return true;
    }
    return (0, _allUtils.matches)((0, _domAccessibilityApi.computeAccessibleDescription)(element, {
      computedStyleSupportsPseudoElements: (0, _allUtils.getConfig)().computedStyleSupportsPseudoElements
    }), element, description, text => text);
  }).filter(element => {
    return hidden === false ? (0, _roleHelpers.isInaccessible)(element, {
      isSubtreeInaccessible: cachedIsSubtreeInaccessible
    }) === false : true;
  });
};
function makeRoleSelector(role) {
  const explicitRoleSelector = `*[role~="${role}"]`;
  const roleRelations = _ariaQuery.roleElements.get(role) ?? new Set();
  const implicitRoleSelectors = new Set(Array.from(roleRelations).map(({
    name
  }) => name));

  // Current transpilation config sometimes assumes `...` is always applied to arrays.
  // `...` is equivalent to `Array.prototype.concat` for arrays.
  // If you replace this code with `[explicitRoleSelector, ...implicitRoleSelectors]`, make sure every transpilation target retains the `...` in favor of `Array.prototype.concat`.
  return [explicitRoleSelector].concat(Array.from(implicitRoleSelectors)).join(',');
}
const getNameHint = name => {
  let nameHint = '';
  if (name === undefined) {
    nameHint = '';
  } else if (typeof name === 'string') {
    nameHint = ` and name "${name}"`;
  } else {
    nameHint = ` and name \`${name}\``;
  }
  return nameHint;
};
const getMultipleError = (c, role, {
  name
} = {}) => {
  return `Found multiple elements with the role "${role}"${getNameHint(name)}`;
};
const getMissingError = (container, role, {
  hidden = (0, _allUtils.getConfig)().defaultHidden,
  name,
  description
} = {}) => {
  if ((0, _allUtils.getConfig)()._disableExpensiveErrorDiagnostics) {
    return `Unable to find role="${role}"${getNameHint(name)}`;
  }
  let roles = '';
  Array.from(container.children).forEach(childElement => {
    roles += (0, _roleHelpers.prettyRoles)(childElement, {
      hidden,
      includeDescription: description !== undefined
    });
  });
  let roleMessage;
  if (roles.length === 0) {
    if (hidden === false) {
      roleMessage = 'There are no accessible roles. But there might be some inaccessible roles. ' + 'If you wish to access them, then set the `hidden` option to `true`. ' + 'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole';
    } else {
      roleMessage = 'There are no available roles.';
    }
  } else {
    roleMessage = `
Here are the ${hidden === false ? 'accessible' : 'available'} roles:

  ${roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n')}
`.trim();
  }
  let nameHint = '';
  if (name === undefined) {
    nameHint = '';
  } else if (typeof name === 'string') {
    nameHint = ` and name "${name}"`;
  } else {
    nameHint = ` and name \`${name}\``;
  }
  let descriptionHint = '';
  if (description === undefined) {
    descriptionHint = '';
  } else if (typeof description === 'string') {
    descriptionHint = ` and description "${description}"`;
  } else {
    descriptionHint = ` and description \`${description}\``;
  }
  return `
Unable to find an ${hidden === false ? 'accessible ' : ''}element with the role "${role}"${nameHint}${descriptionHint}

${roleMessage}`.trim();
};
const queryAllByRoleWithSuggestions = exports.queryAllByRole = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByRole, queryAllByRole.name, 'queryAll');
const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = (0, _allUtils.buildQueries)(queryAllByRole, getMultipleError, getMissingError);
exports.findByRole = findByRole;
exports.findAllByRole = findAllByRole;
exports.getByRole = getByRole;
exports.getAllByRole = getAllByRole;
exports.queryByRole = queryByRole;