"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _stackTrace = _interopRequireDefault(require("stack-trace"));
var _errorSchema = require("./error-schema");
var _errorMap = require("./error-map");
var _errors = require("../reporter/errors");
// Merge partial error details with information from the errorMap
// Validate the constructed object against an error schema
const constructError = ({
  details: {
    id,
    ...otherDetails
  }
}, suppliedErrorMap) => {
  let errorMapEntry = _errorMap.defaultError;
  if (id) {
    // Look at original errorMap, ids cannot be overwritten
    if (_errorMap.errorMap[id]) {
      errorMapEntry = _errorMap.errorMap[id];
    } else if (suppliedErrorMap[id]) {
      errorMapEntry = {
        type: `PLUGIN`,
        level: `ERROR`,
        ...suppliedErrorMap[id]
      };
    }
  }
  const type = typeof errorMapEntry.type === `function` ? errorMapEntry.type(otherDetails.context) : errorMapEntry.type;

  // merge
  const structuredError = {
    context: {},
    ...otherDetails,
    ...errorMapEntry,
    type,
    text: errorMapEntry.text(otherDetails.context),
    stack: otherDetails.error ? (0, _errors.sanitizeStructuredStackTrace)(_stackTrace.default.parse(otherDetails.error)) : [],
    docsUrl: errorMapEntry.docsUrl || `https://gatsby.dev/issue-how-to`
  };
  if (id) {
    structuredError.code = id;
  }

  // validate
  const {
    error
  } = _errorSchema.errorSchema.validate(structuredError);
  if (error) {
    console.log(`Failed to validate error`, error);
    process.exit(1);
  }
  return structuredError;
};
var _default = constructError;
exports.default = _default;