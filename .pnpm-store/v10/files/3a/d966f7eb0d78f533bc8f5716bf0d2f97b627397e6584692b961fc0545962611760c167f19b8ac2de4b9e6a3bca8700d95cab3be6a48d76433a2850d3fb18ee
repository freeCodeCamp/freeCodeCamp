"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var vitestContext_exports = {};
__export(vitestContext_exports, {
  processExitContext: () => processExitContext,
  vitestConsoleContext: () => vitestConsoleContext,
  vitestContext: () => vitestContext,
  vitestProcessExitContext: () => vitestProcessExitContext,
  vitestStdoutContext: () => vitestStdoutContext
});
module.exports = __toCommonJS(vitestContext_exports);
var import_chunk_3UEKS5W6 = require("../chunk-3UEKS5W6.js");
var import_chunk_2ESYSVXG = require("../chunk-2ESYSVXG.js");
var import_node_path = __toESM(require("node:path"));
var import_tty = require("tty");
var require_js_tokens = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/js-tokens@9.0.1/node_modules/js-tokens/index.js"(exports, module2) {
    "use strict";
    var HashbangComment;
    var Identifier;
    var JSXIdentifier;
    var JSXPunctuator;
    var JSXString;
    var JSXText;
    var KeywordsWithExpressionAfter;
    var KeywordsWithNoLineTerminatorAfter;
    var LineTerminatorSequence;
    var MultiLineComment;
    var Newline;
    var NumericLiteral;
    var Punctuator;
    var RegularExpressionLiteral;
    var SingleLineComment;
    var StringLiteral;
    var Template;
    var TokensNotPrecedingObjectLiteral;
    var TokensPrecedingExpression;
    var WhiteSpace;
    var jsTokens2;
    RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
    Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
    Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
    StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
    NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
    Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
    WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
    LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
    MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
    SingleLineComment = /\/\/.*/y;
    HashbangComment = /^#!.*/;
    JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
    JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
    JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
    JSXText = /[^<>{}]+/y;
    TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
    TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
    KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
    KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
    Newline = RegExp(LineTerminatorSequence.source);
    module2.exports = jsTokens2 = function* (input, { jsx = false } = {}) {
      var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
      ({ length } = input);
      lastIndex = 0;
      lastSignificantToken = "";
      stack = [
        { tag: "JS" }
      ];
      braces = [];
      parenNesting = 0;
      postfixIncDec = false;
      if (match = HashbangComment.exec(input)) {
        yield {
          type: "HashbangComment",
          value: match[0]
        };
        lastIndex = match[0].length;
      }
      while (lastIndex < length) {
        mode = stack[stack.length - 1];
        switch (mode.tag) {
          case "JS":
          case "JSNonExpressionParen":
          case "InterpolationInTemplate":
          case "InterpolationInJSX":
            if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
              RegularExpressionLiteral.lastIndex = lastIndex;
              if (match = RegularExpressionLiteral.exec(input)) {
                lastIndex = RegularExpressionLiteral.lastIndex;
                lastSignificantToken = match[0];
                postfixIncDec = true;
                yield {
                  type: "RegularExpressionLiteral",
                  value: match[0],
                  closed: match[1] !== void 0 && match[1] !== "\\"
                };
                continue;
              }
            }
            Punctuator.lastIndex = lastIndex;
            if (match = Punctuator.exec(input)) {
              punctuator = match[0];
              nextLastIndex = Punctuator.lastIndex;
              nextLastSignificantToken = punctuator;
              switch (punctuator) {
                case "(":
                  if (lastSignificantToken === "?NonExpressionParenKeyword") {
                    stack.push({
                      tag: "JSNonExpressionParen",
                      nesting: parenNesting
                    });
                  }
                  parenNesting++;
                  postfixIncDec = false;
                  break;
                case ")":
                  parenNesting--;
                  postfixIncDec = true;
                  if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                    stack.pop();
                    nextLastSignificantToken = "?NonExpressionParenEnd";
                    postfixIncDec = false;
                  }
                  break;
                case "{":
                  Punctuator.lastIndex = 0;
                  isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                  braces.push(isExpression);
                  postfixIncDec = false;
                  break;
                case "}":
                  switch (mode.tag) {
                    case "InterpolationInTemplate":
                      if (braces.length === mode.nesting) {
                        Template.lastIndex = lastIndex;
                        match = Template.exec(input);
                        lastIndex = Template.lastIndex;
                        lastSignificantToken = match[0];
                        if (match[1] === "${") {
                          lastSignificantToken = "?InterpolationInTemplate";
                          postfixIncDec = false;
                          yield {
                            type: "TemplateMiddle",
                            value: match[0]
                          };
                        } else {
                          stack.pop();
                          postfixIncDec = true;
                          yield {
                            type: "TemplateTail",
                            value: match[0],
                            closed: match[1] === "`"
                          };
                        }
                        continue;
                      }
                      break;
                    case "InterpolationInJSX":
                      if (braces.length === mode.nesting) {
                        stack.pop();
                        lastIndex += 1;
                        lastSignificantToken = "}";
                        yield {
                          type: "JSXPunctuator",
                          value: "}"
                        };
                        continue;
                      }
                  }
                  postfixIncDec = braces.pop();
                  nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                  break;
                case "]":
                  postfixIncDec = true;
                  break;
                case "++":
                case "--":
                  nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                  break;
                case "<":
                  if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                    stack.push({ tag: "JSXTag" });
                    lastIndex += 1;
                    lastSignificantToken = "<";
                    yield {
                      type: "JSXPunctuator",
                      value: punctuator
                    };
                    continue;
                  }
                  postfixIncDec = false;
                  break;
                default:
                  postfixIncDec = false;
              }
              lastIndex = nextLastIndex;
              lastSignificantToken = nextLastSignificantToken;
              yield {
                type: "Punctuator",
                value: punctuator
              };
              continue;
            }
            Identifier.lastIndex = lastIndex;
            if (match = Identifier.exec(input)) {
              lastIndex = Identifier.lastIndex;
              nextLastSignificantToken = match[0];
              switch (match[0]) {
                case "for":
                case "if":
                case "while":
                case "with":
                  if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                    nextLastSignificantToken = "?NonExpressionParenKeyword";
                  }
              }
              lastSignificantToken = nextLastSignificantToken;
              postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
              yield {
                type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
                value: match[0]
              };
              continue;
            }
            StringLiteral.lastIndex = lastIndex;
            if (match = StringLiteral.exec(input)) {
              lastIndex = StringLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "StringLiteral",
                value: match[0],
                closed: match[2] !== void 0
              };
              continue;
            }
            NumericLiteral.lastIndex = lastIndex;
            if (match = NumericLiteral.exec(input)) {
              lastIndex = NumericLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "NumericLiteral",
                value: match[0]
              };
              continue;
            }
            Template.lastIndex = lastIndex;
            if (match = Template.exec(input)) {
              lastIndex = Template.lastIndex;
              lastSignificantToken = match[0];
              if (match[1] === "${") {
                lastSignificantToken = "?InterpolationInTemplate";
                stack.push({
                  tag: "InterpolationInTemplate",
                  nesting: braces.length
                });
                postfixIncDec = false;
                yield {
                  type: "TemplateHead",
                  value: match[0]
                };
              } else {
                postfixIncDec = true;
                yield {
                  type: "NoSubstitutionTemplate",
                  value: match[0],
                  closed: match[1] === "`"
                };
              }
              continue;
            }
            break;
          case "JSXTag":
          case "JSXTagEnd":
            JSXPunctuator.lastIndex = lastIndex;
            if (match = JSXPunctuator.exec(input)) {
              lastIndex = JSXPunctuator.lastIndex;
              nextLastSignificantToken = match[0];
              switch (match[0]) {
                case "<":
                  stack.push({ tag: "JSXTag" });
                  break;
                case ">":
                  stack.pop();
                  if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                    nextLastSignificantToken = "?JSX";
                    postfixIncDec = true;
                  } else {
                    stack.push({ tag: "JSXChildren" });
                  }
                  break;
                case "{":
                  stack.push({
                    tag: "InterpolationInJSX",
                    nesting: braces.length
                  });
                  nextLastSignificantToken = "?InterpolationInJSX";
                  postfixIncDec = false;
                  break;
                case "/":
                  if (lastSignificantToken === "<") {
                    stack.pop();
                    if (stack[stack.length - 1].tag === "JSXChildren") {
                      stack.pop();
                    }
                    stack.push({ tag: "JSXTagEnd" });
                  }
              }
              lastSignificantToken = nextLastSignificantToken;
              yield {
                type: "JSXPunctuator",
                value: match[0]
              };
              continue;
            }
            JSXIdentifier.lastIndex = lastIndex;
            if (match = JSXIdentifier.exec(input)) {
              lastIndex = JSXIdentifier.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXIdentifier",
                value: match[0]
              };
              continue;
            }
            JSXString.lastIndex = lastIndex;
            if (match = JSXString.exec(input)) {
              lastIndex = JSXString.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXString",
                value: match[0],
                closed: match[2] !== void 0
              };
              continue;
            }
            break;
          case "JSXChildren":
            JSXText.lastIndex = lastIndex;
            if (match = JSXText.exec(input)) {
              lastIndex = JSXText.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXText",
                value: match[0]
              };
              continue;
            }
            switch (input[lastIndex]) {
              case "<":
                stack.push({ tag: "JSXTag" });
                lastIndex++;
                lastSignificantToken = "<";
                yield {
                  type: "JSXPunctuator",
                  value: "<"
                };
                continue;
              case "{":
                stack.push({
                  tag: "InterpolationInJSX",
                  nesting: braces.length
                });
                lastIndex++;
                lastSignificantToken = "?InterpolationInJSX";
                postfixIncDec = false;
                yield {
                  type: "JSXPunctuator",
                  value: "{"
                };
                continue;
            }
        }
        WhiteSpace.lastIndex = lastIndex;
        if (match = WhiteSpace.exec(input)) {
          lastIndex = WhiteSpace.lastIndex;
          yield {
            type: "WhiteSpace",
            value: match[0]
          };
          continue;
        }
        LineTerminatorSequence.lastIndex = lastIndex;
        if (match = LineTerminatorSequence.exec(input)) {
          lastIndex = LineTerminatorSequence.lastIndex;
          postfixIncDec = false;
          if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
            lastSignificantToken = "?NoLineTerminatorHere";
          }
          yield {
            type: "LineTerminatorSequence",
            value: match[0]
          };
          continue;
        }
        MultiLineComment.lastIndex = lastIndex;
        if (match = MultiLineComment.exec(input)) {
          lastIndex = MultiLineComment.lastIndex;
          if (Newline.test(match[0])) {
            postfixIncDec = false;
            if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
              lastSignificantToken = "?NoLineTerminatorHere";
            }
          }
          yield {
            type: "MultiLineComment",
            value: match[0],
            closed: match[1] !== void 0
          };
          continue;
        }
        SingleLineComment.lastIndex = lastIndex;
        if (match = SingleLineComment.exec(input)) {
          lastIndex = SingleLineComment.lastIndex;
          postfixIncDec = false;
          yield {
            type: "SingleLineComment",
            value: match[0]
          };
          continue;
        }
        firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
        lastIndex += firstCodePoint.length;
        lastSignificantToken = firstCodePoint;
        postfixIncDec = false;
        yield {
          type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
          value: firstCodePoint
        };
      }
      return void 0;
    };
  }
});
var require_branding = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/expect-type@1.2.2/node_modules/expect-type/dist/branding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_messages = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/expect-type@1.2.2/node_modules/expect-type/dist/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inverted = Symbol("inverted");
    var expectNull = Symbol("expectNull");
    var expectUndefined = Symbol("expectUndefined");
    var expectNumber = Symbol("expectNumber");
    var expectString = Symbol("expectString");
    var expectBoolean = Symbol("expectBoolean");
    var expectVoid = Symbol("expectVoid");
    var expectFunction = Symbol("expectFunction");
    var expectObject = Symbol("expectObject");
    var expectArray = Symbol("expectArray");
    var expectSymbol = Symbol("expectSymbol");
    var expectAny = Symbol("expectAny");
    var expectUnknown = Symbol("expectUnknown");
    var expectNever = Symbol("expectNever");
    var expectNullable = Symbol("expectNullable");
    var expectBigInt = Symbol("expectBigInt");
  }
});
var require_overloads = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/expect-type@1.2.2/node_modules/expect-type/dist/overloads.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_utils = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/expect-type@1.2.2/node_modules/expect-type/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var secret = Symbol("secret");
    var mismatch = Symbol("mismatch");
    var avalue = Symbol("avalue");
  }
});
var require_dist = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/expect-type@1.2.2/node_modules/expect-type/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p3 in m2) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m2, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.expectTypeOf = void 0;
    __exportStar(require_branding(), exports);
    __exportStar(require_messages(), exports);
    __exportStar(require_overloads(), exports);
    __exportStar(require_utils(), exports);
    var fn2 = () => true;
    var expectTypeOf2 = (_actual) => {
      const nonFunctionProperties = [
        "parameters",
        "returns",
        "resolves",
        "not",
        "items",
        "constructorParameters",
        "thisParameter",
        "instance",
        "guards",
        "asserts",
        "branded"
      ];
      const obj = {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        toBeAny: fn2,
        toBeUnknown: fn2,
        toBeNever: fn2,
        toBeFunction: fn2,
        toBeObject: fn2,
        toBeArray: fn2,
        toBeString: fn2,
        toBeNumber: fn2,
        toBeBoolean: fn2,
        toBeVoid: fn2,
        toBeSymbol: fn2,
        toBeNull: fn2,
        toBeUndefined: fn2,
        toBeNullable: fn2,
        toBeBigInt: fn2,
        toMatchTypeOf: fn2,
        toEqualTypeOf: fn2,
        toBeConstructibleWith: fn2,
        toMatchObjectType: fn2,
        toExtend: fn2,
        map: exports.expectTypeOf,
        toBeCallableWith: exports.expectTypeOf,
        extract: exports.expectTypeOf,
        exclude: exports.expectTypeOf,
        pick: exports.expectTypeOf,
        omit: exports.expectTypeOf,
        toHaveProperty: exports.expectTypeOf,
        parameter: exports.expectTypeOf
      };
      const getterProperties = nonFunctionProperties;
      getterProperties.forEach((prop) => Object.defineProperty(obj, prop, { get: () => (0, exports.expectTypeOf)({}) }));
      return obj;
    };
    exports.expectTypeOf = expectTypeOf2;
  }
});
var import_fs_jetpack = (0, import_chunk_2ESYSVXG.__toESM)((0, import_chunk_3UEKS5W6.require_main)());
var import_tempy = (0, import_chunk_2ESYSVXG.__toESM)((0, import_chunk_3UEKS5W6.require_tempy)());
var f = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
var h = Object.entries(f);
function a(n) {
  return String(n);
}
a.open = "";
a.close = "";
function C(n = false) {
  let e = typeof process != "undefined" ? process : void 0, i = (e == null ? void 0 : e.env) || {}, g = (e == null ? void 0 : e.argv) || [];
  return !("NO_COLOR" in i || g.includes("--no-color")) && ("FORCE_COLOR" in i || g.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || n && i.TERM !== "dumb" || "CI" in i) || typeof window != "undefined" && !!window.chrome;
}
function p(n = false) {
  let e = C(n), i = (r2, t, c, o) => {
    let l = "", s2 = 0;
    do
      l += r2.substring(s2, o) + c, s2 = o + t.length, o = r2.indexOf(t, s2);
    while (~o);
    return l + r2.substring(s2);
  }, g = (r2, t, c = r2) => {
    let o = (l) => {
      let s2 = String(l), b = s2.indexOf(t, r2.length);
      return ~b ? r2 + i(s2, t, c, b) + t : r2 + s2 + t;
    };
    return o.open = r2, o.close = t, o;
  }, u2 = {
    isColorSupported: e
  }, d = (r2) => `\x1B[${r2}m`;
  for (let [r2, t] of h)
    u2[r2] = e ? g(
      d(t[0]),
      d(t[1]),
      t[2]
    ) : a;
  return u2;
}
var r = process.env.FORCE_TTY !== void 0 || (0, import_tty.isatty)(1);
var u = p(r);
function _mergeNamespaces(n, m2) {
  m2.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
function getKeysOfEnumerableProperties(object2, compareKeys) {
  const rawKeys = Object.keys(object2);
  const keys2 = compareKeys === null ? rawKeys : rawKeys.sort(compareKeys);
  if (Object.getOwnPropertySymbols) {
    for (const symbol of Object.getOwnPropertySymbols(object2)) {
      if (Object.getOwnPropertyDescriptor(object2, symbol).enumerable) {
        keys2.push(symbol);
      }
    }
  }
  return keys2;
}
function printIteratorEntries(iterator, config2, indentation, depth, refs, printer2, separator = ": ") {
  let result = "";
  let width = 0;
  let current = iterator.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      result += indentationNext;
      if (width++ === config2.maxWidth) {
        result += "\u2026";
        break;
      }
      const name = printer2(current.value[0], config2, indentationNext, depth, refs);
      const value = printer2(current.value[1], config2, indentationNext, depth, refs);
      result += name + separator + value;
      current = iterator.next();
      if (!current.done) {
        result += `,${config2.spacingInner}`;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printIteratorValues(iterator, config2, indentation, depth, refs, printer2) {
  let result = "";
  let width = 0;
  let current = iterator.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      result += indentationNext;
      if (width++ === config2.maxWidth) {
        result += "\u2026";
        break;
      }
      result += printer2(current.value, config2, indentationNext, depth, refs);
      current = iterator.next();
      if (!current.done) {
        result += `,${config2.spacingInner}`;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printListItems(list, config2, indentation, depth, refs, printer2) {
  let result = "";
  list = list instanceof ArrayBuffer ? new DataView(list) : list;
  const isDataView = (l) => l instanceof DataView;
  const length = isDataView(list) ? list.byteLength : list.length;
  if (length > 0) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i = 0; i < length; i++) {
      result += indentationNext;
      if (i === config2.maxWidth) {
        result += "\u2026";
        break;
      }
      if (isDataView(list) || i in list) {
        result += printer2(isDataView(list) ? list.getInt8(i) : list[i], config2, indentationNext, depth, refs);
      }
      if (i < length - 1) {
        result += `,${config2.spacingInner}`;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printObjectProperties(val, config2, indentation, depth, refs, printer2) {
  let result = "";
  const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
  if (keys2.length > 0) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i = 0; i < keys2.length; i++) {
      const key = keys2[i];
      const name = printer2(key, config2, indentationNext, depth, refs);
      const value = printer2(val[key], config2, indentationNext, depth, refs);
      result += `${indentationNext + name}: ${value}`;
      if (i < keys2.length - 1) {
        result += `,${config2.spacingInner}`;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
var asymmetricMatcher = typeof Symbol === "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621;
var SPACE$2 = " ";
var serialize$5 = (val, config2, indentation, depth, refs, printer2) => {
  const stringedValue = val.toString();
  if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
    if (++depth > config2.maxDepth) {
      return `[${stringedValue}]`;
    }
    return `${stringedValue + SPACE$2}[${printListItems(val.sample, config2, indentation, depth, refs, printer2)}]`;
  }
  if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
    if (++depth > config2.maxDepth) {
      return `[${stringedValue}]`;
    }
    return `${stringedValue + SPACE$2}{${printObjectProperties(val.sample, config2, indentation, depth, refs, printer2)}}`;
  }
  if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  if (typeof val.toAsymmetricMatcher !== "function") {
    throw new TypeError(`Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`);
  }
  return val.toAsymmetricMatcher();
};
var test$5 = (val) => val && val.$$typeof === asymmetricMatcher;
var plugin$5 = {
  serialize: serialize$5,
  test: test$5
};
var SPACE$1 = " ";
var OBJECT_NAMES = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]);
var ARRAY_REGEXP = /^(?:HTML\w*Collection|NodeList)$/;
function testName(name) {
  return OBJECT_NAMES.has(name) || ARRAY_REGEXP.test(name);
}
var test$4 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
function isNamedNodeMap(collection) {
  return collection.constructor.name === "NamedNodeMap";
}
var serialize$4 = (collection, config2, indentation, depth, refs, printer2) => {
  const name = collection.constructor.name;
  if (++depth > config2.maxDepth) {
    return `[${name}]`;
  }
  return (config2.min ? "" : name + SPACE$1) + (OBJECT_NAMES.has(name) ? `{${printObjectProperties(isNamedNodeMap(collection) ? [...collection].reduce((props, attribute) => {
    props[attribute.name] = attribute.value;
    return props;
  }, {}) : { ...collection }, config2, indentation, depth, refs, printer2)}}` : `[${printListItems([...collection], config2, indentation, depth, refs, printer2)}]`);
};
var plugin$4 = {
  serialize: serialize$4,
  test: test$4
};
function escapeHTML(str) {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function printProps(keys2, props, config2, indentation, depth, refs, printer2) {
  const indentationNext = indentation + config2.indent;
  const colors = config2.colors;
  return keys2.map((key) => {
    const value = props[key];
    let printed = printer2(value, config2, indentationNext, depth, refs);
    if (typeof value !== "string") {
      if (printed.includes("\n")) {
        printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
      }
      printed = `{${printed}}`;
    }
    return `${config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
  }).join("");
}
function printChildren(children, config2, indentation, depth, refs, printer2) {
  return children.map((child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer2(child, config2, indentation, depth, refs))).join("");
}
function printText(text, config2) {
  const contentColor = config2.colors.content;
  return contentColor.open + escapeHTML(text) + contentColor.close;
}
function printComment(comment, config2) {
  const commentColor = config2.colors.comment;
  return `${commentColor.open}<!--${escapeHTML(comment)}-->${commentColor.close}`;
}
function printElement(type3, printedProps, printedChildren, config2, indentation) {
  const tagColor = config2.colors.tag;
  return `${tagColor.open}<${type3}${printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config2.spacingOuter}${indentation}${tagColor.open}</${type3}` : `${printedProps && !config2.min ? "" : " "}/`}>${tagColor.close}`;
}
function printElementAsLeaf(type3, config2) {
  const tagColor = config2.colors.tag;
  return `${tagColor.open}<${type3}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
}
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var FRAGMENT_NODE = 11;
var ELEMENT_REGEXP = /^(?:(?:HTML|SVG)\w*)?Element$/;
function testHasAttribute(val) {
  try {
    return typeof val.hasAttribute === "function" && val.hasAttribute("is");
  } catch {
    return false;
  }
}
function testNode(val) {
  const constructorName = val.constructor.name;
  const { nodeType, tagName } = val;
  const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
  return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
}
var test$3 = (val) => {
  var _val$constructor;
  return (val === null || val === void 0 || (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
};
function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}
var serialize$3 = (node, config2, indentation, depth, refs, printer2) => {
  if (nodeIsText(node)) {
    return printText(node.data, config2);
  }
  if (nodeIsComment(node)) {
    return printComment(node.data, config2);
  }
  const type3 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
  if (++depth > config2.maxDepth) {
    return printElementAsLeaf(type3, config2);
  }
  return printElement(type3, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(), nodeIsFragment(node) ? {} : [...node.attributes].reduce((props, attribute) => {
    props[attribute.name] = attribute.value;
    return props;
  }, {}), config2, indentation + config2.indent, depth, refs, printer2), printChildren(Array.prototype.slice.call(node.childNodes || node.children), config2, indentation + config2.indent, depth, refs, printer2), config2, indentation);
};
var plugin$3 = {
  serialize: serialize$3,
  test: test$3
};
var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
var getImmutableName = (name) => `Immutable.${name}`;
var printAsLeaf = (name) => `[${name}]`;
var SPACE = " ";
var LAZY = "\u2026";
function printImmutableEntries(val, config2, indentation, depth, refs, printer2, type3) {
  return ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type3)) : `${getImmutableName(type3) + SPACE}{${printIteratorEntries(val.entries(), config2, indentation, depth, refs, printer2)}}`;
}
function getRecordEntries(val) {
  let i = 0;
  return { next() {
    if (i < val._keys.length) {
      const key = val._keys[i++];
      return {
        done: false,
        value: [key, val.get(key)]
      };
    }
    return {
      done: true,
      value: void 0
    };
  } };
}
function printImmutableRecord(val, config2, indentation, depth, refs, printer2) {
  const name = getImmutableName(val._name || "Record");
  return ++depth > config2.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${printIteratorEntries(getRecordEntries(val), config2, indentation, depth, refs, printer2)}}`;
}
function printImmutableSeq(val, config2, indentation, depth, refs, printer2) {
  const name = getImmutableName("Seq");
  if (++depth > config2.maxDepth) {
    return printAsLeaf(name);
  }
  if (val[IS_KEYED_SENTINEL]) {
    return `${name + SPACE}{${val._iter || val._object ? printIteratorEntries(val.entries(), config2, indentation, depth, refs, printer2) : LAZY}}`;
  }
  return `${name + SPACE}[${val._iter || val._array || val._collection || val._iterable ? printIteratorValues(val.values(), config2, indentation, depth, refs, printer2) : LAZY}]`;
}
function printImmutableValues(val, config2, indentation, depth, refs, printer2, type3) {
  return ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type3)) : `${getImmutableName(type3) + SPACE}[${printIteratorValues(val.values(), config2, indentation, depth, refs, printer2)}]`;
}
var serialize$2 = (val, config2, indentation, depth, refs, printer2) => {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(val, config2, indentation, depth, refs, printer2, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
  }
  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(val, config2, indentation, depth, refs, printer2, "List");
  }
  if (val[IS_SET_SENTINEL]) {
    return printImmutableValues(val, config2, indentation, depth, refs, printer2, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
  }
  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(val, config2, indentation, depth, refs, printer2, "Stack");
  }
  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config2, indentation, depth, refs, printer2);
  }
  return printImmutableRecord(val, config2, indentation, depth, refs, printer2);
};
var test$2 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
var plugin$2 = {
  serialize: serialize$2,
  test: test$2
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var reactIs$1 = { exports: {} };
var reactIs_production = {};
var hasRequiredReactIs_production;
function requireReactIs_production() {
  if (hasRequiredReactIs_production) return reactIs_production;
  hasRequiredReactIs_production = 1;
  var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
  function typeOf2(object2) {
    if ("object" === typeof object2 && null !== object2) {
      var $$typeof = object2.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          switch (object2 = object2.type, object2) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
            case REACT_VIEW_TRANSITION_TYPE:
              return object2;
            default:
              switch (object2 = object2 && object2.$$typeof, object2) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                  return object2;
                case REACT_CONSUMER_TYPE:
                  return object2;
                default:
                  return $$typeof;
              }
          }
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  }
  reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
  reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
  reactIs_production.Element = REACT_ELEMENT_TYPE;
  reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
  reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
  reactIs_production.Lazy = REACT_LAZY_TYPE;
  reactIs_production.Memo = REACT_MEMO_TYPE;
  reactIs_production.Portal = REACT_PORTAL_TYPE;
  reactIs_production.Profiler = REACT_PROFILER_TYPE;
  reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
  reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
  reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  reactIs_production.isContextConsumer = function(object2) {
    return typeOf2(object2) === REACT_CONSUMER_TYPE;
  };
  reactIs_production.isContextProvider = function(object2) {
    return typeOf2(object2) === REACT_CONTEXT_TYPE;
  };
  reactIs_production.isElement = function(object2) {
    return "object" === typeof object2 && null !== object2 && object2.$$typeof === REACT_ELEMENT_TYPE;
  };
  reactIs_production.isForwardRef = function(object2) {
    return typeOf2(object2) === REACT_FORWARD_REF_TYPE;
  };
  reactIs_production.isFragment = function(object2) {
    return typeOf2(object2) === REACT_FRAGMENT_TYPE;
  };
  reactIs_production.isLazy = function(object2) {
    return typeOf2(object2) === REACT_LAZY_TYPE;
  };
  reactIs_production.isMemo = function(object2) {
    return typeOf2(object2) === REACT_MEMO_TYPE;
  };
  reactIs_production.isPortal = function(object2) {
    return typeOf2(object2) === REACT_PORTAL_TYPE;
  };
  reactIs_production.isProfiler = function(object2) {
    return typeOf2(object2) === REACT_PROFILER_TYPE;
  };
  reactIs_production.isStrictMode = function(object2) {
    return typeOf2(object2) === REACT_STRICT_MODE_TYPE;
  };
  reactIs_production.isSuspense = function(object2) {
    return typeOf2(object2) === REACT_SUSPENSE_TYPE;
  };
  reactIs_production.isSuspenseList = function(object2) {
    return typeOf2(object2) === REACT_SUSPENSE_LIST_TYPE;
  };
  reactIs_production.isValidElementType = function(type3) {
    return "string" === typeof type3 || "function" === typeof type3 || type3 === REACT_FRAGMENT_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type3 && null !== type3 && (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_CONSUMER_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type3.getModuleId) ? true : false;
  };
  reactIs_production.typeOf = typeOf2;
  return reactIs_production;
}
var reactIs_development$1 = {};
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  if (hasRequiredReactIs_development$1) return reactIs_development$1;
  hasRequiredReactIs_development$1 = 1;
  (function() {
    function typeOf2(object2) {
      if ("object" === typeof object2 && null !== object2) {
        var $$typeof = object2.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object2 = object2.type, object2) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object2;
              default:
                switch (object2 = object2 && object2.$$typeof, object2) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object2;
                  case REACT_CONSUMER_TYPE:
                    return object2;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    reactIs_development$1.ContextConsumer = REACT_CONSUMER_TYPE;
    reactIs_development$1.ContextProvider = REACT_CONTEXT_TYPE;
    reactIs_development$1.Element = REACT_ELEMENT_TYPE;
    reactIs_development$1.ForwardRef = REACT_FORWARD_REF_TYPE;
    reactIs_development$1.Fragment = REACT_FRAGMENT_TYPE;
    reactIs_development$1.Lazy = REACT_LAZY_TYPE;
    reactIs_development$1.Memo = REACT_MEMO_TYPE;
    reactIs_development$1.Portal = REACT_PORTAL_TYPE;
    reactIs_development$1.Profiler = REACT_PROFILER_TYPE;
    reactIs_development$1.StrictMode = REACT_STRICT_MODE_TYPE;
    reactIs_development$1.Suspense = REACT_SUSPENSE_TYPE;
    reactIs_development$1.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    reactIs_development$1.isContextConsumer = function(object2) {
      return typeOf2(object2) === REACT_CONSUMER_TYPE;
    };
    reactIs_development$1.isContextProvider = function(object2) {
      return typeOf2(object2) === REACT_CONTEXT_TYPE;
    };
    reactIs_development$1.isElement = function(object2) {
      return "object" === typeof object2 && null !== object2 && object2.$$typeof === REACT_ELEMENT_TYPE;
    };
    reactIs_development$1.isForwardRef = function(object2) {
      return typeOf2(object2) === REACT_FORWARD_REF_TYPE;
    };
    reactIs_development$1.isFragment = function(object2) {
      return typeOf2(object2) === REACT_FRAGMENT_TYPE;
    };
    reactIs_development$1.isLazy = function(object2) {
      return typeOf2(object2) === REACT_LAZY_TYPE;
    };
    reactIs_development$1.isMemo = function(object2) {
      return typeOf2(object2) === REACT_MEMO_TYPE;
    };
    reactIs_development$1.isPortal = function(object2) {
      return typeOf2(object2) === REACT_PORTAL_TYPE;
    };
    reactIs_development$1.isProfiler = function(object2) {
      return typeOf2(object2) === REACT_PROFILER_TYPE;
    };
    reactIs_development$1.isStrictMode = function(object2) {
      return typeOf2(object2) === REACT_STRICT_MODE_TYPE;
    };
    reactIs_development$1.isSuspense = function(object2) {
      return typeOf2(object2) === REACT_SUSPENSE_TYPE;
    };
    reactIs_development$1.isSuspenseList = function(object2) {
      return typeOf2(object2) === REACT_SUSPENSE_LIST_TYPE;
    };
    reactIs_development$1.isValidElementType = function(type3) {
      return "string" === typeof type3 || "function" === typeof type3 || type3 === REACT_FRAGMENT_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type3 && null !== type3 && (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_CONSUMER_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type3.getModuleId) ? true : false;
    };
    reactIs_development$1.typeOf = typeOf2;
  })();
  return reactIs_development$1;
}
var hasRequiredReactIs$1;
function requireReactIs$1() {
  if (hasRequiredReactIs$1) return reactIs$1.exports;
  hasRequiredReactIs$1 = 1;
  if (false) {
    reactIs$1.exports = requireReactIs_production();
  } else {
    reactIs$1.exports = requireReactIs_development$1();
  }
  return reactIs$1.exports;
}
var reactIsExports$1 = requireReactIs$1();
var index$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports$1);
var ReactIs19 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index$1
}, [reactIsExports$1]);
var reactIs = { exports: {} };
var reactIs_production_min = {};
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f3 = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h3 = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m2 = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p3 = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u2;
  u2 = Symbol.for("react.module.reference");
  function v(a3) {
    if ("object" === typeof a3 && null !== a3) {
      var r2 = a3.$$typeof;
      switch (r2) {
        case b:
          switch (a3 = a3.type, a3) {
            case d:
            case f3:
            case e:
            case m2:
            case n:
              return a3;
            default:
              switch (a3 = a3 && a3.$$typeof, a3) {
                case k:
                case h3:
                case l:
                case q:
                case p3:
                case g:
                  return a3;
                default:
                  return r2;
              }
          }
        case c:
          return r2;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h3;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p3;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f3;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m2;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a3) {
    return v(a3) === h3;
  };
  reactIs_production_min.isContextProvider = function(a3) {
    return v(a3) === g;
  };
  reactIs_production_min.isElement = function(a3) {
    return "object" === typeof a3 && null !== a3 && a3.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a3) {
    return v(a3) === l;
  };
  reactIs_production_min.isFragment = function(a3) {
    return v(a3) === d;
  };
  reactIs_production_min.isLazy = function(a3) {
    return v(a3) === q;
  };
  reactIs_production_min.isMemo = function(a3) {
    return v(a3) === p3;
  };
  reactIs_production_min.isPortal = function(a3) {
    return v(a3) === c;
  };
  reactIs_production_min.isProfiler = function(a3) {
    return v(a3) === f3;
  };
  reactIs_production_min.isStrictMode = function(a3) {
    return v(a3) === e;
  };
  reactIs_production_min.isSuspense = function(a3) {
    return v(a3) === m2;
  };
  reactIs_production_min.isSuspenseList = function(a3) {
    return v(a3) === n;
  };
  reactIs_production_min.isValidElementType = function(a3) {
    return "string" === typeof a3 || "function" === typeof a3 || a3 === d || a3 === f3 || a3 === e || a3 === m2 || a3 === n || a3 === t || "object" === typeof a3 && null !== a3 && (a3.$$typeof === q || a3.$$typeof === p3 || a3.$$typeof === g || a3.$$typeof === h3 || a3.$$typeof === l || a3.$$typeof === u2 || void 0 !== a3.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  return reactIs_production_min;
}
var reactIs_development = {};
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (true) {
    (function() {
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type3) {
        if (typeof type3 === "string" || typeof type3 === "function") {
          return true;
        }
        if (type3 === REACT_FRAGMENT_TYPE || type3 === REACT_PROFILER_TYPE || enableDebugTracing || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type3 === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type3 === "object" && type3 !== null) {
          if (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type3.$$typeof === REACT_MODULE_REFERENCE || type3.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function typeOf2(object2) {
        if (typeof object2 === "object" && object2 !== null) {
          var $$typeof = object2.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type3 = object2.type;
              switch (type3) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type3;
                default:
                  var $$typeofType = type3 && type3.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object2) {
        return typeOf2(object2) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object2) {
        return typeOf2(object2) === REACT_PROVIDER_TYPE;
      }
      function isElement(object2) {
        return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object2) {
        return typeOf2(object2) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object2) {
        return typeOf2(object2) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object2) {
        return typeOf2(object2) === REACT_LAZY_TYPE;
      }
      function isMemo(object2) {
        return typeOf2(object2) === REACT_MEMO_TYPE;
      }
      function isPortal(object2) {
        return typeOf2(object2) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object2) {
        return typeOf2(object2) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object2) {
        return typeOf2(object2) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object2) {
        return typeOf2(object2) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object2) {
        return typeOf2(object2) === REACT_SUSPENSE_LIST_TYPE;
      }
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element2;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.SuspenseList = SuspenseList;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isSuspenseList = isSuspenseList;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf2;
    })();
  }
  return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (false) {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}
var reactIsExports = requireReactIs();
var index = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports);
var ReactIs18 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [reactIsExports]);
var reactIsMethods = [
  "isAsyncMode",
  "isConcurrentMode",
  "isContextConsumer",
  "isContextProvider",
  "isElement",
  "isForwardRef",
  "isFragment",
  "isLazy",
  "isMemo",
  "isPortal",
  "isProfiler",
  "isStrictMode",
  "isSuspense",
  "isSuspenseList",
  "isValidElementType"
];
var ReactIs = Object.fromEntries(reactIsMethods.map((m2) => [m2, (v) => ReactIs18[m2](v) || ReactIs19[m2](v)]));
function getChildren(arg, children = []) {
  if (Array.isArray(arg)) {
    for (const item of arg) {
      getChildren(item, children);
    }
  } else if (arg != null && arg !== false && arg !== "") {
    children.push(arg);
  }
  return children;
}
function getType(element) {
  const type3 = element.type;
  if (typeof type3 === "string") {
    return type3;
  }
  if (typeof type3 === "function") {
    return type3.displayName || type3.name || "Unknown";
  }
  if (ReactIs.isFragment(element)) {
    return "React.Fragment";
  }
  if (ReactIs.isSuspense(element)) {
    return "React.Suspense";
  }
  if (typeof type3 === "object" && type3 !== null) {
    if (ReactIs.isContextProvider(element)) {
      return "Context.Provider";
    }
    if (ReactIs.isContextConsumer(element)) {
      return "Context.Consumer";
    }
    if (ReactIs.isForwardRef(element)) {
      if (type3.displayName) {
        return type3.displayName;
      }
      const functionName2 = type3.render.displayName || type3.render.name || "";
      return functionName2 === "" ? "ForwardRef" : `ForwardRef(${functionName2})`;
    }
    if (ReactIs.isMemo(element)) {
      const functionName2 = type3.displayName || type3.type.displayName || type3.type.name || "";
      return functionName2 === "" ? "Memo" : `Memo(${functionName2})`;
    }
  }
  return "UNDEFINED";
}
function getPropKeys$1(element) {
  const { props } = element;
  return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
}
var serialize$1 = (element, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? printElementAsLeaf(getType(element), config2) : printElement(getType(element), printProps(getPropKeys$1(element), element.props, config2, indentation + config2.indent, depth, refs, printer2), printChildren(getChildren(element.props.children), config2, indentation + config2.indent, depth, refs, printer2), config2, indentation);
var test$1 = (val) => val != null && ReactIs.isElement(val);
var plugin$1 = {
  serialize: serialize$1,
  test: test$1
};
var testSymbol = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function getPropKeys(object2) {
  const { props } = object2;
  return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
}
var serialize = (object2, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? printElementAsLeaf(object2.type, config2) : printElement(object2.type, object2.props ? printProps(getPropKeys(object2), object2.props, config2, indentation + config2.indent, depth, refs, printer2) : "", object2.children ? printChildren(object2.children, config2, indentation + config2.indent, depth, refs, printer2) : "", config2, indentation);
var test = (val) => val && val.$$typeof === testSymbol;
var plugin = {
  serialize,
  test
};
var toString = Object.prototype.toString;
var toISOString = Date.prototype.toISOString;
var errorToString = Error.prototype.toString;
var regExpToString = RegExp.prototype.toString;
function getConstructorName(val) {
  return typeof val.constructor === "function" && val.constructor.name || "Object";
}
function isWindow(val) {
  return typeof window !== "undefined" && val === window;
}
var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
var NEWLINE_REGEXP = /\n/g;
var PrettyFormatPluginError = class extends Error {
  constructor(message, stack) {
    super(message);
    this.stack = stack;
    this.name = this.constructor.name;
  }
};
function isToStringedArrayType(toStringed) {
  return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
}
function printNumber(val) {
  return Object.is(val, -0) ? "-0" : String(val);
}
function printBigInt(val) {
  return String(`${val}n`);
}
function printFunction(val, printFunctionName2) {
  if (!printFunctionName2) {
    return "[Function]";
  }
  return `[Function ${val.name || "anonymous"}]`;
}
function printSymbol(val) {
  return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
}
function printError(val) {
  return `[${errorToString.call(val)}]`;
}
function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
  if (val === true || val === false) {
    return `${val}`;
  }
  if (val === void 0) {
    return "undefined";
  }
  if (val === null) {
    return "null";
  }
  const typeOf2 = typeof val;
  if (typeOf2 === "number") {
    return printNumber(val);
  }
  if (typeOf2 === "bigint") {
    return printBigInt(val);
  }
  if (typeOf2 === "string") {
    if (escapeString) {
      return `"${val.replaceAll(/"|\\/g, "\\$&")}"`;
    }
    return `"${val}"`;
  }
  if (typeOf2 === "function") {
    return printFunction(val, printFunctionName2);
  }
  if (typeOf2 === "symbol") {
    return printSymbol(val);
  }
  const toStringed = toString.call(val);
  if (toStringed === "[object WeakMap]") {
    return "WeakMap {}";
  }
  if (toStringed === "[object WeakSet]") {
    return "WeakSet {}";
  }
  if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
    return printFunction(val, printFunctionName2);
  }
  if (toStringed === "[object Symbol]") {
    return printSymbol(val);
  }
  if (toStringed === "[object Date]") {
    return Number.isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
  }
  if (toStringed === "[object Error]") {
    return printError(val);
  }
  if (toStringed === "[object RegExp]") {
    if (escapeRegex2) {
      return regExpToString.call(val).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
    }
    return regExpToString.call(val);
  }
  if (val instanceof Error) {
    return printError(val);
  }
  return null;
}
function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
  if (refs.includes(val)) {
    return "[Circular]";
  }
  refs = [...refs];
  refs.push(val);
  const hitMaxDepth = ++depth > config2.maxDepth;
  const min = config2.min;
  if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
    return printer(val.toJSON(), config2, indentation, depth, refs, true);
  }
  const toStringed = toString.call(val);
  if (toStringed === "[object Arguments]") {
    return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${printListItems(val, config2, indentation, depth, refs, printer)}]`;
  }
  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${printListItems(val, config2, indentation, depth, refs, printer)}]`;
  }
  if (toStringed === "[object Map]") {
    return hitMaxDepth ? "[Map]" : `Map {${printIteratorEntries(val.entries(), config2, indentation, depth, refs, printer, " => ")}}`;
  }
  if (toStringed === "[object Set]") {
    return hitMaxDepth ? "[Set]" : `Set {${printIteratorValues(val.values(), config2, indentation, depth, refs, printer)}}`;
  }
  return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config2.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${printObjectProperties(val, config2, indentation, depth, refs, printer)}}`;
}
var ErrorPlugin = {
  test: (val) => val && val instanceof Error,
  serialize(val, config2, indentation, depth, refs, printer2) {
    if (refs.includes(val)) {
      return "[Circular]";
    }
    refs = [...refs, val];
    const hitMaxDepth = ++depth > config2.maxDepth;
    const { message, cause, ...rest } = val;
    const entries = {
      message,
      ...typeof cause !== "undefined" ? { cause } : {},
      ...val instanceof AggregateError ? { errors: val.errors } : {},
      ...rest
    };
    const name = val.name !== "Error" ? val.name : getConstructorName(val);
    return hitMaxDepth ? `[${name}]` : `${name} {${printIteratorEntries(Object.entries(entries).values(), config2, indentation, depth, refs, printer2)}}`;
  }
};
function isNewPlugin(plugin3) {
  return plugin3.serialize != null;
}
function printPlugin(plugin3, val, config2, indentation, depth, refs) {
  let printed;
  try {
    printed = isNewPlugin(plugin3) ? plugin3.serialize(val, config2, indentation, depth, refs, printer) : plugin3.print(val, (valChild) => printer(valChild, config2, indentation, depth, refs), (str) => {
      const indentationNext = indentation + config2.indent;
      return indentationNext + str.replaceAll(NEWLINE_REGEXP, `
${indentationNext}`);
    }, {
      edgeSpacing: config2.spacingOuter,
      min: config2.min,
      spacing: config2.spacingInner
    }, config2.colors);
  } catch (error) {
    throw new PrettyFormatPluginError(error.message, error.stack);
  }
  if (typeof printed !== "string") {
    throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
  }
  return printed;
}
function findPlugin(plugins2, val) {
  for (const plugin3 of plugins2) {
    try {
      if (plugin3.test(val)) {
        return plugin3;
      }
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
  }
  return null;
}
function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
  const plugin3 = findPlugin(config2.plugins, val);
  if (plugin3 !== null) {
    return printPlugin(plugin3, val, config2, indentation, depth, refs);
  }
  const basicResult = printBasicValue(val, config2.printFunctionName, config2.escapeRegex, config2.escapeString);
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON);
}
var DEFAULT_THEME = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
};
var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
var DEFAULT_OPTIONS = {
  callToJSON: true,
  compareKeys: void 0,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Number.POSITIVE_INFINITY,
  maxWidth: Number.POSITIVE_INFINITY,
  min: false,
  plugins: [],
  printBasicPrototype: true,
  printFunctionName: true,
  theme: DEFAULT_THEME
};
function validateOptions(options) {
  for (const key of Object.keys(options)) {
    if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
      throw new Error(`pretty-format: Unknown option "${key}".`);
    }
  }
  if (options.min && options.indent !== void 0 && options.indent !== 0) {
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
  }
}
function getColorsHighlight() {
  return DEFAULT_THEME_KEYS.reduce((colors, key) => {
    const value = DEFAULT_THEME[key];
    const color = value && u[value];
    if (color && typeof color.close === "string" && typeof color.open === "string") {
      colors[key] = color;
    } else {
      throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
    }
    return colors;
  }, /* @__PURE__ */ Object.create(null));
}
function getColorsEmpty() {
  return DEFAULT_THEME_KEYS.reduce((colors, key) => {
    colors[key] = {
      close: "",
      open: ""
    };
    return colors;
  }, /* @__PURE__ */ Object.create(null));
}
function getPrintFunctionName(options) {
  return (options === null || options === void 0 ? void 0 : options.printFunctionName) ?? DEFAULT_OPTIONS.printFunctionName;
}
function getEscapeRegex(options) {
  return (options === null || options === void 0 ? void 0 : options.escapeRegex) ?? DEFAULT_OPTIONS.escapeRegex;
}
function getEscapeString(options) {
  return (options === null || options === void 0 ? void 0 : options.escapeString) ?? DEFAULT_OPTIONS.escapeString;
}
function getConfig(options) {
  return {
    callToJSON: (options === null || options === void 0 ? void 0 : options.callToJSON) ?? DEFAULT_OPTIONS.callToJSON,
    colors: (options === null || options === void 0 ? void 0 : options.highlight) ? getColorsHighlight() : getColorsEmpty(),
    compareKeys: typeof (options === null || options === void 0 ? void 0 : options.compareKeys) === "function" || (options === null || options === void 0 ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
    escapeRegex: getEscapeRegex(options),
    escapeString: getEscapeString(options),
    indent: (options === null || options === void 0 ? void 0 : options.min) ? "" : createIndent((options === null || options === void 0 ? void 0 : options.indent) ?? DEFAULT_OPTIONS.indent),
    maxDepth: (options === null || options === void 0 ? void 0 : options.maxDepth) ?? DEFAULT_OPTIONS.maxDepth,
    maxWidth: (options === null || options === void 0 ? void 0 : options.maxWidth) ?? DEFAULT_OPTIONS.maxWidth,
    min: (options === null || options === void 0 ? void 0 : options.min) ?? DEFAULT_OPTIONS.min,
    plugins: (options === null || options === void 0 ? void 0 : options.plugins) ?? DEFAULT_OPTIONS.plugins,
    printBasicPrototype: (options === null || options === void 0 ? void 0 : options.printBasicPrototype) ?? true,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: (options === null || options === void 0 ? void 0 : options.min) ? " " : "\n",
    spacingOuter: (options === null || options === void 0 ? void 0 : options.min) ? "" : "\n"
  };
}
function createIndent(indent) {
  return Array.from({ length: indent + 1 }).join(" ");
}
function format(val, options) {
  if (options) {
    validateOptions(options);
    if (options.plugins) {
      const plugin3 = findPlugin(options.plugins, val);
      if (plugin3 !== null) {
        return printPlugin(plugin3, val, getConfig(options), "", 0, []);
      }
    }
  }
  const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(val, getConfig(options), "", 0, []);
}
var plugins = {
  AsymmetricMatcher: plugin$5,
  DOMCollection: plugin$4,
  DOMElement: plugin$3,
  Immutable: plugin$2,
  ReactElement: plugin$1,
  ReactTestComponent: plugin,
  Error: ErrorPlugin
};
var ansiColors = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
};
var styles = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
};
var truncator = "\u2026";
function colorise(value, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType] || "";
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate3 = Infinity,
  stylize = String
} = {}, inspect4) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate3),
    seen,
    inspect: inspect4,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise;
  }
  return options;
}
function isHighSurrogate(char) {
  return char >= "\uD800" && char <= "\uDBFF";
}
function truncate(string2, length, tail = truncator) {
  string2 = String(string2);
  const tailLength = tail.length;
  const stringLength = string2.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    let end = length - tailLength;
    if (end > 0 && isHighSurrogate(string2[end - 1])) {
      end = end - 1;
    }
    return `${string2.slice(0, end)}${tail}`;
  }
  return string2;
}
function inspectList(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i = 0; i < size; i += 1) {
    const last = i + 1 === list.length;
    const secondToLast = i + 2 === list.length;
    truncated = `${truncator}(${list.length - i})`;
    const value = list[i];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string2 = peek || inspectItem(value, options) + (last ? "" : separator);
    const nextLength = output.length + string2.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string2;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key}: ${value}`;
}
function inspectArray(array2, options) {
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array2, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(nonIndexProperties.map((key) => [key, array2[key]]), options, inspectProperty);
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var getArrayName = (array2) => {
  if (typeof Buffer === "function" && array2 instanceof Buffer) {
    return "Buffer";
  }
  if (array2[Symbol.toStringTag]) {
    return array2[Symbol.toStringTag];
  }
  return array2.constructor.name;
};
function inspectTypedArray(array2, options) {
  const name = getArrayName(array2);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i = 0; i < array2.length; i++) {
    const string2 = `${options.stylize(truncate(array2[i], options.truncate), "number")}${i === array2.length - 1 ? "" : ", "}`;
    options.truncate -= string2.length;
    if (array2[i] !== array2.length && options.truncate <= 3) {
      output += `${truncator}(${array2.length - array2[i] + 1})`;
      break;
    }
    output += string2;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(nonIndexProperties.map((key) => [key, array2[key]]), options, inspectProperty);
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
function inspectDate(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, "date");
}
function inspectFunction(func, options) {
  const functionType = func[Symbol.toStringTag] || "Function";
  const name = func.name;
  if (!name) {
    return options.stylize(`[${functionType}]`, "special");
  }
  return options.stylize(`[${functionType} ${truncate(name, options.truncate - 11)}]`, "special");
}
function inspectMapEntry([key, value], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key} => ${value}`;
}
function mapToEntries(map2) {
  const entries = [];
  map2.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
function inspectMap(map2, options) {
  if (map2.size === 0)
    return "Map{}";
  options.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map2), options, inspectMapEntry)} }`;
}
var isNaN = Number.isNaN || ((i) => i !== i);
function inspectNumber(number, options) {
  if (isNaN(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate(String(number), options.truncate), "number");
}
function inspectBigInt(number, options) {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options.stylize(nums, "bigint");
}
function inspectRegExp(value, options) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
function arrayFromSet(set3) {
  const values = [];
  set3.forEach((value) => {
    values.push(value);
  });
  return values;
}
function inspectSet(set3, options) {
  if (set3.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set3), options)} }`;
}
var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
var escapeCharacters = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
};
var hex = 16;
var unicodeLength = 4;
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`;
}
function inspectString(string2, options) {
  if (stringEscapeChars.test(string2)) {
    string2 = string2.replace(stringEscapeChars, escape);
  }
  return options.stylize(`'${truncate(string2, options.truncate - 2)}'`, "string");
}
function inspectSymbol(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
var getPromiseValue = () => "Promise{\u2026}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
var promise_default = getPromiseValue;
function inspectObject(object2, options) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.includes(object2)) {
    return "[Circular]";
  }
  options.seen.push(object2);
  const propertyContents = inspectList(properties.map((key) => [key, object2[key]]), options, inspectProperty);
  const symbolContents = inspectList(symbols.map((key) => [key, object2[key]]), options, inspectProperty);
  options.seen.pop();
  let sep2 = "";
  if (propertyContents && symbolContents) {
    sep2 = ", ";
  }
  return `{ ${propertyContents}${sep2}${symbolContents} }`;
}
var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
function inspectClass(value, options) {
  let name = "";
  if (toStringTag && toStringTag in value) {
    name = value[toStringTag];
  }
  name = name || value.constructor.name;
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject(value, options)}`;
}
function inspectArguments(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
}
var errorKeys = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function inspectObject2(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  options.seen = options.seen || [];
  if (options.seen.includes(error)) {
    return "[Circular]";
  }
  options.seen.push(error);
  const propertyContents = inspectList(properties.map((key) => [key, error[key]]), options, inspectProperty);
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
function inspectAttribute([key, value], options) {
  options.truncate -= 3;
  if (!value) {
    return `${options.stylize(String(key), "yellow")}`;
  }
  return `${options.stylize(String(key), "yellow")}=${options.stylize(`"${value}"`, "string")}`;
}
function inspectNodeCollection(collection, options) {
  return inspectList(collection, options, inspectNode, "\n");
}
function inspectNode(node, options) {
  switch (node.nodeType) {
    case 1:
      return inspectHTML(node, options);
    case 3:
      return options.inspect(node.data, options);
    default:
      return options.inspect(node, options);
  }
}
function inspectHTML(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(properties.map((key) => [key, element.getAttribute(key)]), options, inspectAttribute, " ");
  }
  options.truncate -= propertyContents.length;
  const truncate3 = options.truncate;
  let children = inspectNodeCollection(element.children, options);
  if (children && children.length > truncate3) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
var nodeInspect = Symbol.for("nodejs.util.inspect.custom");
var constructorMap = /* @__PURE__ */ new WeakMap();
var stringTagMap = {};
var baseTypesMap = {
  undefined: (value, options) => options.stylize("undefined", "undefined"),
  null: (value, options) => options.stylize("null", "null"),
  boolean: (value, options) => options.stylize(String(value), "boolean"),
  Boolean: (value, options) => options.stylize(String(value), "boolean"),
  number: inspectNumber,
  Number: inspectNumber,
  bigint: inspectBigInt,
  BigInt: inspectBigInt,
  string: inspectString,
  String: inspectString,
  function: inspectFunction,
  Function: inspectFunction,
  symbol: inspectSymbol,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: inspectSymbol,
  Array: inspectArray,
  Date: inspectDate,
  Map: inspectMap,
  Set: inspectSet,
  RegExp: inspectRegExp,
  Promise: promise_default,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (value, options) => options.stylize("WeakSet{\u2026}", "special"),
  WeakMap: (value, options) => options.stylize("WeakMap{\u2026}", "special"),
  Arguments: inspectArguments,
  Int8Array: inspectTypedArray,
  Uint8Array: inspectTypedArray,
  Uint8ClampedArray: inspectTypedArray,
  Int16Array: inspectTypedArray,
  Uint16Array: inspectTypedArray,
  Int32Array: inspectTypedArray,
  Uint32Array: inspectTypedArray,
  Float32Array: inspectTypedArray,
  Float64Array: inspectTypedArray,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: inspectObject2,
  HTMLCollection: inspectNodeCollection,
  NodeList: inspectNodeCollection
};
var inspectCustom = (value, options, type3) => {
  if (chaiInspect in value && typeof value[chaiInspect] === "function") {
    return value[chaiInspect](options);
  }
  if (nodeInspect in value && typeof value[nodeInspect] === "function") {
    return value[nodeInspect](options.depth, options);
  }
  if ("inspect" in value && typeof value.inspect === "function") {
    return value.inspect(options.depth, options);
  }
  if ("constructor" in value && constructorMap.has(value.constructor)) {
    return constructorMap.get(value.constructor)(value, options);
  }
  if (stringTagMap[type3]) {
    return stringTagMap[type3](value, options);
  }
  return "";
};
var toString2 = Object.prototype.toString;
function inspect(value, opts = {}) {
  const options = normaliseOptions(opts, inspect);
  const { customInspect } = options;
  let type3 = value === null ? "null" : typeof value;
  if (type3 === "object") {
    type3 = toString2.call(value).slice(8, -1);
  }
  if (type3 in baseTypesMap) {
    return baseTypesMap[type3](value, options);
  }
  if (customInspect && value) {
    const output = inspectCustom(value, options, type3);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect(output, options);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value, options);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML(value, options);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass(value, options);
    }
    return inspectObject(value, options);
  }
  if (value === Object(value)) {
    return inspectObject(value, options);
  }
  return options.stylize(String(value), type3);
}
var { AsymmetricMatcher, DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent } = plugins;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function stringify(object2, maxDepth = 10, { maxLength, ...options } = {}) {
  const MAX_LENGTH = maxLength ?? 1e4;
  let result;
  try {
    result = format(object2, {
      maxDepth,
      escapeString: false,
      plugins: PLUGINS,
      ...options
    });
  } catch {
    result = format(object2, {
      callToJSON: false,
      maxDepth,
      escapeString: false,
      plugins: PLUGINS,
      ...options
    });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object2, Math.floor(Math.min(maxDepth, Number.MAX_SAFE_INTEGER) / 2), {
    maxLength,
    ...options
  }) : result;
}
var formatRegExp = /%[sdjifoOc%]/g;
function format2(...args) {
  if (typeof args[0] !== "string") {
    const objects = [];
    for (let i2 = 0; i2 < args.length; i2++) {
      objects.push(inspect2(args[i2], {
        depth: 0,
        colors: false
      }));
    }
    return objects.join(" ");
  }
  const len = args.length;
  let i = 1;
  const template = args[0];
  let str = String(template).replace(formatRegExp, (x) => {
    if (x === "%%") {
      return "%";
    }
    if (i >= len) {
      return x;
    }
    switch (x) {
      case "%s": {
        const value = args[i++];
        if (typeof value === "bigint") {
          return `${value.toString()}n`;
        }
        if (typeof value === "number" && value === 0 && 1 / value < 0) {
          return "-0";
        }
        if (typeof value === "object" && value !== null) {
          if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
            return value.toString();
          }
          return inspect2(value, {
            depth: 0,
            colors: false
          });
        }
        return String(value);
      }
      case "%d": {
        const value = args[i++];
        if (typeof value === "bigint") {
          return `${value.toString()}n`;
        }
        return Number(value).toString();
      }
      case "%i": {
        const value = args[i++];
        if (typeof value === "bigint") {
          return `${value.toString()}n`;
        }
        return Number.parseInt(String(value)).toString();
      }
      case "%f":
        return Number.parseFloat(String(args[i++])).toString();
      case "%o":
        return inspect2(args[i++], {
          showHidden: true,
          showProxy: true
        });
      case "%O":
        return inspect2(args[i++]);
      case "%c": {
        i++;
        return "";
      }
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (err) {
          const m2 = err.message;
          if (m2.includes("circular structure") || m2.includes("cyclic structures") || m2.includes("cyclic object")) {
            return "[Circular]";
          }
          throw err;
        }
      default:
        return x;
    }
  });
  for (let x = args[i]; i < len; x = args[++i]) {
    if (x === null || typeof x !== "object") {
      str += ` ${x}`;
    } else {
      str += ` ${inspect2(x)}`;
    }
  }
  return str;
}
function inspect2(obj, options = {}) {
  if (options.truncate === 0) {
    options.truncate = Number.POSITIVE_INFINITY;
  }
  return inspect(obj, options);
}
function objDisplay(obj, options = {}) {
  if (typeof options.truncate === "undefined") {
    options.truncate = 40;
  }
  const str = inspect2(obj, options);
  const type3 = Object.prototype.toString.call(obj);
  if (options.truncate && str.length >= options.truncate) {
    if (type3 === "[object Function]") {
      const fn2 = obj;
      return !fn2.name ? "[Function]" : `[Function: ${fn2.name}]`;
    } else if (type3 === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type3 === "[object Object]") {
      const keys2 = Object.keys(obj);
      const kstr = keys2.length > 2 ? `${keys2.splice(0, 2).join(", ")}, ...` : keys2.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}
function getDefaultExportFromCjs2(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createSimpleStackTrace(options) {
  const { message = "$$stack trace error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass) {
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
  }
}
function toArray(array2) {
  if (array2 === null || array2 === void 0) {
    array2 = [];
  }
  if (Array.isArray(array2)) {
    return array2;
  }
  return [array2];
}
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function isFinalObj(obj) {
  return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function getType2(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function collectOwnProperties(obj, collector) {
  const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
  Object.getOwnPropertyNames(obj).forEach(collect);
  Object.getOwnPropertySymbols(obj).forEach(collect);
}
function getOwnProperties(obj) {
  const ownProps = /* @__PURE__ */ new Set();
  if (isFinalObj(obj)) {
    return [];
  }
  collectOwnProperties(obj, ownProps);
  return Array.from(ownProps);
}
var defaultCloneOptions = { forceWritable: false };
function deepClone(val, options = defaultCloneOptions) {
  const seen = /* @__PURE__ */ new WeakMap();
  return clone(val, seen, options);
}
function clone(val, seen, options = defaultCloneOptions) {
  let k, out;
  if (seen.has(val)) {
    return seen.get(val);
  }
  if (Array.isArray(val)) {
    out = Array.from({ length: k = val.length });
    seen.set(val, out);
    while (k--) {
      out[k] = clone(val[k], seen, options);
    }
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = Object.create(Object.getPrototypeOf(val));
    seen.set(val, out);
    const props = getOwnProperties(val);
    for (const k2 of props) {
      const descriptor = Object.getOwnPropertyDescriptor(val, k2);
      if (!descriptor) {
        continue;
      }
      const cloned = clone(val[k2], seen, options);
      if (options.forceWritable) {
        Object.defineProperty(out, k2, {
          enumerable: descriptor.enumerable,
          configurable: true,
          writable: true,
          value: cloned
        });
      } else if ("get" in descriptor) {
        Object.defineProperty(out, k2, {
          ...descriptor,
          get() {
            return cloned;
          }
        });
      } else {
        Object.defineProperty(out, k2, {
          ...descriptor,
          value: cloned
        });
      }
    }
    return out;
  }
  return val;
}
function noop() {
}
function objectAttr(source, path2, defaultValue = void 0) {
  const paths = path2.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p3 of paths) {
    result = new Object(result)[p3];
    if (result === void 0) {
      return defaultValue;
    }
  }
  return result;
}
function createDefer() {
  let resolve4 = null;
  let reject = null;
  const p3 = new Promise((_resolve, _reject) => {
    resolve4 = _resolve;
    reject = _reject;
  });
  p3.resolve = resolve4;
  p3.reject = reject;
  return p3;
}
function isNegativeNaN(val) {
  if (!Number.isNaN(val)) {
    return false;
  }
  const f64 = new Float64Array(1);
  f64[0] = val;
  const u32 = new Uint32Array(f64.buffer);
  const isNegative = u32[1] >>> 31 === 1;
  return isNegative;
}
var jsTokens_1;
var hasRequiredJsTokens;
function requireJsTokens() {
  if (hasRequiredJsTokens) return jsTokens_1;
  hasRequiredJsTokens = 1;
  var Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
  RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
  Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
  StringLiteral = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;
  NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  Template = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
  LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
  MultiLineComment = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;
  SingleLineComment = /\/\/.*/y;
  JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
  JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
  JSXString = /(['"])(?:(?!\1)[^])*(\1)?/y;
  JSXText = /[^<>{}]+/y;
  TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
  Newline = RegExp(LineTerminatorSequence.source);
  jsTokens_1 = function* (input, { jsx = false } = {}) {
    var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
    ({ length } = input);
    lastIndex = 0;
    lastSignificantToken = "";
    stack = [
      { tag: "JS" }
    ];
    braces = [];
    parenNesting = 0;
    postfixIncDec = false;
    while (lastIndex < length) {
      mode = stack[stack.length - 1];
      switch (mode.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
            RegularExpressionLiteral.lastIndex = lastIndex;
            if (match = RegularExpressionLiteral.exec(input)) {
              lastIndex = RegularExpressionLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "RegularExpressionLiteral",
                value: match[0],
                closed: match[1] !== void 0 && match[1] !== "\\"
              };
              continue;
            }
          }
          Punctuator.lastIndex = lastIndex;
          if (match = Punctuator.exec(input)) {
            punctuator = match[0];
            nextLastIndex = Punctuator.lastIndex;
            nextLastSignificantToken = punctuator;
            switch (punctuator) {
              case "(":
                if (lastSignificantToken === "?NonExpressionParenKeyword") {
                  stack.push({
                    tag: "JSNonExpressionParen",
                    nesting: parenNesting
                  });
                }
                parenNesting++;
                postfixIncDec = false;
                break;
              case ")":
                parenNesting--;
                postfixIncDec = true;
                if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                  stack.pop();
                  nextLastSignificantToken = "?NonExpressionParenEnd";
                  postfixIncDec = false;
                }
                break;
              case "{":
                Punctuator.lastIndex = 0;
                isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                braces.push(isExpression);
                postfixIncDec = false;
                break;
              case "}":
                switch (mode.tag) {
                  case "InterpolationInTemplate":
                    if (braces.length === mode.nesting) {
                      Template.lastIndex = lastIndex;
                      match = Template.exec(input);
                      lastIndex = Template.lastIndex;
                      lastSignificantToken = match[0];
                      if (match[1] === "${") {
                        lastSignificantToken = "?InterpolationInTemplate";
                        postfixIncDec = false;
                        yield {
                          type: "TemplateMiddle",
                          value: match[0]
                        };
                      } else {
                        stack.pop();
                        postfixIncDec = true;
                        yield {
                          type: "TemplateTail",
                          value: match[0],
                          closed: match[1] === "`"
                        };
                      }
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (braces.length === mode.nesting) {
                      stack.pop();
                      lastIndex += 1;
                      lastSignificantToken = "}";
                      yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                postfixIncDec = braces.pop();
                nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                postfixIncDec = true;
                break;
              case "++":
              case "--":
                nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                  stack.push({ tag: "JSXTag" });
                  lastIndex += 1;
                  lastSignificantToken = "<";
                  yield {
                    type: "JSXPunctuator",
                    value: punctuator
                  };
                  continue;
                }
                postfixIncDec = false;
                break;
              default:
                postfixIncDec = false;
            }
            lastIndex = nextLastIndex;
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "Punctuator",
              value: punctuator
            };
            continue;
          }
          Identifier.lastIndex = lastIndex;
          if (match = Identifier.exec(input)) {
            lastIndex = Identifier.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                  nextLastSignificantToken = "?NonExpressionParenKeyword";
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
            yield {
              type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: match[0]
            };
            continue;
          }
          StringLiteral.lastIndex = lastIndex;
          if (match = StringLiteral.exec(input)) {
            lastIndex = StringLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "StringLiteral",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          NumericLiteral.lastIndex = lastIndex;
          if (match = NumericLiteral.exec(input)) {
            lastIndex = NumericLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "NumericLiteral",
              value: match[0]
            };
            continue;
          }
          Template.lastIndex = lastIndex;
          if (match = Template.exec(input)) {
            lastIndex = Template.lastIndex;
            lastSignificantToken = match[0];
            if (match[1] === "${") {
              lastSignificantToken = "?InterpolationInTemplate";
              stack.push({
                tag: "InterpolationInTemplate",
                nesting: braces.length
              });
              postfixIncDec = false;
              yield {
                type: "TemplateHead",
                value: match[0]
              };
            } else {
              postfixIncDec = true;
              yield {
                type: "NoSubstitutionTemplate",
                value: match[0],
                closed: match[1] === "`"
              };
            }
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          JSXPunctuator.lastIndex = lastIndex;
          if (match = JSXPunctuator.exec(input)) {
            lastIndex = JSXPunctuator.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "<":
                stack.push({ tag: "JSXTag" });
                break;
              case ">":
                stack.pop();
                if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                  nextLastSignificantToken = "?JSX";
                  postfixIncDec = true;
                } else {
                  stack.push({ tag: "JSXChildren" });
                }
                break;
              case "{":
                stack.push({
                  tag: "InterpolationInJSX",
                  nesting: braces.length
                });
                nextLastSignificantToken = "?InterpolationInJSX";
                postfixIncDec = false;
                break;
              case "/":
                if (lastSignificantToken === "<") {
                  stack.pop();
                  if (stack[stack.length - 1].tag === "JSXChildren") {
                    stack.pop();
                  }
                  stack.push({ tag: "JSXTagEnd" });
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "JSXPunctuator",
              value: match[0]
            };
            continue;
          }
          JSXIdentifier.lastIndex = lastIndex;
          if (match = JSXIdentifier.exec(input)) {
            lastIndex = JSXIdentifier.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXIdentifier",
              value: match[0]
            };
            continue;
          }
          JSXString.lastIndex = lastIndex;
          if (match = JSXString.exec(input)) {
            lastIndex = JSXString.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXString",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          JSXText.lastIndex = lastIndex;
          if (match = JSXText.exec(input)) {
            lastIndex = JSXText.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXText",
              value: match[0]
            };
            continue;
          }
          switch (input[lastIndex]) {
            case "<":
              stack.push({ tag: "JSXTag" });
              lastIndex++;
              lastSignificantToken = "<";
              yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              stack.push({
                tag: "InterpolationInJSX",
                nesting: braces.length
              });
              lastIndex++;
              lastSignificantToken = "?InterpolationInJSX";
              postfixIncDec = false;
              yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      WhiteSpace.lastIndex = lastIndex;
      if (match = WhiteSpace.exec(input)) {
        lastIndex = WhiteSpace.lastIndex;
        yield {
          type: "WhiteSpace",
          value: match[0]
        };
        continue;
      }
      LineTerminatorSequence.lastIndex = lastIndex;
      if (match = LineTerminatorSequence.exec(input)) {
        lastIndex = LineTerminatorSequence.lastIndex;
        postfixIncDec = false;
        if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
          lastSignificantToken = "?NoLineTerminatorHere";
        }
        yield {
          type: "LineTerminatorSequence",
          value: match[0]
        };
        continue;
      }
      MultiLineComment.lastIndex = lastIndex;
      if (match = MultiLineComment.exec(input)) {
        lastIndex = MultiLineComment.lastIndex;
        if (Newline.test(match[0])) {
          postfixIncDec = false;
          if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
            lastSignificantToken = "?NoLineTerminatorHere";
          }
        }
        yield {
          type: "MultiLineComment",
          value: match[0],
          closed: match[1] !== void 0
        };
        continue;
      }
      SingleLineComment.lastIndex = lastIndex;
      if (match = SingleLineComment.exec(input)) {
        lastIndex = SingleLineComment.lastIndex;
        postfixIncDec = false;
        yield {
          type: "SingleLineComment",
          value: match[0]
        };
        continue;
      }
      firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
      lastIndex += firstCodePoint.length;
      lastSignificantToken = firstCodePoint;
      postfixIncDec = false;
      yield {
        type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: firstCodePoint
      };
    }
    return void 0;
  };
  return jsTokens_1;
}
var jsTokensExports = requireJsTokens();
var reservedWords = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
var keywords = new Set(reservedWords.keyword);
var reservedWordsStrictSet = new Set(reservedWords.strict);
var SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
function getSafeTimers() {
  const { setTimeout: safeSetTimeout, setInterval: safeSetInterval, clearInterval: safeClearInterval, clearTimeout: safeClearTimeout, setImmediate: safeSetImmediate, clearImmediate: safeClearImmediate, queueMicrotask: safeQueueMicrotask } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
  const { nextTick: safeNextTick } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || { nextTick: (cb) => cb() };
  return {
    nextTick: safeNextTick,
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate,
    queueMicrotask: safeQueueMicrotask
  };
}
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;
var Diff = class {
  0;
  1;
  constructor(op, text) {
    this[0] = op;
    this[1] = text;
  }
};
function diff_commonPrefix(text1, text2) {
  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
    return 0;
  }
  let pointermin = 0;
  let pointermax = Math.min(text1.length, text2.length);
  let pointermid = pointermax;
  let pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
}
function diff_commonSuffix(text1, text2) {
  if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
    return 0;
  }
  let pointermin = 0;
  let pointermax = Math.min(text1.length, text2.length);
  let pointermid = pointermax;
  let pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
}
function diff_commonOverlap_(text1, text2) {
  const text1_length = text1.length;
  const text2_length = text2.length;
  if (text1_length === 0 || text2_length === 0) {
    return 0;
  }
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  const text_length = Math.min(text1_length, text2_length);
  if (text1 === text2) {
    return text_length;
  }
  let best = 0;
  let length = 1;
  while (true) {
    const pattern = text1.substring(text_length - length);
    const found2 = text2.indexOf(pattern);
    if (found2 === -1) {
      return best;
    }
    length += found2;
    if (found2 === 0 || text1.substring(text_length - length) === text2.substring(0, length)) {
      best = length;
      length++;
    }
  }
}
function diff_cleanupSemantic(diffs) {
  let changes = false;
  const equalities = [];
  let equalitiesLength = 0;
  let lastEquality = null;
  let pointer = 0;
  let length_insertions1 = 0;
  let length_deletions1 = 0;
  let length_insertions2 = 0;
  let length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] === DIFF_EQUAL) {
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastEquality = diffs[pointer][1];
    } else {
      if (diffs[pointer][0] === DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(length_insertions2, length_deletions2)) {
        diffs.splice(equalities[equalitiesLength - 1], 0, new Diff(DIFF_DELETE, lastEquality));
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0;
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastEquality = null;
        changes = true;
      }
    }
    pointer++;
  }
  if (changes) {
    diff_cleanupMerge(diffs);
  }
  diff_cleanupSemanticLossless(diffs);
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
      const deletion = diffs[pointer - 1][1];
      const insertion = diffs[pointer][1];
      const overlap_length1 = diff_commonOverlap_(deletion, insertion);
      const overlap_length2 = diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
          diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1)));
          diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
          diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2)));
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
          pointer++;
        }
      }
      pointer++;
    }
    pointer++;
  }
}
var nonAlphaNumericRegex_ = /[^a-z0-9]/i;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;
function diff_cleanupSemanticLossless(diffs) {
  let pointer = 1;
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
      let equality1 = diffs[pointer - 1][1];
      let edit = diffs[pointer][1];
      let equality2 = diffs[pointer + 1][1];
      const commonOffset = diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        const commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }
      let bestEquality1 = equality1;
      let bestEdit = edit;
      let bestEquality2 = equality2;
      let bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        const score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }
      if (diffs[pointer - 1][1] !== bestEquality1) {
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
}
function diff_cleanupMerge(diffs) {
  diffs.push(new Diff(DIFF_EQUAL, ""));
  let pointer = 0;
  let count_delete = 0;
  let count_insert = 0;
  let text_delete = "";
  let text_insert = "";
  let commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] === DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength)));
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          pointer -= count_delete + count_insert;
          diffs.splice(pointer, count_delete + count_insert);
          if (text_delete.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
            pointer++;
          }
          if (text_insert.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
            pointer++;
          }
          pointer++;
        } else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = "";
        text_insert = "";
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === "") {
    diffs.pop();
  }
  let changes = false;
  pointer = 1;
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
      if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  if (changes) {
    diff_cleanupMerge(diffs);
  }
}
function diff_cleanupSemanticScore_(one, two) {
  if (!one || !two) {
    return 6;
  }
  const char1 = one.charAt(one.length - 1);
  const char2 = two.charAt(0);
  const nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
  const nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
  const whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
  const whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
  const lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
  const lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
  const blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
  const blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
  if (blankLine1 || blankLine2) {
    return 5;
  } else if (lineBreak1 || lineBreak2) {
    return 4;
  } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
    return 3;
  } else if (whitespace1 || whitespace2) {
    return 2;
  } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
    return 1;
  }
  return 0;
}
var NO_DIFF_MESSAGE = "Compared values have no visual difference.";
var SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
var build = {};
var hasRequiredBuild;
function requireBuild() {
  if (hasRequiredBuild) return build;
  hasRequiredBuild = 1;
  Object.defineProperty(build, "__esModule", {
    value: true
  });
  build.default = diffSequence;
  const pkg = "diff-sequences";
  const NOT_YET_SET = 0;
  const countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
    let nCommon = 0;
    while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
      aIndex += 1;
      bIndex += 1;
      nCommon += 1;
    }
    return nCommon;
  };
  const countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
    let nCommon = 0;
    while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
      aIndex -= 1;
      bIndex -= 1;
      nCommon += 1;
    }
    return nCommon;
  };
  const extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
    let iF = 0;
    let kF = -d;
    let aFirst = aIndexesF[iF];
    let aIndexPrev1 = aFirst;
    aIndexesF[iF] += countCommonItemsF(
      aFirst + 1,
      aEnd,
      bF + aFirst - kF + 1,
      bEnd,
      isCommon
    );
    const nF = d < iMaxF ? d : iMaxF;
    for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
      if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
        aFirst = aIndexesF[iF];
      } else {
        aFirst = aIndexPrev1 + 1;
        if (aEnd <= aFirst) {
          return iF - 1;
        }
      }
      aIndexPrev1 = aIndexesF[iF];
      aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
    }
    return iMaxF;
  };
  const extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
    let iR = 0;
    let kR = d;
    let aFirst = aIndexesR[iR];
    let aIndexPrev1 = aFirst;
    aIndexesR[iR] -= countCommonItemsR(
      aStart,
      aFirst - 1,
      bStart,
      bR + aFirst - kR - 1,
      isCommon
    );
    const nR = d < iMaxR ? d : iMaxR;
    for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
      if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
        aFirst = aIndexesR[iR];
      } else {
        aFirst = aIndexPrev1 - 1;
        if (aFirst < aStart) {
          return iR - 1;
        }
      }
      aIndexPrev1 = aIndexesR[iR];
      aIndexesR[iR] = aFirst - countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bR + aFirst - kR - 1,
        isCommon
      );
    }
    return iMaxR;
  };
  const extendOverlappablePathsF = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
    const bF = bStart - aStart;
    const aLength = aEnd - aStart;
    const bLength = bEnd - bStart;
    const baDeltaLength = bLength - aLength;
    const kMinOverlapF = -baDeltaLength - (d - 1);
    const kMaxOverlapF = -baDeltaLength + (d - 1);
    let aIndexPrev1 = NOT_YET_SET;
    const nF = d < iMaxF ? d : iMaxF;
    for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
      const insert = iF === 0 || iF !== d && aIndexPrev1 < aIndexesF[iF];
      const aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1;
      const aFirst = insert ? aLastPrev : aLastPrev + 1;
      const bFirst = bF + aFirst - kF;
      const nCommonF = countCommonItemsF(
        aFirst + 1,
        aEnd,
        bFirst + 1,
        bEnd,
        isCommon
      );
      const aLast = aFirst + nCommonF;
      aIndexPrev1 = aIndexesF[iF];
      aIndexesF[iF] = aLast;
      if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
        const iR = (d - 1 - (kF + baDeltaLength)) / 2;
        if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
          const bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1);
          const nCommonR = countCommonItemsR(
            aStart,
            aLastPrev,
            bStart,
            bLastPrev,
            isCommon
          );
          const aIndexPrevFirst = aLastPrev - nCommonR;
          const bIndexPrevFirst = bLastPrev - nCommonR;
          const aEndPreceding = aIndexPrevFirst + 1;
          const bEndPreceding = bIndexPrevFirst + 1;
          division.nChangePreceding = d - 1;
          if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
            division.aEndPreceding = aStart;
            division.bEndPreceding = bStart;
          } else {
            division.aEndPreceding = aEndPreceding;
            division.bEndPreceding = bEndPreceding;
          }
          division.nCommonPreceding = nCommonR;
          if (nCommonR !== 0) {
            division.aCommonPreceding = aEndPreceding;
            division.bCommonPreceding = bEndPreceding;
          }
          division.nCommonFollowing = nCommonF;
          if (nCommonF !== 0) {
            division.aCommonFollowing = aFirst + 1;
            division.bCommonFollowing = bFirst + 1;
          }
          const aStartFollowing = aLast + 1;
          const bStartFollowing = bFirst + nCommonF + 1;
          division.nChangeFollowing = d - 1;
          if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
            division.aStartFollowing = aEnd;
            division.bStartFollowing = bEnd;
          } else {
            division.aStartFollowing = aStartFollowing;
            division.bStartFollowing = bStartFollowing;
          }
          return true;
        }
      }
    }
    return false;
  };
  const extendOverlappablePathsR = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
    const bR = bEnd - aEnd;
    const aLength = aEnd - aStart;
    const bLength = bEnd - bStart;
    const baDeltaLength = bLength - aLength;
    const kMinOverlapR = baDeltaLength - d;
    const kMaxOverlapR = baDeltaLength + d;
    let aIndexPrev1 = NOT_YET_SET;
    const nR = d < iMaxR ? d : iMaxR;
    for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
      const insert = iR === 0 || iR !== d && aIndexesR[iR] < aIndexPrev1;
      const aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1;
      const aFirst = insert ? aLastPrev : aLastPrev - 1;
      const bFirst = bR + aFirst - kR;
      const nCommonR = countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bFirst - 1,
        isCommon
      );
      const aLast = aFirst - nCommonR;
      aIndexPrev1 = aIndexesR[iR];
      aIndexesR[iR] = aLast;
      if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
        const iF = (d + (kR - baDeltaLength)) / 2;
        if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
          const bLast = bFirst - nCommonR;
          division.nChangePreceding = d;
          if (d === aLast + bLast - aStart - bStart) {
            division.aEndPreceding = aStart;
            division.bEndPreceding = bStart;
          } else {
            division.aEndPreceding = aLast;
            division.bEndPreceding = bLast;
          }
          division.nCommonPreceding = nCommonR;
          if (nCommonR !== 0) {
            division.aCommonPreceding = aLast;
            division.bCommonPreceding = bLast;
          }
          division.nChangeFollowing = d - 1;
          if (d === 1) {
            division.nCommonFollowing = 0;
            division.aStartFollowing = aEnd;
            division.bStartFollowing = bEnd;
          } else {
            const bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1);
            const nCommonF = countCommonItemsF(
              aLastPrev,
              aEnd,
              bLastPrev,
              bEnd,
              isCommon
            );
            division.nCommonFollowing = nCommonF;
            if (nCommonF !== 0) {
              division.aCommonFollowing = aLastPrev;
              division.bCommonFollowing = bLastPrev;
            }
            const aStartFollowing = aLastPrev + nCommonF;
            const bStartFollowing = bLastPrev + nCommonF;
            if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              division.aStartFollowing = aStartFollowing;
              division.bStartFollowing = bStartFollowing;
            }
          }
          return true;
        }
      }
    }
    return false;
  };
  const divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
    const bF = bStart - aStart;
    const bR = bEnd - aEnd;
    const aLength = aEnd - aStart;
    const bLength = bEnd - bStart;
    const baDeltaLength = bLength - aLength;
    let iMaxF = aLength;
    let iMaxR = aLength;
    aIndexesF[0] = aStart - 1;
    aIndexesR[0] = aEnd;
    if (baDeltaLength % 2 === 0) {
      const dMin = (nChange || baDeltaLength) / 2;
      const dMax = (aLength + bLength) / 2;
      for (let d = 1; d <= dMax; d += 1) {
        iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
        if (d < dMin) {
          iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
        } else if (
          // If a reverse path overlaps a forward path in the same diagonal,
          // return a division of the index intervals at the middle change.
          extendOverlappablePathsR(
            d,
            aStart,
            aEnd,
            bStart,
            bEnd,
            isCommon,
            aIndexesF,
            iMaxF,
            aIndexesR,
            iMaxR,
            division
          )
        ) {
          return;
        }
      }
    } else {
      const dMin = ((nChange || baDeltaLength) + 1) / 2;
      const dMax = (aLength + bLength + 1) / 2;
      let d = 1;
      iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
      for (d += 1; d <= dMax; d += 1) {
        iMaxR = extendPathsR(
          d - 1,
          aStart,
          bStart,
          bR,
          isCommon,
          aIndexesR,
          iMaxR
        );
        if (d < dMin) {
          iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
        } else if (
          // If a forward path overlaps a reverse path in the same diagonal,
          // return a division of the index intervals at the middle change.
          extendOverlappablePathsF(
            d,
            aStart,
            aEnd,
            bStart,
            bEnd,
            isCommon,
            aIndexesF,
            iMaxF,
            aIndexesR,
            iMaxR,
            division
          )
        ) {
          return;
        }
      }
    }
    throw new Error(
      `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
    );
  };
  const findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
    if (bEnd - bStart < aEnd - aStart) {
      transposed = !transposed;
      if (transposed && callbacks.length === 1) {
        const { foundSubsequence: foundSubsequence2, isCommon: isCommon2 } = callbacks[0];
        callbacks[1] = {
          foundSubsequence: (nCommon, bCommon, aCommon) => {
            foundSubsequence2(nCommon, aCommon, bCommon);
          },
          isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex)
        };
      }
      const tStart = aStart;
      const tEnd = aEnd;
      aStart = bStart;
      aEnd = bEnd;
      bStart = tStart;
      bEnd = tEnd;
    }
    const { foundSubsequence, isCommon } = callbacks[transposed ? 1 : 0];
    divide(
      nChange,
      aStart,
      aEnd,
      bStart,
      bEnd,
      isCommon,
      aIndexesF,
      aIndexesR,
      division
    );
    const {
      nChangePreceding,
      aEndPreceding,
      bEndPreceding,
      nCommonPreceding,
      aCommonPreceding,
      bCommonPreceding,
      nCommonFollowing,
      aCommonFollowing,
      bCommonFollowing,
      nChangeFollowing,
      aStartFollowing,
      bStartFollowing
    } = division;
    if (aStart < aEndPreceding && bStart < bEndPreceding) {
      findSubsequences(
        nChangePreceding,
        aStart,
        aEndPreceding,
        bStart,
        bEndPreceding,
        transposed,
        callbacks,
        aIndexesF,
        aIndexesR,
        division
      );
    }
    if (nCommonPreceding !== 0) {
      foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
    }
    if (nCommonFollowing !== 0) {
      foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
    }
    if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
      findSubsequences(
        nChangeFollowing,
        aStartFollowing,
        aEnd,
        bStartFollowing,
        bEnd,
        transposed,
        callbacks,
        aIndexesF,
        aIndexesR,
        division
      );
    }
  };
  const validateLength = (name, arg) => {
    if (typeof arg !== "number") {
      throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
    }
    if (!Number.isSafeInteger(arg)) {
      throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
    }
    if (arg < 0) {
      throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
    }
  };
  const validateCallback = (name, arg) => {
    const type3 = typeof arg;
    if (type3 !== "function") {
      throw new TypeError(`${pkg}: ${name} typeof ${type3} is not a function`);
    }
  };
  function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
    validateLength("aLength", aLength);
    validateLength("bLength", bLength);
    validateCallback("isCommon", isCommon);
    validateCallback("foundSubsequence", foundSubsequence);
    const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
    if (nCommonF !== 0) {
      foundSubsequence(nCommonF, 0, 0);
    }
    if (aLength !== nCommonF || bLength !== nCommonF) {
      const aStart = nCommonF;
      const bStart = nCommonF;
      const nCommonR = countCommonItemsR(
        aStart,
        aLength - 1,
        bStart,
        bLength - 1,
        isCommon
      );
      const aEnd = aLength - nCommonR;
      const bEnd = bLength - nCommonR;
      const nCommonFR = nCommonF + nCommonR;
      if (aLength !== nCommonFR && bLength !== nCommonFR) {
        const nChange = 0;
        const transposed = false;
        const callbacks = [
          {
            foundSubsequence,
            isCommon
          }
        ];
        const aIndexesF = [NOT_YET_SET];
        const aIndexesR = [NOT_YET_SET];
        const division = {
          aCommonFollowing: NOT_YET_SET,
          aCommonPreceding: NOT_YET_SET,
          aEndPreceding: NOT_YET_SET,
          aStartFollowing: NOT_YET_SET,
          bCommonFollowing: NOT_YET_SET,
          bCommonPreceding: NOT_YET_SET,
          bEndPreceding: NOT_YET_SET,
          bStartFollowing: NOT_YET_SET,
          nChangeFollowing: NOT_YET_SET,
          nChangePreceding: NOT_YET_SET,
          nCommonFollowing: NOT_YET_SET,
          nCommonPreceding: NOT_YET_SET
        };
        findSubsequences(
          nChange,
          aStart,
          aEnd,
          bStart,
          bEnd,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
      if (nCommonR !== 0) {
        foundSubsequence(nCommonR, aEnd, bEnd);
      }
    }
  }
  return build;
}
var buildExports = requireBuild();
var diffSequences = /* @__PURE__ */ getDefaultExportFromCjs2(buildExports);
function formatTrailingSpaces(line, trailingSpaceFormatter) {
  return line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
}
function printDiffLine(line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) {
  return line.length !== 0 ? color(`${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
}
function printDeleteLine(line, isFirstOrLast, { aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printInsertLine(line, isFirstOrLast, { bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printCommonLine(line, isFirstOrLast, { commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function createPatchMark(aStart, aEnd, bStart, bEnd, { patchColor }) {
  return patchColor(`@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`);
}
function joinAlignedDiffsNoExpand(diffs, options) {
  const iLength = diffs.length;
  const nContextLines = options.contextLines;
  const nContextLines2 = nContextLines + nContextLines;
  let jLength = iLength;
  let hasExcessAtStartOrEnd = false;
  let nExcessesBetweenChanges = 0;
  let i = 0;
  while (i !== iLength) {
    const iStart = i;
    while (i !== iLength && diffs[i][0] === DIFF_EQUAL) {
      i += 1;
    }
    if (iStart !== i) {
      if (iStart === 0) {
        if (i > nContextLines) {
          jLength -= i - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else if (i === iLength) {
        const n = i - iStart;
        if (n > nContextLines) {
          jLength -= n - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else {
        const n = i - iStart;
        if (n > nContextLines2) {
          jLength -= n - nContextLines2;
          nExcessesBetweenChanges += 1;
        }
      }
    }
    while (i !== iLength && diffs[i][0] !== DIFF_EQUAL) {
      i += 1;
    }
  }
  const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
  if (nExcessesBetweenChanges !== 0) {
    jLength += nExcessesBetweenChanges + 1;
  } else if (hasExcessAtStartOrEnd) {
    jLength += 1;
  }
  const jLast = jLength - 1;
  const lines = [];
  let jPatchMark = 0;
  if (hasPatch) {
    lines.push("");
  }
  let aStart = 0;
  let bStart = 0;
  let aEnd = 0;
  let bEnd = 0;
  const pushCommonLine = (line) => {
    const j = lines.length;
    lines.push(printCommonLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
    bEnd += 1;
  };
  const pushDeleteLine = (line) => {
    const j = lines.length;
    lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
  };
  const pushInsertLine = (line) => {
    const j = lines.length;
    lines.push(printInsertLine(line, j === 0 || j === jLast, options));
    bEnd += 1;
  };
  i = 0;
  while (i !== iLength) {
    let iStart = i;
    while (i !== iLength && diffs[i][0] === DIFF_EQUAL) {
      i += 1;
    }
    if (iStart !== i) {
      if (iStart === 0) {
        if (i > nContextLines) {
          iStart = i - nContextLines;
          aStart = iStart;
          bStart = iStart;
          aEnd = aStart;
          bEnd = bStart;
        }
        for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else if (i === iLength) {
        const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else {
        const nCommon = i - iStart;
        if (nCommon > nContextLines2) {
          const iEnd = iStart + nContextLines;
          for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
          lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
          jPatchMark = lines.length;
          lines.push("");
          const nOmit = nCommon - nContextLines2;
          aStart = aEnd + nOmit;
          bStart = bEnd + nOmit;
          aEnd = aStart;
          bEnd = bStart;
          for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        } else {
          for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        }
      }
    }
    while (i !== iLength && diffs[i][0] === DIFF_DELETE) {
      pushDeleteLine(diffs[i][1]);
      i += 1;
    }
    while (i !== iLength && diffs[i][0] === DIFF_INSERT) {
      pushInsertLine(diffs[i][1]);
      i += 1;
    }
  }
  if (hasPatch) {
    lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
  }
  return lines.join("\n");
}
function joinAlignedDiffsExpand(diffs, options) {
  return diffs.map((diff2, i, diffs2) => {
    const line = diff2[1];
    const isFirstOrLast = i === 0 || i === diffs2.length - 1;
    switch (diff2[0]) {
      case DIFF_DELETE:
        return printDeleteLine(line, isFirstOrLast, options);
      case DIFF_INSERT:
        return printInsertLine(line, isFirstOrLast, options);
      default:
        return printCommonLine(line, isFirstOrLast, options);
    }
  }).join("\n");
}
var noColor = (string2) => string2;
var DIFF_CONTEXT_DEFAULT = 5;
var DIFF_TRUNCATE_THRESHOLD_DEFAULT = 0;
function getDefaultOptions() {
  return {
    aAnnotation: "Expected",
    aColor: u.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: u.red,
    bIndicator: "+",
    changeColor: u.inverse,
    changeLineTrailingSpaceColor: noColor,
    commonColor: u.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: noColor,
    compareKeys: void 0,
    contextLines: DIFF_CONTEXT_DEFAULT,
    emptyFirstOrLastLinePlaceholder: "",
    expand: false,
    includeChangeCounts: false,
    omitAnnotationLines: false,
    patchColor: u.yellow,
    printBasicPrototype: false,
    truncateThreshold: DIFF_TRUNCATE_THRESHOLD_DEFAULT,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: noColor
  };
}
function getCompareKeys(compareKeys) {
  return compareKeys && typeof compareKeys === "function" ? compareKeys : void 0;
}
function getContextLines(contextLines) {
  return typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
}
function normalizeDiffOptions(options = {}) {
  return {
    ...getDefaultOptions(),
    ...options,
    compareKeys: getCompareKeys(options.compareKeys),
    contextLines: getContextLines(options.contextLines)
  };
}
function isEmptyString(lines) {
  return lines.length === 1 && lines[0].length === 0;
}
function countChanges(diffs) {
  let a3 = 0;
  let b = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        a3 += 1;
        break;
      case DIFF_INSERT:
        b += 1;
        break;
    }
  });
  return {
    a: a3,
    b
  };
}
function printAnnotation({ aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator, includeChangeCounts, omitAnnotationLines }, changeCounts) {
  if (omitAnnotationLines) {
    return "";
  }
  let aRest = "";
  let bRest = "";
  if (includeChangeCounts) {
    const aCount = String(changeCounts.a);
    const bCount = String(changeCounts.b);
    const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
    const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
    const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
    const baCountLengthDiff = bCount.length - aCount.length;
    const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
    const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
    aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
    bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
  }
  const a3 = `${aIndicator} ${aAnnotation}${aRest}`;
  const b = `${bIndicator} ${bAnnotation}${bRest}`;
  return `${aColor(a3)}
${bColor(b)}

`;
}
function printDiffLines(diffs, truncated, options) {
  return printAnnotation(options, countChanges(diffs)) + (options.expand ? joinAlignedDiffsExpand(diffs, options) : joinAlignedDiffsNoExpand(diffs, options)) + (truncated ? options.truncateAnnotationColor(`
${options.truncateAnnotation}`) : "");
}
function diffLinesUnified(aLines, bLines, options) {
  const normalizedOptions = normalizeDiffOptions(options);
  const [diffs, truncated] = diffLinesRaw(isEmptyString(aLines) ? [] : aLines, isEmptyString(bLines) ? [] : bLines, normalizedOptions);
  return printDiffLines(diffs, truncated, normalizedOptions);
}
function diffLinesUnified2(aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) {
  if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
    aLinesDisplay = [];
    aLinesCompare = [];
  }
  if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
    bLinesDisplay = [];
    bLinesCompare = [];
  }
  if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
    return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
  }
  const [diffs, truncated] = diffLinesRaw(aLinesCompare, bLinesCompare, options);
  let aIndex = 0;
  let bIndex = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        diff2[1] = aLinesDisplay[aIndex];
        aIndex += 1;
        break;
      case DIFF_INSERT:
        diff2[1] = bLinesDisplay[bIndex];
        bIndex += 1;
        break;
      default:
        diff2[1] = bLinesDisplay[bIndex];
        aIndex += 1;
        bIndex += 1;
    }
  });
  return printDiffLines(diffs, truncated, normalizeDiffOptions(options));
}
function diffLinesRaw(aLines, bLines, options) {
  const truncate3 = (options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? false;
  const truncateThreshold = Math.max(Math.floor((options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? 0), 0);
  const aLength = truncate3 ? Math.min(aLines.length, truncateThreshold) : aLines.length;
  const bLength = truncate3 ? Math.min(bLines.length, truncateThreshold) : bLines.length;
  const truncated = aLength !== aLines.length || bLength !== bLines.length;
  const isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2];
  const diffs = [];
  let aIndex = 0;
  let bIndex = 0;
  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    for (; aIndex !== aCommon; aIndex += 1) {
      diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
    }
    for (; bIndex !== bCommon; bIndex += 1) {
      diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
    }
    for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1) {
      diffs.push(new Diff(DIFF_EQUAL, bLines[bIndex]));
    }
  };
  diffSequences(aLength, bLength, isCommon, foundSubsequence);
  for (; aIndex !== aLength; aIndex += 1) {
    diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
  }
  for (; bIndex !== bLength; bIndex += 1) {
    diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
  }
  return [diffs, truncated];
}
function getType3(value) {
  if (value === void 0) {
    return "undefined";
  } else if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "function") {
    return "function";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "string";
  } else if (typeof value === "bigint") {
    return "bigint";
  } else if (typeof value === "object") {
    if (value != null) {
      if (value.constructor === RegExp) {
        return "regexp";
      } else if (value.constructor === Map) {
        return "map";
      } else if (value.constructor === Set) {
        return "set";
      } else if (value.constructor === Date) {
        return "date";
      }
    }
    return "object";
  } else if (typeof value === "symbol") {
    return "symbol";
  }
  throw new Error(`value of unknown type: ${value}`);
}
function getNewLineSymbol(string2) {
  return string2.includes("\r\n") ? "\r\n" : "\n";
}
function diffStrings(a3, b, options) {
  const truncate3 = (options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? false;
  const truncateThreshold = Math.max(Math.floor((options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? 0), 0);
  let aLength = a3.length;
  let bLength = b.length;
  if (truncate3) {
    const aMultipleLines = a3.includes("\n");
    const bMultipleLines = b.includes("\n");
    const aNewLineSymbol = getNewLineSymbol(a3);
    const bNewLineSymbol = getNewLineSymbol(b);
    const _a = aMultipleLines ? `${a3.split(aNewLineSymbol, truncateThreshold).join(aNewLineSymbol)}
` : a3;
    const _b = bMultipleLines ? `${b.split(bNewLineSymbol, truncateThreshold).join(bNewLineSymbol)}
` : b;
    aLength = _a.length;
    bLength = _b.length;
  }
  const truncated = aLength !== a3.length || bLength !== b.length;
  const isCommon = (aIndex2, bIndex2) => a3[aIndex2] === b[bIndex2];
  let aIndex = 0;
  let bIndex = 0;
  const diffs = [];
  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    if (aIndex !== aCommon) {
      diffs.push(new Diff(DIFF_DELETE, a3.slice(aIndex, aCommon)));
    }
    if (bIndex !== bCommon) {
      diffs.push(new Diff(DIFF_INSERT, b.slice(bIndex, bCommon)));
    }
    aIndex = aCommon + nCommon;
    bIndex = bCommon + nCommon;
    diffs.push(new Diff(DIFF_EQUAL, b.slice(bCommon, bIndex)));
  };
  diffSequences(aLength, bLength, isCommon, foundSubsequence);
  if (aIndex !== aLength) {
    diffs.push(new Diff(DIFF_DELETE, a3.slice(aIndex)));
  }
  if (bIndex !== bLength) {
    diffs.push(new Diff(DIFF_INSERT, b.slice(bIndex)));
  }
  return [diffs, truncated];
}
function concatenateRelevantDiffs(op, diffs, changeColor) {
  return diffs.reduce((reduced, diff2) => reduced + (diff2[0] === DIFF_EQUAL ? diff2[1] : diff2[0] === op && diff2[1].length !== 0 ? changeColor(diff2[1]) : ""), "");
}
var ChangeBuffer = class {
  op;
  line;
  lines;
  changeColor;
  constructor(op, changeColor) {
    this.op = op;
    this.line = [];
    this.lines = [];
    this.changeColor = changeColor;
  }
  pushSubstring(substring) {
    this.pushDiff(new Diff(this.op, substring));
  }
  pushLine() {
    this.lines.push(this.line.length !== 1 ? new Diff(this.op, concatenateRelevantDiffs(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new Diff(this.op, this.line[0][1]));
    this.line.length = 0;
  }
  isLineEmpty() {
    return this.line.length === 0;
  }
  // Minor input to buffer.
  pushDiff(diff2) {
    this.line.push(diff2);
  }
  // Main input to buffer.
  align(diff2) {
    const string2 = diff2[1];
    if (string2.includes("\n")) {
      const substrings = string2.split("\n");
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i < iLast) {
          this.pushSubstring(substring);
          this.pushLine();
        } else if (substring.length !== 0) {
          this.pushSubstring(substring);
        }
      });
    } else {
      this.pushDiff(diff2);
    }
  }
  // Output from buffer.
  moveLinesTo(lines) {
    if (!this.isLineEmpty()) {
      this.pushLine();
    }
    lines.push(...this.lines);
    this.lines.length = 0;
  }
};
var CommonBuffer = class {
  deleteBuffer;
  insertBuffer;
  lines;
  constructor(deleteBuffer, insertBuffer) {
    this.deleteBuffer = deleteBuffer;
    this.insertBuffer = insertBuffer;
    this.lines = [];
  }
  pushDiffCommonLine(diff2) {
    this.lines.push(diff2);
  }
  pushDiffChangeLines(diff2) {
    const isDiffEmpty = diff2[1].length === 0;
    if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
      this.deleteBuffer.pushDiff(diff2);
    }
    if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
      this.insertBuffer.pushDiff(diff2);
    }
  }
  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines);
    this.insertBuffer.moveLinesTo(this.lines);
  }
  // Input to buffer.
  align(diff2) {
    const op = diff2[0];
    const string2 = diff2[1];
    if (string2.includes("\n")) {
      const substrings = string2.split("\n");
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i === 0) {
          const subdiff = new Diff(op, substring);
          if (this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()) {
            this.flushChangeLines();
            this.pushDiffCommonLine(subdiff);
          } else {
            this.pushDiffChangeLines(subdiff);
            this.flushChangeLines();
          }
        } else if (i < iLast) {
          this.pushDiffCommonLine(new Diff(op, substring));
        } else if (substring.length !== 0) {
          this.pushDiffChangeLines(new Diff(op, substring));
        }
      });
    } else {
      this.pushDiffChangeLines(diff2);
    }
  }
  // Output from buffer.
  getLines() {
    this.flushChangeLines();
    return this.lines;
  }
};
function getAlignedDiffs(diffs, changeColor) {
  const deleteBuffer = new ChangeBuffer(DIFF_DELETE, changeColor);
  const insertBuffer = new ChangeBuffer(DIFF_INSERT, changeColor);
  const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        deleteBuffer.align(diff2);
        break;
      case DIFF_INSERT:
        insertBuffer.align(diff2);
        break;
      default:
        commonBuffer.align(diff2);
    }
  });
  return commonBuffer.getLines();
}
function hasCommonDiff(diffs, isMultiline) {
  if (isMultiline) {
    const iLast = diffs.length - 1;
    return diffs.some((diff2, i) => diff2[0] === DIFF_EQUAL && (i !== iLast || diff2[1] !== "\n"));
  }
  return diffs.some((diff2) => diff2[0] === DIFF_EQUAL);
}
function diffStringsUnified(a3, b, options) {
  if (a3 !== b && a3.length !== 0 && b.length !== 0) {
    const isMultiline = a3.includes("\n") || b.includes("\n");
    const [diffs, truncated] = diffStringsRaw(isMultiline ? `${a3}
` : a3, isMultiline ? `${b}
` : b, true, options);
    if (hasCommonDiff(diffs, isMultiline)) {
      const optionsNormalized = normalizeDiffOptions(options);
      const lines = getAlignedDiffs(diffs, optionsNormalized.changeColor);
      return printDiffLines(lines, truncated, optionsNormalized);
    }
  }
  return diffLinesUnified(a3.split("\n"), b.split("\n"), options);
}
function diffStringsRaw(a3, b, cleanup, options) {
  const [diffs, truncated] = diffStrings(a3, b, options);
  if (cleanup) {
    diff_cleanupSemantic(diffs);
  }
  return [diffs, truncated];
}
function getCommonMessage(message, options) {
  const { commonColor } = normalizeDiffOptions(options);
  return commonColor(message);
}
var { AsymmetricMatcher: AsymmetricMatcher2, DOMCollection: DOMCollection2, DOMElement: DOMElement2, Immutable: Immutable2, ReactElement: ReactElement2, ReactTestComponent: ReactTestComponent2 } = plugins;
var PLUGINS2 = [
  ReactTestComponent2,
  ReactElement2,
  DOMElement2,
  DOMCollection2,
  Immutable2,
  AsymmetricMatcher2,
  plugins.Error
];
var FORMAT_OPTIONS = {
  maxDepth: 20,
  plugins: PLUGINS2
};
var FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 8,
  plugins: PLUGINS2
};
function diff(a3, b, options) {
  if (Object.is(a3, b)) {
    return "";
  }
  const aType = getType3(a3);
  let expectedType = aType;
  let omitDifference = false;
  if (aType === "object" && typeof a3.asymmetricMatch === "function") {
    if (a3.$$typeof !== Symbol.for("jest.asymmetricMatcher")) {
      return void 0;
    }
    if (typeof a3.getExpectedType !== "function") {
      return void 0;
    }
    expectedType = a3.getExpectedType();
    omitDifference = expectedType === "string";
  }
  if (expectedType !== getType3(b)) {
    let truncate4 = function(s2) {
      return s2.length <= MAX_LENGTH ? s2 : `${s2.slice(0, MAX_LENGTH)}...`;
    };
    var truncate3 = truncate4;
    const { aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator } = normalizeDiffOptions(options);
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    let aDisplay = format(a3, formatOptions);
    let bDisplay = format(b, formatOptions);
    const MAX_LENGTH = 1e5;
    aDisplay = truncate4(aDisplay);
    bDisplay = truncate4(bDisplay);
    const aDiff = `${aColor(`${aIndicator} ${aAnnotation}:`)} 
${aDisplay}`;
    const bDiff = `${bColor(`${bIndicator} ${bAnnotation}:`)} 
${bDisplay}`;
    return `${aDiff}

${bDiff}`;
  }
  if (omitDifference) {
    return void 0;
  }
  switch (aType) {
    case "string":
      return diffLinesUnified(a3.split("\n"), b.split("\n"), options);
    case "boolean":
    case "number":
      return comparePrimitive(a3, b, options);
    case "map":
      return compareObjects(sortMap(a3), sortMap(b), options);
    case "set":
      return compareObjects(sortSet(a3), sortSet(b), options);
    default:
      return compareObjects(a3, b, options);
  }
}
function comparePrimitive(a3, b, options) {
  const aFormat = format(a3, FORMAT_OPTIONS);
  const bFormat = format(b, FORMAT_OPTIONS);
  return aFormat === bFormat ? "" : diffLinesUnified(aFormat.split("\n"), bFormat.split("\n"), options);
}
function sortMap(map2) {
  return new Map(Array.from(map2.entries()).sort());
}
function sortSet(set3) {
  return new Set(Array.from(set3.values()).sort());
}
function compareObjects(a3, b, options) {
  let difference;
  let hasThrown = false;
  try {
    const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a3, b, formatOptions, options);
  } catch {
    hasThrown = true;
  }
  const noDiffMessage = getCommonMessage(NO_DIFF_MESSAGE, options);
  if (difference === void 0 || difference === noDiffMessage) {
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a3, b, formatOptions, options);
    if (difference !== noDiffMessage && !hasThrown) {
      difference = `${getCommonMessage(SIMILAR_MESSAGE, options)}

${difference}`;
    }
  }
  return difference;
}
function getFormatOptions(formatOptions, options) {
  const { compareKeys, printBasicPrototype, maxDepth } = normalizeDiffOptions(options);
  return {
    ...formatOptions,
    compareKeys,
    printBasicPrototype,
    maxDepth: maxDepth ?? formatOptions.maxDepth
  };
}
function getObjectsDifference(a3, b, formatOptions, options) {
  const formatOptionsZeroIndent = {
    ...formatOptions,
    indent: 0
  };
  const aCompare = format(a3, formatOptionsZeroIndent);
  const bCompare = format(b, formatOptionsZeroIndent);
  if (aCompare === bCompare) {
    return getCommonMessage(NO_DIFF_MESSAGE, options);
  } else {
    const aDisplay = format(a3, formatOptions);
    const bDisplay = format(b, formatOptions);
    return diffLinesUnified2(aDisplay.split("\n"), bDisplay.split("\n"), aCompare.split("\n"), bCompare.split("\n"), options);
  }
}
var MAX_DIFF_STRING_LENGTH = 2e4;
function isAsymmetricMatcher(data) {
  const type3 = getType2(data);
  return type3 === "Object" && typeof data.asymmetricMatch === "function";
}
function isReplaceable(obj1, obj2) {
  const obj1Type = getType2(obj1);
  const obj2Type = getType2(obj2);
  return obj1Type === obj2Type && (obj1Type === "Object" || obj1Type === "Array");
}
function printDiffOrStringify(received, expected, options) {
  const { aAnnotation, bAnnotation } = normalizeDiffOptions(options);
  if (typeof expected === "string" && typeof received === "string" && expected.length > 0 && received.length > 0 && expected.length <= MAX_DIFF_STRING_LENGTH && received.length <= MAX_DIFF_STRING_LENGTH && expected !== received) {
    if (expected.includes("\n") || received.includes("\n")) {
      return diffStringsUnified(expected, received, options);
    }
    const [diffs] = diffStringsRaw(expected, received, true);
    const hasCommonDiff2 = diffs.some((diff2) => diff2[0] === DIFF_EQUAL);
    const printLabel = getLabelPrinter(aAnnotation, bAnnotation);
    const expectedLine = printLabel(aAnnotation) + printExpected(getCommonAndChangedSubstrings(diffs, DIFF_DELETE, hasCommonDiff2));
    const receivedLine = printLabel(bAnnotation) + printReceived(getCommonAndChangedSubstrings(diffs, DIFF_INSERT, hasCommonDiff2));
    return `${expectedLine}
${receivedLine}`;
  }
  const clonedExpected = deepClone(expected, { forceWritable: true });
  const clonedReceived = deepClone(received, { forceWritable: true });
  const { replacedExpected, replacedActual } = replaceAsymmetricMatcher(clonedReceived, clonedExpected);
  const difference = diff(replacedExpected, replacedActual, options);
  return difference;
}
function replaceAsymmetricMatcher(actual, expected, actualReplaced = /* @__PURE__ */ new WeakSet(), expectedReplaced = /* @__PURE__ */ new WeakSet()) {
  if (actual instanceof Error && expected instanceof Error && typeof actual.cause !== "undefined" && typeof expected.cause === "undefined") {
    delete actual.cause;
    return {
      replacedActual: actual,
      replacedExpected: expected
    };
  }
  if (!isReplaceable(actual, expected)) {
    return {
      replacedActual: actual,
      replacedExpected: expected
    };
  }
  if (actualReplaced.has(actual) || expectedReplaced.has(expected)) {
    return {
      replacedActual: actual,
      replacedExpected: expected
    };
  }
  actualReplaced.add(actual);
  expectedReplaced.add(expected);
  getOwnProperties(expected).forEach((key) => {
    const expectedValue = expected[key];
    const actualValue = actual[key];
    if (isAsymmetricMatcher(expectedValue)) {
      if (expectedValue.asymmetricMatch(actualValue)) {
        actual[key] = expectedValue;
      }
    } else if (isAsymmetricMatcher(actualValue)) {
      if (actualValue.asymmetricMatch(expectedValue)) {
        expected[key] = actualValue;
      }
    } else if (isReplaceable(actualValue, expectedValue)) {
      const replaced = replaceAsymmetricMatcher(actualValue, expectedValue, actualReplaced, expectedReplaced);
      actual[key] = replaced.replacedActual;
      expected[key] = replaced.replacedExpected;
    }
  });
  return {
    replacedActual: actual,
    replacedExpected: expected
  };
}
function getLabelPrinter(...strings) {
  const maxLength = strings.reduce((max, string2) => string2.length > max ? string2.length : max, 0);
  return (string2) => `${string2}: ${" ".repeat(maxLength - string2.length)}`;
}
var SPACE_SYMBOL = "\xB7";
function replaceTrailingSpaces(text) {
  return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
}
function printReceived(object2) {
  return u.red(replaceTrailingSpaces(stringify(object2)));
}
function printExpected(value) {
  return u.green(replaceTrailingSpaces(stringify(value)));
}
function getCommonAndChangedSubstrings(diffs, op, hasCommonDiff2) {
  return diffs.reduce((reduced, diff2) => reduced + (diff2[0] === DIFF_EQUAL ? diff2[1] : diff2[0] === op ? hasCommonDiff2 ? u.inverse(diff2[1]) : diff2[1] : ""), "");
}
function assert(condition, message) {
  if (!condition)
    throw new Error(message);
}
function isType(type3, value) {
  return typeof value === type3;
}
function isPromise(value) {
  return value instanceof Promise;
}
function define(obj, key, descriptor) {
  Object.defineProperty(obj, key, descriptor);
}
function defineValue(obj, key, value) {
  define(obj, key, { value, configurable: true, writable: true });
}
var SYMBOL_STATE = Symbol.for("tinyspy:spy");
var spies = /* @__PURE__ */ new Set();
var reset = (state) => {
  state.called = false, state.callCount = 0, state.calls = [], state.results = [], state.resolves = [], state.next = [];
};
var defineState = (spy2) => (define(spy2, SYMBOL_STATE, {
  value: { reset: () => reset(spy2[SYMBOL_STATE]) }
}), spy2[SYMBOL_STATE]);
var getInternalState = (spy2) => spy2[SYMBOL_STATE] || defineState(spy2);
function createInternalSpy(cb) {
  assert(
    isType("function", cb) || isType("undefined", cb),
    "cannot spy on a non-function value"
  );
  let fn2 = function(...args) {
    let state2 = getInternalState(fn2);
    state2.called = true, state2.callCount++, state2.calls.push(args);
    let next = state2.next.shift();
    if (next) {
      state2.results.push(next);
      let [type22, result2] = next;
      if (type22 === "ok")
        return result2;
      throw result2;
    }
    let result, type3 = "ok", resultIndex = state2.results.length;
    if (state2.impl)
      try {
        new.target ? result = Reflect.construct(state2.impl, args, new.target) : result = state2.impl.apply(this, args), type3 = "ok";
      } catch (err) {
        throw result = err, type3 = "error", state2.results.push([type3, err]), err;
      }
    let resultTuple = [type3, result];
    return isPromise(result) && result.then(
      (r2) => state2.resolves[resultIndex] = ["ok", r2],
      (e) => state2.resolves[resultIndex] = ["error", e]
    ), state2.results.push(resultTuple), result;
  };
  defineValue(fn2, "_isMockFunction", true), defineValue(fn2, "length", cb ? cb.length : 0), defineValue(fn2, "name", cb && cb.name || "spy");
  let state = getInternalState(fn2);
  return state.reset(), state.impl = cb, fn2;
}
function isMockFunction(obj) {
  return !!obj && obj._isMockFunction === true;
}
var getDescriptor = (obj, method) => {
  let objDescriptor = Object.getOwnPropertyDescriptor(obj, method);
  if (objDescriptor)
    return [obj, objDescriptor];
  let currentProto = Object.getPrototypeOf(obj);
  for (; currentProto !== null; ) {
    let descriptor = Object.getOwnPropertyDescriptor(currentProto, method);
    if (descriptor)
      return [currentProto, descriptor];
    currentProto = Object.getPrototypeOf(currentProto);
  }
};
var setPototype = (fn2, val) => {
  val != null && typeof val == "function" && val.prototype != null && Object.setPrototypeOf(fn2.prototype, val.prototype);
};
function internalSpyOn(obj, methodName, mock) {
  assert(
    !isType("undefined", obj),
    "spyOn could not find an object to spy upon"
  ), assert(
    isType("object", obj) || isType("function", obj),
    "cannot spyOn on a primitive value"
  );
  let [accessName, accessType] = (() => {
    if (!isType("object", methodName))
      return [methodName, "value"];
    if ("getter" in methodName && "setter" in methodName)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in methodName)
      return [methodName.getter, "get"];
    if ("setter" in methodName)
      return [methodName.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), [originalDescriptorObject, originalDescriptor] = getDescriptor(obj, accessName) || [];
  assert(
    originalDescriptor || accessName in obj,
    `${String(accessName)} does not exist`
  );
  let ssr = false;
  accessType === "value" && originalDescriptor && !originalDescriptor.value && originalDescriptor.get && (accessType = "get", ssr = true, mock = originalDescriptor.get());
  let original;
  originalDescriptor ? original = originalDescriptor[accessType] : accessType !== "value" ? original = () => obj[accessName] : original = obj[accessName], original && isSpyFunction(original) && (original = original[SYMBOL_STATE].getOriginal());
  let reassign = (cb) => {
    let { value, ...desc } = originalDescriptor || {
      configurable: true,
      writable: true
    };
    accessType !== "value" && delete desc.writable, desc[accessType] = cb, define(obj, accessName, desc);
  }, restore = () => {
    originalDescriptorObject !== obj ? Reflect.deleteProperty(obj, accessName) : originalDescriptor && !original ? define(obj, accessName, originalDescriptor) : reassign(original);
  };
  mock || (mock = original);
  let spy2 = wrap(createInternalSpy(mock), mock);
  accessType === "value" && setPototype(spy2, original);
  let state = spy2[SYMBOL_STATE];
  return defineValue(state, "restore", restore), defineValue(state, "getOriginal", () => ssr ? original() : original), defineValue(state, "willCall", (newCb) => (state.impl = newCb, spy2)), reassign(
    ssr ? () => (setPototype(spy2, mock), spy2) : spy2
  ), spies.add(spy2), spy2;
}
var ignoreProperties = /* @__PURE__ */ new Set([
  "length",
  "name",
  "prototype"
]);
function getAllProperties(original) {
  let properties = /* @__PURE__ */ new Set(), descriptors2 = {};
  for (; original && original !== Object.prototype && original !== Function.prototype; ) {
    let ownProperties = [
      ...Object.getOwnPropertyNames(original),
      ...Object.getOwnPropertySymbols(original)
    ];
    for (let prop of ownProperties)
      descriptors2[prop] || ignoreProperties.has(prop) || (properties.add(prop), descriptors2[prop] = Object.getOwnPropertyDescriptor(original, prop));
    original = Object.getPrototypeOf(original);
  }
  return {
    properties,
    descriptors: descriptors2
  };
}
function wrap(mock, original) {
  if (!original || // the original is already a spy, so it has all the properties
  SYMBOL_STATE in original)
    return mock;
  let { properties, descriptors: descriptors2 } = getAllProperties(original);
  for (let key of properties) {
    let descriptor = descriptors2[key];
    getDescriptor(mock, key) || define(mock, key, descriptor);
  }
  return mock;
}
function isSpyFunction(obj) {
  return isMockFunction(obj) && "getOriginal" in obj[SYMBOL_STATE];
}
var mocks = /* @__PURE__ */ new Set();
function isMockFunction2(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  let state;
  const descriptor = getDescriptor2(obj, method);
  const fn2 = descriptor && descriptor[accessType || "value"];
  if (isMockFunction2(fn2)) {
    state = fn2.mock._state();
  }
  try {
    const stub = internalSpyOn(obj, objMethod);
    const spy = enhanceSpy(stub);
    if (state) {
      spy.mock._state(state);
    }
    return spy;
  } catch (error) {
    if (error instanceof TypeError && Symbol.toStringTag && obj[Symbol.toStringTag] === "Module" && (error.message.includes("Cannot redefine property") || error.message.includes("Cannot replace module namespace") || error.message.includes("can't redefine non-configurable property"))) {
      throw new TypeError(`Cannot spy on export "${String(objMethod)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, { cause: error });
    }
    throw error;
  }
}
var callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation;
  let onceImplementations = [];
  let implementationChangedTemporarily = false;
  let instances = [];
  let contexts = [];
  let invocations = [];
  const state = getInternalState(spy);
  const mockContext = {
    get calls() {
      return state.calls;
    },
    get contexts() {
      return contexts;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return state.results.map(([callType, value]) => {
        const type3 = callType === "error" ? "throw" : "return";
        return {
          type: type3,
          value
        };
      });
    },
    get settledResults() {
      return state.resolves.map(([callType, value]) => {
        const type3 = callType === "error" ? "rejected" : "fulfilled";
        return {
          type: type3,
          value
        };
      });
    },
    get lastCall() {
      return state.calls[state.calls.length - 1];
    },
    _state(state2) {
      if (state2) {
        implementation = state2.implementation;
        onceImplementations = state2.onceImplementations;
        implementationChangedTemporarily = state2.implementationChangedTemporarily;
      }
      return {
        implementation,
        onceImplementations,
        implementationChangedTemporarily
      };
    }
  };
  function mockCall(...args) {
    instances.push(this);
    contexts.push(this);
    invocations.push(++callOrder);
    const impl = implementationChangedTemporarily ? implementation : onceImplementations.shift() || implementation || state.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  }
  let name = stub.name;
  stub.getMockName = () => name || "vi.fn()";
  stub.mockName = (n) => {
    name = n;
    return stub;
  };
  stub.mockClear = () => {
    state.reset();
    instances = [];
    contexts = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation = void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    state.restore();
    return stub;
  };
  if (Symbol.dispose) {
    stub[Symbol.dispose] = () => stub.mockRestore();
  }
  stub.getMockImplementation = () => implementationChangedTemporarily ? implementation : onceImplementations.at(0) || implementation;
  stub.mockImplementation = (fn2) => {
    implementation = fn2;
    state.willCall(mockCall);
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  function withImplementation(fn2, cb) {
    const originalImplementation = implementation;
    implementation = fn2;
    state.willCall(mockCall);
    implementationChangedTemporarily = true;
    const reset2 = () => {
      implementation = originalImplementation;
      implementationChangedTemporarily = false;
    };
    const result = cb();
    if (typeof result === "object" && result && typeof result.then === "function") {
      return result.then(() => {
        reset2();
        return stub;
      });
    }
    reset2();
    return stub;
  }
  stub.withImplementation = withImplementation;
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", { get: () => mockContext });
  state.willCall(mockCall);
  mocks.add(stub);
  return stub;
}
function fn(implementation) {
  const enhancedSpy = enhanceSpy(internalSpyOn({ spy: implementation || function() {
  } }, "spy"));
  if (implementation) {
    enhancedSpy.mockImplementation(implementation);
  }
  return enhancedSpy;
}
function getDescriptor2(obj, method) {
  const objDescriptor = Object.getOwnPropertyDescriptor(obj, method);
  if (objDescriptor) {
    return objDescriptor;
  }
  let currentProto = Object.getPrototypeOf(obj);
  while (currentProto !== null) {
    const descriptor = Object.getOwnPropertyDescriptor(currentProto, method);
    if (descriptor) {
      return descriptor;
    }
    currentProto = Object.getPrototypeOf(currentProto);
  }
}
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isImmutable(v) {
  return v && (v[IS_COLLECTION_SYMBOL] || v[IS_RECORD_SYMBOL]);
}
var OBJECT_PROTO = Object.getPrototypeOf({});
function getUnserializableMessage(err) {
  if (err instanceof Error) {
    return `<unserializable>: ${err.message}`;
  }
  if (typeof err === "string") {
    return `<unserializable>: ${err}`;
  }
  return "<unserializable>";
}
function serializeValue(val, seen = /* @__PURE__ */ new WeakMap()) {
  if (!val || typeof val === "string") {
    return val;
  }
  if (val instanceof Error && "toJSON" in val && typeof val.toJSON === "function") {
    const jsonValue = val.toJSON();
    if (jsonValue && jsonValue !== val && typeof jsonValue === "object") {
      if (typeof val.message === "string") {
        safe(() => jsonValue.message ?? (jsonValue.message = val.message));
      }
      if (typeof val.stack === "string") {
        safe(() => jsonValue.stack ?? (jsonValue.stack = val.stack));
      }
      if (typeof val.name === "string") {
        safe(() => jsonValue.name ?? (jsonValue.name = val.name));
      }
      if (val.cause != null) {
        safe(() => jsonValue.cause ?? (jsonValue.cause = serializeValue(val.cause, seen)));
      }
    }
    return serializeValue(jsonValue, seen);
  }
  if (typeof val === "function") {
    return `Function<${val.name || "anonymous"}>`;
  }
  if (typeof val === "symbol") {
    return val.toString();
  }
  if (typeof val !== "object") {
    return val;
  }
  if (typeof Buffer !== "undefined" && val instanceof Buffer) {
    return `<Buffer(${val.length}) ...>`;
  }
  if (typeof Uint8Array !== "undefined" && val instanceof Uint8Array) {
    return `<Uint8Array(${val.length}) ...>`;
  }
  if (isImmutable(val)) {
    return serializeValue(val.toJSON(), seen);
  }
  if (val instanceof Promise || val.constructor && val.constructor.prototype === "AsyncFunction") {
    return "Promise";
  }
  if (typeof Element !== "undefined" && val instanceof Element) {
    return val.tagName;
  }
  if (typeof val.asymmetricMatch === "function") {
    return `${val.toString()} ${format2(val.sample)}`;
  }
  if (typeof val.toJSON === "function") {
    return serializeValue(val.toJSON(), seen);
  }
  if (seen.has(val)) {
    return seen.get(val);
  }
  if (Array.isArray(val)) {
    const clone2 = new Array(val.length);
    seen.set(val, clone2);
    val.forEach((e, i) => {
      try {
        clone2[i] = serializeValue(e, seen);
      } catch (err) {
        clone2[i] = getUnserializableMessage(err);
      }
    });
    return clone2;
  } else {
    const clone2 = /* @__PURE__ */ Object.create(null);
    seen.set(val, clone2);
    let obj = val;
    while (obj && obj !== OBJECT_PROTO) {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        if (key in clone2) {
          return;
        }
        try {
          clone2[key] = serializeValue(val[key], seen);
        } catch (err) {
          delete clone2[key];
          clone2[key] = getUnserializableMessage(err);
        }
      });
      obj = Object.getPrototypeOf(obj);
    }
    return clone2;
  }
}
function safe(fn2) {
  try {
    return fn2();
  } catch {
  }
}
function normalizeErrorMessage(message) {
  return message.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function processError(_err, diffOptions, seen = /* @__PURE__ */ new WeakSet()) {
  if (!_err || typeof _err !== "object") {
    return { message: String(_err) };
  }
  const err = _err;
  if (err.showDiff || err.showDiff === void 0 && err.expected !== void 0 && err.actual !== void 0) {
    err.diff = printDiffOrStringify(err.actual, err.expected, {
      ...diffOptions,
      ...err.diffOptions
    });
  }
  if ("expected" in err && typeof err.expected !== "string") {
    err.expected = stringify(err.expected, 10);
  }
  if ("actual" in err && typeof err.actual !== "string") {
    err.actual = stringify(err.actual, 10);
  }
  try {
    if (typeof err.message === "string") {
      err.message = normalizeErrorMessage(err.message);
    }
  } catch {
  }
  try {
    if (!seen.has(err) && typeof err.cause === "object") {
      seen.add(err);
      err.cause = processError(err.cause, diffOptions, seen);
    }
  } catch {
  }
  try {
    return serializeValue(err);
  } catch (e) {
    return serializeValue(new Error(`Failed to fully serialize error: ${e === null || e === void 0 ? void 0 : e.message}
Inner error message: ${err === null || err === void 0 ? void 0 : err.message}`));
  }
}
var __defProp2 = Object.defineProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var require_util = __commonJS2({
  "(disabled):util"() {
  }
});
var utils_exports = {};
__export2(utils_exports, {
  addChainableMethod: () => addChainableMethod,
  addLengthGuard: () => addLengthGuard,
  addMethod: () => addMethod,
  addProperty: () => addProperty,
  checkError: () => check_error_exports,
  compareByInspect: () => compareByInspect,
  eql: () => deep_eql_default,
  expectTypes: () => expectTypes,
  flag: () => flag,
  getActual: () => getActual,
  getMessage: () => getMessage2,
  getName: () => getName,
  getOperator: () => getOperator,
  getOwnEnumerableProperties: () => getOwnEnumerableProperties,
  getOwnEnumerablePropertySymbols: () => getOwnEnumerablePropertySymbols,
  getPathInfo: () => getPathInfo,
  hasProperty: () => hasProperty,
  inspect: () => inspect22,
  isNaN: () => isNaN22,
  isNumeric: () => isNumeric,
  isProxyEnabled: () => isProxyEnabled,
  isRegExp: () => isRegExp2,
  objDisplay: () => objDisplay2,
  overwriteChainableMethod: () => overwriteChainableMethod,
  overwriteMethod: () => overwriteMethod,
  overwriteProperty: () => overwriteProperty,
  proxify: () => proxify,
  test: () => test2,
  transferFlags: () => transferFlags,
  type: () => type
});
var check_error_exports = {};
__export2(check_error_exports, {
  compatibleConstructor: () => compatibleConstructor,
  compatibleInstance: () => compatibleInstance,
  compatibleMessage: () => compatibleMessage,
  getConstructorName: () => getConstructorName2,
  getMessage: () => getMessage
});
function isErrorInstance(obj) {
  return obj instanceof Error || Object.prototype.toString.call(obj) === "[object Error]";
}
__name(isErrorInstance, "isErrorInstance");
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
__name(isRegExp, "isRegExp");
function compatibleInstance(thrown, errorLike) {
  return isErrorInstance(errorLike) && thrown === errorLike;
}
__name(compatibleInstance, "compatibleInstance");
function compatibleConstructor(thrown, errorLike) {
  if (isErrorInstance(errorLike)) {
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if ((typeof errorLike === "object" || typeof errorLike === "function") && errorLike.prototype) {
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }
  return false;
}
__name(compatibleConstructor, "compatibleConstructor");
function compatibleMessage(thrown, errMatcher) {
  const comparisonString = typeof thrown === "string" ? thrown : thrown.message;
  if (isRegExp(errMatcher)) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === "string") {
    return comparisonString.indexOf(errMatcher) !== -1;
  }
  return false;
}
__name(compatibleMessage, "compatibleMessage");
function getConstructorName2(errorLike) {
  let constructorName = errorLike;
  if (isErrorInstance(errorLike)) {
    constructorName = errorLike.constructor.name;
  } else if (typeof errorLike === "function") {
    constructorName = errorLike.name;
    if (constructorName === "") {
      const newConstructorName = new errorLike().name;
      constructorName = newConstructorName || constructorName;
    }
  }
  return constructorName;
}
__name(getConstructorName2, "getConstructorName");
function getMessage(errorLike) {
  let msg = "";
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === "string") {
    msg = errorLike;
  }
  return msg;
}
__name(getMessage, "getMessage");
function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
}
__name(flag, "flag");
function test2(obj, args) {
  var negate = flag(obj, "negate"), expr = args[0];
  return negate ? !expr : expr;
}
__name(test2, "test");
function type(obj) {
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  const stringTag = obj[Symbol.toStringTag];
  if (typeof stringTag === "string") {
    return stringTag;
  }
  const type3 = Object.prototype.toString.call(obj).slice(8, -1);
  return type3;
}
__name(type, "type");
var canElideFrames = "captureStackTrace" in Error;
var AssertionError = class _AssertionError extends Error {
  static {
    __name(this, "AssertionError");
  }
  message;
  get name() {
    return "AssertionError";
  }
  get ok() {
    return false;
  }
  constructor(message = "Unspecified AssertionError", props, ssf) {
    super(message);
    this.message = message;
    if (canElideFrames) {
      Error.captureStackTrace(this, ssf || _AssertionError);
    }
    for (const key in props) {
      if (!(key in this)) {
        this[key] = props[key];
      }
    }
  }
  toJSON(stack) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: false,
      stack: stack !== false ? this.stack : void 0
    };
  }
};
function expectTypes(obj, types) {
  var flagMsg = flag(obj, "message");
  var ssfi = flag(obj, "ssfi");
  flagMsg = flagMsg ? flagMsg + ": " : "";
  obj = flag(obj, "object");
  types = types.map(function(t) {
    return t.toLowerCase();
  });
  types.sort();
  var str = types.map(function(t, index2) {
    var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
    var or = types.length > 1 && index2 === types.length - 1 ? "or " : "";
    return or + art + " " + t;
  }).join(", ");
  var objType = type(obj).toLowerCase();
  if (!types.some(function(expected) {
    return objType === expected;
  })) {
    throw new AssertionError(
      flagMsg + "object tested must be " + str + ", but " + objType + " given",
      void 0,
      ssfi
    );
  }
}
__name(expectTypes, "expectTypes");
function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
}
__name(getActual, "getActual");
var ansiColors2 = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
};
var styles2 = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
};
var truncator2 = "\u2026";
function colorise2(value, styleType) {
  const color = ansiColors2[styles2[styleType]] || ansiColors2[styleType] || "";
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
__name(colorise2, "colorise");
function normaliseOptions2({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate22 = Infinity,
  stylize = String
} = {}, inspect32) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate22),
    seen,
    inspect: inspect32,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise2;
  }
  return options;
}
__name(normaliseOptions2, "normaliseOptions");
function isHighSurrogate2(char) {
  return char >= "\uD800" && char <= "\uDBFF";
}
__name(isHighSurrogate2, "isHighSurrogate");
function truncate2(string2, length, tail = truncator2) {
  string2 = String(string2);
  const tailLength = tail.length;
  const stringLength = string2.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    let end = length - tailLength;
    if (end > 0 && isHighSurrogate2(string2[end - 1])) {
      end = end - 1;
    }
    return `${string2.slice(0, end)}${tail}`;
  }
  return string2;
}
__name(truncate2, "truncate");
function inspectList2(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i = 0; i < size; i += 1) {
    const last = i + 1 === list.length;
    const secondToLast = i + 2 === list.length;
    truncated = `${truncator2}(${list.length - i})`;
    const value = list[i];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string2 = peek || inspectItem(value, options) + (last ? "" : separator);
    const nextLength = output.length + string2.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string2;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator2}(${list.length - i - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
__name(inspectList2, "inspectList");
function quoteComplexKey2(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
__name(quoteComplexKey2, "quoteComplexKey");
function inspectProperty2([key, value], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey2(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key}: ${value}`;
}
__name(inspectProperty2, "inspectProperty");
function inspectArray2(array2, options) {
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList2(array2, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList2(nonIndexProperties.map((key) => [key, array2[key]]), options, inspectProperty2);
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
__name(inspectArray2, "inspectArray");
var getArrayName2 = /* @__PURE__ */ __name((array2) => {
  if (typeof Buffer === "function" && array2 instanceof Buffer) {
    return "Buffer";
  }
  if (array2[Symbol.toStringTag]) {
    return array2[Symbol.toStringTag];
  }
  return array2.constructor.name;
}, "getArrayName");
function inspectTypedArray2(array2, options) {
  const name = getArrayName2(array2);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i = 0; i < array2.length; i++) {
    const string2 = `${options.stylize(truncate2(array2[i], options.truncate), "number")}${i === array2.length - 1 ? "" : ", "}`;
    options.truncate -= string2.length;
    if (array2[i] !== array2.length && options.truncate <= 3) {
      output += `${truncator2}(${array2.length - array2[i] + 1})`;
      break;
    }
    output += string2;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList2(nonIndexProperties.map((key) => [key, array2[key]]), options, inspectProperty2);
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
__name(inspectTypedArray2, "inspectTypedArray");
function inspectDate2(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate2(split[1], options.truncate - date.length - 1)}`, "date");
}
__name(inspectDate2, "inspectDate");
function inspectFunction2(func, options) {
  const functionType = func[Symbol.toStringTag] || "Function";
  const name = func.name;
  if (!name) {
    return options.stylize(`[${functionType}]`, "special");
  }
  return options.stylize(`[${functionType} ${truncate2(name, options.truncate - 11)}]`, "special");
}
__name(inspectFunction2, "inspectFunction");
function inspectMapEntry2([key, value], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key} => ${value}`;
}
__name(inspectMapEntry2, "inspectMapEntry");
function mapToEntries2(map2) {
  const entries = [];
  map2.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
__name(mapToEntries2, "mapToEntries");
function inspectMap2(map2, options) {
  const size = map2.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options.truncate -= 7;
  return `Map{ ${inspectList2(mapToEntries2(map2), options, inspectMapEntry2)} }`;
}
__name(inspectMap2, "inspectMap");
var isNaN2 = Number.isNaN || ((i) => i !== i);
function inspectNumber2(number, options) {
  if (isNaN2(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate2(String(number), options.truncate), "number");
}
__name(inspectNumber2, "inspectNumber");
function inspectBigInt2(number, options) {
  let nums = truncate2(number.toString(), options.truncate - 1);
  if (nums !== truncator2)
    nums += "n";
  return options.stylize(nums, "bigint");
}
__name(inspectBigInt2, "inspectBigInt");
function inspectRegExp2(value, options) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.stylize(`/${truncate2(source, sourceLength)}/${flags}`, "regexp");
}
__name(inspectRegExp2, "inspectRegExp");
function arrayFromSet2(set22) {
  const values = [];
  set22.forEach((value) => {
    values.push(value);
  });
  return values;
}
__name(arrayFromSet2, "arrayFromSet");
function inspectSet2(set22, options) {
  if (set22.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList2(arrayFromSet2(set22), options)} }`;
}
__name(inspectSet2, "inspectSet");
var stringEscapeChars2 = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
var escapeCharacters2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
};
var hex2 = 16;
var unicodeLength2 = 4;
function escape2(char) {
  return escapeCharacters2[char] || `\\u${`0000${char.charCodeAt(0).toString(hex2)}`.slice(-unicodeLength2)}`;
}
__name(escape2, "escape");
function inspectString2(string2, options) {
  if (stringEscapeChars2.test(string2)) {
    string2 = string2.replace(stringEscapeChars2, escape2);
  }
  return options.stylize(`'${truncate2(string2, options.truncate - 2)}'`, "string");
}
__name(inspectString2, "inspectString");
function inspectSymbol2(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
__name(inspectSymbol2, "inspectSymbol");
var getPromiseValue2 = /* @__PURE__ */ __name(() => "Promise{\u2026}", "getPromiseValue");
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue2 = /* @__PURE__ */ __name((value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    }, "getPromiseValue");
  }
} catch (notNode) {
}
var promise_default2 = getPromiseValue2;
function inspectObject3(object2, options) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.includes(object2)) {
    return "[Circular]";
  }
  options.seen.push(object2);
  const propertyContents = inspectList2(properties.map((key) => [key, object2[key]]), options, inspectProperty2);
  const symbolContents = inspectList2(symbols.map((key) => [key, object2[key]]), options, inspectProperty2);
  options.seen.pop();
  let sep2 = "";
  if (propertyContents && symbolContents) {
    sep2 = ", ";
  }
  return `{ ${propertyContents}${sep2}${symbolContents} }`;
}
__name(inspectObject3, "inspectObject");
var toStringTag2 = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
function inspectClass2(value, options) {
  let name = "";
  if (toStringTag2 && toStringTag2 in value) {
    name = value[toStringTag2];
  }
  name = name || value.constructor.name;
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject3(value, options)}`;
}
__name(inspectClass2, "inspectClass");
function inspectArguments2(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList2(args, options)} ]`;
}
__name(inspectArguments2, "inspectArguments");
var errorKeys2 = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function inspectObject22(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys2.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate2(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  options.seen = options.seen || [];
  if (options.seen.includes(error)) {
    return "[Circular]";
  }
  options.seen.push(error);
  const propertyContents = inspectList2(properties.map((key) => [key, error[key]]), options, inspectProperty2);
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
__name(inspectObject22, "inspectObject");
function inspectAttribute2([key, value], options) {
  options.truncate -= 3;
  if (!value) {
    return `${options.stylize(String(key), "yellow")}`;
  }
  return `${options.stylize(String(key), "yellow")}=${options.stylize(`"${value}"`, "string")}`;
}
__name(inspectAttribute2, "inspectAttribute");
function inspectHTMLCollection(collection, options) {
  return inspectList2(collection, options, inspectHTML2, "\n");
}
__name(inspectHTMLCollection, "inspectHTMLCollection");
function inspectHTML2(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList2(properties.map((key) => [key, element.getAttribute(key)]), options, inspectAttribute2, " ");
  }
  options.truncate -= propertyContents.length;
  const truncate22 = options.truncate;
  let children = inspectHTMLCollection(element.children, options);
  if (children && children.length > truncate22) {
    children = `${truncator2}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
__name(inspectHTML2, "inspectHTML");
var symbolsSupported2 = typeof Symbol === "function" && typeof Symbol.for === "function";
var chaiInspect2 = symbolsSupported2 ? Symbol.for("chai/inspect") : "@@chai/inspect";
var nodeInspect2 = false;
try {
  const nodeUtil = require_util();
  nodeInspect2 = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect2 = false;
}
var constructorMap2 = /* @__PURE__ */ new WeakMap();
var stringTagMap2 = {};
var baseTypesMap2 = {
  undefined: (value, options) => options.stylize("undefined", "undefined"),
  null: (value, options) => options.stylize("null", "null"),
  boolean: (value, options) => options.stylize(String(value), "boolean"),
  Boolean: (value, options) => options.stylize(String(value), "boolean"),
  number: inspectNumber2,
  Number: inspectNumber2,
  bigint: inspectBigInt2,
  BigInt: inspectBigInt2,
  string: inspectString2,
  String: inspectString2,
  function: inspectFunction2,
  Function: inspectFunction2,
  symbol: inspectSymbol2,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: inspectSymbol2,
  Array: inspectArray2,
  Date: inspectDate2,
  Map: inspectMap2,
  Set: inspectSet2,
  RegExp: inspectRegExp2,
  Promise: promise_default2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (value, options) => options.stylize("WeakSet{\u2026}", "special"),
  WeakMap: (value, options) => options.stylize("WeakMap{\u2026}", "special"),
  Arguments: inspectArguments2,
  Int8Array: inspectTypedArray2,
  Uint8Array: inspectTypedArray2,
  Uint8ClampedArray: inspectTypedArray2,
  Int16Array: inspectTypedArray2,
  Uint16Array: inspectTypedArray2,
  Int32Array: inspectTypedArray2,
  Uint32Array: inspectTypedArray2,
  Float32Array: inspectTypedArray2,
  Float64Array: inspectTypedArray2,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: inspectObject22,
  HTMLCollection: inspectHTMLCollection,
  NodeList: inspectHTMLCollection
};
var inspectCustom2 = /* @__PURE__ */ __name((value, options, type3) => {
  if (chaiInspect2 in value && typeof value[chaiInspect2] === "function") {
    return value[chaiInspect2](options);
  }
  if (nodeInspect2 && nodeInspect2 in value && typeof value[nodeInspect2] === "function") {
    return value[nodeInspect2](options.depth, options);
  }
  if ("inspect" in value && typeof value.inspect === "function") {
    return value.inspect(options.depth, options);
  }
  if ("constructor" in value && constructorMap2.has(value.constructor)) {
    return constructorMap2.get(value.constructor)(value, options);
  }
  if (stringTagMap2[type3]) {
    return stringTagMap2[type3](value, options);
  }
  return "";
}, "inspectCustom");
var toString3 = Object.prototype.toString;
function inspect3(value, opts = {}) {
  const options = normaliseOptions2(opts, inspect3);
  const { customInspect } = options;
  let type3 = value === null ? "null" : typeof value;
  if (type3 === "object") {
    type3 = toString3.call(value).slice(8, -1);
  }
  if (type3 in baseTypesMap2) {
    return baseTypesMap2[type3](value, options);
  }
  if (customInspect && value) {
    const output = inspectCustom2(value, options, type3);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect3(output, options);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject3(value, options);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML2(value, options);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass2(value, options);
    }
    return inspectObject3(value, options);
  }
  if (value === Object(value)) {
    return inspectObject3(value, options);
  }
  return options.stylize(String(value), type3);
}
__name(inspect3, "inspect");
var config = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: false,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: true,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: true,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function inspect22(obj, showHidden, depth, colors) {
  var options = {
    colors,
    depth: typeof depth === "undefined" ? 2 : depth,
    showHidden,
    truncate: config.truncateThreshold ? config.truncateThreshold : Infinity
  };
  return inspect3(obj, options);
}
__name(inspect22, "inspect");
function objDisplay2(obj) {
  var str = inspect22(obj), type3 = Object.prototype.toString.call(obj);
  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type3 === "[object Function]") {
      return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
    } else if (type3 === "[object Array]") {
      return "[ Array(" + obj.length + ") ]";
    } else if (type3 === "[object Object]") {
      var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
      return "{ Object (" + kstr + ") }";
    } else {
      return str;
    }
  } else {
    return str;
  }
}
__name(objDisplay2, "objDisplay");
function getMessage2(obj, args) {
  var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  msg = msg.replace(/#\{this\}/g, function() {
    return objDisplay2(val);
  }).replace(/#\{act\}/g, function() {
    return objDisplay2(actual);
  }).replace(/#\{exp\}/g, function() {
    return objDisplay2(expected);
  });
  return flagMsg ? flagMsg + ": " + msg : msg;
}
__name(getMessage2, "getMessage");
function transferFlags(assertion, object2, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
  if (!object2.__flags) {
    object2.__flags = /* @__PURE__ */ Object.create(null);
  }
  includeAll = arguments.length === 3 ? includeAll : true;
  for (var flag3 in flags) {
    if (includeAll || flag3 !== "object" && flag3 !== "ssfi" && flag3 !== "lockSsfi" && flag3 != "message") {
      object2.__flags[flag3] = flags[flag3];
    }
  }
}
__name(transferFlags, "transferFlags");
function type2(obj) {
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  const stringTag = obj[Symbol.toStringTag];
  if (typeof stringTag === "string") {
    return stringTag;
  }
  const sliceStart = 8;
  const sliceEnd = -1;
  return Object.prototype.toString.call(obj).slice(sliceStart, sliceEnd);
}
__name(type2, "type");
function FakeMap() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
__name(FakeMap, "FakeMap");
FakeMap.prototype = {
  get: /* @__PURE__ */ __name(function get(key) {
    return key[this._key];
  }, "get"),
  set: /* @__PURE__ */ __name(function set(key, value) {
    if (Object.isExtensible(key)) {
      Object.defineProperty(key, this._key, {
        value,
        configurable: true
      });
    }
  }, "set")
};
var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  if (!memoizeMap || isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === "boolean") {
      return result;
    }
  }
  return null;
}
__name(memoizeCompare, "memoizeCompare");
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  if (!memoizeMap || isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}
__name(memoizeSet, "memoizeSet");
var deep_eql_default = deepEqual;
function deepEqual(leftHandOperand, rightHandOperand, options) {
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }
  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}
__name(deepEqual, "deepEqual");
function simpleEqual(leftHandOperand, rightHandOperand) {
  if (leftHandOperand === rightHandOperand) {
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }
  if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
  rightHandOperand !== rightHandOperand) {
    return true;
  }
  if (isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
    return false;
  }
  return null;
}
__name(simpleEqual, "simpleEqual");
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      return simpleResult;
    }
  }
  var leftHandType = type2(leftHandOperand);
  if (leftHandType !== type2(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}
__name(extensiveDeepEqual, "extensiveDeepEqual");
function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return leftHandOperand === rightHandOperand;
    case "Error":
      return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case "RegExp":
      return regexpEqual(leftHandOperand, rightHandOperand);
    case "Generator":
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case "DataView":
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case "ArrayBuffer":
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case "Set":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Map":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return leftHandOperand.equals(rightHandOperand);
    case "Temporal.Duration":
      return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return leftHandOperand.toString() === rightHandOperand.toString();
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}
__name(extensiveDeepEqualByType, "extensiveDeepEqualByType");
function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}
__name(regexpEqual, "regexpEqual");
function entriesEqual(leftHandOperand, rightHandOperand, options) {
  try {
    if (leftHandOperand.size !== rightHandOperand.size) {
      return false;
    }
    if (leftHandOperand.size === 0) {
      return true;
    }
  } catch (sizeError) {
    return false;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(/* @__PURE__ */ __name(function gatherEntries(key, value) {
    leftHandItems.push([key, value]);
  }, "gatherEntries"));
  rightHandOperand.forEach(/* @__PURE__ */ __name(function gatherEntries(key, value) {
    rightHandItems.push([key, value]);
  }, "gatherEntries"));
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}
__name(entriesEqual, "entriesEqual");
function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index2 = -1;
  while (++index2 < length) {
    if (deepEqual(leftHandOperand[index2], rightHandOperand[index2], options) === false) {
      return false;
    }
  }
  return true;
}
__name(iterableEqual, "iterableEqual");
function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}
__name(generatorEqual, "generatorEqual");
function hasIteratorFunction(target) {
  return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
}
__name(hasIteratorFunction, "hasIteratorFunction");
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}
__name(getIteratorEntries, "getIteratorEntries");
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [generatorResult.value];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}
__name(getGeneratorEntries, "getGeneratorEntries");
function getEnumerableKeys(target) {
  var keys2 = [];
  for (var key in target) {
    keys2.push(key);
  }
  return keys2;
}
__name(getEnumerableKeys, "getEnumerableKeys");
function getEnumerableSymbols(target) {
  var keys2 = [];
  var allKeys = Object.getOwnPropertySymbols(target);
  for (var i = 0; i < allKeys.length; i += 1) {
    var key = allKeys[i];
    if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
      keys2.push(key);
    }
  }
  return keys2;
}
__name(getEnumerableSymbols, "getEnumerableSymbols");
function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
  var length = keys2.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys2[i]], rightHandOperand[keys2[i]], options) === false) {
      return false;
    }
  }
  return true;
}
__name(keysEqual, "keysEqual");
function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
  var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
  leftHandKeys = leftHandKeys.concat(leftHandSymbols);
  rightHandKeys = rightHandKeys.concat(rightHandSymbols);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }
  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }
  if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
    return true;
  }
  return false;
}
__name(objectEqual, "objectEqual");
function isPrimitive2(value) {
  return value === null || typeof value !== "object";
}
__name(isPrimitive2, "isPrimitive");
function mapSymbols(arr) {
  return arr.map(/* @__PURE__ */ __name(function mapSymbol(entry) {
    if (typeof entry === "symbol") {
      return entry.toString();
    }
    return entry;
  }, "mapSymbol"));
}
__name(mapSymbols, "mapSymbols");
function hasProperty(obj, name) {
  if (typeof obj === "undefined" || obj === null) {
    return false;
  }
  return name in Object(obj);
}
__name(hasProperty, "hasProperty");
function parsePath(path2) {
  const str = path2.replace(/([^\\])\[/g, "$1.[");
  const parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map((value) => {
    if (value === "constructor" || value === "__proto__" || value === "prototype") {
      return {};
    }
    const regexp = /^\[(\d+)\]$/;
    const mArr = regexp.exec(value);
    let parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
    }
    return parsed;
  });
}
__name(parsePath, "parsePath");
function internalGetPathValue(obj, parsed, pathDepth) {
  let temporaryValue = obj;
  let res = null;
  pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
  for (let i = 0; i < pathDepth; i++) {
    const part = parsed[i];
    if (temporaryValue) {
      if (typeof part.p === "undefined") {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }
      if (i === pathDepth - 1) {
        res = temporaryValue;
      }
    }
  }
  return res;
}
__name(internalGetPathValue, "internalGetPathValue");
function getPathInfo(obj, path2) {
  const parsed = parsePath(path2);
  const last = parsed[parsed.length - 1];
  const info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed)
  };
  info.exists = hasProperty(info.parent, info.name);
  return info;
}
__name(getPathInfo, "getPathInfo");
function Assertion(obj, msg, ssfi, lockSsfi) {
  flag(this, "ssfi", ssfi || Assertion);
  flag(this, "lockSsfi", lockSsfi);
  flag(this, "object", obj);
  flag(this, "message", msg);
  flag(this, "eql", config.deepEqual || deep_eql_default);
  return proxify(this);
}
__name(Assertion, "Assertion");
Object.defineProperty(Assertion, "includeStack", {
  get: function() {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    );
    return config.includeStack;
  },
  set: function(value) {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    );
    config.includeStack = value;
  }
});
Object.defineProperty(Assertion, "showDiff", {
  get: function() {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    );
    return config.showDiff;
  },
  set: function(value) {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    );
    config.showDiff = value;
  }
});
Assertion.addProperty = function(name, fn2) {
  addProperty(this.prototype, name, fn2);
};
Assertion.addMethod = function(name, fn2) {
  addMethod(this.prototype, name, fn2);
};
Assertion.addChainableMethod = function(name, fn2, chainingBehavior) {
  addChainableMethod(this.prototype, name, fn2, chainingBehavior);
};
Assertion.overwriteProperty = function(name, fn2) {
  overwriteProperty(this.prototype, name, fn2);
};
Assertion.overwriteMethod = function(name, fn2) {
  overwriteMethod(this.prototype, name, fn2);
};
Assertion.overwriteChainableMethod = function(name, fn2, chainingBehavior) {
  overwriteChainableMethod(this.prototype, name, fn2, chainingBehavior);
};
Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
  var ok = test2(this, arguments);
  if (false !== showDiff)
    showDiff = true;
  if (void 0 === expected && void 0 === _actual)
    showDiff = false;
  if (true !== config.showDiff)
    showDiff = false;
  if (!ok) {
    msg = getMessage2(this, arguments);
    var actual = getActual(this, arguments);
    var assertionErrorObjectProperties = {
      actual,
      expected,
      showDiff
    };
    var operator = getOperator(this, arguments);
    if (operator) {
      assertionErrorObjectProperties.operator = operator;
    }
    throw new AssertionError(
      msg,
      assertionErrorObjectProperties,
      config.includeStack ? this.assert : flag(this, "ssfi")
    );
  }
};
Object.defineProperty(Assertion.prototype, "_obj", {
  get: function() {
    return flag(this, "object");
  },
  set: function(val) {
    flag(this, "object", val);
  }
});
function isProxyEnabled() {
  return config.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
}
__name(isProxyEnabled, "isProxyEnabled");
function addProperty(ctx, name, getter) {
  getter = getter === void 0 ? function() {
  } : getter;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function propertyGetter() {
      if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
        flag(this, "ssfi", propertyGetter);
      }
      var result = getter.call(this);
      if (result !== void 0)
        return result;
      var newAssertion = new Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    }, "propertyGetter"),
    configurable: true
  });
}
__name(addProperty, "addProperty");
var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
}, "length");
function addLengthGuard(fn2, assertionName, isChainable) {
  if (!fnLengthDesc.configurable)
    return fn2;
  Object.defineProperty(fn2, "length", {
    get: function() {
      if (isChainable) {
        throw Error(
          "Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.'
        );
      }
      throw Error(
        "Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".'
      );
    }
  });
  return fn2;
}
__name(addLengthGuard, "addLengthGuard");
function getProperties(object2) {
  var result = Object.getOwnPropertyNames(object2);
  function addProperty2(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }
  __name(addProperty2, "addProperty");
  var proto = Object.getPrototypeOf(object2);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty2);
    proto = Object.getPrototypeOf(proto);
  }
  return result;
}
__name(getProperties, "getProperties");
var builtins = ["__flags", "__methods", "_obj", "assert"];
function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled())
    return obj;
  return new Proxy(obj, {
    get: /* @__PURE__ */ __name(function proxyGetter(target, property) {
      if (typeof property === "string" && config.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
        if (nonChainableMethodName) {
          throw Error(
            "Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".'
          );
        }
        var suggestion = null;
        var suggestionDistance = 4;
        getProperties(target).forEach(function(prop) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1
          ) {
            var dist = stringDistanceCapped(property, prop, suggestionDistance);
            if (dist < suggestionDistance) {
              suggestion = prop;
              suggestionDistance = dist;
            }
          }
        });
        if (suggestion !== null) {
          throw Error(
            "Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?'
          );
        } else {
          throw Error("Invalid Chai property: " + property);
        }
      }
      if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
        flag(target, "ssfi", proxyGetter);
      }
      return Reflect.get(target, property);
    }, "proxyGetter")
  });
}
__name(proxify, "proxify");
function stringDistanceCapped(strA, strB, cap) {
  if (Math.abs(strA.length - strB.length) >= cap) {
    return cap;
  }
  var memo = [];
  for (let i = 0; i <= strA.length; i++) {
    memo[i] = Array(strB.length + 1).fill(0);
    memo[i][0] = i;
  }
  for (let j = 0; j < strB.length; j++) {
    memo[0][j] = j;
  }
  for (let i = 1; i <= strA.length; i++) {
    var ch = strA.charCodeAt(i - 1);
    for (let j = 1; j <= strB.length; j++) {
      if (Math.abs(i - j) >= cap) {
        memo[i][j] = cap;
        continue;
      }
      memo[i][j] = Math.min(
        memo[i - 1][j] + 1,
        memo[i][j - 1] + 1,
        memo[i - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
      );
    }
  }
  return memo[strA.length][strB.length];
}
__name(stringDistanceCapped, "stringDistanceCapped");
function addMethod(ctx, name, method) {
  var methodWrapper = /* @__PURE__ */ __name(function() {
    if (!flag(this, "lockSsfi")) {
      flag(this, "ssfi", methodWrapper);
    }
    var result = method.apply(this, arguments);
    if (result !== void 0)
      return result;
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "methodWrapper");
  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
}
__name(addMethod, "addMethod");
function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = /* @__PURE__ */ __name(function() {
  }, "_super");
  if (_get && "function" === typeof _get.get)
    _super = _get.get;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function overwritingPropertyGetter() {
      if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
        flag(this, "ssfi", overwritingPropertyGetter);
      }
      var origLockSsfi = flag(this, "lockSsfi");
      flag(this, "lockSsfi", true);
      var result = getter(_super).call(this);
      flag(this, "lockSsfi", origLockSsfi);
      if (result !== void 0) {
        return result;
      }
      var newAssertion = new Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    }, "overwritingPropertyGetter"),
    configurable: true
  });
}
__name(overwriteProperty, "overwriteProperty");
function overwriteMethod(ctx, name, method) {
  var _method = ctx[name], _super = /* @__PURE__ */ __name(function() {
    throw new Error(name + " is not a function");
  }, "_super");
  if (_method && "function" === typeof _method)
    _super = _method;
  var overwritingMethodWrapper = /* @__PURE__ */ __name(function() {
    if (!flag(this, "lockSsfi")) {
      flag(this, "ssfi", overwritingMethodWrapper);
    }
    var origLockSsfi = flag(this, "lockSsfi");
    flag(this, "lockSsfi", true);
    var result = method(_super).apply(this, arguments);
    flag(this, "lockSsfi", origLockSsfi);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingMethodWrapper");
  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
}
__name(overwriteMethod, "overwriteMethod");
var canSetPrototype = typeof Object.setPrototypeOf === "function";
var testFn = /* @__PURE__ */ __name(function() {
}, "testFn");
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
  if (typeof propDesc !== "object")
    return true;
  return !propDesc.configurable;
});
var call = Function.prototype.call;
var apply = Function.prototype.apply;
function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== "function") {
    chainingBehavior = /* @__PURE__ */ __name(function() {
    }, "chainingBehavior");
  }
  var chainableBehavior = {
    method,
    chainingBehavior
  };
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function chainableMethodGetter() {
      chainableBehavior.chainingBehavior.call(this);
      var chainableMethodWrapper = /* @__PURE__ */ __name(function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", chainableMethodWrapper);
        }
        var result = chainableBehavior.method.apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }, "chainableMethodWrapper");
      addLengthGuard(chainableMethodWrapper, name, true);
      if (canSetPrototype) {
        var prototype = Object.create(this);
        prototype.call = call;
        prototype.apply = apply;
        Object.setPrototypeOf(chainableMethodWrapper, prototype);
      } else {
        var asserterNames = Object.getOwnPropertyNames(ctx);
        asserterNames.forEach(function(asserterName) {
          if (excludeNames.indexOf(asserterName) !== -1) {
            return;
          }
          var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
          Object.defineProperty(chainableMethodWrapper, asserterName, pd);
        });
      }
      transferFlags(this, chainableMethodWrapper);
      return proxify(chainableMethodWrapper);
    }, "chainableMethodGetter"),
    configurable: true
  });
}
__name(addChainableMethod, "addChainableMethod");
function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];
  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = /* @__PURE__ */ __name(function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingChainableMethodGetter");
  var _method = chainableBehavior.method;
  chainableBehavior.method = /* @__PURE__ */ __name(function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingChainableMethodWrapper");
}
__name(overwriteChainableMethod, "overwriteChainableMethod");
function compareByInspect(a3, b) {
  return inspect22(a3) < inspect22(b) ? -1 : 1;
}
__name(compareByInspect, "compareByInspect");
function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== "function")
    return [];
  return Object.getOwnPropertySymbols(obj).filter(function(sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
}
__name(getOwnEnumerablePropertySymbols, "getOwnEnumerablePropertySymbols");
function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
}
__name(getOwnEnumerableProperties, "getOwnEnumerableProperties");
var isNaN22 = Number.isNaN;
function isObjectType(obj) {
  var objectType = type(obj);
  var objectTypes = ["Array", "Object", "Function"];
  return objectTypes.indexOf(objectType) !== -1;
}
__name(isObjectType, "isObjectType");
function getOperator(obj, args) {
  var operator = flag(obj, "operator");
  var negate = flag(obj, "negate");
  var expected = args[3];
  var msg = negate ? args[2] : args[1];
  if (operator) {
    return operator;
  }
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  if (!msg) {
    return void 0;
  }
  if (/\shave\s/.test(msg)) {
    return void 0;
  }
  var isObject3 = isObjectType(expected);
  if (/\snot\s/.test(msg)) {
    return isObject3 ? "notDeepStrictEqual" : "notStrictEqual";
  }
  return isObject3 ? "deepStrictEqual" : "strictEqual";
}
__name(getOperator, "getOperator");
function getName(fn2) {
  return fn2.name;
}
__name(getName, "getName");
function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
__name(isRegExp2, "isRegExp");
function isNumeric(obj) {
  return ["Number", "BigInt"].includes(type(obj));
}
__name(isNumeric, "isNumeric");
var { flag: flag2 } = utils_exports;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(chain) {
  Assertion.addProperty(chain);
});
Assertion.addProperty("not", function() {
  flag2(this, "negate", true);
});
Assertion.addProperty("deep", function() {
  flag2(this, "deep", true);
});
Assertion.addProperty("nested", function() {
  flag2(this, "nested", true);
});
Assertion.addProperty("own", function() {
  flag2(this, "own", true);
});
Assertion.addProperty("ordered", function() {
  flag2(this, "ordered", true);
});
Assertion.addProperty("any", function() {
  flag2(this, "any", true);
  flag2(this, "all", false);
});
Assertion.addProperty("all", function() {
  flag2(this, "all", true);
  flag2(this, "any", false);
});
var functionTypes = {
  function: [
    "function",
    "asyncfunction",
    "generatorfunction",
    "asyncgeneratorfunction"
  ],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function an(type3, msg) {
  if (msg)
    flag2(this, "message", msg);
  type3 = type3.toLowerCase();
  var obj = flag2(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type3.charAt(0)) ? "an " : "a ";
  const detectedType = type(obj).toLowerCase();
  if (functionTypes["function"].includes(type3)) {
    this.assert(
      functionTypes[type3].includes(detectedType),
      "expected #{this} to be " + article + type3,
      "expected #{this} not to be " + article + type3
    );
  } else {
    this.assert(
      type3 === detectedType,
      "expected #{this} to be " + article + type3,
      "expected #{this} not to be " + article + type3
    );
  }
}
__name(an, "an");
Assertion.addChainableMethod("an", an);
Assertion.addChainableMethod("a", an);
function SameValueZero(a3, b) {
  return isNaN22(a3) && isNaN22(b) || a3 === b;
}
__name(SameValueZero, "SameValueZero");
function includeChainingBehavior() {
  flag2(this, "contains", true);
}
__name(includeChainingBehavior, "includeChainingBehavior");
function include(val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), objType = type(obj).toLowerCase(), flagMsg = flag2(this, "message"), negate = flag2(this, "negate"), ssfi = flag2(this, "ssfi"), isDeep = flag2(this, "deep"), descriptor = isDeep ? "deep " : "", isEql = isDeep ? flag2(this, "eql") : SameValueZero;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  var included = false;
  switch (objType) {
    case "string":
      included = obj.indexOf(val) !== -1;
      break;
    case "weakset":
      if (isDeep) {
        throw new AssertionError(
          flagMsg + "unable to use .deep.include with WeakSet",
          void 0,
          ssfi
        );
      }
      included = obj.has(val);
      break;
    case "map":
      obj.forEach(function(item) {
        included = included || isEql(item, val);
      });
      break;
    case "set":
      if (isDeep) {
        obj.forEach(function(item) {
          included = included || isEql(item, val);
        });
      } else {
        included = obj.has(val);
      }
      break;
    case "array":
      if (isDeep) {
        included = obj.some(function(item) {
          return isEql(item, val);
        });
      } else {
        included = obj.indexOf(val) !== -1;
      }
      break;
    default:
      if (val !== Object(val)) {
        throw new AssertionError(
          flagMsg + "the given combination of arguments (" + objType + " and " + type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + type(val).toLowerCase(),
          void 0,
          ssfi
        );
      }
      var props = Object.keys(val), firstErr = null, numErrs = 0;
      props.forEach(function(prop) {
        var propAssertion = new Assertion(obj);
        transferFlags(this, propAssertion, true);
        flag2(propAssertion, "lockSsfi", true);
        if (!negate || props.length === 1) {
          propAssertion.property(prop, val[prop]);
          return;
        }
        try {
          propAssertion.property(prop, val[prop]);
        } catch (err) {
          if (!check_error_exports.compatibleConstructor(err, AssertionError)) {
            throw err;
          }
          if (firstErr === null)
            firstErr = err;
          numErrs++;
        }
      }, this);
      if (negate && props.length > 1 && numErrs === props.length) {
        throw firstErr;
      }
      return;
  }
  this.assert(
    included,
    "expected #{this} to " + descriptor + "include " + inspect22(val),
    "expected #{this} to not " + descriptor + "include " + inspect22(val)
  );
}
__name(include, "include");
Assertion.addChainableMethod("include", include, includeChainingBehavior);
Assertion.addChainableMethod("contain", include, includeChainingBehavior);
Assertion.addChainableMethod("contains", include, includeChainingBehavior);
Assertion.addChainableMethod("includes", include, includeChainingBehavior);
Assertion.addProperty("ok", function() {
  this.assert(
    flag2(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
Assertion.addProperty("true", function() {
  this.assert(
    true === flag2(this, "object"),
    "expected #{this} to be true",
    "expected #{this} to be false",
    flag2(this, "negate") ? false : true
  );
});
Assertion.addProperty("numeric", function() {
  const object2 = flag2(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(type(object2)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    flag2(this, "negate") ? false : true
  );
});
Assertion.addProperty("callable", function() {
  const val = flag2(this, "object");
  const ssfi = flag2(this, "ssfi");
  const message = flag2(this, "message");
  const msg = message ? `${message}: ` : "";
  const negate = flag2(this, "negate");
  const assertionMessage = negate ? `${msg}expected ${inspect22(val)} not to be a callable function` : `${msg}expected ${inspect22(val)} to be a callable function`;
  const isCallable = [
    "Function",
    "AsyncFunction",
    "GeneratorFunction",
    "AsyncGeneratorFunction"
  ].includes(type(val));
  if (isCallable && negate || !isCallable && !negate) {
    throw new AssertionError(assertionMessage, void 0, ssfi);
  }
});
Assertion.addProperty("false", function() {
  this.assert(
    false === flag2(this, "object"),
    "expected #{this} to be false",
    "expected #{this} to be true",
    flag2(this, "negate") ? true : false
  );
});
Assertion.addProperty("null", function() {
  this.assert(
    null === flag2(this, "object"),
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
Assertion.addProperty("undefined", function() {
  this.assert(
    void 0 === flag2(this, "object"),
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
Assertion.addProperty("NaN", function() {
  this.assert(
    isNaN22(flag2(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function assertExist() {
  var val = flag2(this, "object");
  this.assert(
    val !== null && val !== void 0,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
__name(assertExist, "assertExist");
Assertion.addProperty("exist", assertExist);
Assertion.addProperty("exists", assertExist);
Assertion.addProperty("empty", function() {
  var val = flag2(this, "object"), ssfi = flag2(this, "ssfi"), flagMsg = flag2(this, "message"), itemsCount;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  switch (type(val).toLowerCase()) {
    case "array":
    case "string":
      itemsCount = val.length;
      break;
    case "map":
    case "set":
      itemsCount = val.size;
      break;
    case "weakmap":
    case "weakset":
      throw new AssertionError(
        flagMsg + ".empty was passed a weak collection",
        void 0,
        ssfi
      );
    case "function":
      var msg = flagMsg + ".empty was passed a function " + getName(val);
      throw new AssertionError(msg.trim(), void 0, ssfi);
    default:
      if (val !== Object(val)) {
        throw new AssertionError(
          flagMsg + ".empty was passed non-string primitive " + inspect22(val),
          void 0,
          ssfi
        );
      }
      itemsCount = Object.keys(val).length;
  }
  this.assert(
    0 === itemsCount,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function checkArguments() {
  var obj = flag2(this, "object"), type3 = type(obj);
  this.assert(
    "Arguments" === type3,
    "expected #{this} to be arguments but got " + type3,
    "expected #{this} to not be arguments"
  );
}
__name(checkArguments, "checkArguments");
Assertion.addProperty("arguments", checkArguments);
Assertion.addProperty("Arguments", checkArguments);
function assertEqual(val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  if (flag2(this, "deep")) {
    var prevLockSsfi = flag2(this, "lockSsfi");
    flag2(this, "lockSsfi", true);
    this.eql(val);
    flag2(this, "lockSsfi", prevLockSsfi);
  } else {
    this.assert(
      val === obj,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      val,
      this._obj,
      true
    );
  }
}
__name(assertEqual, "assertEqual");
Assertion.addMethod("equal", assertEqual);
Assertion.addMethod("equals", assertEqual);
Assertion.addMethod("eq", assertEqual);
function assertEql(obj, msg) {
  if (msg)
    flag2(this, "message", msg);
  var eql = flag2(this, "eql");
  this.assert(
    eql(obj, flag2(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    obj,
    this._obj,
    true
  );
}
__name(assertEql, "assertEql");
Assertion.addMethod("eql", assertEql);
Assertion.addMethod("eqls", assertEql);
function assertAbove(n, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n).toLowerCase();
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    throw new AssertionError(
      msgPrefix + "the argument to above must be a date",
      void 0,
      ssfi
    );
  } else if (!isNumeric(n) && (doLength || isNumeric(obj))) {
    throw new AssertionError(
      msgPrefix + "the argument to above must be a number",
      void 0,
      ssfi
    );
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    throw new AssertionError(
      msgPrefix + "expected " + printObj + " to be a number or a date",
      void 0,
      ssfi
    );
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount > n,
      "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + descriptor + " above #{exp}",
      n,
      itemsCount
    );
  } else {
    this.assert(
      obj > n,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      n
    );
  }
}
__name(assertAbove, "assertAbove");
Assertion.addMethod("above", assertAbove);
Assertion.addMethod("gt", assertAbove);
Assertion.addMethod("greaterThan", assertAbove);
function assertLeast(n, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to least must be a date";
  } else if (!isNumeric(n) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to least must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount >= n,
      "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + descriptor + " below #{exp}",
      n,
      itemsCount
    );
  } else {
    this.assert(
      obj >= n,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      n
    );
  }
}
__name(assertLeast, "assertLeast");
Assertion.addMethod("least", assertLeast);
Assertion.addMethod("gte", assertLeast);
Assertion.addMethod("greaterThanOrEqual", assertLeast);
function assertBelow(n, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to below must be a date";
  } else if (!isNumeric(n) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to below must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount < n,
      "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + descriptor + " below #{exp}",
      n,
      itemsCount
    );
  } else {
    this.assert(
      obj < n,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      n
    );
  }
}
__name(assertBelow, "assertBelow");
Assertion.addMethod("below", assertBelow);
Assertion.addMethod("lt", assertBelow);
Assertion.addMethod("lessThan", assertBelow);
function assertMost(n, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to most must be a date";
  } else if (!isNumeric(n) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to most must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount <= n,
      "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + descriptor + " above #{exp}",
      n,
      itemsCount
    );
  } else {
    this.assert(
      obj <= n,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      n
    );
  }
}
__name(assertMost, "assertMost");
Assertion.addMethod("most", assertMost);
Assertion.addMethod("lte", assertMost);
Assertion.addMethod("lessThanOrEqual", assertMost);
Assertion.addMethod("within", function(start, finish, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), startType = type(start).toLowerCase(), finishType = type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && (startType !== "date" || finishType !== "date")) {
    errorMessage = msgPrefix + "the arguments to within must be dates";
  } else if ((!isNumeric(start) || !isNumeric(finish)) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the arguments to within must be numbers";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount >= start && itemsCount <= finish,
      "expected #{this} to have a " + descriptor + " within " + range,
      "expected #{this} to not have a " + descriptor + " within " + range
    );
  } else {
    this.assert(
      obj >= start && obj <= finish,
      "expected #{this} to be within " + range,
      "expected #{this} to not be within " + range
    );
  }
});
function assertInstanceOf(constructor, msg) {
  if (msg)
    flag2(this, "message", msg);
  var target = flag2(this, "object");
  var ssfi = flag2(this, "ssfi");
  var flagMsg = flag2(this, "message");
  try {
    var isInstanceOf = target instanceof constructor;
  } catch (err) {
    if (err instanceof TypeError) {
      flagMsg = flagMsg ? flagMsg + ": " : "";
      throw new AssertionError(
        flagMsg + "The instanceof assertion needs a constructor but " + type(constructor) + " was given.",
        void 0,
        ssfi
      );
    }
    throw err;
  }
  var name = getName(constructor);
  if (name == null) {
    name = "an unnamed constructor";
  }
  this.assert(
    isInstanceOf,
    "expected #{this} to be an instance of " + name,
    "expected #{this} to not be an instance of " + name
  );
}
__name(assertInstanceOf, "assertInstanceOf");
Assertion.addMethod("instanceof", assertInstanceOf);
Assertion.addMethod("instanceOf", assertInstanceOf);
function assertProperty(name, val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var isNested = flag2(this, "nested"), isOwn = flag2(this, "own"), flagMsg = flag2(this, "message"), obj = flag2(this, "object"), ssfi = flag2(this, "ssfi"), nameType = typeof name;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  if (isNested) {
    if (nameType !== "string") {
      throw new AssertionError(
        flagMsg + "the argument to property must be a string when using nested syntax",
        void 0,
        ssfi
      );
    }
  } else {
    if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
      throw new AssertionError(
        flagMsg + "the argument to property must be a string, number, or symbol",
        void 0,
        ssfi
      );
    }
  }
  if (isNested && isOwn) {
    throw new AssertionError(
      flagMsg + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      ssfi
    );
  }
  if (obj === null || obj === void 0) {
    throw new AssertionError(
      flagMsg + "Target cannot be null or undefined.",
      void 0,
      ssfi
    );
  }
  var isDeep = flag2(this, "deep"), negate = flag2(this, "negate"), pathInfo = isNested ? getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name], isEql = isDeep ? flag2(this, "eql") : (val1, val2) => val1 === val2;
  var descriptor = "";
  if (isDeep)
    descriptor += "deep ";
  if (isOwn)
    descriptor += "own ";
  if (isNested)
    descriptor += "nested ";
  descriptor += "property ";
  var hasProperty2;
  if (isOwn)
    hasProperty2 = Object.prototype.hasOwnProperty.call(obj, name);
  else if (isNested)
    hasProperty2 = pathInfo.exists;
  else
    hasProperty2 = hasProperty(obj, name);
  if (!negate || arguments.length === 1) {
    this.assert(
      hasProperty2,
      "expected #{this} to have " + descriptor + inspect22(name),
      "expected #{this} to not have " + descriptor + inspect22(name)
    );
  }
  if (arguments.length > 1) {
    this.assert(
      hasProperty2 && isEql(val, value),
      "expected #{this} to have " + descriptor + inspect22(name) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + descriptor + inspect22(name) + " of #{act}",
      val,
      value
    );
  }
  flag2(this, "object", value);
}
__name(assertProperty, "assertProperty");
Assertion.addMethod("property", assertProperty);
function assertOwnProperty(_name, _value, _msg) {
  flag2(this, "own", true);
  assertProperty.apply(this, arguments);
}
__name(assertOwnProperty, "assertOwnProperty");
Assertion.addMethod("ownProperty", assertOwnProperty);
Assertion.addMethod("haveOwnProperty", assertOwnProperty);
function assertOwnPropertyDescriptor(name, descriptor, msg) {
  if (typeof descriptor === "string") {
    msg = descriptor;
    descriptor = null;
  }
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
  var eql = flag2(this, "eql");
  if (actualDescriptor && descriptor) {
    this.assert(
      eql(descriptor, actualDescriptor),
      "expected the own property descriptor for " + inspect22(name) + " on #{this} to match " + inspect22(descriptor) + ", got " + inspect22(actualDescriptor),
      "expected the own property descriptor for " + inspect22(name) + " on #{this} to not match " + inspect22(descriptor),
      descriptor,
      actualDescriptor,
      true
    );
  } else {
    this.assert(
      actualDescriptor,
      "expected #{this} to have an own property descriptor for " + inspect22(name),
      "expected #{this} to not have an own property descriptor for " + inspect22(name)
    );
  }
  flag2(this, "object", actualDescriptor);
}
__name(assertOwnPropertyDescriptor, "assertOwnPropertyDescriptor");
Assertion.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
Assertion.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
function assertLengthChain() {
  flag2(this, "doLength", true);
}
__name(assertLengthChain, "assertLengthChain");
function assertLength(n, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), objType = type(obj).toLowerCase(), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi"), descriptor = "length", itemsCount;
  switch (objType) {
    case "map":
    case "set":
      descriptor = "size";
      itemsCount = obj.size;
      break;
    default:
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
      itemsCount = obj.length;
  }
  this.assert(
    itemsCount == n,
    "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + descriptor + " of #{act}",
    n,
    itemsCount
  );
}
__name(assertLength, "assertLength");
Assertion.addChainableMethod("length", assertLength, assertLengthChain);
Assertion.addChainableMethod("lengthOf", assertLength, assertLengthChain);
function assertMatch(re, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  this.assert(
    re.exec(obj),
    "expected #{this} to match " + re,
    "expected #{this} not to match " + re
  );
}
__name(assertMatch, "assertMatch");
Assertion.addMethod("match", assertMatch);
Assertion.addMethod("matches", assertMatch);
Assertion.addMethod("string", function(str, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).is.a("string");
  this.assert(
    ~obj.indexOf(str),
    "expected #{this} to contain " + inspect22(str),
    "expected #{this} to not contain " + inspect22(str)
  );
});
function assertKeys(keys2) {
  var obj = flag2(this, "object"), objType = type(obj), keysType = type(keys2), ssfi = flag2(this, "ssfi"), isDeep = flag2(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag2(this, "message");
  flagMsg = flagMsg ? flagMsg + ": " : "";
  var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (objType === "Map" || objType === "Set") {
    deepStr = isDeep ? "deeply " : "";
    actual = [];
    obj.forEach(function(val, key) {
      actual.push(key);
    });
    if (keysType !== "Array") {
      keys2 = Array.prototype.slice.call(arguments);
    }
  } else {
    actual = getOwnEnumerableProperties(obj);
    switch (keysType) {
      case "Array":
        if (arguments.length > 1) {
          throw new AssertionError(mixedArgsMsg, void 0, ssfi);
        }
        break;
      case "Object":
        if (arguments.length > 1) {
          throw new AssertionError(mixedArgsMsg, void 0, ssfi);
        }
        keys2 = Object.keys(keys2);
        break;
      default:
        keys2 = Array.prototype.slice.call(arguments);
    }
    keys2 = keys2.map(function(val) {
      return typeof val === "symbol" ? val : String(val);
    });
  }
  if (!keys2.length) {
    throw new AssertionError(flagMsg + "keys required", void 0, ssfi);
  }
  var len = keys2.length, any = flag2(this, "any"), all = flag2(this, "all"), expected = keys2, isEql = isDeep ? flag2(this, "eql") : (val1, val2) => val1 === val2;
  if (!any && !all) {
    all = true;
  }
  if (any) {
    ok = expected.some(function(expectedKey) {
      return actual.some(function(actualKey) {
        return isEql(expectedKey, actualKey);
      });
    });
  }
  if (all) {
    ok = expected.every(function(expectedKey) {
      return actual.some(function(actualKey) {
        return isEql(expectedKey, actualKey);
      });
    });
    if (!flag2(this, "contains")) {
      ok = ok && keys2.length == actual.length;
    }
  }
  if (len > 1) {
    keys2 = keys2.map(function(key) {
      return inspect22(key);
    });
    var last = keys2.pop();
    if (all) {
      str = keys2.join(", ") + ", and " + last;
    }
    if (any) {
      str = keys2.join(", ") + ", or " + last;
    }
  } else {
    str = inspect22(keys2[0]);
  }
  str = (len > 1 ? "keys " : "key ") + str;
  str = (flag2(this, "contains") ? "contain " : "have ") + str;
  this.assert(
    ok,
    "expected #{this} to " + deepStr + str,
    "expected #{this} to not " + deepStr + str,
    expected.slice(0).sort(compareByInspect),
    actual.sort(compareByInspect),
    true
  );
}
__name(assertKeys, "assertKeys");
Assertion.addMethod("keys", assertKeys);
Assertion.addMethod("key", assertKeys);
function assertThrows(errorLike, errMsgMatcher, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), ssfi = flag2(this, "ssfi"), flagMsg = flag2(this, "message"), negate = flag2(this, "negate") || false;
  new Assertion(obj, flagMsg, ssfi, true).is.a("function");
  if (isRegExp2(errorLike) || typeof errorLike === "string") {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  let caughtErr;
  let errorWasThrown = false;
  try {
    obj();
  } catch (err) {
    errorWasThrown = true;
    caughtErr = err;
  }
  var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
  var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
  var errorLikeFail = false;
  var errMsgMatcherFail = false;
  if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
    var errorLikeString = "an error";
    if (errorLike instanceof Error) {
      errorLikeString = "#{exp}";
    } else if (errorLike) {
      errorLikeString = check_error_exports.getConstructorName(errorLike);
    }
    let actual = caughtErr;
    if (caughtErr instanceof Error) {
      actual = caughtErr.toString();
    } else if (typeof caughtErr === "string") {
      actual = caughtErr;
    } else if (caughtErr && (typeof caughtErr === "object" || typeof caughtErr === "function")) {
      try {
        actual = check_error_exports.getConstructorName(caughtErr);
      } catch (_err) {
      }
    }
    this.assert(
      errorWasThrown,
      "expected #{this} to throw " + errorLikeString,
      "expected #{this} to not throw an error but #{act} was thrown",
      errorLike && errorLike.toString(),
      actual
    );
  }
  if (errorLike && caughtErr) {
    if (errorLike instanceof Error) {
      var isCompatibleInstance = check_error_exports.compatibleInstance(
        caughtErr,
        errorLike
      );
      if (isCompatibleInstance === negate) {
        if (everyArgIsDefined && negate) {
          errorLikeFail = true;
        } else {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
            errorLike.toString(),
            caughtErr.toString()
          );
        }
      }
    }
    var isCompatibleConstructor = check_error_exports.compatibleConstructor(
      caughtErr,
      errorLike
    );
    if (isCompatibleConstructor === negate) {
      if (everyArgIsDefined && negate) {
        errorLikeFail = true;
      } else {
        this.assert(
          negate,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
          errorLike instanceof Error ? errorLike.toString() : errorLike && check_error_exports.getConstructorName(errorLike),
          caughtErr instanceof Error ? caughtErr.toString() : caughtErr && check_error_exports.getConstructorName(caughtErr)
        );
      }
    }
  }
  if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
    var placeholder = "including";
    if (isRegExp2(errMsgMatcher)) {
      placeholder = "matching";
    }
    var isCompatibleMessage = check_error_exports.compatibleMessage(
      caughtErr,
      errMsgMatcher
    );
    if (isCompatibleMessage === negate) {
      if (everyArgIsDefined && negate) {
        errMsgMatcherFail = true;
      } else {
        this.assert(
          negate,
          "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
          "expected #{this} to throw error not " + placeholder + " #{exp}",
          errMsgMatcher,
          check_error_exports.getMessage(caughtErr)
        );
      }
    }
  }
  if (errorLikeFail && errMsgMatcherFail) {
    this.assert(
      negate,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
      errorLike instanceof Error ? errorLike.toString() : errorLike && check_error_exports.getConstructorName(errorLike),
      caughtErr instanceof Error ? caughtErr.toString() : caughtErr && check_error_exports.getConstructorName(caughtErr)
    );
  }
  flag2(this, "object", caughtErr);
}
__name(assertThrows, "assertThrows");
Assertion.addMethod("throw", assertThrows);
Assertion.addMethod("throws", assertThrows);
Assertion.addMethod("Throw", assertThrows);
function respondTo(method, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), itself = flag2(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
  this.assert(
    "function" === typeof context,
    "expected #{this} to respond to " + inspect22(method),
    "expected #{this} to not respond to " + inspect22(method)
  );
}
__name(respondTo, "respondTo");
Assertion.addMethod("respondTo", respondTo);
Assertion.addMethod("respondsTo", respondTo);
Assertion.addProperty("itself", function() {
  flag2(this, "itself", true);
});
function satisfy(matcher, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  var result = matcher(obj);
  this.assert(
    result,
    "expected #{this} to satisfy " + objDisplay2(matcher),
    "expected #{this} to not satisfy" + objDisplay2(matcher),
    flag2(this, "negate") ? false : true,
    result
  );
}
__name(satisfy, "satisfy");
Assertion.addMethod("satisfy", satisfy);
Assertion.addMethod("satisfies", satisfy);
function closeTo(expected, delta, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).is.numeric;
  let message = "A `delta` value is required for `closeTo`";
  if (delta == void 0)
    throw new AssertionError(
      flagMsg ? `${flagMsg}: ${message}` : message,
      void 0,
      ssfi
    );
  new Assertion(delta, flagMsg, ssfi, true).is.numeric;
  message = "A `expected` value is required for `closeTo`";
  if (expected == void 0)
    throw new AssertionError(
      flagMsg ? `${flagMsg}: ${message}` : message,
      void 0,
      ssfi
    );
  new Assertion(expected, flagMsg, ssfi, true).is.numeric;
  const abs = /* @__PURE__ */ __name((x) => x < 0n ? -x : x, "abs");
  const strip = /* @__PURE__ */ __name((number) => parseFloat(parseFloat(number).toPrecision(12)), "strip");
  this.assert(
    strip(abs(obj - expected)) <= delta,
    "expected #{this} to be close to " + expected + " +/- " + delta,
    "expected #{this} not to be close to " + expected + " +/- " + delta
  );
}
__name(closeTo, "closeTo");
Assertion.addMethod("closeTo", closeTo);
Assertion.addMethod("approximately", closeTo);
function isSubsetOf(_subset, _superset, cmp, contains, ordered) {
  let superset = Array.from(_superset);
  let subset = Array.from(_subset);
  if (!contains) {
    if (subset.length !== superset.length)
      return false;
    superset = superset.slice();
  }
  return subset.every(function(elem, idx) {
    if (ordered)
      return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
    if (!cmp) {
      var matchIdx = superset.indexOf(elem);
      if (matchIdx === -1)
        return false;
      if (!contains)
        superset.splice(matchIdx, 1);
      return true;
    }
    return superset.some(function(elem2, matchIdx2) {
      if (!cmp(elem, elem2))
        return false;
      if (!contains)
        superset.splice(matchIdx2, 1);
      return true;
    });
  });
}
__name(isSubsetOf, "isSubsetOf");
Assertion.addMethod("members", function(subset, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).to.be.iterable;
  new Assertion(subset, flagMsg, ssfi, true).to.be.iterable;
  var contains = flag2(this, "contains");
  var ordered = flag2(this, "ordered");
  var subject, failMsg, failNegateMsg;
  if (contains) {
    subject = ordered ? "an ordered superset" : "a superset";
    failMsg = "expected #{this} to be " + subject + " of #{exp}";
    failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
  } else {
    subject = ordered ? "ordered members" : "members";
    failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
    failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
  }
  var cmp = flag2(this, "deep") ? flag2(this, "eql") : void 0;
  this.assert(
    isSubsetOf(subset, obj, cmp, contains, ordered),
    failMsg,
    failNegateMsg,
    subset,
    obj,
    true
  );
});
Assertion.addProperty("iterable", function(msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  this.assert(
    obj != void 0 && obj[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    obj
  );
});
function oneOf(list, msg) {
  if (msg)
    flag2(this, "message", msg);
  var expected = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi"), contains = flag2(this, "contains"), isDeep = flag2(this, "deep"), eql = flag2(this, "eql");
  new Assertion(list, flagMsg, ssfi, true).to.be.an("array");
  if (contains) {
    this.assert(
      list.some(function(possibility) {
        return expected.indexOf(possibility) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      list,
      expected
    );
  } else {
    if (isDeep) {
      this.assert(
        list.some(function(possibility) {
          return eql(expected, possibility);
        }),
        "expected #{this} to deeply equal one of #{exp}",
        "expected #{this} to deeply equal one of #{exp}",
        list,
        expected
      );
    } else {
      this.assert(
        list.indexOf(expected) > -1,
        "expected #{this} to be one of #{exp}",
        "expected #{this} to not be one of #{exp}",
        list,
        expected
      );
    }
  }
}
__name(oneOf, "oneOf");
Assertion.addMethod("oneOf", oneOf);
function assertChanges(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn2 = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
  var initial;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial = subject[prop];
  }
  fn2();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "change");
  flag2(this, "realDelta", final !== initial);
  this.assert(
    initial !== final,
    "expected " + msgObj + " to change",
    "expected " + msgObj + " to not change"
  );
}
__name(assertChanges, "assertChanges");
Assertion.addMethod("change", assertChanges);
Assertion.addMethod("changes", assertChanges);
function assertIncreases(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn2 = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
  var initial;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial = subject[prop];
  }
  new Assertion(initial, flagMsg, ssfi, true).is.a("number");
  fn2();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "increase");
  flag2(this, "realDelta", final - initial);
  this.assert(
    final - initial > 0,
    "expected " + msgObj + " to increase",
    "expected " + msgObj + " to not increase"
  );
}
__name(assertIncreases, "assertIncreases");
Assertion.addMethod("increase", assertIncreases);
Assertion.addMethod("increases", assertIncreases);
function assertDecreases(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn2 = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
  var initial;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial = subject[prop];
  }
  new Assertion(initial, flagMsg, ssfi, true).is.a("number");
  fn2();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "decrease");
  flag2(this, "realDelta", initial - final);
  this.assert(
    final - initial < 0,
    "expected " + msgObj + " to decrease",
    "expected " + msgObj + " to not decrease"
  );
}
__name(assertDecreases, "assertDecreases");
Assertion.addMethod("decrease", assertDecreases);
Assertion.addMethod("decreases", assertDecreases);
function assertDelta(delta, msg) {
  if (msg)
    flag2(this, "message", msg);
  var msgObj = flag2(this, "deltaMsgObj");
  var initial = flag2(this, "initialDeltaValue");
  var final = flag2(this, "finalDeltaValue");
  var behavior = flag2(this, "deltaBehavior");
  var realDelta = flag2(this, "realDelta");
  var expression;
  if (behavior === "change") {
    expression = Math.abs(final - initial) === Math.abs(delta);
  } else {
    expression = realDelta === Math.abs(delta);
  }
  this.assert(
    expression,
    "expected " + msgObj + " to " + behavior + " by " + delta,
    "expected " + msgObj + " to not " + behavior + " by " + delta
  );
}
__name(assertDelta, "assertDelta");
Assertion.addMethod("by", assertDelta);
Assertion.addProperty("extensible", function() {
  var obj = flag2(this, "object");
  var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
  this.assert(
    isExtensible,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
Assertion.addProperty("sealed", function() {
  var obj = flag2(this, "object");
  var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
  this.assert(
    isSealed,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
Assertion.addProperty("frozen", function() {
  var obj = flag2(this, "object");
  var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
  this.assert(
    isFrozen,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
Assertion.addProperty("finite", function(_msg) {
  var obj = flag2(this, "object");
  this.assert(
    typeof obj === "number" && isFinite(obj),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function compareSubset(expected, actual) {
  if (expected === actual) {
    return true;
  }
  if (typeof actual !== typeof expected) {
    return false;
  }
  if (typeof expected !== "object" || expected === null) {
    return expected === actual;
  }
  if (!actual) {
    return false;
  }
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) {
      return false;
    }
    return expected.every(function(exp) {
      return actual.some(function(act) {
        return compareSubset(exp, act);
      });
    });
  }
  if (expected instanceof Date) {
    if (actual instanceof Date) {
      return expected.getTime() === actual.getTime();
    } else {
      return false;
    }
  }
  return Object.keys(expected).every(function(key) {
    var expectedValue = expected[key];
    var actualValue = actual[key];
    if (typeof expectedValue === "object" && expectedValue !== null && actualValue !== null) {
      return compareSubset(expectedValue, actualValue);
    }
    if (typeof expectedValue === "function") {
      return expectedValue(actualValue);
    }
    return actualValue === expectedValue;
  });
}
__name(compareSubset, "compareSubset");
Assertion.addMethod("containSubset", function(expected) {
  const actual = flag(this, "object");
  const showDiff = config.showDiff;
  this.assert(
    compareSubset(expected, actual),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    expected,
    actual,
    showDiff
  );
});
function expect(val, message) {
  return new Assertion(val, message);
}
__name(expect, "expect");
expect.fail = function(actual, expected, message, operator) {
  if (arguments.length < 2) {
    message = actual;
    actual = void 0;
  }
  message = message || "expect.fail()";
  throw new AssertionError(
    message,
    {
      actual,
      expected,
      operator
    },
    expect.fail
  );
};
var should_exports = {};
__export2(should_exports, {
  Should: () => Should,
  should: () => should
});
function loadShould() {
  function shouldGetter() {
    if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
      return new Assertion(this.valueOf(), null, shouldGetter);
    }
    return new Assertion(this, null, shouldGetter);
  }
  __name(shouldGetter, "shouldGetter");
  function shouldSetter(value) {
    Object.defineProperty(this, "should", {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  }
  __name(shouldSetter, "shouldSetter");
  Object.defineProperty(Object.prototype, "should", {
    set: shouldSetter,
    get: shouldGetter,
    configurable: true
  });
  var should2 = {};
  should2.fail = function(actual, expected, message, operator) {
    if (arguments.length < 2) {
      message = actual;
      actual = void 0;
    }
    message = message || "should.fail()";
    throw new AssertionError(
      message,
      {
        actual,
        expected,
        operator
      },
      should2.fail
    );
  };
  should2.equal = function(actual, expected, message) {
    new Assertion(actual, message).to.equal(expected);
  };
  should2.Throw = function(fn2, errt, errs, msg) {
    new Assertion(fn2, msg).to.Throw(errt, errs);
  };
  should2.exist = function(val, msg) {
    new Assertion(val, msg).to.exist;
  };
  should2.not = {};
  should2.not.equal = function(actual, expected, msg) {
    new Assertion(actual, msg).to.not.equal(expected);
  };
  should2.not.Throw = function(fn2, errt, errs, msg) {
    new Assertion(fn2, msg).to.not.Throw(errt, errs);
  };
  should2.not.exist = function(val, msg) {
    new Assertion(val, msg).to.not.exist;
  };
  should2["throw"] = should2["Throw"];
  should2.not["throw"] = should2.not["Throw"];
  return should2;
}
__name(loadShould, "loadShould");
var should = loadShould;
var Should = loadShould;
function assert2(express, errmsg) {
  var test22 = new Assertion(null, null, assert2, true);
  test22.assert(express, errmsg, "[ negation message unavailable ]");
}
__name(assert2, "assert");
assert2.fail = function(actual, expected, message, operator) {
  if (arguments.length < 2) {
    message = actual;
    actual = void 0;
  }
  message = message || "assert.fail()";
  throw new AssertionError(
    message,
    {
      actual,
      expected,
      operator
    },
    assert2.fail
  );
};
assert2.isOk = function(val, msg) {
  new Assertion(val, msg, assert2.isOk, true).is.ok;
};
assert2.isNotOk = function(val, msg) {
  new Assertion(val, msg, assert2.isNotOk, true).is.not.ok;
};
assert2.equal = function(act, exp, msg) {
  var test22 = new Assertion(act, msg, assert2.equal, true);
  test22.assert(
    exp == flag(test22, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    exp,
    act,
    true
  );
};
assert2.notEqual = function(act, exp, msg) {
  var test22 = new Assertion(act, msg, assert2.notEqual, true);
  test22.assert(
    exp != flag(test22, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    exp,
    act,
    true
  );
};
assert2.strictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert2.strictEqual, true).to.equal(exp);
};
assert2.notStrictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
};
assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert2.deepEqual, true).to.eql(exp);
};
assert2.notDeepEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
};
assert2.isAbove = function(val, abv, msg) {
  new Assertion(val, msg, assert2.isAbove, true).to.be.above(abv);
};
assert2.isAtLeast = function(val, atlst, msg) {
  new Assertion(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
};
assert2.isBelow = function(val, blw, msg) {
  new Assertion(val, msg, assert2.isBelow, true).to.be.below(blw);
};
assert2.isAtMost = function(val, atmst, msg) {
  new Assertion(val, msg, assert2.isAtMost, true).to.be.most(atmst);
};
assert2.isTrue = function(val, msg) {
  new Assertion(val, msg, assert2.isTrue, true).is["true"];
};
assert2.isNotTrue = function(val, msg) {
  new Assertion(val, msg, assert2.isNotTrue, true).to.not.equal(true);
};
assert2.isFalse = function(val, msg) {
  new Assertion(val, msg, assert2.isFalse, true).is["false"];
};
assert2.isNotFalse = function(val, msg) {
  new Assertion(val, msg, assert2.isNotFalse, true).to.not.equal(false);
};
assert2.isNull = function(val, msg) {
  new Assertion(val, msg, assert2.isNull, true).to.equal(null);
};
assert2.isNotNull = function(val, msg) {
  new Assertion(val, msg, assert2.isNotNull, true).to.not.equal(null);
};
assert2.isNaN = function(val, msg) {
  new Assertion(val, msg, assert2.isNaN, true).to.be.NaN;
};
assert2.isNotNaN = function(value, message) {
  new Assertion(value, message, assert2.isNotNaN, true).not.to.be.NaN;
};
assert2.exists = function(val, msg) {
  new Assertion(val, msg, assert2.exists, true).to.exist;
};
assert2.notExists = function(val, msg) {
  new Assertion(val, msg, assert2.notExists, true).to.not.exist;
};
assert2.isUndefined = function(val, msg) {
  new Assertion(val, msg, assert2.isUndefined, true).to.equal(void 0);
};
assert2.isDefined = function(val, msg) {
  new Assertion(val, msg, assert2.isDefined, true).to.not.equal(void 0);
};
assert2.isCallable = function(value, message) {
  new Assertion(value, message, assert2.isCallable, true).is.callable;
};
assert2.isNotCallable = function(value, message) {
  new Assertion(value, message, assert2.isNotCallable, true).is.not.callable;
};
assert2.isObject = function(val, msg) {
  new Assertion(val, msg, assert2.isObject, true).to.be.a("object");
};
assert2.isNotObject = function(val, msg) {
  new Assertion(val, msg, assert2.isNotObject, true).to.not.be.a("object");
};
assert2.isArray = function(val, msg) {
  new Assertion(val, msg, assert2.isArray, true).to.be.an("array");
};
assert2.isNotArray = function(val, msg) {
  new Assertion(val, msg, assert2.isNotArray, true).to.not.be.an("array");
};
assert2.isString = function(val, msg) {
  new Assertion(val, msg, assert2.isString, true).to.be.a("string");
};
assert2.isNotString = function(val, msg) {
  new Assertion(val, msg, assert2.isNotString, true).to.not.be.a("string");
};
assert2.isNumber = function(val, msg) {
  new Assertion(val, msg, assert2.isNumber, true).to.be.a("number");
};
assert2.isNotNumber = function(val, msg) {
  new Assertion(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
};
assert2.isNumeric = function(val, msg) {
  new Assertion(val, msg, assert2.isNumeric, true).is.numeric;
};
assert2.isNotNumeric = function(val, msg) {
  new Assertion(val, msg, assert2.isNotNumeric, true).is.not.numeric;
};
assert2.isFinite = function(val, msg) {
  new Assertion(val, msg, assert2.isFinite, true).to.be.finite;
};
assert2.isBoolean = function(val, msg) {
  new Assertion(val, msg, assert2.isBoolean, true).to.be.a("boolean");
};
assert2.isNotBoolean = function(val, msg) {
  new Assertion(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
};
assert2.typeOf = function(val, type3, msg) {
  new Assertion(val, msg, assert2.typeOf, true).to.be.a(type3);
};
assert2.notTypeOf = function(value, type3, message) {
  new Assertion(value, message, assert2.notTypeOf, true).to.not.be.a(type3);
};
assert2.instanceOf = function(val, type3, msg) {
  new Assertion(val, msg, assert2.instanceOf, true).to.be.instanceOf(type3);
};
assert2.notInstanceOf = function(val, type3, msg) {
  new Assertion(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(
    type3
  );
};
assert2.include = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.include, true).include(inc);
};
assert2.notInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.notInclude, true).not.include(inc);
};
assert2.deepInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.deepInclude, true).deep.include(inc);
};
assert2.notDeepInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
};
assert2.nestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.nestedInclude, true).nested.include(inc);
};
assert2.notNestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.notNestedInclude, true).not.nested.include(
    inc
  );
};
assert2.deepNestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(
    inc
  );
};
assert2.notDeepNestedInclude = function(exp, inc, msg) {
  new Assertion(
    exp,
    msg,
    assert2.notDeepNestedInclude,
    true
  ).not.deep.nested.include(inc);
};
assert2.ownInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.ownInclude, true).own.include(inc);
};
assert2.notOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
};
assert2.deepOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
};
assert2.notDeepOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(
    inc
  );
};
assert2.match = function(exp, re, msg) {
  new Assertion(exp, msg, assert2.match, true).to.match(re);
};
assert2.notMatch = function(exp, re, msg) {
  new Assertion(exp, msg, assert2.notMatch, true).to.not.match(re);
};
assert2.property = function(obj, prop, msg) {
  new Assertion(obj, msg, assert2.property, true).to.have.property(prop);
};
assert2.notProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
};
assert2.propertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
};
assert2.notPropertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert2.notPropertyVal, true).to.not.have.property(
    prop,
    val
  );
};
assert2.deepPropertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(
    prop,
    val
  );
};
assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notDeepPropertyVal,
    true
  ).to.not.have.deep.property(prop, val);
};
assert2.ownProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
};
assert2.notOwnProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(
    prop
  );
};
assert2.ownPropertyVal = function(obj, prop, value, msg) {
  new Assertion(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(
    prop,
    value
  );
};
assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notOwnPropertyVal,
    true
  ).to.not.have.own.property(prop, value);
};
assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
  new Assertion(
    obj,
    msg,
    assert2.deepOwnPropertyVal,
    true
  ).to.have.deep.own.property(prop, value);
};
assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notDeepOwnPropertyVal,
    true
  ).to.not.have.deep.own.property(prop, value);
};
assert2.nestedProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert2.nestedProperty, true).to.have.nested.property(
    prop
  );
};
assert2.notNestedProperty = function(obj, prop, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notNestedProperty,
    true
  ).to.not.have.nested.property(prop);
};
assert2.nestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert2.nestedPropertyVal,
    true
  ).to.have.nested.property(prop, val);
};
assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notNestedPropertyVal,
    true
  ).to.not.have.nested.property(prop, val);
};
assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert2.deepNestedPropertyVal,
    true
  ).to.have.deep.nested.property(prop, val);
};
assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert2.notDeepNestedPropertyVal,
    true
  ).to.not.have.deep.nested.property(prop, val);
};
assert2.lengthOf = function(exp, len, msg) {
  new Assertion(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
};
assert2.hasAnyKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
};
assert2.hasAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
};
assert2.containsAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(
    keys2
  );
};
assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(
    keys2
  );
};
assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(
    keys2
  );
};
assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(
    keys2
  );
};
assert2.hasAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(
    keys2
  );
};
assert2.containsAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert2.containsAllDeepKeys,
    true
  ).to.contain.all.deep.keys(keys2);
};
assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert2.doesNotHaveAnyDeepKeys,
    true
  ).to.not.have.any.deep.keys(keys2);
};
assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert2.doesNotHaveAllDeepKeys,
    true
  ).to.not.have.all.deep.keys(keys2);
};
assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
  if ("string" === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  var assertErr = new Assertion(fn2, msg, assert2.throws, true).to.throw(
    errorLike,
    errMsgMatcher
  );
  return flag(assertErr, "object");
};
assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, message) {
  if ("string" === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  new Assertion(fn2, message, assert2.doesNotThrow, true).to.not.throw(
    errorLike,
    errMsgMatcher
  );
};
assert2.operator = function(val, operator, val2, msg) {
  var ok;
  switch (operator) {
    case "==":
      ok = val == val2;
      break;
    case "===":
      ok = val === val2;
      break;
    case ">":
      ok = val > val2;
      break;
    case ">=":
      ok = val >= val2;
      break;
    case "<":
      ok = val < val2;
      break;
    case "<=":
      ok = val <= val2;
      break;
    case "!=":
      ok = val != val2;
      break;
    case "!==":
      ok = val !== val2;
      break;
    default:
      msg = msg ? msg + ": " : msg;
      throw new AssertionError(
        msg + 'Invalid operator "' + operator + '"',
        void 0,
        assert2.operator
      );
  }
  var test22 = new Assertion(ok, msg, assert2.operator, true);
  test22.assert(
    true === flag(test22, "object"),
    "expected " + inspect22(val) + " to be " + operator + " " + inspect22(val2),
    "expected " + inspect22(val) + " to not be " + operator + " " + inspect22(val2)
  );
};
assert2.closeTo = function(act, exp, delta, msg) {
  new Assertion(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
};
assert2.approximately = function(act, exp, delta, msg) {
  new Assertion(act, msg, assert2.approximately, true).to.be.approximately(
    exp,
    delta
  );
};
assert2.sameMembers = function(set1, set22, msg) {
  new Assertion(set1, msg, assert2.sameMembers, true).to.have.same.members(set22);
};
assert2.notSameMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.notSameMembers,
    true
  ).to.not.have.same.members(set22);
};
assert2.sameDeepMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.sameDeepMembers,
    true
  ).to.have.same.deep.members(set22);
};
assert2.notSameDeepMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.notSameDeepMembers,
    true
  ).to.not.have.same.deep.members(set22);
};
assert2.sameOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.sameOrderedMembers,
    true
  ).to.have.same.ordered.members(set22);
};
assert2.notSameOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.notSameOrderedMembers,
    true
  ).to.not.have.same.ordered.members(set22);
};
assert2.sameDeepOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.sameDeepOrderedMembers,
    true
  ).to.have.same.deep.ordered.members(set22);
};
assert2.notSameDeepOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert2.notSameDeepOrderedMembers,
    true
  ).to.not.have.same.deep.ordered.members(set22);
};
assert2.includeMembers = function(superset, subset, msg) {
  new Assertion(superset, msg, assert2.includeMembers, true).to.include.members(
    subset
  );
};
assert2.notIncludeMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.notIncludeMembers,
    true
  ).to.not.include.members(subset);
};
assert2.includeDeepMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.includeDeepMembers,
    true
  ).to.include.deep.members(subset);
};
assert2.notIncludeDeepMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.notIncludeDeepMembers,
    true
  ).to.not.include.deep.members(subset);
};
assert2.includeOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.includeOrderedMembers,
    true
  ).to.include.ordered.members(subset);
};
assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.notIncludeOrderedMembers,
    true
  ).to.not.include.ordered.members(subset);
};
assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.includeDeepOrderedMembers,
    true
  ).to.include.deep.ordered.members(subset);
};
assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert2.notIncludeDeepOrderedMembers,
    true
  ).to.not.include.deep.ordered.members(subset);
};
assert2.oneOf = function(inList, list, msg) {
  new Assertion(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
};
assert2.isIterable = function(obj, msg) {
  if (obj == void 0 || !obj[Symbol.iterator]) {
    msg = msg ? `${msg} expected ${inspect22(obj)} to be an iterable` : `expected ${inspect22(obj)} to be an iterable`;
    throw new AssertionError(msg, void 0, assert2.isIterable);
  }
};
assert2.changes = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.changes, true).to.change(obj, prop);
};
assert2.changesBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
};
assert2.doesNotChange = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.doesNotChange, true).to.not.change(
    obj,
    prop
  );
};
assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
};
assert2.increases = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.increases, true).to.increase(obj, prop);
};
assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
};
assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(
    obj,
    prop
  );
};
assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
};
assert2.decreases = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
};
assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
};
assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(
    obj,
    prop
  );
};
assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  return new Assertion(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
};
assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
};
assert2.ifError = function(val) {
  if (val) {
    throw val;
  }
};
assert2.isExtensible = function(obj, msg) {
  new Assertion(obj, msg, assert2.isExtensible, true).to.be.extensible;
};
assert2.isNotExtensible = function(obj, msg) {
  new Assertion(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
};
assert2.isSealed = function(obj, msg) {
  new Assertion(obj, msg, assert2.isSealed, true).to.be.sealed;
};
assert2.isNotSealed = function(obj, msg) {
  new Assertion(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
};
assert2.isFrozen = function(obj, msg) {
  new Assertion(obj, msg, assert2.isFrozen, true).to.be.frozen;
};
assert2.isNotFrozen = function(obj, msg) {
  new Assertion(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
};
assert2.isEmpty = function(val, msg) {
  new Assertion(val, msg, assert2.isEmpty, true).to.be.empty;
};
assert2.isNotEmpty = function(val, msg) {
  new Assertion(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
};
assert2.containsSubset = function(val, exp, msg) {
  new Assertion(val, msg).to.containSubset(exp);
};
assert2.doesNotContainSubset = function(val, exp, msg) {
  new Assertion(val, msg).to.not.containSubset(exp);
};
var aliases = [
  ["isOk", "ok"],
  ["isNotOk", "notOk"],
  ["throws", "throw"],
  ["throws", "Throw"],
  ["isExtensible", "extensible"],
  ["isNotExtensible", "notExtensible"],
  ["isSealed", "sealed"],
  ["isNotSealed", "notSealed"],
  ["isFrozen", "frozen"],
  ["isNotFrozen", "notFrozen"],
  ["isEmpty", "empty"],
  ["isNotEmpty", "notEmpty"],
  ["isCallable", "isFunction"],
  ["isNotCallable", "isNotFunction"],
  ["containsSubset", "containSubset"]
];
for (const [name, as] of aliases) {
  assert2[as] = assert2[name];
}
var used = [];
function use(fn2) {
  const exports = {
    use,
    AssertionError,
    util: utils_exports,
    config,
    expect,
    assert: assert2,
    Assertion,
    ...should_exports
  };
  if (!~used.indexOf(fn2)) {
    fn2(exports, utils_exports);
    used.push(fn2);
  }
  return exports;
}
__name(use, "use");
var MATCHERS_OBJECT = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT = Symbol.for("expect-global");
var ASYMMETRIC_MATCHERS_OBJECT = Symbol.for("asymmetric-matchers-object");
var customMatchers = {
  toSatisfy(actual, expected, message) {
    const { printReceived: printReceived3, printExpected: printExpected3, matcherHint: matcherHint2 } = this.utils;
    const pass = expected(actual);
    return {
      pass,
      message: () => pass ? `${matcherHint2(".not.toSatisfy", "received", "")}

Expected value to not satisfy:
${message || printExpected3(expected)}
Received:
${printReceived3(actual)}` : `${matcherHint2(".toSatisfy", "received", "")}

Expected value to satisfy:
${message || printExpected3(expected)}

Received:
${printReceived3(actual)}`
    };
  },
  toBeOneOf(actual, expected) {
    const { equals: equals2, customTesters } = this;
    const { printReceived: printReceived3, printExpected: printExpected3, matcherHint: matcherHint2 } = this.utils;
    if (!Array.isArray(expected)) {
      throw new TypeError(`You must provide an array to ${matcherHint2(".toBeOneOf")}, not '${typeof expected}'.`);
    }
    const pass = expected.length === 0 || expected.some((item) => equals2(item, actual, customTesters));
    return {
      pass,
      message: () => pass ? `${matcherHint2(".not.toBeOneOf", "received", "")}

Expected value to not be one of:
${printExpected3(expected)}
Received:
${printReceived3(actual)}` : `${matcherHint2(".toBeOneOf", "received", "")}

Expected value to be one of:
${printExpected3(expected)}

Received:
${printReceived3(actual)}`
    };
  }
};
var EXPECTED_COLOR = u.green;
var RECEIVED_COLOR = u.red;
var INVERTED_COLOR = u.inverse;
var BOLD_WEIGHT = u.bold;
var DIM_COLOR = u.dim;
function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
  const { comment = "", isDirectExpectCall = false, isNot = false, promise = "", secondArgument = "", expectedColor = EXPECTED_COLOR, receivedColor = RECEIVED_COLOR, secondArgumentColor = EXPECTED_COLOR } = options;
  let hint = "";
  let dimString = "expect";
  if (!isDirectExpectCall && received !== "") {
    hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
    dimString = ")";
  }
  if (promise !== "") {
    hint += DIM_COLOR(`${dimString}.`) + promise;
    dimString = "";
  }
  if (isNot) {
    hint += `${DIM_COLOR(`${dimString}.`)}not`;
    dimString = "";
  }
  if (matcherName.includes(".")) {
    dimString += matcherName;
  } else {
    hint += DIM_COLOR(`${dimString}.`) + matcherName;
    dimString = "";
  }
  if (expected === "") {
    dimString += "()";
  } else {
    hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
    if (secondArgument) {
      hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
    }
    dimString = ")";
  }
  if (comment !== "") {
    dimString += ` // ${comment}`;
  }
  if (dimString !== "") {
    hint += DIM_COLOR(dimString);
  }
  return hint;
}
var SPACE_SYMBOL2 = "\xB7";
function replaceTrailingSpaces2(text) {
  return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL2.repeat(spaces.length));
}
function printReceived2(object2) {
  return RECEIVED_COLOR(replaceTrailingSpaces2(stringify(object2)));
}
function printExpected2(value) {
  return EXPECTED_COLOR(replaceTrailingSpaces2(stringify(value)));
}
function getMatcherUtils() {
  return {
    EXPECTED_COLOR,
    RECEIVED_COLOR,
    INVERTED_COLOR,
    BOLD_WEIGHT,
    DIM_COLOR,
    diff,
    matcherHint,
    printReceived: printReceived2,
    printExpected: printExpected2,
    printDiffOrStringify,
    printWithType
  };
}
function printWithType(name, value, print) {
  const type3 = getType2(value);
  const hasType = type3 !== "null" && type3 !== "undefined" ? `${name} has type:  ${type3}
` : "";
  const hasValue = `${name} has value: ${print(value)}`;
  return hasType + hasValue;
}
function addCustomEqualityTesters(newTesters) {
  if (!Array.isArray(newTesters)) {
    throw new TypeError(`expect.customEqualityTesters: Must be set to an array of Testers. Was given "${getType2(newTesters)}"`);
  }
  globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters.push(...newTesters);
}
function getCustomEqualityTesters() {
  return globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters;
}
function equals(a3, b, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a3, b, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
var functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a3, b) {
  const asymmetricA = isAsymmetric(a3);
  const asymmetricB = isAsymmetric(b);
  if (asymmetricA && asymmetricB) {
    return void 0;
  }
  if (asymmetricA) {
    return a3.asymmetricMatch(b);
  }
  if (asymmetricB) {
    return b.asymmetricMatch(a3);
  }
}
function eq(a3, b, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a3, b);
  if (asymmetricResult !== void 0) {
    return asymmetricResult;
  }
  const testerContext = { equals };
  for (let i = 0; i < customTesters.length; i++) {
    const customTesterResult = customTesters[i].call(testerContext, a3, b, customTesters);
    if (customTesterResult !== void 0) {
      return customTesterResult;
    }
  }
  if (typeof URL === "function" && a3 instanceof URL && b instanceof URL) {
    return a3.href === b.href;
  }
  if (Object.is(a3, b)) {
    return true;
  }
  if (a3 === null || b === null) {
    return a3 === b;
  }
  const className = Object.prototype.toString.call(a3);
  if (className !== Object.prototype.toString.call(b)) {
    return false;
  }
  switch (className) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a3 !== typeof b) {
        return false;
      } else if (typeof a3 !== "object" && typeof b !== "object") {
        return Object.is(a3, b);
      } else {
        return Object.is(a3.valueOf(), b.valueOf());
      }
    case "[object Date]": {
      const numA = +a3;
      const numB = +b;
      return numA === numB || Number.isNaN(numA) && Number.isNaN(numB);
    }
    case "[object RegExp]":
      return a3.source === b.source && a3.flags === b.flags;
    case "[object Temporal.Instant]":
    case "[object Temporal.ZonedDateTime]":
    case "[object Temporal.PlainDateTime]":
    case "[object Temporal.PlainDate]":
    case "[object Temporal.PlainTime]":
    case "[object Temporal.PlainYearMonth]":
    case "[object Temporal.PlainMonthDay]":
      return a3.equals(b);
    case "[object Temporal.Duration]":
      return a3.toString() === b.toString();
  }
  if (typeof a3 !== "object" || typeof b !== "object") {
    return false;
  }
  if (isDomNode(a3) && isDomNode(b)) {
    return a3.isEqualNode(b);
  }
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a3) {
      return bStack[length] === b;
    } else if (bStack[length] === b) {
      return false;
    }
  }
  aStack.push(a3);
  bStack.push(b);
  if (className === "[object Array]" && a3.length !== b.length) {
    return false;
  }
  if (a3 instanceof Error && b instanceof Error) {
    try {
      return isErrorEqual(a3, b, aStack, bStack, customTesters, hasKey2);
    } finally {
      aStack.pop();
      bStack.pop();
    }
  }
  const aKeys = keys(a3, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b, hasKey2).length !== size) {
    return false;
  }
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b, key) && eq(a3[key], b[key], aStack, bStack, customTesters, hasKey2);
    if (!result) {
      return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function isErrorEqual(a3, b, aStack, bStack, customTesters, hasKey2) {
  let result = Object.getPrototypeOf(a3) === Object.getPrototypeOf(b) && a3.name === b.name && a3.message === b.message;
  if (typeof b.cause !== "undefined") {
    result && (result = eq(a3.cause, b.cause, aStack, bStack, customTesters, hasKey2));
  }
  if (a3 instanceof AggregateError && b instanceof AggregateError) {
    result && (result = eq(a3.errors, b.errors, aStack, bStack, customTesters, hasKey2));
  }
  result && (result = eq({ ...a3 }, { ...b }, aStack, bStack, customTesters, hasKey2));
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key)) {
      keys2.push(key);
    }
  }
  return keys2.concat(Object.getOwnPropertySymbols(obj).filter((symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable));
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && "nodeType" in obj && typeof obj.nodeType === "number" && "nodeName" in obj && typeof obj.nodeName === "string" && "isEqualNode" in obj && typeof obj.isEqualNode === "function";
}
var IS_KEYED_SENTINEL2 = "@@__IMMUTABLE_KEYED__@@";
var IS_SET_SENTINEL2 = "@@__IMMUTABLE_SET__@@";
var IS_LIST_SENTINEL2 = "@@__IMMUTABLE_LIST__@@";
var IS_ORDERED_SENTINEL2 = "@@__IMMUTABLE_ORDERED__@@";
var IS_RECORD_SYMBOL2 = "@@__IMMUTABLE_RECORD__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL2] && !maybeKeyed[IS_ORDERED_SENTINEL2]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL2] && !maybeSet[IS_ORDERED_SENTINEL2]);
}
function isObjectLiteral(source) {
  return source != null && typeof source === "object" && !Array.isArray(source);
}
function isImmutableList(source) {
  return Boolean(source && isObjectLiteral(source) && source[IS_LIST_SENTINEL2]);
}
function isImmutableOrderedKeyed(source) {
  return Boolean(source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL2] && source[IS_ORDERED_SENTINEL2]);
}
function isImmutableOrderedSet(source) {
  return Boolean(source && isObjectLiteral(source) && source[IS_SET_SENTINEL2] && source[IS_ORDERED_SENTINEL2]);
}
function isImmutableRecord(source) {
  return Boolean(source && isObjectLiteral(source) && source[IS_RECORD_SYMBOL2]);
}
var IteratorSymbol = Symbol.iterator;
function hasIterator(object2) {
  return !!(object2 != null && object2[IteratorSymbol]);
}
function iterableEquality(a3, b, customTesters = [], aStack = [], bStack = []) {
  if (typeof a3 !== "object" || typeof b !== "object" || Array.isArray(a3) || Array.isArray(b) || !hasIterator(a3) || !hasIterator(b)) {
    return void 0;
  }
  if (a3.constructor !== b.constructor) {
    return false;
  }
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a3) {
      return bStack[length] === b;
    }
  }
  aStack.push(a3);
  bStack.push(b);
  const filteredCustomTesters = [...customTesters.filter((t) => t !== iterableEquality), iterableEqualityWithStack];
  function iterableEqualityWithStack(a4, b2) {
    return iterableEquality(a4, b2, [...customTesters], [...aStack], [...bStack]);
  }
  if (a3.size !== void 0) {
    if (a3.size !== b.size) {
      return false;
    } else if (isA("Set", a3) || isImmutableUnorderedSet(a3)) {
      let allFound = true;
      for (const aValue of a3) {
        if (!b.has(aValue)) {
          let has = false;
          for (const bValue of b) {
            const isEqual = equals(aValue, bValue, filteredCustomTesters);
            if (isEqual === true) {
              has = true;
            }
          }
          if (has === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a3) || isImmutableUnorderedKeyed(a3)) {
      let allFound = true;
      for (const aEntry of a3) {
        if (!b.has(aEntry[0]) || !equals(aEntry[1], b.get(aEntry[0]), filteredCustomTesters)) {
          let has = false;
          for (const bEntry of b) {
            const matchedKey = equals(aEntry[0], bEntry[0], filteredCustomTesters);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals(aEntry[1], bEntry[1], filteredCustomTesters);
            }
            if (matchedValue === true) {
              has = true;
            }
          }
          if (has === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b[IteratorSymbol]();
  for (const aValue of a3) {
    const nextB = bIterator.next();
    if (nextB.done || !equals(aValue, nextB.value, filteredCustomTesters)) {
      return false;
    }
  }
  if (!bIterator.next().done) {
    return false;
  }
  if (!isImmutableList(a3) && !isImmutableOrderedKeyed(a3) && !isImmutableOrderedSet(a3) && !isImmutableRecord(a3)) {
    const aEntries = Object.entries(a3);
    const bEntries = Object.entries(b);
    if (!equals(aEntries, bEntries, filteredCustomTesters)) {
      return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function hasPropertyInObject(object2, key) {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
}
function isObjectWithKeys(a3) {
  return isObject(a3) && !(a3 instanceof Error) && !Array.isArray(a3) && !(a3 instanceof Date);
}
function subsetEquality(object2, subset, customTesters = []) {
  const filteredCustomTesters = customTesters.filter((t) => t !== subsetEquality);
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object3, subset2) => {
    if (!isObjectWithKeys(subset2)) {
      return void 0;
    }
    return Object.keys(subset2).every((key) => {
      if (subset2[key] != null && typeof subset2[key] === "object") {
        if (seenReferences.has(subset2[key])) {
          return equals(object3[key], subset2[key], filteredCustomTesters);
        }
        seenReferences.set(subset2[key], true);
      }
      const result = object3 != null && hasPropertyInObject(object3, key) && equals(object3[key], subset2[key], [...filteredCustomTesters, subsetEqualityWithContext(seenReferences)]);
      seenReferences.delete(subset2[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset);
}
function typeEquality(a3, b) {
  if (a3 == null || b == null || a3.constructor === b.constructor) {
    return void 0;
  }
  return false;
}
function arrayBufferEquality(a3, b) {
  let dataViewA = a3;
  let dataViewB = b;
  if (!(a3 instanceof DataView && b instanceof DataView)) {
    if (!(a3 instanceof ArrayBuffer) || !(b instanceof ArrayBuffer)) {
      return void 0;
    }
    try {
      dataViewA = new DataView(a3);
      dataViewB = new DataView(b);
    } catch {
      return void 0;
    }
  }
  if (dataViewA.byteLength !== dataViewB.byteLength) {
    return false;
  }
  for (let i = 0; i < dataViewA.byteLength; i++) {
    if (dataViewA.getUint8(i) !== dataViewB.getUint8(i)) {
      return false;
    }
  }
  return true;
}
function sparseArrayEquality(a3, b, customTesters = []) {
  if (!Array.isArray(a3) || !Array.isArray(b)) {
    return void 0;
  }
  const aKeys = Object.keys(a3);
  const bKeys = Object.keys(b);
  const filteredCustomTesters = customTesters.filter((t) => t !== sparseArrayEquality);
  return equals(a3, b, filteredCustomTesters, true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName)) {
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  }
  return toBeMessage;
}
function pluralize(word, count) {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}
function getObjectKeys(object2) {
  return [...Object.keys(object2), ...Object.getOwnPropertySymbols(object2).filter((s2) => {
    var _Object$getOwnPropert;
    return (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(object2, s2)) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.enumerable;
  })];
}
function getObjectSubset(object2, subset, customTesters) {
  let stripped = 0;
  const getObjectSubsetWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object3, subset2) => {
    if (Array.isArray(object3)) {
      if (Array.isArray(subset2) && subset2.length === object3.length) {
        return subset2.map((sub, i) => getObjectSubsetWithContext(seenReferences)(object3[i], sub));
      }
    } else if (object3 instanceof Date) {
      return object3;
    } else if (isObject(object3) && isObject(subset2)) {
      if (equals(object3, subset2, [
        ...customTesters,
        iterableEquality,
        subsetEquality
      ])) {
        return subset2;
      }
      const trimmed = {};
      seenReferences.set(object3, trimmed);
      if (typeof object3.constructor === "function" && typeof object3.constructor.name === "string") {
        Object.defineProperty(trimmed, "constructor", {
          enumerable: false,
          value: object3.constructor
        });
      }
      for (const key of getObjectKeys(object3)) {
        if (hasPropertyInObject(subset2, key)) {
          trimmed[key] = seenReferences.has(object3[key]) ? seenReferences.get(object3[key]) : getObjectSubsetWithContext(seenReferences)(object3[key], subset2[key]);
        } else {
          if (!seenReferences.has(object3[key])) {
            stripped += 1;
            if (isObject(object3[key])) {
              stripped += getObjectKeys(object3[key]).length;
            }
            getObjectSubsetWithContext(seenReferences)(object3[key], subset2[key]);
          }
        }
      }
      if (getObjectKeys(trimmed).length > 0) {
        return trimmed;
      }
    }
    return object3;
  };
  return {
    subset: getObjectSubsetWithContext()(object2, subset),
    stripped
  };
}
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  const customEqualityTesters = [];
  const asymmetricMatchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT, { get: () => globalState });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT]),
      matchers,
      customEqualityTesters
    })
  });
  Object.defineProperty(globalThis, ASYMMETRIC_MATCHERS_OBJECT, { get: () => asymmetricMatchers });
}
function getState(expect2) {
  return globalThis[MATCHERS_OBJECT].get(expect2);
}
function setState(state, expect2) {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  const results = Object.defineProperties(current, {
    ...Object.getOwnPropertyDescriptors(current),
    ...Object.getOwnPropertyDescriptors(state)
  });
  map2.set(expect2, results);
}
var AsymmetricMatcher3 = class {
  // should have "jest" to be compatible with its ecosystem
  $$typeof = Symbol.for("jest.asymmetricMatcher");
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
  }
  getMatcherContext(expect2) {
    return {
      ...getState(expect2 || globalThis[GLOBAL_EXPECT]),
      equals,
      isNot: this.inverse,
      customTesters: getCustomEqualityTesters(),
      utils: {
        ...getMatcherUtils(),
        diff,
        stringify,
        iterableEquality,
        subsetEquality
      }
    };
  }
};
AsymmetricMatcher3.prototype[Symbol.for("chai/inspect")] = function(options) {
  const result = stringify(this, options.depth, { min: true });
  if (result.length <= options.truncate) {
    return result;
  }
  return `${this.toString()}{\u2026}`;
};
var StringContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample)) {
      throw new Error("Expected is not a string");
    }
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var Anything = class extends AsymmetricMatcher3 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ObjectContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf) {
      return Object.getPrototypeOf(obj);
    }
    if (obj.constructor.prototype === obj) {
      return null;
    }
    return obj.constructor.prototype;
  }
  hasProperty(obj, property) {
    if (!obj) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      return true;
    }
    return this.hasProperty(this.getPrototype(obj), property);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
    }
    let result = true;
    const matcherContext = this.getMatcherContext();
    for (const property in this.sample) {
      if (!this.hasProperty(other, property) || !equals(this.sample[property], other[property], matcherContext.customTesters)) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var ArrayContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
    }
    const matcherContext = this.getMatcherContext();
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every((item) => other.some((another) => equals(item, another, matcherContext.customTesters)));
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var Any = class extends AsymmetricMatcher3 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name) {
      return func.name;
    }
    const functionToString2 = Function.prototype.toString;
    const matches = functionToString2.call(func).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String) {
      return typeof other == "string" || other instanceof String;
    }
    if (this.sample === Number) {
      return typeof other == "number" || other instanceof Number;
    }
    if (this.sample === Function) {
      return typeof other == "function" || typeof other === "function";
    }
    if (this.sample === Boolean) {
      return typeof other == "boolean" || other instanceof Boolean;
    }
    if (this.sample === BigInt) {
      return typeof other == "bigint" || other instanceof BigInt;
    }
    if (this.sample === Symbol) {
      return typeof other == "symbol" || other instanceof Symbol;
    }
    if (this.sample === Object) {
      return typeof other == "object";
    }
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String) {
      return "string";
    }
    if (this.sample === Number) {
      return "number";
    }
    if (this.sample === Function) {
      return "function";
    }
    if (this.sample === Object) {
      return "object";
    }
    if (this.sample === Boolean) {
      return "boolean";
    }
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
};
var StringMatching = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample)) {
      throw new Error("Expected is not a String or a RegExp");
    }
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var CloseTo = class extends AsymmetricMatcher3 {
  precision;
  constructor(sample, precision = 2, inverse = false) {
    if (!isA("Number", sample)) {
      throw new Error("Expected is not a Number");
    }
    if (!isA("Number", precision)) {
      throw new Error("Precision is not a Number");
    }
    super(sample);
    this.inverse = inverse;
    this.precision = precision;
  }
  asymmetricMatch(other) {
    if (!isA("Number", other)) {
      return false;
    }
    let result = false;
    if (other === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY) {
      result = true;
    } else if (other === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY) {
      result = true;
    } else {
      result = Math.abs(this.sample - other) < 10 ** -this.precision / 2;
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${pluralize("digit", this.precision)})`
    ].join(" ");
  }
};
var JestAsymmetricMatchers = (chai2, utils) => {
  utils.addMethod(chai2.expect, "anything", () => new Anything());
  utils.addMethod(chai2.expect, "any", (expected) => new Any(expected));
  utils.addMethod(chai2.expect, "stringContaining", (expected) => new StringContaining(expected));
  utils.addMethod(chai2.expect, "objectContaining", (expected) => new ObjectContaining(expected));
  utils.addMethod(chai2.expect, "arrayContaining", (expected) => new ArrayContaining(expected));
  utils.addMethod(chai2.expect, "stringMatching", (expected) => new StringMatching(expected));
  utils.addMethod(chai2.expect, "closeTo", (expected, precision) => new CloseTo(expected, precision));
  chai2.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true),
    closeTo: (expected, precision) => new CloseTo(expected, precision, true)
  };
};
function createAssertionMessage(util, assertion, hasArgs) {
  const not = util.flag(assertion, "negate") ? "not." : "";
  const name = `${util.flag(assertion, "_name")}(${hasArgs ? "expected" : ""})`;
  const promiseName = util.flag(assertion, "promise");
  const promise = promiseName ? `.${promiseName}` : "";
  return `expect(actual)${promise}.${not}${name}`;
}
function recordAsyncExpect(_test2, promise, assertion, error) {
  const test5 = _test2;
  if (test5 && promise instanceof Promise) {
    promise = promise.finally(() => {
      if (!test5.promises) {
        return;
      }
      const index2 = test5.promises.indexOf(promise);
      if (index2 !== -1) {
        test5.promises.splice(index2, 1);
      }
    });
    if (!test5.promises) {
      test5.promises = [];
    }
    test5.promises.push(promise);
    let resolved = false;
    test5.onFinished ?? (test5.onFinished = []);
    test5.onFinished.push(() => {
      if (!resolved) {
        var _vitest_worker__;
        const processor = ((_vitest_worker__ = globalThis.__vitest_worker__) === null || _vitest_worker__ === void 0 ? void 0 : _vitest_worker__.onFilterStackTrace) || ((s2) => s2 || "");
        const stack = processor(error.stack);
        console.warn([
          `Promise returned by \`${assertion}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          "Please remember to await the assertion.\n",
          stack
        ].join(""));
      }
    });
    return {
      then(onFulfilled, onRejected) {
        resolved = true;
        return promise.then(onFulfilled, onRejected);
      },
      catch(onRejected) {
        return promise.catch(onRejected);
      },
      finally(onFinally) {
        return promise.finally(onFinally);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return promise;
}
function handleTestError(test5, err) {
  var _test$result;
  test5.result || (test5.result = { state: "fail" });
  test5.result.state = "fail";
  (_test$result = test5.result).errors || (_test$result.errors = []);
  test5.result.errors.push(processError(err));
}
function wrapAssertion(utils, name, fn2) {
  return function(...args) {
    if (name !== "withTest") {
      utils.flag(this, "_name", name);
    }
    if (!utils.flag(this, "soft")) {
      return fn2.apply(this, args);
    }
    const test5 = utils.flag(this, "vitest-test");
    if (!test5) {
      throw new Error("expect.soft() can only be used inside a test");
    }
    try {
      const result = fn2.apply(this, args);
      if (result && typeof result === "object" && typeof result.then === "function") {
        return result.then(noop, (err) => {
          handleTestError(test5, err);
        });
      }
      return result;
    } catch (err) {
      handleTestError(test5, err);
    }
  };
}
var JestChaiExpect = (chai2, utils) => {
  const { AssertionError: AssertionError2 } = chai2;
  const customTesters = getCustomEqualityTesters();
  function def(name, fn2) {
    const addMethod2 = (n) => {
      const softWrapper = wrapAssertion(utils, n, fn2);
      utils.addMethod(chai2.Assertion.prototype, n, softWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n, softWrapper);
    };
    if (Array.isArray(name)) {
      name.forEach((n) => addMethod2(n));
    } else {
      addMethod2(name);
    }
  }
  [
    "throw",
    "throws",
    "Throw"
  ].forEach((m2) => {
    utils.overwriteMethod(chai2.Assertion.prototype, m2, (_super) => {
      return function(...args) {
        const promise = utils.flag(this, "promise");
        const object2 = utils.flag(this, "object");
        const isNot = utils.flag(this, "negate");
        if (promise === "rejects") {
          utils.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error = { showDiff: false };
            throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test5) {
    utils.flag(this, "vitest-test", test5);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils.flag(this, "object");
    const equal = equals(actual, expected, [...customTesters, iterableEquality]);
    return this.assert(equal, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", expected, actual);
  });
  def("toStrictEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const equal = equals(obj, expected, [
      ...customTesters,
      iterableEquality,
      typeEquality,
      sparseArrayEquality,
      arrayBufferEquality
    ], true);
    return this.assert(equal, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", expected, obj);
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals(actual, expected, [
        ...customTesters,
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ], true);
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals(actual, expected, [...customTesters, iterableEquality]);
        if (toEqualPass) {
          deepEqualityName = "toEqual";
        }
      }
    }
    return this.assert(pass, generateToBeMessage(deepEqualityName), "expected #{this} not to be #{exp} // Object.is equality", expected, actual);
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    const pass = equals(actual, expected, [
      ...customTesters,
      iterableEquality,
      subsetEquality
    ]);
    const isNot = utils.flag(this, "negate");
    const { subset: actualSubset, stripped } = getObjectSubset(actual, expected, customTesters);
    if (pass && isNot || !pass && !isNot) {
      const msg = utils.getMessage(this, [
        pass,
        "expected #{this} to match object #{exp}",
        "expected #{this} to not match object #{exp}",
        expected,
        actualSubset,
        false
      ]);
      const message = stripped === 0 ? msg : `${msg}
(${stripped} matching ${stripped === 1 ? "property" : "properties"} omitted from actual)`;
      throw new AssertionError2(message, {
        showDiff: true,
        expected,
        actual: actualSubset
      });
    }
  });
  def("toMatch", function(expected) {
    const actual = this._obj;
    if (typeof actual !== "string") {
      throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof actual}`);
    }
    return this.assert(typeof expected === "string" ? actual.includes(expected) : actual.match(expected), `expected #{this} to match #{exp}`, `expected #{this} not to match #{exp}`, expected, actual);
  });
  def("toContain", function(item) {
    const actual = this._obj;
    if (typeof Node !== "undefined" && actual instanceof Node) {
      if (!(item instanceof Node)) {
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof item}`);
      }
      return this.assert(actual.contains(item), "expected #{this} to contain element #{exp}", "expected #{this} not to contain element #{exp}", item, actual);
    }
    if (typeof DOMTokenList !== "undefined" && actual instanceof DOMTokenList) {
      assertTypes(item, "class name", ["string"]);
      const isNot = utils.flag(this, "negate");
      const expectedClassList = isNot ? actual.value.replace(item, "").trim() : `${actual.value} ${item}`;
      return this.assert(actual.contains(item), `expected "${actual.value}" to contain "${item}"`, `expected "${actual.value}" not to contain "${item}"`, expectedClassList, actual.value);
    }
    if (typeof actual === "string" && typeof item === "string") {
      return this.assert(actual.includes(item), `expected #{this} to contain #{exp}`, `expected #{this} not to contain #{exp}`, item, actual);
    }
    if (actual != null && typeof actual !== "string") {
      utils.flag(this, "object", Array.from(actual));
    }
    return this.contain(item);
  });
  def("toContainEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const index2 = Array.from(obj).findIndex((item) => {
      return equals(item, expected, customTesters);
    });
    this.assert(index2 !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", expected);
  });
  def("toBeTruthy", function() {
    const obj = utils.flag(this, "object");
    this.assert(Boolean(obj), "expected #{this} to be truthy", "expected #{this} to not be truthy", true, obj);
  });
  def("toBeFalsy", function() {
    const obj = utils.flag(this, "object");
    this.assert(!obj, "expected #{this} to be falsy", "expected #{this} to not be falsy", false, obj);
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual > expected, `expected ${actual} to be greater than ${expected}`, `expected ${actual} to be not greater than ${expected}`, expected, actual, false);
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual >= expected, `expected ${actual} to be greater than or equal to ${expected}`, `expected ${actual} to be not greater than or equal to ${expected}`, expected, actual, false);
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual < expected, `expected ${actual} to be less than ${expected}`, `expected ${actual} to be not less than ${expected}`, expected, actual, false);
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual <= expected, `expected ${actual} to be less than or equal to ${expected}`, `expected ${actual} to be not less than or equal to ${expected}`, expected, actual, false);
  });
  def("toBeNaN", function() {
    const obj = utils.flag(this, "object");
    this.assert(Number.isNaN(obj), "expected #{this} to be NaN", "expected #{this} not to be NaN", Number.NaN, obj);
  });
  def("toBeUndefined", function() {
    const obj = utils.flag(this, "object");
    this.assert(void 0 === obj, "expected #{this} to be undefined", "expected #{this} not to be undefined", void 0, obj);
  });
  def("toBeNull", function() {
    const obj = utils.flag(this, "object");
    this.assert(obj === null, "expected #{this} to be null", "expected #{this} not to be null", null, obj);
  });
  def("toBeDefined", function() {
    const obj = utils.flag(this, "object");
    this.assert(typeof obj !== "undefined", "expected #{this} to be defined", "expected #{this} to be undefined", obj);
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(equal, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", expected, actual);
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length) {
    return this.have.length(length);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0])) {
      args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
    }
    const actual = this._obj;
    const [propertyName, expected] = args;
    const getValue = () => {
      const hasOwn = Object.prototype.hasOwnProperty.call(actual, propertyName);
      if (hasOwn) {
        return {
          value: actual[propertyName],
          exists: true
        };
      }
      return utils.getPathInfo(actual, propertyName);
    };
    const { value, exists } = getValue();
    const pass = exists && (args.length === 1 || equals(expected, value, customTesters));
    const valueString = args.length === 1 ? "" : ` with value ${utils.objDisplay(expected)}`;
    return this.assert(pass, `expected #{this} to have property "${propertyName}"${valueString}`, `expected #{this} to not have property "${propertyName}"${valueString}`, expected, exists ? value : void 0);
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
      pass = true;
    } else if (received === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(pass, `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, received, expected, false);
  });
  function assertIsMock(assertion) {
    if (!isMockFunction2(assertion._obj)) {
      throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
    }
  }
  function getSpy(assertion) {
    assertIsMock(assertion);
    return assertion._obj;
  }
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(callCount === number, `expected "${spyName}" to be called #{exp} times, but got ${callCount} times`, `expected "${spyName}" to not be called #{exp} times`, number, callCount, false);
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(callCount === 1, `expected "${spyName}" to be called once, but got ${callCount} times`, `expected "${spyName}" to not be called once`, 1, callCount, false);
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    const called = callCount > 0;
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(this, [
      called,
      `expected "${spyName}" to be called at least once`,
      `expected "${spyName}" to not be called at all, but actually been called ${callCount} times`,
      true,
      called
    ]);
    if (called && isNot) {
      msg = formatCalls(spy, msg);
    }
    if (called && isNot || !called && !isNot) {
      throw new AssertionError2(msg);
    }
  });
  function equalsArgumentArray(a3, b) {
    return a3.length === b.length && a3.every((aItem, i) => equals(aItem, b[i], [...customTesters, iterableEquality]));
  }
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equalsArgumentArray(callArg, args));
    const isNot = utils.flag(this, "negate");
    const msg = utils.getMessage(this, [
      pass,
      `expected "${spyName}" to be called with arguments: #{exp}`,
      `expected "${spyName}" to not be called with arguments: #{exp}`,
      args
    ]);
    if (pass && isNot || !pass && !isNot) {
      throw new AssertionError2(formatCalls(spy, msg, args));
    }
  });
  def("toHaveBeenCalledExactlyOnceWith", function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    const hasCallWithArgs = spy.mock.calls.some((callArg) => equalsArgumentArray(callArg, args));
    const pass = hasCallWithArgs && callCount === 1;
    const isNot = utils.flag(this, "negate");
    const msg = utils.getMessage(this, [
      pass,
      `expected "${spyName}" to be called once with arguments: #{exp}`,
      `expected "${spyName}" to not be called once with arguments: #{exp}`,
      args
    ]);
    if (pass && isNot || !pass && !isNot) {
      throw new AssertionError2(formatCalls(spy, msg, args));
    }
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    const callCount = spy.mock.calls.length;
    const isCalled = times <= callCount;
    this.assert(nthCall && equalsArgumentArray(nthCall, args), `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}${isCalled ? `` : `, but called only ${callCount} times`}`, `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`, args, nthCall, isCalled);
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
    this.assert(lastCall && equalsArgumentArray(lastCall, args), `expected last "${spyName}" call to have been called with #{exp}`, `expected last "${spyName}" call to not have been called with #{exp}`, args, lastCall);
  });
  function isSpyCalledBeforeAnotherSpy(beforeSpy, afterSpy, failIfNoFirstInvocation) {
    const beforeInvocationCallOrder = beforeSpy.mock.invocationCallOrder;
    const afterInvocationCallOrder = afterSpy.mock.invocationCallOrder;
    if (beforeInvocationCallOrder.length === 0) {
      return !failIfNoFirstInvocation;
    }
    if (afterInvocationCallOrder.length === 0) {
      return false;
    }
    return beforeInvocationCallOrder[0] < afterInvocationCallOrder[0];
  }
  def(["toHaveBeenCalledBefore"], function(resultSpy, failIfNoFirstInvocation = true) {
    const expectSpy = getSpy(this);
    if (!isMockFunction2(resultSpy)) {
      throw new TypeError(`${utils.inspect(resultSpy)} is not a spy or a call to a spy`);
    }
    this.assert(isSpyCalledBeforeAnotherSpy(expectSpy, resultSpy, failIfNoFirstInvocation), `expected "${expectSpy.getMockName()}" to have been called before "${resultSpy.getMockName()}"`, `expected "${expectSpy.getMockName()}" to not have been called before "${resultSpy.getMockName()}"`, resultSpy, expectSpy);
  });
  def(["toHaveBeenCalledAfter"], function(resultSpy, failIfNoFirstInvocation = true) {
    const expectSpy = getSpy(this);
    if (!isMockFunction2(resultSpy)) {
      throw new TypeError(`${utils.inspect(resultSpy)} is not a spy or a call to a spy`);
    }
    this.assert(isSpyCalledBeforeAnotherSpy(resultSpy, expectSpy, failIfNoFirstInvocation), `expected "${expectSpy.getMockName()}" to have been called after "${resultSpy.getMockName()}"`, `expected "${expectSpy.getMockName()}" to not have been called after "${resultSpy.getMockName()}"`, resultSpy, expectSpy);
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp) {
      return this.throws(expected === "" ? /^$/ : expected);
    }
    const obj = this._obj;
    const promise = utils.flag(this, "promise");
    const isNot = utils.flag(this, "negate");
    let thrown = null;
    if (promise === "rejects") {
      thrown = obj;
    } else if (promise === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error = { showDiff: false };
        throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      let isThrow = false;
      try {
        obj();
      } catch (err) {
        isThrow = true;
        thrown = err;
      }
      if (!isThrow && !isNot) {
        const message = utils.flag(this, "message") || "expected function to throw an error, but it didn't";
        const error = { showDiff: false };
        throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
      }
    }
    if (typeof expected === "function") {
      const name = expected.name || expected.prototype.constructor.name;
      return this.assert(thrown && thrown instanceof expected, `expected error to be instance of ${name}`, `expected error not to be instance of ${name}`, expected, thrown);
    }
    if (expected instanceof Error) {
      const equal = equals(thrown, expected, [...customTesters, iterableEquality]);
      return this.assert(equal, "expected a thrown error to be #{exp}", "expected a thrown error not to be #{exp}", expected, thrown);
    }
    if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(thrown && matcher.asymmetricMatch(thrown), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", matcher, thrown);
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  [{
    name: "toHaveResolved",
    condition: (spy) => spy.mock.settledResults.length > 0 && spy.mock.settledResults.some(({ type: type3 }) => type3 === "fulfilled"),
    action: "resolved"
  }, {
    name: ["toHaveReturned", "toReturn"],
    condition: (spy) => spy.mock.calls.length > 0 && spy.mock.results.some(({ type: type3 }) => type3 !== "throw"),
    action: "called"
  }].forEach(({ name, condition, action }) => {
    def(name, function() {
      const spy = getSpy(this);
      const spyName = spy.getMockName();
      const pass = condition(spy);
      this.assert(pass, `expected "${spyName}" to be successfully ${action} at least once`, `expected "${spyName}" to not be successfully ${action}`, pass, !pass, false);
    });
  });
  [{
    name: "toHaveResolvedTimes",
    condition: (spy, times) => spy.mock.settledResults.reduce((s2, { type: type3 }) => type3 === "fulfilled" ? ++s2 : s2, 0) === times,
    action: "resolved"
  }, {
    name: ["toHaveReturnedTimes", "toReturnTimes"],
    condition: (spy, times) => spy.mock.results.reduce((s2, { type: type3 }) => type3 === "throw" ? s2 : ++s2, 0) === times,
    action: "called"
  }].forEach(({ name, condition, action }) => {
    def(name, function(times) {
      const spy = getSpy(this);
      const spyName = spy.getMockName();
      const pass = condition(spy, times);
      this.assert(pass, `expected "${spyName}" to be successfully ${action} ${times} times`, `expected "${spyName}" to not be successfully ${action} ${times} times`, `expected resolved times: ${times}`, `received resolved times: ${pass}`, false);
    });
  });
  [{
    name: "toHaveResolvedWith",
    condition: (spy, value) => spy.mock.settledResults.some(({ type: type3, value: result }) => type3 === "fulfilled" && equals(value, result)),
    action: "resolve"
  }, {
    name: ["toHaveReturnedWith", "toReturnWith"],
    condition: (spy, value) => spy.mock.results.some(({ type: type3, value: result }) => type3 === "return" && equals(value, result)),
    action: "return"
  }].forEach(({ name, condition, action }) => {
    def(name, function(value) {
      const spy = getSpy(this);
      const pass = condition(spy, value);
      const isNot = utils.flag(this, "negate");
      if (pass && isNot || !pass && !isNot) {
        const spyName = spy.getMockName();
        const msg = utils.getMessage(this, [
          pass,
          `expected "${spyName}" to ${action} with: #{exp} at least once`,
          `expected "${spyName}" to not ${action} with: #{exp}`,
          value
        ]);
        const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
        throw new AssertionError2(formatReturns(spy, results, msg, value));
      }
    });
  });
  [{
    name: "toHaveLastResolvedWith",
    condition: (spy, value) => {
      const result = spy.mock.settledResults[spy.mock.settledResults.length - 1];
      return result && result.type === "fulfilled" && equals(result.value, value);
    },
    action: "resolve"
  }, {
    name: ["toHaveLastReturnedWith", "lastReturnedWith"],
    condition: (spy, value) => {
      const result = spy.mock.results[spy.mock.results.length - 1];
      return result && result.type === "return" && equals(result.value, value);
    },
    action: "return"
  }].forEach(({ name, condition, action }) => {
    def(name, function(value) {
      const spy = getSpy(this);
      const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
      const result = results[results.length - 1];
      const spyName = spy.getMockName();
      this.assert(condition(spy, value), `expected last "${spyName}" call to ${action} #{exp}`, `expected last "${spyName}" call to not ${action} #{exp}`, value, result === null || result === void 0 ? void 0 : result.value);
    });
  });
  [{
    name: "toHaveNthResolvedWith",
    condition: (spy, index2, value) => {
      const result = spy.mock.settledResults[index2 - 1];
      return result && result.type === "fulfilled" && equals(result.value, value);
    },
    action: "resolve"
  }, {
    name: ["toHaveNthReturnedWith", "nthReturnedWith"],
    condition: (spy, index2, value) => {
      const result = spy.mock.results[index2 - 1];
      return result && result.type === "return" && equals(result.value, value);
    },
    action: "return"
  }].forEach(({ name, condition, action }) => {
    def(name, function(nthCall, value) {
      const spy = getSpy(this);
      const spyName = spy.getMockName();
      const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
      const result = results[nthCall - 1];
      const ordinalCall = `${ordinalOf(nthCall)} call`;
      this.assert(condition(spy, nthCall, value), `expected ${ordinalCall} "${spyName}" call to ${action} #{exp}`, `expected ${ordinalCall} "${spyName}" call to not ${action} #{exp}`, value, result === null || result === void 0 ? void 0 : result.value);
    });
  });
  def("withContext", function(context) {
    for (const key in context) {
      utils.flag(this, key, context[key]);
    }
    return this;
  });
  utils.addProperty(chai2.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    const error = new Error("resolves");
    utils.flag(this, "promise", "resolves");
    utils.flag(this, "error", error);
    const test5 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    if (utils.flag(this, "poll")) {
      throw new SyntaxError(`expect.poll() is not supported in combination with .resolves`);
    }
    if (typeof (obj === null || obj === void 0 ? void 0 : obj.then) !== "function") {
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    }
    const proxy = new Proxy(this, { get: (target, key, receiver) => {
      const result = Reflect.get(target, key, receiver);
      if (typeof result !== "function") {
        return result instanceof chai2.Assertion ? proxy : result;
      }
      return (...args) => {
        utils.flag(this, "_name", key);
        const promise = obj.then((value) => {
          utils.flag(this, "object", value);
          return result.call(this, ...args);
        }, (err) => {
          const _error = new AssertionError2(`promise rejected "${utils.inspect(err)}" instead of resolving`, { showDiff: false });
          _error.cause = err;
          _error.stack = error.stack.replace(error.message, _error.message);
          throw _error;
        });
        return recordAsyncExpect(test5, promise, createAssertionMessage(utils, this, !!args.length), error);
      };
    } });
    return proxy;
  });
  utils.addProperty(chai2.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    const error = new Error("rejects");
    utils.flag(this, "promise", "rejects");
    utils.flag(this, "error", error);
    const test5 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (utils.flag(this, "poll")) {
      throw new SyntaxError(`expect.poll() is not supported in combination with .rejects`);
    }
    if (typeof (wrapper === null || wrapper === void 0 ? void 0 : wrapper.then) !== "function") {
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    }
    const proxy = new Proxy(this, { get: (target, key, receiver) => {
      const result = Reflect.get(target, key, receiver);
      if (typeof result !== "function") {
        return result instanceof chai2.Assertion ? proxy : result;
      }
      return (...args) => {
        utils.flag(this, "_name", key);
        const promise = wrapper.then((value) => {
          const _error = new AssertionError2(`promise resolved "${utils.inspect(value)}" instead of rejecting`, {
            showDiff: true,
            expected: new Error("rejected promise"),
            actual: value
          });
          _error.stack = error.stack.replace(error.message, _error.message);
          throw _error;
        }, (err) => {
          utils.flag(this, "object", err);
          return result.call(this, ...args);
        });
        return recordAsyncExpect(test5, promise, createAssertionMessage(utils, this, !!args.length), error);
      };
    } });
    return proxy;
  });
};
function ordinalOf(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
}
function formatCalls(spy, msg, showActualCall) {
  if (spy.mock.calls.length) {
    msg += u.gray(`

Received: 

${spy.mock.calls.map((callArg, i) => {
      let methodCall = u.bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call:

`);
      if (showActualCall) {
        methodCall += diff(showActualCall, callArg, { omitAnnotationLines: true });
      } else {
        methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
      }
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
  }
  msg += u.gray(`

Number of calls: ${u.bold(spy.mock.calls.length)}
`);
  return msg;
}
function formatReturns(spy, results, msg, showActualReturn) {
  if (results.length) {
    msg += u.gray(`

Received: 

${results.map((callReturn, i) => {
      let methodCall = u.bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call return:

`);
      if (showActualReturn) {
        methodCall += diff(showActualReturn, callReturn.value, { omitAnnotationLines: true });
      } else {
        methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
      }
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
  }
  msg += u.gray(`

Number of calls: ${u.bold(spy.mock.calls.length)}
`);
  return msg;
}
function getMatcherState(assertion, expect2) {
  const obj = assertion._obj;
  const isNot = utils_exports.flag(assertion, "negate");
  const promise = utils_exports.flag(assertion, "promise") || "";
  const jestUtils = {
    ...getMatcherUtils(),
    diff,
    stringify,
    iterableEquality,
    subsetEquality
  };
  const matcherState = {
    ...getState(expect2),
    customTesters: getCustomEqualityTesters(),
    isNot,
    utils: jestUtils,
    promise,
    equals,
    suppressedErrors: [],
    soft: utils_exports.flag(assertion, "soft"),
    poll: utils_exports.flag(assertion, "poll")
  };
  return {
    state: matcherState,
    isNot,
    obj
  };
}
var JestExtendError = class extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
};
function JestExtendPlugin(c, expect2, matchers) {
  return (_, utils) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const result = expectAssertion.call(state, obj, ...args);
        if (result && typeof result === "object" && typeof result.then === "function") {
          const thenable = result;
          return thenable.then(({ pass: pass2, message: message2, actual: actual2, expected: expected2 }) => {
            if (pass2 && isNot || !pass2 && !isNot) {
              throw new JestExtendError(message2(), actual2, expected2);
            }
          });
        }
        const { pass, message, actual, expected } = result;
        if (pass && isNot || !pass && !isNot) {
          throw new JestExtendError(message(), actual, expected);
        }
      }
      const softWrapper = wrapAssertion(utils, expectAssertionName, expectWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, softWrapper);
      utils.addMethod(c.Assertion.prototype, expectAssertionName, softWrapper);
      class CustomMatcher extends AsymmetricMatcher3 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(this.getMatcherContext(expect2), other, ...this.sample);
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map((item) => stringify(item)).join(", ")}>`;
        }
      }
      const customMatcher = (...sample) => new CustomMatcher(false, ...sample);
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: customMatcher,
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
      Object.defineProperty(globalThis[ASYMMETRIC_MATCHERS_OBJECT], expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: customMatcher,
        writable: true
      });
    });
  };
}
var JestExtend = (chai2, utils) => {
  utils.addMethod(chai2.expect, "extend", (expect2, expects) => {
    use(JestExtendPlugin(chai2, expect2, expects));
  });
};
var comma = ",".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
var UrlType;
(function(UrlType3) {
  UrlType3[UrlType3["Empty"] = 1] = "Empty";
  UrlType3[UrlType3["Hash"] = 2] = "Hash";
  UrlType3[UrlType3["Query"] = 3] = "Query";
  UrlType3[UrlType3["RelativePath"] = 4] = "RelativePath";
  UrlType3[UrlType3["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType3[UrlType3["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType3[UrlType3["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r2) => r2.toUpperCase());
}
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path2 = index2 >= 0 ? arguments_[index2] : cwd();
    if (!path2 || path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path2);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path2.length; ++index2) {
    if (index2 < path2.length) {
      char = path2[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, index2)}`;
        } else {
          res = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p3) {
  return _IS_ABSOLUTE_RE.test(p3);
};
var CHROME_IE_STACK_REGEXP = /^\s*at .*(?:\S:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(?:eval@)?(?:\[native code\])?$/;
function extractLocation(urlLike) {
  if (!urlLike.includes(":")) {
    return [urlLike];
  }
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts) {
    return [urlLike];
  }
  let url = parts[1];
  if (url.startsWith("async ")) {
    url = url.slice(6);
  }
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    urlObj.searchParams.delete("import");
    urlObj.searchParams.delete("browserv");
    url = urlObj.pathname + urlObj.hash + urlObj.search;
  }
  if (url.startsWith("/@fs/")) {
    const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
    url = url.slice(isWindows ? 5 : 4);
  }
  return [
    url,
    parts[2] || void 0,
    parts[3] || void 0
  ];
}
function parseSingleFFOrSafariStack(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP.test(line)) {
    return null;
  }
  if (line.includes(" > eval")) {
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  }
  if (!line.includes("@") && !line.includes(":")) {
    return null;
  }
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(@)/;
  const matches = line.match(functionNameRegex);
  const functionName2 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber) {
    return null;
  }
  return {
    file: url,
    method: functionName2 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleStack(raw) {
  const line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line)) {
    return parseSingleFFOrSafariStack(line);
  }
  return parseSingleV8Stack(line);
}
function parseSingleV8Stack(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line)) {
    return null;
  }
  if (line.includes("(eval ")) {
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  }
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber) {
    return null;
  }
  if (method.startsWith("async ")) {
    method = method.slice(6);
  }
  if (file.startsWith("file://")) {
    file = file.slice(7);
  }
  file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve(file);
  if (method) {
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  }
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
var import_js_tokens = (0, import_chunk_2ESYSVXG.__toESM)(require_js_tokens(), 1);
function stripLiteralJsTokens(code, options) {
  const FILL = options?.fillChar ?? " ";
  const FILL_COMMENT = " ";
  let result = "";
  const filter = options?.filter ?? (() => true);
  const tokens = [];
  for (const token of (0, import_js_tokens.default)(code, { jsx: false })) {
    tokens.push(token);
    if (token.type === "SingleLineComment") {
      result += FILL_COMMENT.repeat(token.value.length);
      continue;
    }
    if (token.type === "MultiLineComment") {
      result += token.value.replace(/[^\n]/g, FILL_COMMENT);
      continue;
    }
    if (token.type === "StringLiteral") {
      if (!token.closed) {
        result += token.value;
        continue;
      }
      const body = token.value.slice(1, -1);
      if (filter(body)) {
        result += token.value[0] + FILL.repeat(body.length) + token.value[token.value.length - 1];
        continue;
      }
    }
    if (token.type === "NoSubstitutionTemplate") {
      const body = token.value.slice(1, -1);
      if (filter(body)) {
        result += `\`${body.replace(/[^\n]/g, FILL)}\``;
        continue;
      }
    }
    if (token.type === "RegularExpressionLiteral") {
      const body = token.value;
      if (filter(body)) {
        result += body.replace(/\/(.*)\/(\w?)$/g, (_, $1, $2) => `/${FILL.repeat($1.length)}/${$2}`);
        continue;
      }
    }
    if (token.type === "TemplateHead") {
      const body = token.value.slice(1, -2);
      if (filter(body)) {
        result += `\`${body.replace(/[^\n]/g, FILL)}\${`;
        continue;
      }
    }
    if (token.type === "TemplateTail") {
      const body = token.value.slice(0, -2);
      if (filter(body)) {
        result += `}${body.replace(/[^\n]/g, FILL)}\``;
        continue;
      }
    }
    if (token.type === "TemplateMiddle") {
      const body = token.value.slice(1, -2);
      if (filter(body)) {
        result += `}${body.replace(/[^\n]/g, FILL)}\${`;
        continue;
      }
    }
    result += token.value;
  }
  return {
    result,
    tokens
  };
}
function stripLiteral(code, options) {
  return stripLiteralDetailed(code, options).result;
}
function stripLiteralDetailed(code, options) {
  return stripLiteralJsTokens(code, options);
}
var _DRIVE_LETTER_START_RE2 = /^[A-Za-z]:\//;
function normalizeWindowsPath2(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE2, (r2) => r2.toUpperCase());
}
var _IS_ABSOLUTE_RE2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd2() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve2 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath2(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path2 = index2 >= 0 ? arguments_[index2] : cwd2();
    if (!path2 || path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute2(path2);
  }
  resolvedPath = normalizeString2(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute2(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString2(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path2.length; ++index2) {
    if (index2 < path2.length) {
      char = path2[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, index2)}`;
        } else {
          res = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute2 = function(p3) {
  return _IS_ABSOLUTE_RE2.test(p3);
};
var PendingError = class extends Error {
  code = "VITEST_PENDING";
  taskId;
  constructor(message, task, note) {
    super(message);
    this.message = message;
    this.note = note;
    this.taskId = task.id;
  }
};
var fnMap = /* @__PURE__ */ new WeakMap();
var testFixtureMap = /* @__PURE__ */ new WeakMap();
var hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setTestFixture(key, fixture) {
  testFixtureMap.set(key, fixture);
}
function getTestFixture(key) {
  return testFixtureMap.get(key);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
function mergeScopedFixtures(testFixtures, scopedFixtures) {
  const scopedFixturesMap = scopedFixtures.reduce((map2, fixture) => {
    map2[fixture.prop] = fixture;
    return map2;
  }, {});
  const newFixtures = {};
  testFixtures.forEach((fixture) => {
    const useFixture = scopedFixturesMap[fixture.prop] || { ...fixture };
    newFixtures[useFixture.prop] = useFixture;
  });
  for (const fixtureKep in newFixtures) {
    var _fixture$deps;
    const fixture = newFixtures[fixtureKep];
    fixture.deps = (_fixture$deps = fixture.deps) === null || _fixture$deps === void 0 ? void 0 : _fixture$deps.map((dep) => newFixtures[dep.prop]);
  }
  return Object.values(newFixtures);
}
function mergeContextFixtures(fixtures, context, runner2) {
  const fixtureOptionKeys = [
    "auto",
    "injected",
    "scope"
  ];
  const fixtureArray = Object.entries(fixtures).map(([prop, value]) => {
    const fixtureItem = { value };
    if (Array.isArray(value) && value.length >= 2 && isObject(value[1]) && Object.keys(value[1]).some((key) => fixtureOptionKeys.includes(key))) {
      var _runner$injectValue;
      Object.assign(fixtureItem, value[1]);
      const userValue = value[0];
      fixtureItem.value = fixtureItem.injected ? ((_runner$injectValue = runner2.injectValue) === null || _runner$injectValue === void 0 ? void 0 : _runner$injectValue.call(runner2, prop)) ?? userValue : userValue;
    }
    fixtureItem.scope = fixtureItem.scope || "test";
    if (fixtureItem.scope === "worker" && !runner2.getWorkerContext) {
      fixtureItem.scope = "file";
    }
    fixtureItem.prop = prop;
    fixtureItem.isFn = typeof fixtureItem.value === "function";
    return fixtureItem;
  });
  if (Array.isArray(context.fixtures)) {
    context.fixtures = context.fixtures.concat(fixtureArray);
  } else {
    context.fixtures = fixtureArray;
  }
  fixtureArray.forEach((fixture) => {
    if (fixture.isFn) {
      const usedProps = getUsedProps(fixture.value);
      if (usedProps.length) {
        fixture.deps = context.fixtures.filter(({ prop }) => prop !== fixture.prop && usedProps.includes(prop));
      }
      if (fixture.scope !== "test") {
        var _fixture$deps2;
        (_fixture$deps2 = fixture.deps) === null || _fixture$deps2 === void 0 ? void 0 : _fixture$deps2.forEach((dep) => {
          if (!dep.isFn) {
            return;
          }
          if (fixture.scope === "worker" && dep.scope === "worker") {
            return;
          }
          if (fixture.scope === "file" && dep.scope !== "test") {
            return;
          }
          throw new SyntaxError(`cannot use the ${dep.scope} fixture "${dep.prop}" inside the ${fixture.scope} fixture "${fixture.prop}"`);
        });
      }
    }
  });
  return context;
}
var fixtureValueMaps = /* @__PURE__ */ new Map();
var cleanupFnArrayMap = /* @__PURE__ */ new Map();
function withFixtures(runner2, fn2, testContext) {
  return (hookContext) => {
    const context = hookContext || testContext;
    if (!context) {
      return fn2({});
    }
    const fixtures = getTestFixture(context);
    if (!(fixtures === null || fixtures === void 0 ? void 0 : fixtures.length)) {
      return fn2(context);
    }
    const usedProps = getUsedProps(fn2);
    const hasAutoFixture = fixtures.some(({ auto }) => auto);
    if (!usedProps.length && !hasAutoFixture) {
      return fn2(context);
    }
    if (!fixtureValueMaps.get(context)) {
      fixtureValueMaps.set(context, /* @__PURE__ */ new Map());
    }
    const fixtureValueMap = fixtureValueMaps.get(context);
    if (!cleanupFnArrayMap.has(context)) {
      cleanupFnArrayMap.set(context, []);
    }
    const cleanupFnArray = cleanupFnArrayMap.get(context);
    const usedFixtures = fixtures.filter(({ prop, auto }) => auto || usedProps.includes(prop));
    const pendingFixtures = resolveDeps(usedFixtures);
    if (!pendingFixtures.length) {
      return fn2(context);
    }
    async function resolveFixtures() {
      for (const fixture of pendingFixtures) {
        if (fixtureValueMap.has(fixture)) {
          continue;
        }
        const resolvedValue = await resolveFixtureValue(runner2, fixture, context, cleanupFnArray);
        context[fixture.prop] = resolvedValue;
        fixtureValueMap.set(fixture, resolvedValue);
        if (fixture.scope === "test") {
          cleanupFnArray.unshift(() => {
            fixtureValueMap.delete(fixture);
          });
        }
      }
    }
    return resolveFixtures().then(() => fn2(context));
  };
}
var globalFixturePromise = /* @__PURE__ */ new WeakMap();
function resolveFixtureValue(runner2, fixture, context, cleanupFnArray) {
  var _runner$getWorkerCont;
  const fileContext = getFileContext(context.task.file);
  const workerContext = (_runner$getWorkerCont = runner2.getWorkerContext) === null || _runner$getWorkerCont === void 0 ? void 0 : _runner$getWorkerCont.call(runner2);
  if (!fixture.isFn) {
    var _fixture$prop;
    fileContext[_fixture$prop = fixture.prop] ?? (fileContext[_fixture$prop] = fixture.value);
    if (workerContext) {
      var _fixture$prop2;
      workerContext[_fixture$prop2 = fixture.prop] ?? (workerContext[_fixture$prop2] = fixture.value);
    }
    return fixture.value;
  }
  if (fixture.scope === "test") {
    return resolveFixtureFunction(fixture.value, context, cleanupFnArray);
  }
  if (globalFixturePromise.has(fixture)) {
    return globalFixturePromise.get(fixture);
  }
  let fixtureContext;
  if (fixture.scope === "worker") {
    if (!workerContext) {
      throw new TypeError("[@vitest/runner] The worker context is not available in the current test runner. Please, provide the `getWorkerContext` method when initiating the runner.");
    }
    fixtureContext = workerContext;
  } else {
    fixtureContext = fileContext;
  }
  if (fixture.prop in fixtureContext) {
    return fixtureContext[fixture.prop];
  }
  if (!cleanupFnArrayMap.has(fixtureContext)) {
    cleanupFnArrayMap.set(fixtureContext, []);
  }
  const cleanupFnFileArray = cleanupFnArrayMap.get(fixtureContext);
  const promise = resolveFixtureFunction(fixture.value, fixtureContext, cleanupFnFileArray).then((value) => {
    fixtureContext[fixture.prop] = value;
    globalFixturePromise.delete(fixture);
    return value;
  });
  globalFixturePromise.set(fixture, promise);
  return promise;
}
async function resolveFixtureFunction(fixtureFn, context, cleanupFnArray) {
  const useFnArgPromise = createDefer();
  let isUseFnArgResolved = false;
  const fixtureReturn = fixtureFn(context, async (useFnArg) => {
    isUseFnArgResolved = true;
    useFnArgPromise.resolve(useFnArg);
    const useReturnPromise = createDefer();
    cleanupFnArray.push(async () => {
      useReturnPromise.resolve();
      await fixtureReturn;
    });
    await useReturnPromise;
  }).catch((e) => {
    if (!isUseFnArgResolved) {
      useFnArgPromise.reject(e);
      return;
    }
    throw e;
  });
  return useFnArgPromise;
}
function resolveDeps(fixtures, depSet = /* @__PURE__ */ new Set(), pendingFixtures = []) {
  fixtures.forEach((fixture) => {
    if (pendingFixtures.includes(fixture)) {
      return;
    }
    if (!fixture.isFn || !fixture.deps) {
      pendingFixtures.push(fixture);
      return;
    }
    if (depSet.has(fixture)) {
      throw new Error(`Circular fixture dependency detected: ${fixture.prop} <- ${[...depSet].reverse().map((d) => d.prop).join(" <- ")}`);
    }
    depSet.add(fixture);
    resolveDeps(fixture.deps, depSet, pendingFixtures);
    pendingFixtures.push(fixture);
    depSet.clear();
  });
  return pendingFixtures;
}
function getUsedProps(fn2) {
  let fnString = stripLiteral(fn2.toString());
  if (/__async\((?:this|null), (?:null|arguments|\[[_0-9, ]*\]), function\*/.test(fnString)) {
    fnString = fnString.split(/__async\((?:this|null),/)[1];
  }
  const match = fnString.match(/[^(]*\(([^)]*)/);
  if (!match) {
    return [];
  }
  const args = splitByComma(match[1]);
  if (!args.length) {
    return [];
  }
  let first = args[0];
  if ("__VITEST_FIXTURE_INDEX__" in fn2) {
    first = args[fn2.__VITEST_FIXTURE_INDEX__];
    if (!first) {
      return [];
    }
  }
  if (!(first.startsWith("{") && first.endsWith("}"))) {
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${first}".`);
  }
  const _first = first.slice(1, -1).replace(/\s/g, "");
  const props = splitByComma(_first).map((prop) => {
    return prop.replace(/:.*|=.*/g, "");
  });
  const last = props.at(-1);
  if (last && last.startsWith("...")) {
    throw new Error(`Rest parameters are not supported in fixtures, received "${last}".`);
  }
  return props;
}
function splitByComma(s2) {
  const result = [];
  const stack = [];
  let start = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === "{" || s2[i] === "[") {
      stack.push(s2[i] === "{" ? "}" : "]");
    } else if (s2[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && s2[i] === ",") {
      const token = s2.substring(start, i).trim();
      if (token) {
        result.push(token);
      }
      start = i + 1;
    }
  }
  const lastToken = s2.substring(start).trim();
  if (lastToken) {
    result.push(lastToken);
  }
  return result;
}
var _test;
function getCurrentTest() {
  return _test;
}
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    chain2.setContext = (key, value) => {
      context[key] = value;
    };
    chain2.mergeContext = (ctx) => {
      Object.assign(context, ctx);
    };
    for (const key of keys2) {
      Object.defineProperty(chain2, key, { get() {
        return create({
          ...context,
          [key]: true
        });
      } });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
var suite = createSuite();
var test3 = createTest(function(name, optionsOrFn, optionsOrTest) {
  if (getCurrentTest()) {
    throw new Error('Calling the test function inside another test function is not allowed. Please put it inside "describe" or "suite" so it can be properly collected.');
  }
  getCurrentSuite().test.fn.call(this, formatName(name), optionsOrFn, optionsOrTest);
});
var runner;
var defaultSuite;
var currentTestFilepath;
function assert3(condition, message) {
  if (!condition) {
    throw new Error(`Vitest failed to find ${message}. This is a bug in Vitest. Please, open an issue with reproduction.`);
  }
}
function getTestFilepath() {
  return currentTestFilepath;
}
function getRunner() {
  assert3(runner, "the runner");
  return runner;
}
function getCurrentSuite() {
  const currentSuite = collectorContext.currentSuite || defaultSuite;
  assert3(currentSuite, "the current suite");
  return currentSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function parseArguments(optionsOrFn, optionsOrTest) {
  let options = {};
  let fn2 = () => {
  };
  if (typeof optionsOrTest === "object") {
    if (typeof optionsOrFn === "object") {
      throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
    }
    console.warn("Using an object as a third argument is deprecated. Vitest 4 will throw an error if the third argument is not a timeout number. Please use the second argument for options. See more at https://vitest.dev/guide/migration");
    options = optionsOrTest;
  } else if (typeof optionsOrTest === "number") {
    options = { timeout: optionsOrTest };
  } else if (typeof optionsOrFn === "object") {
    options = optionsOrFn;
  }
  if (typeof optionsOrFn === "function") {
    if (typeof optionsOrTest === "function") {
      throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
    }
    fn2 = optionsOrFn;
  } else if (typeof optionsOrTest === "function") {
    fn2 = optionsOrTest;
  }
  return {
    options,
    handler: fn2
  };
}
function createSuiteCollector(name, factory2 = () => {
}, mode, each, suiteOptions, parentCollectorFixtures) {
  const tasks = [];
  let suite2;
  initSuite(true);
  const task = function(name2 = "", options = {}) {
    var _collectorContext$cur;
    const timeout = (options === null || options === void 0 ? void 0 : options.timeout) ?? runner.config.testTimeout;
    const task2 = {
      id: "",
      name: name2,
      suite: (_collectorContext$cur = collectorContext.currentSuite) === null || _collectorContext$cur === void 0 ? void 0 : _collectorContext$cur.suite,
      each: options.each,
      fails: options.fails,
      context: void 0,
      type: "test",
      file: void 0,
      timeout,
      retry: options.retry ?? runner.config.retry,
      repeats: options.repeats,
      mode: options.only ? "only" : options.skip ? "skip" : options.todo ? "todo" : "run",
      meta: options.meta ?? /* @__PURE__ */ Object.create(null),
      annotations: []
    };
    const handler = options.handler;
    if (options.concurrent || !options.sequential && runner.config.sequence.concurrent) {
      task2.concurrent = true;
    }
    task2.shuffle = suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.shuffle;
    const context = createTestContext(task2, runner);
    Object.defineProperty(task2, "context", {
      value: context,
      enumerable: false
    });
    setTestFixture(context, options.fixtures);
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 15;
    const stackTraceError = new Error("STACK_TRACE_ERROR");
    Error.stackTraceLimit = limit;
    if (handler) {
      setFn(task2, withTimeout(withAwaitAsyncAssertions(withFixtures(runner, handler, context), task2), timeout, false, stackTraceError, (_, error) => abortIfTimeout([context], error)));
    }
    if (runner.config.includeTaskLocation) {
      const error = stackTraceError.stack;
      const stack = findTestFileStackTrace(error);
      if (stack) {
        task2.location = stack;
      }
    }
    tasks.push(task2);
    return task2;
  };
  const test5 = createTest(function(name2, optionsOrFn, optionsOrTest) {
    let { options, handler } = parseArguments(optionsOrFn, optionsOrTest);
    if (typeof suiteOptions === "object") {
      options = Object.assign({}, suiteOptions, options);
    }
    options.concurrent = this.concurrent || !this.sequential && (options === null || options === void 0 ? void 0 : options.concurrent);
    options.sequential = this.sequential || !this.concurrent && (options === null || options === void 0 ? void 0 : options.sequential);
    const test6 = task(formatName(name2), {
      ...this,
      ...options,
      handler
    });
    test6.type = "test";
  });
  let collectorFixtures = parentCollectorFixtures;
  const collector = {
    type: "collector",
    name,
    mode,
    suite: suite2,
    options: suiteOptions,
    test: test5,
    tasks,
    collect,
    task,
    clear,
    on: addHook,
    fixtures() {
      return collectorFixtures;
    },
    scoped(fixtures) {
      const parsed = mergeContextFixtures(fixtures, { fixtures: collectorFixtures }, runner);
      if (parsed.fixtures) {
        collectorFixtures = parsed.fixtures;
      }
    }
  };
  function addHook(name2, ...fn2) {
    getHooks(suite2)[name2].push(...fn2);
  }
  function initSuite(includeLocation) {
    var _collectorContext$cur2;
    if (typeof suiteOptions === "number") {
      suiteOptions = { timeout: suiteOptions };
    }
    suite2 = {
      id: "",
      type: "suite",
      name,
      suite: (_collectorContext$cur2 = collectorContext.currentSuite) === null || _collectorContext$cur2 === void 0 ? void 0 : _collectorContext$cur2.suite,
      mode,
      each,
      file: void 0,
      shuffle: suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.shuffle,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      concurrent: suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.concurrent
    };
    if (runner && includeLocation && runner.config.includeTaskLocation) {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 15;
      const error = new Error("stacktrace").stack;
      Error.stackTraceLimit = limit;
      const stack = findTestFileStackTrace(error);
      if (stack) {
        suite2.location = stack;
      }
    }
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    initSuite(false);
  }
  async function collect(file) {
    if (!file) {
      throw new TypeError("File is required to collect tasks.");
    }
    if (factory2) {
      await runWithSuite(collector, () => factory2(test5));
    }
    const allChildren = [];
    for (const i of tasks) {
      allChildren.push(i.type === "collector" ? await i.collect(file) : i);
    }
    suite2.file = file;
    suite2.tasks = allChildren;
    allChildren.forEach((task2) => {
      task2.file = file;
    });
    return suite2;
  }
  collectTask(collector);
  return collector;
}
function withAwaitAsyncAssertions(fn2, task) {
  return async (...args) => {
    const fnResult = await fn2(...args);
    if (task.promises) {
      const result = await Promise.allSettled(task.promises);
      const errors = result.map((r2) => r2.status === "rejected" ? r2.reason : void 0).filter(Boolean);
      if (errors.length) {
        throw errors;
      }
    }
    return fnResult;
  };
}
function createSuite() {
  function suiteFn(name, factoryOrOptions, optionsOrFactory) {
    var _currentSuite$options;
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    const currentSuite = collectorContext.currentSuite || defaultSuite;
    let { options, handler: factory2 } = parseArguments(factoryOrOptions, optionsOrFactory);
    const isConcurrentSpecified = options.concurrent || this.concurrent || options.sequential === false;
    const isSequentialSpecified = options.sequential || this.sequential || options.concurrent === false;
    options = {
      ...currentSuite === null || currentSuite === void 0 ? void 0 : currentSuite.options,
      ...options,
      shuffle: this.shuffle ?? options.shuffle ?? (currentSuite === null || currentSuite === void 0 || (_currentSuite$options = currentSuite.options) === null || _currentSuite$options === void 0 ? void 0 : _currentSuite$options.shuffle) ?? (runner === null || runner === void 0 ? void 0 : runner.config.sequence.shuffle)
    };
    const isConcurrent = isConcurrentSpecified || options.concurrent && !isSequentialSpecified;
    const isSequential = isSequentialSpecified || options.sequential && !isConcurrentSpecified;
    options.concurrent = isConcurrent && !isSequential;
    options.sequential = isSequential && !isConcurrent;
    return createSuiteCollector(formatName(name), factory2, mode, this.each, options, currentSuite === null || currentSuite === void 0 ? void 0 : currentSuite.fixtures());
  }
  suiteFn.each = function(cases, ...args) {
    const suite2 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length) {
      cases = formatTemplateString(cases, args);
    }
    return (name, optionsOrFn, fnOrOptions) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
      const fnFirst = typeof optionsOrFn === "function" && typeof fnOrOptions === "object";
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        if (fnFirst) {
          if (arrayOnlyCases) {
            suite2(formatTitle(_name, items, idx), () => handler(...items), options);
          } else {
            suite2(formatTitle(_name, items, idx), () => handler(i), options);
          }
        } else {
          if (arrayOnlyCases) {
            suite2(formatTitle(_name, items, idx), options, () => handler(...items));
          } else {
            suite2(formatTitle(_name, items, idx), options, () => handler(i));
          }
        }
      });
      this.setContext("each", void 0);
    };
  };
  suiteFn.for = function(cases, ...args) {
    if (Array.isArray(cases) && args.length) {
      cases = formatTemplateString(cases, args);
    }
    return (name, optionsOrFn, fnOrOptions) => {
      const name_ = formatName(name);
      const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
      cases.forEach((item, idx) => {
        suite(formatTitle(name_, toArray(item), idx), options, () => handler(item));
      });
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable([
    "concurrent",
    "sequential",
    "shuffle",
    "skip",
    "only",
    "todo"
  ], suiteFn);
}
function createTaskCollector(fn2, context) {
  const taskFn = fn2;
  taskFn.each = function(cases, ...args) {
    const test5 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length) {
      cases = formatTemplateString(cases, args);
    }
    return (name, optionsOrFn, fnOrOptions) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
      const fnFirst = typeof optionsOrFn === "function" && typeof fnOrOptions === "object";
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        if (fnFirst) {
          if (arrayOnlyCases) {
            test5(formatTitle(_name, items, idx), () => handler(...items), options);
          } else {
            test5(formatTitle(_name, items, idx), () => handler(i), options);
          }
        } else {
          if (arrayOnlyCases) {
            test5(formatTitle(_name, items, idx), options, () => handler(...items));
          } else {
            test5(formatTitle(_name, items, idx), options, () => handler(i));
          }
        }
      });
      this.setContext("each", void 0);
    };
  };
  taskFn.for = function(cases, ...args) {
    const test5 = this.withContext();
    if (Array.isArray(cases) && args.length) {
      cases = formatTemplateString(cases, args);
    }
    return (name, optionsOrFn, fnOrOptions) => {
      const _name = formatName(name);
      const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
      cases.forEach((item, idx) => {
        const handlerWrapper = (ctx) => handler(item, ctx);
        handlerWrapper.__VITEST_FIXTURE_INDEX__ = 1;
        handlerWrapper.toString = () => handler.toString();
        test5(formatTitle(_name, toArray(item), idx), options, handlerWrapper);
      });
    };
  };
  taskFn.skipIf = function(condition) {
    return condition ? this.skip : this;
  };
  taskFn.runIf = function(condition) {
    return condition ? this : this.skip;
  };
  taskFn.scoped = function(fixtures) {
    const collector = getCurrentSuite();
    collector.scoped(fixtures);
  };
  taskFn.extend = function(fixtures) {
    const _context = mergeContextFixtures(fixtures, context || {}, runner);
    const originalWrapper = fn2;
    return createTest(function(name, optionsOrFn, optionsOrTest) {
      const collector = getCurrentSuite();
      const scopedFixtures = collector.fixtures();
      const context2 = { ...this };
      if (scopedFixtures) {
        context2.fixtures = mergeScopedFixtures(context2.fixtures || [], scopedFixtures);
      }
      const { handler, options } = parseArguments(optionsOrFn, optionsOrTest);
      const timeout = options.timeout ?? (runner === null || runner === void 0 ? void 0 : runner.config.testTimeout);
      originalWrapper.call(context2, formatName(name), handler, timeout);
    }, _context);
  };
  const _test2 = createChainable([
    "concurrent",
    "sequential",
    "skip",
    "only",
    "todo",
    "fails"
  ], taskFn);
  if (context) {
    _test2.mergeContext(context);
  }
  return _test2;
}
function createTest(fn2, context) {
  return createTaskCollector(fn2, context);
}
function formatName(name) {
  return typeof name === "string" ? name : typeof name === "function" ? name.name || "<anonymous>" : String(name);
}
function formatTitle(template, items, idx) {
  if (template.includes("%#") || template.includes("%$")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/%\$/g, `${idx + 1}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  if (template.includes("%f")) {
    const placeholders = template.match(/%f/g) || [];
    placeholders.forEach((_, i) => {
      if (isNegativeNaN(items[i]) || Object.is(items[i], -0)) {
        let occurrence = 0;
        template = template.replace(/%f/g, (match) => {
          occurrence++;
          return occurrence === i + 1 ? "-%f" : match;
        });
      }
    });
  }
  let formatted = format2(template, ...items.slice(0, count));
  const isObjectItem = isObject(items[0]);
  formatted = formatted.replace(/\$([$\w.]+)/g, (_, key) => {
    var _runner$config;
    const isArrayKey = /^\d+$/.test(key);
    if (!isObjectItem && !isArrayKey) {
      return `$${key}`;
    }
    const arrayElement = isArrayKey ? objectAttr(items, key) : void 0;
    const value = isObjectItem ? objectAttr(items[0], key, arrayElement) : arrayElement;
    return objDisplay(value, { truncate: runner === null || runner === void 0 || (_runner$config = runner.config) === null || _runner$config === void 0 || (_runner$config = _runner$config.chaiConfig) === null || _runner$config === void 0 ? void 0 : _runner$config.truncateThreshold });
  });
  return formatted;
}
function formatTemplateString(cases, args) {
  const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i) => i.split("|"))[0];
  const res = [];
  for (let i = 0; i < Math.floor(args.length / header.length); i++) {
    const oneCase = {};
    for (let j = 0; j < header.length; j++) {
      oneCase[header[j]] = args[i * header.length + j];
    }
    res.push(oneCase);
  }
  return res;
}
function findTestFileStackTrace(error) {
  const testFilePath = getTestFilepath();
  const lines = error.split("\n").slice(1);
  for (const line of lines) {
    const stack = parseSingleStack(line);
    if (stack && stack.file === testFilePath) {
      return {
        line: stack.line,
        column: stack.column
      };
    }
  }
}
var now$2 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
function getNames(task) {
  const names = [task.name];
  let current = task;
  while (current === null || current === void 0 ? void 0 : current.suite) {
    current = current.suite;
    if (current === null || current === void 0 ? void 0 : current.name) {
      names.unshift(current.name);
    }
  }
  if (current !== task.file) {
    names.unshift(task.file.name);
  }
  return names;
}
function getTestName(task, separator = " > ") {
  return getNames(task).slice(1).join(separator);
}
var now$1 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
var unixNow = Date.now;
var { clearTimeout, setTimeout } = getSafeTimers();
var packs = /* @__PURE__ */ new Map();
var eventsPacks = [];
var pendingTasksUpdates = [];
function sendTasksUpdate(runner2) {
  if (packs.size) {
    var _runner$onTaskUpdate;
    const taskPacks = Array.from(packs).map(([id, task]) => {
      return [
        id,
        task[0],
        task[1]
      ];
    });
    const p3 = (_runner$onTaskUpdate = runner2.onTaskUpdate) === null || _runner$onTaskUpdate === void 0 ? void 0 : _runner$onTaskUpdate.call(runner2, taskPacks, eventsPacks);
    if (p3) {
      pendingTasksUpdates.push(p3);
      p3.then(() => pendingTasksUpdates.splice(pendingTasksUpdates.indexOf(p3), 1), () => {
      });
    }
    eventsPacks.length = 0;
    packs.clear();
  }
}
async function finishSendTasksUpdate(runner2) {
  sendTasksUpdate(runner2);
  await Promise.all(pendingTasksUpdates);
}
function throttle(fn2, ms) {
  let last = 0;
  let pendingCall;
  return function call2(...args) {
    const now3 = unixNow();
    if (now3 - last > ms) {
      last = now3;
      clearTimeout(pendingCall);
      pendingCall = void 0;
      return fn2.apply(this, args);
    }
    pendingCall ?? (pendingCall = setTimeout(() => call2.bind(this)(...args), ms));
  };
}
var sendTasksUpdateThrottled = throttle(sendTasksUpdate, 100);
var now = Date.now;
var collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _collectorContext$cur;
  (_collectorContext$cur = collectorContext.currentSuite) === null || _collectorContext$cur === void 0 ? void 0 : _collectorContext$cur.tasks.push(task);
}
async function runWithSuite(suite2, fn2) {
  const prev = collectorContext.currentSuite;
  collectorContext.currentSuite = suite2;
  await fn2();
  collectorContext.currentSuite = prev;
}
function withTimeout(fn2, timeout, isHook = false, stackTraceError, onTimeout) {
  if (timeout <= 0 || timeout === Number.POSITIVE_INFINITY) {
    return fn2;
  }
  const { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = getSafeTimers();
  return function runWithTimeout(...args) {
    const startTime = now();
    const runner2 = getRunner();
    runner2._currentTaskStartTime = startTime;
    runner2._currentTaskTimeout = timeout;
    return new Promise((resolve_, reject_) => {
      var _timer$unref;
      const timer = setTimeout2(() => {
        clearTimeout2(timer);
        rejectTimeoutError();
      }, timeout);
      (_timer$unref = timer.unref) === null || _timer$unref === void 0 ? void 0 : _timer$unref.call(timer);
      function rejectTimeoutError() {
        const error = makeTimeoutError(isHook, timeout, stackTraceError);
        onTimeout === null || onTimeout === void 0 ? void 0 : onTimeout(args, error);
        reject_(error);
      }
      function resolve4(result) {
        runner2._currentTaskStartTime = void 0;
        runner2._currentTaskTimeout = void 0;
        clearTimeout2(timer);
        if (now() - startTime >= timeout) {
          rejectTimeoutError();
          return;
        }
        resolve_(result);
      }
      function reject(error) {
        runner2._currentTaskStartTime = void 0;
        runner2._currentTaskTimeout = void 0;
        clearTimeout2(timer);
        reject_(error);
      }
      try {
        const result = fn2(...args);
        if (typeof result === "object" && result != null && typeof result.then === "function") {
          result.then(resolve4, reject);
        } else {
          resolve4(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
}
var abortControllers = /* @__PURE__ */ new WeakMap();
function abortIfTimeout([context], error) {
  if (context) {
    abortContextSignal(context, error);
  }
}
function abortContextSignal(context, error) {
  const abortController = abortControllers.get(context);
  abortController === null || abortController === void 0 ? void 0 : abortController.abort(error);
}
function createTestContext(test5, runner2) {
  var _runner$extendTaskCon;
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  let abortController = abortControllers.get(context);
  if (!abortController) {
    abortController = new AbortController();
    abortControllers.set(context, abortController);
  }
  context.signal = abortController.signal;
  context.task = test5;
  context.skip = (condition, note) => {
    if (condition === false) {
      return void 0;
    }
    test5.result ?? (test5.result = { state: "skip" });
    test5.result.pending = true;
    throw new PendingError("test is skipped; abort execution", test5, typeof condition === "string" ? condition : note);
  };
  async function annotate(message, location, type3, attachment) {
    const annotation = {
      message,
      type: type3 || "notice"
    };
    if (attachment) {
      if (!attachment.body && !attachment.path) {
        throw new TypeError(`Test attachment requires body or path to be set. Both are missing.`);
      }
      if (attachment.body && attachment.path) {
        throw new TypeError(`Test attachment requires only one of "body" or "path" to be set. Both are specified.`);
      }
      annotation.attachment = attachment;
      if (attachment.body instanceof Uint8Array) {
        attachment.body = encodeUint8Array(attachment.body);
      }
    }
    if (location) {
      annotation.location = location;
    }
    if (!runner2.onTestAnnotate) {
      throw new Error(`Test runner doesn't support test annotations.`);
    }
    await finishSendTasksUpdate(runner2);
    const resolvedAnnotation = await runner2.onTestAnnotate(test5, annotation);
    test5.annotations.push(resolvedAnnotation);
    return resolvedAnnotation;
  }
  context.annotate = (message, type3, attachment) => {
    if (test5.result && test5.result.state !== "run") {
      throw new Error(`Cannot annotate tests outside of the test run. The test "${test5.name}" finished running with the "${test5.result.state}" state already.`);
    }
    let location;
    const stack = new Error("STACK_TRACE").stack;
    const index2 = stack.includes("STACK_TRACE") ? 2 : 1;
    const stackLine = stack.split("\n")[index2];
    const parsed = parseSingleStack(stackLine);
    if (parsed) {
      location = {
        file: parsed.file,
        line: parsed.line,
        column: parsed.column
      };
    }
    if (typeof type3 === "object") {
      return recordAsyncAnnotation(test5, annotate(message, location, void 0, type3));
    } else {
      return recordAsyncAnnotation(test5, annotate(message, location, type3, attachment));
    }
  };
  context.onTestFailed = (handler, timeout) => {
    test5.onFailed || (test5.onFailed = []);
    test5.onFailed.push(withTimeout(handler, timeout ?? runner2.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
  };
  context.onTestFinished = (handler, timeout) => {
    test5.onFinished || (test5.onFinished = []);
    test5.onFinished.push(withTimeout(handler, timeout ?? runner2.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
  };
  return ((_runner$extendTaskCon = runner2.extendTaskContext) === null || _runner$extendTaskCon === void 0 ? void 0 : _runner$extendTaskCon.call(runner2, context)) || context;
}
function makeTimeoutError(isHook, timeout, stackTraceError) {
  const message = `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
  const error = new Error(message);
  if (stackTraceError === null || stackTraceError === void 0 ? void 0 : stackTraceError.stack) {
    error.stack = stackTraceError.stack.replace(error.message, stackTraceError.message);
  }
  return error;
}
var fileContexts = /* @__PURE__ */ new WeakMap();
function getFileContext(file) {
  const context = fileContexts.get(file);
  if (!context) {
    throw new Error(`Cannot find file context for ${file.name}`);
  }
  return context;
}
var table = [];
for (let i = 65; i < 91; i++) {
  table.push(String.fromCharCode(i));
}
for (let i = 97; i < 123; i++) {
  table.push(String.fromCharCode(i));
}
for (let i = 0; i < 10; i++) {
  table.push(i.toString(10));
}
function encodeUint8Array(bytes) {
  let base64 = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 3) {
    if (len === i + 1) {
      const a3 = (bytes[i] & 252) >> 2;
      const b = (bytes[i] & 3) << 4;
      base64 += table[a3];
      base64 += table[b];
      base64 += "==";
    } else if (len === i + 2) {
      const a3 = (bytes[i] & 252) >> 2;
      const b = (bytes[i] & 3) << 4 | (bytes[i + 1] & 240) >> 4;
      const c = (bytes[i + 1] & 15) << 2;
      base64 += table[a3];
      base64 += table[b];
      base64 += table[c];
      base64 += "=";
    } else {
      const a3 = (bytes[i] & 252) >> 2;
      const b = (bytes[i] & 3) << 4 | (bytes[i + 1] & 240) >> 4;
      const c = (bytes[i + 1] & 15) << 2 | (bytes[i + 2] & 192) >> 6;
      const d = bytes[i + 2] & 63;
      base64 += table[a3];
      base64 += table[b];
      base64 += table[c];
      base64 += table[d];
    }
  }
  return base64;
}
function recordAsyncAnnotation(test5, promise) {
  promise = promise.finally(() => {
    if (!test5.promises) {
      return;
    }
    const index2 = test5.promises.indexOf(promise);
    if (index2 !== -1) {
      test5.promises.splice(index2, 1);
    }
  });
  if (!test5.promises) {
    test5.promises = [];
  }
  test5.promises.push(promise);
  return promise;
}
function getDefaultHookTimeout() {
  return getRunner().config.hookTimeout;
}
var CLEANUP_TIMEOUT_KEY = Symbol.for("VITEST_CLEANUP_TIMEOUT");
var CLEANUP_STACK_TRACE_KEY = Symbol.for("VITEST_CLEANUP_STACK_TRACE");
function beforeEach(fn2, timeout = getDefaultHookTimeout()) {
  assertTypes(fn2, '"beforeEach" callback', ["function"]);
  const stackTraceError = new Error("STACK_TRACE_ERROR");
  const runner2 = getRunner();
  return getCurrentSuite().on("beforeEach", Object.assign(withTimeout(withFixtures(runner2, fn2), timeout ?? getDefaultHookTimeout(), true, stackTraceError, abortIfTimeout), {
    [CLEANUP_TIMEOUT_KEY]: timeout,
    [CLEANUP_STACK_TRACE_KEY]: stackTraceError
  }));
}
function afterEach(fn2, timeout) {
  assertTypes(fn2, '"afterEach" callback', ["function"]);
  const runner2 = getRunner();
  return getCurrentSuite().on("afterEach", withTimeout(withFixtures(runner2, fn2), timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
}
var onTestFailed = createTestHook("onTestFailed", (test5, handler, timeout) => {
  test5.onFailed || (test5.onFailed = []);
  test5.onFailed.push(withTimeout(handler, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
});
var onTestFinished = createTestHook("onTestFinished", (test5, handler, timeout) => {
  test5.onFinished || (test5.onFinished = []);
  test5.onFinished.push(withTimeout(handler, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
});
function createTestHook(name, handler) {
  return (fn2, timeout) => {
    assertTypes(fn2, `"${name}" callback`, ["function"]);
    const current = getCurrentTest();
    if (!current) {
      throw new Error(`Hook ${name}() can only be called inside a test`);
    }
    return handler(current, fn2, timeout);
  };
}
var NAME_WORKER_STATE = "__vitest_worker__";
function getWorkerState() {
  const workerState = globalThis[NAME_WORKER_STATE];
  if (!workerState) {
    const errorMsg = 'Vitest failed to access its internal state.\n\nOne of the following is possible:\n- "vitest" is imported directly without running "vitest" command\n- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)\n- "vitest" is imported inside Vite / Vitest config file\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n';
    throw new Error(errorMsg);
  }
  return workerState;
}
function getCurrentEnvironment() {
  const state = getWorkerState();
  return state?.environment.name;
}
function isChildProcess() {
  return typeof process !== "undefined" && !!process.send;
}
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    /vitest-virtual-\w+\/dist/,
    /@vitest\/dist/,
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((mod, path2) => {
    if (skipPaths.some((re) => re.test(path2))) return;
    modules.invalidateModule(mod);
  });
}
function waitNextTick() {
  const { setTimeout: setTimeout2 } = getSafeTimers();
  return new Promise((resolve4) => setTimeout2(resolve4, 0));
}
async function waitForImportsToResolve() {
  await waitNextTick();
  const state = getWorkerState();
  const promises = [];
  let resolvingCount = 0;
  for (const mod of state.moduleCache.values()) {
    if (mod.promise && !mod.evaluated) promises.push(mod.promise);
    if (mod.resolving) resolvingCount++;
  }
  if (!promises.length && !resolvingCount) return;
  await Promise.allSettled(promises);
  await waitForImportsToResolve();
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs3(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var comma2 = ",".charCodeAt(0);
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar2 = new Uint8Array(64);
var charToInt2 = new Uint8Array(128);
for (let i = 0; i < chars2.length; i++) {
  const c = chars2.charCodeAt(i);
  intToChar2[i] = c;
  charToInt2[c] = i;
}
function decodeInteger(reader, relative2) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = reader.next();
    integer = charToInt2[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  return relative2 + value;
}
function hasMoreVlq(reader, max) {
  if (reader.pos >= max)
    return false;
  return reader.peek() !== comma2;
}
var StringReader = class {
  constructor(buffer) {
    this.pos = 0;
    this.buffer = buffer;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(char) {
    const { buffer, pos } = this;
    const idx = buffer.indexOf(char, pos);
    return idx === -1 ? buffer.length : idx;
  }
};
function decode(mappings) {
  const { length } = mappings;
  const reader = new StringReader(mappings);
  const decoded = [];
  let genColumn = 0;
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  do {
    const semi = reader.indexOf(";");
    const line = [];
    let sorted = true;
    let lastCol = 0;
    genColumn = 0;
    while (reader.pos < semi) {
      let seg;
      genColumn = decodeInteger(reader, genColumn);
      if (genColumn < lastCol)
        sorted = false;
      lastCol = genColumn;
      if (hasMoreVlq(reader, semi)) {
        sourcesIndex = decodeInteger(reader, sourcesIndex);
        sourceLine = decodeInteger(reader, sourceLine);
        sourceColumn = decodeInteger(reader, sourceColumn);
        if (hasMoreVlq(reader, semi)) {
          namesIndex = decodeInteger(reader, namesIndex);
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
        } else {
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
        }
      } else {
        seg = [genColumn];
      }
      line.push(seg);
      reader.pos++;
    }
    if (!sorted)
      sort(line);
    decoded.push(line);
    reader.pos = semi + 1;
  } while (reader.pos <= length);
  return decoded;
}
function sort(line) {
  line.sort(sortComparator$1);
}
function sortComparator$1(a3, b) {
  return a3[0] - b[0];
}
var schemeRegex = /^[\w+.-]+:\/\//;
var urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var UrlType2;
(function(UrlType3) {
  UrlType3[UrlType3["Empty"] = 1] = "Empty";
  UrlType3[UrlType3["Hash"] = 2] = "Hash";
  UrlType3[UrlType3["Query"] = 3] = "Query";
  UrlType3[UrlType3["RelativePath"] = 4] = "RelativePath";
  UrlType3[UrlType3["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType3[UrlType3["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType3[UrlType3["Absolute"] = 7] = "Absolute";
})(UrlType2 || (UrlType2 = {}));
function isAbsoluteUrl(input) {
  return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
  return input.startsWith("//");
}
function isAbsolutePath(input) {
  return input.startsWith("/");
}
function isFileUrl(input) {
  return input.startsWith("file:");
}
function isRelative(input) {
  return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
  const match = urlRegex.exec(input);
  return makeUrl(match[1], match[2] || "", match[3], match[4] || "", match[5] || "/", match[6] || "", match[7] || "");
}
function parseFileUrl(input) {
  const match = fileRegex.exec(input);
  const path2 = match[2];
  return makeUrl("file:", "", match[1] || "", "", isAbsolutePath(path2) ? path2 : "/" + path2, match[3] || "", match[4] || "");
}
function makeUrl(scheme, user, host, port, path2, query, hash) {
  return {
    scheme,
    user,
    host,
    port,
    path: path2,
    query,
    hash,
    type: UrlType2.Absolute
  };
}
function parseUrl(input) {
  if (isSchemeRelativeUrl(input)) {
    const url2 = parseAbsoluteUrl("http:" + input);
    url2.scheme = "";
    url2.type = UrlType2.SchemeRelative;
    return url2;
  }
  if (isAbsolutePath(input)) {
    const url2 = parseAbsoluteUrl("http://foo.com" + input);
    url2.scheme = "";
    url2.host = "";
    url2.type = UrlType2.AbsolutePath;
    return url2;
  }
  if (isFileUrl(input))
    return parseFileUrl(input);
  if (isAbsoluteUrl(input))
    return parseAbsoluteUrl(input);
  const url = parseAbsoluteUrl("http://foo.com/" + input);
  url.scheme = "";
  url.host = "";
  url.type = input ? input.startsWith("?") ? UrlType2.Query : input.startsWith("#") ? UrlType2.Hash : UrlType2.RelativePath : UrlType2.Empty;
  return url;
}
function stripPathFilename(path2) {
  if (path2.endsWith("/.."))
    return path2;
  const index2 = path2.lastIndexOf("/");
  return path2.slice(0, index2 + 1);
}
function mergePaths(url, base) {
  normalizePath(base, base.type);
  if (url.path === "/") {
    url.path = base.path;
  } else {
    url.path = stripPathFilename(base.path) + url.path;
  }
}
function normalizePath(url, type3) {
  const rel = type3 <= UrlType2.RelativePath;
  const pieces = url.path.split("/");
  let pointer = 1;
  let positive = 0;
  let addTrailingSlash = false;
  for (let i = 1; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) {
      addTrailingSlash = true;
      continue;
    }
    addTrailingSlash = false;
    if (piece === ".")
      continue;
    if (piece === "..") {
      if (positive) {
        addTrailingSlash = true;
        positive--;
        pointer--;
      } else if (rel) {
        pieces[pointer++] = piece;
      }
      continue;
    }
    pieces[pointer++] = piece;
    positive++;
  }
  let path2 = "";
  for (let i = 1; i < pointer; i++) {
    path2 += "/" + pieces[i];
  }
  if (!path2 || addTrailingSlash && !path2.endsWith("/..")) {
    path2 += "/";
  }
  url.path = path2;
}
function resolve$1(input, base) {
  if (!input && !base)
    return "";
  const url = parseUrl(input);
  let inputType = url.type;
  if (base && inputType !== UrlType2.Absolute) {
    const baseUrl = parseUrl(base);
    const baseType = baseUrl.type;
    switch (inputType) {
      case UrlType2.Empty:
        url.hash = baseUrl.hash;
      // fall through
      case UrlType2.Hash:
        url.query = baseUrl.query;
      // fall through
      case UrlType2.Query:
      case UrlType2.RelativePath:
        mergePaths(url, baseUrl);
      // fall through
      case UrlType2.AbsolutePath:
        url.user = baseUrl.user;
        url.host = baseUrl.host;
        url.port = baseUrl.port;
      // fall through
      case UrlType2.SchemeRelative:
        url.scheme = baseUrl.scheme;
    }
    if (baseType > inputType)
      inputType = baseType;
  }
  normalizePath(url, inputType);
  const queryHash = url.query + url.hash;
  switch (inputType) {
    // This is impossible, because of the empty checks at the start of the function.
    // case UrlType.Empty:
    case UrlType2.Hash:
    case UrlType2.Query:
      return queryHash;
    case UrlType2.RelativePath: {
      const path2 = url.path.slice(1);
      if (!path2)
        return queryHash || ".";
      if (isRelative(base || input) && !isRelative(path2)) {
        return "./" + path2 + queryHash;
      }
      return path2 + queryHash;
    }
    case UrlType2.AbsolutePath:
      return url.path + queryHash;
    default:
      return url.scheme + "//" + url.user + url.host + url.port + url.path + queryHash;
  }
}
function resolve3(input, base) {
  if (base && !base.endsWith("/"))
    base += "/";
  return resolve$1(input, base);
}
function stripFilename(path2) {
  if (!path2)
    return "";
  const index2 = path2.lastIndexOf("/");
  return path2.slice(0, index2 + 1);
}
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
function maybeSort(mappings, owned) {
  const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
  if (unsortedIndex === mappings.length)
    return mappings;
  if (!owned)
    mappings = mappings.slice();
  for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
    mappings[i] = sortSegments(mappings[i], owned);
  }
  return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
  for (let i = start; i < mappings.length; i++) {
    if (!isSorted(mappings[i]))
      return i;
  }
  return mappings.length;
}
function isSorted(line) {
  for (let j = 1; j < line.length; j++) {
    if (line[j][COLUMN] < line[j - 1][COLUMN]) {
      return false;
    }
  }
  return true;
}
function sortSegments(line, owned) {
  if (!owned)
    line = line.slice();
  return line.sort(sortComparator);
}
function sortComparator(a3, b) {
  return a3[COLUMN] - b[COLUMN];
}
var found = false;
function binarySearch(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN] - needle;
    if (cmp === 0) {
      found = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found = false;
  return low - 1;
}
function upperBound(haystack, needle, index2) {
  for (let i = index2 + 1; i < haystack.length; index2 = i++) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index2;
}
function lowerBound(haystack, needle, index2) {
  for (let i = index2 - 1; i >= 0; index2 = i--) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index2;
}
function memoizedState() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch(haystack, needle, low, high);
}
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var TraceMap = class {
  constructor(map2, mapUrl) {
    const isString = typeof map2 === "string";
    if (!isString && map2._decodedMemo)
      return map2;
    const parsed = isString ? JSON.parse(map2) : map2;
    const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
    this.version = version;
    this.file = file;
    this.names = names || [];
    this.sourceRoot = sourceRoot;
    this.sources = sources;
    this.sourcesContent = sourcesContent;
    this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
    const from = resolve3(sourceRoot || "", stripFilename(mapUrl));
    this.resolvedSources = sources.map((s2) => resolve3(s2 || "", from));
    const { mappings } = parsed;
    if (typeof mappings === "string") {
      this._encoded = mappings;
      this._decoded = void 0;
    } else {
      this._encoded = void 0;
      this._decoded = maybeSort(mappings, isString);
    }
    this._decodedMemo = memoizedState();
    this._bySources = void 0;
    this._bySourceMemos = void 0;
  }
};
function cast(map2) {
  return map2;
}
function decodedMappings(map2) {
  var _a;
  return (_a = cast(map2))._decoded || (_a._decoded = decode(cast(map2)._encoded));
}
function originalPositionFor(map2, needle) {
  let { line, column, bias } = needle;
  line--;
  if (line < 0)
    throw new Error(LINE_GTR_ZERO);
  if (column < 0)
    throw new Error(COL_GTR_EQ_ZERO);
  const decoded = decodedMappings(map2);
  if (line >= decoded.length)
    return OMapping(null, null, null, null);
  const segments = decoded[line];
  const index2 = traceSegmentInternal(segments, cast(map2)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
  if (index2 === -1)
    return OMapping(null, null, null, null);
  const segment = segments[index2];
  if (segment.length === 1)
    return OMapping(null, null, null, null);
  const { names, resolvedSources } = map2;
  return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
}
function OMapping(source, line, column, name) {
  return { source, line, column, name };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index2 = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index2 = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index2);
  } else if (bias === LEAST_UPPER_BOUND)
    index2++;
  if (index2 === -1 || index2 === segments.length)
    return -1;
  return index2;
}
function notNullish2(v) {
  return v != null;
}
function isPrimitive3(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
}
function isObject2(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function getCallLastIndex2(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char) {
        inString = null;
      } else if (!inString) {
        inString = char;
      }
    }
    if (!inString) {
      if (char === "(") {
        startedBracers++;
      }
      if (char === ")") {
        endedBracers++;
      }
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers) {
      return charIndex;
    }
  }
  return null;
}
var CHROME_IE_STACK_REGEXP2 = /^\s*at .*(?:\S:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP2 = /^(?:eval@)?(?:\[native code\])?$/;
var stackIgnorePatterns = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chunk-",
  "/deps/@vitest",
  "/deps/loupe",
  "/deps/chai",
  /node:\w+/,
  /__vitest_test__/,
  /__vitest_browser__/,
  /\/deps\/vitest_/
];
function extractLocation2(urlLike) {
  if (!urlLike.includes(":")) {
    return [urlLike];
  }
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts) {
    return [urlLike];
  }
  let url = parts[1];
  if (url.startsWith("async ")) {
    url = url.slice(6);
  }
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    urlObj.searchParams.delete("import");
    urlObj.searchParams.delete("browserv");
    url = urlObj.pathname + urlObj.hash + urlObj.search;
  }
  if (url.startsWith("/@fs/")) {
    const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
    url = url.slice(isWindows ? 5 : 4);
  }
  return [
    url,
    parts[2] || void 0,
    parts[3] || void 0
  ];
}
function parseSingleFFOrSafariStack2(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP2.test(line)) {
    return null;
  }
  if (line.includes(" > eval")) {
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  }
  if (!line.includes("@") && !line.includes(":")) {
    return null;
  }
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(@)/;
  const matches = line.match(functionNameRegex);
  const functionName2 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation2(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber) {
    return null;
  }
  return {
    file: url,
    method: functionName2 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleV8Stack2(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP2.test(line)) {
    return null;
  }
  if (line.includes("(eval ")) {
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  }
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation2(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber) {
    return null;
  }
  if (method.startsWith("async ")) {
    method = method.slice(6);
  }
  if (file.startsWith("file://")) {
    file = file.slice(7);
  }
  file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve2(file);
  if (method) {
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  }
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseStacktrace(stack, options = {}) {
  const { ignoreStackEntries = stackIgnorePatterns } = options;
  const stacks = !CHROME_IE_STACK_REGEXP2.test(stack) ? parseFFOrSafariStackTrace(stack) : parseV8Stacktrace(stack);
  return stacks.map((stack2) => {
    var _options$getSourceMap;
    if (options.getUrlId) {
      stack2.file = options.getUrlId(stack2.file);
    }
    const map2 = (_options$getSourceMap = options.getSourceMap) === null || _options$getSourceMap === void 0 ? void 0 : _options$getSourceMap.call(options, stack2.file);
    if (!map2 || typeof map2 !== "object" || !map2.version) {
      return shouldFilter(ignoreStackEntries, stack2.file) ? null : stack2;
    }
    const traceMap = new TraceMap(map2);
    const { line, column, source, name } = originalPositionFor(traceMap, stack2);
    let file = stack2.file;
    if (source) {
      const fileUrl = stack2.file.startsWith("file://") ? stack2.file : `file://${stack2.file}`;
      const sourceRootUrl = map2.sourceRoot ? new URL(map2.sourceRoot, fileUrl) : fileUrl;
      file = new URL(source, sourceRootUrl).pathname;
      if (file.match(/\/\w:\//)) {
        file = file.slice(1);
      }
    }
    if (shouldFilter(ignoreStackEntries, file)) {
      return null;
    }
    if (line != null && column != null) {
      return {
        line,
        column,
        file,
        method: name || stack2.method
      };
    }
    return stack2;
  }).filter((s2) => s2 != null);
}
function shouldFilter(ignoreStackEntries, file) {
  return ignoreStackEntries.some((p3) => file.match(p3));
}
function parseFFOrSafariStackTrace(stack) {
  return stack.split("\n").map((line) => parseSingleFFOrSafariStack2(line)).filter(notNullish2);
}
function parseV8Stacktrace(stack) {
  return stack.split("\n").map((line) => parseSingleV8Stack2(line)).filter(notNullish2);
}
function parseErrorStacktrace(e, options = {}) {
  if (!e || isPrimitive3(e)) {
    return [];
  }
  if (e.stacks) {
    return e.stacks;
  }
  const stackStr = e.stack || "";
  let stackFrames = typeof stackStr === "string" ? parseStacktrace(stackStr, options) : [];
  if (!stackFrames.length) {
    const e_ = e;
    if (e_.fileName != null && e_.lineNumber != null && e_.columnNumber != null) {
      stackFrames = parseStacktrace(`${e_.fileName}:${e_.lineNumber}:${e_.columnNumber}`, options);
    }
    if (e_.sourceURL != null && e_.line != null && e_._column != null) {
      stackFrames = parseStacktrace(`${e_.sourceURL}:${e_.line}:${e_.column}`, options);
    }
  }
  if (options.frameFilter) {
    stackFrames = stackFrames.filter((f3) => options.frameFilter(e, f3) !== false);
  }
  e.stacks = stackFrames;
  return stackFrames;
}
var getPromiseValue3 = () => "Promise{\u2026}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue3 = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
var { AsymmetricMatcher: AsymmetricMatcher$1, DOMCollection: DOMCollection$1, DOMElement: DOMElement$1, Immutable: Immutable$1, ReactElement: ReactElement$1, ReactTestComponent: ReactTestComponent$1 } = plugins;
function getDefaultExportFromCjs4(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsTokens_12;
var hasRequiredJsTokens2;
function requireJsTokens2() {
  if (hasRequiredJsTokens2) return jsTokens_12;
  hasRequiredJsTokens2 = 1;
  var Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
  RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
  Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
  StringLiteral = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;
  NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  Template = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
  LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
  MultiLineComment = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;
  SingleLineComment = /\/\/.*/y;
  JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
  JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
  JSXString = /(['"])(?:(?!\1)[^])*(\1)?/y;
  JSXText = /[^<>{}]+/y;
  TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
  Newline = RegExp(LineTerminatorSequence.source);
  jsTokens_12 = function* (input, { jsx = false } = {}) {
    var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
    ({ length } = input);
    lastIndex = 0;
    lastSignificantToken = "";
    stack = [
      { tag: "JS" }
    ];
    braces = [];
    parenNesting = 0;
    postfixIncDec = false;
    while (lastIndex < length) {
      mode = stack[stack.length - 1];
      switch (mode.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
            RegularExpressionLiteral.lastIndex = lastIndex;
            if (match = RegularExpressionLiteral.exec(input)) {
              lastIndex = RegularExpressionLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "RegularExpressionLiteral",
                value: match[0],
                closed: match[1] !== void 0 && match[1] !== "\\"
              };
              continue;
            }
          }
          Punctuator.lastIndex = lastIndex;
          if (match = Punctuator.exec(input)) {
            punctuator = match[0];
            nextLastIndex = Punctuator.lastIndex;
            nextLastSignificantToken = punctuator;
            switch (punctuator) {
              case "(":
                if (lastSignificantToken === "?NonExpressionParenKeyword") {
                  stack.push({
                    tag: "JSNonExpressionParen",
                    nesting: parenNesting
                  });
                }
                parenNesting++;
                postfixIncDec = false;
                break;
              case ")":
                parenNesting--;
                postfixIncDec = true;
                if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                  stack.pop();
                  nextLastSignificantToken = "?NonExpressionParenEnd";
                  postfixIncDec = false;
                }
                break;
              case "{":
                Punctuator.lastIndex = 0;
                isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                braces.push(isExpression);
                postfixIncDec = false;
                break;
              case "}":
                switch (mode.tag) {
                  case "InterpolationInTemplate":
                    if (braces.length === mode.nesting) {
                      Template.lastIndex = lastIndex;
                      match = Template.exec(input);
                      lastIndex = Template.lastIndex;
                      lastSignificantToken = match[0];
                      if (match[1] === "${") {
                        lastSignificantToken = "?InterpolationInTemplate";
                        postfixIncDec = false;
                        yield {
                          type: "TemplateMiddle",
                          value: match[0]
                        };
                      } else {
                        stack.pop();
                        postfixIncDec = true;
                        yield {
                          type: "TemplateTail",
                          value: match[0],
                          closed: match[1] === "`"
                        };
                      }
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (braces.length === mode.nesting) {
                      stack.pop();
                      lastIndex += 1;
                      lastSignificantToken = "}";
                      yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                postfixIncDec = braces.pop();
                nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                postfixIncDec = true;
                break;
              case "++":
              case "--":
                nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                  stack.push({ tag: "JSXTag" });
                  lastIndex += 1;
                  lastSignificantToken = "<";
                  yield {
                    type: "JSXPunctuator",
                    value: punctuator
                  };
                  continue;
                }
                postfixIncDec = false;
                break;
              default:
                postfixIncDec = false;
            }
            lastIndex = nextLastIndex;
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "Punctuator",
              value: punctuator
            };
            continue;
          }
          Identifier.lastIndex = lastIndex;
          if (match = Identifier.exec(input)) {
            lastIndex = Identifier.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                  nextLastSignificantToken = "?NonExpressionParenKeyword";
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
            yield {
              type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: match[0]
            };
            continue;
          }
          StringLiteral.lastIndex = lastIndex;
          if (match = StringLiteral.exec(input)) {
            lastIndex = StringLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "StringLiteral",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          NumericLiteral.lastIndex = lastIndex;
          if (match = NumericLiteral.exec(input)) {
            lastIndex = NumericLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "NumericLiteral",
              value: match[0]
            };
            continue;
          }
          Template.lastIndex = lastIndex;
          if (match = Template.exec(input)) {
            lastIndex = Template.lastIndex;
            lastSignificantToken = match[0];
            if (match[1] === "${") {
              lastSignificantToken = "?InterpolationInTemplate";
              stack.push({
                tag: "InterpolationInTemplate",
                nesting: braces.length
              });
              postfixIncDec = false;
              yield {
                type: "TemplateHead",
                value: match[0]
              };
            } else {
              postfixIncDec = true;
              yield {
                type: "NoSubstitutionTemplate",
                value: match[0],
                closed: match[1] === "`"
              };
            }
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          JSXPunctuator.lastIndex = lastIndex;
          if (match = JSXPunctuator.exec(input)) {
            lastIndex = JSXPunctuator.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "<":
                stack.push({ tag: "JSXTag" });
                break;
              case ">":
                stack.pop();
                if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                  nextLastSignificantToken = "?JSX";
                  postfixIncDec = true;
                } else {
                  stack.push({ tag: "JSXChildren" });
                }
                break;
              case "{":
                stack.push({
                  tag: "InterpolationInJSX",
                  nesting: braces.length
                });
                nextLastSignificantToken = "?InterpolationInJSX";
                postfixIncDec = false;
                break;
              case "/":
                if (lastSignificantToken === "<") {
                  stack.pop();
                  if (stack[stack.length - 1].tag === "JSXChildren") {
                    stack.pop();
                  }
                  stack.push({ tag: "JSXTagEnd" });
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "JSXPunctuator",
              value: match[0]
            };
            continue;
          }
          JSXIdentifier.lastIndex = lastIndex;
          if (match = JSXIdentifier.exec(input)) {
            lastIndex = JSXIdentifier.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXIdentifier",
              value: match[0]
            };
            continue;
          }
          JSXString.lastIndex = lastIndex;
          if (match = JSXString.exec(input)) {
            lastIndex = JSXString.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXString",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          JSXText.lastIndex = lastIndex;
          if (match = JSXText.exec(input)) {
            lastIndex = JSXText.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXText",
              value: match[0]
            };
            continue;
          }
          switch (input[lastIndex]) {
            case "<":
              stack.push({ tag: "JSXTag" });
              lastIndex++;
              lastSignificantToken = "<";
              yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              stack.push({
                tag: "InterpolationInJSX",
                nesting: braces.length
              });
              lastIndex++;
              lastSignificantToken = "?InterpolationInJSX";
              postfixIncDec = false;
              yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      WhiteSpace.lastIndex = lastIndex;
      if (match = WhiteSpace.exec(input)) {
        lastIndex = WhiteSpace.lastIndex;
        yield {
          type: "WhiteSpace",
          value: match[0]
        };
        continue;
      }
      LineTerminatorSequence.lastIndex = lastIndex;
      if (match = LineTerminatorSequence.exec(input)) {
        lastIndex = LineTerminatorSequence.lastIndex;
        postfixIncDec = false;
        if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
          lastSignificantToken = "?NoLineTerminatorHere";
        }
        yield {
          type: "LineTerminatorSequence",
          value: match[0]
        };
        continue;
      }
      MultiLineComment.lastIndex = lastIndex;
      if (match = MultiLineComment.exec(input)) {
        lastIndex = MultiLineComment.lastIndex;
        if (Newline.test(match[0])) {
          postfixIncDec = false;
          if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
            lastSignificantToken = "?NoLineTerminatorHere";
          }
        }
        yield {
          type: "MultiLineComment",
          value: match[0],
          closed: match[1] !== void 0
        };
        continue;
      }
      SingleLineComment.lastIndex = lastIndex;
      if (match = SingleLineComment.exec(input)) {
        lastIndex = SingleLineComment.lastIndex;
        postfixIncDec = false;
        yield {
          type: "SingleLineComment",
          value: match[0]
        };
        continue;
      }
      firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
      lastIndex += firstCodePoint.length;
      lastSignificantToken = firstCodePoint;
      postfixIncDec = false;
      yield {
        type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: firstCodePoint
      };
    }
    return void 0;
  };
  return jsTokens_12;
}
requireJsTokens2();
var reservedWords2 = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(reservedWords2.keyword);
new Set(reservedWords2.strict);
var f2 = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
var h2 = Object.entries(f2);
function a2(n) {
  return String(n);
}
a2.open = "";
a2.close = "";
function C2(n = false) {
  let e = typeof process != "undefined" ? process : void 0, i = (e == null ? void 0 : e.env) || {}, g = (e == null ? void 0 : e.argv) || [];
  return !("NO_COLOR" in i || g.includes("--no-color")) && ("FORCE_COLOR" in i || g.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || n && i.TERM !== "dumb" || "CI" in i) || typeof window != "undefined" && !!window.chrome;
}
function p2(n = false) {
  let e = C2(n), i = (r2, t, c, o) => {
    let l = "", s2 = 0;
    do
      l += r2.substring(s2, o) + c, s2 = o + t.length, o = r2.indexOf(t, s2);
    while (~o);
    return l + r2.substring(s2);
  }, g = (r2, t, c = r2) => {
    let o = (l) => {
      let s2 = String(l), b = s2.indexOf(t, r2.length);
      return ~b ? r2 + i(s2, t, c, b) + t : r2 + s2 + t;
    };
    return o.open = r2, o.close = t, o;
  }, u2 = {
    isColorSupported: e
  }, d = (r2) => `\x1B[${r2}m`;
  for (let [r2, t] of h2)
    u2[r2] = e ? g(
      d(t[0]),
      d(t[1]),
      t[2]
    ) : a2;
  return u2;
}
p2();
var lineSplitRE = /\r?\n/;
function positionToOffset(source, lineNumber, columnNumber) {
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let start = 0;
  if (lineNumber > lines.length) {
    return source.length;
  }
  for (let i = 0; i < lineNumber - 1; i++) {
    start += lines[i].length + nl;
  }
  return start + columnNumber;
}
function offsetToLineNumber(source, offset) {
  if (offset > source.length) {
    throw new Error(`offset is longer than source length! offset ${offset} > length ${source.length}`);
  }
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let counted = 0;
  let line = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + nl;
    if (counted + lineLength >= offset) {
      break;
    }
    counted += lineLength;
  }
  return line + 1;
}
async function saveInlineSnapshots(environment, snapshots) {
  const MagicString = (await import("../magic-string.es-3WRPFX2A.js")).default;
  const files = new Set(snapshots.map((i) => i.file));
  await Promise.all(Array.from(files).map(async (file) => {
    const snaps = snapshots.filter((i) => i.file === file);
    const code = await environment.readSnapshotFile(file);
    const s2 = new MagicString(code);
    for (const snap of snaps) {
      const index2 = positionToOffset(code, snap.line, snap.column);
      replaceInlineSnap(code, s2, index2, snap.snapshot);
    }
    const transformed = s2.toString();
    if (transformed !== code) {
      await environment.saveSnapshotFile(file, transformed);
    }
  }));
}
var startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*\{/;
function replaceObjectSnap(code, s2, index2, newSnap) {
  let _code = code.slice(index2);
  const startMatch = startObjectRegex.exec(_code);
  if (!startMatch) {
    return false;
  }
  _code = _code.slice(startMatch.index);
  let callEnd = getCallLastIndex2(_code);
  if (callEnd === null) {
    return false;
  }
  callEnd += index2 + startMatch.index;
  const shapeStart = index2 + startMatch.index + startMatch[0].length;
  const shapeEnd = getObjectShapeEndIndex(code, shapeStart);
  const snap = `, ${prepareSnapString(newSnap, code, index2)}`;
  if (shapeEnd === callEnd) {
    s2.appendLeft(callEnd, snap);
  } else {
    s2.overwrite(shapeEnd, callEnd, snap);
  }
  return true;
}
function getObjectShapeEndIndex(code, index2) {
  let startBraces = 1;
  let endBraces = 0;
  while (startBraces !== endBraces && index2 < code.length) {
    const s2 = code[index2++];
    if (s2 === "{") {
      startBraces++;
    } else if (s2 === "}") {
      endBraces++;
    }
  }
  return index2;
}
function prepareSnapString(snap, source, index2) {
  const lineNumber = offsetToLineNumber(source, index2);
  const line = source.split(lineSplitRE)[lineNumber - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = "`";
  if (isOneline) {
    return `${quote}${lines.join("\n").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}${quote}`;
  }
  return `${quote}
${lines.map((i) => i ? indentNext + i : "").join("\n").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
${indent}${quote}`;
}
var toMatchInlineName = "toMatchInlineSnapshot";
var toThrowErrorMatchingInlineName = "toThrowErrorMatchingInlineSnapshot";
function getCodeStartingAtIndex(code, index2) {
  const indexInline = index2 - toMatchInlineName.length;
  if (code.slice(indexInline, index2) === toMatchInlineName) {
    return {
      code: code.slice(indexInline),
      index: indexInline
    };
  }
  const indexThrowInline = index2 - toThrowErrorMatchingInlineName.length;
  if (code.slice(index2 - indexThrowInline, index2) === toThrowErrorMatchingInlineName) {
    return {
      code: code.slice(index2 - indexThrowInline),
      index: index2 - indexThrowInline
    };
  }
  return {
    code: code.slice(index2),
    index: index2
  };
}
var startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*[\w$]*(['"`)])/;
function replaceInlineSnap(code, s2, currentIndex, newSnap) {
  const { code: codeStartingAtIndex, index: index2 } = getCodeStartingAtIndex(code, currentIndex);
  const startMatch = startRegex.exec(codeStartingAtIndex);
  const firstKeywordMatch = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(codeStartingAtIndex);
  if (!startMatch || startMatch.index !== (firstKeywordMatch === null || firstKeywordMatch === void 0 ? void 0 : firstKeywordMatch.index)) {
    return replaceObjectSnap(code, s2, index2, newSnap);
  }
  const quote = startMatch[1];
  const startIndex = index2 + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code, index2);
  if (quote === ")") {
    s2.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code.slice(startIndex));
  if (!endMatch) {
    return false;
  }
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s2.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
var INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i = 1; i < lines.length - 1; i++) {
    if (lines[i] !== "") {
      if (lines[i].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i] = lines[i].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
async function saveRawSnapshots(environment, snapshots) {
  await Promise.all(snapshots.map(async (snap) => {
    if (!snap.readonly) {
      await environment.saveSnapshotFile(snap.file, snap.snapshot);
    }
  }));
}
var naturalCompare$1 = { exports: {} };
var hasRequiredNaturalCompare;
function requireNaturalCompare() {
  if (hasRequiredNaturalCompare) return naturalCompare$1.exports;
  hasRequiredNaturalCompare = 1;
  var naturalCompare2 = function(a3, b) {
    var i, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
    function getCode(str, pos, code) {
      if (code) {
        for (i = pos; code = getCode(str, i), code < 76 && code > 65; ) ++i;
        return +str.slice(pos - 1, i);
      }
      code = alphabet && alphabet.indexOf(str.charAt(pos));
      return code > -1 ? code + 76 : (code = str.charCodeAt(pos) || 0, code < 45 || code > 127) ? code : code < 46 ? 65 : code < 48 ? code - 1 : code < 58 ? code + 18 : code < 65 ? code - 11 : code < 91 ? code + 11 : code < 97 ? code - 37 : code < 123 ? code + 5 : code - 63;
    }
    if ((a3 += "") != (b += "")) for (; codeB; ) {
      codeA = getCode(a3, posA++);
      codeB = getCode(b, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a3, posA, posA);
        codeB = getCode(b, posB, posA = i);
        posB = i;
      }
      if (codeA != codeB) return codeA < codeB ? -1 : 1;
    }
    return 0;
  };
  try {
    naturalCompare$1.exports = naturalCompare2;
  } catch (e) {
    String.naturalCompare = naturalCompare2;
  }
  return naturalCompare$1.exports;
}
var naturalCompareExports = requireNaturalCompare();
var naturalCompare = /* @__PURE__ */ getDefaultExportFromCjs4(naturalCompareExports);
var serialize$12 = (val, config2, indentation, depth, refs, printer2) => {
  const name = val.getMockName();
  const nameString = name === "vi.fn()" ? "" : ` ${name}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer2(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer2(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
var test4 = (val) => val && !!val._isMockFunction;
var plugin2 = {
  serialize: serialize$12,
  test: test4
};
var { DOMCollection: DOMCollection3, DOMElement: DOMElement3, Immutable: Immutable3, ReactElement: ReactElement3, ReactTestComponent: ReactTestComponent3, AsymmetricMatcher: AsymmetricMatcher4 } = plugins;
var PLUGINS3 = [
  ReactTestComponent3,
  ReactElement3,
  DOMElement3,
  DOMCollection3,
  Immutable3,
  AsymmetricMatcher4,
  plugin2
];
function addSerializer(plugin3) {
  PLUGINS3 = [plugin3].concat(PLUGINS3);
}
function getSerializers() {
  return PLUGINS3;
}
function testNameToKey(testName2, count) {
  return `${testName2} ${count}`;
}
function keyToTestName(key) {
  if (!/ \d+$/.test(key)) {
    throw new Error("Snapshot keys must end with a number.");
  }
  return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
  const update = options.updateSnapshot;
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (content != null) {
    try {
      snapshotContents = content;
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid) {
    dirty = true;
  }
  return {
    data,
    dirty
  };
}
function addExtraLineBreaks(string2) {
  return string2.includes("\n") ? `
${string2}
` : string2;
}
function removeExtraLineBreaks(string2) {
  return string2.length > 2 && string2.startsWith("\n") && string2.endsWith("\n") ? string2.slice(1, -1) : string2;
}
var escapeRegex = true;
var printFunctionName = false;
function serialize2(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(format(val, {
    escapeRegex,
    indent,
    plugins: getSerializers(),
    printFunctionName,
    ...formatOverrides
  }));
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\$\{/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
function normalizeNewlines(string2) {
  return string2.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(environment, snapshotData, snapshotPath) {
  const snapshots = Object.keys(snapshotData).sort(naturalCompare).map((key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`);
  const content = `${environment.getHeader()}

${snapshots.join("\n\n")}
`;
  const oldContent = await environment.readSnapshotFile(snapshotPath);
  const skipWriting = oldContent != null && oldContent === content;
  if (skipWriting) {
    return;
  }
  await environment.saveSnapshotFile(snapshotPath, content);
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index2) => {
    const targetElement = mergedOutput[index2];
    if (Array.isArray(target[index2])) {
      mergedOutput[index2] = deepMergeArray(target[index2], sourceElement);
    } else if (isObject2(targetElement)) {
      mergedOutput[index2] = deepMergeSnapshot(target[index2], sourceElement);
    } else {
      mergedOutput[index2] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject2(target) && isObject2(source)) {
    const mergedOutput = { ...target };
    Object.keys(source).forEach((key) => {
      if (isObject2(source[key]) && !source[key].$$typeof) {
        if (!(key in target)) {
          Object.assign(mergedOutput, { [key]: source[key] });
        } else {
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
        }
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
var DefaultMap = class extends Map {
  constructor(defaultFn, entries) {
    super(entries);
    this.defaultFn = defaultFn;
  }
  get(key) {
    if (!this.has(key)) {
      this.set(key, this.defaultFn(key));
    }
    return super.get(key);
  }
};
var CounterMap = class extends DefaultMap {
  constructor() {
    super(() => 0);
  }
  // compat for jest-image-snapshot https://github.com/vitest-dev/vitest/issues/7322
  // `valueOf` and `Snapshot.added` setter allows
  //   snapshotState.added = snapshotState.added + 1
  // to function as
  //   snapshotState.added.total_ = snapshotState.added.total() + 1
  _total;
  valueOf() {
    return this._total = this.total();
  }
  increment(key) {
    if (typeof this._total !== "undefined") {
      this._total++;
    }
    this.set(key, this.get(key) + 1);
  }
  total() {
    if (typeof this._total !== "undefined") {
      return this._total;
    }
    let total = 0;
    for (const x of this.values()) {
      total += x;
    }
    return total;
  }
};
function isSameStackPosition(x, y) {
  return x.file === y.file && x.column === y.column && x.line === y.line;
}
var SnapshotState = class _SnapshotState {
  _counters = new CounterMap();
  _dirty;
  _updateSnapshot;
  _snapshotData;
  _initialData;
  _inlineSnapshots;
  _inlineSnapshotStacks;
  _testIdToKeys = new DefaultMap(() => []);
  _rawSnapshots;
  _uncheckedKeys;
  _snapshotFormat;
  _environment;
  _fileExists;
  expand;
  // getter/setter for jest-image-snapshot compat
  // https://github.com/vitest-dev/vitest/issues/7322
  _added = new CounterMap();
  _matched = new CounterMap();
  _unmatched = new CounterMap();
  _updated = new CounterMap();
  get added() {
    return this._added;
  }
  set added(value) {
    this._added._total = value;
  }
  get matched() {
    return this._matched;
  }
  set matched(value) {
    this._matched._total = value;
  }
  get unmatched() {
    return this._unmatched;
  }
  set unmatched(value) {
    this._unmatched._total = value;
  }
  get updated() {
    return this._updated;
  }
  set updated(value) {
    this._updated._total = value;
  }
  constructor(testFilePath, snapshotPath, snapshotContent, options) {
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(snapshotContent, options);
    this._fileExists = snapshotContent != null;
    this._initialData = { ...data };
    this._snapshotData = { ...data };
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._inlineSnapshotStacks = [];
    this._rawSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this.expand = options.expand || false;
    this._updateSnapshot = options.updateSnapshot;
    this._snapshotFormat = {
      printBasicPrototype: false,
      escapeString: false,
      ...options.snapshotFormat
    };
    this._environment = options.snapshotEnvironment;
  }
  static async create(testFilePath, options) {
    const snapshotPath = await options.snapshotEnvironment.resolvePath(testFilePath);
    const content = await options.snapshotEnvironment.readSnapshotFile(snapshotPath);
    return new _SnapshotState(testFilePath, snapshotPath, content, options);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(testName2) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (/ \d+$| > /.test(uncheckedKey.slice(testName2.length))) {
        this._uncheckedKeys.delete(uncheckedKey);
      }
    });
  }
  clearTest(testId) {
    this._inlineSnapshots = this._inlineSnapshots.filter((s2) => s2.testId !== testId);
    this._inlineSnapshotStacks = this._inlineSnapshotStacks.filter((s2) => s2.testId !== testId);
    for (const key of this._testIdToKeys.get(testId)) {
      const name = keyToTestName(key);
      const count = this._counters.get(name);
      if (count > 0) {
        if (key in this._snapshotData || key in this._initialData) {
          this._snapshotData[key] = this._initialData[key];
        }
        this._counters.set(name, count - 1);
      }
    }
    this._testIdToKeys.delete(testId);
    this.added.delete(testId);
    this.updated.delete(testId);
    this.matched.delete(testId);
    this.unmatched.delete(testId);
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i) => i.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1) {
      return stacks[promiseIndex + 3];
    }
    const stackIndex = stacks.findIndex((i) => i.method.includes("__INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.stack) {
      this._inlineSnapshots.push({
        snapshot: receivedSerialized,
        testId: options.testId,
        ...options.stack
      });
    } else if (options.rawSnapshot) {
      this._rawSnapshots.push({
        ...options.rawSnapshot,
        snapshot: receivedSerialized
      });
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  async save() {
    const hasExternalSnapshots = Object.keys(this._snapshotData).length;
    const hasInlineSnapshots = this._inlineSnapshots.length;
    const hasRawSnapshots = this._rawSnapshots.length;
    const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
    const status = {
      deleted: false,
      saved: false
    };
    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      if (hasExternalSnapshots) {
        await saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
        this._fileExists = true;
      }
      if (hasInlineSnapshots) {
        await saveInlineSnapshots(this._environment, this._inlineSnapshots);
      }
      if (hasRawSnapshots) {
        await saveRawSnapshots(this._environment, this._rawSnapshots);
      }
      status.saved = true;
    } else if (!hasExternalSnapshots && this._fileExists) {
      if (this._updateSnapshot === "all") {
        await this._environment.removeSnapshotFile(this.snapshotPath);
        this._fileExists = false;
      }
      status.deleted = true;
    }
    return status;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({ testId, testName: testName2, received, key, inlineSnapshot, isInline, error, rawSnapshot }) {
    this._counters.increment(testName2);
    const count = this._counters.get(testName2);
    if (!key) {
      key = testNameToKey(testName2, count);
    }
    this._testIdToKeys.get(testId).push(key);
    if (!(isInline && this._snapshotData[key] !== void 0)) {
      this._uncheckedKeys.delete(key);
    }
    let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize2(received, void 0, this._snapshotFormat);
    if (!rawSnapshot) {
      receivedSerialized = addExtraLineBreaks(receivedSerialized);
    }
    if (rawSnapshot) {
      if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/)) {
        rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
      }
    }
    const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
    const expectedTrimmed = rawSnapshot ? expected : expected === null || expected === void 0 ? void 0 : expected.trim();
    const pass = expectedTrimmed === (rawSnapshot ? receivedSerialized : receivedSerialized.trim());
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
    if (pass && !isInline && !rawSnapshot) {
      this._snapshotData[key] = receivedSerialized;
    }
    let stack;
    if (isInline) {
      var _this$environment$pro, _this$environment;
      const stacks = parseErrorStacktrace(error || new Error("snapshot"), { ignoreStackEntries: [] });
      const _stack = this._inferInlineSnapshotStack(stacks);
      if (!_stack) {
        throw new Error(`@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`);
      }
      stack = ((_this$environment$pro = (_this$environment = this.environment).processStackTrace) === null || _this$environment$pro === void 0 ? void 0 : _this$environment$pro.call(_this$environment, _stack)) || _stack;
      stack.column--;
      const snapshotsWithSameStack = this._inlineSnapshotStacks.filter((s2) => isSameStackPosition(s2, stack));
      if (snapshotsWithSameStack.length > 0) {
        this._inlineSnapshots = this._inlineSnapshots.filter((s2) => !isSameStackPosition(s2, stack));
        const differentSnapshot = snapshotsWithSameStack.find((s2) => s2.snapshot !== receivedSerialized);
        if (differentSnapshot) {
          throw Object.assign(new Error("toMatchInlineSnapshot with different snapshots cannot be called at the same location"), {
            actual: receivedSerialized,
            expected: differentSnapshot.snapshot
          });
        }
      }
      this._inlineSnapshotStacks.push({
        ...stack,
        testId,
        snapshot: receivedSerialized
      });
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot) {
            this.updated.increment(testId);
          } else {
            this.added.increment(testId);
          }
          this._addSnapshot(key, receivedSerialized, {
            stack,
            testId,
            rawSnapshot
          });
        } else {
          this.matched.increment(testId);
        }
      } else {
        this._addSnapshot(key, receivedSerialized, {
          stack,
          testId,
          rawSnapshot
        });
        this.added.increment(testId);
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched.increment(testId);
        return {
          actual: rawSnapshot ? receivedSerialized : removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? rawSnapshot ? expectedTrimmed : removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched.increment(testId);
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  async pack() {
    const snapshot = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    };
    const uncheckedCount = this.getUncheckedCount();
    const uncheckedKeys = this.getUncheckedKeys();
    if (uncheckedCount) {
      this.removeUncheckedKeys();
    }
    const status = await this.save();
    snapshot.fileDeleted = status.deleted;
    snapshot.added = this.added.total();
    snapshot.matched = this.matched.total();
    snapshot.unmatched = this.unmatched.total();
    snapshot.updated = this.updated.total();
    snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
    snapshot.uncheckedKeys = Array.from(uncheckedKeys);
    return snapshot;
  }
};
function createMismatchError(message, expand, actual, expected) {
  const error = new Error(message);
  Object.defineProperty(error, "actual", {
    value: actual,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error, "expected", {
    value: expected,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error, "diffOptions", { value: { expand } });
  return error;
}
var SnapshotClient = class {
  snapshotStateMap = /* @__PURE__ */ new Map();
  constructor(options = {}) {
    this.options = options;
  }
  async setup(filepath, options) {
    if (this.snapshotStateMap.has(filepath)) {
      return;
    }
    this.snapshotStateMap.set(filepath, await SnapshotState.create(filepath, options));
  }
  async finish(filepath) {
    const state = this.getSnapshotState(filepath);
    const result = await state.pack();
    this.snapshotStateMap.delete(filepath);
    return result;
  }
  skipTest(filepath, testName2) {
    const state = this.getSnapshotState(filepath);
    state.markSnapshotsAsCheckedForTest(testName2);
  }
  clearTest(filepath, testId) {
    const state = this.getSnapshotState(filepath);
    state.clearTest(testId);
  }
  getSnapshotState(filepath) {
    const state = this.snapshotStateMap.get(filepath);
    if (!state) {
      throw new Error(`The snapshot state for '${filepath}' is not found. Did you call 'SnapshotClient.setup()'?`);
    }
    return state;
  }
  assert(options) {
    const { filepath, name, testId = name, message, isInline = false, properties, inlineSnapshot, error, errorMessage, rawSnapshot } = options;
    let { received } = options;
    if (!filepath) {
      throw new Error("Snapshot cannot be used outside of test");
    }
    const snapshotState = this.getSnapshotState(filepath);
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received) {
        throw new Error("Received value must be an object when the matcher has properties");
      }
      try {
        var _this$options$isEqual, _this$options;
        const pass2 = ((_this$options$isEqual = (_this$options = this.options).isEqual) === null || _this$options$isEqual === void 0 ? void 0 : _this$options$isEqual.call(_this$options, received, properties)) ?? false;
        if (!pass2) {
          throw createMismatchError("Snapshot properties mismatched", snapshotState.expand, received, properties);
        } else {
          received = deepMergeSnapshot(received, properties);
        }
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName2 = [name, ...message ? [message] : []].join(" > ");
    const { actual, expected, key, pass } = snapshotState.match({
      testId,
      testName: testName2,
      received,
      isInline,
      error,
      inlineSnapshot,
      rawSnapshot
    });
    if (!pass) {
      throw createMismatchError(`Snapshot \`${key || "unknown"}\` mismatched`, snapshotState.expand, rawSnapshot ? actual : actual === null || actual === void 0 ? void 0 : actual.trim(), rawSnapshot ? expected : expected === null || expected === void 0 ? void 0 : expected.trim());
    }
  }
  async assertRaw(options) {
    if (!options.rawSnapshot) {
      throw new Error("Raw snapshot is required");
    }
    const { filepath, rawSnapshot } = options;
    if (rawSnapshot.content == null) {
      if (!filepath) {
        throw new Error("Snapshot cannot be used outside of test");
      }
      const snapshotState = this.getSnapshotState(filepath);
      options.filepath || (options.filepath = filepath);
      rawSnapshot.file = await snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
      rawSnapshot.content = await snapshotState.environment.readSnapshotFile(rawSnapshot.file) ?? void 0;
    }
    return this.assert(options);
  }
  clear() {
    this.snapshotStateMap.clear();
  }
};
var RealDate = Date;
var now2 = null;
var MockDate = class _MockDate extends RealDate {
  constructor(y, m2, d, h3, M, s2, ms) {
    super();
    let date;
    switch (arguments.length) {
      case 0:
        if (now2 !== null) date = new RealDate(now2.valueOf());
        else date = new RealDate();
        break;
      case 1:
        date = new RealDate(y);
        break;
      default:
        d = typeof d === "undefined" ? 1 : d;
        h3 = h3 || 0;
        M = M || 0;
        s2 = s2 || 0;
        ms = ms || 0;
        date = new RealDate(y, m2, d, h3, M, s2, ms);
        break;
    }
    Object.setPrototypeOf(date, _MockDate.prototype);
    return date;
  }
};
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date) {
  const dateObj = new RealDate(date.valueOf());
  if (Number.isNaN(dateObj.getTime())) throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
  globalThis.Date = MockDate;
  now2 = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}
var unsupported = [
  "matchSnapshot",
  "toMatchSnapshot",
  "toMatchInlineSnapshot",
  "toThrowErrorMatchingSnapshot",
  "toThrowErrorMatchingInlineSnapshot",
  "throws",
  "Throw",
  "throw",
  "toThrow",
  "toThrowError"
];
function createExpectPoll(expect2) {
  return function poll(fn2, options = {}) {
    const state = getWorkerState();
    const defaults = state.config.expect?.poll ?? {};
    const { interval = defaults.interval ?? 50, timeout = defaults.timeout ?? 1e3, message } = options;
    const assertion = expect2(null, message).withContext({ poll: true });
    fn2 = fn2.bind(assertion);
    const test5 = utils_exports.flag(assertion, "vitest-test");
    if (!test5) throw new Error("expect.poll() must be called inside a test");
    const proxy = new Proxy(assertion, { get(target, key, receiver) {
      const assertionFunction = Reflect.get(target, key, receiver);
      if (typeof assertionFunction !== "function") return assertionFunction instanceof Assertion ? proxy : assertionFunction;
      if (key === "assert") return assertionFunction;
      if (typeof key === "string" && unsupported.includes(key)) throw new SyntaxError(`expect.poll() is not supported in combination with .${key}(). Use vi.waitFor() if your assertion condition is unstable.`);
      return function(...args) {
        const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
        const promise = () => new Promise((resolve4, reject) => {
          let intervalId;
          let timeoutId;
          let lastError;
          const { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = getSafeTimers();
          const check = async () => {
            try {
              utils_exports.flag(assertion, "_name", key);
              const obj = await fn2();
              utils_exports.flag(assertion, "object", obj);
              resolve4(await assertionFunction.call(assertion, ...args));
              clearTimeout2(intervalId);
              clearTimeout2(timeoutId);
            } catch (err) {
              lastError = err;
              if (!utils_exports.flag(assertion, "_isLastPollAttempt")) intervalId = setTimeout2(check, interval);
            }
          };
          timeoutId = setTimeout2(() => {
            clearTimeout2(intervalId);
            utils_exports.flag(assertion, "_isLastPollAttempt", true);
            const rejectWithCause = (cause) => {
              reject(copyStackTrace$1(new Error("Matcher did not succeed in time.", { cause }), STACK_TRACE_ERROR));
            };
            check().then(() => rejectWithCause(lastError)).catch((e) => rejectWithCause(e));
          }, timeout);
          check();
        });
        let awaited = false;
        test5.onFinished ??= [];
        test5.onFinished.push(() => {
          if (!awaited) {
            const negated = utils_exports.flag(assertion, "negate") ? "not." : "";
            const name = utils_exports.flag(assertion, "_poll.element") ? "element(locator)" : "poll(assertion)";
            const assertionString = `expect.${name}.${negated}${String(key)}()`;
            const error = new Error(`${assertionString} was not awaited. This assertion is asynchronous and must be awaited; otherwise, it is not executed to avoid unhandled rejections:

await ${assertionString}
`);
            throw copyStackTrace$1(error, STACK_TRACE_ERROR);
          }
        });
        let resultPromise;
        return {
          then(onFulfilled, onRejected) {
            awaited = true;
            return (resultPromise ||= promise()).then(onFulfilled, onRejected);
          },
          catch(onRejected) {
            return (resultPromise ||= promise()).catch(onRejected);
          },
          finally(onFinally) {
            return (resultPromise ||= promise()).finally(onFinally);
          },
          [Symbol.toStringTag]: "Promise"
        };
      };
    } });
    return proxy;
  };
}
function copyStackTrace$1(target, source) {
  if (source.stack !== void 0) target.stack = source.stack.replace(source.message, target.message);
  return target;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset$1 = { exports: {} };
var chaiSubset = chaiSubset$1.exports;
var hasRequiredChaiSubset;
function requireChaiSubset() {
  if (hasRequiredChaiSubset) return chaiSubset$1.exports;
  hasRequiredChaiSubset = 1;
  (function(module2, exports) {
    (function() {
      (function(chaiSubset2) {
        if (typeof commonjsRequire === "function" && true && true) {
          return module2.exports = chaiSubset2;
        } else {
          return chai.use(chaiSubset2);
        }
      })(function(chai2, utils) {
        var Assertion2 = chai2.Assertion;
        var assertionPrototype = Assertion2.prototype;
        Assertion2.addMethod("containSubset", function(expected) {
          var actual = utils.flag(this, "object");
          var showDiff = chai2.config.showDiff;
          assertionPrototype.assert.call(
            this,
            compare(expected, actual),
            "expected #{act} to contain subset #{exp}",
            "expected #{act} to not contain subset #{exp}",
            expected,
            actual,
            showDiff
          );
        });
        chai2.assert.containSubset = function(val, exp, msg) {
          new chai2.Assertion(val, msg).to.be.containSubset(exp);
        };
        function compare(expected, actual) {
          if (expected === actual) {
            return true;
          }
          if (typeof actual !== typeof expected) {
            return false;
          }
          if (typeof expected !== "object" || expected === null) {
            return expected === actual;
          }
          if (!!expected && !actual) {
            return false;
          }
          if (Array.isArray(expected)) {
            if (typeof actual.length !== "number") {
              return false;
            }
            var aa = Array.prototype.slice.call(actual);
            return expected.every(function(exp) {
              return aa.some(function(act) {
                return compare(exp, act);
              });
            });
          }
          if (expected instanceof Date) {
            if (actual instanceof Date) {
              return expected.getTime() === actual.getTime();
            } else {
              return false;
            }
          }
          return Object.keys(expected).every(function(key) {
            var eo = expected[key];
            var ao = actual[key];
            if (typeof eo === "object" && eo !== null && ao !== null) {
              return compare(eo, ao);
            }
            if (typeof eo === "function") {
              return eo(ao);
            }
            return ao === eo;
          });
        }
      });
    }).call(chaiSubset);
  })(chaiSubset$1);
  return chaiSubset$1.exports;
}
var chaiSubsetExports = requireChaiSubset();
var Subset = /* @__PURE__ */ getDefaultExportFromCjs3(chaiSubsetExports);
function createAssertionMessage2(util, assertion, hasArgs) {
  const not = util.flag(assertion, "negate") ? "not." : "";
  const name = `${util.flag(assertion, "_name")}(${"expected"})`;
  const promiseName = util.flag(assertion, "promise");
  const promise = promiseName ? `.${promiseName}` : "";
  return `expect(actual)${promise}.${not}${name}`;
}
function recordAsyncExpect2(_test2, promise, assertion, error) {
  const test5 = _test2;
  if (test5 && promise instanceof Promise) {
    promise = promise.finally(() => {
      if (!test5.promises) return;
      const index2 = test5.promises.indexOf(promise);
      if (index2 !== -1) test5.promises.splice(index2, 1);
    });
    if (!test5.promises) test5.promises = [];
    test5.promises.push(promise);
    let resolved = false;
    test5.onFinished ??= [];
    test5.onFinished.push(() => {
      if (!resolved) {
        const processor = globalThis.__vitest_worker__?.onFilterStackTrace || ((s2) => s2 || "");
        const stack = processor(error.stack);
        console.warn([
          `Promise returned by \`${assertion}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          "Please remember to await the assertion.\n",
          stack
        ].join(""));
      }
    });
    return {
      then(onFulfilled, onRejected) {
        resolved = true;
        return promise.then(onFulfilled, onRejected);
      },
      catch(onRejected) {
        return promise.catch(onRejected);
      },
      finally(onFinally) {
        return promise.finally(onFinally);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return promise;
}
var _client;
function getSnapshotClient() {
  if (!_client) _client = new SnapshotClient({ isEqual: (received, expected) => {
    return equals(received, expected, [iterableEquality, subsetEquality]);
  } });
  return _client;
}
function getError(expected, promise) {
  if (typeof expected !== "function") {
    if (!promise) throw new Error(`expected must be a function, received ${typeof expected}`);
    return expected;
  }
  try {
    expected();
  } catch (e) {
    return e;
  }
  throw new Error("snapshot function didn't throw");
}
function getTestNames(test5) {
  return {
    filepath: test5.file.filepath,
    name: getNames(test5).slice(1).join(" > "),
    testId: test5.id
  };
}
var SnapshotPlugin = (chai2, utils) => {
  function getTest(assertionName, obj) {
    const test5 = utils.flag(obj, "vitest-test");
    if (!test5) throw new Error(`'${assertionName}' cannot be used without test context`);
    return test5;
  }
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) utils.addMethod(chai2.Assertion.prototype, key, function(properties, message) {
    utils.flag(this, "_name", key);
    const isNot = utils.flag(this, "negate");
    if (isNot) throw new Error(`${key} cannot be used with "not"`);
    const expected = utils.flag(this, "object");
    const test5 = getTest(key, this);
    if (typeof properties === "string" && typeof message === "undefined") {
      message = properties;
      properties = void 0;
    }
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: expected,
      message,
      isInline: false,
      properties,
      errorMessage,
      ...getTestNames(test5)
    });
  });
  utils.addMethod(chai2.Assertion.prototype, "toMatchFileSnapshot", function(file, message) {
    utils.flag(this, "_name", "toMatchFileSnapshot");
    const isNot = utils.flag(this, "negate");
    if (isNot) throw new Error('toMatchFileSnapshot cannot be used with "not"');
    const error = new Error("resolves");
    const expected = utils.flag(this, "object");
    const test5 = getTest("toMatchFileSnapshot", this);
    const errorMessage = utils.flag(this, "message");
    const promise = getSnapshotClient().assertRaw({
      received: expected,
      message,
      isInline: false,
      rawSnapshot: { file },
      errorMessage,
      ...getTestNames(test5)
    });
    return recordAsyncExpect2(test5, promise, createAssertionMessage2(utils, this), error);
  });
  utils.addMethod(chai2.Assertion.prototype, "toMatchInlineSnapshot", function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
    utils.flag(this, "_name", "toMatchInlineSnapshot");
    const isNot = utils.flag(this, "negate");
    if (isNot) throw new Error('toMatchInlineSnapshot cannot be used with "not"');
    const test5 = getTest("toMatchInlineSnapshot", this);
    const isInsideEach = test5.each || test5.suite?.each;
    if (isInsideEach) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const expected = utils.flag(this, "object");
    const error = utils.flag(this, "error");
    if (typeof properties === "string") {
      message = inlineSnapshot;
      inlineSnapshot = properties;
      properties = void 0;
    }
    if (inlineSnapshot) inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: expected,
      message,
      isInline: true,
      properties,
      inlineSnapshot,
      error,
      errorMessage,
      ...getTestNames(test5)
    });
  });
  utils.addMethod(chai2.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(message) {
    utils.flag(this, "_name", "toThrowErrorMatchingSnapshot");
    const isNot = utils.flag(this, "negate");
    if (isNot) throw new Error('toThrowErrorMatchingSnapshot cannot be used with "not"');
    const expected = utils.flag(this, "object");
    const test5 = getTest("toThrowErrorMatchingSnapshot", this);
    const promise = utils.flag(this, "promise");
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: getError(expected, promise),
      message,
      errorMessage,
      ...getTestNames(test5)
    });
  });
  utils.addMethod(chai2.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
    const isNot = utils.flag(this, "negate");
    if (isNot) throw new Error('toThrowErrorMatchingInlineSnapshot cannot be used with "not"');
    const test5 = getTest("toThrowErrorMatchingInlineSnapshot", this);
    const isInsideEach = test5.each || test5.suite?.each;
    if (isInsideEach) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const expected = utils.flag(this, "object");
    const error = utils.flag(this, "error");
    const promise = utils.flag(this, "promise");
    const errorMessage = utils.flag(this, "message");
    if (inlineSnapshot) inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
    getSnapshotClient().assert({
      received: getError(expected, promise),
      message,
      inlineSnapshot,
      isInline: true,
      error,
      errorMessage,
      ...getTestNames(test5)
    });
  });
  utils.addMethod(chai2.expect, "addSnapshotSerializer", addSerializer);
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test5) {
  const expect2 = (value, message) => {
    const { assertionCalls } = getState(expect2);
    setState({ assertionCalls: assertionCalls + 1 }, expect2);
    const assert4 = expect(value, message);
    const _test2 = test5 || getCurrentTest();
    if (_test2)
      return assert4.withTest(_test2);
    else return assert4;
  };
  Object.assign(expect2, expect);
  Object.assign(expect2, globalThis[ASYMMETRIC_MATCHERS_OBJECT]);
  expect2.getState = () => getState(expect2);
  expect2.setState = (state) => setState(state, expect2);
  const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
  setState({
    ...globalState,
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: getCurrentEnvironment(),
    get testPath() {
      return getWorkerState().filepath;
    },
    currentTestName: test5 ? getTestName(test5) : globalState.currentTestName
  }, expect2);
  expect2.extend = (matchers) => expect.extend(expect2, matchers);
  expect2.addEqualityTesters = (customTesters) => addCustomEqualityTesters(customTesters);
  expect2.soft = (...args) => {
    return expect2(...args).withContext({ soft: true });
  };
  expect2.poll = createExpectPoll(expect2);
  expect2.unreachable = (message) => {
    assert2.fail(`expected${message ? ` "${message}" ` : " "}not to be reached`);
  };
  function assertions(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect2.getState().assertionCalls}`);
    if (Error.captureStackTrace) Error.captureStackTrace(errorGen(), assertions);
    expect2.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace) Error.captureStackTrace(error, hasAssertions);
    expect2.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error
    });
  }
  utils_exports.addMethod(expect2, "assertions", assertions);
  utils_exports.addMethod(expect2, "hasAssertions", hasAssertions);
  expect2.extend(customMatchers);
  return expect2;
}
var globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
var fakeTimersSrc = {};
var global2;
var hasRequiredGlobal;
function requireGlobal() {
  if (hasRequiredGlobal) return global2;
  hasRequiredGlobal = 1;
  var globalObject;
  if (typeof commonjsGlobal !== "undefined") {
    globalObject = commonjsGlobal;
  } else if (typeof window !== "undefined") {
    globalObject = window;
  } else {
    globalObject = self;
  }
  global2 = globalObject;
  return global2;
}
var throwsOnProto_1;
var hasRequiredThrowsOnProto;
function requireThrowsOnProto() {
  if (hasRequiredThrowsOnProto) return throwsOnProto_1;
  hasRequiredThrowsOnProto = 1;
  let throwsOnProto;
  try {
    const object2 = {};
    object2.__proto__;
    throwsOnProto = false;
  } catch (_) {
    throwsOnProto = true;
  }
  throwsOnProto_1 = throwsOnProto;
  return throwsOnProto_1;
}
var copyPrototypeMethods;
var hasRequiredCopyPrototypeMethods;
function requireCopyPrototypeMethods() {
  if (hasRequiredCopyPrototypeMethods) return copyPrototypeMethods;
  hasRequiredCopyPrototypeMethods = 1;
  var call2 = Function.call;
  var throwsOnProto = requireThrowsOnProto();
  var disallowedProperties = [
    // ignore size because it throws from Map
    "size",
    "caller",
    "callee",
    "arguments"
  ];
  if (throwsOnProto) {
    disallowedProperties.push("__proto__");
  }
  copyPrototypeMethods = function copyPrototypeMethods2(prototype) {
    return Object.getOwnPropertyNames(prototype).reduce(
      function(result, name) {
        if (disallowedProperties.includes(name)) {
          return result;
        }
        if (typeof prototype[name] !== "function") {
          return result;
        }
        result[name] = call2.bind(prototype[name]);
        return result;
      },
      /* @__PURE__ */ Object.create(null)
    );
  };
  return copyPrototypeMethods;
}
var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  array = copyPrototype(Array.prototype);
  return array;
}
var calledInOrder_1;
var hasRequiredCalledInOrder;
function requireCalledInOrder() {
  if (hasRequiredCalledInOrder) return calledInOrder_1;
  hasRequiredCalledInOrder = 1;
  var every2 = requireArray().every;
  function hasCallsLeft(callMap, spy) {
    if (callMap[spy.id] === void 0) {
      callMap[spy.id] = 0;
    }
    return callMap[spy.id] < spy.callCount;
  }
  function checkAdjacentCalls(callMap, spy, index2, spies2) {
    var calledBeforeNext = true;
    if (index2 !== spies2.length - 1) {
      calledBeforeNext = spy.calledBefore(spies2[index2 + 1]);
    }
    if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
      callMap[spy.id] += 1;
      return true;
    }
    return false;
  }
  function calledInOrder(spies2) {
    var callMap = {};
    var _spies = arguments.length > 1 ? arguments : spies2;
    return every2(_spies, checkAdjacentCalls.bind(null, callMap));
  }
  calledInOrder_1 = calledInOrder;
  return calledInOrder_1;
}
var className_1;
var hasRequiredClassName;
function requireClassName() {
  if (hasRequiredClassName) return className_1;
  hasRequiredClassName = 1;
  function className(value) {
    const name = value.constructor && value.constructor.name;
    return name || null;
  }
  className_1 = className;
  return className_1;
}
var deprecated = {};
var hasRequiredDeprecated;
function requireDeprecated() {
  if (hasRequiredDeprecated) return deprecated;
  hasRequiredDeprecated = 1;
  (function(exports) {
    exports.wrap = function(func, msg) {
      var wrapped = function() {
        exports.printWarning(msg);
        return func.apply(this, arguments);
      };
      if (func.prototype) {
        wrapped.prototype = func.prototype;
      }
      return wrapped;
    };
    exports.defaultMsg = function(packageName, funcName) {
      return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
    };
    exports.printWarning = function(msg) {
      if (typeof process === "object" && process.emitWarning) {
        process.emitWarning(msg);
      } else if (console.info) {
        console.info(msg);
      } else {
        console.log(msg);
      }
    };
  })(deprecated);
  return deprecated;
}
var every;
var hasRequiredEvery;
function requireEvery() {
  if (hasRequiredEvery) return every;
  hasRequiredEvery = 1;
  every = function every2(obj, fn2) {
    var pass = true;
    try {
      obj.forEach(function() {
        if (!fn2.apply(this, arguments)) {
          throw new Error();
        }
      });
    } catch (e) {
      pass = false;
    }
    return pass;
  };
  return every;
}
var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  functionName = function functionName2(func) {
    if (!func) {
      return "";
    }
    try {
      return func.displayName || func.name || // Use function decomposition as a last resort to get function
      // name. Does not rely on function decomposition to work - if it
      // doesn't debugging will be slightly less informative
      // (i.e. toString will say 'spy' rather than 'myFunc').
      (String(func).match(/function ([^\s(]+)/) || [])[1];
    } catch (e) {
      return "";
    }
  };
  return functionName;
}
var orderByFirstCall_1;
var hasRequiredOrderByFirstCall;
function requireOrderByFirstCall() {
  if (hasRequiredOrderByFirstCall) return orderByFirstCall_1;
  hasRequiredOrderByFirstCall = 1;
  var sort2 = requireArray().sort;
  var slice = requireArray().slice;
  function comparator(a3, b) {
    var aCall = a3.getCall(0);
    var bCall = b.getCall(0);
    var aId = aCall && aCall.callId || -1;
    var bId = bCall && bCall.callId || -1;
    return aId < bId ? -1 : 1;
  }
  function orderByFirstCall(spies2) {
    return sort2(slice(spies2), comparator);
  }
  orderByFirstCall_1 = orderByFirstCall;
  return orderByFirstCall_1;
}
var _function;
var hasRequired_function;
function require_function() {
  if (hasRequired_function) return _function;
  hasRequired_function = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  _function = copyPrototype(Function.prototype);
  return _function;
}
var map;
var hasRequiredMap;
function requireMap() {
  if (hasRequiredMap) return map;
  hasRequiredMap = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  map = copyPrototype(Map.prototype);
  return map;
}
var object;
var hasRequiredObject;
function requireObject() {
  if (hasRequiredObject) return object;
  hasRequiredObject = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  object = copyPrototype(Object.prototype);
  return object;
}
var set2;
var hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set2;
  hasRequiredSet = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  set2 = copyPrototype(Set.prototype);
  return set2;
}
var string;
var hasRequiredString;
function requireString() {
  if (hasRequiredString) return string;
  hasRequiredString = 1;
  var copyPrototype = requireCopyPrototypeMethods();
  string = copyPrototype(String.prototype);
  return string;
}
var prototypes;
var hasRequiredPrototypes;
function requirePrototypes() {
  if (hasRequiredPrototypes) return prototypes;
  hasRequiredPrototypes = 1;
  prototypes = {
    array: requireArray(),
    function: require_function(),
    map: requireMap(),
    object: requireObject(),
    set: requireSet(),
    string: requireString()
  };
  return prototypes;
}
var typeDetect$1 = { exports: {} };
var typeDetect = typeDetect$1.exports;
var hasRequiredTypeDetect;
function requireTypeDetect() {
  if (hasRequiredTypeDetect) return typeDetect$1.exports;
  hasRequiredTypeDetect = 1;
  (function(module2, exports) {
    (function(global3, factory2) {
      module2.exports = factory2();
    })(typeDetect, function() {
      var promiseExists = typeof Promise === "function";
      var globalObject = typeof self === "object" ? self : commonjsGlobal;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect2(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect2;
    });
  })(typeDetect$1);
  return typeDetect$1.exports;
}
var typeOf;
var hasRequiredTypeOf;
function requireTypeOf() {
  if (hasRequiredTypeOf) return typeOf;
  hasRequiredTypeOf = 1;
  var type3 = requireTypeDetect();
  typeOf = function typeOf2(value) {
    return type3(value).toLowerCase();
  };
  return typeOf;
}
var valueToString_1;
var hasRequiredValueToString;
function requireValueToString() {
  if (hasRequiredValueToString) return valueToString_1;
  hasRequiredValueToString = 1;
  function valueToString(value) {
    if (value && value.toString) {
      return value.toString();
    }
    return String(value);
  }
  valueToString_1 = valueToString;
  return valueToString_1;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  lib = {
    global: requireGlobal(),
    calledInOrder: requireCalledInOrder(),
    className: requireClassName(),
    deprecated: requireDeprecated(),
    every: requireEvery(),
    functionName: requireFunctionName(),
    orderByFirstCall: requireOrderByFirstCall(),
    prototypes: requirePrototypes(),
    typeOf: requireTypeOf(),
    valueToString: requireValueToString()
  };
  return lib;
}
var hasRequiredFakeTimersSrc;
function requireFakeTimersSrc() {
  if (hasRequiredFakeTimersSrc) return fakeTimersSrc;
  hasRequiredFakeTimersSrc = 1;
  const globalObject = requireLib().global;
  let timersModule, timersPromisesModule;
  if (typeof __vitest_required__ !== "undefined") {
    try {
      timersModule = __vitest_required__.timers;
    } catch (e) {
    }
    try {
      timersPromisesModule = __vitest_required__.timersPromises;
    } catch (e) {
    }
  }
  function withGlobal(_global) {
    const maxTimeout = Math.pow(2, 31) - 1;
    const idCounterStart = 1e12;
    const NOOP = function() {
      return void 0;
    };
    const NOOP_ARRAY = function() {
      return [];
    };
    const isPresent = {};
    let timeoutResult, addTimerReturnsObject = false;
    if (_global.setTimeout) {
      isPresent.setTimeout = true;
      timeoutResult = _global.setTimeout(NOOP, 0);
      addTimerReturnsObject = typeof timeoutResult === "object";
    }
    isPresent.clearTimeout = Boolean(_global.clearTimeout);
    isPresent.setInterval = Boolean(_global.setInterval);
    isPresent.clearInterval = Boolean(_global.clearInterval);
    isPresent.hrtime = _global.process && typeof _global.process.hrtime === "function";
    isPresent.hrtimeBigint = isPresent.hrtime && typeof _global.process.hrtime.bigint === "function";
    isPresent.nextTick = _global.process && typeof _global.process.nextTick === "function";
    const utilPromisify = _global.process && _global.__vitest_required__ && _global.__vitest_required__.util.promisify;
    isPresent.performance = _global.performance && typeof _global.performance.now === "function";
    const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
    const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
    isPresent.queueMicrotask = _global.hasOwnProperty("queueMicrotask");
    isPresent.requestAnimationFrame = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
    isPresent.cancelAnimationFrame = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
    isPresent.requestIdleCallback = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
    isPresent.cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
    isPresent.setImmediate = _global.setImmediate && typeof _global.setImmediate === "function";
    isPresent.clearImmediate = _global.clearImmediate && typeof _global.clearImmediate === "function";
    isPresent.Intl = _global.Intl && typeof _global.Intl === "object";
    if (_global.clearTimeout) {
      _global.clearTimeout(timeoutResult);
    }
    const NativeDate = _global.Date;
    const NativeIntl = isPresent.Intl ? Object.defineProperties(
      /* @__PURE__ */ Object.create(null),
      Object.getOwnPropertyDescriptors(_global.Intl)
    ) : void 0;
    let uniqueTimerId = idCounterStart;
    if (NativeDate === void 0) {
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    }
    isPresent.Date = true;
    class FakePerformanceEntry {
      constructor(name, entryType, startTime, duration) {
        this.name = name;
        this.entryType = entryType;
        this.startTime = startTime;
        this.duration = duration;
      }
      toJSON() {
        return JSON.stringify({ ...this });
      }
    }
    function isNumberFinite(num) {
      if (Number.isFinite) {
        return Number.isFinite(num);
      }
      return isFinite(num);
    }
    let isNearInfiniteLimit = false;
    function checkIsNearInfiniteLimit(clock, i) {
      if (clock.loopLimit && i === clock.loopLimit - 1) {
        isNearInfiniteLimit = true;
      }
    }
    function resetIsNearInfiniteLimit() {
      isNearInfiniteLimit = false;
    }
    function parseTime(str) {
      if (!str) {
        return 0;
      }
      const strings = str.split(":");
      const l = strings.length;
      let i = l;
      let ms = 0;
      let parsed;
      if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
        throw new Error(
          "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
        );
      }
      while (i--) {
        parsed = parseInt(strings[i], 10);
        if (parsed >= 60) {
          throw new Error(`Invalid time ${str}`);
        }
        ms += parsed * Math.pow(60, l - i - 1);
      }
      return ms * 1e3;
    }
    function nanoRemainder(msFloat) {
      const modulo = 1e6;
      const remainder = msFloat * 1e6 % modulo;
      const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
      return Math.floor(positiveRemainder);
    }
    function getEpoch(epoch) {
      if (!epoch) {
        return 0;
      }
      if (typeof epoch.getTime === "function") {
        return epoch.getTime();
      }
      if (typeof epoch === "number") {
        return epoch;
      }
      throw new TypeError("now should be milliseconds since UNIX epoch");
    }
    function inRange(from, to, timer) {
      return timer && timer.callAt >= from && timer.callAt <= to;
    }
    function getInfiniteLoopError(clock, job) {
      const infiniteLoopError = new Error(
        `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
      );
      if (!job.error) {
        return infiniteLoopError;
      }
      const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
      let clockMethodPattern = new RegExp(
        String(Object.keys(clock).join("|"))
      );
      if (addTimerReturnsObject) {
        clockMethodPattern = new RegExp(
          `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
        );
      }
      let matchedLineIndex = -1;
      job.error.stack.split("\n").some(function(line, i) {
        const matchedComputedTarget = line.match(computedTargetPattern);
        if (matchedComputedTarget) {
          matchedLineIndex = i;
          return true;
        }
        const matchedClockMethod = line.match(clockMethodPattern);
        if (matchedClockMethod) {
          matchedLineIndex = i;
          return false;
        }
        return matchedLineIndex >= 0;
      });
      const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
      try {
        Object.defineProperty(infiniteLoopError, "stack", {
          value: stack
        });
      } catch (e) {
      }
      return infiniteLoopError;
    }
    function createDate() {
      class ClockDate extends NativeDate {
        /**
         * @param {number} year
         * @param {number} month
         * @param {number} date
         * @param {number} hour
         * @param {number} minute
         * @param {number} second
         * @param {number} ms
         * @returns void
         */
        // eslint-disable-next-line no-unused-vars
        constructor(year, month, date, hour, minute, second, ms) {
          if (arguments.length === 0) {
            super(ClockDate.clock.now);
          } else {
            super(...arguments);
          }
          Object.defineProperty(this, "constructor", {
            value: NativeDate,
            enumerable: false
          });
        }
        static [Symbol.hasInstance](instance) {
          return instance instanceof NativeDate;
        }
      }
      ClockDate.isFake = true;
      if (NativeDate.now) {
        ClockDate.now = function now3() {
          return ClockDate.clock.now;
        };
      }
      if (NativeDate.toSource) {
        ClockDate.toSource = function toSource() {
          return NativeDate.toSource();
        };
      }
      ClockDate.toString = function toString4() {
        return NativeDate.toString();
      };
      const ClockDateProxy = new Proxy(ClockDate, {
        // handler for [[Call]] invocations (i.e. not using `new`)
        apply() {
          if (this instanceof ClockDate) {
            throw new TypeError(
              "A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic."
            );
          }
          return new NativeDate(ClockDate.clock.now).toString();
        }
      });
      return ClockDateProxy;
    }
    function createIntl() {
      const ClockIntl = {};
      Object.getOwnPropertyNames(NativeIntl).forEach(
        (property) => ClockIntl[property] = NativeIntl[property]
      );
      ClockIntl.DateTimeFormat = function(...args) {
        const realFormatter = new NativeIntl.DateTimeFormat(...args);
        const formatter = {};
        ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
          (method) => {
            formatter[method] = realFormatter[method].bind(realFormatter);
          }
        );
        ["format", "formatToParts"].forEach((method) => {
          formatter[method] = function(date) {
            return realFormatter[method](date || ClockIntl.clock.now);
          };
        });
        return formatter;
      };
      ClockIntl.DateTimeFormat.prototype = Object.create(
        NativeIntl.DateTimeFormat.prototype
      );
      ClockIntl.DateTimeFormat.supportedLocalesOf = NativeIntl.DateTimeFormat.supportedLocalesOf;
      return ClockIntl;
    }
    function enqueueJob(clock, job) {
      if (!clock.jobs) {
        clock.jobs = [];
      }
      clock.jobs.push(job);
    }
    function runJobs(clock) {
      if (!clock.jobs) {
        return;
      }
      for (let i = 0; i < clock.jobs.length; i++) {
        const job = clock.jobs[i];
        job.func.apply(null, job.args);
        checkIsNearInfiniteLimit(clock, i);
        if (clock.loopLimit && i > clock.loopLimit) {
          throw getInfiniteLoopError(clock, job);
        }
      }
      resetIsNearInfiniteLimit();
      clock.jobs = [];
    }
    function addTimer(clock, timer) {
      if (timer.func === void 0) {
        throw new Error("Callback must be provided to timer calls");
      }
      if (addTimerReturnsObject) {
        if (typeof timer.func !== "function") {
          throw new TypeError(
            `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
          );
        }
      }
      if (isNearInfiniteLimit) {
        timer.error = new Error();
      }
      timer.type = timer.immediate ? "Immediate" : "Timeout";
      if (timer.hasOwnProperty("delay")) {
        if (typeof timer.delay !== "number") {
          timer.delay = parseInt(timer.delay, 10);
        }
        if (!isNumberFinite(timer.delay)) {
          timer.delay = 0;
        }
        timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
        timer.delay = Math.max(0, timer.delay);
      }
      if (timer.hasOwnProperty("interval")) {
        timer.type = "Interval";
        timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
      }
      if (timer.hasOwnProperty("animation")) {
        timer.type = "AnimationFrame";
        timer.animation = true;
      }
      if (timer.hasOwnProperty("idleCallback")) {
        timer.type = "IdleCallback";
        timer.idleCallback = true;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      timer.id = uniqueTimerId++;
      timer.createdAt = clock.now;
      timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
      clock.timers[timer.id] = timer;
      if (addTimerReturnsObject) {
        const res = {
          refed: true,
          ref: function() {
            this.refed = true;
            return res;
          },
          unref: function() {
            this.refed = false;
            return res;
          },
          hasRef: function() {
            return this.refed;
          },
          refresh: function() {
            timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
            clock.timers[timer.id] = timer;
            return res;
          },
          [Symbol.toPrimitive]: function() {
            return timer.id;
          }
        };
        return res;
      }
      return timer.id;
    }
    function compareTimers(a3, b) {
      if (a3.callAt < b.callAt) {
        return -1;
      }
      if (a3.callAt > b.callAt) {
        return 1;
      }
      if (a3.immediate && !b.immediate) {
        return -1;
      }
      if (!a3.immediate && b.immediate) {
        return 1;
      }
      if (a3.createdAt < b.createdAt) {
        return -1;
      }
      if (a3.createdAt > b.createdAt) {
        return 1;
      }
      if (a3.id < b.id) {
        return -1;
      }
      if (a3.id > b.id) {
        return 1;
      }
    }
    function firstTimerInRange(clock, from, to) {
      const timers2 = clock.timers;
      let timer = null;
      let id, isInRange;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          isInRange = inRange(from, to, timers2[id]);
          if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function firstTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === 1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function lastTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === -1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function callTimer(clock, timer) {
      if (typeof timer.interval === "number") {
        clock.timers[timer.id].callAt += timer.interval;
      } else {
        delete clock.timers[timer.id];
      }
      if (typeof timer.func === "function") {
        timer.func.apply(null, timer.args);
      } else {
        const eval2 = eval;
        (function() {
          eval2(timer.func);
        })();
      }
    }
    function getClearHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `cancel${ttype}`;
      }
      return `clear${ttype}`;
    }
    function getScheduleHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `request${ttype}`;
      }
      return `set${ttype}`;
    }
    function createWarnOnce() {
      let calls = 0;
      return function(msg) {
        !calls++ && console.warn(msg);
      };
    }
    const warnOnce = createWarnOnce();
    function clearTimer(clock, timerId, ttype) {
      if (!timerId) {
        return;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      const id = Number(timerId);
      if (Number.isNaN(id) || id < idCounterStart) {
        const handlerName = getClearHandler(ttype);
        if (clock.shouldClearNativeTimers === true) {
          const nativeHandler = clock[`_${handlerName}`];
          return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
        }
        warnOnce(
          `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
        );
      }
      if (clock.timers.hasOwnProperty(id)) {
        const timer = clock.timers[id];
        if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
          delete clock.timers[id];
        } else {
          const clear = getClearHandler(ttype);
          const schedule = getScheduleHandler(timer.type);
          throw new Error(
            `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
          );
        }
      }
    }
    function uninstall(clock, config2) {
      let method, i, l;
      const installedHrTime = "_hrtime";
      const installedNextTick = "_nextTick";
      for (i = 0, l = clock.methods.length; i < l; i++) {
        method = clock.methods[i];
        if (method === "hrtime" && _global.process) {
          _global.process.hrtime = clock[installedHrTime];
        } else if (method === "nextTick" && _global.process) {
          _global.process.nextTick = clock[installedNextTick];
        } else if (method === "performance") {
          const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            `_${method}`
          );
          if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
            Object.defineProperty(
              _global,
              method,
              originalPerfDescriptor
            );
          } else if (originalPerfDescriptor.configurable) {
            _global[method] = clock[`_${method}`];
          }
        } else {
          if (_global[method] && _global[method].hadOwnProperty) {
            _global[method] = clock[`_${method}`];
          } else {
            try {
              delete _global[method];
            } catch (ignore) {
            }
          }
        }
        if (clock.timersModuleMethods !== void 0) {
          for (let j = 0; j < clock.timersModuleMethods.length; j++) {
            const entry = clock.timersModuleMethods[j];
            timersModule[entry.methodName] = entry.original;
          }
        }
        if (clock.timersPromisesModuleMethods !== void 0) {
          for (let j = 0; j < clock.timersPromisesModuleMethods.length; j++) {
            const entry = clock.timersPromisesModuleMethods[j];
            timersPromisesModule[entry.methodName] = entry.original;
          }
        }
      }
      if (config2.shouldAdvanceTime === true) {
        _global.clearInterval(clock.attachedInterval);
      }
      clock.methods = [];
      for (const [listener, signal] of clock.abortListenerMap.entries()) {
        signal.removeEventListener("abort", listener);
        clock.abortListenerMap.delete(listener);
      }
      if (!clock.timers) {
        return [];
      }
      return Object.keys(clock.timers).map(function mapper(key) {
        return clock.timers[key];
      });
    }
    function hijackMethod(target, method, clock) {
      clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
        target,
        method
      );
      clock[`_${method}`] = target[method];
      if (method === "Date") {
        target[method] = clock[method];
      } else if (method === "Intl") {
        target[method] = clock[method];
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          target,
          method
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            clock,
            `_${method}`,
            originalPerfDescriptor
          );
          const perfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            method
          );
          Object.defineProperty(target, method, perfDescriptor);
        } else {
          target[method] = clock[method];
        }
      } else {
        target[method] = function() {
          return clock[method].apply(clock, arguments);
        };
        Object.defineProperties(
          target[method],
          Object.getOwnPropertyDescriptors(clock[method])
        );
      }
      target[method].clock = clock;
    }
    function doIntervalTick(clock, advanceTimeDelta) {
      clock.tick(advanceTimeDelta);
    }
    const timers = {
      setTimeout: _global.setTimeout,
      clearTimeout: _global.clearTimeout,
      setInterval: _global.setInterval,
      clearInterval: _global.clearInterval,
      Date: _global.Date
    };
    if (isPresent.setImmediate) {
      timers.setImmediate = _global.setImmediate;
    }
    if (isPresent.clearImmediate) {
      timers.clearImmediate = _global.clearImmediate;
    }
    if (isPresent.hrtime) {
      timers.hrtime = _global.process.hrtime;
    }
    if (isPresent.nextTick) {
      timers.nextTick = _global.process.nextTick;
    }
    if (isPresent.performance) {
      timers.performance = _global.performance;
    }
    if (isPresent.requestAnimationFrame) {
      timers.requestAnimationFrame = _global.requestAnimationFrame;
    }
    if (isPresent.queueMicrotask) {
      timers.queueMicrotask = _global.queueMicrotask;
    }
    if (isPresent.cancelAnimationFrame) {
      timers.cancelAnimationFrame = _global.cancelAnimationFrame;
    }
    if (isPresent.requestIdleCallback) {
      timers.requestIdleCallback = _global.requestIdleCallback;
    }
    if (isPresent.cancelIdleCallback) {
      timers.cancelIdleCallback = _global.cancelIdleCallback;
    }
    if (isPresent.Intl) {
      timers.Intl = NativeIntl;
    }
    const originalSetTimeout = _global.setImmediate || _global.setTimeout;
    function createClock(start, loopLimit) {
      start = Math.floor(getEpoch(start));
      loopLimit = loopLimit || 1e3;
      let nanos = 0;
      const adjustedSystemTime = [0, 0];
      const clock = {
        now: start,
        Date: createDate(),
        loopLimit
      };
      clock.Date.clock = clock;
      function getTimeToNextFrame() {
        return 16 - (clock.now - start) % 16;
      }
      function hrtime(prev) {
        const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
        const secsSinceStart = Math.floor(millisSinceStart / 1e3);
        const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
        if (Array.isArray(prev)) {
          if (prev[1] > 1e9) {
            throw new TypeError(
              "Number of nanoseconds can't exceed a billion"
            );
          }
          const oldSecs = prev[0];
          let nanoDiff = remainderInNanos - prev[1];
          let secDiff = secsSinceStart - oldSecs;
          if (nanoDiff < 0) {
            nanoDiff += 1e9;
            secDiff -= 1;
          }
          return [secDiff, nanoDiff];
        }
        return [secsSinceStart, remainderInNanos];
      }
      function fakePerformanceNow() {
        const hrt = hrtime();
        const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
        return millis;
      }
      if (isPresent.hrtimeBigint) {
        hrtime.bigint = function() {
          const parts = hrtime();
          return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
        };
      }
      if (isPresent.Intl) {
        clock.Intl = createIntl();
        clock.Intl.clock = clock;
      }
      clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
        let timeToNextIdlePeriod = 0;
        if (clock.countTimers() > 0) {
          timeToNextIdlePeriod = 50;
        }
        const result = addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
          idleCallback: true
        });
        return Number(result);
      };
      clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
        return clearTimer(clock, timerId, "IdleCallback");
      };
      clock.setTimeout = function setTimeout2(func, timeout) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
          return new _global.Promise(function setTimeoutExecutor(resolve4) {
            addTimer(clock, {
              func: resolve4,
              args: [arg],
              delay: timeout
            });
          });
        };
      }
      clock.clearTimeout = function clearTimeout2(timerId) {
        return clearTimer(clock, timerId, "Timeout");
      };
      clock.nextTick = function nextTick(func) {
        return enqueueJob(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          error: isNearInfiniteLimit ? new Error() : null
        });
      };
      clock.queueMicrotask = function queueMicrotask(func) {
        return clock.nextTick(func);
      };
      clock.setInterval = function setInterval(func, timeout) {
        timeout = parseInt(timeout, 10);
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout,
          interval: timeout
        });
      };
      clock.clearInterval = function clearInterval(timerId) {
        return clearTimer(clock, timerId, "Interval");
      };
      if (isPresent.setImmediate) {
        clock.setImmediate = function setImmediate(func) {
          return addTimer(clock, {
            func,
            args: Array.prototype.slice.call(arguments, 1),
            immediate: true
          });
        };
        if (typeof _global.Promise !== "undefined" && utilPromisify) {
          clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
            return new _global.Promise(
              function setImmediateExecutor(resolve4) {
                addTimer(clock, {
                  func: resolve4,
                  args: [arg],
                  immediate: true
                });
              }
            );
          };
        }
        clock.clearImmediate = function clearImmediate(timerId) {
          return clearTimer(clock, timerId, "Immediate");
        };
      }
      clock.countTimers = function countTimers() {
        return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
      };
      clock.requestAnimationFrame = function requestAnimationFrame(func) {
        const result = addTimer(clock, {
          func,
          delay: getTimeToNextFrame(),
          get args() {
            return [fakePerformanceNow()];
          },
          animation: true
        });
        return Number(result);
      };
      clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
        return clearTimer(clock, timerId, "AnimationFrame");
      };
      clock.runMicrotasks = function runMicrotasks() {
        runJobs(clock);
      };
      function doTick(tickValue, isAsync, resolve4, reject) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        const remainder = nanoRemainder(msFloat);
        let nanosTotal = nanos + remainder;
        let tickTo = clock.now + ms;
        if (msFloat < 0) {
          throw new TypeError("Negative ticks are not supported");
        }
        if (nanosTotal >= 1e6) {
          tickTo += 1;
          nanosTotal -= 1e6;
        }
        nanos = nanosTotal;
        let tickFrom = clock.now;
        let previous = clock.now;
        let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
        clock.duringTick = true;
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        function doTickInner() {
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          while (timer && tickFrom <= tickTo) {
            if (clock.timers[timer.id]) {
              tickFrom = timer.callAt;
              clock.now = timer.callAt;
              oldNow = clock.now;
              try {
                runJobs(clock);
                callTimer(clock, timer);
              } catch (e) {
                firstException = firstException || e;
              }
              if (isAsync) {
                originalSetTimeout(nextPromiseTick);
                return;
              }
              compensationCheck();
            }
            postTimerCall();
          }
          oldNow = clock.now;
          runJobs(clock);
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
          }
          clock.duringTick = false;
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          if (timer) {
            try {
              clock.tick(tickTo - clock.now);
            } catch (e) {
              firstException = firstException || e;
            }
          } else {
            clock.now = tickTo;
            nanos = nanosTotal;
          }
          if (firstException) {
            throw firstException;
          }
          if (isAsync) {
            resolve4(clock.now);
          } else {
            return clock.now;
          }
        }
        nextPromiseTick = isAsync && function() {
          try {
            compensationCheck();
            postTimerCall();
            doTickInner();
          } catch (e) {
            reject(e);
          }
        };
        compensationCheck = function() {
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
            previous += clock.now - oldNow;
          }
        };
        postTimerCall = function() {
          timer = firstTimerInRange(clock, previous, tickTo);
          previous = tickFrom;
        };
        return doTickInner();
      }
      clock.tick = function tick(tickValue) {
        return doTick(tickValue, false);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.tickAsync = function tickAsync(tickValue) {
          return new _global.Promise(function(resolve4, reject) {
            originalSetTimeout(function() {
              try {
                doTick(tickValue, true, resolve4, reject);
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.next = function next() {
        runJobs(clock);
        const timer = firstTimer(clock);
        if (!timer) {
          return clock.now;
        }
        clock.duringTick = true;
        try {
          clock.now = timer.callAt;
          callTimer(clock, timer);
          runJobs(clock);
          return clock.now;
        } finally {
          clock.duringTick = false;
        }
      };
      if (typeof _global.Promise !== "undefined") {
        clock.nextAsync = function nextAsync() {
          return new _global.Promise(function(resolve4, reject) {
            originalSetTimeout(function() {
              try {
                const timer = firstTimer(clock);
                if (!timer) {
                  resolve4(clock.now);
                  return;
                }
                let err;
                clock.duringTick = true;
                clock.now = timer.callAt;
                try {
                  callTimer(clock, timer);
                } catch (e) {
                  err = e;
                }
                clock.duringTick = false;
                originalSetTimeout(function() {
                  if (err) {
                    reject(err);
                  } else {
                    resolve4(clock.now);
                  }
                });
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.runAll = function runAll() {
        let numTimers, i;
        runJobs(clock);
        for (i = 0; i < clock.loopLimit; i++) {
          if (!clock.timers) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          numTimers = Object.keys(clock.timers).length;
          if (numTimers === 0) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          clock.next();
          checkIsNearInfiniteLimit(clock, i);
        }
        const excessJob = firstTimer(clock);
        throw getInfiniteLoopError(clock, excessJob);
      };
      clock.runToFrame = function runToFrame() {
        return clock.tick(getTimeToNextFrame());
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runAllAsync = function runAllAsync() {
          return new _global.Promise(function(resolve4, reject) {
            let i = 0;
            function doRun() {
              originalSetTimeout(function() {
                try {
                  runJobs(clock);
                  let numTimers;
                  if (i < clock.loopLimit) {
                    if (!clock.timers) {
                      resetIsNearInfiniteLimit();
                      resolve4(clock.now);
                      return;
                    }
                    numTimers = Object.keys(
                      clock.timers
                    ).length;
                    if (numTimers === 0) {
                      resetIsNearInfiniteLimit();
                      resolve4(clock.now);
                      return;
                    }
                    clock.next();
                    i++;
                    doRun();
                    checkIsNearInfiniteLimit(clock, i);
                    return;
                  }
                  const excessJob = firstTimer(clock);
                  reject(getInfiniteLoopError(clock, excessJob));
                } catch (e) {
                  reject(e);
                }
              });
            }
            doRun();
          });
        };
      }
      clock.runToLast = function runToLast() {
        const timer = lastTimer(clock);
        if (!timer) {
          runJobs(clock);
          return clock.now;
        }
        return clock.tick(timer.callAt - clock.now);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runToLastAsync = function runToLastAsync() {
          return new _global.Promise(function(resolve4, reject) {
            originalSetTimeout(function() {
              try {
                const timer = lastTimer(clock);
                if (!timer) {
                  runJobs(clock);
                  resolve4(clock.now);
                }
                resolve4(clock.tickAsync(timer.callAt - clock.now));
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.reset = function reset2() {
        nanos = 0;
        clock.timers = {};
        clock.jobs = [];
        clock.now = start;
      };
      clock.setSystemTime = function setSystemTime(systemTime) {
        const newNow = getEpoch(systemTime);
        const difference = newNow - clock.now;
        let id, timer;
        adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
        adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
        clock.now = newNow;
        nanos = 0;
        for (id in clock.timers) {
          if (clock.timers.hasOwnProperty(id)) {
            timer = clock.timers[id];
            timer.createdAt += difference;
            timer.callAt += difference;
          }
        }
      };
      clock.jump = function jump(tickValue) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        for (const timer of Object.values(clock.timers)) {
          if (clock.now + ms > timer.callAt) {
            timer.callAt = clock.now + ms;
          }
        }
        clock.tick(ms);
      };
      if (isPresent.performance) {
        clock.performance = /* @__PURE__ */ Object.create(null);
        clock.performance.now = fakePerformanceNow;
      }
      if (isPresent.hrtime) {
        clock.hrtime = hrtime;
      }
      return clock;
    }
    function install(config2) {
      if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
        throw new TypeError(
          `FakeTimers.install called with ${String(
            config2
          )} install requires an object parameter`
        );
      }
      if (_global.Date.isFake === true) {
        throw new TypeError(
          "Can't install fake timers twice on the same global object."
        );
      }
      config2 = typeof config2 !== "undefined" ? config2 : {};
      config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
      config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
      config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
      if (config2.target) {
        throw new TypeError(
          "config.target is no longer supported. Use `withGlobal(target)` instead."
        );
      }
      function handleMissingTimer(timer) {
        if (config2.ignoreMissingTimers) {
          return;
        }
        throw new ReferenceError(
          `non-existent timers and/or objects cannot be faked: '${timer}'`
        );
      }
      let i, l;
      const clock = createClock(config2.now, config2.loopLimit);
      clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
      clock.uninstall = function() {
        return uninstall(clock, config2);
      };
      clock.abortListenerMap = /* @__PURE__ */ new Map();
      clock.methods = config2.toFake || [];
      if (clock.methods.length === 0) {
        clock.methods = Object.keys(timers);
      }
      if (config2.shouldAdvanceTime === true) {
        const intervalTick = doIntervalTick.bind(
          null,
          clock,
          config2.advanceTimeDelta
        );
        const intervalId = _global.setInterval(
          intervalTick,
          config2.advanceTimeDelta
        );
        clock.attachedInterval = intervalId;
      }
      if (clock.methods.includes("performance")) {
        const proto = (() => {
          if (hasPerformanceConstructorPrototype) {
            return _global.performance.constructor.prototype;
          }
          if (hasPerformancePrototype) {
            return _global.Performance.prototype;
          }
        })();
        if (proto) {
          Object.getOwnPropertyNames(proto).forEach(function(name) {
            if (name !== "now") {
              clock.performance[name] = name.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP;
            }
          });
          clock.performance.mark = (name) => new FakePerformanceEntry(name, "mark", 0, 0);
          clock.performance.measure = (name) => new FakePerformanceEntry(name, "measure", 0, 100);
          clock.performance.timeOrigin = getEpoch(config2.now);
        } else if ((config2.toFake || []).includes("performance")) {
          return handleMissingTimer("performance");
        }
      }
      if (_global === globalObject && timersModule) {
        clock.timersModuleMethods = [];
      }
      if (_global === globalObject && timersPromisesModule) {
        clock.timersPromisesModuleMethods = [];
      }
      for (i = 0, l = clock.methods.length; i < l; i++) {
        const nameOfMethodToReplace = clock.methods[i];
        if (!isPresent[nameOfMethodToReplace]) {
          handleMissingTimer(nameOfMethodToReplace);
          continue;
        }
        if (nameOfMethodToReplace === "hrtime") {
          if (_global.process && typeof _global.process.hrtime === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else if (nameOfMethodToReplace === "nextTick") {
          if (_global.process && typeof _global.process.nextTick === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else {
          hijackMethod(_global, nameOfMethodToReplace, clock);
        }
        if (clock.timersModuleMethods !== void 0 && timersModule[nameOfMethodToReplace]) {
          const original = timersModule[nameOfMethodToReplace];
          clock.timersModuleMethods.push({
            methodName: nameOfMethodToReplace,
            original
          });
          timersModule[nameOfMethodToReplace] = _global[nameOfMethodToReplace];
        }
        if (clock.timersPromisesModuleMethods !== void 0) {
          if (nameOfMethodToReplace === "setTimeout") {
            clock.timersPromisesModuleMethods.push({
              methodName: "setTimeout",
              original: timersPromisesModule.setTimeout
            });
            timersPromisesModule.setTimeout = (delay, value, options = {}) => new Promise((resolve4, reject) => {
              const abort = () => {
                options.signal.removeEventListener(
                  "abort",
                  abort
                );
                clock.abortListenerMap.delete(abort);
                clock.clearTimeout(handle);
                reject(options.signal.reason);
              };
              const handle = clock.setTimeout(() => {
                if (options.signal) {
                  options.signal.removeEventListener(
                    "abort",
                    abort
                  );
                  clock.abortListenerMap.delete(abort);
                }
                resolve4(value);
              }, delay);
              if (options.signal) {
                if (options.signal.aborted) {
                  abort();
                } else {
                  options.signal.addEventListener(
                    "abort",
                    abort
                  );
                  clock.abortListenerMap.set(
                    abort,
                    options.signal
                  );
                }
              }
            });
          } else if (nameOfMethodToReplace === "setImmediate") {
            clock.timersPromisesModuleMethods.push({
              methodName: "setImmediate",
              original: timersPromisesModule.setImmediate
            });
            timersPromisesModule.setImmediate = (value, options = {}) => new Promise((resolve4, reject) => {
              const abort = () => {
                options.signal.removeEventListener(
                  "abort",
                  abort
                );
                clock.abortListenerMap.delete(abort);
                clock.clearImmediate(handle);
                reject(options.signal.reason);
              };
              const handle = clock.setImmediate(() => {
                if (options.signal) {
                  options.signal.removeEventListener(
                    "abort",
                    abort
                  );
                  clock.abortListenerMap.delete(abort);
                }
                resolve4(value);
              });
              if (options.signal) {
                if (options.signal.aborted) {
                  abort();
                } else {
                  options.signal.addEventListener(
                    "abort",
                    abort
                  );
                  clock.abortListenerMap.set(
                    abort,
                    options.signal
                  );
                }
              }
            });
          } else if (nameOfMethodToReplace === "setInterval") {
            clock.timersPromisesModuleMethods.push({
              methodName: "setInterval",
              original: timersPromisesModule.setInterval
            });
            timersPromisesModule.setInterval = (delay, value, options = {}) => ({
              [Symbol.asyncIterator]: () => {
                const createResolvable = () => {
                  let resolve4, reject;
                  const promise = new Promise((res, rej) => {
                    resolve4 = res;
                    reject = rej;
                  });
                  promise.resolve = resolve4;
                  promise.reject = reject;
                  return promise;
                };
                let done = false;
                let hasThrown = false;
                let returnCall;
                let nextAvailable = 0;
                const nextQueue = [];
                const handle = clock.setInterval(() => {
                  if (nextQueue.length > 0) {
                    nextQueue.shift().resolve();
                  } else {
                    nextAvailable++;
                  }
                }, delay);
                const abort = () => {
                  options.signal.removeEventListener(
                    "abort",
                    abort
                  );
                  clock.abortListenerMap.delete(abort);
                  clock.clearInterval(handle);
                  done = true;
                  for (const resolvable of nextQueue) {
                    resolvable.resolve();
                  }
                };
                if (options.signal) {
                  if (options.signal.aborted) {
                    done = true;
                  } else {
                    options.signal.addEventListener(
                      "abort",
                      abort
                    );
                    clock.abortListenerMap.set(
                      abort,
                      options.signal
                    );
                  }
                }
                return {
                  next: async () => {
                    if (options.signal?.aborted && !hasThrown) {
                      hasThrown = true;
                      throw options.signal.reason;
                    }
                    if (done) {
                      return { done: true, value: void 0 };
                    }
                    if (nextAvailable > 0) {
                      nextAvailable--;
                      return { done: false, value };
                    }
                    const resolvable = createResolvable();
                    nextQueue.push(resolvable);
                    await resolvable;
                    if (returnCall && nextQueue.length === 0) {
                      returnCall.resolve();
                    }
                    if (options.signal?.aborted && !hasThrown) {
                      hasThrown = true;
                      throw options.signal.reason;
                    }
                    if (done) {
                      return { done: true, value: void 0 };
                    }
                    return { done: false, value };
                  },
                  return: async () => {
                    if (done) {
                      return { done: true, value: void 0 };
                    }
                    if (nextQueue.length > 0) {
                      returnCall = createResolvable();
                      await returnCall;
                    }
                    clock.clearInterval(handle);
                    done = true;
                    if (options.signal) {
                      options.signal.removeEventListener(
                        "abort",
                        abort
                      );
                      clock.abortListenerMap.delete(abort);
                    }
                    return { done: true, value: void 0 };
                  }
                };
              }
            });
          }
        }
      }
      return clock;
    }
    return {
      timers,
      createClock,
      install,
      withGlobal
    };
  }
  const defaultImplementation = withGlobal(globalObject);
  fakeTimersSrc.timers = defaultImplementation.timers;
  fakeTimersSrc.createClock = defaultImplementation.createClock;
  fakeTimersSrc.install = defaultImplementation.install;
  fakeTimersSrc.withGlobal = withGlobal;
  return fakeTimersSrc;
}
var fakeTimersSrcExports = requireFakeTimersSrc();
var FakeTimers = class {
  _global;
  _clock;
  // | _fakingTime | _fakingDate |
  // +-------------+-------------+
  // | false       | falsy       | initial
  // | false       | truthy     | vi.setSystemTime called first (for mocking only Date without fake timers)
  // | true        | falsy       | vi.useFakeTimers called first
  // | true        | truthy     | unreachable
  _fakingTime;
  _fakingDate;
  _fakeTimers;
  _userConfig;
  _now = RealDate.now;
  constructor({ global: global3, config: config2 }) {
    this._userConfig = config2;
    this._fakingDate = null;
    this._fakingTime = false;
    this._fakeTimers = fakeTimersSrcExports.withGlobal(global3);
    this._global = global3;
  }
  clearAllTimers() {
    if (this._fakingTime) this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers()) this._clock.runAll();
  }
  async runAllTimersAsync() {
    if (this._checkFakeTimers()) await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers()) this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    if (this._checkFakeTimers()) await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) for (let i = steps; i > 0; i--) {
      this._clock.next();
      this._clock.tick(0);
      if (this._clock.countTimers() === 0) break;
    }
  }
  async advanceTimersToNextTimerAsync(steps = 1) {
    if (this._checkFakeTimers()) for (let i = steps; i > 0; i--) {
      await this._clock.nextAsync();
      this._clock.tick(0);
      if (this._clock.countTimers() === 0) break;
    }
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers()) this._clock.tick(msToRun);
  }
  async advanceTimersByTimeAsync(msToRun) {
    if (this._checkFakeTimers()) await this._clock.tickAsync(msToRun);
  }
  advanceTimersToNextFrame() {
    if (this._checkFakeTimers()) this._clock.runToFrame();
  }
  runAllTicks() {
    if (this._checkFakeTimers())
      this._clock.runMicrotasks();
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = null;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) throw new Error('"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.');
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers).filter((timer) => timer !== "nextTick" && timer !== "queueMicrotask");
      if (this._userConfig?.toFake?.includes("nextTick") && isChildProcess()) throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        ...this._userConfig,
        toFake: this._userConfig?.toFake || toFake,
        ignoreMissingTimers: true
      });
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now3 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now3);
    }
  }
  setSystemTime(now3) {
    const date = typeof now3 === "undefined" || now3 instanceof Date ? now3 : new Date(now3);
    if (this._fakingTime) this._clock.setSystemTime(date);
    else {
      this._fakingDate = date ?? new Date(this.getRealSystemTime());
      mockDate(this._fakingDate);
    }
  }
  getMockedSystemTime() {
    return this._fakingTime ? new Date(this._clock.now) : this._fakingDate;
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers()) return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) throw new Error('Timers are not mocked. Try calling "vi.useFakeTimers()" first.');
    return this._fakingTime;
  }
};
function copyStackTrace(target, source) {
  if (source.stack !== void 0) target.stack = source.stack.replace(source.message, target.message);
  return target;
}
function waitFor(callback, options = {}) {
  const { setTimeout: setTimeout2, setInterval, clearTimeout: clearTimeout2, clearInterval } = getSafeTimers();
  const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
  const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
  return new Promise((resolve4, reject) => {
    let lastError;
    let promiseStatus = "idle";
    let timeoutId;
    let intervalId;
    const onResolve = (result) => {
      if (timeoutId) clearTimeout2(timeoutId);
      if (intervalId) clearInterval(intervalId);
      resolve4(result);
    };
    const handleTimeout = () => {
      if (intervalId) clearInterval(intervalId);
      let error = lastError;
      if (!error) error = copyStackTrace(new Error("Timed out in waitFor!"), STACK_TRACE_ERROR);
      reject(error);
    };
    const checkCallback = () => {
      if (vi.isFakeTimers()) vi.advanceTimersByTime(interval);
      if (promiseStatus === "pending") return;
      try {
        const result = callback();
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
          const thenable = result;
          promiseStatus = "pending";
          thenable.then((resolvedValue) => {
            promiseStatus = "resolved";
            onResolve(resolvedValue);
          }, (rejectedValue) => {
            promiseStatus = "rejected";
            lastError = rejectedValue;
          });
        } else {
          onResolve(result);
          return true;
        }
      } catch (error) {
        lastError = error;
      }
    };
    if (checkCallback() === true) return;
    timeoutId = setTimeout2(handleTimeout, timeout);
    intervalId = setInterval(checkCallback, interval);
  });
}
function waitUntil(callback, options = {}) {
  const { setTimeout: setTimeout2, setInterval, clearTimeout: clearTimeout2, clearInterval } = getSafeTimers();
  const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
  const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
  return new Promise((resolve4, reject) => {
    let promiseStatus = "idle";
    let timeoutId;
    let intervalId;
    const onReject = (error) => {
      if (intervalId) clearInterval(intervalId);
      if (!error) error = copyStackTrace(new Error("Timed out in waitUntil!"), STACK_TRACE_ERROR);
      reject(error);
    };
    const onResolve = (result) => {
      if (!result) return;
      if (timeoutId) clearTimeout2(timeoutId);
      if (intervalId) clearInterval(intervalId);
      resolve4(result);
      return true;
    };
    const checkCallback = () => {
      if (vi.isFakeTimers()) vi.advanceTimersByTime(interval);
      if (promiseStatus === "pending") return;
      try {
        const result = callback();
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
          const thenable = result;
          promiseStatus = "pending";
          thenable.then((resolvedValue) => {
            promiseStatus = "resolved";
            onResolve(resolvedValue);
          }, (rejectedValue) => {
            promiseStatus = "rejected";
            onReject(rejectedValue);
          });
        } else return onResolve(result);
      } catch (error) {
        onReject(error);
      }
    };
    if (checkCallback() === true) return;
    timeoutId = setTimeout2(onReject, timeout);
    intervalId = setInterval(checkCallback, interval);
  });
}
function createVitest() {
  let _config = null;
  const workerState = getWorkerState();
  let _timers;
  const timers = () => _timers ||= new FakeTimers({
    global: globalThis,
    config: workerState.config.fakeTimers
  });
  const _stubsGlobal = /* @__PURE__ */ new Map();
  const _stubsEnv = /* @__PURE__ */ new Map();
  const _envBooleans = [
    "PROD",
    "DEV",
    "SSR"
  ];
  const utils = {
    useFakeTimers(config2) {
      if (isChildProcess()) {
        if (config2?.toFake?.includes("nextTick") || workerState.config?.fakeTimers?.toFake?.includes("nextTick")) throw new Error('vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.');
      }
      if (config2) timers().configure({
        ...workerState.config.fakeTimers,
        ...config2
      });
      else timers().configure(workerState.config.fakeTimers);
      timers().useFakeTimers();
      return utils;
    },
    isFakeTimers() {
      return timers().isFakeTimers();
    },
    useRealTimers() {
      timers().useRealTimers();
      return utils;
    },
    runOnlyPendingTimers() {
      timers().runOnlyPendingTimers();
      return utils;
    },
    async runOnlyPendingTimersAsync() {
      await timers().runOnlyPendingTimersAsync();
      return utils;
    },
    runAllTimers() {
      timers().runAllTimers();
      return utils;
    },
    async runAllTimersAsync() {
      await timers().runAllTimersAsync();
      return utils;
    },
    runAllTicks() {
      timers().runAllTicks();
      return utils;
    },
    advanceTimersByTime(ms) {
      timers().advanceTimersByTime(ms);
      return utils;
    },
    async advanceTimersByTimeAsync(ms) {
      await timers().advanceTimersByTimeAsync(ms);
      return utils;
    },
    advanceTimersToNextTimer() {
      timers().advanceTimersToNextTimer();
      return utils;
    },
    async advanceTimersToNextTimerAsync() {
      await timers().advanceTimersToNextTimerAsync();
      return utils;
    },
    advanceTimersToNextFrame() {
      timers().advanceTimersToNextFrame();
      return utils;
    },
    getTimerCount() {
      return timers().getTimerCount();
    },
    setSystemTime(time) {
      timers().setSystemTime(time);
      return utils;
    },
    getMockedSystemTime() {
      return timers().getMockedSystemTime();
    },
    getRealSystemTime() {
      return timers().getRealSystemTime();
    },
    clearAllTimers() {
      timers().clearAllTimers();
      return utils;
    },
    spyOn,
    fn,
    waitFor,
    waitUntil,
    hoisted(factory2) {
      assertTypes(factory2, '"vi.hoisted" factory', ["function"]);
      return factory2();
    },
    mock(path2, factory2) {
      if (typeof path2 !== "string") throw new TypeError(`vi.mock() expects a string path, but received a ${typeof path2}`);
      const importer = getImporter("mock");
      _mocker().queueMock(path2, importer, typeof factory2 === "function" ? () => factory2(() => _mocker().importActual(path2, importer, _mocker().getMockContext().callstack)) : factory2);
    },
    unmock(path2) {
      if (typeof path2 !== "string") throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof path2}`);
      _mocker().queueUnmock(path2, getImporter("unmock"));
    },
    doMock(path2, factory2) {
      if (typeof path2 !== "string") throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof path2}`);
      const importer = getImporter("doMock");
      _mocker().queueMock(path2, importer, typeof factory2 === "function" ? () => factory2(() => _mocker().importActual(path2, importer, _mocker().getMockContext().callstack)) : factory2);
    },
    doUnmock(path2) {
      if (typeof path2 !== "string") throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof path2}`);
      _mocker().queueUnmock(path2, getImporter("doUnmock"));
    },
    async importActual(path2) {
      return _mocker().importActual(path2, getImporter("importActual"), _mocker().getMockContext().callstack);
    },
    async importMock(path2) {
      return _mocker().importMock(path2, getImporter("importMock"));
    },
    mockObject(value) {
      return _mocker().mockObject({ value }).value;
    },
    mocked(item, _options = {}) {
      return item;
    },
    isMockFunction(fn2) {
      return isMockFunction2(fn2);
    },
    clearAllMocks() {
      [...mocks].reverse().forEach((spy) => spy.mockClear());
      return utils;
    },
    resetAllMocks() {
      [...mocks].reverse().forEach((spy) => spy.mockReset());
      return utils;
    },
    restoreAllMocks() {
      [...mocks].reverse().forEach((spy) => spy.mockRestore());
      return utils;
    },
    stubGlobal(name, value) {
      if (!_stubsGlobal.has(name)) _stubsGlobal.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
      Object.defineProperty(globalThis, name, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
      });
      return utils;
    },
    stubEnv(name, value) {
      if (!_stubsEnv.has(name)) _stubsEnv.set(name, process.env[name]);
      if (_envBooleans.includes(name)) process.env[name] = value ? "1" : "";
      else if (value === void 0) delete process.env[name];
      else process.env[name] = String(value);
      return utils;
    },
    unstubAllGlobals() {
      _stubsGlobal.forEach((original, name) => {
        if (!original) Reflect.deleteProperty(globalThis, name);
        else Object.defineProperty(globalThis, name, original);
      });
      _stubsGlobal.clear();
      return utils;
    },
    unstubAllEnvs() {
      _stubsEnv.forEach((original, name) => {
        if (original === void 0) delete process.env[name];
        else process.env[name] = original;
      });
      _stubsEnv.clear();
      return utils;
    },
    resetModules() {
      resetModules(workerState.moduleCache);
      return utils;
    },
    async dynamicImportSettled() {
      return waitForImportsToResolve();
    },
    setConfig(config2) {
      if (!_config) _config = { ...workerState.config };
      Object.assign(workerState.config, config2);
    },
    resetConfig() {
      if (_config) Object.assign(workerState.config, _config);
    }
  };
  return utils;
}
var vitest = createVitest();
var vi = vitest;
function _mocker() {
  return typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, { get(_, name) {
    throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(name)}() is forbidden.`);
  } });
}
function getImporter(name) {
  const stackTrace = createSimpleStackTrace({ stackTraceLimit: 5 });
  const stackArray = stackTrace.split("\n");
  const importerStackIndex = stackArray.findIndex((stack2) => {
    return stack2.includes(` at Object.${name}`) || stack2.includes(`${name}@`);
  });
  const stack = parseSingleStack(stackArray[importerStackIndex + 1]);
  return stack?.file || "";
}
var import_expect_type = (0, import_chunk_2ESYSVXG.__toESM)(require_dist(), 1);
var vitestContext = {
  new: function(ctx = {}) {
    const c = ctx;
    beforeEach(() => {
      const originalCwd = process.cwd();
      c.mocked = c.mocked ?? {
        cwd: process.cwd()
      };
      c.tmpDir = import_tempy.default.directory();
      c.fs = import_fs_jetpack.default.cwd(c.tmpDir);
      c.tree = (startFrom = c.tmpDir, indent = "") => {
        function* generateDirectoryTree(children2, indent2 = "") {
          for (const child of children2) {
            if (child.name === "node_modules" || child.name === ".git") {
              continue;
            }
            if (child.type === "dir") {
              yield `${indent2}\u2514\u2500\u2500 ${child.name}/`;
              yield* generateDirectoryTree(child.children, indent2 + "    ");
            } else if (child.type === "symlink") {
              yield `${indent2} -> ${child.relativePath}`;
            } else {
              yield `${indent2}\u2514\u2500\u2500 ${child.name}`;
            }
          }
        }
        const children = c.fs.inspectTree(startFrom, { relativePath: true, symlinks: "report" })?.children || [];
        return `
${[...generateDirectoryTree(children, indent)].join("\n")}
`;
      };
      c.fixture = (name) => {
        c.fs.copy(import_node_path.default.join(originalCwd, "src", "__tests__", "fixtures", name), ".", {
          overwrite: true
        });
        c.fs.symlink(import_node_path.default.join(originalCwd, "..", "client"), import_node_path.default.join(c.fs.cwd(), "node_modules", "@prisma", "client"));
      };
      c.cli = (...input) => {
        return (0, import_chunk_3UEKS5W6.execaNode)(import_node_path.default.join(originalCwd, "../cli/build/index.js"), input, {
          cwd: c.fs.cwd(),
          stdio: "pipe",
          all: true
        });
      };
      c.printDir = (dir, extensions) => {
        const content = c.fs.list(dir) ?? [];
        content.sort((a3, b) => a3.localeCompare(b));
        return content.filter((name) => extensions.includes(import_node_path.default.extname(name))).map((name) => `${name}:

${c.fs.read(import_node_path.default.join(dir, name))}`).join("\n\n");
      };
      process.chdir(c.tmpDir);
    });
    afterEach(() => {
      process.chdir(c.mocked.cwd);
    });
    return factory(ctx);
  }
};
function factory(ctx) {
  return {
    add(contextContributor) {
      const newCtx = contextContributor(ctx);
      return factory(newCtx);
    },
    assemble() {
      return ctx;
    }
  };
}
var vitestConsoleContext = () => (c) => {
  const ctx = c;
  beforeEach(() => {
    ctx.mocked["console.error"] = vi.spyOn(console, "error").mockImplementation(() => {
    });
    ctx.mocked["console.log"] = vi.spyOn(console, "log").mockImplementation(() => {
    });
    ctx.mocked["console.info"] = vi.spyOn(console, "info").mockImplementation(() => {
    });
    ctx.mocked["console.warn"] = vi.spyOn(console, "warn").mockImplementation(() => {
    });
  });
  afterEach(() => {
    ctx.mocked["console.error"].mockRestore();
    ctx.mocked["console.log"].mockRestore();
    ctx.mocked["console.info"].mockRestore();
    ctx.mocked["console.warn"].mockRestore();
  });
  return ctx;
};
var vitestStdoutContext = ({ normalizationRules } = { normalizationRules: [] }) => (c) => {
  const ctx = c;
  const normalize2 = (text, rules) => {
    for (const [pattern, replacement] of rules) {
      text = text.replace(pattern, replacement);
    }
    return text;
  };
  beforeEach(() => {
    ctx.mocked["process.stderr.write"] = vi.spyOn(process.stderr, "write").mockImplementation(() => true);
    ctx.mocked["process.stdout.write"] = vi.spyOn(process.stdout, "write").mockImplementation(() => true);
    ctx.normalizedCapturedStdout = () => normalize2(
      ctx.mocked["process.stdout.write"].mock.calls.map((call2) => call2[0]).join(""),
      normalizationRules
    );
    ctx.normalizedCapturedStderr = () => normalize2(
      ctx.mocked["process.stderr.write"].mock.calls.map((call2) => call2[0]).join(""),
      normalizationRules
    );
    ctx.clearCapturedStdout = () => ctx.mocked["process.stdout.write"].mockClear();
    ctx.clearCapturedStderr = () => ctx.mocked["process.stderr.write"].mockClear();
  });
  afterEach(() => {
    ctx.mocked["process.stderr.write"].mockRestore();
    ctx.mocked["process.stdout.write"].mockRestore();
  });
  return ctx;
};
var vitestProcessExitContext = () => (c) => {
  const ctx = c;
  beforeEach(() => {
    ctx.mocked["process.exit"] = vi.spyOn(process, "exit").mockImplementation((number) => {
      throw new Error("process.exit: " + number);
    });
    ctx.recordedExitCode = () => ctx.mocked["process.exit"].mock.calls[0]?.[0] ?? 0;
  });
  afterEach(() => {
    ctx.mocked["process.exit"].mockRestore();
  });
  return ctx;
};
var processExitContext = vitestProcessExitContext;
/*! Bundled license information:

@vitest/pretty-format/dist/index.js:
  (**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

chai/chai.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addLengthGuard utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - proxify utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getOwnEnumerablePropertySymbols utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   *)
  (*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*! Bundled license information:
  
  deep-eql/index.js:
    (*!
     * deep-eql
     * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     *)
    (*!
     * Check to see if the MemoizeMap has recorded a result of the two operands
     *
     * @param {Mixed} leftHandOperand
     * @param {Mixed} rightHandOperand
     * @param {MemoizeMap} memoizeMap
     * @returns {Boolean|null} result
    *)
    (*!
     * Set the result of the equality into the MemoizeMap
     *
     * @param {Mixed} leftHandOperand
     * @param {Mixed} rightHandOperand
     * @param {MemoizeMap} memoizeMap
     * @param {Boolean} result
    *)
    (*!
     * Primary Export
     *)
    (*!
     * The main logic of the `deepEqual` function.
     *
     * @param {Mixed} leftHandOperand
     * @param {Mixed} rightHandOperand
     * @param {Object} [options] (optional) Additional options
     * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
     * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
        complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
        references to blow the stack.
     * @return {Boolean} equal match
    *)
    (*!
     * Compare two Regular Expressions for equality.
     *
     * @param {RegExp} leftHandOperand
     * @param {RegExp} rightHandOperand
     * @return {Boolean} result
     *)
    (*!
     * Compare two Sets/Maps for equality. Faster than other equality functions.
     *
     * @param {Set} leftHandOperand
     * @param {Set} rightHandOperand
     * @param {Object} [options] (Optional)
     * @return {Boolean} result
     *)
    (*!
     * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
     *
     * @param {Iterable} leftHandOperand
     * @param {Iterable} rightHandOperand
     * @param {Object} [options] (Optional)
     * @return {Boolean} result
     *)
    (*!
     * Simple equality for generator objects such as those returned by generator functions.
     *
     * @param {Iterable} leftHandOperand
     * @param {Iterable} rightHandOperand
     * @param {Object} [options] (Optional)
     * @return {Boolean} result
     *)
    (*!
     * Determine if the given object has an @@iterator function.
     *
     * @param {Object} target
     * @return {Boolean} `true` if the object has an @@iterator function.
     *)
    (*!
     * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
     * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
     *
     * @param {Object} target
     * @returns {Array} an array of entries from the @@iterator function
     *)
    (*!
     * Gets all entries from a Generator. This will consume the generator - which could have side effects.
     *
     * @param {Generator} target
     * @returns {Array} an array of entries from the Generator.
     *)
    (*!
     * Gets all own and inherited enumerable keys from a target.
     *
     * @param {Object} target
     * @returns {Array} an array of own and inherited enumerable keys from the target.
     *)
    (*!
     * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
     * each key. If any value of the given key is not equal, the function will return false (early).
     *
     * @param {Mixed} leftHandOperand
     * @param {Mixed} rightHandOperand
     * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
     * @param {Object} [options] (Optional)
     * @return {Boolean} result
     *)
    (*!
     * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
     * for each enumerable key in the object.
     *
     * @param {Mixed} leftHandOperand
     * @param {Mixed} rightHandOperand
     * @param {Object} [options] (Optional)
     * @return {Boolean} result
     *)
    (*!
     * Returns true if the argument is a primitive.
     *
     * This intentionally returns true for all objects that can be compared by reference,
     * including functions and symbols.
     *
     * @param {Mixed} value
     * @return {Boolean} result
     *)
  *)

@vitest/snapshot/dist/index.js:
  (*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   *)
*/
