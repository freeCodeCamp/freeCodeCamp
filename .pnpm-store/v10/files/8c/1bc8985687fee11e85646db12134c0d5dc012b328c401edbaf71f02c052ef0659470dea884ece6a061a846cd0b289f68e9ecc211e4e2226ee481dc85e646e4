/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

/**
 * Marks a string of code as code to be replaced later.
 */
function moduleDependency(code: string): string {
  return `@@MODULE_START@@${code}@@MODULE_END@@`;
}

/**
 * After JSON.stringify'ing some code that contained parts marked with `mark()`,
 * this post-processes the JSON to convert the marked code strings to raw code.
 *
 * Example:
 *   CodeMarker.postProcess(
 *     JSON.stringify({code: CodeMarker.mark('alert(1)')})
 *   )
 */
function postProcess(json: string, printModule: string => string): string {
  return json.replace(
    /"@@MODULE_START@@(.*?)@@MODULE_END@@"/g,
    (_, moduleName) => printModule(moduleName),
  );
}

/**
 * Transforms a value such that any transitive CodeMarker strings are replaced
 * with the value of the named module in the given module map.
 */
function transform(node: mixed, moduleMap: {[string]: mixed, ...}): mixed {
  if (node == null) {
    return node;
  } else if (Array.isArray(node)) {
    return node.map(item => transform(item, moduleMap));
  } else if (typeof node === 'object') {
    const next = {};
    Object.keys(node).forEach(key => {
      next[key] = transform(node[key], moduleMap);
    });
    return next;
  } else if (typeof node === 'string') {
    const match = /^@@MODULE_START@@(.*?)@@MODULE_END@@$/.exec(node);
    if (match != null) {
      const moduleName = match[1];
      if (moduleMap.hasOwnProperty(moduleName)) {
        return moduleMap[moduleName];
      } else {
        throw new Error(
          `Could not find a value for CodeMarker value '${moduleName}', ` +
            'make sure to supply one in the module mapping.',
        );
      }
    } else if (node.indexOf('@@MODULE_START') >= 0) {
      throw new Error(`Found unprocessed CodeMarker value '${node}'.`);
    }
    return node;
  } else {
    // mixed
    return node;
  }
}

module.exports = {
  moduleDependency,
  postProcess,
  transform,
};
