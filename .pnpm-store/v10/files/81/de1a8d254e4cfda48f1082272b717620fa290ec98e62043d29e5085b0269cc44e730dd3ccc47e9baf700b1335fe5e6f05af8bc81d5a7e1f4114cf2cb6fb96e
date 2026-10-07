"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isValidCollectionPathImplementation = isValidCollectionPathImplementation;
var _path = _interopRequireDefault(require("path"));
var _errorUtils = require("./error-utils");
// This file is a helper for consumers. It's going to log an error to them if they
// in any way have an incorrect filepath setup for us to predictably use collection
// querying.
//
// Without this, users will can get mystic errors.
function isValidCollectionPathImplementation(filePath, reporter) {
  const parts = filePath.split(_path.default.sep);
  let passing = false;
  let errors = 0;
  parts.forEach(part => {
    if (!part.includes(`{`) && !part.includes(`}`)) return;
    const model = Array.from(part.matchAll(/\{([a-zA-Z_]\w*)./g)); // Search for word before first dot, e.g. Model
    const field = Array.from(part.matchAll(/.*?((?<=\w\.)[^}]*)}/g)); // Search for everything after the first dot, e.g. foo__bar (or in invalid case: foo.bar)
    try {
      if (model.length === 0 || field.length === 0 || model.length !== field.length) {
        throw new Error(errorMessage(part));
      }
      const models = Array.from(model, m => m[1]);
      const fields = Array.from(field, f => f[1]);
      for (const m of models) {
        assert(m, /^[a-zA-Z_]\w*$/, errorMessage(part)); // Check that Model is https://spec.graphql.org/draft/#sec-Names
      }

      for (const f of fields) {
        assert(f, /^[a-zA-Z_][\w_()]*$/, errorMessage(part)); // Check that field is foo__bar__baz (and not foo.bar.baz) + https://spec.graphql.org/draft/#sec-Names
      }
    } catch (e) {
      reporter.panicOnBuild({
        id: (0, _errorUtils.prefixId)(_errorUtils.CODES.CollectionPath),
        context: {
          sourceMessage: e.message
        },
        filePath: filePath
      });
      errors++;
    }
  });
  if (errors === 0) {
    passing = true;
  }
  return passing;
}
function errorMessage(part) {
  return `Collection page builder encountered an error parsing the filepath. To use collection paths the schema to follow is {Model.field__subfield}. The problematic part is: ${part}.`;
}
function assert(part, matches, message) {
  const regexp = matches instanceof RegExp ? matches : new RegExp(matches);
  if (!part || regexp.test(part) === false) {
    throw new Error(message);
  }
}