const { getRefreshGlobalScope } = require('../globals');

/**
 * @typedef {Object} RuntimeTemplate
 * @property {function(string, string[]): string} basicFunction
 * @property {function(): boolean} supportsConst
 * @property {function(string, string=): string} returningFunction
 */

/**
 * Generates the refresh global runtime template.
 * @param {import('webpack').Template} Template The template helpers.
 * @param {Record<string, string>} [RuntimeGlobals] The runtime globals.
 * @param {RuntimeTemplate} [RuntimeTemplate] The runtime template helpers.
 * @returns {string} The refresh global runtime template.
 */
function getRefreshGlobal(
  Template,
  RuntimeGlobals = {},
  RuntimeTemplate = {
    basicFunction(args, body) {
      return `function(${args}) {\n${Template.indent(body)}\n}`;
    },
    supportsConst() {
      return false;
    },
    returningFunction(returnValue, args = '') {
      return `function(${args}) { return ${returnValue}; }`;
    },
  }
) {
  const declaration = RuntimeTemplate.supportsConst() ? 'const' : 'var';
  const refreshGlobal = getRefreshGlobalScope(RuntimeGlobals);
  return Template.asString([
    `${refreshGlobal} = {`,
    Template.indent([
      // Lifecycle methods - They should be specific per module and restored after module execution.
      // These stubs ensure unwanted calls (e.g. unsupported patterns, broken transform) would not error out.
      // If the current module is processed by our loader,
      // they will be swapped in place during module initialisation by the `setup` method below.
      `register: ${RuntimeTemplate.returningFunction('undefined')},`,
      `signature: ${RuntimeTemplate.returningFunction(
        RuntimeTemplate.returningFunction('type', 'type')
      )},`,
      // Runtime - This should be a singleton and persist throughout the lifetime of the app.
      // This stub ensures calls to `runtime` would not error out.
      // If any module within the bundle is processed by our loader,
      // it will be swapped in place via an injected import.
      'runtime: {',
      Template.indent([
        `createSignatureFunctionForTransform: ${RuntimeTemplate.returningFunction(
          RuntimeTemplate.returningFunction('type', 'type')
        )},`,
        `register: ${RuntimeTemplate.returningFunction('undefined')}`,
      ]),
      '},',
      // Setup - This handles initialisation of the global runtime.
      // It should never be touched throughout the lifetime of the app.
      `setup: ${RuntimeTemplate.basicFunction('currentModuleId', [
        // Store all previous values for fields on `refreshGlobal` -
        // this allows proper restoration in the `cleanup` phase.
        `${declaration} prevModuleId = ${refreshGlobal}.moduleId;`,
        `${declaration} prevRegister = ${refreshGlobal}.register;`,
        `${declaration} prevSignature = ${refreshGlobal}.signature;`,
        `${declaration} prevCleanup = ${refreshGlobal}.cleanup;`,
        '',
        `${refreshGlobal}.moduleId = currentModuleId;`,
        '',
        `${refreshGlobal}.register = ${RuntimeTemplate.basicFunction('type, id', [
          `${declaration} typeId = currentModuleId + " " + id;`,
          `${refreshGlobal}.runtime.register(type, typeId);`,
        ])}`,
        '',
        `${refreshGlobal}.signature = ${RuntimeTemplate.returningFunction(
          `${refreshGlobal}.runtime.createSignatureFunctionForTransform()`
        )};`,
        '',
        `${refreshGlobal}.cleanup = ${RuntimeTemplate.basicFunction('cleanupModuleId', [
          // Only cleanup if the module IDs match.
          // In rare cases, it might get called in another module's `cleanup` phase.
          'if (currentModuleId === cleanupModuleId) {',
          Template.indent([
            `${refreshGlobal}.moduleId = prevModuleId;`,
            `${refreshGlobal}.register = prevRegister;`,
            `${refreshGlobal}.signature = prevSignature;`,
            `${refreshGlobal}.cleanup = prevCleanup;`,
          ]),
          '}',
        ])}`,
      ])}`,
    ]),
    '};',
  ]);
}

module.exports = getRefreshGlobal;
