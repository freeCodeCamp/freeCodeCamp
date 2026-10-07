/**
MIT License

Copyright (c) 2020 Lea Verou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
// node_modules/parsel-js/dist/parsel.js
var TOKENS = {
  attribute: /\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,
  id: /#(?<name>[-\w\P{ASCII}]+)/gu,
  class: /\.(?<name>[-\w\P{ASCII}]+)/gu,
  comma: /\s*,\s*/g,
  combinator: /\s*[\s>+~]\s*/g,
  "pseudo-element": /::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
  "pseudo-class": /:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
  universal: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,
  type: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu
  // this must be last
};
var TRIM_TOKENS = /* @__PURE__ */ new Set(["combinator", "comma"]);
var getArgumentPatternByType = (type) => {
  switch (type) {
    case "pseudo-element":
    case "pseudo-class":
      return new RegExp(TOKENS[type].source.replace("(?<argument>\xB6*)", "(?<argument>.*)"), "gu");
    default:
      return TOKENS[type];
  }
};
function gobbleParens(text, offset) {
  let nesting = 0;
  let result = "";
  for (; offset < text.length; offset++) {
    const char = text[offset];
    switch (char) {
      case "(":
        ++nesting;
        break;
      case ")":
        --nesting;
        break;
    }
    result += char;
    if (nesting === 0) {
      return result;
    }
  }
  return result;
}
function tokenizeBy(text, grammar = TOKENS) {
  if (!text) {
    return [];
  }
  const tokens = [text];
  for (const [type, pattern] of Object.entries(grammar)) {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token !== "string") {
        continue;
      }
      pattern.lastIndex = 0;
      const match = pattern.exec(token);
      if (!match) {
        continue;
      }
      const from = match.index - 1;
      const args = [];
      const content = match[0];
      const before = token.slice(0, from + 1);
      if (before) {
        args.push(before);
      }
      args.push({
        ...match.groups,
        type,
        content
      });
      const after = token.slice(from + content.length + 1);
      if (after) {
        args.push(after);
      }
      tokens.splice(i, 1, ...args);
    }
  }
  let offset = 0;
  for (const token of tokens) {
    switch (typeof token) {
      case "string":
        throw new Error(`Unexpected sequence ${token} found at index ${offset}`);
      case "object":
        offset += token.content.length;
        token.pos = [offset - token.content.length, offset];
        if (TRIM_TOKENS.has(token.type)) {
          token.content = token.content.trim() || " ";
        }
        break;
    }
  }
  return tokens;
}
var STRING_PATTERN = /(['"])([^\\\n]*?)\1/g;
var ESCAPE_PATTERN = /\\./g;
function tokenize(selector, grammar = TOKENS) {
  selector = selector.trim();
  if (selector === "") {
    return [];
  }
  const replacements = [];
  selector = selector.replace(ESCAPE_PATTERN, (value, offset) => {
    replacements.push({ value, offset });
    return "\uE000".repeat(value.length);
  });
  selector = selector.replace(STRING_PATTERN, (value, quote, content, offset) => {
    replacements.push({ value, offset });
    return `${quote}${"\uE001".repeat(content.length)}${quote}`;
  });
  {
    let pos = 0;
    let offset;
    while ((offset = selector.indexOf("(", pos)) > -1) {
      const value = gobbleParens(selector, offset);
      replacements.push({ value, offset });
      selector = `${selector.substring(0, offset)}(${"\xB6".repeat(value.length - 2)})${selector.substring(offset + value.length)}`;
      pos = offset + value.length;
    }
  }
  const tokens = tokenizeBy(selector, grammar);
  const changedTokens = /* @__PURE__ */ new Set();
  for (const replacement of replacements.reverse()) {
    for (const token of tokens) {
      const { offset, value } = replacement;
      if (!(token.pos[0] <= offset && offset + value.length <= token.pos[1])) {
        continue;
      }
      const { content } = token;
      const tokenOffset = offset - token.pos[0];
      token.content = content.slice(0, tokenOffset) + value + content.slice(tokenOffset + value.length);
      if (token.content !== content) {
        changedTokens.add(token);
      }
    }
  }
  for (const token of changedTokens) {
    const pattern = getArgumentPatternByType(token.type);
    if (!pattern) {
      throw new Error(`Unknown token type: ${token.type}`);
    }
    pattern.lastIndex = 0;
    const match = pattern.exec(token.content);
    if (!match) {
      throw new Error(`Unable to parse content for ${token.type}: ${token.content}`);
    }
    Object.assign(token, match.groups);
  }
  return tokens;
}
function stringify(listOrNode) {
  if (Array.isArray(listOrNode)) {
    return listOrNode.map((token) => token.content).join("");
  }
  switch (listOrNode.type) {
    case "list":
      return listOrNode.list.map(stringify).join(",");
    case "relative":
      return listOrNode.combinator + stringify(listOrNode.right);
    case "complex":
      return stringify(listOrNode.left) + listOrNode.combinator + stringify(listOrNode.right);
    case "compound":
      return listOrNode.list.map(stringify).join("");
    default:
      return listOrNode.content;
  }
}
export {
  TOKENS,
  stringify,
  tokenize
};
