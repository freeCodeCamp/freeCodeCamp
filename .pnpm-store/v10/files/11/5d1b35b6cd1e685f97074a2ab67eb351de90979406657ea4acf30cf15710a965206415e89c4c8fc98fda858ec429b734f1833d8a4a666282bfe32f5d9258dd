"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = literalTemplate;
var _options = require("./options.js");
var _parse = require("./parse.js");
var _populate = require("./populate.js");
function literalTemplate(formatter, tpl, opts) {
  const {
    metadata,
    names
  } = buildLiteralData(formatter, tpl, opts);
  return arg => {
    const defaultReplacements = {};
    arg.forEach((replacement, i) => {
      defaultReplacements[names[i]] = replacement;
    });
    return arg => {
      const replacements = (0, _options.normalizeReplacements)(arg);
      if (replacements) {
        Object.keys(replacements).forEach(key => {
          if (hasOwnProperty.call(defaultReplacements, key)) {
            throw new Error("Unexpected replacement overlap.");
          }
        });
      }
      return formatter.unwrap((0, _populate.default)(metadata, replacements ? Object.assign(replacements, defaultReplacements) : defaultReplacements));
    };
  };
}
function buildLiteralData(formatter, tpl, opts) {
  let prefix = "BABEL_TPL$";
  const raw = tpl.join("");
  do {
    prefix = "$$" + prefix;
  } while (raw.includes(prefix));
  const {
    names,
    code
  } = buildTemplateCode(tpl, prefix);
  const metadata = (0, _parse.default)(formatter, formatter.code(code), {
    parser: opts.parser,
    placeholderWhitelist: new Set(names.concat(opts.placeholderWhitelist ? Array.from(opts.placeholderWhitelist) : [])),
    placeholderPattern: opts.placeholderPattern,
    preserveComments: opts.preserveComments,
    syntacticPlaceholders: opts.syntacticPlaceholders
  });
  return {
    metadata,
    names
  };
}
function buildTemplateCode(tpl, prefix) {
  const names = [];
  let code = tpl[0];
  for (let i = 1; i < tpl.length; i++) {
    const value = `${prefix}${i - 1}`;
    names.push(value);
    code += value + tpl[i];
  }
  return {
    names,
    code
  };
}

//# sourceMappingURL=literal.js.map
