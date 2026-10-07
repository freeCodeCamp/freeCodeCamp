"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_FSAAZH62_exports = {};
__export(chunk_FSAAZH62_exports, {
  require_p_map: () => require_p_map
});
module.exports = __toCommonJS(chunk_FSAAZH62_exports);
var import_chunk_QGM4M3NI = require("./chunk-QGM4M3NI.js");
var require_indent_string = (0, import_chunk_QGM4M3NI.__commonJS)({
  "../../node_modules/.pnpm/indent-string@4.0.0/node_modules/indent-string/index.js"(exports, module2) {
    "use strict";
    module2.exports = (string, count = 1, options) => {
      options = {
        indent: " ",
        includeEmptyLines: false,
        ...options
      };
      if (typeof string !== "string") {
        throw new TypeError(
          `Expected \`input\` to be a \`string\`, got \`${typeof string}\``
        );
      }
      if (typeof count !== "number") {
        throw new TypeError(
          `Expected \`count\` to be a \`number\`, got \`${typeof count}\``
        );
      }
      if (typeof options.indent !== "string") {
        throw new TypeError(
          `Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
        );
      }
      if (count === 0) {
        return string;
      }
      const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return string.replace(regex, options.indent.repeat(count));
    };
  }
});
var require_clean_stack = (0, import_chunk_QGM4M3NI.__commonJS)({
  "../../node_modules/.pnpm/clean-stack@2.2.0/node_modules/clean-stack/index.js"(exports, module2) {
    "use strict";
    var os = (0, import_chunk_QGM4M3NI.__require)("os");
    var extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
    var pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
    var homeDir = typeof os.homedir === "undefined" ? "" : os.homedir();
    module2.exports = (stack, options) => {
      options = Object.assign({ pretty: false }, options);
      return stack.replace(/\\/g, "/").split("\n").filter((line) => {
        const pathMatches = line.match(extractPathRegex);
        if (pathMatches === null || !pathMatches[1]) {
          return true;
        }
        const match = pathMatches[1];
        if (match.includes(".app/Contents/Resources/electron.asar") || match.includes(".app/Contents/Resources/default_app.asar")) {
          return false;
        }
        return !pathRegex.test(match);
      }).filter((line) => line.trim() !== "").map((line) => {
        if (options.pretty) {
          return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, "~")));
        }
        return line;
      }).join("\n");
    };
  }
});
var require_aggregate_error = (0, import_chunk_QGM4M3NI.__commonJS)({
  "../../node_modules/.pnpm/aggregate-error@3.1.0/node_modules/aggregate-error/index.js"(exports, module2) {
    "use strict";
    var indentString = require_indent_string();
    var cleanStack = require_clean_stack();
    var cleanInternalStack = (stack) => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
    var AggregateError = class extends Error {
      constructor(errors) {
        if (!Array.isArray(errors)) {
          throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
        }
        errors = [...errors].map((error) => {
          if (error instanceof Error) {
            return error;
          }
          if (error !== null && typeof error === "object") {
            return Object.assign(new Error(error.message), error);
          }
          return new Error(error);
        });
        let message = errors.map((error) => {
          return typeof error.stack === "string" ? cleanInternalStack(cleanStack(error.stack)) : String(error);
        }).join("\n");
        message = "\n" + indentString(message, 4);
        super(message);
        this.name = "AggregateError";
        Object.defineProperty(this, "_errors", { value: errors });
      }
      *[Symbol.iterator]() {
        for (const error of this._errors) {
          yield error;
        }
      }
    };
    module2.exports = AggregateError;
  }
});
var require_p_map = (0, import_chunk_QGM4M3NI.__commonJS)({
  "../../node_modules/.pnpm/p-map@4.0.0/node_modules/p-map/index.js"(exports, module2) {
    "use strict";
    var AggregateError = require_aggregate_error();
    module2.exports = async (iterable, mapper, {
      concurrency = Infinity,
      stopOnError = true
    } = {}) => {
      return new Promise((resolve, reject) => {
        if (typeof mapper !== "function") {
          throw new TypeError("Mapper function is required");
        }
        if (!((Number.isSafeInteger(concurrency) || concurrency === Infinity) && concurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
        }
        const result = [];
        const errors = [];
        const iterator = iterable[Symbol.iterator]();
        let isRejected = false;
        let isIterableDone = false;
        let resolvingCount = 0;
        let currentIndex = 0;
        const next = () => {
          if (isRejected) {
            return;
          }
          const nextItem = iterator.next();
          const index = currentIndex;
          currentIndex++;
          if (nextItem.done) {
            isIterableDone = true;
            if (resolvingCount === 0) {
              if (!stopOnError && errors.length !== 0) {
                reject(new AggregateError(errors));
              } else {
                resolve(result);
              }
            }
            return;
          }
          resolvingCount++;
          (async () => {
            try {
              const element = await nextItem.value;
              result[index] = await mapper(element, index);
              resolvingCount--;
              next();
            } catch (error) {
              if (stopOnError) {
                isRejected = true;
                reject(error);
              } else {
                errors.push(error);
                resolvingCount--;
                next();
              }
            }
          })();
        };
        for (let i = 0; i < concurrency; i++) {
          next();
          if (isIterableDone) {
            break;
          }
        }
      });
    };
  }
});
