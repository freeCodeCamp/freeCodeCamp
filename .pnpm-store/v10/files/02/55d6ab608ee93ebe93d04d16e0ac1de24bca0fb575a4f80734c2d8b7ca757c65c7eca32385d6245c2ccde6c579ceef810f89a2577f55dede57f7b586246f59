'use strict';

exports.__esModule = true;

/** @typedef {`.${string}`} Extension  */
/** @typedef {NonNullable<import('eslint').Rule.RuleContext['settings']> & { 'import/extensions'?: Extension[], 'import/parsers'?: { [k: string]: Extension[] }, 'import/cache'?: { lifetime: number | '∞' | 'Infinity' } }} ESLintSettings */

const moduleRequire = require('./module-require').default;
const extname = require('path').extname;
const fs = require('fs');

const log = require('debug')('eslint-plugin-import:parse');

/** @type {(parserPath: NonNullable<import('eslint').Rule.RuleContext['parserPath']>) => unknown} */
function getBabelEslintVisitorKeys(parserPath) {
  if (parserPath.endsWith('index.js')) {
    const hypotheticalLocation = parserPath.replace('index.js', 'visitor-keys.js');
    if (fs.existsSync(hypotheticalLocation)) {
      const keys = moduleRequire(hypotheticalLocation);
      return keys.default || keys;
    }
  }
  return null;
}

/** @type {(parserPath: import('eslint').Rule.RuleContext['parserPath'], parserInstance: { VisitorKeys: unknown }, parsedResult?: { visitorKeys?: unknown }) => unknown} */
function keysFromParser(parserPath, parserInstance, parsedResult) {
  // Exposed by @typescript-eslint/parser and @babel/eslint-parser
  if (parsedResult && parsedResult.visitorKeys) {
    return parsedResult.visitorKeys;
  }
  // The old babel parser doesn't have a `parseForESLint` eslint function, so we don't end
  // up with a `parsedResult` here.  It also doesn't expose the visitor keys on the parser itself,
  // so we have to try and infer the visitor-keys module from the parserPath.
  // This is NOT supported in flat config!
  if (typeof parserPath === 'string' && parserPath.indexOf('babel-eslint') > -1) {
    return getBabelEslintVisitorKeys(parserPath);
  }
  // The espree parser doesn't have the `parseForESLint` function, so we don't end up with a
  // `parsedResult` here, but it does expose the visitor keys on the parser instance that we can use.
  if (parserInstance && parserInstance.VisitorKeys) {
    return parserInstance.VisitorKeys;
  }
  return null;
}

// this exists to smooth over the unintentional breaking change in v2.7.
// TODO, semver-major: avoid mutating `ast` and return a plain object instead.
/** @type {<T extends import('eslint').AST.Program>(ast: T, visitorKeys: unknown) => T} */
function makeParseReturn(ast, visitorKeys) {
  if (ast) {
    // @ts-expect-error see TODO
    ast.visitorKeys = visitorKeys;
    // @ts-expect-error see TODO
    ast.ast = ast;
  }
  return ast;
}

/** @type {(text: string) => string} */
function stripUnicodeBOM(text) {
  return text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text;
}

/** @type {(text: string) => string} */
function transformHashbang(text) {
  return text.replace(/^#!([^\r\n]+)/u, (_, captured) => `//${captured}`);
}

/** @type {(path: string, context: import('eslint').Rule.RuleContext & { settings?: ESLintSettings }) => import('eslint').Rule.RuleContext['parserPath']} */
function getParserPath(path, context) {
  const parsers = context.settings['import/parsers'];
  if (parsers != null) {
    // eslint-disable-next-line no-extra-parens
    const extension = /** @type {Extension} */ (extname(path));
    for (const parserPath in parsers) {
      if (parsers[parserPath].indexOf(extension) > -1) {
        // use this alternate parser
        log('using alt parser:', parserPath);
        return parserPath;
      }
    }
  }
  // default to use ESLint parser
  return context.parserPath;
}

/** @type {(path: string, context: import('eslint').Rule.RuleContext) => string | null | import('eslint').Linter.ParserModule | import('eslint').Linter.FlatConfigParserModule} */
function getParser(path, context) {
  const parserPath = getParserPath(path, context);
  if (parserPath) {
    return parserPath;
  }
  if (
    !!context.languageOptions
    && !!context.languageOptions.parser
    && typeof context.languageOptions.parser !== 'string'
    && (
      // @ts-expect-error TODO: figure out a better type
      typeof context.languageOptions.parser.parse === 'function'
      // @ts-expect-error TODO: figure out a better type
      || typeof context.languageOptions.parser.parseForESLint === 'function'
    )
  ) {
    return context.languageOptions.parser;
  }

  return null;
}

/** @type {import('./parse').default} */
exports.default = function parse(path, content, context) {
  if (context == null) { throw new Error('need context to parse properly'); }

  // ESLint in "flat" mode only sets context.languageOptions.parserOptions
  const languageOptions = context.languageOptions;
  let parserOptions = languageOptions && languageOptions.parserOptions || context.parserOptions;
  const parserOrPath = getParser(path, context);

  if (!parserOrPath) { throw new Error('parserPath or languageOptions.parser is required!'); }

  // hack: espree blows up with frozen options
  parserOptions = Object.assign({}, parserOptions);
  parserOptions.ecmaFeatures = Object.assign({}, parserOptions.ecmaFeatures);

  // always include comments and tokens (for doc parsing)
  parserOptions.comment = true;
  parserOptions.attachComment = true;  // keeping this for backward-compat with  older parsers
  parserOptions.tokens = true;

  // attach node locations
  parserOptions.loc = true;
  parserOptions.range = true;

  // provide the `filePath` like eslint itself does, in `parserOptions`
  // https://github.com/eslint/eslint/blob/3ec436ee/lib/linter.js#L637
  parserOptions.filePath = path;

  // @typescript-eslint/parser will parse the entire project with typechecking if you provide
  // "project" or "projects" in parserOptions. Removing these options means the parser will
  // only parse one file in isolate mode, which is much, much faster.
  // https://github.com/import-js/eslint-plugin-import/issues/1408#issuecomment-509298962
  delete parserOptions.EXPERIMENTAL_useProjectService;
  delete parserOptions.projectService;
  delete parserOptions.project;
  delete parserOptions.projects;

  // If this is a flat config, we need to add ecmaVersion and sourceType (if present) from languageOptions
  if (languageOptions && languageOptions.ecmaVersion) {
    parserOptions.ecmaVersion = languageOptions.ecmaVersion;
  }
  if (languageOptions && languageOptions.sourceType) {
    // @ts-expect-error languageOptions is from the flatConfig Linter type in 8.57 while parserOptions is not.
    // Non-flat config parserOptions.sourceType doesn't have "commonjs" in the type.  Once upgraded to v9 types,
    // they'll be the same and this expect-error should be removed.
    parserOptions.sourceType = languageOptions.sourceType;
  }

  // require the parser relative to the main module (i.e., ESLint)
  const parser = typeof parserOrPath === 'string' ? moduleRequire(parserOrPath) : parserOrPath;

  // replicate bom strip and hashbang transform of ESLint
  // https://github.com/eslint/eslint/blob/b93af98b3c417225a027cabc964c38e779adb945/lib/linter/linter.js#L779
  content = transformHashbang(stripUnicodeBOM(String(content)));

  if (typeof parser.parseForESLint === 'function') {
    let ast;
    try {
      const parserRaw = parser.parseForESLint(content, parserOptions);
      ast = parserRaw.ast;
      // @ts-expect-error TODO: FIXME
      return makeParseReturn(ast, keysFromParser(parserOrPath, parser, parserRaw));
    } catch (e) {
      console.warn();
      console.warn('Error while parsing ' + parserOptions.filePath);
      // @ts-expect-error e is almost certainly an Error here
      console.warn('Line ' + e.lineNumber + ', column ' + e.column + ': ' + e.message);
    }
    if (!ast || typeof ast !== 'object') {
      console.warn(
        // Can only be invalid for custom parser per imports/parser
        '`parseForESLint` from parser `' + (typeof parserOrPath === 'string' ? parserOrPath : 'context.languageOptions.parser') + '` is invalid and will just be ignored'
      );
    } else {
      // @ts-expect-error TODO: FIXME
      return makeParseReturn(ast, keysFromParser(parserOrPath, parser, undefined));
    }
  }

  const ast = parser.parse(content, parserOptions);
  // @ts-expect-error TODO: FIXME
  return makeParseReturn(ast, keysFromParser(parserOrPath, parser, undefined));
};
