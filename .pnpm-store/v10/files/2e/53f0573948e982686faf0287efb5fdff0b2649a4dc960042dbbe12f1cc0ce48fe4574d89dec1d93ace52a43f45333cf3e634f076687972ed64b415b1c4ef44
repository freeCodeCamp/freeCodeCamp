"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsdoccomment = require("@es-joy/jsdoccomment");
var _debug = _interopRequireDefault(require("debug"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const debug = (0, _debug.default)('requireExportJsdoc');

/**
 * @typedef {{
 *   value: string
 * }} ValueObject
 */

/**
 * @typedef {{
 *   type?: string,
 *   value?: ValueObject|import('eslint').Rule.Node,
 *   props: {
 *     [key: string]: CreatedNode|null,
 *   },
 *   special?: true,
 *   globalVars?: CreatedNode,
 *   exported?: boolean,
 *   ANONYMOUS_DEFAULT?: import('eslint').Rule.Node
 * }} CreatedNode
 */

/**
 * @returns {CreatedNode}
 */
const createNode = function () {
  return {
    props: {}
  };
};

/**
 * @param {CreatedNode|null} symbol
 * @returns {string|null}
 */
const getSymbolValue = function (symbol) {
  /* c8 ignore next 3 */
  if (!symbol) {
    return null;
  }

  /* c8 ignore else */
  if (symbol.type === 'literal') {
    return /** @type {ValueObject} */symbol.value.value;
  }
  /* c8 ignore next */
  return null;
};

/**
 *
 * @param {import('estree').Identifier} node
 * @param {CreatedNode} globals
 * @param {CreatedNode} scope
 * @param {SymbolOptions} opts
 * @returns {CreatedNode|null}
 */
const getIdentifier = function (node, globals, scope, opts) {
  if (opts.simpleIdentifier) {
    // Type is Identier for noncomputed properties
    const identifierLiteral = createNode();
    identifierLiteral.type = 'literal';
    identifierLiteral.value = {
      value: node.name
    };
    return identifierLiteral;
  }

  /* c8 ignore next */
  const block = scope || globals;

  // As scopes are not currently supported, they are not traversed upwards recursively
  if (block.props[node.name]) {
    return block.props[node.name];
  }

  // Seems this will only be entered once scopes added and entered
  /* c8 ignore next 3 */
  if (globals.props[node.name]) {
    return globals.props[node.name];
  }
  return null;
};

/**
 * @callback CreateSymbol
 * @param {import('eslint').Rule.Node|null} node
 * @param {CreatedNode} globals
 * @param {import('eslint').Rule.Node|null} value
 * @param {CreatedNode} [scope]
 * @param {boolean|SymbolOptions} [isGlobal]
 * @returns {CreatedNode|null}
 */

/** @type {CreateSymbol} */
let createSymbol; // eslint-disable-line prefer-const

/* eslint-disable complexity -- Temporary */

/**
 * @typedef {{
 *   simpleIdentifier?: boolean
 * }} SymbolOptions
 */

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode} globals
 * @param {CreatedNode} scope
 * @param {SymbolOptions} [opt]
 * @returns {CreatedNode|null}
 */
const getSymbol = function (node, globals, scope, opt) {
  /* eslint-enable complexity -- Temporary */
  const opts = opt || {};
  /* c8 ignore next */
  switch (node.type) {
    case 'Identifier':
      {
        return getIdentifier(node, globals, scope, opts);
      }
    case 'MemberExpression':
      {
        const obj = getSymbol( /** @type {import('eslint').Rule.Node} */
        node.object, globals, scope, opts);
        const propertySymbol = getSymbol( /** @type {import('eslint').Rule.Node} */
        node.property, globals, scope, {
          simpleIdentifier: !node.computed
        });
        const propertyValue = getSymbolValue(propertySymbol);

        /* c8 ignore else */
        if (obj && propertyValue && obj.props[propertyValue]) {
          const block = obj.props[propertyValue];
          return block;
        }
        /* c8 ignore next 10 */
        /*
        if (opts.createMissingProps && propertyValue) {
          obj.props[propertyValue] = createNode();
           return obj.props[propertyValue];
        }
        */
        debug(`MemberExpression: Missing property ${/** @type {import('estree').PrivateIdentifier} */node.property.name}`);
        /* c8 ignore next 2 */
        return null;
      }
    case 'ClassExpression':
      {
        return getSymbol( /** @type {import('eslint').Rule.Node} */
        node.body, globals, scope, opts);
      }

    /* c8 ignore next 7 -- No longer needed? */
    // @ts-expect-error TS OK
    case 'TSTypeAliasDeclaration':
    // @ts-expect-error TS OK
    // Fallthrough
    case 'TSEnumDeclaration':
    // @ts-expect-error TS OK
    case 'TSInterfaceDeclaration':
    case 'ClassDeclaration':
    case 'FunctionExpression':
    case 'FunctionDeclaration':
    case 'ArrowFunctionExpression':
      {
        const val = createNode();
        val.props.prototype = createNode();
        val.props.prototype.type = 'object';
        val.type = 'object';
        val.value = node;
        return val;
      }
    case 'AssignmentExpression':
      {
        return createSymbol( /** @type {import('eslint').Rule.Node} */
        node.left, globals, /** @type {import('eslint').Rule.Node} */
        node.right, scope, opts);
      }
    case 'ClassBody':
      {
        const val = createNode();
        for (const method of node.body) {
          val.props[/** @type {import('estree').Identifier} */( /** @type {import('estree').MethodDefinition} */method.key).name] = createNode();
          /** @type {{[key: string]: CreatedNode}} */
          val.props[/** @type {import('estree').Identifier} */( /** @type {import('estree').MethodDefinition} */method.key).name].type = 'object';
          /** @type {{[key: string]: CreatedNode}} */
          val.props[/** @type {import('estree').Identifier} */( /** @type {import('estree').MethodDefinition} */method.key).name].value = /** @type {import('eslint').Rule.Node} */
          /** @type {import('estree').MethodDefinition} */method.value;
        }
        val.type = 'object';
        val.value = node.parent;
        return val;
      }
    case 'ObjectExpression':
      {
        const val = createNode();
        val.type = 'object';
        for (const prop of node.properties) {
          if ([
          // typescript-eslint, espree, acorn, etc.
          'SpreadElement',
          // @babel/eslint-parser
          'ExperimentalSpreadProperty'].includes(prop.type)) {
            continue;
          }
          const propVal = getSymbol( /** @type {import('eslint').Rule.Node} */
          /** @type {import('estree').Property} */
          prop.value, globals, scope, opts);
          /* c8 ignore next 8 */
          if (propVal) {
            val.props[/** @type {import('estree').PrivateIdentifier} */
            ( /** @type {import('estree').Property} */prop.key).name] = propVal;
          }
        }
        return val;
      }
    case 'Literal':
      {
        const val = createNode();
        val.type = 'literal';
        val.value = node;
        return val;
      }
  }
  /* c8 ignore next */
  return null;
};

/**
 *
 * @param {CreatedNode} block
 * @param {string} name
 * @param {CreatedNode|null} value
 * @param {CreatedNode} globals
 * @param {boolean|SymbolOptions|undefined} isGlobal
 * @returns {void}
 */
const createBlockSymbol = function (block, name, value, globals, isGlobal) {
  block.props[name] = value;
  if (isGlobal && globals.props.window && globals.props.window.special) {
    globals.props.window.props[name] = value;
  }
};
createSymbol = function (node, globals, value, scope, isGlobal) {
  const block = scope || globals;
  /* c8 ignore next 3 */
  if (!node) {
    return null;
  }
  let symbol;
  switch (node.type) {
    case 'FunctionDeclaration':
    /* c8 ignore next */
    // @ts-expect-error TS OK
    // Fall through
    case 'TSEnumDeclaration':
    case 'TSInterfaceDeclaration':
    /* c8 ignore next */
    // @ts-expect-error TS OK
    // Fall through
    case 'TSTypeAliasDeclaration':
    case 'ClassDeclaration':
      {
        const nde = /** @type {import('estree').ClassDeclaration} */node;
        /* c8 ignore else */
        if (nde.id && nde.id.type === 'Identifier') {
          return createSymbol( /** @type {import('eslint').Rule.Node} */nde.id, globals, node, globals);
        }
        /* c8 ignore next 2 */
        break;
      }
    case 'Identifier':
      {
        const nde = /** @type {import('estree').Identifier} */node;
        if (value) {
          const valueSymbol = getSymbol(value, globals, block);
          /* c8 ignore else */
          if (valueSymbol) {
            createBlockSymbol(block, nde.name, valueSymbol, globals, isGlobal);
            return block.props[nde.name];
          }
          /* c8 ignore next */
          debug('Identifier: Missing value symbol for %s', nde.name);
        } else {
          createBlockSymbol(block, nde.name, createNode(), globals, isGlobal);
          return block.props[nde.name];
        }
        /* c8 ignore next 2 */
        break;
      }
    case 'MemberExpression':
      {
        const nde = /** @type {import('estree').MemberExpression} */node;
        symbol = getSymbol( /** @type {import('eslint').Rule.Node} */nde.object, globals, block);
        const propertySymbol = getSymbol( /** @type {import('eslint').Rule.Node} */nde.property, globals, block, {
          simpleIdentifier: !nde.computed
        });
        const propertyValue = getSymbolValue(propertySymbol);
        if (symbol && propertyValue) {
          createBlockSymbol(symbol, propertyValue, getSymbol( /** @type {import('eslint').Rule.Node} */
          value, globals, block), globals, isGlobal);
          return symbol.props[propertyValue];
        }
        debug('MemberExpression: Missing symbol: %s', /** @type {import('estree').Identifier} */nde.property.name);
        break;
      }
  }
  return null;
};

/**
 * Creates variables from variable definitions
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode} globals
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opts
 * @returns {void}
 */
const initVariables = function (node, globals, opts) {
  switch (node.type) {
    case 'Program':
      {
        for (const childNode of node.body) {
          initVariables( /** @type {import('eslint').Rule.Node} */
          childNode, globals, opts);
        }
        break;
      }
    case 'ExpressionStatement':
      {
        initVariables( /** @type {import('eslint').Rule.Node} */
        node.expression, globals, opts);
        break;
      }
    case 'VariableDeclaration':
      {
        for (const declaration of node.declarations) {
          // let and const
          const symbol = createSymbol( /** @type {import('eslint').Rule.Node} */
          declaration.id, globals, null, globals);
          if (opts.initWindow && node.kind === 'var' && globals.props.window) {
            // If var, also add to window
            globals.props.window.props[/** @type {import('estree').Identifier} */
            declaration.id.name] = symbol;
          }
        }
        break;
      }
    case 'ExportNamedDeclaration':
      {
        if (node.declaration) {
          initVariables( /** @type {import('eslint').Rule.Node} */
          node.declaration, globals, opts);
        }
        break;
      }
  }
};

/* eslint-disable complexity -- Temporary */

/**
 * Populates variable maps using AST
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode} globals
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opt
 * @param {true} [isExport]
 * @returns {boolean}
 */
const mapVariables = function (node, globals, opt, isExport) {
  /* eslint-enable complexity -- Temporary */
  /* c8 ignore next */
  const opts = opt || {};
  /* c8 ignore next */
  switch (node.type) {
    case 'Program':
      {
        if (opts.ancestorsOnly) {
          return false;
        }
        for (const childNode of node.body) {
          mapVariables( /** @type {import('eslint').Rule.Node} */
          childNode, globals, opts);
        }
        break;
      }
    case 'ExpressionStatement':
      {
        mapVariables( /** @type {import('eslint').Rule.Node} */
        node.expression, globals, opts);
        break;
      }
    case 'AssignmentExpression':
      {
        createSymbol( /** @type {import('eslint').Rule.Node} */
        node.left, globals, /** @type {import('eslint').Rule.Node} */
        node.right);
        break;
      }
    case 'VariableDeclaration':
      {
        for (const declaration of node.declarations) {
          const isGlobal = Boolean(opts.initWindow && node.kind === 'var' && globals.props.window);
          const symbol = createSymbol( /** @type {import('eslint').Rule.Node} */
          declaration.id, globals, /** @type {import('eslint').Rule.Node} */
          declaration.init, globals, isGlobal);
          if (symbol && isExport) {
            symbol.exported = true;
          }
        }
        break;
      }
    case 'FunctionDeclaration':
      {
        /* c8 ignore next 10 */
        if ( /** @type {import('estree').Identifier} */node.id.type === 'Identifier') {
          createSymbol( /** @type {import('eslint').Rule.Node} */
          node.id, globals, node, globals, true);
        }
        break;
      }
    case 'ExportDefaultDeclaration':
      {
        const symbol = createSymbol( /** @type {import('eslint').Rule.Node} */
        node.declaration, globals, /** @type {import('eslint').Rule.Node} */
        node.declaration);
        if (symbol) {
          symbol.exported = true;
          /* c8 ignore next 6 */
        } else {
          // if (!node.id) {
          globals.ANONYMOUS_DEFAULT = /** @type {import('eslint').Rule.Node} */
          node.declaration;
        }
        break;
      }
    case 'ExportNamedDeclaration':
      {
        if (node.declaration) {
          if (node.declaration.type === 'VariableDeclaration') {
            mapVariables( /** @type {import('eslint').Rule.Node} */
            node.declaration, globals, opts, true);
          } else {
            const symbol = createSymbol( /** @type {import('eslint').Rule.Node} */
            node.declaration, globals, /** @type {import('eslint').Rule.Node} */
            node.declaration);
            /* c8 ignore next 3 */
            if (symbol) {
              symbol.exported = true;
            }
          }
        }
        for (const specifier of node.specifiers) {
          mapVariables( /** @type {import('eslint').Rule.Node} */
          specifier, globals, opts);
        }
        break;
      }
    case 'ExportSpecifier':
      {
        const symbol = getSymbol( /** @type {import('eslint').Rule.Node} */
        node.local, globals, globals);
        /* c8 ignore next 3 */
        if (symbol) {
          symbol.exported = true;
        }
        break;
      }
    case 'ClassDeclaration':
      {
        createSymbol( /** @type {import('eslint').Rule.Node|null} */node.id, globals, /** @type {import('eslint').Rule.Node} */node.body, globals);
        break;
      }
    default:
      {
        /* c8 ignore next */
        return false;
      }
  }
  return true;
};

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode|ValueObject|string|undefined|
 *   import('eslint').Rule.Node} block
 * @param {(CreatedNode|ValueObject|string|
 *   import('eslint').Rule.Node)[]} [cache]
 * @returns {boolean}
 */
const findNode = function (node, block, cache) {
  let blockCache = cache || [];
  if (!block || blockCache.includes(block)) {
    return false;
  }
  blockCache = blockCache.slice();
  blockCache.push(block);
  if (typeof block === 'object' && 'type' in block && (block.type === 'object' || block.type === 'MethodDefinition') && block.value === node) {
    return true;
  }
  if (typeof block !== 'object') {
    return false;
  }
  const props = 'props' in block && block.props || 'body' in block && block.body;
  for (const propval of Object.values(props || {})) {
    if (Array.isArray(propval)) {
      /* c8 ignore next 5 */
      if (propval.some(val => {
        return findNode(node, val, blockCache);
      })) {
        return true;
      }
    } else if (findNode(node, propval, blockCache)) {
      return true;
    }
  }
  return false;
};
const exportTypes = new Set(['ExportNamedDeclaration', 'ExportDefaultDeclaration']);
const ignorableNestedTypes = new Set(['FunctionDeclaration', 'ArrowFunctionExpression', 'FunctionExpression']);

/**
 * @param {import('eslint').Rule.Node} nde
 * @returns {import('eslint').Rule.Node|false}
 */
const getExportAncestor = function (nde) {
  let node = nde;
  let idx = 0;
  const ignorableIfDeep = ignorableNestedTypes.has(nde === null || nde === void 0 ? void 0 : nde.type);
  while (node) {
    // Ignore functions nested more deeply than say `export default function () {}`
    if (idx >= 2 && ignorableIfDeep) {
      break;
    }
    if (exportTypes.has(node.type)) {
      return node;
    }
    node = node.parent;
    idx++;
  }
  return false;
};
const canBeExportedByAncestorType = new Set(['TSPropertySignature', 'TSMethodSignature', 'ClassProperty', 'PropertyDefinition', 'Method']);
const canExportChildrenType = new Set(['TSInterfaceBody', 'TSInterfaceDeclaration', 'TSTypeLiteral', 'TSTypeAliasDeclaration', 'TSTypeParameterInstantiation', 'TSTypeReference', 'ClassDeclaration', 'ClassBody', 'ClassDefinition', 'ClassExpression', 'Program']);

/**
 * @param {import('eslint').Rule.Node} nde
 * @returns {false|import('eslint').Rule.Node}
 */
const isExportByAncestor = function (nde) {
  if (!canBeExportedByAncestorType.has(nde.type)) {
    return false;
  }
  let node = nde.parent;
  while (node) {
    if (exportTypes.has(node.type)) {
      return node;
    }
    if (!canExportChildrenType.has(node.type)) {
      return false;
    }
    node = node.parent;
  }
  return false;
};

/**
 *
 * @param {CreatedNode} block
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode[]} [cache] Currently unused
 * @returns {boolean}
 */
const findExportedNode = function (block, node, cache) {
  /* c8 ignore next 3 */
  if (block === null) {
    return false;
  }
  const blockCache = cache || [];
  const {
    props
  } = block;
  for (const propval of Object.values(props)) {
    const pval = /** @type {CreatedNode} */propval;
    blockCache.push(pval);
    if (pval.exported && (node === pval.value || findNode(node, pval.value))) {
      return true;
    }

    // No need to check `propval` for exported nodes as ESM
    //  exports are only global
  }
  return false;
};

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode} globals
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opt
 * @returns {boolean}
 */
const isNodeExported = function (node, globals, opt) {
  var _globals$props$module;
  const moduleExports = (_globals$props$module = globals.props.module) === null || _globals$props$module === void 0 || (_globals$props$module = _globals$props$module.props) === null || _globals$props$module === void 0 ? void 0 : _globals$props$module.exports;
  if (opt.initModuleExports && moduleExports && findNode(node, moduleExports)) {
    return true;
  }
  if (opt.initWindow && globals.props.window && findNode(node, globals.props.window)) {
    return true;
  }
  if (opt.esm && findExportedNode(globals, node)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @param {CreatedNode} globalVars
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opts
 * @returns {boolean}
 */
const parseRecursive = function (node, globalVars, opts) {
  // Iterate from top using recursion - stop at first processed node from top
  if (node.parent && parseRecursive(node.parent, globalVars, opts)) {
    return true;
  }
  return mapVariables(node, globalVars, opts);
};

/**
 *
 * @param {import('eslint').Rule.Node} ast
 * @param {import('eslint').Rule.Node} node
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opt
 * @returns {CreatedNode}
 */
const parse = function (ast, node, opt) {
  /* c8 ignore next 6 */
  const opts = opt || {
    ancestorsOnly: false,
    esm: true,
    initModuleExports: true,
    initWindow: true
  };
  const globalVars = createNode();
  if (opts.initModuleExports) {
    globalVars.props.module = createNode();
    globalVars.props.module.props.exports = createNode();
    globalVars.props.exports = globalVars.props.module.props.exports;
  }
  if (opts.initWindow) {
    globalVars.props.window = createNode();
    globalVars.props.window.special = true;
  }
  if (opts.ancestorsOnly) {
    parseRecursive(node, globalVars, opts);
  } else {
    initVariables(ast, globalVars, opts);
    mapVariables(ast, globalVars, opts);
  }
  return {
    globalVars,
    props: {}
  };
};
const accessibilityNodes = new Set(['PropertyDefinition', 'MethodDefinition']);

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @returns {boolean}
 */
const isPrivate = node => {
  return accessibilityNodes.has(node.type) && 'accessibility' in node && node.accessibility !== 'public' && node.accessibility !== undefined || 'key' in node && node.key.type === 'PrivateIdentifier';
};

/**
 *
 * @param {import('eslint').Rule.Node} node
 * @param {import('eslint').SourceCode} sourceCode
 * @param {import('./rules/requireJsdoc.js').RequireJsdocOpts} opt
 * @param {import('./iterateJsdoc.js').Settings} settings
 * @returns {boolean}
 */
const isUncommentedExport = function (node, sourceCode, opt, settings) {
  // console.log({node});
  // Optimize with ancestor check for esm
  if (opt.esm) {
    if (isPrivate(node) || node.parent && isPrivate(node.parent)) {
      return false;
    }
    const exportNode = getExportAncestor(node);

    // Is export node comment
    if (exportNode && !(0, _jsdoccomment.findJSDocComment)(exportNode, sourceCode, settings)) {
      return true;
    }

    /**
     * Some typescript types are not in variable map, but inherit exported (interface property and method)
     */
    if (isExportByAncestor(node) && !(0, _jsdoccomment.findJSDocComment)(node, sourceCode, settings)) {
      return true;
    }
  }
  const ast = /** @type {unknown} */sourceCode.ast;
  const parseResult = parse( /** @type {import('eslint').Rule.Node} */
  ast, node, opt);
  return isNodeExported(node, /** @type {CreatedNode} */parseResult.globalVars, opt);
};
var _default = exports.default = {
  isUncommentedExport,
  parse
};
module.exports = exports.default;
//# sourceMappingURL=exportParser.cjs.map