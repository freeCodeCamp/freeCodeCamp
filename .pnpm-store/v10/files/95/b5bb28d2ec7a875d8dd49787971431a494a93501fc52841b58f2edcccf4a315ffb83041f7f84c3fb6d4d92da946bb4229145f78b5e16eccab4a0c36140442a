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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var SignedSource = require('signedsource');

function writeForSchema(schema, licenseHeader, codegenDir, getModuleName) {
  var header = '/**\n' + licenseHeader.map(function (line) {
    return " * ".concat(line, "\n");
  }).join('') + ' *\n' + " * ".concat(SignedSource.getSigningToken(), "\n") + ' * @flow strict\n' + ' */\n' + '\n';
  var enumTypes = schema.getTypes().filter(function (type) {
    return schema.isEnum(type);
  });

  var _iterator = (0, _createForOfIteratorHelper2["default"])(enumTypes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var type = _step.value;
      var enumType = schema.assertEnumType(type);
      var name = schema.getTypeString(type);
      var values = (0, _toConsumableArray2["default"])(schema.getEnumValues(enumType)).sort();
      var enumFileContent = header + "export type ".concat(name, " =\n  | '") + values.join("'\n  | '") + "'\n  | '%future added value';\n";
      codegenDir.writeFile("".concat(getModuleName(name), ".js"), SignedSource.signFile(enumFileContent));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

module.exports = {
  writeForSchema: writeForSchema
};