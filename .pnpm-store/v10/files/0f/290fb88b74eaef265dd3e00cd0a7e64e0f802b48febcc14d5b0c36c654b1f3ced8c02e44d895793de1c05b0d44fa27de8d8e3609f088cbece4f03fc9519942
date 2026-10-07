Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const is = require('./is.js');
const normalize = require('./normalize.js');

function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    colno = lineLength;
  }
  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }
  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }
  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += " {snip}";
  }
  return newLine;
}
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    if (is.isPrimitive(value)) {
      output.push(String(value));
    } else if (value instanceof Error) {
      output.push(value.message ? `${value.name}: ${value.message}` : value.name);
    } else {
      output.push(normalize.stringifyValue(void 0, value));
    }
  }
  return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!is.isString(value)) {
    return false;
  }
  if (is.isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (is.isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  if (typeof pattern === "function") {
    return pattern(value);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  for (const pattern of patterns) {
    if (isMatchingPattern(testString, pattern, requireExactStringMatch)) {
      return true;
    }
  }
  return false;
}

exports.isMatchingPattern = isMatchingPattern;
exports.safeJoin = safeJoin;
exports.snipLine = snipLine;
exports.stringMatchesSomePattern = stringMatchesSomePattern;
exports.truncate = truncate;
//# sourceMappingURL=string.js.map
