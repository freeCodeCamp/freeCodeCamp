/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/* eslint-disable indent */

module.exports = function(options) {
  options = Object.assign({
    autoImport: true,
    inlineRequires: process.env.NODE_ENV === 'test',
    objectAssign: true,
    rewriteModules: null, // {map: ?{[module: string]: string}, prefix: ?string}
    stripDEV: false,
    target: 'js',
  }, options);

  if (options.target !== 'js' && options.target !== 'flow') {
    throw new Error('options.target must be one of "js" or "flow".');
  }

  // Always enable these. These will overlap with some transforms (which also
  // enable the corresponding syntax, eg Flow), but these are the minimal
  // additional syntaxes that need to be enabled so we can minimally transform
  // to .js.flow files as well.
  let presetSets = [
    [
      require('@babel/plugin-syntax-class-properties'),
      require('@babel/plugin-syntax-flow'),
      require('@babel/plugin-syntax-jsx'),
      require('babel-plugin-syntax-trailing-function-commas'),
      require('@babel/plugin-syntax-object-rest-spread'),

      options.autoImport ? require('./plugins/auto-importer') : null,
      options.rewriteModules ?
        [require('./plugins/rewrite-modules'), options.rewriteModules || {}] :
        null,
    ],
    [
      options.inlineRequires ? require('./plugins/inline-requires') : null,
      options.stripDEV ? require('./plugins/dev-expression') : null,
    ]
  ];

  // We only want to add declarations for flow transforms and not for js. So we
  // have to do this separate from above.
  if (options.target === 'flow') {
    presetSets[0].push(require('./plugins/dev-declaration'));
  }

  // Enable everything else for js.
  if (options.target === 'js') {
    presetSets[0] = presetSets[0].concat([
      require('@babel/plugin-transform-template-literals'),
      require('@babel/plugin-transform-literals'),
      require('@babel/plugin-transform-function-name'),
      require('@babel/plugin-transform-arrow-functions'),
      require('@babel/plugin-transform-block-scoped-functions'),
      require('@babel/plugin-proposal-class-properties'),
      [require('@babel/plugin-transform-classes'), {loose: true}],
      require('@babel/plugin-transform-object-super'),
      require('@babel/plugin-transform-shorthand-properties'),
      require('@babel/plugin-transform-computed-properties'),
      require('@babel/plugin-transform-for-of'),
      [require('@babel/plugin-transform-spread'), {loose: true}],
      require('@babel/plugin-transform-parameters'),
      [require('@babel/plugin-transform-destructuring'), {loose: true}],
      require('@babel/plugin-transform-block-scoping'),
      require('@babel/plugin-transform-modules-commonjs'),
      require('@babel/plugin-transform-member-expression-literals'),
      require('@babel/plugin-transform-property-literals'),
      require('@babel/plugin-transform-flow-strip-types'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-transform-react-display-name'),
      require('@babel/plugin-transform-react-jsx'),
      // Don't enable this plugin unless we're compiling JS, even if the option is true
      options.objectAssign ? require('./plugins/object-assign') : null,
    ]);
  }

  // Use two passes to circumvent bug with auto-importer and inline-requires.
  const passPresets = presetSets.map(function(plugins) {
    return {
      plugins: plugins.filter(function(plugin) {
        return plugin != null;
      }),
    };
  });

  return {
    passPerPreset: true,
    presets: passPresets,
  };
};
