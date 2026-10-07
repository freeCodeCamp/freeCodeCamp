import { isPrimitive } from '../utils/is.js';
import { normalize } from '../utils/normalize.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';

function formatConsoleArgs(values, normalizeDepth, normalizeMaxBreadth) {
  return "util" in GLOBAL_OBJ && typeof GLOBAL_OBJ.util.format === "function" ? GLOBAL_OBJ.util.format(...values) : safeJoinConsoleArgs(values, normalizeDepth, normalizeMaxBreadth);
}
function safeJoinConsoleArgs(values, normalizeDepth, normalizeMaxBreadth) {
  return values.map(
    (value) => isPrimitive(value) ? String(value) : JSON.stringify(normalize(value, normalizeDepth, normalizeMaxBreadth))
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

export { createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions, safeJoinConsoleArgs };
//# sourceMappingURL=utils.js.map
