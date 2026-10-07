"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.compose = compose;
exports.convertUnionSyntaxToGraphql = convertUnionSyntaxToGraphql;
exports.extractAllCollectionSegments = extractAllCollectionSegments;
exports.extractField = extractField;
exports.extractFieldWithoutUnion = extractFieldWithoutUnion;
exports.extractModel = extractModel;
exports.pagesGlob = exports.findCollectionPageFiles = void 0;
exports.removeFileExtension = removeFileExtension;
exports.stripTrailingSlash = stripTrailingSlash;
exports.switchToPeriodDelimiters = switchToPeriodDelimiters;
var _globby = _interopRequireDefault(require("globby"));
// Regex created with: https://spec.graphql.org/draft/#sec-Names
// First char only letter, underscore; rest letter, underscore, digit
const extractModelRegex = /\{([a-zA-Z_][\w]*)\./;

// Given a absolutePath that has a collection marker it will extract the Model.
// /foo/bar/{Model.bar} => Model
function extractModel(absolutePath) {
  const model = extractModelRegex.exec(absolutePath);

  // This shouldn't happen - but TS requires us to validate
  // Don't throw an error here as otherwise it would be captured in the onPreInit hook and not by isValidCollectionPathImplementation()
  if (!model) {
    return ``;
  }
  return model[1];
}

// Remove the file extension from the end of a path
function removeFileExtension(absolutePath) {
  return absolutePath.replace(/\.[a-z]+$/, ``);
}

// Remove trailing slash
function stripTrailingSlash(str) {
  return str.endsWith(`/`) ? str.slice(0, -1) : str;
}
const curlyBracesContentsRegex = /\{.*?\}/g;

// This extracts all information in an absolute path to an array of each collection part
// /foo/{Model.bar}/{Model.baz} => ['Model.bar', 'Model.baz']
function extractAllCollectionSegments(absolutePath) {
  const slugParts = absolutePath.match(curlyBracesContentsRegex);

  // This shouldn't happen - but TS requires us to validate
  if (!slugParts) {
    throw new Error(`An error occurred building the slug parts. This is likely a bug within Gatsby and not your code. Please report it to us if you run into this.`);
  }
  return slugParts;
}
const extractFieldWithoutUnionRegex = /\(.*\)__/g;

/**
 * Given a filePath part that is a collection marker it do this transformation:
 * @param {string} filePart - The individual part of the URL
 * @returns {Array<string>} - Returns an array of extracted fields (with converted "Unions")
 * @example
 * {Model.bar} => bar
 * {Model.field__bar} => field__bar
 * {Model.field__(Union)__bar} => field__bar
 */
function extractFieldWithoutUnion(filePart) {
  const extracts = extractField(filePart);
  return extracts.map(e => e.replace(extractFieldWithoutUnionRegex, ``));
}
const extractFieldRegexCurlyBraces = /[{}]/g;
// Regex created with: https://spec.graphql.org/draft/#sec-Names
// First char only letter, underscore; rest letter, underscore, digit
const extractFieldGraphQLModel = /[a-zA-Z_][\w]*\./;

/**
 * Given a filePath part that is a collection marker it do this transformation:
 * @param {string} filePart - The individual part of the URL
 * @returns {Array<string>} - Returns an array of extracted fields
 * @example
 * {Model.field__(Union)__bar} => field__(Union)__bar
 * Also works with lowercased model
 * {model.field} => field
 * Also works with prefixes/postfixes (due to the regex match)
 * prefix-{model.field} => field
 */
function extractField(filePart) {
  const content = filePart.match(curlyBracesContentsRegex);
  if (!content) {
    return [``];
  }
  return content.map(c => c.replace(extractFieldRegexCurlyBraces, ``).replace(extractFieldGraphQLModel, ``));
}
const switchToPeriodDelimitersRegex = /__/g;

// Used to convert filePath field accessors to js syntax accessors.
// e.g.
//   foo__bar => foo.bar
// This can then be used with _.get
function switchToPeriodDelimiters(filePart) {
  // replace access by periods
  return filePart.replace(switchToPeriodDelimitersRegex, `.`);
}
const convertUnionSyntaxToGraphqlRegex = /\(/g;

// Converts the part of the file from something like `(Union)` to `... on Union`
function convertUnionSyntaxToGraphql(filePart) {
  return filePart.replace(convertUnionSyntaxToGraphqlRegex, `... on `).replace(/\)/g, ``);
}

// Compose function to chain multiple methods from this file together
// e.g.
// compose(extractFieldWithoutUnion, switchToPeriodDelimters)(`{Model.foo__bar}`)
function compose(...functions) {
  return filePart => functions.reduce((value, fn) => fn(value), filePart);
}

// Use globby to find all page files with collection routes
// We want to find all files in a given path where any segment includes text wrapped in curly braces
// e.g. "{Collection.field}.tsx" and "{Collection.field}/nestedpage.tsx"
const pagesGlob = `**/**\\{*\\}**(/**)`;
exports.pagesGlob = pagesGlob;
const findCollectionPageFiles = pagesPath => (0, _globby.default)(pagesGlob, {
  cwd: pagesPath
});
exports.findCollectionPageFiles = findCollectionPageFiles;