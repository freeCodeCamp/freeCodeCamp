/**
 * @typedef ModuleRuntimeOptions {Object}
 * @property {boolean} const Use ES6 `const` and `let` in generated runtime code.
 * @property {'cjs' | 'esm'} moduleSystem The module system to be used.
 */

/**
 * Generates code appended to each JS-like module for react-refresh capabilities.
 *
 * `__react_refresh_utils__` will be replaced with actual utils during source parsing by `webpack.ProvidePlugin`.
 *
 * [Reference for Runtime Injection](https://github.com/webpack/webpack/blob/b07d3b67d2252f08e4bb65d354a11c9b69f8b434/lib/HotModuleReplacementPlugin.js#L419)
 * [Reference for HMR Error Recovery](https://github.com/webpack/webpack/issues/418#issuecomment-490296365)
 *
 * @param {import('webpack').Template} Webpack's templating helpers.
 * @param {ModuleRuntimeOptions} options The refresh module runtime options.
 * @returns {string} The refresh module runtime template.
 */
function getRefreshModuleRuntime(Template, options) {
  const constDeclaration = options.const ? 'const' : 'var';
  const letDeclaration = options.const ? 'let' : 'var';
  const webpackHot = options.moduleSystem === 'esm' ? 'import.meta.webpackHot' : 'module.hot';
  return Template.asString([
    `${constDeclaration} $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;`,
    `${constDeclaration} $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(`,
    Template.indent('$ReactRefreshModuleId$'),
    ');',
    '',
    'function $ReactRefreshModuleRuntime$(exports) {',
    Template.indent([
      `if (${webpackHot}) {`,
      Template.indent([
        `${letDeclaration} errorOverlay;`,
        "if (typeof __react_refresh_error_overlay__ !== 'undefined') {",
        Template.indent('errorOverlay = __react_refresh_error_overlay__;'),
        '}',
        `${letDeclaration} testMode;`,
        "if (typeof __react_refresh_test__ !== 'undefined') {",
        Template.indent('testMode = __react_refresh_test__;'),
        '}',
        'return __react_refresh_utils__.executeRuntime(',
        Template.indent([
          'exports,',
          '$ReactRefreshModuleId$,',
          `${webpackHot},`,
          'errorOverlay,',
          'testMode',
        ]),
        ');',
      ]),
      '}',
    ]),
    '}',
    '',
    "if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {",
    Template.indent('$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);'),
    '} else {',
    Template.indent('$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);'),
    '}',
  ]);
}

module.exports = getRefreshModuleRuntime;
