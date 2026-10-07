"use strict";

exports.__esModule = true;
exports.stripIndent = stripIndent;
function stripIndent(tpl, ...expressions) {
  let str = ``;
  tpl.forEach((chunk, index) => {
    str += chunk.replace(/^(\\n)*[ ]+/gm, `$1`) + (expressions[index] ? expressions[index] : ``);
  });
  return str;
}