"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchemaUnsupportedLiteralSpanErrorMessage = exports.getSchemaExtendErrorMessage = exports.getPrettyNoMatchingSchemaErrorMessage = exports.getPrettyNeverErrorMessage = exports.getPrettyMissingAnnotationErrorMessage = exports.getJSONSchemaUnsupportedPostRestElementsErrorMessage = exports.getJSONSchemaUnsupportedKeyErrorMessage = exports.getJSONSchemaMissingIdentifierAnnotationErrorMessage = exports.getJSONSchemaMissingAnnotationErrorMessage = exports.getInvalidArgumentErrorMessage = exports.getEquivalenceUnsupportedErrorMessage = exports.getArbitraryUnsupportedErrorMessage = exports.getArbitraryMissingAnnotationErrorMessage = exports.getArbitraryEmptyEnumErrorMessage = exports.getASTUnsupportedSchemaErrorMessage = exports.getASTUnsupportedRenameSchemaErrorMessage = exports.getASTUnsupportedLiteralErrorMessage = exports.getASTUnsupportedKeySchemaErrorMessage = exports.getASTRequiredElementFollowinAnOptionalElementErrorMessage = exports.getASTIndexSignatureParameterErrorMessage = exports.getASTDuplicatePropertySignatureTransformationErrorMessage = exports.getASTDuplicatePropertySignatureErrorMessage = exports.getASTDuplicateIndexSignatureErrorMessage = void 0;
var array_ = _interopRequireWildcard(require("../../Array.js"));
var Inspectable = _interopRequireWildcard(require("../../Inspectable.js"));
var util_ = _interopRequireWildcard(require("./util.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const getErrorMessage = (reason, details, path, ast) => {
  let out = reason;
  if (path && array_.isNonEmptyReadonlyArray(path)) {
    out += `\nat path: ${util_.formatPath(path)}`;
  }
  if (details !== undefined) {
    out += `\ndetails: ${details}`;
  }
  if (ast) {
    out += `\nschema (${ast._tag}): ${ast}`;
  }
  return out;
};
// ---------------------------------------------
// generic
// ---------------------------------------------
/** @internal */
const getInvalidArgumentErrorMessage = details => getErrorMessage("Invalid Argument", details);
exports.getInvalidArgumentErrorMessage = getInvalidArgumentErrorMessage;
const getUnsupportedSchemaErrorMessage = (details, path, ast) => getErrorMessage("Unsupported schema", details, path, ast);
const getMissingAnnotationErrorMessage = (details, path, ast) => getErrorMessage("Missing annotation", details, path, ast);
// ---------------------------------------------
// Arbitrary
// ---------------------------------------------
/** @internal */
const getArbitraryUnsupportedErrorMessage = (path, ast) => getUnsupportedSchemaErrorMessage("Cannot build an Arbitrary for this schema", path, ast);
/** @internal */
exports.getArbitraryUnsupportedErrorMessage = getArbitraryUnsupportedErrorMessage;
const getArbitraryMissingAnnotationErrorMessage = (path, ast) => getMissingAnnotationErrorMessage(`Generating an Arbitrary for this schema requires an "arbitrary" annotation`, path, ast);
/** @internal */
exports.getArbitraryMissingAnnotationErrorMessage = getArbitraryMissingAnnotationErrorMessage;
const getArbitraryEmptyEnumErrorMessage = path => getErrorMessage("Empty Enums schema", "Generating an Arbitrary for this schema requires at least one enum", path);
// ---------------------------------------------
// Equivalence
// ---------------------------------------------
/** @internal */
exports.getArbitraryEmptyEnumErrorMessage = getArbitraryEmptyEnumErrorMessage;
const getEquivalenceUnsupportedErrorMessage = (ast, path) => getUnsupportedSchemaErrorMessage("Cannot build an Equivalence", path, ast);
// ---------------------------------------------
// JSON Schema
// ---------------------------------------------
/** @internal */
exports.getEquivalenceUnsupportedErrorMessage = getEquivalenceUnsupportedErrorMessage;
const getJSONSchemaMissingAnnotationErrorMessage = (path, ast) => getMissingAnnotationErrorMessage(`Generating a JSON Schema for this schema requires a "jsonSchema" annotation`, path, ast);
/** @internal */
exports.getJSONSchemaMissingAnnotationErrorMessage = getJSONSchemaMissingAnnotationErrorMessage;
const getJSONSchemaMissingIdentifierAnnotationErrorMessage = (path, ast) => getMissingAnnotationErrorMessage(`Generating a JSON Schema for this schema requires an "identifier" annotation`, path, ast);
/** @internal */
exports.getJSONSchemaMissingIdentifierAnnotationErrorMessage = getJSONSchemaMissingIdentifierAnnotationErrorMessage;
const getJSONSchemaUnsupportedPostRestElementsErrorMessage = path => getErrorMessage("Generating a JSON Schema for post-rest elements is not currently supported. You're welcome to contribute by submitting a Pull Request", undefined, path);
/** @internal */
exports.getJSONSchemaUnsupportedPostRestElementsErrorMessage = getJSONSchemaUnsupportedPostRestElementsErrorMessage;
const getJSONSchemaUnsupportedKeyErrorMessage = (key, path) => getErrorMessage("Unsupported key", `Cannot encode ${Inspectable.formatPropertyKey(key)} key to JSON Schema`, path);
// ---------------------------------------------
// Pretty
// ---------------------------------------------
/** @internal */
exports.getJSONSchemaUnsupportedKeyErrorMessage = getJSONSchemaUnsupportedKeyErrorMessage;
const getPrettyMissingAnnotationErrorMessage = (path, ast) => getMissingAnnotationErrorMessage(`Generating a Pretty for this schema requires a "pretty" annotation`, path, ast);
/** @internal */
exports.getPrettyMissingAnnotationErrorMessage = getPrettyMissingAnnotationErrorMessage;
const getPrettyNeverErrorMessage = exports.getPrettyNeverErrorMessage = "Cannot pretty print a `never` value";
/** @internal */
const getPrettyNoMatchingSchemaErrorMessage = (actual, path, ast) => getErrorMessage("Unexpected Error", `Cannot find a matching schema for ${Inspectable.formatUnknown(actual)}`, path, ast);
// ---------------------------------------------
// Schema
// ---------------------------------------------
/** @internal */
exports.getPrettyNoMatchingSchemaErrorMessage = getPrettyNoMatchingSchemaErrorMessage;
const getSchemaExtendErrorMessage = (x, y, path) => getErrorMessage("Unsupported schema or overlapping types", `cannot extend ${x} with ${y}`, path);
/** @internal */
exports.getSchemaExtendErrorMessage = getSchemaExtendErrorMessage;
const getSchemaUnsupportedLiteralSpanErrorMessage = ast => getErrorMessage("Unsupported template literal span", undefined, undefined, ast);
// ---------------------------------------------
// AST
// ---------------------------------------------
/** @internal */
exports.getSchemaUnsupportedLiteralSpanErrorMessage = getSchemaUnsupportedLiteralSpanErrorMessage;
const getASTUnsupportedSchemaErrorMessage = ast => getUnsupportedSchemaErrorMessage(undefined, undefined, ast);
/** @internal */
exports.getASTUnsupportedSchemaErrorMessage = getASTUnsupportedSchemaErrorMessage;
const getASTUnsupportedKeySchemaErrorMessage = ast => getErrorMessage("Unsupported key schema", undefined, undefined, ast);
/** @internal */
exports.getASTUnsupportedKeySchemaErrorMessage = getASTUnsupportedKeySchemaErrorMessage;
const getASTUnsupportedLiteralErrorMessage = literal => getErrorMessage("Unsupported literal", `literal value: ${Inspectable.formatUnknown(literal)}`);
/** @internal */
exports.getASTUnsupportedLiteralErrorMessage = getASTUnsupportedLiteralErrorMessage;
const getASTDuplicateIndexSignatureErrorMessage = type => getErrorMessage("Duplicate index signature", `${type} index signature`);
/** @internal */
exports.getASTDuplicateIndexSignatureErrorMessage = getASTDuplicateIndexSignatureErrorMessage;
const getASTIndexSignatureParameterErrorMessage = exports.getASTIndexSignatureParameterErrorMessage = /*#__PURE__*/getErrorMessage("Unsupported index signature parameter", "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types");
/** @internal */
const getASTRequiredElementFollowinAnOptionalElementErrorMessage = exports.getASTRequiredElementFollowinAnOptionalElementErrorMessage = /*#__PURE__*/getErrorMessage("Invalid element", "A required element cannot follow an optional element. ts(1257)");
/** @internal */
const getASTDuplicatePropertySignatureTransformationErrorMessage = key => getErrorMessage("Duplicate property signature transformation", `Duplicate key ${Inspectable.formatUnknown(key)}`);
/** @internal */
exports.getASTDuplicatePropertySignatureTransformationErrorMessage = getASTDuplicatePropertySignatureTransformationErrorMessage;
const getASTUnsupportedRenameSchemaErrorMessage = ast => getUnsupportedSchemaErrorMessage(undefined, undefined, ast);
/** @internal */
exports.getASTUnsupportedRenameSchemaErrorMessage = getASTUnsupportedRenameSchemaErrorMessage;
const getASTDuplicatePropertySignatureErrorMessage = key => getErrorMessage("Duplicate property signature", `Duplicate key ${Inspectable.formatUnknown(key)}`);
exports.getASTDuplicatePropertySignatureErrorMessage = getASTDuplicatePropertySignatureErrorMessage;
//# sourceMappingURL=errors.js.map