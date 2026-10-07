"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcssValueParser = _interopRequireDefault(require("postcss-value-parser"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseNode(atRule, key) {
  // Convert only top-level @import
  if (atRule.parent.type !== "root") {
    return;
  }

  if (atRule.raws && atRule.raws.afterName && atRule.raws.afterName.trim().length > 0) {
    const lastCommentIndex = atRule.raws.afterName.lastIndexOf("/*");
    const matched = atRule.raws.afterName.slice(lastCommentIndex).match(_utils.WEBPACK_IGNORE_COMMENT_REGEXP);

    if (matched && matched[2] === "true") {
      return;
    }
  }

  const prevNode = atRule.prev();

  if (prevNode && prevNode.type === "comment") {
    const matched = prevNode.text.match(_utils.WEBPACK_IGNORE_COMMENT_REGEXP);

    if (matched && matched[2] === "true") {
      return;
    }
  } // Nodes do not exists - `@import url('http://') :root {}`


  if (atRule.nodes) {
    const error = new Error("It looks like you didn't end your @import statement correctly. Child nodes are attached to it.");
    error.node = atRule;
    throw error;
  }

  const {
    nodes: paramsNodes
  } = (0, _postcssValueParser.default)(atRule[key]); // No nodes - `@import ;`
  // Invalid type - `@import foo-bar;`

  if (paramsNodes.length === 0 || paramsNodes[0].type !== "string" && paramsNodes[0].type !== "function") {
    const error = new Error(`Unable to find uri in "${atRule.toString()}"`);
    error.node = atRule;
    throw error;
  }

  let isStringValue;
  let url;

  if (paramsNodes[0].type === "string") {
    isStringValue = true;
    url = paramsNodes[0].value;
  } else {
    // Invalid function - `@import nourl(test.css);`
    if (paramsNodes[0].value.toLowerCase() !== "url") {
      const error = new Error(`Unable to find uri in "${atRule.toString()}"`);
      error.node = atRule;
      throw error;
    }

    isStringValue = paramsNodes[0].nodes.length !== 0 && paramsNodes[0].nodes[0].type === "string";
    url = isStringValue ? paramsNodes[0].nodes[0].value : _postcssValueParser.default.stringify(paramsNodes[0].nodes);
  }

  url = (0, _utils.normalizeUrl)(url, isStringValue);
  const isRequestable = (0, _utils.isUrlRequestable)(url);
  let prefix;

  if (isRequestable) {
    const queryParts = url.split("!");

    if (queryParts.length > 1) {
      url = queryParts.pop();
      prefix = queryParts.join("!");
    }
  } // Empty url - `@import "";` or `@import url();`


  if (url.trim().length === 0) {
    const error = new Error(`Unable to find uri in "${atRule.toString()}"`);
    error.node = atRule;
    throw error;
  }

  const mediaNodes = paramsNodes.slice(1);
  let media;

  if (mediaNodes.length > 0) {
    media = _postcssValueParser.default.stringify(mediaNodes).trim().toLowerCase();
  } // eslint-disable-next-line consistent-return


  return {
    atRule,
    prefix,
    url,
    media,
    isRequestable
  };
}

const plugin = (options = {}) => {
  return {
    postcssPlugin: "postcss-import-parser",

    prepare(result) {
      const parsedAtRules = [];
      return {
        AtRule: {
          import(atRule) {
            let parsedAtRule;

            try {
              parsedAtRule = parseNode(atRule, "params", result);
            } catch (error) {
              result.warn(error.message, {
                node: error.node
              });
            }

            if (!parsedAtRule) {
              return;
            }

            parsedAtRules.push(parsedAtRule);
          }

        },

        async OnceExit() {
          if (parsedAtRules.length === 0) {
            return;
          }

          const resolvedAtRules = await Promise.all(parsedAtRules.map(async parsedAtRule => {
            const {
              atRule,
              isRequestable,
              prefix,
              url,
              media
            } = parsedAtRule;

            if (options.filter) {
              const needKeep = await options.filter(url, media);

              if (!needKeep) {
                return;
              }
            }

            if (isRequestable) {
              const request = (0, _utils.requestify)(url, options.rootContext);
              const {
                resolver,
                context
              } = options;
              const resolvedUrl = await (0, _utils.resolveRequests)(resolver, context, [...new Set([request, url])]);

              if (!resolvedUrl) {
                return;
              }

              atRule.remove(); // eslint-disable-next-line consistent-return

              return {
                url: resolvedUrl,
                media,
                prefix,
                isRequestable
              };
            }

            atRule.remove(); // eslint-disable-next-line consistent-return

            return {
              url,
              media,
              prefix,
              isRequestable
            };
          }));
          const urlToNameMap = new Map();

          for (let index = 0; index <= resolvedAtRules.length - 1; index++) {
            const resolvedAtRule = resolvedAtRules[index];

            if (!resolvedAtRule) {
              // eslint-disable-next-line no-continue
              continue;
            }

            const {
              url,
              isRequestable,
              media
            } = resolvedAtRule;

            if (!isRequestable) {
              options.api.push({
                url,
                media,
                index
              }); // eslint-disable-next-line no-continue

              continue;
            }

            const {
              prefix
            } = resolvedAtRule;
            const newUrl = prefix ? `${prefix}!${url}` : url;
            let importName = urlToNameMap.get(newUrl);

            if (!importName) {
              importName = `___CSS_LOADER_AT_RULE_IMPORT_${urlToNameMap.size}___`;
              urlToNameMap.set(newUrl, importName);
              options.imports.push({
                importName,
                url: options.urlHandler(newUrl),
                index
              });
            }

            options.api.push({
              importName,
              media,
              index
            });
          }
        }

      };
    }

  };
};

plugin.postcss = true;
var _default = plugin;
exports.default = _default;