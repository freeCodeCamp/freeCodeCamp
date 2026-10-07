"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable global-require */
var flatConfigBase = require('./configs/flat-config-base');
var legacyConfigBase = require('./configs/legacy-config-base');
var _require = require('../package.json'),
  name = _require.name,
  version = _require.version;
var allRules = {
  'accessible-emoji': require('./rules/accessible-emoji'),
  'alt-text': require('./rules/alt-text'),
  'anchor-ambiguous-text': require('./rules/anchor-ambiguous-text'),
  'anchor-has-content': require('./rules/anchor-has-content'),
  'anchor-is-valid': require('./rules/anchor-is-valid'),
  'aria-activedescendant-has-tabindex': require('./rules/aria-activedescendant-has-tabindex'),
  'aria-props': require('./rules/aria-props'),
  'aria-proptypes': require('./rules/aria-proptypes'),
  'aria-role': require('./rules/aria-role'),
  'aria-unsupported-elements': require('./rules/aria-unsupported-elements'),
  'autocomplete-valid': require('./rules/autocomplete-valid'),
  'click-events-have-key-events': require('./rules/click-events-have-key-events'),
  'control-has-associated-label': require('./rules/control-has-associated-label'),
  'heading-has-content': require('./rules/heading-has-content'),
  'html-has-lang': require('./rules/html-has-lang'),
  'iframe-has-title': require('./rules/iframe-has-title'),
  'img-redundant-alt': require('./rules/img-redundant-alt'),
  'interactive-supports-focus': require('./rules/interactive-supports-focus'),
  'label-has-associated-control': require('./rules/label-has-associated-control'),
  'label-has-for': require('./rules/label-has-for'),
  lang: require('./rules/lang'),
  'media-has-caption': require('./rules/media-has-caption'),
  'mouse-events-have-key-events': require('./rules/mouse-events-have-key-events'),
  'no-access-key': require('./rules/no-access-key'),
  'no-aria-hidden-on-focusable': require('./rules/no-aria-hidden-on-focusable'),
  'no-autofocus': require('./rules/no-autofocus'),
  'no-distracting-elements': require('./rules/no-distracting-elements'),
  'no-interactive-element-to-noninteractive-role': require('./rules/no-interactive-element-to-noninteractive-role'),
  'no-noninteractive-element-interactions': require('./rules/no-noninteractive-element-interactions'),
  'no-noninteractive-element-to-interactive-role': require('./rules/no-noninteractive-element-to-interactive-role'),
  'no-noninteractive-tabindex': require('./rules/no-noninteractive-tabindex'),
  'no-onchange': require('./rules/no-onchange'),
  'no-redundant-roles': require('./rules/no-redundant-roles'),
  'no-static-element-interactions': require('./rules/no-static-element-interactions'),
  'prefer-tag-over-role': require('./rules/prefer-tag-over-role'),
  'role-has-required-aria-props': require('./rules/role-has-required-aria-props'),
  'role-supports-aria-props': require('./rules/role-supports-aria-props'),
  scope: require('./rules/scope'),
  'tabindex-no-positive': require('./rules/tabindex-no-positive')
};
var recommendedRules = {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-ambiguous-text': 'off',
  // TODO: error
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': 'error',
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-proptypes': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/autocomplete-valid': 'error',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/control-has-associated-label': ['off', {
    ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
    ignoreRoles: ['grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'row', 'tablist', 'toolbar', 'tree', 'treegrid'],
    includeRoles: ['alert', 'dialog']
  }],
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/iframe-has-title': 'error',
  'jsx-a11y/img-redundant-alt': 'error',
  'jsx-a11y/interactive-supports-focus': ['error', {
    tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox']
  }],
  'jsx-a11y/label-has-associated-control': 'error',
  'jsx-a11y/label-has-for': 'off',
  'jsx-a11y/media-has-caption': 'error',
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/no-access-key': 'error',
  'jsx-a11y/no-autofocus': 'error',
  'jsx-a11y/no-distracting-elements': 'error',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
    tr: ['none', 'presentation'],
    canvas: ['img']
  }],
  'jsx-a11y/no-noninteractive-element-interactions': ['error', {
    handlers: ['onClick', 'onError', 'onLoad', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
    body: ['onError', 'onLoad'],
    dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
    iframe: ['onError', 'onLoad'],
    img: ['onError', 'onLoad']
  }],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
    ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    li: ['menuitem', 'menuitemradio', 'menuitemcheckbox', 'option', 'row', 'tab', 'treeitem'],
    table: ['grid'],
    td: ['gridcell'],
    fieldset: ['radiogroup', 'presentation']
  }],
  'jsx-a11y/no-noninteractive-tabindex': ['error', {
    tags: [],
    roles: ['tabpanel'],
    allowExpressionValues: true
  }],
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/no-static-element-interactions': ['error', {
    allowExpressionValues: true,
    handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
  }],
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/scope': 'error',
  'jsx-a11y/tabindex-no-positive': 'error'
};
var strictRules = {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': 'error',
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-proptypes': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/autocomplete-valid': 'error',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/control-has-associated-label': ['off', {
    ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
    ignoreRoles: ['grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'row', 'tablist', 'toolbar', 'tree', 'treegrid'],
    includeRoles: ['alert', 'dialog']
  }],
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/iframe-has-title': 'error',
  'jsx-a11y/img-redundant-alt': 'error',
  'jsx-a11y/interactive-supports-focus': ['error', {
    tabbable: ['button', 'checkbox', 'link', 'progressbar', 'searchbox', 'slider', 'spinbutton', 'switch', 'textbox']
  }],
  'jsx-a11y/label-has-for': 'off',
  'jsx-a11y/label-has-associated-control': 'error',
  'jsx-a11y/media-has-caption': 'error',
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/no-access-key': 'error',
  'jsx-a11y/no-autofocus': 'error',
  'jsx-a11y/no-distracting-elements': 'error',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
  'jsx-a11y/no-noninteractive-element-interactions': ['error', {
    body: ['onError', 'onLoad'],
    iframe: ['onError', 'onLoad'],
    img: ['onError', 'onLoad']
  }],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
  'jsx-a11y/no-noninteractive-tabindex': 'error',
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/no-static-element-interactions': 'error',
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/scope': 'error',
  'jsx-a11y/tabindex-no-positive': 'error'
};

/** Base plugin object */
var jsxA11y = {
  meta: {
    name,
    version
  },
  rules: _objectSpread({}, allRules)
};

/**
 * Given a ruleset and optionally a flat config name, generate a config.
 * @param {object} rules - ruleset for this config
 * @param {string} flatConfigName - name for the config if flat
 * @returns Config for this set of rules.
 */
var createConfig = function createConfig(rules, flatConfigName) {
  return _objectSpread(_objectSpread({}, flatConfigName ? _objectSpread(_objectSpread({}, flatConfigBase), {}, {
    name: "jsx-a11y/".concat(flatConfigName),
    plugins: {
      'jsx-a11y': jsxA11y
    }
  }) : _objectSpread(_objectSpread({}, legacyConfigBase), {}, {
    plugins: ['jsx-a11y']
  })), {}, {
    rules: _objectSpread({}, rules)
  });
};

// Create configs for the plugin object
var configs = {
  recommended: createConfig(recommendedRules),
  strict: createConfig(strictRules)
};
var flatConfigs = {
  recommended: createConfig(recommendedRules, 'recommended'),
  strict: createConfig(strictRules, 'strict')
};
module.exports = _objectSpread(_objectSpread({}, jsxA11y), {}, {
  configs,
  flatConfigs
});