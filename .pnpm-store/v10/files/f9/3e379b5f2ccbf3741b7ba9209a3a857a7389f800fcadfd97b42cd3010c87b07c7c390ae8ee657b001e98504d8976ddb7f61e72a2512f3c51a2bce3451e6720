"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTemplateBuilder;
var _options = require("./options.js");
var _string = require("./string.js");
var _literal = require("./literal.js");
const NO_PLACEHOLDER = (0, _options.validate)({
  placeholderPattern: false
});
function createTemplateBuilder(formatter, defaultOpts) {
  const templateFnCache = new WeakMap();
  const templateAstCache = new WeakMap();
  const cachedOpts = defaultOpts || (0, _options.validate)(null);
  return Object.assign((tpl, ...args) => {
    if (typeof tpl === "string") {
      if (args.length > 1) throw new Error("Unexpected extra params.");
      return extendedTrace((0, _string.default)(formatter, tpl, (0, _options.merge)(cachedOpts, (0, _options.validate)(args[0]))));
    } else if (Array.isArray(tpl)) {
      let builder = templateFnCache.get(tpl);
      if (!builder) {
        builder = (0, _literal.default)(formatter, tpl, cachedOpts);
        templateFnCache.set(tpl, builder);
      }
      return extendedTrace(builder(args));
    } else if (typeof tpl === "object" && tpl) {
      if (args.length > 0) throw new Error("Unexpected extra params.");
      return createTemplateBuilder(formatter, (0, _options.merge)(cachedOpts, (0, _options.validate)(tpl)));
    }
    throw new Error(`Unexpected template param ${typeof tpl}`);
  }, {
    ast: (tpl, ...args) => {
      if (typeof tpl === "string") {
        if (args.length > 1) throw new Error("Unexpected extra params.");
        return (0, _string.default)(formatter, tpl, (0, _options.merge)((0, _options.merge)(cachedOpts, (0, _options.validate)(args[0])), NO_PLACEHOLDER))();
      } else if (Array.isArray(tpl)) {
        let builder = templateAstCache.get(tpl);
        if (!builder) {
          builder = (0, _literal.default)(formatter, tpl, (0, _options.merge)(cachedOpts, NO_PLACEHOLDER));
          templateAstCache.set(tpl, builder);
        }
        return builder(args)();
      }
      throw new Error(`Unexpected template param ${typeof tpl}`);
    }
  });
}
function extendedTrace(fn) {
  let rootStack = "";
  try {
    throw new Error();
  } catch (error) {
    if (error.stack) {
      rootStack = error.stack.split("\n").slice(3).join("\n");
    }
  }
  return arg => {
    try {
      return fn(arg);
    } catch (err) {
      err.stack += `\n    =============\n${rootStack}`;
      throw err;
    }
  };
}

//# sourceMappingURL=builder.js.map
