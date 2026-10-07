"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.TypeConflictReporter = exports.TypeConflictEntry = void 0;
var _sortBy = _interopRequireDefault(require("lodash/sortBy"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _typeOf = _interopRequireDefault(require("type-of"));
var _util = _interopRequireDefault(require("util"));
const formatValue = value => {
  if (!Array.isArray(value)) {
    return _util.default.inspect(value, {
      colors: true,
      depth: 0,
      breakLength: Infinity
    });
  }
  const output = [];
  if (value.length === 1) {
    // For arrays usually a single conflicting item is exposed vs. the whole array
    output.push(`...`);
    output.push(formatValue(value[0]));
    output.push(`...`);
  } else {
    let wasElipsisLast = false;
    const usedTypes = [];
    value.forEach(item => {
      const type = (0, _typeOf.default)(item);
      if (usedTypes.includes(type)) {
        if (!wasElipsisLast) {
          output.push(`...`);
          wasElipsisLast = true;
        }
      } else {
        output.push(formatValue(item));
        wasElipsisLast = false;
        usedTypes.push(type);
      }
    });
  }
  return `[ ${output.join(`, `)} ]`;
};
class TypeConflictEntry {
  constructor(selector) {
    this.selector = selector;
    this.types = new Map();
  }
  addExample({
    value,
    type,
    parent
  }) {
    var _parent$internal$desc, _parent$internal;
    this.types.set(type, {
      value,
      description: (_parent$internal$desc = parent === null || parent === void 0 ? void 0 : (_parent$internal = parent.internal) === null || _parent$internal === void 0 ? void 0 : _parent$internal.description) !== null && _parent$internal$desc !== void 0 ? _parent$internal$desc : ``
    });
  }
  printEntry() {
    const sortedByTypeName = (0, _sortBy.default)(Array.from(this.types.entries()), ([typeName]) => typeName);
    _reporter.default.log(`${this.selector}:${sortedByTypeName.map(([typeName, {
      value,
      description
    }]) => `\n - type: ${typeName}\n   value: ${formatValue(value)}${description && `\n   source: ${description}`}`).join(``)}`);
  }
}
exports.TypeConflictEntry = TypeConflictEntry;
class TypeConflictReporter {
  constructor() {
    this.entries = new Map();
  }
  clearConflicts() {
    this.entries.clear();
  }
  getEntryFromSelector(selector) {
    let dataEntry = this.entries.get(selector);
    if (!dataEntry) {
      dataEntry = new TypeConflictEntry(selector);
      this.entries.set(selector, dataEntry);
    }
    return dataEntry;
  }
  addConflict(selector, examples) {
    if (selector.substring(0, 11) === `SitePlugin.`) {
      // Don't store and print out type conflicts in plugins.
      // This is out of user control so he/she can't do anything
      // to hide those.
      return;
    }
    const entry = this.getEntryFromSelector(selector);
    examples.filter(example => example.value != null).forEach(example => entry.addExample(example));
  }
  printConflicts() {
    if (this.entries.size > 0) {
      _reporter.default.warn(`There are conflicting field types in your data.\n\n` + `If you have explicitly defined a type for those fields, you can ` + `safely ignore this warning message.\n` + `Otherwise, Gatsby will omit those fields from the GraphQL schema.\n\n` + `If you know all field types in advance, the best strategy is to ` + `explicitly define them with the \`createTypes\` action, and skip ` + `inference with the \`@dontInfer\` directive.\n` + `See https://www.gatsbyjs.com/docs/actions/#createTypes`);
      this.entries.forEach(entry => entry.printEntry());
    }
  }
  getConflicts() {
    return Array.from(this.entries.values());
  }
}
exports.TypeConflictReporter = TypeConflictReporter;
//# sourceMappingURL=type-conflict-reporter.js.map