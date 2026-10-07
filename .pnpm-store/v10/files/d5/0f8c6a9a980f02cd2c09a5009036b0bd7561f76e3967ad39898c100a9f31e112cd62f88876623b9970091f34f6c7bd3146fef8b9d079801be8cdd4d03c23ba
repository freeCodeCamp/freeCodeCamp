Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const is = require('../utils/is.js');
const normalize = require('../utils/normalize.js');
const worldwide = require('../utils/worldwide.js');

function formatConsoleArgs(values, normalizeDepth, normalizeMaxBreadth) {
  return "util" in worldwide.GLOBAL_OBJ && typeof worldwide.GLOBAL_OBJ.util.format === "function" ? worldwide.GLOBAL_OBJ.util.format(...values) : safeJoinConsoleArgs(values, normalizeDepth, normalizeMaxBreadth);
}
function safeJoinConsoleArgs(values, normalizeDepth, normalizeMaxBreadth) {
  return values.map(
    (value) => is.isPrimitive(value) ? String(value) : JSON.stringify(normalize.normalize(value, normalizeDepth, normalizeMaxBreadth))
  ).join(" ");
}
function hasConsoleSubstitutions(str) {
  return /%[sdifocO]/.test(str);
}
function createConsoleTemplateAttributes(firstArg, followingArgs) {
  const attributes = {};
  const template = new Array(followingArgs.length).fill("{}").join(" ");
  attributes["sentry.message.template"] = `${firstArg} ${template}`;
  followingArgs.forEach((arg, index) => {
    attributes[`sentry.message.parameter.${index}`] = arg;
  });
  return attributes;
}

exports.createConsoleTemplateAttributes = createConsoleTemplateAttributes;
exports.formatConsoleArgs = formatConsoleArgs;
exports.hasConsoleSubstitutions = hasConsoleSubstitutions;
exports.safeJoinConsoleArgs = safeJoinConsoleArgs;
//# sourceMappingURL=utils.js.map
