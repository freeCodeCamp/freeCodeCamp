"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;
var _index = require("../../builders/generated/index.js");
var _index2 = require("../../index.js");
function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/[^ \t]/.exec(lines[i])) {
      lastNonEmptyLine = i;
    }
  }
  let str = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");
    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^ +/, "");
    }
    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/ +$/, "");
    }
    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }
      str += trimmedLine;
    }
  }
  if (str) args.push((0, _index2.inherits)((0, _index.stringLiteral)(str), child));
}

//# sourceMappingURL=cleanJSXElementLiteralChild.js.map
