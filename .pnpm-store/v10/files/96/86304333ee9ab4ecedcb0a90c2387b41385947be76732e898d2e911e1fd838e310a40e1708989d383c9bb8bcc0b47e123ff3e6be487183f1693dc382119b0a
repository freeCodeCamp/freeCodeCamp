/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';
/**
 * Marks a string of code as code to be replaced later.
 */

function moduleDependency(code) {
  return "@@MODULE_START@@".concat(code, "@@MODULE_END@@");
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


function postProcess(json, printModule) {
  return json.replace(/"@@MODULE_START@@(.*?)@@MODULE_END@@"/g, function (_, moduleName) {
    return printModule(moduleName);
  });
}
/**
 * Transforms a value such that any transitive CodeMarker strings are replaced
 * with the value of the named module in the given module map.
 */


function transform(node, moduleMap) {
  if (node == null) {
    return node;
  } else if (Array.isArray(node)) {
    return node.map(function (item) {
      return transform(item, moduleMap);
    });
  } else if (typeof node === 'object') {
    var next = {};
    Object.keys(node).forEach(function (key) {
      next[key] = transform(node[key], moduleMap);
    });
    return next;
  } else if (typeof node === 'string') {
    var match = /^@@MODULE_START@@(.*?)@@MODULE_END@@$/.exec(node);

    if (match != null) {
      var moduleName = match[1];

      if (moduleMap.hasOwnProperty(moduleName)) {
        return moduleMap[moduleName];
      } else {
        throw new Error("Could not find a value for CodeMarker value '".concat(moduleName, "', ") + 'make sure to supply one in the module mapping.');
      }
    } else if (node.indexOf('@@MODULE_START') >= 0) {
      throw new Error("Found unprocessed CodeMarker value '".concat(node, "'."));
    }

    return node;
  } else {
    // mixed
    return node;
  }
}

module.exports = {
  moduleDependency: moduleDependency,
  postProcess: postProcess,
  transform: transform
};