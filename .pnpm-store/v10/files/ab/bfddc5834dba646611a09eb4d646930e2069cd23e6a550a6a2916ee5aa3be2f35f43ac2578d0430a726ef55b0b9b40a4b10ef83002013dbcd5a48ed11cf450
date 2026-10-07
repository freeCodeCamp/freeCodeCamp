/**
* @license React
 * react-server-dom-webpack-node-loader.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { acorn } from 'acorn';

var ReactSharedInternals = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var assign = Object.assign;

var warnedAboutConditionsFlag = false;
var stashedGetSource = null;
var stashedResolve = null;
async function resolve(specifier, context, defaultResolve) {
  // We stash this in case we end up needing to resolve export * statements later.
  stashedResolve = defaultResolve;

  if (!context.conditions.includes('react-server')) {
    context = assign({}, context, {
      conditions: [].concat(context.conditions, ['react-server'])
    });

    if (!warnedAboutConditionsFlag) {
      warnedAboutConditionsFlag = true; // eslint-disable-next-line react-internal/no-production-logging

      warn('You did not run Node.js with the `--conditions react-server` flag. ' + 'Any "react-server" override will only work with ESM imports.');
    }
  }

  var resolved = await defaultResolve(specifier, context, defaultResolve);

  if (resolved.url.endsWith('.server.js')) {
    var parentURL = context.parentURL;

    if (parentURL && !parentURL.endsWith('.server.js')) {
      var reason;

      if (specifier.endsWith('.server.js')) {
        reason = "\"" + specifier + "\"";
      } else {
        reason = "\"" + specifier + "\" (which expands to \"" + resolved.url + "\")";
      }

      throw new Error("Cannot import " + reason + " from \"" + parentURL + "\". " + 'By react-server convention, .server.js files can only be imported from other .server.js files. ' + 'That way nobody accidentally sends these to the client by indirectly importing it.');
    }
  }

  return resolved;
}
async function getSource(url, context, defaultGetSource) {
  // We stash this in case we end up needing to resolve export * statements later.
  stashedGetSource = defaultGetSource;
  return defaultGetSource(url, context, defaultGetSource);
}

function addExportNames(names, node) {
  switch (node.type) {
    case 'Identifier':
      names.push(node.name);
      return;

    case 'ObjectPattern':
      for (var i = 0; i < node.properties.length; i++) {
        addExportNames(names, node.properties[i]);
      }

      return;

    case 'ArrayPattern':
      for (var _i = 0; _i < node.elements.length; _i++) {
        var element = node.elements[_i];
        if (element) addExportNames(names, element);
      }

      return;

    case 'Property':
      addExportNames(names, node.value);
      return;

    case 'AssignmentPattern':
      addExportNames(names, node.left);
      return;

    case 'RestElement':
      addExportNames(names, node.argument);
      return;

    case 'ParenthesizedExpression':
      addExportNames(names, node.expression);
      return;
  }
}

function resolveClientImport(specifier, parentURL) {
  // Resolve an import specifier as if it was loaded by the client. This doesn't use
  // the overrides that this loader does but instead reverts to the default.
  // This resolution algorithm will not necessarily have the same configuration
  // as the actual client loader. It should mostly work and if it doesn't you can
  // always convert to explicit exported names instead.
  var conditions = ['node', 'import'];

  if (stashedResolve === null) {
    throw new Error('Expected resolve to have been called before transformSource');
  }

  return stashedResolve(specifier, {
    conditions: conditions,
    parentURL: parentURL
  }, stashedResolve);
}

async function loadClientImport(url, defaultTransformSource) {
  if (stashedGetSource === null) {
    throw new Error('Expected getSource to have been called before transformSource');
  } // TODO: Validate that this is another module by calling getFormat.


  var _await$stashedGetSour = await stashedGetSource(url, {
    format: 'module'
  }, stashedGetSource),
      source = _await$stashedGetSour.source;

  return defaultTransformSource(source, {
    format: 'module',
    url: url
  }, defaultTransformSource);
}

async function parseExportNamesInto(transformedSource, names, parentURL, defaultTransformSource) {
  var _acorn$parse = acorn.parse(transformedSource, {
    ecmaVersion: '2019',
    sourceType: 'module'
  }),
      body = _acorn$parse.body;

  for (var i = 0; i < body.length; i++) {
    var node = body[i];

    switch (node.type) {
      case 'ExportAllDeclaration':
        if (node.exported) {
          addExportNames(names, node.exported);
          continue;
        } else {
          var _await$resolveClientI = await resolveClientImport(node.source.value, parentURL),
              url = _await$resolveClientI.url;

          var _await$loadClientImpo = await loadClientImport(url, defaultTransformSource),
              source = _await$loadClientImpo.source;

          if (typeof source !== 'string') {
            throw new Error('Expected the transformed source to be a string.');
          }

          parseExportNamesInto(source, names, url, defaultTransformSource);
          continue;
        }

      case 'ExportDefaultDeclaration':
        names.push('default');
        continue;

      case 'ExportNamedDeclaration':
        if (node.declaration) {
          if (node.declaration.type === 'VariableDeclaration') {
            var declarations = node.declaration.declarations;

            for (var j = 0; j < declarations.length; j++) {
              addExportNames(names, declarations[j].id);
            }
          } else {
            addExportNames(names, node.declaration.id);
          }
        }

        if (node.specifiers) {
          var specifiers = node.specifiers;

          for (var _j = 0; _j < specifiers.length; _j++) {
            addExportNames(names, specifiers[_j].exported);
          }
        }

        continue;
    }
  }
}

async function transformSource(source, context, defaultTransformSource) {
  var transformed = await defaultTransformSource(source, context, defaultTransformSource);

  if (context.format === 'module' && context.url.endsWith('.client.js')) {
    var transformedSource = transformed.source;

    if (typeof transformedSource !== 'string') {
      throw new Error('Expected source to have been transformed to a string.');
    }

    var names = [];
    await parseExportNamesInto(transformedSource, names, context.url, defaultTransformSource);
    var newSrc = "const MODULE_REFERENCE = Symbol.for('react.module.reference');\n";

    for (var i = 0; i < names.length; i++) {
      var name = names[i];

      if (name === 'default') {
        newSrc += 'export default ';
      } else {
        newSrc += 'export const ' + name + ' = ';
      }

      newSrc += '{ $$typeof: MODULE_REFERENCE, filepath: ';
      newSrc += JSON.stringify(context.url);
      newSrc += ', name: ';
      newSrc += JSON.stringify(name);
      newSrc += '};\n';
    }

    return {
      source: newSrc
    };
  }

  return transformed;
}

export { getSource, resolve, transformSource };
