'use strict';

exports.__esModule = true;

/** @typedef {import('estree').Node} Node */
/** @typedef {{ arguments: import('estree').CallExpression['arguments'], callee: Node }} Call */
/** @typedef {import('estree').ImportDeclaration | import('estree').ExportNamedDeclaration | import('estree').ExportAllDeclaration} Declaration */

/**
 * Returns an object of node visitors that will call
 * 'visitor' with every discovered module path.
 *
 * @type {(import('./moduleVisitor').default)}
 */
exports.default = function visitModules(visitor, options) {
  const ignore = options && options.ignore;
  const amd = !!(options && options.amd);
  const commonjs = !!(options && options.commonjs);
  // if esmodule is not explicitly disabled, it is assumed to be enabled
  const esmodule = !!Object.assign({ esmodule: true }, options).esmodule;

  const ignoreRegExps = ignore == null ? [] : ignore.map((p) => new RegExp(p));

  /** @type {(source: undefined | null | import('estree').Literal, importer: Parameters<typeof visitor>[1]) => void} */
  function checkSourceValue(source, importer) {
    if (source == null) { return; } //?

    // handle ignore
    if (ignoreRegExps.some((re) => re.test(String(source.value)))) { return; }

    // fire visitor
    visitor(source, importer);
  }

  // for import-y declarations
  /** @type {(node: Declaration) => void} */
  function checkSource(node) {
    checkSourceValue(node.source, node);
  }

  // for esmodule dynamic `import()` calls
  /** @type {(node: import('estree').ImportExpression | import('estree').CallExpression) => void} */
  function checkImportCall(node) {
    /** @type {import('estree').Expression | import('estree').Literal | import('estree').CallExpression['arguments'][0]} */
    let modulePath;
    // refs https://github.com/estree/estree/blob/HEAD/es2020.md#importexpression
    if (node.type === 'ImportExpression') {
      modulePath = node.source;
    } else if (node.type === 'CallExpression') {
      // @ts-expect-error this structure is from an older version of eslint
      if (node.callee.type !== 'Import') { return; }
      if (node.arguments.length !== 1) { return; }

      modulePath = node.arguments[0];
    } else {
      throw new TypeError('this should be unreachable');
    }

    if (modulePath.type !== 'Literal') { return; }
    if (typeof modulePath.value !== 'string') { return; }

    checkSourceValue(modulePath, node);
  }

  // for CommonJS `require` calls
  // adapted from @mctep: https://git.io/v4rAu
  /** @type {(call: Call) => void} */
  function checkCommon(call) {
    if (call.callee.type !== 'Identifier') { return; }
    if (call.callee.name !== 'require') { return; }
    if (call.arguments.length !== 1) { return; }

    const modulePath = call.arguments[0];
    if (modulePath.type !== 'Literal') { return; }
    if (typeof modulePath.value !== 'string') { return; }

    checkSourceValue(modulePath, call);
  }

  /** @type {(call: Call) => void} */
  function checkAMD(call) {
    if (call.callee.type !== 'Identifier') { return; }
    if (call.callee.name !== 'require' && call.callee.name !== 'define') { return; }
    if (call.arguments.length !== 2) { return; }

    const modules = call.arguments[0];
    if (modules.type !== 'ArrayExpression') { return; }

    for (const element of modules.elements) {
      if (!element) { continue; }
      if (element.type !== 'Literal') { continue; }
      if (typeof element.value !== 'string') { continue; }

      if (
        element.value === 'require'
        || element.value === 'exports'
      ) {
        continue; // magic modules: https://github.com/requirejs/requirejs/wiki/Differences-between-the-simplified-CommonJS-wrapper-and-standard-AMD-define#magic-modules
      }

      checkSourceValue(element, element);
    }
  }

  const visitors = {};
  if (esmodule) {
    Object.assign(visitors, {
      ImportDeclaration: checkSource,
      ExportNamedDeclaration: checkSource,
      ExportAllDeclaration: checkSource,
      CallExpression: checkImportCall,
      ImportExpression: checkImportCall,
    });
  }

  if (commonjs || amd) {
    const currentCallExpression = visitors.CallExpression;
    visitors.CallExpression = /** @type {(call: Call) => void} */ function (call) {
      if (currentCallExpression) { currentCallExpression(call); }
      if (commonjs) { checkCommon(call); }
      if (amd) { checkAMD(call); }
    };
  }

  return visitors;
};

/**
 * make an options schema for the module visitor, optionally adding extra fields.
 * @type {import('./moduleVisitor').makeOptionsSchema}
 */
function makeOptionsSchema(additionalProperties) {
  /** @type {import('./moduleVisitor').Schema} */
  const base =  {
    type: 'object',
    properties: {
      commonjs: { type: 'boolean' },
      amd: { type: 'boolean' },
      esmodule: { type: 'boolean' },
      ignore: {
        type: 'array',
        minItems: 1,
        items: { type: 'string' },
        uniqueItems: true,
      },
    },
    additionalProperties: false,
  };

  if (additionalProperties) {
    for (const key in additionalProperties) {
      // @ts-expect-error TS always has trouble with arbitrary object assignment/mutation
      base.properties[key] = additionalProperties[key];
    }
  }

  return base;
}
exports.makeOptionsSchema = makeOptionsSchema;

/**
 * json schema object for options parameter. can be used to build rule options schema object.
 */
exports.optionsSchema = makeOptionsSchema();
