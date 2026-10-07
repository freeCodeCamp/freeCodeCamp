/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const path = require('path');

const validateBoolOption = (name, value, defaultValue) => {
  if (typeof value === 'undefined') {
    value = defaultValue;
  }

  if (typeof value !== 'boolean') {
    throw new Error(`Preset react-app: '${name}' option must be a boolean.`);
  }

  return value;
};

module.exports = function (api, opts, env) {
  if (!opts) {
    opts = {};
  }

  var isEnvDevelopment = env === 'development';
  var isEnvProduction = env === 'production';
  var isEnvTest = env === 'test';

  var useESModules = validateBoolOption(
    'useESModules',
    opts.useESModules,
    isEnvDevelopment || isEnvProduction
  );
  var isFlowEnabled = validateBoolOption('flow', opts.flow, true);
  var isTypeScriptEnabled = validateBoolOption(
    'typescript',
    opts.typescript,
    true
  );
  var areHelpersEnabled = validateBoolOption('helpers', opts.helpers, true);
  var useAbsoluteRuntime = validateBoolOption(
    'absoluteRuntime',
    opts.absoluteRuntime,
    true
  );

  var absoluteRuntimePath = undefined;
  if (useAbsoluteRuntime) {
    absoluteRuntimePath = path.dirname(
      require.resolve('@babel/runtime/package.json')
    );
  }

  if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
    throw new Error(
      'Using `babel-preset-react-app` requires that you specify `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(env) +
        '.'
    );
  }

  return {
    presets: [
      isEnvTest && [
        // ES features necessary for user's Node version
        require('@babel/preset-env').default,
        {
          targets: {
            node: 'current',
          },
        },
      ],
      (isEnvProduction || isEnvDevelopment) && [
        // Latest stable ECMAScript features
        require('@babel/preset-env').default,
        {
          // Allow importing core-js in entrypoint and use browserlist to select polyfills
          useBuiltIns: 'entry',
          // Set the corejs version we are using to avoid warnings in console
          corejs: 3,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
        },
      ],
      [
        require('@babel/preset-react').default,
        {
          // Adds component stack to warning messages
          // Adds __self attribute to JSX which React will use for some warnings
          development: isEnvDevelopment || isEnvTest,
          // Will use the native built-in instead of trying to polyfill
          // behavior for any plugins that require one.
          ...(opts.runtime !== 'automatic' ? { useBuiltIns: true } : {}),
          runtime: opts.runtime || 'classic',
        },
      ],
      isTypeScriptEnabled && [require('@babel/preset-typescript').default],
    ].filter(Boolean),
    plugins: [
      // Strip flow types before any other transform, emulating the behavior
      // order as-if the browser supported all of the succeeding features
      // https://github.com/facebook/create-react-app/pull/5182
      // We will conditionally enable this plugin below in overrides as it clashes with
      // @babel/plugin-proposal-decorators when using TypeScript.
      // https://github.com/facebook/create-react-app/issues/5741
      isFlowEnabled && [
        require('@babel/plugin-transform-flow-strip-types').default,
        false,
      ],
      // Experimental macros support. Will be documented after it's had some time
      // in the wild.
      require('babel-plugin-macros'),
      // Disabled as it's handled automatically by preset-env, and `selectiveLoose` isn't
      // yet merged into babel: https://github.com/babel/babel/pull/9486
      // Related: https://github.com/facebook/create-react-app/pull/8215
      // [
      //   require('@babel/plugin-transform-destructuring').default,
      //   {
      //     // Use loose mode for performance:
      //     // https://github.com/facebook/create-react-app/issues/5602
      //     loose: false,
      //     selectiveLoose: [
      //       'useState',
      //       'useEffect',
      //       'useContext',
      //       'useReducer',
      //       'useCallback',
      //       'useMemo',
      //       'useRef',
      //       'useImperativeHandle',
      //       'useLayoutEffect',
      //       'useDebugValue',
      //     ],
      //   },
      // ],
      // Turn on legacy decorators for TypeScript files
      isTypeScriptEnabled && [
        require('@babel/plugin-proposal-decorators').default,
        false,
      ],
      // class { handleClick = () => { } }
      // Enable loose mode to use assignment instead of defineProperty
      // See discussion in https://github.com/facebook/create-react-app/issues/4263
      // Note:
      // 'loose' mode configuration must be the same for
      // * @babel/plugin-proposal-class-properties
      // * @babel/plugin-proposal-private-methods
      // * @babel/plugin-proposal-private-property-in-object
      // (when they are enabled)
      [
        require('@babel/plugin-proposal-class-properties').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-proposal-private-methods').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-proposal-private-property-in-object').default,
        {
          loose: true,
        },
      ],
      // Adds Numeric Separators
      require('@babel/plugin-proposal-numeric-separator').default,
      // Polyfills the runtime needed for async/await, generators, and friends
      // https://babeljs.io/docs/en/babel-plugin-transform-runtime
      [
        require('@babel/plugin-transform-runtime').default,
        {
          corejs: false,
          helpers: areHelpersEnabled,
          // By default, babel assumes babel/runtime version 7.0.0-beta.0,
          // explicitly resolving to match the provided helper functions.
          // https://github.com/babel/babel/issues/10261
          version: require('@babel/runtime/package.json').version,
          regenerator: true,
          // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
          // We should turn this on once the lowest version of Node LTS
          // supports ES Modules.
          useESModules,
          // Undocumented option that lets us encapsulate our runtime, ensuring
          // the correct version is used
          // https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
          absoluteRuntime: absoluteRuntimePath,
        },
      ],
      isEnvProduction && [
        // Remove PropTypes from production build
        require('babel-plugin-transform-react-remove-prop-types').default,
        {
          removeImport: true,
        },
      ],
      // Optional chaining and nullish coalescing are supported in @babel/preset-env,
      // but not yet supported in webpack due to support missing from acorn.
      // These can be removed once webpack has support.
      // See https://github.com/facebook/create-react-app/issues/8445#issuecomment-588512250
      require('@babel/plugin-proposal-optional-chaining').default,
      require('@babel/plugin-proposal-nullish-coalescing-operator').default,
    ].filter(Boolean),
    overrides: [
      isFlowEnabled && {
        exclude: /\.tsx?$/,
        plugins: [require('@babel/plugin-transform-flow-strip-types').default],
      },
      isTypeScriptEnabled && {
        test: /\.tsx?$/,
        plugins: [
          [
            require('@babel/plugin-proposal-decorators').default,
            { legacy: true },
          ],
        ],
      },
    ].filter(Boolean),
  };
};
