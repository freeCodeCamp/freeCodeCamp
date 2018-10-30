'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_config;

function _load_default_config() {
  return _default_config = _interopRequireDefault(require('./default_config'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const _validate = (config, options) => {
  let hasDeprecationWarnings = false;

  for (const key in config) {
    if (options.deprecatedConfig && key in options.deprecatedConfig && typeof options.deprecate === 'function') {
      const isDeprecatedKey = options.deprecate(config, key, options.deprecatedConfig, options);

      hasDeprecationWarnings = hasDeprecationWarnings || isDeprecatedKey;
    } else if (hasOwnProperty.call(options.exampleConfig, key)) {
      if (typeof options.condition === 'function' && typeof options.error === 'function' && !options.condition(config[key], options.exampleConfig[key])) {
        options.error(key, config[key], options.exampleConfig[key], options);
      }
    } else {
      options.unknown && options.unknown(config, options.exampleConfig, key, options);
    }
  }

  return { hasDeprecationWarnings };
};

const validate = (config, options) => {
  _validate(options, (_default_config || _load_default_config()).default); // validate against jest-validate config

  const defaultedOptions = Object.assign({}, (_default_config || _load_default_config()).default, options, { title: Object.assign({}, (_default_config || _load_default_config()).default.title, options.title) });

  var _validate2 = _validate(config, defaultedOptions);

  const hasDeprecationWarnings = _validate2.hasDeprecationWarnings;


  return {
    hasDeprecationWarnings,
    isValid: true
  };
};

exports.default = validate;